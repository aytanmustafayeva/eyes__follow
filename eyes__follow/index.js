const eyes = document.querySelectorAll(".eye");
const box = document.querySelectorAll(".box")

window.addEventListener("mousemove", (e) => {
  eyes.forEach((eye) => {
    // get x and y postion of cursor
    var rect = eye.getBoundingClientRect();
    var x = (e.pageX - rect.right) / 100 + "px";
    var y = (e.pageY - rect.bottom) / 100 + "px";
    eye.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});




