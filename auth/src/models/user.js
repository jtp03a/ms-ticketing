"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
//An interface that describes the properties that a User Document as
inferface;
UserDoc;
mongoose_1.default.Document;
{
}
var userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.statics.build = function (attrs) {
    return new User(attrs);
};
var User = mongoose_1.default.model('User', userSchema);
exports.User = User;
