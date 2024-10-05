import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ObjectDetails, TextQueryMethod } from "./object.js";
export declare const protobufPackage = "zitadel.project.v1";
export declare enum ProjectState {
    PROJECT_STATE_UNSPECIFIED = 0,
    PROJECT_STATE_ACTIVE = 1,
    PROJECT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function projectStateFromJSON(object: any): ProjectState;
export declare function projectStateToJSON(object: ProjectState): string;
export declare enum PrivateLabelingSetting {
    PRIVATE_LABELING_SETTING_UNSPECIFIED = 0,
    PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY = 1,
    PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY = 2,
    UNRECOGNIZED = -1
}
export declare function privateLabelingSettingFromJSON(object: any): PrivateLabelingSetting;
export declare function privateLabelingSettingToJSON(object: PrivateLabelingSetting): string;
export declare enum ProjectGrantState {
    PROJECT_GRANT_STATE_UNSPECIFIED = 0,
    PROJECT_GRANT_STATE_ACTIVE = 1,
    PROJECT_GRANT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function projectGrantStateFromJSON(object: any): ProjectGrantState;
export declare function projectGrantStateToJSON(object: ProjectGrantState): string;
export interface Project {
    id: string;
    details: ObjectDetails | undefined;
    name: string;
    state: ProjectState;
    projectRoleAssertion: boolean;
    projectRoleCheck: boolean;
    hasProjectCheck: boolean;
    privateLabelingSetting: PrivateLabelingSetting;
}
export interface GrantedProject {
    grantId: string;
    grantedOrgId: string;
    grantedOrgName: string;
    grantedRoleKeys: string[];
    state: ProjectGrantState;
    projectId: string;
    projectName: string;
    projectOwnerId: string;
    projectOwnerName: string;
    details: ObjectDetails | undefined;
}
export interface ProjectQuery {
    nameQuery?: ProjectNameQuery | undefined;
    projectResourceOwnerQuery?: ProjectResourceOwnerQuery | undefined;
}
export interface ProjectNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface ProjectResourceOwnerQuery {
    resourceOwner: string;
}
export interface Role {
    key: string;
    details: ObjectDetails | undefined;
    displayName: string;
    group: string;
}
export interface RoleQuery {
    keyQuery?: RoleKeyQuery | undefined;
    displayNameQuery?: RoleDisplayNameQuery | undefined;
}
export interface RoleKeyQuery {
    key: string;
    method: TextQueryMethod;
}
export interface RoleDisplayNameQuery {
    displayName: string;
    method: TextQueryMethod;
}
export interface ProjectGrantQuery {
    projectNameQuery?: GrantProjectNameQuery | undefined;
    roleKeyQuery?: GrantRoleKeyQuery | undefined;
}
export interface AllProjectGrantQuery {
    projectNameQuery?: GrantProjectNameQuery | undefined;
    roleKeyQuery?: GrantRoleKeyQuery | undefined;
    projectIdQuery?: ProjectIDQuery | undefined;
    grantedOrgIdQuery?: GrantedOrgIDQuery | undefined;
}
export interface GrantProjectNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface GrantRoleKeyQuery {
    roleKey: string;
    method: TextQueryMethod;
}
export interface ProjectIDQuery {
    projectId: string;
}
export interface GrantedOrgIDQuery {
    grantedOrgId: string;
}
export declare const Project: MessageFns<Project>;
export declare const GrantedProject: MessageFns<GrantedProject>;
export declare const ProjectQuery: MessageFns<ProjectQuery>;
export declare const ProjectNameQuery: MessageFns<ProjectNameQuery>;
export declare const ProjectResourceOwnerQuery: MessageFns<ProjectResourceOwnerQuery>;
export declare const Role: MessageFns<Role>;
export declare const RoleQuery: MessageFns<RoleQuery>;
export declare const RoleKeyQuery: MessageFns<RoleKeyQuery>;
export declare const RoleDisplayNameQuery: MessageFns<RoleDisplayNameQuery>;
export declare const ProjectGrantQuery: MessageFns<ProjectGrantQuery>;
export declare const AllProjectGrantQuery: MessageFns<AllProjectGrantQuery>;
export declare const GrantProjectNameQuery: MessageFns<GrantProjectNameQuery>;
export declare const GrantRoleKeyQuery: MessageFns<GrantRoleKeyQuery>;
export declare const ProjectIDQuery: MessageFns<ProjectIDQuery>;
export declare const GrantedOrgIDQuery: MessageFns<GrantedOrgIDQuery>;
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
