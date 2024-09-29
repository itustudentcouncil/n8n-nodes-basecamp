import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextFilterMethod } from "../../object/v3alpha/object.js";
import { State } from "./user.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export declare enum FieldName {
    FIELD_NAME_UNSPECIFIED = 0,
    FIELD_NAME_ID = 1,
    FIELD_NAME_CREATION_DATE = 2,
    FIELD_NAME_CHANGE_DATE = 3,
    FIELD_NAME_EMAIL = 4,
    FIELD_NAME_PHONE = 5,
    FIELD_NAME_STATE = 6,
    FIELD_NAME_SCHEMA_ID = 7,
    FIELD_NAME_SCHEMA_TYPE = 8,
    UNRECOGNIZED = -1
}
export declare function fieldNameFromJSON(object: any): FieldName;
export declare function fieldNameToJSON(object: FieldName): string;
export interface SearchFilter {
    orFilter?: OrFilter | undefined;
    andFilter?: AndFilter | undefined;
    notFilter?: NotFilter | undefined;
    userIdFilter?: UserIDFilter | undefined;
    organizationIdFilter?: OrganizationIDFilter | undefined;
    usernameFilter?: UsernameFilter | undefined;
    emailFilter?: EmailFilter | undefined;
    phoneFilter?: PhoneFilter | undefined;
    stateFilter?: StateFilter | undefined;
    schemaIdFilter?: SchemaIDFilter | undefined;
    schemaTypeFilter?: SchemaTypeFilter | undefined;
}
export interface OrFilter {
    queries: SearchFilter[];
}
export interface AndFilter {
    queries: SearchFilter[];
}
export interface NotFilter {
    query: SearchFilter | undefined;
}
export interface UserIDFilter {
    id: string;
    method: TextFilterMethod;
}
export interface OrganizationIDFilter {
    id: string;
    method: TextFilterMethod;
}
export interface UsernameFilter {
    username: string;
    method: TextFilterMethod;
    isOrganizationSpecific: boolean;
}
export interface EmailFilter {
    address: string;
    method: TextFilterMethod;
}
export interface PhoneFilter {
    number: string;
    method: TextFilterMethod;
}
export interface StateFilter {
    state: State;
}
export interface SchemaIDFilter {
    id: string;
}
export interface SchemaTypeFilter {
    type: string;
    method: TextFilterMethod;
}
export declare const SearchFilter: MessageFns<SearchFilter>;
export declare const OrFilter: MessageFns<OrFilter>;
export declare const AndFilter: MessageFns<AndFilter>;
export declare const NotFilter: MessageFns<NotFilter>;
export declare const UserIDFilter: MessageFns<UserIDFilter>;
export declare const OrganizationIDFilter: MessageFns<OrganizationIDFilter>;
export declare const UsernameFilter: MessageFns<UsernameFilter>;
export declare const EmailFilter: MessageFns<EmailFilter>;
export declare const PhoneFilter: MessageFns<PhoneFilter>;
export declare const StateFilter: MessageFns<StateFilter>;
export declare const SchemaIDFilter: MessageFns<SchemaIDFilter>;
export declare const SchemaTypeFilter: MessageFns<SchemaTypeFilter>;
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
