// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

import { log } from "node:console"

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "홍길동",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
}


const user2 = {
  name: "김아무개",
   role: Role.USER// 1 <- 일반 유저
}


const user3 = {
name: "박아무개",
role: Role.GUEST // 0 <- 게스트
}

console.log(user1, user2, user3);
