<template>
  <div class="hello">
    <v-container>
      <button @click="logout" class="btnLogout">Logout</button>
      <TablaDatos />
      <Agregar />
      </v-container>
  </div>
</template>


<script>
import firebase from "firebase";
import TablaDatos from "@/components/TablaDatos.vue";
import Agregar from "@/components/Agregar.vue";

export default {
  name: "About",
  components: {
    TablaDatos,
    Agregar,
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>


<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btnLogout {
  background-color: rgb(0, 122, 204);
  color: white;
  font-weight: bolder;
  padding: 10px;
  border-radius: 5px;
}
</style>
