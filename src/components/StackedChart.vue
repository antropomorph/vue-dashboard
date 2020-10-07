<template>
    <div id="chart">
        <apexcharts type="bar" :options="chartOptions" :series="series"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'StackedChart',
        components: {
            apexcharts: VueApexCharts,
        },
        data: function () {
            return {
                chartOptions: {
                    chart: {
                        type: 'bar',
                        stacked: true,
                        stackType: '100%',
                        animations:{
                            enabled:false
                        },
                    },
                    xaxis: {
                        categories: ["Гл. маркшейдер", "ЗГД-геолог", "ЗГД-сейсмика", "ЗГД-геол.исслед", "ЗГД-геофизика"],
                    },
                    legend: {
                        position: "bottom"
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        },
                    },
                },
                markers: {
                    size: 0
                },
                responsive: [{
                    breakpoint: 1026,
                    options: {
                        dataLabels:{
                            enabled:false,
                        },
                        plotOptions: {
                            bar: {
                                horizontal: true,
                                dataLabels:{
                                    enabled: false,
                                    hideOverflowingLabels:true
                                },
                            },
                        },
                    }
                }],
                series: [{
                    name: 'Просроченые',
                    data: [0, 51, 34, 11, 33]
                }, {
                    name: 'Текущие',
                    data: [2, 13, 16, 0, 3]
                }, {
                    name: 'Ближайшие',
                    data: [0, 16, 6, 0, 14]
                }, {
                    name: 'Всего',
                    data: [4, 713, 256, 16, 142]
                }
                ],
            }
        },
    }
</script>
<style scoped>
    #chart {
        /*max-width: 760px;*/
        /*margin: 30px auto;*/
        /*opacity: 0.9;*/
    }
</style>
