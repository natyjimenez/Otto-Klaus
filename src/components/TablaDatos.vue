<template>
  <div class="tabla">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"> Código </th>
            <th class="text-left"> Nombre </th>
            <th class="text-left"> Stock </th>
            <th class="text-left"> Precio </th>
            <th class="text-left"> Acciones </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in Productos" :key="item.name">
            <td>{{ item.codigo }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.precio }}</td>
            <td><v-btn class="btnEdit" fab small dark><v-icon>mdi-pencil</v-icon></v-btn>
            <v-btn class="btnDelete" fab small dark  @click="deleteProductos(item.id)"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>

      </template>
    </v-simple-table>
    <hr>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TablaDatos",
  data() {
    return {
      
    };
  },
  computed: {
      ...mapState("Datos",  ["Productos"])
  },
  methods: {
    ...mapActions(["deleteProductos"]),
    deleteProductos(id){
          this.deleteProductos(id);
        },
  }
};
</script>


<style>
.tabla {
  margin-top: 50px;
}
.btnDelete {
  background-color: red !important;
}
.btnEdit {
  background-color: rgb(236, 164, 6) !important;
}
</style>
