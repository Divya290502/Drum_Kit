document.addEventListener("keydown", function(event) {
    var k=event.keyCode;
    if(k==119 || k==87) {
      playSound('w');
    }
    else if(k==97 || k==65){
      playSound('a');
    }
    else if(k==115 || k==83) {
      playSound('s');
    }
    else if(k==100 || k==68) {
      playSound('d');
    }
    else if(k==106 || k==74) {
      playSound('j');
    }
    else if(k==107 || k==75) {
      playSound('k');
    }
    else if(k==108 || k==76) {
      playSound('l');
    }else{
      console.log("Wrong key!");
    }
});


var buttons = document.querySelectorAll(".set button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      playSound(this.innerHTML);
    });
}
function playSound(event){
  switch (event) {
    case 'w':
      var audio1 = new Audio('sounds/tom-1.mp3');
      audio1.play();
      break;
      case 'a':
        var audio2 = new Audio('sounds/tom-2.mp3');
        audio2.play();
        break;
      case 's':
        var audio3 = new Audio('sounds/tom-3.mp3');
        audio3.play();
        break;
      case 'd':
        var audio4 = new Audio('sounds/tom-4.mp3');
        audio4.play();
        break;
      case 'j':
        var audio5 = new Audio('sounds/snare.mp3');
        audio5.play();
        break;
      case 'k':
        var audio6 = new Audio('sounds/crash.mp3');
        audio6.play();
        break;
      case 'l':
        var audio7 = new Audio('sounds/kick-bass.mp3');
        audio7.play();
        break;
    default:
      console.log("Wrong key!");

  }
}
