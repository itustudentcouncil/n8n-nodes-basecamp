import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextQueryMethod } from "../../object/v2/object.js";
import { OrganizationState } from "./org.js";
export declare const protobufPackage = "zitadel.org.v2";
export declare enum OrganizationFieldName {
    ORGANIZATION_FIELD_NAME_UNSPECIFIED = 0,
    ORGANIZATION_FIELD_NAME_NAME = 1,
    UNRECOGNIZED = -1
}
export declare function organizationFieldNameFromJSON(object: any): OrganizationFieldName;
export declare function organizationFieldNameToJSON(object: OrganizationFieldName): string;
export interface SearchQuery {
    nameQuery?: OrganizationNameQuery | undefined;
    domainQuery?: OrganizationDomainQuery | undefined;
    stateQuery?: OrganizationStateQuery | undefined;
    idQuery?: OrganizationIDQuery | undefined;
}
export interface OrganizationNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface OrganizationDomainQuery {
    domain: string;
    method: TextQueryMethod;
}
export interface OrganizationStateQuery {
    state: OrganizationState;
}
export interface OrganizationIDQuery {
    id: string;
}
export declare const SearchQuery: MessageFns<SearchQuery>;
export declare const OrganizationNameQuery: MessageFns<OrganizationNameQuery>;
export declare const OrganizationDomainQuery: MessageFns<OrganizationDomainQuery>;
export declare const OrganizationStateQuery: MessageFns<OrganizationStateQuery>;
export declare const OrganizationIDQuery: MessageFns<OrganizationIDQuery>;
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
