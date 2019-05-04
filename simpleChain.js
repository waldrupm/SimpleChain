/* 
/* Simpleblock - A simple example blockchain created in Node.js
*/

// Initialize
const SHA256 = require('crypto-js/sha256');

// Block Model
class Block {
  constructor(data) {
    this.height = 0;
    this.timeStamp = 0;
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
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
    this.addBlock(this.createGenesisBlock());
  }

  createGenesisBlock() {
    return new Block("First block in the chain - Genesis block");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.height = this.chain.length;
    newBlock.timeStamp = new Date().getTime().toString().slice(0,-3);

    if (this.chain.length > 0) {
      newBlock.previousHash = this.chain[this.chain.length - 1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}