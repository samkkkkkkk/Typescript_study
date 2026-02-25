/**
 * 자바스크립트 클래스 (Class)
 */

let studentA = {
  name: "홍길도",
  grade: "A",
  age: 27,
  study() {
    console.log("공부하기");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

// 클래스 방식
// 파스칼 표기법을 사용
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자 (Constructor): 객체가 생성될 때 가장 먼저 단 한 번 호출
  // 주로 인스턴스(객체)의 초기값을 세팅하는 역할을 합니다.
  constructor(name, grade, age) {
    this.name = name;
    this.grade = this.grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("공부하기");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student("홍길동", "B", 30);
console.log(studentB);
studentB.study();
studentB.introduce();

/**
 * 클래스 상송 (Inheritance)
 * 기존 클래스의 필드와 메서드를 그대로 물려받아 새로운 클래스를 만드는 방법
 * extends 키워드를 사용
 */
class StudentDeveloper extends Student {
  // 필드
  // 자신만의 필드 추가
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // super(): 부모 클래스 (Student)의 생성자를 호출하는 함수
    // 자식 클래스에서 생성자를 새로 정의할 때는 무조건 super()가장 먼저 호출해서
    // 부모 필드를 먼저 초기화해 주어야 합니다.
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("홍길동", "B", 30, "Java");
console.log(studentDeveloper);
// 부모 (Student)에게서 물려받은 메서드도 사용 가능합니다.
studentDeveloper.introduce();

studentDeveloper.programming();
