document.addEventListener("keydown", function(e){
  console.log(e.key);
  
  let x = 0;
  let y = 0;

  if(e.key == "ArrowRight"){
    document.querySelector("#bomberman").style.transform = "translateX(1px)";
    x++; 
  }

  if(e.key == "ArrowLeft"){
    document.querySelector("#bomberman").style.transform = "translateX(1px)" 
    x--;
  }

  if(e.key == "ArrowUp"){
    document.querySelector("#bomberman").style.transform = "translateY(1px)"  
    y++;
  }

  if(e.key == "ArrowDown"){
    document.querySelector("#bomberman").style.transform = "translateY(1px)"  
    y--;
  }
});

//'x' 라는 키를 누르면 box에 innerHTML += `<img 폭탄이미지>`
// box.innerHTML += .. 을 실행하는 과정에서 DOM이 리렌더링됨
// 기존의 bomberman을 가리키던 const bomberman = document.querySelector("#bomberman")
// 더이상 유효하지 않은 변수가 됨
// bomberman.style.transform = 변경된 좌표;
// 기존변수인 bomberman은 더이상 유효한 DOM 요소가 아니기 때문에 스타일 변경이 적용 x

function boom() {
  if(e.key == "x".toLowerCase())
    box3.innerHTML += `<img src= "../../image/boom.jpg"></img>`;
}
