<template>

    <div class="page-wrapper">
        
        <div class="page-margin">
            <router-view></router-view>
        </div>
    </div>
</template> 

<script>

export default{


    data(){

        return {}

    },
    mounted(){

 //       window.addEventListener("load",function(){
            
            
            
   //     });
    }
}

</script>

<style media="all" scoped>
 

.page-wrapper{padding:50px}
    
    table{border-collapse: collapse}
    table td{border:1px solid #000;padding: 0;height: 10px !important;overflow: hidden}
    .table tr th:first-child, .table tr td:first-child, .table tr td:nth-child(1), .table tr th:nth-child(1){max-width: 100px !important}

     *{font-family: Arial,Helvetica,sans-serif}

    
     .page-date{float:right}
     .page-margin{margin:20px}

     table td{border:1px solid #000;border-collapse: collapse}

@page { margin:0 !important; }
*{font-family: Arial,Helvetica,sans-serif}

 
 </style>