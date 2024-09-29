"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSchema = exports.GetUser = exports.PatchUser = exports.CreateUser = exports.stateToJSON = exports.stateFromJSON = exports.State = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const struct_js_1 = require("../../../../google/protobuf/struct.js");
const object_js_1 = require("../../object/v3alpha/object.js");
const authenticator_js_1 = require("./authenticator.js");
const communication_js_1 = require("./communication.js");
exports.protobufPackage = "zitadel.resources.user.v3alpha";
var State;
(function (State) {
    State[State["USER_STATE_UNSPECIFIED"] = 0] = "USER_STATE_UNSPECIFIED";
    State[State["USER_STATE_ACTIVE"] = 1] = "USER_STATE_ACTIVE";
    State[State["USER_STATE_INACTIVE"] = 2] = "USER_STATE_INACTIVE";
    State[State["USER_STATE_DELETED"] = 3] = "USER_STATE_DELETED";
    State[State["USER_STATE_LOCKED"] = 4] = "USER_STATE_LOCKED";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State = exports.State || (exports.State = {}));
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_STATE_UNSPECIFIED":
            return State.USER_STATE_UNSPECIFIED;
        case 1:
        case "USER_STATE_ACTIVE":
            return State.USER_STATE_ACTIVE;
        case 2:
        case "USER_STATE_INACTIVE":
            return State.USER_STATE_INACTIVE;
        case 3:
        case "USER_STATE_DELETED":
            return State.USER_STATE_DELETED;
        case 4:
        case "USER_STATE_LOCKED":
            return State.USER_STATE_LOCKED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
    switch (object) {
        case State.USER_STATE_UNSPECIFIED:
            return "USER_STATE_UNSPECIFIED";
        case State.USER_STATE_ACTIVE:
            return "USER_STATE_ACTIVE";
        case State.USER_STATE_INACTIVE:
            return "USER_STATE_INACTIVE";
        case State.USER_STATE_DELETED:
            return "USER_STATE_DELETED";
        case State.USER_STATE_LOCKED:
            return "USER_STATE_LOCKED";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.stateToJSON = stateToJSON;
function createBaseCreateUser() {
    return { schemaId: "", data: undefined, contact: undefined, authenticators: undefined, userId: undefined };
}
exports.CreateUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.schemaId !== "") {
            writer.uint32(10).string(message.schemaId);
        }
        if (message.data !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.data), writer.uint32(18).fork()).join();
        }
        if (message.contact !== undefined) {
            communication_js_1.SetContact.encode(message.contact, writer.uint32(26).fork()).join();
        }
        if (message.authenticators !== undefined) {
            authenticator_js_1.SetAuthenticators.encode(message.authenticators, writer.uint32(34).fork()).join();
        }
        if (message.userId !== undefined) {
            writer.uint32(42).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.schemaId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.contact = communication_js_1.SetContact.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.authenticators = authenticator_js_1.SetAuthenticators.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userId = reader.string();
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
            schemaId: isSet(object.schemaId) ? globalThis.String(object.schemaId) : "",
            data: isObject(object.data) ? object.data : undefined,
            contact: isSet(object.contact) ? communication_js_1.SetContact.fromJSON(object.contact) : undefined,
            authenticators: isSet(object.authenticators) ? authenticator_js_1.SetAuthenticators.fromJSON(object.authenticators) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.schemaId !== "") {
            obj.schemaId = message.schemaId;
        }
        if (message.data !== undefined) {
            obj.data = message.data;
        }
        if (message.contact !== undefined) {
            obj.contact = communication_js_1.SetContact.toJSON(message.contact);
        }
        if (message.authenticators !== undefined) {
            obj.authenticators = authenticator_js_1.SetAuthenticators.toJSON(message.authenticators);
        }
        if (message.userId !== undefined) {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateUser();
        message.schemaId = (_a = object.schemaId) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : undefined;
        message.contact = (object.contact !== undefined && object.contact !== null)
            ? communication_js_1.SetContact.fromPartial(object.contact)
            : undefined;
        message.authenticators = (object.authenticators !== undefined && object.authenticators !== null)
            ? authenticator_js_1.SetAuthenticators.fromPartial(object.authenticators)
            : undefined;
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBasePatchUser() {
    return { schemaId: undefined, data: undefined, contact: undefined };
}
exports.PatchUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.schemaId !== undefined) {
            writer.uint32(10).string(message.schemaId);
        }
        if (message.data !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.data), writer.uint32(18).fork()).join();
        }
        if (message.contact !== undefined) {
            communication_js_1.SetContact.encode(message.contact, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.schemaId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.contact = communication_js_1.SetContact.decode(reader, reader.uint32());
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
            schemaId: isSet(object.schemaId) ? globalThis.String(object.schemaId) : undefined,
            data: isObject(object.data) ? object.data : undefined,
            contact: isSet(object.contact) ? communication_js_1.SetContact.fromJSON(object.contact) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.schemaId !== undefined) {
            obj.schemaId = message.schemaId;
        }
        if (message.data !== undefined) {
            obj.data = message.data;
        }
        if (message.contact !== undefined) {
            obj.contact = communication_js_1.SetContact.toJSON(message.contact);
        }
        return obj;
    },
    create(base) {
        return exports.PatchUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePatchUser();
        message.schemaId = (_a = object.schemaId) !== null && _a !== void 0 ? _a : undefined;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : undefined;
        message.contact = (object.contact !== undefined && object.contact !== null)
            ? communication_js_1.SetContact.fromPartial(object.contact)
            : undefined;
        return message;
    },
};
function createBaseGetUser() {
    return {
        details: undefined,
        schema: undefined,
        data: undefined,
        contact: undefined,
        authenticators: undefined,
        state: 0,
    };
}
exports.GetUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.schema !== undefined) {
            exports.GetSchema.encode(message.schema, writer.uint32(18).fork()).join();
        }
        if (message.data !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.data), writer.uint32(26).fork()).join();
        }
        if (message.contact !== undefined) {
            communication_js_1.Contact.encode(message.contact, writer.uint32(34).fork()).join();
        }
        if (message.authenticators !== undefined) {
            authenticator_js_1.Authenticators.encode(message.authenticators, writer.uint32(42).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(48).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUser();
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
                    message.schema = exports.GetSchema.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.contact = communication_js_1.Contact.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.authenticators = authenticator_js_1.Authenticators.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 48) {
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
        return {
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            schema: isSet(object.schema) ? exports.GetSchema.fromJSON(object.schema) : undefined,
            data: isObject(object.data) ? object.data : undefined,
            contact: isSet(object.contact) ? communication_js_1.Contact.fromJSON(object.contact) : undefined,
            authenticators: isSet(object.authenticators) ? authenticator_js_1.Authenticators.fromJSON(object.authenticators) : undefined,
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.schema !== undefined) {
            obj.schema = exports.GetSchema.toJSON(message.schema);
        }
        if (message.data !== undefined) {
            obj.data = message.data;
        }
        if (message.contact !== undefined) {
            obj.contact = communication_js_1.Contact.toJSON(message.contact);
        }
        if (message.authenticators !== undefined) {
            obj.authenticators = authenticator_js_1.Authenticators.toJSON(message.authenticators);
        }
        if (message.state !== 0) {
            obj.state = stateToJSON(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.GetUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetUser();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? exports.GetSchema.fromPartial(object.schema)
            : undefined;
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : undefined;
        message.contact = (object.contact !== undefined && object.contact !== null)
            ? communication_js_1.Contact.fromPartial(object.contact)
            : undefined;
        message.authenticators = (object.authenticators !== undefined && object.authenticators !== null)
            ? authenticator_js_1.Authenticators.fromPartial(object.authenticators)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGetSchema() {
    return { id: "", type: "", revision: 0 };
}
exports.GetSchema = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.revision !== 0) {
            writer.uint32(24).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSchema();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            revision: isSet(object.revision) ? globalThis.Number(object.revision) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.revision !== 0) {
            obj.revision = Math.round(message.revision);
        }
        return obj;
    },
    create(base) {
        return exports.GetSchema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetSchema();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.revision = (_c = object.revision) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=user.js.map