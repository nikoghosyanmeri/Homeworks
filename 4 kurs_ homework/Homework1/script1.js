let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 124];

//Խնդիր 1
//Գտնել զանգվածի ամենամեծ տարրը

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);

//Խնդիր 2
//Գտնել առաջին և վերջին տարրերի գումարը

let sum = arr[0] + arr[arr.length - 1];
console.log(sum);

//Խնդիր 3
//Գտնել qանի զույգ թիվ կա զանգվածում

let en = 0;

for (let a = 0; a < arr.length; a++) {
    if (arr[a] % 2 == 0) {
        en++;
    }
}

console.log(en);

//Խնդիր 4
//Գտնել ամենամեծ տարրի ինդեքսը

let maxv = arr[0];
let index = 0;

for (let b = 1; b < arr.length; b++) {
    if (arr[b] > maxv) {
        maxv = arr[b];
        index = b;
    }
}

console.log(index);

//Խնդիր 5
//Գտնել զույգ թվերը, որոնք գտնվում են կենտ ինդեքսում

for (let c = 0; c < arr.length; c++) {
    if (arr[c] % 2 == 0 && c % 2 !== 0) {
        console.log(arr[c]);
    }
}

//Խնդիր 6
//Գտնել եռանիշ թվերը

for (let y = 0; y < arr.length; y++) {
    if (arr[y] >= 100 && arr[y] <= 999) {
        console.log(arr[y]);
    }
}

//Խնդիր 7
//Քանի անգամ է հանդիպում ամենամեծ թիվը

let maxNum = arr[0];
let cMax = 0;

for (let o = 1; o < arr.length; o++) {
    if (arr[o] > maxNum) {
        maxNum = arr[o];
    }
}

for (let o = 0; o < arr.length; o++) {
    if (arr[o] == maxNum) {
        cMax++;
    }
}

console.log(cMax);

//Խնդիր 8
//Գտնել ամենափոքր և ամենամեծ թվերի գումարը

let min = arr[0];
let maxN = arr[0];

for (let k = 1; k < arr.length; k++) {
    if (arr[k] < min) {
        min = arr[k];
    }
    if (arr[k] > maxN) {
        maxN = arr[k];
    }
}

console.log(min + maxN);

//Խնդիր 9
//Դասավորել աճման կարգով

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
}

console.log(arr);

//Խնդիր 10
//Դասավորել նվազման կարգով

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
}

console.log(arr);
