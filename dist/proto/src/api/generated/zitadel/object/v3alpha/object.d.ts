import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.object.v3alpha";
export declare enum OwnerType {
    OWNER_TYPE_UNSPECIFIED = 0,
    OWNER_TYPE_SYSTEM = 1,
    OWNER_TYPE_INSTANCE = 2,
    OWNER_TYPE_ORG = 3,
    UNRECOGNIZED = -1
}
export declare function ownerTypeFromJSON(object: any): OwnerType;
export declare function ownerTypeToJSON(object: OwnerType): string;
export interface Owner {
    type: OwnerType;
    id: string;
}
export interface Instance {
    id?: string | undefined;
    domain?: string | undefined;
}
export interface Organization {
    orgId?: string | undefined;
    orgDomain?: string | undefined;
}
export declare const Owner: MessageFns<Owner>;
export declare const Instance: MessageFns<Instance>;
export declare const Organization: MessageFns<Organization>;
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
