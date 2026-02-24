/**
 * 인터페이스 (Interface)
 * 객체의 구조(타입)을 정의하는 또 다른 방법입니다.
 * 주로 객체의 형태를 정의할 때 type 별칭보다 우선적으로 사용이 권장됩니다.
 */


interface Person{
  name: string;
  age?: number;

  // 메서드 오버로딩 (호출 시그니처)
  intro(): void;
  intro(a: string, b: string): void;
};


/**
 * Interface vs Type
 * 인터페이스는 오직 객체의 형태만 정의할 수 있습니다.
 * 아래처럼 원시 타입들의 합집합이나 교집합을 직접 정의할 때는
 * 반드시 type 키워드를 사용해야 합니다.
 */

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "홍길도",
  age: 30,

  // 인터페이스에 정의된 2가지 오버로드 상황을
  // 구현하기 위해 타입 좁히기 필요
  intro: function (a?: string, b?: string) {
    if (a && b) {
      console.log(`안녕하세요 ${a}이고, 취미는 ${b}입니다.`);
    } else {
      console.log(`안녕하세요 제 이름은 ${this.name}입니다.`);
      
    }
  }
}


person.intro();
person.intro("hi", "hi");