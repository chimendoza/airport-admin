<template>

    <formUser v-model="model" v-bind:profiles="profiles" v-bind:branches="branches">
        <template v-slot:submit>
            <SubmitButton label="Guardar"/>
        </template>
    </formUser>



</template>

<script>

    import formUser from './form.vue';


    export default{

        components:{
            formUser
        },

    data(){

        return {

            model:{active:1},
            profiles:[],
            branches:[]
            
        }
    },
        

    methods:{


        


        onModelData(data){

            
            this.model=data;
            this.profiles=data.profiles;
            this.branches=data.branches;
            

        },
        onModelSaved(data){


        }

    },
    mounted(){


        
        this.loadModel();

    }




    }




</script>