// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/custom_audience_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible custom audience errors. */
export interface CustomAudienceErrorEnum {
}

/** Enum describing possible custom audience errors. */
export enum CustomAudienceErrorEnum_CustomAudienceError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** NAME_ALREADY_USED - New name in the custom audience is duplicated ignoring cases. */
  NAME_ALREADY_USED = 2,
  /** CANNOT_REMOVE_WHILE_IN_USE - Cannot remove a custom audience while it's still being used as targeting. */
  CANNOT_REMOVE_WHILE_IN_USE = 3,
  /** RESOURCE_ALREADY_REMOVED - Cannot update or remove a custom audience that is already removed. */
  RESOURCE_ALREADY_REMOVED = 4,
  /** MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED - The pair of [type, value] already exists in members. */
  MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED = 5,
  /** INVALID_MEMBER_TYPE - Member type is invalid. */
  INVALID_MEMBER_TYPE = 6,
  /** MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH - Member type does not have associated value. */
  MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH = 7,
  /** POLICY_VIOLATION - Custom audience contains a member that violates policy. */
  POLICY_VIOLATION = 8,
  /** INVALID_TYPE_CHANGE - Change in custom audience type is not allowed. */
  INVALID_TYPE_CHANGE = 9,
  UNRECOGNIZED = -1,
}

export function customAudienceErrorEnum_CustomAudienceErrorFromJSON(
  object: any,
): CustomAudienceErrorEnum_CustomAudienceError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CustomAudienceErrorEnum_CustomAudienceError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CustomAudienceErrorEnum_CustomAudienceError.UNKNOWN;
    case 2:
    case "NAME_ALREADY_USED":
      return CustomAudienceErrorEnum_CustomAudienceError.NAME_ALREADY_USED;
    case 3:
    case "CANNOT_REMOVE_WHILE_IN_USE":
      return CustomAudienceErrorEnum_CustomAudienceError.CANNOT_REMOVE_WHILE_IN_USE;
    case 4:
    case "RESOURCE_ALREADY_REMOVED":
      return CustomAudienceErrorEnum_CustomAudienceError.RESOURCE_ALREADY_REMOVED;
    case 5:
    case "MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED":
      return CustomAudienceErrorEnum_CustomAudienceError.MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED;
    case 6:
    case "INVALID_MEMBER_TYPE":
      return CustomAudienceErrorEnum_CustomAudienceError.INVALID_MEMBER_TYPE;
    case 7:
    case "MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH":
      return CustomAudienceErrorEnum_CustomAudienceError.MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH;
    case 8:
    case "POLICY_VIOLATION":
      return CustomAudienceErrorEnum_CustomAudienceError.POLICY_VIOLATION;
    case 9:
    case "INVALID_TYPE_CHANGE":
      return CustomAudienceErrorEnum_CustomAudienceError.INVALID_TYPE_CHANGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomAudienceErrorEnum_CustomAudienceError.UNRECOGNIZED;
  }
}

export function customAudienceErrorEnum_CustomAudienceErrorToJSON(
  object: CustomAudienceErrorEnum_CustomAudienceError,
): string {
  switch (object) {
    case CustomAudienceErrorEnum_CustomAudienceError.UNSPECIFIED:
      return "UNSPECIFIED";
    case CustomAudienceErrorEnum_CustomAudienceError.UNKNOWN:
      return "UNKNOWN";
    case CustomAudienceErrorEnum_CustomAudienceError.NAME_ALREADY_USED:
      return "NAME_ALREADY_USED";
    case CustomAudienceErrorEnum_CustomAudienceError.CANNOT_REMOVE_WHILE_IN_USE:
      return "CANNOT_REMOVE_WHILE_IN_USE";
    case CustomAudienceErrorEnum_CustomAudienceError.RESOURCE_ALREADY_REMOVED:
      return "RESOURCE_ALREADY_REMOVED";
    case CustomAudienceErrorEnum_CustomAudienceError.MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED:
      return "MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED";
    case CustomAudienceErrorEnum_CustomAudienceError.INVALID_MEMBER_TYPE:
      return "INVALID_MEMBER_TYPE";
    case CustomAudienceErrorEnum_CustomAudienceError.MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH:
      return "MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH";
    case CustomAudienceErrorEnum_CustomAudienceError.POLICY_VIOLATION:
      return "POLICY_VIOLATION";
    case CustomAudienceErrorEnum_CustomAudienceError.INVALID_TYPE_CHANGE:
      return "INVALID_TYPE_CHANGE";
    case CustomAudienceErrorEnum_CustomAudienceError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCustomAudienceErrorEnum(): CustomAudienceErrorEnum {
  return {};
}

export const CustomAudienceErrorEnum: MessageFns<CustomAudienceErrorEnum> = {
  encode(_: CustomAudienceErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomAudienceErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomAudienceErrorEnum();
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

  fromJSON(_: any): CustomAudienceErrorEnum {
    return {};
  },

  toJSON(_: CustomAudienceErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CustomAudienceErrorEnum>): CustomAudienceErrorEnum {
    return CustomAudienceErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CustomAudienceErrorEnum>): CustomAudienceErrorEnum {
    const message = createBaseCustomAudienceErrorEnum();
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
