let a=document.getElementById("ho");
let b= document.getElementById("mi");
let c= document.getElementById("se");
let d= document.getElementById("p");

function get_time(){

now=new Date();
let x=now.getHours();
let y=now.getMinutes();
let z=now.getSeconds();
d.textContent=x>=12 ? 'PM' :"AM";
if(x>12){
    x=x-12;
}
if(x<10){
    x="0"+x;
}
if(y<10){
    y="0"+y;
}
if(z<10){
    z="0"+z;
}

a.textContent=x;
b.textContent=y;
c.textContent=z;




}
setInterval(get_time,1000);

