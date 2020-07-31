const Math = {
    add: (...args) => {

        let add = 0;
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i === 'number']) {
                add = add + args[i];
            }
        }
        return add;
    },
    sub: (x, ...args) => {

        let sub = x;
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === 'number') {
                sub = sub - args[i];
            }
        }

        return sub;
    },
    mul: (...args) => {
        let mul = 1;

        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === 'number') {
                mul = mul * args[i];
            }
        }
        return mul;
    },
    div: (x, ...args) => {
        let div = x;

        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === 'number') {
                div = div / args[i];
            }
        }
        return div;
    },
};

console.log(Math.add(10, 20, 30, 40, 50)); // 150
console.log(Math.sub(100, 40, 20, 10, 5)); // 25
console.log(Math.mul(10, 2, 3, 4, 5)); // 1200
console.log(Math.div(500, 5, 2, 25)); // 2


  // 숙제 2: add 함수를 화살표 함수로 만들기 - 명시적 리턴 + ...args
  // 숙제 3: 숙제 2가 끝났을 경우에 위에서 만든 Math라는 객체 속 함수를 화살표 함수로 만들기