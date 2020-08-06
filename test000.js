// const cities = ["서울", "대전", "대구", "부산", "포항"];

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

// function callbackFn(value) {
//     console.log(value);
// }

// const callbackFn = (value) => {
//     console.log(value);
// };

// cities.forEach(callbackFn);

// cities.forEach((value) => {
//   console.log(value);
// });

// const newCities = cities.map((value) => {
//     return value + "hello";
// });
// console.log(newCities);
// console.log(cities);

// const filteredCities = cities.filter((value) => {
//     return value.indexOf("대") > -1;
// });
// console.log(filteredCities);
// console.log(cities);

// const reducedCities = cities.reduce((previous, current) => {
//     return previous + current;
// });
// console.log(reducedCities);
// console.log(cities);

// ===================================================================

const friends = [
    {
        id: "1",
        name: "라이언",
        age: 2,
        description: "한국에서 태어난 멋쟁이 사자",
    },
    {
        id: "2",
        name: "프로도",
        age: 4,
        description: "한국에서 태어난 귀여운 강아지",
    },
    {
        id: "3",
        name: "튜브",
        age: 5,
        description: "한국에서 태어난 말괄량이 오리",
    },
    {
        id: "4",
        name: "무지",
        age: 1,
        description: "한국에서 태어난 사랑스러운 단무지",
    },
    {
        id: "5",
        name: "콘",
        age: 2,
        description: "한국에서 태어난 근엄한 악어",
    },
    {
        id: "6",
        name: "펭수",
        age: 3,
        description: "한국에서 태어난 매력쟁이 펭귄",
    },
];


// 메서드 체이닝 예제(이터레이터 2번 사용하기)
// const tube = friends
//   .find((friend) => {
//     return friend.name === "튜브";
//   })
//   .map((friend) => {
//     return friend.name;
//   });


// 객체 요소에 접근하기
// console.log(tube.age);
// console.log(tube);


// 튜브의 모든 정보를 구하시오 - find 사용 O
const tube = friends.find((friend) => {
    return friend.name === '튜브';
});

console.log(tube);

// 라이언과 콘의 모든 정보를 구하시오 - filter 사용
const rionandCon = friends.filter((friend) => {
    return friend.name === '콘' || friend.name === '라이언';
});
console.log(rionandCon);

// 라이언의 나이를 구하시오 - find 사용
const lionAge = friends.find((friend) => {
    return friend.name === '라이언';
});
console.log(lionAge.age);

// 프로도와 무지의 나이 합을 구하시오 - filter, reduce 사용


// 펭수와 라이언의 나이 합을 갖는 캐릭터의 description을 구하시오 - filter, reduce, find 사용
// 모든 캐릭터를 나이 순으로 정렬하시오 - sort 사용
// 튜브의 description에서 '말괄량이'를 '개구쟁이'로 바꾸시오 - find 사용
// 모든 캐릭터에게 string 형태의 성별(gender) 정보를 입력하시오 - map 사용