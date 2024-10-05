"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaServiceDefinition = exports.DeleteUserSchemaResponse = exports.DeleteUserSchemaRequest = exports.ReactivateUserSchemaResponse = exports.ReactivateUserSchemaRequest = exports.DeactivateUserSchemaResponse = exports.DeactivateUserSchemaRequest = exports.PatchUserSchemaResponse = exports.PatchUserSchemaRequest = exports.CreateUserSchemaResponse = exports.CreateUserSchemaRequest = exports.GetUserSchemaResponse = exports.GetUserSchemaRequest = exports.SearchUserSchemasResponse = exports.SearchUserSchemasRequest = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../../object/v3alpha/object.js");
const object_js_2 = require("../../object/v3alpha/object.js");
const user_schema_js_1 = require("./user_schema.js");
exports.protobufPackage = "zitadel.resources.userschema.v3alpha";
function createBaseSearchUserSchemasRequest() {
    return { instance: undefined, query: undefined, sortingColumn: undefined, filters: [] };
}
exports.SearchUserSchemasRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.query !== undefined) {
            object_js_2.SearchQuery.encode(message.query, writer.uint32(18).fork()).join();
        }
        if (message.sortingColumn !== undefined) {
            writer.uint32(24).int32(message.sortingColumn);
        }
        for (const v of message.filters) {
            user_schema_js_1.SearchFilter.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchUserSchemasRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.query = object_js_2.SearchQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.filters.push(user_schema_js_1.SearchFilter.decode(reader, reader.uint32()));
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            query: isSet(object.query) ? object_js_2.SearchQuery.fromJSON(object.query) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, user_schema_js_1.fieldNameFromJSON)(object.sortingColumn) : undefined,
            filters: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map((e) => user_schema_js_1.SearchFilter.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.query !== undefined) {
            obj.query = object_js_2.SearchQuery.toJSON(message.query);
        }
        if (message.sortingColumn !== undefined) {
            obj.sortingColumn = (0, user_schema_js_1.fieldNameToJSON)(message.sortingColumn);
        }
        if ((_a = message.filters) === null || _a === void 0 ? void 0 : _a.length) {
            obj.filters = message.filters.map((e) => user_schema_js_1.SearchFilter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchUserSchemasRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSearchUserSchemasRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? object_js_2.SearchQuery.fromPartial(object.query)
            : undefined;
        message.sortingColumn = (_a = object.sortingColumn) !== null && _a !== void 0 ? _a : undefined;
        message.filters = ((_b = object.filters) === null || _b === void 0 ? void 0 : _b.map((e) => user_schema_js_1.SearchFilter.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSearchUserSchemasResponse() {
    return { details: undefined, sortingColumn: 0, result: [] };
}
exports.SearchUserSchemasResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.ListDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(16).int32(message.sortingColumn);
        }
        for (const v of message.result) {
            user_schema_js_1.GetUserSchema.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchUserSchemasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.result.push(user_schema_js_1.GetUserSchema.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_js_2.ListDetails.fromJSON(object.details) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, user_schema_js_1.fieldNameFromJSON)(object.sortingColumn) : 0,
            result: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.result) ? object.result.map((e) => user_schema_js_1.GetUserSchema.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.ListDetails.toJSON(message.details);
        }
        if (message.sortingColumn !== 0) {
            obj.sortingColumn = (0, user_schema_js_1.fieldNameToJSON)(message.sortingColumn);
        }
        if ((_a = message.result) === null || _a === void 0 ? void 0 : _a.length) {
            obj.result = message.result.map((e) => user_schema_js_1.GetUserSchema.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchUserSchemasResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSearchUserSchemasResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.ListDetails.fromPartial(object.details)
            : undefined;
        message.sortingColumn = (_a = object.sortingColumn) !== null && _a !== void 0 ? _a : 0;
        message.result = ((_b = object.result) === null || _b === void 0 ? void 0 : _b.map((e) => user_schema_js_1.GetUserSchema.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetUserSchemaRequest() {
    return { id: "" };
}
exports.GetUserSchemaRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserSchemaRequest();
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
        return exports.GetUserSchemaRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetUserSchemaRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetUserSchemaResponse() {
    return { userSchema: undefined };
}
exports.GetUserSchemaResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userSchema !== undefined) {
            user_schema_js_1.GetUserSchema.encode(message.userSchema, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserSchemaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userSchema = user_schema_js_1.GetUserSchema.decode(reader, reader.uint32());
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
        return { userSchema: isSet(object.userSchema) ? user_schema_js_1.GetUserSchema.fromJSON(object.userSchema) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.userSchema !== undefined) {
            obj.userSchema = user_schema_js_1.GetUserSchema.toJSON(message.userSchema);
        }
        return obj;
    },
    create(base) {
        return exports.GetUserSchemaResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetUserSchemaResponse();
        message.userSchema = (object.userSchema !== undefined && object.userSchema !== null)
            ? user_schema_js_1.GetUserSchema.fromPartial(object.userSchema)
            : undefined;
        return message;
    },
};
function createBaseCreateUserSchemaRequest() {
    return { instance: undefined, userSchema: undefined };
}
exports.CreateUserSchemaRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.userSchema !== undefined) {
            user_schema_js_1.UserSchema.encode(message.userSchema, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserSchemaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userSchema = user_schema_js_1.UserSchema.decode(reader, reader.uint32());
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            userSchema: isSet(object.userSchema) ? user_schema_js_1.UserSchema.fromJSON(object.userSchema) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.userSchema !== undefined) {
            obj.userSchema = user_schema_js_1.UserSchema.toJSON(message.userSchema);
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserSchemaRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserSchemaRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.userSchema = (object.userSchema !== undefined && object.userSchema !== null)
            ? user_schema_js_1.UserSchema.fromPartial(object.userSchema)
            : undefined;
        return message;
    },
};
function createBaseCreateUserSchemaResponse() {
    return { details: undefined };
}
exports.CreateUserSchemaResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserSchemaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserSchemaResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserSchemaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBasePatchUserSchemaRequest() {
    return { instance: undefined, id: "", userSchema: undefined };
}
exports.PatchUserSchemaRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.userSchema !== undefined) {
            user_schema_js_1.PatchUserSchema.encode(message.userSchema, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchUserSchemaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userSchema = user_schema_js_1.PatchUserSchema.decode(reader, reader.uint32());
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            userSchema: isSet(object.userSchema) ? user_schema_js_1.PatchUserSchema.fromJSON(object.userSchema) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.userSchema !== undefined) {
            obj.userSchema = user_schema_js_1.PatchUserSchema.toJSON(message.userSchema);
        }
        return obj;
    },
    create(base) {
        return exports.PatchUserSchemaRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePatchUserSchemaRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.userSchema = (object.userSchema !== undefined && object.userSchema !== null)
            ? user_schema_js_1.PatchUserSchema.fromPartial(object.userSchema)
            : undefined;
        return message;
    },
};
function createBasePatchUserSchemaResponse() {
    return { details: undefined };
}
exports.PatchUserSchemaResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchUserSchemaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.PatchUserSchemaResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePatchUserSchemaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseDeactivateUserSchemaRequest() {
    return { instance: undefined, id: "" };
}
exports.DeactivateUserSchemaRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateUserSchemaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
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
        return {
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DeactivateUserSchemaRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeactivateUserSchemaRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeactivateUserSchemaResponse() {
    return { details: undefined };
}
exports.DeactivateUserSchemaResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateUserSchemaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.DeactivateUserSchemaResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDeactivateUserSchemaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseReactivateUserSchemaRequest() {
    return { instance: undefined, id: "" };
}
exports.ReactivateUserSchemaRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReactivateUserSchemaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
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
        return {
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.ReactivateUserSchemaRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReactivateUserSchemaRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseReactivateUserSchemaResponse() {
    return { details: undefined };
}
exports.ReactivateUserSchemaResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReactivateUserSchemaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.ReactivateUserSchemaResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseReactivateUserSchemaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseDeleteUserSchemaRequest() {
    return { instance: undefined, id: "" };
}
exports.DeleteUserSchemaRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserSchemaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
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
        return {
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteUserSchemaRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteUserSchemaRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteUserSchemaResponse() {
    return { details: undefined };
}
exports.DeleteUserSchemaResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserSchemaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.DeleteUserSchemaResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDeleteUserSchemaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
exports.UserSchemaServiceDefinition = {
    name: "UserSchemaService",
    fullName: "zitadel.resources.userschema.v3alpha.UserSchemaService",
    methods: {
        searchUserSchemas: {
            name: "SearchUserSchemas",
            requestType: exports.SearchUserSchemasRequest,
            requestStream: false,
            responseType: exports.SearchUserSchemasResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            110,
                            74,
                            54,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            47,
                            10,
                            45,
                            65,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            97,
                            108,
                            108,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            32,
                            109,
                            97,
                            116,
                            99,
                            104,
                            105,
                            110,
                            103,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                            74,
                            52,
                            10,
                            3,
                            52,
                            48,
                            48,
                            18,
                            45,
                            10,
                            14,
                            105,
                            110,
                            118,
                            97,
                            108,
                            105,
                            100,
                            32,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                            18,
                            27,
                            10,
                            25,
                            26,
                            23,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            114,
                            112,
                            99,
                            83,
                            116,
                            97,
                            116,
                            117,
                            115,
                        ]),
                    ],
                    400010: [
                        Buffer.from([19, 10, 17, 10, 15, 117, 115, 101, 114, 115, 99, 104, 101, 109, 97, 46, 114, 101, 97, 100]),
                    ],
                    578365826: [
                        Buffer.from([
                            50,
                            58,
                            7,
                            102,
                            105,
                            108,
                            116,
                            101,
                            114,
                            115,
                            34,
                            39,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        getUserSchema: {
            name: "GetUserSchema",
            requestType: exports.GetUserSchemaRequest,
            requestStream: false,
            responseType: exports.GetUserSchemaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            40,
                            74,
                            38,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            31,
                            10,
                            29,
                            83,
                            99,
                            104,
                            101,
                            109,
                            97,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            114,
                            101,
                            116,
                            114,
                            105,
                            101,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([19, 10, 17, 10, 15, 117, 115, 101, 114, 115, 99, 104, 101, 109, 97, 46, 114, 101, 97, 100]),
                    ],
                    578365826: [
                        Buffer.from([
                            38,
                            18,
                            36,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        createUserSchema: {
            name: "CreateUserSchema",
            requestType: exports.CreateUserSchemaRequest,
            requestStream: false,
            responseType: exports.CreateUserSchemaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            89,
                            74,
                            87,
                            10,
                            3,
                            50,
                            48,
                            49,
                            18,
                            80,
                            10,
                            27,
                            83,
                            99,
                            104,
                            101,
                            109,
                            97,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            99,
                            114,
                            101,
                            97,
                            116,
                            101,
                            100,
                            18,
                            49,
                            10,
                            47,
                            26,
                            45,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            85,
                            115,
                            101,
                            114,
                            83,
                            99,
                            104,
                            101,
                            109,
                            97,
                            82,
                            101,
                            115,
                            112,
                            111,
                            110,
                            115,
                            101,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            25,
                            10,
                            18,
                            10,
                            16,
                            117,
                            115,
                            101,
                            114,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                            18,
                            3,
                            8,
                            201,
                            1,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            46,
                            58,
                            11,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            34,
                            31,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            115,
                        ]),
                    ],
                },
            },
        },
        patchUserSchema: {
            name: "PatchUserSchema",
            requestType: exports.PatchUserSchemaRequest,
            requestStream: false,
            responseType: exports.PatchUserSchemaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            38,
                            74,
                            36,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            29,
                            10,
                            27,
                            83,
                            99,
                            104,
                            101,
                            109,
                            97,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            117,
                            112,
                            100,
                            97,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            10,
                            16,
                            117,
                            115,
                            101,
                            114,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            51,
                            58,
                            11,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            50,
                            36,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        deactivateUserSchema: {
            name: "DeactivateUserSchema",
            requestType: exports.DeactivateUserSchemaRequest,
            requestStream: false,
            responseType: exports.DeactivateUserSchemaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            42,
                            74,
                            40,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            33,
                            10,
                            31,
                            83,
                            99,
                            104,
                            101,
                            109,
                            97,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            100,
                            101,
                            97,
                            99,
                            116,
                            105,
                            118,
                            97,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            10,
                            16,
                            117,
                            115,
                            101,
                            114,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            50,
                            34,
                            48,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            95,
                            100,
                            101,
                            97,
                            99,
                            116,
                            105,
                            118,
                            97,
                            116,
                            101,
                        ]),
                    ],
                },
            },
        },
        reactivateUserSchema: {
            name: "ReactivateUserSchema",
            requestType: exports.ReactivateUserSchemaRequest,
            requestStream: false,
            responseType: exports.ReactivateUserSchemaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            42,
                            74,
                            40,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            33,
                            10,
                            31,
                            83,
                            99,
                            104,
                            101,
                            109,
                            97,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            114,
                            101,
                            97,
                            99,
                            116,
                            105,
                            118,
                            97,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            10,
                            16,
                            117,
                            115,
                            101,
                            114,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            50,
                            34,
                            48,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            95,
                            114,
                            101,
                            97,
                            99,
                            116,
                            105,
                            118,
                            97,
                            116,
                            101,
                        ]),
                    ],
                },
            },
        },
        deleteUserSchema: {
            name: "DeleteUserSchema",
            requestType: exports.DeleteUserSchemaRequest,
            requestStream: false,
            responseType: exports.DeleteUserSchemaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            38,
                            74,
                            36,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            29,
                            10,
                            27,
                            83,
                            99,
                            104,
                            101,
                            109,
                            97,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            21,
                            10,
                            19,
                            10,
                            17,
                            117,
                            115,
                            101,
                            114,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            46,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            38,
                            42,
                            36,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            95,
                            115,
                            99,
                            104,
                            101,
                            109,
                            97,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=user_schema_service.js.map