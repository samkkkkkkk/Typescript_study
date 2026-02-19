/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // unkonwn 타입을 다운캐스팅 할 경우 에러 발생
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
  
};


/**
 * never 타입
 */

function neverExamp() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // never 타입에 number, string, boolean을 넣게되면 다운캐스팅 되어 에러 발생
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 *  Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 *  any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // any 타입은 어떤 타입으로 업캐스팅 되거나 다운캐스팅될 수 있다.
  anyVar = unknownVar;

  undefinedVar = anyVar;

  // never 타입의 경우 공집합이기 때문에 다운 캐스팅 불가능하다.
  // neverVar = anyVar
}

