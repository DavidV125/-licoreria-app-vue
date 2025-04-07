<script>
import { mapState } from 'pinia';
import { useProductosStore } from '../stores/almacenProductos';
export default {
  data() {
    return {
      numeroOrden: this.generarNumeroOrden(),
    };
  },
  methods: {
    generarNumeroOrden() {
      return Math.floor(10000 + Math.random() * 90000); // consultado en https://stackoverflow.com/questions/8476152/random-number-with-fixed-length
    }
  },
  computed: {
     ...mapState(useProductosStore, ['totalPagar']),
  },
};
</script>

<template>
  <div class="contenedorConfirmacion">
    <h2>Confirmación</h2>
    <div class="cajaConfirmacion">
      <p>
        La Orden <strong>N°{{ numeroOrden }}</strong> ha sido confirmada y ya la estamos preparando!
      </p>
      <p><strong>Total a Pagar:</strong> ${{ totalPagar }}</p>
      <button class="btn btn-light"> <!--boton para volver a componente nosotros-->
            <router-link to="/nosotros">Volver a Página</router-link>
        </button>
        </div></div>
</template>

<style scoped>
.contenedorConfirmacion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
}

.cajaConfirmacion {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  max-width: 400px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.confirmacion-box p {
  margin: 10px 0;
  font-size: 1.2rem;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
}
</style>
