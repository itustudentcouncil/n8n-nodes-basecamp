// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/user_list_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { Status } from "../../../../rpc/status.js";
import { UserList } from "../resources/user_list.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [UserListService.MutateUserLists][google.ads.googleads.v17.services.UserListService.MutateUserLists].
 */
export interface MutateUserListsRequest {
  /** Required. The ID of the customer whose user lists are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual user lists. */
  operations: UserListOperation[];
  /**
   * If true, successful operations will be carried out and invalid
   * operations will return errors. If false, all operations will be carried
   * out in one transaction if and only if they are all valid.
   * Default is false.
   */
  partialFailure: boolean;
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
}

/** A single operation (create, update) on a user list. */
export interface UserListOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /** Create operation: No resource name is expected for the new user list. */
  create?:
    | UserList
    | undefined;
  /**
   * Update operation: The user list is expected to have a valid resource
   * name.
   */
  update?:
    | UserList
    | undefined;
  /**
   * Remove operation: A resource name for the removed user list is expected,
   * in this format:
   *
   * `customers/{customer_id}/userLists/{user_list_id}`
   */
  remove?: string | undefined;
}

/** Response message for user list mutate. */
export interface MutateUserListsResponse {
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError:
    | Status
    | undefined;
  /** All results for the mutate. */
  results: MutateUserListResult[];
}

/** The result for the user list mutate. */
export interface MutateUserListResult {
  /** Returned for successful operations. */
  resourceName: string;
}

function createBaseMutateUserListsRequest(): MutateUserListsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false };
}

export const MutateUserListsRequest: MessageFns<MutateUserListsRequest> = {
  encode(message: MutateUserListsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      UserListOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.partialFailure !== false) {
      writer.uint32(24).bool(message.partialFailure);
    }
    if (message.validateOnly !== false) {
      writer.uint32(32).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateUserListsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateUserListsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operations.push(UserListOperation.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.partialFailure = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateUserListsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => UserListOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: MutateUserListsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => UserListOperation.toJSON(e));
    }
    if (message.partialFailure !== false) {
      obj.partialFailure = message.partialFailure;
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateUserListsRequest>): MutateUserListsRequest {
    return MutateUserListsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateUserListsRequest>): MutateUserListsRequest {
    const message = createBaseMutateUserListsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => UserListOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseUserListOperation(): UserListOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const UserListOperation: MessageFns<UserListOperation> = {
  encode(message: UserListOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      UserList.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      UserList.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserListOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = UserList.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = UserList.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.remove = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserListOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? UserList.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? UserList.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: UserListOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = UserList.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = UserList.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<UserListOperation>): UserListOperation {
    return UserListOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserListOperation>): UserListOperation {
    const message = createBaseUserListOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? UserList.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? UserList.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateUserListsResponse(): MutateUserListsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateUserListsResponse: MessageFns<MutateUserListsResponse> = {
  encode(message: MutateUserListsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateUserListResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateUserListsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateUserListsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.partialFailureError = Status.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(MutateUserListResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateUserListsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateUserListResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateUserListsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateUserListResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateUserListsResponse>): MutateUserListsResponse {
    return MutateUserListsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateUserListsResponse>): MutateUserListsResponse {
    const message = createBaseMutateUserListsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateUserListResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateUserListResult(): MutateUserListResult {
  return { resourceName: "" };
}

export const MutateUserListResult: MessageFns<MutateUserListResult> = {
  encode(message: MutateUserListResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateUserListResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateUserListResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateUserListResult {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: MutateUserListResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateUserListResult>): MutateUserListResult {
    return MutateUserListResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateUserListResult>): MutateUserListResult {
    const message = createBaseMutateUserListResult();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/** Service to manage user lists. */
export type UserListServiceDefinition = typeof UserListServiceDefinition;
export const UserListServiceDefinition = {
  name: "UserListService",
  fullName: "google.ads.googleads.v17.services.UserListService",
  methods: {
    /**
     * Creates or updates user lists. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [DatabaseError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotAllowlistedError]()
     *   [NotEmptyError]()
     *   [OperationAccessDeniedError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UserListError]()
     */
    mutateUserLists: {
      name: "MutateUserLists",
      requestType: MutateUserListsRequest,
      requestStream: false,
      responseType: MutateUserListsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              22,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              44,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
          578365826: [
            Buffer.from([
              52,
              58,
              1,
              42,
              34,
              47,
              47,
              118,
              49,
              55,
              47,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              115,
              47,
              123,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              61,
              42,
              125,
              47,
              117,
              115,
              101,
              114,
              76,
              105,
              115,
              116,
              115,
              58,
              109,
              117,
              116,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface UserListServiceImplementation<CallContextExt = {}> {
  /**
   * Creates or updates user lists. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [DatabaseError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [OperationAccessDeniedError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UserListError]()
   */
  mutateUserLists(
    request: MutateUserListsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateUserListsResponse>>;
}

export interface UserListServiceClient<CallOptionsExt = {}> {
  /**
   * Creates or updates user lists. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [DatabaseError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [OperationAccessDeniedError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UserListError]()
   */
  mutateUserLists(
    request: DeepPartial<MutateUserListsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateUserListsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
