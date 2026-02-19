/**
 * 대수 타입 (Algebraic Types)
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입입니다.
 * 집합의 개념을 차용하여, 합집합(|) 타입과 교집합(&) 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입 (| 기호 사용)
 * "A 이거나 B 이다"를 의미합니다.
 */

// 변수 a는 string, number, boolean 중 하나의 타입의 값을 가질 수 있습니다.

let a: string | number | boolean;
a = 1; 
a = "hello";
a = true;

// 배열의 요소로 여러 타입이 섞여 들어가는 것도 괄호를 사용해 표현 가능합니다.
let arr: (number | string | boolean)[] = [1, "hello", true];


// 객체 타입에서의 Union

type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  language: string;
};

// Union1 타입은 Dog 타입이거나, Person 타입이거나, 혹은 둘 다 일 수 있습니다.
type Union1 = Dog | Person;


// Dog 타입의 조건(name, color)을 모두 만족합니다.
let union1: Union1 = {
  name: "",
  color: "",
};

// Person 타입의 조건(name, language)을 모두 만족합니다.
let union2: Union1 = {
  name: "",
  language: "",
};

// Dog와 Person의 모든 프로퍼티를 가지고 있습니다.
// 이 경우 Dog와 Person의 교집합 객체로 보며 두 집합에 모두 속하므로 합집합에도 포함됩니다.
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 에러 발생: union4는 Dog 타입도 만족하지 못하고 Person 타입도 만족하지 못합니다.
// 최소 둘 주 하나의 조건을 완전히 충족해야 합니다.
// let union4: Union1 = {
//   name: ""
// };


/**
 * 2. 교집합 타입 - Intersection 타입 (& 기호 사용)
 * A 이면서 동시에 B이다.
 */

// 숫자인 동시에 문자열인 값은 존재할 수 없으므로, never 타입이 됩니다.
// 즉 이 변수에는 어떠한 값도 할당할 수 없습니다.
let variable: number & string;

// 객체 타입에서의 Intersection

// Intersection 타입은 Dog의 모든 프로퍼이와 Person의 모든 프로퍼티를 동시에 가져야 합니다.
type Intersection = Dog & Person;

// Dog(name, color)과 Person(name, language)를 모두 만족합니다.
// 만약 하나라도 빠지면 에러가 발생합니다.
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
