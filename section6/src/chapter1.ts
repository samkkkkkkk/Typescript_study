/**
 * 타입스크립트의 클래스
 */

// 일반적인 객체 리터럴 방식
const employee = {
  name: "홍길동",
  age: 30,
  position: "developer",
  work() {
    console.log("개발중");
    
  },
};

class Employee {
  // 필드 선언 및 타입 정리
  // 반드시 필드와 타입을 미리 선언해야 합니다.
  // 선언하지 않으면 속성이 없어서 에러가 발생합니다.
  name: string;
  age: number;
  position: string;

  // 생성자
  // 매개변수에도 반드시 타입을 지정해주어야 합니다.
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

    work() {
    console.log("개발중");
    
  }
}

// 클래스 상속
class ExecutiveOfficer extends Employee {
  // 자식 클래스만의 필드 추가
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  };

}

const employeeB = new Employee("홍길동", 30, "개발자");
console.log(employeeB);

// 클래스를 타입으로 사용하기 (구조적 타이핑)
// employeeC는 인스턴스는 아니지만
// Employee의 모든 형태를 가지고 있어서 Employee 타입이 됩니다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
}