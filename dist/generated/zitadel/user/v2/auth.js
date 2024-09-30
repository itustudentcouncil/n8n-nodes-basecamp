"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasskeyRegistrationCode = exports.ReturnPasskeyRegistrationCode = exports.SendPasskeyRegistrationLink = exports.passkeyAuthenticatorToJSON = exports.passkeyAuthenticatorFromJSON = exports.PasskeyAuthenticator = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.user.v2";
var PasskeyAuthenticator;
(function (PasskeyAuthenticator) {
    PasskeyAuthenticator[PasskeyAuthenticator["PASSKEY_AUTHENTICATOR_UNSPECIFIED"] = 0] = "PASSKEY_AUTHENTICATOR_UNSPECIFIED";
    PasskeyAuthenticator[PasskeyAuthenticator["PASSKEY_AUTHENTICATOR_PLATFORM"] = 1] = "PASSKEY_AUTHENTICATOR_PLATFORM";
    PasskeyAuthenticator[PasskeyAuthenticator["PASSKEY_AUTHENTICATOR_CROSS_PLATFORM"] = 2] = "PASSKEY_AUTHENTICATOR_CROSS_PLATFORM";
    PasskeyAuthenticator[PasskeyAuthenticator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PasskeyAuthenticator = exports.PasskeyAuthenticator || (exports.PasskeyAuthenticator = {}));
function passkeyAuthenticatorFromJSON(object) {
    switch (object) {
        case 0:
        case "PASSKEY_AUTHENTICATOR_UNSPECIFIED":
            return PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_UNSPECIFIED;
        case 1:
        case "PASSKEY_AUTHENTICATOR_PLATFORM":
            return PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_PLATFORM;
        case 2:
        case "PASSKEY_AUTHENTICATOR_CROSS_PLATFORM":
            return PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_CROSS_PLATFORM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PasskeyAuthenticator.UNRECOGNIZED;
    }
}
exports.passkeyAuthenticatorFromJSON = passkeyAuthenticatorFromJSON;
function passkeyAuthenticatorToJSON(object) {
    switch (object) {
        case PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_UNSPECIFIED:
            return "PASSKEY_AUTHENTICATOR_UNSPECIFIED";
        case PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_PLATFORM:
            return "PASSKEY_AUTHENTICATOR_PLATFORM";
        case PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_CROSS_PLATFORM:
            return "PASSKEY_AUTHENTICATOR_CROSS_PLATFORM";
        case PasskeyAuthenticator.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.passkeyAuthenticatorToJSON = passkeyAuthenticatorToJSON;
function createBaseSendPasskeyRegistrationLink() {
    return { urlTemplate: undefined };
}
exports.SendPasskeyRegistrationLink = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPasskeyRegistrationLink();
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
        return exports.SendPasskeyRegistrationLink.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendPasskeyRegistrationLink();
        message.urlTemplate = (_a = object.urlTemplate) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseReturnPasskeyRegistrationCode() {
    return {};
}
exports.ReturnPasskeyRegistrationCode = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnPasskeyRegistrationCode();
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
        return exports.ReturnPasskeyRegistrationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseReturnPasskeyRegistrationCode();
        return message;
    },
};
function createBasePasskeyRegistrationCode() {
    return { id: "", code: "" };
}
exports.PasskeyRegistrationCode = {
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
        const message = createBasePasskeyRegistrationCode();
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
        return exports.PasskeyRegistrationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePasskeyRegistrationCode();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=auth.js.map