function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let a = prompt("Введи a",0);
let b = prompt("Введи b",0);

alert(min(a, b));