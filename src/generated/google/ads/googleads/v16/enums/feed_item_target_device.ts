// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/feed_item_target_device.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing possible data types for a feed item target
 * device.
 */
export interface FeedItemTargetDeviceEnum {
}

/** Possible data types for a feed item target device. */
export enum FeedItemTargetDeviceEnum_FeedItemTargetDevice {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** MOBILE - Mobile. */
  MOBILE = 2,
  UNRECOGNIZED = -1,
}

export function feedItemTargetDeviceEnum_FeedItemTargetDeviceFromJSON(
  object: any,
): FeedItemTargetDeviceEnum_FeedItemTargetDevice {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return FeedItemTargetDeviceEnum_FeedItemTargetDevice.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return FeedItemTargetDeviceEnum_FeedItemTargetDevice.UNKNOWN;
    case 2:
    case "MOBILE":
      return FeedItemTargetDeviceEnum_FeedItemTargetDevice.MOBILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeedItemTargetDeviceEnum_FeedItemTargetDevice.UNRECOGNIZED;
  }
}

export function feedItemTargetDeviceEnum_FeedItemTargetDeviceToJSON(
  object: FeedItemTargetDeviceEnum_FeedItemTargetDevice,
): string {
  switch (object) {
    case FeedItemTargetDeviceEnum_FeedItemTargetDevice.UNSPECIFIED:
      return "UNSPECIFIED";
    case FeedItemTargetDeviceEnum_FeedItemTargetDevice.UNKNOWN:
      return "UNKNOWN";
    case FeedItemTargetDeviceEnum_FeedItemTargetDevice.MOBILE:
      return "MOBILE";
    case FeedItemTargetDeviceEnum_FeedItemTargetDevice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFeedItemTargetDeviceEnum(): FeedItemTargetDeviceEnum {
  return {};
}

export const FeedItemTargetDeviceEnum: MessageFns<FeedItemTargetDeviceEnum> = {
  encode(_: FeedItemTargetDeviceEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItemTargetDeviceEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItemTargetDeviceEnum();
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

  fromJSON(_: any): FeedItemTargetDeviceEnum {
    return {};
  },

  toJSON(_: FeedItemTargetDeviceEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FeedItemTargetDeviceEnum>): FeedItemTargetDeviceEnum {
    return FeedItemTargetDeviceEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FeedItemTargetDeviceEnum>): FeedItemTargetDeviceEnum {
    const message = createBaseFeedItemTargetDeviceEnum();
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