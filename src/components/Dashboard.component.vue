<template>
    <v-container>
        <v-row>
            <v-col
                    v-for="p in panel"
                    :key="p.id"
                    cols="12"
                    sm="6"
                    md="6"
                    xl="6"
            >
                <v-card :height="getHeight">
                    <v-card-text><b>{{p.name}}</b></v-card-text>
                    <div class="box1">
                    <component  v-bind:is="p.component" v-bind:data="p.data"></component>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import LineChart from "./Line.component"
    import DonutChart from "./DonutChart.Component"
    import Chart from "./Chart.component"
    import AreaChart from "./AreaChart.component"
    import LineScatter from "./LineScatter.component"
    import Deputy from "./Deputy.component"
    import StackedChart from "./StackedChart";
    import TimeLineChart from "./TimeLineChart";

    export default {
        name: "Dashboard",
        components: {
            LineChart,
            DonutChart,
            Chart,
            AreaChart,
            LineScatter,
            Deputy,
            StackedChart,
            TimeLineChart,
        },
        props: [
            'panel',
        ],
        computed: {
            // eslint-disable-next-line vue/return-in-computed-property
            getHeight() {
                let result = 200;
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        result = this.$vuetify.breakpoint.width;
                        break;
                    case 'sm':
                        result = 400;
                        break;
                    case 'md':
                        result = 500;
                        break;
                    case 'lg':
                        result = 600;
                        break;
                    case 'xl':
                        result = 800;
                        break
                }
                console.log('getHeight=' + result);
                return result;
            }
        },
    }
</script>

<style scoped>
    .box1 {
        padding: 10px; /* Поля */
    }
</style>
