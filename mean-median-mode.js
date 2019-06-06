function meanMedianMode(values) {
  return {
    mean: mean(values),
    median: median(values),
    mode: mode(values)
  }
}

function mean(values) {
  var sum = 0;
  values.forEach(number => {
    sum += number;
  });

  var mean = sum / values.length;

  return mean;
}

function median(values) {
  values.sort(function(a, b) {
    return a - b;
  });

  var median;

  if(values.length % 2 !== 0) {
    median = values[Math.floor(values.length / 2)];
  } else {
    var mid1 = values[(values.length) / 2 - 1];
    var mid2 = values[(values.length) / 2];
    median = (mid1 + mid2) / 2
  }

  return median;
}

function mode(values) {
  var modeObj = {};

  values.forEach(val => {
    if(!modeObj[val]) modeObj[val] = 0;
    modeObj[val]++;
  });

  var maxFrequency = 0;
  var modes = [];
  for(var num in modeObj) {
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