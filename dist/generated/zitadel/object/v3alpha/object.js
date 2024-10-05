"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = exports.Instance = exports.Owner = exports.ownerTypeToJSON = exports.ownerTypeFromJSON = exports.OwnerType = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.object.v3alpha";
var OwnerType;
(function (OwnerType) {
    OwnerType[OwnerType["OWNER_TYPE_UNSPECIFIED"] = 0] = "OWNER_TYPE_UNSPECIFIED";
    OwnerType[OwnerType["OWNER_TYPE_SYSTEM"] = 1] = "OWNER_TYPE_SYSTEM";
    OwnerType[OwnerType["OWNER_TYPE_INSTANCE"] = 2] = "OWNER_TYPE_INSTANCE";
    OwnerType[OwnerType["OWNER_TYPE_ORG"] = 3] = "OWNER_TYPE_ORG";
    OwnerType[OwnerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OwnerType = exports.OwnerType || (exports.OwnerType = {}));
function ownerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OWNER_TYPE_UNSPECIFIED":
            return OwnerType.OWNER_TYPE_UNSPECIFIED;
        case 1:
        case "OWNER_TYPE_SYSTEM":
            return OwnerType.OWNER_TYPE_SYSTEM;
        case 2:
        case "OWNER_TYPE_INSTANCE":
            return OwnerType.OWNER_TYPE_INSTANCE;
        case 3:
        case "OWNER_TYPE_ORG":
            return OwnerType.OWNER_TYPE_ORG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OwnerType.UNRECOGNIZED;
    }
}
exports.ownerTypeFromJSON = ownerTypeFromJSON;
function ownerTypeToJSON(object) {
    switch (object) {
        case OwnerType.OWNER_TYPE_UNSPECIFIED:
            return "OWNER_TYPE_UNSPECIFIED";
        case OwnerType.OWNER_TYPE_SYSTEM:
            return "OWNER_TYPE_SYSTEM";
        case OwnerType.OWNER_TYPE_INSTANCE:
            return "OWNER_TYPE_INSTANCE";
        case OwnerType.OWNER_TYPE_ORG:
            return "OWNER_TYPE_ORG";
        case OwnerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.ownerTypeToJSON = ownerTypeToJSON;
function createBaseOwner() {
    return { type: 0, id: "" };
}
exports.Owner = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
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
            type: isSet(object.type) ? ownerTypeFromJSON(object.type) : 0,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = ownerTypeToJSON(message.type);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.Owner.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOwner();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseInstance() {
    return { id: undefined, domain: undefined };
}
exports.Instance = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== undefined) {
            writer.uint32(10).string(message.id);
        }
        if (message.domain !== undefined) {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstance();
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
                    message.domain = reader.string();
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
            id: isSet(object.id) ? globalThis.String(object.id) : undefined,
            domain: isSet(object.domain) ? globalThis.String(object.domain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = message.id;
        }
        if (message.domain !== undefined) {
            obj.domain = message.domain;
        }
        return obj;
    },
    create(base) {
        return exports.Instance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseInstance();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : undefined;
        message.domain = (_b = object.domain) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseOrganization() {
    return { orgId: undefined, orgDomain: undefined };
}
exports.Organization = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgId !== undefined) {
            writer.uint32(10).string(message.orgId);
        }
        if (message.orgDomain !== undefined) {
            writer.uint32(18).string(message.orgDomain);
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
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgDomain = reader.string();
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
            orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : undefined,
            orgDomain: isSet(object.orgDomain) ? globalThis.String(object.orgDomain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgId !== undefined) {
            obj.orgId = message.orgId;
        }
        if (message.orgDomain !== undefined) {
            obj.orgDomain = message.orgDomain;
        }
        return obj;
    },
    create(base) {
        return exports.Organization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrganization();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : undefined;
        message.orgDomain = (_b = object.orgDomain) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=object.js.map