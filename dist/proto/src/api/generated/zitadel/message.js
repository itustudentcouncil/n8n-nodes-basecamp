"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedMessage = exports.ErrorDetail = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.v1";
function createBaseErrorDetail() {
    return { id: "", message: "" };
}
exports.ErrorDetail = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseErrorDetail();
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
                    message.message = reader.string();
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
            message: isSet(object.message) ? globalThis.String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return exports.ErrorDetail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseErrorDetail();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseLocalizedMessage() {
    return { key: "", localizedMessage: "" };
}
exports.LocalizedMessage = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.localizedMessage !== "") {
            writer.uint32(18).string(message.localizedMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLocalizedMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.localizedMessage = reader.string();
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            localizedMessage: isSet(object.localizedMessage) ? globalThis.String(object.localizedMessage) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.localizedMessage !== "") {
            obj.localizedMessage = message.localizedMessage;
        }
        return obj;
    },
    create(base) {
        return exports.LocalizedMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLocalizedMessage();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.localizedMessage = (_b = object.localizedMessage) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=message.js.map