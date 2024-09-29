"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPhoneVerificationCode = exports.SendPhoneVerificationCode = exports.SetPhone = exports.ReturnEmailVerificationCode = exports.SendEmailVerificationCode = exports.SetEmail = exports.SetContact = exports.Phone = exports.Email = exports.Contact = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.resources.user.v3alpha";
function createBaseContact() {
    return { email: undefined, phone: undefined };
}
exports.Contact = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== undefined) {
            exports.Email.encode(message.email, writer.uint32(10).fork()).join();
        }
        if (message.phone !== undefined) {
            exports.Phone.encode(message.phone, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContact();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = exports.Email.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.phone = exports.Phone.decode(reader, reader.uint32());
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
            email: isSet(object.email) ? exports.Email.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? exports.Phone.fromJSON(object.phone) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== undefined) {
            obj.email = exports.Email.toJSON(message.email);
        }
        if (message.phone !== undefined) {
            obj.phone = exports.Phone.toJSON(message.phone);
        }
        return obj;
    },
    create(base) {
        return exports.Contact.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseContact();
        message.email = (object.email !== undefined && object.email !== null) ? exports.Email.fromPartial(object.email) : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null) ? exports.Phone.fromPartial(object.phone) : undefined;
        return message;
    },
};
function createBaseEmail() {
    return { address: "", isVerified: false };
}
exports.Email = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.isVerified !== false) {
            writer.uint32(16).bool(message.isVerified);
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
                    message.address = reader.string();
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
            address: isSet(object.address) ? globalThis.String(object.address) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.Email.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEmail();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.isVerified = (_b = object.isVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBasePhone() {
    return { number: "", isVerified: false };
}
exports.Phone = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.number !== "") {
            writer.uint32(10).string(message.number);
        }
        if (message.isVerified !== false) {
            writer.uint32(16).bool(message.isVerified);
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
                    message.number = reader.string();
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
            number: isSet(object.number) ? globalThis.String(object.number) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== "") {
            obj.number = message.number;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return exports.Phone.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePhone();
        message.number = (_a = object.number) !== null && _a !== void 0 ? _a : "";
        message.isVerified = (_b = object.isVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSetContact() {
    return { email: undefined, phone: undefined };
}
exports.SetContact = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== undefined) {
            exports.SetEmail.encode(message.email, writer.uint32(10).fork()).join();
        }
        if (message.phone !== undefined) {
            exports.SetPhone.encode(message.phone, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetContact();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = exports.SetEmail.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.phone = exports.SetPhone.decode(reader, reader.uint32());
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
            email: isSet(object.email) ? exports.SetEmail.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? exports.SetPhone.fromJSON(object.phone) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== undefined) {
            obj.email = exports.SetEmail.toJSON(message.email);
        }
        if (message.phone !== undefined) {
            obj.phone = exports.SetPhone.toJSON(message.phone);
        }
        return obj;
    },
    create(base) {
        return exports.SetContact.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetContact();
        message.email = (object.email !== undefined && object.email !== null)
            ? exports.SetEmail.fromPartial(object.email)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? exports.SetPhone.fromPartial(object.phone)
            : undefined;
        return message;
    },
};
function createBaseSetEmail() {
    return { address: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetEmail = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
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
        const message = createBaseSetEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
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
            address: isSet(object.address) ? globalThis.String(object.address) : "",
            sendCode: isSet(object.sendCode) ? exports.SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? exports.ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
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
        return exports.SetEmail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetEmail();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
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
function createBaseSetPhone() {
    return { number: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetPhone = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.number !== "") {
            writer.uint32(10).string(message.number);
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
        const message = createBaseSetPhone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.number = reader.string();
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
            number: isSet(object.number) ? globalThis.String(object.number) : "",
            sendCode: isSet(object.sendCode) ? exports.SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? exports.ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== "") {
            obj.number = message.number;
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
        return exports.SetPhone.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetPhone();
        message.number = (_a = object.number) !== null && _a !== void 0 ? _a : "";
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
//# sourceMappingURL=communication.js.map