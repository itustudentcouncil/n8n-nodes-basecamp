"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateType = exports.EventType = exports.Aggregate = exports.Editor = exports.Event = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const struct_js_1 = require("../google/protobuf/struct.js");
const timestamp_js_1 = require("../google/protobuf/timestamp.js");
const message_js_1 = require("./message.js");
exports.protobufPackage = "zitadel.event.v1";
function createBaseEvent() {
    return {
        editor: undefined,
        aggregate: undefined,
        sequence: long_1.default.UZERO,
        creationDate: undefined,
        payload: undefined,
        type: undefined,
    };
}
exports.Event = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.editor !== undefined) {
            exports.Editor.encode(message.editor, writer.uint32(10).fork()).join();
        }
        if (message.aggregate !== undefined) {
            exports.Aggregate.encode(message.aggregate, writer.uint32(18).fork()).join();
        }
        if (!message.sequence.equals(long_1.default.UZERO)) {
            writer.uint32(24).uint64(message.sequence.toString());
        }
        if (message.creationDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(34).fork()).join();
        }
        if (message.payload !== undefined) {
            struct_js_1.Struct.encode(struct_js_1.Struct.wrap(message.payload), writer.uint32(42).fork()).join();
        }
        if (message.type !== undefined) {
            exports.EventType.encode(message.type, writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.editor = exports.Editor.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.aggregate = exports.Aggregate.decode(reader, reader.uint32());
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
                    message.creationDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.payload = struct_js_1.Struct.unwrap(struct_js_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.type = exports.EventType.decode(reader, reader.uint32());
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
            editor: isSet(object.editor) ? exports.Editor.fromJSON(object.editor) : undefined,
            aggregate: isSet(object.aggregate) ? exports.Aggregate.fromJSON(object.aggregate) : undefined,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            creationDate: isSet(object.creationDate) ? fromJsonTimestamp(object.creationDate) : undefined,
            payload: isObject(object.payload) ? object.payload : undefined,
            type: isSet(object.type) ? exports.EventType.fromJSON(object.type) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.editor !== undefined) {
            obj.editor = exports.Editor.toJSON(message.editor);
        }
        if (message.aggregate !== undefined) {
            obj.aggregate = exports.Aggregate.toJSON(message.aggregate);
        }
        if (!message.sequence.equals(long_1.default.UZERO)) {
            obj.sequence = (message.sequence || long_1.default.UZERO).toString();
        }
        if (message.creationDate !== undefined) {
            obj.creationDate = message.creationDate.toISOString();
        }
        if (message.payload !== undefined) {
            obj.payload = message.payload;
        }
        if (message.type !== undefined) {
            obj.type = exports.EventType.toJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return exports.Event.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEvent();
        message.editor = (object.editor !== undefined && object.editor !== null)
            ? exports.Editor.fromPartial(object.editor)
            : undefined;
        message.aggregate = (object.aggregate !== undefined && object.aggregate !== null)
            ? exports.Aggregate.fromPartial(object.aggregate)
            : undefined;
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.creationDate = (_a = object.creationDate) !== null && _a !== void 0 ? _a : undefined;
        message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : undefined;
        message.type = (object.type !== undefined && object.type !== null) ? exports.EventType.fromPartial(object.type) : undefined;
        return message;
    },
};
function createBaseEditor() {
    return { userId: "", displayName: "", service: "" };
}
exports.Editor = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.displayName !== "") {
            writer.uint32(18).string(message.displayName);
        }
        if (message.service !== "") {
            writer.uint32(26).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEditor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.service = reader.string();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            service: isSet(object.service) ? globalThis.String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.service !== "") {
            obj.service = message.service;
        }
        return obj;
    },
    create(base) {
        return exports.Editor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEditor();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.displayName = (_b = object.displayName) !== null && _b !== void 0 ? _b : "";
        message.service = (_c = object.service) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseAggregate() {
    return { id: "", type: undefined, resourceOwner: "" };
}
exports.Aggregate = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== undefined) {
            exports.AggregateType.encode(message.type, writer.uint32(18).fork()).join();
        }
        if (message.resourceOwner !== "") {
            writer.uint32(26).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregate();
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
                    message.type = exports.AggregateType.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.resourceOwner = reader.string();
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
            type: isSet(object.type) ? exports.AggregateType.fromJSON(object.type) : undefined,
            resourceOwner: isSet(object.resourceOwner) ? globalThis.String(object.resourceOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.type !== undefined) {
            obj.type = exports.AggregateType.toJSON(message.type);
        }
        if (message.resourceOwner !== "") {
            obj.resourceOwner = message.resourceOwner;
        }
        return obj;
    },
    create(base) {
        return exports.Aggregate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAggregate();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (object.type !== undefined && object.type !== null)
            ? exports.AggregateType.fromPartial(object.type)
            : undefined;
        message.resourceOwner = (_b = object.resourceOwner) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventType() {
    return { type: "", localized: undefined };
}
exports.EventType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.localized !== undefined) {
            message_js_1.LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.localized = message_js_1.LocalizedMessage.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            localized: isSet(object.localized) ? message_js_1.LocalizedMessage.fromJSON(object.localized) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.localized !== undefined) {
            obj.localized = message_js_1.LocalizedMessage.toJSON(message.localized);
        }
        return obj;
    },
    create(base) {
        return exports.EventType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventType();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.localized = (object.localized !== undefined && object.localized !== null)
            ? message_js_1.LocalizedMessage.fromPartial(object.localized)
            : undefined;
        return message;
    },
};
function createBaseAggregateType() {
    return { type: "", localized: undefined };
}
exports.AggregateType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.localized !== undefined) {
            message_js_1.LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.localized = message_js_1.LocalizedMessage.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            localized: isSet(object.localized) ? message_js_1.LocalizedMessage.fromJSON(object.localized) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.localized !== undefined) {
            obj.localized = message_js_1.LocalizedMessage.toJSON(message.localized);
        }
        return obj;
    },
    create(base) {
        return exports.AggregateType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAggregateType();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.localized = (object.localized !== undefined && object.localized !== null)
            ? message_js_1.LocalizedMessage.fromPartial(object.localized)
            : undefined;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=event.js.map