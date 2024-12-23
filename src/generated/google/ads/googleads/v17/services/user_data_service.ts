// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/user_data_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { CustomerMatchUserListMetadata, UserData } from "../common/offline_user_data.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [UserDataService.UploadUserData][google.ads.googleads.v17.services.UserDataService.UploadUserData]
 */
export interface UploadUserDataRequest {
  /** Required. The ID of the customer for which to update the user data. */
  customerId: string;
  /** Required. The list of operations to be done. */
  operations: UserDataOperation[];
  /** Metadata for data updates to a Customer Match user list. */
  customerMatchUserListMetadata?: CustomerMatchUserListMetadata | undefined;
}

/** Operation to be made for the UploadUserDataRequest. */
export interface UserDataOperation {
  /** The list of user data to be appended to the user list. */
  create?:
    | UserData
    | undefined;
  /** The list of user data to be removed from the user list. */
  remove?: UserData | undefined;
}

/**
 * Response message for
 * [UserDataService.UploadUserData][google.ads.googleads.v17.services.UserDataService.UploadUserData]
 * Uploads made through this service will not be visible under the 'Segment
 * members' section for the Customer Match List in the Google Ads UI.
 */
export interface UploadUserDataResponse {
  /**
   * The date time at which the request was received by API, formatted as
   * "yyyy-mm-dd hh:mm:ss+|-hh:mm", for example, "2019-01-01 12:32:45-08:00".
   */
  uploadDateTime?:
    | string
    | undefined;
  /** Number of upload data operations received by API. */
  receivedOperationsCount?: number | undefined;
}

function createBaseUploadUserDataRequest(): UploadUserDataRequest {
  return { customerId: "", operations: [], customerMatchUserListMetadata: undefined };
}

export const UploadUserDataRequest: MessageFns<UploadUserDataRequest> = {
  encode(message: UploadUserDataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      UserDataOperation.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.customerMatchUserListMetadata !== undefined) {
      CustomerMatchUserListMetadata.encode(message.customerMatchUserListMetadata, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UploadUserDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadUserDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operations.push(UserDataOperation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customerMatchUserListMetadata = CustomerMatchUserListMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadUserDataRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => UserDataOperation.fromJSON(e))
        : [],
      customerMatchUserListMetadata: isSet(object.customerMatchUserListMetadata)
        ? CustomerMatchUserListMetadata.fromJSON(object.customerMatchUserListMetadata)
        : undefined,
    };
  },

  toJSON(message: UploadUserDataRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => UserDataOperation.toJSON(e));
    }
    if (message.customerMatchUserListMetadata !== undefined) {
      obj.customerMatchUserListMetadata = CustomerMatchUserListMetadata.toJSON(message.customerMatchUserListMetadata);
    }
    return obj;
  },

  create(base?: DeepPartial<UploadUserDataRequest>): UploadUserDataRequest {
    return UploadUserDataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UploadUserDataRequest>): UploadUserDataRequest {
    const message = createBaseUploadUserDataRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => UserDataOperation.fromPartial(e)) || [];
    message.customerMatchUserListMetadata =
      (object.customerMatchUserListMetadata !== undefined && object.customerMatchUserListMetadata !== null)
        ? CustomerMatchUserListMetadata.fromPartial(object.customerMatchUserListMetadata)
        : undefined;
    return message;
  },
};

function createBaseUserDataOperation(): UserDataOperation {
  return { create: undefined, remove: undefined };
}

export const UserDataOperation: MessageFns<UserDataOperation> = {
  encode(message: UserDataOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.create !== undefined) {
      UserData.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.remove !== undefined) {
      UserData.encode(message.remove, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserDataOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDataOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = UserData.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remove = UserData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserDataOperation {
    return {
      create: isSet(object.create) ? UserData.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? UserData.fromJSON(object.remove) : undefined,
    };
  },

  toJSON(message: UserDataOperation): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = UserData.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = UserData.toJSON(message.remove);
    }
    return obj;
  },

  create(base?: DeepPartial<UserDataOperation>): UserDataOperation {
    return UserDataOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserDataOperation>): UserDataOperation {
    const message = createBaseUserDataOperation();
    message.create = (object.create !== undefined && object.create !== null)
      ? UserData.fromPartial(object.create)
      : undefined;
    message.remove = (object.remove !== undefined && object.remove !== null)
      ? UserData.fromPartial(object.remove)
      : undefined;
    return message;
  },
};

function createBaseUploadUserDataResponse(): UploadUserDataResponse {
  return { uploadDateTime: undefined, receivedOperationsCount: undefined };
}

export const UploadUserDataResponse: MessageFns<UploadUserDataResponse> = {
  encode(message: UploadUserDataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uploadDateTime !== undefined) {
      writer.uint32(26).string(message.uploadDateTime);
    }
    if (message.receivedOperationsCount !== undefined) {
      writer.uint32(32).int32(message.receivedOperationsCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UploadUserDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uploadDateTime = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.receivedOperationsCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadUserDataResponse {
    return {
      uploadDateTime: isSet(object.uploadDateTime) ? globalThis.String(object.uploadDateTime) : undefined,
      receivedOperationsCount: isSet(object.receivedOperationsCount)
        ? globalThis.Number(object.receivedOperationsCount)
        : undefined,
    };
  },

  toJSON(message: UploadUserDataResponse): unknown {
    const obj: any = {};
    if (message.uploadDateTime !== undefined) {
      obj.uploadDateTime = message.uploadDateTime;
    }
    if (message.receivedOperationsCount !== undefined) {
      obj.receivedOperationsCount = Math.round(message.receivedOperationsCount);
    }
    return obj;
  },

  create(base?: DeepPartial<UploadUserDataResponse>): UploadUserDataResponse {
    return UploadUserDataResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UploadUserDataResponse>): UploadUserDataResponse {
    const message = createBaseUploadUserDataResponse();
    message.uploadDateTime = object.uploadDateTime ?? undefined;
    message.receivedOperationsCount = object.receivedOperationsCount ?? undefined;
    return message;
  },
};

/**
 * Service to manage user data uploads.
 * Any uploads made to a Customer Match list through this service will be
 * eligible for matching as per the customer matching process. See
 * https://support.google.com/google-ads/answer/7474263. However, the uploads
 * made through this service will not be visible under the 'Segment members'
 * section for the Customer Match List in the Google Ads UI.
 */
export type UserDataServiceDefinition = typeof UserDataServiceDefinition;
export const UserDataServiceDefinition = {
  name: "UserDataService",
  fullName: "google.ads.googleads.v17.services.UserDataService",
  methods: {
    /**
     * Uploads the given user data.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [OfflineUserDataJobError]()
     *   [QuotaError]()
     *   [RequestError]()
     *   [UserDataError]()
     */
    uploadUserData: {
      name: "UploadUserData",
      requestType: UploadUserDataRequest,
      requestStream: false,
      responseType: UploadUserDataResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              50,
              58,
              1,
              42,
              34,
              45,
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
              58,
              117,
              112,
              108,
              111,
              97,
              100,
              85,
              115,
              101,
              114,
              68,
              97,
              116,
              97,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface UserDataServiceImplementation<CallContextExt = {}> {
  /**
   * Uploads the given user data.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [OfflineUserDataJobError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [UserDataError]()
   */
  uploadUserData(
    request: UploadUserDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UploadUserDataResponse>>;
}

export interface UserDataServiceClient<CallOptionsExt = {}> {
  /**
   * Uploads the given user data.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [OfflineUserDataJobError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [UserDataError]()
   */
  uploadUserData(
    request: DeepPartial<UploadUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UploadUserDataResponse>;
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
