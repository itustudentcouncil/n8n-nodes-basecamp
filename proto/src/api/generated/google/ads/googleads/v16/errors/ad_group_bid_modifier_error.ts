// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/ad_group_bid_modifier_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible ad group bid modifier errors. */
export interface AdGroupBidModifierErrorEnum {
}

/** Enum describing possible ad group bid modifier errors. */
export enum AdGroupBidModifierErrorEnum_AdGroupBidModifierError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** CRITERION_ID_NOT_SUPPORTED - The criterion ID does not support bid modification. */
  CRITERION_ID_NOT_SUPPORTED = 2,
  /**
   * CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER - Cannot override the bid modifier for the given criterion ID if the parent
   * campaign is opted out of the same criterion.
   */
  CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER = 3,
  UNRECOGNIZED = -1,
}

export function adGroupBidModifierErrorEnum_AdGroupBidModifierErrorFromJSON(
  object: any,
): AdGroupBidModifierErrorEnum_AdGroupBidModifierError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AdGroupBidModifierErrorEnum_AdGroupBidModifierError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AdGroupBidModifierErrorEnum_AdGroupBidModifierError.UNKNOWN;
    case 2:
    case "CRITERION_ID_NOT_SUPPORTED":
      return AdGroupBidModifierErrorEnum_AdGroupBidModifierError.CRITERION_ID_NOT_SUPPORTED;
    case 3:
    case "CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER":
      return AdGroupBidModifierErrorEnum_AdGroupBidModifierError
        .CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdGroupBidModifierErrorEnum_AdGroupBidModifierError.UNRECOGNIZED;
  }
}

export function adGroupBidModifierErrorEnum_AdGroupBidModifierErrorToJSON(
  object: AdGroupBidModifierErrorEnum_AdGroupBidModifierError,
): string {
  switch (object) {
    case AdGroupBidModifierErrorEnum_AdGroupBidModifierError.UNSPECIFIED:
      return "UNSPECIFIED";
    case AdGroupBidModifierErrorEnum_AdGroupBidModifierError.UNKNOWN:
      return "UNKNOWN";
    case AdGroupBidModifierErrorEnum_AdGroupBidModifierError.CRITERION_ID_NOT_SUPPORTED:
      return "CRITERION_ID_NOT_SUPPORTED";
    case AdGroupBidModifierErrorEnum_AdGroupBidModifierError.CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER:
      return "CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER";
    case AdGroupBidModifierErrorEnum_AdGroupBidModifierError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAdGroupBidModifierErrorEnum(): AdGroupBidModifierErrorEnum {
  return {};
}

export const AdGroupBidModifierErrorEnum: MessageFns<AdGroupBidModifierErrorEnum> = {
  encode(_: AdGroupBidModifierErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdGroupBidModifierErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdGroupBidModifierErrorEnum();
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

  fromJSON(_: any): AdGroupBidModifierErrorEnum {
    return {};
  },

  toJSON(_: AdGroupBidModifierErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AdGroupBidModifierErrorEnum>): AdGroupBidModifierErrorEnum {
    return AdGroupBidModifierErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AdGroupBidModifierErrorEnum>): AdGroupBidModifierErrorEnum {
    const message = createBaseAdGroupBidModifierErrorEnum();
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