"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTOTPRegistrationRequest = exports.StartTOTPRegistrationResponse = exports.StartTOTPRegistrationRequest = exports.RemoveWebAuthNAuthenticatorResponse = exports.RemoveWebAuthNAuthenticatorRequest = exports.CreateWebAuthNRegistrationLinkResponse = exports.CreateWebAuthNRegistrationLinkRequest = exports.VerifyWebAuthNRegistrationResponse = exports.VerifyWebAuthNRegistrationRequest = exports.StartWebAuthNRegistrationResponse = exports.StartWebAuthNRegistrationRequest = exports.RequestPasswordResetResponse = exports.RequestPasswordResetRequest = exports.SetPasswordResponse = exports.SetPasswordRequest = exports.RemoveUsernameResponse = exports.RemoveUsernameRequest = exports.AddUsernameResponse = exports.AddUsernameRequest = exports.ResendContactPhoneCodeResponse = exports.ResendContactPhoneCodeRequest = exports.VerifyContactPhoneResponse = exports.VerifyContactPhoneRequest = exports.SetContactPhoneResponse = exports.SetContactPhoneRequest = exports.ResendContactEmailCodeResponse = exports.ResendContactEmailCodeRequest = exports.VerifyContactEmailResponse = exports.VerifyContactEmailRequest = exports.SetContactEmailResponse = exports.SetContactEmailRequest = exports.DeleteUserResponse = exports.DeleteUserRequest = exports.UnlockUserResponse = exports.UnlockUserRequest = exports.LockUserResponse = exports.LockUserRequest = exports.ActivateUserResponse = exports.ActivateUserRequest = exports.DeactivateUserResponse = exports.DeactivateUserRequest = exports.PatchUserResponse = exports.PatchUserRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.GetUserResponse = exports.GetUserRequest = exports.SearchUsersResponse = exports.SearchUsersRequest = exports.protobufPackage = void 0;
exports.ZITADELUsersDefinition = exports.RemoveIDPAuthenticatorResponse = exports.RemoveIDPAuthenticatorRequest = exports.AddIDPAuthenticatorResponse = exports.AddIDPAuthenticatorRequest = exports.GetIdentityProviderIntentResponse = exports.GetIdentityProviderIntentRequest = exports.StartIdentityProviderIntentResponse = exports.StartIdentityProviderIntentRequest = exports.RemoveOTPEmailAuthenticatorResponse = exports.RemoveOTPEmailAuthenticatorRequest = exports.VerifyOTPEmailRegistrationResponse = exports.VerifyOTPEmailRegistrationRequest = exports.AddOTPEmailAuthenticatorResponse = exports.AddOTPEmailAuthenticatorRequest = exports.RemoveOTPSMSAuthenticatorResponse = exports.RemoveOTPSMSAuthenticatorRequest = exports.VerifyOTPSMSRegistrationResponse = exports.VerifyOTPSMSRegistrationRequest = exports.AddOTPSMSAuthenticatorResponse = exports.AddOTPSMSAuthenticatorRequest = exports.RemoveTOTPAuthenticatorResponse = exports.RemoveTOTPAuthenticatorRequest = exports.VerifyTOTPRegistrationResponse = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const struct_js_1 = require("../../../../google/protobuf/struct.js");
const object_js_1 = require("../../../object/v3alpha/object.js");
const object_js_2 = require("../../object/v3alpha/object.js");
const authenticator_js_1 = require("./authenticator.js");
const communication_js_1 = require("./communication.js");
const query_js_1 = require("./query.js");
const user_js_1 = require("./user.js");
exports.protobufPackage = "zitadel.resources.user.v3alpha";
function createBaseSearchUsersRequest() {
    return { instance: undefined, query: undefined, sortingColumn: 0, filters: [] };
}
exports.SearchUsersRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.query !== undefined) {
            object_js_2.SearchQuery.encode(message.query, writer.uint32(18).fork()).join();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(24).int32(message.sortingColumn);
        }
        for (const v of message.filters) {
            query_js_1.SearchFilter.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchUsersRequest();
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
                    message.filters.push(query_js_1.SearchFilter.decode(reader, reader.uint32()));
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
            sortingColumn: isSet(object.sortingColumn) ? (0, query_js_1.fieldNameFromJSON)(object.sortingColumn) : 0,
            filters: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map((e) => query_js_1.SearchFilter.fromJSON(e))
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
        if (message.sortingColumn !== 0) {
            obj.sortingColumn = (0, query_js_1.fieldNameToJSON)(message.sortingColumn);
        }
        if ((_a = message.filters) === null || _a === void 0 ? void 0 : _a.length) {
            obj.filters = message.filters.map((e) => query_js_1.SearchFilter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchUsersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSearchUsersRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? object_js_2.SearchQuery.fromPartial(object.query)
            : undefined;
        message.sortingColumn = (_a = object.sortingColumn) !== null && _a !== void 0 ? _a : 0;
        message.filters = ((_b = object.filters) === null || _b === void 0 ? void 0 : _b.map((e) => query_js_1.SearchFilter.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSearchUsersResponse() {
    return { details: undefined, result: [] };
}
exports.SearchUsersResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.ListDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        for (const v of message.result) {
            user_js_1.GetUser.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchUsersResponse();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(user_js_1.GetUser.decode(reader, reader.uint32()));
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
            result: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.result) ? object.result.map((e) => user_js_1.GetUser.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.ListDetails.toJSON(message.details);
        }
        if ((_a = message.result) === null || _a === void 0 ? void 0 : _a.length) {
            obj.result = message.result.map((e) => user_js_1.GetUser.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchUsersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSearchUsersResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = ((_a = object.result) === null || _a === void 0 ? void 0 : _a.map((e) => user_js_1.GetUser.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetUserRequest() {
    return { instance: undefined, id: "" };
}
exports.GetUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserRequest();
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
        return exports.GetUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetUserResponse() {
    return { user: undefined };
}
exports.GetUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.user !== undefined) {
            user_js_1.GetUser.encode(message.user, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = user_js_1.GetUser.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? user_js_1.GetUser.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = user_js_1.GetUser.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.GetUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? user_js_1.GetUser.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseCreateUserRequest() {
    return { instance: undefined, organization: undefined, user: undefined };
}
exports.CreateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.user !== undefined) {
            user_js_1.CreateUser.encode(message.user, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.user = user_js_1.CreateUser.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            user: isSet(object.user) ? user_js_1.CreateUser.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.user !== undefined) {
            obj.user = user_js_1.CreateUser.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.user = (object.user !== undefined && object.user !== null)
            ? user_js_1.CreateUser.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBaseCreateUserResponse() {
    return { details: undefined, emailCode: undefined, phoneCode: undefined };
}
exports.CreateUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        const message = createBaseCreateUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            emailCode: isSet(object.emailCode) ? globalThis.String(object.emailCode) : undefined,
            phoneCode: isSet(object.phoneCode) ? globalThis.String(object.phoneCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
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
        return exports.CreateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.emailCode = (_a = object.emailCode) !== null && _a !== void 0 ? _a : undefined;
        message.phoneCode = (_b = object.phoneCode) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePatchUserRequest() {
    return { instance: undefined, organization: undefined, id: "", user: undefined };
}
exports.PatchUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.user !== undefined) {
            user_js_1.PatchUser.encode(message.user, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchUserRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.user = user_js_1.PatchUser.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            user: isSet(object.user) ? user_js_1.PatchUser.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.user !== undefined) {
            obj.user = user_js_1.PatchUser.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.PatchUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePatchUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.user = (object.user !== undefined && object.user !== null) ? user_js_1.PatchUser.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBasePatchUserResponse() {
    return { details: undefined, emailCode: undefined, phoneCode: undefined };
}
exports.PatchUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        const message = createBasePatchUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            emailCode: isSet(object.emailCode) ? globalThis.String(object.emailCode) : undefined,
            phoneCode: isSet(object.phoneCode) ? globalThis.String(object.phoneCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
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
        return exports.PatchUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePatchUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.emailCode = (_a = object.emailCode) !== null && _a !== void 0 ? _a : undefined;
        message.phoneCode = (_b = object.phoneCode) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseDeactivateUserRequest() {
    return { instance: undefined, organization: undefined, id: "" };
}
exports.DeactivateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
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
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DeactivateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeactivateUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeactivateUserResponse() {
    return { details: undefined };
}
exports.DeactivateUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        return exports.DeactivateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDeactivateUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseActivateUserRequest() {
    return { instance: undefined, organization: undefined, id: "" };
}
exports.ActivateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateUserRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.ActivateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActivateUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseActivateUserResponse() {
    return { details: undefined };
}
exports.ActivateUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateUserResponse();
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
        return exports.ActivateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseActivateUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseLockUserRequest() {
    return { instance: undefined, organization: undefined, id: "" };
}
exports.LockUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
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
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.LockUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseLockUserResponse() {
    return { details: undefined };
}
exports.LockUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        return exports.LockUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseLockUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseUnlockUserRequest() {
    return { instance: undefined, organization: undefined, id: "" };
}
exports.UnlockUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
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
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.UnlockUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUnlockUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUnlockUserResponse() {
    return { details: undefined };
}
exports.UnlockUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        return exports.UnlockUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseUnlockUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseDeleteUserRequest() {
    return { instance: undefined, organization: undefined, id: "" };
}
exports.DeleteUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
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
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteUserRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteUserResponse() {
    return { details: undefined };
}
exports.DeleteUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        return exports.DeleteUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDeleteUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSetContactEmailRequest() {
    return { instance: undefined, organization: undefined, id: "", email: undefined };
}
exports.SetContactEmailRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.email !== undefined) {
            communication_js_1.SetEmail.encode(message.email, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetContactEmailRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.email = communication_js_1.SetEmail.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            email: isSet(object.email) ? communication_js_1.SetEmail.fromJSON(object.email) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.email !== undefined) {
            obj.email = communication_js_1.SetEmail.toJSON(message.email);
        }
        return obj;
    },
    create(base) {
        return exports.SetContactEmailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetContactEmailRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.email = (object.email !== undefined && object.email !== null)
            ? communication_js_1.SetEmail.fromPartial(object.email)
            : undefined;
        return message;
    },
};
function createBaseSetContactEmailResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.SetContactEmailResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(26).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetContactEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.SetContactEmailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetContactEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseVerifyContactEmailRequest() {
    return { instance: undefined, organization: undefined, id: "", verificationCode: "" };
}
exports.VerifyContactEmailRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.verificationCode !== "") {
            writer.uint32(34).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyContactEmailRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.verificationCode !== "") {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyContactEmailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVerifyContactEmailRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.verificationCode = (_b = object.verificationCode) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVerifyContactEmailResponse() {
    return { details: undefined };
}
exports.VerifyContactEmailResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyContactEmailResponse();
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
        return exports.VerifyContactEmailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyContactEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseResendContactEmailCodeRequest() {
    return { instance: undefined, organization: undefined, id: "", sendCode: undefined, returnCode: undefined };
}
exports.ResendContactEmailCodeRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.sendCode !== undefined) {
            communication_js_1.SendEmailVerificationCode.encode(message.sendCode, writer.uint32(34).fork()).join();
        }
        if (message.returnCode !== undefined) {
            communication_js_1.ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendContactEmailCodeRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sendCode = communication_js_1.SendEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.returnCode = communication_js_1.ReturnEmailVerificationCode.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            sendCode: isSet(object.sendCode) ? communication_js_1.SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? communication_js_1.ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = communication_js_1.SendEmailVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = communication_js_1.ReturnEmailVerificationCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.ResendContactEmailCodeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendContactEmailCodeRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? communication_js_1.SendEmailVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? communication_js_1.ReturnEmailVerificationCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseResendContactEmailCodeResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.ResendContactEmailCodeResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendContactEmailCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.ResendContactEmailCodeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendContactEmailCodeResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseSetContactPhoneRequest() {
    return { instance: undefined, organization: undefined, id: "", phone: undefined };
}
exports.SetContactPhoneRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.phone !== undefined) {
            communication_js_1.SetPhone.encode(message.phone, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetContactPhoneRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.phone = communication_js_1.SetPhone.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            phone: isSet(object.phone) ? communication_js_1.SetPhone.fromJSON(object.phone) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.phone !== undefined) {
            obj.phone = communication_js_1.SetPhone.toJSON(message.phone);
        }
        return obj;
    },
    create(base) {
        return exports.SetContactPhoneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetContactPhoneRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? communication_js_1.SetPhone.fromPartial(object.phone)
            : undefined;
        return message;
    },
};
function createBaseSetContactPhoneResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.SetContactPhoneResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(26).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetContactPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.SetContactPhoneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetContactPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseVerifyContactPhoneRequest() {
    return { instance: undefined, organization: undefined, id: "", verificationCode: "" };
}
exports.VerifyContactPhoneRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.verificationCode !== "") {
            writer.uint32(34).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyContactPhoneRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.verificationCode !== "") {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyContactPhoneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVerifyContactPhoneRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.verificationCode = (_b = object.verificationCode) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVerifyContactPhoneResponse() {
    return { details: undefined };
}
exports.VerifyContactPhoneResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyContactPhoneResponse();
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
        return exports.VerifyContactPhoneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyContactPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseResendContactPhoneCodeRequest() {
    return { instance: undefined, organization: undefined, id: "", sendCode: undefined, returnCode: undefined };
}
exports.ResendContactPhoneCodeRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.sendCode !== undefined) {
            communication_js_1.SendPhoneVerificationCode.encode(message.sendCode, writer.uint32(34).fork()).join();
        }
        if (message.returnCode !== undefined) {
            communication_js_1.ReturnPhoneVerificationCode.encode(message.returnCode, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendContactPhoneCodeRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sendCode = communication_js_1.SendPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.returnCode = communication_js_1.ReturnPhoneVerificationCode.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            sendCode: isSet(object.sendCode) ? communication_js_1.SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? communication_js_1.ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = communication_js_1.SendPhoneVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = communication_js_1.ReturnPhoneVerificationCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.ResendContactPhoneCodeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendContactPhoneCodeRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? communication_js_1.SendPhoneVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? communication_js_1.ReturnPhoneVerificationCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseResendContactPhoneCodeResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.ResendContactPhoneCodeResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendContactPhoneCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.ResendContactPhoneCodeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResendContactPhoneCodeResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseAddUsernameRequest() {
    return { instance: undefined, organization: undefined, id: "", username: undefined };
}
exports.AddUsernameRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.username !== undefined) {
            authenticator_js_1.SetUsername.encode(message.username, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddUsernameRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.username = authenticator_js_1.SetUsername.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            username: isSet(object.username) ? authenticator_js_1.SetUsername.fromJSON(object.username) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.username !== undefined) {
            obj.username = authenticator_js_1.SetUsername.toJSON(message.username);
        }
        return obj;
    },
    create(base) {
        return exports.AddUsernameRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddUsernameRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.username = (object.username !== undefined && object.username !== null)
            ? authenticator_js_1.SetUsername.fromPartial(object.username)
            : undefined;
        return message;
    },
};
function createBaseAddUsernameResponse() {
    return { details: undefined, usernameId: "" };
}
exports.AddUsernameResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.usernameId !== "") {
            writer.uint32(18).string(message.usernameId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddUsernameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.usernameId = reader.string();
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            usernameId: isSet(object.usernameId) ? globalThis.String(object.usernameId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.usernameId !== "") {
            obj.usernameId = message.usernameId;
        }
        return obj;
    },
    create(base) {
        return exports.AddUsernameResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddUsernameResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.usernameId = (_a = object.usernameId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveUsernameRequest() {
    return { instance: undefined, organization: undefined, id: "", usernameId: "" };
}
exports.RemoveUsernameRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.usernameId !== "") {
            writer.uint32(34).string(message.usernameId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveUsernameRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.usernameId = reader.string();
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            usernameId: isSet(object.usernameId) ? globalThis.String(object.usernameId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.usernameId !== "") {
            obj.usernameId = message.usernameId;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveUsernameRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoveUsernameRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.usernameId = (_b = object.usernameId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveUsernameResponse() {
    return { details: undefined };
}
exports.RemoveUsernameResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveUsernameResponse();
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
        return exports.RemoveUsernameResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveUsernameResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSetPasswordRequest() {
    return { instance: undefined, organization: undefined, id: "", newPassword: undefined };
}
exports.SetPasswordRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.newPassword !== undefined) {
            authenticator_js_1.SetPassword.encode(message.newPassword, writer.uint32(34).fork()).join();
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
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newPassword = authenticator_js_1.SetPassword.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            newPassword: isSet(object.newPassword) ? authenticator_js_1.SetPassword.fromJSON(object.newPassword) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.newPassword !== undefined) {
            obj.newPassword = authenticator_js_1.SetPassword.toJSON(message.newPassword);
        }
        return obj;
    },
    create(base) {
        return exports.SetPasswordRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetPasswordRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.newPassword = (object.newPassword !== undefined && object.newPassword !== null)
            ? authenticator_js_1.SetPassword.fromPartial(object.newPassword)
            : undefined;
        return message;
    },
};
function createBaseSetPasswordResponse() {
    return { details: undefined };
}
exports.SetPasswordResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        return exports.SetPasswordResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetPasswordResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRequestPasswordResetRequest() {
    return {
        instance: undefined,
        organization: undefined,
        id: "",
        sendEmail: undefined,
        sendSms: undefined,
        returnCode: undefined,
    };
}
exports.RequestPasswordResetRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.sendEmail !== undefined) {
            authenticator_js_1.SendPasswordResetEmail.encode(message.sendEmail, writer.uint32(34).fork()).join();
        }
        if (message.sendSms !== undefined) {
            authenticator_js_1.SendPasswordResetSMS.encode(message.sendSms, writer.uint32(42).fork()).join();
        }
        if (message.returnCode !== undefined) {
            authenticator_js_1.ReturnPasswordResetCode.encode(message.returnCode, writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestPasswordResetRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sendEmail = authenticator_js_1.SendPasswordResetEmail.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sendSms = authenticator_js_1.SendPasswordResetSMS.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.returnCode = authenticator_js_1.ReturnPasswordResetCode.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            sendEmail: isSet(object.sendEmail) ? authenticator_js_1.SendPasswordResetEmail.fromJSON(object.sendEmail) : undefined,
            sendSms: isSet(object.sendSms) ? authenticator_js_1.SendPasswordResetSMS.fromJSON(object.sendSms) : undefined,
            returnCode: isSet(object.returnCode) ? authenticator_js_1.ReturnPasswordResetCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sendEmail !== undefined) {
            obj.sendEmail = authenticator_js_1.SendPasswordResetEmail.toJSON(message.sendEmail);
        }
        if (message.sendSms !== undefined) {
            obj.sendSms = authenticator_js_1.SendPasswordResetSMS.toJSON(message.sendSms);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = authenticator_js_1.ReturnPasswordResetCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.RequestPasswordResetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRequestPasswordResetRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sendEmail = (object.sendEmail !== undefined && object.sendEmail !== null)
            ? authenticator_js_1.SendPasswordResetEmail.fromPartial(object.sendEmail)
            : undefined;
        message.sendSms = (object.sendSms !== undefined && object.sendSms !== null)
            ? authenticator_js_1.SendPasswordResetSMS.fromPartial(object.sendSms)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? authenticator_js_1.ReturnPasswordResetCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseRequestPasswordResetResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.RequestPasswordResetResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestPasswordResetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.RequestPasswordResetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRequestPasswordResetResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = (_a = object.verificationCode) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStartWebAuthNRegistrationRequest() {
    return { instance: undefined, organization: undefined, id: "", registration: undefined };
}
exports.StartWebAuthNRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.registration !== undefined) {
            authenticator_js_1.StartWebAuthNRegistration.encode(message.registration, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartWebAuthNRegistrationRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.registration = authenticator_js_1.StartWebAuthNRegistration.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            registration: isSet(object.registration) ? authenticator_js_1.StartWebAuthNRegistration.fromJSON(object.registration) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.registration !== undefined) {
            obj.registration = authenticator_js_1.StartWebAuthNRegistration.toJSON(message.registration);
        }
        return obj;
    },
    create(base) {
        return exports.StartWebAuthNRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStartWebAuthNRegistrationRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.registration = (object.registration !== undefined && object.registration !== null)
            ? authenticator_js_1.StartWebAuthNRegistration.fromPartial(object.registration)
            : undefined;
        return message;
    },
};
function createBaseStartWebAuthNRegistrationResponse() {
    return { details: undefined, webAuthNId: "", publicKeyCredentialCreationOptions: undefined };
}
exports.StartWebAuthNRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.webAuthNId !== "") {
            writer.uint32(18).string(message.webAuthNId);
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.publicKeyCredentialCreationOptions), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartWebAuthNRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.webAuthNId = reader.string();
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            webAuthNId: isSet(object.webAuthNId) ? globalThis.String(object.webAuthNId) : "",
            publicKeyCredentialCreationOptions: isObject(object.publicKeyCredentialCreationOptions)
                ? object.publicKeyCredentialCreationOptions
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.webAuthNId !== "") {
            obj.webAuthNId = message.webAuthNId;
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            obj.publicKeyCredentialCreationOptions = message.publicKeyCredentialCreationOptions;
        }
        return obj;
    },
    create(base) {
        return exports.StartWebAuthNRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStartWebAuthNRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.webAuthNId = (_a = object.webAuthNId) !== null && _a !== void 0 ? _a : "";
        message.publicKeyCredentialCreationOptions = (_b = object.publicKeyCredentialCreationOptions) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseVerifyWebAuthNRegistrationRequest() {
    return { instance: undefined, organization: undefined, id: "", webAuthNId: "", verify: undefined };
}
exports.VerifyWebAuthNRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.webAuthNId !== "") {
            writer.uint32(34).string(message.webAuthNId);
        }
        if (message.verify !== undefined) {
            authenticator_js_1.VerifyWebAuthNRegistration.encode(message.verify, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyWebAuthNRegistrationRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.webAuthNId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.verify = authenticator_js_1.VerifyWebAuthNRegistration.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            webAuthNId: isSet(object.webAuthNId) ? globalThis.String(object.webAuthNId) : "",
            verify: isSet(object.verify) ? authenticator_js_1.VerifyWebAuthNRegistration.fromJSON(object.verify) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.webAuthNId !== "") {
            obj.webAuthNId = message.webAuthNId;
        }
        if (message.verify !== undefined) {
            obj.verify = authenticator_js_1.VerifyWebAuthNRegistration.toJSON(message.verify);
        }
        return obj;
    },
    create(base) {
        return exports.VerifyWebAuthNRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVerifyWebAuthNRegistrationRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.webAuthNId = (_b = object.webAuthNId) !== null && _b !== void 0 ? _b : "";
        message.verify = (object.verify !== undefined && object.verify !== null)
            ? authenticator_js_1.VerifyWebAuthNRegistration.fromPartial(object.verify)
            : undefined;
        return message;
    },
};
function createBaseVerifyWebAuthNRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyWebAuthNRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyWebAuthNRegistrationResponse();
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
        return exports.VerifyWebAuthNRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyWebAuthNRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseCreateWebAuthNRegistrationLinkRequest() {
    return { instance: undefined, organization: undefined, id: "", sendLink: undefined, returnCode: undefined };
}
exports.CreateWebAuthNRegistrationLinkRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.sendLink !== undefined) {
            authenticator_js_1.SendWebAuthNRegistrationLink.encode(message.sendLink, writer.uint32(34).fork()).join();
        }
        if (message.returnCode !== undefined) {
            authenticator_js_1.ReturnWebAuthNRegistrationCode.encode(message.returnCode, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateWebAuthNRegistrationLinkRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sendLink = authenticator_js_1.SendWebAuthNRegistrationLink.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.returnCode = authenticator_js_1.ReturnWebAuthNRegistrationCode.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            sendLink: isSet(object.sendLink) ? authenticator_js_1.SendWebAuthNRegistrationLink.fromJSON(object.sendLink) : undefined,
            returnCode: isSet(object.returnCode) ? authenticator_js_1.ReturnWebAuthNRegistrationCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sendLink !== undefined) {
            obj.sendLink = authenticator_js_1.SendWebAuthNRegistrationLink.toJSON(message.sendLink);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = authenticator_js_1.ReturnWebAuthNRegistrationCode.toJSON(message.returnCode);
        }
        return obj;
    },
    create(base) {
        return exports.CreateWebAuthNRegistrationLinkRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateWebAuthNRegistrationLinkRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
            ? authenticator_js_1.SendWebAuthNRegistrationLink.fromPartial(object.sendLink)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? authenticator_js_1.ReturnWebAuthNRegistrationCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseCreateWebAuthNRegistrationLinkResponse() {
    return { details: undefined, code: undefined };
}
exports.CreateWebAuthNRegistrationLinkResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.code !== undefined) {
            authenticator_js_1.AuthenticatorRegistrationCode.encode(message.code, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateWebAuthNRegistrationLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.code = authenticator_js_1.AuthenticatorRegistrationCode.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            code: isSet(object.code) ? authenticator_js_1.AuthenticatorRegistrationCode.fromJSON(object.code) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.code !== undefined) {
            obj.code = authenticator_js_1.AuthenticatorRegistrationCode.toJSON(message.code);
        }
        return obj;
    },
    create(base) {
        return exports.CreateWebAuthNRegistrationLinkResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateWebAuthNRegistrationLinkResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.code = (object.code !== undefined && object.code !== null)
            ? authenticator_js_1.AuthenticatorRegistrationCode.fromPartial(object.code)
            : undefined;
        return message;
    },
};
function createBaseRemoveWebAuthNAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", webAuthNId: "" };
}
exports.RemoveWebAuthNAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.webAuthNId !== "") {
            writer.uint32(34).string(message.webAuthNId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveWebAuthNAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.webAuthNId = reader.string();
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            webAuthNId: isSet(object.webAuthNId) ? globalThis.String(object.webAuthNId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.webAuthNId !== "") {
            obj.webAuthNId = message.webAuthNId;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveWebAuthNAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoveWebAuthNAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.webAuthNId = (_b = object.webAuthNId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveWebAuthNAuthenticatorResponse() {
    return { details: undefined };
}
exports.RemoveWebAuthNAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveWebAuthNAuthenticatorResponse();
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
        return exports.RemoveWebAuthNAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveWebAuthNAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseStartTOTPRegistrationRequest() {
    return { instance: undefined, organization: undefined, id: "" };
}
exports.StartTOTPRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartTOTPRegistrationRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.StartTOTPRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStartTOTPRegistrationRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStartTOTPRegistrationResponse() {
    return { details: undefined, totpId: "", uri: "", secret: "" };
}
exports.StartTOTPRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.totpId !== "") {
            writer.uint32(18).string(message.totpId);
        }
        if (message.uri !== "") {
            writer.uint32(26).string(message.uri);
        }
        if (message.secret !== "") {
            writer.uint32(34).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartTOTPRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.totpId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            totpId: isSet(object.totpId) ? globalThis.String(object.totpId) : "",
            uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
            secret: isSet(object.secret) ? globalThis.String(object.secret) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.totpId !== "") {
            obj.totpId = message.totpId;
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
        return exports.StartTOTPRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStartTOTPRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.totpId = (_a = object.totpId) !== null && _a !== void 0 ? _a : "";
        message.uri = (_b = object.uri) !== null && _b !== void 0 ? _b : "";
        message.secret = (_c = object.secret) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseVerifyTOTPRegistrationRequest() {
    return { instance: undefined, organization: undefined, id: "", totpId: "", code: "" };
}
exports.VerifyTOTPRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.totpId !== "") {
            writer.uint32(34).string(message.totpId);
        }
        if (message.code !== "") {
            writer.uint32(42).string(message.code);
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
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.totpId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            totpId: isSet(object.totpId) ? globalThis.String(object.totpId) : "",
            code: isSet(object.code) ? globalThis.String(object.code) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.totpId !== "") {
            obj.totpId = message.totpId;
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
        var _a, _b, _c;
        const message = createBaseVerifyTOTPRegistrationRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.totpId = (_b = object.totpId) !== null && _b !== void 0 ? _b : "";
        message.code = (_c = object.code) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseVerifyTOTPRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyTOTPRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
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
        return exports.VerifyTOTPRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyTOTPRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveTOTPAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", totpId: "" };
}
exports.RemoveTOTPAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.totpId !== "") {
            writer.uint32(34).string(message.totpId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveTOTPAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.totpId = reader.string();
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            totpId: isSet(object.totpId) ? globalThis.String(object.totpId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.totpId !== "") {
            obj.totpId = message.totpId;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveTOTPAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoveTOTPAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.totpId = (_b = object.totpId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveTOTPAuthenticatorResponse() {
    return { details: undefined };
}
exports.RemoveTOTPAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveTOTPAuthenticatorResponse();
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
        return exports.RemoveTOTPAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveTOTPAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddOTPSMSAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", phone: undefined };
}
exports.AddOTPSMSAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.phone !== undefined) {
            communication_js_1.SetPhone.encode(message.phone, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPSMSAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.phone = communication_js_1.SetPhone.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            phone: isSet(object.phone) ? communication_js_1.SetPhone.fromJSON(object.phone) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.phone !== undefined) {
            obj.phone = communication_js_1.SetPhone.toJSON(message.phone);
        }
        return obj;
    },
    create(base) {
        return exports.AddOTPSMSAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddOTPSMSAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? communication_js_1.SetPhone.fromPartial(object.phone)
            : undefined;
        return message;
    },
};
function createBaseAddOTPSMSAuthenticatorResponse() {
    return { details: undefined, otpSmsId: "", verificationCode: undefined };
}
exports.AddOTPSMSAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.otpSmsId !== "") {
            writer.uint32(18).string(message.otpSmsId);
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(26).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPSMSAuthenticatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otpSmsId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            otpSmsId: isSet(object.otpSmsId) ? globalThis.String(object.otpSmsId) : "",
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.otpSmsId !== "") {
            obj.otpSmsId = message.otpSmsId;
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.AddOTPSMSAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddOTPSMSAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.otpSmsId = (_a = object.otpSmsId) !== null && _a !== void 0 ? _a : "";
        message.verificationCode = (_b = object.verificationCode) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseVerifyOTPSMSRegistrationRequest() {
    return { instance: undefined, organization: undefined, id: "", otpSmsId: "", code: "" };
}
exports.VerifyOTPSMSRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.otpSmsId !== "") {
            writer.uint32(34).string(message.otpSmsId);
        }
        if (message.code !== "") {
            writer.uint32(42).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyOTPSMSRegistrationRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otpSmsId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            otpSmsId: isSet(object.otpSmsId) ? globalThis.String(object.otpSmsId) : "",
            code: isSet(object.code) ? globalThis.String(object.code) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.otpSmsId !== "") {
            obj.otpSmsId = message.otpSmsId;
        }
        if (message.code !== "") {
            obj.code = message.code;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyOTPSMSRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVerifyOTPSMSRegistrationRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.otpSmsId = (_b = object.otpSmsId) !== null && _b !== void 0 ? _b : "";
        message.code = (_c = object.code) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseVerifyOTPSMSRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyOTPSMSRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyOTPSMSRegistrationResponse();
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
        return exports.VerifyOTPSMSRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyOTPSMSRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveOTPSMSAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", otpSmsId: "" };
}
exports.RemoveOTPSMSAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.otpSmsId !== "") {
            writer.uint32(34).string(message.otpSmsId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPSMSAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otpSmsId = reader.string();
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            otpSmsId: isSet(object.otpSmsId) ? globalThis.String(object.otpSmsId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.otpSmsId !== "") {
            obj.otpSmsId = message.otpSmsId;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveOTPSMSAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoveOTPSMSAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.otpSmsId = (_b = object.otpSmsId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveOTPSMSAuthenticatorResponse() {
    return { details: undefined };
}
exports.RemoveOTPSMSAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPSMSAuthenticatorResponse();
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
        return exports.RemoveOTPSMSAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPSMSAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddOTPEmailAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", email: undefined };
}
exports.AddOTPEmailAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.email !== undefined) {
            communication_js_1.SetEmail.encode(message.email, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPEmailAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.email = communication_js_1.SetEmail.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            email: isSet(object.email) ? communication_js_1.SetEmail.fromJSON(object.email) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.email !== undefined) {
            obj.email = communication_js_1.SetEmail.toJSON(message.email);
        }
        return obj;
    },
    create(base) {
        return exports.AddOTPEmailAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddOTPEmailAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.email = (object.email !== undefined && object.email !== null)
            ? communication_js_1.SetEmail.fromPartial(object.email)
            : undefined;
        return message;
    },
};
function createBaseAddOTPEmailAuthenticatorResponse() {
    return { details: undefined, otpEmailId: "", verificationCode: undefined };
}
exports.AddOTPEmailAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.otpEmailId !== "") {
            writer.uint32(18).string(message.otpEmailId);
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(26).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPEmailAuthenticatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otpEmailId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            otpEmailId: isSet(object.otpEmailId) ? globalThis.String(object.otpEmailId) : "",
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.otpEmailId !== "") {
            obj.otpEmailId = message.otpEmailId;
        }
        if (message.verificationCode !== undefined) {
            obj.verificationCode = message.verificationCode;
        }
        return obj;
    },
    create(base) {
        return exports.AddOTPEmailAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddOTPEmailAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.otpEmailId = (_a = object.otpEmailId) !== null && _a !== void 0 ? _a : "";
        message.verificationCode = (_b = object.verificationCode) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseVerifyOTPEmailRegistrationRequest() {
    return { instance: undefined, organization: undefined, id: "", otpEmailId: "", code: "" };
}
exports.VerifyOTPEmailRegistrationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.otpEmailId !== "") {
            writer.uint32(34).string(message.otpEmailId);
        }
        if (message.code !== "") {
            writer.uint32(42).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyOTPEmailRegistrationRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otpEmailId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            otpEmailId: isSet(object.otpEmailId) ? globalThis.String(object.otpEmailId) : "",
            code: isSet(object.code) ? globalThis.String(object.code) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.otpEmailId !== "") {
            obj.otpEmailId = message.otpEmailId;
        }
        if (message.code !== "") {
            obj.code = message.code;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyOTPEmailRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVerifyOTPEmailRegistrationRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.otpEmailId = (_b = object.otpEmailId) !== null && _b !== void 0 ? _b : "";
        message.code = (_c = object.code) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseVerifyOTPEmailRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyOTPEmailRegistrationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyOTPEmailRegistrationResponse();
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
        return exports.VerifyOTPEmailRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVerifyOTPEmailRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveOTPEmailAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", otpEmailId: "" };
}
exports.RemoveOTPEmailAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.otpEmailId !== "") {
            writer.uint32(34).string(message.otpEmailId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPEmailAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otpEmailId = reader.string();
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            otpEmailId: isSet(object.otpEmailId) ? globalThis.String(object.otpEmailId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.otpEmailId !== "") {
            obj.otpEmailId = message.otpEmailId;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveOTPEmailAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoveOTPEmailAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.otpEmailId = (_b = object.otpEmailId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveOTPEmailAuthenticatorResponse() {
    return { details: undefined };
}
exports.RemoveOTPEmailAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPEmailAuthenticatorResponse();
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
        return exports.RemoveOTPEmailAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPEmailAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseStartIdentityProviderIntentRequest() {
    return { instance: undefined, organization: undefined, idpId: "", urls: undefined, ldap: undefined };
}
exports.StartIdentityProviderIntentRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.idpId !== "") {
            writer.uint32(26).string(message.idpId);
        }
        if (message.urls !== undefined) {
            authenticator_js_1.RedirectURLs.encode(message.urls, writer.uint32(34).fork()).join();
        }
        if (message.ldap !== undefined) {
            authenticator_js_1.LDAPCredentials.encode(message.ldap, writer.uint32(42).fork()).join();
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
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.urls = authenticator_js_1.RedirectURLs.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.ldap = authenticator_js_1.LDAPCredentials.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
            urls: isSet(object.urls) ? authenticator_js_1.RedirectURLs.fromJSON(object.urls) : undefined,
            ldap: isSet(object.ldap) ? authenticator_js_1.LDAPCredentials.fromJSON(object.ldap) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.urls !== undefined) {
            obj.urls = authenticator_js_1.RedirectURLs.toJSON(message.urls);
        }
        if (message.ldap !== undefined) {
            obj.ldap = authenticator_js_1.LDAPCredentials.toJSON(message.ldap);
        }
        return obj;
    },
    create(base) {
        return exports.StartIdentityProviderIntentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStartIdentityProviderIntentRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.urls = (object.urls !== undefined && object.urls !== null)
            ? authenticator_js_1.RedirectURLs.fromPartial(object.urls)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? authenticator_js_1.LDAPCredentials.fromPartial(object.ldap)
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
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.authUrl !== undefined) {
            writer.uint32(18).string(message.authUrl);
        }
        if (message.idpIntent !== undefined) {
            authenticator_js_1.IdentityProviderIntent.encode(message.idpIntent, writer.uint32(26).fork()).join();
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
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
                    message.idpIntent = authenticator_js_1.IdentityProviderIntent.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            authUrl: isSet(object.authUrl) ? globalThis.String(object.authUrl) : undefined,
            idpIntent: isSet(object.idpIntent) ? authenticator_js_1.IdentityProviderIntent.fromJSON(object.idpIntent) : undefined,
            postForm: isSet(object.postForm) ? Buffer.from(bytesFromBase64(object.postForm)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.authUrl !== undefined) {
            obj.authUrl = message.authUrl;
        }
        if (message.idpIntent !== undefined) {
            obj.idpIntent = authenticator_js_1.IdentityProviderIntent.toJSON(message.idpIntent);
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
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.authUrl = (_a = object.authUrl) !== null && _a !== void 0 ? _a : undefined;
        message.idpIntent = (object.idpIntent !== undefined && object.idpIntent !== null)
            ? authenticator_js_1.IdentityProviderIntent.fromPartial(object.idpIntent)
            : undefined;
        message.postForm = (_b = object.postForm) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseGetIdentityProviderIntentRequest() {
    return { instance: undefined, organization: undefined, idpIntentId: "", idpIntentToken: "" };
}
exports.GetIdentityProviderIntentRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.idpIntentId !== "") {
            writer.uint32(26).string(message.idpIntentId);
        }
        if (message.idpIntentToken !== "") {
            writer.uint32(34).string(message.idpIntentToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIdentityProviderIntentRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idpIntentId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            idpIntentId: isSet(object.idpIntentId) ? globalThis.String(object.idpIntentId) : "",
            idpIntentToken: isSet(object.idpIntentToken) ? globalThis.String(object.idpIntentToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.idpIntentId !== "") {
            obj.idpIntentId = message.idpIntentId;
        }
        if (message.idpIntentToken !== "") {
            obj.idpIntentToken = message.idpIntentToken;
        }
        return obj;
    },
    create(base) {
        return exports.GetIdentityProviderIntentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetIdentityProviderIntentRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.idpIntentId = (_a = object.idpIntentId) !== null && _a !== void 0 ? _a : "";
        message.idpIntentToken = (_b = object.idpIntentToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetIdentityProviderIntentResponse() {
    return { details: undefined, idpInformation: undefined, id: undefined };
}
exports.GetIdentityProviderIntentResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.idpInformation !== undefined) {
            authenticator_js_1.IDPInformation.encode(message.idpInformation, writer.uint32(18).fork()).join();
        }
        if (message.id !== undefined) {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIdentityProviderIntentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpInformation = authenticator_js_1.IDPInformation.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined,
            idpInformation: isSet(object.idpInformation) ? authenticator_js_1.IDPInformation.fromJSON(object.idpInformation) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        if (message.idpInformation !== undefined) {
            obj.idpInformation = authenticator_js_1.IDPInformation.toJSON(message.idpInformation);
        }
        if (message.id !== undefined) {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GetIdentityProviderIntentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetIdentityProviderIntentResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        message.idpInformation = (object.idpInformation !== undefined && object.idpInformation !== null)
            ? authenticator_js_1.IDPInformation.fromPartial(object.idpInformation)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseAddIDPAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", authenticator: undefined };
}
exports.AddIDPAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.authenticator !== undefined) {
            authenticator_js_1.IDPAuthenticator.encode(message.authenticator, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddIDPAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.authenticator = authenticator_js_1.IDPAuthenticator.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            authenticator: isSet(object.authenticator) ? authenticator_js_1.IDPAuthenticator.fromJSON(object.authenticator) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.authenticator !== undefined) {
            obj.authenticator = authenticator_js_1.IDPAuthenticator.toJSON(message.authenticator);
        }
        return obj;
    },
    create(base) {
        return exports.AddIDPAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddIDPAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.authenticator = (object.authenticator !== undefined && object.authenticator !== null)
            ? authenticator_js_1.IDPAuthenticator.fromPartial(object.authenticator)
            : undefined;
        return message;
    },
};
function createBaseAddIDPAuthenticatorResponse() {
    return { details: undefined };
}
exports.AddIDPAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddIDPAuthenticatorResponse();
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
        return exports.AddIDPAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAddIDPAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveIDPAuthenticatorRequest() {
    return { instance: undefined, organization: undefined, id: "", idpId: "" };
}
exports.RemoveIDPAuthenticatorRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.organization !== undefined) {
            object_js_1.Organization.encode(message.organization, writer.uint32(18).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.idpId !== "") {
            writer.uint32(34).string(message.idpId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveIDPAuthenticatorRequest();
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
                    message.organization = object_js_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.idpId = reader.string();
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
            organization: isSet(object.organization) ? object_js_1.Organization.fromJSON(object.organization) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.organization !== undefined) {
            obj.organization = object_js_1.Organization.toJSON(message.organization);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveIDPAuthenticatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoveIDPAuthenticatorRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_js_1.Organization.fromPartial(object.organization)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.idpId = (_b = object.idpId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveIDPAuthenticatorResponse() {
    return { details: undefined };
}
exports.RemoveIDPAuthenticatorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveIDPAuthenticatorResponse();
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
        return exports.RemoveIDPAuthenticatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRemoveIDPAuthenticatorResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
exports.ZITADELUsersDefinition = {
    name: "ZITADELUsers",
    fullName: "zitadel.resources.user.v3alpha.ZITADELUsers",
    methods: {
        searchUsers: {
            name: "SearchUsers",
            requestType: exports.SearchUsersRequest,
            requestStream: false,
            responseType: exports.SearchUsersResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            107,
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
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            43,
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
                            32,
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
        getUser: {
            name: "GetUser",
            requestType: exports.GetUserRequest,
            requestStream: false,
            responseType: exports.GetUserResponse,
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
                            85,
                            115,
                            101,
                            114,
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
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            18,
                            29,
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
        createUser: {
            name: "CreateUser",
            requestType: exports.CreateUserRequest,
            requestStream: false,
            responseType: exports.CreateUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            81,
                            74,
                            79,
                            10,
                            3,
                            50,
                            48,
                            49,
                            18,
                            72,
                            10,
                            25,
                            85,
                            115,
                            101,
                            114,
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
                            43,
                            10,
                            41,
                            26,
                            39,
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
                            36,
                            10,
                            29,
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
                            32,
                            58,
                            4,
                            117,
                            115,
                            101,
                            114,
                            34,
                            24,
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
                            115,
                        ]),
                    ],
                },
            },
        },
        patchUser: {
            name: "PatchUser",
            requestType: exports.PatchUserRequest,
            requestStream: false,
            responseType: exports.PatchUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            54,
                            74,
                            52,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            45,
                            10,
                            43,
                            85,
                            115,
                            101,
                            114,
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
                            32,
                            111,
                            114,
                            32,
                            108,
                            101,
                            102,
                            116,
                            32,
                            117,
                            110,
                            99,
                            104,
                            97,
                            110,
                            103,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            58,
                            4,
                            117,
                            115,
                            101,
                            114,
                            50,
                            29,
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
        deactivateUser: {
            name: "DeactivateUser",
            requestType: exports.DeactivateUserRequest,
            requestStream: false,
            responseType: exports.DeactivateUserResponse,
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
                            85,
                            115,
                            101,
                            114,
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
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            43,
                            34,
                            41,
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
        activateUser: {
            name: "ActivateUser",
            requestType: exports.ActivateUserRequest,
            requestStream: false,
            responseType: exports.ActivateUserResponse,
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
                            85,
                            115,
                            101,
                            114,
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
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            95,
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
                    8338: [
                        Buffer.from([
                            35,
                            74,
                            33,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            26,
                            10,
                            24,
                            85,
                            115,
                            101,
                            114,
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
                            108,
                            111,
                            99,
                            107,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            34,
                            35,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            95,
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
                    8338: [
                        Buffer.from([
                            37,
                            74,
                            35,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            28,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
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
                            110,
                            108,
                            111,
                            99,
                            107,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            39,
                            34,
                            37,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            95,
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
                    8338: [
                        Buffer.from([
                            36,
                            74,
                            34,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            27,
                            10,
                            25,
                            85,
                            115,
                            101,
                            114,
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
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            42,
                            29,
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
        setContactEmail: {
            name: "SetContactEmail",
            requestType: exports.SetContactEmailRequest,
            requestStream: false,
            responseType: exports.SetContactEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            33,
                            74,
                            31,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            24,
                            10,
                            22,
                            69,
                            109,
                            97,
                            105,
                            108,
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
                            115,
                            101,
                            116,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            44,
                            58,
                            5,
                            101,
                            109,
                            97,
                            105,
                            108,
                            26,
                            35,
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
                            115,
                            47,
                            123,
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
        verifyContactEmail: {
            name: "VerifyContactEmail",
            requestType: exports.VerifyContactEmailRequest,
            requestStream: false,
            responseType: exports.VerifyContactEmailResponse,
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
                            69,
                            109,
                            97,
                            105,
                            108,
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
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            64,
                            58,
                            17,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            95,
                            99,
                            111,
                            100,
                            101,
                            34,
                            43,
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
                            115,
                            47,
                            123,
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
                            95,
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
        resendContactEmailCode: {
            name: "ResendContactEmailCode",
            requestType: exports.ResendContactEmailCodeRequest,
            requestStream: false,
            responseType: exports.ResendContactEmailCodeResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            45,
                            74,
                            43,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            36,
                            10,
                            34,
                            67,
                            111,
                            100,
                            101,
                            32,
                            114,
                            101,
                            115,
                            101,
                            110,
                            100,
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
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            48,
                            58,
                            1,
                            42,
                            34,
                            43,
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
                            115,
                            47,
                            123,
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
                            95,
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
        setContactPhone: {
            name: "SetContactPhone",
            requestType: exports.SetContactPhoneRequest,
            requestStream: false,
            responseType: exports.SetContactPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            41,
                            74,
                            39,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            32,
                            10,
                            30,
                            67,
                            111,
                            110,
                            116,
                            97,
                            99,
                            116,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
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
                            115,
                            101,
                            116,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            44,
                            58,
                            5,
                            112,
                            104,
                            111,
                            110,
                            101,
                            26,
                            35,
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
                            115,
                            47,
                            123,
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
        verifyContactPhone: {
            name: "VerifyContactPhone",
            requestType: exports.VerifyContactPhoneRequest,
            requestStream: false,
            responseType: exports.VerifyContactPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            46,
                            74,
                            44,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            37,
                            10,
                            35,
                            67,
                            111,
                            110,
                            116,
                            97,
                            99,
                            116,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
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
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            64,
                            58,
                            17,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            95,
                            99,
                            111,
                            100,
                            101,
                            34,
                            43,
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
                            115,
                            47,
                            123,
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
                            95,
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
        resendContactPhoneCode: {
            name: "ResendContactPhoneCode",
            requestType: exports.ResendContactPhoneCodeRequest,
            requestStream: false,
            responseType: exports.ResendContactPhoneCodeResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            45,
                            74,
                            43,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            36,
                            10,
                            34,
                            67,
                            111,
                            100,
                            101,
                            32,
                            114,
                            101,
                            115,
                            101,
                            110,
                            100,
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
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            48,
                            58,
                            1,
                            42,
                            34,
                            43,
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
                            115,
                            47,
                            123,
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
                            95,
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
        addUsername: {
            name: "AddUsername",
            requestType: exports.AddUsernameRequest,
            requestStream: false,
            responseType: exports.AddUsernameResponse,
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
                            85,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
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
                            97,
                            100,
                            100,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            50,
                            58,
                            8,
                            117,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                            34,
                            38,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            117,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                        ]),
                    ],
                },
            },
        },
        removeUsername: {
            name: "RemoveUsername",
            requestType: exports.RemoveUsernameRequest,
            requestStream: false,
            responseType: exports.RemoveUsernameResponse,
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
                            85,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
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
                            109,
                            111,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            54,
                            42,
                            52,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            117,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                            95,
                            105,
                            100,
                            125,
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
                    8338: [
                        Buffer.from([
                            36,
                            74,
                            34,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            27,
                            10,
                            25,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
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
                            115,
                            101,
                            116,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            54,
                            58,
                            12,
                            110,
                            101,
                            119,
                            95,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            34,
                            38,
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
                            115,
                            47,
                            123,
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
        requestPasswordReset: {
            name: "RequestPasswordReset",
            requestType: exports.RequestPasswordResetRequest,
            requestStream: false,
            responseType: exports.RequestPasswordResetResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            48,
                            74,
                            46,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            39,
                            10,
                            37,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            114,
                            101,
                            115,
                            101,
                            116,
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
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                        ]),
                    ],
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
                            115,
                            47,
                            123,
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
                            47,
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
        startWebAuthNRegistration: {
            name: "StartWebAuthNRegistration",
            requestType: exports.StartWebAuthNRegistrationRequest,
            requestStream: false,
            responseType: exports.StartWebAuthNRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            53,
                            74,
                            51,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            44,
                            10,
                            42,
                            87,
                            101,
                            98,
                            65,
                            117,
                            116,
                            104,
                            78,
                            32,
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
                            115,
                            116,
                            97,
                            114,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            54,
                            58,
                            12,
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
                            34,
                            38,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            119,
                            101,
                            98,
                            97,
                            117,
                            116,
                            104,
                            110,
                        ]),
                    ],
                },
            },
        },
        verifyWebAuthNRegistration: {
            name: "VerifyWebAuthNRegistration",
            requestType: exports.VerifyWebAuthNRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyWebAuthNRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            54,
                            74,
                            52,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            45,
                            10,
                            43,
                            87,
                            101,
                            98,
                            65,
                            117,
                            116,
                            104,
                            78,
                            32,
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
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            72,
                            58,
                            6,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                            34,
                            62,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            119,
                            101,
                            98,
                            97,
                            117,
                            116,
                            104,
                            110,
                            47,
                            123,
                            119,
                            101,
                            98,
                            95,
                            97,
                            117,
                            116,
                            104,
                            95,
                            110,
                            95,
                            105,
                            100,
                            125,
                            47,
                            95,
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
        createWebAuthNRegistrationLink: {
            name: "CreateWebAuthNRegistrationLink",
            requestType: exports.CreateWebAuthNRegistrationLinkRequest,
            requestStream: false,
            responseType: exports.CreateWebAuthNRegistrationLinkResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            53,
                            74,
                            51,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            44,
                            10,
                            42,
                            87,
                            101,
                            98,
                            65,
                            117,
                            116,
                            104,
                            78,
                            32,
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
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            61,
                            58,
                            1,
                            42,
                            34,
                            56,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            119,
                            101,
                            98,
                            97,
                            117,
                            116,
                            104,
                            110,
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
        removeWebAuthNAuthenticator: {
            name: "RemoveWebAuthNAuthenticator",
            requestType: exports.RemoveWebAuthNAuthenticatorRequest,
            requestStream: false,
            responseType: exports.RemoveWebAuthNAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            54,
                            74,
                            52,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            45,
                            10,
                            43,
                            87,
                            101,
                            98,
                            65,
                            117,
                            116,
                            104,
                            78,
                            32,
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
                            111,
                            114,
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
                            109,
                            111,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            56,
                            42,
                            54,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            119,
                            101,
                            98,
                            97,
                            117,
                            116,
                            104,
                            110,
                            47,
                            123,
                            119,
                            101,
                            98,
                            95,
                            97,
                            117,
                            116,
                            104,
                            95,
                            110,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        startTOTPRegistration: {
            name: "StartTOTPRegistration",
            requestType: exports.StartTOTPRegistrationRequest,
            requestStream: false,
            responseType: exports.StartTOTPRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            49,
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
                            84,
                            79,
                            84,
                            80,
                            32,
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
                            115,
                            116,
                            97,
                            114,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            36,
                            34,
                            34,
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
                            115,
                            47,
                            123,
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
                    8338: [
                        Buffer.from([
                            50,
                            74,
                            48,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            41,
                            10,
                            39,
                            84,
                            79,
                            84,
                            80,
                            32,
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
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            60,
                            58,
                            4,
                            99,
                            111,
                            100,
                            101,
                            34,
                            52,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            116,
                            111,
                            116,
                            112,
                            47,
                            123,
                            116,
                            111,
                            116,
                            112,
                            95,
                            105,
                            100,
                            125,
                            47,
                            95,
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
        removeTOTPAuthenticator: {
            name: "RemoveTOTPAuthenticator",
            requestType: exports.RemoveTOTPAuthenticatorRequest,
            requestStream: false,
            responseType: exports.RemoveTOTPAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            50,
                            74,
                            48,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            41,
                            10,
                            39,
                            84,
                            79,
                            84,
                            80,
                            32,
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
                            111,
                            114,
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
                            109,
                            111,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            46,
                            42,
                            44,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            116,
                            111,
                            116,
                            112,
                            47,
                            123,
                            116,
                            111,
                            116,
                            112,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        addOTPSMSAuthenticator: {
            name: "AddOTPSMSAuthenticator",
            requestType: exports.AddOTPSMSAuthenticatorRequest,
            requestStream: false,
            responseType: exports.AddOTPSMSAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            51,
                            74,
                            49,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            42,
                            10,
                            40,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
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
                            111,
                            114,
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
                            97,
                            100,
                            100,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            46,
                            58,
                            5,
                            112,
                            104,
                            111,
                            110,
                            101,
                            34,
                            37,
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
                            115,
                            47,
                            123,
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
        verifyOTPSMSRegistration: {
            name: "VerifyOTPSMSRegistration",
            requestType: exports.VerifyOTPSMSRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyOTPSMSRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            54,
                            74,
                            52,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            45,
                            10,
                            43,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
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
                            111,
                            114,
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
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            66,
                            58,
                            4,
                            99,
                            111,
                            100,
                            101,
                            34,
                            58,
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
                            115,
                            47,
                            123,
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
                            47,
                            123,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                            95,
                            105,
                            100,
                            125,
                            47,
                            95,
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
        removeOTPSMSAuthenticator: {
            name: "RemoveOTPSMSAuthenticator",
            requestType: exports.RemoveOTPSMSAuthenticatorRequest,
            requestStream: false,
            responseType: exports.RemoveOTPSMSAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            53,
                            74,
                            51,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            44,
                            10,
                            42,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
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
                            111,
                            114,
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
                            109,
                            111,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            52,
                            42,
                            50,
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
                            115,
                            47,
                            123,
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
                            47,
                            123,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        addOTPEmailAuthenticator: {
            name: "AddOTPEmailAuthenticator",
            requestType: exports.AddOTPEmailAuthenticatorRequest,
            requestStream: false,
            responseType: exports.AddOTPEmailAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            53,
                            74,
                            51,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            44,
                            10,
                            42,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
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
                            111,
                            114,
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
                            97,
                            100,
                            100,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            48,
                            58,
                            5,
                            101,
                            109,
                            97,
                            105,
                            108,
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
                            115,
                            47,
                            123,
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
        verifyOTPEmailRegistration: {
            name: "VerifyOTPEmailRegistration",
            requestType: exports.VerifyOTPEmailRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyOTPEmailRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            56,
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
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
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
                            111,
                            114,
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
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            70,
                            58,
                            4,
                            99,
                            111,
                            100,
                            101,
                            34,
                            62,
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
                            115,
                            47,
                            123,
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
                            47,
                            123,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                            95,
                            105,
                            100,
                            125,
                            47,
                            95,
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
        removeOTPEmailAuthenticator: {
            name: "RemoveOTPEmailAuthenticator",
            requestType: exports.RemoveOTPEmailAuthenticatorRequest,
            requestStream: false,
            responseType: exports.RemoveOTPEmailAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            55,
                            74,
                            53,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            46,
                            10,
                            44,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
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
                            111,
                            114,
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
                            109,
                            111,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            56,
                            42,
                            54,
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
                            115,
                            47,
                            123,
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
                            47,
                            123,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                            95,
                            105,
                            100,
                            125,
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
                            73,
                            68,
                            80,
                            32,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
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
                            115,
                            116,
                            97,
                            114,
                            116,
                            101,
                            100,
                        ]),
                    ],
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
        getIdentityProviderIntent: {
            name: "GetIdentityProviderIntent",
            requestType: exports.GetIdentityProviderIntentRequest,
            requestStream: false,
            responseType: exports.GetIdentityProviderIntentResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            44,
                            74,
                            42,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            35,
                            10,
                            33,
                            73,
                            68,
                            80,
                            32,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
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
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            48,
                            18,
                            46,
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
        addIDPAuthenticator: {
            name: "AddIDPAuthenticator",
            requestType: exports.AddIDPAuthenticatorRequest,
            requestStream: false,
            responseType: exports.AddIDPAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            47,
                            74,
                            45,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            38,
                            10,
                            36,
                            73,
                            68,
                            80,
                            32,
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
                            111,
                            114,
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
                            97,
                            100,
                            100,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            51,
                            58,
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
                            111,
                            114,
                            34,
                            34,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            105,
                            100,
                            112,
                            115,
                        ]),
                    ],
                },
            },
        },
        removeIDPAuthenticator: {
            name: "RemoveIDPAuthenticator",
            requestType: exports.RemoveIDPAuthenticatorRequest,
            requestStream: false,
            responseType: exports.RemoveIDPAuthenticatorResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            49,
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
                            73,
                            68,
                            80,
                            32,
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
                            111,
                            114,
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
                            109,
                            111,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            45,
                            42,
                            43,
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
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                            47,
                            105,
                            100,
                            112,
                            115,
                            47,
                            123,
                            105,
                            100,
                            112,
                            95,
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