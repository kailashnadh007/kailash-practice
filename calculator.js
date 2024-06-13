function add ()
{
   var a= document.getElementById("num1").value
   var b= document.getElementById("num2").value
   var z=parseInt(a)+parseInt(b)
   document.getElementById("result").value=z
}

function sub ()
{
   var a= document.getElementById("num1").value
   var b= document.getElementById("num2").value
   var z=parseInt(a)-parseInt(b)
   document.getElementById("result").value=z
}

function mup ()
{
   var a= document.getElementById("num1").value
   var b= document.getElementById("num2").value
   var z=parseInt(a)*parseInt(b)
   document.getElementById("result").value=z
}

function div ()
{
   var a= document.getElementById("num1").value
   var b= document.getElementById("num2").value
   var z=parseInt(a)/parseInt(b)
   document.getElementById("result").value=z
}

function clr()
{
    document.getElementById("num1").value=null
    document.getElementById("num2").value=null
    document.getElementById("result").value=null
    
}