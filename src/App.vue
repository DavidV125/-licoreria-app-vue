<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { mapActions } from 'pinia'
import { useProductosStore } from './stores/almacenProductos'
export default{
  components:{
    HelloWorld
  },
  data(){
    return{

    }
  },
  methods:{
    ...mapActions(useProductosStore, ['insertarProductos', 'insertarUsuarios', 'insertarTextos']),
  },
  created(){
    // consumo endpoint productos
    let url = "http://localhost:3000/licores";
    fetch(url)
    .then((respuesta)=>{
            respuesta.json()
            .then((objRespuesta)=>{
              console.log(objRespuesta);
              this.insertarProductos(objRespuesta);

            })
            .catch((errObjRespuesta)=>{
              console.log('Error en la transformacion json: ', errObjRespuesta);
            });
    })
    .catch((error)=>{
      console.log('Error en el fetch: ', error);
    });
      // consumo endpoint usuarios
      let urlUsuarios = "http://localhost:3000/usuarios";
      fetch(urlUsuarios)
      .then((respuestaUsuarios)=>{
              respuestaUsuarios.json()
              .then((objRespuestaUsuarios)=>{
                console.log(objRespuestaUsuarios);
                this.insertarUsuarios(objRespuestaUsuarios);
              })
              .catch((errObjRespuestaUsuarios)=>{
                console.log('Error en la transformacion json usuarios: ', errObjRespuestaUsuarios);
              });
      })
      .catch((errorUsuarios)=>{
        console.log('Error en el fetch usuarios: ', errorUsuarios);
      });
      
      // consumo endpoint principal
      let urlNosotros = "http://localhost:3000/nosotros";
      fetch(urlNosotros)
      .then((respuestaNosotros)=>{
              respuestaNosotros.json()
              .then((objRespuestaNosotros)=>{
                console.log(objRespuestaNosotros);
                this.insertarTextos(objRespuestaNosotros);
              })
              .catch((errObjRespuestaNosotros)=>{
                console.log('Error en la transformacion json nosotros: ', errObjRespuestaNosotros);
              });
      })
      .catch((errorNosotros)=>{
        console.log('Error en el fetch nosotros: ', errorNosotros);
      });

  }
}
</script>

<template>
  <div id="divAppVue">
              <header>
              <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

              <div class="wrapper">
                <HelloWorld msg="" />

                <nav class="navbar">
                  <h3>Licores ChileMundo</h3>
                  <RouterLink to="/">Login</RouterLink> |
                  <RouterLink to="/nosotros">Nosotros</RouterLink> |
                  <RouterLink to="/productos">Licores</RouterLink> <br>
                </nav>
              </div>
            </header>

            <div id="divRouterView">
              <p></p>
              <RouterView />
              <p></p>
            </div>
  </div>
</template>

<style scoped>

.navbar {
  display: flex;
  align-items: left;
  justify-content: space-between;
  background-color: #000; 
  padding: 10px 20px;
  color: #fff;
}


.site-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff; /* White text */
}


.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}

a {
    color: white; 
    text-decoration: none;  /*para mantener links en blanco*/
}
a:hover {
    color: #f8f9fa; 
}

.nav-links a:hover {
  text-decoration: underline;
}


#divRouterView {
  margin-top: 20px;
}

</style>
