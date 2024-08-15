
<template>
<div class="row">
    <div class="col-12 grid-margin">

      
      <div class="card">
        <div class="card-body">

          <router-link class="btn btn-gradient-primary pull-right btn-sm" :to="'/customers/create'"><i class="mdi mdi-plus"></i> Agregar cliente</router-link>

      
          <h4 class="card-title page-title"><span class="page-title-icon bg-gradient-primary text-white me-2"> 
            <i class="mdi mdi-account-star"></i> </span> 
            Listando clientes</h4>
      

      
          <div class="table-responsive">



            <InteracTable :route="autolink()">
                <template v-slot:headers>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    
                </template>

                <template v-slot:row="item">
                    <td>{{ item.id}}</td>
                    <td><img src="@/assets/images/faces-clipart/pic-1.png"></td>
                    <td>{{ item.name}}</td>
                </template>
            
                <template v-slot:update="item">

                   
                    <router-link class="action-link" :to="autolink('/update/'+item.id)"><i class="mdi mdi-pencil"></i></router-link>
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

        name:"ListCustomers",
        components:{
            InteracTable

        }

    }



  </script>