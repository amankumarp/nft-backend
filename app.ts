const express = require('express');
const nftRouter = require('./router/nftRouter');
const server = express();

server.use('/nft', nftRouter);
module.exports = server;
