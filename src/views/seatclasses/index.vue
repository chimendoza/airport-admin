
<template>
<div class="row">
    <div class="col-12 grid-margin">

      
      <div class="card">
        <div class="card-body">

          <router-link class="btn btn-gradient-primary pull-right btn-sm" :to="'/seatclasses/create'"><i class="mdi mdi-plus"></i> Agregar clase</router-link>

      
          <h4 class="card-title page-title"><span class="page-title-icon bg-gradient-primary text-white me-2"> 
            <i class="mdi mdi-account-star"></i> </span> 
            Listando clases de asiento</h4>
      

      
          <div class="table-responsive">



            <InteracTable :route="'/seatclasses?expand=airline,aircraft'">
                <template v-slot:headers>
                  <th>ID</th>
                  <th>Nombre de la clase</th>
                    <th>Aerolínea</th>
                    <th>Aeronave</th>
                    
                </template>

                <template v-slot:row="item">
                    <td>{{ item.id}}</td>
                    <td>{{ item.name}}</td>
                    <td>{{ item.airline.name}}</td>
                    <td>{{ item.aircraft.name}}</td>
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

        name:"ListAirlines",
        components:{
            InteracTable

        }

    }



  </script>