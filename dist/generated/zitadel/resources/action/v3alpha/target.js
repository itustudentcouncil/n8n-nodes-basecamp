"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRESTAsync = exports.SetRESTCall = exports.SetRESTWebhook = exports.PatchTarget = exports.GetTarget = exports.Target = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const duration_js_1 = require("../../../../google/protobuf/duration.js");
const object_js_1 = require("../../object/v3alpha/object.js");
exports.protobufPackage = "zitadel.resources.action.v3alpha";
function createBaseTarget() {
    return {
        name: "",
        restWebhook: undefined,
        restCall: undefined,
        restAsync: undefined,
        timeout: undefined,
        endpoint: "",
    };
}
exports.Target = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.restWebhook !== undefined) {
            exports.SetRESTWebhook.encode(message.restWebhook, writer.uint32(18).fork()).join();
        }
        if (message.restCall !== undefined) {
            exports.SetRESTCall.encode(message.restCall, writer.uint32(26).fork()).join();
        }
        if (message.restAsync !== undefined) {
            exports.SetRESTAsync.encode(message.restAsync, writer.uint32(34).fork()).join();
        }
        if (message.timeout !== undefined) {
            duration_js_1.Duration.encode(message.timeout, writer.uint32(42).fork()).join();
        }
        if (message.endpoint !== "") {
            writer.uint32(50).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTarget();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.restWebhook = exports.SetRESTWebhook.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.restCall = exports.SetRESTCall.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.restAsync = exports.SetRESTAsync.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.timeout = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.endpoint = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            restWebhook: isSet(object.restWebhook) ? exports.SetRESTWebhook.fromJSON(object.restWebhook) : undefined,
            restCall: isSet(object.restCall) ? exports.SetRESTCall.fromJSON(object.restCall) : undefined,
            restAsync: isSet(object.restAsync) ? exports.SetRESTAsync.fromJSON(object.restAsync) : undefined,
            timeout: isSet(object.timeout) ? duration_js_1.Duration.fromJSON(object.timeout) : undefined,
            endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.restWebhook !== undefined) {
            obj.restWebhook = exports.SetRESTWebhook.toJSON(message.restWebhook);
        }
        if (message.restCall !== undefined) {
            obj.restCall = exports.SetRESTCall.toJSON(message.restCall);
        }
        if (message.restAsync !== undefined) {
            obj.restAsync = exports.SetRESTAsync.toJSON(message.restAsync);
        }
        if (message.timeout !== undefined) {
            obj.timeout = duration_js_1.Duration.toJSON(message.timeout);
        }
        if (message.endpoint !== "") {
            obj.endpoint = message.endpoint;
        }
        return obj;
    },
    create(base) {
        return exports.Target.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTarget();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.restWebhook = (object.restWebhook !== undefined && object.restWebhook !== null)
            ? exports.SetRESTWebhook.fromPartial(object.restWebhook)
            : undefined;
        message.restCall = (object.restCall !== undefined && object.restCall !== null)
            ? exports.SetRESTCall.fromPartial(object.restCall)
            : undefined;
        message.restAsync = (object.restAsync !== undefined && object.restAsync !== null)
            ? exports.SetRESTAsync.fromPartial(object.restAsync)
            : undefined;
        message.timeout = (object.timeout !== undefined && object.timeout !== null)
            ? duration_js_1.Duration.fromPartial(object.timeout)
            : undefined;
        message.endpoint = (_b = object.endpoint) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetTarget() {
    return { details: undefined, config: undefined };
}
exports.GetTarget = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.config !== undefined) {
            exports.Target.encode(message.config, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTarget();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.config = exports.Target.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            config: isSet(object.config) ? exports.Target.fromJSON(object.config) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.config !== undefined) {
            obj.config = exports.Target.toJSON(message.config);
        }
        return obj;
    },
    create(base) {
        return exports.GetTarget.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetTarget();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.Target.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBasePatchTarget() {
    return {
        name: undefined,
        restWebhook: undefined,
        restCall: undefined,
        restAsync: undefined,
        timeout: undefined,
        endpoint: undefined,
    };
}
exports.PatchTarget = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== undefined) {
            writer.uint32(10).string(message.name);
        }
        if (message.restWebhook !== undefined) {
            exports.SetRESTWebhook.encode(message.restWebhook, writer.uint32(18).fork()).join();
        }
        if (message.restCall !== undefined) {
            exports.SetRESTCall.encode(message.restCall, writer.uint32(26).fork()).join();
        }
        if (message.restAsync !== undefined) {
            exports.SetRESTAsync.encode(message.restAsync, writer.uint32(34).fork()).join();
        }
        if (message.timeout !== undefined) {
            duration_js_1.Duration.encode(message.timeout, writer.uint32(42).fork()).join();
        }
        if (message.endpoint !== undefined) {
            writer.uint32(50).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchTarget();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.restWebhook = exports.SetRESTWebhook.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.restCall = exports.SetRESTCall.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.restAsync = exports.SetRESTAsync.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.timeout = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.endpoint = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            restWebhook: isSet(object.restWebhook) ? exports.SetRESTWebhook.fromJSON(object.restWebhook) : undefined,
            restCall: isSet(object.restCall) ? exports.SetRESTCall.fromJSON(object.restCall) : undefined,
            restAsync: isSet(object.restAsync) ? exports.SetRESTAsync.fromJSON(object.restAsync) : undefined,
            timeout: isSet(object.timeout) ? duration_js_1.Duration.fromJSON(object.timeout) : undefined,
            endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        if (message.restWebhook !== undefined) {
            obj.restWebhook = exports.SetRESTWebhook.toJSON(message.restWebhook);
        }
        if (message.restCall !== undefined) {
            obj.restCall = exports.SetRESTCall.toJSON(message.restCall);
        }
        if (message.restAsync !== undefined) {
            obj.restAsync = exports.SetRESTAsync.toJSON(message.restAsync);
        }
        if (message.timeout !== undefined) {
            obj.timeout = duration_js_1.Duration.toJSON(message.timeout);
        }
        if (message.endpoint !== undefined) {
            obj.endpoint = message.endpoint;
        }
        return obj;
    },
    create(base) {
        return exports.PatchTarget.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePatchTarget();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.restWebhook = (object.restWebhook !== undefined && object.restWebhook !== null)
            ? exports.SetRESTWebhook.fromPartial(object.restWebhook)
            : undefined;
        message.restCall = (object.restCall !== undefined && object.restCall !== null)
            ? exports.SetRESTCall.fromPartial(object.restCall)
            : undefined;
        message.restAsync = (object.restAsync !== undefined && object.restAsync !== null)
            ? exports.SetRESTAsync.fromPartial(object.restAsync)
            : undefined;
        message.timeout = (object.timeout !== undefined && object.timeout !== null)
            ? duration_js_1.Duration.fromPartial(object.timeout)
            : undefined;
        message.endpoint = (_b = object.endpoint) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSetRESTWebhook() {
    return { interruptOnError: false };
}
exports.SetRESTWebhook = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.interruptOnError !== false) {
            writer.uint32(8).bool(message.interruptOnError);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetRESTWebhook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.interruptOnError = reader.bool();
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
        return { interruptOnError: isSet(object.interruptOnError) ? globalThis.Boolean(object.interruptOnError) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.interruptOnError !== false) {
            obj.interruptOnError = message.interruptOnError;
        }
        return obj;
    },
    create(base) {
        return exports.SetRESTWebhook.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetRESTWebhook();
        message.interruptOnError = (_a = object.interruptOnError) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseSetRESTCall() {
    return { interruptOnError: false };
}
exports.SetRESTCall = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.interruptOnError !== false) {
            writer.uint32(8).bool(message.interruptOnError);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetRESTCall();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.interruptOnError = reader.bool();
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
        return { interruptOnError: isSet(object.interruptOnError) ? globalThis.Boolean(object.interruptOnError) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.interruptOnError !== false) {
            obj.interruptOnError = message.interruptOnError;
        }
        return obj;
    },
    create(base) {
        return exports.SetRESTCall.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetRESTCall();
        message.interruptOnError = (_a = object.interruptOnError) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseSetRESTAsync() {
    return {};
}
exports.SetRESTAsync = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetRESTAsync();
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
        return exports.SetRESTAsync.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSetRESTAsync();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=target.js.map