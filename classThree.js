// 예제 2번과 같은 동작, 동일한 인스턴스 결과물 생성하는 함수 -> 작성법은 다름
// 여기서 작성된 class는 CSS의 class가 아니라, 객체지향언어 (모든 작성을 객체로 하는) JAVA에서 벤치마킹한 javascript의 새로운 문법

// 예제 2번은 일반 함수와 구분이 가시적으로 어렵다는 문제점 때문에 javascript의 최신 버전에서는 인스턴스를 만드는 함수의 새로운 작성법을 도입하고 일반함수작성법과 구분

class makeObjectThree {
  // class는 매개변수 자리가 없고 '블럭스코프'를 뜻하는 중괄호를 작성
  
  // 매개변수는 특정함수인 constructor() 자리에 배치하며 constructor라는 이름은 작명할 수 없고, 클래스 명을 작명
  constructor(idValue, passwordValue, emailValue){
    this.id = idValue;
    this.password = passwordValue;
    this.email = emailValue;
  }
}

let result = new makeObjectThree("아이디테스트", "패스워드테스트", "이메일테스트");
console.log(result);