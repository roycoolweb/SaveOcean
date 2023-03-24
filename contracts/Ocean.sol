// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Ocean {
    event Contributed(address receipent, uint amount);

    mapping(address => uint) public funds;

    function contribute(address payable receipent) external payable {
        bool sent = receipent.send(msg.value);
        require(sent, "contribute failed");

        funds[receipent] += msg.value;
        emit Contributed(receipent, msg.value);
    }
}