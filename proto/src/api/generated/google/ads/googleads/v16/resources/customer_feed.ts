// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/customer_feed.proto

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

export const protobufPackage = "google.ads.googleads.v16.resources";

/** A customer feed. */
export interface CustomerFeed {
  /**
   * Immutable. The resource name of the customer feed.
   * Customer feed resource names have the form:
   *
   * `customers/{customer_id}/customerFeeds/{feed_id}`
   */
  resourceName: string;
  /** Immutable. The feed being linked to the customer. */
  feed?:
    | string
    | undefined;
  /**
   * Indicates which placeholder types the feed may populate under the connected
   * customer. Required.
   */
  placeholderTypes: PlaceholderTypeEnum_PlaceholderType[];
  /**
   * Matching function associated with the CustomerFeed.
   * The matching function is used to filter the set of feed items selected.
   * Required.
   */
  matchingFunction:
    | MatchingFunction
    | undefined;
  /**
   * Output only. Status of the customer feed.
   * This field is read-only.
   */
  status: FeedLinkStatusEnum_FeedLinkStatus;
}

function createBaseCustomerFeed(): CustomerFeed {
  return { resourceName: "", feed: undefined, placeholderTypes: [], matchingFunction: undefined, status: 0 };
}

export const CustomerFeed: MessageFns<CustomerFeed> = {
  encode(message: CustomerFeed, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.feed !== undefined) {
      writer.uint32(50).string(message.feed);
    }
    writer.uint32(26).fork();
    for (const v of message.placeholderTypes) {
      writer.int32(v);
    }
    writer.join();
    if (message.matchingFunction !== undefined) {
      MatchingFunction.encode(message.matchingFunction, writer.uint32(34).fork()).join();
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomerFeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.feed = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.placeholderTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.placeholderTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.matchingFunction = MatchingFunction.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): CustomerFeed {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      feed: isSet(object.feed) ? globalThis.String(object.feed) : undefined,
      placeholderTypes: globalThis.Array.isArray(object?.placeholderTypes)
        ? object.placeholderTypes.map((e: any) => placeholderTypeEnum_PlaceholderTypeFromJSON(e))
        : [],
      matchingFunction: isSet(object.matchingFunction) ? MatchingFunction.fromJSON(object.matchingFunction) : undefined,
      status: isSet(object.status) ? feedLinkStatusEnum_FeedLinkStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: CustomerFeed): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.feed !== undefined) {
      obj.feed = message.feed;
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

  create(base?: DeepPartial<CustomerFeed>): CustomerFeed {
    return CustomerFeed.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomerFeed>): CustomerFeed {
    const message = createBaseCustomerFeed();
    message.resourceName = object.resourceName ?? "";
    message.feed = object.feed ?? undefined;
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