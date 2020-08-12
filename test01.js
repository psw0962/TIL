// getter, setter

let circle = {
    _radius: 200,
    backgroundColor: 'blue',
    get area() {
        return this.radius * this.radius * Math.PI;
    },
    get radius() {
        return this._radius;
    },
    set radius(r) {
        if (typeof r === 'number') {
            this._radius = r;
        }
    }
};

let area = circle.area;

circle.radius = '100';

console.log(circle);


//   ============================================

// document - DOM
function createBoxStyle(width, height, color) {
    return {
        width: `${width}px`,
        height: `${width}px`,
        backgroundColor: color
    };
}

function createSquareBoxStyle(size, color) {
    return createBoxStyle(size, size, color);
}

function createBox(boxStyle) {
    let box = document.createElement('div');

    box.style.width = boxStyle.width;
    box.style.height = boxStyle.height;
    box.style.backgroundColor = boxStyle.backgroundColor;

    return box;
}

let container = document.getElementById('box-container');
let boxStyles = [
    createSquareBoxStyle(10, 'red'),
    createSquareBoxStyle(20, 'orange'),
    createSquareBoxStyle(30, 'yellow'),
    createSquareBoxStyle(40, 'green'),
    createSquareBoxStyle(50, 'blue'),
];

for (let i = 0; i < boxStyles.length; i++) {
    container.appendChild(createBox(boxStyles[i]))
}

//   ==============================================================

// forEach 빽틱 사용

let idol = [
    { age: 10, name: '방탄소년단' },
    { age: 5, name: '샤이니' },
    { age: 14, name: '동방신기' },
    { age: 2, name: '2NE1' }
];

// 이름만 출력하세요. 
// 이름 앞에 순서를 표시하세요.

for (let i = 0; i < idol.length; i++) {
    console.log(`${i + 1} -  ${idol[i].name}`);
}

idol.forEach(function (dol, idx) {
    console.log(`${idx + 1} -  ${dol.name}`);
});

idol.forEach((dol, idx) => console.log(`${idx + 1} -  ${dol.name}`));

