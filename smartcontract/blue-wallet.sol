// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Bearadise is ERC721, Ownable {
  uint256 minDepositAmount;

  constructor(
    uint256 _minDepositAmount
  ) ERC721("HelloWord", "GRAY") {
    minDepositAmount = _minDepositAmount;
  }

  function deposit() public payable {
    require(msg.value >= minDepositAmount, "The ether value sent is not enough");
  }

  /**************
   * Withdrawal *
   **************/

  function withdraw() public onlyOwner {
    uint256 balance = address(this).balance;
    payable(msg.sender).transfer(balance);
  }

  function setMintDeposiAmount(uint256 amount) public onlyOwner {
    minDepositAmount = amount;
  }

  function getBalance() public view onlyOwner returns(uint256) {
    return address(this).balance;
  }
}