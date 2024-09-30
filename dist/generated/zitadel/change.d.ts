import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LocalizedMessage } from "./message.js";
export declare const protobufPackage = "zitadel.change.v1";
export interface Change {
    changeDate: Date | undefined;
    eventType: LocalizedMessage | undefined;
    sequence: Long;
    editorId: string;
    editorDisplayName: string;
    resourceOwnerId: string;
    editorPreferredLoginName: string;
    editorAvatarUrl: string;
}
export interface ChangeQuery {
    sequence: Long;
    limit: number;
    asc: boolean;
}
export declare const Change: MessageFns<Change>;
export declare const ChangeQuery: MessageFns<ChangeQuery>;
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
