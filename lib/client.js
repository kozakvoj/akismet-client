'use strict';

const axios = require("axios");

class AkismetClient {
    constructor(options) {
        if (options.key === undefined) throw new Error("You have to provide api key.");
        this.key = options.key ;
    }
}

AkismetClient.prototype.dispatch = function(baseURL, params) {
    return axios.create({
        timeout: this.options || 5000
    }).post(baseURL, params)
};

AkismetClient.prototype.checkComment = require("./checkComment");

module.exports = AkismetClient;