// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/resource_count_limit_exceeded_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible resource count limit exceeded errors. */
export interface ResourceCountLimitExceededErrorEnum {
}

/** Enum describing possible resource count limit exceeded errors. */
export enum ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /**
   * ACCOUNT_LIMIT - Indicates that this request would exceed the number of allowed resources
   * for the Google Ads account. The exact resource type and limit being
   * checked can be inferred from accountLimitType.
   */
  ACCOUNT_LIMIT = 2,
  /**
   * CAMPAIGN_LIMIT - Indicates that this request would exceed the number of allowed resources
   * in a Campaign. The exact resource type and limit being checked can be
   * inferred from accountLimitType, and the numeric id of the
   * Campaign involved is given by enclosingId.
   */
  CAMPAIGN_LIMIT = 3,
  /**
   * ADGROUP_LIMIT - Indicates that this request would exceed the number of allowed resources
   * in an ad group. The exact resource type and limit being checked can be
   * inferred from accountLimitType, and the numeric id of the
   * ad group involved is given by enclosingId.
   */
  ADGROUP_LIMIT = 4,
  /**
   * AD_GROUP_AD_LIMIT - Indicates that this request would exceed the number of allowed resources
   * in an ad group ad. The exact resource type and limit being checked can
   * be inferred from accountLimitType, and the enclosingId
   * contains the ad group id followed by the ad id, separated by a single
   * comma (,).
   */
  AD_GROUP_AD_LIMIT = 5,
  /**
   * AD_GROUP_CRITERION_LIMIT - Indicates that this request would exceed the number of allowed resources
   * in an ad group criterion. The exact resource type and limit being checked
   * can be inferred from accountLimitType, and the
   * enclosingId contains the ad group id followed by the
   * criterion id, separated by a single comma (,).
   */
  AD_GROUP_CRITERION_LIMIT = 6,
  /**
   * SHARED_SET_LIMIT - Indicates that this request would exceed the number of allowed resources
   * in this shared set. The exact resource type and limit being checked can
   * be inferred from accountLimitType, and the numeric id of the
   * shared set involved is given by enclosingId.
   */
  SHARED_SET_LIMIT = 7,
  /** MATCHING_FUNCTION_LIMIT - Exceeds a limit related to a matching function. */
  MATCHING_FUNCTION_LIMIT = 8,
  /**
   * RESPONSE_ROW_LIMIT_EXCEEDED - The response for this request would exceed the maximum number of rows
   * that can be returned.
   */
  RESPONSE_ROW_LIMIT_EXCEEDED = 9,
  /**
   * RESOURCE_LIMIT - This request would exceed a limit on the number of allowed resources.
   * The details of which type of limit was exceeded will eventually be
   * returned in ErrorDetails.
   */
  RESOURCE_LIMIT = 10,
  UNRECOGNIZED = -1,
}

export function resourceCountLimitExceededErrorEnum_ResourceCountLimitExceededErrorFromJSON(
  object: any,
): ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.UNKNOWN;
    case 2:
    case "ACCOUNT_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.ACCOUNT_LIMIT;
    case 3:
    case "CAMPAIGN_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.CAMPAIGN_LIMIT;
    case 4:
    case "ADGROUP_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.ADGROUP_LIMIT;
    case 5:
    case "AD_GROUP_AD_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.AD_GROUP_AD_LIMIT;
    case 6:
    case "AD_GROUP_CRITERION_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.AD_GROUP_CRITERION_LIMIT;
    case 7:
    case "SHARED_SET_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.SHARED_SET_LIMIT;
    case 8:
    case "MATCHING_FUNCTION_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.MATCHING_FUNCTION_LIMIT;
    case 9:
    case "RESPONSE_ROW_LIMIT_EXCEEDED":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.RESPONSE_ROW_LIMIT_EXCEEDED;
    case 10:
    case "RESOURCE_LIMIT":
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.RESOURCE_LIMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.UNRECOGNIZED;
  }
}

export function resourceCountLimitExceededErrorEnum_ResourceCountLimitExceededErrorToJSON(
  object: ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError,
): string {
  switch (object) {
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.UNSPECIFIED:
      return "UNSPECIFIED";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.UNKNOWN:
      return "UNKNOWN";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.ACCOUNT_LIMIT:
      return "ACCOUNT_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.CAMPAIGN_LIMIT:
      return "CAMPAIGN_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.ADGROUP_LIMIT:
      return "ADGROUP_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.AD_GROUP_AD_LIMIT:
      return "AD_GROUP_AD_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.AD_GROUP_CRITERION_LIMIT:
      return "AD_GROUP_CRITERION_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.SHARED_SET_LIMIT:
      return "SHARED_SET_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.MATCHING_FUNCTION_LIMIT:
      return "MATCHING_FUNCTION_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.RESPONSE_ROW_LIMIT_EXCEEDED:
      return "RESPONSE_ROW_LIMIT_EXCEEDED";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.RESOURCE_LIMIT:
      return "RESOURCE_LIMIT";
    case ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseResourceCountLimitExceededErrorEnum(): ResourceCountLimitExceededErrorEnum {
  return {};
}

export const ResourceCountLimitExceededErrorEnum: MessageFns<ResourceCountLimitExceededErrorEnum> = {
  encode(_: ResourceCountLimitExceededErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResourceCountLimitExceededErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceCountLimitExceededErrorEnum();
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

  fromJSON(_: any): ResourceCountLimitExceededErrorEnum {
    return {};
  },

  toJSON(_: ResourceCountLimitExceededErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ResourceCountLimitExceededErrorEnum>): ResourceCountLimitExceededErrorEnum {
    return ResourceCountLimitExceededErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ResourceCountLimitExceededErrorEnum>): ResourceCountLimitExceededErrorEnum {
    const message = createBaseResourceCountLimitExceededErrorEnum();
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
