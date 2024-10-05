import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LocalizedMessage } from "./message.js";
export declare const protobufPackage = "zitadel.event.v1";
export interface Event {
    editor: Editor | undefined;
    aggregate: Aggregate | undefined;
    sequence: Long;
    creationDate: Date | undefined;
    payload: {
        [key: string]: any;
    } | undefined;
    type: EventType | undefined;
}
export interface Editor {
    userId: string;
    displayName: string;
    service: string;
}
export interface Aggregate {
    id: string;
    type: AggregateType | undefined;
    resourceOwner: string;
}
export interface EventType {
    type: string;
    localized: LocalizedMessage | undefined;
}
export interface AggregateType {
    type: string;
    localized: LocalizedMessage | undefined;
}
export declare const Event: MessageFns<Event>;
export declare const Editor: MessageFns<Editor>;
export declare const Aggregate: MessageFns<Aggregate>;
export declare const EventType: MessageFns<EventType>;
export declare const AggregateType: MessageFns<AggregateType>;
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
