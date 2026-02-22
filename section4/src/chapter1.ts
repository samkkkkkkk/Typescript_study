/**
 * 함수 타입 표현식 (Function Type Expresstion)
 * 화살표 함수 형태를 띠며, 함수 타입을 가장 간결하게 정의하는 방법입니다.
 */

// 변수에 화살표 함수를 받으면서, 매개변수와 반환값의 타입을 직접 명시합니다.
const addFunc = (a: number,  b: number): number => a + b;

// type을 별칭으로 묶어서 재상용합니다.
type Operation = (a: number, b: number) => number;

// 변수명 뒤에 `: 타입` 형태로 직접 명시할 수도 있습니다. (인라인 방식)
const add: (a: number, b: number) => number = (a, b) => a + b;

// 미리 만들어둔 Operation 타입을 적용하면 a, b의 타입을 생략해도 알아서 number로 추론합니다.
const sub: Operation =(a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const devide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 (Call Signature)
 * 자바스크립트에서는 함수도 객체입니다.
 * 따라서 객체를 정의하는 중괄호 {}안에 함수가 호출될 때의 형태(시그니처)를 정의할 수 있습니다.
 */

// 함수형태와 객체의 프로퍼티(name)를 동시에 가지는 하이브리드 타입(Hybrid Type)입니다.
type Operation2 = {
  (a: number, b: number): number; // 함수로 호출될 때의 타입
  name: string; // 객체로서 가지는 추가 프로퍼티
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 =(a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const devide2: Operation2 = (a, b) => a / b;

// 함수로서 호출하기
console.log(add2(10, 20));
// 객체로서 프로퍼티에 접근하기
console.log(add2.name);

