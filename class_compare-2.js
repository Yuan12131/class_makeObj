const fs = require("fs");
const path = require("path");

// Filecompatator 클래스 정의
class Filecompatator {
  // 생성자 함수는 객체의 초기 상태 설정 
  constructor(operator, operand){
    this.operator = operator;
    this.operand = operand;
  }
  
  // 파일이 .txt인지 확인하는 메서드
  isTextFile(fileName) {
    return path.extname(fileName).toLowerCase() === '.txt';
  }

  // 두 .txt 파일의 내용을 비교하는 메서드
  compare(){
    try{
      // 파일 확장자 검사
      if (!this.isTextFile(this.operator) || !this.isTextFile(this.operand)){
        console.error("둘 다 txt 파일이 아닙니다.");
        return falses;
      }

      // 파일의 전체 경로 생성
      // __dirname은 현재 파일의 위치
      const filePathOperator = path.join(__dirname, operator);
      const filePathOperand = path.join(__dirname, operand);

      // 순서대로 동기적으로 파일을 읽게 접미사인 Sync (Node.js에서 Sync는 동기적으로 실행한다는 의미)
      const dataOperator = fs.readFileSync(filePathOperator, 'utf8');
      const dataOperand = fs.readFileSync(filePathOperand, 'utf8');


      // 파일의 내용을 비교하여 결과 반환
      return dataOperand === dataOperator;
    } catch (error) {
      console.error('Error reading files', error);
      return false;
    }
  }
}

/*
  코드가 다소 길어진 경향이 있지만, 
  생성자 (constructor), 무언가 특정한 기능을 만들어내겠다는 의도가 명확
  사용환경과 작업의 목적에 따라서 코드를 작성하는 방식이 javascript에서는
  매우 다양하므로 다각적인 어휘력으로 훈련할 필요가 있음
*/

// 클래스 사용 예
const comparator = new Filecompatator('operator.txt', 'operand.txt');
const areFilesEqual = comparator.compare();
console.log(areFilesEqual); // 내용이 같다면 true, 내용이 다르다면 false