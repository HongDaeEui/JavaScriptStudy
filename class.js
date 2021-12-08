class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  } //메서드생성

  nextYearAge() {
    return Number(this.age) + 1;
  }
}
let kim = new Person("kim", "24", "seoul");

kim.eat = function () {
  return "apple";
}; // class 밖에서도 메서드를 넣는 것이 가능하다.
console.log(kim.nextYearAge());
console.log(kim.eat());

let park = new Person("park", "31", "yangyang");

console.log(park.nextYearAge());
console.log(park.eat()); // 새로운 Person객체에는 class 밖에서 추가한 메서드를 호출하여 사용할 수 없다.
