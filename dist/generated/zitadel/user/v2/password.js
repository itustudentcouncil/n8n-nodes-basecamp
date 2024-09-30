"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPassword = exports.ReturnPasswordResetCode = exports.SendPasswordResetLink = exports.HashedPassword = exports.Password = exports.notificationTypeToJSON = exports.notificationTypeFromJSON = exports.NotificationType = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.user.v2";
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["NOTIFICATION_TYPE_Unspecified"] = 0] = "NOTIFICATION_TYPE_Unspecified";
    NotificationType[NotificationType["NOTIFICATION_TYPE_Email"] = 1] = "NOTIFICATION_TYPE_Email";
    NotificationType[NotificationType["NOTIFICATION_TYPE_SMS"] = 2] = "NOTIFICATION_TYPE_SMS";
    NotificationType[NotificationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
function notificationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NOTIFICATION_TYPE_Unspecified":
            return NotificationType.NOTIFICATION_TYPE_Unspecified;
        case 1:
        case "NOTIFICATION_TYPE_Email":
            return NotificationType.NOTIFICATION_TYPE_Email;
        case 2:
        case "NOTIFICATION_TYPE_SMS":
            return NotificationType.NOTIFICATION_TYPE_SMS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NotificationType.UNRECOGNIZED;
    }
}
exports.notificationTypeFromJSON = notificationTypeFromJSON;
function notificationTypeToJSON(object) {
    switch (object) {
        case NotificationType.NOTIFICATION_TYPE_Unspecified:
            return "NOTIFICATION_TYPE_Unspecified";
        case NotificationType.NOTIFICATION_TYPE_Email:
            return "NOTIFICATION_TYPE_Email";
        case NotificationType.NOTIFICATION_TYPE_SMS:
            return "NOTIFICATION_TYPE_SMS";
        case NotificationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.notificationTypeToJSON = notificationTypeToJSON;
function createBasePassword() {
    return { password: "", changeRequired: false };
}
exports.Password = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.password !== "") {
            writer.uint32(10).string(message.password);
        }
        if (message.changeRequired !== false) {
            writer.uint32(16).bool(message.changeRequired);
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
                    message.password = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.changeRequired = reader.bool();
                    continue;
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
            password: isSet(object.password) ? globalThis.String(object.password) : "",
            changeRequired: isSet(object.changeRequired) ? globalThis.Boolean(object.changeRequired) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.password !== "") {
            obj.password = message.password;
        }
        if (message.changeRequired !== false) {
            obj.changeRequired = message.changeRequired;
        }
        return obj;
    },
    create(base) {
        return exports.Password.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePassword();
        message.password = (_a = object.password) !== null && _a !== void 0 ? _a : "";
        message.changeRequired = (_b = object.changeRequired) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseHashedPassword() {
    return { hash: "", changeRequired: false };
}
exports.HashedPassword = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.changeRequired !== false) {
            writer.uint32(16).bool(message.changeRequired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedPassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.changeRequired = reader.bool();
                    continue;
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
            hash: isSet(object.hash) ? globalThis.String(object.hash) : "",
            changeRequired: isSet(object.changeRequired) ? globalThis.Boolean(object.changeRequired) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        if (message.changeRequired !== false) {
            obj.changeRequired = message.changeRequired;
        }
        return obj;
    },
    create(base) {
        return exports.HashedPassword.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHashedPassword();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        message.changeRequired = (_b = object.changeRequired) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSendPasswordResetLink() {
    return { notificationType: 0, urlTemplate: undefined };
}
exports.SendPasswordResetLink = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.notificationType !== 0) {
            writer.uint32(8).int32(message.notificationType);
        }
        if (message.urlTemplate !== undefined) {
            writer.uint32(18).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPasswordResetLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.notificationType = reader.int32();
                    continue;
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
        return {
            notificationType: isSet(object.notificationType) ? notificationTypeFromJSON(object.notificationType) : 0,
            urlTemplate: isSet(object.urlTemplate) ? globalThis.String(object.urlTemplate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.notificationType !== 0) {
            obj.notificationType = notificationTypeToJSON(message.notificationType);
        }
        if (message.urlTemplate !== undefined) {
            obj.urlTemplate = message.urlTemplate;
        }
        return obj;
    },
    create(base) {
        return exports.SendPasswordResetLink.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSendPasswordResetLink();
        message.notificationType = (_a = object.notificationType) !== null && _a !== void 0 ? _a : 0;
        message.urlTemplate = (_b = object.urlTemplate) !== null && _b !== void 0 ? _b : undefined;
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
function createBaseSetPassword() {
    return { password: undefined, hashedPassword: undefined, currentPassword: undefined, verificationCode: undefined };
}
exports.SetPassword = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.password !== undefined) {
            exports.Password.encode(message.password, writer.uint32(10).fork()).join();
        }
        if (message.hashedPassword !== undefined) {
            exports.HashedPassword.encode(message.hashedPassword, writer.uint32(18).fork()).join();
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
        const message = createBaseSetPassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.password = exports.Password.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hashedPassword = exports.HashedPassword.decode(reader, reader.uint32());
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
            password: isSet(object.password) ? exports.Password.fromJSON(object.password) : undefined,
            hashedPassword: isSet(object.hashedPassword) ? exports.HashedPassword.fromJSON(object.hashedPassword) : undefined,
            currentPassword: isSet(object.currentPassword) ? globalThis.String(object.currentPassword) : undefined,
            verificationCode: isSet(object.verificationCode) ? globalThis.String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.password !== undefined) {
            obj.password = exports.Password.toJSON(message.password);
        }
        if (message.hashedPassword !== undefined) {
            obj.hashedPassword = exports.HashedPassword.toJSON(message.hashedPassword);
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
        var _a, _b;
        const message = createBaseSetPassword();
        message.password = (object.password !== undefined && object.password !== null)
            ? exports.Password.fromPartial(object.password)
            : undefined;
        message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
            ? exports.HashedPassword.fromPartial(object.hashedPassword)
            : undefined;
        message.currentPassword = (_a = object.currentPassword) !== null && _a !== void 0 ? _a : undefined;
        message.verificationCode = (_b = object.verificationCode) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=password.js.map