// 배경색 적용할 div 배열
const boxList = document.querySelectorAll(".box")
// 배경색 입력할 input 배열
const colorList = document.querySelectorAll(".color-input");

// const button = document.querySelector("#changeButton");
// console.log(colorList[0].value);

document.querySelector("#changeButton").addEventListener("click", function(e){
  
  for(let i = 0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = colorList[i].value
  }
});




// button.addEventListener("click", function(e){
  // divList[0].style.backgroundColor = colorList[0].value;
  // divList[1].style.backgroundColor = colorList[1].value;
  // divList[2].style.backgroundColor = colorList[2].value;
  // divList[3].style.backgroundColor = colorList[3].value;
  // divList[4].style.backgroundColor = colorList[4].value;
// });
 
