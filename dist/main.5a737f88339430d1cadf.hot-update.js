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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config_1 = __importDefault(__webpack_require__(/*! config */ \"config\"));\nconst app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nconst db_1 = __importDefault(__webpack_require__(/*! ./repositories/db */ \"./src/repositories/db.ts\"));\nlet port = config_1.default.get('port'); // lo que estè en el archivo de config, dependiento del environment\nif (config_1.default.util.getEnv('NODE_ENV') === 'production') {\n    port = process.env.PORT;\n}\nif (!port) {\n    process.exit(1);\n}\nconsole.log('hola');\nconst PORT = parseInt(port, 10);\nconst db_connection = new db_1.default();\ndb_connection.connect_db();\nconst server = app_1.default.listen(PORT, () => {\n    console.log(`Listening on port ${PORT}`);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/repositories/db.ts":
/*!********************************!*\
  !*** ./src/repositories/db.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst config_1 = __importDefault(__webpack_require__(/*! config */ \"config\"));\nconst data_base = config_1.default.get('data_base');\nclass DB_Connection {\n    constructor() {\n        this.connect_db = () => __awaiter(this, void 0, void 0, function* () {\n            try {\n                yield mongoose_1.default.connect(data_base.mongo_uri, {\n                    useNewUrlParser: true,\n                    useCreateIndex: true,\n                    useFindAndModify: true,\n                    useUnifiedTopology: true // Monitorieo\n                });\n                console.log('Mongo Connected');\n            }\n            catch (err) {\n                console.log(err);\n                process.exit();\n            }\n        });\n    }\n}\nexports.default = DB_Connection;\n\n\n//# sourceURL=webpack:///./src/repositories/db.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//import health_controller from './controllers/health.controller';\nconst routes = (app) => {\n    //app.use('/v1/health', health_controller);\n};\nexports.default = routes;\n\n\n//# sourceURL=webpack:///./src/routes.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"config\");\n\n//# sourceURL=webpack:///external_%22config%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

};