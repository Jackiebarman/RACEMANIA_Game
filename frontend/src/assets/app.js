"use strict";
const init = function(e) {
    let btn=document.querySelector("#item1");
    let starttime = new Date();
    btn.addEventListener('click', function(){

        localStorage.setItem('start-time',starttime.getTime());
        window.document.location= './time.html';
    });
};

document.addEventListener('DOMContentLoaded',function(){
  init();
});

