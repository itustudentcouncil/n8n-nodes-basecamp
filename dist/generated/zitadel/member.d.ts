import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ObjectDetails, TextQueryMethod } from "./object.js";
import { Type } from "./user.js";
export declare const protobufPackage = "zitadel.member.v1";
export interface Member {
    userId: string;
    details: ObjectDetails | undefined;
    roles: string[];
    preferredLoginName: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    avatarUrl: string;
    userType: Type;
}
export interface SearchQuery {
    firstNameQuery?: FirstNameQuery | undefined;
    lastNameQuery?: LastNameQuery | undefined;
    emailQuery?: EmailQuery | undefined;
    userIdQuery?: UserIDQuery | undefined;
}
export interface FirstNameQuery {
    firstName: string;
    method: TextQueryMethod;
}
export interface LastNameQuery {
    lastName: string;
    method: TextQueryMethod;
}
export interface EmailQuery {
    email: string;
    method: TextQueryMethod;
}
export interface UserIDQuery {
    userId: string;
}
export declare const Member: MessageFns<Member>;
export declare const SearchQuery: MessageFns<SearchQuery>;
export declare const FirstNameQuery: MessageFns<FirstNameQuery>;
export declare const LastNameQuery: MessageFns<LastNameQuery>;
export declare const EmailQuery: MessageFns<EmailQuery>;
export declare const UserIDQuery: MessageFns<UserIDQuery>;
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
