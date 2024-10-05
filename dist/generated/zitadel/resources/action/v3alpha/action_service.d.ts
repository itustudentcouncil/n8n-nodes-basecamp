import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance } from "../../../object/v3alpha/object.js";
import { Details, ListDetails, SearchQuery } from "../../object/v3alpha/object.js";
import { Condition, Execution, GetExecution } from "./execution.js";
import { ExecutionFieldName, ExecutionSearchFilter, TargetFieldName, TargetSearchFilter } from "./query.js";
import { GetTarget, PatchTarget, Target } from "./target.js";
export declare const protobufPackage = "zitadel.resources.action.v3alpha";
export interface CreateTargetRequest {
    instance?: Instance | undefined;
    target: Target | undefined;
}
export interface CreateTargetResponse {
    details: Details | undefined;
}
export interface PatchTargetRequest {
    instance?: Instance | undefined;
    id: string;
    target: PatchTarget | undefined;
}
export interface PatchTargetResponse {
    details: Details | undefined;
}
export interface DeleteTargetRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface DeleteTargetResponse {
    details: Details | undefined;
}
export interface GetTargetRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface GetTargetResponse {
    target: GetTarget | undefined;
}
export interface SearchTargetsRequest {
    instance?: Instance | undefined;
    query?: SearchQuery | undefined;
    sortingColumn?: TargetFieldName | undefined;
    filters: TargetSearchFilter[];
}
export interface SearchTargetsResponse {
    details: ListDetails | undefined;
    result: GetTarget[];
}
export interface SetExecutionRequest {
    instance?: Instance | undefined;
    condition: Condition | undefined;
    execution: Execution | undefined;
}
export interface SetExecutionResponse {
    details: Details | undefined;
}
export interface SearchExecutionsRequest {
    instance?: Instance | undefined;
    query?: SearchQuery | undefined;
    sortingColumn?: ExecutionFieldName | undefined;
    filters: ExecutionSearchFilter[];
}
export interface SearchExecutionsResponse {
    details: ListDetails | undefined;
    result: GetExecution[];
}
export interface ListExecutionFunctionsRequest {
}
export interface ListExecutionFunctionsResponse {
    functions: string[];
}
export interface ListExecutionMethodsRequest {
}
export interface ListExecutionMethodsResponse {
    methods: string[];
}
export interface ListExecutionServicesRequest {
}
export interface ListExecutionServicesResponse {
    services: string[];
}
export declare const CreateTargetRequest: MessageFns<CreateTargetRequest>;
export declare const CreateTargetResponse: MessageFns<CreateTargetResponse>;
export declare const PatchTargetRequest: MessageFns<PatchTargetRequest>;
export declare const PatchTargetResponse: MessageFns<PatchTargetResponse>;
export declare const DeleteTargetRequest: MessageFns<DeleteTargetRequest>;
export declare const DeleteTargetResponse: MessageFns<DeleteTargetResponse>;
export declare const GetTargetRequest: MessageFns<GetTargetRequest>;
export declare const GetTargetResponse: MessageFns<GetTargetResponse>;
export declare const SearchTargetsRequest: MessageFns<SearchTargetsRequest>;
export declare const SearchTargetsResponse: MessageFns<SearchTargetsResponse>;
export declare const SetExecutionRequest: MessageFns<SetExecutionRequest>;
export declare const SetExecutionResponse: MessageFns<SetExecutionResponse>;
export declare const SearchExecutionsRequest: MessageFns<SearchExecutionsRequest>;
export declare const SearchExecutionsResponse: MessageFns<SearchExecutionsResponse>;
export declare const ListExecutionFunctionsRequest: MessageFns<ListExecutionFunctionsRequest>;
export declare const ListExecutionFunctionsResponse: MessageFns<ListExecutionFunctionsResponse>;
export declare const ListExecutionMethodsRequest: MessageFns<ListExecutionMethodsRequest>;
export declare const ListExecutionMethodsResponse: MessageFns<ListExecutionMethodsResponse>;
export declare const ListExecutionServicesRequest: MessageFns<ListExecutionServicesRequest>;
export declare const ListExecutionServicesResponse: MessageFns<ListExecutionServicesResponse>;
export type ZITADELActionsDefinition = typeof ZITADELActionsDefinition;
export declare const ZITADELActionsDefinition: {
    readonly name: "ZITADELActions";
    readonly fullName: "zitadel.resources.action.v3alpha.ZITADELActions";
    readonly methods: {
        readonly createTarget: {
            readonly name: "CreateTarget";
            readonly requestType: MessageFns<CreateTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateTargetResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly patchTarget: {
            readonly name: "PatchTarget";
            readonly requestType: MessageFns<PatchTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PatchTargetResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deleteTarget: {
            readonly name: "DeleteTarget";
            readonly requestType: MessageFns<DeleteTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteTargetResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getTarget: {
            readonly name: "GetTarget";
            readonly requestType: MessageFns<GetTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetTargetResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly searchTargets: {
            readonly name: "SearchTargets";
            readonly requestType: MessageFns<SearchTargetsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchTargetsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setExecution: {
            readonly name: "SetExecution";
            readonly requestType: MessageFns<SetExecutionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetExecutionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly searchExecutions: {
            readonly name: "SearchExecutions";
            readonly requestType: MessageFns<SearchExecutionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchExecutionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listExecutionFunctions: {
            readonly name: "ListExecutionFunctions";
            readonly requestType: MessageFns<ListExecutionFunctionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListExecutionFunctionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listExecutionMethods: {
            readonly name: "ListExecutionMethods";
            readonly requestType: MessageFns<ListExecutionMethodsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListExecutionMethodsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listExecutionServices: {
            readonly name: "ListExecutionServices";
            readonly requestType: MessageFns<ListExecutionServicesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListExecutionServicesResponse>;
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
export interface ZITADELActionsServiceImplementation<CallContextExt = {}> {
    createTarget(request: CreateTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateTargetResponse>>;
    patchTarget(request: PatchTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchTargetResponse>>;
    deleteTarget(request: DeleteTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteTargetResponse>>;
    getTarget(request: GetTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetTargetResponse>>;
    searchTargets(request: SearchTargetsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchTargetsResponse>>;
    setExecution(request: SetExecutionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetExecutionResponse>>;
    searchExecutions(request: SearchExecutionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchExecutionsResponse>>;
    listExecutionFunctions(request: ListExecutionFunctionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionFunctionsResponse>>;
    listExecutionMethods(request: ListExecutionMethodsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionMethodsResponse>>;
    listExecutionServices(request: ListExecutionServicesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionServicesResponse>>;
}
export interface ZITADELActionsClient<CallOptionsExt = {}> {
    createTarget(request: DeepPartial<CreateTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateTargetResponse>;
    patchTarget(request: DeepPartial<PatchTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<PatchTargetResponse>;
    deleteTarget(request: DeepPartial<DeleteTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteTargetResponse>;
    getTarget(request: DeepPartial<GetTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<GetTargetResponse>;
    searchTargets(request: DeepPartial<SearchTargetsRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchTargetsResponse>;
    setExecution(request: DeepPartial<SetExecutionRequest>, options?: CallOptions & CallOptionsExt): Promise<SetExecutionResponse>;
    searchExecutions(request: DeepPartial<SearchExecutionsRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchExecutionsResponse>;
    listExecutionFunctions(request: DeepPartial<ListExecutionFunctionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionFunctionsResponse>;
    listExecutionMethods(request: DeepPartial<ListExecutionMethodsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionMethodsResponse>;
    listExecutionServices(request: DeepPartial<ListExecutionServicesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionServicesResponse>;
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
