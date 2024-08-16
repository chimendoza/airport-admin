
<template>

        <div class="card">

        <div class="card-body">



        <form class="form-sample" @submit.prevent="saveModel">
                      
                      <slot name="title">
                        <p class="card-description"> Datos de la aeronave </p>
                      </slot>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Aerolínea</label>

                            <div class="col-sm-9 col-relative">
                              <FormControl :type="'select'" v-model="modelValue.airline_id" :options="airlines" :error="errors.airline_id" :required="true"/>
                            </div>


                          </div>
                        </div>


                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Modelo</label>

                            <div class="col-sm-9 col-relative">
                              <FormControl :type="'text'" v-model="modelValue.model" :error="errors.model" :required="true"/>
                            </div>


                          </div>
                        </div>



                      </div>




                      <div class="row">


                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Número de unidad</label>

                            <div class="col-sm-9 col-relative">
                              <FormControl :type="'number'" v-model="modelValue.unit_number" :error="errors.unit_number" :required="true"/>
                            </div>


                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Clave única</label>

                            <div class="col-sm-9 col-relative">
                              <FormControl :type="'text'" v-model="modelValue.code" :error="errors.code" :required="true"/>
                            </div>


                          </div>
                        </div>




                      </div>





                      <div class="row">

                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Capacidad de pasajeros</label>

                            <div class="col-sm-9 col-relative">
                              <FormControl :type="'number'" v-model="modelValue.capacity" :error="errors.capacity" :required="true"/>
                            </div>


                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Distribución de asientos</label>

                            <div class="col-sm-9 col-relative">
                              <FormControl :type="'select'" v-model="modelValue.seat_distribution" :error="errors.seat_distribution" :required="true" :options="distributions"/>
                            </div>


                          </div>
                        </div>
                      </div>





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

    


    export default{


      name:"AircraftForm",

      data(){

        return {          
          searching:false,
          distributions:[{id:'4-4',name:'4 filas - pasillo - 4 filas'},{id:'3-3',name:'3 filas - pasillo - 3 filas'}]

        }

      },

      props:{

          airlines:{

            type:Array,
            default:[]
            
          },
          modelValue:{
            type:Object,
            default:{}
          },
          errors:{
            type:Object,
            default:{}
          }

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