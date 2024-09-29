"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeQuery = exports.Change = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const timestamp_js_1 = require("../google/protobuf/timestamp.js");
const message_js_1 = require("./message.js");
exports.protobufPackage = "zitadel.change.v1";
function createBaseChange() {
    return {
        changeDate: undefined,
        eventType: undefined,
        sequence: long_1.default.UZERO,
        editorId: "",
        editorDisplayName: "",
        resourceOwnerId: "",
        editorPreferredLoginName: "",
        editorAvatarUrl: "",
    };
}
exports.Change = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.changeDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(10).fork()).join();
        }
        if (message.eventType !== undefined) {
            message_js_1.LocalizedMessage.encode(message.eventType, writer.uint32(18).fork()).join();
        }
        if (!message.sequence.equals(long_1.default.UZERO)) {
            writer.uint32(24).uint64(message.sequence.toString());
        }
        if (message.editorId !== "") {
            writer.uint32(34).string(message.editorId);
        }
        if (message.editorDisplayName !== "") {
            writer.uint32(42).string(message.editorDisplayName);
        }
        if (message.resourceOwnerId !== "") {
            writer.uint32(50).string(message.resourceOwnerId);
        }
        if (message.editorPreferredLoginName !== "") {
            writer.uint32(58).string(message.editorPreferredLoginName);
        }
        if (message.editorAvatarUrl !== "") {
            writer.uint32(66).string(message.editorAvatarUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.changeDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.eventType = message_js_1.LocalizedMessage.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.editorId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.editorDisplayName = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.resourceOwnerId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.editorPreferredLoginName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.editorAvatarUrl = reader.string();
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
            changeDate: isSet(object.changeDate) ? fromJsonTimestamp(object.changeDate) : undefined,
            eventType: isSet(object.eventType) ? message_js_1.LocalizedMessage.fromJSON(object.eventType) : undefined,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            editorId: isSet(object.editorId) ? globalThis.String(object.editorId) : "",
            editorDisplayName: isSet(object.editorDisplayName) ? globalThis.String(object.editorDisplayName) : "",
            resourceOwnerId: isSet(object.resourceOwnerId) ? globalThis.String(object.resourceOwnerId) : "",
            editorPreferredLoginName: isSet(object.editorPreferredLoginName)
                ? globalThis.String(object.editorPreferredLoginName)
                : "",
            editorAvatarUrl: isSet(object.editorAvatarUrl) ? globalThis.String(object.editorAvatarUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.changeDate !== undefined) {
            obj.changeDate = message.changeDate.toISOString();
        }
        if (message.eventType !== undefined) {
            obj.eventType = message_js_1.LocalizedMessage.toJSON(message.eventType);
        }
        if (!message.sequence.equals(long_1.default.UZERO)) {
            obj.sequence = (message.sequence || long_1.default.UZERO).toString();
        }
        if (message.editorId !== "") {
            obj.editorId = message.editorId;
        }
        if (message.editorDisplayName !== "") {
            obj.editorDisplayName = message.editorDisplayName;
        }
        if (message.resourceOwnerId !== "") {
            obj.resourceOwnerId = message.resourceOwnerId;
        }
        if (message.editorPreferredLoginName !== "") {
            obj.editorPreferredLoginName = message.editorPreferredLoginName;
        }
        if (message.editorAvatarUrl !== "") {
            obj.editorAvatarUrl = message.editorAvatarUrl;
        }
        return obj;
    },
    create(base) {
        return exports.Change.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseChange();
        message.changeDate = (_a = object.changeDate) !== null && _a !== void 0 ? _a : undefined;
        message.eventType = (object.eventType !== undefined && object.eventType !== null)
            ? message_js_1.LocalizedMessage.fromPartial(object.eventType)
            : undefined;
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.editorId = (_b = object.editorId) !== null && _b !== void 0 ? _b : "";
        message.editorDisplayName = (_c = object.editorDisplayName) !== null && _c !== void 0 ? _c : "";
        message.resourceOwnerId = (_d = object.resourceOwnerId) !== null && _d !== void 0 ? _d : "";
        message.editorPreferredLoginName = (_e = object.editorPreferredLoginName) !== null && _e !== void 0 ? _e : "";
        message.editorAvatarUrl = (_f = object.editorAvatarUrl) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseChangeQuery() {
    return { sequence: long_1.default.UZERO, limit: 0, asc: false };
}
exports.ChangeQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (!message.sequence.equals(long_1.default.UZERO)) {
            writer.uint32(8).uint64(message.sequence.toString());
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        if (message.asc !== false) {
            writer.uint32(24).bool(message.asc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChangeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.sequence = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.asc = reader.bool();
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
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            asc: isSet(object.asc) ? globalThis.Boolean(object.asc) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (!message.sequence.equals(long_1.default.UZERO)) {
            obj.sequence = (message.sequence || long_1.default.UZERO).toString();
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.asc !== false) {
            obj.asc = message.asc;
        }
        return obj;
    },
    create(base) {
        return exports.ChangeQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseChangeQuery();
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : 0;
        message.asc = (_b = object.asc) !== null && _b !== void 0 ? _b : false;
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
//# sourceMappingURL=change.js.map