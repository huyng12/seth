const chai = require("chai");
const { ethers } = require("hardhat");

const { expect } = chai;
chai.use(require("chai-as-promised"));

describe("Seth", () => {
    it("Only contract owner can insert", async () => {
        const Seth = await ethers.getContractFactory("Seth");
        const seth = await Seth.deploy();
        await seth.deployed();
        const [, another] = await ethers.getSigners();
        await expect(seth.connect(another).insert("string")).to.be.rejectedWith(
            "Only contract owner can insert new string to set"
        );
    });

    it("Cannot insert duplicate string", async () => {
        const Seth = await ethers.getContractFactory("Seth");
        const seth = await Seth.deploy();
        await seth.deployed();
        const tx = await seth.insert("string");
        await tx.wait();
        await expect(seth.insert("string")).to.be.rejectedWith(
            "The string is existing in the set already"
        );
    });

    it("Method is_contains should work correctly", async () => {
        const Seth = await ethers.getContractFactory("Seth");
        const seth = await Seth.deploy();
        await seth.deployed();

        // Insert string "rknguyen"
        const tx = await seth.insert("rknguyen");
        await tx.wait();

        expect(await seth.is_contains("rknguyen")).to.be.true;
        expect(await seth.is_contains("rknguy3n")).to.be.false;
    });
});
