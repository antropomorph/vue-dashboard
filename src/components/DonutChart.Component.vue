<template>
    <div id="chart">
        <apexcharts type="donut"  :options="chartOptions" :series="series"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        components: {
            apexcharts: VueApexCharts,
        },
        name: "DonutChart",
        data() {
            return {
                series: [13, 12, 5, 2, 1, 1],
                chartOptions: {
                    chart: {
                        type: 'donut',
                    },

                    legend:{
                        position: "bottom"
                    },
                    labels:["ОАО Якутскгеофизика", "ООО \"ТНГ-Групп\"", "ОАО \"Якутскгеофизика\"", "ООО Газпромресурс", "ООО ТНГ-Ленское", "ТНГ-групп"],
                    responsive: [{
                        breakpoint: 1026,
                        options: {
                            chart: {
                                // width: '100',
                                height: '300',
                            },
                            dataLabels:{
                                enabled:false
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },

            }
        }
    }
</script>

<style scoped>
    #chart {
        max-width: 760px;
        margin: 35px auto;
        opacity: 0.9;
    }
</style>
