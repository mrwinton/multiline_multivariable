var firstSelectedTagId = "fed5f4b7-0f2e-4b24-b236-a04b9fa0c35d"

var CHART_TYPE = {
  TEMPERATURE: {
    suffix: "°C"
  },
  RELATIVE_HUMIDITY: {
    suffix: "%"
  },
  DEW_POINT: {
    suffix: "°C"
  },
  EQUILIBRIUM_MOISTURE_CONTENT: {
    suffix: "°C"
  },
};

var Chart = (function(window, d3, tagData, selectedTagId, self) {
  var data = tagData;

  var svg, x, y, xAxis, yAxis, dim, chart, area, clip, line, tagPaths, margin = {}, width, height;
  var navWidth, navHeight, navChart, navX, navY, navXAxis, navLine, navSvg, navChart, navTagPaths, navViewport;

  var tagTemperatureReadings = [];
  var tagRelativeHumidityReadings = [];
  var tagDewPointReadings = [];
  var tagEquilibriumMoistureContentReadings = [];

  var yTemperature, yRelativeHumidity, yDewPoint, yEquilibriumMoistureContent;
  var navYTemperature, navYRelativeHumidity, navYDewPoint, navYEquilibriumMoistureContent;

  var difference, differenceContainer, clipBelow, clipAbove, differenceAbove, differenceBelow;

  var timeFormat = d3.time.format('%Y-%m-%d %H:%M:%S');
  var breakPoint = 320;
  var viewport;
  var selectedType = CHART_TYPE.TEMPERATURE
  var selectedTagId, selectedTagDewPointData;

  initData();
  //initialize chart
  initChart();
  //render the chart
  render("init");

  //called once the data is loaded
  function initData() {
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
        dewPointValues.push({ date: tagLog.readingAt, y: tagLog.temperature, dewPoint: tagLog.dewPoint });
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

    var yTemperatureAndDewPointExtent = [
      Math.min(yTemperatureExtent[0], yDewPointExtent[0]),
      Math.max(yTemperatureExtent[1], yDewPointExtent[1]),
    ];

    yTemperature = d3.scale.linear().domain(yTemperatureExtent);
    yRelativeHumidity = d3.scale.linear().domain(yRelativeHumidityExtent);
    yDewPoint = d3.scale.linear().domain(yTemperatureAndDewPointExtent);
    yEquilibriumMoistureContent = d3.scale.linear().domain(yEquilibriumMoistureContentExtent);

    navYTemperature = d3.scale.linear().domain(yTemperatureExtent);
    navYRelativeHumidity = d3.scale.linear().domain(yRelativeHumidityExtent);
    navYDewPoint = d3.scale.linear().domain(yTemperatureAndDewPointExtent);
    navYEquilibriumMoistureContent = d3.scale.linear().domain(yEquilibriumMoistureContentExtent);

    selectTag(selectedTagId);
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
      .interpolate("basis")
      .x(function(d) { return x(timeFormat.parse(d.date)) })
      .y(function(d) { return y(d.y) });

    navLine = d3.svg.line()
      .interpolate("basis")
      .x(function (d) { return navX(timeFormat.parse(d.date)) })
      .y(function (d) { return navY(d.y) });

    difference = d3.svg.area()
      .interpolate("basis")
      .x(function(d) { return x(timeFormat.parse(d.date)) })
      .y1(function(d) { return y(d.y) });

    differenceLine = d3.svg.line()
      .x(function(d) { return x(timeFormat.parse(d.date)) })
      .y(function(d) { return y(d.dewPoint) });

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
        .append("path")
        .attr("class", "line");

    differenceContainer = area.selectAll(".difference-container")
        .data([selectedTagDewPointData])
        .enter().append("g")
        .attr("class", "difference-container");

    clipBelow = differenceContainer.append("clipPath")
      .attr("id", "clip-below")
      .append("path");

    clipAbove = differenceContainer.append("clipPath")
      .attr("id", "clip-above")
      .append("path");

    differenceAbove = differenceContainer.append("path")
      .attr("class", "difference above")
      .attr("clip-path", "url(#clip-above)");

    differenceBelow = differenceContainer.append("path")
      .attr("class", "difference below")
      .attr("clip-path", "url(#clip-below)");

    navSvg = d3.select('#chart').append('svg')
      .classed('navigator', true);
    navChart = navSvg.append('g');
    navChart.append('g').classed('x axis', true);

    navTagPaths = navChart.selectAll(".tag")
      .data(tagTemperatureReadings)
      .enter().append("g")
      .attr("class", "tag")
      .append("path")
      .attr("class", "line");

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
    yAxis.tickFormat(function(d) { return d + selectedType.suffix; });
    navXAxis.ticks(5);

    var transitionElement = svg.transition();
    var navTransitionElement = navSvg.transition();

    var xAxisElement = transitionElement.select('.x.axis');
    var yAxisElement = transitionElement.select('.y.axis');
    var localTagPaths = transitionElement.selectAll(".tag path");
    var navXAxisElement = navTransitionElement.select('.x.axis');
    var localNavTagPaths = navTransitionElement.selectAll(".tag path");

    if(event == null){
      xAxisElement = xAxisElement.duration(1000);
      yAxisElement = yAxisElement.duration(1000);
      localTagPaths = localTagPaths.duration(1000);
      navXAxisElement = navXAxisElement.duration(1000);
      localNavTagPaths = localNavTagPaths.duration(1000);
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

    if(selectedType == CHART_TYPE.DEW_POINT){
      differenceAbove.style('opacity', 0.6);
      differenceBelow.style('opacity', 0.6);

      if(event == null){
        transitionElement.select("#clip-below path").duration(1000).attr("d", difference.y0(height));
        transitionElement.select("#clip-above path").duration(1000).attr("d", difference.y0(0));
        transitionElement.select(".difference.above").duration(1000).attr("d", difference.y0(function(d) { return y(d.dewPoint); }));
        transitionElement.select(".difference.below").duration(1000).attr("d", difference);
      } else {
        clipBelow.attr("d", difference.y0(height));
        clipAbove.attr("d", difference.y0(0));
        differenceAbove.attr("d", difference.y0(function(d) { return y(d.dewPoint); }));
        differenceBelow.attr("d", difference);
      }
    } else {
      differenceAbove.style('opacity', 0);
      differenceBelow.style('opacity', 0);
    }

    localTagPaths.attr("d", function(d) { return line(d.values); })
      .attr("class", function(d) { return d.id === selectedTagId ? "line active" : "line"; });
    localNavTagPaths.attr("d", function(d) { return navLine(d.values); })
      .attr("class", function(d) { return d.id === selectedTagId ? "line active" : "line"; });
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

  function setSelectedTagDewPointData(tagId){
    tagDewPointReadings.forEach(function(tag) {
      if(tagId === tag.id){
        selectedTagDewPointData = tag.values;
      }
    });
  }

  function renderData(dataType) {
    if(dataType === CHART_TYPE.TEMPERATURE){
      // update tagPaths
      tagPaths.data(tagTemperatureReadings);
      navTagPaths.data(tagTemperatureReadings);
      // update yScale
      y = yTemperature;
      navY = navYTemperature;
      selectedType = CHART_TYPE.TEMPERATURE;
    } else if (dataType === CHART_TYPE.RELATIVE_HUMIDITY){
      // update tagPaths
      tagPaths.data(tagRelativeHumidityReadings);
      navTagPaths.data(tagRelativeHumidityReadings);
      // update yScale
      y = yRelativeHumidity;
      navY = navYRelativeHumidity;
      selectedType = CHART_TYPE.RELATIVE_HUMIDITY;
    } else if (dataType === CHART_TYPE.DEW_POINT) {
      // update tagPaths
      tagPaths.data(tagDewPointReadings);
      navTagPaths.data(tagDewPointReadings);
      // update yScale
      y = yDewPoint;
      navY = navYDewPoint;
      selectedType = CHART_TYPE.DEW_POINT;
    } else if (dataType === CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT) {
      // update tagPaths
      tagPaths.data(tagEquilibriumMoistureContentReadings);
      navTagPaths.data(tagEquilibriumMoistureContentReadings);
      // update yScale
      y = yEquilibriumMoistureContent;
      navY = navYEquilibriumMoistureContent;
      selectedType = CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT;
    } else {
      console.log(dataType + " not recognised.");
      return;
    }
    render();
    // tagPaths.exit().remove();
  }

  function selectTag(tagId) {
    selectedTagId = tagId;
    setSelectedTagDewPointData(selectedTagId);
  }

  return {
    render: render,
    renderData: function(dataType) {
      return renderData(dataType);
    },
    selectTag: function(tagId){
      selectTag(tagId);
      render();
    }
  }
})(window, d3, tags, firstSelectedTagId, this);

window.addEventListener('resize', Chart.render);

$( "#temperature" ).click(function() {
  Chart.renderData(CHART_TYPE.TEMPERATURE);
});

$( "#relative-humidity" ).click(function() {
  Chart.renderData(CHART_TYPE.RELATIVE_HUMIDITY);
});

$( "#dew-point" ).click(function() {
  Chart.renderData(CHART_TYPE.DEW_POINT);
});

$( "#equilibrium-moisture-content" ).click(function() {
  Chart.renderData(CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT);
});
