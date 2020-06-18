"use strict";
const init = function(e) {
    let spn=document.querySelector("#time");
     let endtime = new Date();
     let elapsedtime = (endtime.getTime()-localStorage.getItem('start-time'));
    spn.innerHTML = elapsedtime;
    
};

document.addEventListener('DOMContentLoaded',function(){
  init();
});