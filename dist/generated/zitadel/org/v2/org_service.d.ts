import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Details, ListDetails, ListQuery } from "../../object/v2/object.js";
import { AddHumanUserRequest } from "../../user/v2/user_service.js";
import { Organization } from "./org.js";
import { OrganizationFieldName, SearchQuery } from "./query.js";
export declare const protobufPackage = "zitadel.org.v2";
export interface AddOrganizationRequest {
    name: string;
    admins: AddOrganizationRequest_Admin[];
}
export interface AddOrganizationRequest_Admin {
    userId?: string | undefined;
    human?: AddHumanUserRequest | undefined;
    roles: string[];
}
export interface AddOrganizationResponse {
    details: Details | undefined;
    organizationId: string;
    createdAdmins: AddOrganizationResponse_CreatedAdmin[];
}
export interface AddOrganizationResponse_CreatedAdmin {
    userId: string;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface ListOrganizationsRequest {
    query: ListQuery | undefined;
    sortingColumn: OrganizationFieldName;
    queries: SearchQuery[];
}
export interface ListOrganizationsResponse {
    details: ListDetails | undefined;
    sortingColumn: OrganizationFieldName;
    result: Organization[];
}
export declare const AddOrganizationRequest: MessageFns<AddOrganizationRequest>;
export declare const AddOrganizationRequest_Admin: MessageFns<AddOrganizationRequest_Admin>;
export declare const AddOrganizationResponse: MessageFns<AddOrganizationResponse>;
export declare const AddOrganizationResponse_CreatedAdmin: MessageFns<AddOrganizationResponse_CreatedAdmin>;
export declare const ListOrganizationsRequest: MessageFns<ListOrganizationsRequest>;
export declare const ListOrganizationsResponse: MessageFns<ListOrganizationsResponse>;
export type OrganizationServiceDefinition = typeof OrganizationServiceDefinition;
export declare const OrganizationServiceDefinition: {
    readonly name: "OrganizationService";
    readonly fullName: "zitadel.org.v2.OrganizationService";
    readonly methods: {
        readonly addOrganization: {
            readonly name: "AddOrganization";
            readonly requestType: MessageFns<AddOrganizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOrganizationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrganizations: {
            readonly name: "ListOrganizations";
            readonly requestType: MessageFns<ListOrganizationsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrganizationsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface OrganizationServiceImplementation<CallContextExt = {}> {
    addOrganization(request: AddOrganizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrganizationResponse>>;
    listOrganizations(request: ListOrganizationsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrganizationsResponse>>;
}
export interface OrganizationServiceClient<CallOptionsExt = {}> {
    addOrganization(request: DeepPartial<AddOrganizationRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrganizationResponse>;
    listOrganizations(request: DeepPartial<ListOrganizationsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrganizationsResponse>;
}
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
