"use strict";

$(document).ready(function () {
    $(".vib").change(function () {
    
        var val = $('.vib:checked').val();
        // alert(val);
    });
    });
    var inp = document.getElementsByName('r');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            alert("selected: " + inp[i].value);
        }
    }


function checkLC(){
    var buf=document.getElementById('enter').value;
    console.log('buf:'+document.getElementById('enter').value);

    // var count= localStorage.getItem()
    var val = $('.vib:checked').val();
  
            


    if (buf = localStorage.getItem(buf)){
        console.log('Такое уже есть!');
    } else{
        localStorage.setItem(buf,val);
    }
}

function checkEnter(){
    if (document.getElementById("enter").value =='' ){
        console.log('enter some: ');

    } else{
        checkLC();
    }
}