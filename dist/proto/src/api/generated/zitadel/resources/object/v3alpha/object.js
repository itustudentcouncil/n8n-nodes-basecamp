"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDetails = exports.SearchQuery = exports.Details = exports.textFilterMethodToJSON = exports.textFilterMethodFromJSON = exports.TextFilterMethod = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const timestamp_js_1 = require("../../../../google/protobuf/timestamp.js");
const object_js_1 = require("../../../object/v3alpha/object.js");
exports.protobufPackage = "zitadel.resources.object.v3alpha";
var TextFilterMethod;
(function (TextFilterMethod) {
    TextFilterMethod[TextFilterMethod["TEXT_FILTER_METHOD_EQUALS"] = 0] = "TEXT_FILTER_METHOD_EQUALS";
    TextFilterMethod[TextFilterMethod["TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE"] = 1] = "TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE";
    TextFilterMethod[TextFilterMethod["TEXT_FILTER_METHOD_STARTS_WITH"] = 2] = "TEXT_FILTER_METHOD_STARTS_WITH";
    TextFilterMethod[TextFilterMethod["TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE"] = 3] = "TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE";
    TextFilterMethod[TextFilterMethod["TEXT_FILTER_METHOD_CONTAINS"] = 4] = "TEXT_FILTER_METHOD_CONTAINS";
    TextFilterMethod[TextFilterMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TextFilterMethod = exports.TextFilterMethod || (exports.TextFilterMethod = {}));
function textFilterMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "TEXT_FILTER_METHOD_EQUALS":
            return TextFilterMethod.TEXT_FILTER_METHOD_EQUALS;
        case 1:
        case "TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE":
            return TextFilterMethod.TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE;
        case 2:
        case "TEXT_FILTER_METHOD_STARTS_WITH":
            return TextFilterMethod.TEXT_FILTER_METHOD_STARTS_WITH;
        case 3:
        case "TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE":
            return TextFilterMethod.TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE;
        case 4:
        case "TEXT_FILTER_METHOD_CONTAINS":
            return TextFilterMethod.TEXT_FILTER_METHOD_CONTAINS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TextFilterMethod.UNRECOGNIZED;
    }
}
exports.textFilterMethodFromJSON = textFilterMethodFromJSON;
function textFilterMethodToJSON(object) {
    switch (object) {
        case TextFilterMethod.TEXT_FILTER_METHOD_EQUALS:
            return "TEXT_FILTER_METHOD_EQUALS";
        case TextFilterMethod.TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE:
            return "TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE";
        case TextFilterMethod.TEXT_FILTER_METHOD_STARTS_WITH:
            return "TEXT_FILTER_METHOD_STARTS_WITH";
        case TextFilterMethod.TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE:
            return "TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE";
        case TextFilterMethod.TEXT_FILTER_METHOD_CONTAINS:
            return "TEXT_FILTER_METHOD_CONTAINS";
        case TextFilterMethod.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.textFilterMethodToJSON = textFilterMethodToJSON;
function createBaseDetails() {
    return { id: "", created: undefined, changed: undefined, owner: undefined };
}
exports.Details = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.created !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.created), writer.uint32(26).fork()).join();
        }
        if (message.changed !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.changed), writer.uint32(34).fork()).join();
        }
        if (message.owner !== undefined) {
            object_js_1.Owner.encode(message.owner, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.created = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.changed = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.owner = object_js_1.Owner.decode(reader, reader.uint32());
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
            created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
            changed: isSet(object.changed) ? fromJsonTimestamp(object.changed) : undefined,
            owner: isSet(object.owner) ? object_js_1.Owner.fromJSON(object.owner) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.created !== undefined) {
            obj.created = message.created.toISOString();
        }
        if (message.changed !== undefined) {
            obj.changed = message.changed.toISOString();
        }
        if (message.owner !== undefined) {
            obj.owner = object_js_1.Owner.toJSON(message.owner);
        }
        return obj;
    },
    create(base) {
        return exports.Details.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDetails();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.created = (_b = object.created) !== null && _b !== void 0 ? _b : undefined;
        message.changed = (_c = object.changed) !== null && _c !== void 0 ? _c : undefined;
        message.owner = (object.owner !== undefined && object.owner !== null) ? object_js_1.Owner.fromPartial(object.owner) : undefined;
        return message;
    },
};
function createBaseSearchQuery() {
    return { offset: long_1.default.UZERO, limit: 0, desc: false };
}
exports.SearchQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (!message.offset.equals(long_1.default.UZERO)) {
            writer.uint32(8).uint64(message.offset.toString());
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        if (message.desc !== false) {
            writer.uint32(24).bool(message.desc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = long_1.default.fromString(reader.uint64().toString(), true);
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
                    message.desc = reader.bool();
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
            offset: isSet(object.offset) ? long_1.default.fromValue(object.offset) : long_1.default.UZERO,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            desc: isSet(object.desc) ? globalThis.Boolean(object.desc) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (!message.offset.equals(long_1.default.UZERO)) {
            obj.offset = (message.offset || long_1.default.UZERO).toString();
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.desc !== false) {
            obj.desc = message.desc;
        }
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSearchQuery();
        message.offset = (object.offset !== undefined && object.offset !== null)
            ? long_1.default.fromValue(object.offset)
            : long_1.default.UZERO;
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : 0;
        message.desc = (_b = object.desc) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseListDetails() {
    return { appliedLimit: long_1.default.UZERO, totalResult: long_1.default.UZERO, timestamp: undefined };
}
exports.ListDetails = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (!message.appliedLimit.equals(long_1.default.UZERO)) {
            writer.uint32(8).uint64(message.appliedLimit.toString());
        }
        if (!message.totalResult.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.totalResult.toString());
        }
        if (message.timestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.appliedLimit = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.totalResult = long_1.default.fromString(reader.uint64().toString(), true);
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            appliedLimit: isSet(object.appliedLimit) ? long_1.default.fromValue(object.appliedLimit) : long_1.default.UZERO,
            totalResult: isSet(object.totalResult) ? long_1.default.fromValue(object.totalResult) : long_1.default.UZERO,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (!message.appliedLimit.equals(long_1.default.UZERO)) {
            obj.appliedLimit = (message.appliedLimit || long_1.default.UZERO).toString();
        }
        if (!message.totalResult.equals(long_1.default.UZERO)) {
            obj.totalResult = (message.totalResult || long_1.default.UZERO).toString();
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.ListDetails.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListDetails();
        message.appliedLimit = (object.appliedLimit !== undefined && object.appliedLimit !== null)
            ? long_1.default.fromValue(object.appliedLimit)
            : long_1.default.UZERO;
        message.totalResult = (object.totalResult !== undefined && object.totalResult !== null)
            ? long_1.default.fromValue(object.totalResult)
            : long_1.default.UZERO;
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
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
//# sourceMappingURL=object.js.map