<template>
    <i class="mdi mdi-information-outline smartip"><small>{{text}}</small></i>
</template>


<script>


export default{

    props:{

        text:{
            type:String,
            required:true

        }

    }

}

</script>

<style scoped>

    .smartip{position:relative;
        
        display:inline;
        color:#0e9fe3;
        small{position:absolute;bottom:10px;left:10px;display: none;color:#000;border:1px solid #90c9e4;padding:4px;width:200px;background:#fff;border-radius:10px}

        &:hover{

            small{display:block}
        }

    }

</style>