"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
exports.protobufPackage = "google.protobuf";
function createBaseDuration() {
    return { seconds: long_1.default.ZERO, nanos: 0 };
}
exports.Duration = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (!message.seconds.equals(long_1.default.ZERO)) {
            writer.uint32(8).int64(message.seconds.toString());
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.seconds = long_1.default.fromString(reader.int64().toString());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.nanos = reader.int32();
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
            seconds: isSet(object.seconds) ? long_1.default.fromValue(object.seconds) : long_1.default.ZERO,
            nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (!message.seconds.equals(long_1.default.ZERO)) {
            obj.seconds = (message.seconds || long_1.default.ZERO).toString();
        }
        if (message.nanos !== 0) {
            obj.nanos = Math.round(message.nanos);
        }
        return obj;
    },
    create(base) {
        return exports.Duration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDuration();
        message.seconds = (object.seconds !== undefined && object.seconds !== null)
            ? long_1.default.fromValue(object.seconds)
            : long_1.default.ZERO;
        message.nanos = (_a = object.nanos) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=duration.js.map