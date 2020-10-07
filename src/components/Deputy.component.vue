<template>
    <div id="chart">
        <v-data-table
                :headers="headers"
                :items="tableData"
                :items-per-page="10"
                class="elevation-1"
                locale="ru-ru"
                hide-default-footer
                hide-default-header
                height="300px"
        >
            <template v-slot:item.status="{ item }">
                <v-chip
                        :color="getColor(item.status)"
                        dark
                >
                    {{ item.status }}
                </v-chip>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: "Deputy",
        methods: {
            getColor(status) {
                if (status === 'Больничный') return 'red';
                else if (status === 'Командировка') return 'orange';
                else return 'green'
            },
        },
        data() {
            return {
                headers: [
                    {
                        text: 'ФИО',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {text: 'Статус', value: 'status'},
                    // {text: '', value: 'fat'},
                    // {text: 'Carbs (g)', value: 'carbs'},
                    // {text: 'Protein (g)', value: 'protein'},
                    // {text: 'Iron (%)', value: 'iron'},
                ],
                tableData: [
                    {
                        name: 'Иванов Иван Иванович',
                        status: 'На месте'
                    },
                    {
                        name: 'Петров Михаил Савельевич',
                        status: 'Командировка'
                    },
                    {
                        name: 'Заворзин Евгений Демидович',
                        status: 'Командировка'
                    },
                    {
                        name: 'Кривошейко Дамир Султанович',
                        status: 'Больничный'
                    },
                    {
                        name: 'Васильев Иван Иванович',
                        status: 'На месте'
                    },
                    {
                        name: 'Бирюков Петр Константинович',
                        status: 'На месте'
                    },

                ]
            }
        },
    }
</script>

<style scoped>
    #chart {
        max-width: 760px;
        margin: 5px;
        opacity: 0.9;
    }
</style>
