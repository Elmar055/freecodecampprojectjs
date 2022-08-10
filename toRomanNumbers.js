function convertToRoman(num) {
  let romanNumber = "";
  const romanNumbers = {    
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
  }
  for (let key in romanNumbers){
    const value = romanNumbers[key];
    while(value <= num){
      num -= value;
      romanNumber += key;
    }
  }

  
  return romanNumber;
 }