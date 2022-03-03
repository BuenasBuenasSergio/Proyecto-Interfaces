//nav
let nav,lis;
// funciones sprite
let sprite;
let posX = 0;
let posY = 0;
let spriteID;
//formulario
let input;
let beca;
let cont = 0;
window.onload = function() {
    nav = document.getElementsByClassName("nabar");
    lis = document.getElementsByTagName("li");
    document.getElementById("dalton").addEventListener("click", daltonismo)
    sprite = document.getElementsByClassName("animacion")
    spriteID= document.getElementById('spriteD');
    input = document.getElementsByClassName("form-control")
    document.getElementById("beca")-addEventListener("click",showInput);
    
}

//cambio ccolor navar
function daltonismo() {
    if (document.getElementById("dalton").checked) {
        nav[0].style.backgroundColor = "Yellow"
        for (let i = 0; i < input.length; i++) {
           input[i].style.backgroundColor = "yellow"
            
        }
    }else {
        nav[0].style.backgroundColor = "rgb(132, 233, 247)";
        for (let i = 0; i < input.length; i++) {
            input[i].style.backgroundColor = ""
        }
    }
}


function mover(event){
    //alert(event.keyCode);
    switch(event.keyCode){
        //mover derecha
        case 100:
            posX += 4;
            spriteID.style.left = posX + "px";
            sprite[0].setAttribute("id" , "spriteAndarD");
            break;
        //mover
        case 97:
            posX -= 4;
            spriteID.style.left =  posX + "px";
            sprite[0].setAttribute("id" , "spriteAndarI");
            break;
        //mover arriba
        case 119:
            if(spriteID.style.top != window.height)
            posY -= 4;
            spriteID.style.top = posY + "px";
            
            sprite[0].setAttribute("id" , "spriteAndarUP");
            break;
        //mover abajo
        case 115:
            if(spriteID.style.top != window.height){
            posY += 4;
            spriteID.style.top = posY + "px";}
            sprite[0].setAttribute("id" , "spriteAndarDW");
            break;
        default:
            break;
    }
}


function parar(){

    switch(event.keyCode){
        case 68:
            sprite[0].setAttribute("id" , "spriteD")
            break;
        case 65:
            sprite[0].setAttribute("id" , "spriteI")
            break;
        case 87:
            sprite[0].setAttribute("id" , "spriteUP")
            break;
         case 83:
            sprite[0].setAttribute("id" , "spriteDW")
            break;
        default:
            break;
    }

}

function showInput(){
    if (document.getElementById("beca").checked) {
        document.getElementById("doc").style.display = "block";
    }else{
        document.getElementById("doc").style.display = "none";
    }
}

function cambioForm(){
    if(cont % 2 == 0){
    document.getElementById("inicio").style.display = "block";
    document.getElementById("registro").style.display = "none";
    }
    if (cont % 2 == 1) {
        document.getElementById("inicio").style.display = "none";
    document.getElementById("registro").style.display = "block";
    }

    cont++;
}