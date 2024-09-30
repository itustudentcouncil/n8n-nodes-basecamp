"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDPLink = exports.IDPSAMLAccessInformation = exports.IDPLDAPAccessInformation = exports.IDPOAuthAccessInformation = exports.IDPInformation = exports.IDPIntent = exports.RedirectURLs = exports.LDAPCredentials = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const struct_js_1 = require("../../../google/protobuf/struct.js");
exports.protobufPackage = "zitadel.user.v2";
function createBaseLDAPCredentials() {
    return { username: "", password: "" };
}
exports.LDAPCredentials = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLDAPCredentials();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.password = reader.string();
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
            password: isSet(object.password) ? globalThis.String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.LDAPCredentials.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLDAPCredentials();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRedirectURLs() {
    return { successUrl: "", failureUrl: "" };
}
exports.RedirectURLs = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.successUrl !== "") {
            writer.uint32(10).string(message.successUrl);
        }
        if (message.failureUrl !== "") {
            writer.uint32(18).string(message.failureUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedirectURLs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.successUrl = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.failureUrl = reader.string();
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
            successUrl: isSet(object.successUrl) ? globalThis.String(object.successUrl) : "",
            failureUrl: isSet(object.failureUrl) ? globalThis.String(object.failureUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.successUrl !== "") {
            obj.successUrl = message.successUrl;
        }
        if (message.failureUrl !== "") {
            obj.failureUrl = message.failureUrl;
        }
        return obj;
    },
    create(base) {
        return exports.RedirectURLs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRedirectURLs();
        message.successUrl = (_a = object.successUrl) !== null && _a !== void 0 ? _a : "";
        message.failureUrl = (_b = object.failureUrl) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseIDPIntent() {
    return { idpIntentId: "", idpIntentToken: "", userId: "" };
}
exports.IDPIntent = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpIntentId !== "") {
            writer.uint32(10).string(message.idpIntentId);
        }
        if (message.idpIntentToken !== "") {
            writer.uint32(18).string(message.idpIntentToken);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPIntent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpIntentId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpIntentToken = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            idpIntentId: isSet(object.idpIntentId) ? globalThis.String(object.idpIntentId) : "",
            idpIntentToken: isSet(object.idpIntentToken) ? globalThis.String(object.idpIntentToken) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idpIntentId !== "") {
            obj.idpIntentId = message.idpIntentId;
        }
        if (message.idpIntentToken !== "") {
            obj.idpIntentToken = message.idpIntentToken;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.IDPIntent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIDPIntent();
        message.idpIntentId = (_a = object.idpIntentId) !== null && _a !== void 0 ? _a : "";
        message.idpIntentToken = (_b = object.idpIntentToken) !== null && _b !== void 0 ? _b : "";
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseIDPInformation() {
    return {
        oauth: undefined,
        ldap: undefined,
        saml: undefined,
        idpId: "",
        userId: "",
        userName: "",
        rawInformation: undefined,
    };
}
exports.IDPInformation = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.oauth !== undefined) {
            exports.IDPOAuthAccessInformation.encode(message.oauth, writer.uint32(10).fork()).join();
        }
        if (message.ldap !== undefined) {
            exports.IDPLDAPAccessInformation.encode(message.ldap, writer.uint32(50).fork()).join();
        }
        if (message.saml !== undefined) {
            exports.IDPSAMLAccessInformation.encode(message.saml, writer.uint32(58).fork()).join();
        }
        if (message.idpId !== "") {
            writer.uint32(18).string(message.idpId);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(34).string(message.userName);
        }
        if (message.rawInformation !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.rawInformation), writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.oauth = exports.IDPOAuthAccessInformation.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ldap = exports.IDPLDAPAccessInformation.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.saml = exports.IDPSAMLAccessInformation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.rawInformation = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
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
            oauth: isSet(object.oauth) ? exports.IDPOAuthAccessInformation.fromJSON(object.oauth) : undefined,
            ldap: isSet(object.ldap) ? exports.IDPLDAPAccessInformation.fromJSON(object.ldap) : undefined,
            saml: isSet(object.saml) ? exports.IDPSAMLAccessInformation.fromJSON(object.saml) : undefined,
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            rawInformation: isObject(object.rawInformation) ? object.rawInformation : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.oauth !== undefined) {
            obj.oauth = exports.IDPOAuthAccessInformation.toJSON(message.oauth);
        }
        if (message.ldap !== undefined) {
            obj.ldap = exports.IDPLDAPAccessInformation.toJSON(message.ldap);
        }
        if (message.saml !== undefined) {
            obj.saml = exports.IDPSAMLAccessInformation.toJSON(message.saml);
        }
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if (message.rawInformation !== undefined) {
            obj.rawInformation = message.rawInformation;
        }
        return obj;
    },
    create(base) {
        return exports.IDPInformation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIDPInformation();
        message.oauth = (object.oauth !== undefined && object.oauth !== null)
            ? exports.IDPOAuthAccessInformation.fromPartial(object.oauth)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? exports.IDPLDAPAccessInformation.fromPartial(object.ldap)
            : undefined;
        message.saml = (object.saml !== undefined && object.saml !== null)
            ? exports.IDPSAMLAccessInformation.fromPartial(object.saml)
            : undefined;
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : "";
        message.userName = (_c = object.userName) !== null && _c !== void 0 ? _c : "";
        message.rawInformation = (_d = object.rawInformation) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseIDPOAuthAccessInformation() {
    return { accessToken: "", idToken: undefined };
}
exports.IDPOAuthAccessInformation = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.idToken !== undefined) {
            writer.uint32(18).string(message.idToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPOAuthAccessInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idToken = reader.string();
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
            accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
            idToken: isSet(object.idToken) ? globalThis.String(object.idToken) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        if (message.idToken !== undefined) {
            obj.idToken = message.idToken;
        }
        return obj;
    },
    create(base) {
        return exports.IDPOAuthAccessInformation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIDPOAuthAccessInformation();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        message.idToken = (_b = object.idToken) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseIDPLDAPAccessInformation() {
    return { attributes: undefined };
}
exports.IDPLDAPAccessInformation = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.attributes !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.attributes), writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPLDAPAccessInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.attributes = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
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
        return { attributes: isObject(object.attributes) ? object.attributes : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.attributes !== undefined) {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    create(base) {
        return exports.IDPLDAPAccessInformation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIDPLDAPAccessInformation();
        message.attributes = (_a = object.attributes) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseIDPSAMLAccessInformation() {
    return { assertion: Buffer.alloc(0) };
}
exports.IDPSAMLAccessInformation = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.assertion.length !== 0) {
            writer.uint32(10).bytes(message.assertion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPSAMLAccessInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.assertion = Buffer.from(reader.bytes());
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
        return { assertion: isSet(object.assertion) ? Buffer.from(bytesFromBase64(object.assertion)) : Buffer.alloc(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.assertion.length !== 0) {
            obj.assertion = base64FromBytes(message.assertion);
        }
        return obj;
    },
    create(base) {
        return exports.IDPSAMLAccessInformation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIDPSAMLAccessInformation();
        message.assertion = (_a = object.assertion) !== null && _a !== void 0 ? _a : Buffer.alloc(0);
        return message;
    },
};
function createBaseIDPLink() {
    return { idpId: "", userId: "", userName: "" };
}
exports.IDPLink = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(26).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userName = reader.string();
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
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        return obj;
    },
    create(base) {
        return exports.IDPLink.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIDPLink();
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : "";
        message.userName = (_c = object.userName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function bytesFromBase64(b64) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}
function base64FromBytes(arr) {
    return globalThis.Buffer.from(arr).toString("base64");
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=idp.js.map