// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/common/feed_item_set_filter_type_infos.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  FeedItemSetStringFilterTypeEnum_FeedItemSetStringFilterType,
  feedItemSetStringFilterTypeEnum_FeedItemSetStringFilterTypeFromJSON,
  feedItemSetStringFilterTypeEnum_FeedItemSetStringFilterTypeToJSON,
} from "../enums/feed_item_set_string_filter_type.js";

export const protobufPackage = "google.ads.googleads.v16.common";

/**
 * Represents a filter on locations in a feed item set.
 * Only applicable if the parent Feed of the FeedItemSet is a LOCATION feed.
 */
export interface DynamicLocationSetFilter {
  /**
   * If multiple labels are set, then only feeditems marked with all the labels
   * will be added to the FeedItemSet.
   */
  labels: string[];
  /** Business name filter. */
  businessNameFilter: BusinessNameFilter | undefined;
}

/** Represents a business name filter on locations in a FeedItemSet. */
export interface BusinessNameFilter {
  /** Business name string to use for filtering. */
  businessName: string;
  /** The type of string matching to use when filtering with business_name. */
  filterType: FeedItemSetStringFilterTypeEnum_FeedItemSetStringFilterType;
}

/**
 * Represents a filter on affiliate locations in a FeedItemSet.
 * Only applicable if the parent Feed of the FeedItemSet is an
 * AFFILIATE_LOCATION feed.
 */
export interface DynamicAffiliateLocationSetFilter {
  /**
   * Used to filter affiliate locations by chain ids. Only affiliate locations
   * that belong to the specified chain(s) will be added to the FeedItemSet.
   */
  chainIds: Long[];
}

function createBaseDynamicLocationSetFilter(): DynamicLocationSetFilter {
  return { labels: [], businessNameFilter: undefined };
}

export const DynamicLocationSetFilter: MessageFns<DynamicLocationSetFilter> = {
  encode(message: DynamicLocationSetFilter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.labels) {
      writer.uint32(10).string(v!);
    }
    if (message.businessNameFilter !== undefined) {
      BusinessNameFilter.encode(message.businessNameFilter, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DynamicLocationSetFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicLocationSetFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.labels.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.businessNameFilter = BusinessNameFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DynamicLocationSetFilter {
    return {
      labels: globalThis.Array.isArray(object?.labels) ? object.labels.map((e: any) => globalThis.String(e)) : [],
      businessNameFilter: isSet(object.businessNameFilter)
        ? BusinessNameFilter.fromJSON(object.businessNameFilter)
        : undefined,
    };
  },

  toJSON(message: DynamicLocationSetFilter): unknown {
    const obj: any = {};
    if (message.labels?.length) {
      obj.labels = message.labels;
    }
    if (message.businessNameFilter !== undefined) {
      obj.businessNameFilter = BusinessNameFilter.toJSON(message.businessNameFilter);
    }
    return obj;
  },

  create(base?: DeepPartial<DynamicLocationSetFilter>): DynamicLocationSetFilter {
    return DynamicLocationSetFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DynamicLocationSetFilter>): DynamicLocationSetFilter {
    const message = createBaseDynamicLocationSetFilter();
    message.labels = object.labels?.map((e) => e) || [];
    message.businessNameFilter = (object.businessNameFilter !== undefined && object.businessNameFilter !== null)
      ? BusinessNameFilter.fromPartial(object.businessNameFilter)
      : undefined;
    return message;
  },
};

function createBaseBusinessNameFilter(): BusinessNameFilter {
  return { businessName: "", filterType: 0 };
}

export const BusinessNameFilter: MessageFns<BusinessNameFilter> = {
  encode(message: BusinessNameFilter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.businessName !== "") {
      writer.uint32(10).string(message.businessName);
    }
    if (message.filterType !== 0) {
      writer.uint32(16).int32(message.filterType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BusinessNameFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessNameFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.businessName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.filterType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BusinessNameFilter {
    return {
      businessName: isSet(object.businessName) ? globalThis.String(object.businessName) : "",
      filterType: isSet(object.filterType)
        ? feedItemSetStringFilterTypeEnum_FeedItemSetStringFilterTypeFromJSON(object.filterType)
        : 0,
    };
  },

  toJSON(message: BusinessNameFilter): unknown {
    const obj: any = {};
    if (message.businessName !== "") {
      obj.businessName = message.businessName;
    }
    if (message.filterType !== 0) {
      obj.filterType = feedItemSetStringFilterTypeEnum_FeedItemSetStringFilterTypeToJSON(message.filterType);
    }
    return obj;
  },

  create(base?: DeepPartial<BusinessNameFilter>): BusinessNameFilter {
    return BusinessNameFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BusinessNameFilter>): BusinessNameFilter {
    const message = createBaseBusinessNameFilter();
    message.businessName = object.businessName ?? "";
    message.filterType = object.filterType ?? 0;
    return message;
  },
};

function createBaseDynamicAffiliateLocationSetFilter(): DynamicAffiliateLocationSetFilter {
  return { chainIds: [] };
}

export const DynamicAffiliateLocationSetFilter: MessageFns<DynamicAffiliateLocationSetFilter> = {
  encode(message: DynamicAffiliateLocationSetFilter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.chainIds) {
      writer.int64(v.toString());
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DynamicAffiliateLocationSetFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicAffiliateLocationSetFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.chainIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.chainIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DynamicAffiliateLocationSetFilter {
    return {
      chainIds: globalThis.Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => Long.fromValue(e)) : [],
    };
  },

  toJSON(message: DynamicAffiliateLocationSetFilter): unknown {
    const obj: any = {};
    if (message.chainIds?.length) {
      obj.chainIds = message.chainIds.map((e) => (e || Long.ZERO).toString());
    }
    return obj;
  },

  create(base?: DeepPartial<DynamicAffiliateLocationSetFilter>): DynamicAffiliateLocationSetFilter {
    return DynamicAffiliateLocationSetFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DynamicAffiliateLocationSetFilter>): DynamicAffiliateLocationSetFilter {
    const message = createBaseDynamicAffiliateLocationSetFilter();
    message.chainIds = object.chainIds?.map((e) => Long.fromValue(e)) || [];
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