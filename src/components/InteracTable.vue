<template>
              
    <table class="table">
    <thead>
        <tr>
            <th><input type="checkbox"></th>

            <slot name="headers"></slot>
            <th v-if="allow('update,delete')">Acciones</th>

        </tr>
    </thead>
    <tbody>

        <tr v-if="isloading">
        <td colspan="10">
        <skeleton :rows="itemsperpage" :cols="3"></skeleton>
        </td>
        </tr>



        <template v-else>
            <tr v-for="(item, index) in items" :key="index">
            
                
                <td><slot name="checkbox" v-bind="{item:item,items:items}"><input type="checkbox"/></slot></td>


                
                <slot name="row" v-bind="item"></slot>

        
                <td v-if="allow('update,delete')">
                    <slot name="update" v-bind="item">
                        <template v-if="allow('update')">
                            <router-link class="action-link" :to="autolink('/update/'+item.id)"><i class="mdi mdi-square-edit-outline"></i></router-link>
                        </template>
                    </slot>

                    <slot  name="delete" v-bind="{item:item,items:items}">
                        <template v-if="allow('delete')">
                            <a class="action-link" @click="deleteModel(item.id,route)"><i class="mdi mdi-delete-outline"></i></a>
                        </template>
                    </slot>

                    
                </td>

            
            </tr>
        </template>
    </tbody>
    </table>


        <ul class="pagination" v-if="totalpages>1">
            
            <li v-for="index in totalpages" :key="index" class="page-item">
                <a :class="isActive(index)" @click="paginate(index)">{{ index }}</a>
            </li>
        </ul>


</template>


<script>


    import Skeleton from '@/components/Skeleton.vue';
    

    export default {
         name:"InteracTable",
        components:{Skeleton},
        props:{

            route:{type:String,
                   required:true    
            },
            rows:{
                type:Array,
                default:[]
            },
            itemsperpage:{
                    type:Number,
                    default:10
            }

            

        },


        methods:{


            onModelDelete(id){

                this.$emit('deleted',id);

            },


            loadItems(p){


                let page=p || 1;

                this.isloading=true;
                this.$api.get(this.makeRoute(page)).then(response=>{

                    
                    
                    this.totalpages=parseInt(response.headers.get('x-pagination-page-count'));

                    this.isloading=false;
                    this.items=response.data;

                }).catch(error=>{


                    
                    this.$push.error(error.response.data.error);

                })

                
            },

            generatePermissionName(){   
                let tr=this.$route.matched[0].path;

                if(this.$route.matched[0].aliasOf){
                    tr=this.$route.matched[0].aliasOf.path;
                }


                

                tr=tr.replace('/','');
                tr=tr.split('?');
                tr=tr[0];

                
                return tr;
            },

            allow(permissions){


                const tr=this.generatePermissionName();
                let pstring=[];
                const parray=permissions.split(',');
                for(var i in parray){
                    
                    pstring.push(tr+'.'+parray[i]);
                }

                pstring=pstring.join(',');

                
                return this.$allow(pstring);

            },

            allowUpdate(){
                const tr=this.generatePermissionName();
                return this.$allow(tr+'.update');


            },

            paginate(index){

                this.currentpage=index;

                this.loadItems(index);
                
            },

            isActive(index){

                return index==this.currentpage?'active':'';

            },

            makeRoute(page){


                let amp=this.route && this.route.indexOf('?')!=-1?'&':'?';
                let route=this.route+amp+'per-page='+this.itemsperpage+'&page='+page

                return route;
            }



        },

         data(){

            return {

                isloading:true,
                items:[],
                totalpages:1,
                currentpage:1
            

            }

         },

         mounted(){

            this.loadItems();

            
         },
         watch:{

            rows:{
                handler:function(items){

                    this.items=items;

                }
            }

         }

         

   
    }

</script>


<style>


.table-responsive{clear:both !important}

</style>