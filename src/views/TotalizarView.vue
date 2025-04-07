<script>
import { mapState, mapActions } from 'pinia';
import { useProductosStore } from '../stores/almacenProductos';
export default{
    data(){
        return{
            titulo:'Resumen de la Compra'
        }
    },
    computed:{
        ...mapState(useProductosStore, ['totalizar'])
    },
    methods: {
        ...mapActions(useProductosStore, ['guardarTotalPagar']),
        irAPagar() {
            this.guardarTotalPagar(this.totalizar.total); //guardarel total de carrito en store 

        },
    },
}
</script>

<template>
    <div id="divTotalizar">
        <h3 v-html="titulo"></h3>
        <p>Subtotal Productos: ${{ totalizar.laTotalizacion }}</p>
        <hr>
        <p><b>Descuento Aplicado: ${{ totalizar.descuento }}</b></p>
        <hr>
        <p><b>Total a Pagar: ${{ totalizar.total }}</b></p>
        <hr>
        <div class="avisoDescuento">
        <p><i>Descuento del 10% si tu compra es sobre $200.000.</i></p>
    </div>
    <br>
    <div class="botonComprar">
    <router-link to="/confirmacion" class="btn btn-success btn-pagar" v-on:click="irAPagar">
    Ir a pagar
</router-link>
</div>
    </div>
</template>

<style scoped>
#divTotalizar {
    background-color: whitesmoke;
    color: black;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 1rem;
}

.avisoDescuento {
    background-color: #ffebcc;
    color: #a94442; 
    border: 1px solid #f5c6cb;
    border-radius: 5px;
    padding: 10px; 
    margin-top: 20px;
    text-align: center; 
    font-size: 20px; 
    font-family: Arial, sans-serif; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.botonComprar {
  display: flex; 
  justify-content: center;
  align-items: center; 
  margin-top: 20px; 
}


</style>