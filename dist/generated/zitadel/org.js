"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainNameQuery = exports.DomainSearchQuery = exports.OrgIDQuery = exports.OrgStateQuery = exports.OrgDomainQuery = exports.OrgNameQuery = exports.OrgQuery = exports.Domain = exports.Org = exports.orgFieldNameToJSON = exports.orgFieldNameFromJSON = exports.OrgFieldName = exports.domainValidationTypeToJSON = exports.domainValidationTypeFromJSON = exports.DomainValidationType = exports.orgStateToJSON = exports.orgStateFromJSON = exports.OrgState = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.org.v1";
var OrgState;
(function (OrgState) {
    OrgState[OrgState["ORG_STATE_UNSPECIFIED"] = 0] = "ORG_STATE_UNSPECIFIED";
    OrgState[OrgState["ORG_STATE_ACTIVE"] = 1] = "ORG_STATE_ACTIVE";
    OrgState[OrgState["ORG_STATE_INACTIVE"] = 2] = "ORG_STATE_INACTIVE";
    OrgState[OrgState["ORG_STATE_REMOVED"] = 3] = "ORG_STATE_REMOVED";
    OrgState[OrgState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrgState = exports.OrgState || (exports.OrgState = {}));
function orgStateFromJSON(object) {
    switch (object) {
        case 0:
        case "ORG_STATE_UNSPECIFIED":
            return OrgState.ORG_STATE_UNSPECIFIED;
        case 1:
        case "ORG_STATE_ACTIVE":
            return OrgState.ORG_STATE_ACTIVE;
        case 2:
        case "ORG_STATE_INACTIVE":
            return OrgState.ORG_STATE_INACTIVE;
        case 3:
        case "ORG_STATE_REMOVED":
            return OrgState.ORG_STATE_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrgState.UNRECOGNIZED;
    }
}
exports.orgStateFromJSON = orgStateFromJSON;
function orgStateToJSON(object) {
    switch (object) {
        case OrgState.ORG_STATE_UNSPECIFIED:
            return "ORG_STATE_UNSPECIFIED";
        case OrgState.ORG_STATE_ACTIVE:
            return "ORG_STATE_ACTIVE";
        case OrgState.ORG_STATE_INACTIVE:
            return "ORG_STATE_INACTIVE";
        case OrgState.ORG_STATE_REMOVED:
            return "ORG_STATE_REMOVED";
        case OrgState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orgStateToJSON = orgStateToJSON;
var DomainValidationType;
(function (DomainValidationType) {
    DomainValidationType[DomainValidationType["DOMAIN_VALIDATION_TYPE_UNSPECIFIED"] = 0] = "DOMAIN_VALIDATION_TYPE_UNSPECIFIED";
    DomainValidationType[DomainValidationType["DOMAIN_VALIDATION_TYPE_HTTP"] = 1] = "DOMAIN_VALIDATION_TYPE_HTTP";
    DomainValidationType[DomainValidationType["DOMAIN_VALIDATION_TYPE_DNS"] = 2] = "DOMAIN_VALIDATION_TYPE_DNS";
    DomainValidationType[DomainValidationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DomainValidationType = exports.DomainValidationType || (exports.DomainValidationType = {}));
function domainValidationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DOMAIN_VALIDATION_TYPE_UNSPECIFIED":
            return DomainValidationType.DOMAIN_VALIDATION_TYPE_UNSPECIFIED;
        case 1:
        case "DOMAIN_VALIDATION_TYPE_HTTP":
            return DomainValidationType.DOMAIN_VALIDATION_TYPE_HTTP;
        case 2:
        case "DOMAIN_VALIDATION_TYPE_DNS":
            return DomainValidationType.DOMAIN_VALIDATION_TYPE_DNS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DomainValidationType.UNRECOGNIZED;
    }
}
exports.domainValidationTypeFromJSON = domainValidationTypeFromJSON;
function domainValidationTypeToJSON(object) {
    switch (object) {
        case DomainValidationType.DOMAIN_VALIDATION_TYPE_UNSPECIFIED:
            return "DOMAIN_VALIDATION_TYPE_UNSPECIFIED";
        case DomainValidationType.DOMAIN_VALIDATION_TYPE_HTTP:
            return "DOMAIN_VALIDATION_TYPE_HTTP";
        case DomainValidationType.DOMAIN_VALIDATION_TYPE_DNS:
            return "DOMAIN_VALIDATION_TYPE_DNS";
        case DomainValidationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.domainValidationTypeToJSON = domainValidationTypeToJSON;
var OrgFieldName;
(function (OrgFieldName) {
    OrgFieldName[OrgFieldName["ORG_FIELD_NAME_UNSPECIFIED"] = 0] = "ORG_FIELD_NAME_UNSPECIFIED";
    OrgFieldName[OrgFieldName["ORG_FIELD_NAME_NAME"] = 1] = "ORG_FIELD_NAME_NAME";
    OrgFieldName[OrgFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrgFieldName = exports.OrgFieldName || (exports.OrgFieldName = {}));
function orgFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "ORG_FIELD_NAME_UNSPECIFIED":
            return OrgFieldName.ORG_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "ORG_FIELD_NAME_NAME":
            return OrgFieldName.ORG_FIELD_NAME_NAME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrgFieldName.UNRECOGNIZED;
    }
}
exports.orgFieldNameFromJSON = orgFieldNameFromJSON;
function orgFieldNameToJSON(object) {
    switch (object) {
        case OrgFieldName.ORG_FIELD_NAME_UNSPECIFIED:
            return "ORG_FIELD_NAME_UNSPECIFIED";
        case OrgFieldName.ORG_FIELD_NAME_NAME:
            return "ORG_FIELD_NAME_NAME";
        case OrgFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orgFieldNameToJSON = orgFieldNameToJSON;
function createBaseOrg() {
    return { id: "", details: undefined, state: 0, name: "", primaryDomain: "" };
}
exports.Org = {
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
        if (message.primaryDomain !== "") {
            writer.uint32(42).string(message.primaryDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrg();
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
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? orgStateFromJSON(object.state) : 0,
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
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = orgStateToJSON(message.state);
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
        return exports.Org.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOrg();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.primaryDomain = (_d = object.primaryDomain) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseDomain() {
    return { orgId: "", details: undefined, domainName: "", isVerified: false, isPrimary: false, validationType: 0 };
}
exports.Domain = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.domainName !== "") {
            writer.uint32(26).string(message.domainName);
        }
        if (message.isVerified !== false) {
            writer.uint32(32).bool(message.isVerified);
        }
        if (message.isPrimary !== false) {
            writer.uint32(40).bool(message.isPrimary);
        }
        if (message.validationType !== 0) {
            writer.uint32(48).int32(message.validationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomain();
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
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.domainName = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isVerified = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isPrimary = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.validationType = reader.int32();
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
            orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : "",
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            domainName: isSet(object.domainName) ? globalThis.String(object.domainName) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
            isPrimary: isSet(object.isPrimary) ? globalThis.Boolean(object.isPrimary) : false,
            validationType: isSet(object.validationType) ? domainValidationTypeFromJSON(object.validationType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgId !== "") {
            obj.orgId = message.orgId;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.domainName !== "") {
            obj.domainName = message.domainName;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        if (message.isPrimary !== false) {
            obj.isPrimary = message.isPrimary;
        }
        if (message.validationType !== 0) {
            obj.validationType = domainValidationTypeToJSON(message.validationType);
        }
        return obj;
    },
    create(base) {
        return exports.Domain.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDomain();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.domainName = (_b = object.domainName) !== null && _b !== void 0 ? _b : "";
        message.isVerified = (_c = object.isVerified) !== null && _c !== void 0 ? _c : false;
        message.isPrimary = (_d = object.isPrimary) !== null && _d !== void 0 ? _d : false;
        message.validationType = (_e = object.validationType) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseOrgQuery() {
    return { nameQuery: undefined, domainQuery: undefined, stateQuery: undefined, idQuery: undefined };
}
exports.OrgQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.nameQuery !== undefined) {
            exports.OrgNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).join();
        }
        if (message.domainQuery !== undefined) {
            exports.OrgDomainQuery.encode(message.domainQuery, writer.uint32(18).fork()).join();
        }
        if (message.stateQuery !== undefined) {
            exports.OrgStateQuery.encode(message.stateQuery, writer.uint32(26).fork()).join();
        }
        if (message.idQuery !== undefined) {
            exports.OrgIDQuery.encode(message.idQuery, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nameQuery = exports.OrgNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.domainQuery = exports.OrgDomainQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.stateQuery = exports.OrgStateQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.idQuery = exports.OrgIDQuery.decode(reader, reader.uint32());
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
            nameQuery: isSet(object.nameQuery) ? exports.OrgNameQuery.fromJSON(object.nameQuery) : undefined,
            domainQuery: isSet(object.domainQuery) ? exports.OrgDomainQuery.fromJSON(object.domainQuery) : undefined,
            stateQuery: isSet(object.stateQuery) ? exports.OrgStateQuery.fromJSON(object.stateQuery) : undefined,
            idQuery: isSet(object.idQuery) ? exports.OrgIDQuery.fromJSON(object.idQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nameQuery !== undefined) {
            obj.nameQuery = exports.OrgNameQuery.toJSON(message.nameQuery);
        }
        if (message.domainQuery !== undefined) {
            obj.domainQuery = exports.OrgDomainQuery.toJSON(message.domainQuery);
        }
        if (message.stateQuery !== undefined) {
            obj.stateQuery = exports.OrgStateQuery.toJSON(message.stateQuery);
        }
        if (message.idQuery !== undefined) {
            obj.idQuery = exports.OrgIDQuery.toJSON(message.idQuery);
        }
        return obj;
    },
    create(base) {
        return exports.OrgQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseOrgQuery();
        message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
            ? exports.OrgNameQuery.fromPartial(object.nameQuery)
            : undefined;
        message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
            ? exports.OrgDomainQuery.fromPartial(object.domainQuery)
            : undefined;
        message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
            ? exports.OrgStateQuery.fromPartial(object.stateQuery)
            : undefined;
        message.idQuery = (object.idQuery !== undefined && object.idQuery !== null)
            ? exports.OrgIDQuery.fromPartial(object.idQuery)
            : undefined;
        return message;
    },
};
function createBaseOrgNameQuery() {
    return { name: "", method: 0 };
}
exports.OrgNameQuery = {
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
        const message = createBaseOrgNameQuery();
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
        return exports.OrgNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrgNameQuery();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseOrgDomainQuery() {
    return { domain: "", method: 0 };
}
exports.OrgDomainQuery = {
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
        const message = createBaseOrgDomainQuery();
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
        return exports.OrgDomainQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrgDomainQuery();
        message.domain = (_a = object.domain) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseOrgStateQuery() {
    return { state: 0 };
}
exports.OrgStateQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgStateQuery();
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
        return { state: isSet(object.state) ? orgStateFromJSON(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = orgStateToJSON(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.OrgStateQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrgStateQuery();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseOrgIDQuery() {
    return { id: "" };
}
exports.OrgIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgIDQuery();
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
        return exports.OrgIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrgIDQuery();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDomainSearchQuery() {
    return { domainNameQuery: undefined };
}
exports.DomainSearchQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.domainNameQuery !== undefined) {
            exports.DomainNameQuery.encode(message.domainNameQuery, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.domainNameQuery = exports.DomainNameQuery.decode(reader, reader.uint32());
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
            domainNameQuery: isSet(object.domainNameQuery) ? exports.DomainNameQuery.fromJSON(object.domainNameQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.domainNameQuery !== undefined) {
            obj.domainNameQuery = exports.DomainNameQuery.toJSON(message.domainNameQuery);
        }
        return obj;
    },
    create(base) {
        return exports.DomainSearchQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDomainSearchQuery();
        message.domainNameQuery = (object.domainNameQuery !== undefined && object.domainNameQuery !== null)
            ? exports.DomainNameQuery.fromPartial(object.domainNameQuery)
            : undefined;
        return message;
    },
};
function createBaseDomainNameQuery() {
    return { name: "", method: 0 };
}
exports.DomainNameQuery = {
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
        const message = createBaseDomainNameQuery();
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
        return exports.DomainNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDomainNameQuery();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=org.js.map