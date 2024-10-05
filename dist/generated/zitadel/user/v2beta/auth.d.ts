import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.user.v2beta";
export declare enum PasskeyAuthenticator {
    PASSKEY_AUTHENTICATOR_UNSPECIFIED = 0,
    PASSKEY_AUTHENTICATOR_PLATFORM = 1,
    PASSKEY_AUTHENTICATOR_CROSS_PLATFORM = 2,
    UNRECOGNIZED = -1
}
export declare function passkeyAuthenticatorFromJSON(object: any): PasskeyAuthenticator;
export declare function passkeyAuthenticatorToJSON(object: PasskeyAuthenticator): string;
export interface SendPasskeyRegistrationLink {
    urlTemplate?: string | undefined;
}
export interface ReturnPasskeyRegistrationCode {
}
export interface PasskeyRegistrationCode {
    id: string;
    code: string;
}
export declare const SendPasskeyRegistrationLink: MessageFns<SendPasskeyRegistrationLink>;
export declare const ReturnPasskeyRegistrationCode: MessageFns<ReturnPasskeyRegistrationCode>;
export declare const PasskeyRegistrationCode: MessageFns<PasskeyRegistrationCode>;
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
