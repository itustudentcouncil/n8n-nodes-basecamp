"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaTypeFilter = exports.SchemaIDFilter = exports.StateFilter = exports.PhoneFilter = exports.EmailFilter = exports.UsernameFilter = exports.OrganizationIDFilter = exports.UserIDFilter = exports.NotFilter = exports.AndFilter = exports.OrFilter = exports.SearchFilter = exports.fieldNameToJSON = exports.fieldNameFromJSON = exports.FieldName = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v3alpha/object.js");
const user_js_1 = require("./user.js");
exports.protobufPackage = "zitadel.resources.user.v3alpha";
var FieldName;
(function (FieldName) {
    FieldName[FieldName["FIELD_NAME_UNSPECIFIED"] = 0] = "FIELD_NAME_UNSPECIFIED";
    FieldName[FieldName["FIELD_NAME_ID"] = 1] = "FIELD_NAME_ID";
    FieldName[FieldName["FIELD_NAME_CREATION_DATE"] = 2] = "FIELD_NAME_CREATION_DATE";
    FieldName[FieldName["FIELD_NAME_CHANGE_DATE"] = 3] = "FIELD_NAME_CHANGE_DATE";
    FieldName[FieldName["FIELD_NAME_EMAIL"] = 4] = "FIELD_NAME_EMAIL";
    FieldName[FieldName["FIELD_NAME_PHONE"] = 5] = "FIELD_NAME_PHONE";
    FieldName[FieldName["FIELD_NAME_STATE"] = 6] = "FIELD_NAME_STATE";
    FieldName[FieldName["FIELD_NAME_SCHEMA_ID"] = 7] = "FIELD_NAME_SCHEMA_ID";
    FieldName[FieldName["FIELD_NAME_SCHEMA_TYPE"] = 8] = "FIELD_NAME_SCHEMA_TYPE";
    FieldName[FieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldName = exports.FieldName || (exports.FieldName = {}));
function fieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "FIELD_NAME_UNSPECIFIED":
            return FieldName.FIELD_NAME_UNSPECIFIED;
        case 1:
        case "FIELD_NAME_ID":
            return FieldName.FIELD_NAME_ID;
        case 2:
        case "FIELD_NAME_CREATION_DATE":
            return FieldName.FIELD_NAME_CREATION_DATE;
        case 3:
        case "FIELD_NAME_CHANGE_DATE":
            return FieldName.FIELD_NAME_CHANGE_DATE;
        case 4:
        case "FIELD_NAME_EMAIL":
            return FieldName.FIELD_NAME_EMAIL;
        case 5:
        case "FIELD_NAME_PHONE":
            return FieldName.FIELD_NAME_PHONE;
        case 6:
        case "FIELD_NAME_STATE":
            return FieldName.FIELD_NAME_STATE;
        case 7:
        case "FIELD_NAME_SCHEMA_ID":
            return FieldName.FIELD_NAME_SCHEMA_ID;
        case 8:
        case "FIELD_NAME_SCHEMA_TYPE":
            return FieldName.FIELD_NAME_SCHEMA_TYPE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldName.UNRECOGNIZED;
    }
}
exports.fieldNameFromJSON = fieldNameFromJSON;
function fieldNameToJSON(object) {
    switch (object) {
        case FieldName.FIELD_NAME_UNSPECIFIED:
            return "FIELD_NAME_UNSPECIFIED";
        case FieldName.FIELD_NAME_ID:
            return "FIELD_NAME_ID";
        case FieldName.FIELD_NAME_CREATION_DATE:
            return "FIELD_NAME_CREATION_DATE";
        case FieldName.FIELD_NAME_CHANGE_DATE:
            return "FIELD_NAME_CHANGE_DATE";
        case FieldName.FIELD_NAME_EMAIL:
            return "FIELD_NAME_EMAIL";
        case FieldName.FIELD_NAME_PHONE:
            return "FIELD_NAME_PHONE";
        case FieldName.FIELD_NAME_STATE:
            return "FIELD_NAME_STATE";
        case FieldName.FIELD_NAME_SCHEMA_ID:
            return "FIELD_NAME_SCHEMA_ID";
        case FieldName.FIELD_NAME_SCHEMA_TYPE:
            return "FIELD_NAME_SCHEMA_TYPE";
        case FieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldNameToJSON = fieldNameToJSON;
function createBaseSearchFilter() {
    return {
        orFilter: undefined,
        andFilter: undefined,
        notFilter: undefined,
        userIdFilter: undefined,
        organizationIdFilter: undefined,
        usernameFilter: undefined,
        emailFilter: undefined,
        phoneFilter: undefined,
        stateFilter: undefined,
        schemaIdFilter: undefined,
        schemaTypeFilter: undefined,
    };
}
exports.SearchFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orFilter !== undefined) {
            exports.OrFilter.encode(message.orFilter, writer.uint32(10).fork()).join();
        }
        if (message.andFilter !== undefined) {
            exports.AndFilter.encode(message.andFilter, writer.uint32(18).fork()).join();
        }
        if (message.notFilter !== undefined) {
            exports.NotFilter.encode(message.notFilter, writer.uint32(26).fork()).join();
        }
        if (message.userIdFilter !== undefined) {
            exports.UserIDFilter.encode(message.userIdFilter, writer.uint32(34).fork()).join();
        }
        if (message.organizationIdFilter !== undefined) {
            exports.OrganizationIDFilter.encode(message.organizationIdFilter, writer.uint32(42).fork()).join();
        }
        if (message.usernameFilter !== undefined) {
            exports.UsernameFilter.encode(message.usernameFilter, writer.uint32(50).fork()).join();
        }
        if (message.emailFilter !== undefined) {
            exports.EmailFilter.encode(message.emailFilter, writer.uint32(58).fork()).join();
        }
        if (message.phoneFilter !== undefined) {
            exports.PhoneFilter.encode(message.phoneFilter, writer.uint32(66).fork()).join();
        }
        if (message.stateFilter !== undefined) {
            exports.StateFilter.encode(message.stateFilter, writer.uint32(74).fork()).join();
        }
        if (message.schemaIdFilter !== undefined) {
            exports.SchemaIDFilter.encode(message.schemaIdFilter, writer.uint32(82).fork()).join();
        }
        if (message.schemaTypeFilter !== undefined) {
            exports.SchemaTypeFilter.encode(message.schemaTypeFilter, writer.uint32(90).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orFilter = exports.OrFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.andFilter = exports.AndFilter.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.notFilter = exports.NotFilter.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userIdFilter = exports.UserIDFilter.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.organizationIdFilter = exports.OrganizationIDFilter.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.usernameFilter = exports.UsernameFilter.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.emailFilter = exports.EmailFilter.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.phoneFilter = exports.PhoneFilter.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.stateFilter = exports.StateFilter.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.schemaIdFilter = exports.SchemaIDFilter.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.schemaTypeFilter = exports.SchemaTypeFilter.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orFilter: isSet(object.orFilter) ? exports.OrFilter.fromJSON(object.orFilter) : undefined,
            andFilter: isSet(object.andFilter) ? exports.AndFilter.fromJSON(object.andFilter) : undefined,
            notFilter: isSet(object.notFilter) ? exports.NotFilter.fromJSON(object.notFilter) : undefined,
            userIdFilter: isSet(object.userIdFilter) ? exports.UserIDFilter.fromJSON(object.userIdFilter) : undefined,
            organizationIdFilter: isSet(object.organizationIdFilter)
                ? exports.OrganizationIDFilter.fromJSON(object.organizationIdFilter)
                : undefined,
            usernameFilter: isSet(object.usernameFilter) ? exports.UsernameFilter.fromJSON(object.usernameFilter) : undefined,
            emailFilter: isSet(object.emailFilter) ? exports.EmailFilter.fromJSON(object.emailFilter) : undefined,
            phoneFilter: isSet(object.phoneFilter) ? exports.PhoneFilter.fromJSON(object.phoneFilter) : undefined,
            stateFilter: isSet(object.stateFilter) ? exports.StateFilter.fromJSON(object.stateFilter) : undefined,
            schemaIdFilter: isSet(object.schemaIdFilter) ? exports.SchemaIDFilter.fromJSON(object.schemaIdFilter) : undefined,
            schemaTypeFilter: isSet(object.schemaTypeFilter) ? exports.SchemaTypeFilter.fromJSON(object.schemaTypeFilter) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orFilter !== undefined) {
            obj.orFilter = exports.OrFilter.toJSON(message.orFilter);
        }
        if (message.andFilter !== undefined) {
            obj.andFilter = exports.AndFilter.toJSON(message.andFilter);
        }
        if (message.notFilter !== undefined) {
            obj.notFilter = exports.NotFilter.toJSON(message.notFilter);
        }
        if (message.userIdFilter !== undefined) {
            obj.userIdFilter = exports.UserIDFilter.toJSON(message.userIdFilter);
        }
        if (message.organizationIdFilter !== undefined) {
            obj.organizationIdFilter = exports.OrganizationIDFilter.toJSON(message.organizationIdFilter);
        }
        if (message.usernameFilter !== undefined) {
            obj.usernameFilter = exports.UsernameFilter.toJSON(message.usernameFilter);
        }
        if (message.emailFilter !== undefined) {
            obj.emailFilter = exports.EmailFilter.toJSON(message.emailFilter);
        }
        if (message.phoneFilter !== undefined) {
            obj.phoneFilter = exports.PhoneFilter.toJSON(message.phoneFilter);
        }
        if (message.stateFilter !== undefined) {
            obj.stateFilter = exports.StateFilter.toJSON(message.stateFilter);
        }
        if (message.schemaIdFilter !== undefined) {
            obj.schemaIdFilter = exports.SchemaIDFilter.toJSON(message.schemaIdFilter);
        }
        if (message.schemaTypeFilter !== undefined) {
            obj.schemaTypeFilter = exports.SchemaTypeFilter.toJSON(message.schemaTypeFilter);
        }
        return obj;
    },
    create(base) {
        return exports.SearchFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSearchFilter();
        message.orFilter = (object.orFilter !== undefined && object.orFilter !== null)
            ? exports.OrFilter.fromPartial(object.orFilter)
            : undefined;
        message.andFilter = (object.andFilter !== undefined && object.andFilter !== null)
            ? exports.AndFilter.fromPartial(object.andFilter)
            : undefined;
        message.notFilter = (object.notFilter !== undefined && object.notFilter !== null)
            ? exports.NotFilter.fromPartial(object.notFilter)
            : undefined;
        message.userIdFilter = (object.userIdFilter !== undefined && object.userIdFilter !== null)
            ? exports.UserIDFilter.fromPartial(object.userIdFilter)
            : undefined;
        message.organizationIdFilter = (object.organizationIdFilter !== undefined && object.organizationIdFilter !== null)
            ? exports.OrganizationIDFilter.fromPartial(object.organizationIdFilter)
            : undefined;
        message.usernameFilter = (object.usernameFilter !== undefined && object.usernameFilter !== null)
            ? exports.UsernameFilter.fromPartial(object.usernameFilter)
            : undefined;
        message.emailFilter = (object.emailFilter !== undefined && object.emailFilter !== null)
            ? exports.EmailFilter.fromPartial(object.emailFilter)
            : undefined;
        message.phoneFilter = (object.phoneFilter !== undefined && object.phoneFilter !== null)
            ? exports.PhoneFilter.fromPartial(object.phoneFilter)
            : undefined;
        message.stateFilter = (object.stateFilter !== undefined && object.stateFilter !== null)
            ? exports.StateFilter.fromPartial(object.stateFilter)
            : undefined;
        message.schemaIdFilter = (object.schemaIdFilter !== undefined && object.schemaIdFilter !== null)
            ? exports.SchemaIDFilter.fromPartial(object.schemaIdFilter)
            : undefined;
        message.schemaTypeFilter = (object.schemaTypeFilter !== undefined && object.schemaTypeFilter !== null)
            ? exports.SchemaTypeFilter.fromPartial(object.schemaTypeFilter)
            : undefined;
        return message;
    },
};
function createBaseOrFilter() {
    return { queries: [] };
}
exports.OrFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.queries) {
            exports.SearchFilter.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchFilter.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            queries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.queries)
                ? object.queries.map((e) => exports.SearchFilter.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.queries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.queries = message.queries.map((e) => exports.SearchFilter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.OrFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrFilter();
        message.queries = ((_a = object.queries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SearchFilter.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAndFilter() {
    return { queries: [] };
}
exports.AndFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.queries) {
            exports.SearchFilter.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchFilter.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            queries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.queries)
                ? object.queries.map((e) => exports.SearchFilter.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.queries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.queries = message.queries.map((e) => exports.SearchFilter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.AndFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAndFilter();
        message.queries = ((_a = object.queries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SearchFilter.fromPartial(e))) || [];
        return message;
    },
};
function createBaseNotFilter() {
    return { query: undefined };
}
exports.NotFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.query !== undefined) {
            exports.SearchFilter.encode(message.query, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = exports.SearchFilter.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { query: isSet(object.query) ? exports.SearchFilter.fromJSON(object.query) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.query !== undefined) {
            obj.query = exports.SearchFilter.toJSON(message.query);
        }
        return obj;
    },
    create(base) {
        return exports.NotFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseNotFilter();
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.SearchFilter.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseUserIDFilter() {
    return { id: "", method: 0 };
}
exports.UserIDFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserIDFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            method: isSet(object.method) ? (0, object_js_1.textFilterMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textFilterMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserIDFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserIDFilter();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseOrganizationIDFilter() {
    return { id: "", method: 0 };
}
exports.OrganizationIDFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganizationIDFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            method: isSet(object.method) ? (0, object_js_1.textFilterMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textFilterMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.OrganizationIDFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrganizationIDFilter();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUsernameFilter() {
    return { username: "", method: 0, isOrganizationSpecific: false };
}
exports.UsernameFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        if (message.isOrganizationSpecific !== false) {
            writer.uint32(24).bool(message.isOrganizationSpecific);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUsernameFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isOrganizationSpecific = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            method: isSet(object.method) ? (0, object_js_1.textFilterMethodFromJSON)(object.method) : 0,
            isOrganizationSpecific: isSet(object.isOrganizationSpecific)
                ? globalThis.Boolean(object.isOrganizationSpecific)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textFilterMethodToJSON)(message.method);
        }
        if (message.isOrganizationSpecific !== false) {
            obj.isOrganizationSpecific = message.isOrganizationSpecific;
        }
        return obj;
    },
    create(base) {
        return exports.UsernameFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUsernameFilter();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        message.isOrganizationSpecific = (_c = object.isOrganizationSpecific) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseEmailFilter() {
    return { address: "", method: 0 };
}
exports.EmailFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? globalThis.String(object.address) : "",
            method: isSet(object.method) ? (0, object_js_1.textFilterMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textFilterMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.EmailFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEmailFilter();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePhoneFilter() {
    return { number: "", method: 0 };
}
exports.PhoneFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.number !== "") {
            writer.uint32(10).string(message.number);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePhoneFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.number = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            number: isSet(object.number) ? globalThis.String(object.number) : "",
            method: isSet(object.method) ? (0, object_js_1.textFilterMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== "") {
            obj.number = message.number;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textFilterMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.PhoneFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePhoneFilter();
        message.number = (_a = object.number) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseStateFilter() {
    return { state: 0 };
}
exports.StateFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { state: isSet(object.state) ? (0, user_js_1.stateFromJSON)(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = (0, user_js_1.stateToJSON)(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.StateFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStateFilter();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseSchemaIDFilter() {
    return { id: "" };
}
exports.SchemaIDFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSchemaIDFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.SchemaIDFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSchemaIDFilter();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSchemaTypeFilter() {
    return { type: "", method: 0 };
}
exports.SchemaTypeFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSchemaTypeFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            method: isSet(object.method) ? (0, object_js_1.textFilterMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textFilterMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.SchemaTypeFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSchemaTypeFilter();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map