"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = exports.keyTypeToJSON = exports.keyTypeFromJSON = exports.KeyType = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const timestamp_js_1 = require("../google/protobuf/timestamp.js");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.authn.v1";
var KeyType;
(function (KeyType) {
    KeyType[KeyType["KEY_TYPE_UNSPECIFIED"] = 0] = "KEY_TYPE_UNSPECIFIED";
    KeyType[KeyType["KEY_TYPE_JSON"] = 1] = "KEY_TYPE_JSON";
    KeyType[KeyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
function keyTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "KEY_TYPE_UNSPECIFIED":
            return KeyType.KEY_TYPE_UNSPECIFIED;
        case 1:
        case "KEY_TYPE_JSON":
            return KeyType.KEY_TYPE_JSON;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyType.UNRECOGNIZED;
    }
}
exports.keyTypeFromJSON = keyTypeFromJSON;
function keyTypeToJSON(object) {
    switch (object) {
        case KeyType.KEY_TYPE_UNSPECIFIED:
            return "KEY_TYPE_UNSPECIFIED";
        case KeyType.KEY_TYPE_JSON:
            return "KEY_TYPE_JSON";
        case KeyType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.keyTypeToJSON = keyTypeToJSON;
function createBaseKey() {
    return { id: "", details: undefined, type: 0, expirationDate: undefined };
}
exports.Key = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.expirationDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKey();
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
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            type: isSet(object.type) ? keyTypeFromJSON(object.type) : 0,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.type !== 0) {
            obj.type = keyTypeToJSON(message.type);
        }
        if (message.expirationDate !== undefined) {
            obj.expirationDate = message.expirationDate.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.Key.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.expirationDate = (_c = object.expirationDate) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(Math.trunc(date.getTime() / 1000));
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds.toNumber() || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=auth_n_key.js.map