/**
 * 인덱스드 엑세스 타입
 * 다른 타입의 특정 프로퍼티나 요소의 타입을 조회하여 
 * 가져오는 방법입니다.
 * 인덱스 []안의 값은 반드시 타입이어야 합니다. 변수나 런타임 값은 들어갈 수 없습니다.
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 중접된 객체의 특정 프로퍼티 타입 추출
function printAuthorInfo (author : PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
  
}

// PostList 배열 타입에 [number]를 인덱스로 주면 배열 안에 있는 단일 요소의 타입을 추출합니다.
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 30
  },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup2 = Tup[1];

type Tup3 = Tup[2];

// 4번째 타입은 존재하지 않기 때문에 에러 발생
// type Tup4 = Tup[3];

type TupNum = Tup[number];