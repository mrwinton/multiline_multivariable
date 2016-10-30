function BuildingOverviewChart(element) {
  //root element
  this.element = element;

  //data
  this.data = null;
  this.tags = [];

  //base graph
  this.container = null;
  this.svg = null;
  this.x = null;
  this.y = {
    temperature: null,
    relativeHumidity: null,
    dewPoint: null,
    equilibriumMoistureContent: null
  };
  this.xAxis = null;
  this.yAxis = null;
  this.chart = null;
  this.area = null;
  this.clip = null;
  this.line = null;
  this.tagPaths = null;
  this.margin = {};
  this.width = null;
  this.height = null;

  //viewport graph
  this.viewport = null;
  this.navWidth = null;
  this.navHeight = null;
  this.navChart = null;
  this.navX = null;
  this.navY = {
    temperature: null,
    relativeHumidity: null,
    dewPoint: null,
    equilibriumMoistureContent: null
  };
  this.navXAxis = null;
  this.navLine = null;
  this.navSvg = null;
  this.navChart = null;
  this.navTagPaths = null;
  this.navViewport = null;

  //difference chart
  this.difference = null;
  this.differenceContainer = null;
  this.clipBelow = null;
  this.clipAbove = null;
  this.differenceAbove = null;
  this.differenceBelow = null;

  //hover elements
  this.target = null;
  this.locator = null;
  this.tooltip = null;
  this.tooltipKey = null;
  this.tooltipValue = null;
  this.touchScale = null;

  //time formats
  this.dateTimeFormat = d3.time.format('%Y-%m-%d %H:%M:%S');
  this.niceDateTimeFormat = d3.time.format('%a %e, %b %_I:%M%p');

  //selected fields
  this.selectedType = null;
  this.selectedTagId = null;
  this.selectedTagReadings = [];
  this.selectedY = null;
  this.selectedNavY = null;

  //misc
  this.breakPoint = 320;
  this.timeout = null;
}

BuildingOverviewChart.prototype.initData = function (data, selectedTagId) {
  this.data = data;
  var self = this;

  this.data.forEach(function (tag) {
    var readings = tag.tagLogs.map(function (tagLog) {
      var readingDateTime = self.dateTimeFormat.parse(tagLog.readingAt);

      return  {
        dateTime: readingDateTime,
        niceDateTime: self.niceDateTimeFormat(readingDateTime),
        temperature: tagLog.temperature,
        relativeHumidity: tagLog.relativeHumidity,
        dewPoint: tagLog.dewPoint,
        equilibriumMoistureContent: tagLog.equilibriumMoistureContent
      };
    });

    self.tags.push({id: tag.id, readings: readings});
  });

  var extentKeys = ["dateTime", "temperature", "relativeHumidity", "dewPoint", "equilibriumMoistureContent"];
  var extents = D3TagHelper.getExtents(this.tags, extentKeys);

  var temperatureAndDewPointExtent = d3.extent(extents["temperature"].concat(extents["dewPoint"]));

  //initialize scales
  this.x = d3.time.scale().domain(extents["dateTime"]);
  this.navX = d3.time.scale().domain(extents["dateTime"]);
  this.touchScale = d3.time.scale().domain(extents["dateTime"]);

  this.y.temperature = d3.scale.linear().domain(extents["temperature"]);
  this.y.relativeHumidity = d3.scale.linear().domain(extents["relativeHumidity"]);
  this.y.dewPoint = d3.scale.linear().domain(temperatureAndDewPointExtent);
  this.y.equilibriumMoistureContent = d3.scale.linear().domain(extents["equilibriumMoistureContent"]);

  this.navY.temperature = d3.scale.linear().domain(extents["temperature"]);
  this.navY.relativeHumidity = d3.scale.linear().domain(extents["relativeHumidity"]);
  this.navY.dewPoint = d3.scale.linear().domain(temperatureAndDewPointExtent);
  this.navY.equilibriumMoistureContent = d3.scale.linear().domain(extents["equilibriumMoistureContent"]);

  this._selectTag(selectedTagId);
};

