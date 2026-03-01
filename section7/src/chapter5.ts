/**
 * 프로미스
 */


// Promise 객체에 제네릭 타입을 사용해서 resolve의 타입을 지정할 수 있습니다.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("실패원인: ")
;  }, 3000);
});

// resolve의 기본 반환값은 unknown이기 때문에 
// 타입을 정해주지 않으면 연산이 불가능 합니다.
promise.then((response) => {
  console.log(response * 10);
});

// Promise의 reject는 제네릭으로 타입을 지정할 수 없습니다.
// catch 블록에서 err은 기본적으로 any 또는 unknown 타입으로 취급됩니다.
// 안전한 처리를 위해 타입 좁히기를 사용해야 합니다.
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
    
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */


interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});