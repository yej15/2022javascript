// 호이스팅 let var 차이

/*
const 는 상수를 만드는 것 > 변하지 않음
호이스팅 : 함수가 실행되기 전에 변수들을 범위의 최상단으로 올리는 것
undefined 하고 > 변수 할당 하고 > 출력

var : 함수만 제외하고 모든걸 전역변수로 올림
let : TDZ temporal death zone 를 만들어서 변수가 호이스팅으로 기억이 되었지만, 그 선언문이 나오기 전까지 일시적으로 죽은 zone, 접근할 수 없다
*/

console.log(a);
var a = 1;
console.log(a);

for (let i = 1; i < 5; i++) {
  console.log(i)
}
console.log(i)

let c = 1;
console.log(c);
let c = 7;
console.log(c);