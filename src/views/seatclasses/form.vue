
<template>

        <div class="card">

        <div class="card-body">



        <form class="form-sample" @submit.prevent="saveModel">
                      
                      <slot name="title">
                        <p class="card-description"> Datos de la clase </p>
                      </slot>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="col-form-label">Nombre</label>

                            
                              <FormControl :type="'text'" v-model="modelValue.name" :error="errors.name" :required="true"/>
                            


                          </div>


                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="col-form-label">Aerolínea</label>

                            
                              <FormControl :type="'select'" v-model="modelValue.airline_id" :error="errors.airline_id" :required="true" :options="airlines"/>
                            


                          </div>


                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="col-form-label">Aeronave</label>

                            
                              <FormControl :type="'select'" v-model="modelValue.aircraft_id" :error="errors.aircraft_id" :required="true" :options="aircrafts"/>
                            


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


      name:"SeatClassForm",

      data(){

        return {
          searching:false,
          aircrafts:[],
          newrows:[],
          aircraft:{}
          

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

      methods:{



        loadAircrafts(){

            let aid=this.modelValue.airline_id;

            let promise=this.$push.promise('Cargando aeronaves');

            this.$api.get('/aircrafts?filter[airline_id]='+aid).then(r=>{


              this.makeAircrafts(r);





            }).catch(r=>{


            }).finally(()=>{

              this.$push.clearAll();


            });


        },

        makeAircrafts(r){


          let aircrafts=[],item;


          for(var i in r.data){

            item=r.data[i];

            aircrafts.push({'id':item.id,'name':item.code+' '+item.model});


          }


          this.aircrafts=aircrafts;

        },




      },


      watch:{

        'modelValue.airline_id':{


          handler:function(){


              this.loadAircrafts();

          },deep:true


        }

      }







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