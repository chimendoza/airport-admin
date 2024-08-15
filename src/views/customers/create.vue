<template>

    <formCustomer v-model="model" v-bind:licenses="licenses" :errors="_errors" @autosearch="autosearch">
        <template v-slot:submit>
            <SubmitButton label="Crear"/>
        </template>
    </formCustomer>

</template>


<script>


import formCustomer from './form.vue';

export default{

    components:{
        formCustomer
    },

    data(){

        return {

            model:{active:1,trash:0}

        }
    },




}

</script>