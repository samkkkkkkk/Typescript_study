/**
 * 기본 타입간 호환성
 * 리터럴 타입은 해당 기본 타입에 할당 가능
 */
let num1: number = 10;
let num2: 10 = 10;

// 리터럴 타입(num2) -> 슈퍼타입(num1) 타운 캐스팅
num1 = num2;

/**
 * 객체 타입간 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "yellow"
}

let dog: Dog = {
  name: "강아지",
  color: "brown",
  breed: "푸들"
}

// Dog 타입은 Animal 타입의 모든 프로퍼티를 포함 -> Animal 타입이 슈퍼타입
animal = dog;

// dog에 animal을 넣으면 다운 캐스팅
// dog = animal;


type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "타입 스크립트 기초",
  price: 25000,
  skill: "reactjs"
};

// ProgrammingBook은 Book의 구조를 포함하므로 할당 가능
book = programmingBook;

// Booke에는 skill이 없기 때문에 ProgrammingBook 타입 변수에 할당 불가능
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 * 객체 리터럴을 직접 할당할 때는
 * 정의되지 않은 프로퍼티가 있으면 에러 발생
 * 단, 이미 변수에 담긴 객체는 구조 기반으로 판단
 */

let book2: Book = {
  name: "타입 스크립트 기초",
  price: 25000,
  // skill: "reactjs" (초과 프로퍼티 검사)
};

// 변수에 담긴 객체는 구조 기반으로 검사되므로 허용됨
let book3: Book = programmingBook;

function func(book: Book){}
func({
  name: "타입 스크립트 기초",
  price: 25000,
  // skill: "reactjs" (객체 리터럴 직접 전달 시 초과 프로퍼티 검사)
  })

