import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ObjectDetails } from "./object.js";
export declare const protobufPackage = "zitadel.authn.v1";
export declare enum KeyType {
    KEY_TYPE_UNSPECIFIED = 0,
    KEY_TYPE_JSON = 1,
    UNRECOGNIZED = -1
}
export declare function keyTypeFromJSON(object: any): KeyType;
export declare function keyTypeToJSON(object: KeyType): string;
export interface Key {
    id: string;
    details: ObjectDetails | undefined;
    type: KeyType;
    expirationDate: Date | undefined;
}
export declare const Key: MessageFns<Key>;
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
