import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v2/object.js";
export declare const protobufPackage = "zitadel.org.v2";
export declare enum OrganizationState {
    ORGANIZATION_STATE_UNSPECIFIED = 0,
    ORGANIZATION_STATE_ACTIVE = 1,
    ORGANIZATION_STATE_INACTIVE = 2,
    ORGANIZATION_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function organizationStateFromJSON(object: any): OrganizationState;
export declare function organizationStateToJSON(object: OrganizationState): string;
export interface Organization {
    id: string;
    details: Details | undefined;
    state: OrganizationState;
    name: string;
    primaryDomain: string;
}
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
