// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/feed.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  AffiliateLocationFeedRelationshipTypeEnum_AffiliateLocationFeedRelationshipType,
  affiliateLocationFeedRelationshipTypeEnum_AffiliateLocationFeedRelationshipTypeFromJSON,
  affiliateLocationFeedRelationshipTypeEnum_AffiliateLocationFeedRelationshipTypeToJSON,
} from "../enums/affiliate_location_feed_relationship_type.js";
import {
  FeedAttributeTypeEnum_FeedAttributeType,
  feedAttributeTypeEnum_FeedAttributeTypeFromJSON,
  feedAttributeTypeEnum_FeedAttributeTypeToJSON,
} from "../enums/feed_attribute_type.js";
import {
  FeedOriginEnum_FeedOrigin,
  feedOriginEnum_FeedOriginFromJSON,
  feedOriginEnum_FeedOriginToJSON,
} from "../enums/feed_origin.js";
import {
  FeedStatusEnum_FeedStatus,
  feedStatusEnum_FeedStatusFromJSON,
  feedStatusEnum_FeedStatusToJSON,
} from "../enums/feed_status.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** A feed. */
export interface Feed {
  /**
   * Immutable. The resource name of the feed.
   * Feed resource names have the form:
   *
   * `customers/{customer_id}/feeds/{feed_id}`
   */
  resourceName: string;
  /**
   * Output only. The ID of the feed.
   * This field is read-only.
   */
  id?:
    | Long
    | undefined;
  /** Immutable. Name of the feed. Required. */
  name?:
    | string
    | undefined;
  /**
   * The Feed's attributes. Required on CREATE, unless
   * system_feed_generation_data is provided, in which case Google Ads will
   * update the feed with the correct attributes.
   * Disallowed on UPDATE. Use attribute_operations to add new attributes.
   */
  attributes: FeedAttribute[];
  /**
   * The list of operations changing the feed attributes. Attributes can only
   * be added, not removed.
   */
  attributeOperations: FeedAttributeOperation[];
  /** Immutable. Specifies who manages the FeedAttributes for the Feed. */
  origin: FeedOriginEnum_FeedOrigin;
  /**
   * Output only. Status of the feed.
   * This field is read-only.
   */
  status: FeedStatusEnum_FeedStatus;
  /** Data used to configure a location feed populated from Business Profile. */
  placesLocationFeedData?:
    | Feed_PlacesLocationFeedData
    | undefined;
  /**
   * Data used to configure an affiliate location feed populated with
   * the specified chains.
   */
  affiliateLocationFeedData?: Feed_AffiliateLocationFeedData | undefined;
}

/** Data used to configure a location feed populated from Business Profile. */
export interface Feed_PlacesLocationFeedData {
  /**
   * Immutable. Required authentication token (from OAuth API) for the email.
   * This field can only be specified in a create request. All its subfields
   * are not selectable.
   */
  oauthInfo:
    | Feed_PlacesLocationFeedData_OAuthInfo
    | undefined;
  /**
   * Email address of a Business Profile or email address of a
   * manager of the Business Profile. Required.
   */
  emailAddress?:
    | string
    | undefined;
  /**
   * Plus page ID of the managed business whose locations should be used. If
   * this field is not set, then all businesses accessible by the user
   * (specified by email_address) are used.
   * This field is mutate-only and is not selectable.
   */
  businessAccountId: string;
  /**
   * Used to filter Business Profile listings by business name. If
   * business_name_filter is set, only listings with a matching business name
   * are candidates to be sync'd into FeedItems.
   */
  businessNameFilter?:
    | string
    | undefined;
  /**
   * Used to filter Business Profile listings by categories. If entries
   * exist in category_filters, only listings that belong to any of the
   * categories are candidates to be sync'd into FeedItems. If no entries
   * exist in category_filters, then all listings are candidates for syncing.
   */
  categoryFilters: string[];
  /**
   * Used to filter Business Profile listings by labels. If entries exist in
   * label_filters, only listings that has any of the labels set are
   * candidates to be synchronized into FeedItems. If no entries exist in
   * label_filters, then all listings are candidates for syncing.
   */
  labelFilters: string[];
}

/** Data used for authorization using OAuth. */
export interface Feed_PlacesLocationFeedData_OAuthInfo {
  /** The HTTP method used to obtain authorization. */
  httpMethod?:
    | string
    | undefined;
  /** The HTTP request URL used to obtain authorization. */
  httpRequestUrl?:
    | string
    | undefined;
  /** The HTTP authorization header used to obtain authorization. */
  httpAuthorizationHeader?: string | undefined;
}

