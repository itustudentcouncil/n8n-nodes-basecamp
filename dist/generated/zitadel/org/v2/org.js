"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = exports.organizationStateToJSON = exports.organizationStateFromJSON = exports.OrganizationState = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v2/object.js");
exports.protobufPackage = "zitadel.org.v2";
var OrganizationState;
(function (OrganizationState) {
    OrganizationState[OrganizationState["ORGANIZATION_STATE_UNSPECIFIED"] = 0] = "ORGANIZATION_STATE_UNSPECIFIED";
    OrganizationState[OrganizationState["ORGANIZATION_STATE_ACTIVE"] = 1] = "ORGANIZATION_STATE_ACTIVE";
    OrganizationState[OrganizationState["ORGANIZATION_STATE_INACTIVE"] = 2] = "ORGANIZATION_STATE_INACTIVE";
    OrganizationState[OrganizationState["ORGANIZATION_STATE_REMOVED"] = 3] = "ORGANIZATION_STATE_REMOVED";
    OrganizationState[OrganizationState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrganizationState = exports.OrganizationState || (exports.OrganizationState = {}));
function organizationStateFromJSON(object) {
    switch (object) {
        case 0:
        case "ORGANIZATION_STATE_UNSPECIFIED":
            return OrganizationState.ORGANIZATION_STATE_UNSPECIFIED;
        case 1:
        case "ORGANIZATION_STATE_ACTIVE":
            return OrganizationState.ORGANIZATION_STATE_ACTIVE;
        case 2:
        case "ORGANIZATION_STATE_INACTIVE":
            return OrganizationState.ORGANIZATION_STATE_INACTIVE;
        case 3:
        case "ORGANIZATION_STATE_REMOVED":
            return OrganizationState.ORGANIZATION_STATE_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrganizationState.UNRECOGNIZED;
    }
}
exports.organizationStateFromJSON = organizationStateFromJSON;
function organizationStateToJSON(object) {
    switch (object) {
        case OrganizationState.ORGANIZATION_STATE_UNSPECIFIED:
            return "ORGANIZATION_STATE_UNSPECIFIED";
        case OrganizationState.ORGANIZATION_STATE_ACTIVE:
            return "ORGANIZATION_STATE_ACTIVE";
        case OrganizationState.ORGANIZATION_STATE_INACTIVE:
            return "ORGANIZATION_STATE_INACTIVE";
        case OrganizationState.ORGANIZATION_STATE_REMOVED:
            return "ORGANIZATION_STATE_REMOVED";
        case OrganizationState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.organizationStateToJSON = organizationStateToJSON;
function createBaseOrganization() {
    return { id: "", details: undefined, state: 0, name: "", primaryDomain: "" };
}
exports.Organization = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.primaryDomain !== "") {
            writer.uint32(42).string(message.primaryDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganization();
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
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
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
                    message.primaryDomain = reader.string();
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? organizationStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            primaryDomain: isSet(object.primaryDomain) ? globalThis.String(object.primaryDomain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = organizationStateToJSON(message.state);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.primaryDomain !== "") {
            obj.primaryDomain = message.primaryDomain;
        }
        return obj;
    },
    create(base) {
        return exports.Organization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOrganization();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.primaryDomain = (_d = object.primaryDomain) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=org.js.map