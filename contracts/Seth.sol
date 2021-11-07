// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Seth {
    struct Set {
        string[] values;
        mapping(string => bool) is_contains;
    }

    Set private set;
    address private contract_owner;

    constructor() {
        // Who initate the contract will be the owner of the contract
        contract_owner = msg.sender;
    }

    function is_contains(string memory s) public view returns (bool) {
        return set.is_contains[s];
    }

    function insert(string memory s) public {
        require(
            msg.sender == contract_owner,
            "Only contract owner can insert new string to set"
        );

        require(
            !set.is_contains[s],
            "The string is existing in the set already"
        );

        set.values.push(s);
        set.is_contains[s] = true;
    }
}
