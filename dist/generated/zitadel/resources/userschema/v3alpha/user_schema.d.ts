import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details, TextFilterMethod } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.userschema.v3alpha";
export declare enum FieldName {
    FIELD_NAME_UNSPECIFIED = 0,
    FIELD_NAME_TYPE = 1,
    FIELD_NAME_STATE = 2,
    FIELD_NAME_REVISION = 3,
    FIELD_NAME_CHANGE_DATE = 4,
    FIELD_NAME_CREATION_DATE = 5,
    UNRECOGNIZED = -1
}
export declare function fieldNameFromJSON(object: any): FieldName;
export declare function fieldNameToJSON(object: FieldName): string;
export declare enum State {
    STATE_UNSPECIFIED = 0,
    STATE_ACTIVE = 1,
    STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export declare enum AuthenticatorType {
    AUTHENTICATOR_TYPE_UNSPECIFIED = 0,
    AUTHENTICATOR_TYPE_USERNAME = 1,
    AUTHENTICATOR_TYPE_PASSWORD = 2,
    AUTHENTICATOR_TYPE_WEBAUTHN = 3,
    AUTHENTICATOR_TYPE_TOTP = 4,
    AUTHENTICATOR_TYPE_OTP_EMAIL = 5,
    AUTHENTICATOR_TYPE_OTP_SMS = 6,
    AUTHENTICATOR_TYPE_AUTHENTICATION_KEY = 7,
    AUTHENTICATOR_TYPE_IDENTITY_PROVIDER = 8,
    UNRECOGNIZED = -1
}
export declare function authenticatorTypeFromJSON(object: any): AuthenticatorType;
export declare function authenticatorTypeToJSON(object: AuthenticatorType): string;
export interface GetUserSchema {
    details: Details | undefined;
    config: UserSchema | undefined;
    state: State;
    revision: number;
}
export interface UserSchema {
    type: string;
    schema?: {
        [key: string]: any;
    } | undefined;
    possibleAuthenticators: AuthenticatorType[];
}
export interface PatchUserSchema {
    type?: string | undefined;
    schema?: {
        [key: string]: any;
    } | undefined;
    possibleAuthenticators: AuthenticatorType[];
}
export interface SearchFilter {
    orFilter?: OrFilter | undefined;
    andFilter?: AndFilter | undefined;
    notFilter?: NotFilter | undefined;
    typeFilter?: TypeFilter | undefined;
    stateFilter?: StateFilter | undefined;
    idFilter?: IDFilter | undefined;
}
export interface OrFilter {
    queries: SearchFilter[];
}
export interface AndFilter {
    queries: SearchFilter[];
}
export interface NotFilter {
    filter: SearchFilter | undefined;
}
export interface IDFilter {
    id: string;
    method: TextFilterMethod;
}
export interface TypeFilter {
    type: string;
    method: TextFilterMethod;
}
export interface StateFilter {
    state: State;
}
export declare const GetUserSchema: MessageFns<GetUserSchema>;
export declare const UserSchema: MessageFns<UserSchema>;
export declare const PatchUserSchema: MessageFns<PatchUserSchema>;
export declare const SearchFilter: MessageFns<SearchFilter>;
export declare const OrFilter: MessageFns<OrFilter>;
export declare const AndFilter: MessageFns<AndFilter>;
export declare const NotFilter: MessageFns<NotFilter>;
export declare const IDFilter: MessageFns<IDFilter>;
export declare const TypeFilter: MessageFns<TypeFilter>;
export declare const StateFilter: MessageFns<StateFilter>;
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
