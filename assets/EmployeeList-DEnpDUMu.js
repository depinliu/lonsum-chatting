const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EmployeeItem-C9tI-BJN.js","assets/index-5SBp6GNj.js","assets/index-DV9UrBT4.css","assets/NewGroup-DwwuxH3s.js"])))=>i.map(i=>d[i]);
import{f as x,c as r,o as e,j as n,x as f,u as t,i as c,F as l,s as i,a as p,t as v,_}from"./index-5SBp6GNj.js";const y={class:"flex flex-col overflow-y-auto scroll-thin h-[calc(100vh-120px)] max-h-full gap-4"},k={class:"px-4"},g={class:"font-medium text-xl text-primary"},I={__name:"EmployeeList",setup(E){const a=x(),u=c(()=>_(()=>import("./EmployeeItem-C9tI-BJN.js"),__vite__mapDeps([0,1,2]))),d=c(()=>_(()=>import("./NewGroup-DwwuxH3s.js"),__vite__mapDeps([3,1,2])));return(C,b)=>(e(),r("div",y,[t(a).isCreateGroup?f("",!0):(e(),n(t(d),{key:0,class:"py-3 px-4 hover:bg-zinc-100 cursor-pointer group dark:hover:bg-zinc-700"})),(e(!0),r(l,null,i(t(a).data.employees,(s,m)=>(e(),r("div",{key:m,class:"flex flex-col"},[p("div",k,[p("h4",g,v(s.alphabet),1)]),(e(!0),r(l,null,i(s.list,(o,h)=>(e(),n(t(u),{class:"py-2 px-4 hover:bg-zinc-100 cursor-pointer group dark:hover:bg-zinc-700",key:h,id:o.id,name:o.name,department:o.department,onClick:z=>t(a).clickEmployeeItem(o)},null,8,["id","name","department","onClick"]))),128))]))),128))]))}};export{I as default};
