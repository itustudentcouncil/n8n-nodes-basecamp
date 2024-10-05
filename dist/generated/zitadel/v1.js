"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetTriggerActionsRequest = exports.DataProjectGrant = exports.DataAction = exports.DataMachineUser = exports.DataHumanUser = exports.DataOIDCApplication = exports.DataAPIApplication = exports.DataProject = exports.DataMachineKey = exports.DataAppKey = exports.ExportHumanUser_HashedPassword = exports.ExportHumanUser_Phone = exports.ExportHumanUser_Email = exports.ExportHumanUser_Profile = exports.ExportHumanUser = exports.DataJWTIDP = exports.DataOIDCIDP = exports.DataOrg = exports.ImportDataOrg = exports.AddCustomOrgIAMPolicyRequest = exports.triggerTypeToJSON = exports.triggerTypeFromJSON = exports.TriggerType = exports.flowTypeToJSON = exports.flowTypeFromJSON = exports.FlowType = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const long_1 = __importDefault(require("long"));
const timestamp_js_1 = require("../google/protobuf/timestamp.js");
const auth_n_key_js_1 = require("./auth_n_key.js");
const idp_js_1 = require("./idp.js");
const management_js_1 = require("./management.js");
const org_js_1 = require("./org.js");
const user_js_1 = require("./user.js");
exports.protobufPackage = "zitadel.v1.v1";
var FlowType;
(function (FlowType) {
    FlowType[FlowType["FLOW_TYPE_UNSPECIFIED"] = 0] = "FLOW_TYPE_UNSPECIFIED";
    FlowType[FlowType["FLOW_TYPE_EXTERNAL_AUTHENTICATION"] = 1] = "FLOW_TYPE_EXTERNAL_AUTHENTICATION";
    FlowType[FlowType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FlowType = exports.FlowType || (exports.FlowType = {}));
function flowTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOW_TYPE_UNSPECIFIED":
            return FlowType.FLOW_TYPE_UNSPECIFIED;
        case 1:
        case "FLOW_TYPE_EXTERNAL_AUTHENTICATION":
            return FlowType.FLOW_TYPE_EXTERNAL_AUTHENTICATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FlowType.UNRECOGNIZED;
    }
}
exports.flowTypeFromJSON = flowTypeFromJSON;
function flowTypeToJSON(object) {
    switch (object) {
        case FlowType.FLOW_TYPE_UNSPECIFIED:
            return "FLOW_TYPE_UNSPECIFIED";
        case FlowType.FLOW_TYPE_EXTERNAL_AUTHENTICATION:
            return "FLOW_TYPE_EXTERNAL_AUTHENTICATION";
        case FlowType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.flowTypeToJSON = flowTypeToJSON;
var TriggerType;
(function (TriggerType) {
    TriggerType[TriggerType["TRIGGER_TYPE_UNSPECIFIED"] = 0] = "TRIGGER_TYPE_UNSPECIFIED";
    TriggerType[TriggerType["TRIGGER_TYPE_POST_AUTHENTICATION"] = 1] = "TRIGGER_TYPE_POST_AUTHENTICATION";
    TriggerType[TriggerType["TRIGGER_TYPE_PRE_CREATION"] = 2] = "TRIGGER_TYPE_PRE_CREATION";
    TriggerType[TriggerType["TRIGGER_TYPE_POST_CREATION"] = 3] = "TRIGGER_TYPE_POST_CREATION";
    TriggerType[TriggerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
function triggerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TRIGGER_TYPE_UNSPECIFIED":
            return TriggerType.TRIGGER_TYPE_UNSPECIFIED;
        case 1:
        case "TRIGGER_TYPE_POST_AUTHENTICATION":
            return TriggerType.TRIGGER_TYPE_POST_AUTHENTICATION;
        case 2:
        case "TRIGGER_TYPE_PRE_CREATION":
            return TriggerType.TRIGGER_TYPE_PRE_CREATION;
        case 3:
        case "TRIGGER_TYPE_POST_CREATION":
            return TriggerType.TRIGGER_TYPE_POST_CREATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TriggerType.UNRECOGNIZED;
    }
}
exports.triggerTypeFromJSON = triggerTypeFromJSON;
function triggerTypeToJSON(object) {
    switch (object) {
        case TriggerType.TRIGGER_TYPE_UNSPECIFIED:
            return "TRIGGER_TYPE_UNSPECIFIED";
        case TriggerType.TRIGGER_TYPE_POST_AUTHENTICATION:
            return "TRIGGER_TYPE_POST_AUTHENTICATION";
        case TriggerType.TRIGGER_TYPE_PRE_CREATION:
            return "TRIGGER_TYPE_PRE_CREATION";
        case TriggerType.TRIGGER_TYPE_POST_CREATION:
            return "TRIGGER_TYPE_POST_CREATION";
        case TriggerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.triggerTypeToJSON = triggerTypeToJSON;
function createBaseAddCustomOrgIAMPolicyRequest() {
    return { orgId: "", userLoginMustBeDomain: false };
}
exports.AddCustomOrgIAMPolicyRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.userLoginMustBeDomain !== false) {
            writer.uint32(16).bool(message.userLoginMustBeDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddCustomOrgIAMPolicyRequest();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.userLoginMustBeDomain = reader.bool();
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
            userLoginMustBeDomain: isSet(object.userLoginMustBeDomain)
                ? globalThis.Boolean(object.userLoginMustBeDomain)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgId !== "") {
            obj.orgId = message.orgId;
        }
        if (message.userLoginMustBeDomain !== false) {
            obj.userLoginMustBeDomain = message.userLoginMustBeDomain;
        }
        return obj;
    },
    create(base) {
        return exports.AddCustomOrgIAMPolicyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddCustomOrgIAMPolicyRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.userLoginMustBeDomain = (_b = object.userLoginMustBeDomain) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseImportDataOrg() {
    return { orgs: [] };
}
exports.ImportDataOrg = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.orgs) {
            exports.DataOrg.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseImportDataOrg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgs.push(exports.DataOrg.decode(reader, reader.uint32()));
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
        return { orgs: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.orgs) ? object.orgs.map((e) => exports.DataOrg.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.orgs) === null || _a === void 0 ? void 0 : _a.length) {
            obj.orgs = message.orgs.map((e) => exports.DataOrg.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ImportDataOrg.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseImportDataOrg();
        message.orgs = ((_a = object.orgs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DataOrg.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDataOrg() {
    return {
        orgId: "",
        org: undefined,
        iamPolicy: undefined,
        labelPolicy: undefined,
        lockoutPolicy: undefined,
        loginPolicy: undefined,
        passwordComplexityPolicy: undefined,
        privacyPolicy: undefined,
        projects: [],
        projectRoles: [],
        apiApps: [],
        oidcApps: [],
        humanUsers: [],
        machineUsers: [],
        triggerActions: [],
        actions: [],
        projectGrants: [],
        userGrants: [],
        orgMembers: [],
        projectMembers: [],
        projectGrantMembers: [],
        userMetadata: [],
        loginTexts: [],
        initMessages: [],
        passwordResetMessages: [],
        verifyEmailMessages: [],
        verifyPhoneMessages: [],
        domainClaimedMessages: [],
        passwordlessRegistrationMessages: [],
        oidcIdps: [],
        jwtIdps: [],
        secondFactors: [],
        multiFactors: [],
        idps: [],
        userLinks: [],
        domains: [],
        appKeys: [],
        machineKeys: [],
        inviteUserMessages: [],
    };
}
exports.DataOrg = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.org !== undefined) {
            management_js_1.AddOrgRequest.encode(message.org, writer.uint32(26).fork()).join();
        }
        if (message.iamPolicy !== undefined) {
            exports.AddCustomOrgIAMPolicyRequest.encode(message.iamPolicy, writer.uint32(34).fork()).join();
        }
        if (message.labelPolicy !== undefined) {
            management_js_1.AddCustomLabelPolicyRequest.encode(message.labelPolicy, writer.uint32(42).fork()).join();
        }
        if (message.lockoutPolicy !== undefined) {
            management_js_1.AddCustomLockoutPolicyRequest.encode(message.lockoutPolicy, writer.uint32(50).fork()).join();
        }
        if (message.loginPolicy !== undefined) {
            management_js_1.AddCustomLoginPolicyRequest.encode(message.loginPolicy, writer.uint32(58).fork()).join();
        }
        if (message.passwordComplexityPolicy !== undefined) {
            management_js_1.AddCustomPasswordComplexityPolicyRequest.encode(message.passwordComplexityPolicy, writer.uint32(66).fork())
                .join();
        }
        if (message.privacyPolicy !== undefined) {
            management_js_1.AddCustomPrivacyPolicyRequest.encode(message.privacyPolicy, writer.uint32(74).fork()).join();
        }
        for (const v of message.projects) {
            exports.DataProject.encode(v, writer.uint32(82).fork()).join();
        }
        for (const v of message.projectRoles) {
            management_js_1.AddProjectRoleRequest.encode(v, writer.uint32(90).fork()).join();
        }
        for (const v of message.apiApps) {
            exports.DataAPIApplication.encode(v, writer.uint32(98).fork()).join();
        }
        for (const v of message.oidcApps) {
            exports.DataOIDCApplication.encode(v, writer.uint32(106).fork()).join();
        }
        for (const v of message.humanUsers) {
            exports.DataHumanUser.encode(v, writer.uint32(114).fork()).join();
        }
        for (const v of message.machineUsers) {
            exports.DataMachineUser.encode(v, writer.uint32(122).fork()).join();
        }
        for (const v of message.triggerActions) {
            exports.SetTriggerActionsRequest.encode(v, writer.uint32(130).fork()).join();
        }
        for (const v of message.actions) {
            exports.DataAction.encode(v, writer.uint32(138).fork()).join();
        }
        for (const v of message.projectGrants) {
            exports.DataProjectGrant.encode(v, writer.uint32(146).fork()).join();
        }
        for (const v of message.userGrants) {
            management_js_1.AddUserGrantRequest.encode(v, writer.uint32(154).fork()).join();
        }
        for (const v of message.orgMembers) {
            management_js_1.AddOrgMemberRequest.encode(v, writer.uint32(162).fork()).join();
        }
        for (const v of message.projectMembers) {
            management_js_1.AddProjectMemberRequest.encode(v, writer.uint32(170).fork()).join();
        }
        for (const v of message.projectGrantMembers) {
            management_js_1.AddProjectGrantMemberRequest.encode(v, writer.uint32(178).fork()).join();
        }
        for (const v of message.userMetadata) {
            management_js_1.SetUserMetadataRequest.encode(v, writer.uint32(186).fork()).join();
        }
        for (const v of message.loginTexts) {
            management_js_1.SetCustomLoginTextsRequest.encode(v, writer.uint32(194).fork()).join();
        }
        for (const v of message.initMessages) {
            management_js_1.SetCustomInitMessageTextRequest.encode(v, writer.uint32(202).fork()).join();
        }
        for (const v of message.passwordResetMessages) {
            management_js_1.SetCustomPasswordResetMessageTextRequest.encode(v, writer.uint32(210).fork()).join();
        }
        for (const v of message.verifyEmailMessages) {
            management_js_1.SetCustomVerifyEmailMessageTextRequest.encode(v, writer.uint32(218).fork()).join();
        }
        for (const v of message.verifyPhoneMessages) {
            management_js_1.SetCustomVerifyPhoneMessageTextRequest.encode(v, writer.uint32(226).fork()).join();
        }
        for (const v of message.domainClaimedMessages) {
            management_js_1.SetCustomDomainClaimedMessageTextRequest.encode(v, writer.uint32(234).fork()).join();
        }
        for (const v of message.passwordlessRegistrationMessages) {
            management_js_1.SetCustomPasswordlessRegistrationMessageTextRequest.encode(v, writer.uint32(242).fork()).join();
        }
        for (const v of message.oidcIdps) {
            exports.DataOIDCIDP.encode(v, writer.uint32(250).fork()).join();
        }
        for (const v of message.jwtIdps) {
            exports.DataJWTIDP.encode(v, writer.uint32(258).fork()).join();
        }
        for (const v of message.secondFactors) {
            management_js_1.AddSecondFactorToLoginPolicyRequest.encode(v, writer.uint32(266).fork()).join();
        }
        for (const v of message.multiFactors) {
            management_js_1.AddMultiFactorToLoginPolicyRequest.encode(v, writer.uint32(274).fork()).join();
        }
        for (const v of message.idps) {
            management_js_1.AddIDPToLoginPolicyRequest.encode(v, writer.uint32(282).fork()).join();
        }
        for (const v of message.userLinks) {
            idp_js_1.IDPUserLink.encode(v, writer.uint32(290).fork()).join();
        }
        for (const v of message.domains) {
            org_js_1.Domain.encode(v, writer.uint32(298).fork()).join();
        }
        for (const v of message.appKeys) {
            exports.DataAppKey.encode(v, writer.uint32(306).fork()).join();
        }
        for (const v of message.machineKeys) {
            exports.DataMachineKey.encode(v, writer.uint32(314).fork()).join();
        }
        for (const v of message.inviteUserMessages) {
            management_js_1.SetCustomInviteUserMessageTextRequest.encode(v, writer.uint32(322).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataOrg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.org = management_js_1.AddOrgRequest.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.iamPolicy = exports.AddCustomOrgIAMPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.labelPolicy = management_js_1.AddCustomLabelPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lockoutPolicy = management_js_1.AddCustomLockoutPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.loginPolicy = management_js_1.AddCustomLoginPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.passwordComplexityPolicy = management_js_1.AddCustomPasswordComplexityPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.privacyPolicy = management_js_1.AddCustomPrivacyPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.projects.push(exports.DataProject.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.projectRoles.push(management_js_1.AddProjectRoleRequest.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.apiApps.push(exports.DataAPIApplication.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.oidcApps.push(exports.DataOIDCApplication.decode(reader, reader.uint32()));
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.humanUsers.push(exports.DataHumanUser.decode(reader, reader.uint32()));
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.machineUsers.push(exports.DataMachineUser.decode(reader, reader.uint32()));
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.triggerActions.push(exports.SetTriggerActionsRequest.decode(reader, reader.uint32()));
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.actions.push(exports.DataAction.decode(reader, reader.uint32()));
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.projectGrants.push(exports.DataProjectGrant.decode(reader, reader.uint32()));
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.userGrants.push(management_js_1.AddUserGrantRequest.decode(reader, reader.uint32()));
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.orgMembers.push(management_js_1.AddOrgMemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.projectMembers.push(management_js_1.AddProjectMemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.projectGrantMembers.push(management_js_1.AddProjectGrantMemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.userMetadata.push(management_js_1.SetUserMetadataRequest.decode(reader, reader.uint32()));
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.loginTexts.push(management_js_1.SetCustomLoginTextsRequest.decode(reader, reader.uint32()));
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.initMessages.push(management_js_1.SetCustomInitMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.passwordResetMessages.push(management_js_1.SetCustomPasswordResetMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.verifyEmailMessages.push(management_js_1.SetCustomVerifyEmailMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.verifyPhoneMessages.push(management_js_1.SetCustomVerifyPhoneMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.domainClaimedMessages.push(management_js_1.SetCustomDomainClaimedMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }
                    message.passwordlessRegistrationMessages.push(management_js_1.SetCustomPasswordlessRegistrationMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 31:
                    if (tag !== 250) {
                        break;
                    }
                    message.oidcIdps.push(exports.DataOIDCIDP.decode(reader, reader.uint32()));
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.jwtIdps.push(exports.DataJWTIDP.decode(reader, reader.uint32()));
                    continue;
                case 33:
                    if (tag !== 266) {
                        break;
                    }
                    message.secondFactors.push(management_js_1.AddSecondFactorToLoginPolicyRequest.decode(reader, reader.uint32()));
                    continue;
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.multiFactors.push(management_js_1.AddMultiFactorToLoginPolicyRequest.decode(reader, reader.uint32()));
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }
                    message.idps.push(management_js_1.AddIDPToLoginPolicyRequest.decode(reader, reader.uint32()));
                    continue;
                case 36:
                    if (tag !== 290) {
                        break;
                    }
                    message.userLinks.push(idp_js_1.IDPUserLink.decode(reader, reader.uint32()));
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.domains.push(org_js_1.Domain.decode(reader, reader.uint32()));
                    continue;
                case 38:
                    if (tag !== 306) {
                        break;
                    }
                    message.appKeys.push(exports.DataAppKey.decode(reader, reader.uint32()));
                    continue;
                case 39:
                    if (tag !== 314) {
                        break;
                    }
                    message.machineKeys.push(exports.DataMachineKey.decode(reader, reader.uint32()));
                    continue;
                case 40:
                    if (tag !== 322) {
                        break;
                    }
                    message.inviteUserMessages.push(management_js_1.SetCustomInviteUserMessageTextRequest.decode(reader, reader.uint32()));
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
            org: isSet(object.org) ? management_js_1.AddOrgRequest.fromJSON(object.org) : undefined,
            iamPolicy: isSet(object.iamPolicy) ? exports.AddCustomOrgIAMPolicyRequest.fromJSON(object.iamPolicy) : undefined,
            labelPolicy: isSet(object.labelPolicy) ? management_js_1.AddCustomLabelPolicyRequest.fromJSON(object.labelPolicy) : undefined,
            lockoutPolicy: isSet(object.lockoutPolicy)
                ? management_js_1.AddCustomLockoutPolicyRequest.fromJSON(object.lockoutPolicy)
                : undefined,
            loginPolicy: isSet(object.loginPolicy) ? management_js_1.AddCustomLoginPolicyRequest.fromJSON(object.loginPolicy) : undefined,
            passwordComplexityPolicy: isSet(object.passwordComplexityPolicy)
                ? management_js_1.AddCustomPasswordComplexityPolicyRequest.fromJSON(object.passwordComplexityPolicy)
                : undefined,
            privacyPolicy: isSet(object.privacyPolicy)
                ? management_js_1.AddCustomPrivacyPolicyRequest.fromJSON(object.privacyPolicy)
                : undefined,
            projects: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.projects)
                ? object.projects.map((e) => exports.DataProject.fromJSON(e))
                : [],
            projectRoles: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.projectRoles)
                ? object.projectRoles.map((e) => management_js_1.AddProjectRoleRequest.fromJSON(e))
                : [],
            apiApps: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.apiApps)
                ? object.apiApps.map((e) => exports.DataAPIApplication.fromJSON(e))
                : [],
            oidcApps: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.oidcApps)
                ? object.oidcApps.map((e) => exports.DataOIDCApplication.fromJSON(e))
                : [],
            humanUsers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.humanUsers)
                ? object.humanUsers.map((e) => exports.DataHumanUser.fromJSON(e))
                : [],
            machineUsers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.machineUsers)
                ? object.machineUsers.map((e) => exports.DataMachineUser.fromJSON(e))
                : [],
            triggerActions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.triggerActions)
                ? object.triggerActions.map((e) => exports.SetTriggerActionsRequest.fromJSON(e))
                : [],
            actions: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.actions)
                ? object.actions.map((e) => exports.DataAction.fromJSON(e))
                : [],
            projectGrants: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.projectGrants)
                ? object.projectGrants.map((e) => exports.DataProjectGrant.fromJSON(e))
                : [],
            userGrants: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userGrants)
                ? object.userGrants.map((e) => management_js_1.AddUserGrantRequest.fromJSON(e))
                : [],
            orgMembers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.orgMembers)
                ? object.orgMembers.map((e) => management_js_1.AddOrgMemberRequest.fromJSON(e))
                : [],
            projectMembers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.projectMembers)
                ? object.projectMembers.map((e) => management_js_1.AddProjectMemberRequest.fromJSON(e))
                : [],
            projectGrantMembers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.projectGrantMembers)
                ? object.projectGrantMembers.map((e) => management_js_1.AddProjectGrantMemberRequest.fromJSON(e))
                : [],
            userMetadata: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userMetadata)
                ? object.userMetadata.map((e) => management_js_1.SetUserMetadataRequest.fromJSON(e))
                : [],
            loginTexts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.loginTexts)
                ? object.loginTexts.map((e) => management_js_1.SetCustomLoginTextsRequest.fromJSON(e))
                : [],
            initMessages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.initMessages)
                ? object.initMessages.map((e) => management_js_1.SetCustomInitMessageTextRequest.fromJSON(e))
                : [],
            passwordResetMessages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.passwordResetMessages)
                ? object.passwordResetMessages.map((e) => management_js_1.SetCustomPasswordResetMessageTextRequest.fromJSON(e))
                : [],
            verifyEmailMessages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.verifyEmailMessages)
                ? object.verifyEmailMessages.map((e) => management_js_1.SetCustomVerifyEmailMessageTextRequest.fromJSON(e))
                : [],
            verifyPhoneMessages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.verifyPhoneMessages)
                ? object.verifyPhoneMessages.map((e) => management_js_1.SetCustomVerifyPhoneMessageTextRequest.fromJSON(e))
                : [],
            domainClaimedMessages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.domainClaimedMessages)
                ? object.domainClaimedMessages.map((e) => management_js_1.SetCustomDomainClaimedMessageTextRequest.fromJSON(e))
                : [],
            passwordlessRegistrationMessages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.passwordlessRegistrationMessages)
                ? object.passwordlessRegistrationMessages.map((e) => management_js_1.SetCustomPasswordlessRegistrationMessageTextRequest.fromJSON(e))
                : [],
            oidcIdps: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.oidcIdps)
                ? object.oidcIdps.map((e) => exports.DataOIDCIDP.fromJSON(e))
                : [],
            jwtIdps: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.jwtIdps) ? object.jwtIdps.map((e) => exports.DataJWTIDP.fromJSON(e)) : [],
            secondFactors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.secondFactors)
                ? object.secondFactors.map((e) => management_js_1.AddSecondFactorToLoginPolicyRequest.fromJSON(e))
                : [],
            multiFactors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.multiFactors)
                ? object.multiFactors.map((e) => management_js_1.AddMultiFactorToLoginPolicyRequest.fromJSON(e))
                : [],
            idps: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.idps)
                ? object.idps.map((e) => management_js_1.AddIDPToLoginPolicyRequest.fromJSON(e))
                : [],
            userLinks: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userLinks)
                ? object.userLinks.map((e) => idp_js_1.IDPUserLink.fromJSON(e))
                : [],
            domains: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.domains)
                ? object.domains.map((e) => org_js_1.Domain.fromJSON(e))
                : [],
            appKeys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.appKeys) ? object.appKeys.map((e) => exports.DataAppKey.fromJSON(e)) : [],
            machineKeys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.machineKeys)
                ? object.machineKeys.map((e) => exports.DataMachineKey.fromJSON(e))
                : [],
            inviteUserMessages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.inviteUserMessages)
                ? object.inviteUserMessages.map((e) => management_js_1.SetCustomInviteUserMessageTextRequest.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
        const obj = {};
        if (message.orgId !== "") {
            obj.orgId = message.orgId;
        }
        if (message.org !== undefined) {
            obj.org = management_js_1.AddOrgRequest.toJSON(message.org);
        }
        if (message.iamPolicy !== undefined) {
            obj.iamPolicy = exports.AddCustomOrgIAMPolicyRequest.toJSON(message.iamPolicy);
        }
        if (message.labelPolicy !== undefined) {
            obj.labelPolicy = management_js_1.AddCustomLabelPolicyRequest.toJSON(message.labelPolicy);
        }
        if (message.lockoutPolicy !== undefined) {
            obj.lockoutPolicy = management_js_1.AddCustomLockoutPolicyRequest.toJSON(message.lockoutPolicy);
        }
        if (message.loginPolicy !== undefined) {
            obj.loginPolicy = management_js_1.AddCustomLoginPolicyRequest.toJSON(message.loginPolicy);
        }
        if (message.passwordComplexityPolicy !== undefined) {
            obj.passwordComplexityPolicy = management_js_1.AddCustomPasswordComplexityPolicyRequest.toJSON(message.passwordComplexityPolicy);
        }
        if (message.privacyPolicy !== undefined) {
            obj.privacyPolicy = management_js_1.AddCustomPrivacyPolicyRequest.toJSON(message.privacyPolicy);
        }
        if ((_a = message.projects) === null || _a === void 0 ? void 0 : _a.length) {
            obj.projects = message.projects.map((e) => exports.DataProject.toJSON(e));
        }
        if ((_b = message.projectRoles) === null || _b === void 0 ? void 0 : _b.length) {
            obj.projectRoles = message.projectRoles.map((e) => management_js_1.AddProjectRoleRequest.toJSON(e));
        }
        if ((_c = message.apiApps) === null || _c === void 0 ? void 0 : _c.length) {
            obj.apiApps = message.apiApps.map((e) => exports.DataAPIApplication.toJSON(e));
        }
        if ((_d = message.oidcApps) === null || _d === void 0 ? void 0 : _d.length) {
            obj.oidcApps = message.oidcApps.map((e) => exports.DataOIDCApplication.toJSON(e));
        }
        if ((_e = message.humanUsers) === null || _e === void 0 ? void 0 : _e.length) {
            obj.humanUsers = message.humanUsers.map((e) => exports.DataHumanUser.toJSON(e));
        }
        if ((_f = message.machineUsers) === null || _f === void 0 ? void 0 : _f.length) {
            obj.machineUsers = message.machineUsers.map((e) => exports.DataMachineUser.toJSON(e));
        }
        if ((_g = message.triggerActions) === null || _g === void 0 ? void 0 : _g.length) {
            obj.triggerActions = message.triggerActions.map((e) => exports.SetTriggerActionsRequest.toJSON(e));
        }
        if ((_h = message.actions) === null || _h === void 0 ? void 0 : _h.length) {
            obj.actions = message.actions.map((e) => exports.DataAction.toJSON(e));
        }
        if ((_j = message.projectGrants) === null || _j === void 0 ? void 0 : _j.length) {
            obj.projectGrants = message.projectGrants.map((e) => exports.DataProjectGrant.toJSON(e));
        }
        if ((_k = message.userGrants) === null || _k === void 0 ? void 0 : _k.length) {
            obj.userGrants = message.userGrants.map((e) => management_js_1.AddUserGrantRequest.toJSON(e));
        }
        if ((_l = message.orgMembers) === null || _l === void 0 ? void 0 : _l.length) {
            obj.orgMembers = message.orgMembers.map((e) => management_js_1.AddOrgMemberRequest.toJSON(e));
        }
        if ((_m = message.projectMembers) === null || _m === void 0 ? void 0 : _m.length) {
            obj.projectMembers = message.projectMembers.map((e) => management_js_1.AddProjectMemberRequest.toJSON(e));
        }
        if ((_o = message.projectGrantMembers) === null || _o === void 0 ? void 0 : _o.length) {
            obj.projectGrantMembers = message.projectGrantMembers.map((e) => management_js_1.AddProjectGrantMemberRequest.toJSON(e));
        }
        if ((_p = message.userMetadata) === null || _p === void 0 ? void 0 : _p.length) {
            obj.userMetadata = message.userMetadata.map((e) => management_js_1.SetUserMetadataRequest.toJSON(e));
        }
        if ((_q = message.loginTexts) === null || _q === void 0 ? void 0 : _q.length) {
            obj.loginTexts = message.loginTexts.map((e) => management_js_1.SetCustomLoginTextsRequest.toJSON(e));
        }
        if ((_r = message.initMessages) === null || _r === void 0 ? void 0 : _r.length) {
            obj.initMessages = message.initMessages.map((e) => management_js_1.SetCustomInitMessageTextRequest.toJSON(e));
        }
        if ((_s = message.passwordResetMessages) === null || _s === void 0 ? void 0 : _s.length) {
            obj.passwordResetMessages = message.passwordResetMessages.map((e) => management_js_1.SetCustomPasswordResetMessageTextRequest.toJSON(e));
        }
        if ((_t = message.verifyEmailMessages) === null || _t === void 0 ? void 0 : _t.length) {
            obj.verifyEmailMessages = message.verifyEmailMessages.map((e) => management_js_1.SetCustomVerifyEmailMessageTextRequest.toJSON(e));
        }
        if ((_u = message.verifyPhoneMessages) === null || _u === void 0 ? void 0 : _u.length) {
            obj.verifyPhoneMessages = message.verifyPhoneMessages.map((e) => management_js_1.SetCustomVerifyPhoneMessageTextRequest.toJSON(e));
        }
        if ((_v = message.domainClaimedMessages) === null || _v === void 0 ? void 0 : _v.length) {
            obj.domainClaimedMessages = message.domainClaimedMessages.map((e) => management_js_1.SetCustomDomainClaimedMessageTextRequest.toJSON(e));
        }
        if ((_w = message.passwordlessRegistrationMessages) === null || _w === void 0 ? void 0 : _w.length) {
            obj.passwordlessRegistrationMessages = message.passwordlessRegistrationMessages.map((e) => management_js_1.SetCustomPasswordlessRegistrationMessageTextRequest.toJSON(e));
        }
        if ((_x = message.oidcIdps) === null || _x === void 0 ? void 0 : _x.length) {
            obj.oidcIdps = message.oidcIdps.map((e) => exports.DataOIDCIDP.toJSON(e));
        }
        if ((_y = message.jwtIdps) === null || _y === void 0 ? void 0 : _y.length) {
            obj.jwtIdps = message.jwtIdps.map((e) => exports.DataJWTIDP.toJSON(e));
        }
        if ((_z = message.secondFactors) === null || _z === void 0 ? void 0 : _z.length) {
            obj.secondFactors = message.secondFactors.map((e) => management_js_1.AddSecondFactorToLoginPolicyRequest.toJSON(e));
        }
        if ((_0 = message.multiFactors) === null || _0 === void 0 ? void 0 : _0.length) {
            obj.multiFactors = message.multiFactors.map((e) => management_js_1.AddMultiFactorToLoginPolicyRequest.toJSON(e));
        }
        if ((_1 = message.idps) === null || _1 === void 0 ? void 0 : _1.length) {
            obj.idps = message.idps.map((e) => management_js_1.AddIDPToLoginPolicyRequest.toJSON(e));
        }
        if ((_2 = message.userLinks) === null || _2 === void 0 ? void 0 : _2.length) {
            obj.userLinks = message.userLinks.map((e) => idp_js_1.IDPUserLink.toJSON(e));
        }
        if ((_3 = message.domains) === null || _3 === void 0 ? void 0 : _3.length) {
            obj.domains = message.domains.map((e) => org_js_1.Domain.toJSON(e));
        }
        if ((_4 = message.appKeys) === null || _4 === void 0 ? void 0 : _4.length) {
            obj.appKeys = message.appKeys.map((e) => exports.DataAppKey.toJSON(e));
        }
        if ((_5 = message.machineKeys) === null || _5 === void 0 ? void 0 : _5.length) {
            obj.machineKeys = message.machineKeys.map((e) => exports.DataMachineKey.toJSON(e));
        }
        if ((_6 = message.inviteUserMessages) === null || _6 === void 0 ? void 0 : _6.length) {
            obj.inviteUserMessages = message.inviteUserMessages.map((e) => management_js_1.SetCustomInviteUserMessageTextRequest.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.DataOrg.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        const message = createBaseDataOrg();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.org = (object.org !== undefined && object.org !== null) ? management_js_1.AddOrgRequest.fromPartial(object.org) : undefined;
        message.iamPolicy = (object.iamPolicy !== undefined && object.iamPolicy !== null)
            ? exports.AddCustomOrgIAMPolicyRequest.fromPartial(object.iamPolicy)
            : undefined;
        message.labelPolicy = (object.labelPolicy !== undefined && object.labelPolicy !== null)
            ? management_js_1.AddCustomLabelPolicyRequest.fromPartial(object.labelPolicy)
            : undefined;
        message.lockoutPolicy = (object.lockoutPolicy !== undefined && object.lockoutPolicy !== null)
            ? management_js_1.AddCustomLockoutPolicyRequest.fromPartial(object.lockoutPolicy)
            : undefined;
        message.loginPolicy = (object.loginPolicy !== undefined && object.loginPolicy !== null)
            ? management_js_1.AddCustomLoginPolicyRequest.fromPartial(object.loginPolicy)
            : undefined;
        message.passwordComplexityPolicy =
            (object.passwordComplexityPolicy !== undefined && object.passwordComplexityPolicy !== null)
                ? management_js_1.AddCustomPasswordComplexityPolicyRequest.fromPartial(object.passwordComplexityPolicy)
                : undefined;
        message.privacyPolicy = (object.privacyPolicy !== undefined && object.privacyPolicy !== null)
            ? management_js_1.AddCustomPrivacyPolicyRequest.fromPartial(object.privacyPolicy)
            : undefined;
        message.projects = ((_b = object.projects) === null || _b === void 0 ? void 0 : _b.map((e) => exports.DataProject.fromPartial(e))) || [];
        message.projectRoles = ((_c = object.projectRoles) === null || _c === void 0 ? void 0 : _c.map((e) => management_js_1.AddProjectRoleRequest.fromPartial(e))) || [];
        message.apiApps = ((_d = object.apiApps) === null || _d === void 0 ? void 0 : _d.map((e) => exports.DataAPIApplication.fromPartial(e))) || [];
        message.oidcApps = ((_e = object.oidcApps) === null || _e === void 0 ? void 0 : _e.map((e) => exports.DataOIDCApplication.fromPartial(e))) || [];
        message.humanUsers = ((_f = object.humanUsers) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DataHumanUser.fromPartial(e))) || [];
        message.machineUsers = ((_g = object.machineUsers) === null || _g === void 0 ? void 0 : _g.map((e) => exports.DataMachineUser.fromPartial(e))) || [];
        message.triggerActions = ((_h = object.triggerActions) === null || _h === void 0 ? void 0 : _h.map((e) => exports.SetTriggerActionsRequest.fromPartial(e))) || [];
        message.actions = ((_j = object.actions) === null || _j === void 0 ? void 0 : _j.map((e) => exports.DataAction.fromPartial(e))) || [];
        message.projectGrants = ((_k = object.projectGrants) === null || _k === void 0 ? void 0 : _k.map((e) => exports.DataProjectGrant.fromPartial(e))) || [];
        message.userGrants = ((_l = object.userGrants) === null || _l === void 0 ? void 0 : _l.map((e) => management_js_1.AddUserGrantRequest.fromPartial(e))) || [];
        message.orgMembers = ((_m = object.orgMembers) === null || _m === void 0 ? void 0 : _m.map((e) => management_js_1.AddOrgMemberRequest.fromPartial(e))) || [];
        message.projectMembers = ((_o = object.projectMembers) === null || _o === void 0 ? void 0 : _o.map((e) => management_js_1.AddProjectMemberRequest.fromPartial(e))) || [];
        message.projectGrantMembers = ((_p = object.projectGrantMembers) === null || _p === void 0 ? void 0 : _p.map((e) => management_js_1.AddProjectGrantMemberRequest.fromPartial(e))) ||
            [];
        message.userMetadata = ((_q = object.userMetadata) === null || _q === void 0 ? void 0 : _q.map((e) => management_js_1.SetUserMetadataRequest.fromPartial(e))) || [];
        message.loginTexts = ((_r = object.loginTexts) === null || _r === void 0 ? void 0 : _r.map((e) => management_js_1.SetCustomLoginTextsRequest.fromPartial(e))) || [];
        message.initMessages = ((_s = object.initMessages) === null || _s === void 0 ? void 0 : _s.map((e) => management_js_1.SetCustomInitMessageTextRequest.fromPartial(e))) || [];
        message.passwordResetMessages =
            ((_t = object.passwordResetMessages) === null || _t === void 0 ? void 0 : _t.map((e) => management_js_1.SetCustomPasswordResetMessageTextRequest.fromPartial(e))) || [];
        message.verifyEmailMessages =
            ((_u = object.verifyEmailMessages) === null || _u === void 0 ? void 0 : _u.map((e) => management_js_1.SetCustomVerifyEmailMessageTextRequest.fromPartial(e))) || [];
        message.verifyPhoneMessages =
            ((_v = object.verifyPhoneMessages) === null || _v === void 0 ? void 0 : _v.map((e) => management_js_1.SetCustomVerifyPhoneMessageTextRequest.fromPartial(e))) || [];
        message.domainClaimedMessages =
            ((_w = object.domainClaimedMessages) === null || _w === void 0 ? void 0 : _w.map((e) => management_js_1.SetCustomDomainClaimedMessageTextRequest.fromPartial(e))) || [];
        message.passwordlessRegistrationMessages =
            ((_x = object.passwordlessRegistrationMessages) === null || _x === void 0 ? void 0 : _x.map((e) => management_js_1.SetCustomPasswordlessRegistrationMessageTextRequest.fromPartial(e))) || [];
        message.oidcIdps = ((_y = object.oidcIdps) === null || _y === void 0 ? void 0 : _y.map((e) => exports.DataOIDCIDP.fromPartial(e))) || [];
        message.jwtIdps = ((_z = object.jwtIdps) === null || _z === void 0 ? void 0 : _z.map((e) => exports.DataJWTIDP.fromPartial(e))) || [];
        message.secondFactors = ((_0 = object.secondFactors) === null || _0 === void 0 ? void 0 : _0.map((e) => management_js_1.AddSecondFactorToLoginPolicyRequest.fromPartial(e))) || [];
        message.multiFactors = ((_1 = object.multiFactors) === null || _1 === void 0 ? void 0 : _1.map((e) => management_js_1.AddMultiFactorToLoginPolicyRequest.fromPartial(e))) || [];
        message.idps = ((_2 = object.idps) === null || _2 === void 0 ? void 0 : _2.map((e) => management_js_1.AddIDPToLoginPolicyRequest.fromPartial(e))) || [];
        message.userLinks = ((_3 = object.userLinks) === null || _3 === void 0 ? void 0 : _3.map((e) => idp_js_1.IDPUserLink.fromPartial(e))) || [];
        message.domains = ((_4 = object.domains) === null || _4 === void 0 ? void 0 : _4.map((e) => org_js_1.Domain.fromPartial(e))) || [];
        message.appKeys = ((_5 = object.appKeys) === null || _5 === void 0 ? void 0 : _5.map((e) => exports.DataAppKey.fromPartial(e))) || [];
        message.machineKeys = ((_6 = object.machineKeys) === null || _6 === void 0 ? void 0 : _6.map((e) => exports.DataMachineKey.fromPartial(e))) || [];
        message.inviteUserMessages =
            ((_7 = object.inviteUserMessages) === null || _7 === void 0 ? void 0 : _7.map((e) => management_js_1.SetCustomInviteUserMessageTextRequest.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDataOIDCIDP() {
    return { idpId: "", idp: undefined };
}
exports.DataOIDCIDP = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.idp !== undefined) {
            management_js_1.AddOrgOIDCIDPRequest.encode(message.idp, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataOIDCIDP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idp = management_js_1.AddOrgOIDCIDPRequest.decode(reader, reader.uint32());
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
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
            idp: isSet(object.idp) ? management_js_1.AddOrgOIDCIDPRequest.fromJSON(object.idp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.idp !== undefined) {
            obj.idp = management_js_1.AddOrgOIDCIDPRequest.toJSON(message.idp);
        }
        return obj;
    },
    create(base) {
        return exports.DataOIDCIDP.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataOIDCIDP();
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.idp = (object.idp !== undefined && object.idp !== null)
            ? management_js_1.AddOrgOIDCIDPRequest.fromPartial(object.idp)
            : undefined;
        return message;
    },
};
function createBaseDataJWTIDP() {
    return { idpId: "", idp: undefined };
}
exports.DataJWTIDP = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.idp !== undefined) {
            management_js_1.AddOrgJWTIDPRequest.encode(message.idp, writer.uint32(258).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataJWTIDP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.idp = management_js_1.AddOrgJWTIDPRequest.decode(reader, reader.uint32());
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
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
            idp: isSet(object.idp) ? management_js_1.AddOrgJWTIDPRequest.fromJSON(object.idp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.idp !== undefined) {
            obj.idp = management_js_1.AddOrgJWTIDPRequest.toJSON(message.idp);
        }
        return obj;
    },
    create(base) {
        return exports.DataJWTIDP.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataJWTIDP();
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.idp = (object.idp !== undefined && object.idp !== null)
            ? management_js_1.AddOrgJWTIDPRequest.fromPartial(object.idp)
            : undefined;
        return message;
    },
};
function createBaseExportHumanUser() {
    return {
        userName: "",
        profile: undefined,
        email: undefined,
        phone: undefined,
        password: "",
        hashedPassword: undefined,
        passwordChangeRequired: false,
        requestPasswordlessRegistration: false,
        otpCode: "",
    };
}
exports.ExportHumanUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.profile !== undefined) {
            exports.ExportHumanUser_Profile.encode(message.profile, writer.uint32(18).fork()).join();
        }
        if (message.email !== undefined) {
            exports.ExportHumanUser_Email.encode(message.email, writer.uint32(26).fork()).join();
        }
        if (message.phone !== undefined) {
            exports.ExportHumanUser_Phone.encode(message.phone, writer.uint32(34).fork()).join();
        }
        if (message.password !== "") {
            writer.uint32(42).string(message.password);
        }
        if (message.hashedPassword !== undefined) {
            exports.ExportHumanUser_HashedPassword.encode(message.hashedPassword, writer.uint32(50).fork()).join();
        }
        if (message.passwordChangeRequired !== false) {
            writer.uint32(56).bool(message.passwordChangeRequired);
        }
        if (message.requestPasswordlessRegistration !== false) {
            writer.uint32(64).bool(message.requestPasswordlessRegistration);
        }
        if (message.otpCode !== "") {
            writer.uint32(74).string(message.otpCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.profile = exports.ExportHumanUser_Profile.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.email = exports.ExportHumanUser_Email.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.phone = exports.ExportHumanUser_Phone.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.hashedPassword = exports.ExportHumanUser_HashedPassword.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.passwordChangeRequired = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.requestPasswordlessRegistration = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.otpCode = reader.string();
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
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            profile: isSet(object.profile) ? exports.ExportHumanUser_Profile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? exports.ExportHumanUser_Email.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? exports.ExportHumanUser_Phone.fromJSON(object.phone) : undefined,
            password: isSet(object.password) ? globalThis.String(object.password) : "",
            hashedPassword: isSet(object.hashedPassword)
                ? exports.ExportHumanUser_HashedPassword.fromJSON(object.hashedPassword)
                : undefined,
            passwordChangeRequired: isSet(object.passwordChangeRequired)
                ? globalThis.Boolean(object.passwordChangeRequired)
                : false,
            requestPasswordlessRegistration: isSet(object.requestPasswordlessRegistration)
                ? globalThis.Boolean(object.requestPasswordlessRegistration)
                : false,
            otpCode: isSet(object.otpCode) ? globalThis.String(object.otpCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if (message.profile !== undefined) {
            obj.profile = exports.ExportHumanUser_Profile.toJSON(message.profile);
        }
        if (message.email !== undefined) {
            obj.email = exports.ExportHumanUser_Email.toJSON(message.email);
        }
        if (message.phone !== undefined) {
            obj.phone = exports.ExportHumanUser_Phone.toJSON(message.phone);
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        if (message.hashedPassword !== undefined) {
            obj.hashedPassword = exports.ExportHumanUser_HashedPassword.toJSON(message.hashedPassword);
        }
        if (message.passwordChangeRequired !== false) {
            obj.passwordChangeRequired = message.passwordChangeRequired;
        }
        if (message.requestPasswordlessRegistration !== false) {
            obj.requestPasswordlessRegistration = message.requestPasswordlessRegistration;
        }
        if (message.otpCode !== "") {
            obj.otpCode = message.otpCode;
        }
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseExportHumanUser();
        message.userName = (_a = object.userName) !== null && _a !== void 0 ? _a : "";
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? exports.ExportHumanUser_Profile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null)
            ? exports.ExportHumanUser_Email.fromPartial(object.email)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? exports.ExportHumanUser_Phone.fromPartial(object.phone)
            : undefined;
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
            ? exports.ExportHumanUser_HashedPassword.fromPartial(object.hashedPassword)
            : undefined;
        message.passwordChangeRequired = (_c = object.passwordChangeRequired) !== null && _c !== void 0 ? _c : false;
        message.requestPasswordlessRegistration = (_d = object.requestPasswordlessRegistration) !== null && _d !== void 0 ? _d : false;
        message.otpCode = (_e = object.otpCode) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseExportHumanUser_Profile() {
    return { firstName: "", lastName: "", nickName: "", displayName: "", preferredLanguage: "", gender: 0 };
}
exports.ExportHumanUser_Profile = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(18).string(message.lastName);
        }
        if (message.nickName !== "") {
            writer.uint32(26).string(message.nickName);
        }
        if (message.displayName !== "") {
            writer.uint32(34).string(message.displayName);
        }
        if (message.preferredLanguage !== "") {
            writer.uint32(42).string(message.preferredLanguage);
        }
        if (message.gender !== 0) {
            writer.uint32(48).int32(message.gender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_Profile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nickName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLanguage = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gender = reader.int32();
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
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : "",
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            preferredLanguage: isSet(object.preferredLanguage) ? globalThis.String(object.preferredLanguage) : "",
            gender: isSet(object.gender) ? (0, user_js_1.genderFromJSON)(object.gender) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.nickName !== "") {
            obj.nickName = message.nickName;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.preferredLanguage !== "") {
            obj.preferredLanguage = message.preferredLanguage;
        }
        if (message.gender !== 0) {
            obj.gender = (0, user_js_1.genderToJSON)(message.gender);
        }
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_Profile.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseExportHumanUser_Profile();
        message.firstName = (_a = object.firstName) !== null && _a !== void 0 ? _a : "";
        message.lastName = (_b = object.lastName) !== null && _b !== void 0 ? _b : "";
        message.nickName = (_c = object.nickName) !== null && _c !== void 0 ? _c : "";
        message.displayName = (_d = object.displayName) !== null && _d !== void 0 ? _d : "";
        message.preferredLanguage = (_e = object.preferredLanguage) !== null && _e !== void 0 ? _e : "";
        message.gender = (_f = object.gender) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseExportHumanUser_Email() {
    return { email: "", isEmailVerified: false };
}
exports.ExportHumanUser_Email = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.isEmailVerified !== false) {
            writer.uint32(16).bool(message.isEmailVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_Email();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isEmailVerified = reader.bool();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            isEmailVerified: isSet(object.isEmailVerified) ? globalThis.Boolean(object.isEmailVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.isEmailVerified !== false) {
            obj.isEmailVerified = message.isEmailVerified;
        }
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_Email.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseExportHumanUser_Email();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.isEmailVerified = (_b = object.isEmailVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseExportHumanUser_Phone() {
    return { phone: "", isPhoneVerified: false };
}
exports.ExportHumanUser_Phone = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        if (message.isPhoneVerified !== false) {
            writer.uint32(16).bool(message.isPhoneVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_Phone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isPhoneVerified = reader.bool();
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
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            isPhoneVerified: isSet(object.isPhoneVerified) ? globalThis.Boolean(object.isPhoneVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.isPhoneVerified !== false) {
            obj.isPhoneVerified = message.isPhoneVerified;
        }
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_Phone.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseExportHumanUser_Phone();
        message.phone = (_a = object.phone) !== null && _a !== void 0 ? _a : "";
        message.isPhoneVerified = (_b = object.isPhoneVerified) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseExportHumanUser_HashedPassword() {
    return { value: "", algorithm: "" };
}
exports.ExportHumanUser_HashedPassword = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        if (message.algorithm !== "") {
            writer.uint32(18).string(message.algorithm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_HashedPassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.algorithm = reader.string();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
            algorithm: isSet(object.algorithm) ? globalThis.String(object.algorithm) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.value !== "") {
            obj.value = message.value;
        }
        if (message.algorithm !== "") {
            obj.algorithm = message.algorithm;
        }
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_HashedPassword.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseExportHumanUser_HashedPassword();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        message.algorithm = (_b = object.algorithm) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDataAppKey() {
    return {
        id: "",
        projectId: "",
        appId: "",
        clientId: "",
        type: 0,
        expirationDate: undefined,
        publicKey: Buffer.alloc(0),
    };
}
exports.DataAppKey = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.appId !== "") {
            writer.uint32(26).string(message.appId);
        }
        if (message.clientId !== "") {
            writer.uint32(34).string(message.clientId);
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.expirationDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(50).fork()).join();
        }
        if (message.publicKey.length !== 0) {
            writer.uint32(58).bytes(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAppKey();
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
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.appId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.publicKey = Buffer.from(reader.bytes());
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
            projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
            appId: isSet(object.appId) ? globalThis.String(object.appId) : "",
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            type: isSet(object.type) ? (0, auth_n_key_js_1.keyTypeFromJSON)(object.type) : 0,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
            publicKey: isSet(object.publicKey) ? Buffer.from(bytesFromBase64(object.publicKey)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        if (message.appId !== "") {
            obj.appId = message.appId;
        }
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.type !== 0) {
            obj.type = (0, auth_n_key_js_1.keyTypeToJSON)(message.type);
        }
        if (message.expirationDate !== undefined) {
            obj.expirationDate = message.expirationDate.toISOString();
        }
        if (message.publicKey.length !== 0) {
            obj.publicKey = base64FromBytes(message.publicKey);
        }
        return obj;
    },
    create(base) {
        return exports.DataAppKey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseDataAppKey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.appId = (_c = object.appId) !== null && _c !== void 0 ? _c : "";
        message.clientId = (_d = object.clientId) !== null && _d !== void 0 ? _d : "";
        message.type = (_e = object.type) !== null && _e !== void 0 ? _e : 0;
        message.expirationDate = (_f = object.expirationDate) !== null && _f !== void 0 ? _f : undefined;
        message.publicKey = (_g = object.publicKey) !== null && _g !== void 0 ? _g : Buffer.alloc(0);
        return message;
    },
};
function createBaseDataMachineKey() {
    return { keyId: "", userId: "", type: 0, expirationDate: undefined, publicKey: Buffer.alloc(0) };
}
exports.DataMachineKey = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.expirationDate !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(34).fork()).join();
        }
        if (message.publicKey.length !== 0) {
            writer.uint32(42).bytes(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataMachineKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keyId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.publicKey = Buffer.from(reader.bytes());
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
            keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            type: isSet(object.type) ? (0, auth_n_key_js_1.keyTypeFromJSON)(object.type) : 0,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
            publicKey: isSet(object.publicKey) ? Buffer.from(bytesFromBase64(object.publicKey)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyId !== "") {
            obj.keyId = message.keyId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.type !== 0) {
            obj.type = (0, auth_n_key_js_1.keyTypeToJSON)(message.type);
        }
        if (message.expirationDate !== undefined) {
            obj.expirationDate = message.expirationDate.toISOString();
        }
        if (message.publicKey.length !== 0) {
            obj.publicKey = base64FromBytes(message.publicKey);
        }
        return obj;
    },
    create(base) {
        return exports.DataMachineKey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDataMachineKey();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.expirationDate = (_d = object.expirationDate) !== null && _d !== void 0 ? _d : undefined;
        message.publicKey = (_e = object.publicKey) !== null && _e !== void 0 ? _e : Buffer.alloc(0);
        return message;
    },
};
function createBaseDataProject() {
    return { projectId: "", project: undefined };
}
exports.DataProject = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.project !== undefined) {
            management_js_1.AddProjectRequest.encode(message.project, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.project = management_js_1.AddProjectRequest.decode(reader, reader.uint32());
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
            projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
            project: isSet(object.project) ? management_js_1.AddProjectRequest.fromJSON(object.project) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        if (message.project !== undefined) {
            obj.project = management_js_1.AddProjectRequest.toJSON(message.project);
        }
        return obj;
    },
    create(base) {
        return exports.DataProject.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataProject();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.project = (object.project !== undefined && object.project !== null)
            ? management_js_1.AddProjectRequest.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseDataAPIApplication() {
    return { appId: "", app: undefined };
}
exports.DataAPIApplication = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.appId !== "") {
            writer.uint32(10).string(message.appId);
        }
        if (message.app !== undefined) {
            management_js_1.AddAPIAppRequest.encode(message.app, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAPIApplication();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.appId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.app = management_js_1.AddAPIAppRequest.decode(reader, reader.uint32());
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
            appId: isSet(object.appId) ? globalThis.String(object.appId) : "",
            app: isSet(object.app) ? management_js_1.AddAPIAppRequest.fromJSON(object.app) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.appId !== "") {
            obj.appId = message.appId;
        }
        if (message.app !== undefined) {
            obj.app = management_js_1.AddAPIAppRequest.toJSON(message.app);
        }
        return obj;
    },
    create(base) {
        return exports.DataAPIApplication.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataAPIApplication();
        message.appId = (_a = object.appId) !== null && _a !== void 0 ? _a : "";
        message.app = (object.app !== undefined && object.app !== null)
            ? management_js_1.AddAPIAppRequest.fromPartial(object.app)
            : undefined;
        return message;
    },
};
function createBaseDataOIDCApplication() {
    return { appId: "", app: undefined };
}
exports.DataOIDCApplication = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.appId !== "") {
            writer.uint32(10).string(message.appId);
        }
        if (message.app !== undefined) {
            management_js_1.AddOIDCAppRequest.encode(message.app, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataOIDCApplication();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.appId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.app = management_js_1.AddOIDCAppRequest.decode(reader, reader.uint32());
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
            appId: isSet(object.appId) ? globalThis.String(object.appId) : "",
            app: isSet(object.app) ? management_js_1.AddOIDCAppRequest.fromJSON(object.app) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.appId !== "") {
            obj.appId = message.appId;
        }
        if (message.app !== undefined) {
            obj.app = management_js_1.AddOIDCAppRequest.toJSON(message.app);
        }
        return obj;
    },
    create(base) {
        return exports.DataOIDCApplication.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataOIDCApplication();
        message.appId = (_a = object.appId) !== null && _a !== void 0 ? _a : "";
        message.app = (object.app !== undefined && object.app !== null)
            ? management_js_1.AddOIDCAppRequest.fromPartial(object.app)
            : undefined;
        return message;
    },
};
function createBaseDataHumanUser() {
    return { userId: "", user: undefined };
}
exports.DataHumanUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.user !== undefined) {
            management_js_1.ImportHumanUserRequest.encode(message.user, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataHumanUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.user = management_js_1.ImportHumanUserRequest.decode(reader, reader.uint32());
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            user: isSet(object.user) ? management_js_1.ImportHumanUserRequest.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.user !== undefined) {
            obj.user = management_js_1.ImportHumanUserRequest.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.DataHumanUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataHumanUser();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.user = (object.user !== undefined && object.user !== null)
            ? management_js_1.ImportHumanUserRequest.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBaseDataMachineUser() {
    return { userId: "", user: undefined };
}
exports.DataMachineUser = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.user !== undefined) {
            management_js_1.AddMachineUserRequest.encode(message.user, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataMachineUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.user = management_js_1.AddMachineUserRequest.decode(reader, reader.uint32());
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            user: isSet(object.user) ? management_js_1.AddMachineUserRequest.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.user !== undefined) {
            obj.user = management_js_1.AddMachineUserRequest.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.DataMachineUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataMachineUser();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.user = (object.user !== undefined && object.user !== null)
            ? management_js_1.AddMachineUserRequest.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBaseDataAction() {
    return { actionId: "", action: undefined };
}
exports.DataAction = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.actionId !== "") {
            writer.uint32(10).string(message.actionId);
        }
        if (message.action !== undefined) {
            management_js_1.CreateActionRequest.encode(message.action, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.actionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.action = management_js_1.CreateActionRequest.decode(reader, reader.uint32());
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
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
            action: isSet(object.action) ? management_js_1.CreateActionRequest.fromJSON(object.action) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        if (message.action !== undefined) {
            obj.action = management_js_1.CreateActionRequest.toJSON(message.action);
        }
        return obj;
    },
    create(base) {
        return exports.DataAction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataAction();
        message.actionId = (_a = object.actionId) !== null && _a !== void 0 ? _a : "";
        message.action = (object.action !== undefined && object.action !== null)
            ? management_js_1.CreateActionRequest.fromPartial(object.action)
            : undefined;
        return message;
    },
};
function createBaseDataProjectGrant() {
    return { grantId: "", projectGrant: undefined };
}
exports.DataProjectGrant = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.grantId !== "") {
            writer.uint32(10).string(message.grantId);
        }
        if (message.projectGrant !== undefined) {
            management_js_1.AddProjectGrantRequest.encode(message.projectGrant, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataProjectGrant();
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
                    message.projectGrant = management_js_1.AddProjectGrantRequest.decode(reader, reader.uint32());
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
            projectGrant: isSet(object.projectGrant) ? management_js_1.AddProjectGrantRequest.fromJSON(object.projectGrant) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.grantId !== "") {
            obj.grantId = message.grantId;
        }
        if (message.projectGrant !== undefined) {
            obj.projectGrant = management_js_1.AddProjectGrantRequest.toJSON(message.projectGrant);
        }
        return obj;
    },
    create(base) {
        return exports.DataProjectGrant.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataProjectGrant();
        message.grantId = (_a = object.grantId) !== null && _a !== void 0 ? _a : "";
        message.projectGrant = (object.projectGrant !== undefined && object.projectGrant !== null)
            ? management_js_1.AddProjectGrantRequest.fromPartial(object.projectGrant)
            : undefined;
        return message;
    },
};
function createBaseSetTriggerActionsRequest() {
    return { flowType: 0, triggerType: 0, actionIds: [] };
}
exports.SetTriggerActionsRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.flowType !== 0) {
            writer.uint32(8).int32(message.flowType);
        }
        if (message.triggerType !== 0) {
            writer.uint32(16).int32(message.triggerType);
        }
        for (const v of message.actionIds) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetTriggerActionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.flowType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.triggerType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.actionIds.push(reader.string());
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
            flowType: isSet(object.flowType) ? flowTypeFromJSON(object.flowType) : 0,
            triggerType: isSet(object.triggerType) ? triggerTypeFromJSON(object.triggerType) : 0,
            actionIds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.actionIds)
                ? object.actionIds.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.flowType !== 0) {
            obj.flowType = flowTypeToJSON(message.flowType);
        }
        if (message.triggerType !== 0) {
            obj.triggerType = triggerTypeToJSON(message.triggerType);
        }
        if ((_a = message.actionIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.actionIds = message.actionIds;
        }
        return obj;
    },
    create(base) {
        return exports.SetTriggerActionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetTriggerActionsRequest();
        message.flowType = (_a = object.flowType) !== null && _a !== void 0 ? _a : 0;
        message.triggerType = (_b = object.triggerType) !== null && _b !== void 0 ? _b : 0;
        message.actionIds = ((_c = object.actionIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function bytesFromBase64(b64) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}
function base64FromBytes(arr) {
    return globalThis.Buffer.from(arr).toString("base64");
}
function toTimestamp(date) {
    const seconds = numberToLong(Math.trunc(date.getTime() / 1000));
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds.toNumber() || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=v1.js.map