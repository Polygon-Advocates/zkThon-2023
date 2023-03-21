"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var keys_1 = __importDefault(require("lodash/keys"));
var isBrowser = typeof window !== 'undefined';
var HttpHeaders = /** @class */ (function () {
    function HttpHeaders() {
        this._headersByLowercasedKey = {};
    }
    HttpHeaders.prototype.set = function (headerKey, headerValue) {
        var lowercasedKey = headerKey.toLowerCase();
        if (lowercasedKey === 'x-airtable-user-agent') {
            lowercasedKey = 'user-agent';
            headerKey = 'User-Agent';
        }
        this._headersByLowercasedKey[lowercasedKey] = {
            headerKey: headerKey,
            headerValue: headerValue,
        };
    };
    HttpHeaders.prototype.toJSON = function () {
        var result = {};
        for (var _i = 0, _a = keys_1.default(this._headersByLowercasedKey); _i < _a.length; _i++) {
            var lowercasedKey = _a[_i];
            var headerDefinition = this._headersByLowercasedKey[lowercasedKey];
            var headerKey = void 0;
            /* istanbul ignore next */
            if (isBrowser && lowercasedKey === 'user-agent') {
                // Some browsers do not allow overriding the user agent.
                // https://github.com/Airtable/airtable.js/issues/52
                headerKey = 'X-Airtable-User-Agent';
            }
            else {
                headerKey = headerDefinition.headerKey;
            }
            result[headerKey] = headerDefinition.headerValue;
        }
        return result;
    };
    return HttpHeaders;
}());
module.exports = HttpHeaders;
//# sourceMappingURL=http_headers.js.map