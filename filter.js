//filter
let data = [
  {
    survey_id: 1,
    condition: "[user > age.value >= 30, onOffline.vlaue == 온라인]",
  },
  { survey_id: 2, condition: "[age >= 20, address === 서울 || 경기도]" },
];

let result = data.filter((e) => {
  return e.survey_id === 1;
});

console.log(result);
