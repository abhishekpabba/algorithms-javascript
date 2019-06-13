function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) return false;

    let strNum1HashMap = {};
    let strNum2HashMap = {};

    for (let num of strNum1) {
        strNum1HashMap[num] = strNum1HashMap[num] + 1 || 1;
    }

    for (let num of strNum2) {
        strNum2HashMap[num] = strNum2HashMap[num] + 1 || 1;
    }

    for (let key in strNum1HashMap) {
        if (strNum1HashMap[key] !== strNum2HashMap[key]) {
            return false;
        }
    }

    return true;
}

sameFrequency(158, 815); // true