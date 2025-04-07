<script>
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import { useProductosStore } from '../stores/almacenProductos';
export default{
    data(){
        return{
            titulo:'Este es el componente LoginView.vue',
            usuario:'',
            contrasena:''
        }
    },
    methods:{
        ...mapActions(useProductosStore,['login', 'logout']),
        verificarCredenciales(){
            console.log('usuario: ', this.usuario);
            console.log('contraseña:', this.contrasena);
            let elUsuario = this.usuario;
            let laContrasena = this.contrasena;
            for(let credenciales of this.losUsuarios){
                if(credenciales.user == elUsuario && credenciales.pass== laContrasena){
                    this.login(); 
                    this.$router.push('/nosotros'); //entrar a "Nosotros" una vez confirmadas las ccredenciales
                    return; 
                }
            }
        },
        cerrarSesion(){
            this.logout();
        }
    },
    computed:{
        ...mapState(useProductosStore,['losUsuarios', 'isAuthenticated']),
    },
    beforeRouteLeave(to, from) {
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.

                if (
                // make sure the user is authenticated
                !this.isAuthenticated &&
                // ❗️ Avoid an infinite redirect
                to.name !== 'Login'
            ) {
                // redirect the user to the login page
                return { name: 'Login' }
            }
  },
}
</script>

<template>
    <div id="divLogin">
        <h1 v-html="titulo"></h1>
        <div class="container">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email Registrado</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="usuario">
                    <div id="emailHelp" class="form-text">No compartiremos con nadie su correo.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="contrasena">
                </div>

                <button type="submit" v-on:click.prevent="verificarCredenciales" class="btn btn-primary">Ingresar</button>
            </form>
            <hr>
            <button class="btn btn-danger" v-on:click="cerrarSesion">Cerrar Sesión</button>
        
        </div>
        <hr>
        <div v-if="isAuthenticated" class="autenticado">
            <h2>Credenciales Correctas </h2>
        </div>
        <div v-else class="noAutenticado">
            <h1>Sesión Cerrada </h1>
        </div>
    </div>
</template>

<style scoped>
    #divLogin{
        background-color: whitesmoke;
        margin:2%;
        border-radius: 2%;
    }
    .autenticado {
    background-color: green;
    color: white; 
    padding: 10px 15px; 
    border-radius: 8px; 
    text-align: center;
    font-weight: bold; 
    font-family: Arial, sans-serif;
}

.noAutenticado {
    background-color: crimson;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    font-family: Arial, sans-serif;

}
</style>