"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPolicy = exports.PrivacyPolicy = exports.LockoutPolicy = exports.PasswordAgePolicy = exports.PasswordComplexityPolicy = exports.LoginPolicy = exports.LabelPolicy = exports.DomainPolicy = exports.OrgIAMPolicy = exports.passwordlessTypeToJSON = exports.passwordlessTypeFromJSON = exports.PasswordlessType = exports.multiFactorTypeToJSON = exports.multiFactorTypeFromJSON = exports.MultiFactorType = exports.secondFactorTypeToJSON = exports.secondFactorTypeFromJSON = exports.SecondFactorType = exports.themeModeToJSON = exports.themeModeFromJSON = exports.ThemeMode = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const duration_js_1 = require("../google/protobuf/duration.js");
const idp_js_1 = require("./idp.js");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.policy.v1";
var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["THEME_MODE_UNSPECIFIED"] = 0] = "THEME_MODE_UNSPECIFIED";
    ThemeMode[ThemeMode["THEME_MODE_AUTO"] = 1] = "THEME_MODE_AUTO";
    ThemeMode[ThemeMode["THEME_MODE_DARK"] = 2] = "THEME_MODE_DARK";
    ThemeMode[ThemeMode["THEME_MODE_LIGHT"] = 3] = "THEME_MODE_LIGHT";
    ThemeMode[ThemeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ThemeMode = exports.ThemeMode || (exports.ThemeMode = {}));
function themeModeFromJSON(object) {
    switch (object) {
        case 0:
        case "THEME_MODE_UNSPECIFIED":
            return ThemeMode.THEME_MODE_UNSPECIFIED;
        case 1:
        case "THEME_MODE_AUTO":
            return ThemeMode.THEME_MODE_AUTO;
        case 2:
        case "THEME_MODE_DARK":
            return ThemeMode.THEME_MODE_DARK;
        case 3:
        case "THEME_MODE_LIGHT":
            return ThemeMode.THEME_MODE_LIGHT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ThemeMode.UNRECOGNIZED;
    }
}
exports.themeModeFromJSON = themeModeFromJSON;
function themeModeToJSON(object) {
    switch (object) {
        case ThemeMode.THEME_MODE_UNSPECIFIED:
            return "THEME_MODE_UNSPECIFIED";
        case ThemeMode.THEME_MODE_AUTO:
            return "THEME_MODE_AUTO";
        case ThemeMode.THEME_MODE_DARK:
            return "THEME_MODE_DARK";
        case ThemeMode.THEME_MODE_LIGHT:
            return "THEME_MODE_LIGHT";
        case ThemeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.themeModeToJSON = themeModeToJSON;
var SecondFactorType;
(function (SecondFactorType) {
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_UNSPECIFIED"] = 0] = "SECOND_FACTOR_TYPE_UNSPECIFIED";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP"] = 1] = "SECOND_FACTOR_TYPE_OTP";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_U2F"] = 2] = "SECOND_FACTOR_TYPE_U2F";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP_EMAIL"] = 3] = "SECOND_FACTOR_TYPE_OTP_EMAIL";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP_SMS"] = 4] = "SECOND_FACTOR_TYPE_OTP_SMS";
    SecondFactorType[SecondFactorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecondFactorType = exports.SecondFactorType || (exports.SecondFactorType = {}));
function secondFactorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SECOND_FACTOR_TYPE_UNSPECIFIED":
            return SecondFactorType.SECOND_FACTOR_TYPE_UNSPECIFIED;
        case 1:
        case "SECOND_FACTOR_TYPE_OTP":
            return SecondFactorType.SECOND_FACTOR_TYPE_OTP;
        case 2:
        case "SECOND_FACTOR_TYPE_U2F":
            return SecondFactorType.SECOND_FACTOR_TYPE_U2F;
        case 3:
        case "SECOND_FACTOR_TYPE_OTP_EMAIL":
            return SecondFactorType.SECOND_FACTOR_TYPE_OTP_EMAIL;
        case 4:
        case "SECOND_FACTOR_TYPE_OTP_SMS":
            return SecondFactorType.SECOND_FACTOR_TYPE_OTP_SMS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecondFactorType.UNRECOGNIZED;
    }
}
exports.secondFactorTypeFromJSON = secondFactorTypeFromJSON;
function secondFactorTypeToJSON(object) {
    switch (object) {
        case SecondFactorType.SECOND_FACTOR_TYPE_UNSPECIFIED:
            return "SECOND_FACTOR_TYPE_UNSPECIFIED";
        case SecondFactorType.SECOND_FACTOR_TYPE_OTP:
            return "SECOND_FACTOR_TYPE_OTP";
        case SecondFactorType.SECOND_FACTOR_TYPE_U2F:
            return "SECOND_FACTOR_TYPE_U2F";
        case SecondFactorType.SECOND_FACTOR_TYPE_OTP_EMAIL:
            return "SECOND_FACTOR_TYPE_OTP_EMAIL";
        case SecondFactorType.SECOND_FACTOR_TYPE_OTP_SMS:
            return "SECOND_FACTOR_TYPE_OTP_SMS";
        case SecondFactorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.secondFactorTypeToJSON = secondFactorTypeToJSON;
var MultiFactorType;
(function (MultiFactorType) {
    MultiFactorType[MultiFactorType["MULTI_FACTOR_TYPE_UNSPECIFIED"] = 0] = "MULTI_FACTOR_TYPE_UNSPECIFIED";
    MultiFactorType[MultiFactorType["MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION"] = 1] = "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION";
    MultiFactorType[MultiFactorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MultiFactorType = exports.MultiFactorType || (exports.MultiFactorType = {}));
function multiFactorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "MULTI_FACTOR_TYPE_UNSPECIFIED":
            return MultiFactorType.MULTI_FACTOR_TYPE_UNSPECIFIED;
        case 1:
        case "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION":
            return MultiFactorType.MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MultiFactorType.UNRECOGNIZED;
    }
}
exports.multiFactorTypeFromJSON = multiFactorTypeFromJSON;
function multiFactorTypeToJSON(object) {
    switch (object) {
        case MultiFactorType.MULTI_FACTOR_TYPE_UNSPECIFIED:
            return "MULTI_FACTOR_TYPE_UNSPECIFIED";
        case MultiFactorType.MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION:
            return "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION";
        case MultiFactorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.multiFactorTypeToJSON = multiFactorTypeToJSON;
var PasswordlessType;
(function (PasswordlessType) {
    PasswordlessType[PasswordlessType["PASSWORDLESS_TYPE_NOT_ALLOWED"] = 0] = "PASSWORDLESS_TYPE_NOT_ALLOWED";
    PasswordlessType[PasswordlessType["PASSWORDLESS_TYPE_ALLOWED"] = 1] = "PASSWORDLESS_TYPE_ALLOWED";
    PasswordlessType[PasswordlessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PasswordlessType = exports.PasswordlessType || (exports.PasswordlessType = {}));
function passwordlessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PASSWORDLESS_TYPE_NOT_ALLOWED":
            return PasswordlessType.PASSWORDLESS_TYPE_NOT_ALLOWED;
        case 1:
        case "PASSWORDLESS_TYPE_ALLOWED":
            return PasswordlessType.PASSWORDLESS_TYPE_ALLOWED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PasswordlessType.UNRECOGNIZED;
    }
}
exports.passwordlessTypeFromJSON = passwordlessTypeFromJSON;
function passwordlessTypeToJSON(object) {
    switch (object) {
        case PasswordlessType.PASSWORDLESS_TYPE_NOT_ALLOWED:
            return "PASSWORDLESS_TYPE_NOT_ALLOWED";
        case PasswordlessType.PASSWORDLESS_TYPE_ALLOWED:
            return "PASSWORDLESS_TYPE_ALLOWED";
        case PasswordlessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.passwordlessTypeToJSON = passwordlessTypeToJSON;
function createBaseOrgIAMPolicy() {
    return { details: undefined, userLoginMustBeDomain: false, isDefault: false };
}
exports.OrgIAMPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.userLoginMustBeDomain !== false) {
            writer.uint32(16).bool(message.userLoginMustBeDomain);
        }
        if (message.isDefault !== false) {
            writer.uint32(24).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgIAMPolicy();
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
                    message.userLoginMustBeDomain = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
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
            userLoginMustBeDomain: isSet(object.userLoginMustBeDomain)
                ? globalThis.Boolean(object.userLoginMustBeDomain)
                : false,
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.userLoginMustBeDomain !== false) {
            obj.userLoginMustBeDomain = message.userLoginMustBeDomain;
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        return obj;
    },
    create(base) {
        return exports.OrgIAMPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrgIAMPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.userLoginMustBeDomain = (_a = object.userLoginMustBeDomain) !== null && _a !== void 0 ? _a : false;
        message.isDefault = (_b = object.isDefault) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseDomainPolicy() {
    return {
        details: undefined,
        userLoginMustBeDomain: false,
        isDefault: false,
        validateOrgDomains: false,
        smtpSenderAddressMatchesInstanceDomain: false,
    };
}
exports.DomainPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.userLoginMustBeDomain !== false) {
            writer.uint32(16).bool(message.userLoginMustBeDomain);
        }
        if (message.isDefault !== false) {
            writer.uint32(24).bool(message.isDefault);
        }
        if (message.validateOrgDomains !== false) {
            writer.uint32(32).bool(message.validateOrgDomains);
        }
        if (message.smtpSenderAddressMatchesInstanceDomain !== false) {
            writer.uint32(40).bool(message.smtpSenderAddressMatchesInstanceDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainPolicy();
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
                    message.userLoginMustBeDomain = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.validateOrgDomains = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.smtpSenderAddressMatchesInstanceDomain = reader.bool();
                    continue;
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
            userLoginMustBeDomain: isSet(object.userLoginMustBeDomain)
                ? globalThis.Boolean(object.userLoginMustBeDomain)
                : false,
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
            validateOrgDomains: isSet(object.validateOrgDomains) ? globalThis.Boolean(object.validateOrgDomains) : false,
            smtpSenderAddressMatchesInstanceDomain: isSet(object.smtpSenderAddressMatchesInstanceDomain)
                ? globalThis.Boolean(object.smtpSenderAddressMatchesInstanceDomain)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.userLoginMustBeDomain !== false) {
            obj.userLoginMustBeDomain = message.userLoginMustBeDomain;
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        if (message.validateOrgDomains !== false) {
            obj.validateOrgDomains = message.validateOrgDomains;
        }
        if (message.smtpSenderAddressMatchesInstanceDomain !== false) {
            obj.smtpSenderAddressMatchesInstanceDomain = message.smtpSenderAddressMatchesInstanceDomain;
        }
        return obj;
    },
    create(base) {
        return exports.DomainPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDomainPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.userLoginMustBeDomain = (_a = object.userLoginMustBeDomain) !== null && _a !== void 0 ? _a : false;
        message.isDefault = (_b = object.isDefault) !== null && _b !== void 0 ? _b : false;
        message.validateOrgDomains = (_c = object.validateOrgDomains) !== null && _c !== void 0 ? _c : false;
        message.smtpSenderAddressMatchesInstanceDomain = (_d = object.smtpSenderAddressMatchesInstanceDomain) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseLabelPolicy() {
    return {
        details: undefined,
        primaryColor: "",
        isDefault: false,
        hideLoginNameSuffix: false,
        warnColor: "",
        backgroundColor: "",
        fontColor: "",
        primaryColorDark: "",
        backgroundColorDark: "",
        warnColorDark: "",
        fontColorDark: "",
        disableWatermark: false,
        logoUrl: "",
        iconUrl: "",
        logoUrlDark: "",
        iconUrlDark: "",
        fontUrl: "",
        themeMode: 0,
    };
}
exports.LabelPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.primaryColor !== "") {
            writer.uint32(18).string(message.primaryColor);
        }
        if (message.isDefault !== false) {
            writer.uint32(32).bool(message.isDefault);
        }
        if (message.hideLoginNameSuffix !== false) {
            writer.uint32(40).bool(message.hideLoginNameSuffix);
        }
        if (message.warnColor !== "") {
            writer.uint32(50).string(message.warnColor);
        }
        if (message.backgroundColor !== "") {
            writer.uint32(58).string(message.backgroundColor);
        }
        if (message.fontColor !== "") {
            writer.uint32(66).string(message.fontColor);
        }
        if (message.primaryColorDark !== "") {
            writer.uint32(74).string(message.primaryColorDark);
        }
        if (message.backgroundColorDark !== "") {
            writer.uint32(82).string(message.backgroundColorDark);
        }
        if (message.warnColorDark !== "") {
            writer.uint32(90).string(message.warnColorDark);
        }
        if (message.fontColorDark !== "") {
            writer.uint32(98).string(message.fontColorDark);
        }
        if (message.disableWatermark !== false) {
            writer.uint32(104).bool(message.disableWatermark);
        }
        if (message.logoUrl !== "") {
            writer.uint32(114).string(message.logoUrl);
        }
        if (message.iconUrl !== "") {
            writer.uint32(122).string(message.iconUrl);
        }
        if (message.logoUrlDark !== "") {
            writer.uint32(130).string(message.logoUrlDark);
        }
        if (message.iconUrlDark !== "") {
            writer.uint32(138).string(message.iconUrlDark);
        }
        if (message.fontUrl !== "") {
            writer.uint32(146).string(message.fontUrl);
        }
        if (message.themeMode !== 0) {
            writer.uint32(152).int32(message.themeMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLabelPolicy();
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
                    message.primaryColor = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.hideLoginNameSuffix = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.warnColor = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.backgroundColor = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.fontColor = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.primaryColorDark = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.backgroundColorDark = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.warnColorDark = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.fontColorDark = reader.string();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.disableWatermark = reader.bool();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.logoUrl = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.iconUrl = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.logoUrlDark = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.iconUrlDark = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.fontUrl = reader.string();
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.themeMode = reader.int32();
                    continue;
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
            primaryColor: isSet(object.primaryColor) ? globalThis.String(object.primaryColor) : "",
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
            hideLoginNameSuffix: isSet(object.hideLoginNameSuffix) ? globalThis.Boolean(object.hideLoginNameSuffix) : false,
            warnColor: isSet(object.warnColor) ? globalThis.String(object.warnColor) : "",
            backgroundColor: isSet(object.backgroundColor) ? globalThis.String(object.backgroundColor) : "",
            fontColor: isSet(object.fontColor) ? globalThis.String(object.fontColor) : "",
            primaryColorDark: isSet(object.primaryColorDark) ? globalThis.String(object.primaryColorDark) : "",
            backgroundColorDark: isSet(object.backgroundColorDark) ? globalThis.String(object.backgroundColorDark) : "",
            warnColorDark: isSet(object.warnColorDark) ? globalThis.String(object.warnColorDark) : "",
            fontColorDark: isSet(object.fontColorDark) ? globalThis.String(object.fontColorDark) : "",
            disableWatermark: isSet(object.disableWatermark) ? globalThis.Boolean(object.disableWatermark) : false,
            logoUrl: isSet(object.logoUrl) ? globalThis.String(object.logoUrl) : "",
            iconUrl: isSet(object.iconUrl) ? globalThis.String(object.iconUrl) : "",
            logoUrlDark: isSet(object.logoUrlDark) ? globalThis.String(object.logoUrlDark) : "",
            iconUrlDark: isSet(object.iconUrlDark) ? globalThis.String(object.iconUrlDark) : "",
            fontUrl: isSet(object.fontUrl) ? globalThis.String(object.fontUrl) : "",
            themeMode: isSet(object.themeMode) ? themeModeFromJSON(object.themeMode) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.primaryColor !== "") {
            obj.primaryColor = message.primaryColor;
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        if (message.hideLoginNameSuffix !== false) {
            obj.hideLoginNameSuffix = message.hideLoginNameSuffix;
        }
        if (message.warnColor !== "") {
            obj.warnColor = message.warnColor;
        }
        if (message.backgroundColor !== "") {
            obj.backgroundColor = message.backgroundColor;
        }
        if (message.fontColor !== "") {
            obj.fontColor = message.fontColor;
        }
        if (message.primaryColorDark !== "") {
            obj.primaryColorDark = message.primaryColorDark;
        }
        if (message.backgroundColorDark !== "") {
            obj.backgroundColorDark = message.backgroundColorDark;
        }
        if (message.warnColorDark !== "") {
            obj.warnColorDark = message.warnColorDark;
        }
        if (message.fontColorDark !== "") {
            obj.fontColorDark = message.fontColorDark;
        }
        if (message.disableWatermark !== false) {
            obj.disableWatermark = message.disableWatermark;
        }
        if (message.logoUrl !== "") {
            obj.logoUrl = message.logoUrl;
        }
        if (message.iconUrl !== "") {
            obj.iconUrl = message.iconUrl;
        }
        if (message.logoUrlDark !== "") {
            obj.logoUrlDark = message.logoUrlDark;
        }
        if (message.iconUrlDark !== "") {
            obj.iconUrlDark = message.iconUrlDark;
        }
        if (message.fontUrl !== "") {
            obj.fontUrl = message.fontUrl;
        }
        if (message.themeMode !== 0) {
            obj.themeMode = themeModeToJSON(message.themeMode);
        }
        return obj;
    },
    create(base) {
        return exports.LabelPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseLabelPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.primaryColor = (_a = object.primaryColor) !== null && _a !== void 0 ? _a : "";
        message.isDefault = (_b = object.isDefault) !== null && _b !== void 0 ? _b : false;
        message.hideLoginNameSuffix = (_c = object.hideLoginNameSuffix) !== null && _c !== void 0 ? _c : false;
        message.warnColor = (_d = object.warnColor) !== null && _d !== void 0 ? _d : "";
        message.backgroundColor = (_e = object.backgroundColor) !== null && _e !== void 0 ? _e : "";
        message.fontColor = (_f = object.fontColor) !== null && _f !== void 0 ? _f : "";
        message.primaryColorDark = (_g = object.primaryColorDark) !== null && _g !== void 0 ? _g : "";
        message.backgroundColorDark = (_h = object.backgroundColorDark) !== null && _h !== void 0 ? _h : "";
        message.warnColorDark = (_j = object.warnColorDark) !== null && _j !== void 0 ? _j : "";
        message.fontColorDark = (_k = object.fontColorDark) !== null && _k !== void 0 ? _k : "";
        message.disableWatermark = (_l = object.disableWatermark) !== null && _l !== void 0 ? _l : false;
        message.logoUrl = (_m = object.logoUrl) !== null && _m !== void 0 ? _m : "";
        message.iconUrl = (_o = object.iconUrl) !== null && _o !== void 0 ? _o : "";
        message.logoUrlDark = (_p = object.logoUrlDark) !== null && _p !== void 0 ? _p : "";
        message.iconUrlDark = (_q = object.iconUrlDark) !== null && _q !== void 0 ? _q : "";
        message.fontUrl = (_r = object.fontUrl) !== null && _r !== void 0 ? _r : "";
        message.themeMode = (_s = object.themeMode) !== null && _s !== void 0 ? _s : 0;
        return message;
    },
};
function createBaseLoginPolicy() {
    return {
        details: undefined,
        allowUsernamePassword: false,
        allowRegister: false,
        allowExternalIdp: false,
        forceMfa: false,
        passwordlessType: 0,
        isDefault: false,
        hidePasswordReset: false,
        ignoreUnknownUsernames: false,
        defaultRedirectUri: "",
        passwordCheckLifetime: undefined,
        externalLoginCheckLifetime: undefined,
        mfaInitSkipLifetime: undefined,
        secondFactorCheckLifetime: undefined,
        multiFactorCheckLifetime: undefined,
        secondFactors: [],
        multiFactors: [],
        idps: [],
        allowDomainDiscovery: false,
        disableLoginWithEmail: false,
        disableLoginWithPhone: false,
        forceMfaLocalOnly: false,
    };
}
exports.LoginPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.allowUsernamePassword !== false) {
            writer.uint32(16).bool(message.allowUsernamePassword);
        }
        if (message.allowRegister !== false) {
            writer.uint32(24).bool(message.allowRegister);
        }
        if (message.allowExternalIdp !== false) {
            writer.uint32(32).bool(message.allowExternalIdp);
        }
        if (message.forceMfa !== false) {
            writer.uint32(40).bool(message.forceMfa);
        }
        if (message.passwordlessType !== 0) {
            writer.uint32(48).int32(message.passwordlessType);
        }
        if (message.isDefault !== false) {
            writer.uint32(56).bool(message.isDefault);
        }
        if (message.hidePasswordReset !== false) {
            writer.uint32(64).bool(message.hidePasswordReset);
        }
        if (message.ignoreUnknownUsernames !== false) {
            writer.uint32(72).bool(message.ignoreUnknownUsernames);
        }
        if (message.defaultRedirectUri !== "") {
            writer.uint32(82).string(message.defaultRedirectUri);
        }
        if (message.passwordCheckLifetime !== undefined) {
            duration_js_1.Duration.encode(message.passwordCheckLifetime, writer.uint32(90).fork()).join();
        }
        if (message.externalLoginCheckLifetime !== undefined) {
            duration_js_1.Duration.encode(message.externalLoginCheckLifetime, writer.uint32(98).fork()).join();
        }
        if (message.mfaInitSkipLifetime !== undefined) {
            duration_js_1.Duration.encode(message.mfaInitSkipLifetime, writer.uint32(106).fork()).join();
        }
        if (message.secondFactorCheckLifetime !== undefined) {
            duration_js_1.Duration.encode(message.secondFactorCheckLifetime, writer.uint32(114).fork()).join();
        }
        if (message.multiFactorCheckLifetime !== undefined) {
            duration_js_1.Duration.encode(message.multiFactorCheckLifetime, writer.uint32(122).fork()).join();
        }
        writer.uint32(130).fork();
        for (const v of message.secondFactors) {
            writer.int32(v);
        }
        writer.join();
        writer.uint32(138).fork();
        for (const v of message.multiFactors) {
            writer.int32(v);
        }
        writer.join();
        for (const v of message.idps) {
            idp_js_1.IDPLoginPolicyLink.encode(v, writer.uint32(146).fork()).join();
        }
        if (message.allowDomainDiscovery !== false) {
            writer.uint32(152).bool(message.allowDomainDiscovery);
        }
        if (message.disableLoginWithEmail !== false) {
            writer.uint32(160).bool(message.disableLoginWithEmail);
        }
        if (message.disableLoginWithPhone !== false) {
            writer.uint32(168).bool(message.disableLoginWithPhone);
        }
        if (message.forceMfaLocalOnly !== false) {
            writer.uint32(176).bool(message.forceMfaLocalOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginPolicy();
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
                    message.allowUsernamePassword = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.allowRegister = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.allowExternalIdp = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.forceMfa = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.passwordlessType = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.hidePasswordReset = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.ignoreUnknownUsernames = reader.bool();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.defaultRedirectUri = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.passwordCheckLifetime = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.externalLoginCheckLifetime = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.mfaInitSkipLifetime = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.secondFactorCheckLifetime = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.multiFactorCheckLifetime = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag === 128) {
                        message.secondFactors.push(reader.int32());
                        continue;
                    }
                    if (tag === 130) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.secondFactors.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 17:
                    if (tag === 136) {
                        message.multiFactors.push(reader.int32());
                        continue;
                    }
                    if (tag === 138) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.multiFactors.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.idps.push(idp_js_1.IDPLoginPolicyLink.decode(reader, reader.uint32()));
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.allowDomainDiscovery = reader.bool();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.disableLoginWithEmail = reader.bool();
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }
                    message.disableLoginWithPhone = reader.bool();
                    continue;
                case 22:
                    if (tag !== 176) {
                        break;
                    }
                    message.forceMfaLocalOnly = reader.bool();
                    continue;
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
            allowUsernamePassword: isSet(object.allowUsernamePassword)
                ? globalThis.Boolean(object.allowUsernamePassword)
                : false,
            allowRegister: isSet(object.allowRegister) ? globalThis.Boolean(object.allowRegister) : false,
            allowExternalIdp: isSet(object.allowExternalIdp) ? globalThis.Boolean(object.allowExternalIdp) : false,
            forceMfa: isSet(object.forceMfa) ? globalThis.Boolean(object.forceMfa) : false,
            passwordlessType: isSet(object.passwordlessType) ? passwordlessTypeFromJSON(object.passwordlessType) : 0,
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
            hidePasswordReset: isSet(object.hidePasswordReset) ? globalThis.Boolean(object.hidePasswordReset) : false,
            ignoreUnknownUsernames: isSet(object.ignoreUnknownUsernames)
                ? globalThis.Boolean(object.ignoreUnknownUsernames)
                : false,
            defaultRedirectUri: isSet(object.defaultRedirectUri) ? globalThis.String(object.defaultRedirectUri) : "",
            passwordCheckLifetime: isSet(object.passwordCheckLifetime)
                ? duration_js_1.Duration.fromJSON(object.passwordCheckLifetime)
                : undefined,
            externalLoginCheckLifetime: isSet(object.externalLoginCheckLifetime)
                ? duration_js_1.Duration.fromJSON(object.externalLoginCheckLifetime)
                : undefined,
            mfaInitSkipLifetime: isSet(object.mfaInitSkipLifetime)
                ? duration_js_1.Duration.fromJSON(object.mfaInitSkipLifetime)
                : undefined,
            secondFactorCheckLifetime: isSet(object.secondFactorCheckLifetime)
                ? duration_js_1.Duration.fromJSON(object.secondFactorCheckLifetime)
                : undefined,
            multiFactorCheckLifetime: isSet(object.multiFactorCheckLifetime)
                ? duration_js_1.Duration.fromJSON(object.multiFactorCheckLifetime)
                : undefined,
            secondFactors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.secondFactors)
                ? object.secondFactors.map((e) => secondFactorTypeFromJSON(e))
                : [],
            multiFactors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.multiFactors)
                ? object.multiFactors.map((e) => multiFactorTypeFromJSON(e))
                : [],
            idps: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.idps) ? object.idps.map((e) => idp_js_1.IDPLoginPolicyLink.fromJSON(e)) : [],
            allowDomainDiscovery: isSet(object.allowDomainDiscovery)
                ? globalThis.Boolean(object.allowDomainDiscovery)
                : false,
            disableLoginWithEmail: isSet(object.disableLoginWithEmail)
                ? globalThis.Boolean(object.disableLoginWithEmail)
                : false,
            disableLoginWithPhone: isSet(object.disableLoginWithPhone)
                ? globalThis.Boolean(object.disableLoginWithPhone)
                : false,
            forceMfaLocalOnly: isSet(object.forceMfaLocalOnly) ? globalThis.Boolean(object.forceMfaLocalOnly) : false,
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.allowUsernamePassword !== false) {
            obj.allowUsernamePassword = message.allowUsernamePassword;
        }
        if (message.allowRegister !== false) {
            obj.allowRegister = message.allowRegister;
        }
        if (message.allowExternalIdp !== false) {
            obj.allowExternalIdp = message.allowExternalIdp;
        }
        if (message.forceMfa !== false) {
            obj.forceMfa = message.forceMfa;
        }
        if (message.passwordlessType !== 0) {
            obj.passwordlessType = passwordlessTypeToJSON(message.passwordlessType);
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        if (message.hidePasswordReset !== false) {
            obj.hidePasswordReset = message.hidePasswordReset;
        }
        if (message.ignoreUnknownUsernames !== false) {
            obj.ignoreUnknownUsernames = message.ignoreUnknownUsernames;
        }
        if (message.defaultRedirectUri !== "") {
            obj.defaultRedirectUri = message.defaultRedirectUri;
        }
        if (message.passwordCheckLifetime !== undefined) {
            obj.passwordCheckLifetime = duration_js_1.Duration.toJSON(message.passwordCheckLifetime);
        }
        if (message.externalLoginCheckLifetime !== undefined) {
            obj.externalLoginCheckLifetime = duration_js_1.Duration.toJSON(message.externalLoginCheckLifetime);
        }
        if (message.mfaInitSkipLifetime !== undefined) {
            obj.mfaInitSkipLifetime = duration_js_1.Duration.toJSON(message.mfaInitSkipLifetime);
        }
        if (message.secondFactorCheckLifetime !== undefined) {
            obj.secondFactorCheckLifetime = duration_js_1.Duration.toJSON(message.secondFactorCheckLifetime);
        }
        if (message.multiFactorCheckLifetime !== undefined) {
            obj.multiFactorCheckLifetime = duration_js_1.Duration.toJSON(message.multiFactorCheckLifetime);
        }
        if ((_a = message.secondFactors) === null || _a === void 0 ? void 0 : _a.length) {
            obj.secondFactors = message.secondFactors.map((e) => secondFactorTypeToJSON(e));
        }
        if ((_b = message.multiFactors) === null || _b === void 0 ? void 0 : _b.length) {
            obj.multiFactors = message.multiFactors.map((e) => multiFactorTypeToJSON(e));
        }
        if ((_c = message.idps) === null || _c === void 0 ? void 0 : _c.length) {
            obj.idps = message.idps.map((e) => idp_js_1.IDPLoginPolicyLink.toJSON(e));
        }
        if (message.allowDomainDiscovery !== false) {
            obj.allowDomainDiscovery = message.allowDomainDiscovery;
        }
        if (message.disableLoginWithEmail !== false) {
            obj.disableLoginWithEmail = message.disableLoginWithEmail;
        }
        if (message.disableLoginWithPhone !== false) {
            obj.disableLoginWithPhone = message.disableLoginWithPhone;
        }
        if (message.forceMfaLocalOnly !== false) {
            obj.forceMfaLocalOnly = message.forceMfaLocalOnly;
        }
        return obj;
    },
    create(base) {
        return exports.LoginPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseLoginPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.allowUsernamePassword = (_a = object.allowUsernamePassword) !== null && _a !== void 0 ? _a : false;
        message.allowRegister = (_b = object.allowRegister) !== null && _b !== void 0 ? _b : false;
        message.allowExternalIdp = (_c = object.allowExternalIdp) !== null && _c !== void 0 ? _c : false;
        message.forceMfa = (_d = object.forceMfa) !== null && _d !== void 0 ? _d : false;
        message.passwordlessType = (_e = object.passwordlessType) !== null && _e !== void 0 ? _e : 0;
        message.isDefault = (_f = object.isDefault) !== null && _f !== void 0 ? _f : false;
        message.hidePasswordReset = (_g = object.hidePasswordReset) !== null && _g !== void 0 ? _g : false;
        message.ignoreUnknownUsernames = (_h = object.ignoreUnknownUsernames) !== null && _h !== void 0 ? _h : false;
        message.defaultRedirectUri = (_j = object.defaultRedirectUri) !== null && _j !== void 0 ? _j : "";
        message.passwordCheckLifetime =
            (object.passwordCheckLifetime !== undefined && object.passwordCheckLifetime !== null)
                ? duration_js_1.Duration.fromPartial(object.passwordCheckLifetime)
                : undefined;
        message.externalLoginCheckLifetime =
            (object.externalLoginCheckLifetime !== undefined && object.externalLoginCheckLifetime !== null)
                ? duration_js_1.Duration.fromPartial(object.externalLoginCheckLifetime)
                : undefined;
        message.mfaInitSkipLifetime = (object.mfaInitSkipLifetime !== undefined && object.mfaInitSkipLifetime !== null)
            ? duration_js_1.Duration.fromPartial(object.mfaInitSkipLifetime)
            : undefined;
        message.secondFactorCheckLifetime =
            (object.secondFactorCheckLifetime !== undefined && object.secondFactorCheckLifetime !== null)
                ? duration_js_1.Duration.fromPartial(object.secondFactorCheckLifetime)
                : undefined;
        message.multiFactorCheckLifetime =
            (object.multiFactorCheckLifetime !== undefined && object.multiFactorCheckLifetime !== null)
                ? duration_js_1.Duration.fromPartial(object.multiFactorCheckLifetime)
                : undefined;
        message.secondFactors = ((_k = object.secondFactors) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.multiFactors = ((_l = object.multiFactors) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        message.idps = ((_m = object.idps) === null || _m === void 0 ? void 0 : _m.map((e) => idp_js_1.IDPLoginPolicyLink.fromPartial(e))) || [];
        message.allowDomainDiscovery = (_o = object.allowDomainDiscovery) !== null && _o !== void 0 ? _o : false;
        message.disableLoginWithEmail = (_p = object.disableLoginWithEmail) !== null && _p !== void 0 ? _p : false;
        message.disableLoginWithPhone = (_q = object.disableLoginWithPhone) !== null && _q !== void 0 ? _q : false;
        message.forceMfaLocalOnly = (_r = object.forceMfaLocalOnly) !== null && _r !== void 0 ? _r : false;
        return message;
    },
};
function createBasePasswordComplexityPolicy() {
    return {
        details: undefined,
        minLength: long_1.default.UZERO,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSymbol: false,
        isDefault: false,
    };
}
exports.PasswordComplexityPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (!message.minLength.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.minLength.toString());
        }
        if (message.hasUppercase !== false) {
            writer.uint32(24).bool(message.hasUppercase);
        }
        if (message.hasLowercase !== false) {
            writer.uint32(32).bool(message.hasLowercase);
        }
        if (message.hasNumber !== false) {
            writer.uint32(40).bool(message.hasNumber);
        }
        if (message.hasSymbol !== false) {
            writer.uint32(48).bool(message.hasSymbol);
        }
        if (message.isDefault !== false) {
            writer.uint32(56).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordComplexityPolicy();
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
                    message.minLength = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.hasUppercase = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.hasLowercase = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.hasNumber = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.hasSymbol = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
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
            minLength: isSet(object.minLength) ? long_1.default.fromValue(object.minLength) : long_1.default.UZERO,
            hasUppercase: isSet(object.hasUppercase) ? globalThis.Boolean(object.hasUppercase) : false,
            hasLowercase: isSet(object.hasLowercase) ? globalThis.Boolean(object.hasLowercase) : false,
            hasNumber: isSet(object.hasNumber) ? globalThis.Boolean(object.hasNumber) : false,
            hasSymbol: isSet(object.hasSymbol) ? globalThis.Boolean(object.hasSymbol) : false,
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (!message.minLength.equals(long_1.default.UZERO)) {
            obj.minLength = (message.minLength || long_1.default.UZERO).toString();
        }
        if (message.hasUppercase !== false) {
            obj.hasUppercase = message.hasUppercase;
        }
        if (message.hasLowercase !== false) {
            obj.hasLowercase = message.hasLowercase;
        }
        if (message.hasNumber !== false) {
            obj.hasNumber = message.hasNumber;
        }
        if (message.hasSymbol !== false) {
            obj.hasSymbol = message.hasSymbol;
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordComplexityPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePasswordComplexityPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.minLength = (object.minLength !== undefined && object.minLength !== null)
            ? long_1.default.fromValue(object.minLength)
            : long_1.default.UZERO;
        message.hasUppercase = (_a = object.hasUppercase) !== null && _a !== void 0 ? _a : false;
        message.hasLowercase = (_b = object.hasLowercase) !== null && _b !== void 0 ? _b : false;
        message.hasNumber = (_c = object.hasNumber) !== null && _c !== void 0 ? _c : false;
        message.hasSymbol = (_d = object.hasSymbol) !== null && _d !== void 0 ? _d : false;
        message.isDefault = (_e = object.isDefault) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBasePasswordAgePolicy() {
    return { details: undefined, maxAgeDays: long_1.default.UZERO, expireWarnDays: long_1.default.UZERO, isDefault: false };
}
exports.PasswordAgePolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (!message.maxAgeDays.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.maxAgeDays.toString());
        }
        if (!message.expireWarnDays.equals(long_1.default.UZERO)) {
            writer.uint32(24).uint64(message.expireWarnDays.toString());
        }
        if (message.isDefault !== false) {
            writer.uint32(32).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordAgePolicy();
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
                    message.maxAgeDays = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.expireWarnDays = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
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
            maxAgeDays: isSet(object.maxAgeDays) ? long_1.default.fromValue(object.maxAgeDays) : long_1.default.UZERO,
            expireWarnDays: isSet(object.expireWarnDays) ? long_1.default.fromValue(object.expireWarnDays) : long_1.default.UZERO,
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (!message.maxAgeDays.equals(long_1.default.UZERO)) {
            obj.maxAgeDays = (message.maxAgeDays || long_1.default.UZERO).toString();
        }
        if (!message.expireWarnDays.equals(long_1.default.UZERO)) {
            obj.expireWarnDays = (message.expireWarnDays || long_1.default.UZERO).toString();
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordAgePolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePasswordAgePolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.maxAgeDays = (object.maxAgeDays !== undefined && object.maxAgeDays !== null)
            ? long_1.default.fromValue(object.maxAgeDays)
            : long_1.default.UZERO;
        message.expireWarnDays = (object.expireWarnDays !== undefined && object.expireWarnDays !== null)
            ? long_1.default.fromValue(object.expireWarnDays)
            : long_1.default.UZERO;
        message.isDefault = (_a = object.isDefault) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseLockoutPolicy() {
    return { details: undefined, maxPasswordAttempts: long_1.default.UZERO, maxOtpAttempts: long_1.default.UZERO, isDefault: false };
}
exports.LockoutPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (!message.maxPasswordAttempts.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.maxPasswordAttempts.toString());
        }
        if (!message.maxOtpAttempts.equals(long_1.default.UZERO)) {
            writer.uint32(24).uint64(message.maxOtpAttempts.toString());
        }
        if (message.isDefault !== false) {
            writer.uint32(32).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockoutPolicy();
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
                    message.maxPasswordAttempts = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.maxOtpAttempts = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
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
            maxPasswordAttempts: isSet(object.maxPasswordAttempts) ? long_1.default.fromValue(object.maxPasswordAttempts) : long_1.default.UZERO,
            maxOtpAttempts: isSet(object.maxOtpAttempts) ? long_1.default.fromValue(object.maxOtpAttempts) : long_1.default.UZERO,
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (!message.maxPasswordAttempts.equals(long_1.default.UZERO)) {
            obj.maxPasswordAttempts = (message.maxPasswordAttempts || long_1.default.UZERO).toString();
        }
        if (!message.maxOtpAttempts.equals(long_1.default.UZERO)) {
            obj.maxOtpAttempts = (message.maxOtpAttempts || long_1.default.UZERO).toString();
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        return obj;
    },
    create(base) {
        return exports.LockoutPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockoutPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.maxPasswordAttempts = (object.maxPasswordAttempts !== undefined && object.maxPasswordAttempts !== null)
            ? long_1.default.fromValue(object.maxPasswordAttempts)
            : long_1.default.UZERO;
        message.maxOtpAttempts = (object.maxOtpAttempts !== undefined && object.maxOtpAttempts !== null)
            ? long_1.default.fromValue(object.maxOtpAttempts)
            : long_1.default.UZERO;
        message.isDefault = (_a = object.isDefault) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBasePrivacyPolicy() {
    return {
        details: undefined,
        tosLink: "",
        privacyLink: "",
        isDefault: false,
        helpLink: "",
        supportEmail: "",
        docsLink: "",
        customLink: "",
        customLinkText: "",
    };
}
exports.PrivacyPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.tosLink !== "") {
            writer.uint32(18).string(message.tosLink);
        }
        if (message.privacyLink !== "") {
            writer.uint32(26).string(message.privacyLink);
        }
        if (message.isDefault !== false) {
            writer.uint32(32).bool(message.isDefault);
        }
        if (message.helpLink !== "") {
            writer.uint32(42).string(message.helpLink);
        }
        if (message.supportEmail !== "") {
            writer.uint32(50).string(message.supportEmail);
        }
        if (message.docsLink !== "") {
            writer.uint32(58).string(message.docsLink);
        }
        if (message.customLink !== "") {
            writer.uint32(66).string(message.customLink);
        }
        if (message.customLinkText !== "") {
            writer.uint32(74).string(message.customLinkText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivacyPolicy();
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
                    message.tosLink = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.privacyLink = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.helpLink = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.supportEmail = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.docsLink = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.customLink = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.customLinkText = reader.string();
                    continue;
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
            tosLink: isSet(object.tosLink) ? globalThis.String(object.tosLink) : "",
            privacyLink: isSet(object.privacyLink) ? globalThis.String(object.privacyLink) : "",
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
            helpLink: isSet(object.helpLink) ? globalThis.String(object.helpLink) : "",
            supportEmail: isSet(object.supportEmail) ? globalThis.String(object.supportEmail) : "",
            docsLink: isSet(object.docsLink) ? globalThis.String(object.docsLink) : "",
            customLink: isSet(object.customLink) ? globalThis.String(object.customLink) : "",
            customLinkText: isSet(object.customLinkText) ? globalThis.String(object.customLinkText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.tosLink !== "") {
            obj.tosLink = message.tosLink;
        }
        if (message.privacyLink !== "") {
            obj.privacyLink = message.privacyLink;
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        if (message.helpLink !== "") {
            obj.helpLink = message.helpLink;
        }
        if (message.supportEmail !== "") {
            obj.supportEmail = message.supportEmail;
        }
        if (message.docsLink !== "") {
            obj.docsLink = message.docsLink;
        }
        if (message.customLink !== "") {
            obj.customLink = message.customLink;
        }
        if (message.customLinkText !== "") {
            obj.customLinkText = message.customLinkText;
        }
        return obj;
    },
    create(base) {
        return exports.PrivacyPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBasePrivacyPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.tosLink = (_a = object.tosLink) !== null && _a !== void 0 ? _a : "";
        message.privacyLink = (_b = object.privacyLink) !== null && _b !== void 0 ? _b : "";
        message.isDefault = (_c = object.isDefault) !== null && _c !== void 0 ? _c : false;
        message.helpLink = (_d = object.helpLink) !== null && _d !== void 0 ? _d : "";
        message.supportEmail = (_e = object.supportEmail) !== null && _e !== void 0 ? _e : "";
        message.docsLink = (_f = object.docsLink) !== null && _f !== void 0 ? _f : "";
        message.customLink = (_g = object.customLink) !== null && _g !== void 0 ? _g : "";
        message.customLinkText = (_h = object.customLinkText) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseNotificationPolicy() {
    return { details: undefined, isDefault: false, passwordChange: false };
}
exports.NotificationPolicy = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.isDefault !== false) {
            writer.uint32(16).bool(message.isDefault);
        }
        if (message.passwordChange !== false) {
            writer.uint32(24).bool(message.passwordChange);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationPolicy();
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
                    message.isDefault = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.passwordChange = reader.bool();
                    continue;
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
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
            passwordChange: isSet(object.passwordChange) ? globalThis.Boolean(object.passwordChange) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        if (message.passwordChange !== false) {
            obj.passwordChange = message.passwordChange;
        }
        return obj;
    },
    create(base) {
        return exports.NotificationPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNotificationPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.isDefault = (_a = object.isDefault) !== null && _a !== void 0 ? _a : false;
        message.passwordChange = (_b = object.passwordChange) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=policy.js.map