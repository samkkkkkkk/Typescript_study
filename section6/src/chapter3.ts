/**
 * 인터페이스와 클래스
 * 인터페이스는 클래스가 반드시 가져야 할 최소한의 조건을 강제할 수 있습니다.
 * 이때 implements 키워드를 사용합니다.
 */


// 클래스의 설계도 역할
// 이 인터페이스를 구현하는 클래스는 무조건 name, moveSpeed, move()를 가져야 한다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
};

// 인터페이스 구현 (implements)
class Character implements CharacterInterface {

  // 인터페이스에 정의된 속성은 무조건 public이어야 합니다.
  // 구현 클래스는 인터페이스 조건만 만족하면
  // 속성을 추가하는데 문제 없습니다.
  // 클래스 고유값인 extra는 private로 선언해도 문제가 없습니다.
  constructor(public name: string, public moveSpeed: number, private extra: string){}

  // 인터페이스에 명시된 move() 메서드를 반드시 구현해야 합니다.
  move(): void {
      console.log(`${this.moveSpeed} 속도로 이동`);
      
  }
}



