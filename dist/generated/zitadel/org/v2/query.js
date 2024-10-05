"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationIDQuery = exports.OrganizationStateQuery = exports.OrganizationDomainQuery = exports.OrganizationNameQuery = exports.SearchQuery = exports.organizationFieldNameToJSON = exports.organizationFieldNameFromJSON = exports.OrganizationFieldName = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v2/object.js");
const org_js_1 = require("./org.js");
exports.protobufPackage = "zitadel.org.v2";
var OrganizationFieldName;
(function (OrganizationFieldName) {
    OrganizationFieldName[OrganizationFieldName["ORGANIZATION_FIELD_NAME_UNSPECIFIED"] = 0] = "ORGANIZATION_FIELD_NAME_UNSPECIFIED";
    OrganizationFieldName[OrganizationFieldName["ORGANIZATION_FIELD_NAME_NAME"] = 1] = "ORGANIZATION_FIELD_NAME_NAME";
    OrganizationFieldName[OrganizationFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrganizationFieldName = exports.OrganizationFieldName || (exports.OrganizationFieldName = {}));
function organizationFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "ORGANIZATION_FIELD_NAME_UNSPECIFIED":
            return OrganizationFieldName.ORGANIZATION_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "ORGANIZATION_FIELD_NAME_NAME":
            return OrganizationFieldName.ORGANIZATION_FIELD_NAME_NAME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrganizationFieldName.UNRECOGNIZED;
    }
}
exports.organizationFieldNameFromJSON = organizationFieldNameFromJSON;
function organizationFieldNameToJSON(object) {
    switch (object) {
        case OrganizationFieldName.ORGANIZATION_FIELD_NAME_UNSPECIFIED:
            return "ORGANIZATION_FIELD_NAME_UNSPECIFIED";
        case OrganizationFieldName.ORGANIZATION_FIELD_NAME_NAME:
            return "ORGANIZATION_FIELD_NAME_NAME";
        case OrganizationFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.organizationFieldNameToJSON = organizationFieldNameToJSON;
function createBaseSearchQuery() {
    return { nameQuery: undefined, domainQuery: undefined, stateQuery: undefined, idQuery: undefined };
}
exports.SearchQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.nameQuery !== undefined) {
            exports.OrganizationNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).join();
        }
        if (message.domainQuery !== undefined) {
            exports.OrganizationDomainQuery.encode(message.domainQuery, writer.uint32(18).fork()).join();
        }
        if (message.stateQuery !== undefined) {
            exports.OrganizationStateQuery.encode(message.stateQuery, writer.uint32(26).fork()).join();
        }
        if (message.idQuery !== undefined) {
            exports.OrganizationIDQuery.encode(message.idQuery, writer.uint32(34).fork()).join();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.nameQuery = exports.OrganizationNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.domainQuery = exports.OrganizationDomainQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.stateQuery = exports.OrganizationStateQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.idQuery = exports.OrganizationIDQuery.decode(reader, reader.uint32());
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
            nameQuery: isSet(object.nameQuery) ? exports.OrganizationNameQuery.fromJSON(object.nameQuery) : undefined,
            domainQuery: isSet(object.domainQuery) ? exports.OrganizationDomainQuery.fromJSON(object.domainQuery) : undefined,
            stateQuery: isSet(object.stateQuery) ? exports.OrganizationStateQuery.fromJSON(object.stateQuery) : undefined,
            idQuery: isSet(object.idQuery) ? exports.OrganizationIDQuery.fromJSON(object.idQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nameQuery !== undefined) {
            obj.nameQuery = exports.OrganizationNameQuery.toJSON(message.nameQuery);
        }
        if (message.domainQuery !== undefined) {
            obj.domainQuery = exports.OrganizationDomainQuery.toJSON(message.domainQuery);
        }
        if (message.stateQuery !== undefined) {
            obj.stateQuery = exports.OrganizationStateQuery.toJSON(message.stateQuery);
        }
        if (message.idQuery !== undefined) {
            obj.idQuery = exports.OrganizationIDQuery.toJSON(message.idQuery);
        }
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSearchQuery();
        message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
            ? exports.OrganizationNameQuery.fromPartial(object.nameQuery)
            : undefined;
        message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
            ? exports.OrganizationDomainQuery.fromPartial(object.domainQuery)
            : undefined;
        message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
            ? exports.OrganizationStateQuery.fromPartial(object.stateQuery)
            : undefined;
        message.idQuery = (object.idQuery !== undefined && object.idQuery !== null)
            ? exports.OrganizationIDQuery.fromPartial(object.idQuery)
            : undefined;
        return message;
    },
};
function createBaseOrganizationNameQuery() {
    return { name: "", method: 0 };
}
exports.OrganizationNameQuery = {
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
        const message = createBaseOrganizationNameQuery();
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
        return exports.OrganizationNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrganizationNameQuery();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseOrganizationDomainQuery() {
    return { domain: "", method: 0 };
}
exports.OrganizationDomainQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.domain !== "") {
            writer.uint32(10).string(message.domain);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganizationDomainQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.domain = reader.string();
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
            domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.domain !== "") {
            obj.domain = message.domain;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.OrganizationDomainQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrganizationDomainQuery();
        message.domain = (_a = object.domain) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseOrganizationStateQuery() {
    return { state: 0 };
}
exports.OrganizationStateQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganizationStateQuery();
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
        return { state: isSet(object.state) ? (0, org_js_1.organizationStateFromJSON)(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = (0, org_js_1.organizationStateToJSON)(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.OrganizationStateQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrganizationStateQuery();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseOrganizationIDQuery() {
    return { id: "" };
}
exports.OrganizationIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganizationIDQuery();
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
        return exports.OrganizationIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrganizationIDQuery();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map