import{f as l}from"./form-DxSdwfZy.js";import{_ as m,e as i,w as p,r,o as d,b as u}from"./index-Drk3BKBC.js";const c={components:{formComponent:l},data(){return{airlines:[]}},methods:{onModelData(o){console.log(o),this.model=o,this.airlines=o.airlines}},mounted(){this.loadModel()}};function f(o,e,_,b,n,C){const t=r("SubmitButton"),s=r("formComponent");return d(),i(s,{modelValue:o.model,"onUpdate:modelValue":e[0]||(e[0]=a=>o.model=a),errors:o.$root._errors,airlines:n.airlines},{submit:p(()=>[u(t,{label:"Guardar"})]),_:1},8,["modelValue","errors","airlines"])}const V=m(c,[["render",f]]);export{V as default};
