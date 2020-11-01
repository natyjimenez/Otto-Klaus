import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    Productos: [],
  },
  getters: {},
  mutations: {
    setData(state, payload) {
      state.Productos.push(payload);
    },
    AddData(state, payload) {
      state.Productos.push(payload);
    },
  },
  actions: {
    // Traer Data
    async getData({ commit }) {
      const db = await firebase.firestore().collection("productos").get();
      db.forEach((el) => {
        const producto = {
          id: el.id,
          nombre: el.data().nombre,
          codigo: el.data().codigo,
          stock: el.data().stock,
          precio: el.data().precio,
        };
        commit("setData", producto);
      });
    },

    // Agregar Producto
    async addData({ commit }, payload) {
      const precio = Number(payload.precio);
      const stock = Number(payload.stock);
      const nombre = payload.nombre;
      const codigo = payload.codigo.toUpperCase();

      const juguete = {
        precio,
        stock,
        nombre,
        codigo,
      };

      //add firestore
      try {
        await firebase.firestore().collection("productos").add(juguete)     
      } catch (error) {
          console.log("error en carga:", error)      
      }
     
      //add store
      commit("AddData", juguete);
    },

    // Eliminar Producto
    deleteProductos({ commit }, id) {
      firebase.firestore().collection("productos").doc(id).delete();
    },
  },
};
