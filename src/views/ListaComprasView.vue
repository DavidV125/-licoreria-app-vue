<script>
import { mapState, mapActions } from 'pinia';
import { useProductosStore } from '../stores/almacenProductos';

export default{
    data(){
        return{
            titulo:''
        }
    },
    methods:{
        ...mapActions(useProductosStore,['eliminarDatoCompras']),
        eliminar(elIndice){
            console.log(elIndice);
            this.eliminarDatoCompras(elIndice);
        }
    },
    computed:{
        ...mapState(useProductosStore,['lasCompras']),
    }
}
</script>
<template>
    <div id="divLista">
        <h3 v-html="titulo"></h3>
        <div class="contenedor">
            <div v-for="(unaCompra, index) in lasCompras" class="compra">
                <div class="compra-detalle">
                <p> {{ unaCompra.nombreProducto }} - ${{ unaCompra.precioProducto }}
                    </p>
                </div>
                <button class="btn btn-danger btn-eliminar" v-on:click="eliminar(index)">X</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#divLista{
    background-color: whitesmoke;
    color: black;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}
.contenedor{
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap
}
.compra{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 3%;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.btn-eliminar {
    margin-left: 1rem;
}
</style>