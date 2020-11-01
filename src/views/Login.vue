<template>
  <div>
    <h2 class="tituloLogin">Login</h2>
    <form class="formulario" @submit.prevent="login">
      <input class="txtInput" v-model="usuario" type="text" placeholder="Usuario"/>
      <input class="txtInput" v-model="contrasena" type="password" placeholder="Contraseña"/>
      <button class="btnAcceder btn btn-primary" type="submit">Acceder</button>
    </form>
    <div class="datosLogueo">
      <h4 class="titulo">*** Datos para loguearse ***</h4>
      <h5 class="texto">
        Usuario: walterwhite@gmail.com<br />
        Contraseña: 123456
      </h5>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      usuario: "",
      contrasena: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          user => this.$router.replace("about")
        )
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }
};
</script>


<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tituloLogin {
  color: rgb(65, 168, 236);
}
form > * {
  display: block; 
}
.formulario {
  margin-top: 5px;
}
.txtInput {
  border-style: solid;
  border-color: rgb(134, 134, 134);
  border-radius: 5px;
  padding: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
}
.btnAcceder {
  background-color: rgb(0, 122, 204);
  color: white;
  font-weight: bolder;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 60px;
}
.datosLogueo {
  margin-top: 60px;
  color: rgb(134, 134, 134);
}
.titulo {
  font-size: 16px;
}
.texto {
  font-size: 14px;
}
</style>
