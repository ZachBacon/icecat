"use strict";
var match = [/https?:\/\/www.break.com\/embed\/.*/];
var inject = [
    "break.js"
];
var when = "start";
exports.when = when;
exports.match = match;
exports.inject = inject;