"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserRouter = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.currentUserRouter = router;
router.get('/api/users/currentuser', function (req, res) {
    res.send('hit current user endpoint');
});
