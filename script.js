// https://www.w3schools.com/howto/howto_css_modals.asp
// https://www.w3schools.com/css/css_positioning.asp
// essentially you have a second page that is "position: fixed" filling up the screen, but it is in "display: none" so you can't see it!
var r1 = document.getElementById("row1");
var r2 = document.getElementById("row2");

var c1 = document.getElementById("column1");
var c2 = document.getElementById("column2");
var rect1 = document.getElementById("rectangle1");
var rect2 = document.getElementById("rectangle2");

var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");

var b1 = document.getElementById("blue1");
var o1 = document.getElementById("orange1");
var o2 = document.getElementById("orange2");

var s1 = document.getElementById("S1");
var s2 = document.getElementById("S2");
var s3 = document.getElementById("S3");
var s4 = document.getElementById("S4");

var M1 = document.getElementById("modal1");
var Light = document.getElementById("Light");
var key = document.getElementById("key");
var lock = document.getElementById("lock");

var N1 = document.getElementById("Note1");
var N2 = document.getElementById("Note2");
var N3 = document.getElementById("Note3");
var N4 = document.getElementById("Note4");
var TC = document.getElementById("TheeCode");

Dialyn();
Background();

//Note 1
function showNote1() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote1").style.display = "flex";
}

function hideNote1() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote1").style.display = "none";
}

//Note 2
function showNote2() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote2").style.display = "flex";
}

function hideNote2() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote2").style.display = "none";
}

//Note 3
function showNote3() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote3").style.display = "flex";
}

function hideNote3() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote3").style.display = "none";
}
//Note 4
function showNote4() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote4").style.display = "flex";
}

function hideNote4() {
  document.getElementById("NOTE").play();
  document.getElementById("theeNote4").style.display = "none";
}
//Dialyn
function hideDialyn() {
  document.getElementById("Dialyn").style.display = "none";
}
function Dialyn() {
  setTimeout(() => {
    hideDialyn();
  }, 3250);
}

function Background() {
  document.getElementById("BGM").play();
}
//Code
function showTheeCode() {
  document.getElementById("OC").play();
  document.getElementById("theeBox").style.display = "flex";
}

function hideTheeCode() {
  document.getElementById("CC").play();
  document.getElementById("theeBox").style.display = "none";
}

//Light Bulb
function showLight() {
  document.getElementById("theeLight").style.display = "flex";
}

function hideLight() {
  document.getElementById("theeLight").style.display = "none";
}

//Break LightBulb
function breakLight() {
  c2.classList.add("byebye");
  rect1.classList.add("byebye");
  rect2.classList.add("byebye");
  o2.classList.add("byebye");
  b1.classList.add("byebye");
  key.src = "images/TheeKey.png";
  Light.setAttribute("onclick", "");
  N1.setAttribute("onclick", "");
  N2.setAttribute("onclick", "");
  N3.setAttribute("onclick", "");
  N4.setAttribute("onclick", "");
  TC.setAttribute("onclick", "");
  o1.setAttribute("onclick", "pickUpKey()");
  key.classList.add("clickable2");
  document.getElementById("LIGHT").play();
  document.getElementById("theeLight").style.display = "none";
}

//pick up key
function pickUpKey() {
  o1.classList.add("byebye");
  r1.classList.add("cursor");
  r2.classList.add("cursor");
  lock.classList.add("cursor");
  lock.classList.remove("clickable2");
  lock.classList.add("clickable3");
  document.getElementById("KEYS").play();
  lock.setAttribute("onclick", "leaveAlready()");
}

function leaveAlready() {
  document.getElementById("LOCK").play();
  lock.classList.add("animated-box");
  lock.classList.add("fade-once");
  setTimeout(() => {
    lock.src = "images/GreenA.png";
    r1.classList.remove("cursor");
    r2.classList.remove("cursor");
    lock.classList.remove("clickable3");
    lock.classList.add("clickable2");
    lock.classList.remove("cursor");
    lock.classList.remove("animated-box");
    lock.classList.remove("fade-once");
    lock.setAttribute("onclick", "goToTheeKitchen()");
  }, 3600);
}

function goToTheeKitchen() {
  document.getElementById("CLICK").play();
  window.location.href = "https://yulysanchez.github.io/Project-Room-Kitcheenl4/";
}

//Rotation of Shapes In The Code
function changeShapes(img) {
  console.log(img);
  document.getElementById("CLICK").play();
  if (img.src.includes("Triangle1.png")) {
    img.src = "images/X1.png";
  } else if (img.src.includes("X1.png")) {
    img.src = "images/Circle.png";
  } else if (img.src.includes("Circle.png")) {
    img.src = "images/A_star.png";
  } else {
    img.src = "images/Triangle1.png"; // loop back
  }
  correct();
}
//If code is correct
function correct() {
  if (
    S1.src.includes("Circle.png") &&
    S2.src.includes("Triangle1.png") &&
    S3.src.includes("star.png") &&
    S4.src.includes("X1.png")
  ) {
    square1.classList.add("non_clickable");

    square2.classList.add("non_clickable");

    square3.classList.add("non_clickable");

    square4.classList.add("non_clickable");

    console.log("Wait for it...");

    setTimeout(() => {
      console.log("3 seconds later!");
      square1.classList.add("byebye");
      square2.classList.add("byebye");
      square3.classList.add("byebye");
      square4.classList.add("byebye");
      M1.classList.remove("modal-body");
      M1.classList.add("chestopened");
      Light.setAttribute("onclick", "showLight()");
    }, 1000);
  }
}

window.addEventListener("click", startAmbienceOnce, { once: true });

function startAmbienceOnce() {
  ambiance = document.getElementById("BGM"); // <-- FIXED
  ambiance.volume = 0.5;
  ambiance.play();
}

