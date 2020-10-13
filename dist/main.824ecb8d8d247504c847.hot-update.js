exports.id = "main";
exports.modules = {

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes.ts\"));\nconst app = express_1.default(); // Inicializar express (mòdulo de node para restful)\napp.use(helmet_1.default()); // BodyParser \napp.use(body_parser_1.default.json()); // body en json para post, put y patch\napp.use(body_parser_1.default.urlencoded({ extended: true })); //\napp.use(cors_1.default()); //\napp.use(express_1.default.json()); //parsear los response a formato json\nroutes_1.default(app);\nexports.default = app;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/controllers/hospital.controller.ts":
/*!************************************************!*\
  !*** ./src/controllers/hospital.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst hospital_1 = __importDefault(__webpack_require__(/*! ../models/hospital */ \"./src/models/hospital.ts\"));\nconst error_1 = __webpack_require__(/*! ../error */ \"./src/error.ts\");\nconst router = express_1.Router();\nrouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    console.log(req.body);\n    const { name, pacientes_activos, maximo_pacientes, personal } = req.body;\n    try {\n        let hospital = yield hospital_1.default.findOne({ name });\n        if (hospital) {\n            const custom = new error_1.ErrorHandler(400, 'Hospital already exists');\n            error_1.handleError(custom, req, res);\n        }\n        hospital = new hospital_1.default({\n            name,\n            pacientes_activos,\n            maximo_pacientes,\n            personal\n        });\n        yield hospital.save();\n        res.status(200).json({\n            data: hospital,\n            msj: 'Hospital Created',\n        });\n    }\n    catch (err) {\n        console.log(err);\n        const custom = new error_1.ErrorHandler(500, 'Server Error');\n        error_1.handleError(custom, req, res);\n    }\n}));\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/controllers/hospital.controller.ts?");

/***/ }),

/***/ "./src/error.ts":
/*!**********************!*\
  !*** ./src/error.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.handleError = exports.ErrorHandler = void 0;\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nclass ErrorHandler extends Error {\n    constructor(statusCode, message) {\n        super();\n        this.statusCode = 0;\n        this.statusCode = statusCode;\n        this.message = message; //Hereado de error\n    }\n}\nexports.ErrorHandler = ErrorHandler;\nexports.handleError = (err, req, res) => {\n    const { statusCode, message } = err;\n    const errors = express_validator_1.validationResult(req);\n    res.status(statusCode).json({\n        status: err.name,\n        statusCode,\n        message,\n        errors: !errors.isEmpty() ? errors.array() : null,\n    });\n};\n\n\n//# sourceURL=webpack:///./src/error.ts?");

/***/ }),

/***/ "./src/models/hospital.ts":
/*!********************************!*\
  !*** ./src/models/hospital.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst HospitalSchema = new mongoose_1.Schema({\n    name: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    pacientes_activos: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    maximo_pacientes: {\n        type: Number,\n        required: true\n    },\n    personal: {\n        type: Number,\n        required: true\n    }\n}, { timestamps: true });\nexports.default = mongoose_1.model('Hospital', HospitalSchema);\n\n\n//# sourceURL=webpack:///./src/models/hospital.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst hospital_controller_1 = __importDefault(__webpack_require__(/*! ./controllers/hospital.controller */ \"./src/controllers/hospital.controller.ts\"));\nconst routes = (app) => {\n    app.use('/v1/hospital', hospital_controller_1.default);\n};\nexports.default = routes;\n\n\n//# sourceURL=webpack:///./src/routes.ts?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ })

};