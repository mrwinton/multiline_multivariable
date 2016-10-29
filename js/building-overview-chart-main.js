var tags = data.map(function (tagData) {
    return new CreateTag(tagData).call();
});

var firstTag = _.first(tags);

var chart = new BuildingOverviewChart('#chart');

chart.initData(tags, firstTag.id);
//initialize chart
chart.initChart();
//render the chart
chart.render("init");

window.addEventListener('resize', function() { chart.render("change") });

$( "#temperature" ).click(function() {
    chart.renderData(CHART_TYPE.TEMPERATURE);
});

$( "#relative-humidity" ).click(function() {
    chart.renderData(CHART_TYPE.RELATIVE_HUMIDITY);
});

$( "#dew-point" ).click(function() {
    chart.renderData(CHART_TYPE.DEW_POINT);
});

$( "#equilibrium-moisture-content" ).click(function() {
    chart.renderData(CHART_TYPE.EQUILIBRIUM_MOISTURE_CONTENT);
});