/**
 * Data used to configure an affiliate location feed populated with the
 * specified chains.
 */
export interface Feed_AffiliateLocationFeedData {
  /**
   * The list of chains that the affiliate location feed will sync the
   * locations from.
   */
  chainIds: Long[];
  /** The relationship the chains have with the advertiser. */
  relationshipType: AffiliateLocationFeedRelationshipTypeEnum_AffiliateLocationFeedRelationshipType;
}

/**
 * FeedAttributes define the types of data expected to be present in a Feed. A
 * single FeedAttribute specifies the expected type of the FeedItemAttributes
 * with the same FeedAttributeId. Optionally, a FeedAttribute can be marked as
 * being part of a FeedItem's unique key.
 */
export interface FeedAttribute {
  /** ID of the attribute. */
  id?:
    | Long
    | undefined;
  /** The name of the attribute. Required. */
  name?:
    | string
    | undefined;
  /** Data type for feed attribute. Required. */
  type: FeedAttributeTypeEnum_FeedAttributeType;
  /**
   * Indicates that data corresponding to this attribute is part of a
   * FeedItem's unique key. It defaults to false if it is unspecified. Note
   * that a unique key is not required in a Feed's schema, in which case the
   * FeedItems must be referenced by their feed_item_id.
   */
  isPartOfKey?: boolean | undefined;
}

/** Operation to be performed on a feed attribute list in a mutate. */
export interface FeedAttributeOperation {
  /** Output only. Type of list operation to perform. */
  operator: FeedAttributeOperation_Operator;
  /** Output only. The feed attribute being added to the list. */
  value: FeedAttribute | undefined;
}

/** The operator. */
export enum FeedAttributeOperation_Operator {
  /** UNSPECIFIED - Unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ADD - Add the attribute to the existing attributes. */
  ADD = 2,
  UNRECOGNIZED = -1,
}

export function feedAttributeOperation_OperatorFromJSON(object: any): FeedAttributeOperation_Operator {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return FeedAttributeOperation_Operator.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return FeedAttributeOperation_Operator.UNKNOWN;
    case 2:
    case "ADD":
      return FeedAttributeOperation_Operator.ADD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeedAttributeOperation_Operator.UNRECOGNIZED;
  }
}

