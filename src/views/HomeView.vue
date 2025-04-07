<script>
import { mapState } from 'pinia';
import { useProductosStore } from '../stores/almacenProductos';

export default {
  computed: {
    ...mapState(useProductosStore, ['losTextos']),
  },
};
</script>

<template>
  <div class="nosotros">
    <h1>Nuestros productos destacados.</h1>
    
    <!-- Carousel consultado en https://getbootstrap.com/docs/5.3/components/carousel/ -->
    <div
      id="carouselExample"
      class="carousel slide"
      data-bs-ride="carousel"
      v-if="losTextos.carrousel && losTextos.carrousel.length"
    >
   
      <div class="carousel-inner">
        <div
          v-for="(item, index) in losTextos.carrousel" :class="['carousel-item', { active: index === 0 }]">
          <img :src="item.imagen" class="d-block w-100" :alt="item.titulo" />
          <h5>{{ item.titulo  }}</h5>
        </div>
      </div>

  
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>

  <!--Boton a link Productos-->
  <div class="botonIraComprar">
  <router-link to="/productos">
  <button type="button" class="btn btn-success">Ir a Comprar</button>
</router-link>
</div>

</template>




<style scoped>
.nosotros {
  padding: 20px;
  text-align: center;
  background-color: white; 
  color: black; 
}

.carousel img {
  object-fit: scale-down;
  height: 50vh; /* consultado en https://es.stackoverflow.com/questions/13638/c%C3%B3mo-hacer-el-tama%C3%B1o-de-mis-im%C3%A1genes-de-carousel-del-tama%C3%B1o-de-mi-div-principal*/
  width: 100%;
  background-color: white;
}

.botonIraComprar {
  display: flex; 
  justify-content: center;
  align-items: center; 
  margin-top: 20px; 
}

</style>
