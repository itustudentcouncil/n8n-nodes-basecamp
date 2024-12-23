// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/ad_group_ad_primary_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Ad Group Ad Primary Status. Provides insight into why an ad group ad is not
 * serving or not serving optimally.
 */
export interface AdGroupAdPrimaryStatusEnum {
}

/** The possible statuses of an AdGroupAd. */
export enum AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus {
  /** UNSPECIFIED - No value has been specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ELIGIBLE - The ad group ad is eligible to serve. */
  ELIGIBLE = 2,
  /** PAUSED - The ad group ad is paused. */
  PAUSED = 3,
  /** REMOVED - The ad group ad is removed. */
  REMOVED = 4,
  /** PENDING - The ad cannot serve now, but may serve later without advertiser action. */
  PENDING = 5,
  /** LIMITED - The ad group ad is serving in a limited capacity. */
  LIMITED = 6,
  /** NOT_ELIGIBLE - The ad group ad is not eligible to serve. */
  NOT_ELIGIBLE = 7,
  UNRECOGNIZED = -1,
}

export function adGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatusFromJSON(
  object: any,
): AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.UNKNOWN;
    case 2:
    case "ELIGIBLE":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.ELIGIBLE;
    case 3:
    case "PAUSED":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.PAUSED;
    case 4:
    case "REMOVED":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.REMOVED;
    case 5:
    case "PENDING":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.PENDING;
    case 6:
    case "LIMITED":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.LIMITED;
    case 7:
    case "NOT_ELIGIBLE":
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.NOT_ELIGIBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.UNRECOGNIZED;
  }
}

export function adGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatusToJSON(
  object: AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus,
): string {
  switch (object) {
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.UNKNOWN:
      return "UNKNOWN";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.ELIGIBLE:
      return "ELIGIBLE";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.PAUSED:
      return "PAUSED";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.REMOVED:
      return "REMOVED";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.PENDING:
      return "PENDING";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.LIMITED:
      return "LIMITED";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.NOT_ELIGIBLE:
      return "NOT_ELIGIBLE";
    case AdGroupAdPrimaryStatusEnum_AdGroupAdPrimaryStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAdGroupAdPrimaryStatusEnum(): AdGroupAdPrimaryStatusEnum {
  return {};
}

export const AdGroupAdPrimaryStatusEnum: MessageFns<AdGroupAdPrimaryStatusEnum> = {
  encode(_: AdGroupAdPrimaryStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdGroupAdPrimaryStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdGroupAdPrimaryStatusEnum();
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

  fromJSON(_: any): AdGroupAdPrimaryStatusEnum {
    return {};
  },

  toJSON(_: AdGroupAdPrimaryStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AdGroupAdPrimaryStatusEnum>): AdGroupAdPrimaryStatusEnum {
    return AdGroupAdPrimaryStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AdGroupAdPrimaryStatusEnum>): AdGroupAdPrimaryStatusEnum {
    const message = createBaseAdGroupAdPrimaryStatusEnum();
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
