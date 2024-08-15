
<template>
<div class="row">
    <div class="col-12 grid-margin">

      
      <div class="card">
        <div class="card-body">

          <router-link class="btn btn-gradient-primary pull-right btn-sm" :to="'/aircrafts/create'"><i class="mdi mdi-plus"></i> Agregar aeronave</router-link>

      
          <h4 class="card-title page-title"><span class="page-title-icon bg-gradient-primary text-white me-2"> 
            <i class="mdi mdi-account-star"></i> </span> 
            Listando aeronaves</h4>
      

      
          <div class="table-responsive">



            <InteracTable :route="'/aircrafts?expand=airline'">
                <template v-slot:headers>
                    <th>ID</th>
                    <th>Aerolínea</th>
                    <th>Número de unidad</th>
                    <th>Modelo</th>
                    <th>Capacidad</th>
                    
                </template>

                <template v-slot:row="item">
                    <td>{{ item.id}}</td>
                    <td>{{ item.airline.name}}</td>
                    <td>{{ item.unit_number}}</td>
                    <td>{{ item.model}}</td>
                    <td>{{ item.capacity}}</td>
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