    anychart.onDocumentReady(async function() {


        anychart.data.loadJsonFile(
            'https://corona.lmao.ninja/v2/countries?yesterday&sort',
            function(data) {

                var geoData = [];
                for (i = 0; i < data.length; i++) {
                    geoData.push({ "name": data[i].country, "id": data[i].countryInfo.iso2, "flag": data[i].countryInfo.flag, "cases": data[i].cases, "deaths": data[i].deaths, "recovered": data[i].recovered });
                }


                var map = anychart.map();

                map.background().fill("#FFF 1");
                map.background().stroke("#1f1450");
                map
                    .title()
                    .enabled(true)
                    .useHtml(true)
                    .padding([15, 0, 0, 0])
                    .text(
                        '<br><p style="color:#fff; font-size:20px">Last updates by countrys</p><br/>'

                    );

                map.geoData('anychart.maps.world');
                map.interactivity().selectionMode('');
                map.padding(-5);

                var dataSet = anychart.data.set(geoData);
                var updateData = dataSet.mapAs({ value: 'cases' });

                var series = map.choropleth(updateData);

                series.labels(false);


                series
                    .hovered()
                    .fill('#fffab3')
                    .stroke(anychart.color.darken('#fffab3'));

                series
                    .selected()
                    .fill('#c2185b')
                    .stroke(anychart.color.darken('#c2185b'));

                series
                    .tooltip()
                    .useHtml(true)
                    .format(function() {
                        return (
                            '<span style="color: #d9d9d9"><img style="height:70px; width:100%" ; src="' +
                            this.getData('flag').toLocaleString() + '"/></span><br/>' +
                            '<span style="color: #d9d9d9">Cases</span>: ' +
                            parseInt(this.value).toLocaleString() + '<br/>' +

                            '<span style="color: #d9d9d9">Deaths</span>: ' +
                            parseInt(this.getData('deaths')).toLocaleString() +
                            '<br/>' +
                            '<span style="color: #d9d9d9">Recovered</span>: ' +
                            parseInt(this.getData('recovered')).toLocaleString() + "<br/>"


                        );
                    });

                var scale = anychart.scales.ordinalColor([
                    { less: 5000 },
                    { from: 5000, to: 10000 },
                    { from: 10000, to: 50000 },
                    { from: 50000, to: 100000 },
                    { from: 100000, to: 500000 },
                    { from: 500000, to: 1000000 },
                    { from: 1000000, to: 5000000 },
                    { from: 5000000, to: 10000000 },
                    { from: 10000000, to: 50000000 },
                    { greater: 50000000 }
                ]);
                scale.colors([

                   "#EAE6FE",
"#c5ccff",
"#110266",
"#7F69FC",
"#6A50FB",
"#2605E1",
"#1D04AF",
"#190396",
"#15037D",
"#8c99ff"

                ]);

                var colorRange = map.colorRange();
                colorRange.enabled(true).padding([0, 0, 20, 0]);
                colorRange
                    .ticks()
                    .enabled(true)
                    .stroke('3 #ffffff')
                    .position('center')
                    .length(10);
                colorRange.colorLineSize(5);
                colorRange.marker().size(7);
                colorRange
                    .labels()
                    .fontSize(11)
                    .padding(3, 0, 0, 0)
                    .format(function() {
                        var range = this.colorRange;
                        var name;
                        if (isFinite(range.start + range.end)) {
                            name = range.start + ' - ' + range.end;
                        } else if (isFinite(range.start)) {
                            name = 'More than ' + range.start;
                        } else {
                            name = 'Less than ' + range.end;
                        }
                        return name;
                    });

                series.colorScale(scale);


                var zoomController = anychart.ui.zoom();
                zoomController.render(map);


                map.container('map');

                map.draw();
            }
        );
    });