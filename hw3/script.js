let txt = +prompt('enter radious')
function getArea() {
    if (txt > 0) {
        let c = Math.PI;
        console.log(c*txt*txt);
    }else if(txt<0){
        console.log('must be more than 0');
    }else if (isNaN(txt)){
        console.log('must be a numeric value');
    }else if (!txt) {
    console.log('Please enter radious');
    }
}

getArea(txt)


let num = +prompt('enter number')
function getSqrt(num) {
    if (isNaN(num)) {
        console.log('must be a numeric value');
    } else if (!num) {
        console.log('Please enter some number');
    } else if (num < 0) {
        console.log('must be more than 0');
    } else if (num > 0) {
        let c = Math.sqrt(num)
        console.log(c);
    }
}


getSqrt(num)


const getMath = {}

getMath.Pi = function () {
    let pi = 3.14
    console.log(pi);
}

getMath.pow = function (number, degree) {
    let n2 = +prompt('enter number')
    let n1 = +prompt('enter stepin')
    number = n2
    degree = n1
    if (isNaN(number) || isNaN(degree)) {
        console.log('must be a numeric value');
    } else if (!number || !degree) {
        console.log('enter something');
    } else {
        console.log(number ** degree);
    }
}

getMath.abs = function (modul) {
    let m = +prompt('enter number')
    modul = m
    if (isNaN(modul)) {
        console.log('must be a numeric value');
    } else if (!modul) {
        console.log('enter something');
    } else if (modul > 0) {
        console.log(`|${modul}|`);
    } else if (modul < 0) {
        console.log(`|${modul * (-1)}|`);
    } else if (modul = 0) {
        console.log(modul);
    }
}

getMath.max = function () {
    let i1 = arguments[0]
    if (isNaN(i1)) {
        console.log('must be a numeric value');
    } else if (arguments.length === 0) {
        console.log('enter something');
    } else {
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] > i1) {
                i1 = arguments[i]
            }

        }
        console.log(i1);
    }

}

getMath.min = function () {
    let i2 = arguments[0]
    if (isNaN(i2)) {
        console.log('must be a numeric value');
    } else if (arguments.length === 0) {
        console.log('enter something');
    } else {
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] < i2) {
                i2 = arguments[i]
            }

        }
        console.log(i2);
    }

}



getMath.Pi()
getMath.pow(81)
getMath.abs(-89)
getMath.max(56,567,35474,9,-4)
getMath.min(56,567,35474,9,-4)
