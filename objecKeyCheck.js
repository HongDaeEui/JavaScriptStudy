//object의 key값 존재여부 확인
const object_1 = {
  test_1: "test 1",
};

console.log(object_1.hasOwnProperty("test_1")); // true
console.log(object_1.hasOwnProperty("test_2")); // false

const object_2 = {
  id: "did:example:c276e12ec21ebfeb1f712ebc6f1",
  name: [{ value: "진 켈리", lang: "ko" }],
  age: [{ value: "23", lang: "ko" }],
  address: [{ value: "서울, 대한민국", lang: "ko" }],
};

console.log(object_2.hasOwnProperty("age")); // true
console.log(object_2.hasOwnProperty("test_2")); // true
