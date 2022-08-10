const alphabet = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
function rot13(str) {

  let caasersStr = "";
  for (let i = 0; i < str.length; i++){
    const alpChar = str[i];
    if (!alphabet.includes(alpChar)){
        caasersStr+=alpChar;
    }else{
      const alpCharIndex = alphabet.findIndex(a => a === alpChar);
      caasersStr += alphabet[alpCharIndex + 13] || alphabet[alpCharIndex-13];
    }
  }

  return caasersStr;
}