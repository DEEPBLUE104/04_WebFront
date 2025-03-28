
// 메뉴 주문하기
function check1(){

  // 메뉴 가격
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;

  // 주문 개수 카운트
  let gCount = 0; // 김밥
  let rCount = 0; // 라면
  let dCount = 0; // 돈가스

  //prompt로 입력한 값을 저장할 변수 선언
  let input; // undifined

  // 비교연산자
  // == (값이 동일한 경우)
  // === (동일 비교 연산자 : 값, 자료형이 모두 같은 경우)
  
  // undifined == null (==로 비교시 같은 값이라고 인식)
  // (undifined) undifined / (object) null 자료형이 다르다.
  // undifined === null (자료형이 다르기에 false 나옴)

  // === -> 값, 자료형이 모두 같은 경우 true
  // !== -> 값, 자료형이 모두 다른 경우 true


  while(input !== null) { //취소를 누르기 전까지

    input = prompt("메뉴 번호를 입력하세요");

    switch(input){
      case "1" : gCount++; break;
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문완료"); break;
      default : alert("메뉴에 작성된 번호만 입력해주세요");
    }
  }

  alert(`김밥: ${gCount}, 라면: ${rCount}, 돈까스: ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu );

    alert(`총가격 : ${sum}`)



}