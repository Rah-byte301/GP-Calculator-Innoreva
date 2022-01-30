var z = document.querySelectorAll("button");

function anime(key) {
  document.getElementsByClassName(key)[0].classList.add("pressed");
  setTimeout(function () {
    document.getElementsByClassName(key)[0].classList.remove("pressed");
  }, 100);
}

document.addEventListener("keypress", (event) => {
  var key = event.key;
  anime(key);
  switch (event.key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
});

for (var i = 0; i < z.length; i++) {
  z[i].addEventListener("click", function () {
    anime(this.textContent);
    switch (this.textContent) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    }
  });
}
