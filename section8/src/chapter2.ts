/**
 * 맵드 타입 (Mapped Types)
 * 기존 객체 타입을 기반으로 각 속성을 순회하며
 * 새로운 타입을 찍어내는 문법입니다.
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 인덱스 시그니처 내부에서 in 연산자를 통해
// 유니온 타입을 순회하며 하나씩 key에 할당합니다.
// 키들을 순회하며 ?를 붙여 모두 선택적 프로퍼티로 만들어 줍니다.
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

// keyof 연산자를 사용할 수 있습니다.
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

function fetchUser(): User {
  return {
    id: 1,
    name: "홍길동",
    age: 30,
  };
}

function updateUser(user: PartialUser) {
  
} 

updateUser({
  age: 25,
});