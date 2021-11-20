"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: 'prod.env',
});
exports.env = {
    PREFIX: process.env.PREFIX || '!',
    OWNERS: process.env.OWNERS ? process.env.OWNERS.split(',') : [],
    TOKEN: process.env.TOKEN || '',
    MEMBER_DEFAULT_ROLE: process.env.MEMBER_DEFAULT_ROLE || '',
};
