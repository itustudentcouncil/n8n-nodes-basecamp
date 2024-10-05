"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateFilter = exports.TypeFilter = exports.IDFilter = exports.NotFilter = exports.AndFilter = exports.OrFilter = exports.SearchFilter = exports.PatchUserSchema = exports.UserSchema = exports.GetUserSchema = exports.authenticatorTypeToJSON = exports.authenticatorTypeFromJSON = exports.AuthenticatorType = exports.stateToJSON = exports.stateFromJSON = exports.State = exports.fieldNameToJSON = exports.fieldNameFromJSON = exports.FieldName = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const struct_js_1 = require("../../../../google/protobuf/struct.js");
const object_js_1 = require("../../object/v3alpha/object.js");
exports.protobufPackage = "zitadel.resources.userschema.v3alpha";
var FieldName;
(function (FieldName) {
    FieldName[FieldName["FIELD_NAME_UNSPECIFIED"] = 0] = "FIELD_NAME_UNSPECIFIED";
    FieldName[FieldName["FIELD_NAME_TYPE"] = 1] = "FIELD_NAME_TYPE";
    FieldName[FieldName["FIELD_NAME_STATE"] = 2] = "FIELD_NAME_STATE";
    FieldName[FieldName["FIELD_NAME_REVISION"] = 3] = "FIELD_NAME_REVISION";
    FieldName[FieldName["FIELD_NAME_CHANGE_DATE"] = 4] = "FIELD_NAME_CHANGE_DATE";
    FieldName[FieldName["FIELD_NAME_CREATION_DATE"] = 5] = "FIELD_NAME_CREATION_DATE";
    FieldName[FieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldName = exports.FieldName || (exports.FieldName = {}));
function fieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "FIELD_NAME_UNSPECIFIED":
            return FieldName.FIELD_NAME_UNSPECIFIED;
        case 1:
        case "FIELD_NAME_TYPE":
            return FieldName.FIELD_NAME_TYPE;
        case 2:
        case "FIELD_NAME_STATE":
            return FieldName.FIELD_NAME_STATE;
        case 3:
        case "FIELD_NAME_REVISION":
            return FieldName.FIELD_NAME_REVISION;
        case 4:
        case "FIELD_NAME_CHANGE_DATE":
            return FieldName.FIELD_NAME_CHANGE_DATE;
        case 5:
        case "FIELD_NAME_CREATION_DATE":
            return FieldName.FIELD_NAME_CREATION_DATE;
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
        case FieldName.FIELD_NAME_TYPE:
            return "FIELD_NAME_TYPE";
        case FieldName.FIELD_NAME_STATE:
            return "FIELD_NAME_STATE";
        case FieldName.FIELD_NAME_REVISION:
            return "FIELD_NAME_REVISION";
        case FieldName.FIELD_NAME_CHANGE_DATE:
            return "FIELD_NAME_CHANGE_DATE";
        case FieldName.FIELD_NAME_CREATION_DATE:
            return "FIELD_NAME_CREATION_DATE";
        case FieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldNameToJSON = fieldNameToJSON;
var State;
(function (State) {
    State[State["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    State[State["STATE_ACTIVE"] = 1] = "STATE_ACTIVE";
    State[State["STATE_INACTIVE"] = 2] = "STATE_INACTIVE";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State = exports.State || (exports.State = {}));
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNSPECIFIED":
            return State.STATE_UNSPECIFIED;
        case 1:
        case "STATE_ACTIVE":
            return State.STATE_ACTIVE;
        case 2:
        case "STATE_INACTIVE":
            return State.STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNSPECIFIED:
            return "STATE_UNSPECIFIED";
        case State.STATE_ACTIVE:
            return "STATE_ACTIVE";
        case State.STATE_INACTIVE:
            return "STATE_INACTIVE";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.stateToJSON = stateToJSON;
var AuthenticatorType;
(function (AuthenticatorType) {
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_UNSPECIFIED"] = 0] = "AUTHENTICATOR_TYPE_UNSPECIFIED";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_USERNAME"] = 1] = "AUTHENTICATOR_TYPE_USERNAME";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_PASSWORD"] = 2] = "AUTHENTICATOR_TYPE_PASSWORD";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_WEBAUTHN"] = 3] = "AUTHENTICATOR_TYPE_WEBAUTHN";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_TOTP"] = 4] = "AUTHENTICATOR_TYPE_TOTP";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_OTP_EMAIL"] = 5] = "AUTHENTICATOR_TYPE_OTP_EMAIL";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_OTP_SMS"] = 6] = "AUTHENTICATOR_TYPE_OTP_SMS";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_AUTHENTICATION_KEY"] = 7] = "AUTHENTICATOR_TYPE_AUTHENTICATION_KEY";
    AuthenticatorType[AuthenticatorType["AUTHENTICATOR_TYPE_IDENTITY_PROVIDER"] = 8] = "AUTHENTICATOR_TYPE_IDENTITY_PROVIDER";
    AuthenticatorType[AuthenticatorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthenticatorType = exports.AuthenticatorType || (exports.AuthenticatorType = {}));
function authenticatorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHENTICATOR_TYPE_UNSPECIFIED":
            return AuthenticatorType.AUTHENTICATOR_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHENTICATOR_TYPE_USERNAME":
            return AuthenticatorType.AUTHENTICATOR_TYPE_USERNAME;
        case 2:
        case "AUTHENTICATOR_TYPE_PASSWORD":
            return AuthenticatorType.AUTHENTICATOR_TYPE_PASSWORD;
        case 3:
        case "AUTHENTICATOR_TYPE_WEBAUTHN":
            return AuthenticatorType.AUTHENTICATOR_TYPE_WEBAUTHN;
        case 4:
        case "AUTHENTICATOR_TYPE_TOTP":
            return AuthenticatorType.AUTHENTICATOR_TYPE_TOTP;
        case 5:
        case "AUTHENTICATOR_TYPE_OTP_EMAIL":
            return AuthenticatorType.AUTHENTICATOR_TYPE_OTP_EMAIL;
        case 6:
        case "AUTHENTICATOR_TYPE_OTP_SMS":
            return AuthenticatorType.AUTHENTICATOR_TYPE_OTP_SMS;
        case 7:
        case "AUTHENTICATOR_TYPE_AUTHENTICATION_KEY":
            return AuthenticatorType.AUTHENTICATOR_TYPE_AUTHENTICATION_KEY;
        case 8:
        case "AUTHENTICATOR_TYPE_IDENTITY_PROVIDER":
            return AuthenticatorType.AUTHENTICATOR_TYPE_IDENTITY_PROVIDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthenticatorType.UNRECOGNIZED;
    }
}
exports.authenticatorTypeFromJSON = authenticatorTypeFromJSON;
function authenticatorTypeToJSON(object) {
    switch (object) {
        case AuthenticatorType.AUTHENTICATOR_TYPE_UNSPECIFIED:
            return "AUTHENTICATOR_TYPE_UNSPECIFIED";
        case AuthenticatorType.AUTHENTICATOR_TYPE_USERNAME:
            return "AUTHENTICATOR_TYPE_USERNAME";
        case AuthenticatorType.AUTHENTICATOR_TYPE_PASSWORD:
            return "AUTHENTICATOR_TYPE_PASSWORD";
        case AuthenticatorType.AUTHENTICATOR_TYPE_WEBAUTHN:
            return "AUTHENTICATOR_TYPE_WEBAUTHN";
        case AuthenticatorType.AUTHENTICATOR_TYPE_TOTP:
            return "AUTHENTICATOR_TYPE_TOTP";
        case AuthenticatorType.AUTHENTICATOR_TYPE_OTP_EMAIL:
            return "AUTHENTICATOR_TYPE_OTP_EMAIL";
        case AuthenticatorType.AUTHENTICATOR_TYPE_OTP_SMS:
            return "AUTHENTICATOR_TYPE_OTP_SMS";
        case AuthenticatorType.AUTHENTICATOR_TYPE_AUTHENTICATION_KEY:
            return "AUTHENTICATOR_TYPE_AUTHENTICATION_KEY";
        case AuthenticatorType.AUTHENTICATOR_TYPE_IDENTITY_PROVIDER:
            return "AUTHENTICATOR_TYPE_IDENTITY_PROVIDER";
        case AuthenticatorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authenticatorTypeToJSON = authenticatorTypeToJSON;
function createBaseGetUserSchema() {
    return { details: undefined, config: undefined, state: 0, revision: 0 };
}
exports.GetUserSchema = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.config !== undefined) {
            exports.UserSchema.encode(message.config, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.revision !== 0) {
            writer.uint32(32).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.config = exports.UserSchema.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.revision = reader.uint32();
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            config: isSet(object.config) ? exports.UserSchema.fromJSON(object.config) : undefined,
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            revision: isSet(object.revision) ? globalThis.Number(object.revision) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.config !== undefined) {
            obj.config = exports.UserSchema.toJSON(message.config);
        }
        if (message.state !== 0) {
            obj.state = stateToJSON(message.state);
        }
        if (message.revision !== 0) {
            obj.revision = Math.round(message.revision);
        }
        return obj;
    },
    create(base) {
        return exports.GetUserSchema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetUserSchema();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.UserSchema.fromPartial(object.config)
            : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.revision = (_b = object.revision) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserSchema() {
    return { type: "", schema: undefined, possibleAuthenticators: [] };
}
exports.UserSchema = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.schema !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.schema), writer.uint32(18).fork()).join();
        }
        writer.uint32(26).fork();
        for (const v of message.possibleAuthenticators) {
            writer.int32(v);
        }
        writer.join();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserSchema();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.schema = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag === 24) {
                        message.possibleAuthenticators.push(reader.int32());
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.possibleAuthenticators.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            schema: isObject(object.schema) ? object.schema : undefined,
            possibleAuthenticators: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.possibleAuthenticators)
                ? object.possibleAuthenticators.map((e) => authenticatorTypeFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.schema !== undefined) {
            obj.schema = message.schema;
        }
        if ((_a = message.possibleAuthenticators) === null || _a === void 0 ? void 0 : _a.length) {
            obj.possibleAuthenticators = message.possibleAuthenticators.map((e) => authenticatorTypeToJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UserSchema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUserSchema();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.schema = (_b = object.schema) !== null && _b !== void 0 ? _b : undefined;
        message.possibleAuthenticators = ((_c = object.possibleAuthenticators) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBasePatchUserSchema() {
    return { type: undefined, schema: undefined, possibleAuthenticators: [] };
}
exports.PatchUserSchema = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== undefined) {
            writer.uint32(18).string(message.type);
        }
        if (message.schema !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.schema), writer.uint32(26).fork()).join();
        }
        writer.uint32(34).fork();
        for (const v of message.possibleAuthenticators) {
            writer.int32(v);
        }
        writer.join();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchUserSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.schema = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag === 32) {
                        message.possibleAuthenticators.push(reader.int32());
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.possibleAuthenticators.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            type: isSet(object.type) ? globalThis.String(object.type) : undefined,
            schema: isObject(object.schema) ? object.schema : undefined,
            possibleAuthenticators: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.possibleAuthenticators)
                ? object.possibleAuthenticators.map((e) => authenticatorTypeFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.type !== undefined) {
            obj.type = message.type;
        }
        if (message.schema !== undefined) {
            obj.schema = message.schema;
        }
        if ((_a = message.possibleAuthenticators) === null || _a === void 0 ? void 0 : _a.length) {
            obj.possibleAuthenticators = message.possibleAuthenticators.map((e) => authenticatorTypeToJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PatchUserSchema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePatchUserSchema();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : undefined;
        message.schema = (_b = object.schema) !== null && _b !== void 0 ? _b : undefined;
        message.possibleAuthenticators = ((_c = object.possibleAuthenticators) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseSearchFilter() {
    return {
        orFilter: undefined,
        andFilter: undefined,
        notFilter: undefined,
        typeFilter: undefined,
        stateFilter: undefined,
        idFilter: undefined,
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
        if (message.typeFilter !== undefined) {
            exports.TypeFilter.encode(message.typeFilter, writer.uint32(42).fork()).join();
        }
        if (message.stateFilter !== undefined) {
            exports.StateFilter.encode(message.stateFilter, writer.uint32(50).fork()).join();
        }
        if (message.idFilter !== undefined) {
            exports.IDFilter.encode(message.idFilter, writer.uint32(58).fork()).join();
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
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.typeFilter = exports.TypeFilter.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.stateFilter = exports.StateFilter.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.idFilter = exports.IDFilter.decode(reader, reader.uint32());
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
            typeFilter: isSet(object.typeFilter) ? exports.TypeFilter.fromJSON(object.typeFilter) : undefined,
            stateFilter: isSet(object.stateFilter) ? exports.StateFilter.fromJSON(object.stateFilter) : undefined,
            idFilter: isSet(object.idFilter) ? exports.IDFilter.fromJSON(object.idFilter) : undefined,
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
        if (message.typeFilter !== undefined) {
            obj.typeFilter = exports.TypeFilter.toJSON(message.typeFilter);
        }
        if (message.stateFilter !== undefined) {
            obj.stateFilter = exports.StateFilter.toJSON(message.stateFilter);
        }
        if (message.idFilter !== undefined) {
            obj.idFilter = exports.IDFilter.toJSON(message.idFilter);
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
        message.typeFilter = (object.typeFilter !== undefined && object.typeFilter !== null)
            ? exports.TypeFilter.fromPartial(object.typeFilter)
            : undefined;
        message.stateFilter = (object.stateFilter !== undefined && object.stateFilter !== null)
            ? exports.StateFilter.fromPartial(object.stateFilter)
            : undefined;
        message.idFilter = (object.idFilter !== undefined && object.idFilter !== null)
            ? exports.IDFilter.fromPartial(object.idFilter)
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
    return { filter: undefined };
}
exports.NotFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.filter !== undefined) {
            exports.SearchFilter.encode(message.filter, writer.uint32(10).fork()).join();
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
                    message.filter = exports.SearchFilter.decode(reader, reader.uint32());
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
        return { filter: isSet(object.filter) ? exports.SearchFilter.fromJSON(object.filter) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.SearchFilter.toJSON(message.filter);
        }
        return obj;
    },
    create(base) {
        return exports.NotFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseNotFilter();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.SearchFilter.fromPartial(object.filter)
            : undefined;
        return message;
    },
};
function createBaseIDFilter() {
    return { id: "", method: 0 };
}
exports.IDFilter = {
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
        const message = createBaseIDFilter();
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
        return exports.IDFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIDFilter();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseTypeFilter() {
    return { type: "", method: 0 };
}
exports.TypeFilter = {
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
        const message = createBaseTypeFilter();
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
        return exports.TypeFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTypeFilter();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
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
        return { state: isSet(object.state) ? stateFromJSON(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = stateToJSON(message.state);
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=user_schema.js.map