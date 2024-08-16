
<template>

        <div class="card">

        <div class="card-body">



        <form class="form-sample" @submit.prevent="saveModel">
                      
                      <slot name="title">
                        <p class="card-description"> Datos del vuelo</p>
                      </slot>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="col-form-label">Destino</label>

                            
                              <FormControl :type="'select'" v-model="modelValue.destination_id" :error="errors.destination_id" :required="true" :options="destinations"/>
                            


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



                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Hora de salida</label>

                            <div class="col-sm-9 col-relative">
                              <VueDatePicker v-model="modelValue.departure_time" :required="true"/>

                              
                            </div>


                          </div>


                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Hora de llegada</label>

                            <div class="col-sm-9 col-relative">
                              <VueDatePicker v-model="modelValue.arrival_time" language="es" :required="true"/>
                            </div>


                          </div>


                        </div>


                      </div>




                    <div class="set-rates" v-if="rates">
                      <p class="card-title">Tarifas</p>

                      <div class="rates row">

                        <div class="col-md-4">

                          <div v-for="(rate,index) in rates" :key="index">
                              <div class="form-group">
                                <label>{{ rate.name }}</label>
                                <input class="form-control" v-type="'number'" :value="get_flight_rate(rate.id)" @input="(value)=>add_flight_rate(rate.id,value)"/>
                              </div>

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


import DatePicker from 'vuejs3-datepicker';
    


    export default{


      name:"SeatClassForm",

      components:{

        DatePicker
      },

      data(){

        return {
          searching:false,
          aircrafts:[],
          newrows:[],
          aircraft:{},
          rates:[],
          flight_rates:[],
          array_aircrafts:[],
          initial_rates:[]
          

        }

      },

      props:{


          airlines:{
            type:Array,
            default:[]

          },
          destinations:{
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


      computed:{




            get_flight_rate(){



              return function(id){


                
                if(this.modelValue.flightRates){

                  
                  let el=this.modelValue.flightRates.find(e=>e.seatclass_id==id);
                  
                  if(el){
                    return el.price;
                  }
                }
                return '';
                
              }
            },


      },



      methods:{

        add_flight_rate(id,input){





            let value=input.target.value;

              if(!this.modelValue.flight_rates){
                this.modelValue.flight_rates=[];
              }
              let index=this.modelValue.flight_rates.findIndex(e=>e.seatclass_id==id);
              if(index!=-1){
               this.modelValue.flight_rates[index].price=value;
              }else{
               this.modelValue.flight_rates.push({seatclass_id:id,price:value});
              }
              

        },



  
        fillRates(){


          let id=this.modelValue.aircraft_id;


          let aircraft=this.array_aircrafts.find(e=>e.id==id);

          
          
          if(aircraft){

            
            
            this.rates=aircraft.seatClasses;

          }


          
        },


        loadAircrafts(){

            let aid=this.modelValue.airline_id;

            let promise=this.$push.promise('Cargando aeronaves');

            this.$api.get('/aircrafts?filter[airline_id]='+aid+'&expand=seatClasses').then(r=>{


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
          this.array_aircrafts=r.data;

        },




      },



      watch:{

        'modelValue.airline_id':{


          handler:function(){


              this.loadAircrafts();

          },deep:true


        },

        'modelValue.aircraft_id':{


            handler:function(){


              

                this.fillRates();
              

            },deep:true


          },


          'array_aircrafts':{


              handler:function(){


                

                  this.fillRates();
                

              },deep:true


          },


          'modelValue.flightRates':{

            handler:function(v){


              this.modelValue.flight_rates=v;

            },
            deep:true

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