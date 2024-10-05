import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../../google/protobuf/duration.js";
import { Details } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.action.v3alpha";
export interface Target {
    name: string;
    restWebhook?: SetRESTWebhook | undefined;
    restCall?: SetRESTCall | undefined;
    restAsync?: SetRESTAsync | undefined;
    timeout: Duration | undefined;
    endpoint: string;
}
export interface GetTarget {
    details: Details | undefined;
    config: Target | undefined;
}
export interface PatchTarget {
    name?: string | undefined;
    restWebhook?: SetRESTWebhook | undefined;
    restCall?: SetRESTCall | undefined;
    restAsync?: SetRESTAsync | undefined;
    timeout?: Duration | undefined;
    endpoint?: string | undefined;
}
export interface SetRESTWebhook {
    interruptOnError: boolean;
}
export interface SetRESTCall {
    interruptOnError: boolean;
}
export interface SetRESTAsync {
}
export declare const Target: MessageFns<Target>;
export declare const GetTarget: MessageFns<GetTarget>;
export declare const PatchTarget: MessageFns<PatchTarget>;
export declare const SetRESTWebhook: MessageFns<SetRESTWebhook>;
export declare const SetRESTCall: MessageFns<SetRESTCall>;
export declare const SetRESTAsync: MessageFns<SetRESTAsync>;
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
