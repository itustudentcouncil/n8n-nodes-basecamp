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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Basecamp = void 0;
var name = "basecamp";
var displayName = "Basecamp";
var routes = {
    people: {
        index: "people",
        people_on_project: "projects/:id/people",
        users: "projects/:id/people/users"
    },
    projects: {
        index: "projects",
        show: "projects/:id"
    },
    uploads: {
        index: "buckets/:projectId/vaults/:vaultId/uploads",
        show: "buckets/:projectId/uploads/:uploadId",
        create: "buckets/:projectId/vaults/:vaultId/uploads",
        update: "buckets/:projectId/uploads/:uploadId",
        "delete": "buckets/:projectId/uploads/:uploadId"
    }
};
var capitalize = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
var resources = Object.keys(routes).map(function (key) { return ({
    name: capitalize(key),
    value: key
}); });
var actionToLabel = {
    index: "Get all",
    show: "Get",
    create: "Create",
    update: "Update",
    "delete": "Delete"
};
var actions = Object.keys(routes).map(function (action) {
    return createAction(action, Object.keys(routes[action]).map(function (key) { return ({
        name: actionToLabel[key],
        value: key
    }); }));
});
var Basecamp = /** @class */ (function () {
    function Basecamp() {
        this.description = {
            description: "Interact with the Basecamp API",
            name: name,
            displayName: displayName,
            icon: "file:dist/".concat(displayName, ".svg"),
            defaults: { name: displayName },
            properties: __spreadArray(__spreadArray([resourceSelector], actions, true), [idSelector, body], false),
            credentials: [
                {
                    name: "oAuth2Api",
                    required: true
                }
            ],
            version: 1,
            group: ["transform"],
            subtitle: '={{$parameter["operation"]}}',
            inputs: ["main"],
            outputs: ["main"]
        };
    }
    Basecamp.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, baseID, resource, operation, body, method, req, route, parent_id, uri, data, i, _a, body_1, link;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        baseUrl = "https://3.basecampapi.com";
                        baseID = 5278257;
                        resource = this.getNodeParameter("resource", 0);
                        operation = this.getNodeParameter("operation", 0);
                        method = "GET";
                        if (operation === "users") {
                            method = "PUT";
                            body = this.getNodeParameter("body", 0) || {};
                        }
                        req = function (uri) {
                            return _this.helpers.requestWithAuthentication.call(_this, "oAuth2Api", {
                                uri: uri,
                                method: method,
                                body: body && typeof body === "string" ? JSON.parse(body) : body,
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                resolveWithFullResponse: true,
                                json: true
                            });
                        };
                        route = routes[resource][operation];
                        // if parent id is required
                        if (route.includes(":id")) {
                            parent_id = this.getNodeParameter("parent_id", 0);
                            route = route.replace(":id", String(parent_id));
                        }
                        uri = "".concat(baseUrl, "/").concat(baseID, "/").concat(route, ".json");
                        data = [];
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < 10)) return [3 /*break*/, 4];
                        return [4 /*yield*/, req(uri)
                            // if not array
                        ];
                    case 2:
                        _a = _b.sent(), body_1 = _a.body, link = _a.headers.link;
                        // if not array
                        if (!Array.isArray(body_1)) {
                            return [2 /*return*/, [this.helpers.returnJsonArray([body_1])]];
                        }
                        data.push.apply(data, body_1);
                        if (!link)
                            return [3 /*break*/, 4];
                        uri = link.split(";")[0].replace("<", "").replace(">", "");
                        _b.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, [this.helpers.returnJsonArray(data)]];
                }
            });
        });
    };
    return Basecamp;
}());
exports.Basecamp = Basecamp;
var resourceSelector = {
    displayName: "Resource Type",
    name: "resource",
    noDataExpression: true,
    type: "options",
    "default": resources[0].value,
    options: resources
};
function createAction(resource, options) {
    return {
        displayName: "Operation",
        name: "operation",
        type: "options",
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [resource]
            }
        },
        options: options,
        "default": options[0].value
    };
}
var idSelector = {
    displayName: "ID",
    description: "",
    name: "parent_id",
    type: "number",
    required: true,
    "default": 0,
    displayOptions: {
        show: {
            operation: Object.entries(routes).flatMap(function (_a) {
                var resource = _a[0], operations = _a[1];
                return Object.keys(operations)
                    .filter(function (operation) { return operations[operation].includes(":id"); })
                    .map(function (operation) { return "".concat(operation); });
            })
        }
    }
};
var body = {
    displayName: "Body",
    description: "The body of the request",
    name: "body",
    type: "json",
    required: true,
    "default": {},
    displayOptions: {
        show: {
            operation: ["users"]
        }
    }
};
