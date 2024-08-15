
<template>

        <div class="card">

        <div class="card-body">



        <form class="form-sample" @submit.prevent="saveModel">
                      
                      <slot name="title">
                        <p class="card-description"> Datos de la aerolínea </p>
                      </slot>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Nombre</label>

                            <div class="col-sm-9 col-relative">
                              <FormControl :type="'text'" v-model="modelValue.name" :error="errors.name" :required="true"/>
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


      name:"AirlineForm",

      data(){

        return {          
          searching:false,

        }

      },

      props:{

        
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