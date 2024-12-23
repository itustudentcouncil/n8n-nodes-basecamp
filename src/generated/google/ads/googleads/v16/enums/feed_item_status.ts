// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/feed_item_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing possible statuses of a feed item. */
export interface FeedItemStatusEnum {
}

/** Possible statuses of a feed item. */
export enum FeedItemStatusEnum_FeedItemStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ENABLED - Feed item is enabled. */
  ENABLED = 2,
  /** REMOVED - Feed item has been removed. */
  REMOVED = 3,
  UNRECOGNIZED = -1,
}

export function feedItemStatusEnum_FeedItemStatusFromJSON(object: any): FeedItemStatusEnum_FeedItemStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return FeedItemStatusEnum_FeedItemStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return FeedItemStatusEnum_FeedItemStatus.UNKNOWN;
    case 2:
    case "ENABLED":
      return FeedItemStatusEnum_FeedItemStatus.ENABLED;
    case 3:
    case "REMOVED":
      return FeedItemStatusEnum_FeedItemStatus.REMOVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeedItemStatusEnum_FeedItemStatus.UNRECOGNIZED;
  }
}

export function feedItemStatusEnum_FeedItemStatusToJSON(object: FeedItemStatusEnum_FeedItemStatus): string {
  switch (object) {
    case FeedItemStatusEnum_FeedItemStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case FeedItemStatusEnum_FeedItemStatus.UNKNOWN:
      return "UNKNOWN";
    case FeedItemStatusEnum_FeedItemStatus.ENABLED:
      return "ENABLED";
    case FeedItemStatusEnum_FeedItemStatus.REMOVED:
      return "REMOVED";
    case FeedItemStatusEnum_FeedItemStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFeedItemStatusEnum(): FeedItemStatusEnum {
  return {};
}

export const FeedItemStatusEnum: MessageFns<FeedItemStatusEnum> = {
  encode(_: FeedItemStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItemStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItemStatusEnum();
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

  fromJSON(_: any): FeedItemStatusEnum {
    return {};
  },

  toJSON(_: FeedItemStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FeedItemStatusEnum>): FeedItemStatusEnum {
    return FeedItemStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FeedItemStatusEnum>): FeedItemStatusEnum {
    const message = createBaseFeedItemStatusEnum();
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
