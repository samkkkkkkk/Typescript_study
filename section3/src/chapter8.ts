/**
 * 서로소 유니온 타입 (Discriminated Unions / Tagged Unions)
 * 교집합이 없는 타입들로만 만든 유니온 타입 입니다.
 * 각 객체 타입마다 공통된 프로퍼티(식별자/태그)를 두고,
 * 그 프로퍼티에 서로 다른 리터럴 타입을 지정하여 타입을 구분합니다.
 */

type Admin = {
  tag: "ADMIN"; // 식별자 (Discriminator)
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER"; // 식별자
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST"; // 식별자
  name: string;
  visitCount: number;
};

// User 타입은 Admin, Member, Guset 중 하나입니다
// 이 세 타입은 tag라는 공통 프로퍼티를 가지지만, 그 값이 모두 다르므로 유니온 타입입니다.
type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member - >{name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {vistCount}번 오셨습니다.
function login(user:User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}


// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

// 단일 객체에 옵셔널 프로퍼티를 함께 작성하면
// 옵셔널 프로퍼티를 처리하기 위해 옵셔널 체이닝이나 Non-Null 단언을 강제하게 됩니다.
// type AsyncTest = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     date: string;
//   };
// };


// 서로소 유닛 타입으로 분리하기
type AsyncTask = LoadingTask | FailedTask | SuccessTask;


function processResult(task: AsyncTask) {
  switch(task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      // 컴파일러가 task를 FailedTask로 좁힐 수 있으므로
      // 옵셔너러 체이닝 없이도 안전하게 접근이 가능하다.
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}

const loading = {
  state: "LOADING",
};

const failed = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인: ",
  },
};

const success = {
  state: "SUCCESS",
  response: {
    date: "데이터",
  },
};
