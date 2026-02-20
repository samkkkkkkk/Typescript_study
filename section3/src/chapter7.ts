/**
 * 타입 좁히기 (Type Narrowing)
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법입니다.
 * 이때 사용하는 조건문들을 타입가드(Type Guard)라고 부릅니다.
 */

type Person = {
name: string;
  age: number;
};

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
// 매개변수 value는 5가지 중 하나가 될 수 있는 넓은 타입입니다.
function func(value: number | string | Date | null | Person) {

  value;
  // vlaue가 정확히 무슨 타입인지 모르기 때문에, 특정 타입의 메서드를 호출할 수 없습니다.
  // value.toUpperCase();
  // value.toFixed();
  

  // 타입 좁히기, 타입 가드
  // typeof 연산자를 이용한 타입 가드(원시 타입)
  if (typeof value === "number"){
    // 이 블록 안에서 컴파일러는 value가 무조건 number임을 확신합니다.
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); 
  } 
  // instanceof 연산자를 이용한 타입 가드(내장 객체 또는 클래스)
  // Date는 자바스크립트의 내장 클래스이므로 instanceof를 사용할 수 있습니다.
  else if(value instanceof Date) {
    console.log(value.getTime());
  } 
  // in 연산자를 이용한 타입 가드 (커스텀 객체)
  // Person은 새로 정의한 타입일 뿐 자바스크립트 실행 시점에는 존재하지 않는 클래스입니다.
  // 따라서 instanceof는 사용할 수 없습니다.
  // 대신 객체 안에 특정 프로퍼티가 존재하는지 확인하는 in 연산자를 사용합니다.
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
    
  }

}