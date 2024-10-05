import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.action.v3alpha";
export interface Execution {
    targets: ExecutionTargetType[];
}
export interface GetExecution {
    details: Details | undefined;
    condition: Condition | undefined;
    execution: Execution | undefined;
}
export interface ExecutionTargetType {
    target?: string | undefined;
    include?: Condition | undefined;
}
export interface Condition {
    request?: RequestExecution | undefined;
    response?: ResponseExecution | undefined;
    function?: FunctionExecution | undefined;
    event?: EventExecution | undefined;
}
export interface RequestExecution {
    method?: string | undefined;
    service?: string | undefined;
    all?: boolean | undefined;
}
export interface ResponseExecution {
    method?: string | undefined;
    service?: string | undefined;
    all?: boolean | undefined;
}
export interface FunctionExecution {
    name: string;
}
export interface EventExecution {
    event?: string | undefined;
    group?: string | undefined;
    all?: boolean | undefined;
}
export declare const Execution: MessageFns<Execution>;
export declare const GetExecution: MessageFns<GetExecution>;
export declare const ExecutionTargetType: MessageFns<ExecutionTargetType>;
export declare const Condition: MessageFns<Condition>;
export declare const RequestExecution: MessageFns<RequestExecution>;
export declare const ResponseExecution: MessageFns<ResponseExecution>;
export declare const FunctionExecution: MessageFns<FunctionExecution>;
export declare const EventExecution: MessageFns<EventExecution>;
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
