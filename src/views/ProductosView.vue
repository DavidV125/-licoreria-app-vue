<script>
import { mapState, mapActions } from 'pinia';
import { useProductosStore } from '../stores/almacenProductos'
import ListaComprasView from './ListaComprasView.vue';
import TotalizarView from './TotalizarView.vue';

export default{
    components:{
        ListaComprasView,
        TotalizarView
    },
    data(){
        return{
            titulo:'Nuestros Licores'
        }
    },
    methods:{
        ...mapActions(useProductosStore, ['insertarDatoCompras']),
        seleccionar(unId){
            console.log('El id seleccionado: ', unId);
            const currentDate = new Date().toDateString();
            console.log(currentDate);
            let elNombreProducto = this.losProductos[unId].nombre;
            let elPrecioProducto = this.losProductos[unId].precio;
            let laCompra = {
                idProducto: unId,
                nombreProducto: elNombreProducto,
                precioProducto: elPrecioProducto,
                fechaCompra: currentDate
            };
            this.insertarDatoCompras(laCompra);
        }
    },
    computed:{
        ...mapState(useProductosStore, ['losProductos'])  
    },
    mounted(){
        alert('¡Oferta especial! 10% de descuento en licores. ¡No te lo pierdas!'); //alerta para cuando Licoresview abra
    }
}
</script>

<template>
    <div id="divProductos">
        <h2 v-html="titulo"></h2>

        <div class="container">
            <div class="row">
                <!-- Contenedor de cards -->
                <div class="col-md-9">
                    <div class="row">
                        <div v-for="producto in losProductos" :key="producto.id" class="col-md-4 mb-4">
                            <div class="card" style="width: 100%;">
                                <img 
                                    v-bind:src="producto.imagen" 
                                    class="card-img-top img-fluid producto-imagen" 
                                    v-bind:alt="producto.nombre"
                                >
                                <div class="card-body">
                                    <h5 class="card-title">{{ producto.nombre }}</h5>
                                    <p class="card-text">{{ producto.descripcion }}.</p>
                                    <p class="card-text">Grados de Alcohol: {{ producto.grados }}.</p>
                                    <button class="btn btn-primary" v-on:click="seleccionar(producto.id)">
                                        ${{ producto.precio }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Columa carrito compras -->
                <div class="col-md-3 productos-container">
                    <p class="productoTitulo">Mi Carrito de Compras</p>
                    <ListaComprasView />
                    <TotalizarView />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contenedorFlex{
    display: flex;
    flex-wrap: wrap;
}
#divProductos{
    background-color: whitesmoke;
    margin:2%;
}


.productos-container {
    background-color: whitesmoke;
    color: black;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}
.productoTitulo {
    font-weight: bold;
    margin-bottom: 1rem;
}
.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.producto-imagen {

    width: 50%;
    height: 50%;
    margin: auto;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}

h2{
    text-align:center;
    padding:10%;
}
</style>