BuildingOverviewChart.prototype._updateSelectedChartType = function(chartType) {
  if (chartType === CHART_TYPE.TEMPERATURE) {
    this.selectedY = "temperature";
  } else if (chartType === CHART_TYPE.RELATIVE_HUMIDITY) {
    this.selectedY = "relativeHumidity";
  } else if (chartType === CHART_TYPE.DEW_POINT) {
    this.selectedY = "dewPoint";
  } else if (chartType === CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT) {
    this.selectedY = "equilibriumMoistureContent";
  } else {
    console.log(chartType + " not recognised.");
    return;
  }

  this.selectedType = chartType;
};

BuildingOverviewChart.prototype.initChart = function (chartType) {
  var self = this;
  this._updateSelectedChartType(chartType);

  //initialize axis
  this.xAxis = d3.svg.axis().orient('bottom');
  this.yAxis = d3.svg.axis().orient('left');
  this.navXAxis = d3.svg.axis().orient('bottom');

  //the path generator for the line chart
  this.line = d3.svg.line()
    .x(function (d) {
      return self.x(d.dateTime);
    })
    .y(function (d) {
      return self.y[self.selectedY](d[self.selectedY]);
    });

  this.navLine = d3.svg.line()
    .x(function (d) {
      return self.navX(d.dateTime);
    })
    .y(function (d) {
      return self.navY[self.selectedY](d[self.selectedY]);
    });

  this.difference = d3.svg.area()
    .x(function (d) {
      return self.x(d.dateTime);
    })
    .y(function (d) {
      return self.y[self.selectedY](d[self.selectedY]);
    });

  //initialize svg with temperature readings
  this.container = d3.select(this.element).style('position', 'relative');
  this.svg = this.container.append('svg');
  this.chart = this.svg.append('g');
  this.area = this.chart.append('g').attr('clip-path', 'url(#plotAreaClip)');
  this.clip = this.area.append('clipPath')
    .attr('id', 'plotAreaClip')
    .append('rect');

  this.chart.append('g').classed('x axis', true).style("pointer-events", "none");
  this.chart.append('g').classed('y axis', true).style("pointer-events", "none");

  this.tooltip = this.container.append('div')
    .attr("class", "reading-tooltip");

  this.tooltipKey = this.tooltip.append('div')
    .attr("class", "key");

  this.tooltipValue = this.tooltip.append('div')
    .attr("class", "value");

  this.tagPaths = this.area.selectAll(".tag")
    .data(this.tags)
    .enter().append("g")
    .attr("class", "tag")
    .append("path")
    .attr("class", "line")
    .style("pointer-events", "none");

  this.differenceContainer = this.area.selectAll(".difference-container")
    .data([this.selectedTagReadings])
    .enter().append("g")
    .attr("class", "difference-container");

  this.clipBelow = this.differenceContainer.append("clipPath")
    .attr("id", "clip-below")
    .append("path");

  this.clipAbove = this.differenceContainer.append("clipPath")
    .attr("id", "clip-above")
    .append("path");

  this.differenceAbove = this.differenceContainer.append("path")
    .attr("class", "difference above")
    .attr("clip-path", "url(#clip-above)")
    .style("pointer-events", "none");

  this.differenceBelow = this.differenceContainer.append("path")
    .attr("class", "difference below")
    .attr("clip-path", "url(#clip-below)")
    .style("pointer-events", "none");

  this.target = this.area.append('rect')
    .style("fill", "none")
    .style("pointer-events", "all");

  this.locator = this.area.append('circle')
    .style('opacity', 0.0)
    .attr('r', 3)
    .attr("class", "locator")
    .style("pointer-events", "none");

  this.navSvg = this.container.append('svg')
    .classed('navigator', true);

  this.navChart = this.navSvg.append('g');
  this.navChart.append('g').classed('x axis', true);

  this.navTagPaths = this.navChart.selectAll(".tag")
    .data(this.tags)
    .enter().append("g")
    .attr("class", "tag")
    .append("path")
    .attr("class", "line");

  this.viewport = d3.svg.brush()
    .x(this.navX)
    .on("brush", function () {
      self._focus();
    });

  this.navViewport = this.navChart.append("g")
    .attr("class", "viewport");
};

