
<template>

    <div class="card">

    <div class="card-body">

        
        <div class="row">
        <div class="col-md-4">

            <img src="@/assets/images/faces-clipart/pic-1.png">

            <br>
            <br>
            <p>
                <Skeleton :type="'paragraph'" v-if="!loaded"/>
                {{ model.name }}
            </p>
            <p>
                <Skeleton :type="'paragrah'" v-if="!loaded"/>
                {{ model.email }}

            </p>


        </div>

    </div>






    </div>

    </div>

</template>


<script>

import Skeleton from '@/components/Skeleton.vue';

export default{

    components:{

        Skeleton
    },

    data(){


        return {

            loaded:false,
            model:{}


        }

    },

    mounted(){



        this.loaded=false;

        let id=this.$route.params.id;
        this.$api.get('/customers/'+id).then(r=>{



            this.model=r.data;
            this.loaded=true;
            console.log(r);

        });

    }


}



</script>