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
exports.generateTheme = void 0;
const vscode_1 = require("vscode");
const Theme_1 = require("./Theme");
const defaultConfig_json_1 = __importDefault(require("../defaultConfig.json"));
const colorObjArr_1 = __importDefault(require("../utils/colorObjArr"));
exports.generateTheme = {
    default() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Theme_1.Theme.init(defaultConfig_json_1.default);
        });
    },
    fromSettings(themeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const configuration = vscode_1.workspace.getConfiguration('oneDarkPro');
            const colorObj = {};
            colorObjArr_1.default.forEach((item) => {
                const value = configuration.get('color')[item];
                if (value) {
                    colorObj[item] = value;
                }
            });
            const buildConfig = Object.assign({ bold: configuration.get('bold', defaultConfig_json_1.default.bold), editorTheme: themeName ||
                    configuration.get('editorTheme', defaultConfig_json_1.default.editorTheme), italic: configuration.get('italic', defaultConfig_json_1.default.italic), vivid: configuration.get('vivid', defaultConfig_json_1.default.vivid) }, colorObj);
            return yield Theme_1.Theme.init(buildConfig);
        });
    },
};
//# sourceMappingURL=generator.js.map