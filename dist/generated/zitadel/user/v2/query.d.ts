import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextQueryMethod } from "../../object/v2/object.js";
import { UserState } from "./user.js";
export declare const protobufPackage = "zitadel.user.v2";
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
    organizationIdQuery?: OrganizationIdQuery | undefined;
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
export interface InUserEmailsQuery {
    userEmails: string[];
}
export interface OrganizationIdQuery {
    organizationId: string;
}
export declare function createBaseSearchQuery(): SearchQuery;
export declare const SearchQuery: MessageFns<SearchQuery>;
export declare const OrQuery: MessageFns<OrQuery>;
export declare const AndQuery: MessageFns<AndQuery>;
export declare const NotQuery: MessageFns<NotQuery>;
export declare const InUserIDQuery: MessageFns<InUserIDQuery>;
export declare const UserNameQuery: MessageFns<UserNameQuery>;
export declare const FirstNameQuery: MessageFns<FirstNameQuery>;
export declare const LastNameQuery: MessageFns<LastNameQuery>;
export declare const NickNameQuery: MessageFns<NickNameQuery>;
export declare const DisplayNameQuery: MessageFns<DisplayNameQuery>;
export declare const EmailQuery: MessageFns<EmailQuery>;
export declare const LoginNameQuery: MessageFns<LoginNameQuery>;
export declare const StateQuery: MessageFns<StateQuery>;
export declare const TypeQuery: MessageFns<TypeQuery>;
export declare const InUserEmailsQuery: MessageFns<InUserEmailsQuery>;
export declare const OrganizationIdQuery: MessageFns<OrganizationIdQuery>;
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
