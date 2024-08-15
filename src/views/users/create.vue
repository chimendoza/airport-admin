<template>

    <formUser v-model="model" v-bind:profiles="profiles" v-bind:branches="branches">
        <template v-slot:submit>
            <SubmitButton label="Crear"/>
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

    mounted(){


            this.$api.get('/users/catalogs').then(response=>{

                this.profiles=response.data.profiles;
                this.branches=response.data.branches;

            });

    }


}

</script>