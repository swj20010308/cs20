function rmHeadTail (s) {
    return s.substring(1, s.length - 1);
}

function str (obj) {
    return JSON.stringify(obj);
}

function writeArr (objArr) {
    let result = '';
    let s = str(objArr);
    let sArr = rmHeadTail(s).split(',');
    for (let i = 0; i < sArr.length; i++) {
        result += rmHeadTail(sArr[i]);
        if (i < sArr.length - 1) {
            result += ', ';
        }
    }
    return result;
}

function addToSet (objArr, set) {
    let s = str(objArr);
    let sArr = rmHeadTail(s).split(',');
    sArr.forEach(e => {
        set.add(rmHeadTail(e));
    });
    return set;
}
