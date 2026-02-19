// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}  ={
  id: 1,
  name: "홍길동",
  nickname: "hong",
  birth: "2222.01.01",
  bio: "안녕하세요",
  location: "서울시",
}

let user2: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}  ={
  id: 2,
  name: "김아무개",
  nickname: "hong",
  birth: "2222.01.01",
  bio: "안녕하세요",
  location: "서울시",
}

let user3: User ={
  id: 2,
  name: "김아무개",
  nickname: "hong",
  birth: "2222.01.01",
  bio: "안녕하세요",
  location: "서울시",
}

// 타입 별칭은 변수와 비슷하게 취급된다.
// 타입 별칭을 선언할 때 같은 scope 내에서 동일한 이름으로 선언하면 안된다.

// 인덱스 시그니처
type CountryCodes = {
  [Key : string] : string;
}
let countryCodes: CountryCodes = {
  korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
}

type CountryNumberCodes = {
  [key: string]: number;
}
let countryNumberCodes: CountryNumberCodes = {
  korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826
}