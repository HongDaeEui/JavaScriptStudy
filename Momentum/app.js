//Id로 접근
const all = document.getElementById("all");
console.log(all);

//ClassName으로 접근
const hellos = document.getElementsByClassName("hellos");
console.log(hellos);

//TagName으로 접근, array로 반환해준다.
const title = document.getElementsByTagName("h1");
console.log(title);

//queryselector, CSS처럼 요소를 가져올 수 있다,
//단 하나의 element를 리턴한다. 여러 개 있을 경우 첫번째 것을 가져온다.
const shot = document.querySelector(".hello h1:first-child");
console.log(shot);

const rabbit = document.querySelector("#all");
// const rabbit = document.getElementById("all");
console.log(rabbit);

//여러 개의 요소를 가져 온다.
const tiger = document.querySelectorAll(".hello h1");
console.log(tiger);

const eagle = document.querySelector(".eagle h1");
eagle.innerText = "eagle";
