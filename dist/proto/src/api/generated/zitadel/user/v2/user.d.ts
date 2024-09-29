/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v2/object.js";
import { HumanEmail } from "./email.js";
import { HumanPhone } from "./phone.js";
export declare const protobufPackage = "zitadel.user.v2";
export declare enum Gender {
    GENDER_UNSPECIFIED = 0,
    GENDER_FEMALE = 1,
    GENDER_MALE = 2,
    GENDER_DIVERSE = 3,
    UNRECOGNIZED = -1
}
export declare function genderFromJSON(object: any): Gender;
export declare function genderToJSON(object: Gender): string;
export declare enum AccessTokenType {
    ACCESS_TOKEN_TYPE_BEARER = 0,
    ACCESS_TOKEN_TYPE_JWT = 1,
    UNRECOGNIZED = -1
}
export declare function accessTokenTypeFromJSON(object: any): AccessTokenType;
export declare function accessTokenTypeToJSON(object: AccessTokenType): string;
export declare enum UserState {
    USER_STATE_UNSPECIFIED = 0,
    USER_STATE_ACTIVE = 1,
    USER_STATE_INACTIVE = 2,
    USER_STATE_DELETED = 3,
    USER_STATE_LOCKED = 4,
    USER_STATE_INITIAL = 5,
    UNRECOGNIZED = -1
}
export declare function userStateFromJSON(object: any): UserState;
export declare function userStateToJSON(object: UserState): string;
export declare enum AuthFactorState {
    AUTH_FACTOR_STATE_UNSPECIFIED = 0,
    AUTH_FACTOR_STATE_NOT_READY = 1,
    AUTH_FACTOR_STATE_READY = 2,
    AUTH_FACTOR_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function authFactorStateFromJSON(object: any): AuthFactorState;
export declare function authFactorStateToJSON(object: AuthFactorState): string;
export interface SetHumanProfile {
    givenName: string;
    familyName: string;
    nickName?: string | undefined;
    displayName?: string | undefined;
    preferredLanguage?: string | undefined;
    gender?: Gender | undefined;
}
export interface HumanProfile {
    givenName: string;
    familyName: string;
    nickName?: string | undefined;
    displayName?: string | undefined;
    preferredLanguage?: string | undefined;
    gender?: Gender | undefined;
    avatarUrl: string;
}
export interface SetMetadataEntry {
    key: string;
    value: Buffer;
}
export interface HumanUser {
    userId: string;
    state: UserState;
    username: string;
    loginNames: string[];
    preferredLoginName: string;
    profile: HumanProfile | undefined;
    email: HumanEmail | undefined;
    phone: HumanPhone | undefined;
    passwordChangeRequired: boolean;
    passwordChanged: Date | undefined;
}
export interface User {
    userId: string;
    details: Details | undefined;
    state: UserState;
    username: string;
    loginNames: string[];
    preferredLoginName: string;
    human?: HumanUser | undefined;
    machine?: MachineUser | undefined;
}
export interface MachineUser {
    name: string;
    description: string;
    hasSecret: boolean;
    accessTokenType: AccessTokenType;
}
export interface Passkey {
    id: string;
    state: AuthFactorState;
    name: string;
}
export interface SendInviteCode {
    urlTemplate?: string | undefined;
    applicationName?: string | undefined;
}
export interface ReturnInviteCode {
}
export declare const SetHumanProfile: MessageFns<SetHumanProfile>;
export declare const HumanProfile: MessageFns<HumanProfile>;
export declare const SetMetadataEntry: MessageFns<SetMetadataEntry>;
export declare const HumanUser: MessageFns<HumanUser>;
export declare const User: MessageFns<User>;
export declare const MachineUser: MessageFns<MachineUser>;
export declare const Passkey: MessageFns<Passkey>;
export declare const SendInviteCode: MessageFns<SendInviteCode>;
export declare const ReturnInviteCode: MessageFns<ReturnInviteCode>;
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
