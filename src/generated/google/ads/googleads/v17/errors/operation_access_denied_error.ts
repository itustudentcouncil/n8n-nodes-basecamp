// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/operation_access_denied_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible operation access denied errors. */
export interface OperationAccessDeniedErrorEnum {
}

/** Enum describing possible operation access denied errors. */
export enum OperationAccessDeniedErrorEnum_OperationAccessDeniedError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** ACTION_NOT_PERMITTED - Unauthorized invocation of a service's method (get, mutate, etc.) */
  ACTION_NOT_PERMITTED = 2,
  /** CREATE_OPERATION_NOT_PERMITTED - Unauthorized CREATE operation in invoking a service's mutate method. */
  CREATE_OPERATION_NOT_PERMITTED = 3,
  /** REMOVE_OPERATION_NOT_PERMITTED - Unauthorized REMOVE operation in invoking a service's mutate method. */
  REMOVE_OPERATION_NOT_PERMITTED = 4,
  /** UPDATE_OPERATION_NOT_PERMITTED - Unauthorized UPDATE operation in invoking a service's mutate method. */
  UPDATE_OPERATION_NOT_PERMITTED = 5,
  /** MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT - A mutate action is not allowed on this resource, from this client. */
  MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT = 6,
  /** OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE - This operation is not permitted on this campaign type */
  OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE = 7,
  /** CREATE_AS_REMOVED_NOT_PERMITTED - A CREATE operation may not set status to REMOVED. */
  CREATE_AS_REMOVED_NOT_PERMITTED = 8,
  /** OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE - This operation is not allowed because the resource is removed. */
  OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE = 9,
  /** OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE - This operation is not permitted on this ad group type. */
  OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE = 10,
  /** MUTATE_NOT_PERMITTED_FOR_CUSTOMER - The mutate is not allowed for this customer. */
  MUTATE_NOT_PERMITTED_FOR_CUSTOMER = 11,
  UNRECOGNIZED = -1,
}

export function operationAccessDeniedErrorEnum_OperationAccessDeniedErrorFromJSON(
  object: any,
): OperationAccessDeniedErrorEnum_OperationAccessDeniedError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UNKNOWN;
    case 2:
    case "ACTION_NOT_PERMITTED":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.ACTION_NOT_PERMITTED;
    case 3:
    case "CREATE_OPERATION_NOT_PERMITTED":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.CREATE_OPERATION_NOT_PERMITTED;
    case 4:
    case "REMOVE_OPERATION_NOT_PERMITTED":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.REMOVE_OPERATION_NOT_PERMITTED;
    case 5:
    case "UPDATE_OPERATION_NOT_PERMITTED":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UPDATE_OPERATION_NOT_PERMITTED;
    case 6:
    case "MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT;
    case 7:
    case "OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE;
    case 8:
    case "CREATE_AS_REMOVED_NOT_PERMITTED":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.CREATE_AS_REMOVED_NOT_PERMITTED;
    case 9:
    case "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE;
    case 10:
    case "OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE;
    case 11:
    case "MUTATE_NOT_PERMITTED_FOR_CUSTOMER":
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.MUTATE_NOT_PERMITTED_FOR_CUSTOMER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UNRECOGNIZED;
  }
}

export function operationAccessDeniedErrorEnum_OperationAccessDeniedErrorToJSON(
  object: OperationAccessDeniedErrorEnum_OperationAccessDeniedError,
): string {
  switch (object) {
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UNSPECIFIED:
      return "UNSPECIFIED";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UNKNOWN:
      return "UNKNOWN";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.ACTION_NOT_PERMITTED:
      return "ACTION_NOT_PERMITTED";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.CREATE_OPERATION_NOT_PERMITTED:
      return "CREATE_OPERATION_NOT_PERMITTED";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.REMOVE_OPERATION_NOT_PERMITTED:
      return "REMOVE_OPERATION_NOT_PERMITTED";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UPDATE_OPERATION_NOT_PERMITTED:
      return "UPDATE_OPERATION_NOT_PERMITTED";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT:
      return "MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE:
      return "OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.CREATE_AS_REMOVED_NOT_PERMITTED:
      return "CREATE_AS_REMOVED_NOT_PERMITTED";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE:
      return "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE:
      return "OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.MUTATE_NOT_PERMITTED_FOR_CUSTOMER:
      return "MUTATE_NOT_PERMITTED_FOR_CUSTOMER";
    case OperationAccessDeniedErrorEnum_OperationAccessDeniedError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseOperationAccessDeniedErrorEnum(): OperationAccessDeniedErrorEnum {
  return {};
}

export const OperationAccessDeniedErrorEnum: MessageFns<OperationAccessDeniedErrorEnum> = {
  encode(_: OperationAccessDeniedErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperationAccessDeniedErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationAccessDeniedErrorEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): OperationAccessDeniedErrorEnum {
    return {};
  },

  toJSON(_: OperationAccessDeniedErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<OperationAccessDeniedErrorEnum>): OperationAccessDeniedErrorEnum {
    return OperationAccessDeniedErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<OperationAccessDeniedErrorEnum>): OperationAccessDeniedErrorEnum {
    const message = createBaseOperationAccessDeniedErrorEnum();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
