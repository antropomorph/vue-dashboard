<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                app
                class="pt-4"
                color="blue-grey lighten-5"
        >
            <v-list
                    dense
                    nav
            >
                <v-list-item-group
                        v-model="tab">
                    <v-list-item
                            v-for="item in getDashboards"
                            :key="item.id"
                            link
                            @click="drawer = false"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="#00548a"
                   absolute
                   dense
                   app
        >
            <v-app-bar-nav-icon @click="drawer = !drawer" style="color: white"></v-app-bar-nav-icon>
            <v-toolbar-title style="color: white"><b>{{title}}</b></v-toolbar-title>
            <template v-slot:extension>
                <v-tabs v-model="tab" align-with-title>
                    <v-tab v-for="item in getDashboards" :key="item.id" style="color: white">
                        <b>{{item.name}}</b>
                    </v-tab>
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-main>
            <v-tabs-items v-model="tab">
                <v-tab-item
                        v-for="item in getDashboards"
                        :key="item.id"
                >
                    <v-card>
                        <v-card-text>
                            <component v-bind:is="item.component" v-bind:panel="item.panel"
                            ></component>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-main>
    </v-app>
</template>

<script>
    /* eslint-disable vue/no-unused-components */

    import Dashboard from "./components/Dashboard.component"
    import {mapGetters, mapActions} from 'vuex'
    /* eslint-disable vue/no-unused-components */
    // import {getDashboard} from "./api"

    // const dashboardPanels = [
    //     {key: 'Linear', name: 'Данные по запасам', component: 'LineChart'},
    //     {key: 'Bubble', name: 'Данные по еще чему-то', component: 'DonutChart'},
    //     {key: 'Gistogram', name: 'Прибыль', component: 'Chart'},
    //     {key: 'Bars', name: 'Прогноз погоды', component: 'AreaChart'},
    //     {key: 'LineScatter', name: 'Распределение капель дождя относительно прямой линии', component: 'LineScatter'},
    //     {key: 'Deputy', name: 'Статус заместителей', component: 'Deputy'},
    // ];
    //
    // const geologyPanels = [
    //     {key: 'Linear', name: 'Данные по запасам', component: 'LineChart'},
    //     {key: 'Bubble', name: 'Данные по еще чему-то', component: 'DonutChart'},
    //     {key: 'Gistogram', name: 'Прибыль', component: 'Chart'},
    // ];
    //
    // const economicsPanel = [
    //     {key: 'Linear', name: 'Данные по запасам', component: 'LineChart'},
    //     {key: 'Bubble', name: 'Данные по еще чему-то', component: 'DonutChart'},
    //     {key: 'Gistogram', name: 'Прибыль', component: 'Chart'},
    // ];
    //
    // const drillingPanels = [
    //     {key: 'Linear', name: 'Данные по запасам', component: 'LineChart'},
    //     {key: 'Bubble', name: 'Данные по еще чему-то', component: 'DonutChart'},
    //     {key: 'Gistogram', name: 'Прибыль', component: 'Chart'},
    // ];
    //
    // const geophysicsPanels = [
    //     {key: 'Linear', name: 'Данные по запасам', component: 'LineChart'},
    //     {key: 'Bubble', name: 'Данные по еще чему-то', component: 'DonutChart'},
    //     {key: 'Gistogram', name: 'Прибыль', component: 'Chart'},
    // ];


    export default {
        name: 'App',
        components: {
            Dashboard,
        },
        computed:
            mapGetters(["getDashboards"])
        ,
        methods: mapActions(["fetchDashboards"]),
        async mounted() {
            this.fetchDashboards();
        },
        data: () => ({
            title: 'Удаленное рабочее место',
            drawer: false,
            tab: null,
            // menu: [this.dashboards
            // {
            //     name: 'Сводки',
            //     key: 'dashboard',
            //     icon: 'dashboard',
            //     component: 'Dashboard',
            //     values: {
            //         panels: dashboardPanels,
            //     },
            // },
            // {
            //     name: 'Геология', key: 'geology', icon: 'public',
            //     component: 'Dashboard',
            //     values: {
            //         panels: geologyPanels,
            //     },
            // },
            // {
            //     name: 'Экономика', key: 'economics', icon: 'attach_money',
            //     component: 'Dashboard',
            //     values: {
            //         panels: economicsPanel,
            //     },
            // },
            // {
            //     name: 'Бурение', key: 'drilling', icon: 'play_for_work',
            //     component: 'Dashboard',
            //     values: {
            //         panels: drillingPanels,
            //     },
            // },
            // {
            //     name: 'Геофизика', key: 'geophysics', icon: 'burst_mode',
            //     component: 'Dashboard',
            //     values: {
            //         panels: geophysicsPanels,
            //     },
            // },
            // ],
        }),
    }
</script>

