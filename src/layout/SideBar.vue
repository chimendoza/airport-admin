<template>
        
        <nav class="sidebar sidebar-offcanvas" id="sidebar" ref="sidebar">
          <ul class="nav">
            <li class="nav-item">

              <router-link to="/" v-if="$allow('dashboard.index')" class="nav-link">
                <span class="menu-title">Inicio</span>
                <i class="mdi mdi-view-dashboard menu-icon"></i>
              </router-link>

            </li>

            <li class="nav-item" v-if="$allow('airlines.index')">
              <router-link to="/airlines" class="nav-link">
                <span class="menu-title">Aerolíneas</span>
                <i class="mdi mdi-airplane menu-icon"></i>
              </router-link>
            </li>

            <li class="nav-item" v-if="$allow('aircrafts.index')">
              <router-link to="/aircrafts" class="nav-link">
                <span class="menu-title">Aeronaves</span>
                <i class="mdi mdi-airplane-takeoff menu-icon"></i>
              </router-link>
            </li>



            <li class="nav-item" v-if="$allow('seatclasses.index,seats.index')">
              <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span class="menu-title">Asientos</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crown menu-icon"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item" v-if="$allow('seatclasses.index')"> <router-link to="/seatclasses" class="nav-link">Clases de asiento</router-link></li>
                  <li class="nav-item" v-if="$allow('seats.index')"> <router-link to="/seats" class="nav-link">Asientos</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item" v-if="$allow('destinations.index')">
              <router-link to="/destinations" class="nav-link">
                <span class="menu-title">Destinos</span>
                <i class="mdi mdi-wallet-travel menu-icon"></i>
              </router-link>
            </li>



            <li class="nav-item" v-if="$allow('flights.index')">
              <router-link to="/flights" class="nav-link">
                <span class="menu-title">Vuelos</span>
                <i class="mdi mdi-calendar-clock menu-icon"></i>
              </router-link>
            </li>


            <li class="nav-item" v-if="$allow('customers.index')">
              <router-link to="/customers" class="nav-link">
                <span class="menu-title">Clientes</span>
                <i class="mdi mdi-account-star menu-icon"></i>
              </router-link>
            </li>


            <li class="nav-item" v-if="$allow('payments.index')">

            <router-link to="/payments" class="nav-link">
              <span class="menu-title">Pagos</span>
              <i class="mdi mdi-cash menu-icon"></i>
            </router-link>

            </li>

            


            <li class="nav-item" v-if="$allow('profiles.index,users.index')">
              <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span class="menu-title">Acceso</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-lock-outline menu-icon"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item" v-if="$allow('profiles.index')"> <router-link to="/profiles" class="nav-link">Permisos</router-link></li>
                  <li class="nav-item" v-if="$allow('users.index')"> <router-link to="/users" class="nav-link">Usuarios</router-link></li>
                </ul>
              </div>
            </li>





            <li class="nav-item sidebar-actions">
              <span class="nav-link" v-if="$allow('customerpayments.create,contracts.createcontract,services.index')">
                <div class="border-bottom">
                  <h6 class="font-weight-normal mb-3">Acciones rápidas</h6>
                </div>
                
                <router-link class="btn btn-block btn-lg btn-gradient-success mt-4" v-if="$allow('customerpayments.create')" to="/customerpayments/create">+ Recibir pago</router-link>
                <br>
                
                <router-link v-if="$allow('contracts.createcontract')" class="btn btn-block btn-lg btn-gradient-info mt-4" to="/contracts/create">+ Crear contrato</router-link>
                
                <div class="mt-4" v-if="$allow('services.index')">
                  <div class="border-bottom">
                    <p class="text-secondary">Servicios</p>
                  </div>
                  <ul class="gradient-bullet-list mt-4">
                    <li><router-link :to="'/combos'">Combos</router-link></li>
                    <li><router-link :to="'/services'">Individuales</router-link></li>
                  </ul>
                </div>
              </span>
            </li>
          </ul>
        </nav>

    </template>


<script>


export default{
 
    name:"SideBar",

    data(){

      return {

        name:'',
        profile:'',
        branch_name:'Sin sucursal',
        branch_admin:''

      }

    },

    methods:{

      switchbranch(id){


          this.$api.get('/branches/switch?id='+id);

      }

    },

    computed:{

      branches(){


        
        const branches=JSON.parse(localStorage.getItem('branches'));

        
        return branches;

      }


    },
    mounted(){

      this.name=localStorage.getItem("user_name");
      this.profile=localStorage.getItem("user_profile");
      let branch_name=localStorage.getItem("branch_name");
      let branch_admin=localStorage.getItem("branch_admin");


      if(branch_name && branch_name!=''){
        this.branch_name=branch_name;
      }

      if(branch_admin){
        this.branch_admin='Encargado \n'+branch_admin;
      }else{
        this.branch_admin='Superusuario';
      }



      const links = this.$refs.sidebar.querySelectorAll('a');

      let that=this;
    
      links.forEach(link => {
        link.addEventListener('click', function(e){


          if(!e.target.hasAttribute('data-bs-toggle')){
            that.$refs.sidebar.classList.remove('active');
          }

        });
      });



    }

}



</script>