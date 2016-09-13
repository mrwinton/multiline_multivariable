function BuildingOverviewChart(element) {
    //root element
    this.element = element;

    //data
    this.data = null;
    this.tagTemperatureReadings = [];
    this.tagRelativeHumidityReadings = [];
    this.tagDewPointReadings = [];
    this.tagEquilibriumMoistureContentReadings = [];

    //base graph
    this.container = null;
    this.svg = null;
    this.x = null;
    this.y = null;
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
    this.yTemperature = null;
    this.yRelativeHumidity = null;
    this.yDewPoint = null;
    this.yEquilibriumMoistureContent = null;

    //viewport graph
    this.viewport = null;
    this.navWidth = null;
    this.navHeight = null;
    this.navChart = null;
    this.navX = null;
    this.navY = null;
    this.navXAxis = null;
    this.navLine = null;
    this.navSvg = null;
    this.navChart = null;
    this.navTagPaths = null;
    this.navViewport = null;
    this.navYTemperature = null;
    this.navYRelativeHumidity = null;
    this.navYDewPoint = null;
    this.navYEquilibriumMoistureContent = null;

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
    this.timeFormat = d3.time.format('%Y-%m-%d %H:%M:%S');
    this.niceTimeFormat = d3.time.format('%a %e, %b %_I:%M%p');

    //selected fields
    this.selectedType = null;
    this.selectedTagId = null;
    this.selectedTagData = {
        TEMPERATURE: [],
        RELATIVE_HUMIDITY: [],
        DEW_POINT: [],
        EQUILIBRIUM_MOISTURE_CONTENT: []
    };

    //misc
    this.breakPoint = 320;
    this.timeout = null;
}

BuildingOverviewChart.prototype.initData = function (data, selectedTagId) {
    var self = this;
    this.data = data;

    var tagLogsArray = this.data.map(function (tag) {
        return (tag.tagLogs);
    }).reduce(function (a, b) {
        return a.concat(b)
    });

    this.data.forEach(function (tag) {
        var temperatureValues = [];
        var relativeHumidityValues = [];
        var dewPointValues = [];
        var tagEquilibriumMoistureContentValues = [];

        tag.tagLogs.forEach(function (tagLog) {
            temperatureValues.push({date: tagLog.readingAt, y: tagLog.temperature});
            relativeHumidityValues.push({date: tagLog.readingAt, y: tagLog.relativeHumidity});
            dewPointValues.push({date: tagLog.readingAt, y: tagLog.temperature, dewPoint: tagLog.dewPoint});
            tagEquilibriumMoistureContentValues.push({date: tagLog.readingAt, y: tagLog.equilibriumMoistureContent});
        });

        self.tagTemperatureReadings.push({id: tag.id, values: temperatureValues});
        self.tagRelativeHumidityReadings.push({id: tag.id, values: relativeHumidityValues});
        self.tagDewPointReadings.push({id: tag.id, values: dewPointValues});
        self.tagEquilibriumMoistureContentReadings.push({id: tag.id, values: tagEquilibriumMoistureContentValues});
    });

    //initialize scales
    var xExtent = d3.extent(tagLogsArray, function (d) {
        return self.timeFormat.parse(d.readingAt)
    });
    this.x = d3.time.scale().domain(xExtent);
    this.navX = d3.time.scale().domain(xExtent);
    this.touchScale = d3.time.scale().domain(xExtent);

    var yTemperatureExtent = d3.extent(tagLogsArray, function (d) {
        return d.temperature
    });
    var yRelativeHumidityExtent = d3.extent(tagLogsArray, function (d) {
        return d.relativeHumidity
    });
    var yDewPointExtent = d3.extent(tagLogsArray, function (d) {
        return d.dewPoint
    });
    var yEquilibriumMoistureContentExtent = d3.extent(tagLogsArray, function (d) {
        return d.equilibriumMoistureContent
    });

    var yTemperatureAndDewPointExtent = [
        Math.min(yTemperatureExtent[0], yDewPointExtent[0]),
        Math.max(yTemperatureExtent[1], yDewPointExtent[1])
    ];

    this.yTemperature = d3.scale.linear().domain(yTemperatureExtent);
    this.yRelativeHumidity = d3.scale.linear().domain(yRelativeHumidityExtent);
    this.yDewPoint = d3.scale.linear().domain(yTemperatureAndDewPointExtent);
    this.yEquilibriumMoistureContent = d3.scale.linear().domain(yEquilibriumMoistureContentExtent);

    this.navYTemperature = d3.scale.linear().domain(yTemperatureExtent);
    this.navYRelativeHumidity = d3.scale.linear().domain(yRelativeHumidityExtent);
    this.navYDewPoint = d3.scale.linear().domain(yTemperatureAndDewPointExtent);
    this.navYEquilibriumMoistureContent = d3.scale.linear().domain(yEquilibriumMoistureContentExtent);

    this._selectTag(selectedTagId);
};

