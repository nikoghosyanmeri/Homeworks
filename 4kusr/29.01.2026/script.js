let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let mul = 1;

// Խնդիր 1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log("Զույգ:", arr[i]);
    }
}

// Խնդիր 2
for (let x = 0; x < arr.length; x++) {
    if (arr[x] % 2 !== 0) {
        console.log("Կենտ:", arr[x]);
    }
}

// Խնդիր 3
for (let y = 0; y < arr.length; y++) {
    sum += arr[y];
}

console.log("Գումար:", sum);

// Խնդիր 4
console.log("Վերջին արժեքը:", arr[arr.length - 1]);

// Խնդիր 5
for (let z = 0; z < arr.length; z++) {
    if (arr[z] % 2 !== 0) {
        mul = mul * arr[z];
    }
}

console.log("Կենտ թվերի արտադրյալ:", mul);



//1 unenal zangvac gtnel amenamec tivy
//2 arajin u verjin tveri gumary
//3 zuygeri qanaky
//4 amenamec ti indexy
//5 tpi en zuyg tvery voronc indexy kent e
//6 tpi eranish tvery
//7 gtnel amenamec tvi qanaky
//8 gtnel amenamec amenapoqr tveri gumary
//9 dasavorel ajman kargov
// 10 nvazman kargov


