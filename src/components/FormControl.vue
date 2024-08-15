<template>


    <span class="form-input" v-if="type=='text'">
        <skeleton :type="'text'" v-if="ctx.isretrieving"></skeleton>
        <input type="text" v-else class="form-control" v-bind:disabled="disabled" v-bind:class="[{'error':error},className]" v-bind:required="required" v-bind:placeholder="placeholder" @input="updateModel" v-bind:value="modelValue"/>
        <span v-if="error!=''" class="error-note">{{ error }}</span>        
    </span>

    <span class="form-input" v-if="type=='password'">
        <skeleton :type="'text'" v-if="ctx.isretrieving"></skeleton>
        <input :type="password_type_switch" v-else class="form-control" v-bind:disabled="disabled" v-bind:class="[{'error':error},className]" v-bind:required="required" v-bind:placeholder="placeholder" @input="updateModel" v-bind:value="modelValue"/>
        <span v-if="error!=''" class="error-note">{{ error }}</span>
        <div class="password-switcher">
            <a v-if="password_type_switch=='password'" href="javascript:" @click="showpassword"><i class="mdi mdi-eye-outline"></i></a>
            <a v-if="password_type_switch=='text'" href="javascript:" @click="hidepassword"><i class="mdi mdi-eye-off-outline"></i></a>
        </div>
    </span>
    
    <span class="form-input" v-if="type=='email'">
        <skeleton :type="'text'" v-if="ctx.isretrieving"></skeleton>
        <input type="email" v-else class="form-control" v-bind:disabled="disabled" v-bind:class="[{'error':error},className]" v-bind:required="required" v-bind:placeholder="placeholder" @input="updateModel" v-bind:value="modelValue"/>
        <span v-if="error!=''" class="error-note">{{ error }}</span>        
    </span>


    <span class="form-input" v-if="type=='tel'">
        <skeleton :type="'tel'" v-if="ctx.isretrieving"></skeleton>
        <input v-type="'tel'" v-else class="form-control" v-bind:disabled="disabled" v-bind:class="[{'error':error},className]" v-bind:required="required" v-bind:placeholder="placeholder" @input="updateModel" v-bind:value="modelValue"/>
        <span v-if="error!=''" class="error-note">{{ error }}</span>
    </span>


    <span class="form-input" v-if="type=='number'">
        <skeleton :type="'number'" v-if="ctx.isretrieving"></skeleton>
        <input v-type="'number'" v-else class="form-control" v-bind:disabled="disabled" v-bind:class="[{'error':error},className]" v-bind:required="required" v-bind:placeholder="placeholder" @input="updateModel" v-bind:value="modelValue"/>
        <span v-if="error!=''" class="error-note">{{ error }}</span>
    </span>


    <span class="form-input" v-if="type=='textarea'">
        <skeleton :type="'textarea'" v-if="ctx.isretrieving"></skeleton>
        <textarea v-bind:rows="rows" v-else class="form-control" v-bind:disabled="disabled" v-bind:class="[{'error':error},className]" v-bind:required="required" v-bind:placeholder="placeholder" @input="updateModel" v-bind:value="modelValue"></textarea>
        <span v-if="error!=''" class="error-note">{{ error }}</span>
    </span>

    <span class="form-input" v-if="type=='select'">
        <skeleton :rows="1" :cols="1" :type="'text'" v-if="ctx.isretrieving"></skeleton>
        <select class="form-control" v-bind:class="[{'error':error},className]" v-bind:disabled="disabled" v-else v-bind:required="required" v-bind:value="modelValue" @change="updateModel">
            <option v-for="item in options" :key="item.id" v-bind:value="item.id">
                {{item[label]}}
            </option>
        </select>
        <span v-if="error!=''" class="error-note">{{ error }}</span>
    </span>

    <span class="form-input" v-if="type=='switch'">
        <skeleton :type="'switch'" v-if="ctx.isretrieving"></skeleton>
        <span v-else class="form-switch">
            <input type="checkbox" class="form-check-input switch-input" v-bind:disabled="disabled" @click="updateModel" :checked="modelValue" value="1" true-value="1" false-value="0"/>
        </span>
    </span>

</template>


<script>

    import Skeleton from '@/components/Skeleton.vue';

    export default{

        name:"FormControl",
        components:{
            Skeleton
        },
        data(){

            return{

                ctx:{},
                password_type_switch:'password'

            }
        },
        props:{

            type:{
                type:String,
                default:'text'
            },
            modelValue:{},
            options:{
                type:Array,
                default:[]
            },
            label:{
                type:String,
                default:'name'
            },

            required:{
                type:Boolean,
                default:false,
            },
            placeholder:{
                type:String,
                default:''
            },
            rows:{
                type:Number
            },
            context:{
                type:Object,
                default:{}
                
            },
            error:{
                type:String,
                default:''
            },
            disabled:{

                type:Boolean,
                default:false

            },
            className:{

                type:String,
                default:''

            }
            

                
            
        },

        emits:['input','update:modelValue'],
        methods:{


            showpassword:function(){
                this.password_type_switch='text';
            },

            hidepassword:function(){
                this.password_type_switch='password';
            },

            updateModel(e){


                let val=e.target.value;
                /*if(parseFloat(val)!=NaN){
                    val=parseFloat(val);
                }*/
                

                if(this.type=='switch'){
                    val=e.target.checked?1:0;
                }


                this.$emit('update:modelValue',val);

                if(this.type=='text'){
                    this.$emit('input',val);
                }
                if(this.type=='select'){
                    this.$emit('change',val);
                }


            }
        },

        mounted(){


            
            if(Object.entries(this.context).length==0){

                this.ctx=this.$parent.$parent;
            }else{
                this.ctx=this.context;
            }
            
        }



    }

</script>


<style scoped>

.form-input .password-switcher{position: relative;text-align: right;display: block;top:-30px;right:10px;pointer-events:none}
.form-input .password-switcher a{pointer-events: all;color:#888;}
</style>