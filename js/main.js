//1
console.log('пункт №5');

console.log( 1 + 2 );
console.log( 2 - 2 );
console.log( 5 * 2 );
console.log( 10 / 2 );

//2
console.log('пункт №6');

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//3
console.log('пункт №7');

for (let i = 5; i > 0; i--) {
    console.log(i);
}

//4
console.log('пункт №8');

function getMarkInfo(condition) {

    if (condition === 10) {
        console.log('У вас максимальный балл');
    } else {
        console.log('У вас средний балл');
    }
}


getMarkInfo(10);
getMarkInfo(1);


//5
console.log('пункт №9');

function getDayInfo(position) {
    
    switch(position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
    }
}

getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);


//6
console.log('пункт №10');

let arr = ['a', 'b', 'c'];

for(let i = 1; i < 4; i++) {
    arr.push(i);
}

// arr[3] = 1;
// arr[4] = 2;
// arr[5] = 3;

console.log(arr);


//7
console.log('пункт №11');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);

console.log(arr3);


//8
console.log('пункт №12');

function countNumber(number) {
    let sum = 0;

    for(let i = 0; i <= number; i++) {
        sum += i;
    }

    console.log(sum);
}

countNumber(3);