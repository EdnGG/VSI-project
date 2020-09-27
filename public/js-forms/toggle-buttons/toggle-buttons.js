// Toggle buttons
let flag = true;
function togle() {
  if (flag === true) {
    document.querySelector("#tableOne").style.display = "block";
    document.querySelector("#threeWayRequest").innerHTML = "Hide Table";
    // carouselForm1.style.display = "none";
    // document.querySelector("#carousel1").style.display = "none";
    console.log("flag = 1 ", flag);
    flag = false;
  } else {
    document.querySelector("#tableOne").style.display = "none";
    document.querySelector("#threeWayRequest").innerHTML = "Arrangements";
    // document.querySelector("#carousel1").style.display = "block";
    // carouselForm1.style.display = "block";
    console.log("flag = 2", flag);
    flag = true;
  }
}
//
let flag1 = true;
function togle1() {
  if (flag1 == true) {
    document.querySelector("#tableTwo").style.display = "block";
    document.querySelector("#elecActuator").innerHTML = "Hide Table";
    // carouselForm2.style.display = "none";

    console.log("flag = 1 ", flag1);
    flag1 = false;
  } else {
    document.querySelector("#tableTwo").style.display = "none";
    document.querySelector("#elecActuator").innerHTML = "Electric Actuator";
    // carouselForm2.style.display = "block";

    console.log("flag = 2", flag1);
    flag1 = true;
  }
}
//
let flag2 = true;
function togle2() {
  if (flag2 == true) {
    document.querySelector("#tableThree").style.display = "block";
    document.querySelector("#hpPneumaticBtn").innerHTML = "Hide Table";
    // carouselForm3.style.display = "none";

    console.log("flag = 1 ", flag2);
    flag2 = false;
  } else {
    document.querySelector("#tableThree").style.display = "none";
    document.querySelector("#hpPneumaticBtn").innerHTML =
      "High Pressure Pneumatic";
    // carouselForm3.style.display = "block";

    console.log("flag = 2", flag2);
    flag2 = true;
  }
}
//
let flag3 = true;
function togle3() {
  if (flag3 === true) {
    document.querySelector("#tableFour").style.display = "block";
    document.querySelector("#lpPneumaticBtn").innerHTML = "Hide Table";
    // carouselForm4.style.display = "none";

    console.log("flag = 1 ", flag3);
    flag3 = false;
  } else {
    document.querySelector("#tableFour").style.display = "none";
    document.querySelector("#lpPneumaticBtn").innerHTML =
      "Low Pressure Pneumatic";
    // carouselForm4.style.display = "block";

    console.log("flag = 2", flag3);
    flag3 = true;
  }
}

// Ends Toggle buttons