const makeObjectOne = (idValue, passwordValue, emailValue) => {
  return {
    id : idValue,
    password : passwordValue,
    email : emailValue
  }
  // 리턴의 데이터타입 === 객체, 정적인 프로퍼티 키 + 동적인 프로퍼티 값 (매개변수 활용) => "매개변수 인자를 객체에 전달"
};

// makeObjectOne은 객체를 반환 -> result 변수는 객체를 담은 변수
let result = makeObjectOne("아이디테스트", "패스워드테스트", "이메일테스트");
console.log(result);
