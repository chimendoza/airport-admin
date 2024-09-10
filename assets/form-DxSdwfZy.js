import{_ as p,o as h,c as V,a,f as v,g as r,b as s,r as n,d as c,w as b,p as y,h as g}from"./index-Drk3BKBC.js";const w={name:"SeatClassForm",data(){return{searching:!1,aircrafts:[],newrows:[],aircraft:{}}},props:{airlines:{type:Array,default:[]},modelValue:{type:Object,default:{}},errors:{type:Object,default:{}}},methods:{loadAircrafts(){let e=this.modelValue.airline_id;this.$push.promise("Cargando aeronaves"),this.$api.get("/aircrafts?filter[airline_id]="+e).then(t=>{this.makeAircrafts(t)}).catch(t=>{}).finally(()=>{this.$push.clearAll()})},makeAircrafts(e){let t=[],o;for(var m in e.data)o=e.data[m],t.push({id:o.id,name:o.code+" "+o.model});this.aircrafts=t}},watch:{"modelValue.airline_id":{handler:function(){this.loadAircrafts()},deep:!0}}},d=e=>(y("data-v-3e58cf71"),e=e(),g(),e),A={class:"card"},C={class:"card-body"},S=d(()=>a("p",{class:"card-description"}," Datos de la clase ",-1)),k={class:"row"},B={class:"col-md-4"},I={class:"form-group"},N=d(()=>a("label",{class:"col-form-label"},"Nombre",-1)),U={class:"col-md-4"},q={class:"form-group"},F=d(()=>a("label",{class:"col-form-label"},"Aerolínea",-1)),M={class:"col-md-4"},j={class:"form-group"},O=d(()=>a("label",{class:"col-form-label"},"Aeronave",-1)),D={class:"form-group"},E={class:"form-actions"};function T(e,t,o,m,u,z){const i=n("FormControl"),f=n("router-link"),_=n("SubmitButton");return h(),V("div",A,[a("div",C,[a("form",{class:"form-sample",onSubmit:t[4]||(t[4]=v((...l)=>e.saveModel&&e.saveModel(...l),["prevent"]))},[r(e.$slots,"title",{},()=>[S],!0),a("div",k,[a("div",B,[a("div",I,[N,s(i,{type:"text",modelValue:o.modelValue.name,"onUpdate:modelValue":t[0]||(t[0]=l=>o.modelValue.name=l),error:o.errors.name,required:!0},null,8,["modelValue","error"])])]),a("div",U,[a("div",q,[F,s(i,{type:"select",modelValue:o.modelValue.airline_id,"onUpdate:modelValue":t[1]||(t[1]=l=>o.modelValue.airline_id=l),error:o.errors.airline_id,required:!0,options:o.airlines},null,8,["modelValue","error","options"])])]),a("div",M,[a("div",j,[O,s(i,{type:"select",modelValue:o.modelValue.aircraft_id,"onUpdate:modelValue":t[2]||(t[2]=l=>o.modelValue.aircraft_id=l),error:o.errors.aircraft_id,required:!0,options:u.aircrafts},null,8,["modelValue","error","options"])])])]),r(e.$slots,"active",{},()=>[a("div",D,[a("label",null,[c("Activo "),s(i,{type:"switch",modelValue:o.modelValue.active,"onUpdate:modelValue":t[3]||(t[3]=l=>o.modelValue.active=l)},null,8,["modelValue"])])])],!0),r(e.$slots,"options",{},()=>[a("div",E,[r(e.$slots,"cancel",{},()=>[s(f,{to:e.autolink(),class:"btn btn-danger btn-icon-text"},{default:b(()=>[c("Cancelar")]),_:1},8,["to"])],!0),c("   "),r(e.$slots,"submit",{},()=>[s(_)],!0)])],!0)],32)])])}const H=p(w,[["render",T],["__scopeId","data-v-3e58cf71"]]);export{H as f};