BuildingOverviewChart.prototype.initChart = function () {
    var self = this;
    //initialize axis
    this.xAxis = d3.svg.axis().orient('bottom');
    this.yAxis = d3.svg.axis().orient('left');
    this.navXAxis = d3.svg.axis().orient('bottom');

    //initialize y scale as temperature
    this.y = this.yTemperature;
    this.navY = this.navYTemperature;
    this.selectedType = CHART_TYPE.TEMPERATURE;

    //the path generator for the line chart
    this.line = d3.svg.line()
        .x(function (d) {
            return self.x(self.timeFormat.parse(d.date))
        })
        .y(function (d) {
            return self.y(d.y)
        });

    this.navLine = d3.svg.line()
        .x(function (d) {
            return self.navX(self.timeFormat.parse(d.date))
        })
        .y(function (d) {
            return self.navY(d.y)
        });

    this.difference = d3.svg.area()
        .x(function (d) {
            return self.x(self.timeFormat.parse(d.date))
        })
        .y1(function (d) {
            return self.y(d.y)
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
        .data(this.tagTemperatureReadings)
        .enter().append("g")
        .attr("class", "tag")
        .append("path")
        .attr("class", "line")
        .style("pointer-events", "none");

    this.differenceContainer = this.area.selectAll(".difference-container")
        .data([this.selectedTagData.DEW_POINT])
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
        .data(this.tagTemperatureReadings)
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
    this.y.range([this.height, 0]);
    this.navX.range([0, this.navWidth]);
    this.navY.range([this.navHeight, 0]);

    //update the touch scale
    this.touchScale.range([0, this._getSelectedTagData().length - 1]).clamp(true);

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
    this.yAxis.scale(this.y).orient(newWidth < this.breakPoint ? 'right' : 'left').innerTickSize(-this.width).outerTickSize(0);
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
                return self.y(d.dewPoint);
            }));
            transitionElement.select(".difference.below").duration(1000).style('opacity', 0.6).attr("d", this.difference);
        } else {
            this.clipBelow.attr("d", this.difference.y0(this.height));
            this.clipAbove.attr("d", this.difference.y0(0));
            this.differenceAbove.attr("d", this.difference.y0(function (d) {
                return self.y(d.dewPoint);
            }));
            this.differenceBelow.attr("d", this.difference);
        }
    } else {
        transitionElement.select(".difference.above").duration(1000).style('opacity', 0);
        transitionElement.select(".difference.below").duration(1000).style('opacity', 0);

    }

    localTagPaths.attr("d", function (d) {
        return self.line(d.values);
    }).attr("class", function (d) {
        return d.id === self.selectedTagId ? "line active" : "line";
    });
    localNavTagPaths.attr("d", function (d) {
        return self.navLine(d.values);
    }).attr("class", function (d) {
        return d.id === self.selectedTagId ? "line active" : "line";
    });
};

