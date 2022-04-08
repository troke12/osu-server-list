const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  canvas.style.zIndex = "-1";
  document.body.style.backgroundColor = "transparent";

  if (document.body.childElementCount > 0) {
    document.body.insertBefore(canvas, document.body.childNodes[0]);
  } else {
    document.body.appendChild(canvas);
  }

  window.addEventListener("resize", () => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
  });
  
new Triangles(canvas,"");
  const triangles = new Triangles(canvas, "#764ba2", 150);