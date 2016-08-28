var Chart = (function(window, d3, self) {
  var svg, data, x, y, xAxis, yAxis, dim, chart, area, clip, line, tagPaths, margin = {}, width, height;
  var breakPoint = 320;

  var navWidth, navHeight, navChart, navX, navY, navXAxis, navLine, navSvg, navChart, navTagPaths, navViewport;

  var tagTemperatureReadings = [];
  var tagRelativeHumidityReadings = [];
  var tagDewPointReadings = [];
  var tagEquilibriumMoistureContentReadings = [];

  var yTemperature, yRelativeHumidity, yDewPoint, yEquilibriumMoistureContent;
  var navYTemperature, navYRelativeHumidity, navYDewPoint, navYEquilibriumMoistureContent;

  var timeFormat = d3.time.format('%Y-%m-%d %H:%M:%S');

  var viewport;

  var selectedType = "temperature"

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
    x = d3.time.scale().domain(xExtent);
    navX = d3.time.scale().domain(xExtent);

    var yTemperatureExtent = d3.extent(tagLogsArray, function(d,i) { return d.temperature });
    var yRelativeHumidityExtent = d3.extent(tagLogsArray, function(d,i) { return d.relativeHumidity });
    var yDewPointExtent = d3.extent(tagLogsArray, function(d,i) { return d.dewPoint });
    var yEquilibriumMoistureContentExtent = d3.extent(tagLogsArray, function(d,i) { return d.equilibriumMoistureContent });

    yTemperature = d3.scale.linear().domain(yTemperatureExtent);
    yRelativeHumidity = d3.scale.linear().domain(yRelativeHumidityExtent);
    yDewPoint = d3.scale.linear().domain(yDewPointExtent);
    yEquilibriumMoistureContent = d3.scale.linear().domain(yEquilibriumMoistureContentExtent);

    navYTemperature = d3.scale.linear().domain(yTemperatureExtent);
    navYRelativeHumidity = d3.scale.linear().domain(yRelativeHumidityExtent);
    navYDewPoint = d3.scale.linear().domain(yDewPointExtent);
    navYEquilibriumMoistureContent = d3.scale.linear().domain(yEquilibriumMoistureContentExtent);
  }

  function initChart(){
    //initialize axis
    xAxis = d3.svg.axis().orient('bottom');
    yAxis = d3.svg.axis().orient('left');
    navXAxis = d3.svg.axis().orient('bottom');

    //initialize y scale as temperature
    y = yTemperature;
    navY = navYTemperature;

    //the path generator for the line chart
    line = d3.svg.line()
      .x(function(d) { return x(timeFormat.parse(d.date)) })
      .y(function(d) { return y(d.y) });

    navLine = d3.svg.line()
      .x(function (d) { return navX(timeFormat.parse(d.date)) })
      .y(function (d) { return navY(d.y) });

    //initialize svg with temperature readings
    svg = d3.select('#chart').append('svg');
    chart = svg.append('g');
    area = chart.append('g').attr('clip-path', 'url(#plotAreaClip)');
    clip = area.append('clipPath')
        .attr('id', 'plotAreaClip')
        .append('rect');

    chart.append('g').classed('x axis', true);
    chart.append('g').classed('y axis', true);

    tagPaths = area.selectAll(".tag")
        .data(tagTemperatureReadings)
        .enter().append("g")
        .attr("class", "tag")
        .append("path");

    navSvg = d3.select('#chart').append('svg')
      .classed('navigator', true);
    navChart = navSvg.append('g');
    navChart.append('g').classed('x axis', true);

    navTagPaths = navChart.selectAll(".tag")
      .data(tagTemperatureReadings)
      .enter().append("g")
      .attr("class", "tag")
      .append("path");

    viewport = d3.svg.brush()
      .x(navX)
      .on("brush", function () {
          x.domain(viewport.empty() ? navX.domain() : viewport.extent());
          render();
      });

    navViewport = navChart.append("g")
      .attr("class", "viewport");
  }

  function render(event) {
    //get dimensions based on window size
    var newWidth = $('#chart').width();
    updateDimensions(newWidth);

    //update x and y scales to new dimensions
    x.range([0, width]);
    y.range([height, 0]);
    navX.range([0, navWidth]);
    navY.range([navHeight, 0]);

    //update svg elements to new dimensions
    svg.attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);
    chart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    clip.attr({ width: width, height: height });

    navSvg.attr('width', navWidth + margin.left + margin.right)
      .attr('height', navHeight + margin.top + margin.bottom);
    navChart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    navViewport.call(viewport).selectAll("rect").attr("height", navHeight);

    xAxis.ticks(5);
    navXAxis.ticks(5);

    var xAxisElement = svg.select('.x.axis');
    var yAxisElement = svg.select('.y.axis');
    var localTagPaths = tagPaths.attr("class", "line");
    var navXAxisElement = navSvg.select('.x.axis');
    var localNavTagPaths = navTagPaths.attr("class", "line");

    if(event == null){
      xAxisElement = xAxisElement.transition().duration(1000);
      yAxisElement = yAxisElement.transition().duration(1000);
      localTagPaths = localTagPaths.transition().duration(1000);
      navXAxisElement = navXAxisElement.transition().duration(1000);
      localNavTagPaths = localNavTagPaths.transition().duration(1000);
    }

    //update the axis and line
    xAxis.scale(x);
    yAxis.scale(y).orient(newWidth < breakPoint ? 'right' : 'left').innerTickSize(-width).outerTickSize(0);
    navXAxis.scale(navX);

    xAxisElement.attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    yAxisElement.call(yAxis);

    navXAxisElement.attr('transform', 'translate(0,' + navHeight + ')')
      .call(navXAxis);

    localTagPaths.attr("d", function(d) { return line(d.values); });
    localNavTagPaths.attr("d", function(d) { return navLine(d.values); });
  }

  function updateDimensions(newWidth) {
    margin.top = 20;
    margin.right = newWidth < breakPoint ? 0 : 50;
    margin.left = newWidth < breakPoint ? 0 : 50;
    margin.bottom = 20;

    width = newWidth - margin.left - margin.right;
    height = .55 * width;

    navWidth = width;
    navHeight = 100 - margin.top - margin.bottom;
  }

  function renderData(dataType) {
    if(dataType === "temperature"){
      // update tagPaths
      tagPaths.data(tagTemperatureReadings);
      navTagPaths.data(tagTemperatureReadings);
      // update yScale
      y = yTemperature;
      navY = navYTemperature;
      selectedType = "temperature"
    } else if (dataType === "relativeHumidity"){
      // update tagPaths
      tagPaths.data(tagRelativeHumidityReadings);
      navTagPaths.data(tagRelativeHumidityReadings);
      // update yScale
      y = yRelativeHumidity;
      navY = navYRelativeHumidity;
      selectedType = "relativeHumidity"
    } else if (dataType === "dewPoint") {
      // update tagPaths
      tagPaths.data(tagDewPointReadings);
      navTagPaths.data(tagDewPointReadings);
      // update yScale
      y = yDewPoint;
      navY = navYDewPoint;
      selectedType = "dewPoint"
    } else if (dataType === "equilibriumMoistureContent") {
      // update tagPaths
      tagPaths.data(tagEquilibriumMoistureContentReadings);
      navTagPaths.data(tagEquilibriumMoistureContentReadings);
      // update yScale
      y = yEquilibriumMoistureContent;
      navY = navYEquilibriumMoistureContent;
      selectedType = "equilibriumMoistureContent"
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
