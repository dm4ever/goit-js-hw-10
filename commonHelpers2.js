import"./assets/styles-c815fadb.js";import{i as r}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();const o=e.currentTarget.elements.delay.value,i=e.currentTarget.elements.state.value;new Promise((t,l)=>{setTimeout(()=>{i==="fulfilled"?t():l()},o),s.reset()}).then(t=>{r.show({titleColor:"green",message:`✅ Fulfilled promise in ${o}ms`,messageColor:"green",color:"green",position:"topRight"})},t=>{r.show({titleColor:"red",message:`❌ Rejected promise in ${o}ms`,messageColor:"red",color:"red",position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map