
<template>
<div class="row">
    <div class="col-12 grid-margin">

      
      <div class="card">
        <div class="card-body">

          <router-link class="btn btn-gradient-primary pull-right btn-sm" :to="'/destinations/create'"><i class="mdi mdi-plus"></i> Agregar destino</router-link>

      
          <h4 class="card-title page-title"><span class="page-title-icon bg-gradient-primary text-white me-2"> 
            <i class="mdi mdi-account-star"></i> </span> 
            Listando destinos</h4>
      

      
          <div class="table-responsive">



            <InteracTable :route="autolink()">
                <template v-slot:headers>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    
                </template>

                <template v-slot:row="item">
                    <td>{{ item.id}}</td>
                    <td>{{ item.name}}</td>
                    <td>{{ item.city}}</td>
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