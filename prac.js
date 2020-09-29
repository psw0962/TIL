// 선형구조 => Array, List, Queue, stack
// 비선형구조 => Graph, Tree

// 자료구조가 중요한 이유
// 자료구조는 1개의 데이터를 처리하는 시간과 크기를 줄여 데이터를 처리하는데 더 적은 크기와 더 적은 시간이 필요하게끔 하는 역할을 한다
// 따라서 프로그램 내에서 자료를 가장 효율적으로 처리하여 보다 성능 좋은 프로그램을 만들기 위함이다




const fruits = ['banana', 'apple', 'mango', 'papaya', 'orange'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

// POP => 배열의 맨 마지막 데이터 제거
// console.log(fruits.pop()); 
// console.log(fruits);

// push => 배열의 맨 마지막에 데이터 추가
// fruits.push('kiwi');
// console.log(fruits);

// shift => 배열의 맨 첫번째 데이터 제거
// console.log(fruits.shift());
// console.log(fruits);

// unshift => 배열의 맨 첫번째에 데이터 추가
// console.log(fruits.unshift('kiwi'));
// console.log(fruits);

// indexOf => 배열안의 해당 데이터 위치 출력
// console.log(fruits.indexOf('banana'));
// console.log(fruits.indexOf('papaya'));

// splice => 지정해준 배열의 자리부터 지정해준 숫자만큼 데이터 삭제 후 출력 / splice(시작, 삭제, 추가)
// console.log(fruits.splice(2, 3));
// console.log(fruits);

// slice => slice(시작, 해당위치 전 배열데이터 값 까지 추출) 카피개념
// console.log(fruits.slice(0, 2));
// console.log(fruits);





// 답안
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// };

// console.log(fruits.pop());
// console.log(fruits);

// fruits.push('kiwi');
// console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);

// console.log(fruits.unshift('kiwi'));
// console.log(fruits);

// console.log(fruits.indexOf('banana'));
// console.log(fruits.indexOf('papaya'));

// console.log(fruits.splice(2, 2));
// console.log(fruits);

// console.log(fruits.slice(0, 2));
// console.log(fruits);