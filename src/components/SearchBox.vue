<template>



<form @submit.prevent="search">
        <div class="form-group">
          <label>

              <slot name="title">
                  Buscar datos del cliente
              </slot>


          </label>
                      <div class="input-group">
                        <div class="input-group-prepend">

                          <select class="form-control" v-model="searchfield" @change="onChange">
                              <option v-for="(item,index) in filters" :key="index" :value="item.value">{{ item.label }}</option>
                          </select>

                        </div>


                        <input type="text" v-if="type('text')" class="form-control" v-model="searchkey" @input="emitChange" :placeholder="'Escribe para buscar '+fieldname.toLowerCase()">
                        
                        <Datepicker language="es" v-model="searchkey" wrapper-class="calendar-light" @selected="emitChange" v-if="type('range') || type('date')"/>
                        <Datepicker language="es" v-model="searchkey2" wrapper-class="calendar-light" v-if="type('range')"/>

                        <div class="input-group-append">

                          <SubmitButton :saving="saving" :label="'Buscar'"/>

                        </div>

                      </div>
                    </div>
        </form>

</template>


<script>


import Datepicker from 'vuejs3-datepicker';

export default{

    components:{

      Datepicker
    },

    emits:['beforeSearch','results'],


    props:{

      url:{
        type:String,
        required:true
      },
      filters:{
        type:Array,
        required:true
      },
      modelValue:{
        type:String


      }

    },
    data(){

        return {

            searchkey:'',
            searchkey2:'',
            searchfield:'',
            searchtype:'',
            saving:false,
            fieldname:''
        
        }
        
    },


    emits:['update:modelValue'],

    computed:{



      type(){


        return function(t){
        let type='text';
        if(this.searchfield){
          
          let tp=this.filters.find(s=>s.value==this.searchfield).type;


          if(tp){
            type=tp;            
          }

        }          

      

        return t==type;

        }
      
      }

    },

    methods:{

        search(){

                this.$emit('beforeSearch');
                this.saving=true;


                let key1=this.searchkey;
                let key2=this.searchkey2;

                
                if(this.searchtype=='date' || this.searchtype=='range'){
                  key1=this.$date.dbformat(key1,false);
                  key2=this.$date.dbformat(key2,false);
                }

                


                let filter=this.searchfield.replace('{key}',encodeURIComponent(key1)).replace('{key2}',encodeURIComponent(key2));
                

                let url=this.url.indexOf('?')!=-1?this.url+'&'+filter:this.url+'?'+filter;


                this.$api.get(url)
                .then((response)=>{
                    this.$emit('results',response.data);
                })
                .catch((error)=>{

                    this.$push.error(error.response.data[0].message);

                })
                .finally(()=>{

                    this.saving=false;
                });

        },




        onChange(e){
          this.fieldname=this.filters.find(s=>s.value==e.target.value).label;
          this.searchtype=this.filters.find(s=>s.value==e.target.value).type;

        },

        emitChange(e){

          this.$emit('update:modelValue',{type:this.searchtype,value:e});

        }


    },
    mounted(){


      for(var i in this.filters){

        if(this.filters[i].selected){
          this.searchfield=this.filters[i].value;
          this.fieldname=this.filters[i].label;


          if(this.filters[i].type=='date' || this.filters[i].type=='range'){
            this.searchkey=this.searchkey2=new Date();
            this.searchtype=this.filters[i].type;
          }



          break;
        }

      }

      this.$emit('update:modelValue',this.searchkey);





    }


}





</script>
