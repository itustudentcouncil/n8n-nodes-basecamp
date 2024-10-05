"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIDQuery = exports.EmailQuery = exports.LastNameQuery = exports.FirstNameQuery = exports.SearchQuery = exports.Member = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("./object.js");
const user_js_1 = require("./user.js");
exports.protobufPackage = "zitadel.member.v1";
function createBaseMember() {
    return {
        userId: "",
        details: undefined,
        roles: [],
        preferredLoginName: "",
        email: "",
        firstName: "",
        lastName: "",
        displayName: "",
        avatarUrl: "",
        userType: 0,
    };
}
exports.Member = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        for (const v of message.roles) {
            writer.uint32(26).string(v);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(34).string(message.preferredLoginName);
        }
        if (message.email !== "") {
            writer.uint32(42).string(message.email);
        }
        if (message.firstName !== "") {
            writer.uint32(50).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(58).string(message.lastName);
        }
        if (message.displayName !== "") {
            writer.uint32(66).string(message.displayName);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(74).string(message.avatarUrl);
        }
        if (message.userType !== 0) {
            writer.uint32(80).int32(message.userType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.roles.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.avatarUrl = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.userType = reader.int32();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            roles: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.roles) ? object.roles.map((e) => globalThis.String(e)) : [],
            preferredLoginName: isSet(object.preferredLoginName) ? globalThis.String(object.preferredLoginName) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
            userType: isSet(object.userType) ? (0, user_js_1.typeFromJSON)(object.userType) : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if ((_a = message.roles) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roles = message.roles;
        }
        if (message.preferredLoginName !== "") {
            obj.preferredLoginName = message.preferredLoginName;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.avatarUrl !== "") {
            obj.avatarUrl = message.avatarUrl;
        }
        if (message.userType !== 0) {
            obj.userType = (0, user_js_1.typeToJSON)(message.userType);
        }
        return obj;
    },
    create(base) {
        return exports.Member.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseMember();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.roles = ((_b = object.roles) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.preferredLoginName = (_c = object.preferredLoginName) !== null && _c !== void 0 ? _c : "";
        message.email = (_d = object.email) !== null && _d !== void 0 ? _d : "";
        message.firstName = (_e = object.firstName) !== null && _e !== void 0 ? _e : "";
        message.lastName = (_f = object.lastName) !== null && _f !== void 0 ? _f : "";
        message.displayName = (_g = object.displayName) !== null && _g !== void 0 ? _g : "";
        message.avatarUrl = (_h = object.avatarUrl) !== null && _h !== void 0 ? _h : "";
        message.userType = (_j = object.userType) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseSearchQuery() {
    return { firstNameQuery: undefined, lastNameQuery: undefined, emailQuery: undefined, userIdQuery: undefined };
}
exports.SearchQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.firstNameQuery !== undefined) {
            exports.FirstNameQuery.encode(message.firstNameQuery, writer.uint32(10).fork()).join();
        }
        if (message.lastNameQuery !== undefined) {
            exports.LastNameQuery.encode(message.lastNameQuery, writer.uint32(18).fork()).join();
        }
        if (message.emailQuery !== undefined) {
            exports.EmailQuery.encode(message.emailQuery, writer.uint32(26).fork()).join();
        }
        if (message.userIdQuery !== undefined) {
            exports.UserIDQuery.encode(message.userIdQuery, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstNameQuery = exports.FirstNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lastNameQuery = exports.LastNameQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.emailQuery = exports.EmailQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userIdQuery = exports.UserIDQuery.decode(reader, reader.uint32());
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
            firstNameQuery: isSet(object.firstNameQuery) ? exports.FirstNameQuery.fromJSON(object.firstNameQuery) : undefined,
            lastNameQuery: isSet(object.lastNameQuery) ? exports.LastNameQuery.fromJSON(object.lastNameQuery) : undefined,
            emailQuery: isSet(object.emailQuery) ? exports.EmailQuery.fromJSON(object.emailQuery) : undefined,
            userIdQuery: isSet(object.userIdQuery) ? exports.UserIDQuery.fromJSON(object.userIdQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.firstNameQuery !== undefined) {
            obj.firstNameQuery = exports.FirstNameQuery.toJSON(message.firstNameQuery);
        }
        if (message.lastNameQuery !== undefined) {
            obj.lastNameQuery = exports.LastNameQuery.toJSON(message.lastNameQuery);
        }
        if (message.emailQuery !== undefined) {
            obj.emailQuery = exports.EmailQuery.toJSON(message.emailQuery);
        }
        if (message.userIdQuery !== undefined) {
            obj.userIdQuery = exports.UserIDQuery.toJSON(message.userIdQuery);
        }
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSearchQuery();
        message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
            ? exports.FirstNameQuery.fromPartial(object.firstNameQuery)
            : undefined;
        message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
            ? exports.LastNameQuery.fromPartial(object.lastNameQuery)
            : undefined;
        message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
            ? exports.EmailQuery.fromPartial(object.emailQuery)
            : undefined;
        message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
            ? exports.UserIDQuery.fromPartial(object.userIdQuery)
            : undefined;
        return message;
    },
};
function createBaseFirstNameQuery() {
    return { firstName: "", method: 0 };
}
exports.FirstNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFirstNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstName = reader.string();
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
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.FirstNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFirstNameQuery();
        message.firstName = (_a = object.firstName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseLastNameQuery() {
    return { lastName: "", method: 0 };
}
exports.LastNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.lastName !== "") {
            writer.uint32(10).string(message.lastName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastName = reader.string();
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
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.LastNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLastNameQuery();
        message.lastName = (_a = object.lastName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseEmailQuery() {
    return { email: "", method: 0 };
}
exports.EmailQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.EmailQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEmailQuery();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserIDQuery() {
    return { userId: "" };
}
exports.UserIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UserIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUserIDQuery();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=member.js.map