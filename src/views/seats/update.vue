<template>

    <formComponent v-model="model" :errors="$root._errors" :airlines="airlines">
        <template v-slot:submit>
            <SubmitButton label="Guardar"/>
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
            airlines:[]
        
        }

    },



    methods:{


        onModelData(data){


            
            this.model=data;

            
            this.airlines=data.airlines;
            

        }

    },
    mounted(){


        
        this.loadModel();

        

    }




    }




</script>