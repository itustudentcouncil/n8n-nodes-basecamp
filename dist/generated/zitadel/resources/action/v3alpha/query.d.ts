import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextFilterMethod } from "../../object/v3alpha/object.js";
import { Condition } from "./execution.js";
export declare const protobufPackage = "zitadel.resources.action.v3alpha";
export declare enum ExecutionType {
    EXECUTION_TYPE_UNSPECIFIED = 0,
    EXECUTION_TYPE_REQUEST = 1,
    EXECUTION_TYPE_RESPONSE = 2,
    EXECUTION_TYPE_EVENT = 3,
    EXECUTION_TYPE_FUNCTION = 4,
    UNRECOGNIZED = -1
}
export declare function executionTypeFromJSON(object: any): ExecutionType;
export declare function executionTypeToJSON(object: ExecutionType): string;
export declare enum TargetFieldName {
    TARGET_FIELD_NAME_UNSPECIFIED = 0,
    TARGET_FIELD_NAME_ID = 1,
    TARGET_FIELD_NAME_CREATED_DATE = 2,
    TARGET_FIELD_NAME_CHANGED_DATE = 3,
    TARGET_FIELD_NAME_NAME = 4,
    TARGET_FIELD_NAME_TARGET_TYPE = 5,
    TARGET_FIELD_NAME_URL = 6,
    TARGET_FIELD_NAME_TIMEOUT = 7,
    TARGET_FIELD_NAME_INTERRUPT_ON_ERROR = 8,
    UNRECOGNIZED = -1
}
export declare function targetFieldNameFromJSON(object: any): TargetFieldName;
export declare function targetFieldNameToJSON(object: TargetFieldName): string;
export declare enum ExecutionFieldName {
    EXECUTION_FIELD_NAME_UNSPECIFIED = 0,
    EXECUTION_FIELD_NAME_ID = 1,
    EXECUTION_FIELD_NAME_CREATED_DATE = 2,
    EXECUTION_FIELD_NAME_CHANGED_DATE = 3,
    UNRECOGNIZED = -1
}
export declare function executionFieldNameFromJSON(object: any): ExecutionFieldName;
export declare function executionFieldNameToJSON(object: ExecutionFieldName): string;
export interface ExecutionSearchFilter {
    inConditionsFilter?: InConditionsFilter | undefined;
    executionTypeFilter?: ExecutionTypeFilter | undefined;
    targetFilter?: TargetFilter | undefined;
    includeFilter?: IncludeFilter | undefined;
}
export interface InConditionsFilter {
    conditions: Condition[];
}
export interface ExecutionTypeFilter {
    executionType: ExecutionType;
}
export interface TargetFilter {
    targetId: string;
}
export interface IncludeFilter {
    include: Condition | undefined;
}
export interface TargetSearchFilter {
    targetNameFilter?: TargetNameFilter | undefined;
    inTargetIdsFilter?: InTargetIDsFilter | undefined;
}
export interface TargetNameFilter {
    targetName: string;
    method: TextFilterMethod;
}
export interface InTargetIDsFilter {
    targetIds: string[];
}
export declare const ExecutionSearchFilter: MessageFns<ExecutionSearchFilter>;
export declare const InConditionsFilter: MessageFns<InConditionsFilter>;
export declare const ExecutionTypeFilter: MessageFns<ExecutionTypeFilter>;
export declare const TargetFilter: MessageFns<TargetFilter>;
export declare const IncludeFilter: MessageFns<IncludeFilter>;
export declare const TargetSearchFilter: MessageFns<TargetSearchFilter>;
export declare const TargetNameFilter: MessageFns<TargetNameFilter>;
export declare const InTargetIDsFilter: MessageFns<InTargetIDsFilter>;
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
