/**
 * 다중 타입 변수 할당
 * 두 개 이상의 서로 다른 타입을 받아야 할 때는 여러 개의 타입 변수를
 * 선언할 수 있습니다.
 */

// a는 T 타입, b는 U 타입으로 추론됩니다.
// 반환값은 순서가 뒤바뀐 [U, T] 형태의 튜플이 됩니다.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);


// 튜플과 rest 파라미터를 활용한 제네릭
// 첫 번째 타입은 무조건 T, 그 뒤에 오는 나머지 요소들은
// 무슨 타입이든 상관없다는 뜻
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
};

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "mynameis"]);


// 제네릭 타입제한
// 제네릭은 모든 타입을 다 허용하지만, extends 키워드를 사용하면
// 속성을 제한한 수 있습니다.
function getLength<T extends {length: number}>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });

// 숫자(number) 타입에는 length라는 속성이 존재하지 않으므로
// <T extends {length: number}> 조건을 통과하지 못해 에러가 발생합니다.
// let var4 = getLength(10);