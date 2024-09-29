import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Owner } from "../../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.object.v3alpha";
export declare enum TextFilterMethod {
    TEXT_FILTER_METHOD_EQUALS = 0,
    TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE = 1,
    TEXT_FILTER_METHOD_STARTS_WITH = 2,
    TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE = 3,
    TEXT_FILTER_METHOD_CONTAINS = 4,
    UNRECOGNIZED = -1
}
export declare function textFilterMethodFromJSON(object: any): TextFilterMethod;
export declare function textFilterMethodToJSON(object: TextFilterMethod): string;
export interface Details {
    id: string;
    created: Date | undefined;
    changed: Date | undefined;
    owner: Owner | undefined;
}
export interface SearchQuery {
    offset: Long;
    limit: number;
    desc: boolean;
}
export interface ListDetails {
    appliedLimit: Long;
    totalResult: Long;
    timestamp: Date | undefined;
}
export declare const Details: MessageFns<Details>;
export declare const SearchQuery: MessageFns<SearchQuery>;
export declare const ListDetails: MessageFns<ListDetails>;
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
