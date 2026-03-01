/**
 * 제네릭 인터페이스
 *인터페이스의 프로퍼티 타입을 미리 정하지 않고, 사용할 때 외부에서 주입받는 방식입니다.
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스나 타입 별칭을 사용할 때 반드시 꺽쇠<>안에 타입을 직접 명시해야 합니다.
// 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입파라미터
let keyPair: KeyPair<string, number>  = {
  key: "key",
  value: 0,
}

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: [],
}


/**
 * 인덱스 시그니처를 제네릭과 함께 사용하기
 */

// 일반적인 인덱스 시그니처 (값의 타입이 number로 고정됨)
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key1: 1234,
  key2: 5678,
};

// 제네릭을 결합한 인덱스 시그니처 
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 * 인터페이스뿐만 아니라 type 키워드로도 완전히 동일하게 제네릭을 사용할 수 있습니다.
 */

type Map2<V> = {
  [Key: string]: V;
}

let stringMap2: Map2<string> = {
  key: "hello",
};


interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// User는 이름(name)을 공통으로 가지되,
// 세부 정보(profile)는 어떤 유저냐에 따라 다르게 주입받는 역할을 합니다.
interface User<T> {
  name: string;
  profile: T;
}


const developerUser: User<Developer> = {
  name: "홍길동",
  profile: {
    type: "developer",
    skill: "TypeScript",
  }
};

const studentUser: User<Student> = {
  name: "김철수",
  profile: {
    type: "student",
    school: "학교"
  },
};


function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
  
}


// goToSchool(developerUser);
