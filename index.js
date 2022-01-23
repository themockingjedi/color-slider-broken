function startover() {
  var canvas = document.getElementById("hi");
  canvas.style.backgroundColor = "white";
}

function dochange() {
  var canvas = document.getElementById("hi");
  var colorinput = document.getElementById("clr");
  canvas.style.backgroundColor = colorinput.value;
}

function dosquare() {
  var dd1 = document.getElementById("hi");
  var sizeinput = document.getElementById("slr");
  var size = sizeinput.value;
  var context = dd1.getContext("2d");
  context.clearRect(0, 0, dd1.width, dd1.height);
  context.fillStyle = "red";
  context.fillRect(10, 10, size, size);
}
