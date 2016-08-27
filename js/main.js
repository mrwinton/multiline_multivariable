var Chart = (function(window, d3, self) {
  var svg, data, x, y, xAxis, yAxis, dim, chartWrapper, line, tagPaths, margin = {}, width, height;
  var breakPoint = 320;

  var tagTemperatureReadings = [];
  var tagRelativeHumidityReadings = [];
  var tagDewPointReadings = [];
  var tagEquilibriumMoistureContentReadings = [];

  var yTemperature = null;
  var yRelativeHumidity = null;
  var yDewPoint = null;
  var yEquilibriumMoistureContent = null;

  var timeFormat = d3.time.format('%Y-%m-%d %H:%M:%S');

  initData(tags);
  //initialize chart
  initChart();
  //render the chart
  render("init");

  //called once the data is loaded
  function initData(json) {
    data = json;

    var tagLogsArray = data.map(function (tag) {
      return (tag.tagLogs);
    }).reduce(function(a, b) {
      return a.concat(b)
    });

    data.forEach(function(tag) {
      var tagId = tag.id;
      var temperatureValues = [];
      var relativeHumidityValues = [];
      var dewPointValues = [];
      var tagEquilibriumMoistureContentValues = [];

      tag.tagLogs.forEach(function(tagLog) {
        temperatureValues.push({ date: tagLog.readingAt, y: tagLog.temperature });
        relativeHumidityValues.push({ date: tagLog.readingAt, y: tagLog.relativeHumidity });
        dewPointValues.push({ date: tagLog.readingAt, y: tagLog.dewPoint });
        tagEquilibriumMoistureContentValues.push({ date: tagLog.readingAt, y: tagLog.equilibriumMoistureContent });
      });

      tagTemperatureReadings.push({ id: tag.id, values: temperatureValues });
      tagRelativeHumidityReadings.push({ id: tag.id, values: relativeHumidityValues });
      tagDewPointReadings.push({ id: tag.id, values: dewPointValues });
      tagEquilibriumMoistureContentReadings.push({ id: tag.id, values: tagEquilibriumMoistureContentValues });
    });

    //initialize scales
    var xExtent = d3.extent(tagLogsArray, function(d,i) { return timeFormat.parse(d.readingAt) });
    // var xExtent = d3.extent(tagLogsArray, function(d,i) { return new Date(d.readingAt) });
    x = d3.time.scale().domain(xExtent);

    var yTemperatureExtent = d3.extent(tagLogsArray, function(d,i) { return d.temperature });
    var yRelativeHumidityExtent = d3.extent(tagLogsArray, function(d,i) { return d.relativeHumidity });
    var yDewPointExtent = d3.extent(tagLogsArray, function(d,i) { return d.dewPoint });
    var yEquilibriumMoistureContentExtent = d3.extent(tagLogsArray, function(d,i) { return d.equilibriumMoistureContent });

    yTemperature = d3.scale.linear().domain(yTemperatureExtent);
    yRelativeHumidity = d3.scale.linear().domain(yRelativeHumidityExtent);
    yDewPoint = d3.scale.linear().domain(yDewPointExtent);
    yEquilibriumMoistureContent = d3.scale.linear().domain(yEquilibriumMoistureContentExtent);
  }

  function initChart(){
    //initialize axis
    xAxis = d3.svg.axis().orient('bottom');
    yAxis = d3.svg.axis().orient('left');

    //initialize y scale as temperature
    y = yTemperature;

    //the path generator for the line chart
    line = d3.svg.line()
      .x(function(d) { return x(timeFormat.parse(d.date)) })
      .y(function(d) { return y(d.y) });

    //initialize svg with temperature readings
    svg = d3.select('#chart').append('svg');
    chartWrapper = svg.append('g');
    tagPaths = chartWrapper.selectAll(".tag")
        .data(tagTemperatureReadings)
        .enter().append("g")
        .attr("class", "tag")
        .append("path");

    chartWrapper.append('g').classed('x axis', true);
    chartWrapper.append('g').classed('y axis', true);
  }

  function render(event) {
    //get dimensions based on window size
    var newWidth = $('#chart').width();
    updateDimensions(newWidth);

    //update x and y scales to new dimensions
    x.range([0, width]);
    y.range([height, 0]);

    //update svg elements to new dimensions
    svg.attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom);
    chartWrapper.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    if(newWidth < breakPoint) {
      xAxis.ticks(d3.time.month, 2)
    }
    else {
      xAxis.ticks(d3.time.month, 1)
    }

    var xAxisElement = svg.select('.x.axis');
    var yAxisElement = svg.select('.y.axis');
    var localTagPaths = tagPaths.attr("class", "line");

    if(event == null){
      xAxisElement = xAxisElement.transition().duration(1000)
      yAxisElement = yAxisElement.transition().duration(1000)
      localTagPaths = localTagPaths.transition().duration(1000)
    }

    //update the axis and line
    xAxis.scale(x);
    yAxis.scale(y).orient(newWidth < breakPoint ? 'right' : 'left');

    xAxisElement
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    yAxisElement
      .call(yAxis);

    localTagPaths
      .attr("d", function(d) { return line(d.values); });
  }

  function updateDimensions(newWidth) {
    margin.top = 20;
    margin.right = newWidth < breakPoint ? 0 : 50;
    margin.left = newWidth < breakPoint ? 0 : 50;
    margin.bottom = 20;

    width = newWidth - margin.left - margin.right;
    height = .55 * width;
  }

  function renderData(dataType) {
    if(dataType === "temperature"){
      // update tagPaths
      tagPaths.data(tagTemperatureReadings);
      // update yScale
      y = yTemperature;
    } else if (dataType === "relativeHumidity"){
      // update tagPaths
      tagPaths.data(tagRelativeHumidityReadings);
      // update yScale
      y = yRelativeHumidity;
    } else if (dataType === "dewPoint") {
      // update tagPaths
      tagPaths.data(tagDewPointReadings);
      // update yScale
      y = yDewPoint;
    } else if (dataType === "equilibriumMoistureContent") {
      // update tagPaths
      tagPaths.data(tagEquilibriumMoistureContentReadings);
      // update yScale
      y = yEquilibriumMoistureContent;
    } else {
      console.log(dataType + " not recognised.");
      return;
    }
    render();
    tagPaths.exit().remove();
  }

  function renderFrom(date) {
    //TODO
  }

  return {
    render: render,
    renderData: function(dataType) {
        return renderData(dataType);
    }
  }
})(window, d3, this);

window.addEventListener('resize', Chart.render);

$( "#temperature" ).click(function() {
  Chart.renderData("temperature");
});

$( "#relative-humidity" ).click(function() {
  Chart.renderData("relativeHumidity");
});

$( "#dew-point" ).click(function() {
  Chart.renderData("dewPoint");
});

$( "#equilibrium-moisture-content" ).click(function() {
  Chart.renderData("equilibriumMoistureContent");
});
