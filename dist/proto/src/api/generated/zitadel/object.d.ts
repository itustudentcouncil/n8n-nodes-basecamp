import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.v1";
export declare enum TextQueryMethod {
    TEXT_QUERY_METHOD_EQUALS = 0,
    TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE = 1,
    TEXT_QUERY_METHOD_STARTS_WITH = 2,
    TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE = 3,
    TEXT_QUERY_METHOD_CONTAINS = 4,
    TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE = 5,
    TEXT_QUERY_METHOD_ENDS_WITH = 6,
    TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE = 7,
    UNRECOGNIZED = -1
}
export declare function textQueryMethodFromJSON(object: any): TextQueryMethod;
export declare function textQueryMethodToJSON(object: TextQueryMethod): string;
export declare enum ListQueryMethod {
    LIST_QUERY_METHOD_IN = 0,
    UNRECOGNIZED = -1
}
export declare function listQueryMethodFromJSON(object: any): ListQueryMethod;
export declare function listQueryMethodToJSON(object: ListQueryMethod): string;
export declare enum TimestampQueryMethod {
    TIMESTAMP_QUERY_METHOD_EQUALS = 0,
    TIMESTAMP_QUERY_METHOD_GREATER = 1,
    TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS = 2,
    TIMESTAMP_QUERY_METHOD_LESS = 3,
    TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS = 4,
    UNRECOGNIZED = -1
}
export declare function timestampQueryMethodFromJSON(object: any): TimestampQueryMethod;
export declare function timestampQueryMethodToJSON(object: TimestampQueryMethod): string;
export interface ObjectDetails {
    sequence: Long;
    creationDate: Date | undefined;
    changeDate: Date | undefined;
    resourceOwner: string;
}
export interface ListQuery {
    offset: Long;
    limit: number;
    asc: boolean;
}
export interface ListDetails {
    totalResult: Long;
    processedSequence: Long;
    viewTimestamp: Date | undefined;
}
export declare const ObjectDetails: MessageFns<ObjectDetails>;
export declare const ListQuery: MessageFns<ListQuery>;
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
