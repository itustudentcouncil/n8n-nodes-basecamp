"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPhoneVerificationCode = exports.SendPhoneVerificationCode = exports.HumanPhone = exports.SetHumanPhone = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.user.v2";
function createBaseSetHumanPhone() {
    return { phone: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetHumanPhone = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        if (message.sendCode !== undefined) {
            exports.SendPhoneVerificationCode.encode(message.sendCode, writer.uint32(18).fork()).join();
        }
        if (message.returnCode !== undefined) {
            exports.ReturnPhoneVerificationCode.encode(message.returnCode, writer.uint32(26).fork()).join();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(32).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetHumanPhone();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.sendCode = exports.SendPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = exports.ReturnPhoneVerificationCode.decode(reader, reader.uint32());
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
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            sendCode: isSet(object.sendCode) ? exports.SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? exports.ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = exports.SendPhoneVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = exports.ReturnPhoneVerificationCode.toJSON(message.returnCode);
        }
        if (message.isVerified !== undefined) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.SetHumanPhone.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetHumanPhone();
        message.phone = (_a = object.phone) !== null && _a !== void 0 ? _a : "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? exports.SendPhoneVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? exports.ReturnPhoneVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = (_b = object.isVerified) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseHumanPhone() {
    return { phone: "", isVerified: false };
}
exports.HumanPhone = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        if (message.isVerified !== false) {
            writer.uint32(16).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHumanPhone();
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
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.HumanPhone.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHumanPhone();
        message.phone = (_a = object.phone) !== null && _a !== void 0 ? _a : "";
        message.isVerified = (_b = object.isVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSendPhoneVerificationCode() {
    return {};
}
exports.SendPhoneVerificationCode = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPhoneVerificationCode();
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
        return exports.SendPhoneVerificationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSendPhoneVerificationCode();
        return message;
    },
};
function createBaseReturnPhoneVerificationCode() {
    return {};
}
exports.ReturnPhoneVerificationCode = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnPhoneVerificationCode();
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
        return exports.ReturnPhoneVerificationCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseReturnPhoneVerificationCode();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=phone.js.map