'use strict';

require("./../init");

const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("assert");

const AkismetClient = require("../../lib/client");
const client = new AkismetClient({key: process.env.AKISMET_KEY});

describe("Akismet CLient", () => {
    it("should return true or false", async () => {
        const result = await client.checkComment({
            text: "Claude Debussy (22 August 1862 – 25 March 1918) was a French composer. He was seen, during his lifetime and afterwards, as the first Impressionist composer, although he vigorously rejected the term.",
            ip: "127.0.0.1",
            source: "wikipedia.org"
        });

        assert.strictEqual(result === true || result === false, true);
    });
});
