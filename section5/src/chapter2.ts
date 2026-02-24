/**
 * 선언 합침 (Declaration Merging)
 * 동일한 이름의 인터페이스를 여러 번 선언하면
 * 타입스크립트가 하나의 인터페이스로 합쳐줍니다.
 */

interface Person {
  name: string;
};

interface Person {
  // 중복된 프로퍼티를 재선언할 때는 반드시 기존과 타입이 동일해야 합니다.
  // name: number
  age: number;
};


// 두 개의 Person 이터페이스가 하나로 병합되었으므로, name과 age를 모두 포함해야 합니다.
const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 * 외부 라이브러리나 내장 객체의 타입에 커스텀 속성을 끼워 넣을 수 있습니다.
 */

// Lib를 외부 라이브러리로 가정
interface Lib {
  a: number;
  b: number;
}

// 내가 만든 파일에서 동일한 이름(Lib)으로 인터페이스를 열고 새로운 속성(c)를 추가합니다.
interface Lib {
  c: string;
}


// 이제 Lib 타입은 a, b, c를 모두 가지게 됩니다.
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello"
};