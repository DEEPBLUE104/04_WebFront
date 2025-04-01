// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오</li>
function fn1(name){
  console.log(`1번 : Hello, ${name}`);
}

fn1("햄스터");

// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오</li>
function fn2(a, b){
  return a+b;
}

console.log(fn2(1,3));

// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성</li>
const fn3 = (a, b) => { return a*b;}

  console.log(fn3(1,3));

// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고,
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오</li>

function fn4 (a,b) {
  if(Number(a) > Number(b)) {
    console.log("첫 번째 숫자가 더 큽니다.")
  } else {
    console.log("두 번째 숫자가 더 크거나 같습니다.")
  }
}

fn4(1,3);

// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오</li>

function fn5(str1){
  console.log(str1.length);
}

fn5("어느정도 감을 잡은 거 같아");

// 6. 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 
// 출력하는 함수를 선언 및 정의하고 호출하시오

function fn6 (str2, count){
  for(let i = 1; i <= count; i++){
    console.log(str2);
  }
}

fn6("미미오", 5);

// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 
// 반환하는 함수를 선언 및 정의하고 호출하시오

function fn7(a) {
  if (a%2 == 0){
    console.log("true")
  } else {
    console.log("false")
  }
}

fn7(105);

// 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
// function fn8 (a, b, c){
//   const arr = [a, b, c];

//   for(let i =0; i< arr.length; i++){
//     console.log(Math.max(arr));
//   }
// }

// fn8(5,6,8);

function findMax(a, b, c) {
  let max = a;

  if(max < b) {
    max = b;
  }
 
  if(max < c){
    max = c;
  }

  return max;
}

console.log("8번 :", findMax(1,5,3));

// 내장함수 Math.max() : 전달받은 값 중 가장 큰 값을 반환
// return Math.max(a, b, c);

// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오

const getFirstElement = (arr) => {return arr[0]};
console.log("9번 :", getFirstElement([10,20,30]));

// 10. 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오

function sumAndAverage(arr) {

  // let sum = 0;
  // for(let i = 0; i< arr.length; i++){
  //   sum += arr[i];
  // }

  let sum = arr.reduce((acc,curr) => {return acc + curr});
  // 배열.reduce(callback 함수) : JS 배열의 메서드로(함수) 배열의 모든 요소를 순회하면서
  // 하나의 결과값을 누적하여 반환
  // acc (accumulator) : 이전 콜백 호출에서 반환된 값
  // curr (currentValue) : 현재값 - 현재 처리중인 배열 요소 값 

  let avg = sum / arr.length;

  return {"합계" : sum , "평균" : avg};

}

console.log(sumAndAverage([1,2,3,4,5]));

// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 
// 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오

function calculate(a, b, operation){
 return operation(a, b); 
}

function add(x, y){
  return x + y;
}

function minus(x, y){
  return x - y;
}

console.log("11번 :", calculate(5, 3 ,add));
console.log("11번 :", calculate(5, 3 ,minus));

// 12. 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 
// 해당 이름과 1.인사말을 사용하여 2.인사를 출력하는 함수를 선언 및 정의하고 호출하시오

function greet(name, callback){
  callback(name);
}

function sayHello(name){
  console.log(`12번 : Hello, ${name}`)
}

function sayGoodBye(name){
  console.log(`12번 : Bye, ${name}`)
}

greet("햄스터", sayHello);
greet("햄스터", sayGoodBye);