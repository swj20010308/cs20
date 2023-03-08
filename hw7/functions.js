function rmHeadTail (s) {
    return s.substring(1, s.length - 1);
}

function str (obj) {
    return JSON.stringify(obj);
}

function objToArr (objArr) {
    let s = str(objArr);
    let sArr = rmHeadTail(s).split(',');
    return sArr.map(rmHeadTail);
}

function writeArr (objArr) {
    let result = '';
    let sArr = objToArr(objArr);
    for (let i = 0; i < sArr.length; i++) {
        result += sArr[i];
        if (i < sArr.length - 1) {
            result += ', ';
        }
    }
    return result;
}

function addToSet (objArr, set) {
    let sArr = objToArr(objArr);
    sArr.forEach(e => {
        set.add(e);
    });
    return set;
}

function inSet (array, option) {
    for (let i = 0; i < array.length; i++) {
        if (option.innerHTML == array[i] || option.innerHTML == 'all') {
            return true;
        }
    }
    return false;
}
