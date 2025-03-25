const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SendIcon-DF4a_tJi.js","assets/index-MEDYofGz.js","assets/index-tx2ksjG5.css","assets/InputWrapperResizer-Dig5G2El.js","assets/ButtonScrollBottom-BxfxF_R_.js","assets/QuillEditor-BMqsMe7N.js","assets/QuillEditor-CMkM3UpW.css","assets/Attachments-BH0QQBoX.js","assets/ChatMessage-BZDqMhpZ.js","assets/HeaderContent-B470KHtj.js"])))=>i.map(i=>d[i]);
import{e as B,k as O,f as M,g as H,l as j,m as F,r as N,h as $,p as U,q as W,b as D,c as i,o as n,d as s,a as o,u as e,i as c,F as b,s as S,t as w,j as q,v as z,x as J,w as v,_ as d}from"./index-MEDYofGz.js";const Q=x=>{const u=new Date(x),f=new Date;if(u.toDateString()===f.toDateString())return u.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(".",":");const _=new Date;return _.setDate(_.getDate()-1),u.toDateString()===_.toDateString()?"Yesterday":u.toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"})},Y="/assets/thumb-2-h8uMZaVl.gif",Z="/assets/i-like-food-CuvPJC7N.svg",G="/assets/i-like-food-dark-DO4DPwSI.svg",K={class:"flex flex-col h-screen w-full relative"},X={class:"bg-zinc-200 px-2 py-1 rounded text-zinc-500 w-fit text-xs mx-auto sticky top-0 dark:bg-zinc-700 dark:text-zinc-200"},ee={class:"relative flex flex-col gap-2 h-full"},te={key:0,class:"flex flex-row items-center gap-2"},oe={class:"flex-1"},ae={class:"font-medium text-sm"},se={key:0},ne=["src"],re={key:1},le=["innerHTML"],ie={class:"flex flex-row items-end gap-2 h-full"},ce={class:"flex-1 h-full"},de={__name:"Chat",setup(x){const u=c(()=>d(()=>import("./SendIcon-DF4a_tJi.js"),__vite__mapDeps([0,1,2]))),f=c(()=>d(()=>import("./InputWrapperResizer-Dig5G2El.js"),__vite__mapDeps([3,1,2]))),_=c(()=>d(()=>import("./ButtonScrollBottom-BxfxF_R_.js"),__vite__mapDeps([4,1,2]))),C=c(()=>d(()=>import("./QuillEditor-BMqsMe7N.js"),__vite__mapDeps([5,1,2,6]))),E=c(()=>d(()=>import("./Attachments-BH0QQBoX.js"),__vite__mapDeps([7,1,2]))),T=c(()=>d(()=>import("./ChatMessage-BZDqMhpZ.js"),__vite__mapDeps([8,1,2]))),I=c(()=>d(()=>import("./HeaderContent-B470KHtj.js"),__vite__mapDeps([9,1,2]))),P=B();O();const t=M(),A=H(),L=j(),V=F(()=>L.currentTheme==="dark"?G:Z),r=N(null),p=()=>{if(!r.value)return;const{scrollTop:m,scrollHeight:a,clientHeight:h}=r.value;t.isAtBottom=a-m<=h+100};return $(async()=>{setTimeout(()=>{r.value&&(r.value.addEventListener("scroll",p),p())},2e3)}),U(()=>{r.value&&r.value.removeEventListener("scroll",p)}),W(()=>P.params.chatId,async m=>{m&&await t.fetchChatDetail(m)},{immediate:!0}),(m,a)=>{const h=D("Alert"),k=D("Button");return n(),i("div",K,[s(e(I),{class:"absolute top-0 left-0 right-0 z-10 h-[64px]"}),o("div",{id:"chatContent",ref_key:"chatContent",ref:r,class:"flex-1 overflow-auto p-4 scroll-thin relative bg-zinc-100 dark:bg-zinc-900 mt-[64px]",style:z({backgroundImage:`url(${V.value})`,backgroundSize:"120px",backgroundRepeat:"repeat"})},[o("div",null,[(n(!0),i(b,null,S(e(t).data.chatDetail.messages,(l,R)=>(n(),i("div",{key:R,class:"flex flex-col space-y-2"},[o("div",X,w(e(Q)(l.date)),1),(n(!0),i(b,null,S(l.data,(y,g)=>(n(),q(e(T),{key:g,detail:y,showAvatar:g===0||l.data[g-1].senderId!==y.senderId,actions:[{label:"Reply",handler:()=>console.log("Reply clicked")},{label:"Forward",handler:()=>console.log("Forward clicked")}]},null,8,["detail","showAvatar","actions"]))),128))]))),128))]),s(e(_))],4),o("div",{class:"relative p-4 bg-white shadow-md dark:bg-zinc-800",style:z({minHeight:`${e(A).inputWrapperHeight}px`})},[o("div",ee,[e(t).data.replyData?(n(),i("div",te,[o("div",oe,[s(h,{class:"rounded-lg"},{default:v(()=>[o("h5",ae,w(e(t).data.replyData.senderName),1),e(t).data.replyData.content==="/thumb/"?(n(),i("div",se,[o("img",{src:e(Y),alt:"thumb",class:"w-[20px]"},null,8,ne)])):(n(),i("div",re,[o("p",{class:"line-clamp-1 text-sm text-zinc-500 dark:text-zinc-200 font-normal",innerHTML:e(t).data.replyData.content},null,8,le)]))]),_:1})]),s(k,{onClick:a[0]||(a[0]=l=>e(t).data.replyData=null),class:"w-10 h-10 !rounded-full text-zinc-500 hover:!bg-zinc-100 flex items-center justify-center mb-1 dark:hover:!text-zinc-300 dark:hover:!bg-zinc-600"},{default:v(()=>a[3]||(a[3]=[o("i",{class:"fa-solid fa-xmark text-xl"},null,-1)])),_:1})])):J("",!0),s(e(E)),o("div",ie,[o("div",ce,[s(e(C),{modelValue:e(t).form.chat,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).form.chat=l),onSendMessage:e(t).clickSendButton},null,8,["modelValue","onSendMessage"])]),s(k,{onClick:a[2]||(a[2]=l=>e(t).clickSendButton(e(t).form.chat)),class:"w-10 h-10 !rounded-full hover:!bg-green-100 flex items-center justify-center mb-1"},{default:v(()=>[s(e(u))]),_:1})])]),s(e(f))],4)])}}},_e=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));export{_e as C,Y as T};
