// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

user = {
  name: "김아무개",
}

// readonly 옵션을 사용하면 수정할 수 없도록 막아준다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: "API KEY",
};
