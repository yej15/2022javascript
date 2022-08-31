// 배열

let fruit = ["banana", "apple", "grape", "mango"];
console.log(fruit)
console.log(fruit[3])

fruit[0] = "cherry";
console.log(fruit)
fruit[2] = "tomato";
console.log(fruit)

// pop() : 마지막에 있는 아이템 빼기
fruit.pop()
console.log(fruit);
fruit.push("pineapple");
console.log(fruit);

console.log(fruit.includes("pear"))

console.log(fruit.indexOf("apple"))

// slice 1번째부터 값 잘라서 반환해줘
// console.log(fruit.slice(1))
// slice 1번째부터 3번전까지 잘라서 반환해줘
let extrafruit = fruit.slice(1,3)
console.log(extrafruit)
console.log("original fruit", fruit)
// slice : slice(시작점, 끝점미포함)

// splice 2번째부터 1개만 잘라서 나머지 반환해줘
// splice : splice(시작점, 개수)
fruit.splice(0,2);
console.log(fruit)

// slice는 기존 배열을 건드리지 않는다
// splice는 오리지널 배열을 자른다