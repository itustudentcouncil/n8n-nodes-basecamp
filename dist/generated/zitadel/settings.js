"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityPolicy = exports.OIDCSettings = exports.DebugNotificationProvider = exports.HTTPConfig = exports.TwilioConfig = exports.SMSProvider = exports.EmailProviderHTTP = exports.EmailProviderSMTP = exports.EmailProvider = exports.SMTPConfig = exports.SecretGeneratorTypeQuery = exports.SecretGeneratorQuery = exports.SecretGenerator = exports.sMSProviderConfigStateToJSON = exports.sMSProviderConfigStateFromJSON = exports.SMSProviderConfigState = exports.emailProviderStateToJSON = exports.emailProviderStateFromJSON = exports.EmailProviderState = exports.secretGeneratorTypeToJSON = exports.secretGeneratorTypeFromJSON = exports.SecretGeneratorType = exports.sMTPConfigStateToJSON = exports.sMTPConfigStateFromJSON = exports.SMTPConfigState = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const duration_js_1 = require("../google/protobuf/duration.js");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.settings.v1";
var SMTPConfigState;
(function (SMTPConfigState) {
    SMTPConfigState[SMTPConfigState["SMTP_CONFIG_STATE_UNSPECIFIED"] = 0] = "SMTP_CONFIG_STATE_UNSPECIFIED";
    SMTPConfigState[SMTPConfigState["SMTP_CONFIG_ACTIVE"] = 1] = "SMTP_CONFIG_ACTIVE";
    SMTPConfigState[SMTPConfigState["SMTP_CONFIG_INACTIVE"] = 2] = "SMTP_CONFIG_INACTIVE";
    SMTPConfigState[SMTPConfigState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SMTPConfigState = exports.SMTPConfigState || (exports.SMTPConfigState = {}));
function sMTPConfigStateFromJSON(object) {
    switch (object) {
        case 0:
        case "SMTP_CONFIG_STATE_UNSPECIFIED":
            return SMTPConfigState.SMTP_CONFIG_STATE_UNSPECIFIED;
        case 1:
        case "SMTP_CONFIG_ACTIVE":
            return SMTPConfigState.SMTP_CONFIG_ACTIVE;
        case 2:
        case "SMTP_CONFIG_INACTIVE":
            return SMTPConfigState.SMTP_CONFIG_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SMTPConfigState.UNRECOGNIZED;
    }
}
exports.sMTPConfigStateFromJSON = sMTPConfigStateFromJSON;
function sMTPConfigStateToJSON(object) {
    switch (object) {
        case SMTPConfigState.SMTP_CONFIG_STATE_UNSPECIFIED:
            return "SMTP_CONFIG_STATE_UNSPECIFIED";
        case SMTPConfigState.SMTP_CONFIG_ACTIVE:
            return "SMTP_CONFIG_ACTIVE";
        case SMTPConfigState.SMTP_CONFIG_INACTIVE:
            return "SMTP_CONFIG_INACTIVE";
        case SMTPConfigState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sMTPConfigStateToJSON = sMTPConfigStateToJSON;
var SecretGeneratorType;
(function (SecretGeneratorType) {
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_UNSPECIFIED"] = 0] = "SECRET_GENERATOR_TYPE_UNSPECIFIED";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_INIT_CODE"] = 1] = "SECRET_GENERATOR_TYPE_INIT_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE"] = 2] = "SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE"] = 3] = "SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE"] = 4] = "SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE"] = 5] = "SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_APP_SECRET"] = 6] = "SECRET_GENERATOR_TYPE_APP_SECRET";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_OTP_SMS"] = 7] = "SECRET_GENERATOR_TYPE_OTP_SMS";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_OTP_EMAIL"] = 8] = "SECRET_GENERATOR_TYPE_OTP_EMAIL";
    SecretGeneratorType[SecretGeneratorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecretGeneratorType = exports.SecretGeneratorType || (exports.SecretGeneratorType = {}));
function secretGeneratorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SECRET_GENERATOR_TYPE_UNSPECIFIED":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_UNSPECIFIED;
        case 1:
        case "SECRET_GENERATOR_TYPE_INIT_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_INIT_CODE;
        case 2:
        case "SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE;
        case 3:
        case "SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE;
        case 4:
        case "SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE;
        case 5:
        case "SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE;
        case 6:
        case "SECRET_GENERATOR_TYPE_APP_SECRET":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_APP_SECRET;
        case 7:
        case "SECRET_GENERATOR_TYPE_OTP_SMS":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_SMS;
        case 8:
        case "SECRET_GENERATOR_TYPE_OTP_EMAIL":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_EMAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecretGeneratorType.UNRECOGNIZED;
    }
}
exports.secretGeneratorTypeFromJSON = secretGeneratorTypeFromJSON;
function secretGeneratorTypeToJSON(object) {
    switch (object) {
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_UNSPECIFIED:
            return "SECRET_GENERATOR_TYPE_UNSPECIFIED";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_INIT_CODE:
            return "SECRET_GENERATOR_TYPE_INIT_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE:
            return "SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE:
            return "SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE:
            return "SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE:
            return "SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_APP_SECRET:
            return "SECRET_GENERATOR_TYPE_APP_SECRET";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_SMS:
            return "SECRET_GENERATOR_TYPE_OTP_SMS";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_EMAIL:
            return "SECRET_GENERATOR_TYPE_OTP_EMAIL";
        case SecretGeneratorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.secretGeneratorTypeToJSON = secretGeneratorTypeToJSON;
var EmailProviderState;
(function (EmailProviderState) {
    EmailProviderState[EmailProviderState["EMAIL_PROVIDER_STATE_UNSPECIFIED"] = 0] = "EMAIL_PROVIDER_STATE_UNSPECIFIED";
    EmailProviderState[EmailProviderState["EMAIL_PROVIDER_ACTIVE"] = 1] = "EMAIL_PROVIDER_ACTIVE";
    EmailProviderState[EmailProviderState["EMAIL_PROVIDER_INACTIVE"] = 2] = "EMAIL_PROVIDER_INACTIVE";
    EmailProviderState[EmailProviderState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EmailProviderState = exports.EmailProviderState || (exports.EmailProviderState = {}));
function emailProviderStateFromJSON(object) {
    switch (object) {
        case 0:
        case "EMAIL_PROVIDER_STATE_UNSPECIFIED":
            return EmailProviderState.EMAIL_PROVIDER_STATE_UNSPECIFIED;
        case 1:
        case "EMAIL_PROVIDER_ACTIVE":
            return EmailProviderState.EMAIL_PROVIDER_ACTIVE;
        case 2:
        case "EMAIL_PROVIDER_INACTIVE":
            return EmailProviderState.EMAIL_PROVIDER_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EmailProviderState.UNRECOGNIZED;
    }
}
exports.emailProviderStateFromJSON = emailProviderStateFromJSON;
function emailProviderStateToJSON(object) {
    switch (object) {
        case EmailProviderState.EMAIL_PROVIDER_STATE_UNSPECIFIED:
            return "EMAIL_PROVIDER_STATE_UNSPECIFIED";
        case EmailProviderState.EMAIL_PROVIDER_ACTIVE:
            return "EMAIL_PROVIDER_ACTIVE";
        case EmailProviderState.EMAIL_PROVIDER_INACTIVE:
            return "EMAIL_PROVIDER_INACTIVE";
        case EmailProviderState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.emailProviderStateToJSON = emailProviderStateToJSON;
var SMSProviderConfigState;
(function (SMSProviderConfigState) {
    SMSProviderConfigState[SMSProviderConfigState["SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED"] = 0] = "SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED";
    SMSProviderConfigState[SMSProviderConfigState["SMS_PROVIDER_CONFIG_ACTIVE"] = 1] = "SMS_PROVIDER_CONFIG_ACTIVE";
    SMSProviderConfigState[SMSProviderConfigState["SMS_PROVIDER_CONFIG_INACTIVE"] = 2] = "SMS_PROVIDER_CONFIG_INACTIVE";
    SMSProviderConfigState[SMSProviderConfigState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SMSProviderConfigState = exports.SMSProviderConfigState || (exports.SMSProviderConfigState = {}));
function sMSProviderConfigStateFromJSON(object) {
    switch (object) {
        case 0:
        case "SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED":
            return SMSProviderConfigState.SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED;
        case 1:
        case "SMS_PROVIDER_CONFIG_ACTIVE":
            return SMSProviderConfigState.SMS_PROVIDER_CONFIG_ACTIVE;
        case 2:
        case "SMS_PROVIDER_CONFIG_INACTIVE":
            return SMSProviderConfigState.SMS_PROVIDER_CONFIG_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SMSProviderConfigState.UNRECOGNIZED;
    }
}
exports.sMSProviderConfigStateFromJSON = sMSProviderConfigStateFromJSON;
function sMSProviderConfigStateToJSON(object) {
    switch (object) {
        case SMSProviderConfigState.SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED:
            return "SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED";
        case SMSProviderConfigState.SMS_PROVIDER_CONFIG_ACTIVE:
            return "SMS_PROVIDER_CONFIG_ACTIVE";
        case SMSProviderConfigState.SMS_PROVIDER_CONFIG_INACTIVE:
            return "SMS_PROVIDER_CONFIG_INACTIVE";
        case SMSProviderConfigState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sMSProviderConfigStateToJSON = sMSProviderConfigStateToJSON;
function createBaseSecretGenerator() {
    return {
        generatorType: 0,
        details: undefined,
        length: 0,
        expiry: undefined,
        includeLowerLetters: false,
        includeUpperLetters: false,
        includeDigits: false,
        includeSymbols: false,
    };
}
exports.SecretGenerator = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.generatorType !== 0) {
            writer.uint32(8).int32(message.generatorType);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.length !== 0) {
            writer.uint32(24).uint32(message.length);
        }
        if (message.expiry !== undefined) {
            duration_js_1.Duration.encode(message.expiry, writer.uint32(34).fork()).join();
        }
        if (message.includeLowerLetters !== false) {
            writer.uint32(40).bool(message.includeLowerLetters);
        }
        if (message.includeUpperLetters !== false) {
            writer.uint32(48).bool(message.includeUpperLetters);
        }
        if (message.includeDigits !== false) {
            writer.uint32(56).bool(message.includeDigits);
        }
        if (message.includeSymbols !== false) {
            writer.uint32(64).bool(message.includeSymbols);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecretGenerator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.generatorType = reader.int32();
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
                    message.length = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expiry = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.includeLowerLetters = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.includeUpperLetters = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.includeDigits = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.includeSymbols = reader.bool();
                    continue;
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
            generatorType: isSet(object.generatorType) ? secretGeneratorTypeFromJSON(object.generatorType) : 0,
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            length: isSet(object.length) ? globalThis.Number(object.length) : 0,
            expiry: isSet(object.expiry) ? duration_js_1.Duration.fromJSON(object.expiry) : undefined,
            includeLowerLetters: isSet(object.includeLowerLetters) ? globalThis.Boolean(object.includeLowerLetters) : false,
            includeUpperLetters: isSet(object.includeUpperLetters) ? globalThis.Boolean(object.includeUpperLetters) : false,
            includeDigits: isSet(object.includeDigits) ? globalThis.Boolean(object.includeDigits) : false,
            includeSymbols: isSet(object.includeSymbols) ? globalThis.Boolean(object.includeSymbols) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.generatorType !== 0) {
            obj.generatorType = secretGeneratorTypeToJSON(message.generatorType);
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.length !== 0) {
            obj.length = Math.round(message.length);
        }
        if (message.expiry !== undefined) {
            obj.expiry = duration_js_1.Duration.toJSON(message.expiry);
        }
        if (message.includeLowerLetters !== false) {
            obj.includeLowerLetters = message.includeLowerLetters;
        }
        if (message.includeUpperLetters !== false) {
            obj.includeUpperLetters = message.includeUpperLetters;
        }
        if (message.includeDigits !== false) {
            obj.includeDigits = message.includeDigits;
        }
        if (message.includeSymbols !== false) {
            obj.includeSymbols = message.includeSymbols;
        }
        return obj;
    },
    create(base) {
        return exports.SecretGenerator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSecretGenerator();
        message.generatorType = (_a = object.generatorType) !== null && _a !== void 0 ? _a : 0;
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.length = (_b = object.length) !== null && _b !== void 0 ? _b : 0;
        message.expiry = (object.expiry !== undefined && object.expiry !== null)
            ? duration_js_1.Duration.fromPartial(object.expiry)
            : undefined;
        message.includeLowerLetters = (_c = object.includeLowerLetters) !== null && _c !== void 0 ? _c : false;
        message.includeUpperLetters = (_d = object.includeUpperLetters) !== null && _d !== void 0 ? _d : false;
        message.includeDigits = (_e = object.includeDigits) !== null && _e !== void 0 ? _e : false;
        message.includeSymbols = (_f = object.includeSymbols) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
function createBaseSecretGeneratorQuery() {
    return { typeQuery: undefined };
}
exports.SecretGeneratorQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.typeQuery !== undefined) {
            exports.SecretGeneratorTypeQuery.encode(message.typeQuery, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecretGeneratorQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.typeQuery = exports.SecretGeneratorTypeQuery.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { typeQuery: isSet(object.typeQuery) ? exports.SecretGeneratorTypeQuery.fromJSON(object.typeQuery) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.typeQuery !== undefined) {
            obj.typeQuery = exports.SecretGeneratorTypeQuery.toJSON(message.typeQuery);
        }
        return obj;
    },
    create(base) {
        return exports.SecretGeneratorQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSecretGeneratorQuery();
        message.typeQuery = (object.typeQuery !== undefined && object.typeQuery !== null)
            ? exports.SecretGeneratorTypeQuery.fromPartial(object.typeQuery)
            : undefined;
        return message;
    },
};
function createBaseSecretGeneratorTypeQuery() {
    return { generatorType: 0 };
}
exports.SecretGeneratorTypeQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.generatorType !== 0) {
            writer.uint32(8).int32(message.generatorType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecretGeneratorTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.generatorType = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { generatorType: isSet(object.generatorType) ? secretGeneratorTypeFromJSON(object.generatorType) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.generatorType !== 0) {
            obj.generatorType = secretGeneratorTypeToJSON(message.generatorType);
        }
        return obj;
    },
    create(base) {
        return exports.SecretGeneratorTypeQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSecretGeneratorTypeQuery();
        message.generatorType = (_a = object.generatorType) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseSMTPConfig() {
    return {
        details: undefined,
        senderAddress: "",
        senderName: "",
        tls: false,
        host: "",
        user: "",
        replyToAddress: "",
        state: 0,
        description: "",
        id: "",
    };
}
exports.SMTPConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.senderAddress !== "") {
            writer.uint32(18).string(message.senderAddress);
        }
        if (message.senderName !== "") {
            writer.uint32(26).string(message.senderName);
        }
        if (message.tls !== false) {
            writer.uint32(32).bool(message.tls);
        }
        if (message.host !== "") {
            writer.uint32(42).string(message.host);
        }
        if (message.user !== "") {
            writer.uint32(50).string(message.user);
        }
        if (message.replyToAddress !== "") {
            writer.uint32(58).string(message.replyToAddress);
        }
        if (message.state !== 0) {
            writer.uint32(64).int32(message.state);
        }
        if (message.description !== "") {
            writer.uint32(74).string(message.description);
        }
        if (message.id !== "") {
            writer.uint32(82).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSMTPConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.senderAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.senderName = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.tls = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.user = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.replyToAddress = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            senderAddress: isSet(object.senderAddress) ? globalThis.String(object.senderAddress) : "",
            senderName: isSet(object.senderName) ? globalThis.String(object.senderName) : "",
            tls: isSet(object.tls) ? globalThis.Boolean(object.tls) : false,
            host: isSet(object.host) ? globalThis.String(object.host) : "",
            user: isSet(object.user) ? globalThis.String(object.user) : "",
            replyToAddress: isSet(object.replyToAddress) ? globalThis.String(object.replyToAddress) : "",
            state: isSet(object.state) ? sMTPConfigStateFromJSON(object.state) : 0,
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.senderAddress !== "") {
            obj.senderAddress = message.senderAddress;
        }
        if (message.senderName !== "") {
            obj.senderName = message.senderName;
        }
        if (message.tls !== false) {
            obj.tls = message.tls;
        }
        if (message.host !== "") {
            obj.host = message.host;
        }
        if (message.user !== "") {
            obj.user = message.user;
        }
        if (message.replyToAddress !== "") {
            obj.replyToAddress = message.replyToAddress;
        }
        if (message.state !== 0) {
            obj.state = sMTPConfigStateToJSON(message.state);
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.SMTPConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseSMTPConfig();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.senderAddress = (_a = object.senderAddress) !== null && _a !== void 0 ? _a : "";
        message.senderName = (_b = object.senderName) !== null && _b !== void 0 ? _b : "";
        message.tls = (_c = object.tls) !== null && _c !== void 0 ? _c : false;
        message.host = (_d = object.host) !== null && _d !== void 0 ? _d : "";
        message.user = (_e = object.user) !== null && _e !== void 0 ? _e : "";
        message.replyToAddress = (_f = object.replyToAddress) !== null && _f !== void 0 ? _f : "";
        message.state = (_g = object.state) !== null && _g !== void 0 ? _g : 0;
        message.description = (_h = object.description) !== null && _h !== void 0 ? _h : "";
        message.id = (_j = object.id) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseEmailProvider() {
    return { details: undefined, id: "", state: 0, description: "", smtp: undefined, http: undefined };
}
exports.EmailProvider = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.smtp !== undefined) {
            exports.EmailProviderSMTP.encode(message.smtp, writer.uint32(34).fork()).join();
        }
        if (message.http !== undefined) {
            exports.EmailProviderHTTP.encode(message.http, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.smtp = exports.EmailProviderSMTP.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.http = exports.EmailProviderHTTP.decode(reader, reader.uint32());
                    continue;
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            state: isSet(object.state) ? emailProviderStateFromJSON(object.state) : 0,
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            smtp: isSet(object.smtp) ? exports.EmailProviderSMTP.fromJSON(object.smtp) : undefined,
            http: isSet(object.http) ? exports.EmailProviderHTTP.fromJSON(object.http) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.state !== 0) {
            obj.state = emailProviderStateToJSON(message.state);
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.smtp !== undefined) {
            obj.smtp = exports.EmailProviderSMTP.toJSON(message.smtp);
        }
        if (message.http !== undefined) {
            obj.http = exports.EmailProviderHTTP.toJSON(message.http);
        }
        return obj;
    },
    create(base) {
        return exports.EmailProvider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEmailProvider();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.smtp = (object.smtp !== undefined && object.smtp !== null)
            ? exports.EmailProviderSMTP.fromPartial(object.smtp)
            : undefined;
        message.http = (object.http !== undefined && object.http !== null)
            ? exports.EmailProviderHTTP.fromPartial(object.http)
            : undefined;
        return message;
    },
};
function createBaseEmailProviderSMTP() {
    return { senderAddress: "", senderName: "", tls: false, host: "", user: "", replyToAddress: "" };
}
exports.EmailProviderSMTP = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        if (message.senderName !== "") {
            writer.uint32(18).string(message.senderName);
        }
        if (message.tls !== false) {
            writer.uint32(24).bool(message.tls);
        }
        if (message.host !== "") {
            writer.uint32(34).string(message.host);
        }
        if (message.user !== "") {
            writer.uint32(42).string(message.user);
        }
        if (message.replyToAddress !== "") {
            writer.uint32(50).string(message.replyToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailProviderSMTP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.senderAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.senderName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.tls = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.user = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.replyToAddress = reader.string();
                    continue;
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
            senderAddress: isSet(object.senderAddress) ? globalThis.String(object.senderAddress) : "",
            senderName: isSet(object.senderName) ? globalThis.String(object.senderName) : "",
            tls: isSet(object.tls) ? globalThis.Boolean(object.tls) : false,
            host: isSet(object.host) ? globalThis.String(object.host) : "",
            user: isSet(object.user) ? globalThis.String(object.user) : "",
            replyToAddress: isSet(object.replyToAddress) ? globalThis.String(object.replyToAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.senderAddress !== "") {
            obj.senderAddress = message.senderAddress;
        }
        if (message.senderName !== "") {
            obj.senderName = message.senderName;
        }
        if (message.tls !== false) {
            obj.tls = message.tls;
        }
        if (message.host !== "") {
            obj.host = message.host;
        }
        if (message.user !== "") {
            obj.user = message.user;
        }
        if (message.replyToAddress !== "") {
            obj.replyToAddress = message.replyToAddress;
        }
        return obj;
    },
    create(base) {
        return exports.EmailProviderSMTP.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseEmailProviderSMTP();
        message.senderAddress = (_a = object.senderAddress) !== null && _a !== void 0 ? _a : "";
        message.senderName = (_b = object.senderName) !== null && _b !== void 0 ? _b : "";
        message.tls = (_c = object.tls) !== null && _c !== void 0 ? _c : false;
        message.host = (_d = object.host) !== null && _d !== void 0 ? _d : "";
        message.user = (_e = object.user) !== null && _e !== void 0 ? _e : "";
        message.replyToAddress = (_f = object.replyToAddress) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseEmailProviderHTTP() {
    return { endpoint: "" };
}
exports.EmailProviderHTTP = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailProviderHTTP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.endpoint = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.endpoint !== "") {
            obj.endpoint = message.endpoint;
        }
        return obj;
    },
    create(base) {
        return exports.EmailProviderHTTP.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEmailProviderHTTP();
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSMSProvider() {
    return { details: undefined, id: "", state: 0, description: "", twilio: undefined, http: undefined };
}
exports.SMSProvider = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.twilio !== undefined) {
            exports.TwilioConfig.encode(message.twilio, writer.uint32(34).fork()).join();
        }
        if (message.http !== undefined) {
            exports.HTTPConfig.encode(message.http, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSMSProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.twilio = exports.TwilioConfig.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.http = exports.HTTPConfig.decode(reader, reader.uint32());
                    continue;
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            state: isSet(object.state) ? sMSProviderConfigStateFromJSON(object.state) : 0,
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            twilio: isSet(object.twilio) ? exports.TwilioConfig.fromJSON(object.twilio) : undefined,
            http: isSet(object.http) ? exports.HTTPConfig.fromJSON(object.http) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.state !== 0) {
            obj.state = sMSProviderConfigStateToJSON(message.state);
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.twilio !== undefined) {
            obj.twilio = exports.TwilioConfig.toJSON(message.twilio);
        }
        if (message.http !== undefined) {
            obj.http = exports.HTTPConfig.toJSON(message.http);
        }
        return obj;
    },
    create(base) {
        return exports.SMSProvider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSMSProvider();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.twilio = (object.twilio !== undefined && object.twilio !== null)
            ? exports.TwilioConfig.fromPartial(object.twilio)
            : undefined;
        message.http = (object.http !== undefined && object.http !== null)
            ? exports.HTTPConfig.fromPartial(object.http)
            : undefined;
        return message;
    },
};
function createBaseTwilioConfig() {
    return { sid: "", senderNumber: "", verifyServiceSid: "" };
}
exports.TwilioConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.sid !== "") {
            writer.uint32(10).string(message.sid);
        }
        if (message.senderNumber !== "") {
            writer.uint32(18).string(message.senderNumber);
        }
        if (message.verifyServiceSid !== "") {
            writer.uint32(26).string(message.verifyServiceSid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwilioConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sid = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.senderNumber = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.verifyServiceSid = reader.string();
                    continue;
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
            sid: isSet(object.sid) ? globalThis.String(object.sid) : "",
            senderNumber: isSet(object.senderNumber) ? globalThis.String(object.senderNumber) : "",
            verifyServiceSid: isSet(object.verifyServiceSid) ? globalThis.String(object.verifyServiceSid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sid !== "") {
            obj.sid = message.sid;
        }
        if (message.senderNumber !== "") {
            obj.senderNumber = message.senderNumber;
        }
        if (message.verifyServiceSid !== "") {
            obj.verifyServiceSid = message.verifyServiceSid;
        }
        return obj;
    },
    create(base) {
        return exports.TwilioConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTwilioConfig();
        message.sid = (_a = object.sid) !== null && _a !== void 0 ? _a : "";
        message.senderNumber = (_b = object.senderNumber) !== null && _b !== void 0 ? _b : "";
        message.verifyServiceSid = (_c = object.verifyServiceSid) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseHTTPConfig() {
    return { endpoint: "" };
}
exports.HTTPConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHTTPConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.endpoint = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.endpoint !== "") {
            obj.endpoint = message.endpoint;
        }
        return obj;
    },
    create(base) {
        return exports.HTTPConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHTTPConfig();
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDebugNotificationProvider() {
    return { details: undefined, compact: false };
}
exports.DebugNotificationProvider = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.compact !== false) {
            writer.uint32(16).bool(message.compact);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDebugNotificationProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.compact = reader.bool();
                    continue;
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            compact: isSet(object.compact) ? globalThis.Boolean(object.compact) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.compact !== false) {
            obj.compact = message.compact;
        }
        return obj;
    },
    create(base) {
        return exports.DebugNotificationProvider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDebugNotificationProvider();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.compact = (_a = object.compact) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseOIDCSettings() {
    return {
        details: undefined,
        accessTokenLifetime: undefined,
        idTokenLifetime: undefined,
        refreshTokenIdleExpiration: undefined,
        refreshTokenExpiration: undefined,
    };
}
exports.OIDCSettings = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.accessTokenLifetime !== undefined) {
            duration_js_1.Duration.encode(message.accessTokenLifetime, writer.uint32(18).fork()).join();
        }
        if (message.idTokenLifetime !== undefined) {
            duration_js_1.Duration.encode(message.idTokenLifetime, writer.uint32(26).fork()).join();
        }
        if (message.refreshTokenIdleExpiration !== undefined) {
            duration_js_1.Duration.encode(message.refreshTokenIdleExpiration, writer.uint32(34).fork()).join();
        }
        if (message.refreshTokenExpiration !== undefined) {
            duration_js_1.Duration.encode(message.refreshTokenExpiration, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOIDCSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accessTokenLifetime = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idTokenLifetime = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.refreshTokenIdleExpiration = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.refreshTokenExpiration = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            accessTokenLifetime: isSet(object.accessTokenLifetime)
                ? duration_js_1.Duration.fromJSON(object.accessTokenLifetime)
                : undefined,
            idTokenLifetime: isSet(object.idTokenLifetime) ? duration_js_1.Duration.fromJSON(object.idTokenLifetime) : undefined,
            refreshTokenIdleExpiration: isSet(object.refreshTokenIdleExpiration)
                ? duration_js_1.Duration.fromJSON(object.refreshTokenIdleExpiration)
                : undefined,
            refreshTokenExpiration: isSet(object.refreshTokenExpiration)
                ? duration_js_1.Duration.fromJSON(object.refreshTokenExpiration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.accessTokenLifetime !== undefined) {
            obj.accessTokenLifetime = duration_js_1.Duration.toJSON(message.accessTokenLifetime);
        }
        if (message.idTokenLifetime !== undefined) {
            obj.idTokenLifetime = duration_js_1.Duration.toJSON(message.idTokenLifetime);
        }
        if (message.refreshTokenIdleExpiration !== undefined) {
            obj.refreshTokenIdleExpiration = duration_js_1.Duration.toJSON(message.refreshTokenIdleExpiration);
        }
        if (message.refreshTokenExpiration !== undefined) {
            obj.refreshTokenExpiration = duration_js_1.Duration.toJSON(message.refreshTokenExpiration);
        }
        return obj;
    },
    create(base) {
        return exports.OIDCSettings.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseOIDCSettings();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.accessTokenLifetime = (object.accessTokenLifetime !== undefined && object.accessTokenLifetime !== null)
            ? duration_js_1.Duration.fromPartial(object.accessTokenLifetime)
            : undefined;
        message.idTokenLifetime = (object.idTokenLifetime !== undefined && object.idTokenLifetime !== null)
            ? duration_js_1.Duration.fromPartial(object.idTokenLifetime)
            : undefined;
        message.refreshTokenIdleExpiration =
            (object.refreshTokenIdleExpiration !== undefined && object.refreshTokenIdleExpiration !== null)
                ? duration_js_1.Duration.fromPartial(object.refreshTokenIdleExpiration)
                : undefined;
        message.refreshTokenExpiration =
            (object.refreshTokenExpiration !== undefined && object.refreshTokenExpiration !== null)
                ? duration_js_1.Duration.fromPartial(object.refreshTokenExpiration)
                : undefined;
        return message;
    },
};
function createBaseSecurityPolicy() {
    return { details: undefined, enableIframeEmbedding: false, allowedOrigins: [], enableImpersonation: false };
}
exports.SecurityPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.enableIframeEmbedding !== false) {
            writer.uint32(16).bool(message.enableIframeEmbedding);
        }
        for (const v of message.allowedOrigins) {
            writer.uint32(26).string(v);
        }
        if (message.enableImpersonation !== false) {
            writer.uint32(32).bool(message.enableImpersonation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.enableIframeEmbedding = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.allowedOrigins.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.enableImpersonation = reader.bool();
                    continue;
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            enableIframeEmbedding: isSet(object.enableIframeEmbedding)
                ? globalThis.Boolean(object.enableIframeEmbedding)
                : false,
            allowedOrigins: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.allowedOrigins)
                ? object.allowedOrigins.map((e) => globalThis.String(e))
                : [],
            enableImpersonation: isSet(object.enableImpersonation) ? globalThis.Boolean(object.enableImpersonation) : false,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.enableIframeEmbedding !== false) {
            obj.enableIframeEmbedding = message.enableIframeEmbedding;
        }
        if ((_a = message.allowedOrigins) === null || _a === void 0 ? void 0 : _a.length) {
            obj.allowedOrigins = message.allowedOrigins;
        }
        if (message.enableImpersonation !== false) {
            obj.enableImpersonation = message.enableImpersonation;
        }
        return obj;
    },
    create(base) {
        return exports.SecurityPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSecurityPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.enableIframeEmbedding = (_a = object.enableIframeEmbedding) !== null && _a !== void 0 ? _a : false;
        message.allowedOrigins = ((_b = object.allowedOrigins) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.enableImpersonation = (_c = object.enableImpersonation) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=settings.js.map