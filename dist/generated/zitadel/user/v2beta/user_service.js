"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTOTPResponse = exports.RemoveTOTPRequest = exports.VerifyTOTPRegistrationResponse = exports.VerifyTOTPRegistrationRequest = exports.RegisterTOTPResponse = exports.RegisterTOTPRequest = exports.VerifyU2FRegistrationResponse = exports.VerifyU2FRegistrationRequest = exports.RegisterU2FResponse = exports.RegisterU2FRequest = exports.VerifyPasskeyRegistrationResponse = exports.VerifyPasskeyRegistrationRequest = exports.RegisterPasskeyResponse = exports.RegisterPasskeyRequest = exports.UnlockUserResponse = exports.UnlockUserRequest = exports.LockUserResponse = exports.LockUserRequest = exports.ReactivateUserResponse = exports.ReactivateUserRequest = exports.DeactivateUserResponse = exports.DeactivateUserRequest = exports.UpdateHumanUserResponse = exports.UpdateHumanUserRequest = exports.DeleteUserResponse = exports.DeleteUserRequest = exports.VerifyPhoneResponse = exports.VerifyPhoneRequest = exports.ResendPhoneCodeResponse = exports.ResendPhoneCodeRequest = exports.RemovePhoneResponse = exports.RemovePhoneRequest = exports.SetPhoneResponse = exports.SetPhoneRequest = exports.VerifyEmailResponse = exports.VerifyEmailRequest = exports.ResendEmailCodeResponse = exports.ResendEmailCodeRequest = exports.SetEmailResponse = exports.SetEmailRequest = exports.ListUsersResponse = exports.ListUsersRequest = exports.GetUserByIDResponse = exports.GetUserByIDRequest = exports.AddHumanUserResponse = exports.AddHumanUserRequest = exports.authenticationMethodTypeToJSON = exports.authenticationMethodTypeFromJSON = exports.AuthenticationMethodType = exports.protobufPackage = void 0;
exports.UserServiceDefinition = exports.ListAuthenticationMethodTypesResponse = exports.ListAuthenticationMethodTypesRequest = exports.SetPasswordResponse = exports.SetPasswordRequest = exports.PasswordResetResponse = exports.PasswordResetRequest = exports.AddIDPLinkResponse = exports.AddIDPLinkRequest = exports.RetrieveIdentityProviderIntentResponse = exports.RetrieveIdentityProviderIntentRequest = exports.StartIdentityProviderIntentResponse = exports.StartIdentityProviderIntentRequest = exports.CreatePasskeyRegistrationLinkResponse = exports.CreatePasskeyRegistrationLinkRequest = exports.RemoveOTPEmailResponse = exports.RemoveOTPEmailRequest = exports.AddOTPEmailResponse = exports.AddOTPEmailRequest = exports.RemoveOTPSMSResponse = exports.RemoveOTPSMSRequest = exports.AddOTPSMSResponse = exports.AddOTPSMSRequest = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const struct_js_1 = require("../../../google/protobuf/struct.js");
const object_js_1 = require("../../object/v2beta/object.js");
const auth_js_1 = require("./auth.js");
const email_js_1 = require("./email.js");
const idp_js_1 = require("./idp.js");
const password_js_1 = require("./password.js");
const phone_js_1 = require("./phone.js");
const query_js_1 = require("./query.js");
const user_js_1 = require("./user.js");
exports.protobufPackage = "zitadel.user.v2beta";
var AuthenticationMethodType;
(function (AuthenticationMethodType) {
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_UNSPECIFIED"] = 0] = "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_PASSWORD"] = 1] = "AUTHENTICATION_METHOD_TYPE_PASSWORD";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_PASSKEY"] = 2] = "AUTHENTICATION_METHOD_TYPE_PASSKEY";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_IDP"] = 3] = "AUTHENTICATION_METHOD_TYPE_IDP";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_TOTP"] = 4] = "AUTHENTICATION_METHOD_TYPE_TOTP";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_U2F"] = 5] = "AUTHENTICATION_METHOD_TYPE_U2F";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_OTP_SMS"] = 6] = "AUTHENTICATION_METHOD_TYPE_OTP_SMS";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_OTP_EMAIL"] = 7] = "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL";
    AuthenticationMethodType[AuthenticationMethodType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthenticationMethodType = exports.AuthenticationMethodType || (exports.AuthenticationMethodType = {}));
function authenticationMethodTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHENTICATION_METHOD_TYPE_PASSWORD":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSWORD;
        case 2:
        case "AUTHENTICATION_METHOD_TYPE_PASSKEY":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSKEY;
        case 3:
        case "AUTHENTICATION_METHOD_TYPE_IDP":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_IDP;
        case 4:
        case "AUTHENTICATION_METHOD_TYPE_TOTP":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_TOTP;
        case 5:
        case "AUTHENTICATION_METHOD_TYPE_U2F":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_U2F;
        case 6:
        case "AUTHENTICATION_METHOD_TYPE_OTP_SMS":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_SMS;
        case 7:
        case "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_EMAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthenticationMethodType.UNRECOGNIZED;
    }
}
exports.authenticationMethodTypeFromJSON = authenticationMethodTypeFromJSON;
function authenticationMethodTypeToJSON(object) {
    switch (object) {
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_UNSPECIFIED:
            return "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSWORD:
            return "AUTHENTICATION_METHOD_TYPE_PASSWORD";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSKEY:
            return "AUTHENTICATION_METHOD_TYPE_PASSKEY";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_IDP:
            return "AUTHENTICATION_METHOD_TYPE_IDP";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_TOTP:
            return "AUTHENTICATION_METHOD_TYPE_TOTP";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_U2F:
            return "AUTHENTICATION_METHOD_TYPE_U2F";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_SMS:
            return "AUTHENTICATION_METHOD_TYPE_OTP_SMS";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_EMAIL:
            return "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL";
        case AuthenticationMethodType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authenticationMethodTypeToJSON = authenticationMethodTypeToJSON;
function createBaseAddHumanUserRequest() {
    return {
        userId: undefined,
        username: undefined,
        organization: undefined,
        profile: undefined,
        email: undefined,
        phone: undefined,
        metadata: [],
        password: undefined,
        hashedPassword: undefined,
        idpLinks: [],
        totpSecret: undefined,
    };
}
exports.AddHumanUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== undefined) {
            writer.uint32(10).string(message.userId);
        }
        if (message.username !== undefined) {
            writer.uint32(18).string(message.username);
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(90).fork()).join();
        }
        if (message.profile !== undefined) {
            user_js_1.SetHumanProfile.encode(message.profile, writer.uint32(34).fork()).join();
        }
        if (message.email !== undefined) {
            email_js_1.SetHumanEmail.encode(message.email, writer.uint32(42).fork()).join();
        }
        if (message.phone !== undefined) {
            phone_js_1.SetHumanPhone.encode(message.phone, writer.uint32(82).fork()).join();
        }
        for (const v of message.metadata) {
            user_js_1.SetMetadataEntry.encode(v, writer.uint32(50).fork()).join();
        }
        if (message.password !== undefined) {
            password_js_1.Password.encode(message.password, writer.uint32(58).fork()).join();
        }
        if (message.hashedPassword !== undefined) {
            password_js_1.HashedPassword.encode(message.hashedPassword, writer.uint32(66).fork()).join();
        }
        for (const v of message.idpLinks) {
            idp_js_1.IDPLink.encode(v, writer.uint32(74).fork()).join();
        }
        if (message.totpSecret !== undefined) {
            writer.uint32(98).string(message.totpSecret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddHumanUserRequest();
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
                    message.username = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.profile = user_js_1.SetHumanProfile.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = email_js_1.SetHumanEmail.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.phone = phone_js_1.SetHumanPhone.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.metadata.push(user_js_1.SetMetadataEntry.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.password = password_js_1.Password.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.hashedPassword = password_js_1.HashedPassword.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.idpLinks.push(idp_js_1.IDPLink.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.totpSecret = reader.string();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : undefined,
            username: isSet(object.username) ? globalThis.String(object.username) : undefined,
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            profile: isSet(object.profile) ? user_js_1.SetHumanProfile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? email_js_1.SetHumanEmail.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? phone_js_1.SetHumanPhone.fromJSON(object.phone) : undefined,
            metadata: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.metadata)
                ? object.metadata.map((e) => user_js_1.SetMetadataEntry.fromJSON(e))
                : [],
            password: isSet(object.password) ? password_js_1.Password.fromJSON(object.password) : undefined,
            hashedPassword: isSet(object.hashedPassword) ? password_js_1.HashedPassword.fromJSON(object.hashedPassword) : undefined,
            idpLinks: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.idpLinks) ? object.idpLinks.map((e) => idp_js_1.IDPLink.fromJSON(e)) : [],
            totpSecret: isSet(object.totpSecret) ? globalThis.String(object.totpSecret) : undefined,
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if (message.userId !== undefined) {
            obj.userId = message.userId;
        }
        if (message.username !== undefined) {
            obj.username = message.username;
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.profile !== undefined) {
            obj.profile = user_js_1.SetHumanProfile.toJSON(message.profile);
        }
        if (message.email !== undefined) {
            obj.email = email_js_1.SetHumanEmail.toJSON(message.email);
        }
        if (message.phone !== undefined) {
            obj.phone = phone_js_1.SetHumanPhone.toJSON(message.phone);
        }
        if ((_a = message.metadata) === null || _a === void 0 ? void 0 : _a.length) {
            obj.metadata = message.metadata.map((e) => user_js_1.SetMetadataEntry.toJSON(e));
        }
        if (message.password !== undefined) {
            obj.password = password_js_1.Password.toJSON(message.password);
        }
        if (message.hashedPassword !== undefined) {
            obj.hashedPassword = password_js_1.HashedPassword.toJSON(message.hashedPassword);
        }
        if ((_b = message.idpLinks) === null || _b === void 0 ? void 0 : _b.length) {
            obj.idpLinks = message.idpLinks.map((e) => idp_js_1.IDPLink.toJSON(e));
        }
        if (message.totpSecret !== undefined) {
            obj.totpSecret = message.totpSecret;
        }
        return obj;
    },
    create(base) {
        return exports.AddHumanUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAddHumanUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : undefined;
        message.username = (_b = object.username) !== null && _b !== void 0 ? _b : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? user_js_1.SetHumanProfile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null)
            ? email_js_1.SetHumanEmail.fromPartial(object.email)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? phone_js_1.SetHumanPhone.fromPartial(object.phone)
            : undefined;
        message.metadata = ((_c = object.metadata) === null || _c === void 0 ? void 0 : _c.map((e) => user_js_1.SetMetadataEntry.fromPartial(e))) || [];
        message.password = (object.password !== undefined && object.password !== null)
            ? password_js_1.Password.fromPartial(object.password)
            : undefined;
        message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
            ? password_js_1.HashedPassword.fromPartial(object.hashedPassword)
            : undefined;
        message.idpLinks = ((_d = object.idpLinks) === null || _d === void 0 ? void 0 : _d.map((e) => idp_js_1.IDPLink.fromPartial(e))) || [];
        message.totpSecret = (_e = object.totpSecret) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseAddHumanUserResponse() {
    return { userId: "", details: undefined, emailCode: undefined, phoneCode: undefined };
}
exports.AddHumanUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.emailCode !== undefined) {
            writer.uint32(26).string(message.emailCode);
        }
        if (message.phoneCode !== undefined) {
            writer.uint32(34).string(message.phoneCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddHumanUserResponse();
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
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.emailCode = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.phoneCode = reader.string();
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
            emailCode: isSet(object.emailCode) ? globalThis.String(object.emailCode) : undefined,
            phoneCode: isSet(object.phoneCode) ? globalThis.String(object.phoneCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.emailCode !== undefined) {
            obj.emailCode = message.emailCode;
        }
        if (message.phoneCode !== undefined) {
            obj.phoneCode = message.phoneCode;
        }
        return obj;
    },
    create(base) {
        return exports.AddHumanUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddHumanUserResponse();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.emailCode = (_b = object.emailCode) !== null && _b !== void 0 ? _b : undefined;
        message.phoneCode = (_c = object.phoneCode) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetUserByIDRequest() {
    return { userId: "" };
}
exports.GetUserByIDRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserByIDRequest();
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
        return exports.GetUserByIDRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetUserByIDRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetUserByIDResponse() {
    return { details: undefined, user: undefined };
}
exports.GetUserByIDResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.user !== undefined) {
            user_js_1.User.encode(message.user, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserByIDResponse();
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
                    message.user = user_js_1.User.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? user_js_1.User.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.user !== undefined) {
            obj.user = user_js_1.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.GetUserByIDResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetUserByIDResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.user = (object.user !== undefined && object.user !== null) ? user_js_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseListUsersRequest() {
    return { query: undefined, sortingColumn: 0, queries: [] };
}
exports.ListUsersRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.query !== undefined) {
            object_js_1.ListQuery.encode(message.query, writer.uint32(10).fork()).join();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(16).int32(message.sortingColumn);
        }
        for (const v of message.queries) {
            query_js_1.SearchQuery.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListUsersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_js_1.ListQuery.decode(reader, reader.uint32());
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
                    message.queries.push(query_js_1.SearchQuery.decode(reader, reader.uint32()));
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
            query: isSet(object.query) ? object_js_1.ListQuery.fromJSON(object.query) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, query_js_1.userFieldNameFromJSON)(object.sortingColumn) : 0,
            queries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.queries) ? object.queries.map((e) => query_js_1.SearchQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.query !== undefined) {
            obj.query = object_js_1.ListQuery.toJSON(message.query);
        }
        if (message.sortingColumn !== 0) {
            obj.sortingColumn = (0, query_js_1.userFieldNameToJSON)(message.sortingColumn);
        }
        if ((_a = message.queries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.queries = message.queries.map((e) => query_js_1.SearchQuery.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListUsersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListUsersRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_js_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.sortingColumn = (_a = object.sortingColumn) !== null && _a !== void 0 ? _a : 0;
        message.queries = ((_b = object.queries) === null || _b === void 0 ? void 0 : _b.map((e) => query_js_1.SearchQuery.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListUsersResponse() {
    return { details: undefined, sortingColumn: 0, result: [] };
}
exports.ListUsersResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ListDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(16).int32(message.sortingColumn);
        }
        for (const v of message.result) {
            user_js_1.User.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListUsersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ListDetails.decode(reader, reader.uint32());
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
                    message.result.push(user_js_1.User.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_js_1.ListDetails.fromJSON(object.details) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, query_js_1.userFieldNameFromJSON)(object.sortingColumn) : 0,
            result: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.result) ? object.result.map((e) => user_js_1.User.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ListDetails.toJSON(message.details);
        }
        if (message.sortingColumn !== 0) {
            obj.sortingColumn = (0, query_js_1.userFieldNameToJSON)(message.sortingColumn);
        }
        if ((_a = message.result) === null || _a === void 0 ? void 0 : _a.length) {
            obj.result = message.result.map((e) => user_js_1.User.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListUsersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListUsersResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.sortingColumn = (_a = object.sortingColumn) !== null && _a !== void 0 ? _a : 0;
        message.result = ((_b = object.result) === null || _b === void 0 ? void 0 : _b.map((e) => user_js_1.User.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSetEmailRequest() {
    return { userId: "", email: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetEmailRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.sendCode !== undefined) {
            email_js_1.SendEmailVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).join();
        }
        if (message.returnCode !== undefined) {
            email_js_1.ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).join();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(40).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetEmailRequest();
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
                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sendCode = email_js_1.SendEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.returnCode = email_js_1.ReturnEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            sendCode: isSet(object.sendCode) ? email_js_1.SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? email_js_1.ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = email_js_1.SendEmailVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = email_js_1.ReturnEmailVerificationCode.toJSON(message.returnCode);
        }
        if (message.isVerified !== undefined) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.SetEmailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetEmailRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? email_js_1.SendEmailVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? email_js_1.ReturnEmailVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = (_c = object.isVerified) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseSetEmailResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.SetEmailResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetEmailResponse();
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.SetEmailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseResendEmailCodeRequest() {
    return { userId: "", sendCode: undefined, returnCode: undefined };
}
exports.ResendEmailCodeRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.sendCode !== undefined) {
            email_js_1.SendEmailVerificationCode.encode(message.sendCode, writer.uint32(18).fork()).join();
        }
        if (message.returnCode !== undefined) {
            email_js_1.ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendEmailCodeRequest();
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
                    message.sendCode = email_js_1.SendEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = email_js_1.ReturnEmailVerificationCode.decode(reader, reader.uint32());
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
            sendCode: isSet(object.sendCode) ? email_js_1.SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? email_js_1.ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = email_js_1.SendEmailVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = email_js_1.ReturnEmailVerificationCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.ResendEmailCodeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendEmailCodeRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? email_js_1.SendEmailVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? email_js_1.ReturnEmailVerificationCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseResendEmailCodeResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.ResendEmailCodeResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendEmailCodeResponse();
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.ResendEmailCodeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendEmailCodeResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseVerifyEmailRequest() {
    return { userId: "", verificationCode: "" };
}
exports.VerifyEmailRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.verificationCode !== "") {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyEmailRequest();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.verificationCode !== "") {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyEmailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVerifyEmailRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.verificationCode = (_b = object.verificationCode) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVerifyEmailResponse() {
    return { details: undefined };
}
exports.VerifyEmailResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.VerifyEmailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSetPhoneRequest() {
    return { userId: "", phone: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetPhoneRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.phone !== "") {
            writer.uint32(18).string(message.phone);
        }
        if (message.sendCode !== undefined) {
            phone_js_1.SendPhoneVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).join();
        }
        if (message.returnCode !== undefined) {
            phone_js_1.ReturnPhoneVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).join();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(40).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPhoneRequest();
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
                    message.phone = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sendCode = phone_js_1.SendPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.returnCode = phone_js_1.ReturnPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            sendCode: isSet(object.sendCode) ? phone_js_1.SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? phone_js_1.ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = phone_js_1.SendPhoneVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = phone_js_1.ReturnPhoneVerificationCode.toJSON(message.returnCode);
        }
        if (message.isVerified !== undefined) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.SetPhoneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetPhoneRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.phone = (_b = object.phone) !== null && _b !== void 0 ? _b : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? phone_js_1.SendPhoneVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? phone_js_1.ReturnPhoneVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = (_c = object.isVerified) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseSetPhoneResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.SetPhoneResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPhoneResponse();
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.SetPhoneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseRemovePhoneRequest() {
    return { userId: "" };
}
exports.RemovePhoneRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemovePhoneRequest();
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
        return exports.RemovePhoneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemovePhoneRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemovePhoneResponse() {
    return { details: undefined };
}
exports.RemovePhoneResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemovePhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.RemovePhoneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemovePhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseResendPhoneCodeRequest() {
    return { userId: "", sendCode: undefined, returnCode: undefined };
}
exports.ResendPhoneCodeRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.sendCode !== undefined) {
            phone_js_1.SendPhoneVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).join();
        }
        if (message.returnCode !== undefined) {
            phone_js_1.ReturnPhoneVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendPhoneCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sendCode = phone_js_1.SendPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.returnCode = phone_js_1.ReturnPhoneVerificationCode.decode(reader, reader.uint32());
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
            sendCode: isSet(object.sendCode) ? phone_js_1.SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? phone_js_1.ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = phone_js_1.SendPhoneVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = phone_js_1.ReturnPhoneVerificationCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.ResendPhoneCodeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendPhoneCodeRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? phone_js_1.SendPhoneVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? phone_js_1.ReturnPhoneVerificationCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseResendPhoneCodeResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.ResendPhoneCodeResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendPhoneCodeResponse();
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.ResendPhoneCodeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendPhoneCodeResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseVerifyPhoneRequest() {
    return { userId: "", verificationCode: "" };
}
exports.VerifyPhoneRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.verificationCode !== "") {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPhoneRequest();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.verificationCode !== "") {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyPhoneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVerifyPhoneRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.verificationCode = (_b = object.verificationCode) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVerifyPhoneResponse() {
    return { details: undefined };
}
exports.VerifyPhoneResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.VerifyPhoneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseDeleteUserRequest() {
    return { userId: "" };
}
exports.DeleteUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserRequest();
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
        return exports.DeleteUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteUserResponse() {
    return { details: undefined };
}
exports.DeleteUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.DeleteUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDeleteUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseUpdateHumanUserRequest() {
    return {
        userId: "",
        username: undefined,
        profile: undefined,
        email: undefined,
        phone: undefined,
        password: undefined,
    };
}
exports.UpdateHumanUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.username !== undefined) {
            writer.uint32(18).string(message.username);
        }
        if (message.profile !== undefined) {
            user_js_1.SetHumanProfile.encode(message.profile, writer.uint32(26).fork()).join();
        }
        if (message.email !== undefined) {
            email_js_1.SetHumanEmail.encode(message.email, writer.uint32(34).fork()).join();
        }
        if (message.phone !== undefined) {
            phone_js_1.SetHumanPhone.encode(message.phone, writer.uint32(42).fork()).join();
        }
        if (message.password !== undefined) {
            password_js_1.SetPassword.encode(message.password, writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateHumanUserRequest();
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
                    message.username = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.profile = user_js_1.SetHumanProfile.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.email = email_js_1.SetHumanEmail.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.phone = phone_js_1.SetHumanPhone.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.password = password_js_1.SetPassword.decode(reader, reader.uint32());
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
            username: isSet(object.username) ? globalThis.String(object.username) : undefined,
            profile: isSet(object.profile) ? user_js_1.SetHumanProfile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? email_js_1.SetHumanEmail.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? phone_js_1.SetHumanPhone.fromJSON(object.phone) : undefined,
            password: isSet(object.password) ? password_js_1.SetPassword.fromJSON(object.password) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.username !== undefined) {
            obj.username = message.username;
        }
        if (message.profile !== undefined) {
            obj.profile = user_js_1.SetHumanProfile.toJSON(message.profile);
        }
        if (message.email !== undefined) {
            obj.email = email_js_1.SetHumanEmail.toJSON(message.email);
        }
        if (message.phone !== undefined) {
            obj.phone = phone_js_1.SetHumanPhone.toJSON(message.phone);
        }
        if (message.password !== undefined) {
            obj.password = password_js_1.SetPassword.toJSON(message.password);
        }
        return obj;
    },
    create(base) {
        return exports.UpdateHumanUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateHumanUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.username = (_b = object.username) !== null && _b !== void 0 ? _b : undefined;
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? user_js_1.SetHumanProfile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null)
            ? email_js_1.SetHumanEmail.fromPartial(object.email)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? phone_js_1.SetHumanPhone.fromPartial(object.phone)
            : undefined;
        message.password = (object.password !== undefined && object.password !== null)
            ? password_js_1.SetPassword.fromPartial(object.password)
            : undefined;
        return message;
    },
};
function createBaseUpdateHumanUserResponse() {
    return { details: undefined, emailCode: undefined, phoneCode: undefined };
}
exports.UpdateHumanUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.emailCode !== undefined) {
            writer.uint32(18).string(message.emailCode);
        }
        if (message.phoneCode !== undefined) {
            writer.uint32(26).string(message.phoneCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateHumanUserResponse();
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
                    message.emailCode = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.phoneCode = reader.string();
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
            emailCode: isSet(object.emailCode) ? globalThis.String(object.emailCode) : undefined,
            phoneCode: isSet(object.phoneCode) ? globalThis.String(object.phoneCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.emailCode !== undefined) {
            obj.emailCode = message.emailCode;
        }
        if (message.phoneCode !== undefined) {
            obj.phoneCode = message.phoneCode;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateHumanUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateHumanUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.emailCode = (_a = object.emailCode) !== null && _a !== void 0 ? _a : undefined;
        message.phoneCode = (_b = object.phoneCode) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseDeactivateUserRequest() {
    return { userId: "" };
}
exports.DeactivateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateUserRequest();
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
        return exports.DeactivateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeactivateUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeactivateUserResponse() {
    return { details: undefined };
}
exports.DeactivateUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.DeactivateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDeactivateUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseReactivateUserRequest() {
    return { userId: "" };
}
exports.ReactivateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReactivateUserRequest();
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
        return exports.ReactivateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReactivateUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseReactivateUserResponse() {
    return { details: undefined };
}
exports.ReactivateUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReactivateUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.ReactivateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseReactivateUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseLockUserRequest() {
    return { userId: "" };
}
exports.LockUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockUserRequest();
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
        return exports.LockUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseLockUserResponse() {
    return { details: undefined };
}
exports.LockUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.LockUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseLockUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseUnlockUserRequest() {
    return { userId: "" };
}
exports.UnlockUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnlockUserRequest();
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
        return exports.UnlockUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUnlockUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUnlockUserResponse() {
    return { details: undefined };
}
exports.UnlockUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnlockUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.UnlockUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseUnlockUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRegisterPasskeyRequest() {
    return { userId: "", code: undefined, authenticator: 0, domain: "" };
}
exports.RegisterPasskeyRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.code !== undefined) {
            auth_js_1.PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).join();
        }
        if (message.authenticator !== 0) {
            writer.uint32(24).int32(message.authenticator);
        }
        if (message.domain !== "") {
            writer.uint32(34).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterPasskeyRequest();
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
                    message.code = auth_js_1.PasskeyRegistrationCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.authenticator = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.domain = reader.string();
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
            code: isSet(object.code) ? auth_js_1.PasskeyRegistrationCode.fromJSON(object.code) : undefined,
            authenticator: isSet(object.authenticator) ? (0, auth_js_1.passkeyAuthenticatorFromJSON)(object.authenticator) : 0,
            domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.code !== undefined) {
            obj.code = auth_js_1.PasskeyRegistrationCode.toJSON(message.code);
        }
        if (message.authenticator !== 0) {
            obj.authenticator = (0, auth_js_1.passkeyAuthenticatorToJSON)(message.authenticator);
        }
        if (message.domain !== "") {
            obj.domain = message.domain;
        }
        return obj;
    },
    create(base) {
        return exports.RegisterPasskeyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisterPasskeyRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.code = (object.code !== undefined && object.code !== null)
            ? auth_js_1.PasskeyRegistrationCode.fromPartial(object.code)
            : undefined;
        message.authenticator = (_b = object.authenticator) !== null && _b !== void 0 ? _b : 0;
        message.domain = (_c = object.domain) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisterPasskeyResponse() {
    return { details: undefined, passkeyId: "", publicKeyCredentialCreationOptions: undefined };
}
exports.RegisterPasskeyResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.passkeyId !== "") {
            writer.uint32(18).string(message.passkeyId);
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.publicKeyCredentialCreationOptions), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterPasskeyResponse();
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
                    message.passkeyId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredentialCreationOptions = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
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
            passkeyId: isSet(object.passkeyId) ? globalThis.String(object.passkeyId) : "",
            publicKeyCredentialCreationOptions: isObject(object.publicKeyCredentialCreationOptions)
                ? object.publicKeyCredentialCreationOptions
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.passkeyId !== "") {
            obj.passkeyId = message.passkeyId;
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            obj.publicKeyCredentialCreationOptions = message.publicKeyCredentialCreationOptions;
        }
        return obj;
    },
    create(base) {
        return exports.RegisterPasskeyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegisterPasskeyResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.passkeyId = (_a = object.passkeyId) !== null && _a !== void 0 ? _a : "";
        message.publicKeyCredentialCreationOptions = (_b = object.publicKeyCredentialCreationOptions) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseVerifyPasskeyRegistrationRequest() {
    return { userId: "", passkeyId: "", publicKeyCredential: undefined, passkeyName: "" };
}
exports.VerifyPasskeyRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.passkeyId !== "") {
            writer.uint32(18).string(message.passkeyId);
        }
        if (message.publicKeyCredential !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.publicKeyCredential), writer.uint32(26).fork()).join();
        }
        if (message.passkeyName !== "") {
            writer.uint32(34).string(message.passkeyName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPasskeyRegistrationRequest();
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
                    message.passkeyId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredential = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.passkeyName = reader.string();
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
            passkeyId: isSet(object.passkeyId) ? globalThis.String(object.passkeyId) : "",
            publicKeyCredential: isObject(object.publicKeyCredential) ? object.publicKeyCredential : undefined,
            passkeyName: isSet(object.passkeyName) ? globalThis.String(object.passkeyName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.passkeyId !== "") {
            obj.passkeyId = message.passkeyId;
        }
        if (message.publicKeyCredential !== undefined) {
            obj.publicKeyCredential = message.publicKeyCredential;
        }
        if (message.passkeyName !== "") {
            obj.passkeyName = message.passkeyName;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyPasskeyRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVerifyPasskeyRegistrationRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.passkeyId = (_b = object.passkeyId) !== null && _b !== void 0 ? _b : "";
        message.publicKeyCredential = (_c = object.publicKeyCredential) !== null && _c !== void 0 ? _c : undefined;
        message.passkeyName = (_d = object.passkeyName) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseVerifyPasskeyRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyPasskeyRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPasskeyRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.VerifyPasskeyRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyPasskeyRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRegisterU2FRequest() {
    return { userId: "", domain: "" };
}
exports.RegisterU2FRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.domain !== "") {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterU2FRequest();
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
                    message.domain = reader.string();
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
            domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.domain !== "") {
            obj.domain = message.domain;
        }
        return obj;
    },
    create(base) {
        return exports.RegisterU2FRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegisterU2FRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.domain = (_b = object.domain) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRegisterU2FResponse() {
    return { details: undefined, u2fId: "", publicKeyCredentialCreationOptions: undefined };
}
exports.RegisterU2FResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.u2fId !== "") {
            writer.uint32(18).string(message.u2fId);
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.publicKeyCredentialCreationOptions), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterU2FResponse();
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
                    message.u2fId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredentialCreationOptions = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
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
            u2fId: isSet(object.u2fId) ? globalThis.String(object.u2fId) : "",
            publicKeyCredentialCreationOptions: isObject(object.publicKeyCredentialCreationOptions)
                ? object.publicKeyCredentialCreationOptions
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.u2fId !== "") {
            obj.u2fId = message.u2fId;
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            obj.publicKeyCredentialCreationOptions = message.publicKeyCredentialCreationOptions;
        }
        return obj;
    },
    create(base) {
        return exports.RegisterU2FResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegisterU2FResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.u2fId = (_a = object.u2fId) !== null && _a !== void 0 ? _a : "";
        message.publicKeyCredentialCreationOptions = (_b = object.publicKeyCredentialCreationOptions) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseVerifyU2FRegistrationRequest() {
    return { userId: "", u2fId: "", publicKeyCredential: undefined, tokenName: "" };
}
exports.VerifyU2FRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.u2fId !== "") {
            writer.uint32(18).string(message.u2fId);
        }
        if (message.publicKeyCredential !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.publicKeyCredential), writer.uint32(26).fork()).join();
        }
        if (message.tokenName !== "") {
            writer.uint32(34).string(message.tokenName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyU2FRegistrationRequest();
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
                    message.u2fId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredential = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            u2fId: isSet(object.u2fId) ? globalThis.String(object.u2fId) : "",
            publicKeyCredential: isObject(object.publicKeyCredential) ? object.publicKeyCredential : undefined,
            tokenName: isSet(object.tokenName) ? globalThis.String(object.tokenName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.u2fId !== "") {
            obj.u2fId = message.u2fId;
        }
        if (message.publicKeyCredential !== undefined) {
            obj.publicKeyCredential = message.publicKeyCredential;
        }
        if (message.tokenName !== "") {
            obj.tokenName = message.tokenName;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyU2FRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVerifyU2FRegistrationRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.u2fId = (_b = object.u2fId) !== null && _b !== void 0 ? _b : "";
        message.publicKeyCredential = (_c = object.publicKeyCredential) !== null && _c !== void 0 ? _c : undefined;
        message.tokenName = (_d = object.tokenName) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseVerifyU2FRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyU2FRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyU2FRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.VerifyU2FRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyU2FRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRegisterTOTPRequest() {
    return { userId: "" };
}
exports.RegisterTOTPRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterTOTPRequest();
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
        return exports.RegisterTOTPRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRegisterTOTPRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRegisterTOTPResponse() {
    return { details: undefined, uri: "", secret: "" };
}
exports.RegisterTOTPResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.uri !== "") {
            writer.uint32(18).string(message.uri);
        }
        if (message.secret !== "") {
            writer.uint32(26).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterTOTPResponse();
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
                    message.uri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.secret = reader.string();
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
            uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
            secret: isSet(object.secret) ? globalThis.String(object.secret) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.uri !== "") {
            obj.uri = message.uri;
        }
        if (message.secret !== "") {
            obj.secret = message.secret;
        }
        return obj;
    },
    create(base) {
        return exports.RegisterTOTPResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegisterTOTPResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.secret = (_b = object.secret) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVerifyTOTPRegistrationRequest() {
    return { userId: "", code: "" };
}
exports.VerifyTOTPRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyTOTPRegistrationRequest();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            code: isSet(object.code) ? globalThis.String(object.code) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.code !== "") {
            obj.code = message.code;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyTOTPRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVerifyTOTPRegistrationRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVerifyTOTPRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyTOTPRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyTOTPRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.VerifyTOTPRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyTOTPRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveTOTPRequest() {
    return { userId: "" };
}
exports.RemoveTOTPRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveTOTPRequest();
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
        return exports.RemoveTOTPRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveTOTPRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveTOTPResponse() {
    return { details: undefined };
}
exports.RemoveTOTPResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveTOTPResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.RemoveTOTPResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveTOTPResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddOTPSMSRequest() {
    return { userId: "" };
}
exports.AddOTPSMSRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPSMSRequest();
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
        return exports.AddOTPSMSRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddOTPSMSRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddOTPSMSResponse() {
    return { details: undefined };
}
exports.AddOTPSMSResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPSMSResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.AddOTPSMSResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAddOTPSMSResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveOTPSMSRequest() {
    return { userId: "" };
}
exports.RemoveOTPSMSRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPSMSRequest();
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
        return exports.RemoveOTPSMSRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveOTPSMSRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveOTPSMSResponse() {
    return { details: undefined };
}
exports.RemoveOTPSMSResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPSMSResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.RemoveOTPSMSResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPSMSResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddOTPEmailRequest() {
    return { userId: "" };
}
exports.AddOTPEmailRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPEmailRequest();
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
        return exports.AddOTPEmailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddOTPEmailRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddOTPEmailResponse() {
    return { details: undefined };
}
exports.AddOTPEmailResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.AddOTPEmailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAddOTPEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveOTPEmailRequest() {
    return { userId: "" };
}
exports.RemoveOTPEmailRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPEmailRequest();
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
        return exports.RemoveOTPEmailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveOTPEmailRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveOTPEmailResponse() {
    return { details: undefined };
}
exports.RemoveOTPEmailResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.RemoveOTPEmailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseCreatePasskeyRegistrationLinkRequest() {
    return { userId: "", sendLink: undefined, returnCode: undefined };
}
exports.CreatePasskeyRegistrationLinkRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.sendLink !== undefined) {
            auth_js_1.SendPasskeyRegistrationLink.encode(message.sendLink, writer.uint32(18).fork()).join();
        }
        if (message.returnCode !== undefined) {
            auth_js_1.ReturnPasskeyRegistrationCode.encode(message.returnCode, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePasskeyRegistrationLinkRequest();
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
                    message.sendLink = auth_js_1.SendPasskeyRegistrationLink.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = auth_js_1.ReturnPasskeyRegistrationCode.decode(reader, reader.uint32());
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
            sendLink: isSet(object.sendLink) ? auth_js_1.SendPasskeyRegistrationLink.fromJSON(object.sendLink) : undefined,
            returnCode: isSet(object.returnCode) ? auth_js_1.ReturnPasskeyRegistrationCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.sendLink !== undefined) {
            obj.sendLink = auth_js_1.SendPasskeyRegistrationLink.toJSON(message.sendLink);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = auth_js_1.ReturnPasskeyRegistrationCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.CreatePasskeyRegistrationLinkRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreatePasskeyRegistrationLinkRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
            ? auth_js_1.SendPasskeyRegistrationLink.fromPartial(object.sendLink)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? auth_js_1.ReturnPasskeyRegistrationCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseCreatePasskeyRegistrationLinkResponse() {
    return { details: undefined, code: undefined };
}
exports.CreatePasskeyRegistrationLinkResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.code !== undefined) {
            auth_js_1.PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePasskeyRegistrationLinkResponse();
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
                    message.code = auth_js_1.PasskeyRegistrationCode.decode(reader, reader.uint32());
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
            code: isSet(object.code) ? auth_js_1.PasskeyRegistrationCode.fromJSON(object.code) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.code !== undefined) {
            obj.code = auth_js_1.PasskeyRegistrationCode.toJSON(message.code);
        }
        return obj;
    },
    create(base) {
        return exports.CreatePasskeyRegistrationLinkResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreatePasskeyRegistrationLinkResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.code = (object.code !== undefined && object.code !== null)
            ? auth_js_1.PasskeyRegistrationCode.fromPartial(object.code)
            : undefined;
        return message;
    },
};
function createBaseStartIdentityProviderIntentRequest() {
    return { idpId: "", urls: undefined, ldap: undefined };
}
exports.StartIdentityProviderIntentRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.urls !== undefined) {
            idp_js_1.RedirectURLs.encode(message.urls, writer.uint32(18).fork()).join();
        }
        if (message.ldap !== undefined) {
            idp_js_1.LDAPCredentials.encode(message.ldap, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartIdentityProviderIntentRequest();
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
                    message.urls = idp_js_1.RedirectURLs.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ldap = idp_js_1.LDAPCredentials.decode(reader, reader.uint32());
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
            urls: isSet(object.urls) ? idp_js_1.RedirectURLs.fromJSON(object.urls) : undefined,
            ldap: isSet(object.ldap) ? idp_js_1.LDAPCredentials.fromJSON(object.ldap) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.urls !== undefined) {
            obj.urls = idp_js_1.RedirectURLs.toJSON(message.urls);
        }
        if (message.ldap !== undefined) {
            obj.ldap = idp_js_1.LDAPCredentials.toJSON(message.ldap);
        }
        return obj;
    },
    create(base) {
        return exports.StartIdentityProviderIntentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStartIdentityProviderIntentRequest();
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.urls = (object.urls !== undefined && object.urls !== null)
            ? idp_js_1.RedirectURLs.fromPartial(object.urls)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? idp_js_1.LDAPCredentials.fromPartial(object.ldap)
            : undefined;
        return message;
    },
};
function createBaseStartIdentityProviderIntentResponse() {
    return { details: undefined, authUrl: undefined, idpIntent: undefined, postForm: undefined };
}
exports.StartIdentityProviderIntentResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.authUrl !== undefined) {
            writer.uint32(18).string(message.authUrl);
        }
        if (message.idpIntent !== undefined) {
            idp_js_1.IDPIntent.encode(message.idpIntent, writer.uint32(26).fork()).join();
        }
        if (message.postForm !== undefined) {
            writer.uint32(34).bytes(message.postForm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartIdentityProviderIntentResponse();
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
                    message.authUrl = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idpIntent = idp_js_1.IDPIntent.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.postForm = Buffer.from(reader.bytes());
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
            authUrl: isSet(object.authUrl) ? globalThis.String(object.authUrl) : undefined,
            idpIntent: isSet(object.idpIntent) ? idp_js_1.IDPIntent.fromJSON(object.idpIntent) : undefined,
            postForm: isSet(object.postForm) ? Buffer.from(bytesFromBase64(object.postForm)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.authUrl !== undefined) {
            obj.authUrl = message.authUrl;
        }
        if (message.idpIntent !== undefined) {
            obj.idpIntent = idp_js_1.IDPIntent.toJSON(message.idpIntent);
        }
        if (message.postForm !== undefined) {
            obj.postForm = base64FromBytes(message.postForm);
        }
        return obj;
    },
    create(base) {
        return exports.StartIdentityProviderIntentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStartIdentityProviderIntentResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.authUrl = (_a = object.authUrl) !== null && _a !== void 0 ? _a : undefined;
        message.idpIntent = (object.idpIntent !== undefined && object.idpIntent !== null)
            ? idp_js_1.IDPIntent.fromPartial(object.idpIntent)
            : undefined;
        message.postForm = (_b = object.postForm) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseRetrieveIdentityProviderIntentRequest() {
    return { idpIntentId: "", idpIntentToken: "" };
}
exports.RetrieveIdentityProviderIntentRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpIntentId !== "") {
            writer.uint32(10).string(message.idpIntentId);
        }
        if (message.idpIntentToken !== "") {
            writer.uint32(18).string(message.idpIntentToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetrieveIdentityProviderIntentRequest();
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
        return obj;
    },
    create(base) {
        return exports.RetrieveIdentityProviderIntentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRetrieveIdentityProviderIntentRequest();
        message.idpIntentId = (_a = object.idpIntentId) !== null && _a !== void 0 ? _a : "";
        message.idpIntentToken = (_b = object.idpIntentToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRetrieveIdentityProviderIntentResponse() {
    return { details: undefined, idpInformation: undefined, userId: "" };
}
exports.RetrieveIdentityProviderIntentResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.idpInformation !== undefined) {
            idp_js_1.IDPInformation.encode(message.idpInformation, writer.uint32(18).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetrieveIdentityProviderIntentResponse();
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
                    message.idpInformation = idp_js_1.IDPInformation.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            idpInformation: isSet(object.idpInformation) ? idp_js_1.IDPInformation.fromJSON(object.idpInformation) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.idpInformation !== undefined) {
            obj.idpInformation = idp_js_1.IDPInformation.toJSON(message.idpInformation);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.RetrieveIdentityProviderIntentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRetrieveIdentityProviderIntentResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.idpInformation = (object.idpInformation !== undefined && object.idpInformation !== null)
            ? idp_js_1.IDPInformation.fromPartial(object.idpInformation)
            : undefined;
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddIDPLinkRequest() {
    return { userId: "", idpLink: undefined };
}
exports.AddIDPLinkRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.idpLink !== undefined) {
            idp_js_1.IDPLink.encode(message.idpLink, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddIDPLinkRequest();
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
                    message.idpLink = idp_js_1.IDPLink.decode(reader, reader.uint32());
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
            idpLink: isSet(object.idpLink) ? idp_js_1.IDPLink.fromJSON(object.idpLink) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.idpLink !== undefined) {
            obj.idpLink = idp_js_1.IDPLink.toJSON(message.idpLink);
        }
        return obj;
    },
    create(base) {
        return exports.AddIDPLinkRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddIDPLinkRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.idpLink = (object.idpLink !== undefined && object.idpLink !== null)
            ? idp_js_1.IDPLink.fromPartial(object.idpLink)
            : undefined;
        return message;
    },
};
function createBaseAddIDPLinkResponse() {
    return { details: undefined };
}
exports.AddIDPLinkResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddIDPLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.AddIDPLinkResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAddIDPLinkResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBasePasswordResetRequest() {
    return { userId: "", sendLink: undefined, returnCode: undefined };
}
exports.PasswordResetRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.sendLink !== undefined) {
            password_js_1.SendPasswordResetLink.encode(message.sendLink, writer.uint32(18).fork()).join();
        }
        if (message.returnCode !== undefined) {
            password_js_1.ReturnPasswordResetCode.encode(message.returnCode, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordResetRequest();
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
                    message.sendLink = password_js_1.SendPasswordResetLink.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = password_js_1.ReturnPasswordResetCode.decode(reader, reader.uint32());
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
            sendLink: isSet(object.sendLink) ? password_js_1.SendPasswordResetLink.fromJSON(object.sendLink) : undefined,
            returnCode: isSet(object.returnCode) ? password_js_1.ReturnPasswordResetCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.sendLink !== undefined) {
            obj.sendLink = password_js_1.SendPasswordResetLink.toJSON(message.sendLink);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = password_js_1.ReturnPasswordResetCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.PasswordResetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePasswordResetRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
            ? password_js_1.SendPasswordResetLink.fromPartial(object.sendLink)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? password_js_1.ReturnPasswordResetCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBasePasswordResetResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.PasswordResetResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordResetResponse();
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordResetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePasswordResetResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseSetPasswordRequest() {
    return { userId: "", newPassword: undefined, currentPassword: undefined, verificationCode: undefined };
}
exports.SetPasswordRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.newPassword !== undefined) {
            password_js_1.Password.encode(message.newPassword, writer.uint32(18).fork()).join();
        }
        if (message.currentPassword !== undefined) {
            writer.uint32(26).string(message.currentPassword);
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(34).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPasswordRequest();
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
                    message.newPassword = password_js_1.Password.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.currentPassword = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            newPassword: isSet(object.newPassword) ? password_js_1.Password.fromJSON(object.newPassword) : undefined,
            currentPassword: isSet(object.currentPassword) ? globalThis.String(object.currentPassword) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.newPassword !== undefined) {
            obj.newPassword = password_js_1.Password.toJSON(message.newPassword);
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
        return exports.SetPasswordRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetPasswordRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.newPassword = (object.newPassword !== undefined && object.newPassword !== null)
            ? password_js_1.Password.fromPartial(object.newPassword)
            : undefined;
        message.currentPassword = (_b = object.currentPassword) !== null && _b !== void 0 ? _b : undefined;
        message.verificationCode = (_c = object.verificationCode) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseSetPasswordResponse() {
    return { details: undefined };
}
exports.SetPasswordResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPasswordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.SetPasswordResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetPasswordResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListAuthenticationMethodTypesRequest() {
    return { userId: "" };
}
exports.ListAuthenticationMethodTypesRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAuthenticationMethodTypesRequest();
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
        return exports.ListAuthenticationMethodTypesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListAuthenticationMethodTypesRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListAuthenticationMethodTypesResponse() {
    return { details: undefined, authMethodTypes: [] };
}
exports.ListAuthenticationMethodTypesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ListDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        writer.uint32(18).fork();
        for (const v of message.authMethodTypes) {
            writer.int32(v);
        }
        writer.join();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAuthenticationMethodTypesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag === 16) {
                        message.authMethodTypes.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.authMethodTypes.push(reader.int32());
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
            details: isSet(object.details) ? object_js_1.ListDetails.fromJSON(object.details) : undefined,
            authMethodTypes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.authMethodTypes)
                ? object.authMethodTypes.map((e) => authenticationMethodTypeFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ListDetails.toJSON(message.details);
        }
        if ((_a = message.authMethodTypes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.authMethodTypes = message.authMethodTypes.map((e) => authenticationMethodTypeToJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListAuthenticationMethodTypesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListAuthenticationMethodTypesResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.authMethodTypes = ((_a = object.authMethodTypes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
exports.UserServiceDefinition = {
    name: "UserService",
    fullName: "zitadel.user.v2beta.UserService",
    methods: {
        addHumanUser: {
            name: "AddHumanUser",
            requestType: exports.AddHumanUserRequest,
            requestStream: false,
            responseType: exports.AddHumanUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [
                        Buffer.from([
                            33,
                            10,
                            26,
                            10,
                            10,
                            117,
                            115,
                            101,
                            114,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                            26,
                            12,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            18,
                            3,
                            8,
                            201,
                            1,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            24,
                            58,
                            1,
                            42,
                            34,
                            19,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            104,
                            117,
                            109,
                            97,
                            110,
                        ]),
                    ],
                },
            },
        },
        getUserByID: {
            name: "GetUserByID",
            requestType: exports.GetUserByIDRequest,
            requestStream: false,
            responseType: exports.GetUserByIDResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [
                        Buffer.from([
                            22,
                            10,
                            15,
                            10,
                            13,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            18,
                            3,
                            8,
                            200,
                            1,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            25,
                            18,
                            23,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        listUsers: {
            name: "ListUsers",
            requestType: exports.ListUsersRequest,
            requestStream: false,
            responseType: exports.ListUsersResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            109,
                            74,
                            47,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            40,
                            10,
                            38,
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
                            115,
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
                            113,
                            117,
                            101,
                            114,
                            121,
                            74,
                            56,
                            10,
                            3,
                            52,
                            48,
                            48,
                            18,
                            49,
                            10,
                            18,
                            105,
                            110,
                            118,
                            97,
                            108,
                            105,
                            100,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            113,
                            117,
                            101,
                            114,
                            121,
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
                            88,
                            1,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            22,
                            10,
                            15,
                            10,
                            13,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            18,
                            3,
                            8,
                            200,
                            1,
                        ]),
                    ],
                    578365826: [Buffer.from([18, 58, 1, 42, 34, 13, 47, 118, 50, 98, 101, 116, 97, 47, 117, 115, 101, 114, 115])],
                },
            },
        },
        setEmail: {
            name: "SetEmail",
            requestType: exports.SetEmailRequest,
            requestStream: false,
            responseType: exports.SetEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            34,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        resendEmailCode: {
            name: "ResendEmailCode",
            requestType: exports.ResendEmailCodeRequest,
            requestStream: false,
            responseType: exports.ResendEmailCodeResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            101,
                            109,
                            97,
                            105,
                            108,
                            47,
                            114,
                            101,
                            115,
                            101,
                            110,
                            100,
                        ]),
                    ],
                },
            },
        },
        verifyEmail: {
            name: "VerifyEmail",
            requestType: exports.VerifyEmailRequest,
            requestStream: false,
            responseType: exports.VerifyEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            101,
                            109,
                            97,
                            105,
                            108,
                            47,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        setPhone: {
            name: "SetPhone",
            requestType: exports.SetPhoneRequest,
            requestStream: false,
            responseType: exports.SetPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            34,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                        ]),
                    ],
                },
            },
        },
        removePhone: {
            name: "RemovePhone",
            requestType: exports.RemovePhoneRequest,
            requestStream: false,
            responseType: exports.RemovePhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            74,
                            18,
                            21,
                            68,
                            101,
                            108,
                            101,
                            116,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            26,
                            34,
                            68,
                            101,
                            108,
                            101,
                            116,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                            88,
                            1,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            42,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                        ]),
                    ],
                },
            },
        },
        resendPhoneCode: {
            name: "ResendPhoneCode",
            requestType: exports.ResendPhoneCodeRequest,
            requestStream: false,
            responseType: exports.ResendPhoneCodeResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                            47,
                            114,
                            101,
                            115,
                            101,
                            110,
                            100,
                        ]),
                    ],
                },
            },
        },
        verifyPhone: {
            name: "VerifyPhone",
            requestType: exports.VerifyPhoneRequest,
            requestStream: false,
            responseType: exports.VerifyPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                            47,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        updateHumanUser: {
            name: "UpdateHumanUser",
            requestType: exports.UpdateHumanUserRequest,
            requestStream: false,
            responseType: exports.UpdateHumanUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            25,
                            26,
                            23,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        deactivateUser: {
            name: "DeactivateUser",
            requestType: exports.DeactivateUserRequest,
            requestStream: false,
            responseType: exports.DeactivateUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            39,
                            58,
                            1,
                            42,
                            34,
                            34,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
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
        reactivateUser: {
            name: "ReactivateUser",
            requestType: exports.ReactivateUserRequest,
            requestStream: false,
            responseType: exports.ReactivateUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            39,
                            58,
                            1,
                            42,
                            34,
                            34,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
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
        lockUser: {
            name: "LockUser",
            requestType: exports.LockUserRequest,
            requestStream: false,
            responseType: exports.LockUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            58,
                            1,
                            42,
                            34,
                            28,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            108,
                            111,
                            99,
                            107,
                        ]),
                    ],
                },
            },
        },
        unlockUser: {
            name: "UnlockUser",
            requestType: exports.UnlockUserRequest,
            requestStream: false,
            responseType: exports.UnlockUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            35,
                            58,
                            1,
                            42,
                            34,
                            30,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            117,
                            110,
                            108,
                            111,
                            99,
                            107,
                        ]),
                    ],
                },
            },
        },
        deleteUser: {
            name: "DeleteUser",
            requestType: exports.DeleteUserRequest,
            requestStream: false,
            responseType: exports.DeleteUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([15, 10, 13, 10, 11, 117, 115, 101, 114, 46, 100, 101, 108, 101, 116, 101])],
                    578365826: [
                        Buffer.from([
                            25,
                            42,
                            23,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        registerPasskey: {
            name: "RegisterPasskey",
            requestType: exports.RegisterPasskeyRequest,
            requestStream: false,
            responseType: exports.RegisterPasskeyResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            58,
                            1,
                            42,
                            34,
                            32,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            115,
                        ]),
                    ],
                },
            },
        },
        verifyPasskeyRegistration: {
            name: "VerifyPasskeyRegistration",
            requestType: exports.VerifyPasskeyRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyPasskeyRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            50,
                            58,
                            1,
                            42,
                            34,
                            45,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            115,
                            47,
                            123,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        createPasskeyRegistrationLink: {
            name: "CreatePasskeyRegistrationLink",
            requestType: exports.CreatePasskeyRegistrationLinkRequest,
            requestStream: false,
            responseType: exports.CreatePasskeyRegistrationLinkResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            10,
                            18,
                            117,
                            115,
                            101,
                            114,
                            46,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
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
                            55,
                            58,
                            1,
                            42,
                            34,
                            50,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            115,
                            47,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            95,
                            108,
                            105,
                            110,
                            107,
                        ]),
                    ],
                },
            },
        },
        registerU2F: {
            name: "RegisterU2F",
            requestType: exports.RegisterU2FRequest,
            requestStream: false,
            responseType: exports.RegisterU2FResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            58,
                            1,
                            42,
                            34,
                            27,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            117,
                            50,
                            102,
                        ]),
                    ],
                },
            },
        },
        verifyU2FRegistration: {
            name: "VerifyU2FRegistration",
            requestType: exports.VerifyU2FRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyU2FRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            117,
                            50,
                            102,
                            47,
                            123,
                            117,
                            50,
                            102,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        registerTOTP: {
            name: "RegisterTOTP",
            requestType: exports.RegisterTOTPRequest,
            requestStream: false,
            responseType: exports.RegisterTOTPResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            58,
                            1,
                            42,
                            34,
                            28,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            116,
                            111,
                            116,
                            112,
                        ]),
                    ],
                },
            },
        },
        verifyTOTPRegistration: {
            name: "VerifyTOTPRegistration",
            requestType: exports.VerifyTOTPRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyTOTPRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            40,
                            58,
                            1,
                            42,
                            34,
                            35,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            116,
                            111,
                            116,
                            112,
                            47,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        removeTOTP: {
            name: "RemoveTOTP",
            requestType: exports.RemoveTOTPRequest,
            requestStream: false,
            responseType: exports.RemoveTOTPResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            30,
                            42,
                            28,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            116,
                            111,
                            116,
                            112,
                        ]),
                    ],
                },
            },
        },
        addOTPSMS: {
            name: "AddOTPSMS",
            requestType: exports.AddOTPSMSRequest,
            requestStream: false,
            responseType: exports.AddOTPSMSResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            36,
                            58,
                            1,
                            42,
                            34,
                            31,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                        ]),
                    ],
                },
            },
        },
        removeOTPSMS: {
            name: "RemoveOTPSMS",
            requestType: exports.RemoveOTPSMSRequest,
            requestStream: false,
            responseType: exports.RemoveOTPSMSResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            42,
                            31,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                        ]),
                    ],
                },
            },
        },
        addOTPEmail: {
            name: "AddOTPEmail",
            requestType: exports.AddOTPEmailRequest,
            requestStream: false,
            responseType: exports.AddOTPEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            38,
                            58,
                            1,
                            42,
                            34,
                            33,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        removeOTPEmail: {
            name: "RemoveOTPEmail",
            requestType: exports.RemoveOTPEmailRequest,
            requestStream: false,
            responseType: exports.RemoveOTPEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            35,
                            42,
                            33,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        startIdentityProviderIntent: {
            name: "StartIdentityProviderIntent",
            requestType: exports.StartIdentityProviderIntentRequest,
            requestStream: false,
            responseType: exports.StartIdentityProviderIntentResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            24,
                            58,
                            1,
                            42,
                            34,
                            19,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            105,
                            100,
                            112,
                            95,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
                            115,
                        ]),
                    ],
                },
            },
        },
        retrieveIdentityProviderIntent: {
            name: "RetrieveIdentityProviderIntent",
            requestType: exports.RetrieveIdentityProviderIntentRequest,
            requestStream: false,
            responseType: exports.RetrieveIdentityProviderIntentResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            40,
                            58,
                            1,
                            42,
                            34,
                            35,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            105,
                            100,
                            112,
                            95,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
                            115,
                            47,
                            123,
                            105,
                            100,
                            112,
                            95,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        addIDPLink: {
            name: "AddIDPLink",
            requestType: exports.AddIDPLinkRequest,
            requestStream: false,
            responseType: exports.AddIDPLinkResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            34,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            108,
                            105,
                            110,
                            107,
                            115,
                        ]),
                    ],
                },
            },
        },
        passwordReset: {
            name: "PasswordReset",
            requestType: exports.PasswordResetRequest,
            requestStream: false,
            responseType: exports.PasswordResetResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            43,
                            58,
                            1,
                            42,
                            34,
                            38,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            95,
                            114,
                            101,
                            115,
                            101,
                            116,
                        ]),
                    ],
                },
            },
        },
        setPassword: {
            name: "SetPassword",
            requestType: exports.SetPasswordRequest,
            requestStream: false,
            responseType: exports.SetPasswordResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            58,
                            1,
                            42,
                            34,
                            32,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                        ]),
                    ],
                },
            },
        },
        listAuthenticationMethodTypes: {
            name: "ListAuthenticationMethodTypes",
            requestType: exports.ListAuthenticationMethodTypesRequest,
            requestStream: false,
            responseType: exports.ListAuthenticationMethodTypesResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [Buffer.from([15, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75, 88, 1])],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            48,
                            18,
                            46,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            95,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            115,
                        ]),
                    ],
                },
            },
        },
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
//# sourceMappingURL=user_service.js.map