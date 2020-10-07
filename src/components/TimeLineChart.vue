<template>
    <div id="chart">
        <apexcharts type="rangeBar" :options="chartOptions" :series="series"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'TimeLineChart',
        components: {
            apexcharts: VueApexCharts,
        },
        data: function () {
            return {
                series: [
                    {
                        name: 'Проектирование',
                        data: [
                            {
                                x: 'Скв. 8743',
                                y: [
                                    new Date('2019-03-05').getTime(),
                                    new Date('2019-03-08').getTime()
                                ]
                            },
                            {
                                x: 'Скв. 76324',
                                y: [
                                    new Date('2019-03-02').getTime(),
                                    new Date('2019-03-05').getTime()
                                ]
                            },
                            {
                                x: 'Скв. 51604',
                                y: [
                                    new Date('2019-03-05').getTime(),
                                    new Date('2019-03-07').getTime()
                                ]
                            },
                            {
                                x: 'Скв. 6987/2',
                                y: [
                                    new Date('2019-03-03').getTime(),
                                    new Date('2019-03-09').getTime()
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Строительство',
                        data: [
                            {
                                x: 'Скв. 8743',
                                y: [
                                    new Date('2019-03-02').getTime(),
                                    new Date('2019-03-05').getTime()
                                ]
                            },
                            {
                                x: 'Скв. 76324',
                                y: [
                                    new Date('2019-03-06').getTime(),
                                    new Date('2019-03-16').getTime()
                                ]
                            },
                            {
                                x: 'Скв. 51604',
                                y: [
                                    new Date('2019-03-08').getTime(),
                                    new Date('2019-03-15').getTime()
                                ]
                            },
                            {
                                x: 'Скв. 6987/2',
                                y: [
                                    new Date('2019-03-20').getTime(),
                                    new Date('2019-03-22').getTime()
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Ввод в эксплуатацию',
                        data: [
                            {
                                x: 'Скв. 8743',
                                y: [
                                    new Date('2019-03-10').getTime(),
                                    new Date('2019-03-17').getTime()
                                ]
                            },
                            {
                                x: 'Скв. 76324',
                                y: [
                                    new Date('2019-03-17').getTime(),
                                    new Date('2019-03-23').getTime()
                                ]
                            },
                        ]
                    }
                ],

                chartOptions: {
                    chart: {
                        height: "100%",
                        type: 'rangeBar',
                        animations: {
                            enabled: false
                        },
                        toolbar:false,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: '80%'
                        }
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            // rotate: -45,
                            // rotateAlways: true,
                            format: 'dd.MM',
                            dateTimeFormatter: {
                                year: 'yyyy',
                                month: 'MM',
                                day: 'dd',
                                hour: 'HH:mm'
                            }
                        }
                    },
                    stroke: {
                        width: 1
                    },
                    fill: {
                        type: 'solid',
                        opacity: 0.6
                    },
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'center',
                        floating: false,
                        // offsetY: 20,
                    }
                },

            }
        },
    }
</script>
<style scoped>
    #chart {
        max-width: 760px;
        margin: 35px auto;
        opacity: 0.9;
        border: #000000;
    }
</style>
