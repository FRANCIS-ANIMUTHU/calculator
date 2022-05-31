var input=document.getElementById('input');


var but1=document.getElementById('one');
but1.addEventListener('click',one);
function one(){
    //var b1=1;
    input.value+=1;
}
var but2=document.getElementById('two');
but2.addEventListener('click',two);
function two(){
   //  var b2=2;
    input.value +=2;

}
var but3=document.getElementById('three');

but3.addEventListener('click',three);
function three(){
   // var b3=3;
    input.value+=3;
}
var but4=document.getElementById('four');
but4.addEventListener('click',four);
function four(){
   // var b4=4;
    input.value +=4;  
}
var but5=document.getElementById('five');
but5.addEventListener('click',five)
function five(){
    //var b5=5;
    input.value +=5   
}
var but6=document.getElementById('six');
but6.addEventListener('click',six)
function six(){
input.value +=6; 
}
var but7=document.getElementById('seven');
but7.addEventListener('click',seven)
function seven(){
     input.value +=7;
}
var but8=document.getElementById('eight');
but8.addEventListener('click',eight);
function eight(){
    input.value +=8;
}
var but9=document.getElementById('nine');
but9.addEventListener('click',nine);
function nine(){
       but9.value +=9;
}
var but0=document.getElementById('zero');
but0.addEventListener('click',zero);
function zero(){
    input.value +=0;  
}
var butdot=document.getElementById('dot')
butdot.addEventListener('click',dot);
function dot(){
    input.value+='.';
}
var buttonr=document.getElementById('btnr');
buttonr.addEventListener('click',butr);
function butr(){
    input.value=null;
}


