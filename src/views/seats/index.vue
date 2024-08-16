
<template>
<div class="row">
    <div class="col-12 grid-margin">

      
      <div class="card">
        <div class="card-body">

          <router-link class="btn btn-gradient-primary pull-right btn-sm" :to="'/seats/create'"><i class="mdi mdi-plus"></i> Agregar asiento</router-link>

      
          <h4 class="card-title page-title"><span class="page-title-icon bg-gradient-primary text-white me-2"> 
            <i class="mdi mdi-account-star"></i> </span> 
            Listando asientos</h4>
      

      
          <div class="table-responsive">



            <InteracTable :route="'/seats?expand=aircraft.airline,aircraft,seatClass'">
                <template v-slot:headers>
                  <th>ID</th>
                  <th>Número de asiento</th>
                  <th>Ubicación</th>
                  <th>Clase</th>
                    <th>Aerolínea</th>
                    <th>Aeronave</th>
                    
                </template>

                <template v-slot:row="item">
                    <td>{{ item.id}}</td>
                    <td>{{ item.seat_number}}</td>
                    <td>{{ getPosition(item.position)}}</td>
                    <td>{{ item.seatClass.name}}</td>
                    <td>{{ item.aircraft.airline.name}}</td>
                    <td>{{ item.aircraft.code+' '+item.aircraft.model}}</td>
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

        },

        methods:{


          getPosition(p){

            switch(p){

              case 'aisle':

                return 'Pasillo';

              break;

              case 'window':

                return 'Ventanilla';

              break;

              case 'middle':

                return 'Medio';

              break;


            }


          }


        }

    }



  </script>