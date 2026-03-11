/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// 타입에 [] 대괄호를 붙이면 분산적 조건부 타입을 막을 수 있다.
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 제네릭 내부에 선언된 유니온 타입들이 한 번씩 적용되기 때문에
// c는 조건부 타입에 number와 string이 한 번씩 적용되어 
// string | number 유니온 타입이 된다.
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

// number
// string
// number

// 결과
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// number |
// never |
// boolean

// 결과
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;



