import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vue from "vue";
import * as Sentry from "@sentry/vue";

Sentry.init({
  Vue: Vue,
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
});
new Vue({
  render: h => h(App),
}).$mount('#app')
