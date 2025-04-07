
import { defineStore } from 'pinia'

export const useProductosStore = defineStore('almacenProductos', {
  state: () => ({
    losProductos:[],
    losUsuarios:[],
    lasCompras:[],
    losTextos:{},
    isAuthenticated : false,
    totalPagar:0, //para el componente confirmacion
  }),
  actions: {
    insertarProductos(arregloProductos){
      this.losProductos = arregloProductos;
    },
    insertarUsuarios(arregloUsuarios){
      this.losUsuarios = arregloUsuarios;
    },
    login(){
      this.isAuthenticated = true;
    },
    logout(){
      this.isAuthenticated = false;
    },
    insertarDatoCompras(unaCompra){
      // console.log('action insertarDatoCompras: ', unaCompra);
      this.lasCompras.push(unaCompra);
    },
    eliminarDatoCompras(unIndice){
      this.lasCompras.splice(unIndice,1);
    },
    insertarTextos(unosTextos){
      this.losTextos = unosTextos;
    },
    guardarTotalPagar(total) {
      this.totalPagar = total;
  },
  },
  getters: {
    totalizar() {
        let descuento = 0;
        let totalConDescuento = 0;
        let laTotalizacion = 0;

        if (this.lasCompras.length > 0) {
            for (let compra of this.lasCompras) {
                laTotalizacion += Number(compra.precioProducto); //agrega el precio de Producto a laTotalizcion
            }

            if (laTotalizacion > 200000) {
                descuento = laTotalizacion * 0.1; //sies mas de 200000,calcula descuento de 10% y lo almacena en descuento
            }

            totalConDescuento = laTotalizacion - descuento; 

            return {
                laTotalizacion,
                descuento,
                total: totalConDescuento,
            };
        } else {

            return {
                laTotalizacion: 0,
                descuento: 0,
                total: 0,
            };
        }
    },
},
})