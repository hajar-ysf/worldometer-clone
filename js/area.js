anychart.onDocumentReady(async function() {
    const data = await fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort");
    const y = await data.json();
    console.log(y);
    var tc = 0;
    var td = 0;
    for (i in y) {
        tc += y[i].cases;
        td += y[i].deaths;
    }

    // create data set on our data
    var dataSet = anychart.data.set([
        [y[0].continent, y[0].cases / tc, y[0].deaths / td],
        [y[1].continent, y[1].cases / tc, y[1].deaths / td],
        [y[2].continent, y[2].cases / tc, y[2].deaths / td],
        [y[3].continent, y[3].cases / tc, y[3].deaths / td],
        [y[4].continent, y[4].cases / tc, y[4].deaths / td],
        [y[5].continent, y[5].cases / tc, y[5].deaths / td]
    ]);

    // map data for the first series, take x from the zero area and value from the first area of data set
    var firstSeriesData = dataSet.mapAs({
        x: 0,
        value: 1
    });
    console.log(dataSet.mapAs({
        x: 0,
        value: 1
    }));
    // map data for the second series, take x from the zero area and value from the second area of data set
    var secondSeriesData = dataSet.mapAs({
        x: 0,
        value: 2
    });




    // create area chart
    var chart = anychart.area();

    // turn on chart animation
    chart.animation(true);

    // turn on the crosshair
    var crosshair = chart.crosshair();
    crosshair.enabled(true).yLabel(false).yStroke('#fff').xStroke('#fff');

    // set chart title text settings
    chart.title(

    );

    // set interactivity and tooltips settings
    chart.interactivity().hoverMode('by-x');
    chart.tooltip().displayMode('union');

    // set Y axis title
    chart.yAxis(0).title('');

    // set custom formatter for Y axis labels
    chart.yAxis(0).labels().format('{%Value}%.');

    chart.yAxis(0).labels().fontSize('10');


    chart.tooltip().format('{%SeriesName}: {%Value}%');

    // helper function to setup label settings for all series
    var setupSeries = function(series, name) {
        series.name(name);
        series.markers().zIndex(100);
        series
            .hovered()
            .markers()
            .enabled(true)
            .type('circle')
            .size(5)
            .stroke('1.5 #000');
    };

    // temp variable to store series instance
    var series;

    // create first series with mapped data
    series = chart.area(firstSeriesData);

    setupSeries(series, '% Cases');
    series.color("#0bceff")
    // create second series with mapped data
    series = chart.area(secondSeriesData);
    setupSeries(series, '% Deaths');
    series.color('#f03ac2');
    // turn on legend
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 0, 0]);

    // enable grids
    chart.yGrid().stroke('#fff');
    chart.xGrid().stroke('#fff');

    // set container id for the chart
    chart.container('areachart');

    // initiate chart drawing
    chart.draw();
});