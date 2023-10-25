// 객체를 생성하는 생성자 함수
class MakeInstance{
  constructor(idValue, passwordValue, emailValue){
    this.id = idValue;
    this.password = passwordValue;
    this.email = emailValue;
  }

// 생성자 함수의 특별한 기능 set -> 아래는 객체를 만들 때 필요한 데이터타입같은 셋팅을 도와주는 함수 -> "은닉화 (private)"
  set id(value){
    if(typeof(value) === "string"){
    this._id = value + "님";
    } else {
      console.log("id는 문자열이어야 합니다.")
    }
  }
}

// idValue에 test
// set에 의해 문자열이 아닌 경우 console.log가 실행 / 문자열인 경우 this._id에 value값 할당
// _ (언더스코어)는 관용적으로 은닉화된 변수 의미
// 매개변수를 통해 값을 아무거나 넣지 못하는 효과
// setter의 내부객체인 key인 _언더바 형태로 이루어진 key는 정해진 조건에서만 대입 가능
const instance = new MakeInstance('test', 'password', 'email')
console.table(instance);