function reverse(str) {
  let strLength = str.length;
  let reversedStrArray = [];
  for (let i = strLength - 1; i >= 0; i--) {
    reversedStrArray.push(str[i]);
  }
  console.log(reversedStrArray.join(''));
}

reverse('hello');
