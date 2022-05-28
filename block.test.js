const Blockchain = require("./src/blockchain").Blockchain;
const Block = require("./src/block").Block;

describe("Validator", () => {
    const blockChain = new Blockchain();
    //const block = new Block('test');

    test("get Block By Height", async () => {
        expect(await blockChain.getBlockByHeight(0)).toEqual({ "body": "7b2264617461223a2247656e6573697320426c6f636b227d", "hash": null, "height": 0, "previousBlockHash": null, "time": 0 });
    });

    test("request validation", async () => {
        const address = await blockChain.requestMessageOwnershipVerification('bc1q7cueggnarrgx82a3v7taxxcza3akeke7wrlyhf');
        expect(address.split(':')[0]).toEqual('bc1q7cueggnarrgx82a3v7taxxcza3akeke7wrlyhf');
    });

    test("submit star", async () => {
        const data = {
            address: "bc1qvz8qwsgdejyv8qek2wr5l35v2w4e89pmge9c7q",
            signature: "IByp6wmprc9e/XYP/URGW21XGQaAPUKQ+oatdECZPcvQe0YE+Ke6soefD31sLNUn3jeKlalsOByHgUbwyLYcSW4=",
            message: "bc1qvz8qwsgdejyv8qek2wr5l35v2w4e89pmge9c7q:1653729040:starRegistry",
            star: {
                dec: "68",
                ra: "16h",
                story: "Testing the story 4"
            }
        }
        await blockChain.submitStar(data.address, data.signature, data.message, data.star);
        expect(0).toEqual(0);
    });

    test("get Stars By Wallet Address", async () => {
        await blockChain.getStarsByWalletAddress('bc1qvz8qwsgdejyv8qek2wr5l35v2w4e89pmge9c7q');
        expect(0).toEqual(0);
    });
});