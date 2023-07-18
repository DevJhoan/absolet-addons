"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addon = exports.Event = exports.Command = void 0;
const tslib_1 = require("tslib");
const Command_1 = require("./structures/Command");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return Command_1.Command; } });
const Event_1 = require("./structures/Event");
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return Event_1.Event; } });
const Addon_1 = tslib_1.__importDefault(require("./structures/Addon"));
exports.Addon = Addon_1.default;