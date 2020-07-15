var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");

var op1=0;
var op2=0;
var operator=0;
for(var i=0;i<buttons.length;i++)
{
 buttons[i].addEventListener('click',function(){
    
    var type=this.getAttribute("data-val");
    if(type=='+')
    {
      op1=parseFloat(display.textContent);
     operator='+';
     display.innerHTML="";
    } 
    else if(type=='-')
    {
      op1=parseFloat(display.textContent);
     operator='-';
     display.innerHTML="";
    } 
    else if(type=='*')
    {
      op1=parseFloat(display.textContent);
     operator='*';
     display.innerHTML="";
    } 
    else if(type=='/')
    {
      op1=parseFloat(display.textContent);
     operator='/';
     display.innerHTML="";
    } 
    else if(type=='%')
    {
      op1=parseFloat(display.textContent);
     operator='%';
     display.innerHTML="";
    } 
    else if(type=='AC')
    {
     display.innerHTML="";
    } 
    else if(type=='+/-')
    {
        op1=parseFloat(display.textContent);
        op1=-op1;
        display.innerHTML=op1;
    }


    else if(type=='='){
    op2=parseFloat(display.textContent);
    display.innerHTML=eval(op1+operator+op2);   
    op1="";
}
    else{
        display.innerText=display.innerText+type;
    }

    


 });
}
