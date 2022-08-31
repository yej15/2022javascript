// switch

let menu = 4;
if(1<menu && menu<4){
  console.log("purchasing")
}else if(menu == 2){
  console.log("invoice check")
}else if(menu == 3){
  console.log("check balance")
}else{
  console.log("back to home")
}

switch (menu){
  case 1 :
    console.log("1_purchasing")
    break;
  case 2 :
    console.log("2_invoice check")
    break;
  case 3:
  case 4:
    console.log("3_check balance")
    break;
  default :
    console.log("4_back to home")  
}

let gnb = 2;
// if(menu <= 3){
//   console.log("범위안이다")
// }else{
//   console.log("범위밖이다")
// }

// 삼항연산식
let answer = gnb <= 3 ? "범위안" : "범위밖"
console.log(answer)