<template>

        

<div id="main">

  <router-view></router-view>

  <Notivue v-slot="item">
    <Prompt v-if="item.props.prompt" :item="item"/>
    <Notification v-else :item="item"/>
  </Notivue>

</div>



  
</template>


<style>

  #main{position:relative;z-index:0}

</style>

<script>

import { Notification,Notivue } from 'notivue'
import Prompt from '@/components/Prompt.vue'



export default{


  components:{

    Notification,Notivue,Prompt
  },

  beforeMount() {


    if(localStorage.getItem('access_token')==""){

      this.$router.push("/login")
    }else{
      

    }
},



}


</script>