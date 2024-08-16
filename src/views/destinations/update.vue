<template>

    <formComponent v-model="model" :errors="$root._errors">
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


    methods:{


        onModelData(data){

            this.model=data;
            

        }

    },
    mounted(){


        
        this.loadModel();

        

    }




    }




</script>