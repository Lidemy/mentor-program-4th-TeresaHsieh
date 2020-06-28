function capitalize(str) {
  let englishCharacters = /^[A-Za-z]+$/;
  let firstLetter = str.charAt(0);
  if (firstLetter.match(englishCharacters)){
    return firstLetter.toUpperCase() + str.slice(1);
  } else {
    return str; 
  }
}

console.log(capitalize('hello'));
