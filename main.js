canvas = 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var cor
var raio
var largura
var PositionMouseX
var PositionMouseY

function myMouseDown(e)
{
    cor = document.getElementById("cor1").value;
    largura = document.getElementById("larguralinha1").value;
    raio = document.getElementById("raio1").value;
    MouseEvent = "myMouseDown";
}

function myMouseUp(e)
{
    cor = document.getElementById("cor1").value;
    largura = document.getElementById("larguralinha1").value;
    raio = document.getElementById("raio1").value;
    MouseEvent = "myMouseUp";
}

function myMouseUp(e)
{
    cor = document.getElementById("cor1").value;
    largura = document.getElementById("larguralinha1").value;
    raio = document.getElementById("raio1").value;
    MouseEvent = "myMouseLeave";
}

function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if(MouseEvent == "moueseDown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x - " + PositionMouseX "y - " + PositionMouseY);
        ctx.beginPath();
        ctx.strokeStyle = cor1;
        ctx.lineWidth = largura;
        ctx.arc(PositionMouseX, PositionMouseY, radius, 0, 2* Math.PI)
        ctx.stroke();
    }


}