export function feedAttributeOperation_OperatorToJSON(object: FeedAttributeOperation_Operator): string {
  switch (object) {
    case FeedAttributeOperation_Operator.UNSPECIFIED:
      return "UNSPECIFIED";
    case FeedAttributeOperation_Operator.UNKNOWN:
      return "UNKNOWN";
    case FeedAttributeOperation_Operator.ADD:
      return "ADD";
    case FeedAttributeOperation_Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFeed(): Feed {
  return {
    resourceName: "",
    id: undefined,
    name: undefined,
    attributes: [],
    attributeOperations: [],
    origin: 0,
    status: 0,
    placesLocationFeedData: undefined,
    affiliateLocationFeedData: undefined,
  };
}

export const Feed: MessageFns<Feed> = {
  encode(message: Feed, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(88).int64(message.id.toString());
    }
    if (message.name !== undefined) {
      writer.uint32(98).string(message.name);
    }
    for (const v of message.attributes) {
      FeedAttribute.encode(v!, writer.uint32(34).fork()).join();
    }
    for (const v of message.attributeOperations) {
      FeedAttributeOperation.encode(v!, writer.uint32(74).fork()).join();
    }
    if (message.origin !== 0) {
      writer.uint32(40).int32(message.origin);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.placesLocationFeedData !== undefined) {
      Feed_PlacesLocationFeedData.encode(message.placesLocationFeedData, writer.uint32(50).fork()).join();
    }
    if (message.affiliateLocationFeedData !== undefined) {
      Feed_AffiliateLocationFeedData.encode(message.affiliateLocationFeedData, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Feed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.attributes.push(FeedAttribute.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attributeOperations.push(FeedAttributeOperation.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.origin = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.placesLocationFeedData = Feed_PlacesLocationFeedData.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.affiliateLocationFeedData = Feed_AffiliateLocationFeedData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Feed {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => FeedAttribute.fromJSON(e))
        : [],
      attributeOperations: globalThis.Array.isArray(object?.attributeOperations)
        ? object.attributeOperations.map((e: any) => FeedAttributeOperation.fromJSON(e))
        : [],
      origin: isSet(object.origin) ? feedOriginEnum_FeedOriginFromJSON(object.origin) : 0,
      status: isSet(object.status) ? feedStatusEnum_FeedStatusFromJSON(object.status) : 0,
      placesLocationFeedData: isSet(object.placesLocationFeedData)
        ? Feed_PlacesLocationFeedData.fromJSON(object.placesLocationFeedData)
        : undefined,
      affiliateLocationFeedData: isSet(object.affiliateLocationFeedData)
        ? Feed_AffiliateLocationFeedData.fromJSON(object.affiliateLocationFeedData)
        : undefined,
    };
  },

  toJSON(message: Feed): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => FeedAttribute.toJSON(e));
    }
    if (message.attributeOperations?.length) {
      obj.attributeOperations = message.attributeOperations.map((e) => FeedAttributeOperation.toJSON(e));
    }
    if (message.origin !== 0) {
      obj.origin = feedOriginEnum_FeedOriginToJSON(message.origin);
    }
    if (message.status !== 0) {
      obj.status = feedStatusEnum_FeedStatusToJSON(message.status);
    }
    if (message.placesLocationFeedData !== undefined) {
      obj.placesLocationFeedData = Feed_PlacesLocationFeedData.toJSON(message.placesLocationFeedData);
    }
    if (message.affiliateLocationFeedData !== undefined) {
      obj.affiliateLocationFeedData = Feed_AffiliateLocationFeedData.toJSON(message.affiliateLocationFeedData);
    }
    return obj;
  },

  create(base?: DeepPartial<Feed>): Feed {
    return Feed.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Feed>): Feed {
    const message = createBaseFeed();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.name = object.name ?? undefined;
    message.attributes = object.attributes?.map((e) => FeedAttribute.fromPartial(e)) || [];
    message.attributeOperations = object.attributeOperations?.map((e) => FeedAttributeOperation.fromPartial(e)) || [];
    message.origin = object.origin ?? 0;
    message.status = object.status ?? 0;
    message.placesLocationFeedData =
      (object.placesLocationFeedData !== undefined && object.placesLocationFeedData !== null)
        ? Feed_PlacesLocationFeedData.fromPartial(object.placesLocationFeedData)
        : undefined;
    message.affiliateLocationFeedData =
      (object.affiliateLocationFeedData !== undefined && object.affiliateLocationFeedData !== null)
        ? Feed_AffiliateLocationFeedData.fromPartial(object.affiliateLocationFeedData)
        : undefined;
    return message;
  },
};

function createBaseFeed_PlacesLocationFeedData(): Feed_PlacesLocationFeedData {
  return {
    oauthInfo: undefined,
    emailAddress: undefined,
    businessAccountId: "",
    businessNameFilter: undefined,
    categoryFilters: [],
    labelFilters: [],
  };
}

export const Feed_PlacesLocationFeedData: MessageFns<Feed_PlacesLocationFeedData> = {
  encode(message: Feed_PlacesLocationFeedData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.oauthInfo !== undefined) {
      Feed_PlacesLocationFeedData_OAuthInfo.encode(message.oauthInfo, writer.uint32(10).fork()).join();
    }
    if (message.emailAddress !== undefined) {
      writer.uint32(58).string(message.emailAddress);
    }
    if (message.businessAccountId !== "") {
      writer.uint32(66).string(message.businessAccountId);
    }
    if (message.businessNameFilter !== undefined) {
      writer.uint32(74).string(message.businessNameFilter);
    }
    for (const v of message.categoryFilters) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.labelFilters) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Feed_PlacesLocationFeedData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed_PlacesLocationFeedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oauthInfo = Feed_PlacesLocationFeedData_OAuthInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.businessAccountId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.businessNameFilter = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.categoryFilters.push(reader.string());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.labelFilters.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Feed_PlacesLocationFeedData {
    return {
      oauthInfo: isSet(object.oauthInfo) ? Feed_PlacesLocationFeedData_OAuthInfo.fromJSON(object.oauthInfo) : undefined,
      emailAddress: isSet(object.emailAddress) ? globalThis.String(object.emailAddress) : undefined,
      businessAccountId: isSet(object.businessAccountId) ? globalThis.String(object.businessAccountId) : "",
      businessNameFilter: isSet(object.businessNameFilter) ? globalThis.String(object.businessNameFilter) : undefined,
      categoryFilters: globalThis.Array.isArray(object?.categoryFilters)
        ? object.categoryFilters.map((e: any) => globalThis.String(e))
        : [],
      labelFilters: globalThis.Array.isArray(object?.labelFilters)
        ? object.labelFilters.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Feed_PlacesLocationFeedData): unknown {
    const obj: any = {};
    if (message.oauthInfo !== undefined) {
      obj.oauthInfo = Feed_PlacesLocationFeedData_OAuthInfo.toJSON(message.oauthInfo);
    }
    if (message.emailAddress !== undefined) {
      obj.emailAddress = message.emailAddress;
    }
    if (message.businessAccountId !== "") {
      obj.businessAccountId = message.businessAccountId;
    }
    if (message.businessNameFilter !== undefined) {
      obj.businessNameFilter = message.businessNameFilter;
    }
    if (message.categoryFilters?.length) {
      obj.categoryFilters = message.categoryFilters;
    }
    if (message.labelFilters?.length) {
      obj.labelFilters = message.labelFilters;
    }
    return obj;
  },

  create(base?: DeepPartial<Feed_PlacesLocationFeedData>): Feed_PlacesLocationFeedData {
    return Feed_PlacesLocationFeedData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Feed_PlacesLocationFeedData>): Feed_PlacesLocationFeedData {
    const message = createBaseFeed_PlacesLocationFeedData();
    message.oauthInfo = (object.oauthInfo !== undefined && object.oauthInfo !== null)
      ? Feed_PlacesLocationFeedData_OAuthInfo.fromPartial(object.oauthInfo)
      : undefined;
    message.emailAddress = object.emailAddress ?? undefined;
    message.businessAccountId = object.businessAccountId ?? "";
    message.businessNameFilter = object.businessNameFilter ?? undefined;
    message.categoryFilters = object.categoryFilters?.map((e) => e) || [];
    message.labelFilters = object.labelFilters?.map((e) => e) || [];
    return message;
  },
};

function createBaseFeed_PlacesLocationFeedData_OAuthInfo(): Feed_PlacesLocationFeedData_OAuthInfo {
  return { httpMethod: undefined, httpRequestUrl: undefined, httpAuthorizationHeader: undefined };
}

export const Feed_PlacesLocationFeedData_OAuthInfo: MessageFns<Feed_PlacesLocationFeedData_OAuthInfo> = {
  encode(message: Feed_PlacesLocationFeedData_OAuthInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.httpMethod !== undefined) {
      writer.uint32(34).string(message.httpMethod);
    }
    if (message.httpRequestUrl !== undefined) {
      writer.uint32(42).string(message.httpRequestUrl);
    }
    if (message.httpAuthorizationHeader !== undefined) {
      writer.uint32(50).string(message.httpAuthorizationHeader);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Feed_PlacesLocationFeedData_OAuthInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed_PlacesLocationFeedData_OAuthInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.httpMethod = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.httpRequestUrl = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.httpAuthorizationHeader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Feed_PlacesLocationFeedData_OAuthInfo {
    return {
      httpMethod: isSet(object.httpMethod) ? globalThis.String(object.httpMethod) : undefined,
      httpRequestUrl: isSet(object.httpRequestUrl) ? globalThis.String(object.httpRequestUrl) : undefined,
      httpAuthorizationHeader: isSet(object.httpAuthorizationHeader)
        ? globalThis.String(object.httpAuthorizationHeader)
        : undefined,
    };
  },

  toJSON(message: Feed_PlacesLocationFeedData_OAuthInfo): unknown {
    const obj: any = {};
    if (message.httpMethod !== undefined) {
      obj.httpMethod = message.httpMethod;
    }
    if (message.httpRequestUrl !== undefined) {
      obj.httpRequestUrl = message.httpRequestUrl;
    }
    if (message.httpAuthorizationHeader !== undefined) {
      obj.httpAuthorizationHeader = message.httpAuthorizationHeader;
    }
    return obj;
  },

  create(base?: DeepPartial<Feed_PlacesLocationFeedData_OAuthInfo>): Feed_PlacesLocationFeedData_OAuthInfo {
    return Feed_PlacesLocationFeedData_OAuthInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Feed_PlacesLocationFeedData_OAuthInfo>): Feed_PlacesLocationFeedData_OAuthInfo {
    const message = createBaseFeed_PlacesLocationFeedData_OAuthInfo();
    message.httpMethod = object.httpMethod ?? undefined;
    message.httpRequestUrl = object.httpRequestUrl ?? undefined;
    message.httpAuthorizationHeader = object.httpAuthorizationHeader ?? undefined;
    return message;
  },
};

function createBaseFeed_AffiliateLocationFeedData(): Feed_AffiliateLocationFeedData {
  return { chainIds: [], relationshipType: 0 };
}

export const Feed_AffiliateLocationFeedData: MessageFns<Feed_AffiliateLocationFeedData> = {
  encode(message: Feed_AffiliateLocationFeedData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(26).fork();
    for (const v of message.chainIds) {
      writer.int64(v.toString());
    }
    writer.join();
    if (message.relationshipType !== 0) {
      writer.uint32(16).int32(message.relationshipType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Feed_AffiliateLocationFeedData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed_AffiliateLocationFeedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag === 24) {
            message.chainIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.chainIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.relationshipType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Feed_AffiliateLocationFeedData {
    return {
      chainIds: globalThis.Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => Long.fromValue(e)) : [],
      relationshipType: isSet(object.relationshipType)
        ? affiliateLocationFeedRelationshipTypeEnum_AffiliateLocationFeedRelationshipTypeFromJSON(
          object.relationshipType,
        )
        : 0,
    };
  },

  toJSON(message: Feed_AffiliateLocationFeedData): unknown {
    const obj: any = {};
    if (message.chainIds?.length) {
      obj.chainIds = message.chainIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.relationshipType !== 0) {
      obj.relationshipType = affiliateLocationFeedRelationshipTypeEnum_AffiliateLocationFeedRelationshipTypeToJSON(
        message.relationshipType,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<Feed_AffiliateLocationFeedData>): Feed_AffiliateLocationFeedData {
    return Feed_AffiliateLocationFeedData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Feed_AffiliateLocationFeedData>): Feed_AffiliateLocationFeedData {
    const message = createBaseFeed_AffiliateLocationFeedData();
    message.chainIds = object.chainIds?.map((e) => Long.fromValue(e)) || [];
    message.relationshipType = object.relationshipType ?? 0;
    return message;
  },
};

function createBaseFeedAttribute(): FeedAttribute {
  return { id: undefined, name: undefined, type: 0, isPartOfKey: undefined };
}

export const FeedAttribute: MessageFns<FeedAttribute> = {
  encode(message: FeedAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(40).int64(message.id.toString());
    }
    if (message.name !== undefined) {
      writer.uint32(50).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.isPartOfKey !== undefined) {
      writer.uint32(56).bool(message.isPartOfKey);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 40) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isPartOfKey = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeedAttribute {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      type: isSet(object.type) ? feedAttributeTypeEnum_FeedAttributeTypeFromJSON(object.type) : 0,
      isPartOfKey: isSet(object.isPartOfKey) ? globalThis.Boolean(object.isPartOfKey) : undefined,
    };
  },

  toJSON(message: FeedAttribute): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = feedAttributeTypeEnum_FeedAttributeTypeToJSON(message.type);
    }
    if (message.isPartOfKey !== undefined) {
      obj.isPartOfKey = message.isPartOfKey;
    }
    return obj;
  },

  create(base?: DeepPartial<FeedAttribute>): FeedAttribute {
    return FeedAttribute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeedAttribute>): FeedAttribute {
    const message = createBaseFeedAttribute();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.name = object.name ?? undefined;
    message.type = object.type ?? 0;
    message.isPartOfKey = object.isPartOfKey ?? undefined;
    return message;
  },
};

function createBaseFeedAttributeOperation(): FeedAttributeOperation {
  return { operator: 0, value: undefined };
}

export const FeedAttributeOperation: MessageFns<FeedAttributeOperation> = {
  encode(message: FeedAttributeOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operator !== 0) {
      writer.uint32(8).int32(message.operator);
    }
    if (message.value !== undefined) {
      FeedAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedAttributeOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedAttributeOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operator = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = FeedAttribute.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeedAttributeOperation {
    return {
      operator: isSet(object.operator) ? feedAttributeOperation_OperatorFromJSON(object.operator) : 0,
      value: isSet(object.value) ? FeedAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FeedAttributeOperation): unknown {
    const obj: any = {};
    if (message.operator !== 0) {
      obj.operator = feedAttributeOperation_OperatorToJSON(message.operator);
    }
    if (message.value !== undefined) {
      obj.value = FeedAttribute.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<FeedAttributeOperation>): FeedAttributeOperation {
    return FeedAttributeOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeedAttributeOperation>): FeedAttributeOperation {
    const message = createBaseFeedAttributeOperation();
    message.operator = object.operator ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FeedAttribute.fromPartial(object.value)
      : undefined;
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
