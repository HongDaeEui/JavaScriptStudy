// map으로 배열 제곱 구하기
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((number) => number * number);
console.log(numbers); // [1, 2, 3, 4, 5]; console.log(result); // [1, 4, 9, 16, 25]

// for문으로 구하기
const numbers = [1, 2, 3, 4, 5];
const result = [];
for (i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * numbers[i]);
}
console.log(result); // [1, 4, 9, 16, 25]

// map 인자별 설명
const numbers = [1];
numbers.map((number, index, source) => {
  // number: 요소값
  // index: source에서 요소의 index
  // source: 순회하는 대상
  console.log(number);
  // 1
  console.log(index);
  // 0
  console.log(source);
  // [1]
  return number * number;
});

// 프로그래밍 이름 길이 구하기
const programingLanguages = ["javascript", "java", "c#", "c++", "c"];
const lengthOfProgramingLanguages = programingLanguages.map(
  (language) => language.length
);
console.log(lengthOfProgramingLanguages); // [10, 4, 2, 3, 1];

// array 요소가 추가되는 경우
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((number) => {
  numbers.push(number);
  return number * number;
});
console.log(result); // [1, 4, 9, 16, 25];
// array 요소가 수정되는 경우
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((number) => {
  numbers.pop();
  return number * number;
});
console.log(result); // [1, 4, 9, empty × 2];
