/**
 * 제네릭 클래스
 */



class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
    
  }
}

// 제네릭 클래스는 전달받은 인자의 타입을 통해서 
// 제네릭 타입을 추론하기 때문에 따로 명시하지 않아도 됩니다.
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print;

const stringList = new List(["1", "2", "3"]);
stringList.pop();
stringList.push("7");
stringList.print();
