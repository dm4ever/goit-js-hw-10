import"./assets/styles-c815fadb.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";const t=document.querySelector("[data-start]"),r=document.querySelectorAll(".value");let a,n;t.disabled=!0;const i=document.querySelector("#datetime-picker"),f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<=new Date?(h.show({title:"ERROR:",titleColor:"red",message:"Please choose a date in the future",messageColor:"red",color:"red",position:"topRight"}),t.disabled=!0):t.disabled=!1}};m(i,f);t.addEventListener("click",e=>{const s=setInterval(()=>{if(n=a-new Date,e.preventDefault(),n<1){t.disabled=!0,clearInterval(s);return}const o=p(n);r[0].innerText=o.days.toString().padStart(2,"0"),r[1].innerText=o.hours.toString().padStart(2,"0"),r[2].innerText=o.minutes.toString().padStart(2,"0"),r[3].innerText=o.seconds.toString().padStart(2,"0")},1e3);i.disabled=!0,t.disabled=!0});function p(e){const d=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:c,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
