let z = document.querySelector(".btn");

z.addEventListener("click", () => {
  document.querySelector("#collegeName").style.transitionDuration = "1s";
  document.querySelector("#collegeName").style.transform = "translateY(-220px)";
  document.querySelector("#tag").style.display = "none";
  document.querySelector("#std-button").style.display = "none";
  let opacity = 0;

  let intervalID = setInterval(() => {
    document.querySelector("section").style.display = "flex";
    {
      let sec = document.getElementById("stdForm");
      opacity = Number(
        window.getComputedStyle(sec).getPropertyValue("opacity")
      );
      if (opacity < 1) {
        opacity = opacity + 0.1;
        sec.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }
  }, 55);
});

let k = document.getElementById("clear-form");

k.addEventListener("click", () => {
  let opacity = 0;
  document.querySelector("#collegeName").style.filter = "blur(10px)";
  //document.querySelector("section").style.filter = "blur(10px)";
  let intervalID = setInterval(() => {
    document.querySelector(".dialog").style.display = "inline-block";
    {
      let body = document.querySelector("body");

      let dialog = document.getElementById("Dialog");
      opacitydlg = Number(
        window.getComputedStyle(dialog).getPropertyValue("opacity")
      );

      /*opacitybody = Number(
        window.getComputedStyle(body).getPropertyValue("opacity")
      );*/
      if (opacitydlg < 1) {
        opacitydlg = opacitydlg + 0.1;
        //opacitybody = opacitybody - 0.1;
        dialog.style.opacity = opacitydlg;
        //body.style.opacity = opacitybody;
      } else {
        clearInterval(intervalID);
      }
    }
  }, 55);

  document.querySelector(".yes").addEventListener("click", () => {
    document.querySelector("#collegeName").style.filter = "blur(00px)";
    //document.querySelector("section").style.filter = "blur(00px)";
    document.querySelector(".dialog").style.display = "none";
    let textFields = document.querySelectorAll(".item-w");
    for (let i = 0; i < textFields.length; i++) {
      textFields[i].value = "";
    }
  });

  document.querySelector(".no").addEventListener("click", () => {
    document.querySelector("#collegeName").style.filter = "blur(00px)";
    //document.querySelector("section").style.filter = "blur(00px)";
    document.querySelector(".dialog").style.display = "none";
  });
});
