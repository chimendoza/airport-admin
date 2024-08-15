<template>

    <formCustomer v-model="model" v-bind:licenses="licenses" :errors="$root._errors">
        <template v-slot:submit>
            <SubmitButton label="Guardar"/>
        </template>
    </formCustomer>



</template>

<script>

    import formCustomer from './form.vue';


    export default{

        components:{
            formCustomer
        },


    methods:{


        onModelData(data){

            this.model=data;
            this.model.password='';

        }

    },
    mounted(){


        
        this.loadModel();

        

    }




    }




</script>