import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBsJg2UPHXYJGRAmt8_a-cRUngaWMKsQz0",
  authDomain: "otto-klaus-5a72a.firebaseapp.com",
  databaseURL: "https://otto-klaus-5a72a.firebaseio.com",
  projectId: "otto-klaus-5a72a",
  storageBucket: "otto-klaus-5a72a.appspot.com",
  messagingSenderId: "922313421",
  appId: "1:922313421:web:2b879c8d6087726b907f84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
