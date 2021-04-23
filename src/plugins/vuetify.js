import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#7868e6",
        success: "#80ffdb",
        warning: "#f9f871",
        danger: "#ff5e78",
        info: "#bbf1fa",
      },
    },
  },
});
