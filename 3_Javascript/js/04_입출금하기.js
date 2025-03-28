// prompt 사용 연습

function test () {
  const password = prompt("비밀번호를 입력하세요.");

  console.log(password);

  // 확인 -> 압력한 값이 문자열로 저장
  // 취소 -> null

  if(password ==null ) { // 취소
   alert("취소");

  } else { //확인버튼
   
    if( password == '1234' ) { //js는 문자열이어도 ==
      alert("비밀번호 일치");
  
    } else {
      alert("비밀번호 불일치")

    }
  
  }
}

//------------------------------------

const output = document.getElementById("output");  //잔액 출력 span
const amount = document.getElementById("amount");  //금액 작성 input

let balance = 10000;  //잔액 기록 변수
const pw = '1234';

output.innerText = balance;  // 초기 화면 금액 출력

// 입금 함수
function deposit(){
  // input 에 입력된 금액 구하기
  console.log(amount.value.length);

  if(amount.value.length == 0 ){
    alert("금액을 입력해주세요.");
  
  } else { 
    // 구한 금액을 잔액(balance)에 누적
    balance += Number(amount.value);
    // balance = balance + Number(amount.value);
 
    output.innerText = balance;
    // 화면에 잔액을 업데이트 

    amount.value = '' ; //input에 작성된 값 제거
  }

}

// 출금 함수
function withdrawal(){
  console.log(amount.value.length);

  money = Number(amount.value);

  if (amount.value.length == 0 ){
    alert("금액을 입력해주세요.");

  } else { // 금액이 입력되었다.
    
    const password = prompt("비밀번호를 입력하세요.");
    console.log(password);

    if(password == '1234'){ // 비밀번호가 맞을 때.
      
      if(balance >= money) { // 잔액이 입력된 값보다 크거나 같을 때
        balance -= Number(amount.value); // 잔액은 입력된 값을 뺀다
        
        output.innerText = balance; // 잔액 출력
      
        // alert(Number(amount.value) + "가 출금되었습니다. 남은 잔액:" + balance);
        
        amount.value= ''; // 입력된 값을 지우기
        
        alert(`${money}원이 출금되었습니다. 남은 잔액 ${balance}`);
        //템플릿 리터럴(Template Literal)
        //백틱(``)을 사용하여 문자열을 감싸고,
        // ${} 안에 변수를 넣어 동적으로 문자열을 생성하는 방식

      } else {  // 잔액이 입력된 값보다 작을 때
        alert("잔액이 부족합니다.");
  
        amount.value = ''; //입력된 값 지우기
      }

    } else { // 비밀번호가 틀릴 때
      alert("비밀번호가 일치하지 않습니다");

      amount.value='';

    }


    
  }

}

