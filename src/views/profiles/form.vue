
<template>

        <div class="card">

        <div class="card-body">


        <form class="form-sample" @submit.prevent="save">
                      <p class="card-description"> Datos del perfil </p>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Nombre del perfil</label>
                        <div class="col-sm-9">
                          <input type="text" v-model="model.name" required class="form-control">  
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Activo</label>
                        <div class="col-sm-9">
                          <input type="checkbox" v-model="model.active" value="1" true-value="1" false-value="0" required/>  
                        </div>
                      </div>


                      <div class="form-group">

                          <label class="col-form-label">Permisos</label>

                          <div class="block-permissions" id="block-permissions">
                              
                              <div class="block-group" v-for="(item,key) in system_functions" :key="key">

                                 <label> {{item.label}}</label>


                                 <div class="permission-group">

                                    
                                      <label v-for="(i,k) in item.actions" :key="k"><input @change="(event)=>onPermissionChange(event,item.controller,k)" :checked="isChecked(item.controller,k)" type="checkbox"/> {{i}} &nbsp;&nbsp;</label>
                                  

                                 </div>

                              </div>

                          </div>


                      </div>


                      <div class="form-actions">
                        <router-link :to="autolink()" class="btn btn-danger btn-icon-text">Cancelar</router-link>
                        &nbsp;
                        <SubmitButton/>
                      </div>

                    </form>

                </div>

            </div>




                </template>

<script>





export default{


  name:"formPermissions",
  data(){
    
    return {
      
      model:{        
        name:"",
        permissions:'',
        active:1,
        trash:0

      },
      system_functions:[],
      checked:[]

    }

  },


  methods:{


    save(){
      
      this.model.permissions=JSON.stringify(this.checked);
      this.saveModel();
    },

    onModelData(data){

      this.system_functions=data.system_functions;
      this.setPermissions(data.permissions);
      

    },


    onPermissionChange(e,controller,action){


      if(e.target.checked){
        this.addPermission(controller,action);
      }else{
        this.removePermission(controller,action);
      }

    },

    addPermission(controller,action){

      
      let index=this.checked.findIndex(e=>e.controller==controller);

      if(index!=-1){
        this.checked[index].actions.push(action);
      }else{
        this.checked.push({controller:controller,actions:[action]});
      }


    },

    removePermission(controller,action){
      
      let index=this.checked.findIndex(e=>e.controller==controller);

      if(index!=-1){
        let action_index=this.checked[index].actions.findIndex(e=>e==action);
        this.checked[index].actions.splice(action_index,1);
      }

      
    },

    isChecked(controller,action){

        let c=this.checked.findIndex(e=>e.controller==controller);

        if(c!=-1){

          let a=this.checked[c].actions.findIndex(e=>e==action);
          if(a!=-1){
            return true;
          }

        }


        return false;

    },


    setPermissions(p){
        this.checked=JSON.parse(p);
    },

    

    serializePermissions(){


        let p=[];



        for(var i in this.checked){


           let controller=this.checked[i].controller;
           let actions=this.checked[i].actions;

          

            for(var a in actions){


                let act=actions[a];

                if(act.active){

                  if(p[i]==undefined){
                    p[i]={};
                  }

                  
                  p[i].controller=controller;

                  if(!p[i].hasOwnProperty('actions')){
                      p[i]['actions']=[];
                  }
                  p[i]['actions'].push(a);

                }

            }

        }


        return p;


    }



  },
    


  mounted(){

    

      this.loadModel();

      
      

      let id=this.$route.params.id;
      if(id==undefined){

        this.$api.get("/profiles/permissions").then(response=>{


          
          this.system_functions=response.data;

          


        });
      }


  }


}


</script>


<style scoped>

.block-group,.permission-group{padding:9px 0}


</style>