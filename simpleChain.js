/* 
/* Simpleblock - A simple example blockchain created in Node.js
*/

// Block Model
class Block {
  construcotr(data) {
    this.height = '';
    this.timeStamp = '';
    this.data = data;
  }
}

/* Blockchain Model
  Will have:
    - createGenesisBlock()
    - getLatestBlock()
    - addBlock()
    - getBlock()
    - validateBlock()
    - validateChain()
*/
class Blockchain {
  constructor() {
    this.chain = [];
  }

  addBlock(newBlock) {
    this.chain.push(newBlock);
  }
}