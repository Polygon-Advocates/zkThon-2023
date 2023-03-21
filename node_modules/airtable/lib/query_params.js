"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldListRecordsParamBePassedAsParameter = exports.URL_CHARACTER_LENGTH_LIMIT = exports.paramValidators = void 0;
var typecheck_1 = __importDefault(require("./typecheck"));
var isString_1 = __importDefault(require("lodash/isString"));
var isNumber_1 = __importDefault(require("lodash/isNumber"));
var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
var isBoolean_1 = __importDefault(require("lodash/isBoolean"));
exports.paramValidators = {
    fields: typecheck_1.default(typecheck_1.default.isArrayOf(isString_1.default), 'the value for `fields` should be an array of strings'),
    filterByFormula: typecheck_1.default(isString_1.default, 'the value for `filterByFormula` should be a string'),
    maxRecords: typecheck_1.default(isNumber_1.default, 'the value for `maxRecords` should be a number'),
    pageSize: typecheck_1.default(isNumber_1.default, 'the value for `pageSize` should be a number'),
    offset: typecheck_1.default(isNumber_1.default, 'the value for `offset` should be a number'),
    sort: typecheck_1.default(typecheck_1.default.isArrayOf(function (obj) {
        return (isPlainObject_1.default(obj) &&
            isString_1.default(obj.field) &&
            (obj.direction === void 0 || ['asc', 'desc'].includes(obj.direction)));
    }), 'the value for `sort` should be an array of sort objects. ' +
        'Each sort object must have a string `field` value, and an optional ' +
        '`direction` value that is "asc" or "desc".'),
    view: typecheck_1.default(isString_1.default, 'the value for `view` should be a string'),
    cellFormat: typecheck_1.default(function (cellFormat) {
        return isString_1.default(cellFormat) && ['json', 'string'].includes(cellFormat);
    }, 'the value for `cellFormat` should be "json" or "string"'),
    timeZone: typecheck_1.default(isString_1.default, 'the value for `timeZone` should be a string'),
    userLocale: typecheck_1.default(isString_1.default, 'the value for `userLocale` should be a string'),
    method: typecheck_1.default(function (method) {
        return isString_1.default(method) && ['get', 'post'].includes(method);
    }, 'the value for `method` should be "get" or "post"'),
    returnFieldsByFieldId: typecheck_1.default(isBoolean_1.default, 'the value for `returnFieldsByFieldId` should be a boolean'),
};
exports.URL_CHARACTER_LENGTH_LIMIT = 15000;
exports.shouldListRecordsParamBePassedAsParameter = function (paramName) {
    return paramName === 'timeZone' || paramName === 'userLocale';
};
//# sourceMappingURL=query_params.js.map