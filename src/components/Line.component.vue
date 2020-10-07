<template>
    <div id="chart">
        <apexcharts type="line" :options="chartOptions" :series="series"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'LineChart',
        components: {
            apexcharts: VueApexCharts,
        },
        // mounted() {
        //     console.log(this.data)
        //     this.chartOptions.xaxis.categories = this.data.map(key => key.date)
        //     console.log(this.data.map(key => key.date))
        // },
        props: {
            data: Array
        },
        data() {
            return {
                series: [
                    {
                        name: "Факт",
                        data: this.data.map(key => key.sinking)
                    },
                    {
                        name: "План",
                        data: this.data.map(key => key.sinkingPlan)
                    }
                ],
                chartOptions: {
                    chart: {
                        width: "100%",
                        height: "100%",
                        type: 'line',
                        // dropShadow: {
                        //     enabled: true,
                        //     color: '#000',
                        //     top: 18,
                        //     left: 7,
                        //     blur: 10,
                        //     opacity: 0.2
                        // },
                        toolbar: {
                            show: false
                        },
                        animations:{
                            enabled:false
                        },
                    },
                    // colors: ['#ea0001', '#181db8'],
                    // dataLabels: {
                    //     enabled: true,
                    // },
                    stroke: {
                        curve: 'smooth'
                    },
                    // title: {
                    //     text: 'Проходка',
                    //     align: 'left'
                    // },
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    markers: {
                        size: 0
                    },
                    responsive: [{
                        breakpoint: 1026,
                        options: {
                            xaxis: {
                                tickAmount: 5,
                                labels: {
                                    show: true,
                                    rotate: -45,
                                    rotateAlways: true,
                                },
                            },
                            yaxis: {
                                tickAmount: 4,
                                reversed: true,
                            }
                        }
                    }],
                    xaxis: {
                        // type: "datetime",
                        categories: this.data.map(key => key.date),
                        labels: {
                            show: true,
                            rotate: -90,
                            rotateAlways: true,
                        },
                        title: {
                            text: 'Дата'
                        },
                        axisTicks: {
                            show: true
                        },
                        tickAmount: 10,
                    },
                    yaxis: {
                        title: {
                            text: 'Глубина (м)'
                        },
                        reversed: true,
                        // min: 5,
                        // max: 40
                    },
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'left',
                        floating: true,
                        offsetY: 7,
                        offsetX: 0
                    }
                }
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
