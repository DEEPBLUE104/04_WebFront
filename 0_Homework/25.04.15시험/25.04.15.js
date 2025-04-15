// 적용하기 버튼
const applyBtn = document.querySelector("#apply-btn");

applyBtn.addEventListener("click", function(){

  // input 요소들을 모두 얻어오기

  const boxWidth = document.querySelector("box-width"); // 너비
  const boxHeight = document.querySelector("box-height"); // 높이
  const fs = document.querySelector("#fs"); // 폰트 크기

  const fw = document.querySelector("[name='fw']:checked"); // 글씨 굵기
  
  const fontColor = document.querySelector("#box-font-color"); // 글씨색
  const bgColor = document.querySelector("#box-bg-color");  // 배경색

  const row = document.querySelector("[name='align-row']:checked"); // 가로정렬
  const col = document.querySelector("[name='align-col']:checked"); // 가로정렬

  const content = document.querySelector("#content"); // 작성글

  const box = document.querySelector("#box"); // 박스요소 (대상)


  // input에 작성된 값에 따라 #box에 스타일 추가
  box.style.width = boxWidth.value + "px";
  box.style.height = boxHeight.value + "px";
  box.style.fontSize = fs.value + "px";

  box.style.fontWeight = fw.value;

  box.style.color = fontColor.value;
  box.style.backgroundColor = bgColor.value;

  box.style.justifyContent = row.value;
  box.style.alignItems = col.value;  //부모요소인 box가 flexbox여야 가능

  box.innerText = content.value;
});