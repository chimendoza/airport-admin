
<template>
<div class="row">
    <div class="col-12 grid-margin">

      
      <div class="card">
        <div class="card-body">

      
          <h4 class="card-title page-title">
            <span class="page-title-icon bg-gradient-primary text-white me-2"> 
              <i class="mdi mdi-cash"></i> </span> 
            Listando pagos
          </h4>
      

      
          <div class="table-responsive">



            <InteracTable :route="'/payments'">

              <template v-slot:headers>
                  <th>ID</th>
                  <th>Usuario</th>
                  <th>Cantidad</th>
              </template>

              <template v-slot:row="item">
                  <td>{{item.id}}</td>
                  <td>{{item.amount}}</td>
              </template>

              <template v-slot:update="item">

                &nbsp;


              </template>
            
            </InteracTable>




          </div>
        </div>
      </div>
    </div>
  </div>

  </template>


  <script>


    
    import InteracTable from '@/components/InteracTable.vue';

    export default {

        name:"Listlicenses",
        components:{
            InteracTable

        },


    }



  </script>