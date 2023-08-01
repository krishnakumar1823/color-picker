
//add event listenter MOUSELEAVE


var uname=document.getElementById("Uname")
uname.addEventListener("mouseleave",function(){
    
    var change=document.getElementById("change");
    change.setAttribute("style",`color:${uname.value};font-size: 25px;`)
})


var clr=document.getElementById("clr")
var add=document.getElementById("addBg")
clr.oninput = () =>{
    add.setAttribute("style",`background-color:${clr.value};height: 100vh;flex-direction: column;margin:0;color:white`)
}