document.querySelector(".btn").addEventListener("click", () => {
  document.getElementById("briefing").style.display = "none";
  document.getElementById("name").style.transitionDuration = "1s";
  document.getElementById("name").style.transform = "translateY(-230px)";
  setTimeout(() => {
    document.querySelector(".content").style.display = "inherit";
  }, 1000);
});

document.getElementById("submit").addEventListener("click", () => {
  let fname = document.getElementById("fname").value;
  fname = fname.charAt(0).toUpperCase() + fname.slice(1);

  let lname = document.getElementById("lname").value;
  lname = lname.charAt(0).toUpperCase() + lname.slice(1);

  let reg = document.getElementById("reg").value.toUpperCase();
  let sem = document.getElementById("inputSemester").value;

  let score = 0;
  let marksarray = document.getElementsByClassName("marks");
  let creditsarray = document.getElementsByClassName("credit");
  let totalCredits = 0;
  for (let i = 0; i < marksarray.length; i++) {
    if (creditsarray[i].value != "Credit Point") {
      score =
        score +
        (Number(marksarray[i].value) / 10 + 1) * Number(creditsarray[i].value);
      totalCredits += Number(creditsarray[i].value);
    }
  }
  let result = 0;
  result = score / totalCredits ? (score / totalCredits).toFixed(2) : 0;
  if (result != 0) {
    let suffix = "th";
    if (sem == 1) suffix = "st";
    else if (sem == 2) suffix = "nd";
    else if (sem == 3) suffix = "rd";

    if (fname == "") alert("Please Enter First Name");
    else if (lname == "") alert("Please Enter Last Name");
    else if (reg == "") alert("Please enter registration number");
    else if (sem === "Choose Semester") alert("Please select semester");
    else {
      let remarks = "Well Done!";
      if (result < 4) remarks = "Try to improve your performance. Good luck!";
      else if (result < 5) remarks = "Good performance. Keep improving!";
      document.querySelector(
        "#GradePointResult h2"
      ).textContent = `${fname} ${lname}, ${reg} has got ${result} GPA in ${sem}${suffix} semester`;
      document.querySelector("#GradePointResult h3").textContent = remarks;
    }
  } else {
    document.querySelector(
      "#GradePointResult h2"
    ).textContent = `No Data filled`;
  }
});