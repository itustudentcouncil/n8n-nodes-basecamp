"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZITADELActionsDefinition = exports.ListExecutionServicesResponse = exports.ListExecutionServicesRequest = exports.ListExecutionMethodsResponse = exports.ListExecutionMethodsRequest = exports.ListExecutionFunctionsResponse = exports.ListExecutionFunctionsRequest = exports.SearchExecutionsResponse = exports.SearchExecutionsRequest = exports.SetExecutionResponse = exports.SetExecutionRequest = exports.SearchTargetsResponse = exports.SearchTargetsRequest = exports.GetTargetResponse = exports.GetTargetRequest = exports.DeleteTargetResponse = exports.DeleteTargetRequest = exports.PatchTargetResponse = exports.PatchTargetRequest = exports.CreateTargetResponse = exports.CreateTargetRequest = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../../object/v3alpha/object.js");
const object_js_2 = require("../../object/v3alpha/object.js");
const execution_js_1 = require("./execution.js");
const query_js_1 = require("./query.js");
const target_js_1 = require("./target.js");
exports.protobufPackage = "zitadel.resources.action.v3alpha";
function createBaseCreateTargetRequest() {
    return { instance: undefined, target: undefined };
}
exports.CreateTargetRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.target !== undefined) {
            target_js_1.Target.encode(message.target, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTargetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.target = target_js_1.Target.decode(reader, reader.uint32());
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            target: isSet(object.target) ? target_js_1.Target.fromJSON(object.target) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.target !== undefined) {
            obj.target = target_js_1.Target.toJSON(message.target);
        }
        return obj;
    },
    create(base) {
        return exports.CreateTargetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateTargetRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.target = (object.target !== undefined && object.target !== null)
            ? target_js_1.Target.fromPartial(object.target)
            : undefined;
        return message;
    },
};
function createBaseCreateTargetResponse() {
    return { details: undefined };
}
exports.CreateTargetResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTargetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.CreateTargetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateTargetResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBasePatchTargetRequest() {
    return { instance: undefined, id: "", target: undefined };
}
exports.PatchTargetRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.target !== undefined) {
            target_js_1.PatchTarget.encode(message.target, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchTargetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.target = target_js_1.PatchTarget.decode(reader, reader.uint32());
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            target: isSet(object.target) ? target_js_1.PatchTarget.fromJSON(object.target) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.target !== undefined) {
            obj.target = target_js_1.PatchTarget.toJSON(message.target);
        }
        return obj;
    },
    create(base) {
        return exports.PatchTargetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePatchTargetRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.target = (object.target !== undefined && object.target !== null)
            ? target_js_1.PatchTarget.fromPartial(object.target)
            : undefined;
        return message;
    },
};
function createBasePatchTargetResponse() {
    return { details: undefined };
}
exports.PatchTargetResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchTargetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.PatchTargetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePatchTargetResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseDeleteTargetRequest() {
    return { instance: undefined, id: "" };
}
exports.DeleteTargetRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteTargetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteTargetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteTargetRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteTargetResponse() {
    return { details: undefined };
}
exports.DeleteTargetResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteTargetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.DeleteTargetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDeleteTargetResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseGetTargetRequest() {
    return { instance: undefined, id: "" };
}
exports.GetTargetRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTargetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GetTargetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTargetRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTargetResponse() {
    return { target: undefined };
}
exports.GetTargetResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.target !== undefined) {
            target_js_1.GetTarget.encode(message.target, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTargetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.target = target_js_1.GetTarget.decode(reader, reader.uint32());
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
        return { target: isSet(object.target) ? target_js_1.GetTarget.fromJSON(object.target) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.target !== undefined) {
            obj.target = target_js_1.GetTarget.toJSON(message.target);
        }
        return obj;
    },
    create(base) {
        return exports.GetTargetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetTargetResponse();
        message.target = (object.target !== undefined && object.target !== null)
            ? target_js_1.GetTarget.fromPartial(object.target)
            : undefined;
        return message;
    },
};
function createBaseSearchTargetsRequest() {
    return { instance: undefined, query: undefined, sortingColumn: undefined, filters: [] };
}
exports.SearchTargetsRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.query !== undefined) {
            object_js_2.SearchQuery.encode(message.query, writer.uint32(18).fork()).join();
        }
        if (message.sortingColumn !== undefined) {
            writer.uint32(24).int32(message.sortingColumn);
        }
        for (const v of message.filters) {
            query_js_1.TargetSearchFilter.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchTargetsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.query = object_js_2.SearchQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.filters.push(query_js_1.TargetSearchFilter.decode(reader, reader.uint32()));
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            query: isSet(object.query) ? object_js_2.SearchQuery.fromJSON(object.query) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, query_js_1.targetFieldNameFromJSON)(object.sortingColumn) : undefined,
            filters: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map((e) => query_js_1.TargetSearchFilter.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.query !== undefined) {
            obj.query = object_js_2.SearchQuery.toJSON(message.query);
        }
        if (message.sortingColumn !== undefined) {
            obj.sortingColumn = (0, query_js_1.targetFieldNameToJSON)(message.sortingColumn);
        }
        if ((_a = message.filters) === null || _a === void 0 ? void 0 : _a.length) {
            obj.filters = message.filters.map((e) => query_js_1.TargetSearchFilter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchTargetsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSearchTargetsRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? object_js_2.SearchQuery.fromPartial(object.query)
            : undefined;
        message.sortingColumn = (_a = object.sortingColumn) !== null && _a !== void 0 ? _a : undefined;
        message.filters = ((_b = object.filters) === null || _b === void 0 ? void 0 : _b.map((e) => query_js_1.TargetSearchFilter.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSearchTargetsResponse() {
    return { details: undefined, result: [] };
}
exports.SearchTargetsResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.ListDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        for (const v of message.result) {
            target_js_1.GetTarget.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchTargetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(target_js_1.GetTarget.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_js_2.ListDetails.fromJSON(object.details) : undefined,
            result: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.result) ? object.result.map((e) => target_js_1.GetTarget.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.ListDetails.toJSON(message.details);
        }
        if ((_a = message.result) === null || _a === void 0 ? void 0 : _a.length) {
            obj.result = message.result.map((e) => target_js_1.GetTarget.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchTargetsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSearchTargetsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = ((_a = object.result) === null || _a === void 0 ? void 0 : _a.map((e) => target_js_1.GetTarget.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSetExecutionRequest() {
    return { instance: undefined, condition: undefined, execution: undefined };
}
exports.SetExecutionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.condition !== undefined) {
            execution_js_1.Condition.encode(message.condition, writer.uint32(18).fork()).join();
        }
        if (message.execution !== undefined) {
            execution_js_1.Execution.encode(message.execution, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetExecutionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.condition = execution_js_1.Condition.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.execution = execution_js_1.Execution.decode(reader, reader.uint32());
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            condition: isSet(object.condition) ? execution_js_1.Condition.fromJSON(object.condition) : undefined,
            execution: isSet(object.execution) ? execution_js_1.Execution.fromJSON(object.execution) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.condition !== undefined) {
            obj.condition = execution_js_1.Condition.toJSON(message.condition);
        }
        if (message.execution !== undefined) {
            obj.execution = execution_js_1.Execution.toJSON(message.execution);
        }
        return obj;
    },
    create(base) {
        return exports.SetExecutionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetExecutionRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.condition = (object.condition !== undefined && object.condition !== null)
            ? execution_js_1.Condition.fromPartial(object.condition)
            : undefined;
        message.execution = (object.execution !== undefined && object.execution !== null)
            ? execution_js_1.Execution.fromPartial(object.execution)
            : undefined;
        return message;
    },
};
function createBaseSetExecutionResponse() {
    return { details: undefined };
}
exports.SetExecutionResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetExecutionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_js_2.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.SetExecutionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetExecutionResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSearchExecutionsRequest() {
    return { instance: undefined, query: undefined, sortingColumn: undefined, filters: [] };
}
exports.SearchExecutionsRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.instance !== undefined) {
            object_js_1.Instance.encode(message.instance, writer.uint32(10).fork()).join();
        }
        if (message.query !== undefined) {
            object_js_2.SearchQuery.encode(message.query, writer.uint32(18).fork()).join();
        }
        if (message.sortingColumn !== undefined) {
            writer.uint32(24).int32(message.sortingColumn);
        }
        for (const v of message.filters) {
            query_js_1.ExecutionSearchFilter.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchExecutionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = object_js_1.Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.query = object_js_2.SearchQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.filters.push(query_js_1.ExecutionSearchFilter.decode(reader, reader.uint32()));
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
            instance: isSet(object.instance) ? object_js_1.Instance.fromJSON(object.instance) : undefined,
            query: isSet(object.query) ? object_js_2.SearchQuery.fromJSON(object.query) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, query_js_1.executionFieldNameFromJSON)(object.sortingColumn) : undefined,
            filters: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map((e) => query_js_1.ExecutionSearchFilter.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.instance !== undefined) {
            obj.instance = object_js_1.Instance.toJSON(message.instance);
        }
        if (message.query !== undefined) {
            obj.query = object_js_2.SearchQuery.toJSON(message.query);
        }
        if (message.sortingColumn !== undefined) {
            obj.sortingColumn = (0, query_js_1.executionFieldNameToJSON)(message.sortingColumn);
        }
        if ((_a = message.filters) === null || _a === void 0 ? void 0 : _a.length) {
            obj.filters = message.filters.map((e) => query_js_1.ExecutionSearchFilter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchExecutionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSearchExecutionsRequest();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? object_js_1.Instance.fromPartial(object.instance)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? object_js_2.SearchQuery.fromPartial(object.query)
            : undefined;
        message.sortingColumn = (_a = object.sortingColumn) !== null && _a !== void 0 ? _a : undefined;
        message.filters = ((_b = object.filters) === null || _b === void 0 ? void 0 : _b.map((e) => query_js_1.ExecutionSearchFilter.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSearchExecutionsResponse() {
    return { details: undefined, result: [] };
}
exports.SearchExecutionsResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_2.ListDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        for (const v of message.result) {
            execution_js_1.GetExecution.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchExecutionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_2.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(execution_js_1.GetExecution.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_js_2.ListDetails.fromJSON(object.details) : undefined,
            result: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.result) ? object.result.map((e) => execution_js_1.GetExecution.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_2.ListDetails.toJSON(message.details);
        }
        if ((_a = message.result) === null || _a === void 0 ? void 0 : _a.length) {
            obj.result = message.result.map((e) => execution_js_1.GetExecution.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SearchExecutionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSearchExecutionsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_2.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = ((_a = object.result) === null || _a === void 0 ? void 0 : _a.map((e) => execution_js_1.GetExecution.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListExecutionFunctionsRequest() {
    return {};
}
exports.ListExecutionFunctionsRequest = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListExecutionFunctionsRequest();
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
        return exports.ListExecutionFunctionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListExecutionFunctionsRequest();
        return message;
    },
};
function createBaseListExecutionFunctionsResponse() {
    return { functions: [] };
}
exports.ListExecutionFunctionsResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.functions) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListExecutionFunctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.functions.push(reader.string());
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
            functions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.functions)
                ? object.functions.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.functions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.functions = message.functions;
        }
        return obj;
    },
    create(base) {
        return exports.ListExecutionFunctionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListExecutionFunctionsResponse();
        message.functions = ((_a = object.functions) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseListExecutionMethodsRequest() {
    return {};
}
exports.ListExecutionMethodsRequest = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListExecutionMethodsRequest();
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
        return exports.ListExecutionMethodsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListExecutionMethodsRequest();
        return message;
    },
};
function createBaseListExecutionMethodsResponse() {
    return { methods: [] };
}
exports.ListExecutionMethodsResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.methods) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListExecutionMethodsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.methods.push(reader.string());
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
            methods: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.methods) === null || _a === void 0 ? void 0 : _a.length) {
            obj.methods = message.methods;
        }
        return obj;
    },
    create(base) {
        return exports.ListExecutionMethodsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListExecutionMethodsResponse();
        message.methods = ((_a = object.methods) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseListExecutionServicesRequest() {
    return {};
}
exports.ListExecutionServicesRequest = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListExecutionServicesRequest();
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
        return exports.ListExecutionServicesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListExecutionServicesRequest();
        return message;
    },
};
function createBaseListExecutionServicesResponse() {
    return { services: [] };
}
exports.ListExecutionServicesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.services) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListExecutionServicesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.services.push(reader.string());
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
            services: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.services) ? object.services.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.services) === null || _a === void 0 ? void 0 : _a.length) {
            obj.services = message.services;
        }
        return obj;
    },
    create(base) {
        return exports.ListExecutionServicesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListExecutionServicesResponse();
        message.services = ((_a = object.services) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
exports.ZITADELActionsDefinition = {
    name: "ZITADELActions",
    fullName: "zitadel.resources.action.v3alpha.ZITADELActions",
    methods: {
        createTarget: {
            name: "CreateTarget",
            requestType: exports.CreateTargetRequest,
            requestStream: false,
            responseType: exports.CreateTargetResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            85,
                            74,
                            83,
                            10,
                            3,
                            50,
                            48,
                            49,
                            18,
                            76,
                            10,
                            27,
                            84,
                            97,
                            114,
                            103,
                            101,
                            116,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            99,
                            114,
                            101,
                            97,
                            116,
                            101,
                            100,
                            18,
                            45,
                            10,
                            43,
                            26,
                            41,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            84,
                            97,
                            114,
                            103,
                            101,
                            116,
                            82,
                            101,
                            115,
                            112,
                            111,
                            110,
                            115,
                            101,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            28,
                            10,
                            21,
                            10,
                            19,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            46,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                            18,
                            3,
                            8,
                            201,
                            1,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            44,
                            58,
                            6,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            34,
                            34,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            115,
                        ]),
                    ],
                },
            },
        },
        patchTarget: {
            name: "PatchTarget",
            requestType: exports.PatchTargetRequest,
            requestStream: false,
            responseType: exports.PatchTargetResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            56,
                            74,
                            54,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            47,
                            10,
                            45,
                            84,
                            97,
                            114,
                            103,
                            101,
                            116,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            117,
                            112,
                            100,
                            97,
                            116,
                            101,
                            100,
                            32,
                            111,
                            114,
                            32,
                            108,
                            101,
                            102,
                            116,
                            32,
                            117,
                            110,
                            99,
                            104,
                            97,
                            110,
                            103,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            23,
                            10,
                            21,
                            10,
                            19,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            46,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            49,
                            58,
                            6,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            50,
                            39,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        deleteTarget: {
            name: "DeleteTarget",
            requestType: exports.DeleteTargetRequest,
            requestStream: false,
            responseType: exports.DeleteTargetResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            38,
                            74,
                            36,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            29,
                            10,
                            27,
                            84,
                            97,
                            114,
                            103,
                            101,
                            116,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            24,
                            10,
                            22,
                            10,
                            20,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            46,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            46,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            41,
                            42,
                            39,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        getTarget: {
            name: "GetTarget",
            requestType: exports.GetTargetRequest,
            requestStream: false,
            responseType: exports.GetTargetResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            40,
                            74,
                            38,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            31,
                            10,
                            29,
                            84,
                            97,
                            114,
                            103,
                            101,
                            116,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            114,
                            101,
                            116,
                            114,
                            105,
                            101,
                            118,
                            101,
                            100,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            10,
                            18,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            46,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            41,
                            18,
                            39,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            115,
                            47,
                            123,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        searchTargets: {
            name: "SearchTargets",
            requestType: exports.SearchTargetsRequest,
            requestStream: false,
            responseType: exports.SearchTargetsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            109,
                            74,
                            49,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            42,
                            10,
                            40,
                            65,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            97,
                            108,
                            108,
                            32,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            115,
                            32,
                            109,
                            97,
                            116,
                            99,
                            104,
                            105,
                            110,
                            103,
                            32,
                            116,
                            104,
                            101,
                            32,
                            113,
                            117,
                            101,
                            114,
                            121,
                            74,
                            56,
                            10,
                            3,
                            52,
                            48,
                            48,
                            18,
                            49,
                            10,
                            18,
                            105,
                            110,
                            118,
                            97,
                            108,
                            105,
                            100,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            113,
                            117,
                            101,
                            114,
                            121,
                            18,
                            27,
                            10,
                            25,
                            26,
                            23,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            114,
                            112,
                            99,
                            83,
                            116,
                            97,
                            116,
                            117,
                            115,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            10,
                            18,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            46,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            53,
                            58,
                            7,
                            102,
                            105,
                            108,
                            116,
                            101,
                            114,
                            115,
                            34,
                            42,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        setExecution: {
            name: "SetExecution",
            requestType: exports.SetExecutionRequest,
            requestStream: false,
            responseType: exports.SetExecutionResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            106,
                            74,
                            104,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            97,
                            10,
                            48,
                            69,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                            32,
                            117,
                            112,
                            100,
                            97,
                            116,
                            101,
                            100,
                            32,
                            111,
                            114,
                            32,
                            108,
                            101,
                            102,
                            116,
                            32,
                            117,
                            110,
                            99,
                            104,
                            97,
                            110,
                            103,
                            101,
                            100,
                            18,
                            45,
                            10,
                            43,
                            26,
                            41,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            83,
                            101,
                            116,
                            69,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            82,
                            101,
                            115,
                            112,
                            111,
                            110,
                            115,
                            101,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            31,
                            10,
                            24,
                            10,
                            22,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            46,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                            18,
                            3,
                            8,
                            201,
                            1,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            42,
                            58,
                            1,
                            42,
                            26,
                            37,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            115,
                        ]),
                    ],
                },
            },
        },
        searchExecutions: {
            name: "SearchExecutions",
            requestType: exports.SearchExecutionsRequest,
            requestStream: false,
            responseType: exports.SearchExecutionsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            121,
                            74,
                            61,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            54,
                            10,
                            52,
                            65,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            97,
                            108,
                            108,
                            32,
                            110,
                            111,
                            110,
                            32,
                            110,
                            111,
                            111,
                            112,
                            32,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            115,
                            32,
                            109,
                            97,
                            116,
                            99,
                            104,
                            105,
                            110,
                            103,
                            32,
                            116,
                            104,
                            101,
                            32,
                            113,
                            117,
                            101,
                            114,
                            121,
                            74,
                            56,
                            10,
                            3,
                            52,
                            48,
                            48,
                            18,
                            49,
                            10,
                            18,
                            105,
                            110,
                            118,
                            97,
                            108,
                            105,
                            100,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            113,
                            117,
                            101,
                            114,
                            121,
                            18,
                            27,
                            10,
                            25,
                            26,
                            23,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            114,
                            112,
                            99,
                            83,
                            116,
                            97,
                            116,
                            117,
                            115,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            25,
                            10,
                            23,
                            10,
                            21,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            46,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            56,
                            58,
                            7,
                            102,
                            105,
                            108,
                            116,
                            101,
                            114,
                            115,
                            34,
                            45,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        listExecutionFunctions: {
            name: "ListExecutionFunctions",
            requestType: exports.ListExecutionFunctionsRequest,
            requestStream: false,
            responseType: exports.ListExecutionFunctionsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            42,
                            74,
                            40,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            33,
                            10,
                            31,
                            76,
                            105,
                            115,
                            116,
                            32,
                            97,
                            108,
                            108,
                            32,
                            102,
                            117,
                            110,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            49,
                            18,
                            47,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            102,
                            117,
                            110,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                        ]),
                    ],
                },
            },
        },
        listExecutionMethods: {
            name: "ListExecutionMethods",
            requestType: exports.ListExecutionMethodsRequest,
            requestStream: false,
            responseType: exports.ListExecutionMethodsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            40,
                            74,
                            38,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            31,
                            10,
                            29,
                            76,
                            105,
                            115,
                            116,
                            32,
                            97,
                            108,
                            108,
                            32,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            115,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            47,
                            18,
                            45,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            115,
                        ]),
                    ],
                },
            },
        },
        listExecutionServices: {
            name: "ListExecutionServices",
            requestType: exports.ListExecutionServicesRequest,
            requestStream: false,
            responseType: exports.ListExecutionServicesResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            41,
                            74,
                            39,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            32,
                            10,
                            30,
                            76,
                            105,
                            115,
                            116,
                            32,
                            97,
                            108,
                            108,
                            32,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            115,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            102,
                            117,
                            108,
                            108,
                            121,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            48,
                            18,
                            46,
                            47,
                            114,
                            101,
                            115,
                            111,
                            117,
                            114,
                            99,
                            101,
                            115,
                            47,
                            118,
                            51,
                            97,
                            108,
                            112,
                            104,
                            97,
                            47,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            101,
                            120,
                            101,
                            99,
                            117,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            115,
                        ]),
                    ],
                },
            },
        },
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=action_service.js.map