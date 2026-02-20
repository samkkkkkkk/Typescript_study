/**
 * 타입 단언 (Type Assertion)
 * 컴파일러의 타입 추론을 무시하고, 개발자가 직접 타입을 명시하는 기능입니다.
 * 타입 단언은 런타임 시점의 실제 데이터를 변경하지 않으며, 오직 컴파일러의 에러만 덮어줍니다.
 */

type Person = {
  name: string;
  age: number;
};

// 빈 객체에 타입 단언
// 처음에는 빈 객체로 시작해서 나중에 프로퍼티를 채워 넣어야 할 때 사용
// 이 방식을 사용하면 age를 누락해도 컴파일러가 에러를 잡아주지 못하므로 주의해야 한다.
let person = {} as Person;
person.name = "홍길동";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// 초과 프로퍼티 검사 
// 객체 리터럴을 변수에 직접 할당할 때, 정의되지 않은 프로퍼티가 있으면 에러를 냅니다.
// let dog1: Dog = {
//   name: "강아지",
//   color: "black",
//   breed: "푸들"
// };


// as Dog를 사용하여 단언하면, 이 객체는 Dog 타입으로 추론하며 추가 프로퍼티를 사용할 수 있습니다.
let dog2 = {
  name: "강아지",
  color: "black",
  breed: "푸들"
} as Dog

/**
 * 타입 단언의 규칙 (A as B)
 * 아무 타입이나 마음대로 단언할 수 없습니다.
 * A가 B의 슈퍼타입 이거나, 서브타입 이어야만 가능합니다.
 * 즉, 두 타입 간에 교집합이 있어야 합니다.
 */
// number는 never의 슈퍼타입이므로 가능
let num1 = 10 as never;
// unknown은 모든 타입의 슈퍼타입이므로가능
let num2 = 20 as unknown;

// number와 string은 교집합이 없는 타입입니다.
// A와 B의 겹치는 부분이 없기 때문에 타입 단언이 불가능합니다.
// let num3 = 10 as string;

// 다중 단언을 사용하면 강제로 number을 string으로 단언할 수 있지만 권장되지 않습니다.
let num3 = 10 as unknown as string;

/**
 * const 단언
 * as const를 붙이면 객체의 프로퍼티 값이 변경되는 것을 막아줍니다.(readOnly)
 */

let num4 = 10 as const;

// as const를 붙여주면 readOnly 프로퍼티로 만들 수 있다.
let cat = {
  name: "고양이",
  color: "yelllow",
} as const;

// cat.name = ""; // readOnly 이므로 name에 할당할 수 없습니다.


/**
 * Non Null 단언
 * 절대 null이나 undefined가 아닐 거라고 단언합니다.
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "제목1",
  author: "홍길동",
};

// author는 옵셔널(?)이므로 값이 없을 수도 있습니다.
// 옵셔널 체이닝(?.)을 쓰면 결과가 number | undefined가 되므로 에러가 납니다.
// const len: number = post.author?.length;

// Non-null 단언(!)을 사용하면 author는 무조건 존재함을 강제합니다.
const len: number = post.author!.length;

// Non-Null 단언을 사용할 때 
// 만약 author가 없다면 치명적인 에러를 발생시킵니다.
// 따라서 ! 보다는 if문 등으로 타입 가드를 해주는 것이 안전합니다.
let safeLen: number;
if (post.author) {
  // if문을 사용하여 타입 가드
  safeLen = post.author.length;
} else {
  safeLen = 0;
}