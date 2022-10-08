async function Histogramme(url) {
    let x = await fetch(url);
    let y = await x.json();
    let tabkey = Object.keys(y);
    let tabvalue = [];
    for (i in tabkey) {
        let t = [tabkey[i], y[tabkey[i]]];
        if (
            t[0] == 'cases' ||
            t[0] == 'deaths' ||
            t[0] == 'active' ||
            t[0] == 'recovered'
        ) {
            tabvalue.push(t);
        }
    }
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Factor');
        data.addColumn('number', 'Number');
        data.addRows(tabvalue);

        var options = {
            title: '',
            colors: ["#b8c0ff"],
            backgroundColor: 'transparent',
            legend: 'none',
            bar: { groupWidth: '80%' },
            vAxis: { gridlines: { count: 4 } },
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('bar-Chart')
        );
        chart.draw(data, options);
    }
    window.addEventListener("resize", drawStuff)
}
async function bar(url) {
    let x = await fetch(url);
    let y = await x.json();

    let tabkey = Object.keys(y);
    let tabvalue = [
        ["Element", "Number", { role: "style" }]
    ];
    for (i in tabkey) {
        let t = [tabkey[i], y[tabkey[i]]];


        if (
            t[0] == 'testsPerOneMillion' ||
            t[0] == 'activePerOneMillion' ||
            t[0] == 'casesPerOneMillion'
        ) {
            tabvalue.push(t);

        }

    }
    tabvalue[1].push("#0bceff")
    tabvalue[2].push("#ffd700")
    tabvalue[3].push("#9ebcda")
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(tabvalue);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2
        ]);

        var options = {
            title: "",
            bar: { groupWidth: "80%" },
            legend: { position: "none" },
            backgroundColor: "transparent"
        };
        var chart = new google.visualization.BarChart(document.getElementById("daily"));
        chart.draw(view, options);
    }
    window.addEventListener("resize", drawChart)
}