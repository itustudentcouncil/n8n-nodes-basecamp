// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/ad_group_feed.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MatchingFunction } from "../common/matching_function.js";
import {
  FeedLinkStatusEnum_FeedLinkStatus,
  feedLinkStatusEnum_FeedLinkStatusFromJSON,
  feedLinkStatusEnum_FeedLinkStatusToJSON,
} from "../enums/feed_link_status.js";
import {
  PlaceholderTypeEnum_PlaceholderType,
  placeholderTypeEnum_PlaceholderTypeFromJSON,
  placeholderTypeEnum_PlaceholderTypeToJSON,
} from "../enums/placeholder_type.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** An ad group feed. */
export interface AdGroupFeed {
  /**
   * Immutable. The resource name of the ad group feed.
   * Ad group feed resource names have the form:
   *
   * `customers/{customer_id}/adGroupFeeds/{ad_group_id}~{feed_id}
   */
  resourceName: string;
  /** Immutable. The feed being linked to the ad group. */
  feed?:
    | string
    | undefined;
  /** Immutable. The ad group being linked to the feed. */
  adGroup?:
    | string
    | undefined;
  /**
   * Indicates which placeholder types the feed may populate under the connected
   * ad group. Required.
   */
  placeholderTypes: PlaceholderTypeEnum_PlaceholderType[];
  /**
   * Matching function associated with the AdGroupFeed.
   * The matching function is used to filter the set of feed items selected.
   * Required.
   */
  matchingFunction:
    | MatchingFunction
    | undefined;
  /**
   * Output only. Status of the ad group feed.
   * This field is read-only.
   */
  status: FeedLinkStatusEnum_FeedLinkStatus;
}

function createBaseAdGroupFeed(): AdGroupFeed {
  return {
    resourceName: "",
    feed: undefined,
    adGroup: undefined,
    placeholderTypes: [],
    matchingFunction: undefined,
    status: 0,
  };
}

export const AdGroupFeed: MessageFns<AdGroupFeed> = {
  encode(message: AdGroupFeed, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.feed !== undefined) {
      writer.uint32(58).string(message.feed);
    }
    if (message.adGroup !== undefined) {
      writer.uint32(66).string(message.adGroup);
    }
    writer.uint32(34).fork();
    for (const v of message.placeholderTypes) {
      writer.int32(v);
    }
    writer.join();
    if (message.matchingFunction !== undefined) {
      MatchingFunction.encode(message.matchingFunction, writer.uint32(42).fork()).join();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdGroupFeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdGroupFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.feed = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.adGroup = reader.string();
          continue;
        case 4:
          if (tag === 32) {
            message.placeholderTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.placeholderTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.matchingFunction = MatchingFunction.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdGroupFeed {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      feed: isSet(object.feed) ? globalThis.String(object.feed) : undefined,
      adGroup: isSet(object.adGroup) ? globalThis.String(object.adGroup) : undefined,
      placeholderTypes: globalThis.Array.isArray(object?.placeholderTypes)
        ? object.placeholderTypes.map((e: any) => placeholderTypeEnum_PlaceholderTypeFromJSON(e))
        : [],
      matchingFunction: isSet(object.matchingFunction) ? MatchingFunction.fromJSON(object.matchingFunction) : undefined,
      status: isSet(object.status) ? feedLinkStatusEnum_FeedLinkStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: AdGroupFeed): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.feed !== undefined) {
      obj.feed = message.feed;
    }
    if (message.adGroup !== undefined) {
      obj.adGroup = message.adGroup;
    }
    if (message.placeholderTypes?.length) {
      obj.placeholderTypes = message.placeholderTypes.map((e) => placeholderTypeEnum_PlaceholderTypeToJSON(e));
    }
    if (message.matchingFunction !== undefined) {
      obj.matchingFunction = MatchingFunction.toJSON(message.matchingFunction);
    }
    if (message.status !== 0) {
      obj.status = feedLinkStatusEnum_FeedLinkStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<AdGroupFeed>): AdGroupFeed {
    return AdGroupFeed.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AdGroupFeed>): AdGroupFeed {
    const message = createBaseAdGroupFeed();
    message.resourceName = object.resourceName ?? "";
    message.feed = object.feed ?? undefined;
    message.adGroup = object.adGroup ?? undefined;
    message.placeholderTypes = object.placeholderTypes?.map((e) => e) || [];
    message.matchingFunction = (object.matchingFunction !== undefined && object.matchingFunction !== null)
      ? MatchingFunction.fromPartial(object.matchingFunction)
      : undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

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