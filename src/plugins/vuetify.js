// plugins/vuetify.js

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "myDarkTheme",
    themes: {
      myDarkTheme: {
        dark: true,
        colors: {
          // primary: "#009688", // Teal
          // secondary: "#26a69a",
          primary: "#004687", // Blue
          secondary: "#03A9F4", // Light Blue
          background: "#121212",
          surface: "#1e1e1e",
          "on-primary": "#ffffff",
          "on-surface": "#ffffff",
        },
      },
    },
  },
});

// /**
//  * plugins/vuetify.js
//  *
//  * Framework documentation: https://vuetifyjs.com`
//  */

// // Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// // Composables
// import { createVuetify } from 'vuetify'

// // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   theme: {
//     defaultTheme: 'dark',
//   },
// })
