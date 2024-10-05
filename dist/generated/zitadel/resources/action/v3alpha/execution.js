"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventExecution = exports.FunctionExecution = exports.ResponseExecution = exports.RequestExecution = exports.Condition = exports.ExecutionTargetType = exports.GetExecution = exports.Execution = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v3alpha/object.js");
exports.protobufPackage = "zitadel.resources.action.v3alpha";
function createBaseExecution() {
    return { targets: [] };
}
exports.Execution = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.targets) {
            exports.ExecutionTargetType.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.targets.push(exports.ExecutionTargetType.decode(reader, reader.uint32()));
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
            targets: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.targets)
                ? object.targets.map((e) => exports.ExecutionTargetType.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.targets) === null || _a === void 0 ? void 0 : _a.length) {
            obj.targets = message.targets.map((e) => exports.ExecutionTargetType.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Execution.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExecution();
        message.targets = ((_a = object.targets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ExecutionTargetType.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetExecution() {
    return { details: undefined, condition: undefined, execution: undefined };
}
exports.GetExecution = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.condition !== undefined) {
            exports.Condition.encode(message.condition, writer.uint32(18).fork()).join();
        }
        if (message.execution !== undefined) {
            exports.Execution.encode(message.execution, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetExecution();
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
                    message.condition = exports.Condition.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.execution = exports.Execution.decode(reader, reader.uint32());
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
            condition: isSet(object.condition) ? exports.Condition.fromJSON(object.condition) : undefined,
            execution: isSet(object.execution) ? exports.Execution.fromJSON(object.execution) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.condition !== undefined) {
            obj.condition = exports.Condition.toJSON(message.condition);
        }
        if (message.execution !== undefined) {
            obj.execution = exports.Execution.toJSON(message.execution);
        }
        return obj;
    },
    create(base) {
        return exports.GetExecution.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetExecution();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.condition = (object.condition !== undefined && object.condition !== null)
            ? exports.Condition.fromPartial(object.condition)
            : undefined;
        message.execution = (object.execution !== undefined && object.execution !== null)
            ? exports.Execution.fromPartial(object.execution)
            : undefined;
        return message;
    },
};
function createBaseExecutionTargetType() {
    return { target: undefined, include: undefined };
}
exports.ExecutionTargetType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.target !== undefined) {
            writer.uint32(10).string(message.target);
        }
        if (message.include !== undefined) {
            exports.Condition.encode(message.include, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutionTargetType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.target = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.include = exports.Condition.decode(reader, reader.uint32());
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
            target: isSet(object.target) ? globalThis.String(object.target) : undefined,
            include: isSet(object.include) ? exports.Condition.fromJSON(object.include) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.target !== undefined) {
            obj.target = message.target;
        }
        if (message.include !== undefined) {
            obj.include = exports.Condition.toJSON(message.include);
        }
        return obj;
    },
    create(base) {
        return exports.ExecutionTargetType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExecutionTargetType();
        message.target = (_a = object.target) !== null && _a !== void 0 ? _a : undefined;
        message.include = (object.include !== undefined && object.include !== null)
            ? exports.Condition.fromPartial(object.include)
            : undefined;
        return message;
    },
};
function createBaseCondition() {
    return { request: undefined, response: undefined, function: undefined, event: undefined };
}
exports.Condition = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.request !== undefined) {
            exports.RequestExecution.encode(message.request, writer.uint32(10).fork()).join();
        }
        if (message.response !== undefined) {
            exports.ResponseExecution.encode(message.response, writer.uint32(18).fork()).join();
        }
        if (message.function !== undefined) {
            exports.FunctionExecution.encode(message.function, writer.uint32(26).fork()).join();
        }
        if (message.event !== undefined) {
            exports.EventExecution.encode(message.event, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.request = exports.RequestExecution.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.response = exports.ResponseExecution.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.function = exports.FunctionExecution.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.event = exports.EventExecution.decode(reader, reader.uint32());
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
            request: isSet(object.request) ? exports.RequestExecution.fromJSON(object.request) : undefined,
            response: isSet(object.response) ? exports.ResponseExecution.fromJSON(object.response) : undefined,
            function: isSet(object.function) ? exports.FunctionExecution.fromJSON(object.function) : undefined,
            event: isSet(object.event) ? exports.EventExecution.fromJSON(object.event) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.request !== undefined) {
            obj.request = exports.RequestExecution.toJSON(message.request);
        }
        if (message.response !== undefined) {
            obj.response = exports.ResponseExecution.toJSON(message.response);
        }
        if (message.function !== undefined) {
            obj.function = exports.FunctionExecution.toJSON(message.function);
        }
        if (message.event !== undefined) {
            obj.event = exports.EventExecution.toJSON(message.event);
        }
        return obj;
    },
    create(base) {
        return exports.Condition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCondition();
        message.request = (object.request !== undefined && object.request !== null)
            ? exports.RequestExecution.fromPartial(object.request)
            : undefined;
        message.response = (object.response !== undefined && object.response !== null)
            ? exports.ResponseExecution.fromPartial(object.response)
            : undefined;
        message.function = (object.function !== undefined && object.function !== null)
            ? exports.FunctionExecution.fromPartial(object.function)
            : undefined;
        message.event = (object.event !== undefined && object.event !== null)
            ? exports.EventExecution.fromPartial(object.event)
            : undefined;
        return message;
    },
};
function createBaseRequestExecution() {
    return { method: undefined, service: undefined, all: undefined };
}
exports.RequestExecution = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.method !== undefined) {
            writer.uint32(10).string(message.method);
        }
        if (message.service !== undefined) {
            writer.uint32(18).string(message.service);
        }
        if (message.all !== undefined) {
            writer.uint32(24).bool(message.all);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestExecution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.all = reader.bool();
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
            method: isSet(object.method) ? globalThis.String(object.method) : undefined,
            service: isSet(object.service) ? globalThis.String(object.service) : undefined,
            all: isSet(object.all) ? globalThis.Boolean(object.all) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.method !== undefined) {
            obj.method = message.method;
        }
        if (message.service !== undefined) {
            obj.service = message.service;
        }
        if (message.all !== undefined) {
            obj.all = message.all;
        }
        return obj;
    },
    create(base) {
        return exports.RequestExecution.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRequestExecution();
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : undefined;
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : undefined;
        message.all = (_c = object.all) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseResponseExecution() {
    return { method: undefined, service: undefined, all: undefined };
}
exports.ResponseExecution = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.method !== undefined) {
            writer.uint32(10).string(message.method);
        }
        if (message.service !== undefined) {
            writer.uint32(18).string(message.service);
        }
        if (message.all !== undefined) {
            writer.uint32(24).bool(message.all);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseExecution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.all = reader.bool();
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
            method: isSet(object.method) ? globalThis.String(object.method) : undefined,
            service: isSet(object.service) ? globalThis.String(object.service) : undefined,
            all: isSet(object.all) ? globalThis.Boolean(object.all) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.method !== undefined) {
            obj.method = message.method;
        }
        if (message.service !== undefined) {
            obj.service = message.service;
        }
        if (message.all !== undefined) {
            obj.all = message.all;
        }
        return obj;
    },
    create(base) {
        return exports.ResponseExecution.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseResponseExecution();
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : undefined;
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : undefined;
        message.all = (_c = object.all) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseFunctionExecution() {
    return { name: "" };
}
exports.FunctionExecution = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFunctionExecution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.FunctionExecution.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFunctionExecution();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEventExecution() {
    return { event: undefined, group: undefined, all: undefined };
}
exports.EventExecution = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.event !== undefined) {
            writer.uint32(10).string(message.event);
        }
        if (message.group !== undefined) {
            writer.uint32(18).string(message.group);
        }
        if (message.all !== undefined) {
            writer.uint32(24).bool(message.all);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExecution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.event = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.group = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.all = reader.bool();
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
            event: isSet(object.event) ? globalThis.String(object.event) : undefined,
            group: isSet(object.group) ? globalThis.String(object.group) : undefined,
            all: isSet(object.all) ? globalThis.Boolean(object.all) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.event !== undefined) {
            obj.event = message.event;
        }
        if (message.group !== undefined) {
            obj.group = message.group;
        }
        if (message.all !== undefined) {
            obj.all = message.all;
        }
        return obj;
    },
    create(base) {
        return exports.EventExecution.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventExecution();
        message.event = (_a = object.event) !== null && _a !== void 0 ? _a : undefined;
        message.group = (_b = object.group) !== null && _b !== void 0 ? _b : undefined;
        message.all = (_c = object.all) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=execution.js.map