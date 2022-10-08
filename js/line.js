async function line(url) {
    let x = await fetch(url);
    let y = await x.json();
    let linee = []
    let j = 1;
    for (i in y.timeline.recovered) {
        let linetemp = []

        linetemp.push(j);

        linetemp.push(y.timeline.recovered[i])
        linetemp.push(y.timeline.deaths[i])
        linetemp.push(y.timeline.cases[i])

        linee.push(linetemp);
        j++;
    }
    console.log(linee)

    google.charts.load('current', { 'packages': ['line'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Day');
        data.addColumn('number', 'Recovered');
        data.addColumn('number', 'Deaths');

        data.addColumn('number', 'Cases');

        data.addRows(linee);

        var options = {
            titleTextStyle: {
    color: '#fff'
},
            chartArea: { 'backgroundColor': 'transparent' },
            backgroundColor: 'transparent',
            colors: ["#50e59a", "#f03ac2", "#000"],
            chart: {
                title: 'Number Of Recovered,Deaths And Cases In 30 Days Ago',

            },
            hAxis: {
                textStyle:{color: '#FFF'},
                gridlines: {color: '#1E4D6B'}},
            vAxis:{
               textStyle:{color: '#FFF'}
            }
        };

        var chart = new google.charts.Line(document.getElementById('line-Chart'));

        chart.draw(data, google.charts.Line.convertOptions(options));

    }
    window.addEventListener("resize", drawChart)
}