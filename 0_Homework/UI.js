function changeStyle() {
  const box = document.getElementById("test");
  const word = document.getElementById("word").value;
  
  document.querySelector(".in").innerText = word;
  
  const fontSize = document.getElementById("fontsize");
  document.querySelector(".in").style.fontSize = fontSize.value +"px";

  const fontWeight = document.getElementsByName("font");
  word.style.fontWeight = fontWeight.value;

  if(document.querySelector(input))



  // const fontWidth = document.getElementsByName("fontwidth");
  // const fontHeight = document.getElementsByName("fontheight");
  // const Color = document.getElementById("color");

  // const backgroundColor = document.getElementById("backgroundColor");
  // const width = document.getElementById("width");
  // const height = document.getElementById("height");

  // box.style.backgroundColor = backgroundColor.value;
  // box.style.width = width.value + "px";
  // box.style.height = height.value + "px";

  // word.style.color = Color.value;
  // word.style.fontHeight = fontHeight.value;
  // word.style.width = fontWidth.value;

}