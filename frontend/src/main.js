import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router/route";
import './assets/style.css'
    


import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";



const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(routes);
app.mount("#app");
