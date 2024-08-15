
<template>

        <div class="card">

        <div class="card-body">


        <form class="form-sample" @submit.prevent="saveModel">
                      <p class="card-description"> Datos del usuario </p>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Nombre</label>
                            <div class="col-sm-9">
                              <FormControl :type="'text'" v-model="modelValue.name" :error="$parent._errors.name" :required="false"/>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Correo</label>
                            <div class="col-sm-9">
                              <FormControl :type="'text'" v-model="modelValue.email" :error="$parent._errors.email" :required="true"/>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Username</label>
                            <div class="col-sm-9">

                              <FormControl :type="'text'" v-model="modelValue.username" :error="$parent._errors.username" :required="true"/>

                            </div>
                          </div>
                        </div>
                       <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Password</label>
                            <div class="col-sm-9">
                              <FormControl :type="'password'" v-model="modelValue.newpassword" :error="$parent._errors.password"/>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Perfil</label>
                            <div class="col-sm-9">
                              
                              <FormControl :type="'select'" :options="profiles" v-model="modelValue.profile_id" :error="$parent._errors.profile_id" :required="true"/>
                            </div>
                          </div>
                        </div>



                      </div>


                      <div class="form-group">
                        <label>Activo <FormControl :type="'switch'" v-model="modelValue.active"/></label>
                      </div> 
                              


                      <div class="form-actions">
                        <slot name="cancel">
                          <router-link :to="autolink()" class="btn btn-danger btn-icon-text">Cancelar</router-link>
                        </slot>
                        &nbsp;
                        <slot name="submit">
                          <SubmitButton/>
                        </slot>
                      </div>

                    </form>

                </div>

            </div>

        </template>

<script>

    


    export default{


      name:"clientForm",
      props:{

        modelValue:{
          type:Object,
          default:{}
        },
        profiles:{
          type:Array,
          default:[]

        },
        branches:{
          type:Array,
          default:[]
        }

      },

      methods:{

        beforeSaveModel(){

          if(this.$route.params.id){
            this.$parent.model.profile_changes=1;
          }

          


        }


      }




    }


</script>

