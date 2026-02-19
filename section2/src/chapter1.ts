// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// String
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// TypeScript는 기본적으로 임시로 null값을 채워넣지 못한다.
//strictNullChecks를 false로 설정하면 null값을 임시로 넣을 수 있다.
// let numA: number = null; 


// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
//numA = 12; 

let strA: "hello" = "hello";

let boolA: true = true;