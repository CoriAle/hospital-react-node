exports.id = "main";
exports.modules = {

/***/ "./src/controllers/hospital.controller.ts":
/*!************************************************!*\
  !*** ./src/controllers/hospital.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst hospital_1 = __importDefault(__webpack_require__(/*! ../models/hospital */ \"./src/models/hospital.ts\"));\nconst error_1 = __webpack_require__(/*! ../error */ \"./src/error.ts\");\nconst hospital_validator_1 = __importDefault(__webpack_require__(/*! ../middlewares/validators/hospital/hospital.validator */ \"./src/middlewares/validators/hospital/hospital.validator.ts\"));\nconst validators_1 = __importDefault(__webpack_require__(/*! ../middlewares/validators/validators */ \"./src/middlewares/validators/validators.ts\"));\nconst router = express_1.Router();\nrouter.post('/', hospital_validator_1.default, validators_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    console.log(req.body);\n    const { name, active_patients, max_patients, employees } = req.body;\n    try {\n        let hospital = yield hospital_1.default.findOne({ name });\n        if (hospital) {\n            const custom = new error_1.ErrorHandler(400, 'Hospital already exists');\n            error_1.handleError(custom, req, res);\n        }\n        hospital = new hospital_1.default({\n            name,\n            active_patients,\n            max_patients,\n            employees\n        });\n        yield hospital.save();\n        res.status(200).json({\n            data: { hospital },\n            msj: 'Hospital Created',\n        });\n    }\n    catch (err) {\n        console.log(err);\n        const custom = new error_1.ErrorHandler(500, 'Server Error');\n        error_1.handleError(custom, req, res);\n    }\n}));\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/controllers/hospital.controller.ts?");

/***/ }),

/***/ "./src/middlewares/validators/hospital/hospital.validator.ts":
/*!*******************************************************************!*\
  !*** ./src/middlewares/validators/hospital/hospital.validator.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nconst validations = [\n    express_validator_1.body('name').exists().withMessage('Name is required'),\n    express_validator_1.body('name').if(express_validator_1.body('name').exists()).isLength({ min: 8 }).withMessage('Name is required'),\n    express_validator_1.body('active_patients').exists().withMessage('Active patients are required'),\n    express_validator_1.body('max_patients').exists().withMessage('Max patients is required'),\n    express_validator_1.body('employees').exists().withMessage('Employees is required'),\n];\nexports.default = validations;\n\n\n//# sourceURL=webpack:///./src/middlewares/validators/hospital/hospital.validator.ts?");

/***/ }),

/***/ "./src/middlewares/validators/validators.ts":
/*!**************************************************!*\
  !*** ./src/middlewares/validators/validators.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nconst error_1 = __webpack_require__(/*! ../../error */ \"./src/error.ts\");\nconst validationHandler = (req, res, next) => {\n    //Validar errores en el request\n    const errors = express_validator_1.validationResult(req);\n    if (errors.isEmpty()) {\n        return next(); //No hay errores entonces continuar al controller\n    }\n    const err = new error_1.ErrorHandler(400, 'Invalid field');\n    error_1.handleError(err, req, res);\n};\nexports.default = vaidationHandler;\n\n\n//# sourceURL=webpack:///./src/middlewares/validators/validators.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst hospital_controller_1 = __importDefault(__webpack_require__(/*! ./controllers/hospital.controller */ \"./src/controllers/hospital.controller.ts\"));\nconst routes = (app) => {\n    app.use('/v1/hospital', hospital_controller_1.default);\n};\nexports.default = routes;\n\n\n//# sourceURL=webpack:///./src/routes.ts?");

/***/ })

};