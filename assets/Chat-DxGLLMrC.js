const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ContactInformation-CUoeaKKP.js","assets/index-BSxzTt2n.js","assets/index-B2xumsje.css","assets/InputWrapperResizer-DFs6YL4v.js","assets/ButtonScrollBottom-DAydgBz8.js","assets/QuillEditor-DAodBGnl.js","assets/QuillEditor-CMkM3UpW.css","assets/Emoji-CenDk3VD.js","assets/Attachments-C8cbj9VL.js","assets/AttachmentsPreview-D1zwKMO4.js","assets/ChatMessage-CpV3IIhz.js","assets/HeaderContent-7jeupFee.js"])))=>i.map(i=>d[i]);
import{e as N,k as j,f as $,g as U,l as W,m as q,r as J,h as Q,p as Y,q as G,b as E,c as d,o as a,a as s,d as n,s as x,u as e,i as r,v as S,n as b,j as k,F as z,x as I,t as C,w as y,_ as l}from"./index-BSxzTt2n.js";const K=D=>{const u=new Date(D),p=new Date;if(u.toDateString()===p.toDateString())return u.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(".",":");const m=new Date;return m.setDate(m.getDate()-1),u.toDateString()===m.toDateString()?"Yesterday":u.toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"})},X="/assets/i-like-food-CuvPJC7N.svg",Z="/assets/i-like-food-dark-DO4DPwSI.svg",ee={class:"flex flex-row"},te={class:"flex-1 flex flex-col h-screen relative"},oe={key:1},se={class:"bg-zinc-200 px-2 py-1 rounded text-zinc-500 w-fit text-xs mx-auto sticky top-0 dark:bg-zinc-700 dark:text-zinc-200 z-20"},ae={class:"relative flex flex-col gap-2 h-full"},ne={key:0,class:"flex flex-row items-center gap-2"},re={class:"flex-1"},le={class:"font-medium text-sm"},ie=["innerHTML"],ce={class:"flex flex-row gap-1.5 items-center"},de={class:"flex flex-row items-end gap-2 h-full"},ue={class:"flex-1 h-full"},_e={__name:"Chat",setup(D){const u=r(()=>l(()=>import("./ContactInformation-CUoeaKKP.js"),__vite__mapDeps([0,1,2]))),p=r(()=>l(()=>import("./InputWrapperResizer-DFs6YL4v.js"),__vite__mapDeps([3,1,2]))),m=r(()=>l(()=>import("./ButtonScrollBottom-DAydgBz8.js"),__vite__mapDeps([4,1,2]))),A=r(()=>l(()=>import("./QuillEditor-DAodBGnl.js"),__vite__mapDeps([5,1,2,6]))),P=r(()=>l(()=>import("./Emoji-CenDk3VD.js"),__vite__mapDeps([7,1,2]))),L=r(()=>l(()=>import("./Attachments-C8cbj9VL.js"),__vite__mapDeps([8,1,2]))),T=r(()=>l(()=>import("./AttachmentsPreview-D1zwKMO4.js"),__vite__mapDeps([9,1,2]))),R=r(()=>l(()=>import("./ChatMessage-CpV3IIhz.js"),__vite__mapDeps([10,1,2]))),V=r(()=>l(()=>import("./HeaderContent-7jeupFee.js"),__vite__mapDeps([11,1,2]))),B=N();j();const t=$(),O=U(),H=W(),M=q(()=>H.currentTheme==="dark"?Z:X),c=J(null),g=()=>{if(!c.value)return;const{scrollTop:_,scrollHeight:o,clientHeight:h}=c.value;t.isAtBottom=o-_<=h+100};return Q(async()=>{setTimeout(()=>{c.value&&(c.value.addEventListener("scroll",g),g())},2e3)}),Y(()=>{c.value&&c.value.removeEventListener("scroll",g)}),G(()=>B.params.chatId,async _=>{_&&await t.fetchChatDetail(_)},{immediate:!0}),(_,o)=>{const h=E("Alert"),w=E("Button");return a(),d("div",ee,[s("div",te,[n(e(V),{class:"absolute top-0 left-0 right-0 z-10 h-[64px]"}),s("div",{id:"chatContent",ref_key:"chatContent",ref:c,class:b(["flex-1 overflow-auto scroll-thin relative bg-zinc-100 dark:bg-zinc-900 mt-[64px]",{"p-4":e(t).form.files.length===0,"p-0":e(t).form.files.length>0}]),style:S({backgroundImage:`url(${M.value})`,backgroundSize:"120px",backgroundRepeat:"repeat"})},[e(t).form.files.length>0?(a(),k(e(T),{key:0})):(a(),d("div",oe,[(a(!0),d(z,null,I(e(t).data.chatDetail.messages,(i,F)=>(a(),d("div",{key:F,class:"flex flex-col"},[s("div",se,C(e(K)(i.date)),1),(a(!0),d(z,null,I(i.data,(v,f)=>(a(),k(e(R),{key:f,detail:v,showAvatar:f===0||i.data[f-1].senderId!==v.senderId,actions:[{label:"Reply",handler:()=>console.log("Reply clicked")},{label:"Forward",handler:()=>console.log("Forward clicked")}],class:b(f===0||i.data[f-1].senderId!==v.senderId?"mt-4":"mt-1")},null,8,["detail","showAvatar","actions","class"]))),128))]))),128))])),e(t).form.files.length===0?(a(),k(e(m),{key:2})):x("",!0)],6),e(t).form.files.length===0?(a(),d("div",{key:0,class:"relative p-4 bg-white shadow-md dark:bg-zinc-800",style:S({minHeight:`${e(O).inputWrapperHeight}px`})},[s("div",ae,[e(t).data.replyData?(a(),d("div",ne,[s("div",re,[n(h,{class:"rounded-lg"},{default:y(()=>[s("h5",le,C(e(t).data.replyData.senderName),1),s("p",{class:"line-clamp-1 text-sm text-zinc-500 dark:text-zinc-200 font-normal",innerHTML:e(t).data.replyData.content},null,8,ie)]),_:1})]),n(w,{onClick:o[0]||(o[0]=i=>e(t).data.replyData=null),class:"w-10 h-10 !rounded-full text-zinc-500 hover:!bg-zinc-100 flex items-center justify-center mb-1 dark:hover:!text-zinc-300 dark:hover:!bg-zinc-600"},{default:y(()=>o[3]||(o[3]=[s("i",{class:"fa-solid fa-xmark text-xl"},null,-1)])),_:1})])):x("",!0),s("div",ce,[n(e(P),{class:"hidden lg:flex"}),n(e(L))]),s("div",de,[s("div",ue,[n(e(A),{modelValue:e(t).form.chat,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).form.chat=i),onSendMessage:e(t).clickSendButton},null,8,["modelValue","onSendMessage"])]),n(w,{size:"lg",onClick:o[2]||(o[2]=i=>e(t).clickSendButton(e(t).form.chat)),class:"!w-12 !h-12 !rounded-full bg-primary text-white flex items-center justify-center"},{default:y(()=>o[4]||(o[4]=[s("i",{class:"bi bi-send-fill rotate-45"},null,-1)])),_:1})])]),n(e(p))],4)):x("",!0)]),n(e(u))])}}};export{_e as default};
