jQuery(document).ready(function() {
    'use strict';
    require.config({
        paths: {
            echarts: "../assets/echarts"
        }
    }), require(["echarts", "echarts/chart/bar", "echarts/chart/chord", "echarts/chart/eventRiver", "echarts/chart/force", "echarts/chart/funnel", "echarts/chart/gauge", "echarts/chart/heatmap", "echarts/chart/k", "echarts/chart/line", "echarts/chart/map", "echarts/chart/pie", "echarts/chart/radar", "echarts/chart/scatter", "echarts/chart/tree", "echarts/chart/treemap", "echarts/chart/venn", "echarts/chart/wordCloud"], function(a) {
        var b = a.init(document.getElementById("echarts_bar"));
        b.setOption({
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Cost", "Expenses"]
            },
            toolbox: {
                show: !0,
                orient: "vertical",
                feature: {
                    mark: {
                        show: !0
                    },
                    dataView: {
                        show: !0,
                        readOnly: !1
                    },
                    magicType: {
                        show: !0,
                        type: ["line", "bar"]
                    },
                    restore: {
                        show: !0
                    },
                    saveAsImage: {
                        show: !0
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }],
            yAxis: [{
                type: "value",
                splitArea: {
                    show: !0
                }
            }],
            series: [{
                name: "Cost",
                type: "bar",
                data: [56, 14.9, 57, 2.69, 95, 26.7, 25.6, 102.2, 32.6, 20, 6.4, 3.3]
            }, {
                name: "Expenses",
                type: "bar",
                data: [45.6, 10.9, 59, 2.4, 78.7, 30.7, 35.6, 92.2, 48.7, 18.8, 6, 2.3]
            }]
        });
        var c = a.init(document.getElementById("echarts_line"));
        c.setOption({
            title: {
                text: "Weekly Weather",
                subtext: ""
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["High", "Low"]
            },
            toolbox: {
                show: !0,
                orient: "vertical",
                feature: {
                    mark: {
                        show: !0
                    },
                    dataView: {
                        show: !0,
                        readOnly: !1
                    },
                    magicType: {
                        show: !0,
                        type: ["line", "bar"]
                    },
                    restore: {
                        show: !0
                    },
                    saveAsImage: {
                        show: !0
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            }],
            yAxis: [{
                type: "value",
                axisLabel: {
                    formatter: "{value} °C"
                }
            }],
            series: [{
                name: "High",
                type: "line",
                data: [12, 10, 13, 15, 11, 12, 10],
                markPoint: {
                    data: [{
                        type: "max",
                        name: "Max"
                    }, {
                        type: "min",
                        name: "Min"
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Mean"
                    }]
                }
            }, {
                name: "Low",
                type: "line",
                data: [1, -2, 1, 4, 2, 3, 0],
                markPoint: {
                    data: [{
                        name: "Lowest",
                        value: -2,
                        xAxis: 1,
                        yAxis: -1.5
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Mean"
                    }]
                }
            }]
        });
        var d = a.init(document.getElementById("echarts_scatter"));
        d.setOption({
            title: {
                text: "Male and female height and weight distribution"
            },
            tooltip: {
                trigger: "axis",
                showDelay: 0,
                formatter: function(a) {
                    return a.value.length > 1 ? a.seriesName + " :<br/>" + a.value[0] + "cm " + a.value[1] + "kg " : a.seriesName + " :<br/>" + a.name + " : " + a.value + "kg "
                },
                axisPointer: {
                    show: !0,
                    type: "cross",
                    lineStyle: {
                        type: "dashed",
                        width: 1
                    }
                }
            },
            legend: {
                data: ["Female", "Male"]
            },
            toolbox: {
                show: !0,
                orient: "vertical",
                feature: {
                    mark: {
                        show: !0
                    },
                    dataZoom: {
                        show: !0
                    },
                    dataView: {
                        show: !0,
                        readOnly: !1
                    },
                    restore: {
                        show: !0
                    },
                    saveAsImage: {
                        show: !0
                    }
                }
            },
            xAxis: [{
                type: "value",
                scale: !0,
                axisLabel: {
                    formatter: "{value} cm"
                }
            }],
            yAxis: [{
                type: "value",
                scale: !0,
                axisLabel: {
                    formatter: "{value} kg"
                }
            }],
            series: [{
                name: "Female",
                type: "scatter",
                data: [
                    [161.2, 51.6],
                    [167.5, 59],
                    [159.5, 49.2],
                    [157, 63],
                    [155.8, 53.6],
                    [170, 59],
                    [159.1, 47.6],
                    [166, 69.8],
                    [176.2, 66.8],
                    [160.2, 75.2],
                    [172.5, 55.2],
                    [170.9, 54.2],
                    [172.9, 62.5],
                    [153.4, 42],
                    [160, 50],
                    [147.2, 49.8],
                    [168.2, 49.2],
                    [175, 73.2],
                    [157, 47.8],
                    [167.6, 68.8],
                    [159.5, 50.6],
                    [175, 82.5],
                    [166.8, 57.2],
                    [176.5, 87.8],
                    [170.2, 72.8],
                    [174, 54.5],
                    [173, 59.8],
                    [179.9, 67.3],
                    [170.5, 67.8],
                    [160, 47],
                    [154.4, 46.2],
                    [162, 55],
                    [176.5, 83],
                    [160, 54.4],
                    [152, 45.8],
                    [162.1, 53.6],
                    [170, 73.2],
                    [160.2, 52.1],
                    [161.3, 67.9],
                    [166.4, 56.6],
                    [168.9, 62.3],
                    [163.8, 58.5],
                    [167.6, 54.5],
                    [160, 50.2],
                    [161.3, 60.3],
                    [167.6, 58.3],
                    [165.1, 56.2],
                    [160, 50.2],
                    [170, 72.9],
                    [157.5, 59.8],
                    [167.6, 61],
                    [160.7, 69.1],
                    [163.2, 55.9],
                    [152.4, 46.5],
                    [157.5, 54.3],
                    [168.3, 54.8],
                    [180.3, 60.7],
                    [165.5, 60],
                    [165, 62],
                    [164.5, 60.3],
                    [156, 52.7],
                    [160, 74.3],
                    [163, 62],
                    [165.7, 73.1],
                    [161, 80],
                    [162, 54.7],
                    [166, 53.2],
                    [174, 75.7],
                    [172.7, 61.1],
                    [167.6, 55.7],
                    [151.1, 48.7],
                    [164.5, 52.3],
                    [163.5, 50],
                    [152, 59.3],
                    [169, 62.5],
                    [164, 55.7],
                    [161.2, 54.8],
                    [155, 45.9],
                    [170, 70.6],
                    [176.2, 67.2],
                    [170, 69.4],
                    [162.5, 58.2],
                    [170.3, 64.8],
                    [164.1, 71.6],
                    [169.5, 52.8],
                    [163.2, 59.8],
                    [154.5, 49],
                    [159.8, 50],
                    [173.2, 69.2],
                    [170, 55.9],
                    [161.4, 63.4],
                    [169, 58.2],
                    [166.2, 58.6],
                    [159.4, 45.7],
                    [162.5, 52.2],
                    [159, 48.6],
                    [162.8, 57.8],
                    [159, 55.6],
                    [179.8, 66.8],
                    [162.9, 59.4],
                    [161, 53.6],
                    [151.1, 73.2],
                    [168.2, 53.4],
                    [168.9, 69],
                    [173.2, 58.4],
                    [171.8, 56.2],
                    [178, 70.6],
                    [164.3, 59.8],
                    [163, 72],
                    [168.5, 65.2],
                    [166.8, 56.6],
                    [172.7, 105.2],
                    [163.5, 51.8],
                    [169.4, 63.4],
                    [167.8, 59],
                    [159.5, 47.6],
                    [167.6, 63],
                    [161.2, 55.2],
                    [160, 45],
                    [163.2, 54],
                    [162.2, 50.2],
                    [161.3, 60.2],
                    [149.5, 44.8],
                    [157.5, 58.8],
                    [163.2, 56.4],
                    [172.7, 62],
                    [155, 49.2],
                    [156.5, 67.2],
                    [164, 53.8],
                    [160.9, 54.4],
                    [162.8, 58],
                    [167, 59.8],
                    [160, 54.8],
                    [160, 43.2],
                    [168.9, 60.5],
                    [158.2, 46.4],
                    [156, 64.4],
                    [160, 48.8],
                    [167.1, 62.2],
                    [158, 55.5],
                    [167.6, 57.8],
                    [156, 54.6],
                    [162.1, 59.2],
                    [173.4, 52.7],
                    [159.8, 53.2],
                    [170.5, 64.5],
                    [159.2, 51.8],
                    [157.5, 56],
                    [161.3, 63.6],
                    [162.6, 63.2],
                    [160, 59.5],
                    [168.9, 56.8],
                    [165.1, 64.1],
                    [162.6, 50],
                    [165.1, 72.3],
                    [166.4, 55],
                    [160, 55.9],
                    [152.4, 60.4],
                    [170.2, 69.1],
                    [162.6, 84.5],
                    [170.2, 55.9],
                    [158.8, 55.5],
                    [172.7, 69.5],
                    [167.6, 76.4],
                    [162.6, 61.4],
                    [167.6, 65.9],
                    [156.2, 58.6],
                    [175.2, 66.8],
                    [172.1, 56.6],
                    [162.6, 58.6],
                    [160, 55.9],
                    [165.1, 59.1],
                    [182.9, 81.8],
                    [166.4, 70.7],
                    [165.1, 56.8],
                    [177.8, 60],
                    [165.1, 58.2],
                    [175.3, 72.7],
                    [154.9, 54.1],
                    [158.8, 49.1],
                    [172.7, 75.9],
                    [168.9, 55],
                    [161.3, 57.3],
                    [167.6, 55],
                    [165.1, 65.5],
                    [175.3, 65.5],
                    [157.5, 48.6],
                    [163.8, 58.6],
                    [167.6, 63.6],
                    [165.1, 55.2],
                    [165.1, 62.7],
                    [168.9, 56.6],
                    [162.6, 53.9],
                    [164.5, 63.2],
                    [176.5, 73.6],
                    [168.9, 62],
                    [175.3, 63.6],
                    [159.4, 53.2],
                    [160, 53.4],
                    [170.2, 55],
                    [162.6, 70.5],
                    [167.6, 54.5],
                    [162.6, 54.5],
                    [160.7, 55.9],
                    [160, 59],
                    [157.5, 63.6],
                    [162.6, 54.5],
                    [152.4, 47.3],
                    [170.2, 67.7],
                    [165.1, 80.9],
                    [172.7, 70.5],
                    [165.1, 60.9],
                    [170.2, 63.6],
                    [170.2, 54.5],
                    [170.2, 59.1],
                    [161.3, 70.5],
                    [167.6, 52.7],
                    [167.6, 62.7],
                    [165.1, 86.3],
                    [162.6, 66.4],
                    [152.4, 67.3],
                    [168.9, 63],
                    [170.2, 73.6],
                    [175.2, 62.3],
                    [175.2, 57.7],
                    [160, 55.4],
                    [165.1, 104.1],
                    [174, 55.5],
                    [170.2, 77.3],
                    [160, 80.5],
                    [167.6, 64.5],
                    [167.6, 72.3],
                    [167.6, 61.4],
                    [154.9, 58.2],
                    [162.6, 81.8],
                    [175.3, 63.6],
                    [171.4, 53.4],
                    [157.5, 54.5],
                    [165.1, 53.6],
                    [160, 60],
                    [174, 73.6],
                    [162.6, 61.4],
                    [174, 55.5],
                    [162.6, 63.6],
                    [161.3, 60.9],
                    [156.2, 60],
                    [149.9, 46.8],
                    [169.5, 57.3],
                    [160, 64.1],
                    [175.3, 63.6],
                    [169.5, 67.3],
                    [160, 75.5],
                    [172.7, 68.2],
                    [162.6, 61.4],
                    [157.5, 76.8],
                    [176.5, 71.8],
                    [164.4, 55.5],
                    [160.7, 48.6],
                    [174, 66.4],
                    [163.8, 67.3]
                ],
                markPoint: {
                    data: [{
                        type: "max",
                        name: "Maximum"
                    }, {
                        type: "min",
                        name: "Minimum"
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }, {
                name: "Male",
                type: "scatter",
                data: [
                    [174, 65.6],
                    [175.3, 71.8],
                    [193.5, 80.7],
                    [186.5, 72.6],
                    [187.2, 78.8],
                    [181.5, 74.8],
                    [184, 86.4],
                    [184.5, 78.4],
                    [175, 62],
                    [184, 81.6],
                    [180, 76.6],
                    [177.8, 83.6],
                    [192, 90],
                    [176, 74.6],
                    [174, 71],
                    [184, 79.6],
                    [192.7, 93.8],
                    [171.5, 70],
                    [173, 72.4],
                    [176, 85.9],
                    [176, 78.8],
                    [180.5, 77.8],
                    [172.7, 66.2],
                    [176, 86.4],
                    [173.5, 81.8],
                    [178, 89.6],
                    [180.3, 82.8],
                    [180.3, 76.4],
                    [164.5, 63.2],
                    [173, 60.9],
                    [183.5, 74.8],
                    [175.5, 70],
                    [188, 72.4],
                    [189.2, 84.1],
                    [172.8, 69.1],
                    [170, 59.5],
                    [182, 67.2],
                    [170, 61.3],
                    [177.8, 68.6],
                    [184.2, 80.1],
                    [186.7, 87.8],
                    [171.4, 84.7],
                    [172.7, 73.4],
                    [175.3, 72.1],
                    [180.3, 82.6],
                    [182.9, 88.7],
                    [188, 84.1],
                    [177.2, 94.1],
                    [172.1, 74.9],
                    [167, 59.1],
                    [169.5, 75.6],
                    [174, 86.2],
                    [172.7, 75.3],
                    [182.2, 87.1],
                    [164.1, 55.2],
                    [163, 57],
                    [171.5, 61.4],
                    [184.2, 76.8],
                    [174, 86.8],
                    [174, 72.2],
                    [177, 71.6],
                    [186, 84.8],
                    [167, 68.2],
                    [171.8, 66.1],
                    [182, 72],
                    [167, 64.6],
                    [177.8, 74.8],
                    [164.5, 70],
                    [192, 101.6],
                    [175.5, 63.2],
                    [171.2, 79.1],
                    [181.6, 78.9],
                    [167.4, 67.7],
                    [181.1, 66],
                    [177, 68.2],
                    [174.5, 63.9],
                    [177.5, 72],
                    [170.5, 56.8],
                    [182.4, 74.5],
                    [197.1, 90.9],
                    [180.1, 93],
                    [175.5, 80.9],
                    [180.6, 72.7],
                    [184.4, 68],
                    [175.5, 70.9],
                    [180.6, 72.5],
                    [177, 72.5],
                    [177.1, 83.4],
                    [181.6, 75.5],
                    [176.5, 73],
                    [175, 70.2],
                    [174, 73.4],
                    [165.1, 70.5],
                    [177, 68.9],
                    [192, 102.3],
                    [176.5, 68.4],
                    [169.4, 65.9],
                    [182.1, 75.7],
                    [179.8, 84.5],
                    [175.3, 87.7],
                    [184.9, 86.4],
                    [177.3, 73.2],
                    [167.4, 53.9],
                    [178.1, 72],
                    [168.9, 55.5],
                    [157.2, 58.4],
                    [180.3, 83.2],
                    [170.2, 72.7],
                    [177.8, 64.1],
                    [172.7, 72.3],
                    [165.1, 65],
                    [186.7, 86.4],
                    [165.1, 65],
                    [174, 88.6],
                    [175.3, 84.1],
                    [185.4, 66.8],
                    [177.8, 75.5],
                    [180.3, 93.2],
                    [180.3, 82.7],
                    [177.8, 58],
                    [177.8, 79.5],
                    [177.8, 78.6],
                    [177.8, 71.8],
                    [177.8, 116.4],
                    [163.8, 72.2],
                    [188, 83.6],
                    [198.1, 85.5],
                    [175.3, 90.9],
                    [166.4, 85.9],
                    [190.5, 89.1],
                    [166.4, 75],
                    [177.8, 77.7],
                    [179.7, 86.4],
                    [172.7, 90.9],
                    [190.5, 73.6],
                    [185.4, 76.4],
                    [168.9, 69.1],
                    [167.6, 84.5],
                    [175.3, 64.5],
                    [170.2, 69.1],
                    [190.5, 108.6],
                    [177.8, 86.4],
                    [190.5, 80.9],
                    [177.8, 87.7],
                    [184.2, 94.5],
                    [176.5, 80.2],
                    [177.8, 72],
                    [180.3, 71.4],
                    [171.4, 72.7],
                    [172.7, 84.1],
                    [172.7, 76.8],
                    [177.8, 63.6],
                    [177.8, 80.9],
                    [182.9, 80.9],
                    [170.2, 85.5],
                    [167.6, 68.6],
                    [175.3, 67.7],
                    [165.1, 66.4],
                    [185.4, 102.3],
                    [181.6, 70.5],
                    [172.7, 95.9],
                    [190.5, 84.1],
                    [179.1, 87.3],
                    [175.3, 71.8],
                    [170.2, 65.9],
                    [193, 95.9],
                    [171.4, 91.4],
                    [177.8, 81.8],
                    [177.8, 96.8],
                    [167.6, 69.1],
                    [167.6, 82.7],
                    [180.3, 75.5],
                    [182.9, 79.5],
                    [176.5, 73.6],
                    [186.7, 91.8],
                    [188, 84.1],
                    [188, 85.9],
                    [177.8, 81.8],
                    [174, 82.5],
                    [177.8, 80.5],
                    [171.4, 70],
                    [185.4, 81.8],
                    [185.4, 84.1],
                    [188, 90.5],
                    [188, 91.4],
                    [182.9, 89.1],
                    [176.5, 85],
                    [175.3, 69.1],
                    [175.3, 73.6],
                    [188, 80.5],
                    [188, 82.7],
                    [175.3, 86.4],
                    [170.5, 67.7],
                    [179.1, 92.7],
                    [177.8, 93.6],
                    [175.3, 70.9],
                    [182.9, 75],
                    [170.8, 93.2],
                    [188, 93.2],
                    [180.3, 77.7],
                    [177.8, 61.4],
                    [185.4, 94.1],
                    [168.9, 75],
                    [185.4, 83.6],
                    [180.3, 85.5],
                    [174, 73.9],
                    [167.6, 66.8],
                    [182.9, 87.3],
                    [160, 72.3],
                    [180.3, 88.6],
                    [167.6, 75.5],
                    [186.7, 101.4],
                    [175.3, 91.1],
                    [175.3, 67.3],
                    [175.9, 77.7],
                    [175.3, 81.8],
                    [179.1, 75.5],
                    [181.6, 84.5],
                    [177.8, 76.6],
                    [182.9, 85],
                    [177.8, 102.5],
                    [184.2, 77.3],
                    [179.1, 71.8],
                    [176.5, 87.9],
                    [188, 94.3],
                    [174, 70.9],
                    [167.6, 64.5],
                    [170.2, 77.3],
                    [167.6, 72.3],
                    [188, 87.3],
                    [174, 80],
                    [176.5, 82.3],
                    [180.3, 73.6],
                    [167.6, 74.1],
                    [188, 85.9],
                    [180.3, 73.2],
                    [167.6, 76.3],
                    [183, 65.9],
                    [183, 90.9],
                    [179.1, 89.1],
                    [170.2, 62.3],
                    [177.8, 82.7],
                    [179.1, 79.1],
                    [190.5, 98.2],
                    [177.8, 84.1],
                    [180.3, 83.2],
                    [180.3, 83.2]
                ],
                markPoint: {
                    data: [{
                        type: "max",
                        name: "Maximum"
                    }, {
                        type: "min",
                        name: "Minimum"
                    }]
                },
                markLine: {
                    data: [{
                        type: "average",
                        name: "Average"
                    }]
                }
            }]
        });
        var e = a.init(document.getElementById("echarts_candle"));
        e.setOption({
            title: {
                text: ""
            },
            tooltip: {
                trigger: "axis",
                formatter: function(a) {
                    var b = a[0].seriesName + " " + a[0].name;
                    return b += "<br/>  opening : " + a[0].value[0] + "  highest : " + a[0].value[3], b += "<br/>  Close : " + a[0].value[1] + "  lowest : " + a[0].value[2]
                }
            },
            legend: {
                data: ["Composite Index"]
            },
            toolbox: {
                show: !0,
                orient: "vertical",
                feature: {
                    mark: {
                        show: !0
                    },
                    dataZoom: {
                        show: !0
                    },
                    dataView: {
                        show: !0,
                        readOnly: !1
                    },
                    magicType: {
                        show: !0,
                        type: ["line", "bar"]
                    },
                    restore: {
                        show: !0
                    },
                    saveAsImage: {
                        show: !0
                    }
                }
            },
            dataZoom: {
                show: !0,
                realtime: !0,
                start: 50,
                end: 100
            },
            xAxis: [{
                type: "category",
                boundaryGap: !0,
                axisTick: {
                    onGap: !1
                },
                splitLine: {
                    show: !1
                },
                data: ["2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30", "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", "2013/6/6", "2013/6/7", "2013/6/13"]
            }],
            yAxis: [{
                type: "value",
                scale: !0,
                boundaryGap: [.01, .01]
            }],
            series: [{
                name: "Composite Index",
                type: "k",
                data: [
                    [2320.26, 2302.6, 2287.3, 2362.94],
                    [2300, 2291.3, 2288.26, 2308.38],
                    [2295.35, 2346.5, 2295.35, 2346.92],
                    [2347.22, 2358.98, 2337.35, 2363.8],
                    [2360.75, 2382.48, 2347.89, 2383.76],
                    [2383.43, 2385.42, 2371.23, 2391.82],
                    [2377.41, 2419.02, 2369.57, 2421.15],
                    [2425.92, 2428.15, 2417.58, 2440.38],
                    [2411, 2433.13, 2403.3, 2437.42],
                    [2432.68, 2434.48, 2427.7, 2441.73],
                    [2430.69, 2418.53, 2394.22, 2433.89],
                    [2416.62, 2432.4, 2414.4, 2443.03],
                    [2441.91, 2421.56, 2415.43, 2444.8],
                    [2420.26, 2382.91, 2373.53, 2427.07],
                    [2383.49, 2397.18, 2370.61, 2397.94],
                    [2378.82, 2325.95, 2309.17, 2378.82],
                    [2322.94, 2314.16, 2308.76, 2330.88],
                    [2320.62, 2325.82, 2315.01, 2338.78],
                    [2313.74, 2293.34, 2289.89, 2340.71],
                    [2297.77, 2313.22, 2292.03, 2324.63],
                    [2322.32, 2365.59, 2308.92, 2366.16],
                    [2364.54, 2359.51, 2330.86, 2369.65],
                    [2332.08, 2273.4, 2259.25, 2333.54],
                    [2274.81, 2326.31, 2270.1, 2328.14],
                    [2333.61, 2347.18, 2321.6, 2351.44],
                    [2340.44, 2324.29, 2304.27, 2352.02],
                    [2326.42, 2318.61, 2314.59, 2333.67],
                    [2314.68, 2310.59, 2296.58, 2320.96],
                    [2309.16, 2286.6, 2264.83, 2333.29],
                    [2282.17, 2263.97, 2253.25, 2286.33],
                    [2255.77, 2270.28, 2253.31, 2276.22],
                    [2269.31, 2278.4, 2250, 2312.08],
                    [2267.29, 2240.02, 2239.21, 2276.05],
                    [2244.26, 2257.43, 2232.02, 2261.31],
                    [2257.74, 2317.37, 2257.42, 2317.86],
                    [2318.21, 2324.24, 2311.6, 2330.81],
                    [2321.4, 2328.28, 2314.97, 2332],
                    [2334.74, 2326.72, 2319.91, 2344.89],
                    [2318.58, 2297.67, 2281.12, 2319.99],
                    [2299.38, 2301.26, 2289, 2323.48],
                    [2273.55, 2236.3, 2232.91, 2273.55],
                    [2238.49, 2236.62, 2228.81, 2246.87],
                    [2229.46, 2234.4, 2227.31, 2243.95],
                    [2234.9, 2227.74, 2220.44, 2253.42],
                    [2232.69, 2225.29, 2217.25, 2241.34],
                    [2196.24, 2211.59, 2180.67, 2212.59],
                    [2215.47, 2225.77, 2215.47, 2234.73],
                    [2224.93, 2226.13, 2212.56, 2233.04],
                    [2236.98, 2219.55, 2217.26, 2242.48],
                    [2218.09, 2206.78, 2204.44, 2226.26],
                    [2199.91, 2181.94, 2177.39, 2204.99],
                    [2169.63, 2194.85, 2165.78, 2196.43],
                    [2195.03, 2193.8, 2178.47, 2197.51],
                    [2181.82, 2197.6, 2175.44, 2206.03],
                    [2201.12, 2244.64, 2200.58, 2250.11],
                    [2236.4, 2242.17, 2232.26, 2245.12],
                    [2242.62, 2184.54, 2182.81, 2242.62],
                    [2187.35, 2218.32, 2184.11, 2226.12],
                    [2213.19, 2199.31, 2191.85, 2224.63],
                    [2203.89, 2177.91, 2173.86, 2210.58],
                    [2170.78, 2174.12, 2161.14, 2179.65],
                    [2179.05, 2205.5, 2179.05, 2222.81],
                    [2212.5, 2231.17, 2212.5, 2236.07],
                    [2227.86, 2235.57, 2219.44, 2240.26],
                    [2242.39, 2246.3, 2235.42, 2255.21],
                    [2246.96, 2232.97, 2221.38, 2247.86],
                    [2228.82, 2246.83, 2225.81, 2247.67],
                    [2247.68, 2241.92, 2231.36, 2250.85],
                    [2238.9, 2217.01, 2205.87, 2239.93],
                    [2217.09, 2224.8, 2213.58, 2225.19],
                    [2221.34, 2251.81, 2210.77, 2252.87],
                    [2249.81, 2282.87, 2248.41, 2288.09],
                    [2286.33, 2299.99, 2281.9, 2309.39],
                    [2297.11, 2305.11, 2290.12, 2305.3],
                    [2303.75, 2302.4, 2292.43, 2314.18],
                    [2293.81, 2275.67, 2274.1, 2304.95],
                    [2281.45, 2288.53, 2270.25, 2292.59],
                    [2286.66, 2293.08, 2283.94, 2301.7],
                    [2293.4, 2321.32, 2281.47, 2322.1],
                    [2323.54, 2324.02, 2321.17, 2334.33],
                    [2316.25, 2317.75, 2310.49, 2325.72],
                    [2320.74, 2300.59, 2299.37, 2325.53],
                    [2300.21, 2299.25, 2294.11, 2313.43],
                    [2297.1, 2272.42, 2264.76, 2297.1],
                    [2270.71, 2270.93, 2260.87, 2276.86],
                    [2264.43, 2242.11, 2240.07, 2266.69],
                    [2242.26, 2210.9, 2205.07, 2250.63],
                    [2190.1, 2148.35, 2126.22, 2190.1]
                ]
            }]
        });
        var f = a.init(document.getElementById("echarts_pie"));
        f.setOption({
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["India", "United State", "Japan", "Germany", "Italy"]
            },
            toolbox: {
                show: !0,
                orient: "vertical",
                feature: {
                    mark: {
                        show: !0
                    },
                    dataView: {
                        show: !0,
                        readOnly: !1
                    },
                    magicType: {
                        show: !0,
                        type: ["pie", "funnel"],
                        option: {
                            funnel: {
                                x: "25%",
                                width: "50%",
                                funnelAlign: "left",
                                max: 1548
                            }
                        }
                    },
                    restore: {
                        show: !0
                    },
                    saveAsImage: {
                        show: !0
                    }
                }
            },
            calculable: !0,
            series: [{
                name: "pie_chart",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [{
                    value: 335,
                    name: "India"
                }, {
                    value: 310,
                    name: "United State"
                }, {
                    value: 234,
                    name: "Japan"
                }, {
                    value: 135,
                    name: "Germany"
                }, {
                    value: 1548,
                    name: "Italy"
                }]
            }]
        })
    })
});