exports.id = "main";
exports.modules = {

/***/ "./src/controllers/hospital.controller.ts":
/*!************************************************!*\
  !*** ./src/controllers/hospital.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst hospital_1 = __importDefault(__webpack_require__(/*! ../models/hospital */ \"./src/models/hospital.ts\"));\nconst error_1 = __webpack_require__(/*! ../error */ \"./src/error.ts\");\nconst router = express_1.Router();\nrouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    console.log(req.body);\n    const { name, pacientes_activos, maximo_pacientes, personal } = req.body;\n    try {\n        let hospital = yield hospital_1.default.findOne({ name });\n        if (hospital) {\n            const custom = new error_1.ErrorHandler(400, 'Hospital already exists');\n            error_1.handleError(custom, req, res);\n        }\n        hospital = new hospital_1.default({\n            name,\n            pacientes_activos,\n            maximo_pacientes,\n            personal\n        });\n        yield hospital.save();\n        res.status(200).json({\n            data: { hospital },\n            msj: 'Hospital Created',\n        });\n    }\n    catch (err) {\n        console.log(err);\n        const custom = new error_1.ErrorHandler(500, 'Server Error');\n        error_1.handleError(custom, req, res);\n    }\n}));\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/controllers/hospital.controller.ts?");

/***/ }),

/***/ "./src/models/hospital.ts":
/*!********************************!*\
  !*** ./src/models/hospital.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst HospitalSchema = new mongoose_1.Schema({\n    name: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    active_patients: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    max_patients: {\n        type: Number,\n        required: true\n    },\n    employees: {\n        type: Number,\n        required: true\n    }\n}, { timestamps: true });\nexports.default = mongoose_1.model('Hospital', HospitalSchema);\n\n\n//# sourceURL=webpack:///./src/models/hospital.ts?");

/***/ })

};