<template>
   
   <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth login-wrapper">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="@/assets/images/logo-md.png?1">
                </div>
                <h4>Panel de gestión de Appdemo</h4>
                <h6 class="font-weight-light">Ingresa para continuar.</h6>
                <form class="pt-3" @submit.prevent="login">

                  <p class="errors">{{errors}}</p>
                  <div class="form-group">
                    <input type="text" v-model="form.username" autocomplete="off" required class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Usuario">
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="form.password" autocomplete="off" required class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Contraseña">
                  </div>
                  <div class="mt-3">
                    <SubmitButton :label="'Acceder'" :saving="saving"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>


</template>

<script lang="ts">



export default{

    
    name:"login",
    data(){

    return {

      saving:false,
      errors:'',
      form:{
        username:"",
        password:""
      }

    }

    },
    methods:{

      login(){



        this.saving=true;
        

        this.$api.post('/auth/login',{

          username:this.form.username,
          password:this.form.password

        }).then(response => {


        const token = response.data.token;
        
        localStorage.setItem('access_token', token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        localStorage.setItem('user_name', response.data.name);
        localStorage.setItem('user_profile', response.data.profile);
        localStorage.setItem('branch_name', response.data.branch);
        localStorage.setItem('branch_admin', response.data.branchadmin);
        localStorage.setItem('branch_id', response.data.branch_id);
        if(response.data.branches){
          localStorage.setItem('branches', JSON.stringify(response.data.branches));
        }
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('permissions', response.data.permissions);

      

        this.$router.push('/');
      }).catch(error => {

          this.errors=error.response.data.message;

      }).finally(()=>{

          this.loading=false;
          this.saving=false;
        
      });;

      }
      
    }


}
</script>