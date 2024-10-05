/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { KeyType } from "./auth_n_key.js";
import { IDPUserLink } from "./idp.js";
import { AddAPIAppRequest, AddCustomLabelPolicyRequest, AddCustomLockoutPolicyRequest, AddCustomLoginPolicyRequest, AddCustomPasswordComplexityPolicyRequest, AddCustomPrivacyPolicyRequest, AddIDPToLoginPolicyRequest, AddMachineUserRequest, AddMultiFactorToLoginPolicyRequest, AddOIDCAppRequest, AddOrgJWTIDPRequest, AddOrgMemberRequest, AddOrgOIDCIDPRequest, AddOrgRequest, AddProjectGrantMemberRequest, AddProjectGrantRequest, AddProjectMemberRequest, AddProjectRequest, AddProjectRoleRequest, AddSecondFactorToLoginPolicyRequest, AddUserGrantRequest, CreateActionRequest, ImportHumanUserRequest, SetCustomDomainClaimedMessageTextRequest, SetCustomInitMessageTextRequest, SetCustomInviteUserMessageTextRequest, SetCustomLoginTextsRequest, SetCustomPasswordlessRegistrationMessageTextRequest, SetCustomPasswordResetMessageTextRequest, SetCustomVerifyEmailMessageTextRequest, SetCustomVerifyPhoneMessageTextRequest, SetUserMetadataRequest } from "./management.js";
import { Domain } from "./org.js";
import { Gender } from "./user.js";
export declare const protobufPackage = "zitadel.v1.v1";
export declare enum FlowType {
    FLOW_TYPE_UNSPECIFIED = 0,
    FLOW_TYPE_EXTERNAL_AUTHENTICATION = 1,
    UNRECOGNIZED = -1
}
export declare function flowTypeFromJSON(object: any): FlowType;
export declare function flowTypeToJSON(object: FlowType): string;
export declare enum TriggerType {
    TRIGGER_TYPE_UNSPECIFIED = 0,
    TRIGGER_TYPE_POST_AUTHENTICATION = 1,
    TRIGGER_TYPE_PRE_CREATION = 2,
    TRIGGER_TYPE_POST_CREATION = 3,
    UNRECOGNIZED = -1
}
export declare function triggerTypeFromJSON(object: any): TriggerType;
export declare function triggerTypeToJSON(object: TriggerType): string;
export interface AddCustomOrgIAMPolicyRequest {
    orgId: string;
    userLoginMustBeDomain: boolean;
}
export interface ImportDataOrg {
    orgs: DataOrg[];
}
export interface DataOrg {
    orgId: string;
    org: AddOrgRequest | undefined;
    iamPolicy: AddCustomOrgIAMPolicyRequest | undefined;
    labelPolicy: AddCustomLabelPolicyRequest | undefined;
    lockoutPolicy: AddCustomLockoutPolicyRequest | undefined;
    loginPolicy: AddCustomLoginPolicyRequest | undefined;
    passwordComplexityPolicy: AddCustomPasswordComplexityPolicyRequest | undefined;
    privacyPolicy: AddCustomPrivacyPolicyRequest | undefined;
    projects: DataProject[];
    projectRoles: AddProjectRoleRequest[];
    apiApps: DataAPIApplication[];
    oidcApps: DataOIDCApplication[];
    humanUsers: DataHumanUser[];
    machineUsers: DataMachineUser[];
    triggerActions: SetTriggerActionsRequest[];
    actions: DataAction[];
    projectGrants: DataProjectGrant[];
    userGrants: AddUserGrantRequest[];
    orgMembers: AddOrgMemberRequest[];
    projectMembers: AddProjectMemberRequest[];
    projectGrantMembers: AddProjectGrantMemberRequest[];
    userMetadata: SetUserMetadataRequest[];
    loginTexts: SetCustomLoginTextsRequest[];
    initMessages: SetCustomInitMessageTextRequest[];
    passwordResetMessages: SetCustomPasswordResetMessageTextRequest[];
    verifyEmailMessages: SetCustomVerifyEmailMessageTextRequest[];
    verifyPhoneMessages: SetCustomVerifyPhoneMessageTextRequest[];
    domainClaimedMessages: SetCustomDomainClaimedMessageTextRequest[];
    passwordlessRegistrationMessages: SetCustomPasswordlessRegistrationMessageTextRequest[];
    oidcIdps: DataOIDCIDP[];
    jwtIdps: DataJWTIDP[];
    secondFactors: AddSecondFactorToLoginPolicyRequest[];
    multiFactors: AddMultiFactorToLoginPolicyRequest[];
    idps: AddIDPToLoginPolicyRequest[];
    userLinks: IDPUserLink[];
    domains: Domain[];
    appKeys: DataAppKey[];
    machineKeys: DataMachineKey[];
    inviteUserMessages: SetCustomInviteUserMessageTextRequest[];
}
export interface DataOIDCIDP {
    idpId: string;
    idp: AddOrgOIDCIDPRequest | undefined;
}
export interface DataJWTIDP {
    idpId: string;
    idp: AddOrgJWTIDPRequest | undefined;
}
export interface ExportHumanUser {
    userName: string;
    profile: ExportHumanUser_Profile | undefined;
    email: ExportHumanUser_Email | undefined;
    phone: ExportHumanUser_Phone | undefined;
    password: string;
    hashedPassword: ExportHumanUser_HashedPassword | undefined;
    passwordChangeRequired: boolean;
    requestPasswordlessRegistration: boolean;
    otpCode: string;
}
export interface ExportHumanUser_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface ExportHumanUser_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface ExportHumanUser_Phone {
    phone: string;
    isPhoneVerified: boolean;
}
export interface ExportHumanUser_HashedPassword {
    value: string;
    algorithm: string;
}
export interface DataAppKey {
    id: string;
    projectId: string;
    appId: string;
    clientId: string;
    type: KeyType;
    expirationDate: Date | undefined;
    publicKey: Buffer;
}
export interface DataMachineKey {
    keyId: string;
    userId: string;
    type: KeyType;
    expirationDate: Date | undefined;
    publicKey: Buffer;
}
export interface DataProject {
    projectId: string;
    project: AddProjectRequest | undefined;
}
export interface DataAPIApplication {
    appId: string;
    app: AddAPIAppRequest | undefined;
}
export interface DataOIDCApplication {
    appId: string;
    app: AddOIDCAppRequest | undefined;
}
export interface DataHumanUser {
    userId: string;
    user: ImportHumanUserRequest | undefined;
}
export interface DataMachineUser {
    userId: string;
    user: AddMachineUserRequest | undefined;
}
export interface DataAction {
    actionId: string;
    action: CreateActionRequest | undefined;
}
export interface DataProjectGrant {
    grantId: string;
    projectGrant: AddProjectGrantRequest | undefined;
}
export interface SetTriggerActionsRequest {
    flowType: FlowType;
    triggerType: TriggerType;
    actionIds: string[];
}
export declare const AddCustomOrgIAMPolicyRequest: MessageFns<AddCustomOrgIAMPolicyRequest>;
export declare const ImportDataOrg: MessageFns<ImportDataOrg>;
export declare const DataOrg: MessageFns<DataOrg>;
export declare const DataOIDCIDP: MessageFns<DataOIDCIDP>;
export declare const DataJWTIDP: MessageFns<DataJWTIDP>;
export declare const ExportHumanUser: MessageFns<ExportHumanUser>;
export declare const ExportHumanUser_Profile: MessageFns<ExportHumanUser_Profile>;
export declare const ExportHumanUser_Email: MessageFns<ExportHumanUser_Email>;
export declare const ExportHumanUser_Phone: MessageFns<ExportHumanUser_Phone>;
export declare const ExportHumanUser_HashedPassword: MessageFns<ExportHumanUser_HashedPassword>;
export declare const DataAppKey: MessageFns<DataAppKey>;
export declare const DataMachineKey: MessageFns<DataMachineKey>;
export declare const DataProject: MessageFns<DataProject>;
export declare const DataAPIApplication: MessageFns<DataAPIApplication>;
export declare const DataOIDCApplication: MessageFns<DataOIDCApplication>;
export declare const DataHumanUser: MessageFns<DataHumanUser>;
export declare const DataMachineUser: MessageFns<DataMachineUser>;
export declare const DataAction: MessageFns<DataAction>;
export declare const DataProjectGrant: MessageFns<DataProjectGrant>;
export declare const SetTriggerActionsRequest: MessageFns<SetTriggerActionsRequest>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
