"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnInviteCode = exports.SendInviteCode = exports.Passkey = exports.MachineUser = exports.User = exports.HumanUser = exports.SetMetadataEntry = exports.HumanProfile = exports.SetHumanProfile = exports.authFactorStateToJSON = exports.authFactorStateFromJSON = exports.AuthFactorState = exports.userStateToJSON = exports.userStateFromJSON = exports.UserState = exports.accessTokenTypeToJSON = exports.accessTokenTypeFromJSON = exports.AccessTokenType = exports.genderToJSON = exports.genderFromJSON = exports.Gender = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const timestamp_js_1 = require("../../../google/protobuf/timestamp.js");
const object_js_1 = require("../../object/v2/object.js");
const email_js_1 = require("./email.js");
const phone_js_1 = require("./phone.js");
exports.protobufPackage = "zitadel.user.v2";
var Gender;
(function (Gender) {
    Gender[Gender["GENDER_UNSPECIFIED"] = 0] = "GENDER_UNSPECIFIED";
    Gender[Gender["GENDER_FEMALE"] = 1] = "GENDER_FEMALE";
    Gender[Gender["GENDER_MALE"] = 2] = "GENDER_MALE";
    Gender[Gender["GENDER_DIVERSE"] = 3] = "GENDER_DIVERSE";
    Gender[Gender["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Gender = exports.Gender || (exports.Gender = {}));
function genderFromJSON(object) {
    switch (object) {
        case 0:
        case "GENDER_UNSPECIFIED":
            return Gender.GENDER_UNSPECIFIED;
        case 1:
        case "GENDER_FEMALE":
            return Gender.GENDER_FEMALE;
        case 2:
        case "GENDER_MALE":
            return Gender.GENDER_MALE;
        case 3:
        case "GENDER_DIVERSE":
            return Gender.GENDER_DIVERSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Gender.UNRECOGNIZED;
    }
}
exports.genderFromJSON = genderFromJSON;
function genderToJSON(object) {
    switch (object) {
        case Gender.GENDER_UNSPECIFIED:
            return "GENDER_UNSPECIFIED";
        case Gender.GENDER_FEMALE:
            return "GENDER_FEMALE";
        case Gender.GENDER_MALE:
            return "GENDER_MALE";
        case Gender.GENDER_DIVERSE:
            return "GENDER_DIVERSE";
        case Gender.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.genderToJSON = genderToJSON;
var AccessTokenType;
(function (AccessTokenType) {
    AccessTokenType[AccessTokenType["ACCESS_TOKEN_TYPE_BEARER"] = 0] = "ACCESS_TOKEN_TYPE_BEARER";
    AccessTokenType[AccessTokenType["ACCESS_TOKEN_TYPE_JWT"] = 1] = "ACCESS_TOKEN_TYPE_JWT";
    AccessTokenType[AccessTokenType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessTokenType = exports.AccessTokenType || (exports.AccessTokenType = {}));
function accessTokenTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TOKEN_TYPE_BEARER":
            return AccessTokenType.ACCESS_TOKEN_TYPE_BEARER;
        case 1:
        case "ACCESS_TOKEN_TYPE_JWT":
            return AccessTokenType.ACCESS_TOKEN_TYPE_JWT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessTokenType.UNRECOGNIZED;
    }
}
exports.accessTokenTypeFromJSON = accessTokenTypeFromJSON;
function accessTokenTypeToJSON(object) {
    switch (object) {
        case AccessTokenType.ACCESS_TOKEN_TYPE_BEARER:
            return "ACCESS_TOKEN_TYPE_BEARER";
        case AccessTokenType.ACCESS_TOKEN_TYPE_JWT:
            return "ACCESS_TOKEN_TYPE_JWT";
        case AccessTokenType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accessTokenTypeToJSON = accessTokenTypeToJSON;
var UserState;
(function (UserState) {
    UserState[UserState["USER_STATE_UNSPECIFIED"] = 0] = "USER_STATE_UNSPECIFIED";
    UserState[UserState["USER_STATE_ACTIVE"] = 1] = "USER_STATE_ACTIVE";
    UserState[UserState["USER_STATE_INACTIVE"] = 2] = "USER_STATE_INACTIVE";
    UserState[UserState["USER_STATE_DELETED"] = 3] = "USER_STATE_DELETED";
    UserState[UserState["USER_STATE_LOCKED"] = 4] = "USER_STATE_LOCKED";
    UserState[UserState["USER_STATE_INITIAL"] = 5] = "USER_STATE_INITIAL";
    UserState[UserState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserState = exports.UserState || (exports.UserState = {}));
function userStateFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_STATE_UNSPECIFIED":
            return UserState.USER_STATE_UNSPECIFIED;
        case 1:
        case "USER_STATE_ACTIVE":
            return UserState.USER_STATE_ACTIVE;
        case 2:
        case "USER_STATE_INACTIVE":
            return UserState.USER_STATE_INACTIVE;
        case 3:
        case "USER_STATE_DELETED":
            return UserState.USER_STATE_DELETED;
        case 4:
        case "USER_STATE_LOCKED":
            return UserState.USER_STATE_LOCKED;
        case 5:
        case "USER_STATE_INITIAL":
            return UserState.USER_STATE_INITIAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserState.UNRECOGNIZED;
    }
}
exports.userStateFromJSON = userStateFromJSON;
function userStateToJSON(object) {
    switch (object) {
        case UserState.USER_STATE_UNSPECIFIED:
            return "USER_STATE_UNSPECIFIED";
        case UserState.USER_STATE_ACTIVE:
            return "USER_STATE_ACTIVE";
        case UserState.USER_STATE_INACTIVE:
            return "USER_STATE_INACTIVE";
        case UserState.USER_STATE_DELETED:
            return "USER_STATE_DELETED";
        case UserState.USER_STATE_LOCKED:
            return "USER_STATE_LOCKED";
        case UserState.USER_STATE_INITIAL:
            return "USER_STATE_INITIAL";
        case UserState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userStateToJSON = userStateToJSON;
var AuthFactorState;
(function (AuthFactorState) {
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_UNSPECIFIED"] = 0] = "AUTH_FACTOR_STATE_UNSPECIFIED";
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_NOT_READY"] = 1] = "AUTH_FACTOR_STATE_NOT_READY";
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_READY"] = 2] = "AUTH_FACTOR_STATE_READY";
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_REMOVED"] = 3] = "AUTH_FACTOR_STATE_REMOVED";
    AuthFactorState[AuthFactorState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthFactorState = exports.AuthFactorState || (exports.AuthFactorState = {}));
function authFactorStateFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTH_FACTOR_STATE_UNSPECIFIED":
            return AuthFactorState.AUTH_FACTOR_STATE_UNSPECIFIED;
        case 1:
        case "AUTH_FACTOR_STATE_NOT_READY":
            return AuthFactorState.AUTH_FACTOR_STATE_NOT_READY;
        case 2:
        case "AUTH_FACTOR_STATE_READY":
            return AuthFactorState.AUTH_FACTOR_STATE_READY;
        case 3:
        case "AUTH_FACTOR_STATE_REMOVED":
            return AuthFactorState.AUTH_FACTOR_STATE_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthFactorState.UNRECOGNIZED;
    }
}
exports.authFactorStateFromJSON = authFactorStateFromJSON;
function authFactorStateToJSON(object) {
    switch (object) {
        case AuthFactorState.AUTH_FACTOR_STATE_UNSPECIFIED:
            return "AUTH_FACTOR_STATE_UNSPECIFIED";
        case AuthFactorState.AUTH_FACTOR_STATE_NOT_READY:
            return "AUTH_FACTOR_STATE_NOT_READY";
        case AuthFactorState.AUTH_FACTOR_STATE_READY:
            return "AUTH_FACTOR_STATE_READY";
        case AuthFactorState.AUTH_FACTOR_STATE_REMOVED:
            return "AUTH_FACTOR_STATE_REMOVED";
        case AuthFactorState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authFactorStateToJSON = authFactorStateToJSON;
function createBaseSetHumanProfile() {
    return {
        givenName: "",
        familyName: "",
        nickName: undefined,
        displayName: undefined,
        preferredLanguage: undefined,
        gender: undefined,
    };
}
exports.SetHumanProfile = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.givenName !== "") {
            writer.uint32(10).string(message.givenName);
        }
        if (message.familyName !== "") {
            writer.uint32(18).string(message.familyName);
        }
        if (message.nickName !== undefined) {
            writer.uint32(26).string(message.nickName);
        }
        if (message.displayName !== undefined) {
            writer.uint32(34).string(message.displayName);
        }
        if (message.preferredLanguage !== undefined) {
            writer.uint32(42).string(message.preferredLanguage);
        }
        if (message.gender !== undefined) {
            writer.uint32(48).int32(message.gender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetHumanProfile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.familyName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nickName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLanguage = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gender = reader.int32();
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
            givenName: isSet(object.givenName) ? globalThis.String(object.givenName) : "",
            familyName: isSet(object.familyName) ? globalThis.String(object.familyName) : "",
            nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : undefined,
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : undefined,
            preferredLanguage: isSet(object.preferredLanguage) ? globalThis.String(object.preferredLanguage) : undefined,
            gender: isSet(object.gender) ? genderFromJSON(object.gender) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.givenName !== "") {
            obj.givenName = message.givenName;
        }
        if (message.familyName !== "") {
            obj.familyName = message.familyName;
        }
        if (message.nickName !== undefined) {
            obj.nickName = message.nickName;
        }
        if (message.displayName !== undefined) {
            obj.displayName = message.displayName;
        }
        if (message.preferredLanguage !== undefined) {
            obj.preferredLanguage = message.preferredLanguage;
        }
        if (message.gender !== undefined) {
            obj.gender = genderToJSON(message.gender);
        }
        return obj;
    },
    create(base) {
        return exports.SetHumanProfile.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSetHumanProfile();
        message.givenName = (_a = object.givenName) !== null && _a !== void 0 ? _a : "";
        message.familyName = (_b = object.familyName) !== null && _b !== void 0 ? _b : "";
        message.nickName = (_c = object.nickName) !== null && _c !== void 0 ? _c : undefined;
        message.displayName = (_d = object.displayName) !== null && _d !== void 0 ? _d : undefined;
        message.preferredLanguage = (_e = object.preferredLanguage) !== null && _e !== void 0 ? _e : undefined;
        message.gender = (_f = object.gender) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseHumanProfile() {
    return {
        givenName: "",
        familyName: "",
        nickName: undefined,
        displayName: undefined,
        preferredLanguage: undefined,
        gender: undefined,
        avatarUrl: "",
    };
}
exports.HumanProfile = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.givenName !== "") {
            writer.uint32(10).string(message.givenName);
        }
        if (message.familyName !== "") {
            writer.uint32(18).string(message.familyName);
        }
        if (message.nickName !== undefined) {
            writer.uint32(26).string(message.nickName);
        }
        if (message.displayName !== undefined) {
            writer.uint32(34).string(message.displayName);
        }
        if (message.preferredLanguage !== undefined) {
            writer.uint32(42).string(message.preferredLanguage);
        }
        if (message.gender !== undefined) {
            writer.uint32(48).int32(message.gender);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(58).string(message.avatarUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHumanProfile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.familyName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nickName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLanguage = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gender = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.avatarUrl = reader.string();
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
            givenName: isSet(object.givenName) ? globalThis.String(object.givenName) : "",
            familyName: isSet(object.familyName) ? globalThis.String(object.familyName) : "",
            nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : undefined,
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : undefined,
            preferredLanguage: isSet(object.preferredLanguage) ? globalThis.String(object.preferredLanguage) : undefined,
            gender: isSet(object.gender) ? genderFromJSON(object.gender) : undefined,
            avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.givenName !== "") {
            obj.givenName = message.givenName;
        }
        if (message.familyName !== "") {
            obj.familyName = message.familyName;
        }
        if (message.nickName !== undefined) {
            obj.nickName = message.nickName;
        }
        if (message.displayName !== undefined) {
            obj.displayName = message.displayName;
        }
        if (message.preferredLanguage !== undefined) {
            obj.preferredLanguage = message.preferredLanguage;
        }
        if (message.gender !== undefined) {
            obj.gender = genderToJSON(message.gender);
        }
        if (message.avatarUrl !== "") {
            obj.avatarUrl = message.avatarUrl;
        }
        return obj;
    },
    create(base) {
        return exports.HumanProfile.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseHumanProfile();
        message.givenName = (_a = object.givenName) !== null && _a !== void 0 ? _a : "";
        message.familyName = (_b = object.familyName) !== null && _b !== void 0 ? _b : "";
        message.nickName = (_c = object.nickName) !== null && _c !== void 0 ? _c : undefined;
        message.displayName = (_d = object.displayName) !== null && _d !== void 0 ? _d : undefined;
        message.preferredLanguage = (_e = object.preferredLanguage) !== null && _e !== void 0 ? _e : undefined;
        message.gender = (_f = object.gender) !== null && _f !== void 0 ? _f : undefined;
        message.avatarUrl = (_g = object.avatarUrl) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseSetMetadataEntry() {
    return { key: "", value: Buffer.alloc(0) };
}
exports.SetMetadataEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = Buffer.from(reader.bytes());
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.SetMetadataEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetMetadataEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
function createBaseHumanUser() {
    return {
        userId: "",
        state: 0,
        username: "",
        loginNames: [],
        preferredLoginName: "",
        profile: undefined,
        email: undefined,
        phone: undefined,
        passwordChangeRequired: false,
        passwordChanged: undefined,
    };
}
exports.HumanUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.username !== "") {
            writer.uint32(26).string(message.username);
        }
        for (const v of message.loginNames) {
            writer.uint32(34).string(v);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(42).string(message.preferredLoginName);
        }
        if (message.profile !== undefined) {
            exports.HumanProfile.encode(message.profile, writer.uint32(50).fork()).join();
        }
        if (message.email !== undefined) {
            email_js_1.HumanEmail.encode(message.email, writer.uint32(58).fork()).join();
        }
        if (message.phone !== undefined) {
            phone_js_1.HumanPhone.encode(message.phone, writer.uint32(66).fork()).join();
        }
        if (message.passwordChangeRequired !== false) {
            writer.uint32(72).bool(message.passwordChangeRequired);
        }
        if (message.passwordChanged !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.passwordChanged), writer.uint32(82).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHumanUser();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.loginNames.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.profile = exports.HumanProfile.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.email = email_js_1.HumanEmail.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.phone = phone_js_1.HumanPhone.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.passwordChangeRequired = reader.bool();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.passwordChanged = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            state: isSet(object.state) ? userStateFromJSON(object.state) : 0,
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            loginNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.loginNames)
                ? object.loginNames.map((e) => globalThis.String(e))
                : [],
            preferredLoginName: isSet(object.preferredLoginName) ? globalThis.String(object.preferredLoginName) : "",
            profile: isSet(object.profile) ? exports.HumanProfile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? email_js_1.HumanEmail.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? phone_js_1.HumanPhone.fromJSON(object.phone) : undefined,
            passwordChangeRequired: isSet(object.passwordChangeRequired)
                ? globalThis.Boolean(object.passwordChangeRequired)
                : false,
            passwordChanged: isSet(object.passwordChanged) ? fromJsonTimestamp(object.passwordChanged) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.state !== 0) {
            obj.state = userStateToJSON(message.state);
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if ((_a = message.loginNames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.loginNames = message.loginNames;
        }
        if (message.preferredLoginName !== "") {
            obj.preferredLoginName = message.preferredLoginName;
        }
        if (message.profile !== undefined) {
            obj.profile = exports.HumanProfile.toJSON(message.profile);
        }
        if (message.email !== undefined) {
            obj.email = email_js_1.HumanEmail.toJSON(message.email);
        }
        if (message.phone !== undefined) {
            obj.phone = phone_js_1.HumanPhone.toJSON(message.phone);
        }
        if (message.passwordChangeRequired !== false) {
            obj.passwordChangeRequired = message.passwordChangeRequired;
        }
        if (message.passwordChanged !== undefined) {
            obj.passwordChanged = message.passwordChanged.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.HumanUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseHumanUser();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.username = (_c = object.username) !== null && _c !== void 0 ? _c : "";
        message.loginNames = ((_d = object.loginNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.preferredLoginName = (_e = object.preferredLoginName) !== null && _e !== void 0 ? _e : "";
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? exports.HumanProfile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null)
            ? email_js_1.HumanEmail.fromPartial(object.email)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? phone_js_1.HumanPhone.fromPartial(object.phone)
            : undefined;
        message.passwordChangeRequired = (_f = object.passwordChangeRequired) !== null && _f !== void 0 ? _f : false;
        message.passwordChanged = (_g = object.passwordChanged) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseUser() {
    return {
        userId: "",
        details: undefined,
        state: 0,
        username: "",
        loginNames: [],
        preferredLoginName: "",
        human: undefined,
        machine: undefined,
    };
}
exports.User = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(66).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.username !== "") {
            writer.uint32(26).string(message.username);
        }
        for (const v of message.loginNames) {
            writer.uint32(34).string(v);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(42).string(message.preferredLoginName);
        }
        if (message.human !== undefined) {
            exports.HumanUser.encode(message.human, writer.uint32(50).fork()).join();
        }
        if (message.machine !== undefined) {
            exports.MachineUser.encode(message.machine, writer.uint32(58).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.loginNames.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.human = exports.HumanUser.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.machine = exports.MachineUser.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? userStateFromJSON(object.state) : 0,
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            loginNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.loginNames)
                ? object.loginNames.map((e) => globalThis.String(e))
                : [],
            preferredLoginName: isSet(object.preferredLoginName) ? globalThis.String(object.preferredLoginName) : "",
            human: isSet(object.human) ? exports.HumanUser.fromJSON(object.human) : undefined,
            machine: isSet(object.machine) ? exports.MachineUser.fromJSON(object.machine) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = userStateToJSON(message.state);
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if ((_a = message.loginNames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.loginNames = message.loginNames;
        }
        if (message.preferredLoginName !== "") {
            obj.preferredLoginName = message.preferredLoginName;
        }
        if (message.human !== undefined) {
            obj.human = exports.HumanUser.toJSON(message.human);
        }
        if (message.machine !== undefined) {
            obj.machine = exports.MachineUser.toJSON(message.machine);
        }
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseUser();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.username = (_c = object.username) !== null && _c !== void 0 ? _c : "";
        message.loginNames = ((_d = object.loginNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.preferredLoginName = (_e = object.preferredLoginName) !== null && _e !== void 0 ? _e : "";
        message.human = (object.human !== undefined && object.human !== null)
            ? exports.HumanUser.fromPartial(object.human)
            : undefined;
        message.machine = (object.machine !== undefined && object.machine !== null)
            ? exports.MachineUser.fromPartial(object.machine)
            : undefined;
        return message;
    },
};
function createBaseMachineUser() {
    return { name: "", description: "", hasSecret: false, accessTokenType: 0 };
}
exports.MachineUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.hasSecret !== false) {
            writer.uint32(24).bool(message.hasSecret);
        }
        if (message.accessTokenType !== 0) {
            writer.uint32(32).int32(message.accessTokenType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMachineUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.hasSecret = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.accessTokenType = reader.int32();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            hasSecret: isSet(object.hasSecret) ? globalThis.Boolean(object.hasSecret) : false,
            accessTokenType: isSet(object.accessTokenType) ? accessTokenTypeFromJSON(object.accessTokenType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.hasSecret !== false) {
            obj.hasSecret = message.hasSecret;
        }
        if (message.accessTokenType !== 0) {
            obj.accessTokenType = accessTokenTypeToJSON(message.accessTokenType);
        }
        return obj;
    },
    create(base) {
        return exports.MachineUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMachineUser();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.hasSecret = (_c = object.hasSecret) !== null && _c !== void 0 ? _c : false;
        message.accessTokenType = (_d = object.accessTokenType) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBasePasskey() {
    return { id: "", state: 0, name: "" };
}
exports.Passkey = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasskey();
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
                    message.state = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
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
            state: isSet(object.state) ? authFactorStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.state !== 0) {
            obj.state = authFactorStateToJSON(message.state);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Passkey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePasskey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseSendInviteCode() {
    return { urlTemplate: undefined, applicationName: undefined };
}
exports.SendInviteCode = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        if (message.applicationName !== undefined) {
            writer.uint32(18).string(message.applicationName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendInviteCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.urlTemplate = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.applicationName = reader.string();
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
            urlTemplate: isSet(object.urlTemplate) ? globalThis.String(object.urlTemplate) : undefined,
            applicationName: isSet(object.applicationName) ? globalThis.String(object.applicationName) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.urlTemplate !== undefined) {
            obj.urlTemplate = message.urlTemplate;
        }
        if (message.applicationName !== undefined) {
            obj.applicationName = message.applicationName;
        }
        return obj;
    },
    create(base) {
        return exports.SendInviteCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSendInviteCode();
        message.urlTemplate = (_a = object.urlTemplate) !== null && _a !== void 0 ? _a : undefined;
        message.applicationName = (_b = object.applicationName) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseReturnInviteCode() {
    return {};
}
exports.ReturnInviteCode = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnInviteCode();
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
        return exports.ReturnInviteCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseReturnInviteCode();
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=user.js.map