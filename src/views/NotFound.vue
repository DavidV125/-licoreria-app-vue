<script>
export default{
    data(){
        return{
            titulo: 'Error 404 - Componente no encontrado.  '
        }
    }
}
</script>

<template>
    <div id="divNotFound">
        <h1 v-html="titulo"></h1>
    </div>
</template>

<style scoped>
    #divNotFound{
        background-color: red;
        color:white;

    }
</style>