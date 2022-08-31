// 객체
// oop object oriented programming 객체지향형 프로그래밍은 방식이에요

let patient = {
    name: "jimin",
    age: 17,
    disease: "cold"
  }
  
  console.log(patient)
  // 둘이 똑같아 아래 두개
  console.log(patient.name)
  console.log(patient["name"])
  
  patient.name = "JK"
  patient["age"] = 25
  console.log(patient)
  
  let patientList = [{ name: "jimin", age: 28 }, { name: "jk", age: 26 }, { name: "jin", age: 30 }]
  console.log(patientList)
  console.log("1번환자 ", patientList[0])
  console.log("1번환자나이 ", patientList[0].age)
  console.log("1번환자나이 ", patientList[0]["age"])
  