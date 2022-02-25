btn1=document.getElementById("btn1");
btn2=document.getElementById("btn2");
btn3=document.getElementById("btn3");
btn4=document.getElementById("btn4");
btn5=document.getElementById("btn5");
btn6=document.getElementById("btn6");
btn7=document.getElementById("btn7");
btn8=document.getElementById("btn8");
btn9=document.getElementById("btn9");
btn0=document.getElementById("btn0");

add=document.getElementById("add");
sub=document.getElementById("sub");
mul=document.getElementById("mul");
div=document.getElementById("div");

dot=document.getElementById("dot");
del=document.getElementById("del");
clear=document.getElementById("clear");
eql=document.getElementById("eql");





btn1.addEventListener("click",function(){
   
    //document.getElementById("txt").value+=1;
    document.getElementById("txt").value+=1;
    
});

btn2.addEventListener("click",function(){
    document.getElementById("txt").value+=2;
    
});

btn3.addEventListener("click",function(){
    document.getElementById("txt").value+=3;
});

btn4.addEventListener("click",function(){
    document.getElementById("txt").value+=4;
});

btn5.addEventListener("click",function(){
    document.getElementById("txt").value+=5;
});

btn6.addEventListener("click",function(){
    document.getElementById("txt").value+=6;
});

btn7.addEventListener("click",function(){
    document.getElementById("txt").value+=7;
});

btn8.addEventListener("click",function(){
    document.getElementById("txt").value+=8;
});

btn9.addEventListener("click",function(){
    document.getElementById("txt").value+=9;
});

btn0.addEventListener("click",function(){
    document.getElementById("txt").value+=0;
});

add.addEventListener("click",function(){

    
    document.getElementById("txt").value+='+';
    
    //alert(count);
    
});

sub.addEventListener("click",function(){
    document.getElementById("txt").value+='-';
    
});

mul.addEventListener("click",function(){
    document.getElementById("txt").value+='*';
    
});

div.addEventListener("click",function(){
    document.getElementById("txt").value+='/';
    
});

dot.addEventListener("click",function(){
    document.getElementById("txt").value+='.';
    
});

clear.addEventListener("click",function(){
    document.getElementById("txt").value='';
});

del.addEventListener("click",function(){
    z=document.getElementById("txt").value;
    w=z;
    len=z.length;
    z=w.slice(0,len-1);
    document.getElementById("txt").value=z;
    //alert(len);
    //alert(z);
});




eql.addEventListener("click",function(){
    var x=document.getElementById("txt").value;
    try{
        y=eval(x);
        document.getElementById("txt").value=y;
    }
    catch(invalid){
        document.getElementById("txt").value="Invalid Input";
    }
});