/**
 * 함수 오버로딩 Overloading
 * 동일한 이름의 함수를 매개변수의 개수나 타입에 따라 여러 가지 버전으로 정의하는 문법입니다.
 */

// 오버로드 시그니처 Overload Signature
// 함수가 어떻게 호출될 수 있는지 규칙만 정의해 둡니다. (껍데기 역할)
// 이 규칙에 없는 형태로는 함수를 호출할 수 없습니다.


function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처 Implementation Signature
// 실제 함수가 동작하는 로직을 작성하는 곳입니다.
// 구현 시그니처는 모든 오버로드 시그니처를 포용할 수 있도록 작성되어야 합니다.
// 따라서 b와 c를 선택적 매개변수로 만들어 매개변수가 1개 들어오는 상황과 3개 들어오는 상황을
// 모두 포함해야 합니다.

function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 함수 호출
// 타입 스크립트는 오버로드 시그니처만 보고 호출이 유효한지 검사합니다.
func(1);
func(1,2,3);

// 매개변수 b와 c는 선택적 매개변수 이지만 
// 타입 스크립트는 오버로드 시그니처만 보고 유효한지 검사하기 때문에
// 인자가 2개를 받는 상화에서 에러가 발생합니다.
// func(1,2);