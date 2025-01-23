for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function()
{
    var Innerbutton = this.innerHTML;
    switch(Innerbutton){
        case "s":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "r":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "i":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "g":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "m":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "a":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(Innerbutton);



    }
 });
}