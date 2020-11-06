// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdEM = document.getElementById("chart-container-election-markets");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdEM.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-election-markets");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdEM, {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1fE3UOytjr4UhSCV9MoK7Ns8RIRZr0TuKfqnLtzKLxJc'
        },
        // for bar charts only
        // plotOptions: {
        //     series: {
        //         groupPadding: 0.1,
        //         clip: false
        //     } 
        // },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            y: -10,
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            dateTimeLabelFormats: {
                day: '%b. %e',
            },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            min: -6,
            max: 6
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 2,
            valueSuffix: '%'
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}