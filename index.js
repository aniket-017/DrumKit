// alert("working!!");




var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", work);
    
}


document.addEventListener("keypress", function(event){
   var m = event.key;
    sound(m);
    animate(m);
});


function work() {
    var x = this.innerHTML;
    sound(x);
    animate(x);
}

function sound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;

        default:
            break;
    }

}

function animate(button) {

    var b = document.querySelector("."+button);

    b.classList.add("pressed");

    setTimeout(function(){
        b.classList.remove("pressed");
    }, 50);
    
}

          
    // audio.play();
    // this.style.color ="white"; 
