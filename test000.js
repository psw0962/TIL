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
const frodoandMuji = friends
    .filter((friend) => {
        return friend.name === '프로도' || friend.name === '무지';
    })
    .reduce((a, b) => {
        return a.age + b.age;
    });
console.log(frodoandMuji);

// 펭수와 라이언의 나이 합을 갖는 캐릭터의 description을 구하시오 - filter, reduce, find 사용
const pangsuandLion = friends
    .filter((friend) => {
        return friend.name === '펭수' || friend.name === '라이언';
    })
    .reduce((a, b) => {
        return a.age + b.age;
    });
const findedData = friends
    .find((data) => data.age === pangsuandLion)
    .description;
console.log(findedData);

// 모든 캐릭터를 나이 순으로 정렬하시오 - sort 사용
const ascendingAge = friends.sort((a, b) => {
    return b.age - a.age;
})
console.log(ascendingAge);

// 튜브의 description에서 '말괄량이'를 '개구쟁이'로 바꾸시오 - find 사용
// const changeDescription = friends
//     .filter((friend) => friend.name === '튜브')
//     .map((friend) => friend.description)[0].replace('말괄량이', '개구쟁이');
// console.log(changeDescription);

const tube2 = friends
    .find((friend) => friend.name === '튜브')

tube2.description = tube2.description.replace('말괄량이', '개구쟁이');
console.log(tube2);


// 모든 캐릭터에게 string 형태의 성별(gender) 정보를 입력하시오 - map 사용
const genderAdd = friends
    .map((friend) => ({ ...friend, gender: '남자' }));
console.log(genderAdd);





// 새로운 문제

// 1. 새로운 배열을 만든다
const newArr = [
    {
        name: 'a',
        age: 10,
        email: 'psw0962@naver.com',
    },
    {
        name: 'b',
        age: 1,
        email: 'abc0962@naver.com',
    }, {
        name: 'crr',
        age: 10,
        email: 'psw1234@naver.com',
    }, {
        name: 'drrfgf',
        age: 35,
        email: 'psw5678@naver.com',
    }, {
        name: 'e',
        age: 5,
        email: 'psw0000@naver.com',
    }, {
        name: 'f',
        age: 40,
        email: 'qwe0962@naver.com',
    }, {
        name: 'gqqq',
        age: 35,
        email: 'hjk0962@naver.com',
    }, {
        name: 'hhgjghjgh',
        age: 5,
        email: 'ppp@naver.com',
    }, {
        name: 'igsdss',
        age: 50,
        email: 'hjpp@gmail.com',
    }, {
        name: 'jwer',
        age: 55,
        email: 'p0962@gmail.com',
    },
];
// 2. 그 배열에는 총 10개의 사용자 정보가 들어간다
// 3. 그 사용자 정보에는 name, age, email 등이 들어가며 각 데이터의 내용은 임의로 결정한다
// 4. 사용자 중 age가 40 이하인 사용자의 목록을 불러오기(filter)
const morethanForty = newArr
    .filter((a) => a.age <= 40);
console.log(morethanForty);

// 5. 사용자 중 이름의 길이가 4 이상인 사용자의 목록을 불러오기(filter)
const nameLength = newArr
    .filter((a) => a.name.length <= 4);
console.log(nameLength);

// 6. 사용자의 이메일이 gmail인 사용자의 목록 불러오기(filter)
const findGmail = newArr
    .filter((a) => a.email.indexOf('gmail') > -1);
console.log(findGmail);

// 7. 첫 번째와 두 번째 사용자의 나이 합보다 작은 사용자의 목록 불러오기
const ageAdd = newArr
    .filter((a, i) => i === 0 || i === 1)
    .reduce((a, b) => a.age + b.age);

const findedData2 = newArr
    .filter((data) => data.age < ageAdd)

console.log(findedData2);

// 8. 앞서 정의된 사용자 데이터에 새로운 데이터 추가하기(gender: '성별' 과 같이 임의의 데이터)
const addGender = newArr
    .map((a) => ({ ...a, gender: '여자' }));
console.log(addGender);


// http://woowabros-play-javascript.herokuapp.com/grammar/object 예습