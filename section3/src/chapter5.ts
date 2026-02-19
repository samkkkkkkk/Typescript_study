/**
 * 타입 추론
 * 변수의 초기화 값, 함수의 기본 매개변수, 반환갑 등을 통해 
 * 타입스크립트 컴파일러가 스스로 타입을 알아내는 기능입니다.
 */

// 기본 변수 타입 추론
// 명시적으로 타입을 적지 않아도 할당된 값을 보고 타입을 추론합니다.
let a = 10; 
let b = "hello"; 

// 객체 타입 추론
// 중첩된 객체의 프로퍼티 타입까지 모두 정확하게 추론해 냅니다.
let c = {
  id: 1,
  name: "홍길동",
  profile: {
    nickname: "winterload",
  },
};

// 구조 분해 할당(Destructuring)의 타입 추론
// 객체 c의 원래 타입을 알고 있으므로, 분해된 변수들도 원래의 타입을 그대로 물려받습니다.
let { id, name, profile } = c;

// 배열의 구조 분해 할당도 인덱스 위치에 맞춰 타입을 추론합니다.
let [one, two, three] = [1, "hello", true];

// 매개변수 message에 "hello"라는 기본값이 있으므로 message는 string 타입으로 추론됩니다.
// "hello"라는 문자열을 반환하므로, func 함수의 반환 타입도 string으로 추론합니다.
function func(message = "hello") {
  return "hello";
}

// 암묵적 any 타입과 타입 진화
// 변수 선언 시 초기값을 할당하지 않으면 암묵적 any 타입으로 시작합니다.
let d;

// 이후 어떤 값이 할당되느냐에 따라 타입이 진화합니다.
d = 10; 
// d에 10이 할당되어 number 타입으로 진화
d.toFixed();

d = "hello";
// d에 "hello"가 할당되어 string 타입으로 취급
d.toUpperCase();

// const 추론 방식
// const는 재할당이 불가능한 상수입니다.
// 따라서 특정 타입(number)이 아니라 그 값 자체를 타입으로 추론합니다.(리터럴 타입)
const num = 10; // num 타입은 number가 아닌 '10'
const str = "hello"; // str 타입은 "hello"

// 배열의 추론 (Union 타입 자동 생성)
// 배열 안에 숫자와 문자열이 섞여 있으면, 타입스크립트가 알아서 합집합 타입으로 추론합니다.
let arr = [1, "string"];