BuildingOverviewChart.prototype.render = function (event) {
  var self = this;
  //get dimensions based on window size
  var newWidth = $(this.element).width();
  this._updateDimensions(newWidth);

  //update x and y scales to new dimensions
  this.x.range([0, this.width]);
  this.y[this.selectedY].range([this.height, 0]);
  this.navX.range([0, this.navWidth]);
  this.navY[this.selectedY].range([this.navHeight, 0]);

  //update the touch scale
  this.touchScale.range([0, this.selectedTagReadings.length - 1]).clamp(true);

  //update svg elements to new dimensions
  this.svg.attr('width', this.width + this.margin.left + this.margin.right)
    .attr('height', this.height + this.margin.top + this.margin.bottom);
  this.chart.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  this.target.attr({width: this.width, height: this.height});
  this.clip.attr('transform', 'translate(' + 0 + ',' + -5 + ')').attr({
    width: this.width + 5,
    height: this.height + 10
  });

  this.target.on("mouseout", function () {
    self._hideTooltip();
  })
    .on("mousemove", function () {
      self._moveLocator();
    })
    .on("mouseenter", function () {
      self._showTooltip();
    });

  this.navSvg.attr('width', this.navWidth + this.margin.left + this.margin.right)
    .attr('height', this.navHeight + this.margin.top + this.margin.bottom);
  this.navChart.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  this.navViewport.call(this.viewport).selectAll("rect").attr("height", this.navHeight);

  this.xAxis.ticks(5);
  this.yAxis.tickFormat(function (d) {
    return d + self.selectedType.suffix;
  });
  this.navXAxis.ticks(5);

  var transitionElement = this.svg.transition();
  var navTransitionElement = this.navSvg.transition();

  var xAxisElement = transitionElement.select('.x.axis');
  var yAxisElement = transitionElement.select('.y.axis');
  var localTagPaths = transitionElement.selectAll(".tag path");
  var navXAxisElement = navTransitionElement.select('.x.axis');
  var localNavTagPaths = navTransitionElement.selectAll(".tag path");

  if (event == null) {
    xAxisElement = xAxisElement.duration(1000);
    yAxisElement = yAxisElement.duration(1000);
    localTagPaths = localTagPaths.duration(1000);
    navXAxisElement = navXAxisElement.duration(1000);
    localNavTagPaths = localNavTagPaths.duration(1000);
  }

  //update the axis and line
  this.xAxis.scale(this.x);
  this.yAxis.scale(this.y[this.selectedY]).orient(newWidth < this.breakPoint ? 'right' : 'left').innerTickSize(-this.width).outerTickSize(0);
  this.navXAxis.scale(this.navX);

  xAxisElement.attr('transform', 'translate(0,' + this.height + ')')
    .call(this.xAxis);

  yAxisElement.call(this.yAxis);

  navXAxisElement.attr('transform', 'translate(0,' + this.navHeight + ')')
    .call(this.navXAxis);

  if (this.selectedType == CHART_TYPE.DEW_POINT) {
    if (event == null) {
      transitionElement.select("#clip-below path").duration(1000).attr("d", this.difference.y0(this.height));
      transitionElement.select("#clip-above path").duration(1000).attr("d", this.difference.y0(0));
      transitionElement.select(".difference.above").duration(1000).style('opacity', 0.6).attr("d", this.difference.y0(function (d) {
        return self.y[self.selectedY](d.dewPoint);
      }));
      transitionElement.select(".difference.below").duration(1000).style('opacity', 0.6).attr("d", this.difference);
    } else {
      this.clipBelow.attr("d", this.difference.y0(this.height));
      this.clipAbove.attr("d", this.difference.y0(0));
      this.differenceAbove.attr("d", this.difference.y0(function (d) {
        return self.y[self.selectedY](d.dewPoint);
      }));
      this.differenceBelow.attr("d", this.difference);
    }
  } else {
    transitionElement.select(".difference.above").duration(1000).style('opacity', 0);
    transitionElement.select(".difference.below").duration(1000).style('opacity', 0);

  }

  localTagPaths.attr("d", function (d) {
    return self.line(d.readings);
  }).attr("class", function (d) {
    return d.id === self.selectedTagId ? "line active" : "line";
  });
  localNavTagPaths.attr("d", function (d) {
    return self.navLine(d.readings);
  }).attr("class", function (d) {
    return d.id === self.selectedTagId ? "line active" : "line";
  });
};

