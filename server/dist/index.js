"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
//`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.lz54k.mongodb.net/${process.env.DBNAME}retryWrites=true&w=majority`
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, mongoose_1.connect)("mongodb+srv://youtube_vet:VJq6w8eZ6nJFu0aQ@cluster0.fvcxm.mongodb.net/typescript-mongodb-restapiretryWrites=true&w=majority", () => {
            console.log('Base de datos conectada');
            app_1.default.listen(port, () => {
                console.log("http://localhost:" + port);
            });
        });
    });
}
main();
