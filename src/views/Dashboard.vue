<template>


  <div class="page-header">
    <h3 class="page-title">
      <span class="page-title-icon bg-gradient-primary text-white me-2">
        <i class="mdi mdi-view-dashboard"></i>
      </span> Panel de inicio
    </h3>
    <nav aria-label="breadcrumb">
      <ul class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <span></span>Vista general <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
        </li>
      </ul>
    </nav>
  </div>
  <div class="row">
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-danger card-img-holder text-white">
        <div class="card-body">
          <img src="@/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
          <h4 class="font-weight-normal mb-3">Vuelos de hoy <i class="mdi mdi-chart-line mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">$ {{ customers }}</h2>
          <h6 class="card-text">Total de vuelos</h6>
        </div>
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-info card-img-holder text-white">
        <div class="card-body">
          <img src="@/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
          <h4 class="font-weight-normal mb-3">Reservaciones <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">{{  }}</h2>
          <h6 class="card-text">total de reservaciones</h6>
        </div>
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-success card-img-holder text-white">
        <div class="card-body">
          <img src="@/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
          <h4 class="font-weight-normal mb-3">Pagos <i class="mdi mdi-diamond mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">{{ $number.format(pagos) }}</h2>
          <h6 class="card-text">Pagos del día</h6>
        </div>
      </div>
    </div>
  </div>



  <!--
  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Licencias recientes</h4>

          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th> # </th>
                  <th> Cliente </th>
                  <th> Fecha </th>
                  <th> Estado </th>
                </tr>
              </thead>
              <tbody>

                
                  <tr v-for="(item,index) in tickets" :key="index">
                    <td></td>
                    <td> {{ item.name }}</td>
                    <td> {{ $date.format(item.registry_date) }} </td>
                    <td>
                      <div class="badge" :class="badgeStatusClass(item)">{{badgeStatus(item)}}</div>
                    </td>
                  </tr>
              
            


               </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  -->


    <!--
    <div class="col-md-5 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-white">Tareas</h4>
          <div class="add-items d-flex">
            <input type="text" class="form-control todo-list-input" placeholder="Que tarea se necesita hoy?">
            <button class="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Agregar</button>
          </div>
          <div class="list-wrapper">
            <ul class="d-flex flex-column-reverse todo-list todo-list-custom">
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox"> Revisar paquetes </label>
                </div>
                <i class="remove mdi mdi-close-circle-outline"></i>
              </li>
              <li class="completed">
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox" checked> Cancelar paquetes </label>
                </div>
                <i class="remove mdi mdi-close-circle-outline"></i>
              </li>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox"> Atender fallas </label>
                </div>
                <i class="remove mdi mdi-close-circle-outline"></i>
              </li>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox"> Coordinar soporte </label>
                </div>
                <i class="remove mdi mdi-close-circle-outline"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  -->


  


</template>
<script>

  export default{



    data(){

      return {
        payments:0,
        customers:0,
        licenses:0

      }
    },

    methods:{

      badgeStatusClass(item){

        let class_name='';


      switch(item.status){

        case 0:
        case null:
          class_name='badge-warning';
        break;

        case 1:
          class_name='badge-success';
        break;

        case 2:
          class_name='badge-danger';
        break;


      }

      return class_name;



      },
      badgeStatus(item){

        let st='';
        switch(item.status){

          case 0:
          case null:
            st='Pendiente';
          break;


          case 1:
            st='Completado';
          break;

          case 2:
            st='Cancelado';
          break;



          }


          return st;


      }


    },

    mounted(){
      this.$api.get('/dashboard/index').then(response=>{

        this.payments=response.data.payments;
        this.customers=response.data.customers;

          


      })
    }



  }

</script>