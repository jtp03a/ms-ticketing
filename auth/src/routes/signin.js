"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinRouter = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.signinRouter = router;
router.post('/api/users/signin', function (req, res) {
    res.send('hit signin endpoint');
});
