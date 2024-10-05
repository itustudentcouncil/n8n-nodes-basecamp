import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ObjectDetails, TextQueryMethod } from "./object.js";
export declare const protobufPackage = "zitadel.instance.v1";
export declare enum State {
    STATE_UNSPECIFIED = 0,
    STATE_CREATING = 1,
    STATE_RUNNING = 2,
    STATE_STOPPING = 3,
    STATE_STOPPED = 4,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export declare enum FieldName {
    FIELD_NAME_UNSPECIFIED = 0,
    FIELD_NAME_ID = 1,
    FIELD_NAME_NAME = 2,
    FIELD_NAME_CREATION_DATE = 3,
    UNRECOGNIZED = -1
}
export declare function fieldNameFromJSON(object: any): FieldName;
export declare function fieldNameToJSON(object: FieldName): string;
export declare enum DomainFieldName {
    DOMAIN_FIELD_NAME_UNSPECIFIED = 0,
    DOMAIN_FIELD_NAME_DOMAIN = 1,
    DOMAIN_FIELD_NAME_PRIMARY = 2,
    DOMAIN_FIELD_NAME_GENERATED = 3,
    DOMAIN_FIELD_NAME_CREATION_DATE = 4,
    UNRECOGNIZED = -1
}
export declare function domainFieldNameFromJSON(object: any): DomainFieldName;
export declare function domainFieldNameToJSON(object: DomainFieldName): string;
export interface Instance {
    id: string;
    details: ObjectDetails | undefined;
    state: State;
    name: string;
    version: string;
    domains: Domain[];
}
export interface InstanceDetail {
    id: string;
    details: ObjectDetails | undefined;
    state: State;
    name: string;
    version: string;
    domains: Domain[];
}
export interface Query {
    idQuery?: IdsQuery | undefined;
    domainQuery?: DomainsQuery | undefined;
}
export interface IdsQuery {
    ids: string[];
}
export interface DomainsQuery {
    domains: string[];
}
export interface Domain {
    details: ObjectDetails | undefined;
    domain: string;
    primary: boolean;
    generated: boolean;
}
export interface DomainSearchQuery {
    domainQuery?: DomainQuery | undefined;
    generatedQuery?: DomainGeneratedQuery | undefined;
    primaryQuery?: DomainPrimaryQuery | undefined;
}
export interface DomainQuery {
    domain: string;
    method: TextQueryMethod;
}
export interface DomainGeneratedQuery {
    generated: boolean;
}
export interface DomainPrimaryQuery {
    primary: boolean;
}
export interface TrustedDomain {
    details: ObjectDetails | undefined;
    domain: string;
}
export interface TrustedDomainSearchQuery {
    domainQuery?: DomainQuery | undefined;
}
export declare const Instance: MessageFns<Instance>;
export declare const InstanceDetail: MessageFns<InstanceDetail>;
export declare const Query: MessageFns<Query>;
export declare const IdsQuery: MessageFns<IdsQuery>;
export declare const DomainsQuery: MessageFns<DomainsQuery>;
export declare const Domain: MessageFns<Domain>;
export declare const DomainSearchQuery: MessageFns<DomainSearchQuery>;
export declare const DomainQuery: MessageFns<DomainQuery>;
export declare const DomainGeneratedQuery: MessageFns<DomainGeneratedQuery>;
export declare const DomainPrimaryQuery: MessageFns<DomainPrimaryQuery>;
export declare const TrustedDomain: MessageFns<TrustedDomain>;
export declare const TrustedDomainSearchQuery: MessageFns<TrustedDomainSearchQuery>;
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
