"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactorOTPEmail = exports.AuthFactorOTPSMS = exports.AuthFactorOTP = exports.AuthFactor = exports.TypeQuery = exports.StateQuery = exports.LoginNameQuery = exports.EmailQuery = exports.DisplayNameQuery = exports.NickNameQuery = exports.LastNameQuery = exports.FirstNameQuery = exports.UserNameQuery = exports.InUserEmailsQuery = exports.InUserIDQuery = exports.NotQuery = exports.AndQuery = exports.OrQuery = exports.SearchQuery = exports.Phone = exports.Email = exports.Profile = exports.Machine = exports.Human = exports.User = exports.userGrantStateToJSON = exports.userGrantStateFromJSON = exports.UserGrantState = exports.sessionStateToJSON = exports.sessionStateFromJSON = exports.SessionState = exports.authFactorStateToJSON = exports.authFactorStateFromJSON = exports.AuthFactorState = exports.userFieldNameToJSON = exports.userFieldNameFromJSON = exports.UserFieldName = exports.typeToJSON = exports.typeFromJSON = exports.Type = exports.accessTokenTypeToJSON = exports.accessTokenTypeFromJSON = exports.AccessTokenType = exports.genderToJSON = exports.genderFromJSON = exports.Gender = exports.userStateToJSON = exports.userStateFromJSON = exports.UserState = exports.protobufPackage = void 0;
exports.UserGrantUserTypeQuery = exports.UserGrantDisplayNameQuery = exports.UserGrantProjectNameQuery = exports.UserGrantOrgDomainQuery = exports.UserGrantOrgNameQuery = exports.UserGrantEmailQuery = exports.UserGrantLastNameQuery = exports.UserGrantFirstNameQuery = exports.UserGrantUserNameQuery = exports.UserGrantProjectGrantIDQuery = exports.UserGrantRoleKeyQuery = exports.UserGrantWithGrantedQuery = exports.UserGrantUserIDQuery = exports.UserGrantProjectIDQuery = exports.UserGrantQuery = exports.UserGrant = exports.PersonalAccessToken = exports.RefreshToken = exports.Session = exports.MembershipIAMQuery = exports.MembershipProjectGrantQuery = exports.MembershipProjectQuery = exports.MembershipOrgQuery = exports.MembershipQuery = exports.Membership = exports.WebAuthNToken = exports.WebAuthNVerification = exports.WebAuthNKey = exports.AuthFactorU2F = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const timestamp_js_1 = require("../google/protobuf/timestamp.js");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.user.v1";
var UserState;
(function (UserState) {
    UserState[UserState["USER_STATE_UNSPECIFIED"] = 0] = "USER_STATE_UNSPECIFIED";
    UserState[UserState["USER_STATE_ACTIVE"] = 1] = "USER_STATE_ACTIVE";
    UserState[UserState["USER_STATE_INACTIVE"] = 2] = "USER_STATE_INACTIVE";
    UserState[UserState["USER_STATE_DELETED"] = 3] = "USER_STATE_DELETED";
    UserState[UserState["USER_STATE_LOCKED"] = 4] = "USER_STATE_LOCKED";
    UserState[UserState["USER_STATE_SUSPEND"] = 5] = "USER_STATE_SUSPEND";
    UserState[UserState["USER_STATE_INITIAL"] = 6] = "USER_STATE_INITIAL";
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
        case "USER_STATE_SUSPEND":
            return UserState.USER_STATE_SUSPEND;
        case 6:
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
        case UserState.USER_STATE_SUSPEND:
            return "USER_STATE_SUSPEND";
        case UserState.USER_STATE_INITIAL:
            return "USER_STATE_INITIAL";
        case UserState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userStateToJSON = userStateToJSON;
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
var Type;
(function (Type) {
    Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Type[Type["TYPE_HUMAN"] = 1] = "TYPE_HUMAN";
    Type[Type["TYPE_MACHINE"] = 2] = "TYPE_MACHINE";
    Type[Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Type = exports.Type || (exports.Type = {}));
function typeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_HUMAN":
            return Type.TYPE_HUMAN;
        case 2:
        case "TYPE_MACHINE":
            return Type.TYPE_MACHINE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Type.UNRECOGNIZED;
    }
}
exports.typeFromJSON = typeFromJSON;
function typeToJSON(object) {
    switch (object) {
        case Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Type.TYPE_HUMAN:
            return "TYPE_HUMAN";
        case Type.TYPE_MACHINE:
            return "TYPE_MACHINE";
        case Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.typeToJSON = typeToJSON;
var UserFieldName;
(function (UserFieldName) {
    UserFieldName[UserFieldName["USER_FIELD_NAME_UNSPECIFIED"] = 0] = "USER_FIELD_NAME_UNSPECIFIED";
    UserFieldName[UserFieldName["USER_FIELD_NAME_USER_NAME"] = 1] = "USER_FIELD_NAME_USER_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_FIRST_NAME"] = 2] = "USER_FIELD_NAME_FIRST_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_LAST_NAME"] = 3] = "USER_FIELD_NAME_LAST_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_NICK_NAME"] = 4] = "USER_FIELD_NAME_NICK_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_DISPLAY_NAME"] = 5] = "USER_FIELD_NAME_DISPLAY_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_EMAIL"] = 6] = "USER_FIELD_NAME_EMAIL";
    UserFieldName[UserFieldName["USER_FIELD_NAME_STATE"] = 7] = "USER_FIELD_NAME_STATE";
    UserFieldName[UserFieldName["USER_FIELD_NAME_TYPE"] = 8] = "USER_FIELD_NAME_TYPE";
    UserFieldName[UserFieldName["USER_FIELD_NAME_CREATION_DATE"] = 9] = "USER_FIELD_NAME_CREATION_DATE";
    UserFieldName[UserFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserFieldName = exports.UserFieldName || (exports.UserFieldName = {}));
function userFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_FIELD_NAME_UNSPECIFIED":
            return UserFieldName.USER_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "USER_FIELD_NAME_USER_NAME":
            return UserFieldName.USER_FIELD_NAME_USER_NAME;
        case 2:
        case "USER_FIELD_NAME_FIRST_NAME":
            return UserFieldName.USER_FIELD_NAME_FIRST_NAME;
        case 3:
        case "USER_FIELD_NAME_LAST_NAME":
            return UserFieldName.USER_FIELD_NAME_LAST_NAME;
        case 4:
        case "USER_FIELD_NAME_NICK_NAME":
            return UserFieldName.USER_FIELD_NAME_NICK_NAME;
        case 5:
        case "USER_FIELD_NAME_DISPLAY_NAME":
            return UserFieldName.USER_FIELD_NAME_DISPLAY_NAME;
        case 6:
        case "USER_FIELD_NAME_EMAIL":
            return UserFieldName.USER_FIELD_NAME_EMAIL;
        case 7:
        case "USER_FIELD_NAME_STATE":
            return UserFieldName.USER_FIELD_NAME_STATE;
        case 8:
        case "USER_FIELD_NAME_TYPE":
            return UserFieldName.USER_FIELD_NAME_TYPE;
        case 9:
        case "USER_FIELD_NAME_CREATION_DATE":
            return UserFieldName.USER_FIELD_NAME_CREATION_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserFieldName.UNRECOGNIZED;
    }
}
exports.userFieldNameFromJSON = userFieldNameFromJSON;
function userFieldNameToJSON(object) {
    switch (object) {
        case UserFieldName.USER_FIELD_NAME_UNSPECIFIED:
            return "USER_FIELD_NAME_UNSPECIFIED";
        case UserFieldName.USER_FIELD_NAME_USER_NAME:
            return "USER_FIELD_NAME_USER_NAME";
        case UserFieldName.USER_FIELD_NAME_FIRST_NAME:
            return "USER_FIELD_NAME_FIRST_NAME";
        case UserFieldName.USER_FIELD_NAME_LAST_NAME:
            return "USER_FIELD_NAME_LAST_NAME";
        case UserFieldName.USER_FIELD_NAME_NICK_NAME:
            return "USER_FIELD_NAME_NICK_NAME";
        case UserFieldName.USER_FIELD_NAME_DISPLAY_NAME:
            return "USER_FIELD_NAME_DISPLAY_NAME";
        case UserFieldName.USER_FIELD_NAME_EMAIL:
            return "USER_FIELD_NAME_EMAIL";
        case UserFieldName.USER_FIELD_NAME_STATE:
            return "USER_FIELD_NAME_STATE";
        case UserFieldName.USER_FIELD_NAME_TYPE:
            return "USER_FIELD_NAME_TYPE";
        case UserFieldName.USER_FIELD_NAME_CREATION_DATE:
            return "USER_FIELD_NAME_CREATION_DATE";
        case UserFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userFieldNameToJSON = userFieldNameToJSON;
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
var SessionState;
(function (SessionState) {
    SessionState[SessionState["SESSION_STATE_UNSPECIFIED"] = 0] = "SESSION_STATE_UNSPECIFIED";
    SessionState[SessionState["SESSION_STATE_ACTIVE"] = 1] = "SESSION_STATE_ACTIVE";
    SessionState[SessionState["SESSION_STATE_TERMINATED"] = 2] = "SESSION_STATE_TERMINATED";
    SessionState[SessionState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SessionState = exports.SessionState || (exports.SessionState = {}));
function sessionStateFromJSON(object) {
    switch (object) {
        case 0:
        case "SESSION_STATE_UNSPECIFIED":
            return SessionState.SESSION_STATE_UNSPECIFIED;
        case 1:
        case "SESSION_STATE_ACTIVE":
            return SessionState.SESSION_STATE_ACTIVE;
        case 2:
        case "SESSION_STATE_TERMINATED":
            return SessionState.SESSION_STATE_TERMINATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SessionState.UNRECOGNIZED;
    }
}
exports.sessionStateFromJSON = sessionStateFromJSON;
function sessionStateToJSON(object) {
    switch (object) {
        case SessionState.SESSION_STATE_UNSPECIFIED:
            return "SESSION_STATE_UNSPECIFIED";
        case SessionState.SESSION_STATE_ACTIVE:
            return "SESSION_STATE_ACTIVE";
        case SessionState.SESSION_STATE_TERMINATED:
            return "SESSION_STATE_TERMINATED";
        case SessionState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sessionStateToJSON = sessionStateToJSON;
var UserGrantState;
(function (UserGrantState) {
    UserGrantState[UserGrantState["USER_GRANT_STATE_UNSPECIFIED"] = 0] = "USER_GRANT_STATE_UNSPECIFIED";
    UserGrantState[UserGrantState["USER_GRANT_STATE_ACTIVE"] = 1] = "USER_GRANT_STATE_ACTIVE";
    UserGrantState[UserGrantState["USER_GRANT_STATE_INACTIVE"] = 2] = "USER_GRANT_STATE_INACTIVE";
    UserGrantState[UserGrantState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserGrantState = exports.UserGrantState || (exports.UserGrantState = {}));
function userGrantStateFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_GRANT_STATE_UNSPECIFIED":
            return UserGrantState.USER_GRANT_STATE_UNSPECIFIED;
        case 1:
        case "USER_GRANT_STATE_ACTIVE":
            return UserGrantState.USER_GRANT_STATE_ACTIVE;
        case 2:
        case "USER_GRANT_STATE_INACTIVE":
            return UserGrantState.USER_GRANT_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserGrantState.UNRECOGNIZED;
    }
}
exports.userGrantStateFromJSON = userGrantStateFromJSON;
function userGrantStateToJSON(object) {
    switch (object) {
        case UserGrantState.USER_GRANT_STATE_UNSPECIFIED:
            return "USER_GRANT_STATE_UNSPECIFIED";
        case UserGrantState.USER_GRANT_STATE_ACTIVE:
            return "USER_GRANT_STATE_ACTIVE";
        case UserGrantState.USER_GRANT_STATE_INACTIVE:
            return "USER_GRANT_STATE_INACTIVE";
        case UserGrantState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userGrantStateToJSON = userGrantStateToJSON;
function createBaseUser() {
    return {
        id: "",
        details: undefined,
        state: 0,
        userName: "",
        loginNames: [],
        preferredLoginName: "",
        human: undefined,
        machine: undefined,
    };
}
exports.User = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.userName !== "") {
            writer.uint32(34).string(message.userName);
        }
        for (const v of message.loginNames) {
            writer.uint32(42).string(v);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(50).string(message.preferredLoginName);
        }
        if (message.human !== undefined) {
            exports.Human.encode(message.human, writer.uint32(58).fork()).join();
        }
        if (message.machine !== undefined) {
            exports.Machine.encode(message.machine, writer.uint32(66).fork()).join();
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
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
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
                    message.loginNames.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.human = exports.Human.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.machine = exports.Machine.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? userStateFromJSON(object.state) : 0,
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            loginNames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.loginNames)
                ? object.loginNames.map((e) => globalThis.String(e))
                : [],
            preferredLoginName: isSet(object.preferredLoginName) ? globalThis.String(object.preferredLoginName) : "",
            human: isSet(object.human) ? exports.Human.fromJSON(object.human) : undefined,
            machine: isSet(object.machine) ? exports.Machine.fromJSON(object.machine) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = userStateToJSON(message.state);
        }
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if ((_a = message.loginNames) === null || _a === void 0 ? void 0 : _a.length) {
            obj.loginNames = message.loginNames;
        }
        if (message.preferredLoginName !== "") {
            obj.preferredLoginName = message.preferredLoginName;
        }
        if (message.human !== undefined) {
            obj.human = exports.Human.toJSON(message.human);
        }
        if (message.machine !== undefined) {
            obj.machine = exports.Machine.toJSON(message.machine);
        }
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseUser();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.userName = (_c = object.userName) !== null && _c !== void 0 ? _c : "";
        message.loginNames = ((_d = object.loginNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.preferredLoginName = (_e = object.preferredLoginName) !== null && _e !== void 0 ? _e : "";
        message.human = (object.human !== undefined && object.human !== null) ? exports.Human.fromPartial(object.human) : undefined;
        message.machine = (object.machine !== undefined && object.machine !== null)
            ? exports.Machine.fromPartial(object.machine)
            : undefined;
        return message;
    },
};
function createBaseHuman() {
    return { profile: undefined, email: undefined, phone: undefined, passwordChanged: undefined };
}
exports.Human = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.profile !== undefined) {
            exports.Profile.encode(message.profile, writer.uint32(10).fork()).join();
        }
        if (message.email !== undefined) {
            exports.Email.encode(message.email, writer.uint32(18).fork()).join();
        }
        if (message.phone !== undefined) {
            exports.Phone.encode(message.phone, writer.uint32(26).fork()).join();
        }
        if (message.passwordChanged !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.passwordChanged), writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHuman();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.profile = exports.Profile.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = exports.Email.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.phone = exports.Phone.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
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
            profile: isSet(object.profile) ? exports.Profile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? exports.Email.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? exports.Phone.fromJSON(object.phone) : undefined,
            passwordChanged: isSet(object.passwordChanged) ? fromJsonTimestamp(object.passwordChanged) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.profile !== undefined) {
            obj.profile = exports.Profile.toJSON(message.profile);
        }
        if (message.email !== undefined) {
            obj.email = exports.Email.toJSON(message.email);
        }
        if (message.phone !== undefined) {
            obj.phone = exports.Phone.toJSON(message.phone);
        }
        if (message.passwordChanged !== undefined) {
            obj.passwordChanged = message.passwordChanged.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.Human.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHuman();
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? exports.Profile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null) ? exports.Email.fromPartial(object.email) : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null) ? exports.Phone.fromPartial(object.phone) : undefined;
        message.passwordChanged = (_a = object.passwordChanged) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseMachine() {
    return { name: "", description: "", hasSecret: false, accessTokenType: 0 };
}
exports.Machine = {
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
        const message = createBaseMachine();
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
        return exports.Machine.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMachine();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.hasSecret = (_c = object.hasSecret) !== null && _c !== void 0 ? _c : false;
        message.accessTokenType = (_d = object.accessTokenType) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseProfile() {
    return {
        firstName: "",
        lastName: "",
        nickName: "",
        displayName: "",
        preferredLanguage: "",
        gender: 0,
        avatarUrl: "",
    };
}
exports.Profile = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(18).string(message.lastName);
        }
        if (message.nickName !== "") {
            writer.uint32(26).string(message.nickName);
        }
        if (message.displayName !== "") {
            writer.uint32(34).string(message.displayName);
        }
        if (message.preferredLanguage !== "") {
            writer.uint32(42).string(message.preferredLanguage);
        }
        if (message.gender !== 0) {
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
        const message = createBaseProfile();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.lastName = reader.string();
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
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : "",
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            preferredLanguage: isSet(object.preferredLanguage) ? globalThis.String(object.preferredLanguage) : "",
            gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
            avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.nickName !== "") {
            obj.nickName = message.nickName;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.preferredLanguage !== "") {
            obj.preferredLanguage = message.preferredLanguage;
        }
        if (message.gender !== 0) {
            obj.gender = genderToJSON(message.gender);
        }
        if (message.avatarUrl !== "") {
            obj.avatarUrl = message.avatarUrl;
        }
        return obj;
    },
    create(base) {
        return exports.Profile.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseProfile();
        message.firstName = (_a = object.firstName) !== null && _a !== void 0 ? _a : "";
        message.lastName = (_b = object.lastName) !== null && _b !== void 0 ? _b : "";
        message.nickName = (_c = object.nickName) !== null && _c !== void 0 ? _c : "";
        message.displayName = (_d = object.displayName) !== null && _d !== void 0 ? _d : "";
        message.preferredLanguage = (_e = object.preferredLanguage) !== null && _e !== void 0 ? _e : "";
        message.gender = (_f = object.gender) !== null && _f !== void 0 ? _f : 0;
        message.avatarUrl = (_g = object.avatarUrl) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseEmail() {
    return { email: "", isEmailVerified: false };
}
exports.Email = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.isEmailVerified !== false) {
            writer.uint32(16).bool(message.isEmailVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmail();
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
                    message.isEmailVerified = reader.bool();
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
            isEmailVerified: isSet(object.isEmailVerified) ? globalThis.Boolean(object.isEmailVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.isEmailVerified !== false) {
            obj.isEmailVerified = message.isEmailVerified;
        }
        return obj;
    },
    create(base) {
        return exports.Email.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEmail();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.isEmailVerified = (_b = object.isEmailVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBasePhone() {
    return { phone: "", isPhoneVerified: false };
}
exports.Phone = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        if (message.isPhoneVerified !== false) {
            writer.uint32(16).bool(message.isPhoneVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePhone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isPhoneVerified = reader.bool();
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
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            isPhoneVerified: isSet(object.isPhoneVerified) ? globalThis.Boolean(object.isPhoneVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.isPhoneVerified !== false) {
            obj.isPhoneVerified = message.isPhoneVerified;
        }
        return obj;
    },
    create(base) {
        return exports.Phone.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePhone();
        message.phone = (_a = object.phone) !== null && _a !== void 0 ? _a : "";
        message.isPhoneVerified = (_b = object.isPhoneVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSearchQuery() {
    return {
        userNameQuery: undefined,
        firstNameQuery: undefined,
        lastNameQuery: undefined,
        nickNameQuery: undefined,
        displayNameQuery: undefined,
        emailQuery: undefined,
        stateQuery: undefined,
        typeQuery: undefined,
        loginNameQuery: undefined,
        inUserIdsQuery: undefined,
        orQuery: undefined,
        andQuery: undefined,
        notQuery: undefined,
        inUserEmailsQuery: undefined,
    };
}
exports.SearchQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userNameQuery !== undefined) {
            exports.UserNameQuery.encode(message.userNameQuery, writer.uint32(10).fork()).join();
        }
        if (message.firstNameQuery !== undefined) {
            exports.FirstNameQuery.encode(message.firstNameQuery, writer.uint32(18).fork()).join();
        }
        if (message.lastNameQuery !== undefined) {
            exports.LastNameQuery.encode(message.lastNameQuery, writer.uint32(26).fork()).join();
        }
        if (message.nickNameQuery !== undefined) {
            exports.NickNameQuery.encode(message.nickNameQuery, writer.uint32(34).fork()).join();
        }
        if (message.displayNameQuery !== undefined) {
            exports.DisplayNameQuery.encode(message.displayNameQuery, writer.uint32(42).fork()).join();
        }
        if (message.emailQuery !== undefined) {
            exports.EmailQuery.encode(message.emailQuery, writer.uint32(50).fork()).join();
        }
        if (message.stateQuery !== undefined) {
            exports.StateQuery.encode(message.stateQuery, writer.uint32(58).fork()).join();
        }
        if (message.typeQuery !== undefined) {
            exports.TypeQuery.encode(message.typeQuery, writer.uint32(66).fork()).join();
        }
        if (message.loginNameQuery !== undefined) {
            exports.LoginNameQuery.encode(message.loginNameQuery, writer.uint32(74).fork()).join();
        }
        if (message.inUserIdsQuery !== undefined) {
            exports.InUserIDQuery.encode(message.inUserIdsQuery, writer.uint32(82).fork()).join();
        }
        if (message.orQuery !== undefined) {
            exports.OrQuery.encode(message.orQuery, writer.uint32(90).fork()).join();
        }
        if (message.andQuery !== undefined) {
            exports.AndQuery.encode(message.andQuery, writer.uint32(98).fork()).join();
        }
        if (message.notQuery !== undefined) {
            exports.NotQuery.encode(message.notQuery, writer.uint32(106).fork()).join();
        }
        if (message.inUserEmailsQuery !== undefined) {
            exports.InUserEmailsQuery.encode(message.inUserEmailsQuery, writer.uint32(114).fork()).join();
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
                    message.userNameQuery = exports.UserNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstNameQuery = exports.FirstNameQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lastNameQuery = exports.LastNameQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nickNameQuery = exports.NickNameQuery.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.displayNameQuery = exports.DisplayNameQuery.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.emailQuery = exports.EmailQuery.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.stateQuery = exports.StateQuery.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.typeQuery = exports.TypeQuery.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.loginNameQuery = exports.LoginNameQuery.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.inUserIdsQuery = exports.InUserIDQuery.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.orQuery = exports.OrQuery.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.andQuery = exports.AndQuery.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.notQuery = exports.NotQuery.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.inUserEmailsQuery = exports.InUserEmailsQuery.decode(reader, reader.uint32());
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
            userNameQuery: isSet(object.userNameQuery) ? exports.UserNameQuery.fromJSON(object.userNameQuery) : undefined,
            firstNameQuery: isSet(object.firstNameQuery) ? exports.FirstNameQuery.fromJSON(object.firstNameQuery) : undefined,
            lastNameQuery: isSet(object.lastNameQuery) ? exports.LastNameQuery.fromJSON(object.lastNameQuery) : undefined,
            nickNameQuery: isSet(object.nickNameQuery) ? exports.NickNameQuery.fromJSON(object.nickNameQuery) : undefined,
            displayNameQuery: isSet(object.displayNameQuery) ? exports.DisplayNameQuery.fromJSON(object.displayNameQuery) : undefined,
            emailQuery: isSet(object.emailQuery) ? exports.EmailQuery.fromJSON(object.emailQuery) : undefined,
            stateQuery: isSet(object.stateQuery) ? exports.StateQuery.fromJSON(object.stateQuery) : undefined,
            typeQuery: isSet(object.typeQuery) ? exports.TypeQuery.fromJSON(object.typeQuery) : undefined,
            loginNameQuery: isSet(object.loginNameQuery) ? exports.LoginNameQuery.fromJSON(object.loginNameQuery) : undefined,
            inUserIdsQuery: isSet(object.inUserIdsQuery) ? exports.InUserIDQuery.fromJSON(object.inUserIdsQuery) : undefined,
            orQuery: isSet(object.orQuery) ? exports.OrQuery.fromJSON(object.orQuery) : undefined,
            andQuery: isSet(object.andQuery) ? exports.AndQuery.fromJSON(object.andQuery) : undefined,
            notQuery: isSet(object.notQuery) ? exports.NotQuery.fromJSON(object.notQuery) : undefined,
            inUserEmailsQuery: isSet(object.inUserEmailsQuery)
                ? exports.InUserEmailsQuery.fromJSON(object.inUserEmailsQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userNameQuery !== undefined) {
            obj.userNameQuery = exports.UserNameQuery.toJSON(message.userNameQuery);
        }
        if (message.firstNameQuery !== undefined) {
            obj.firstNameQuery = exports.FirstNameQuery.toJSON(message.firstNameQuery);
        }
        if (message.lastNameQuery !== undefined) {
            obj.lastNameQuery = exports.LastNameQuery.toJSON(message.lastNameQuery);
        }
        if (message.nickNameQuery !== undefined) {
            obj.nickNameQuery = exports.NickNameQuery.toJSON(message.nickNameQuery);
        }
        if (message.displayNameQuery !== undefined) {
            obj.displayNameQuery = exports.DisplayNameQuery.toJSON(message.displayNameQuery);
        }
        if (message.emailQuery !== undefined) {
            obj.emailQuery = exports.EmailQuery.toJSON(message.emailQuery);
        }
        if (message.stateQuery !== undefined) {
            obj.stateQuery = exports.StateQuery.toJSON(message.stateQuery);
        }
        if (message.typeQuery !== undefined) {
            obj.typeQuery = exports.TypeQuery.toJSON(message.typeQuery);
        }
        if (message.loginNameQuery !== undefined) {
            obj.loginNameQuery = exports.LoginNameQuery.toJSON(message.loginNameQuery);
        }
        if (message.inUserIdsQuery !== undefined) {
            obj.inUserIdsQuery = exports.InUserIDQuery.toJSON(message.inUserIdsQuery);
        }
        if (message.orQuery !== undefined) {
            obj.orQuery = exports.OrQuery.toJSON(message.orQuery);
        }
        if (message.andQuery !== undefined) {
            obj.andQuery = exports.AndQuery.toJSON(message.andQuery);
        }
        if (message.notQuery !== undefined) {
            obj.notQuery = exports.NotQuery.toJSON(message.notQuery);
        }
        if (message.inUserEmailsQuery !== undefined) {
            obj.inUserEmailsQuery = exports.InUserEmailsQuery.toJSON(message.inUserEmailsQuery);
        }
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSearchQuery();
        message.userNameQuery = (object.userNameQuery !== undefined && object.userNameQuery !== null)
            ? exports.UserNameQuery.fromPartial(object.userNameQuery)
            : undefined;
        message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
            ? exports.FirstNameQuery.fromPartial(object.firstNameQuery)
            : undefined;
        message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
            ? exports.LastNameQuery.fromPartial(object.lastNameQuery)
            : undefined;
        message.nickNameQuery = (object.nickNameQuery !== undefined && object.nickNameQuery !== null)
            ? exports.NickNameQuery.fromPartial(object.nickNameQuery)
            : undefined;
        message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
            ? exports.DisplayNameQuery.fromPartial(object.displayNameQuery)
            : undefined;
        message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
            ? exports.EmailQuery.fromPartial(object.emailQuery)
            : undefined;
        message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
            ? exports.StateQuery.fromPartial(object.stateQuery)
            : undefined;
        message.typeQuery = (object.typeQuery !== undefined && object.typeQuery !== null)
            ? exports.TypeQuery.fromPartial(object.typeQuery)
            : undefined;
        message.loginNameQuery = (object.loginNameQuery !== undefined && object.loginNameQuery !== null)
            ? exports.LoginNameQuery.fromPartial(object.loginNameQuery)
            : undefined;
        message.inUserIdsQuery = (object.inUserIdsQuery !== undefined && object.inUserIdsQuery !== null)
            ? exports.InUserIDQuery.fromPartial(object.inUserIdsQuery)
            : undefined;
        message.orQuery = (object.orQuery !== undefined && object.orQuery !== null)
            ? exports.OrQuery.fromPartial(object.orQuery)
            : undefined;
        message.andQuery = (object.andQuery !== undefined && object.andQuery !== null)
            ? exports.AndQuery.fromPartial(object.andQuery)
            : undefined;
        message.notQuery = (object.notQuery !== undefined && object.notQuery !== null)
            ? exports.NotQuery.fromPartial(object.notQuery)
            : undefined;
        message.inUserEmailsQuery = (object.inUserEmailsQuery !== undefined && object.inUserEmailsQuery !== null)
            ? exports.InUserEmailsQuery.fromPartial(object.inUserEmailsQuery)
            : undefined;
        return message;
    },
};
function createBaseOrQuery() {
    return { queries: [] };
}
exports.OrQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.queries) {
            exports.SearchQuery.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchQuery.decode(reader, reader.uint32()));
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
            queries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.queries) ? object.queries.map((e) => exports.SearchQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.queries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.queries = message.queries.map((e) => exports.SearchQuery.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.OrQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrQuery();
        message.queries = ((_a = object.queries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SearchQuery.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAndQuery() {
    return { queries: [] };
}
exports.AndQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.queries) {
            exports.SearchQuery.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchQuery.decode(reader, reader.uint32()));
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
            queries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.queries) ? object.queries.map((e) => exports.SearchQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.queries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.queries = message.queries.map((e) => exports.SearchQuery.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.AndQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAndQuery();
        message.queries = ((_a = object.queries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SearchQuery.fromPartial(e))) || [];
        return message;
    },
};
function createBaseNotQuery() {
    return { query: undefined };
}
exports.NotQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.query !== undefined) {
            exports.SearchQuery.encode(message.query, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = exports.SearchQuery.decode(reader, reader.uint32());
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
        return { query: isSet(object.query) ? exports.SearchQuery.fromJSON(object.query) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.query !== undefined) {
            obj.query = exports.SearchQuery.toJSON(message.query);
        }
        return obj;
    },
    create(base) {
        return exports.NotQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseNotQuery();
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.SearchQuery.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseInUserIDQuery() {
    return { userIds: [] };
}
exports.InUserIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.userIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInUserIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIds.push(reader.string());
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
            userIds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userIds) ? object.userIds.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.userIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.userIds = message.userIds;
        }
        return obj;
    },
    create(base) {
        return exports.InUserIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInUserIDQuery();
        message.userIds = ((_a = object.userIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseInUserEmailsQuery() {
    return { userEmails: [] };
}
exports.InUserEmailsQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.userEmails) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInUserEmailsQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userEmails.push(reader.string());
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
            userEmails: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userEmails)
                ? object.userEmails.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.userEmails) === null || _a === void 0 ? void 0 : _a.length) {
            obj.userEmails = message.userEmails;
        }
        return obj;
    },
    create(base) {
        return exports.InUserEmailsQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInUserEmailsQuery();
        message.userEmails = ((_a = object.userEmails) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseUserNameQuery() {
    return { userName: "", method: 0 };
}
exports.UserNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
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
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserNameQuery();
        message.userName = (_a = object.userName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
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
function createBaseNickNameQuery() {
    return { nickName: "", method: 0 };
}
exports.NickNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.nickName !== "") {
            writer.uint32(10).string(message.nickName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNickNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nickName = reader.string();
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
            nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nickName !== "") {
            obj.nickName = message.nickName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.NickNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNickNameQuery();
        message.nickName = (_a = object.nickName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDisplayNameQuery() {
    return { displayName: "", method: 0 };
}
exports.DisplayNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDisplayNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.displayName = reader.string();
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
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.DisplayNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDisplayNameQuery();
        message.displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseEmailQuery() {
    return { emailAddress: "", method: 0 };
}
exports.EmailQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.emailAddress !== "") {
            writer.uint32(10).string(message.emailAddress);
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
                    message.emailAddress = reader.string();
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
            emailAddress: isSet(object.emailAddress) ? globalThis.String(object.emailAddress) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.emailAddress !== "") {
            obj.emailAddress = message.emailAddress;
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
        message.emailAddress = (_a = object.emailAddress) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseLoginNameQuery() {
    return { loginName: "", method: 0 };
}
exports.LoginNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.loginName !== "") {
            writer.uint32(10).string(message.loginName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.loginName = reader.string();
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
            loginName: isSet(object.loginName) ? globalThis.String(object.loginName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.loginName !== "") {
            obj.loginName = message.loginName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.LoginNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLoginNameQuery();
        message.loginName = (_a = object.loginName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseStateQuery() {
    return { state: 0 };
}
exports.StateQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateQuery();
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
        return { state: isSet(object.state) ? userStateFromJSON(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = userStateToJSON(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.StateQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStateQuery();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseTypeQuery() {
    return { type: 0 };
}
exports.TypeQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
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
        return { type: isSet(object.type) ? typeFromJSON(object.type) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = typeToJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return exports.TypeQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTypeQuery();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseAuthFactor() {
    return { state: 0, otp: undefined, u2f: undefined, otpSms: undefined, otpEmail: undefined };
}
exports.AuthFactor = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.otp !== undefined) {
            exports.AuthFactorOTP.encode(message.otp, writer.uint32(18).fork()).join();
        }
        if (message.u2f !== undefined) {
            exports.AuthFactorU2F.encode(message.u2f, writer.uint32(26).fork()).join();
        }
        if (message.otpSms !== undefined) {
            exports.AuthFactorOTPSMS.encode(message.otpSms, writer.uint32(34).fork()).join();
        }
        if (message.otpEmail !== undefined) {
            exports.AuthFactorOTPEmail.encode(message.otpEmail, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otp = exports.AuthFactorOTP.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.u2f = exports.AuthFactorU2F.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otpSms = exports.AuthFactorOTPSMS.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.otpEmail = exports.AuthFactorOTPEmail.decode(reader, reader.uint32());
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
            state: isSet(object.state) ? authFactorStateFromJSON(object.state) : 0,
            otp: isSet(object.otp) ? exports.AuthFactorOTP.fromJSON(object.otp) : undefined,
            u2f: isSet(object.u2f) ? exports.AuthFactorU2F.fromJSON(object.u2f) : undefined,
            otpSms: isSet(object.otpSms) ? exports.AuthFactorOTPSMS.fromJSON(object.otpSms) : undefined,
            otpEmail: isSet(object.otpEmail) ? exports.AuthFactorOTPEmail.fromJSON(object.otpEmail) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = authFactorStateToJSON(message.state);
        }
        if (message.otp !== undefined) {
            obj.otp = exports.AuthFactorOTP.toJSON(message.otp);
        }
        if (message.u2f !== undefined) {
            obj.u2f = exports.AuthFactorU2F.toJSON(message.u2f);
        }
        if (message.otpSms !== undefined) {
            obj.otpSms = exports.AuthFactorOTPSMS.toJSON(message.otpSms);
        }
        if (message.otpEmail !== undefined) {
            obj.otpEmail = exports.AuthFactorOTPEmail.toJSON(message.otpEmail);
        }
        return obj;
    },
    create(base) {
        return exports.AuthFactor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuthFactor();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.otp = (object.otp !== undefined && object.otp !== null) ? exports.AuthFactorOTP.fromPartial(object.otp) : undefined;
        message.u2f = (object.u2f !== undefined && object.u2f !== null) ? exports.AuthFactorU2F.fromPartial(object.u2f) : undefined;
        message.otpSms = (object.otpSms !== undefined && object.otpSms !== null)
            ? exports.AuthFactorOTPSMS.fromPartial(object.otpSms)
            : undefined;
        message.otpEmail = (object.otpEmail !== undefined && object.otpEmail !== null)
            ? exports.AuthFactorOTPEmail.fromPartial(object.otpEmail)
            : undefined;
        return message;
    },
};
function createBaseAuthFactorOTP() {
    return {};
}
exports.AuthFactorOTP = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorOTP();
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
        return exports.AuthFactorOTP.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseAuthFactorOTP();
        return message;
    },
};
function createBaseAuthFactorOTPSMS() {
    return {};
}
exports.AuthFactorOTPSMS = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorOTPSMS();
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
        return exports.AuthFactorOTPSMS.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseAuthFactorOTPSMS();
        return message;
    },
};
function createBaseAuthFactorOTPEmail() {
    return {};
}
exports.AuthFactorOTPEmail = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorOTPEmail();
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
        return exports.AuthFactorOTPEmail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseAuthFactorOTPEmail();
        return message;
    },
};
function createBaseAuthFactorU2F() {
    return { id: "", name: "" };
}
exports.AuthFactorU2F = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorU2F();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.AuthFactorU2F.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAuthFactorU2F();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseWebAuthNKey() {
    return { publicKey: Buffer.alloc(0) };
}
exports.WebAuthNKey = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.publicKey.length !== 0) {
            writer.uint32(10).bytes(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebAuthNKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.publicKey = Buffer.from(reader.bytes());
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
        return { publicKey: isSet(object.publicKey) ? Buffer.from(bytesFromBase64(object.publicKey)) : Buffer.alloc(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.publicKey.length !== 0) {
            obj.publicKey = base64FromBytes(message.publicKey);
        }
        return obj;
    },
    create(base) {
        return exports.WebAuthNKey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWebAuthNKey();
        message.publicKey = (_a = object.publicKey) !== null && _a !== void 0 ? _a : Buffer.alloc(0);
        return message;
    },
};
function createBaseWebAuthNVerification() {
    return { publicKeyCredential: Buffer.alloc(0), tokenName: "" };
}
exports.WebAuthNVerification = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.publicKeyCredential.length !== 0) {
            writer.uint32(10).bytes(message.publicKeyCredential);
        }
        if (message.tokenName !== "") {
            writer.uint32(18).string(message.tokenName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebAuthNVerification();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.publicKeyCredential = Buffer.from(reader.bytes());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tokenName = reader.string();
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
            publicKeyCredential: isSet(object.publicKeyCredential)
                ? Buffer.from(bytesFromBase64(object.publicKeyCredential))
                : Buffer.alloc(0),
            tokenName: isSet(object.tokenName) ? globalThis.String(object.tokenName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.publicKeyCredential.length !== 0) {
            obj.publicKeyCredential = base64FromBytes(message.publicKeyCredential);
        }
        if (message.tokenName !== "") {
            obj.tokenName = message.tokenName;
        }
        return obj;
    },
    create(base) {
        return exports.WebAuthNVerification.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseWebAuthNVerification();
        message.publicKeyCredential = (_a = object.publicKeyCredential) !== null && _a !== void 0 ? _a : Buffer.alloc(0);
        message.tokenName = (_b = object.tokenName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseWebAuthNToken() {
    return { id: "", state: 0, name: "" };
}
exports.WebAuthNToken = {
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
        const message = createBaseWebAuthNToken();
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
        return exports.WebAuthNToken.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseWebAuthNToken();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMembership() {
    return {
        userId: "",
        details: undefined,
        roles: [],
        displayName: "",
        iam: undefined,
        orgId: undefined,
        projectId: undefined,
        projectGrantId: undefined,
    };
}
exports.Membership = {
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
        if (message.displayName !== "") {
            writer.uint32(34).string(message.displayName);
        }
        if (message.iam !== undefined) {
            writer.uint32(40).bool(message.iam);
        }
        if (message.orgId !== undefined) {
            writer.uint32(50).string(message.orgId);
        }
        if (message.projectId !== undefined) {
            writer.uint32(58).string(message.projectId);
        }
        if (message.projectGrantId !== undefined) {
            writer.uint32(66).string(message.projectGrantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembership();
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
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.iam = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.projectGrantId = reader.string();
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
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            iam: isSet(object.iam) ? globalThis.Boolean(object.iam) : undefined,
            orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : undefined,
            projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : undefined,
            projectGrantId: isSet(object.projectGrantId) ? globalThis.String(object.projectGrantId) : undefined,
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
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.iam !== undefined) {
            obj.iam = message.iam;
        }
        if (message.orgId !== undefined) {
            obj.orgId = message.orgId;
        }
        if (message.projectId !== undefined) {
            obj.projectId = message.projectId;
        }
        if (message.projectGrantId !== undefined) {
            obj.projectGrantId = message.projectGrantId;
        }
        return obj;
    },
    create(base) {
        return exports.Membership.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMembership();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.roles = ((_b = object.roles) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.displayName = (_c = object.displayName) !== null && _c !== void 0 ? _c : "";
        message.iam = (_d = object.iam) !== null && _d !== void 0 ? _d : undefined;
        message.orgId = (_e = object.orgId) !== null && _e !== void 0 ? _e : undefined;
        message.projectId = (_f = object.projectId) !== null && _f !== void 0 ? _f : undefined;
        message.projectGrantId = (_g = object.projectGrantId) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseMembershipQuery() {
    return { orgQuery: undefined, projectQuery: undefined, projectGrantQuery: undefined, iamQuery: undefined };
}
exports.MembershipQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgQuery !== undefined) {
            exports.MembershipOrgQuery.encode(message.orgQuery, writer.uint32(10).fork()).join();
        }
        if (message.projectQuery !== undefined) {
            exports.MembershipProjectQuery.encode(message.projectQuery, writer.uint32(18).fork()).join();
        }
        if (message.projectGrantQuery !== undefined) {
            exports.MembershipProjectGrantQuery.encode(message.projectGrantQuery, writer.uint32(26).fork()).join();
        }
        if (message.iamQuery !== undefined) {
            exports.MembershipIAMQuery.encode(message.iamQuery, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgQuery = exports.MembershipOrgQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectQuery = exports.MembershipProjectQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.projectGrantQuery = exports.MembershipProjectGrantQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.iamQuery = exports.MembershipIAMQuery.decode(reader, reader.uint32());
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
            orgQuery: isSet(object.orgQuery) ? exports.MembershipOrgQuery.fromJSON(object.orgQuery) : undefined,
            projectQuery: isSet(object.projectQuery) ? exports.MembershipProjectQuery.fromJSON(object.projectQuery) : undefined,
            projectGrantQuery: isSet(object.projectGrantQuery)
                ? exports.MembershipProjectGrantQuery.fromJSON(object.projectGrantQuery)
                : undefined,
            iamQuery: isSet(object.iamQuery) ? exports.MembershipIAMQuery.fromJSON(object.iamQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgQuery !== undefined) {
            obj.orgQuery = exports.MembershipOrgQuery.toJSON(message.orgQuery);
        }
        if (message.projectQuery !== undefined) {
            obj.projectQuery = exports.MembershipProjectQuery.toJSON(message.projectQuery);
        }
        if (message.projectGrantQuery !== undefined) {
            obj.projectGrantQuery = exports.MembershipProjectGrantQuery.toJSON(message.projectGrantQuery);
        }
        if (message.iamQuery !== undefined) {
            obj.iamQuery = exports.MembershipIAMQuery.toJSON(message.iamQuery);
        }
        return obj;
    },
    create(base) {
        return exports.MembershipQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMembershipQuery();
        message.orgQuery = (object.orgQuery !== undefined && object.orgQuery !== null)
            ? exports.MembershipOrgQuery.fromPartial(object.orgQuery)
            : undefined;
        message.projectQuery = (object.projectQuery !== undefined && object.projectQuery !== null)
            ? exports.MembershipProjectQuery.fromPartial(object.projectQuery)
            : undefined;
        message.projectGrantQuery = (object.projectGrantQuery !== undefined && object.projectGrantQuery !== null)
            ? exports.MembershipProjectGrantQuery.fromPartial(object.projectGrantQuery)
            : undefined;
        message.iamQuery = (object.iamQuery !== undefined && object.iamQuery !== null)
            ? exports.MembershipIAMQuery.fromPartial(object.iamQuery)
            : undefined;
        return message;
    },
};
function createBaseMembershipOrgQuery() {
    return { orgId: "" };
}
exports.MembershipOrgQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipOrgQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
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
        return { orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgId !== "") {
            obj.orgId = message.orgId;
        }
        return obj;
    },
    create(base) {
        return exports.MembershipOrgQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMembershipOrgQuery();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMembershipProjectQuery() {
    return { projectId: "" };
}
exports.MembershipProjectQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipProjectQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
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
        return { projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        return obj;
    },
    create(base) {
        return exports.MembershipProjectQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMembershipProjectQuery();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMembershipProjectGrantQuery() {
    return { projectGrantId: "" };
}
exports.MembershipProjectGrantQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectGrantId !== "") {
            writer.uint32(10).string(message.projectGrantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipProjectGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectGrantId = reader.string();
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
        return { projectGrantId: isSet(object.projectGrantId) ? globalThis.String(object.projectGrantId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectGrantId !== "") {
            obj.projectGrantId = message.projectGrantId;
        }
        return obj;
    },
    create(base) {
        return exports.MembershipProjectGrantQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMembershipProjectGrantQuery();
        message.projectGrantId = (_a = object.projectGrantId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMembershipIAMQuery() {
    return { iam: false };
}
exports.MembershipIAMQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.iam !== false) {
            writer.uint32(8).bool(message.iam);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipIAMQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.iam = reader.bool();
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
        return { iam: isSet(object.iam) ? globalThis.Boolean(object.iam) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.iam !== false) {
            obj.iam = message.iam;
        }
        return obj;
    },
    create(base) {
        return exports.MembershipIAMQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMembershipIAMQuery();
        message.iam = (_a = object.iam) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseSession() {
    return {
        sessionId: "",
        agentId: "",
        authState: 0,
        userId: "",
        userName: "",
        loginName: "",
        displayName: "",
        details: undefined,
        avatarUrl: "",
    };
}
exports.Session = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.agentId !== "") {
            writer.uint32(18).string(message.agentId);
        }
        if (message.authState !== 0) {
            writer.uint32(24).int32(message.authState);
        }
        if (message.userId !== "") {
            writer.uint32(34).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(42).string(message.userName);
        }
        if (message.loginName !== "") {
            writer.uint32(58).string(message.loginName);
        }
        if (message.displayName !== "") {
            writer.uint32(66).string(message.displayName);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(74).fork()).join();
        }
        if (message.avatarUrl !== "") {
            writer.uint32(82).string(message.avatarUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.agentId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.authState = reader.int32();
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
                    message.userName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.loginName = reader.string();
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
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
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
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            agentId: isSet(object.agentId) ? globalThis.String(object.agentId) : "",
            authState: isSet(object.authState) ? sessionStateFromJSON(object.authState) : 0,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            loginName: isSet(object.loginName) ? globalThis.String(object.loginName) : "",
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.agentId !== "") {
            obj.agentId = message.agentId;
        }
        if (message.authState !== 0) {
            obj.authState = sessionStateToJSON(message.authState);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if (message.loginName !== "") {
            obj.loginName = message.loginName;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.avatarUrl !== "") {
            obj.avatarUrl = message.avatarUrl;
        }
        return obj;
    },
    create(base) {
        return exports.Session.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseSession();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.agentId = (_b = object.agentId) !== null && _b !== void 0 ? _b : "";
        message.authState = (_c = object.authState) !== null && _c !== void 0 ? _c : 0;
        message.userId = (_d = object.userId) !== null && _d !== void 0 ? _d : "";
        message.userName = (_e = object.userName) !== null && _e !== void 0 ? _e : "";
        message.loginName = (_f = object.loginName) !== null && _f !== void 0 ? _f : "";
        message.displayName = (_g = object.displayName) !== null && _g !== void 0 ? _g : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.avatarUrl = (_h = object.avatarUrl) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseRefreshToken() {
    return {
        id: "",
        details: undefined,
        clientId: "",
        authTime: undefined,
        idleExpiration: undefined,
        expiration: undefined,
        scopes: [],
        audience: [],
    };
}
exports.RefreshToken = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.clientId !== "") {
            writer.uint32(26).string(message.clientId);
        }
        if (message.authTime !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.authTime), writer.uint32(34).fork()).join();
        }
        if (message.idleExpiration !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.idleExpiration), writer.uint32(42).fork()).join();
        }
        if (message.expiration !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(50).fork()).join();
        }
        for (const v of message.scopes) {
            writer.uint32(58).string(v);
        }
        for (const v of message.audience) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefreshToken();
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
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.authTime = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.idleExpiration = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.expiration = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.audience.push(reader.string());
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            authTime: isSet(object.authTime) ? fromJsonTimestamp(object.authTime) : undefined,
            idleExpiration: isSet(object.idleExpiration) ? fromJsonTimestamp(object.idleExpiration) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
            audience: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.audience) ? object.audience.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.authTime !== undefined) {
            obj.authTime = message.authTime.toISOString();
        }
        if (message.idleExpiration !== undefined) {
            obj.idleExpiration = message.idleExpiration.toISOString();
        }
        if (message.expiration !== undefined) {
            obj.expiration = message.expiration.toISOString();
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        if ((_b = message.audience) === null || _b === void 0 ? void 0 : _b.length) {
            obj.audience = message.audience;
        }
        return obj;
    },
    create(base) {
        return exports.RefreshToken.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseRefreshToken();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "";
        message.authTime = (_c = object.authTime) !== null && _c !== void 0 ? _c : undefined;
        message.idleExpiration = (_d = object.idleExpiration) !== null && _d !== void 0 ? _d : undefined;
        message.expiration = (_e = object.expiration) !== null && _e !== void 0 ? _e : undefined;
        message.scopes = ((_f = object.scopes) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.audience = ((_g = object.audience) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        return message;
    },
};
function createBasePersonalAccessToken() {
    return { id: "", details: undefined, expirationDate: undefined, scopes: [] };
}
exports.PersonalAccessToken = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.expirationDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(26).fork()).join();
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePersonalAccessToken();
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
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.expirationDate !== undefined) {
            obj.expirationDate = message.expirationDate.toISOString();
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.PersonalAccessToken.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePersonalAccessToken();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.expirationDate = (_b = object.expirationDate) !== null && _b !== void 0 ? _b : undefined;
        message.scopes = ((_c = object.scopes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseUserGrant() {
    return {
        id: "",
        details: undefined,
        roleKeys: [],
        state: 0,
        userId: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        displayName: "",
        orgId: "",
        orgName: "",
        orgDomain: "",
        projectId: "",
        projectName: "",
        projectGrantId: "",
        avatarUrl: "",
        preferredLoginName: "",
        userType: 0,
        grantedOrgId: "",
        grantedOrgName: "",
        grantedOrgDomain: "",
    };
}
exports.UserGrant = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        for (const v of message.roleKeys) {
            writer.uint32(26).string(v);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.userId !== "") {
            writer.uint32(42).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(50).string(message.userName);
        }
        if (message.firstName !== "") {
            writer.uint32(58).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(66).string(message.lastName);
        }
        if (message.email !== "") {
            writer.uint32(74).string(message.email);
        }
        if (message.displayName !== "") {
            writer.uint32(82).string(message.displayName);
        }
        if (message.orgId !== "") {
            writer.uint32(90).string(message.orgId);
        }
        if (message.orgName !== "") {
            writer.uint32(98).string(message.orgName);
        }
        if (message.orgDomain !== "") {
            writer.uint32(106).string(message.orgDomain);
        }
        if (message.projectId !== "") {
            writer.uint32(114).string(message.projectId);
        }
        if (message.projectName !== "") {
            writer.uint32(122).string(message.projectName);
        }
        if (message.projectGrantId !== "") {
            writer.uint32(130).string(message.projectGrantId);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(138).string(message.avatarUrl);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(146).string(message.preferredLoginName);
        }
        if (message.userType !== 0) {
            writer.uint32(152).int32(message.userType);
        }
        if (message.grantedOrgId !== "") {
            writer.uint32(162).string(message.grantedOrgId);
        }
        if (message.grantedOrgName !== "") {
            writer.uint32(170).string(message.grantedOrgName);
        }
        if (message.grantedOrgDomain !== "") {
            writer.uint32(178).string(message.grantedOrgDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrant();
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
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.roleKeys.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.orgName = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.orgDomain = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.projectName = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.projectGrantId = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.avatarUrl = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.userType = reader.int32();
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.grantedOrgId = reader.string();
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.grantedOrgName = reader.string();
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.grantedOrgDomain = reader.string();
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            roleKeys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.roleKeys) ? object.roleKeys.map((e) => globalThis.String(e)) : [],
            state: isSet(object.state) ? userGrantStateFromJSON(object.state) : 0,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : "",
            orgName: isSet(object.orgName) ? globalThis.String(object.orgName) : "",
            orgDomain: isSet(object.orgDomain) ? globalThis.String(object.orgDomain) : "",
            projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
            projectName: isSet(object.projectName) ? globalThis.String(object.projectName) : "",
            projectGrantId: isSet(object.projectGrantId) ? globalThis.String(object.projectGrantId) : "",
            avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
            preferredLoginName: isSet(object.preferredLoginName) ? globalThis.String(object.preferredLoginName) : "",
            userType: isSet(object.userType) ? typeFromJSON(object.userType) : 0,
            grantedOrgId: isSet(object.grantedOrgId) ? globalThis.String(object.grantedOrgId) : "",
            grantedOrgName: isSet(object.grantedOrgName) ? globalThis.String(object.grantedOrgName) : "",
            grantedOrgDomain: isSet(object.grantedOrgDomain) ? globalThis.String(object.grantedOrgDomain) : "",
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if ((_a = message.roleKeys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roleKeys = message.roleKeys;
        }
        if (message.state !== 0) {
            obj.state = userGrantStateToJSON(message.state);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.orgId !== "") {
            obj.orgId = message.orgId;
        }
        if (message.orgName !== "") {
            obj.orgName = message.orgName;
        }
        if (message.orgDomain !== "") {
            obj.orgDomain = message.orgDomain;
        }
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        if (message.projectName !== "") {
            obj.projectName = message.projectName;
        }
        if (message.projectGrantId !== "") {
            obj.projectGrantId = message.projectGrantId;
        }
        if (message.avatarUrl !== "") {
            obj.avatarUrl = message.avatarUrl;
        }
        if (message.preferredLoginName !== "") {
            obj.preferredLoginName = message.preferredLoginName;
        }
        if (message.userType !== 0) {
            obj.userType = typeToJSON(message.userType);
        }
        if (message.grantedOrgId !== "") {
            obj.grantedOrgId = message.grantedOrgId;
        }
        if (message.grantedOrgName !== "") {
            obj.grantedOrgName = message.grantedOrgName;
        }
        if (message.grantedOrgDomain !== "") {
            obj.grantedOrgDomain = message.grantedOrgDomain;
        }
        return obj;
    },
    create(base) {
        return exports.UserGrant.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseUserGrant();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.roleKeys = ((_b = object.roleKeys) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : 0;
        message.userId = (_d = object.userId) !== null && _d !== void 0 ? _d : "";
        message.userName = (_e = object.userName) !== null && _e !== void 0 ? _e : "";
        message.firstName = (_f = object.firstName) !== null && _f !== void 0 ? _f : "";
        message.lastName = (_g = object.lastName) !== null && _g !== void 0 ? _g : "";
        message.email = (_h = object.email) !== null && _h !== void 0 ? _h : "";
        message.displayName = (_j = object.displayName) !== null && _j !== void 0 ? _j : "";
        message.orgId = (_k = object.orgId) !== null && _k !== void 0 ? _k : "";
        message.orgName = (_l = object.orgName) !== null && _l !== void 0 ? _l : "";
        message.orgDomain = (_m = object.orgDomain) !== null && _m !== void 0 ? _m : "";
        message.projectId = (_o = object.projectId) !== null && _o !== void 0 ? _o : "";
        message.projectName = (_p = object.projectName) !== null && _p !== void 0 ? _p : "";
        message.projectGrantId = (_q = object.projectGrantId) !== null && _q !== void 0 ? _q : "";
        message.avatarUrl = (_r = object.avatarUrl) !== null && _r !== void 0 ? _r : "";
        message.preferredLoginName = (_s = object.preferredLoginName) !== null && _s !== void 0 ? _s : "";
        message.userType = (_t = object.userType) !== null && _t !== void 0 ? _t : 0;
        message.grantedOrgId = (_u = object.grantedOrgId) !== null && _u !== void 0 ? _u : "";
        message.grantedOrgName = (_v = object.grantedOrgName) !== null && _v !== void 0 ? _v : "";
        message.grantedOrgDomain = (_w = object.grantedOrgDomain) !== null && _w !== void 0 ? _w : "";
        return message;
    },
};
function createBaseUserGrantQuery() {
    return {
        projectIdQuery: undefined,
        userIdQuery: undefined,
        withGrantedQuery: undefined,
        roleKeyQuery: undefined,
        projectGrantIdQuery: undefined,
        userNameQuery: undefined,
        firstNameQuery: undefined,
        lastNameQuery: undefined,
        emailQuery: undefined,
        orgNameQuery: undefined,
        orgDomainQuery: undefined,
        projectNameQuery: undefined,
        displayNameQuery: undefined,
        userTypeQuery: undefined,
    };
}
exports.UserGrantQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectIdQuery !== undefined) {
            exports.UserGrantProjectIDQuery.encode(message.projectIdQuery, writer.uint32(10).fork()).join();
        }
        if (message.userIdQuery !== undefined) {
            exports.UserGrantUserIDQuery.encode(message.userIdQuery, writer.uint32(18).fork()).join();
        }
        if (message.withGrantedQuery !== undefined) {
            exports.UserGrantWithGrantedQuery.encode(message.withGrantedQuery, writer.uint32(26).fork()).join();
        }
        if (message.roleKeyQuery !== undefined) {
            exports.UserGrantRoleKeyQuery.encode(message.roleKeyQuery, writer.uint32(34).fork()).join();
        }
        if (message.projectGrantIdQuery !== undefined) {
            exports.UserGrantProjectGrantIDQuery.encode(message.projectGrantIdQuery, writer.uint32(42).fork()).join();
        }
        if (message.userNameQuery !== undefined) {
            exports.UserGrantUserNameQuery.encode(message.userNameQuery, writer.uint32(50).fork()).join();
        }
        if (message.firstNameQuery !== undefined) {
            exports.UserGrantFirstNameQuery.encode(message.firstNameQuery, writer.uint32(58).fork()).join();
        }
        if (message.lastNameQuery !== undefined) {
            exports.UserGrantLastNameQuery.encode(message.lastNameQuery, writer.uint32(66).fork()).join();
        }
        if (message.emailQuery !== undefined) {
            exports.UserGrantEmailQuery.encode(message.emailQuery, writer.uint32(74).fork()).join();
        }
        if (message.orgNameQuery !== undefined) {
            exports.UserGrantOrgNameQuery.encode(message.orgNameQuery, writer.uint32(82).fork()).join();
        }
        if (message.orgDomainQuery !== undefined) {
            exports.UserGrantOrgDomainQuery.encode(message.orgDomainQuery, writer.uint32(90).fork()).join();
        }
        if (message.projectNameQuery !== undefined) {
            exports.UserGrantProjectNameQuery.encode(message.projectNameQuery, writer.uint32(98).fork()).join();
        }
        if (message.displayNameQuery !== undefined) {
            exports.UserGrantDisplayNameQuery.encode(message.displayNameQuery, writer.uint32(106).fork()).join();
        }
        if (message.userTypeQuery !== undefined) {
            exports.UserGrantUserTypeQuery.encode(message.userTypeQuery, writer.uint32(114).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectIdQuery = exports.UserGrantProjectIDQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userIdQuery = exports.UserGrantUserIDQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.withGrantedQuery = exports.UserGrantWithGrantedQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.roleKeyQuery = exports.UserGrantRoleKeyQuery.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.projectGrantIdQuery = exports.UserGrantProjectGrantIDQuery.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.userNameQuery = exports.UserGrantUserNameQuery.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.firstNameQuery = exports.UserGrantFirstNameQuery.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.lastNameQuery = exports.UserGrantLastNameQuery.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.emailQuery = exports.UserGrantEmailQuery.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.orgNameQuery = exports.UserGrantOrgNameQuery.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.orgDomainQuery = exports.UserGrantOrgDomainQuery.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.projectNameQuery = exports.UserGrantProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.displayNameQuery = exports.UserGrantDisplayNameQuery.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.userTypeQuery = exports.UserGrantUserTypeQuery.decode(reader, reader.uint32());
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
            projectIdQuery: isSet(object.projectIdQuery)
                ? exports.UserGrantProjectIDQuery.fromJSON(object.projectIdQuery)
                : undefined,
            userIdQuery: isSet(object.userIdQuery) ? exports.UserGrantUserIDQuery.fromJSON(object.userIdQuery) : undefined,
            withGrantedQuery: isSet(object.withGrantedQuery)
                ? exports.UserGrantWithGrantedQuery.fromJSON(object.withGrantedQuery)
                : undefined,
            roleKeyQuery: isSet(object.roleKeyQuery) ? exports.UserGrantRoleKeyQuery.fromJSON(object.roleKeyQuery) : undefined,
            projectGrantIdQuery: isSet(object.projectGrantIdQuery)
                ? exports.UserGrantProjectGrantIDQuery.fromJSON(object.projectGrantIdQuery)
                : undefined,
            userNameQuery: isSet(object.userNameQuery) ? exports.UserGrantUserNameQuery.fromJSON(object.userNameQuery) : undefined,
            firstNameQuery: isSet(object.firstNameQuery)
                ? exports.UserGrantFirstNameQuery.fromJSON(object.firstNameQuery)
                : undefined,
            lastNameQuery: isSet(object.lastNameQuery) ? exports.UserGrantLastNameQuery.fromJSON(object.lastNameQuery) : undefined,
            emailQuery: isSet(object.emailQuery) ? exports.UserGrantEmailQuery.fromJSON(object.emailQuery) : undefined,
            orgNameQuery: isSet(object.orgNameQuery) ? exports.UserGrantOrgNameQuery.fromJSON(object.orgNameQuery) : undefined,
            orgDomainQuery: isSet(object.orgDomainQuery)
                ? exports.UserGrantOrgDomainQuery.fromJSON(object.orgDomainQuery)
                : undefined,
            projectNameQuery: isSet(object.projectNameQuery)
                ? exports.UserGrantProjectNameQuery.fromJSON(object.projectNameQuery)
                : undefined,
            displayNameQuery: isSet(object.displayNameQuery)
                ? exports.UserGrantDisplayNameQuery.fromJSON(object.displayNameQuery)
                : undefined,
            userTypeQuery: isSet(object.userTypeQuery) ? exports.UserGrantUserTypeQuery.fromJSON(object.userTypeQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectIdQuery !== undefined) {
            obj.projectIdQuery = exports.UserGrantProjectIDQuery.toJSON(message.projectIdQuery);
        }
        if (message.userIdQuery !== undefined) {
            obj.userIdQuery = exports.UserGrantUserIDQuery.toJSON(message.userIdQuery);
        }
        if (message.withGrantedQuery !== undefined) {
            obj.withGrantedQuery = exports.UserGrantWithGrantedQuery.toJSON(message.withGrantedQuery);
        }
        if (message.roleKeyQuery !== undefined) {
            obj.roleKeyQuery = exports.UserGrantRoleKeyQuery.toJSON(message.roleKeyQuery);
        }
        if (message.projectGrantIdQuery !== undefined) {
            obj.projectGrantIdQuery = exports.UserGrantProjectGrantIDQuery.toJSON(message.projectGrantIdQuery);
        }
        if (message.userNameQuery !== undefined) {
            obj.userNameQuery = exports.UserGrantUserNameQuery.toJSON(message.userNameQuery);
        }
        if (message.firstNameQuery !== undefined) {
            obj.firstNameQuery = exports.UserGrantFirstNameQuery.toJSON(message.firstNameQuery);
        }
        if (message.lastNameQuery !== undefined) {
            obj.lastNameQuery = exports.UserGrantLastNameQuery.toJSON(message.lastNameQuery);
        }
        if (message.emailQuery !== undefined) {
            obj.emailQuery = exports.UserGrantEmailQuery.toJSON(message.emailQuery);
        }
        if (message.orgNameQuery !== undefined) {
            obj.orgNameQuery = exports.UserGrantOrgNameQuery.toJSON(message.orgNameQuery);
        }
        if (message.orgDomainQuery !== undefined) {
            obj.orgDomainQuery = exports.UserGrantOrgDomainQuery.toJSON(message.orgDomainQuery);
        }
        if (message.projectNameQuery !== undefined) {
            obj.projectNameQuery = exports.UserGrantProjectNameQuery.toJSON(message.projectNameQuery);
        }
        if (message.displayNameQuery !== undefined) {
            obj.displayNameQuery = exports.UserGrantDisplayNameQuery.toJSON(message.displayNameQuery);
        }
        if (message.userTypeQuery !== undefined) {
            obj.userTypeQuery = exports.UserGrantUserTypeQuery.toJSON(message.userTypeQuery);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantQuery();
        message.projectIdQuery = (object.projectIdQuery !== undefined && object.projectIdQuery !== null)
            ? exports.UserGrantProjectIDQuery.fromPartial(object.projectIdQuery)
            : undefined;
        message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
            ? exports.UserGrantUserIDQuery.fromPartial(object.userIdQuery)
            : undefined;
        message.withGrantedQuery = (object.withGrantedQuery !== undefined && object.withGrantedQuery !== null)
            ? exports.UserGrantWithGrantedQuery.fromPartial(object.withGrantedQuery)
            : undefined;
        message.roleKeyQuery = (object.roleKeyQuery !== undefined && object.roleKeyQuery !== null)
            ? exports.UserGrantRoleKeyQuery.fromPartial(object.roleKeyQuery)
            : undefined;
        message.projectGrantIdQuery = (object.projectGrantIdQuery !== undefined && object.projectGrantIdQuery !== null)
            ? exports.UserGrantProjectGrantIDQuery.fromPartial(object.projectGrantIdQuery)
            : undefined;
        message.userNameQuery = (object.userNameQuery !== undefined && object.userNameQuery !== null)
            ? exports.UserGrantUserNameQuery.fromPartial(object.userNameQuery)
            : undefined;
        message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
            ? exports.UserGrantFirstNameQuery.fromPartial(object.firstNameQuery)
            : undefined;
        message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
            ? exports.UserGrantLastNameQuery.fromPartial(object.lastNameQuery)
            : undefined;
        message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
            ? exports.UserGrantEmailQuery.fromPartial(object.emailQuery)
            : undefined;
        message.orgNameQuery = (object.orgNameQuery !== undefined && object.orgNameQuery !== null)
            ? exports.UserGrantOrgNameQuery.fromPartial(object.orgNameQuery)
            : undefined;
        message.orgDomainQuery = (object.orgDomainQuery !== undefined && object.orgDomainQuery !== null)
            ? exports.UserGrantOrgDomainQuery.fromPartial(object.orgDomainQuery)
            : undefined;
        message.projectNameQuery = (object.projectNameQuery !== undefined && object.projectNameQuery !== null)
            ? exports.UserGrantProjectNameQuery.fromPartial(object.projectNameQuery)
            : undefined;
        message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
            ? exports.UserGrantDisplayNameQuery.fromPartial(object.displayNameQuery)
            : undefined;
        message.userTypeQuery = (object.userTypeQuery !== undefined && object.userTypeQuery !== null)
            ? exports.UserGrantUserTypeQuery.fromPartial(object.userTypeQuery)
            : undefined;
        return message;
    },
};
function createBaseUserGrantProjectIDQuery() {
    return { projectId: "" };
}
exports.UserGrantProjectIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantProjectIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
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
        return { projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantProjectIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUserGrantProjectIDQuery();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUserGrantUserIDQuery() {
    return { userId: "" };
}
exports.UserGrantUserIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantUserIDQuery();
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
        return exports.UserGrantUserIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUserGrantUserIDQuery();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUserGrantWithGrantedQuery() {
    return { withGranted: false };
}
exports.UserGrantWithGrantedQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.withGranted !== false) {
            writer.uint32(8).bool(message.withGranted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantWithGrantedQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.withGranted = reader.bool();
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
        return { withGranted: isSet(object.withGranted) ? globalThis.Boolean(object.withGranted) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.withGranted !== false) {
            obj.withGranted = message.withGranted;
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantWithGrantedQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUserGrantWithGrantedQuery();
        message.withGranted = (_a = object.withGranted) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseUserGrantRoleKeyQuery() {
    return { roleKey: "", method: 0 };
}
exports.UserGrantRoleKeyQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.roleKey !== "") {
            writer.uint32(10).string(message.roleKey);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantRoleKeyQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.roleKey = reader.string();
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
            roleKey: isSet(object.roleKey) ? globalThis.String(object.roleKey) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.roleKey !== "") {
            obj.roleKey = message.roleKey;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantRoleKeyQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantRoleKeyQuery();
        message.roleKey = (_a = object.roleKey) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantProjectGrantIDQuery() {
    return { projectGrantId: "" };
}
exports.UserGrantProjectGrantIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectGrantId !== "") {
            writer.uint32(10).string(message.projectGrantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantProjectGrantIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectGrantId = reader.string();
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
        return { projectGrantId: isSet(object.projectGrantId) ? globalThis.String(object.projectGrantId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectGrantId !== "") {
            obj.projectGrantId = message.projectGrantId;
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantProjectGrantIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUserGrantProjectGrantIDQuery();
        message.projectGrantId = (_a = object.projectGrantId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUserGrantUserNameQuery() {
    return { userName: "", method: 0 };
}
exports.UserGrantUserNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantUserNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
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
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantUserNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantUserNameQuery();
        message.userName = (_a = object.userName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantFirstNameQuery() {
    return { firstName: "", method: 0 };
}
exports.UserGrantFirstNameQuery = {
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
        const message = createBaseUserGrantFirstNameQuery();
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
        return exports.UserGrantFirstNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantFirstNameQuery();
        message.firstName = (_a = object.firstName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantLastNameQuery() {
    return { lastName: "", method: 0 };
}
exports.UserGrantLastNameQuery = {
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
        const message = createBaseUserGrantLastNameQuery();
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
        return exports.UserGrantLastNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantLastNameQuery();
        message.lastName = (_a = object.lastName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantEmailQuery() {
    return { email: "", method: 0 };
}
exports.UserGrantEmailQuery = {
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
        const message = createBaseUserGrantEmailQuery();
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
        return exports.UserGrantEmailQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantEmailQuery();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantOrgNameQuery() {
    return { orgName: "", method: 0 };
}
exports.UserGrantOrgNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgName !== "") {
            writer.uint32(10).string(message.orgName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantOrgNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgName = reader.string();
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
            orgName: isSet(object.orgName) ? globalThis.String(object.orgName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgName !== "") {
            obj.orgName = message.orgName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantOrgNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantOrgNameQuery();
        message.orgName = (_a = object.orgName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantOrgDomainQuery() {
    return { orgDomain: "", method: 0 };
}
exports.UserGrantOrgDomainQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgDomain !== "") {
            writer.uint32(10).string(message.orgDomain);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantOrgDomainQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgDomain = reader.string();
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
            orgDomain: isSet(object.orgDomain) ? globalThis.String(object.orgDomain) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgDomain !== "") {
            obj.orgDomain = message.orgDomain;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantOrgDomainQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantOrgDomainQuery();
        message.orgDomain = (_a = object.orgDomain) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantProjectNameQuery() {
    return { projectName: "", method: 0 };
}
exports.UserGrantProjectNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectName !== "") {
            writer.uint32(10).string(message.projectName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantProjectNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectName = reader.string();
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
            projectName: isSet(object.projectName) ? globalThis.String(object.projectName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectName !== "") {
            obj.projectName = message.projectName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantProjectNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantProjectNameQuery();
        message.projectName = (_a = object.projectName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantDisplayNameQuery() {
    return { displayName: "", method: 0 };
}
exports.UserGrantDisplayNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantDisplayNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.displayName = reader.string();
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
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantDisplayNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserGrantDisplayNameQuery();
        message.displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUserGrantUserTypeQuery() {
    return { type: 0 };
}
exports.UserGrantUserTypeQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantUserTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
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
        return { type: isSet(object.type) ? typeFromJSON(object.type) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = typeToJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return exports.UserGrantUserTypeQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUserGrantUserTypeQuery();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
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