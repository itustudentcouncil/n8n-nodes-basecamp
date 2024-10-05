import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance } from "../../../object/v3alpha/object.js";
import { Details, ListDetails, SearchQuery } from "../../object/v3alpha/object.js";
import { FieldName, GetUserSchema, PatchUserSchema, SearchFilter, UserSchema } from "./user_schema.js";
export declare const protobufPackage = "zitadel.resources.userschema.v3alpha";
export interface SearchUserSchemasRequest {
    instance?: Instance | undefined;
    query?: SearchQuery | undefined;
    sortingColumn?: FieldName | undefined;
    filters: SearchFilter[];
}
export interface SearchUserSchemasResponse {
    details: ListDetails | undefined;
    sortingColumn: FieldName;
    result: GetUserSchema[];
}
export interface GetUserSchemaRequest {
    id: string;
}
export interface GetUserSchemaResponse {
    userSchema: GetUserSchema | undefined;
}
export interface CreateUserSchemaRequest {
    instance?: Instance | undefined;
    userSchema: UserSchema | undefined;
}
export interface CreateUserSchemaResponse {
    details: Details | undefined;
}
export interface PatchUserSchemaRequest {
    instance?: Instance | undefined;
    id: string;
    userSchema: PatchUserSchema | undefined;
}
export interface PatchUserSchemaResponse {
    details: Details | undefined;
}
export interface DeactivateUserSchemaRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface DeactivateUserSchemaResponse {
    details: Details | undefined;
}
export interface ReactivateUserSchemaRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface ReactivateUserSchemaResponse {
    details: Details | undefined;
}
export interface DeleteUserSchemaRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface DeleteUserSchemaResponse {
    details: Details | undefined;
}
export declare const SearchUserSchemasRequest: MessageFns<SearchUserSchemasRequest>;
export declare const SearchUserSchemasResponse: MessageFns<SearchUserSchemasResponse>;
export declare const GetUserSchemaRequest: MessageFns<GetUserSchemaRequest>;
export declare const GetUserSchemaResponse: MessageFns<GetUserSchemaResponse>;
export declare const CreateUserSchemaRequest: MessageFns<CreateUserSchemaRequest>;
export declare const CreateUserSchemaResponse: MessageFns<CreateUserSchemaResponse>;
export declare const PatchUserSchemaRequest: MessageFns<PatchUserSchemaRequest>;
export declare const PatchUserSchemaResponse: MessageFns<PatchUserSchemaResponse>;
export declare const DeactivateUserSchemaRequest: MessageFns<DeactivateUserSchemaRequest>;
export declare const DeactivateUserSchemaResponse: MessageFns<DeactivateUserSchemaResponse>;
export declare const ReactivateUserSchemaRequest: MessageFns<ReactivateUserSchemaRequest>;
export declare const ReactivateUserSchemaResponse: MessageFns<ReactivateUserSchemaResponse>;
export declare const DeleteUserSchemaRequest: MessageFns<DeleteUserSchemaRequest>;
export declare const DeleteUserSchemaResponse: MessageFns<DeleteUserSchemaResponse>;
export type UserSchemaServiceDefinition = typeof UserSchemaServiceDefinition;
export declare const UserSchemaServiceDefinition: {
    readonly name: "UserSchemaService";
    readonly fullName: "zitadel.resources.userschema.v3alpha.UserSchemaService";
    readonly methods: {
        readonly searchUserSchemas: {
            readonly name: "SearchUserSchemas";
            readonly requestType: MessageFns<SearchUserSchemasRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchUserSchemasResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserSchema: {
            readonly name: "GetUserSchema";
            readonly requestType: MessageFns<GetUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createUserSchema: {
            readonly name: "CreateUserSchema";
            readonly requestType: MessageFns<CreateUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly patchUserSchema: {
            readonly name: "PatchUserSchema";
            readonly requestType: MessageFns<PatchUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PatchUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateUserSchema: {
            readonly name: "DeactivateUserSchema";
            readonly requestType: MessageFns<DeactivateUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateUserSchema: {
            readonly name: "ReactivateUserSchema";
            readonly requestType: MessageFns<ReactivateUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deleteUserSchema: {
            readonly name: "DeleteUserSchema";
            readonly requestType: MessageFns<DeleteUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteUserSchemaResponse>;
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
export interface UserSchemaServiceImplementation<CallContextExt = {}> {
    searchUserSchemas(request: SearchUserSchemasRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchUserSchemasResponse>>;
    getUserSchema(request: GetUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserSchemaResponse>>;
    createUserSchema(request: CreateUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateUserSchemaResponse>>;
    patchUserSchema(request: PatchUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchUserSchemaResponse>>;
    deactivateUserSchema(request: DeactivateUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserSchemaResponse>>;
    reactivateUserSchema(request: ReactivateUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserSchemaResponse>>;
    deleteUserSchema(request: DeleteUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserSchemaResponse>>;
}
export interface UserSchemaServiceClient<CallOptionsExt = {}> {
    searchUserSchemas(request: DeepPartial<SearchUserSchemasRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchUserSchemasResponse>;
    getUserSchema(request: DeepPartial<GetUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserSchemaResponse>;
    createUserSchema(request: DeepPartial<CreateUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateUserSchemaResponse>;
    patchUserSchema(request: DeepPartial<PatchUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<PatchUserSchemaResponse>;
    deactivateUserSchema(request: DeepPartial<DeactivateUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserSchemaResponse>;
    reactivateUserSchema(request: DeepPartial<ReactivateUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserSchemaResponse>;
    deleteUserSchema(request: DeepPartial<DeleteUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserSchemaResponse>;
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
