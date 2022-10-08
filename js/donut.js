async function donut(url) {

    let x = await fetch(url);
    let y = await x.json();
    let cases = y.cases;
    let recovered = y.recovered;
    let deaths = y.deaths;
    let active = y.active;

    var dataCorona = [
        ['Factor', 'Number per cases'],
        ['recovered', recovered],
        ['cases', cases],
        ['active', active],
        ['deaths', deaths],

    ];
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(dataCorona);

        var options = {
            title: '',
            colors: ["#24fa41", "#0bceff", "#ffd700", "#f03ac2"],
            backgroundColor: "transparent",
            is3D: true,
            legend: { position: 'left', alignment: 'center' }

        };

        var chart = new google.visualization.PieChart(document.getElementById('donut'));
        chart.draw(data, options);
    }
    window.addEventListener("resize", drawChart)

}
Histogramme("https://disease.sh/v3/covid-19/countries/" + countrySearch)
bar("https://disease.sh/v3/covid-19/countries/" + countrySearch)
donut("https://disease.sh/v3/covid-19/countries/" + countrySearch)