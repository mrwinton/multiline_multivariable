var chart = new OverviewChart('#chart');

chart.initData(tags, "fed5f4b7-0f2e-4b24-b236-a04b9fa0c35d");
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
