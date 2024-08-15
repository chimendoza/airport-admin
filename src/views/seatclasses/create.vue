<template>

    <formComponent v-model="model" :errors="_errors">
        <template v-slot:submit>
            <SubmitButton label="Crear"/>
        </template>
    </formComponent>

</template>


<script>


import formComponent from './form.vue';

export default{

    components:{
        formComponent
    },

    data(){

        return {

            model:{active:1,trash:0}

        }
    },




}

</script>