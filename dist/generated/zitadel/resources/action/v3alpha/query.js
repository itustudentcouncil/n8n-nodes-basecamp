"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InTargetIDsFilter = exports.TargetNameFilter = exports.TargetSearchFilter = exports.IncludeFilter = exports.TargetFilter = exports.ExecutionTypeFilter = exports.InConditionsFilter = exports.ExecutionSearchFilter = exports.executionFieldNameToJSON = exports.executionFieldNameFromJSON = exports.ExecutionFieldName = exports.targetFieldNameToJSON = exports.targetFieldNameFromJSON = exports.TargetFieldName = exports.executionTypeToJSON = exports.executionTypeFromJSON = exports.ExecutionType = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v3alpha/object.js");
const execution_js_1 = require("./execution.js");
exports.protobufPackage = "zitadel.resources.action.v3alpha";
var ExecutionType;
(function (ExecutionType) {
    ExecutionType[ExecutionType["EXECUTION_TYPE_UNSPECIFIED"] = 0] = "EXECUTION_TYPE_UNSPECIFIED";
    ExecutionType[ExecutionType["EXECUTION_TYPE_REQUEST"] = 1] = "EXECUTION_TYPE_REQUEST";
    ExecutionType[ExecutionType["EXECUTION_TYPE_RESPONSE"] = 2] = "EXECUTION_TYPE_RESPONSE";
    ExecutionType[ExecutionType["EXECUTION_TYPE_EVENT"] = 3] = "EXECUTION_TYPE_EVENT";
    ExecutionType[ExecutionType["EXECUTION_TYPE_FUNCTION"] = 4] = "EXECUTION_TYPE_FUNCTION";
    ExecutionType[ExecutionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecutionType = exports.ExecutionType || (exports.ExecutionType = {}));
function executionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "EXECUTION_TYPE_UNSPECIFIED":
            return ExecutionType.EXECUTION_TYPE_UNSPECIFIED;
        case 1:
        case "EXECUTION_TYPE_REQUEST":
            return ExecutionType.EXECUTION_TYPE_REQUEST;
        case 2:
        case "EXECUTION_TYPE_RESPONSE":
            return ExecutionType.EXECUTION_TYPE_RESPONSE;
        case 3:
        case "EXECUTION_TYPE_EVENT":
            return ExecutionType.EXECUTION_TYPE_EVENT;
        case 4:
        case "EXECUTION_TYPE_FUNCTION":
            return ExecutionType.EXECUTION_TYPE_FUNCTION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExecutionType.UNRECOGNIZED;
    }
}
exports.executionTypeFromJSON = executionTypeFromJSON;
function executionTypeToJSON(object) {
    switch (object) {
        case ExecutionType.EXECUTION_TYPE_UNSPECIFIED:
            return "EXECUTION_TYPE_UNSPECIFIED";
        case ExecutionType.EXECUTION_TYPE_REQUEST:
            return "EXECUTION_TYPE_REQUEST";
        case ExecutionType.EXECUTION_TYPE_RESPONSE:
            return "EXECUTION_TYPE_RESPONSE";
        case ExecutionType.EXECUTION_TYPE_EVENT:
            return "EXECUTION_TYPE_EVENT";
        case ExecutionType.EXECUTION_TYPE_FUNCTION:
            return "EXECUTION_TYPE_FUNCTION";
        case ExecutionType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.executionTypeToJSON = executionTypeToJSON;
var TargetFieldName;
(function (TargetFieldName) {
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_UNSPECIFIED"] = 0] = "TARGET_FIELD_NAME_UNSPECIFIED";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_ID"] = 1] = "TARGET_FIELD_NAME_ID";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_CREATED_DATE"] = 2] = "TARGET_FIELD_NAME_CREATED_DATE";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_CHANGED_DATE"] = 3] = "TARGET_FIELD_NAME_CHANGED_DATE";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_NAME"] = 4] = "TARGET_FIELD_NAME_NAME";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_TARGET_TYPE"] = 5] = "TARGET_FIELD_NAME_TARGET_TYPE";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_URL"] = 6] = "TARGET_FIELD_NAME_URL";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_TIMEOUT"] = 7] = "TARGET_FIELD_NAME_TIMEOUT";
    TargetFieldName[TargetFieldName["TARGET_FIELD_NAME_INTERRUPT_ON_ERROR"] = 8] = "TARGET_FIELD_NAME_INTERRUPT_ON_ERROR";
    TargetFieldName[TargetFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TargetFieldName = exports.TargetFieldName || (exports.TargetFieldName = {}));
function targetFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "TARGET_FIELD_NAME_UNSPECIFIED":
            return TargetFieldName.TARGET_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "TARGET_FIELD_NAME_ID":
            return TargetFieldName.TARGET_FIELD_NAME_ID;
        case 2:
        case "TARGET_FIELD_NAME_CREATED_DATE":
            return TargetFieldName.TARGET_FIELD_NAME_CREATED_DATE;
        case 3:
        case "TARGET_FIELD_NAME_CHANGED_DATE":
            return TargetFieldName.TARGET_FIELD_NAME_CHANGED_DATE;
        case 4:
        case "TARGET_FIELD_NAME_NAME":
            return TargetFieldName.TARGET_FIELD_NAME_NAME;
        case 5:
        case "TARGET_FIELD_NAME_TARGET_TYPE":
            return TargetFieldName.TARGET_FIELD_NAME_TARGET_TYPE;
        case 6:
        case "TARGET_FIELD_NAME_URL":
            return TargetFieldName.TARGET_FIELD_NAME_URL;
        case 7:
        case "TARGET_FIELD_NAME_TIMEOUT":
            return TargetFieldName.TARGET_FIELD_NAME_TIMEOUT;
        case 8:
        case "TARGET_FIELD_NAME_INTERRUPT_ON_ERROR":
            return TargetFieldName.TARGET_FIELD_NAME_INTERRUPT_ON_ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TargetFieldName.UNRECOGNIZED;
    }
}
exports.targetFieldNameFromJSON = targetFieldNameFromJSON;
function targetFieldNameToJSON(object) {
    switch (object) {
        case TargetFieldName.TARGET_FIELD_NAME_UNSPECIFIED:
            return "TARGET_FIELD_NAME_UNSPECIFIED";
        case TargetFieldName.TARGET_FIELD_NAME_ID:
            return "TARGET_FIELD_NAME_ID";
        case TargetFieldName.TARGET_FIELD_NAME_CREATED_DATE:
            return "TARGET_FIELD_NAME_CREATED_DATE";
        case TargetFieldName.TARGET_FIELD_NAME_CHANGED_DATE:
            return "TARGET_FIELD_NAME_CHANGED_DATE";
        case TargetFieldName.TARGET_FIELD_NAME_NAME:
            return "TARGET_FIELD_NAME_NAME";
        case TargetFieldName.TARGET_FIELD_NAME_TARGET_TYPE:
            return "TARGET_FIELD_NAME_TARGET_TYPE";
        case TargetFieldName.TARGET_FIELD_NAME_URL:
            return "TARGET_FIELD_NAME_URL";
        case TargetFieldName.TARGET_FIELD_NAME_TIMEOUT:
            return "TARGET_FIELD_NAME_TIMEOUT";
        case TargetFieldName.TARGET_FIELD_NAME_INTERRUPT_ON_ERROR:
            return "TARGET_FIELD_NAME_INTERRUPT_ON_ERROR";
        case TargetFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.targetFieldNameToJSON = targetFieldNameToJSON;
var ExecutionFieldName;
(function (ExecutionFieldName) {
    ExecutionFieldName[ExecutionFieldName["EXECUTION_FIELD_NAME_UNSPECIFIED"] = 0] = "EXECUTION_FIELD_NAME_UNSPECIFIED";
    ExecutionFieldName[ExecutionFieldName["EXECUTION_FIELD_NAME_ID"] = 1] = "EXECUTION_FIELD_NAME_ID";
    ExecutionFieldName[ExecutionFieldName["EXECUTION_FIELD_NAME_CREATED_DATE"] = 2] = "EXECUTION_FIELD_NAME_CREATED_DATE";
    ExecutionFieldName[ExecutionFieldName["EXECUTION_FIELD_NAME_CHANGED_DATE"] = 3] = "EXECUTION_FIELD_NAME_CHANGED_DATE";
    ExecutionFieldName[ExecutionFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecutionFieldName = exports.ExecutionFieldName || (exports.ExecutionFieldName = {}));
function executionFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "EXECUTION_FIELD_NAME_UNSPECIFIED":
            return ExecutionFieldName.EXECUTION_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "EXECUTION_FIELD_NAME_ID":
            return ExecutionFieldName.EXECUTION_FIELD_NAME_ID;
        case 2:
        case "EXECUTION_FIELD_NAME_CREATED_DATE":
            return ExecutionFieldName.EXECUTION_FIELD_NAME_CREATED_DATE;
        case 3:
        case "EXECUTION_FIELD_NAME_CHANGED_DATE":
            return ExecutionFieldName.EXECUTION_FIELD_NAME_CHANGED_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExecutionFieldName.UNRECOGNIZED;
    }
}
exports.executionFieldNameFromJSON = executionFieldNameFromJSON;
function executionFieldNameToJSON(object) {
    switch (object) {
        case ExecutionFieldName.EXECUTION_FIELD_NAME_UNSPECIFIED:
            return "EXECUTION_FIELD_NAME_UNSPECIFIED";
        case ExecutionFieldName.EXECUTION_FIELD_NAME_ID:
            return "EXECUTION_FIELD_NAME_ID";
        case ExecutionFieldName.EXECUTION_FIELD_NAME_CREATED_DATE:
            return "EXECUTION_FIELD_NAME_CREATED_DATE";
        case ExecutionFieldName.EXECUTION_FIELD_NAME_CHANGED_DATE:
            return "EXECUTION_FIELD_NAME_CHANGED_DATE";
        case ExecutionFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.executionFieldNameToJSON = executionFieldNameToJSON;
function createBaseExecutionSearchFilter() {
    return {
        inConditionsFilter: undefined,
        executionTypeFilter: undefined,
        targetFilter: undefined,
        includeFilter: undefined,
    };
}
exports.ExecutionSearchFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.inConditionsFilter !== undefined) {
            exports.InConditionsFilter.encode(message.inConditionsFilter, writer.uint32(10).fork()).join();
        }
        if (message.executionTypeFilter !== undefined) {
            exports.ExecutionTypeFilter.encode(message.executionTypeFilter, writer.uint32(18).fork()).join();
        }
        if (message.targetFilter !== undefined) {
            exports.TargetFilter.encode(message.targetFilter, writer.uint32(26).fork()).join();
        }
        if (message.includeFilter !== undefined) {
            exports.IncludeFilter.encode(message.includeFilter, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutionSearchFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.inConditionsFilter = exports.InConditionsFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.executionTypeFilter = exports.ExecutionTypeFilter.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.targetFilter = exports.TargetFilter.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.includeFilter = exports.IncludeFilter.decode(reader, reader.uint32());
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
            inConditionsFilter: isSet(object.inConditionsFilter)
                ? exports.InConditionsFilter.fromJSON(object.inConditionsFilter)
                : undefined,
            executionTypeFilter: isSet(object.executionTypeFilter)
                ? exports.ExecutionTypeFilter.fromJSON(object.executionTypeFilter)
                : undefined,
            targetFilter: isSet(object.targetFilter) ? exports.TargetFilter.fromJSON(object.targetFilter) : undefined,
            includeFilter: isSet(object.includeFilter) ? exports.IncludeFilter.fromJSON(object.includeFilter) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.inConditionsFilter !== undefined) {
            obj.inConditionsFilter = exports.InConditionsFilter.toJSON(message.inConditionsFilter);
        }
        if (message.executionTypeFilter !== undefined) {
            obj.executionTypeFilter = exports.ExecutionTypeFilter.toJSON(message.executionTypeFilter);
        }
        if (message.targetFilter !== undefined) {
            obj.targetFilter = exports.TargetFilter.toJSON(message.targetFilter);
        }
        if (message.includeFilter !== undefined) {
            obj.includeFilter = exports.IncludeFilter.toJSON(message.includeFilter);
        }
        return obj;
    },
    create(base) {
        return exports.ExecutionSearchFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseExecutionSearchFilter();
        message.inConditionsFilter = (object.inConditionsFilter !== undefined && object.inConditionsFilter !== null)
            ? exports.InConditionsFilter.fromPartial(object.inConditionsFilter)
            : undefined;
        message.executionTypeFilter = (object.executionTypeFilter !== undefined && object.executionTypeFilter !== null)
            ? exports.ExecutionTypeFilter.fromPartial(object.executionTypeFilter)
            : undefined;
        message.targetFilter = (object.targetFilter !== undefined && object.targetFilter !== null)
            ? exports.TargetFilter.fromPartial(object.targetFilter)
            : undefined;
        message.includeFilter = (object.includeFilter !== undefined && object.includeFilter !== null)
            ? exports.IncludeFilter.fromPartial(object.includeFilter)
            : undefined;
        return message;
    },
};
function createBaseInConditionsFilter() {
    return { conditions: [] };
}
exports.InConditionsFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.conditions) {
            execution_js_1.Condition.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInConditionsFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.conditions.push(execution_js_1.Condition.decode(reader, reader.uint32()));
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
            conditions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.conditions)
                ? object.conditions.map((e) => execution_js_1.Condition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.conditions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.conditions = message.conditions.map((e) => execution_js_1.Condition.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.InConditionsFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInConditionsFilter();
        message.conditions = ((_a = object.conditions) === null || _a === void 0 ? void 0 : _a.map((e) => execution_js_1.Condition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseExecutionTypeFilter() {
    return { executionType: 0 };
}
exports.ExecutionTypeFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.executionType !== 0) {
            writer.uint32(8).int32(message.executionType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutionTypeFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.executionType = reader.int32();
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
        return { executionType: isSet(object.executionType) ? executionTypeFromJSON(object.executionType) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.executionType !== 0) {
            obj.executionType = executionTypeToJSON(message.executionType);
        }
        return obj;
    },
    create(base) {
        return exports.ExecutionTypeFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExecutionTypeFilter();
        message.executionType = (_a = object.executionType) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseTargetFilter() {
    return { targetId: "" };
}
exports.TargetFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.targetId !== "") {
            writer.uint32(10).string(message.targetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTargetFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.targetId = reader.string();
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
        return { targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.targetId !== "") {
            obj.targetId = message.targetId;
        }
        return obj;
    },
    create(base) {
        return exports.TargetFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTargetFilter();
        message.targetId = (_a = object.targetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseIncludeFilter() {
    return { include: undefined };
}
exports.IncludeFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.include !== undefined) {
            execution_js_1.Condition.encode(message.include, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncludeFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.include = execution_js_1.Condition.decode(reader, reader.uint32());
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
        return { include: isSet(object.include) ? execution_js_1.Condition.fromJSON(object.include) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.include !== undefined) {
            obj.include = execution_js_1.Condition.toJSON(message.include);
        }
        return obj;
    },
    create(base) {
        return exports.IncludeFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseIncludeFilter();
        message.include = (object.include !== undefined && object.include !== null)
            ? execution_js_1.Condition.fromPartial(object.include)
            : undefined;
        return message;
    },
};
function createBaseTargetSearchFilter() {
    return { targetNameFilter: undefined, inTargetIdsFilter: undefined };
}
exports.TargetSearchFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.targetNameFilter !== undefined) {
            exports.TargetNameFilter.encode(message.targetNameFilter, writer.uint32(10).fork()).join();
        }
        if (message.inTargetIdsFilter !== undefined) {
            exports.InTargetIDsFilter.encode(message.inTargetIdsFilter, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTargetSearchFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.targetNameFilter = exports.TargetNameFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.inTargetIdsFilter = exports.InTargetIDsFilter.decode(reader, reader.uint32());
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
            targetNameFilter: isSet(object.targetNameFilter) ? exports.TargetNameFilter.fromJSON(object.targetNameFilter) : undefined,
            inTargetIdsFilter: isSet(object.inTargetIdsFilter)
                ? exports.InTargetIDsFilter.fromJSON(object.inTargetIdsFilter)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.targetNameFilter !== undefined) {
            obj.targetNameFilter = exports.TargetNameFilter.toJSON(message.targetNameFilter);
        }
        if (message.inTargetIdsFilter !== undefined) {
            obj.inTargetIdsFilter = exports.InTargetIDsFilter.toJSON(message.inTargetIdsFilter);
        }
        return obj;
    },
    create(base) {
        return exports.TargetSearchFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseTargetSearchFilter();
        message.targetNameFilter = (object.targetNameFilter !== undefined && object.targetNameFilter !== null)
            ? exports.TargetNameFilter.fromPartial(object.targetNameFilter)
            : undefined;
        message.inTargetIdsFilter = (object.inTargetIdsFilter !== undefined && object.inTargetIdsFilter !== null)
            ? exports.InTargetIDsFilter.fromPartial(object.inTargetIdsFilter)
            : undefined;
        return message;
    },
};
function createBaseTargetNameFilter() {
    return { targetName: "", method: 0 };
}
exports.TargetNameFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.targetName !== "") {
            writer.uint32(10).string(message.targetName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTargetNameFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.targetName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            targetName: isSet(object.targetName) ? globalThis.String(object.targetName) : "",
            method: isSet(object.method) ? (0, object_js_1.textFilterMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.targetName !== "") {
            obj.targetName = message.targetName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textFilterMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.TargetNameFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTargetNameFilter();
        message.targetName = (_a = object.targetName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseInTargetIDsFilter() {
    return { targetIds: [] };
}
exports.InTargetIDsFilter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.targetIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInTargetIDsFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.targetIds.push(reader.string());
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
            targetIds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.targetIds)
                ? object.targetIds.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.targetIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.targetIds = message.targetIds;
        }
        return obj;
    },
    create(base) {
        return exports.InTargetIDsFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInTargetIDsFilter();
        message.targetIds = ((_a = object.targetIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map