BuildingOverviewChart.prototype.renderData = function (chartType) {
  this._updateSelectedChartType(chartType);
  this.render();
};

BuildingOverviewChart.prototype._updateDimensions = function (newWidth) {
  this.margin.top = 20;
  this.margin.right = newWidth < this.breakPoint ? 0 : 50;
  this.margin.left = newWidth < this.breakPoint ? 0 : 50;
  this.margin.bottom = 20;

  this.width = newWidth - this.margin.left - this.margin.right;
  this.height = .55 * this.width;

  this.navWidth = this.width;
  this.navHeight = 100 - this.margin.top - this.margin.bottom;
};

BuildingOverviewChart.prototype._selectTag = function (tagId) {
  this.selectedTagId = tagId;
  this.tags.forEach(function (tag) {
    if (tagId === tag.id) {
      this.selectedTagReadings = tag.readings;
    }
  }, this);
};

BuildingOverviewChart.prototype._focus = function () {
  this.x.domain(this.viewport.empty() ? this.navX.domain() : this.viewport.extent());
  this._debounceRender();
};

BuildingOverviewChart.prototype._debounceRender = function () {
  var self = this;
  this._debounce(function () {
    self.render();
  }, 150);
};

BuildingOverviewChart.prototype._debounce = function (fn, waitPeriod) {
  clearTimeout(this.timeout);
  this.timeout = setTimeout(fn, waitPeriod);
};

BuildingOverviewChart.prototype._moveLocator = function () {
  //coords of mouse move event relative to the container div
  var coords = d3.mouse(this.area.node());
  //value on the x scale corresponding to this location
  var xVal = this.x.invert(coords[0]);
  var index = Math.floor(this.touchScale(xVal));
  var reading = this._getClosestReading(xVal, index);

  //update locator coords
  this.locator.attr({
    cx: this.x(reading.dateTime),
    cy: this.y[this.selectedY](reading[this.selectedY])
  });

  //update tooltip content
  this.tooltipKey.html(reading.niceDateTime);
  if (this.selectedType == CHART_TYPE.DEW_POINT) {
    this.tooltipValue.html((Math.round ((reading[this.selectedY] - reading.dewPoint) * 10) / 10)  + this.selectedType.suffix + " difference");
  } else {
    this.tooltipValue.html(reading[this.selectedY] + this.selectedType.suffix);
  }

  //get dimensions of tooltip element
  var dim = this.tooltip.node().getBoundingClientRect();

  //update the position of the tooltip
  var tooltipTop = this.y[this.selectedY](reading[this.selectedY]), //TODO follow mouse? coords[1] + dim.height - 5,
  tooltipLeft = coords[0] + (dim.width / 2);

  //if right edge of tooltip goes beyond chart container, force it to move to the left of the mouse cursor
  if (tooltipLeft + (dim.width / 2) > this.width) {
    tooltipLeft = coords[0] - (dim.width / 2);
  }

  this.tooltip.transition().duration(120).style({
    top: tooltipTop + 'px',
    left: tooltipLeft + 'px'
  });
};

BuildingOverviewChart.prototype._getClosestReading = function (date, index) {
  var reading = null;
  var bestDifference = -Math.abs((new Date(0, 0, 0)).valueOf());
  var gettingCloser = true;

  while (gettingCloser) {
    var currentReading = this.selectedTagReadings[index];
    var currentDifference = date - currentReading.dateTime;

    if (currentDifference < 0 && currentDifference > bestDifference) {
      index -= 1;
      bestDifference = currentDifference;
      reading = currentReading;
    } else {
      gettingCloser = false;
      if (reading == null) {
        reading = currentReading;
      }
    }
  }

  return reading;
};

BuildingOverviewChart.prototype._hideTooltip = function () {
  this.tooltip.transition().duration(500).style('opacity', 0.0).attr('class', 'reading-tooltip');
  this.locator.transition().duration(500).style('opacity', 0.0);
};

BuildingOverviewChart.prototype._showTooltip = function () {
  this.tooltip.attr('class', 'reading-tooltip tooltipAnimated tooltipFadeIn');
  this.locator.transition().duration(1000).style('display', 'block').style('opacity', 1);
};
