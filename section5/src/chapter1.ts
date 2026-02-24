/**
 * 인터페이스 확장 (Interface Extension / Inheritance)
 * 기존에 정의된 인터페이스의 프로퍼티를 그대로 물려받아 새로운 인터페이스를 만드는 기능입니다.
 * extends 키워드를 사용하여 코드의 중보을 획기적으로 줄여줍니다.
 */

interface Animal{
  name: string;
  color: string;
}

// 타입 객체여도 확장 가능하다.
interface Dog extends Animal {
  isBark: boolean
};

// 단일 확장
// Dog는 Animal의 프로퍼티(name, color)를 상속받고, 자신의 고유 프로퍼티(isBark)를 추가합니다.
const dog: Dog = {
  name: "",
  color: "black",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
};

interface Chicken extends Animal {
  isFly: boolean;
};

// 다중확장 (Multi Extesnion)
// 콤마(,)를 사용하여 여러 개의 인터페이스를 동시에 물려받을 수 있습니다.
// DogCat은 Dog의 모든 성과 Cat의 모든 속성을 합친 형태가 됩니다.
interface DogCat extends Dog, Cat {};


const dogCat: DogCat = {
  name: "" ,
  color: "",
  isBark: true,
  isScratch: true,
};