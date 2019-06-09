function meanMedianMode(values) {
  return {
    mean: mean(values),
    median: median(values),
    mode: mode(values)
  }
}

function mean(values) {
  let sum = 0;
  values.forEach(number => {
    sum += number;
  });

  return sum / values.length;
}

function median(values) {
  values.sort((a, b) => a - b);
  let medianIndex = Math.floor(arr.length / 2);
    
  return arr.length % 2 === 1 ? arr[medianIndex] : (arr[medianIndex - 1] + arr[medianIndex]) / 2;
}

function mode(values) {
  let modeObj = {};

  values.forEach(val => {
    if(!modeObj[val]) modeObj[val] = 0;
    modeObj[val]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for(let num in modeObj) {
    if(modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if(modeObj[num] === maxFrequency) {
      modes.push(num);
    };
  }

  if(modes.length === Object.keys(modeObj).length) modes = [];

  return modes;
}

meanMedianMode([9,10,23,10,23,9]);