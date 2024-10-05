import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.user.v2beta";
export interface SetHumanPhone {
    phone: string;
    sendCode?: SendPhoneVerificationCode | undefined;
    returnCode?: ReturnPhoneVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface HumanPhone {
    phone: string;
    isVerified: boolean;
}
export interface SendPhoneVerificationCode {
}
export interface ReturnPhoneVerificationCode {
}
export declare const SetHumanPhone: MessageFns<SetHumanPhone>;
export declare const HumanPhone: MessageFns<HumanPhone>;
export declare const SendPhoneVerificationCode: MessageFns<SendPhoneVerificationCode>;
export declare const ReturnPhoneVerificationCode: MessageFns<ReturnPhoneVerificationCode>;
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
