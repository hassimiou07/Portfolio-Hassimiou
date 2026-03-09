/* ===============================
   CURSEUR GLOBAL FIX
================================= */

const cursor = document.createElement("div");
cursor.classList.add("mouse-cursor");

const cursorOuter = document.createElement("div");
cursorOuter.classList.add("mouse-cursor-outer");

document.body.appendChild(cursor);
document.body.appendChild(cursorOuter);

let mouseX = 0;
let mouseY = 0;
let outerX = 0;
let outerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animateCursor() {
  outerX += (mouseX - outerX) * 0.15;
  outerY += (mouseY - outerY) * 0.15;

  cursorOuter.style.left = outerX + "px";
  cursorOuter.style.top = outerY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

/* Hover automatique */
document.addEventListener("mouseover", (e) => {
  if (e.target.closest("a, button, .orbit-icon, .quick-card, .highlight-item")) {
    cursorOuter.classList.add("active");
  } else {
    cursorOuter.classList.remove("active");
  }
});