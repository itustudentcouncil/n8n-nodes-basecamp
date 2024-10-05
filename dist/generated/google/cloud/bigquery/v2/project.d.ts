import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
export declare const protobufPackage = "google.cloud.bigquery.v2";
export interface GetServiceAccountRequest {
    projectId: string;
}
export interface GetServiceAccountResponse {
    kind: string;
    email: string;
}
export declare const GetServiceAccountRequest: MessageFns<GetServiceAccountRequest>;
export declare const GetServiceAccountResponse: MessageFns<GetServiceAccountResponse>;
export type ProjectServiceDefinition = typeof ProjectServiceDefinition;
export declare const ProjectServiceDefinition: {
    readonly name: "ProjectService";
    readonly fullName: "google.cloud.bigquery.v2.ProjectService";
    readonly methods: {
        readonly getServiceAccount: {
            readonly name: "GetServiceAccount";
            readonly requestType: MessageFns<GetServiceAccountRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetServiceAccountResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface ProjectServiceImplementation<CallContextExt = {}> {
    getServiceAccount(request: GetServiceAccountRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetServiceAccountResponse>>;
}
export interface ProjectServiceClient<CallOptionsExt = {}> {
    getServiceAccount(request: DeepPartial<GetServiceAccountRequest>, options?: CallOptions & CallOptionsExt): Promise<GetServiceAccountResponse>;
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
