
<template>
<div class="row">
    <div class="col-12 grid-margin">

      
      <div class="card">
        <div class="card-body">

          <router-link class="btn btn-gradient-primary pull-right btn-sm" :to="'/flights/create'"><i class="mdi mdi-plus"></i> Registrar vuelo</router-link>

      
          <h4 class="card-title page-title"><span class="page-title-icon bg-gradient-primary text-white me-2"> 
            <i class="mdi mdi-account-star"></i> </span> 
            Listando vuelos</h4>
      

      
          <div class="table-responsive">



            <InteracTable :route="'/flights?expand=airline'">
                <template v-slot:headers>
                    <th>ID</th>
                    <th>Aerolínea</th>
                    <th>Aeronave</th>
                    <th>Hora de salida</th>
                    <th>Hora de llegada</th>
                    <th>Destino</th>
                    
                </template>

                <template v-slot:row="item">
                    <td>{{ item.id}}</td>
                    <td>{{ item.airline.name}}</td>
                    <td>{{ item.aircraft.name}}</td>
                    <td>{{ $date.format(item.departure_time)}}</td>
                    <td>{{ $date.format(item.arrival_time)}}</td>
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

        name:"Listaircrafts",
        components:{
            InteracTable

        }

    }



  </script>