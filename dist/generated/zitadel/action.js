"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerAction = exports.TriggerType = exports.FlowType = exports.Flow = exports.ActionStateQuery = exports.ActionNameQuery = exports.ActionIDQuery = exports.Action = exports.flowStateToJSON = exports.flowStateFromJSON = exports.FlowState = exports.actionFieldNameToJSON = exports.actionFieldNameFromJSON = exports.ActionFieldName = exports.actionStateToJSON = exports.actionStateFromJSON = exports.ActionState = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const duration_js_1 = require("../google/protobuf/duration.js");
const message_js_1 = require("./message.js");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.action.v1";
var ActionState;
(function (ActionState) {
    ActionState[ActionState["ACTION_STATE_UNSPECIFIED"] = 0] = "ACTION_STATE_UNSPECIFIED";
    ActionState[ActionState["ACTION_STATE_INACTIVE"] = 1] = "ACTION_STATE_INACTIVE";
    ActionState[ActionState["ACTION_STATE_ACTIVE"] = 2] = "ACTION_STATE_ACTIVE";
    ActionState[ActionState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ActionState = exports.ActionState || (exports.ActionState = {}));
function actionStateFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_STATE_UNSPECIFIED":
            return ActionState.ACTION_STATE_UNSPECIFIED;
        case 1:
        case "ACTION_STATE_INACTIVE":
            return ActionState.ACTION_STATE_INACTIVE;
        case 2:
        case "ACTION_STATE_ACTIVE":
            return ActionState.ACTION_STATE_ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ActionState.UNRECOGNIZED;
    }
}
exports.actionStateFromJSON = actionStateFromJSON;
function actionStateToJSON(object) {
    switch (object) {
        case ActionState.ACTION_STATE_UNSPECIFIED:
            return "ACTION_STATE_UNSPECIFIED";
        case ActionState.ACTION_STATE_INACTIVE:
            return "ACTION_STATE_INACTIVE";
        case ActionState.ACTION_STATE_ACTIVE:
            return "ACTION_STATE_ACTIVE";
        case ActionState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.actionStateToJSON = actionStateToJSON;
var ActionFieldName;
(function (ActionFieldName) {
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_UNSPECIFIED"] = 0] = "ACTION_FIELD_NAME_UNSPECIFIED";
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_NAME"] = 1] = "ACTION_FIELD_NAME_NAME";
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_ID"] = 2] = "ACTION_FIELD_NAME_ID";
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_STATE"] = 3] = "ACTION_FIELD_NAME_STATE";
    ActionFieldName[ActionFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ActionFieldName = exports.ActionFieldName || (exports.ActionFieldName = {}));
function actionFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_FIELD_NAME_UNSPECIFIED":
            return ActionFieldName.ACTION_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "ACTION_FIELD_NAME_NAME":
            return ActionFieldName.ACTION_FIELD_NAME_NAME;
        case 2:
        case "ACTION_FIELD_NAME_ID":
            return ActionFieldName.ACTION_FIELD_NAME_ID;
        case 3:
        case "ACTION_FIELD_NAME_STATE":
            return ActionFieldName.ACTION_FIELD_NAME_STATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ActionFieldName.UNRECOGNIZED;
    }
}
exports.actionFieldNameFromJSON = actionFieldNameFromJSON;
function actionFieldNameToJSON(object) {
    switch (object) {
        case ActionFieldName.ACTION_FIELD_NAME_UNSPECIFIED:
            return "ACTION_FIELD_NAME_UNSPECIFIED";
        case ActionFieldName.ACTION_FIELD_NAME_NAME:
            return "ACTION_FIELD_NAME_NAME";
        case ActionFieldName.ACTION_FIELD_NAME_ID:
            return "ACTION_FIELD_NAME_ID";
        case ActionFieldName.ACTION_FIELD_NAME_STATE:
            return "ACTION_FIELD_NAME_STATE";
        case ActionFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.actionFieldNameToJSON = actionFieldNameToJSON;
var FlowState;
(function (FlowState) {
    FlowState[FlowState["FLOW_STATE_UNSPECIFIED"] = 0] = "FLOW_STATE_UNSPECIFIED";
    FlowState[FlowState["FLOW_STATE_INACTIVE"] = 1] = "FLOW_STATE_INACTIVE";
    FlowState[FlowState["FLOW_STATE_ACTIVE"] = 2] = "FLOW_STATE_ACTIVE";
    FlowState[FlowState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FlowState = exports.FlowState || (exports.FlowState = {}));
function flowStateFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOW_STATE_UNSPECIFIED":
            return FlowState.FLOW_STATE_UNSPECIFIED;
        case 1:
        case "FLOW_STATE_INACTIVE":
            return FlowState.FLOW_STATE_INACTIVE;
        case 2:
        case "FLOW_STATE_ACTIVE":
            return FlowState.FLOW_STATE_ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FlowState.UNRECOGNIZED;
    }
}
exports.flowStateFromJSON = flowStateFromJSON;
function flowStateToJSON(object) {
    switch (object) {
        case FlowState.FLOW_STATE_UNSPECIFIED:
            return "FLOW_STATE_UNSPECIFIED";
        case FlowState.FLOW_STATE_INACTIVE:
            return "FLOW_STATE_INACTIVE";
        case FlowState.FLOW_STATE_ACTIVE:
            return "FLOW_STATE_ACTIVE";
        case FlowState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.flowStateToJSON = flowStateToJSON;
function createBaseAction() {
    return { id: "", details: undefined, state: 0, name: "", script: "", timeout: undefined, allowedToFail: false };
}
exports.Action = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.script !== "") {
            writer.uint32(42).string(message.script);
        }
        if (message.timeout !== undefined) {
            duration_js_1.Duration.encode(message.timeout, writer.uint32(50).fork()).join();
        }
        if (message.allowedToFail !== false) {
            writer.uint32(56).bool(message.allowedToFail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction();
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
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.script = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.timeout = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.allowedToFail = reader.bool();
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
            state: isSet(object.state) ? actionStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            script: isSet(object.script) ? globalThis.String(object.script) : "",
            timeout: isSet(object.timeout) ? duration_js_1.Duration.fromJSON(object.timeout) : undefined,
            allowedToFail: isSet(object.allowedToFail) ? globalThis.Boolean(object.allowedToFail) : false,
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
        if (message.state !== 0) {
            obj.state = actionStateToJSON(message.state);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.script !== "") {
            obj.script = message.script;
        }
        if (message.timeout !== undefined) {
            obj.timeout = duration_js_1.Duration.toJSON(message.timeout);
        }
        if (message.allowedToFail !== false) {
            obj.allowedToFail = message.allowedToFail;
        }
        return obj;
    },
    create(base) {
        return exports.Action.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAction();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.script = (_d = object.script) !== null && _d !== void 0 ? _d : "";
        message.timeout = (object.timeout !== undefined && object.timeout !== null)
            ? duration_js_1.Duration.fromPartial(object.timeout)
            : undefined;
        message.allowedToFail = (_e = object.allowedToFail) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseActionIDQuery() {
    return { id: "" };
}
exports.ActionIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActionIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.ActionIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActionIDQuery();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseActionNameQuery() {
    return { name: "", method: 0 };
}
exports.ActionNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActionNameQuery();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.ActionNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseActionNameQuery();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseActionStateQuery() {
    return { state: 0 };
}
exports.ActionStateQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActionStateQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
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
        return { state: isSet(object.state) ? actionStateFromJSON(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = actionStateToJSON(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.ActionStateQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActionStateQuery();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseFlow() {
    return { type: undefined, details: undefined, state: 0, triggerActions: [] };
}
exports.Flow = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== undefined) {
            exports.FlowType.encode(message.type, writer.uint32(10).fork()).join();
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        for (const v of message.triggerActions) {
            exports.TriggerAction.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = exports.FlowType.decode(reader, reader.uint32());
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
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.triggerActions.push(exports.TriggerAction.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? exports.FlowType.fromJSON(object.type) : undefined,
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? flowStateFromJSON(object.state) : 0,
            triggerActions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.triggerActions)
                ? object.triggerActions.map((e) => exports.TriggerAction.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.type !== undefined) {
            obj.type = exports.FlowType.toJSON(message.type);
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = flowStateToJSON(message.state);
        }
        if ((_a = message.triggerActions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.triggerActions = message.triggerActions.map((e) => exports.TriggerAction.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Flow.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFlow();
        message.type = (object.type !== undefined && object.type !== null) ? exports.FlowType.fromPartial(object.type) : undefined;
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.triggerActions = ((_b = object.triggerActions) === null || _b === void 0 ? void 0 : _b.map((e) => exports.TriggerAction.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFlowType() {
    return { id: "", name: undefined };
}
exports.FlowType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== undefined) {
            message_js_1.LocalizedMessage.encode(message.name, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlowType();
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
                    message.name = message_js_1.LocalizedMessage.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? message_js_1.LocalizedMessage.fromJSON(object.name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== undefined) {
            obj.name = message_js_1.LocalizedMessage.toJSON(message.name);
        }
        return obj;
    },
    create(base) {
        return exports.FlowType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFlowType();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (object.name !== undefined && object.name !== null)
            ? message_js_1.LocalizedMessage.fromPartial(object.name)
            : undefined;
        return message;
    },
};
function createBaseTriggerType() {
    return { id: "", name: undefined };
}
exports.TriggerType = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== undefined) {
            message_js_1.LocalizedMessage.encode(message.name, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTriggerType();
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
                    message.name = message_js_1.LocalizedMessage.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? message_js_1.LocalizedMessage.fromJSON(object.name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== undefined) {
            obj.name = message_js_1.LocalizedMessage.toJSON(message.name);
        }
        return obj;
    },
    create(base) {
        return exports.TriggerType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTriggerType();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (object.name !== undefined && object.name !== null)
            ? message_js_1.LocalizedMessage.fromPartial(object.name)
            : undefined;
        return message;
    },
};
function createBaseTriggerAction() {
    return { triggerType: undefined, actions: [] };
}
exports.TriggerAction = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.triggerType !== undefined) {
            exports.TriggerType.encode(message.triggerType, writer.uint32(10).fork()).join();
        }
        for (const v of message.actions) {
            exports.Action.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTriggerAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.triggerType = exports.TriggerType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.actions.push(exports.Action.decode(reader, reader.uint32()));
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
            triggerType: isSet(object.triggerType) ? exports.TriggerType.fromJSON(object.triggerType) : undefined,
            actions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.actions) ? object.actions.map((e) => exports.Action.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.triggerType !== undefined) {
            obj.triggerType = exports.TriggerType.toJSON(message.triggerType);
        }
        if ((_a = message.actions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.actions = message.actions.map((e) => exports.Action.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.TriggerAction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTriggerAction();
        message.triggerType = (object.triggerType !== undefined && object.triggerType !== null)
            ? exports.TriggerType.fromPartial(object.triggerType)
            : undefined;
        message.actions = ((_a = object.actions) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Action.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=action.js.map