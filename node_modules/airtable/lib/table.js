"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
var deprecate_1 = __importDefault(require("./deprecate"));
var query_1 = __importDefault(require("./query"));
var query_params_1 = require("./query_params");
var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
var record_1 = __importDefault(require("./record"));
var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
var Table = /** @class */ (function () {
    function Table(base, tableId, tableName) {
        if (!tableId && !tableName) {
            throw new Error('Table name or table ID is required');
        }
        this._base = base;
        this.id = tableId;
        this.name = tableName;
        // Public API
        this.find = callback_to_promise_1.default(this._findRecordById, this);
        this.select = this._selectRecords.bind(this);
        this.create = callback_to_promise_1.default(this._createRecords, this);
        this.update = callback_to_promise_1.default(this._updateRecords.bind(this, false), this);
        this.replace = callback_to_promise_1.default(this._updateRecords.bind(this, true), this);
        this.destroy = callback_to_promise_1.default(this._destroyRecord, this);
        // Deprecated API
        this.list = deprecate_1.default(this._listRecords.bind(this), 'table.list', 'Airtable: `list()` is deprecated. Use `select()` instead.');
        this.forEach = deprecate_1.default(this._forEachRecord.bind(this), 'table.forEach', 'Airtable: `forEach()` is deprecated. Use `select()` instead.');
    }
    Table.prototype._findRecordById = function (recordId, done) {
        var record = new record_1.default(this, recordId);
        record.fetch(done);
    };
    Table.prototype._selectRecords = function (params) {
        if (params === void 0) {
            params = {};
        }
        if (arguments.length > 1) {
            console.warn("Airtable: `select` takes only one parameter, but it was given " + arguments.length + " parameters. Use `eachPage` or `firstPage` to fetch records.");
        }
        if (isPlainObject_1.default(params)) {
            var validationResults = query_1.default.validateParams(params);
            if (validationResults.errors.length) {
                var formattedErrors = validationResults.errors.map(function (error) {
                    return "  * " + error;
                });
                throw new Error("Airtable: invalid parameters for `select`:\n" + formattedErrors.join('\n'));
            }
            if (validationResults.ignoredKeys.length) {
                console.warn("Airtable: the following parameters to `select` will be ignored: " + validationResults.ignoredKeys.join(', '));
            }
            return new query_1.default(this, validationResults.validParams);
        }
        else {
            throw new Error('Airtable: the parameter for `select` should be a plain object or undefined.');
        }
    };
    Table.prototype._urlEncodedNameOrId = function () {
        return this.id || encodeURIComponent(this.name);
    };
    Table.prototype._createRecords = function (recordsData, optionalParameters, done) {
        var _this = this;
        var isCreatingMultipleRecords = Array.isArray(recordsData);
        if (!done) {
            done = optionalParameters;
            optionalParameters = {};
        }
        var requestData;
        if (isCreatingMultipleRecords) {
            requestData = __assign({ records: recordsData }, optionalParameters);
        }
        else {
            requestData = __assign({ fields: recordsData }, optionalParameters);
        }
        this._base.runAction('post', "/" + this._urlEncodedNameOrId() + "/", {}, requestData, function (err, resp, body) {
            if (err) {
                done(err);
                return;
            }
            var result;
            if (isCreatingMultipleRecords) {
                result = body.records.map(function (record) {
                    return new record_1.default(_this, record.id, record);
                });
            }
            else {
                result = new record_1.default(_this, body.id, body);
            }
            done(null, result);
        });
    };
    Table.prototype._updateRecords = function (isDestructiveUpdate, recordsDataOrRecordId, recordDataOrOptsOrDone, optsOrDone, done) {
        var _this = this;
        var opts;
        if (Array.isArray(recordsDataOrRecordId)) {
            var recordsData = recordsDataOrRecordId;
            opts = isPlainObject_1.default(recordDataOrOptsOrDone) ? recordDataOrOptsOrDone : {};
            done = (optsOrDone || recordDataOrOptsOrDone);
            var method = isDestructiveUpdate ? 'put' : 'patch';
            var requestData = __assign({ records: recordsData }, opts);
            this._base.runAction(method, "/" + this._urlEncodedNameOrId() + "/", {}, requestData, function (err, resp, body) {
                if (err) {
                    done(err);
                    return;
                }
                var result = body.records.map(function (record) {
                    return new record_1.default(_this, record.id, record);
                });
                done(null, result);
            });
        }
        else {
            var recordId = recordsDataOrRecordId;
            var recordData = recordDataOrOptsOrDone;
            opts = isPlainObject_1.default(optsOrDone) ? optsOrDone : {};
            done = (done || optsOrDone);
            var record = new record_1.default(this, recordId);
            if (isDestructiveUpdate) {
                record.putUpdate(recordData, opts, done);
            }
            else {
                record.patchUpdate(recordData, opts, done);
            }
        }
    };
    Table.prototype._destroyRecord = function (recordIdsOrId, done) {
        var _this = this;
        if (Array.isArray(recordIdsOrId)) {
            var queryParams = { records: recordIdsOrId };
            this._base.runAction('delete', "/" + this._urlEncodedNameOrId(), queryParams, null, function (err, response, results) {
                if (err) {
                    done(err);
                    return;
                }
                var records = results.records.map(function (_a) {
                    var id = _a.id;
                    return new record_1.default(_this, id, null);
                });
                done(null, records);
            });
        }
        else {
            var record = new record_1.default(this, recordIdsOrId);
            record.destroy(done);
        }
    };
    Table.prototype._listRecords = function (pageSize, offset, opts, done) {
        var _this = this;
        if (!done) {
            done = opts;
            opts = {};
        }
        var pathAndParamsAsString = "/" + this._urlEncodedNameOrId() + "?" + object_to_query_param_string_1.default(opts);
        var path;
        var listRecordsParameters = {};
        var listRecordsData = null;
        var method;
        if ((typeof opts !== 'function' && opts.method === 'post') ||
            pathAndParamsAsString.length > query_params_1.URL_CHARACTER_LENGTH_LIMIT) {
            // // There is a 16kb limit on GET requests. Since the URL makes up nearly all of the request size, we check for any requests that
            // that come close to this limit and send it as a POST instead. Additionally, we'll send the request as a post if it is specified
            // with the request params
            path = "/" + this._urlEncodedNameOrId() + "/listRecords";
            listRecordsData = __assign(__assign({}, (pageSize && { pageSize: pageSize })), (offset && { offset: offset }));
            method = 'post';
            var paramNames = Object.keys(opts);
            for (var _i = 0, paramNames_1 = paramNames; _i < paramNames_1.length; _i++) {
                var paramName = paramNames_1[_i];
                if (query_params_1.shouldListRecordsParamBePassedAsParameter(paramName)) {
                    listRecordsParameters[paramName] = opts[paramName];
                }
                else {
                    listRecordsData[paramName] = opts[paramName];
                }
            }
        }
        else {
            method = 'get';
            path = "/" + this._urlEncodedNameOrId() + "/";
            listRecordsParameters = __assign({ limit: pageSize, offset: offset }, opts);
        }
        this._base.runAction(method, path, listRecordsParameters, listRecordsData, function (err, response, results) {
            if (err) {
                done(err);
                return;
            }
            var records = results.records.map(function (recordJson) {
                return new record_1.default(_this, null, recordJson);
            });
            done(null, records, results.offset);
        });
    };
    Table.prototype._forEachRecord = function (opts, callback, done) {
        var _this = this;
        if (arguments.length === 2) {
            done = callback;
            callback = opts;
            opts = {};
        }
        var limit = Table.__recordsPerPageForIteration || 100;
        var offset = null;
        var nextPage = function () {
            _this._listRecords(limit, offset, opts, function (err, page, newOffset) {
                if (err) {
                    done(err);
                    return;
                }
                for (var index = 0; index < page.length; index++) {
                    callback(page[index]);
                }
                if (newOffset) {
                    offset = newOffset;
                    nextPage();
                }
                else {
                    done();
                }
            });
        };
        nextPage();
    };
    return Table;
}());
module.exports = Table;
//# sourceMappingURL=table.js.map