class User{
  // User 클래스는 매개변수 정보를 받아 객체를 만드는 생성자 함수

  constructor(username, email){
    this.username = username;
    // 객체의 값을 부여하는데, 적절한 값만 대입될 수 있도록 setter 함수를 통해 return처리를 분배해서 진행
    // 참인 경우 은닉화 된 키 값인 _email에 값 대입
    // 거짓인 경우 null('존재하지만 값이 없는') 대입 -> 무분별한 에러 방지 위함 (에러내지 않고 null 대입)

    if(this.validateEmail(email)){
      this.email = email;
    } else {
      this.email = null;
    }
  }
  // 가져오는, 읽어오는 작업을 할 수 있는 getter 기능
  // 읽기전용 (readonly) 프로퍼티 정의
  // getter 함수는 키워드 get 사용
  // 실제 값인 _email을 새로 대입하거나 변경하는 목적이 아닌, 읽어오는 목적으로만 사용

  get email(){
    return this._email;
  }

  // 유효한지 검사하는 함수 처리
  set email(newEmail){
    if (this.validateEmail(newEmail)){
      this._email = newEmail;
    } else {
      console.error("유효한 이메일 형식이 아닙니다.")
    }
  }
  // setter 함수를 적절히 사용하기 위해 아래 메서드 제작
  // return이 boolean으로 false 반환을 통해 constructor에서 null 대입 방지
  validateEmail(email){
    if (typeof email !== 'string'){
      return false;
    }
    if (!email.includes("@") || !email.includes(".")){
      return false;
    }
    return true;
  }

  // 아래는 간단한 프로필을 출력하는 메서드
  showProfile(){
    console.log(`Username: ${this.username}, Email : ${this.email}`);
  }
}

const userKong = new User("leeyuan", "dbdks3212@gmail.com");
userKong.showProfile();