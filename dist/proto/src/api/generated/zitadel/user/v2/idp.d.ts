/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.user.v2";
export interface LDAPCredentials {
    username: string;
    password: string;
}
export interface RedirectURLs {
    successUrl: string;
    failureUrl: string;
}
export interface IDPIntent {
    idpIntentId: string;
    idpIntentToken: string;
    userId: string;
}
export interface IDPInformation {
    oauth?: IDPOAuthAccessInformation | undefined;
    ldap?: IDPLDAPAccessInformation | undefined;
    saml?: IDPSAMLAccessInformation | undefined;
    idpId: string;
    userId: string;
    userName: string;
    rawInformation: {
        [key: string]: any;
    } | undefined;
}
export interface IDPOAuthAccessInformation {
    accessToken: string;
    idToken?: string | undefined;
}
export interface IDPLDAPAccessInformation {
    attributes: {
        [key: string]: any;
    } | undefined;
}
export interface IDPSAMLAccessInformation {
    assertion: Buffer;
}
export interface IDPLink {
    idpId: string;
    userId: string;
    userName: string;
}
export declare const LDAPCredentials: MessageFns<LDAPCredentials>;
export declare const RedirectURLs: MessageFns<RedirectURLs>;
export declare const IDPIntent: MessageFns<IDPIntent>;
export declare const IDPInformation: MessageFns<IDPInformation>;
export declare const IDPOAuthAccessInformation: MessageFns<IDPOAuthAccessInformation>;
export declare const IDPLDAPAccessInformation: MessageFns<IDPLDAPAccessInformation>;
export declare const IDPSAMLAccessInformation: MessageFns<IDPSAMLAccessInformation>;
export declare const IDPLink: MessageFns<IDPLink>;
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
