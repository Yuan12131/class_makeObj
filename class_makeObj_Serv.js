const http = require('http');

// 1. 보통 생성자함수는 파스칼 케이스 방식의 첫글자를 대문자로 작성
class SimplerServer{

  // 2. 인스턴스를 받을 때 생성자 함수의 파라미터로 포트번호 인자를 받음
  constructor(port){
    // 3. 여기의 this는 만들어질 인스턴스 객체를 이야기
    this.port= port;
  }

  // 만들어질 인스턴스(객체)에 메서드로 사용될 start()함수
  // 리터럴로 작성해 온 createServer가 작성되어 있는 것 확인
  start() {
    const server = http.createServer((req, res) => {
      res.writeHead(200,{'Contetnt-Type' : 'text/plain'});
      res.end("생성자 함수로 가동된 서버입니다.")
    })
    // this.port는 생성자 함수로부터 받은 파라미터 값
    // port 정보는 추후 생성될 때 결정되기 때문에 인자를 전달받는 형태
    server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`)
    })
  }
}

// SimpleServer 인스턴스 생성 및 시작
const simpleApp = new SimplerServer(3000);
SimplerServer.start();

const portRange = {
  min : 3001,
  max : 3005,
};

// 3001, 3002, 3003, 3004, 3005 port 모두 열림
// 각각의 역할의 포트를 만들어서 사용할 수 있음
for (let i = portRange.min; o < portRange.max; i++){
  const app = new SimplerServer(i);
  app.start();
}