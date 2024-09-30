/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ObjectDetails, TextQueryMethod } from "./object.js";
export declare const protobufPackage = "zitadel.user.v1";
export declare enum UserState {
    USER_STATE_UNSPECIFIED = 0,
    USER_STATE_ACTIVE = 1,
    USER_STATE_INACTIVE = 2,
    USER_STATE_DELETED = 3,
    USER_STATE_LOCKED = 4,
    USER_STATE_SUSPEND = 5,
    USER_STATE_INITIAL = 6,
    UNRECOGNIZED = -1
}
export declare function userStateFromJSON(object: any): UserState;
export declare function userStateToJSON(object: UserState): string;
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
export declare enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_HUMAN = 1,
    TYPE_MACHINE = 2,
    UNRECOGNIZED = -1
}
export declare function typeFromJSON(object: any): Type;
export declare function typeToJSON(object: Type): string;
export declare enum UserFieldName {
    USER_FIELD_NAME_UNSPECIFIED = 0,
    USER_FIELD_NAME_USER_NAME = 1,
    USER_FIELD_NAME_FIRST_NAME = 2,
    USER_FIELD_NAME_LAST_NAME = 3,
    USER_FIELD_NAME_NICK_NAME = 4,
    USER_FIELD_NAME_DISPLAY_NAME = 5,
    USER_FIELD_NAME_EMAIL = 6,
    USER_FIELD_NAME_STATE = 7,
    USER_FIELD_NAME_TYPE = 8,
    USER_FIELD_NAME_CREATION_DATE = 9,
    UNRECOGNIZED = -1
}
export declare function userFieldNameFromJSON(object: any): UserFieldName;
export declare function userFieldNameToJSON(object: UserFieldName): string;
export declare enum AuthFactorState {
    AUTH_FACTOR_STATE_UNSPECIFIED = 0,
    AUTH_FACTOR_STATE_NOT_READY = 1,
    AUTH_FACTOR_STATE_READY = 2,
    AUTH_FACTOR_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function authFactorStateFromJSON(object: any): AuthFactorState;
export declare function authFactorStateToJSON(object: AuthFactorState): string;
export declare enum SessionState {
    SESSION_STATE_UNSPECIFIED = 0,
    SESSION_STATE_ACTIVE = 1,
    SESSION_STATE_TERMINATED = 2,
    UNRECOGNIZED = -1
}
export declare function sessionStateFromJSON(object: any): SessionState;
export declare function sessionStateToJSON(object: SessionState): string;
export declare enum UserGrantState {
    USER_GRANT_STATE_UNSPECIFIED = 0,
    USER_GRANT_STATE_ACTIVE = 1,
    USER_GRANT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function userGrantStateFromJSON(object: any): UserGrantState;
export declare function userGrantStateToJSON(object: UserGrantState): string;
export interface User {
    id: string;
    details: ObjectDetails | undefined;
    state: UserState;
    userName: string;
    loginNames: string[];
    preferredLoginName: string;
    human?: Human | undefined;
    machine?: Machine | undefined;
}
export interface Human {
    profile: Profile | undefined;
    email: Email | undefined;
    phone: Phone | undefined;
    passwordChanged: Date | undefined;
}
export interface Machine {
    name: string;
    description: string;
    hasSecret: boolean;
    accessTokenType: AccessTokenType;
}
export interface Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
    avatarUrl: string;
}
export interface Email {
    email: string;
    isEmailVerified: boolean;
}
export interface Phone {
    phone: string;
    isPhoneVerified: boolean;
}
export interface SearchQuery {
    userNameQuery?: UserNameQuery | undefined;
    firstNameQuery?: FirstNameQuery | undefined;
    lastNameQuery?: LastNameQuery | undefined;
    nickNameQuery?: NickNameQuery | undefined;
    displayNameQuery?: DisplayNameQuery | undefined;
    emailQuery?: EmailQuery | undefined;
    stateQuery?: StateQuery | undefined;
    typeQuery?: TypeQuery | undefined;
    loginNameQuery?: LoginNameQuery | undefined;
    inUserIdsQuery?: InUserIDQuery | undefined;
    orQuery?: OrQuery | undefined;
    andQuery?: AndQuery | undefined;
    notQuery?: NotQuery | undefined;
    inUserEmailsQuery?: InUserEmailsQuery | undefined;
}
export interface OrQuery {
    queries: SearchQuery[];
}
export interface AndQuery {
    queries: SearchQuery[];
}
export interface NotQuery {
    query: SearchQuery | undefined;
}
export interface InUserIDQuery {
    userIds: string[];
}
export interface InUserEmailsQuery {
    userEmails: string[];
}
export interface UserNameQuery {
    userName: string;
    method: TextQueryMethod;
}
export interface FirstNameQuery {
    firstName: string;
    method: TextQueryMethod;
}
export interface LastNameQuery {
    lastName: string;
    method: TextQueryMethod;
}
export interface NickNameQuery {
    nickName: string;
    method: TextQueryMethod;
}
export interface DisplayNameQuery {
    displayName: string;
    method: TextQueryMethod;
}
export interface EmailQuery {
    emailAddress: string;
    method: TextQueryMethod;
}
export interface LoginNameQuery {
    loginName: string;
    method: TextQueryMethod;
}
export interface StateQuery {
    state: UserState;
}
export interface TypeQuery {
    type: Type;
}
export interface AuthFactor {
    state: AuthFactorState;
    otp?: AuthFactorOTP | undefined;
    u2f?: AuthFactorU2F | undefined;
    otpSms?: AuthFactorOTPSMS | undefined;
    otpEmail?: AuthFactorOTPEmail | undefined;
}
export interface AuthFactorOTP {
}
export interface AuthFactorOTPSMS {
}
export interface AuthFactorOTPEmail {
}
export interface AuthFactorU2F {
    id: string;
    name: string;
}
export interface WebAuthNKey {
    publicKey: Buffer;
}
export interface WebAuthNVerification {
    publicKeyCredential: Buffer;
    tokenName: string;
}
export interface WebAuthNToken {
    id: string;
    state: AuthFactorState;
    name: string;
}
export interface Membership {
    userId: string;
    details: ObjectDetails | undefined;
    roles: string[];
    displayName: string;
    iam?: boolean | undefined;
    orgId?: string | undefined;
    projectId?: string | undefined;
    projectGrantId?: string | undefined;
}
export interface MembershipQuery {
    orgQuery?: MembershipOrgQuery | undefined;
    projectQuery?: MembershipProjectQuery | undefined;
    projectGrantQuery?: MembershipProjectGrantQuery | undefined;
    iamQuery?: MembershipIAMQuery | undefined;
}
export interface MembershipOrgQuery {
    orgId: string;
}
export interface MembershipProjectQuery {
    projectId: string;
}
export interface MembershipProjectGrantQuery {
    projectGrantId: string;
}
export interface MembershipIAMQuery {
    iam: boolean;
}
export interface Session {
    sessionId: string;
    agentId: string;
    authState: SessionState;
    userId: string;
    userName: string;
    loginName: string;
    displayName: string;
    details: ObjectDetails | undefined;
    avatarUrl: string;
}
export interface RefreshToken {
    id: string;
    details: ObjectDetails | undefined;
    clientId: string;
    authTime: Date | undefined;
    idleExpiration: Date | undefined;
    expiration: Date | undefined;
    scopes: string[];
    audience: string[];
}
export interface PersonalAccessToken {
    id: string;
    details: ObjectDetails | undefined;
    expirationDate: Date | undefined;
    scopes: string[];
}
export interface UserGrant {
    id: string;
    details: ObjectDetails | undefined;
    roleKeys: string[];
    state: UserGrantState;
    userId: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    displayName: string;
    orgId: string;
    orgName: string;
    orgDomain: string;
    projectId: string;
    projectName: string;
    projectGrantId: string;
    avatarUrl: string;
    preferredLoginName: string;
    userType: Type;
    grantedOrgId: string;
    grantedOrgName: string;
    grantedOrgDomain: string;
}
export interface UserGrantQuery {
    projectIdQuery?: UserGrantProjectIDQuery | undefined;
    userIdQuery?: UserGrantUserIDQuery | undefined;
    withGrantedQuery?: UserGrantWithGrantedQuery | undefined;
    roleKeyQuery?: UserGrantRoleKeyQuery | undefined;
    projectGrantIdQuery?: UserGrantProjectGrantIDQuery | undefined;
    userNameQuery?: UserGrantUserNameQuery | undefined;
    firstNameQuery?: UserGrantFirstNameQuery | undefined;
    lastNameQuery?: UserGrantLastNameQuery | undefined;
    emailQuery?: UserGrantEmailQuery | undefined;
    orgNameQuery?: UserGrantOrgNameQuery | undefined;
    orgDomainQuery?: UserGrantOrgDomainQuery | undefined;
    projectNameQuery?: UserGrantProjectNameQuery | undefined;
    displayNameQuery?: UserGrantDisplayNameQuery | undefined;
    userTypeQuery?: UserGrantUserTypeQuery | undefined;
}
export interface UserGrantProjectIDQuery {
    projectId: string;
}
export interface UserGrantUserIDQuery {
    userId: string;
}
export interface UserGrantWithGrantedQuery {
    withGranted: boolean;
}
export interface UserGrantRoleKeyQuery {
    roleKey: string;
    method: TextQueryMethod;
}
export interface UserGrantProjectGrantIDQuery {
    projectGrantId: string;
}
export interface UserGrantUserNameQuery {
    userName: string;
    method: TextQueryMethod;
}
export interface UserGrantFirstNameQuery {
    firstName: string;
    method: TextQueryMethod;
}
export interface UserGrantLastNameQuery {
    lastName: string;
    method: TextQueryMethod;
}
export interface UserGrantEmailQuery {
    email: string;
    method: TextQueryMethod;
}
export interface UserGrantOrgNameQuery {
    orgName: string;
    method: TextQueryMethod;
}
export interface UserGrantOrgDomainQuery {
    orgDomain: string;
    method: TextQueryMethod;
}
export interface UserGrantProjectNameQuery {
    projectName: string;
    method: TextQueryMethod;
}
export interface UserGrantDisplayNameQuery {
    displayName: string;
    method: TextQueryMethod;
}
export interface UserGrantUserTypeQuery {
    type: Type;
}
export declare const User: MessageFns<User>;
export declare const Human: MessageFns<Human>;
export declare const Machine: MessageFns<Machine>;
export declare const Profile: MessageFns<Profile>;
export declare const Email: MessageFns<Email>;
export declare const Phone: MessageFns<Phone>;
export declare const SearchQuery: MessageFns<SearchQuery>;
export declare const OrQuery: MessageFns<OrQuery>;
export declare const AndQuery: MessageFns<AndQuery>;
export declare const NotQuery: MessageFns<NotQuery>;
export declare const InUserIDQuery: MessageFns<InUserIDQuery>;
export declare const InUserEmailsQuery: MessageFns<InUserEmailsQuery>;
export declare const UserNameQuery: MessageFns<UserNameQuery>;
export declare const FirstNameQuery: MessageFns<FirstNameQuery>;
export declare const LastNameQuery: MessageFns<LastNameQuery>;
export declare const NickNameQuery: MessageFns<NickNameQuery>;
export declare const DisplayNameQuery: MessageFns<DisplayNameQuery>;
export declare const EmailQuery: MessageFns<EmailQuery>;
export declare const LoginNameQuery: MessageFns<LoginNameQuery>;
export declare const StateQuery: MessageFns<StateQuery>;
export declare const TypeQuery: MessageFns<TypeQuery>;
export declare const AuthFactor: MessageFns<AuthFactor>;
export declare const AuthFactorOTP: MessageFns<AuthFactorOTP>;
export declare const AuthFactorOTPSMS: MessageFns<AuthFactorOTPSMS>;
export declare const AuthFactorOTPEmail: MessageFns<AuthFactorOTPEmail>;
export declare const AuthFactorU2F: MessageFns<AuthFactorU2F>;
export declare const WebAuthNKey: MessageFns<WebAuthNKey>;
export declare const WebAuthNVerification: MessageFns<WebAuthNVerification>;
export declare const WebAuthNToken: MessageFns<WebAuthNToken>;
export declare const Membership: MessageFns<Membership>;
export declare const MembershipQuery: MessageFns<MembershipQuery>;
export declare const MembershipOrgQuery: MessageFns<MembershipOrgQuery>;
export declare const MembershipProjectQuery: MessageFns<MembershipProjectQuery>;
export declare const MembershipProjectGrantQuery: MessageFns<MembershipProjectGrantQuery>;
export declare const MembershipIAMQuery: MessageFns<MembershipIAMQuery>;
export declare const Session: MessageFns<Session>;
export declare const RefreshToken: MessageFns<RefreshToken>;
export declare const PersonalAccessToken: MessageFns<PersonalAccessToken>;
export declare const UserGrant: MessageFns<UserGrant>;
export declare const UserGrantQuery: MessageFns<UserGrantQuery>;
export declare const UserGrantProjectIDQuery: MessageFns<UserGrantProjectIDQuery>;
export declare const UserGrantUserIDQuery: MessageFns<UserGrantUserIDQuery>;
export declare const UserGrantWithGrantedQuery: MessageFns<UserGrantWithGrantedQuery>;
export declare const UserGrantRoleKeyQuery: MessageFns<UserGrantRoleKeyQuery>;
export declare const UserGrantProjectGrantIDQuery: MessageFns<UserGrantProjectGrantIDQuery>;
export declare const UserGrantUserNameQuery: MessageFns<UserGrantUserNameQuery>;
export declare const UserGrantFirstNameQuery: MessageFns<UserGrantFirstNameQuery>;
export declare const UserGrantLastNameQuery: MessageFns<UserGrantLastNameQuery>;
export declare const UserGrantEmailQuery: MessageFns<UserGrantEmailQuery>;
export declare const UserGrantOrgNameQuery: MessageFns<UserGrantOrgNameQuery>;
export declare const UserGrantOrgDomainQuery: MessageFns<UserGrantOrgDomainQuery>;
export declare const UserGrantProjectNameQuery: MessageFns<UserGrantProjectNameQuery>;
export declare const UserGrantDisplayNameQuery: MessageFns<UserGrantDisplayNameQuery>;
export declare const UserGrantUserTypeQuery: MessageFns<UserGrantUserTypeQuery>;
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
