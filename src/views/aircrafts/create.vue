<template>

    <formComponent v-model="model" :airlines="airlines" :errors="_errors">
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

            model:{active:1,trash:0},
            airlines:[]

        }
    },

    mounted(){


        this.$api.get('/aircrafts/catalogs').then(r=>{

            console.log(r);

            this.airlines=r.data.airlines;


        })

    }




}

</script>