/**
 * 제네릭
 * 타입을 마치 함수의 매개변수처럼 나중에 전달할 수 있게 해주는 기능입니다.
 * 모든 타입을 다 받을 수 있으면서도, 들어온 타입의 정보를 잃어버리지 않고 끝까지 유지합니다.
 */

// 제네릭 함수
// <T>는 타입 변수(Type Variable)이라고 합니다.
// <A>, <Item>등 아무 이름이나 써도 상관없습니다.
function func<T>(value: T): T {
  return value;
}

// 반화값 타입도 10이 됩니다.
let num = func(10);

let bool = func(true);

let str = func("string");
// 제네릭 덕분에 컴파일러가 반환값의 타입을 정확히 기억하고 있습니다.
console.log(str.toUpperCase());


// <>안에 직접 타입을 명시할 수도 있습니다.
// 아래처럼 명시하면 T는 튜플 타입이 됩니다.
let arr = func<[number, number, number]>([1, 2, 3]);