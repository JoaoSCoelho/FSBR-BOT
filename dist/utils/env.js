"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
exports.env = {
    PREFIX: process.env.PREFIX || '!',
    OWNERS: process.env.OWNERS ? process.env.OWNERS.split(',') : [],
    TOKEN: process.env.TOKEN || '',
    MEMBER_DEFAULT_ROLE: process.env.MEMBER_DEFAULT_ROLE || '',
};
