/**
 * 사용자 정의 타입가드
 * 참/거짓 함수를 만들어, 그 결과에 따라 타입을 좁혀주는 커스텀 기능입니다.
 * 주로 복잡한 타입 검사 로직을 재사용하고 싶을 때 사용합니다.
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;


// 반환 타입에 boolean 대신 animal is Dog를 적어줍니다.
// true일 경우 Dog 타입을 보증합니다.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // ("isBark in animal") 처럼 내부 구조를 들여다볼 필요 없이,
  // 직관적인 함수 이름(isDog)만으로 깔끔하게 타입을 좁힐 수 있습니다.
  if (isDog(animal)) {
    // Dog 타입
    console.log(`강아지 ${animal.name}가 ${animal.isBark ? "짖습니다!" : "조용합니다."}`);
  } else if (isCat(animal)) {
    // Cat 타입
    console.log(`고양이 ${animal.name}가 ${animal.isScratch ? "할큅니다!" : "얌전합니다."}`);
  } else {
    console.log("dd");
    
  }

}
