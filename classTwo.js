function makeObjectTwo(idValue, passwordValue, emailValue){
  // 예제 1과 다르게 함수를 기명함수방식으로 바꿨고, this 바인딩 능력을 활용해 제작
  this.id = idValue;
  this.password = passwordValue;
  this.email = emailValue;
}

// ?new라는 키워드가 추가
// 새로운 빈 오브젝트를 생성
// this를 새롭게 생성된 오브젝트에 바인딩
// 새롭게 생성된 오브젝트의 프로퍼티에 "proto" 라고 불리는 생성자 함수의 프로토타입 오브젝트를 추가
// 함수에서 완성된 오브젝트가 반환될 수 있도록, return this를 함수의 맨 마지막 부분에 추가
let result = new makeObjectTwo("아이디테스트", "비밀번호테스트", "이메일테스트");

// 결과적으로 result는 객체이지만, '무엇인가 함수로부터 만들어진' '인스턴스(instance)'라고 명명
// 예제 1과 결과물은 같은 객체이기 때문에 같아보이지만, 인스턴스냐 아니냐에 따라서 완전히 다름
// * 인스턴스란 : 비슷한 성질을 가진 여러개의 객체를 만들기 위해, 일종의 설계도라고 할 수 있는 생성자 함수(Constructor)를 만들어 찍어내듯 사용해서 생성된 객체
// * 클래스나 프로토타입을 사용하여 만들어 낸 것이 결과물이 인스턴스
// * 원래의 객체인 클래스나 프로토타입이 가지고 있는 프로퍼티(property)와 메소드(method)를 모두 상속(inheritance)받는다
console.log(result);