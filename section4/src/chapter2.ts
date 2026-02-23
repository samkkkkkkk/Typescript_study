/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 기준입니다.
 * 1. 반환값의 타입이 호환되는가 (Convariance: 공변성 - 일반적인 상하관계와 같음)
 * 2. 매개변수의 타입이 호환되는 (Contravariance: 반공변성 - 일반적인 상화관계와 반대로 작용)
 */

// 기준1. 반환값이 호환되는가 (Upcasting은 허용, DownCasting은 불가)
type A = () => number; //(슈퍼타입)
type B = () => 10; // (서브타입)

let a: A = () => 10;
let b: B = () => 10;

// number 타입에 리터럴 타입을 넣는 상황(업캐스팅) 허용
a = b;

// number -> 리터럴 다운캐스팅으로 불가
// b = a;

// 기준2. 매개변수가 호환되는가
// 매개변수의 개수가 같을 때
// 좁은 타입으로 넓은 타입을 할당할 수 없습니다.
type C = (value: number) => void; //(슈퍼타입)
type D = (value: 10) => void; //(서브타입)

let c: C = (value) => {};
let d: D = (value) => {};

// d 함수는 오직 10만 처리할 수 있게 설계되었는데 number 타입을 허용하면
// 다른 number를 처리할 때 에러가 발생합니다.
// c = d;

// number -> 리터럴 (다운캐스팅) 허용
d = c;

// 객체 타입의 매개변수 호환성
type Animal = { // (슈퍼타입)
  name: string;
};

type Dog = { // (서브타입)
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}

// animalFunc는 color에 대한 정보가 없는 상황에서
// dogFunc를 실행하면 color에 대한 정보를 찾을 수 없어서 에러가 발생합니다.
// animalFunc = dogFunc;

// ainmal 타입에 dog 타입을 할당
// dog 타입은 name을 포함하기 때문에 허용
dogFunc = animalFunc;


let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); 
}

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
}


// 매개변수의 개수가 다를 때
// 더 적은 매개변수를 받는 함수는 더 많은 매개변수를 요구하는 타입에 할당될 수 있습니다.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;

// func1은 반드시 2개의 인자가 필요하기 때문에
// b 자리에 undefined가 들어가게 될 위험이 있습니다.
// func2 = func1;