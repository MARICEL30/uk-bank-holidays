"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentedControls = void 0;
const react_1 = __importDefault(require("react"));
const SegmentedControls = ({ width, height }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null, "England & Wales"),
            react_1.default.createElement("li", null, "All "))));
};
exports.SegmentedControls = SegmentedControls;
