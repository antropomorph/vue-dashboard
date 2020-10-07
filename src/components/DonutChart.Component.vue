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
                series: [13, 12, 5],
                chartOptions: {
                    chart: {
                        type: 'donut',
                        animations:{
                            enabled:false
                        },
                    },

                    legend:{
                        position: "bottom",
                        floating: false,
                    },
                    labels:["ОАО Якутскгеофизика", "ООО \"ТНГ-Групп\"", "ОАО \"Якутскгеофизика\""],
                    responsive: [{
                        breakpoint: 1026,
                        options: {
                            // chart: {
                            //     // width: '100',
                            //     height: '300',
                            // },
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
