import{I as l}from"./InteracTable-CzxxickN.js";import{_ as d,c as _,a as t,b as o,w as a,d as r,r as n,o as p,t as s}from"./index-Drk3BKBC.js";const u={name:"Listaircrafts",components:{InteracTable:l}},h={class:"row"},m={class:"col-12 grid-margin"},b={class:"card"},f={class:"card-body"},g=t("i",{class:"mdi mdi-plus"},null,-1),v=t("h4",{class:"card-title page-title"},[t("span",{class:"page-title-icon bg-gradient-primary text-white me-2"},[t("i",{class:"mdi mdi-account-star"})]),r(" Listando aeronaves")],-1),x={class:"table-responsive"},w=t("th",null,"ID",-1),y=t("th",null,"Aerolínea",-1),I=t("th",null,"Número de unidad",-1),k=t("th",null,"Modelo",-1),N=t("th",null,"Capacidad",-1);function T($,B,C,V,A,D){const c=n("router-link"),i=n("InteracTable");return p(),_("div",h,[t("div",m,[t("div",b,[t("div",f,[o(c,{class:"btn btn-gradient-primary pull-right btn-sm",to:"/aircrafts/create"},{default:a(()=>[g,r(" Agregar aeronave")]),_:1}),v,t("div",x,[o(i,{route:"/aircrafts?expand=airline"},{headers:a(()=>[w,y,I,k,N]),row:a(e=>[t("td",null,s(e.id),1),t("td",null,s(e.airline.name),1),t("td",null,s(e.unit_number),1),t("td",null,s(e.model),1),t("td",null,s(e.capacity),1)]),_:1})])])])])])}const M=d(u,[["render",T]]);export{M as default};
