<template>
    <div id="chart">
        <apexcharts type="bar" :options="chartOptions" :series="series"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'Chart',
        components: {
            apexcharts: VueApexCharts,
        },
        data: function () {
            return {
                chartOptions: {
                    chart: {
                        id: 'basic-bar',
                        animations:{
                            enabled:false
                        },
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    },
                    legend: {
                        position: "left"
                    }
                },

                series: [{
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }],

            }
        },
    }
</script>
<style scoped>
    #chart {
        max-width: 760px;
        margin: 35px auto;
        opacity: 0.9;
    }
</style>
