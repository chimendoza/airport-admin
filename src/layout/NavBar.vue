<template>

    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="navbar-brand brand-logo" href="/"><img height="50" src="@/assets/images/logo-md.png" alt="logo" /></a>
          <a class="navbar-brand brand-logo-mini" href="/"><img src="@/assets/images/ico2.png" alt="logo" /></a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-stretch">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-menu"></span>
          </button>
          <div class="search-field d-none d-md-block">
            <form class="d-flex align-items-center h-100" @submit.prevent="searchCode">
              <div class="input-group">
                <div class="input-group-prepend bg-transparent">
                  <i class="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" v-model="code" class="form-control bg-transparent border-0" placeholder="Buscar un folio">
              </div>
            </form>
          </div>
          <ul class="navbar-nav navbar-nav-right">



            <!--
            <li class="nav-item dropdown">
              <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i class="mdi mdi-bell-outline"></i>
                <span class="count-symbol bg-danger"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 class="p-3 mb-0">Notificaciones</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-success">
                      <i class="mdi mdi-calendar"></i>
                    </div>
                  </div>
                  <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 class="preview-subject font-weight-normal mb-1">Reporte de falla</h6>
                    <p class="text-gray ellipsis mb-0"> Falló mi servicio </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-warning">
                      <i class="mdi mdi-settings"></i>
                    </div>
                  </div>
                  <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 class="preview-subject font-weight-normal mb-1">Falló mi servicio</h6>
                    <p class="text-gray ellipsis mb-0"> Nombre del cliente Juan Pérez </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="mdi mdi-link-variant"></i>
                    </div>
                  </div>
                  <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 class="preview-subject font-weight-normal mb-1">Instalación de servicio</h6>
                    <p class="text-gray ellipsis mb-0"> Fecha de vencimiento 15 de Julio </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <h6 class="p-3 mb-0 text-center">Ver todas las notificaciones</h6>
              </div>
            </li>-->

            <li class="nav-item nav-profile dropdown">
              <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="nav-profile-img">
                  <img src="@/assets/images/faces-clipart/pic-1.png" alt="image">
                  <span class="availability-status online"></span>
                </div>
                <div class="nav-profile-text">
                  <p class="mb-1 text-black">{{name}}<br><small>{{ profile }}</small></p>
                </div>
              </a>
              <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                <router-link class="dropdown-item" :to="updateprofile()">
                  <i class="mdi mdi-settings text-success"></i> &nbsp;Mi cuenta </router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click="logout">
                  <i class="mdi mdi-logout me-2 text-primary"></i> Cerrar sesión </a>
              </div>
            </li>




          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>


</template>


<script>


export default{

  name:"NavBar",
  data(){

    return {

      name:"",
      folio:''

    }

  },
  methods:{


    


    updateprofile(){

      return '/users/update/'+localStorage.getItem('user_id');

    },  

    searchCode(){


      let mc=this.code;
      this.code='';

    },

    logout(){

        localStorage.setItem('access_token',"");
        localStorage.setItem('refresh_token',"");

        this.$router.push('/login');


    }


  },


  mounted(){

    this.name=localStorage.getItem("user_name");
    this.profile=localStorage.getItem("user_profile");


  }


}

</script>