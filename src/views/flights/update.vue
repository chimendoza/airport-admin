<template>

    <formComponent v-model="model" :errors="$root._errors" :airlines="airlines" :destinations="destinations">
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
            airlines:[],
            destinations:[],
            model:{flight_rates:[]}
        
        }

    },



    methods:{


        onModelData(data){


            this.model=data;
            this.airlines=data.airlines;
            this.destinations=data.destinations;
            

        }

    },
    mounted(){


        
        this.loadModel();

        

    }




    }




</script>