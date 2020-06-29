function join(arr, concatStr) {
  let newString = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      newString += arr[i];
      newString += concatStr;
    } else {
      newString += arr[i];
    }
  }
  return newString;
}

function repeat(str, times) {
  let newString = '';
  for (let i = 1; i <= times; i++) {
    newString += str;
  }
  return newString;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