BuildingOverviewChart.prototype.renderData = function (dataType) {
    if (dataType === CHART_TYPE.TEMPERATURE) {
        //update tagPaths
        this.tagPaths.data(this.tagTemperatureReadings);
        this.navTagPaths.data(this.tagTemperatureReadings);
        //update yScale
        this.y = this.yTemperature;
        this.navY = this.navYTemperature;
        this.selectedType = CHART_TYPE.TEMPERATURE;
    } else if (dataType === CHART_TYPE.RELATIVE_HUMIDITY) {
        //update tagPaths
        this.tagPaths.data(this.tagRelativeHumidityReadings);
        this.navTagPaths.data(this.tagRelativeHumidityReadings);
        //update yScale
        this.y = this.yRelativeHumidity;
        this.navY = this.navYRelativeHumidity;
        this.selectedType = CHART_TYPE.RELATIVE_HUMIDITY;
    } else if (dataType === CHART_TYPE.DEW_POINT) {
        //update tagPaths
        this.tagPaths.data(this.tagDewPointReadings);
        this.navTagPaths.data(this.tagDewPointReadings);
        //update difference
        this.differenceContainer.data(this.selectedTagData.DEW_POINT);
        //update yScale
        this.y = this.yDewPoint;
        this.navY = this.navYDewPoint;
        this.selectedType = CHART_TYPE.DEW_POINT;
    } else if (dataType === CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT) {
        //update tagPaths
        this.tagPaths.data(this.tagEquilibriumMoistureContentReadings);
        this.navTagPaths.data(this.tagEquilibriumMoistureContentReadings);
        //update yScale
        this.y = this.yEquilibriumMoistureContent;
        this.navY = this.navYEquilibriumMoistureContent;
        this.selectedType = CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT;
    } else {
        console.log(dataType + " not recognised.");
        return;
    }

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
    [
        {TEMPERATURE: this.tagTemperatureReadings},
        {RELATIVE_HUMIDITY: this.tagRelativeHumidityReadings},
        {DEW_POINT: this.tagDewPointReadings},
        {EQUILIBRIUM_MOISTURE_CONTENT: this.tagEquilibriumMoistureContentReadings}
    ].forEach(function (entry) {
        var dataType = Object.keys(entry)[0];
        this._setSelectedTagData(tagId, dataType, entry[dataType]);
    }, this);
};

BuildingOverviewChart.prototype._setSelectedTagData = function (tagId, dataType, tagData) {
    tagData.forEach(function (tag) {
        if (tagId === tag.id) {
            this.selectedTagData[dataType] = tag.values;
        }
    }, this);
};

BuildingOverviewChart.prototype._getSelectedTagData = function () {
    if (this.selectedType === CHART_TYPE.TEMPERATURE) {
        return this.selectedTagData.TEMPERATURE
    } else if (this.selectedType === CHART_TYPE.RELATIVE_HUMIDITY) {
        return this.selectedTagData.RELATIVE_HUMIDITY
    } else if (this.selectedType === CHART_TYPE.DEW_POINT) {
        return this.selectedTagData.DEW_POINT
    } else if (this.selectedType === CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT) {
        return this.selectedTagData.EQUILIBRIUM_MOISTURE_CONTENT
    }
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
        cx: this.x(this.timeFormat.parse(reading.date)),
        cy: this.y(reading.y)
    });

    //update tooltip content
    var date = this.timeFormat.parse(reading.date);
    this.tooltipKey.html(this.niceTimeFormat(date));
    if (this.selectedType == CHART_TYPE.DEW_POINT) {
      this.tooltipValue.html((Math.round ((reading.y - reading.dewPoint) * 10) / 10)  + this.selectedType.suffix + " difference");
    } else {
      this.tooltipValue.html(reading.y + this.selectedType.suffix);
    }

    //get dimensions of tooltip element
    var dim = this.tooltip.node().getBoundingClientRect();

    //update the position of the tooltip
    var tooltipTop = this.y(reading.y), //TODO follow mouse? coords[1] + dim.height - 5,
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
        var currentReading = this._getSelectedTagData()[index];
        var currentDifference = date - this.timeFormat.parse(currentReading.date);

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
