"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDPAuthenticator = exports.IDPSAMLAccessInformation = exports.IDPLDAPAccessInformation = exports.IDPOAuthAccessInformation = exports.IDPInformation = exports.IdentityProviderIntent = exports.LDAPCredentials = exports.RedirectURLs = exports.ReturnWebAuthNRegistrationCode = exports.SendWebAuthNRegistrationLink = exports.AuthenticatorRegistrationCode = exports.ReturnPasswordResetCode = exports.SendPasswordResetSMS = exports.SendPasswordResetEmail = exports.SetPassword = exports.SetAuthenticators = exports.IdentityProvider = exports.AuthenticationKey = exports.TOTP = exports.OTPEmail = exports.OTPSMS = exports.VerifyWebAuthNRegistration = exports.StartWebAuthNRegistration = exports.WebAuthN = exports.Password = exports.SetUsername = exports.Username = exports.Authenticators = exports.webAuthNAuthenticatorTypeToJSON = exports.webAuthNAuthenticatorTypeFromJSON = exports.WebAuthNAuthenticatorType = exports.authNKeyTypeToJSON = exports.authNKeyTypeFromJSON = exports.AuthNKeyType = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const struct_js_1 = require("../../../../google/protobuf/struct.js");
const timestamp_js_1 = require("../../../../google/protobuf/timestamp.js");
const object_js_1 = require("../../object/v3alpha/object.js");
exports.protobufPackage = "zitadel.resources.user.v3alpha";
var AuthNKeyType;
(function (AuthNKeyType) {
    AuthNKeyType[AuthNKeyType["AUTHN_KEY_TYPE_UNSPECIFIED"] = 0] = "AUTHN_KEY_TYPE_UNSPECIFIED";
    AuthNKeyType[AuthNKeyType["AUTHN_KEY_TYPE_JSON"] = 1] = "AUTHN_KEY_TYPE_JSON";
    AuthNKeyType[AuthNKeyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthNKeyType = exports.AuthNKeyType || (exports.AuthNKeyType = {}));
function authNKeyTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHN_KEY_TYPE_UNSPECIFIED":
            return AuthNKeyType.AUTHN_KEY_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHN_KEY_TYPE_JSON":
            return AuthNKeyType.AUTHN_KEY_TYPE_JSON;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthNKeyType.UNRECOGNIZED;
    }
}
exports.authNKeyTypeFromJSON = authNKeyTypeFromJSON;
function authNKeyTypeToJSON(object) {
    switch (object) {
        case AuthNKeyType.AUTHN_KEY_TYPE_UNSPECIFIED:
            return "AUTHN_KEY_TYPE_UNSPECIFIED";
        case AuthNKeyType.AUTHN_KEY_TYPE_JSON:
            return "AUTHN_KEY_TYPE_JSON";
        case AuthNKeyType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authNKeyTypeToJSON = authNKeyTypeToJSON;
var WebAuthNAuthenticatorType;
(function (WebAuthNAuthenticatorType) {
    WebAuthNAuthenticatorType[WebAuthNAuthenticatorType["WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED"] = 0] = "WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED";
    WebAuthNAuthenticatorType[WebAuthNAuthenticatorType["WEB_AUTH_N_AUTHENTICATOR_PLATFORM"] = 1] = "WEB_AUTH_N_AUTHENTICATOR_PLATFORM";
    WebAuthNAuthenticatorType[WebAuthNAuthenticatorType["WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM"] = 2] = "WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM";
    WebAuthNAuthenticatorType[WebAuthNAuthenticatorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WebAuthNAuthenticatorType = exports.WebAuthNAuthenticatorType || (exports.WebAuthNAuthenticatorType = {}));
function webAuthNAuthenticatorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED":
            return WebAuthNAuthenticatorType.WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED;
        case 1:
        case "WEB_AUTH_N_AUTHENTICATOR_PLATFORM":
            return WebAuthNAuthenticatorType.WEB_AUTH_N_AUTHENTICATOR_PLATFORM;
        case 2:
        case "WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM":
            return WebAuthNAuthenticatorType.WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return WebAuthNAuthenticatorType.UNRECOGNIZED;
    }
}
exports.webAuthNAuthenticatorTypeFromJSON = webAuthNAuthenticatorTypeFromJSON;
function webAuthNAuthenticatorTypeToJSON(object) {
    switch (object) {
        case WebAuthNAuthenticatorType.WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED:
            return "WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED";
        case WebAuthNAuthenticatorType.WEB_AUTH_N_AUTHENTICATOR_PLATFORM:
            return "WEB_AUTH_N_AUTHENTICATOR_PLATFORM";
        case WebAuthNAuthenticatorType.WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM:
            return "WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM";
        case WebAuthNAuthenticatorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.webAuthNAuthenticatorTypeToJSON = webAuthNAuthenticatorTypeToJSON;
function createBaseAuthenticators() {
    return {
        usernames: [],
        password: undefined,
        webAuthN: [],
        totps: [],
        otpSms: [],
        otpEmail: [],
        authenticationKeys: [],
        identityProviders: [],
    };
}
exports.Authenticators = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.usernames) {
            exports.Username.encode(v, writer.uint32(10).fork()).join();
        }
        if (message.password !== undefined) {
            exports.Password.encode(message.password, writer.uint32(18).fork()).join();
        }
        for (const v of message.webAuthN) {
            exports.WebAuthN.encode(v, writer.uint32(26).fork()).join();
        }
        for (const v of message.totps) {
            exports.TOTP.encode(v, writer.uint32(34).fork()).join();
        }
        for (const v of message.otpSms) {
            exports.OTPSMS.encode(v, writer.uint32(42).fork()).join();
        }
        for (const v of message.otpEmail) {
            exports.OTPEmail.encode(v, writer.uint32(50).fork()).join();
        }
        for (const v of message.authenticationKeys) {
            exports.AuthenticationKey.encode(v, writer.uint32(58).fork()).join();
        }
        for (const v of message.identityProviders) {
            exports.IdentityProvider.encode(v, writer.uint32(66).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthenticators();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.usernames.push(exports.Username.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.password = exports.Password.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.webAuthN.push(exports.WebAuthN.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.totps.push(exports.TOTP.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.otpSms.push(exports.OTPSMS.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.otpEmail.push(exports.OTPEmail.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.authenticationKeys.push(exports.AuthenticationKey.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.identityProviders.push(exports.IdentityProvider.decode(reader, reader.uint32()));
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
            usernames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.usernames)
                ? object.usernames.map((e) => exports.Username.fromJSON(e))
                : [],
            password: isSet(object.password) ? exports.Password.fromJSON(object.password) : undefined,
            webAuthN: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.webAuthN) ? object.webAuthN.map((e) => exports.WebAuthN.fromJSON(e)) : [],
            totps: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.totps) ? object.totps.map((e) => exports.TOTP.fromJSON(e)) : [],
            otpSms: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.otpSms) ? object.otpSms.map((e) => exports.OTPSMS.fromJSON(e)) : [],
            otpEmail: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.otpEmail) ? object.otpEmail.map((e) => exports.OTPEmail.fromJSON(e)) : [],
            authenticationKeys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.authenticationKeys)
                ? object.authenticationKeys.map((e) => exports.AuthenticationKey.fromJSON(e))
                : [],
            identityProviders: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.identityProviders)
                ? object.identityProviders.map((e) => exports.IdentityProvider.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c, _d, _e, _f, _g;
        const obj = {};
        if ((_a = message.usernames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.usernames = message.usernames.map((e) => exports.Username.toJSON(e));
        }
        if (message.password !== undefined) {
            obj.password = exports.Password.toJSON(message.password);
        }
        if ((_b = message.webAuthN) === null || _b === void 0 ? void 0 : _b.length) {
            obj.webAuthN = message.webAuthN.map((e) => exports.WebAuthN.toJSON(e));
        }
        if ((_c = message.totps) === null || _c === void 0 ? void 0 : _c.length) {
            obj.totps = message.totps.map((e) => exports.TOTP.toJSON(e));
        }
        if ((_d = message.otpSms) === null || _d === void 0 ? void 0 : _d.length) {
            obj.otpSms = message.otpSms.map((e) => exports.OTPSMS.toJSON(e));
        }
        if ((_e = message.otpEmail) === null || _e === void 0 ? void 0 : _e.length) {
            obj.otpEmail = message.otpEmail.map((e) => exports.OTPEmail.toJSON(e));
        }
        if ((_f = message.authenticationKeys) === null || _f === void 0 ? void 0 : _f.length) {
            obj.authenticationKeys = message.authenticationKeys.map((e) => exports.AuthenticationKey.toJSON(e));
        }
        if ((_g = message.identityProviders) === null || _g === void 0 ? void 0 : _g.length) {
            obj.identityProviders = message.identityProviders.map((e) => exports.IdentityProvider.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Authenticators.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseAuthenticators();
        message.usernames = ((_a = object.usernames) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Username.fromPartial(e))) || [];
        message.password = (object.password !== undefined && object.password !== null)
            ? exports.Password.fromPartial(object.password)
            : undefined;
        message.webAuthN = ((_b = object.webAuthN) === null || _b === void 0 ? void 0 : _b.map((e) => exports.WebAuthN.fromPartial(e))) || [];
        message.totps = ((_c = object.totps) === null || _c === void 0 ? void 0 : _c.map((e) => exports.TOTP.fromPartial(e))) || [];
        message.otpSms = ((_d = object.otpSms) === null || _d === void 0 ? void 0 : _d.map((e) => exports.OTPSMS.fromPartial(e))) || [];
        message.otpEmail = ((_e = object.otpEmail) === null || _e === void 0 ? void 0 : _e.map((e) => exports.OTPEmail.fromPartial(e))) || [];
        message.authenticationKeys = ((_f = object.authenticationKeys) === null || _f === void 0 ? void 0 : _f.map((e) => exports.AuthenticationKey.fromPartial(e))) || [];
        message.identityProviders = ((_g = object.identityProviders) === null || _g === void 0 ? void 0 : _g.map((e) => exports.IdentityProvider.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUsername() {
    return { usernameId: "", username: "", isOrganizationSpecific: false };
}
exports.Username = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.usernameId !== "") {
            writer.uint32(10).string(message.usernameId);
        }
        if (message.username !== "") {
            writer.uint32(18).string(message.username);
        }
        if (message.isOrganizationSpecific !== false) {
            writer.uint32(24).bool(message.isOrganizationSpecific);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUsername();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.usernameId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.username = reader.string();
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
            usernameId: isSet(object.usernameId) ? globalThis.String(object.usernameId) : "",
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            isOrganizationSpecific: isSet(object.isOrganizationSpecific)
                ? globalThis.Boolean(object.isOrganizationSpecific)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.usernameId !== "") {
            obj.usernameId = message.usernameId;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.isOrganizationSpecific !== false) {
            obj.isOrganizationSpecific = message.isOrganizationSpecific;
        }
        return obj;
    },
    create(base) {
        return exports.Username.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUsername();
        message.usernameId = (_a = object.usernameId) !== null && _a !== void 0 ? _a : "";
        message.username = (_b = object.username) !== null && _b !== void 0 ? _b : "";
        message.isOrganizationSpecific = (_c = object.isOrganizationSpecific) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseSetUsername() {
    return { username: "", isOrganizationSpecific: false };
}
exports.SetUsername = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.isOrganizationSpecific !== false) {
            writer.uint32(16).bool(message.isOrganizationSpecific);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetUsername();
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
        if (message.isOrganizationSpecific !== false) {
            obj.isOrganizationSpecific = message.isOrganizationSpecific;
        }
        return obj;
    },
    create(base) {
        return exports.SetUsername.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetUsername();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.isOrganizationSpecific = (_b = object.isOrganizationSpecific) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBasePassword() {
    return { lastChanged: undefined };
}
exports.Password = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.lastChanged !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.lastChanged), writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastChanged = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
        return { lastChanged: isSet(object.lastChanged) ? fromJsonTimestamp(object.lastChanged) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.lastChanged !== undefined) {
            obj.lastChanged = message.lastChanged.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.Password.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePassword();
        message.lastChanged = (_a = object.lastChanged) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseWebAuthN() {
    return { webAuthNId: "", name: "", isVerified: false, userVerified: false };
}
exports.WebAuthN = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.webAuthNId !== "") {
            writer.uint32(10).string(message.webAuthNId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.isVerified !== false) {
            writer.uint32(24).bool(message.isVerified);
        }
        if (message.userVerified !== false) {
            writer.uint32(32).bool(message.userVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebAuthN();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.webAuthNId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isVerified = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.userVerified = reader.bool();
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
            webAuthNId: isSet(object.webAuthNId) ? globalThis.String(object.webAuthNId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
            userVerified: isSet(object.userVerified) ? globalThis.Boolean(object.userVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.webAuthNId !== "") {
            obj.webAuthNId = message.webAuthNId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        if (message.userVerified !== false) {
            obj.userVerified = message.userVerified;
        }
        return obj;
    },
    create(base) {
        return exports.WebAuthN.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseWebAuthN();
        message.webAuthNId = (_a = object.webAuthNId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.isVerified = (_c = object.isVerified) !== null && _c !== void 0 ? _c : false;
        message.userVerified = (_d = object.userVerified) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseStartWebAuthNRegistration() {
    return { domain: "", authenticatorType: 0, code: undefined };
}
exports.StartWebAuthNRegistration = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.domain !== "") {
            writer.uint32(10).string(message.domain);
        }
        if (message.authenticatorType !== 0) {
            writer.uint32(16).int32(message.authenticatorType);
        }
        if (message.code !== undefined) {
            exports.AuthenticatorRegistrationCode.encode(message.code, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartWebAuthNRegistration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.domain = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.authenticatorType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.code = exports.AuthenticatorRegistrationCode.decode(reader, reader.uint32());
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
            domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
            authenticatorType: isSet(object.authenticatorType)
                ? webAuthNAuthenticatorTypeFromJSON(object.authenticatorType)
                : 0,
            code: isSet(object.code) ? exports.AuthenticatorRegistrationCode.fromJSON(object.code) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.domain !== "") {
            obj.domain = message.domain;
        }
        if (message.authenticatorType !== 0) {
            obj.authenticatorType = webAuthNAuthenticatorTypeToJSON(message.authenticatorType);
        }
        if (message.code !== undefined) {
            obj.code = exports.AuthenticatorRegistrationCode.toJSON(message.code);
        }
        return obj;
    },
    create(base) {
        return exports.StartWebAuthNRegistration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStartWebAuthNRegistration();
        message.domain = (_a = object.domain) !== null && _a !== void 0 ? _a : "";
        message.authenticatorType = (_b = object.authenticatorType) !== null && _b !== void 0 ? _b : 0;
        message.code = (object.code !== undefined && object.code !== null)
            ? exports.AuthenticatorRegistrationCode.fromPartial(object.code)
            : undefined;
        return message;
    },
};
function createBaseVerifyWebAuthNRegistration() {
    return { publicKeyCredential: undefined, webAuthNName: "" };
}
exports.VerifyWebAuthNRegistration = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.publicKeyCredential !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.publicKeyCredential), writer.uint32(10).fork()).join();
        }
        if (message.webAuthNName !== "") {
            writer.uint32(18).string(message.webAuthNName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyWebAuthNRegistration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.publicKeyCredential = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.webAuthNName = reader.string();
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
            publicKeyCredential: isObject(object.publicKeyCredential) ? object.publicKeyCredential : undefined,
            webAuthNName: isSet(object.webAuthNName) ? globalThis.String(object.webAuthNName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.publicKeyCredential !== undefined) {
            obj.publicKeyCredential = message.publicKeyCredential;
        }
        if (message.webAuthNName !== "") {
            obj.webAuthNName = message.webAuthNName;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyWebAuthNRegistration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVerifyWebAuthNRegistration();
        message.publicKeyCredential = (_a = object.publicKeyCredential) !== null && _a !== void 0 ? _a : undefined;
        message.webAuthNName = (_b = object.webAuthNName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseOTPSMS() {
    return { otpSmsId: "", phone: "", isVerified: false };
}
exports.OTPSMS = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.otpSmsId !== "") {
            writer.uint32(10).string(message.otpSmsId);
        }
        if (message.phone !== "") {
            writer.uint32(18).string(message.phone);
        }
        if (message.isVerified !== false) {
            writer.uint32(24).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOTPSMS();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.otpSmsId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isVerified = reader.bool();
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
            otpSmsId: isSet(object.otpSmsId) ? globalThis.String(object.otpSmsId) : "",
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.otpSmsId !== "") {
            obj.otpSmsId = message.otpSmsId;
        }
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.OTPSMS.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOTPSMS();
        message.otpSmsId = (_a = object.otpSmsId) !== null && _a !== void 0 ? _a : "";
        message.phone = (_b = object.phone) !== null && _b !== void 0 ? _b : "";
        message.isVerified = (_c = object.isVerified) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseOTPEmail() {
    return { otpEmailId: "", address: "", isVerified: false };
}
exports.OTPEmail = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.otpEmailId !== "") {
            writer.uint32(10).string(message.otpEmailId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.isVerified !== false) {
            writer.uint32(24).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOTPEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.otpEmailId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isVerified = reader.bool();
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
            otpEmailId: isSet(object.otpEmailId) ? globalThis.String(object.otpEmailId) : "",
            address: isSet(object.address) ? globalThis.String(object.address) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.otpEmailId !== "") {
            obj.otpEmailId = message.otpEmailId;
        }
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.OTPEmail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOTPEmail();
        message.otpEmailId = (_a = object.otpEmailId) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.isVerified = (_c = object.isVerified) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseTOTP() {
    return { totpId: "", name: "", isVerified: false };
}
exports.TOTP = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.totpId !== "") {
            writer.uint32(10).string(message.totpId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.isVerified !== false) {
            writer.uint32(24).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTOTP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.totpId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isVerified = reader.bool();
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
            totpId: isSet(object.totpId) ? globalThis.String(object.totpId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.totpId !== "") {
            obj.totpId = message.totpId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.TOTP.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTOTP();
        message.totpId = (_a = object.totpId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.isVerified = (_c = object.isVerified) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseAuthenticationKey() {
    return { authenticationKeyId: "", details: undefined, type: 0, expirationDate: undefined };
}
exports.AuthenticationKey = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.authenticationKeyId !== "") {
            writer.uint32(10).string(message.authenticationKeyId);
        }
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.expirationDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthenticationKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authenticationKeyId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            authenticationKeyId: isSet(object.authenticationKeyId) ? globalThis.String(object.authenticationKeyId) : "",
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            type: isSet(object.type) ? authNKeyTypeFromJSON(object.type) : 0,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authenticationKeyId !== "") {
            obj.authenticationKeyId = message.authenticationKeyId;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.type !== 0) {
            obj.type = authNKeyTypeToJSON(message.type);
        }
        if (message.expirationDate !== undefined) {
            obj.expirationDate = message.expirationDate.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.AuthenticationKey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAuthenticationKey();
        message.authenticationKeyId = (_a = object.authenticationKeyId) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.expirationDate = (_c = object.expirationDate) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseIdentityProvider() {
    return { idpId: "", idpName: "", userId: "", username: "" };
}
exports.IdentityProvider = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.idpName !== "") {
            writer.uint32(26).string(message.idpName);
        }
        if (message.userId !== "") {
            writer.uint32(34).string(message.userId);
        }
        if (message.username !== "") {
            writer.uint32(42).string(message.username);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentityProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idpName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.username = reader.string();
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
            idpName: isSet(object.idpName) ? globalThis.String(object.idpName) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            username: isSet(object.username) ? globalThis.String(object.username) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.idpName !== "") {
            obj.idpName = message.idpName;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        return obj;
    },
    create(base) {
        return exports.IdentityProvider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIdentityProvider();
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.idpName = (_b = object.idpName) !== null && _b !== void 0 ? _b : "";
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : "";
        message.username = (_d = object.username) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseSetAuthenticators() {
    return { usernames: [], password: undefined };
}
exports.SetAuthenticators = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.usernames) {
            exports.SetUsername.encode(v, writer.uint32(10).fork()).join();
        }
        if (message.password !== undefined) {
            exports.SetPassword.encode(message.password, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetAuthenticators();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.usernames.push(exports.SetUsername.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.password = exports.SetPassword.decode(reader, reader.uint32());
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
            usernames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.usernames)
                ? object.usernames.map((e) => exports.SetUsername.fromJSON(e))
                : [],
            password: isSet(object.password) ? exports.SetPassword.fromJSON(object.password) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.usernames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.usernames = message.usernames.map((e) => exports.SetUsername.toJSON(e));
        }
        if (message.password !== undefined) {
            obj.password = exports.SetPassword.toJSON(message.password);
        }
        return obj;
    },
    create(base) {
        return exports.SetAuthenticators.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetAuthenticators();
        message.usernames = ((_a = object.usernames) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SetUsername.fromPartial(e))) || [];
        message.password = (object.password !== undefined && object.password !== null)
            ? exports.SetPassword.fromPartial(object.password)
            : undefined;
        return message;
    },
};
function createBaseSetPassword() {
    return {
        password: undefined,
        hash: undefined,
        changeRequired: false,
        currentPassword: undefined,
        verificationCode: undefined,
    };
}
exports.SetPassword = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.password !== undefined) {
            writer.uint32(10).string(message.password);
        }
        if (message.hash !== undefined) {
            writer.uint32(18).string(message.hash);
        }
        if (message.changeRequired !== false) {
            writer.uint32(24).bool(message.changeRequired);
        }
        if (message.currentPassword !== undefined) {
            writer.uint32(34).string(message.currentPassword);
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(42).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.changeRequired = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.currentPassword = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.verificationCode = reader.string();
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
            password: isSet(object.password) ? globalThis.String(object.password) : undefined,
            hash: isSet(object.hash) ? globalThis.String(object.hash) : undefined,
            changeRequired: isSet(object.changeRequired) ? globalThis.Boolean(object.changeRequired) : false,
            currentPassword: isSet(object.currentPassword) ? globalThis.String(object.currentPassword) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.password !== undefined) {
            obj.password = message.password;
        }
        if (message.hash !== undefined) {
            obj.hash = message.hash;
        }
        if (message.changeRequired !== false) {
            obj.changeRequired = message.changeRequired;
        }
        if (message.currentPassword !== undefined) {
            obj.currentPassword = message.currentPassword;
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.SetPassword.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSetPassword();
        message.password = (_a = object.password) !== null && _a !== void 0 ? _a : undefined;
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : undefined;
        message.changeRequired = (_c = object.changeRequired) !== null && _c !== void 0 ? _c : false;
        message.currentPassword = (_d = object.currentPassword) !== null && _d !== void 0 ? _d : undefined;
        message.verificationCode = (_e = object.verificationCode) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseSendPasswordResetEmail() {
    return { urlTemplate: undefined };
}
exports.SendPasswordResetEmail = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(18).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPasswordResetEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.urlTemplate = reader.string();
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
        return { urlTemplate: isSet(object.urlTemplate) ? globalThis.String(object.urlTemplate) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.urlTemplate !== undefined) {
            obj.urlTemplate = message.urlTemplate;
        }
        return obj;
    },
    create(base) {
        return exports.SendPasswordResetEmail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendPasswordResetEmail();
        message.urlTemplate = (_a = object.urlTemplate) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseSendPasswordResetSMS() {
    return {};
}
exports.SendPasswordResetSMS = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPasswordResetSMS();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.SendPasswordResetSMS.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSendPasswordResetSMS();
        return message;
    },
};
function createBaseReturnPasswordResetCode() {
    return {};
}
exports.ReturnPasswordResetCode = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnPasswordResetCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ReturnPasswordResetCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseReturnPasswordResetCode();
        return message;
    },
};
function createBaseAuthenticatorRegistrationCode() {
    return { id: "", code: "" };
}
exports.AuthenticatorRegistrationCode = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthenticatorRegistrationCode();
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
                    message.code = reader.string();
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
            code: isSet(object.code) ? globalThis.String(object.code) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.code !== "") {
            obj.code = message.code;
        }
        return obj;
    },
    create(base) {
        return exports.AuthenticatorRegistrationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAuthenticatorRegistrationCode();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSendWebAuthNRegistrationLink() {
    return { urlTemplate: undefined };
}
exports.SendWebAuthNRegistrationLink = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendWebAuthNRegistrationLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.urlTemplate = reader.string();
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
        return { urlTemplate: isSet(object.urlTemplate) ? globalThis.String(object.urlTemplate) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.urlTemplate !== undefined) {
            obj.urlTemplate = message.urlTemplate;
        }
        return obj;
    },
    create(base) {
        return exports.SendWebAuthNRegistrationLink.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendWebAuthNRegistrationLink();
        message.urlTemplate = (_a = object.urlTemplate) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseReturnWebAuthNRegistrationCode() {
    return {};
}
exports.ReturnWebAuthNRegistrationCode = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnWebAuthNRegistrationCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ReturnWebAuthNRegistrationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseReturnWebAuthNRegistrationCode();
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
function createBaseIdentityProviderIntent() {
    return { idpIntentId: "", idpIntentToken: "", userId: undefined };
}
exports.IdentityProviderIntent = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpIntentId !== "") {
            writer.uint32(10).string(message.idpIntentId);
        }
        if (message.idpIntentToken !== "") {
            writer.uint32(18).string(message.idpIntentToken);
        }
        if (message.userId !== undefined) {
            writer.uint32(26).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentityProviderIntent();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : undefined,
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
        if (message.userId !== undefined) {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.IdentityProviderIntent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIdentityProviderIntent();
        message.idpIntentId = (_a = object.idpIntentId) !== null && _a !== void 0 ? _a : "";
        message.idpIntentToken = (_b = object.idpIntentToken) !== null && _b !== void 0 ? _b : "";
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseIDPInformation() {
    return {
        idpId: "",
        userId: "",
        userName: "",
        rawInformation: undefined,
        oauth: undefined,
        ldap: undefined,
        saml: undefined,
    };
}
exports.IDPInformation = {
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
        if (message.rawInformation !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.rawInformation), writer.uint32(34).fork()).join();
        }
        if (message.oauth !== undefined) {
            exports.IDPOAuthAccessInformation.encode(message.oauth, writer.uint32(42).fork()).join();
        }
        if (message.ldap !== undefined) {
            exports.IDPLDAPAccessInformation.encode(message.ldap, writer.uint32(50).fork()).join();
        }
        if (message.saml !== undefined) {
            exports.IDPSAMLAccessInformation.encode(message.saml, writer.uint32(58).fork()).join();
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
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.rawInformation = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
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
            rawInformation: isObject(object.rawInformation) ? object.rawInformation : undefined,
            oauth: isSet(object.oauth) ? exports.IDPOAuthAccessInformation.fromJSON(object.oauth) : undefined,
            ldap: isSet(object.ldap) ? exports.IDPLDAPAccessInformation.fromJSON(object.ldap) : undefined,
            saml: isSet(object.saml) ? exports.IDPSAMLAccessInformation.fromJSON(object.saml) : undefined,
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
        if (message.rawInformation !== undefined) {
            obj.rawInformation = message.rawInformation;
        }
        if (message.oauth !== undefined) {
            obj.oauth = exports.IDPOAuthAccessInformation.toJSON(message.oauth);
        }
        if (message.ldap !== undefined) {
            obj.ldap = exports.IDPLDAPAccessInformation.toJSON(message.ldap);
        }
        if (message.saml !== undefined) {
            obj.saml = exports.IDPSAMLAccessInformation.toJSON(message.saml);
        }
        return obj;
    },
    create(base) {
        return exports.IDPInformation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIDPInformation();
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : "";
        message.userName = (_c = object.userName) !== null && _c !== void 0 ? _c : "";
        message.rawInformation = (_d = object.rawInformation) !== null && _d !== void 0 ? _d : undefined;
        message.oauth = (object.oauth !== undefined && object.oauth !== null)
            ? exports.IDPOAuthAccessInformation.fromPartial(object.oauth)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? exports.IDPLDAPAccessInformation.fromPartial(object.ldap)
            : undefined;
        message.saml = (object.saml !== undefined && object.saml !== null)
            ? exports.IDPSAMLAccessInformation.fromPartial(object.saml)
            : undefined;
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
function createBaseIDPAuthenticator() {
    return { idpId: "", userId: "", userName: "" };
}
exports.IDPAuthenticator = {
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
        const message = createBaseIDPAuthenticator();
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
        return exports.IDPAuthenticator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIDPAuthenticator();
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
function toTimestamp(date) {
    const seconds = numberToLong(Math.trunc(date.getTime() / 1000));
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds.toNumber() || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=authenticator.js.map