/**
 * 함수 타입 정의
 */

// 기본 함수 타입 정의
// 매개변수 뒤에 : 반환타입을 적어줍니다.
// 반환 타입을 생략하도 return 문을 보고 추론하지만
// 명확성을 위해 명시하는 것을 권장합니다.
function func(a: number, b: number) {
  // a와 b의 타입입 모두 number이므로
  // 반환값도 number로 추론
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 * 화살표 함수 역시 매개변수와 소괄호 뒤에 타입을 정의할 수 있습니다.
 */

const add =  (a: number, b:number) => a + b;

// 반환값이 없는 함수는 'void' 타입을 사용합니다.
function printMessage(message: string): void {
  console.log(message);
  
}

/**
 * 함수의 매개변수
 * 매개변수는 [필수 -> 기본값 -> 선택적] 순서로 배치해야 안전합니다.
 * 선택적 매개변수는 무조건 필수 매개변수보다 뒤에 와야 오류가 발생하지 않습니다.
 */

// 기본값 매개변수 
// 기본값이 설정되어 있으면 타입스크립트가 알아서 타입을 추론하므로 타입을 생략해도 됩니다.
function greet(name = "손님") {
  console.log(`안녕하세요, ${name}님!`); // name은 stirng으로 추론됨
  
}

// 선택적 매개변수 tail(?)가 필수 매개변수(name)보다 앞에 올 수 없습니다.
// function wronIntroduce(tail?: number, name: string)[]

function introduce(name = "홍길동" ,age: number, tall?: number) {
  console.log(`name : ${name}`);

  // tail은 number | undefined 타입이 되므로, 값이 존재하는지 확인해야 합니다.
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("홍길동", 20, 175); // 모든 인수 전달
introduce("홍길동", 20) // 선택적 매개변수(tail) 생략 가능


/**
 * 나머지 매개변수 (Rest Parameter)
 * 개수가 정해지지 않은 여러 개의 인수를 묶어서 배열이나 튜플 형태로 받습니다.
 */

// Rest 매개변수 배열로 생성하기
// 인수가 몇 개든 자유롭게 넣을 수 있습니다.
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => sum += it);
}

getSum(1,2,3);

// Rest 매개변수를 튜플로 생성
// 인수의 개수와 타입을 엄격하게 고정하고 싶을 때 사용하는 기법입니다.
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => sum += it);
}

getSum2(1,2,3);
// getSum2(1,2,3,4);