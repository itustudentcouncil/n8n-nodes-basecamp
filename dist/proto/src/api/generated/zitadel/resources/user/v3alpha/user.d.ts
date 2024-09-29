import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v3alpha/object.js";
import { Authenticators, SetAuthenticators } from "./authenticator.js";
import { Contact, SetContact } from "./communication.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export declare enum State {
    USER_STATE_UNSPECIFIED = 0,
    USER_STATE_ACTIVE = 1,
    USER_STATE_INACTIVE = 2,
    USER_STATE_DELETED = 3,
    USER_STATE_LOCKED = 4,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export interface CreateUser {
    schemaId: string;
    data: {
        [key: string]: any;
    } | undefined;
    contact: SetContact | undefined;
    authenticators: SetAuthenticators | undefined;
    userId?: string | undefined;
}
export interface PatchUser {
    schemaId?: string | undefined;
    data?: {
        [key: string]: any;
    } | undefined;
    contact?: SetContact | undefined;
}
export interface GetUser {
    details: Details | undefined;
    schema: GetSchema | undefined;
    data: {
        [key: string]: any;
    } | undefined;
    contact: Contact | undefined;
    authenticators: Authenticators | undefined;
    state: State;
}
export interface GetSchema {
    id: string;
    type: string;
    revision: number;
}
export declare const CreateUser: MessageFns<CreateUser>;
export declare const PatchUser: MessageFns<PatchUser>;
export declare const GetUser: MessageFns<GetUser>;
export declare const GetSchema: MessageFns<GetSchema>;
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
