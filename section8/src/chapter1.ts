/**
 * keyof 연산자
 * 객체 타입의 모든 키 값을 추출하여 유니온 타입으로 반환
 */

interface Person {
  name: string;
  age: number;
}

// keyof 연산자는 반드시 뒤에 타입이 와야합니다.
// 타입이 가지고 있는 프로퍼티의 이름들만 모아서 리터럴 유니온 타입으로 만들어 줍니다.
function getPropertykey(person: Person, key: keyof Person) {
  return person[key];
}

const myCar = {
  brand: "Tesla",
  model: "Model 3",
  year: 2026
}

// typeof myCar를 통해 { brand: string, model: string, year: number } 타입 추출
// keyof를 통해 그 타입의 키들만 추출
// type CarKeys = "brand" | "model" | "year"
type CarKeys = keyof typeof myCar;

