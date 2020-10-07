export default {
    actions: {
        async fetchDashboards(ctx) {
            // const res = await fetch('http://seleznev:3000/dashboard');
            // const dashboards = await res.json();
            // console.log(dashboards);

            const d = [
                {
                    "id": 1,
                    "name": "СВОДКИ",
                    "component": "Dashboard",
                    "panel": [
                        {
                            "id": 2,
                            "name": "Проходка скв. 891",
                            "component": "LineChart",
                            "data": [
                                {
                                    "id": 1,
                                    "date": "05.10.2020",
                                    "sinking": "800",
                                    "sinkingPlan": "800"
                                },
                                {
                                    "id": 2,
                                    "date": "06.10.2020",
                                    "sinking": "805",
                                    "sinkingPlan": "820"
                                },
                                {
                                    "id": 3,
                                    "date": "07.10.2020",
                                    "sinking": "810",
                                    "sinkingPlan": "840"
                                },
                                {
                                    "id": 4,
                                    "date": "08.10.2020",
                                    "sinking": "812",
                                    "sinkingPlan": "860"
                                },
                                {
                                    "id": 5,
                                    "date": "09.10.2020",
                                    "sinking": "820",
                                    "sinkingPlan": "870"
                                },
                                {
                                    "id": 6,
                                    "date": "10.10.2020",
                                    "sinking": "825",
                                    "sinkingPlan": "880"
                                },
                                {
                                    "id": 7,
                                    "date": "11.10.2020",
                                    "sinking": "835",
                                    "sinkingPlan": "890"
                                },
                                {
                                    "id": 8,
                                    "date": "12.10.2020",
                                    "sinking": "860",
                                    "sinkingPlan": "910"
                                },
                                {
                                    "id": 9,
                                    "date": "13.10.2020",
                                    "sinking": "875",
                                    "sinkingPlan": "920"
                                },
                                {
                                    "id": 10,
                                    "date": "14.10.2020",
                                    "sinking": "880",
                                    "sinkingPlan": "930"
                                },
                                {
                                    "id": 11,
                                    "date": "15.10.2020",
                                    "sinking": "890",
                                    "sinkingPlan": "940"
                                }
                            ],
                        },
                        // {
                        //     "id": 4,
                        //     "name": "Статус сотрудников",
                        //     "component": "Deputy",
                        // },
                        // {
                        //     "id": 3,
                        //     "name": "Проходка скв. 439",
                        //     "component": "LineChart",
                        //     "data":[
                        //         {"date":1,"sinking":100,"sinkingPlan":100},
                        //         {"date":2,"sinking":178,"sinkingPlan":100},
                        //         {"date":3,"sinking":371,"sinkingPlan":100},
                        //         {"date":4,"sinking":591,"sinkingPlan":100},
                        //         {"date":5,"sinking":600,"sinkingPlan":100},
                        //         {"date":6,"sinking":600,"sinkingPlan":500},
                        //         {"date":7,"sinking":600,"sinkingPlan":500},
                        //         {"date":8,"sinking":600,"sinkingPlan":500},
                        //         {"date":9,"sinking":600,"sinkingPlan":500},
                        //         {"date":10,"sinking":600,"sinkingPlan":500},
                        //         {"date":11,"sinking":600,"sinkingPlan":500},
                        //         {"date":12,"sinking":600,"sinkingPlan":500},
                        //         {"date":13,"sinking":600,"sinkingPlan":600},
                        //         {"date":14,"sinking":600,"sinkingPlan":600},
                        //         {"date":15,"sinking":600,"sinkingPlan":600},
                        //         {"date":16,"sinking":600,"sinkingPlan":600},
                        //         {"date":17,"sinking":600,"sinkingPlan":600},
                        //         {"date":18,"sinking":600,"sinkingPlan":600},
                        //         {"date":19,"sinking":600,"sinkingPlan":600},
                        //         {"date":20,"sinking":600,"sinkingPlan":950},
                        //         {"date":21,"sinking":600,"sinkingPlan":1550},
                        //         {"date":22,"sinking":600,"sinkingPlan":1550},
                        //         {"date":23,"sinking":600,"sinkingPlan":1550},
                        //         {"date":24,"sinking":600,"sinkingPlan":1550},
                        //         {"date":25,"sinking":833,"sinkingPlan":1550},
                        //         {"date":26,"sinking":1055,"sinkingPlan":1550},
                        //         {"date":27,"sinking":1129,"sinkingPlan":1550},
                        //         {"date":28,"sinking":1129,"sinkingPlan":1550},
                        //         {"date":29,"sinking":1212,"sinkingPlan":1550},
                        //         {"date":30,"sinking":1228,"sinkingPlan":1550},
                        //         {"date":31,"sinking":1448,"sinkingPlan":1550},
                        //         {"date":32,"sinking":1540,"sinkingPlan":1550},
                        //         {"date":33,"sinking":1540,"sinkingPlan":1550},
                        //         {"date":34,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":35,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":36,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":37,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":38,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":39,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":40,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":41,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":42,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":43,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":44,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":45,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":46,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":47,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":48,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":49,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":50,"sinking":1550,"sinkingPlan":1550},
                        //         {"date":51,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":52,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":53,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":54,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":55,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":56,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":57,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":58,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":59,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":60,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":61,"sinking":1551,"sinkingPlan":1550},
                        //         {"date":62,"sinking":1579,"sinkingPlan":1550},
                        //         {"date":63,"sinking":1589,"sinkingPlan":1550},
                        //         {"date":64,"sinking":1607,"sinkingPlan":1550},
                        //         {"date":65,"sinking":1650,"sinkingPlan":1550},
                        //         {"date":66,"sinking":1650,"sinkingPlan":1550},
                        //         {"date":67,"sinking":1677,"sinkingPlan":1550},
                        //         {"date":68,"sinking":1749,"sinkingPlan":1550},
                        //         {"date":69,"sinking":1856,"sinkingPlan":1550},
                        //         {"date":70,"sinking":1856,"sinkingPlan":1550},
                        //         {"date":71,"sinking":1856,"sinkingPlan":1550},
                        //         {"date":72,"sinking":1856,"sinkingPlan":1550},
                        //         {"date":73,"sinking":1856,"sinkingPlan":1550},
                        //         {"date":74,"sinking":1876,"sinkingPlan":1550},
                        //         {"date":75,"sinking":1880,"sinkingPlan":1550},
                        //         {"date":76,"sinking":1893,"sinkingPlan":1550},
                        //         {"date":77,"sinking":1907,"sinkingPlan":1550},
                        //         {"date":78,"sinking":1907,"sinkingPlan":1550},
                        //         {"date":79,"sinking":1965,"sinkingPlan":1550},
                        //         {"date":80,"sinking":1974,"sinkingPlan":1550},
                        //         {"date":81,"sinking":1974,"sinkingPlan":1550},
                        //         {"date":82,"sinking":2072,"sinkingPlan":1550},
                        //         {"date":83,"sinking":2072,"sinkingPlan":1550},
                        //         {"date":84,"sinking":2130,"sinkingPlan":1550},
                        //         {"date":85,"sinking":2130,"sinkingPlan":1550},
                        //         {"date":86,"sinking":2130,"sinkingPlan":1550},
                        //         {"date":87,"sinking":2133,"sinkingPlan":1550},
                        //         {"date":88,"sinking":2138,"sinkingPlan":1550},
                        //         {"date":89,"sinking":2145,"sinkingPlan":1550},
                        //         {"date":90,"sinking":2145,"sinkingPlan":3122},
                        //         {"date":91,"sinking":2160,"sinkingPlan":3122},
                        //         {"date":92,"sinking":2160,"sinkingPlan":3122},
                        //         {"date":93,"sinking":2178,"sinkingPlan":3122},
                        //         {"date":94,"sinking":2258,"sinkingPlan":3122},
                        //         {"date":95,"sinking":2279,"sinkingPlan":3122},
                        //         {"date":96,"sinking":2297,"sinkingPlan":3122},
                        //         {"date":97,"sinking":2297,"sinkingPlan":3122},
                        //         {"date":98,"sinking":2439,"sinkingPlan":3122},
                        //         {"date":99,"sinking":2439,"sinkingPlan":3122},
                        //         {"date":100,"sinking":2476,"sinkingPlan":3122},
                        //         {"date":101,"sinking":2520,"sinkingPlan":3122},
                        //         {"date":102,"sinking":2520,"sinkingPlan":3122},
                        //         {"date":103,"sinking":2520,"sinkingPlan":3122},
                        //         {"date":104,"sinking":2538,"sinkingPlan":3122},
                        //         {"date":105,"sinking":2538,"sinkingPlan":3122},
                        //         {"date":106,"sinking":2556,"sinkingPlan":3122},
                        //         {"date":107,"sinking":2556,"sinkingPlan":3122},
                        //         {"date":108,"sinking":2603,"sinkingPlan":3122},
                        //         {"date":109,"sinking":2605,"sinkingPlan":3122},
                        //         {"date":110,"sinking":2630,"sinkingPlan":3122},
                        //         {"date":111,"sinking":2630,"sinkingPlan":3122},
                        //         {"date":112,"sinking":2661,"sinkingPlan":3122},
                        //         {"date":113,"sinking":2695,"sinkingPlan":3122},
                        //         {"date":114,"sinking":2713,"sinkingPlan":3122},
                        //         {"date":115,"sinking":2713,"sinkingPlan":3122},
                        //
                        //     ],
                        // },
                        //     // "data": [
                        //     //     {
                        //     //         "id": 1,
                        //     //         "date": "05.10.2020",
                        //     //         "sinking": "800",
                        //     //         "sinkingPlan": "800"
                        //     //     },
                        //     //     {
                        //     //         "id": 2,
                        //     //         "date": "06.10.2020",
                        //     //         "sinking": "805",
                        //     //         "sinkingPlan": "810"
                        //     //     },
                        //     //     {
                        //     //         "id": 3,
                        //     //         "date": "07.10.2020",
                        //     //         "sinking": "810",
                        //     //         "sinkingPlan": "820"
                        //     //     },
                        //     //     {
                        //     //         "id": 4,
                        //     //         "date": "08.10.2020",
                        //     //         "sinking": "812",
                        //     //         "sinkingPlan": "830"
                        //     //     },
                        //     //     {
                        //     //         "id": 5,
                        //     //         "date": "09.10.2020",
                        //     //         "sinking": "820",
                        //     //         "sinkingPlan": "840"
                        //     //     },
                        //     //     {
                        //     //         "id": 6,
                        //     //         "date": "10.10.2020",
                        //     //         "sinking": "825",
                        //     //         "sinkingPlan": "850"
                        //     //     },
                        //     //     {
                        //     //         "id": 7,
                        //     //         "date": "11.10.2020",
                        //     //         "sinking": "835",
                        //     //         "sinkingPlan": "860"
                        //     //     },
                        //     //     {
                        //     //         "id": 8,
                        //     //         "date": "12.10.2020",
                        //     //         "sinking": "860",
                        //     //         "sinkingPlan": "870"
                        //     //     },
                        //     //     {
                        //     //         "id": 9,
                        //     //         "date": "13.10.2020",
                        //     //         "sinking": "875",
                        //     //         "sinkingPlan": "880"
                        //     //     },
                        //     //     {
                        //     //         "id": 10,
                        //     //         "date": "14.10.2020",
                        //     //         "sinking": "880",
                        //     //         "sinkingPlan": "890"
                        //     //     },
                        //     //     {
                        //     //         "id": 11,
                        //     //         "date": "15.10.2020",
                        //     //         "sinking": "890",
                        //     //         "sinkingPlan": "900"
                        //     //     }
                        //     // ],
                        // },

                        // {
                        //     "id": 7,
                        //     "name": "Проходка скв. 439",
                        //     "component": "LineChart",
                        //     "data": [
                        //         {
                        //             "id": 1,
                        //             "date": "05.10.2020",
                        //             "sinking": "800",
                        //             "sinkingPlan": "800"
                        //         },
                        //         {
                        //             "id": 2,
                        //             "date": "06.10.2020",
                        //             "sinking": "805",
                        //             "sinkingPlan": "810"
                        //         },
                        //         {
                        //             "id": 3,
                        //             "date": "07.10.2020",
                        //             "sinking": "810",
                        //             "sinkingPlan": "820"
                        //         },
                        //         {
                        //             "id": 4,
                        //             "date": "08.10.2020",
                        //             "sinking": "812",
                        //             "sinkingPlan": "830"
                        //         },
                        //         {
                        //             "id": 5,
                        //             "date": "09.10.2020",
                        //             "sinking": "820",
                        //             "sinkingPlan": "840"
                        //         },
                        //         {
                        //             "id": 6,
                        //             "date": "10.10.2020",
                        //             "sinking": "825",
                        //             "sinkingPlan": "850"
                        //         },
                        //         {
                        //             "id": 7,
                        //             "date": "11.10.2020",
                        //             "sinking": "835",
                        //             "sinkingPlan": "860"
                        //         },
                        //         {
                        //             "id": 8,
                        //             "date": "12.10.2020",
                        //             "sinking": "860",
                        //             "sinkingPlan": "870"
                        //         },
                        //         {
                        //             "id": 9,
                        //             "date": "13.10.2020",
                        //             "sinking": "875",
                        //             "sinkingPlan": "880"
                        //         },
                        //         {
                        //             "id": 10,
                        //             "date": "14.10.2020",
                        //             "sinking": "880",
                        //             "sinkingPlan": "890"
                        //         },
                        //         {
                        //             "id": 11,
                        //             "date": "15.10.2020",
                        //             "sinking": "890",
                        //             "sinkingPlan": "900"
                        //         }
                        //     ],
                        // },
                        // {
                        //     "id": 6,
                        //     "name": "График выполнения работ по проектам",
                        //     "component": "TimeLineChart",
                        // },
                        // {
                        //     "id": 1,
                        //     "name": "Подрядчики и количество работ",
                        //     "component": "DonutChart",
                        // },
                        // {
                        //     "id": 4,
                        //     "name": "Статус сотрудников",
                        //     "component": "Deputy",
                        // },
                        // {
                        //     "id": 5,
                        //     "name": "Задачи по ЗГД",
                        //     "component": "StackedChart",
                        // },
                    ]
                },
                {
                    "id": 2,
                    "name": "ГЕОЛОГИЯ",
                    "component": "Dashboard",
                    "panel": [
                        {
                            "id": 1,
                            "name": "Подрядчики и количество работ",
                            "component": "DonutChart",
                        },
                        // {
                        //     "id": 2,
                        //     "name": "Проходка скв. 891",
                        //     "component": "LineChart",
                        //     "data": [
                        //         {
                        //             "id": 1,
                        //             "date": "05.10.2020",
                        //             "sinking": "800",
                        //             "sinkingPlan": "800"
                        //         },
                        //         {
                        //             "id": 2,
                        //             "date": "06.10.2020",
                        //             "sinking": "805",
                        //             "sinkingPlan": "820"
                        //         },
                        //         {
                        //             "id": 3,
                        //             "date": "07.10.2020",
                        //             "sinking": "810",
                        //             "sinkingPlan": "840"
                        //         },
                        //         {
                        //             "id": 4,
                        //             "date": "08.10.2020",
                        //             "sinking": "812",
                        //             "sinkingPlan": "860"
                        //         },
                        //         {
                        //             "id": 5,
                        //             "date": "09.10.2020",
                        //             "sinking": "820",
                        //             "sinkingPlan": "870"
                        //         },
                        //         {
                        //             "id": 6,
                        //             "date": "10.10.2020",
                        //             "sinking": "825",
                        //             "sinkingPlan": "880"
                        //         },
                        //         {
                        //             "id": 7,
                        //             "date": "11.10.2020",
                        //             "sinking": "835",
                        //             "sinkingPlan": "890"
                        //         },
                        //         {
                        //             "id": 8,
                        //             "date": "12.10.2020",
                        //             "sinking": "860",
                        //             "sinkingPlan": "910"
                        //         },
                        //         {
                        //             "id": 9,
                        //             "date": "13.10.2020",
                        //             "sinking": "875",
                        //             "sinkingPlan": "920"
                        //         },
                        //         {
                        //             "id": 10,
                        //             "date": "14.10.2020",
                        //             "sinking": "880",
                        //             "sinkingPlan": "930"
                        //         },
                        //         {
                        //             "id": 11,
                        //             "date": "15.10.2020",
                        //             "sinking": "890",
                        //             "sinkingPlan": "940"
                        //         }
                        //     ],
                        // },
                        // {
                        //     "id": 3,
                        //     "name": "Проходка скв. 439",
                        //     "component": "LineChart",
                        //     "data": [
                        //         {
                        //             "id": 1,
                        //             "date": "05.10.2020",
                        //             "sinking": "800",
                        //             "sinkingPlan": "800"
                        //         },
                        //         {
                        //             "id": 2,
                        //             "date": "06.10.2020",
                        //             "sinking": "805",
                        //             "sinkingPlan": "810"
                        //         },
                        //         {
                        //             "id": 3,
                        //             "date": "07.10.2020",
                        //             "sinking": "810",
                        //             "sinkingPlan": "820"
                        //         },
                        //         {
                        //             "id": 4,
                        //             "date": "08.10.2020",
                        //             "sinking": "812",
                        //             "sinkingPlan": "830"
                        //         },
                        //         {
                        //             "id": 5,
                        //             "date": "09.10.2020",
                        //             "sinking": "820",
                        //             "sinkingPlan": "840"
                        //         },
                        //         {
                        //             "id": 6,
                        //             "date": "10.10.2020",
                        //             "sinking": "825",
                        //             "sinkingPlan": "850"
                        //         },
                        //         {
                        //             "id": 7,
                        //             "date": "11.10.2020",
                        //             "sinking": "835",
                        //             "sinkingPlan": "860"
                        //         },
                        //         {
                        //             "id": 8,
                        //             "date": "12.10.2020",
                        //             "sinking": "860",
                        //             "sinkingPlan": "870"
                        //         },
                        //         {
                        //             "id": 9,
                        //             "date": "13.10.2020",
                        //             "sinking": "875",
                        //             "sinkingPlan": "880"
                        //         },
                        //         {
                        //             "id": 10,
                        //             "date": "14.10.2020",
                        //             "sinking": "880",
                        //             "sinkingPlan": "890"
                        //         },
                        //         {
                        //             "id": 11,
                        //             "date": "15.10.2020",
                        //             "sinking": "890",
                        //             "sinkingPlan": "900"
                        //         }
                        //     ],
                        // },
                        // },
                        // {
                        //     "id": 1,
                        //     "name": "Подрядчики и количество работ",
                        //     "component": "DonutChart",
                        // },
                        // {
                        //     "id": 4,
                        //     "name": "Статус сотрудников",
                        //     "component": "Deputy",
                        // },
                        // {
                        //     "id": 5,
                        //     "name": "Задачи по ЗГД",
                        //     "component": "StackedChart",
                        // },
                        // {
                        //     "id": 6,
                        //     "name": "График выполнения работ по проектам",
                        //     "component": "TimeLineChart",
                        // },
                    ]
                },
                {
                    "id": 3,
                    "name": "БУРЕНИЕ",
                    "component": "Dashboard",
                    "panel": [
                        // {
                        //     "id": 2,
                        //     "name": "Проходка скв. 891",
                        //     "component": "LineChart",
                        //     "data": [
                        //         {
                        //             "id": 1,
                        //             "date": "05.10.2020",
                        //             "sinking": "800",
                        //             "sinkingPlan": "800"
                        //         },
                        //         {
                        //             "id": 2,
                        //             "date": "06.10.2020",
                        //             "sinking": "805",
                        //             "sinkingPlan": "820"
                        //         },
                        //         {
                        //             "id": 3,
                        //             "date": "07.10.2020",
                        //             "sinking": "810",
                        //             "sinkingPlan": "840"
                        //         },
                        //         {
                        //             "id": 4,
                        //             "date": "08.10.2020",
                        //             "sinking": "812",
                        //             "sinkingPlan": "860"
                        //         },
                        //         {
                        //             "id": 5,
                        //             "date": "09.10.2020",
                        //             "sinking": "820",
                        //             "sinkingPlan": "870"
                        //         },
                        //         {
                        //             "id": 6,
                        //             "date": "10.10.2020",
                        //             "sinking": "825",
                        //             "sinkingPlan": "880"
                        //         },
                        //         {
                        //             "id": 7,
                        //             "date": "11.10.2020",
                        //             "sinking": "835",
                        //             "sinkingPlan": "890"
                        //         },
                        //         {
                        //             "id": 8,
                        //             "date": "12.10.2020",
                        //             "sinking": "860",
                        //             "sinkingPlan": "910"
                        //         },
                        //         {
                        //             "id": 9,
                        //             "date": "13.10.2020",
                        //             "sinking": "875",
                        //             "sinkingPlan": "920"
                        //         },
                        //         {
                        //             "id": 10,
                        //             "date": "14.10.2020",
                        //             "sinking": "880",
                        //             "sinkingPlan": "930"
                        //         },
                        //         {
                        //             "id": 11,
                        //             "date": "15.10.2020",
                        //             "sinking": "890",
                        //             "sinkingPlan": "940"
                        //         }
                        //     ],
                        // },
                        // {
                        //     "id": 3,
                        //     "name": "Проходка скв. 439",
                        //     "component": "LineChart",
                        //     "data": [
                        //         {
                        //             "id": 1,
                        //             "date": "05.10.2020",
                        //             "sinking": "800",
                        //             "sinkingPlan": "800"
                        //         },
                        //         {
                        //             "id": 2,
                        //             "date": "06.10.2020",
                        //             "sinking": "805",
                        //             "sinkingPlan": "810"
                        //         },
                        //         {
                        //             "id": 3,
                        //             "date": "07.10.2020",
                        //             "sinking": "810",
                        //             "sinkingPlan": "820"
                        //         },
                        //         {
                        //             "id": 4,
                        //             "date": "08.10.2020",
                        //             "sinking": "812",
                        //             "sinkingPlan": "830"
                        //         },
                        //         {
                        //             "id": 5,
                        //             "date": "09.10.2020",
                        //             "sinking": "820",
                        //             "sinkingPlan": "840"
                        //         },
                        //         {
                        //             "id": 6,
                        //             "date": "10.10.2020",
                        //             "sinking": "825",
                        //             "sinkingPlan": "850"
                        //         },
                        //         {
                        //             "id": 7,
                        //             "date": "11.10.2020",
                        //             "sinking": "835",
                        //             "sinkingPlan": "860"
                        //         },
                        //         {
                        //             "id": 8,
                        //             "date": "12.10.2020",
                        //             "sinking": "860",
                        //             "sinkingPlan": "870"
                        //         },
                        //         {
                        //             "id": 9,
                        //             "date": "13.10.2020",
                        //             "sinking": "875",
                        //             "sinkingPlan": "880"
                        //         },
                        //         {
                        //             "id": 10,
                        //             "date": "14.10.2020",
                        //             "sinking": "880",
                        //             "sinkingPlan": "890"
                        //         },
                        //         {
                        //             "id": 11,
                        //             "date": "15.10.2020",
                        //             "sinking": "890",
                        //             "sinkingPlan": "900"
                        //         }
                        //     ],
                        // },
                        // {
                        //     "id": 1,
                        //     "name": "Подрядчики и количество работ",
                        //     "component": "DonutChart",
                        // },
                        // {
                        //     "id": 4,
                        //     "name": "Статус сотрудников",
                        //     "component": "Deputy",
                        // },
                        {
                            "id": 5,
                            "name": "Задачи по ЗГД",
                            "component": "StackedChart",
                        },
                        // {
                        //     "id": 6,
                        //     "name": "График выполнения работ по проектам",
                        //     "component": "TimeLineChart",
                        // },
                    ]
                },
                {
                    "id": 4,
                    "name": "ЭКОНОМИКА",
                    "component": "Dashboard",
                    "panel": [
                        // {
                        //     "id": 2,
                        //     "name": "Проходка скв. 891",
                        //     "component": "LineChart",
                        //     "data": [
                        //         {
                        //             "id": 1,
                        //             "date": "05.10.2020",
                        //             "sinking": "800",
                        //             "sinkingPlan": "800"
                        //         },
                        //         {
                        //             "id": 2,
                        //             "date": "06.10.2020",
                        //             "sinking": "805",
                        //             "sinkingPlan": "820"
                        //         },
                        //         {
                        //             "id": 3,
                        //             "date": "07.10.2020",
                        //             "sinking": "810",
                        //             "sinkingPlan": "840"
                        //         },
                        //         {
                        //             "id": 4,
                        //             "date": "08.10.2020",
                        //             "sinking": "812",
                        //             "sinkingPlan": "860"
                        //         },
                        //         {
                        //             "id": 5,
                        //             "date": "09.10.2020",
                        //             "sinking": "820",
                        //             "sinkingPlan": "870"
                        //         },
                        //         {
                        //             "id": 6,
                        //             "date": "10.10.2020",
                        //             "sinking": "825",
                        //             "sinkingPlan": "880"
                        //         },
                        //         {
                        //             "id": 7,
                        //             "date": "11.10.2020",
                        //             "sinking": "835",
                        //             "sinkingPlan": "890"
                        //         },
                        //         {
                        //             "id": 8,
                        //             "date": "12.10.2020",
                        //             "sinking": "860",
                        //             "sinkingPlan": "910"
                        //         },
                        //         {
                        //             "id": 9,
                        //             "date": "13.10.2020",
                        //             "sinking": "875",
                        //             "sinkingPlan": "920"
                        //         },
                        //         {
                        //             "id": 10,
                        //             "date": "14.10.2020",
                        //             "sinking": "880",
                        //             "sinkingPlan": "930"
                        //         },
                        //         {
                        //             "id": 11,
                        //             "date": "15.10.2020",
                        //             "sinking": "890",
                        //             "sinkingPlan": "940"
                        //         }
                        //     ],
                        // },
                        // {
                        //     "id": 3,
                        //     "name": "Проходка скв. 439",
                        //     "component": "LineChart",
                        //     "data": [
                        //         {
                        //             "id": 1,
                        //             "date": "05.10.2020",
                        //             "sinking": "800",
                        //             "sinkingPlan": "800"
                        //         },
                        //         {
                        //             "id": 2,
                        //             "date": "06.10.2020",
                        //             "sinking": "805",
                        //             "sinkingPlan": "810"
                        //         },
                        //         {
                        //             "id": 3,
                        //             "date": "07.10.2020",
                        //             "sinking": "810",
                        //             "sinkingPlan": "820"
                        //         },
                        //         {
                        //             "id": 4,
                        //             "date": "08.10.2020",
                        //             "sinking": "812",
                        //             "sinkingPlan": "830"
                        //         },
                        //         {
                        //             "id": 5,
                        //             "date": "09.10.2020",
                        //             "sinking": "820",
                        //             "sinkingPlan": "840"
                        //         },
                        //         {
                        //             "id": 6,
                        //             "date": "10.10.2020",
                        //             "sinking": "825",
                        //             "sinkingPlan": "850"
                        //         },
                        //         {
                        //             "id": 7,
                        //             "date": "11.10.2020",
                        //             "sinking": "835",
                        //             "sinkingPlan": "860"
                        //         },
                        //         {
                        //             "id": 8,
                        //             "date": "12.10.2020",
                        //             "sinking": "860",
                        //             "sinkingPlan": "870"
                        //         },
                        //         {
                        //             "id": 9,
                        //             "date": "13.10.2020",
                        //             "sinking": "875",
                        //             "sinkingPlan": "880"
                        //         },
                        //         {
                        //             "id": 10,
                        //             "date": "14.10.2020",
                        //             "sinking": "880",
                        //             "sinkingPlan": "890"
                        //         },
                        //         {
                        //             "id": 11,
                        //             "date": "15.10.2020",
                        //             "sinking": "890",
                        //             "sinkingPlan": "900"
                        //         }
                        //     ],
                        // },
                        // {
                        //     "id": 1,
                        //     "name": "Подрядчики и количество работ",
                        //     "component": "DonutChart",
                        // },
                        // {
                        //     "id": 4,
                        //     "name": "Статус сотрудников",
                        //     "component": "Deputy",
                        // },
                        // {
                        //     "id": 5,
                        //     "name": "Задачи по ЗГД",
                        //     "component": "StackedChart",
                        // },
                        {
                            "id": 6,
                            "name": "График выполнения работ по проектам",
                            "component": "TimeLineChart",
                        },
                    ]
                },
            ];


            ctx.commit('updateDashboards', d);
        },
    },
    mutations: {
        updateDashboards(state, dashboards) {
            state.dashboards = dashboards;
        }
    },
    state: {
        dashboards: []
    },
    getters: {
        getDashboards(state) {
            return state.dashboards;
        }
    }
}
