function func(elem) {
  if (elem.textContent == "O") elem.textContent = "X";
  else if (elem.textContent == "X") {
    elem.textContent = "O";
    return;
  }

  if (elem.textContent != "X" && elem.textContent != "O") {
    elem.textContent = "X";
    return;
  }
}

function funcz(elem) {
  elem.textContent = "";
}

var z = document.querySelector("button");
z.addEventListener("click", clear);
var s = document.querySelectorAll("td");
function clear() {
  s = document.querySelectorAll("td");
  for (var i = 0; i < s.length; i++) {
    s[i].textContent = "";
  }
}
