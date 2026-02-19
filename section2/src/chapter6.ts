// any
// 특정 변수의 타입을 우리가 확실히 모르 때

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

//unknown
// 모든 값을 저장할 수 있지만 다른 타입에 unknown 타입을 저장할 수 없다.
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 타입 정제를 하여 사용할 수 있다.
if (typeof unknownVar === "number") {
  num = unknownVar;
}
