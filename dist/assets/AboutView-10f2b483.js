import{_ as u,o as l,c as d,a as e,w as r,b as c,v as m,d as p,p as g,e as h}from"./index-5bf33725.js";const f={data(){return{suggestion:"",showModal:!1}},methods:{submitSuggestion(){console.log("Suggestion submitted:",this.suggestion),this.suggestion="",this.showModal=!0},closeModal(){this.showModal=!1}}},a=n=>(g("data-v-74cbe965"),n=n(),h(),n),b={class:"about"},_=a(()=>e("div",{class:"content"},[e("h1",null,"Welcome to the ONGC News Portal"),e("p",null,"We are dedicated to bringing you the latest news and updates from ONGC (Oil and Natural Gas Corporation Limited). Our mission is to provide accurate, reliable, and timely information to our readers."),e("p",null,"Explore our portal to stay informed about the latest developments, innovations, and events in the world of energy and beyond."),e("p",null,"Join our community of enthusiasts, professionals, and industry experts as we embark on a journey to explore the future of energy together.")],-1)),y=a(()=>e("div",{class:"image-container"},[e("img",{src:"https://media.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2Fwebp.net-compress-image-27-611108cd1e2a2-3.jpg?w=1200&auto=format%2Ccompress&fit=max",alt:"ONGC Image",class:"ongc-image"})],-1)),v={class:"suggestion-box"},w=a(()=>e("h2",null,"Have any suggestions or feedback?",-1)),k=a(()=>e("button",{type:"submit"},"Submit",-1)),M={class:"modal-content"},x=a(()=>e("h2",null,"Thank you for your feedback!",-1)),S=a(()=>e("p",null,"We appreciate your input. Your feedback has been submitted successfully.",-1));function C(n,o,N,F,i,t){return l(),d("div",b,[_,y,e("div",v,[w,e("form",{onSubmit:o[1]||(o[1]=r((...s)=>t.submitSuggestion&&t.submitSuggestion(...s),["prevent"]))},[c(e("textarea",{"onUpdate:modelValue":o[0]||(o[0]=s=>i.suggestion=s),placeholder:"Enter your suggestion or feedback"},null,512),[[m,i.suggestion]]),k],32)]),i.showModal?(l(),d("div",{key:0,class:"modal",onClick:o[3]||(o[3]=r((...s)=>t.closeModal&&t.closeModal(...s),["self"]))},[e("div",M,[e("span",{class:"close",onClick:o[2]||(o[2]=(...s)=>t.closeModal&&t.closeModal(...s))},"×"),x,S])])):p("",!0)])}const O=u(f,[["render",C],["__scopeId","data-v-74cbe965"]]);export{O as default};
