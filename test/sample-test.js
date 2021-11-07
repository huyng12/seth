const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
    it("Should return the the same greeting as constructing", async function () {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, Huy");
        await greeter.deployed();
        expect(await greeter.greet()).to.equal("Hello, Huy");
    });
});
