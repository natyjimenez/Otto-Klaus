import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/views/Login";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/about",
      name: "About",
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: {
        autentificado: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario);
  let autorizacion = to.matched.some(record => record.meta.autentificado);

  if (autorizacion && !usuario) {
    next("login");
  } else if (!autorizacion && usuario) {
    next("about");
  } else {
    next();
  }
});

export default router;
