"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnEmailVerificationCode = exports.SendEmailVerificationCode = exports.HumanEmail = exports.SetHumanEmail = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.user.v2beta";
function createBaseSetHumanEmail() {
    return { email: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetHumanEmail = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.sendCode !== undefined) {
            exports.SendEmailVerificationCode.encode(message.sendCode, writer.uint32(18).fork()).join();
        }
        if (message.returnCode !== undefined) {
            exports.ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(26).fork()).join();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(32).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetHumanEmail();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.sendCode = exports.SendEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = exports.ReturnEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            sendCode: isSet(object.sendCode) ? exports.SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? exports.ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = exports.SendEmailVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = exports.ReturnEmailVerificationCode.toJSON(message.returnCode);
        }
        if (message.isVerified !== undefined) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.SetHumanEmail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetHumanEmail();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? exports.SendEmailVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? exports.ReturnEmailVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = (_b = object.isVerified) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseHumanEmail() {
    return { email: "", isVerified: false };
}
exports.HumanEmail = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.isVerified !== false) {
            writer.uint32(16).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHumanEmail();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.HumanEmail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHumanEmail();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.isVerified = (_b = object.isVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSendEmailVerificationCode() {
    return { urlTemplate: undefined };
}
exports.SendEmailVerificationCode = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEmailVerificationCode();
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
        return exports.SendEmailVerificationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendEmailVerificationCode();
        message.urlTemplate = (_a = object.urlTemplate) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseReturnEmailVerificationCode() {
    return {};
}
exports.ReturnEmailVerificationCode = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnEmailVerificationCode();
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
        return exports.ReturnEmailVerificationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseReturnEmailVerificationCode();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=email.js.map