import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../google/protobuf/duration.js";
import { LocalizedMessage } from "./message.js";
import { ObjectDetails, TextQueryMethod } from "./object.js";
export declare const protobufPackage = "zitadel.action.v1";
export declare enum ActionState {
    ACTION_STATE_UNSPECIFIED = 0,
    ACTION_STATE_INACTIVE = 1,
    ACTION_STATE_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function actionStateFromJSON(object: any): ActionState;
export declare function actionStateToJSON(object: ActionState): string;
export declare enum ActionFieldName {
    ACTION_FIELD_NAME_UNSPECIFIED = 0,
    ACTION_FIELD_NAME_NAME = 1,
    ACTION_FIELD_NAME_ID = 2,
    ACTION_FIELD_NAME_STATE = 3,
    UNRECOGNIZED = -1
}
export declare function actionFieldNameFromJSON(object: any): ActionFieldName;
export declare function actionFieldNameToJSON(object: ActionFieldName): string;
export declare enum FlowState {
    FLOW_STATE_UNSPECIFIED = 0,
    FLOW_STATE_INACTIVE = 1,
    FLOW_STATE_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function flowStateFromJSON(object: any): FlowState;
export declare function flowStateToJSON(object: FlowState): string;
export interface Action {
    id: string;
    details: ObjectDetails | undefined;
    state: ActionState;
    name: string;
    script: string;
    timeout: Duration | undefined;
    allowedToFail: boolean;
}
export interface ActionIDQuery {
    id: string;
}
export interface ActionNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface ActionStateQuery {
    state: ActionState;
}
export interface Flow {
    type: FlowType | undefined;
    details: ObjectDetails | undefined;
    state: FlowState;
    triggerActions: TriggerAction[];
}
export interface FlowType {
    id: string;
    name: LocalizedMessage | undefined;
}
export interface TriggerType {
    id: string;
    name: LocalizedMessage | undefined;
}
export interface TriggerAction {
    triggerType: TriggerType | undefined;
    actions: Action[];
}
export declare const Action: MessageFns<Action>;
export declare const ActionIDQuery: MessageFns<ActionIDQuery>;
export declare const ActionNameQuery: MessageFns<ActionNameQuery>;
export declare const ActionStateQuery: MessageFns<ActionStateQuery>;
export declare const Flow: MessageFns<Flow>;
export declare const FlowType: MessageFns<FlowType>;
export declare const TriggerType: MessageFns<TriggerType>;
export declare const TriggerAction: MessageFns<TriggerAction>;
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
