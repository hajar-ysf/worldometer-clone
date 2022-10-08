/* boxes total info*/
let totalCases = document.getElementsByClassName("cases")[0];
let totalDeaths = document.getElementsByClassName("deaths")[0];
let totalRecovered = document.getElementsByClassName("recovered")[0];
let totalTests = document.getElementsByClassName("tests")[0];

async function totalInfo(url, cases, deaths, recovered, tests) {
    let x = await fetch(url);
    let totalInfoObjet = await x.json();
    cases.innerHTML = totalInfoObjet.cases
    tests.innerHTML = totalInfoObjet.tests
    recovered.innerHTML = totalInfoObjet.recovered
    deaths.innerHTML = totalInfoObjet.deaths
}
totalInfo("https://disease.sh/v3/covid-19/all", totalCases, totalDeaths, totalRecovered, totalTests)
    /* modals info*/

/* animation loader*/
$(function() {
    // $(".rr,footer,#header").css("visibility", "hidden");
    // $('html, body').css({
    //     overflow: 'hidden',
    //     height: '100%'
    // });
    // $("div").eq(0).load(function(){

    // })
    // $("div").eq(0).unload(function() {

    //     $(".rr,footer,#header").css("visibility", "visible");
    //     $("div.box").remove()
    //     $('html, body').css({
    //         overflow: 'visible',
    //         height: 'auto'
    //     });


    // });

});

/* graphe by country */
let countryButton = document.getElementById("countriesButton");
let lastMonthButton = document.getElementById("lastMonthButton")
let searchByCountry = document.getElementById("enter_country");
let searchButton = document.getElementById("search");
let countrySearch = "usa";

countryButton.addEventListener("click", function() {
    document.getElementById("Countries").style.display = "block";
    document.getElementById("Lastm").style.display = "none";
    lastMonthButton.style.backgroundColor = "#7862f9";
    this.style.backgroundColor = "#4d58ae";
    searchButton.addEventListener("click", function() {
        if (searchByCountry.value.length == 0) {
            countrySearch = "usa"

        } else {
            countrySearch = searchByCountry.value
        }
        Histogramme("https://disease.sh/v3/covid-19/countries/" + countrySearch)
        bar("https://disease.sh/v3/covid-19/countries/" + countrySearch)
        donut("https://disease.sh/v3/covid-19/countries/" + countrySearch)
    });
})
lastMonthButton.addEventListener("click", function() {
    document.getElementById("Countries").style.display = "none";
    document.getElementById("Lastm").style.display = "block";
    countryButton.style.backgroundColor = "#7862f9";
    this.style.backgroundColor = "#4d58ae";
    line("https://disease.sh/v3/covid-19/historical/" + countrySearch + "?lastdays=30");
    searchButton.addEventListener("click", function() {

        if (searchByCountry.value.length == 0) {
            countrySearch = "usa"

        } else {
            countrySearch = searchByCountry.value
        }
        line("https://disease.sh/v3/covid-19/historical/" + countrySearch + "?lastdays=30");
    });
})


countryButton.click()