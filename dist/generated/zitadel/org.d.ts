import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ObjectDetails, TextQueryMethod } from "./object.js";
export declare const protobufPackage = "zitadel.org.v1";
export declare enum OrgState {
    ORG_STATE_UNSPECIFIED = 0,
    ORG_STATE_ACTIVE = 1,
    ORG_STATE_INACTIVE = 2,
    ORG_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function orgStateFromJSON(object: any): OrgState;
export declare function orgStateToJSON(object: OrgState): string;
export declare enum DomainValidationType {
    DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0,
    DOMAIN_VALIDATION_TYPE_HTTP = 1,
    DOMAIN_VALIDATION_TYPE_DNS = 2,
    UNRECOGNIZED = -1
}
export declare function domainValidationTypeFromJSON(object: any): DomainValidationType;
export declare function domainValidationTypeToJSON(object: DomainValidationType): string;
export declare enum OrgFieldName {
    ORG_FIELD_NAME_UNSPECIFIED = 0,
    ORG_FIELD_NAME_NAME = 1,
    UNRECOGNIZED = -1
}
export declare function orgFieldNameFromJSON(object: any): OrgFieldName;
export declare function orgFieldNameToJSON(object: OrgFieldName): string;
export interface Org {
    id: string;
    details: ObjectDetails | undefined;
    state: OrgState;
    name: string;
    primaryDomain: string;
}
export interface Domain {
    orgId: string;
    details: ObjectDetails | undefined;
    domainName: string;
    isVerified: boolean;
    isPrimary: boolean;
    validationType: DomainValidationType;
}
export interface OrgQuery {
    nameQuery?: OrgNameQuery | undefined;
    domainQuery?: OrgDomainQuery | undefined;
    stateQuery?: OrgStateQuery | undefined;
    idQuery?: OrgIDQuery | undefined;
}
export interface OrgNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface OrgDomainQuery {
    domain: string;
    method: TextQueryMethod;
}
export interface OrgStateQuery {
    state: OrgState;
}
export interface OrgIDQuery {
    id: string;
}
export interface DomainSearchQuery {
    domainNameQuery?: DomainNameQuery | undefined;
}
export interface DomainNameQuery {
    name: string;
    method: TextQueryMethod;
}
export declare const Org: MessageFns<Org>;
export declare const Domain: MessageFns<Domain>;
export declare const OrgQuery: MessageFns<OrgQuery>;
export declare const OrgNameQuery: MessageFns<OrgNameQuery>;
export declare const OrgDomainQuery: MessageFns<OrgDomainQuery>;
export declare const OrgStateQuery: MessageFns<OrgStateQuery>;
export declare const OrgIDQuery: MessageFns<OrgIDQuery>;
export declare const DomainSearchQuery: MessageFns<DomainSearchQuery>;
export declare const DomainNameQuery: MessageFns<DomainNameQuery>;
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
