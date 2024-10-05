import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.user.v2beta";
export interface SetHumanEmail {
    email: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface HumanEmail {
    email: string;
    isVerified: boolean;
}
export interface SendEmailVerificationCode {
    urlTemplate?: string | undefined;
}
export interface ReturnEmailVerificationCode {
}
export declare const SetHumanEmail: MessageFns<SetHumanEmail>;
export declare const HumanEmail: MessageFns<HumanEmail>;
export declare const SendEmailVerificationCode: MessageFns<SendEmailVerificationCode>;
export declare const ReturnEmailVerificationCode: MessageFns<ReturnEmailVerificationCode>;
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
