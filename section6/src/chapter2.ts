/**
 * 접근제어자
 * access modifier
 * 1. public (기본값): 어디서든 자유롭게 접근 가능
 * 2. protected: 클래스 내부 + 상속받은 자식 클래스 내부에서만 접근 가능
 * 3. private: 오직 해당 클래스 내부에서만 접근 가능
 */

class Employee {
  // 필드의 타입을 정의하지 않으면
  // 기본 any 타입으로 추론하기 때문에 오류가 발생
  private name: string;
  protected age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

    work() {
    console.log("개발중");
    
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  };

  // 메서드
  func() {
    // this.name; name은 private 속성이므로 자식 클래스에서 접근할 수 없습니다.
    this.age; // age는 protected 속성이므로 자식 클래스 내부에서 자유롭게 접근 가능합니다.
    this.position;
  }
  
}


const employee = new Employee("홍길동", 30, "개발자");
// employee.name = "김아무개";
// employee.age = 31;
employee.position = "기획자";

console.log(employee);

