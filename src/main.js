import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'

Vue.config.productionTip = false;

Vue.use(Vuetify);

// import ru from 'vuetify/src/locale/ru'

new Vue({
  vuetify : new Vuetify({
    icons: {
      iconfont: 'md',
    },
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          anchor: '#8c9eff',
        },
      },
    },
  }),
  store,
  render: h => h(App),
}).$mount('#app');
