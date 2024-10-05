"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantedOrgIDQuery = exports.ProjectIDQuery = exports.GrantRoleKeyQuery = exports.GrantProjectNameQuery = exports.AllProjectGrantQuery = exports.ProjectGrantQuery = exports.RoleDisplayNameQuery = exports.RoleKeyQuery = exports.RoleQuery = exports.Role = exports.ProjectResourceOwnerQuery = exports.ProjectNameQuery = exports.ProjectQuery = exports.GrantedProject = exports.Project = exports.projectGrantStateToJSON = exports.projectGrantStateFromJSON = exports.ProjectGrantState = exports.privateLabelingSettingToJSON = exports.privateLabelingSettingFromJSON = exports.PrivateLabelingSetting = exports.projectStateToJSON = exports.projectStateFromJSON = exports.ProjectState = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.project.v1";
var ProjectState;
(function (ProjectState) {
    ProjectState[ProjectState["PROJECT_STATE_UNSPECIFIED"] = 0] = "PROJECT_STATE_UNSPECIFIED";
    ProjectState[ProjectState["PROJECT_STATE_ACTIVE"] = 1] = "PROJECT_STATE_ACTIVE";
    ProjectState[ProjectState["PROJECT_STATE_INACTIVE"] = 2] = "PROJECT_STATE_INACTIVE";
    ProjectState[ProjectState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectState = exports.ProjectState || (exports.ProjectState = {}));
function projectStateFromJSON(object) {
    switch (object) {
        case 0:
        case "PROJECT_STATE_UNSPECIFIED":
            return ProjectState.PROJECT_STATE_UNSPECIFIED;
        case 1:
        case "PROJECT_STATE_ACTIVE":
            return ProjectState.PROJECT_STATE_ACTIVE;
        case 2:
        case "PROJECT_STATE_INACTIVE":
            return ProjectState.PROJECT_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProjectState.UNRECOGNIZED;
    }
}
exports.projectStateFromJSON = projectStateFromJSON;
function projectStateToJSON(object) {
    switch (object) {
        case ProjectState.PROJECT_STATE_UNSPECIFIED:
            return "PROJECT_STATE_UNSPECIFIED";
        case ProjectState.PROJECT_STATE_ACTIVE:
            return "PROJECT_STATE_ACTIVE";
        case ProjectState.PROJECT_STATE_INACTIVE:
            return "PROJECT_STATE_INACTIVE";
        case ProjectState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.projectStateToJSON = projectStateToJSON;
var PrivateLabelingSetting;
(function (PrivateLabelingSetting) {
    PrivateLabelingSetting[PrivateLabelingSetting["PRIVATE_LABELING_SETTING_UNSPECIFIED"] = 0] = "PRIVATE_LABELING_SETTING_UNSPECIFIED";
    PrivateLabelingSetting[PrivateLabelingSetting["PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY"] = 1] = "PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY";
    PrivateLabelingSetting[PrivateLabelingSetting["PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY"] = 2] = "PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY";
    PrivateLabelingSetting[PrivateLabelingSetting["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PrivateLabelingSetting = exports.PrivateLabelingSetting || (exports.PrivateLabelingSetting = {}));
function privateLabelingSettingFromJSON(object) {
    switch (object) {
        case 0:
        case "PRIVATE_LABELING_SETTING_UNSPECIFIED":
            return PrivateLabelingSetting.PRIVATE_LABELING_SETTING_UNSPECIFIED;
        case 1:
        case "PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY":
            return PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY;
        case 2:
        case "PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY":
            return PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PrivateLabelingSetting.UNRECOGNIZED;
    }
}
exports.privateLabelingSettingFromJSON = privateLabelingSettingFromJSON;
function privateLabelingSettingToJSON(object) {
    switch (object) {
        case PrivateLabelingSetting.PRIVATE_LABELING_SETTING_UNSPECIFIED:
            return "PRIVATE_LABELING_SETTING_UNSPECIFIED";
        case PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY:
            return "PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY";
        case PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY:
            return "PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY";
        case PrivateLabelingSetting.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.privateLabelingSettingToJSON = privateLabelingSettingToJSON;
var ProjectGrantState;
(function (ProjectGrantState) {
    ProjectGrantState[ProjectGrantState["PROJECT_GRANT_STATE_UNSPECIFIED"] = 0] = "PROJECT_GRANT_STATE_UNSPECIFIED";
    ProjectGrantState[ProjectGrantState["PROJECT_GRANT_STATE_ACTIVE"] = 1] = "PROJECT_GRANT_STATE_ACTIVE";
    ProjectGrantState[ProjectGrantState["PROJECT_GRANT_STATE_INACTIVE"] = 2] = "PROJECT_GRANT_STATE_INACTIVE";
    ProjectGrantState[ProjectGrantState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectGrantState = exports.ProjectGrantState || (exports.ProjectGrantState = {}));
function projectGrantStateFromJSON(object) {
    switch (object) {
        case 0:
        case "PROJECT_GRANT_STATE_UNSPECIFIED":
            return ProjectGrantState.PROJECT_GRANT_STATE_UNSPECIFIED;
        case 1:
        case "PROJECT_GRANT_STATE_ACTIVE":
            return ProjectGrantState.PROJECT_GRANT_STATE_ACTIVE;
        case 2:
        case "PROJECT_GRANT_STATE_INACTIVE":
            return ProjectGrantState.PROJECT_GRANT_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProjectGrantState.UNRECOGNIZED;
    }
}
exports.projectGrantStateFromJSON = projectGrantStateFromJSON;
function projectGrantStateToJSON(object) {
    switch (object) {
        case ProjectGrantState.PROJECT_GRANT_STATE_UNSPECIFIED:
            return "PROJECT_GRANT_STATE_UNSPECIFIED";
        case ProjectGrantState.PROJECT_GRANT_STATE_ACTIVE:
            return "PROJECT_GRANT_STATE_ACTIVE";
        case ProjectGrantState.PROJECT_GRANT_STATE_INACTIVE:
            return "PROJECT_GRANT_STATE_INACTIVE";
        case ProjectGrantState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.projectGrantStateToJSON = projectGrantStateToJSON;
function createBaseProject() {
    return {
        id: "",
        details: undefined,
        name: "",
        state: 0,
        projectRoleAssertion: false,
        projectRoleCheck: false,
        hasProjectCheck: false,
        privateLabelingSetting: 0,
    };
}
exports.Project = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.projectRoleAssertion !== false) {
            writer.uint32(40).bool(message.projectRoleAssertion);
        }
        if (message.projectRoleCheck !== false) {
            writer.uint32(48).bool(message.projectRoleCheck);
        }
        if (message.hasProjectCheck !== false) {
            writer.uint32(56).bool(message.hasProjectCheck);
        }
        if (message.privateLabelingSetting !== 0) {
            writer.uint32(64).int32(message.privateLabelingSetting);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProject();
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
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.projectRoleAssertion = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.projectRoleCheck = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.hasProjectCheck = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.privateLabelingSetting = reader.int32();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            state: isSet(object.state) ? projectStateFromJSON(object.state) : 0,
            projectRoleAssertion: isSet(object.projectRoleAssertion)
                ? globalThis.Boolean(object.projectRoleAssertion)
                : false,
            projectRoleCheck: isSet(object.projectRoleCheck) ? globalThis.Boolean(object.projectRoleCheck) : false,
            hasProjectCheck: isSet(object.hasProjectCheck) ? globalThis.Boolean(object.hasProjectCheck) : false,
            privateLabelingSetting: isSet(object.privateLabelingSetting)
                ? privateLabelingSettingFromJSON(object.privateLabelingSetting)
                : 0,
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
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.state !== 0) {
            obj.state = projectStateToJSON(message.state);
        }
        if (message.projectRoleAssertion !== false) {
            obj.projectRoleAssertion = message.projectRoleAssertion;
        }
        if (message.projectRoleCheck !== false) {
            obj.projectRoleCheck = message.projectRoleCheck;
        }
        if (message.hasProjectCheck !== false) {
            obj.hasProjectCheck = message.hasProjectCheck;
        }
        if (message.privateLabelingSetting !== 0) {
            obj.privateLabelingSetting = privateLabelingSettingToJSON(message.privateLabelingSetting);
        }
        return obj;
    },
    create(base) {
        return exports.Project.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseProject();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : 0;
        message.projectRoleAssertion = (_d = object.projectRoleAssertion) !== null && _d !== void 0 ? _d : false;
        message.projectRoleCheck = (_e = object.projectRoleCheck) !== null && _e !== void 0 ? _e : false;
        message.hasProjectCheck = (_f = object.hasProjectCheck) !== null && _f !== void 0 ? _f : false;
        message.privateLabelingSetting = (_g = object.privateLabelingSetting) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBaseGrantedProject() {
    return {
        grantId: "",
        grantedOrgId: "",
        grantedOrgName: "",
        grantedRoleKeys: [],
        state: 0,
        projectId: "",
        projectName: "",
        projectOwnerId: "",
        projectOwnerName: "",
        details: undefined,
    };
}
exports.GrantedProject = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.grantId !== "") {
            writer.uint32(10).string(message.grantId);
        }
        if (message.grantedOrgId !== "") {
            writer.uint32(18).string(message.grantedOrgId);
        }
        if (message.grantedOrgName !== "") {
            writer.uint32(26).string(message.grantedOrgName);
        }
        for (const v of message.grantedRoleKeys) {
            writer.uint32(34).string(v);
        }
        if (message.state !== 0) {
            writer.uint32(40).int32(message.state);
        }
        if (message.projectId !== "") {
            writer.uint32(50).string(message.projectId);
        }
        if (message.projectName !== "") {
            writer.uint32(58).string(message.projectName);
        }
        if (message.projectOwnerId !== "") {
            writer.uint32(66).string(message.projectOwnerId);
        }
        if (message.projectOwnerName !== "") {
            writer.uint32(74).string(message.projectOwnerName);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(82).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantedProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grantId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.grantedOrgId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.grantedOrgName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.grantedRoleKeys.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.projectName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.projectOwnerId = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.projectOwnerName = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
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
            grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "",
            grantedOrgId: isSet(object.grantedOrgId) ? globalThis.String(object.grantedOrgId) : "",
            grantedOrgName: isSet(object.grantedOrgName) ? globalThis.String(object.grantedOrgName) : "",
            grantedRoleKeys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.grantedRoleKeys)
                ? object.grantedRoleKeys.map((e) => globalThis.String(e))
                : [],
            state: isSet(object.state) ? projectGrantStateFromJSON(object.state) : 0,
            projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
            projectName: isSet(object.projectName) ? globalThis.String(object.projectName) : "",
            projectOwnerId: isSet(object.projectOwnerId) ? globalThis.String(object.projectOwnerId) : "",
            projectOwnerName: isSet(object.projectOwnerName) ? globalThis.String(object.projectOwnerName) : "",
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.grantId !== "") {
            obj.grantId = message.grantId;
        }
        if (message.grantedOrgId !== "") {
            obj.grantedOrgId = message.grantedOrgId;
        }
        if (message.grantedOrgName !== "") {
            obj.grantedOrgName = message.grantedOrgName;
        }
        if ((_a = message.grantedRoleKeys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.grantedRoleKeys = message.grantedRoleKeys;
        }
        if (message.state !== 0) {
            obj.state = projectGrantStateToJSON(message.state);
        }
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        if (message.projectName !== "") {
            obj.projectName = message.projectName;
        }
        if (message.projectOwnerId !== "") {
            obj.projectOwnerId = message.projectOwnerId;
        }
        if (message.projectOwnerName !== "") {
            obj.projectOwnerName = message.projectOwnerName;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return exports.GrantedProject.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseGrantedProject();
        message.grantId = (_a = object.grantId) !== null && _a !== void 0 ? _a : "";
        message.grantedOrgId = (_b = object.grantedOrgId) !== null && _b !== void 0 ? _b : "";
        message.grantedOrgName = (_c = object.grantedOrgName) !== null && _c !== void 0 ? _c : "";
        message.grantedRoleKeys = ((_d = object.grantedRoleKeys) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : 0;
        message.projectId = (_f = object.projectId) !== null && _f !== void 0 ? _f : "";
        message.projectName = (_g = object.projectName) !== null && _g !== void 0 ? _g : "";
        message.projectOwnerId = (_h = object.projectOwnerId) !== null && _h !== void 0 ? _h : "";
        message.projectOwnerName = (_j = object.projectOwnerName) !== null && _j !== void 0 ? _j : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseProjectQuery() {
    return { nameQuery: undefined, projectResourceOwnerQuery: undefined };
}
exports.ProjectQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.nameQuery !== undefined) {
            exports.ProjectNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).join();
        }
        if (message.projectResourceOwnerQuery !== undefined) {
            exports.ProjectResourceOwnerQuery.encode(message.projectResourceOwnerQuery, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nameQuery = exports.ProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectResourceOwnerQuery = exports.ProjectResourceOwnerQuery.decode(reader, reader.uint32());
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
            nameQuery: isSet(object.nameQuery) ? exports.ProjectNameQuery.fromJSON(object.nameQuery) : undefined,
            projectResourceOwnerQuery: isSet(object.projectResourceOwnerQuery)
                ? exports.ProjectResourceOwnerQuery.fromJSON(object.projectResourceOwnerQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nameQuery !== undefined) {
            obj.nameQuery = exports.ProjectNameQuery.toJSON(message.nameQuery);
        }
        if (message.projectResourceOwnerQuery !== undefined) {
            obj.projectResourceOwnerQuery = exports.ProjectResourceOwnerQuery.toJSON(message.projectResourceOwnerQuery);
        }
        return obj;
    },
    create(base) {
        return exports.ProjectQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProjectQuery();
        message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
            ? exports.ProjectNameQuery.fromPartial(object.nameQuery)
            : undefined;
        message.projectResourceOwnerQuery =
            (object.projectResourceOwnerQuery !== undefined && object.projectResourceOwnerQuery !== null)
                ? exports.ProjectResourceOwnerQuery.fromPartial(object.projectResourceOwnerQuery)
                : undefined;
        return message;
    },
};
function createBaseProjectNameQuery() {
    return { name: "", method: 0 };
}
exports.ProjectNameQuery = {
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
        const message = createBaseProjectNameQuery();
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
        return exports.ProjectNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProjectNameQuery();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseProjectResourceOwnerQuery() {
    return { resourceOwner: "" };
}
exports.ProjectResourceOwnerQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceOwner !== "") {
            writer.uint32(10).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectResourceOwnerQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceOwner = reader.string();
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
        return { resourceOwner: isSet(object.resourceOwner) ? globalThis.String(object.resourceOwner) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceOwner !== "") {
            obj.resourceOwner = message.resourceOwner;
        }
        return obj;
    },
    create(base) {
        return exports.ProjectResourceOwnerQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProjectResourceOwnerQuery();
        message.resourceOwner = (_a = object.resourceOwner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRole() {
    return { key: "", details: undefined, displayName: "", group: "" };
}
exports.Role = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.displayName !== "") {
            writer.uint32(26).string(message.displayName);
        }
        if (message.group !== "") {
            writer.uint32(34).string(message.group);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRole();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
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
                    message.displayName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.group = reader.string();
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            group: isSet(object.group) ? globalThis.String(object.group) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.group !== "") {
            obj.group = message.group;
        }
        return obj;
    },
    create(base) {
        return exports.Role.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRole();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.displayName = (_b = object.displayName) !== null && _b !== void 0 ? _b : "";
        message.group = (_c = object.group) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRoleQuery() {
    return { keyQuery: undefined, displayNameQuery: undefined };
}
exports.RoleQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.keyQuery !== undefined) {
            exports.RoleKeyQuery.encode(message.keyQuery, writer.uint32(10).fork()).join();
        }
        if (message.displayNameQuery !== undefined) {
            exports.RoleDisplayNameQuery.encode(message.displayNameQuery, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoleQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keyQuery = exports.RoleKeyQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.displayNameQuery = exports.RoleDisplayNameQuery.decode(reader, reader.uint32());
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
            keyQuery: isSet(object.keyQuery) ? exports.RoleKeyQuery.fromJSON(object.keyQuery) : undefined,
            displayNameQuery: isSet(object.displayNameQuery)
                ? exports.RoleDisplayNameQuery.fromJSON(object.displayNameQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyQuery !== undefined) {
            obj.keyQuery = exports.RoleKeyQuery.toJSON(message.keyQuery);
        }
        if (message.displayNameQuery !== undefined) {
            obj.displayNameQuery = exports.RoleDisplayNameQuery.toJSON(message.displayNameQuery);
        }
        return obj;
    },
    create(base) {
        return exports.RoleQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRoleQuery();
        message.keyQuery = (object.keyQuery !== undefined && object.keyQuery !== null)
            ? exports.RoleKeyQuery.fromPartial(object.keyQuery)
            : undefined;
        message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
            ? exports.RoleDisplayNameQuery.fromPartial(object.displayNameQuery)
            : undefined;
        return message;
    },
};
function createBaseRoleKeyQuery() {
    return { key: "", method: 0 };
}
exports.RoleKeyQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoleKeyQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.RoleKeyQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRoleKeyQuery();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseRoleDisplayNameQuery() {
    return { displayName: "", method: 0 };
}
exports.RoleDisplayNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoleDisplayNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.displayName = reader.string();
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
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.RoleDisplayNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRoleDisplayNameQuery();
        message.displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseProjectGrantQuery() {
    return { projectNameQuery: undefined, roleKeyQuery: undefined };
}
exports.ProjectGrantQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectNameQuery !== undefined) {
            exports.GrantProjectNameQuery.encode(message.projectNameQuery, writer.uint32(10).fork()).join();
        }
        if (message.roleKeyQuery !== undefined) {
            exports.GrantRoleKeyQuery.encode(message.roleKeyQuery, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectNameQuery = exports.GrantProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.roleKeyQuery = exports.GrantRoleKeyQuery.decode(reader, reader.uint32());
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
            projectNameQuery: isSet(object.projectNameQuery)
                ? exports.GrantProjectNameQuery.fromJSON(object.projectNameQuery)
                : undefined,
            roleKeyQuery: isSet(object.roleKeyQuery) ? exports.GrantRoleKeyQuery.fromJSON(object.roleKeyQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectNameQuery !== undefined) {
            obj.projectNameQuery = exports.GrantProjectNameQuery.toJSON(message.projectNameQuery);
        }
        if (message.roleKeyQuery !== undefined) {
            obj.roleKeyQuery = exports.GrantRoleKeyQuery.toJSON(message.roleKeyQuery);
        }
        return obj;
    },
    create(base) {
        return exports.ProjectGrantQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProjectGrantQuery();
        message.projectNameQuery = (object.projectNameQuery !== undefined && object.projectNameQuery !== null)
            ? exports.GrantProjectNameQuery.fromPartial(object.projectNameQuery)
            : undefined;
        message.roleKeyQuery = (object.roleKeyQuery !== undefined && object.roleKeyQuery !== null)
            ? exports.GrantRoleKeyQuery.fromPartial(object.roleKeyQuery)
            : undefined;
        return message;
    },
};
function createBaseAllProjectGrantQuery() {
    return {
        projectNameQuery: undefined,
        roleKeyQuery: undefined,
        projectIdQuery: undefined,
        grantedOrgIdQuery: undefined,
    };
}
exports.AllProjectGrantQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectNameQuery !== undefined) {
            exports.GrantProjectNameQuery.encode(message.projectNameQuery, writer.uint32(10).fork()).join();
        }
        if (message.roleKeyQuery !== undefined) {
            exports.GrantRoleKeyQuery.encode(message.roleKeyQuery, writer.uint32(18).fork()).join();
        }
        if (message.projectIdQuery !== undefined) {
            exports.ProjectIDQuery.encode(message.projectIdQuery, writer.uint32(26).fork()).join();
        }
        if (message.grantedOrgIdQuery !== undefined) {
            exports.GrantedOrgIDQuery.encode(message.grantedOrgIdQuery, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllProjectGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectNameQuery = exports.GrantProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.roleKeyQuery = exports.GrantRoleKeyQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.projectIdQuery = exports.ProjectIDQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.grantedOrgIdQuery = exports.GrantedOrgIDQuery.decode(reader, reader.uint32());
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
            projectNameQuery: isSet(object.projectNameQuery)
                ? exports.GrantProjectNameQuery.fromJSON(object.projectNameQuery)
                : undefined,
            roleKeyQuery: isSet(object.roleKeyQuery) ? exports.GrantRoleKeyQuery.fromJSON(object.roleKeyQuery) : undefined,
            projectIdQuery: isSet(object.projectIdQuery) ? exports.ProjectIDQuery.fromJSON(object.projectIdQuery) : undefined,
            grantedOrgIdQuery: isSet(object.grantedOrgIdQuery)
                ? exports.GrantedOrgIDQuery.fromJSON(object.grantedOrgIdQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectNameQuery !== undefined) {
            obj.projectNameQuery = exports.GrantProjectNameQuery.toJSON(message.projectNameQuery);
        }
        if (message.roleKeyQuery !== undefined) {
            obj.roleKeyQuery = exports.GrantRoleKeyQuery.toJSON(message.roleKeyQuery);
        }
        if (message.projectIdQuery !== undefined) {
            obj.projectIdQuery = exports.ProjectIDQuery.toJSON(message.projectIdQuery);
        }
        if (message.grantedOrgIdQuery !== undefined) {
            obj.grantedOrgIdQuery = exports.GrantedOrgIDQuery.toJSON(message.grantedOrgIdQuery);
        }
        return obj;
    },
    create(base) {
        return exports.AllProjectGrantQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAllProjectGrantQuery();
        message.projectNameQuery = (object.projectNameQuery !== undefined && object.projectNameQuery !== null)
            ? exports.GrantProjectNameQuery.fromPartial(object.projectNameQuery)
            : undefined;
        message.roleKeyQuery = (object.roleKeyQuery !== undefined && object.roleKeyQuery !== null)
            ? exports.GrantRoleKeyQuery.fromPartial(object.roleKeyQuery)
            : undefined;
        message.projectIdQuery = (object.projectIdQuery !== undefined && object.projectIdQuery !== null)
            ? exports.ProjectIDQuery.fromPartial(object.projectIdQuery)
            : undefined;
        message.grantedOrgIdQuery = (object.grantedOrgIdQuery !== undefined && object.grantedOrgIdQuery !== null)
            ? exports.GrantedOrgIDQuery.fromPartial(object.grantedOrgIdQuery)
            : undefined;
        return message;
    },
};
function createBaseGrantProjectNameQuery() {
    return { name: "", method: 0 };
}
exports.GrantProjectNameQuery = {
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
        const message = createBaseGrantProjectNameQuery();
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
        return exports.GrantProjectNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGrantProjectNameQuery();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGrantRoleKeyQuery() {
    return { roleKey: "", method: 0 };
}
exports.GrantRoleKeyQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.roleKey !== "") {
            writer.uint32(10).string(message.roleKey);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantRoleKeyQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.roleKey = reader.string();
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
            roleKey: isSet(object.roleKey) ? globalThis.String(object.roleKey) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.roleKey !== "") {
            obj.roleKey = message.roleKey;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.GrantRoleKeyQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGrantRoleKeyQuery();
        message.roleKey = (_a = object.roleKey) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseProjectIDQuery() {
    return { projectId: "" };
}
exports.ProjectIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
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
        return { projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        return obj;
    },
    create(base) {
        return exports.ProjectIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProjectIDQuery();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGrantedOrgIDQuery() {
    return { grantedOrgId: "" };
}
exports.GrantedOrgIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.grantedOrgId !== "") {
            writer.uint32(10).string(message.grantedOrgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantedOrgIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grantedOrgId = reader.string();
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
        return { grantedOrgId: isSet(object.grantedOrgId) ? globalThis.String(object.grantedOrgId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.grantedOrgId !== "") {
            obj.grantedOrgId = message.grantedOrgId;
        }
        return obj;
    },
    create(base) {
        return exports.GrantedOrgIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGrantedOrgIDQuery();
        message.grantedOrgId = (_a = object.grantedOrgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=project.js.map