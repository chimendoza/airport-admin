import{I as d}from"./InteracTable-CzxxickN.js";import{_,c as p,a as t,b as o,w as e,d as i,r as a,o as m,t as n}from"./index-Drk3BKBC.js";const u={name:"ListProfiles",components:{InteracTable:d}},h={class:"row"},b={class:"col-12 grid-margin"},f={class:"card"},g={class:"card-body"},v=t("i",{class:"mdi mdi-plus btn-icon-append"},null,-1),x=t("h4",{class:"card-title page-title"},[t("span",{class:"page-title-icon bg-gradient-primary text-white me-2"},[t("i",{class:"mdi mdi-lock-outline"})]),i(" Perfiles del sistema")],-1),k={class:"table-responsive"},w=t("th",null,"ID",-1),I=t("th",null,"Nombre",-1);function y(r,N,T,$,B,V){const c=a("router-link"),l=a("InteracTable");return m(),p("div",h,[t("div",b,[t("div",f,[t("div",g,[o(c,{to:"/profiles/create",class:"btn pull-right btn-gradient-primary btn-icon-text btn-sm"},{default:e(()=>[v,i(" Agregar ")]),_:1}),x,t("div",k,[o(l,{route:r.autolink()},{headers:e(()=>[w,I]),row:e(s=>[t("td",null,n(s.id),1),t("td",null,n(s.name),1)]),_:1},8,["route"])])])])])])}const P=_(u,[["render",y]]);export{P as default};
