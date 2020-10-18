const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(string, key) {
      string = string.toLowerCase();
      key = key.toLowerCase();
      let keyStr = '';
      let result = '';
      let j = 0;
      for (let i = 0; i<=string.length - 1; i++) {
          if (!key[j]) j=0;
          if ((/[a-z]/).test(string[i])) {
            keyStr += key[j];
            j++;
          }
            else keyStr += string[i];
      }

    for (let i = 0; i<=string.length - 1; i++){
      if ((/[a-z]/).test(string[i])) {
        let num = (string[i].charCodeAt() - 97 + keyStr[i].charCodeAt() - 97 ) % 26;
        result += String.fromCharCode(num + 97);
      }
      else 
        result += string[i];
    }
      if (this.mode === true)
      return result.toUpperCase();
      else return result.toUpperCase().split('').reverse().join('');
  }    
  decrypt(string, key) {
      string = string.toLowerCase();
      key = key.toLowerCase();
      let keyStr = '';
      let result = '';
      let j = 0;
      for (let i = 0; i<=string.length - 1; i++) {
        if (!key[j]) j=0;
        if ((/[a-z]/).test(string[i])) {
          keyStr += key[j];
          j++;
        }
            else keyStr += string[i];
       }
  
      for (let i = 0; i<=string.length - 1; i++){
        if ((/[a-z]/).test(string[i])) {
          let num = ( (string[i].charCodeAt() - 97) - (keyStr[i].charCodeAt() - 97) +26 ) % 26;
        result += String.fromCharCode(num + 97);
        }
        else 
        result += string[i];
     }
    
     if (this.mode === true)
     return result.toUpperCase();
     else return result.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
