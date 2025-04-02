// 정규표현식 객체 생성 + 확인하기
document.querySelector("#btn1").addEventListener("click", () => {

  // 정규표현식 객체 생성
  const regExp1 = new RegExp("script");
  // "script" 와 일치하는 문자열이 있는지 검사하는 정규표현식

  const regExp2 = /java/;
  // "java" 와 일치하는 문자열이 있는지 검사하는 정규표현식

  // 확인하기
  const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
  const str2 = "jsp(java server page)도 곧 할 겁니다.";
  const str3 = "java,java,java";

  console.log( regExp1.test(str1) );  //true
  console.log( regExp1.exec(str1) );   

  console.log( regExp2.test(str2));  //true
  console.log( regExp2.exec(str2));
  
  console.log( regExp2.test(str3));
  console.log( regExp2.exec(str3));  // 처음 매칭된 java 내놓음
});

// 메타문자 확인하기
document.querySelector("#btn2").addEventListener("click", () => {
  const div1 = document.querySelector("#div1");

  // [abcd] 
  const regExp1 = /[abcd]/;
  div1.innerHTML += "/[abcd]/, apple :" + regExp1.test("apple") + "<hr>";
  div1.innerHTML += "/[abcd]/, ssbss :" + regExp1.test("ssbss") + "<hr>";
  div1.innerHTML += "/[abcd]/, qwerty :" + regExp1.test("qwerty") + "<hr>";
  
  // ^ (캐럿)
  const regExp2 = /^group/;  // 문자열의 시작이 group인지 확인
  div1.innerHTML += "/^group/, group100 : " + regExp2.test("group100") + "<hr>";
  div1.innerHTML += "/^group/, 100group : " + regExp2.test("100group") + "<hr>";

  // $ (달러)
  const regExp3 = /group$/; //문자열의 끝이 group인지 확인
  div1.innerHTML += "/group$/, group100 : " + regExp3.test("group100") + "<hr>";
  div1.innerHTML += "/group$/, 100group : " + regExp3.test("100group") + "<hr>";

});