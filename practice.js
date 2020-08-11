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
const findTube = friends
    .find((a) => a.name === '튜브');
console.log(findTube);

// 라이언과 콘의 모든 정보를 구하시오 - filter 사용
const lionandCon = friends
    .filter((a) => a.name === '라이언' || a.name === '콘');
console.log(lionandCon);

// 라이언의 나이를 구하시오 - find 사용
const lionAge = friends
    .find((a) => a.name === '라이언')
    .age;
console.log(lionAge);

// 프로도와 무지의 나이 합을 구하시오 - filter, reduce 사용
const frodoandMuji = friends
    .filter((a) => a.name === '프로도' || a.name === '무지')
    .reduce((a, b) => a.age + b.age);
console.log(frodoandMuji);

// 펭수와 라이언의 나이 합을 갖는 캐릭터의 description을 구하시오 - filter, reduce, find 사용
const pangsuandLion = friends
    .filter((a) => a.name === '펭수' || a.name === '라이언')
    .reduce((a, b) => a.age + b.age)
const findData = friends
    .find((a) => a.age === pangsuandLion)
    .description;
console.log(findData);

// 모든 캐릭터를 나이 순으로 정렬하시오 - sort 사용
const ascending = friends
    .sort((a, b) => b.age - a.age)
console.log(ascending);

// 튜브의 description에서 '말괄량이'를 '개구쟁이'로 바꾸시오 - find 사용
const tube2 = friends
    .find((a) => a.name === '튜브')
tube2.description = tube2.description.replace('말괄량이', '개구쟁이')
console.log(tube2);

// 모든 캐릭터에게 string 형태의 성별(gender) 정보를 입력하시오 - map 사용
const addGender = friends
    .map((a) => ({ ...a, gender: 'man' }));
console.log(addGender);


// =============================================================================

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


// 1. 사용자 중 age가 40 이하인 사용자의 목록을 불러오기(filter)
const agecheck = newArr
    .filter((a) => a.age < 40)
console.log(agecheck);

// 2. 사용자 중 이름의 길이가 4 이상인 사용자의 목록을 불러오기(filter)
const nameLength = newArr
    .filter((a) => a.name.length > 4)
console.log(nameLength);

// 3. 사용자의 이메일이 gmail인 사용자의 목록 불러오기(filter)
const useGmail = newArr
    .filter((a) => a.email.indexOf('gmail') > -1)
console.log(useGmail);

// 4. 첫 번째와 두 번째 사용자의 나이 합보다 작은 사용자의 목록 불러오기
const user = newArr
    .filter((a, i) => i === 0 || i === 1)
    .reduce((a, b) => a.age + b.age)

const findData2 = newArr
    .filter((a) => a.age < user)

console.log(findData2);

// 5. 앞서 정의된 사용자 데이터에 새로운 데이터 추가하기(gender: '성별' 과 같이 임의의 데이터)
const addStar = newArr
    .map((a) => ({ ...a, star: "*" }))
console.log(addStar);