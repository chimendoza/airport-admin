
<template>

        <div class="card">

        <div class="card-body">


        <form class="form-sample" @submit.prevent="saveModel">
                      <p class="card-description"> Datos del tipo de licencia </p>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-form-label">Nombre</label>
                            
                              <FormControl :type="'text'" v-model="modelValue.name" :error="$parent._errors.name" :required="false"/>
                            
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-form-label">Precio</label>
                            
                              <FormControl :type="'number'" v-model="modelValue.price" :error="$parent._errors.email" :required="true"/>
                            
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-form-label">Duración en meses</label>
                            
                              <FormControl :type="'number'" v-model="modelValue.month_duration" :error="$parent._errors.email" :required="true"/>
                            
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

