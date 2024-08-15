
<template>

        <div class="card">

        <div class="card-body">



        <form class="form-sample" @submit.prevent="saveModel">
                      
                      <slot name="title">
                        <p class="card-description"> Datos del cliente </p>
                      </slot>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Nombre</label>

                            <div class="col-sm-9 col-relative">
                              <i v-if="this.searching" class="spinner"></i>
                              <a v-if="hascustomer" class="customer-remover" @click="removecustomer"><i class="mdi mdi-close-circle-outline"></i></a>
                              <FormControl :type="'text'" v-model="modelValue.name" :error="errors.name" @input="onNameInput" :disabled="hascustomer" :required="true"/>
                              <div class="user-suggestions" v-if="suggestions.length>0">                                  
                                <!--
                                  <span class="close-suggestions"><i class="mdi mdi-close-circle-outline"></i></span>
                                  -->
                                  <template v-for="(item,index) in suggestions">
                                    <div class="user-suggestion" @click="fill(index)"> <img width="25px" src="@/assets/images/faces-clipart/pic-1.png"> {{item.name}} <br><small>{{item.address}}</small></div>
                                  </template>

                              </div>
                            </div>


                          </div>

                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Correo</label>
                            <div class="col-sm-9">
                              <FormControl :type="'email'" v-model="modelValue.email" :error="errors.email" />
                            </div>
                          </div>



                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Whatsapp</label>
                            <div class="col-sm-9">
                              <FormControl :type="'tel'" v-model="modelValue.mobile" :error="errors.mobile" :placeholder="'-'"/>
                            </div>
                          </div>






                        </div>

                        <div class="col-md-6">

                          <!--
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Sucursal</label>
                            <div class="col-sm-9">
                              <FormControl  :type="'select'" v-model="modelValue.branch_id" :error="errors.branch_id" :required="true" :options="branches"/>
                            </div>
                          </div>-->

                          <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Dirección</label>
                                <div class="col-sm-9">

                                  <div class="form-group">
                                          <FormControl :type="'text'" :error="errors.location" :placeholder="'Localidad'" v-model="modelValue.location"/>
                                  </div>

                                  <div class="form-group">
                                          <FormControl :type="'text'" :error="errors.street" :placeholder="'Calle'" v-model="modelValue.street"/>
                                  </div>





                                  <div class="row">
                                      <div class="col-md-7">
                                      </div>

                                      <div class="col-md-5">
                                      </div>
                                  </div>

                                  <div class="row">

                                    <div class="col-sm-5">                                  
                                      <FormControl :type="'text'" :placeholder="'Número'" :error="errors.number" v-model="modelValue.number"/>
                                    </div>

                                    <div class="col-sm-7">
                                      
                                      <FormControl :type="'text'" :placeholder="'Cruzamiento(s)'" :error="errors.intersection" v-model="modelValue.intersection"/>

                                    </div>

                                  </div>

                                </div>
                              </div>


                            






                        </div>


                      </div>


                      <slot name="account" :model="modelValue">
                      <br>
                      <br>
                      <p class="card-description">Crea una cuenta</p>
                      <div class="row">



                        <div class="col-md-6">

                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Usuario</label>
                            <div class="col-sm-9">
                              <FormControl :type="'text'" v-model="modelValue.username" :error="errors.username" />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">

                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Contraseña</label>
                            <div class="col-sm-9">
                              <FormControl :type="'password'" v-model="modelValue.password" :error="errors.password" />
                            </div>
                          </div>


                        </div>



                      </div>

                    </slot>



                      <slot name="active">
                        <div class="form-group">
                          <label>Activo <FormControl :type="'switch'" v-model="modelValue.active"/></label>
                        </div> 
                      </slot>
                            

                      <slot name="options">
                      
                      <div class="form-actions">

                        
                        <slot name="cancel">
                          <router-link :to="autolink()" class="btn btn-danger btn-icon-text">Cancelar</router-link>
                        </slot>
                                  &nbsp;
                        
                        <slot name="submit">
                          <SubmitButton/>
                        </slot>

                        
                      </div>
                      
                    </slot>

                    </form>

                </div>

            </div>

                </template>

<script>

    import DatePicker from 'vuejs3-datepicker';


    export default{


      components:{

        DatePicker

      },
      name:"customerForm",

      data(){

        return {

          payment:{validity_start_date:new Date()},
          payment_methods:[{id:'cash','name':'Efectivo'},{id:'transfer','name':'Depósito/Transferencia'}],
          searching:false,
          hascustomer:false,
          suggestions:[],
        }

      },

      props:{

        
          modelValue:{
            type:Object,
            default:{}
          },
          autosearch:{
            type:Boolean,
            default:false
          },
          errors:{
            type:Object,
            default:{}
          }

      },

      methods:{



        fill(index){

          this.hascustomer=true;
          
          this.$emit('autosearch',this.suggestions[index]);

          this.suggestions=[];

        },


        onNameInput(e){

          
          if(!this.searching && e.length>=3 && this.autosearch)
          {

              this.searching=true;
              this.$api.get("/customers?filter[name][like]="+e).then(response=>{


                  this.suggestions=response.data;


              }).catch(error=>{


              }).finally(()=>{
                this.searching=false;
              });

          }

        },

        removecustomer(){


          this.hascustomer=false;
          this.$emit('autosearch',{});

        }
      },

      mounted(){

        this.modelValue.password='';

      },




    }


</script>



<style scoped>

.customer-remover{
  position:absolute;
  right:26px;
  top:12px;
  cursor:pointer;
  color:#e18484;

}

.user-suggestions{
  
    background: #fff;
    padding: 10px;
    box-shadow: 0px 4px 19px rgba(50, 50, 50, .2);
    border-radius: 1px;
    position:absolute;
    top:51px;
    left:0;
    width:100%;
  
  }

  .user-suggestion{
    font-size:14px;
    small{

      margin-left:30px

    }
  }

  .spinner{position:absolute;right:25px;top:12px}

.col-relative{position:relative;}


</style>