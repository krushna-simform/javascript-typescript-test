const nums = [1, 2, 3, 1, 1, 2, 2];

const group = (arr) => {
  let resultObject = {};
  let result = [];

  for (const item of arr) {
    if (resultObject[item]) {
      resultObject[item] += 1;
    } else {
      resultObject[item] = 1;
    }
  }

  for (const key in resultObject) {
    if (resultObject[key] > nums.length / 3) {
      result.push(Number(key));
    }
  }

  return result;
};

console.log(group(nums));
