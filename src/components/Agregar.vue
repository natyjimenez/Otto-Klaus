<template>
  <div class="addContainer">
    <v-container>
      <h3 class="tituloAdd">Agregar Productos</h3>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.codigo" label="Código">
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.nombre" label="Nombre">
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.stock" label="Stock">
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.precio" label="Precio">
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-btn class="btnAdd" @click="Agregar(); ClearData();" depressed>Agregar Producto</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "Agregar",
  data: () => ({
    juguete: {
      codigo: "",
      nombre: "",
      stock: "",
      precio: "",
    },
  }),
  methods: {
    ...mapActions("Datos", ["addData"]),
    Agregar() {
      this.addData(this.juguete);
    },
    ClearData() {
      this.juguete.nombre = "";
      this.juguete.codigo = "";
      this.juguete.precio = "";
      this.juguete.stock = "";
    },
  },
};
</script>


<style>
.addContainer {
  margin-top: 50px;
}
.tituloAdd {
  text-align: left;
  padding-left: 10px;
  color: rgb(3, 139, 3);
}
.btnAdd {
  background-color: rgb(3, 139, 3) !important;
  color: #fff !important;
  font-weight: bolder;
}
</style>
