const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [], 
  getLength() {
    return chainMaker.arr.length;
  },
  addLink(value) {
    chainMaker.arr.push(value); return chainMaker;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > chainMaker.length ) {
      chainMaker.arr = [];
      throw new Error();
      
    }
    chainMaker.arr.splice(position - 1, 1); return chainMaker;
  },
  reverseChain() {
    chainMaker.arr.reverse(); return chainMaker;
  },
  finishChain() {
    let result = '';
    chainMaker.arr.forEach(item => result += `( ${item} )~~`);
    chainMaker.arr = [];
    return result.slice(0, result.length - 2);
  }
};

module.exports = chainMaker;
