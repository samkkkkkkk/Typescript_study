// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 3, 4];
// tup1 = ["str", 1];

let tup2: [number, string, boolean] = [1, "str", true];


// 튜플로 생성했을 때 타입이 맞지 않아 에러 발생
// const users: [string, number][] = [
//   ["홍길도", 1],
//   ["김아무개", 2],
//   ["박아무개", 3],
//   ["이아무개", 4],
//   [5, "최아무개"],
// ]
