// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/feed_item.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CustomParameter } from "../common/custom_parameter.js";
import { Money } from "../common/feed_common.js";
import { PolicyTopicEntry } from "../common/policy.js";
import {
  FeedItemQualityApprovalStatusEnum_FeedItemQualityApprovalStatus,
  feedItemQualityApprovalStatusEnum_FeedItemQualityApprovalStatusFromJSON,
  feedItemQualityApprovalStatusEnum_FeedItemQualityApprovalStatusToJSON,
} from "../enums/feed_item_quality_approval_status.js";
import {
  FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason,
  feedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReasonFromJSON,
  feedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReasonToJSON,
} from "../enums/feed_item_quality_disapproval_reason.js";
import {
  FeedItemStatusEnum_FeedItemStatus,
  feedItemStatusEnum_FeedItemStatusFromJSON,
  feedItemStatusEnum_FeedItemStatusToJSON,
} from "../enums/feed_item_status.js";
import {
  FeedItemValidationStatusEnum_FeedItemValidationStatus,
  feedItemValidationStatusEnum_FeedItemValidationStatusFromJSON,
  feedItemValidationStatusEnum_FeedItemValidationStatusToJSON,
} from "../enums/feed_item_validation_status.js";
import {
  GeoTargetingRestrictionEnum_GeoTargetingRestriction,
  geoTargetingRestrictionEnum_GeoTargetingRestrictionFromJSON,
  geoTargetingRestrictionEnum_GeoTargetingRestrictionToJSON,
} from "../enums/geo_targeting_restriction.js";
import {
  PlaceholderTypeEnum_PlaceholderType,
  placeholderTypeEnum_PlaceholderTypeFromJSON,
  placeholderTypeEnum_PlaceholderTypeToJSON,
} from "../enums/placeholder_type.js";
import {
  PolicyApprovalStatusEnum_PolicyApprovalStatus,
  policyApprovalStatusEnum_PolicyApprovalStatusFromJSON,
  policyApprovalStatusEnum_PolicyApprovalStatusToJSON,
} from "../enums/policy_approval_status.js";
import {
  PolicyReviewStatusEnum_PolicyReviewStatus,
  policyReviewStatusEnum_PolicyReviewStatusFromJSON,
  policyReviewStatusEnum_PolicyReviewStatusToJSON,
} from "../enums/policy_review_status.js";
import {
  FeedItemValidationErrorEnum_FeedItemValidationError,
  feedItemValidationErrorEnum_FeedItemValidationErrorFromJSON,
  feedItemValidationErrorEnum_FeedItemValidationErrorToJSON,
} from "../errors/feed_item_validation_error.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** A feed item. */
export interface FeedItem {
  /**
   * Immutable. The resource name of the feed item.
   * Feed item resource names have the form:
   *
   * `customers/{customer_id}/feedItems/{feed_id}~{feed_item_id}`
   */
  resourceName: string;
  /** Immutable. The feed to which this feed item belongs. */
  feed?:
    | string
    | undefined;
  /** Output only. The ID of this feed item. */
  id?:
    | Long
    | undefined;
  /**
   * Start time in which this feed item is effective and can begin serving. The
   * time is in the customer's time zone.
   * The format is "YYYY-MM-DD HH:MM:SS".
   * Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
   */
  startDateTime?:
    | string
    | undefined;
  /**
   * End time in which this feed item is no longer effective and will stop
   * serving. The time is in the customer's time zone.
   * The format is "YYYY-MM-DD HH:MM:SS".
   * Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
   */
  endDateTime?:
    | string
    | undefined;
  /** The feed item's attribute values. */
  attributeValues: FeedItemAttributeValue[];
  /**
   * Geo targeting restriction specifies the type of location that can be used
   * for targeting.
   */
  geoTargetingRestriction: GeoTargetingRestrictionEnum_GeoTargetingRestriction;
  /**
   * The list of mappings used to substitute custom parameter tags in a
   * `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
   */
  urlCustomParameters: CustomParameter[];
  /**
   * Output only. Status of the feed item.
   * This field is read-only.
   */
  status: FeedItemStatusEnum_FeedItemStatus;
  /**
   * Output only. List of info about a feed item's validation and approval state
   * for active feed mappings. There will be an entry in the list for each type
   * of feed mapping associated with the feed, for example, a feed with a
   * sitelink and a call feed mapping would cause every feed item associated
   * with that feed to have an entry in this list for both sitelink and call.
   * This field is read-only.
   */
  policyInfos: FeedItemPlaceholderPolicyInfo[];
}

/** A feed item attribute value. */
export interface FeedItemAttributeValue {
  /** Id of the feed attribute for which the value is associated with. */
  feedAttributeId?:
    | Long
    | undefined;
  /**
   * Int64 value. Should be set if feed_attribute_id refers to a feed attribute
   * of type INT64.
   */
  integerValue?:
    | Long
    | undefined;
  /**
   * Bool value. Should be set if feed_attribute_id refers to a feed attribute
   * of type BOOLEAN.
   */
  booleanValue?:
    | boolean
    | undefined;
  /**
   * String value. Should be set if feed_attribute_id refers to a feed attribute
   * of type STRING, URL or DATE_TIME.
   * For STRING the maximum length is 1500 characters. For URL the maximum
   * length is 2076 characters. For DATE_TIME the string must be in the format
   * "YYYYMMDD HHMMSS".
   */
  stringValue?:
    | string
    | undefined;
  /**
   * Double value. Should be set if feed_attribute_id refers to a feed attribute
   * of type DOUBLE.
   */
  doubleValue?:
    | number
    | undefined;
  /**
   * Price value. Should be set if feed_attribute_id refers to a feed attribute
   * of type PRICE.
   */
  priceValue:
    | Money
    | undefined;
  /**
   * Repeated int64 value. Should be set if feed_attribute_id refers to a feed
   * attribute of type INT64_LIST.
   */
  integerValues: Long[];
  /**
   * Repeated bool value. Should be set if feed_attribute_id refers to a feed
   * attribute of type BOOLEAN_LIST.
   */
  booleanValues: boolean[];
  /**
   * Repeated string value. Should be set if feed_attribute_id refers to a feed
   * attribute of type STRING_LIST, URL_LIST or DATE_TIME_LIST.
   * For STRING_LIST and URL_LIST the total size of the list in bytes may not
   * exceed 3000. For DATE_TIME_LIST the number of elements may not exceed 200.
   *
   * For STRING_LIST the maximum length of each string element is 1500
   * characters. For URL_LIST the maximum length is 2076 characters. For
   * DATE_TIME the format of the string must be the same as start and end time
   * for the feed item.
   */
  stringValues: string[];
  /**
   * Repeated double value. Should be set if feed_attribute_id refers to a feed
   * attribute of type DOUBLE_LIST.
   */
  doubleValues: number[];
}

/**
 * Policy, validation, and quality approval info for a feed item for the
 * specified placeholder type.
 */
export interface FeedItemPlaceholderPolicyInfo {
  /** Output only. The placeholder type. */
  placeholderTypeEnum: PlaceholderTypeEnum_PlaceholderType;
  /** Output only. The FeedMapping that contains the placeholder type. */
  feedMappingResourceName?:
    | string
    | undefined;
  /** Output only. Where the placeholder type is in the review process. */
  reviewStatus: PolicyReviewStatusEnum_PolicyReviewStatus;
  /**
   * Output only. The overall approval status of the placeholder type,
   * calculated based on the status of its individual policy topic entries.
   */
  approvalStatus: PolicyApprovalStatusEnum_PolicyApprovalStatus;
  /** Output only. The list of policy findings for the placeholder type. */
  policyTopicEntries: PolicyTopicEntry[];
  /** Output only. The validation status of the placeholder type. */
  validationStatus: FeedItemValidationStatusEnum_FeedItemValidationStatus;
  /** Output only. List of placeholder type validation errors. */
  validationErrors: FeedItemValidationError[];
  /** Output only. Placeholder type quality evaluation approval status. */
  qualityApprovalStatus: FeedItemQualityApprovalStatusEnum_FeedItemQualityApprovalStatus;
  /**
   * Output only. List of placeholder type quality evaluation disapproval
   * reasons.
   */
  qualityDisapprovalReasons: FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason[];
}

/**
 * Stores a validation error and the set of offending feed attributes which
 * together are responsible for causing a feed item validation error.
 */
export interface FeedItemValidationError {
  /**
   * Output only. Error code indicating what validation error was triggered. The
   * description of the error can be found in the 'description' field.
   */
  validationError: FeedItemValidationErrorEnum_FeedItemValidationError;
  /** Output only. The description of the validation error. */
  description?:
    | string
    | undefined;
  /**
   * Output only. Set of feed attributes in the feed item flagged during
   * validation. If empty, no specific feed attributes can be associated with
   * the error (for example, error across the entire feed item).
   */
  feedAttributeIds: Long[];
  /**
   * Output only. Any extra information related to this error which is not
   * captured by validation_error and feed_attribute_id (for example,
   * placeholder field IDs when feed_attribute_id is not mapped). Note that
   * extra_info is not localized.
   */
  extraInfo?: string | undefined;
}

function createBaseFeedItem(): FeedItem {
  return {
    resourceName: "",
    feed: undefined,
    id: undefined,
    startDateTime: undefined,
    endDateTime: undefined,
    attributeValues: [],
    geoTargetingRestriction: 0,
    urlCustomParameters: [],
    status: 0,
    policyInfos: [],
  };
}

export const FeedItem: MessageFns<FeedItem> = {
  encode(message: FeedItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.feed !== undefined) {
      writer.uint32(90).string(message.feed);
    }
    if (message.id !== undefined) {
      writer.uint32(96).int64(message.id.toString());
    }
    if (message.startDateTime !== undefined) {
      writer.uint32(106).string(message.startDateTime);
    }
    if (message.endDateTime !== undefined) {
      writer.uint32(114).string(message.endDateTime);
    }
    for (const v of message.attributeValues) {
      FeedItemAttributeValue.encode(v!, writer.uint32(50).fork()).join();
    }
    if (message.geoTargetingRestriction !== 0) {
      writer.uint32(56).int32(message.geoTargetingRestriction);
    }
    for (const v of message.urlCustomParameters) {
      CustomParameter.encode(v!, writer.uint32(66).fork()).join();
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    for (const v of message.policyInfos) {
      FeedItemPlaceholderPolicyInfo.encode(v!, writer.uint32(82).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItem();
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
          if (tag !== 90) {
            break;
          }

          message.feed = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.startDateTime = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.endDateTime = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attributeValues.push(FeedItemAttributeValue.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.geoTargetingRestriction = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.urlCustomParameters.push(CustomParameter.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.policyInfos.push(FeedItemPlaceholderPolicyInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeedItem {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      feed: isSet(object.feed) ? globalThis.String(object.feed) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      startDateTime: isSet(object.startDateTime) ? globalThis.String(object.startDateTime) : undefined,
      endDateTime: isSet(object.endDateTime) ? globalThis.String(object.endDateTime) : undefined,
      attributeValues: globalThis.Array.isArray(object?.attributeValues)
        ? object.attributeValues.map((e: any) => FeedItemAttributeValue.fromJSON(e))
        : [],
      geoTargetingRestriction: isSet(object.geoTargetingRestriction)
        ? geoTargetingRestrictionEnum_GeoTargetingRestrictionFromJSON(object.geoTargetingRestriction)
        : 0,
      urlCustomParameters: globalThis.Array.isArray(object?.urlCustomParameters)
        ? object.urlCustomParameters.map((e: any) => CustomParameter.fromJSON(e))
        : [],
      status: isSet(object.status) ? feedItemStatusEnum_FeedItemStatusFromJSON(object.status) : 0,
      policyInfos: globalThis.Array.isArray(object?.policyInfos)
        ? object.policyInfos.map((e: any) => FeedItemPlaceholderPolicyInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FeedItem): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.feed !== undefined) {
      obj.feed = message.feed;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.startDateTime !== undefined) {
      obj.startDateTime = message.startDateTime;
    }
    if (message.endDateTime !== undefined) {
      obj.endDateTime = message.endDateTime;
    }
    if (message.attributeValues?.length) {
      obj.attributeValues = message.attributeValues.map((e) => FeedItemAttributeValue.toJSON(e));
    }
    if (message.geoTargetingRestriction !== 0) {
      obj.geoTargetingRestriction = geoTargetingRestrictionEnum_GeoTargetingRestrictionToJSON(
        message.geoTargetingRestriction,
      );
    }
    if (message.urlCustomParameters?.length) {
      obj.urlCustomParameters = message.urlCustomParameters.map((e) => CustomParameter.toJSON(e));
    }
    if (message.status !== 0) {
      obj.status = feedItemStatusEnum_FeedItemStatusToJSON(message.status);
    }
    if (message.policyInfos?.length) {
      obj.policyInfos = message.policyInfos.map((e) => FeedItemPlaceholderPolicyInfo.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<FeedItem>): FeedItem {
    return FeedItem.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeedItem>): FeedItem {
    const message = createBaseFeedItem();
    message.resourceName = object.resourceName ?? "";
    message.feed = object.feed ?? undefined;
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.startDateTime = object.startDateTime ?? undefined;
    message.endDateTime = object.endDateTime ?? undefined;
    message.attributeValues = object.attributeValues?.map((e) => FeedItemAttributeValue.fromPartial(e)) || [];
    message.geoTargetingRestriction = object.geoTargetingRestriction ?? 0;
    message.urlCustomParameters = object.urlCustomParameters?.map((e) => CustomParameter.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.policyInfos = object.policyInfos?.map((e) => FeedItemPlaceholderPolicyInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeedItemAttributeValue(): FeedItemAttributeValue {
  return {
    feedAttributeId: undefined,
    integerValue: undefined,
    booleanValue: undefined,
    stringValue: undefined,
    doubleValue: undefined,
    priceValue: undefined,
    integerValues: [],
    booleanValues: [],
    stringValues: [],
    doubleValues: [],
  };
}

export const FeedItemAttributeValue: MessageFns<FeedItemAttributeValue> = {
  encode(message: FeedItemAttributeValue, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.feedAttributeId !== undefined) {
      writer.uint32(88).int64(message.feedAttributeId.toString());
    }
    if (message.integerValue !== undefined) {
      writer.uint32(96).int64(message.integerValue.toString());
    }
    if (message.booleanValue !== undefined) {
      writer.uint32(104).bool(message.booleanValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(114).string(message.stringValue);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(121).double(message.doubleValue);
    }
    if (message.priceValue !== undefined) {
      Money.encode(message.priceValue, writer.uint32(50).fork()).join();
    }
    writer.uint32(130).fork();
    for (const v of message.integerValues) {
      writer.int64(v.toString());
    }
    writer.join();
    writer.uint32(138).fork();
    for (const v of message.booleanValues) {
      writer.bool(v);
    }
    writer.join();
    for (const v of message.stringValues) {
      writer.uint32(146).string(v!);
    }
    writer.uint32(154).fork();
    for (const v of message.doubleValues) {
      writer.double(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItemAttributeValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItemAttributeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          if (tag !== 88) {
            break;
          }

          message.feedAttributeId = Long.fromString(reader.int64().toString());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.integerValue = Long.fromString(reader.int64().toString());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.booleanValue = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        case 15:
          if (tag !== 121) {
            break;
          }

          message.doubleValue = reader.double();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.priceValue = Money.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag === 128) {
            message.integerValues.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 130) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.integerValues.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        case 17:
          if (tag === 136) {
            message.booleanValues.push(reader.bool());

            continue;
          }

          if (tag === 138) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.booleanValues.push(reader.bool());
            }

            continue;
          }

          break;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.stringValues.push(reader.string());
          continue;
        case 19:
          if (tag === 153) {
            message.doubleValues.push(reader.double());

            continue;
          }

          if (tag === 154) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.doubleValues.push(reader.double());
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

  fromJSON(object: any): FeedItemAttributeValue {
    return {
      feedAttributeId: isSet(object.feedAttributeId) ? Long.fromValue(object.feedAttributeId) : undefined,
      integerValue: isSet(object.integerValue) ? Long.fromValue(object.integerValue) : undefined,
      booleanValue: isSet(object.booleanValue) ? globalThis.Boolean(object.booleanValue) : undefined,
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      doubleValue: isSet(object.doubleValue) ? globalThis.Number(object.doubleValue) : undefined,
      priceValue: isSet(object.priceValue) ? Money.fromJSON(object.priceValue) : undefined,
      integerValues: globalThis.Array.isArray(object?.integerValues)
        ? object.integerValues.map((e: any) => Long.fromValue(e))
        : [],
      booleanValues: globalThis.Array.isArray(object?.booleanValues)
        ? object.booleanValues.map((e: any) => globalThis.Boolean(e))
        : [],
      stringValues: globalThis.Array.isArray(object?.stringValues)
        ? object.stringValues.map((e: any) => globalThis.String(e))
        : [],
      doubleValues: globalThis.Array.isArray(object?.doubleValues)
        ? object.doubleValues.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: FeedItemAttributeValue): unknown {
    const obj: any = {};
    if (message.feedAttributeId !== undefined) {
      obj.feedAttributeId = (message.feedAttributeId || Long.ZERO).toString();
    }
    if (message.integerValue !== undefined) {
      obj.integerValue = (message.integerValue || Long.ZERO).toString();
    }
    if (message.booleanValue !== undefined) {
      obj.booleanValue = message.booleanValue;
    }
    if (message.stringValue !== undefined) {
      obj.stringValue = message.stringValue;
    }
    if (message.doubleValue !== undefined) {
      obj.doubleValue = message.doubleValue;
    }
    if (message.priceValue !== undefined) {
      obj.priceValue = Money.toJSON(message.priceValue);
    }
    if (message.integerValues?.length) {
      obj.integerValues = message.integerValues.map((e) => (e || Long.ZERO).toString());
    }
    if (message.booleanValues?.length) {
      obj.booleanValues = message.booleanValues;
    }
    if (message.stringValues?.length) {
      obj.stringValues = message.stringValues;
    }
    if (message.doubleValues?.length) {
      obj.doubleValues = message.doubleValues;
    }
    return obj;
  },

  create(base?: DeepPartial<FeedItemAttributeValue>): FeedItemAttributeValue {
    return FeedItemAttributeValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeedItemAttributeValue>): FeedItemAttributeValue {
    const message = createBaseFeedItemAttributeValue();
    message.feedAttributeId = (object.feedAttributeId !== undefined && object.feedAttributeId !== null)
      ? Long.fromValue(object.feedAttributeId)
      : undefined;
    message.integerValue = (object.integerValue !== undefined && object.integerValue !== null)
      ? Long.fromValue(object.integerValue)
      : undefined;
    message.booleanValue = object.booleanValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.priceValue = (object.priceValue !== undefined && object.priceValue !== null)
      ? Money.fromPartial(object.priceValue)
      : undefined;
    message.integerValues = object.integerValues?.map((e) => Long.fromValue(e)) || [];
    message.booleanValues = object.booleanValues?.map((e) => e) || [];
    message.stringValues = object.stringValues?.map((e) => e) || [];
    message.doubleValues = object.doubleValues?.map((e) => e) || [];
    return message;
  },
};

function createBaseFeedItemPlaceholderPolicyInfo(): FeedItemPlaceholderPolicyInfo {
  return {
    placeholderTypeEnum: 0,
    feedMappingResourceName: undefined,
    reviewStatus: 0,
    approvalStatus: 0,
    policyTopicEntries: [],
    validationStatus: 0,
    validationErrors: [],
    qualityApprovalStatus: 0,
    qualityDisapprovalReasons: [],
  };
}

export const FeedItemPlaceholderPolicyInfo: MessageFns<FeedItemPlaceholderPolicyInfo> = {
  encode(message: FeedItemPlaceholderPolicyInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.placeholderTypeEnum !== 0) {
      writer.uint32(80).int32(message.placeholderTypeEnum);
    }
    if (message.feedMappingResourceName !== undefined) {
      writer.uint32(90).string(message.feedMappingResourceName);
    }
    if (message.reviewStatus !== 0) {
      writer.uint32(24).int32(message.reviewStatus);
    }
    if (message.approvalStatus !== 0) {
      writer.uint32(32).int32(message.approvalStatus);
    }
    for (const v of message.policyTopicEntries) {
      PolicyTopicEntry.encode(v!, writer.uint32(42).fork()).join();
    }
    if (message.validationStatus !== 0) {
      writer.uint32(48).int32(message.validationStatus);
    }
    for (const v of message.validationErrors) {
      FeedItemValidationError.encode(v!, writer.uint32(58).fork()).join();
    }
    if (message.qualityApprovalStatus !== 0) {
      writer.uint32(64).int32(message.qualityApprovalStatus);
    }
    writer.uint32(74).fork();
    for (const v of message.qualityDisapprovalReasons) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItemPlaceholderPolicyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItemPlaceholderPolicyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 80) {
            break;
          }

          message.placeholderTypeEnum = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.feedMappingResourceName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.reviewStatus = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.approvalStatus = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.policyTopicEntries.push(PolicyTopicEntry.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.validationStatus = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.validationErrors.push(FeedItemValidationError.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.qualityApprovalStatus = reader.int32() as any;
          continue;
        case 9:
          if (tag === 72) {
            message.qualityDisapprovalReasons.push(reader.int32() as any);

            continue;
          }

          if (tag === 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.qualityDisapprovalReasons.push(reader.int32() as any);
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

  fromJSON(object: any): FeedItemPlaceholderPolicyInfo {
    return {
      placeholderTypeEnum: isSet(object.placeholderTypeEnum)
        ? placeholderTypeEnum_PlaceholderTypeFromJSON(object.placeholderTypeEnum)
        : 0,
      feedMappingResourceName: isSet(object.feedMappingResourceName)
        ? globalThis.String(object.feedMappingResourceName)
        : undefined,
      reviewStatus: isSet(object.reviewStatus)
        ? policyReviewStatusEnum_PolicyReviewStatusFromJSON(object.reviewStatus)
        : 0,
      approvalStatus: isSet(object.approvalStatus)
        ? policyApprovalStatusEnum_PolicyApprovalStatusFromJSON(object.approvalStatus)
        : 0,
      policyTopicEntries: globalThis.Array.isArray(object?.policyTopicEntries)
        ? object.policyTopicEntries.map((e: any) => PolicyTopicEntry.fromJSON(e))
        : [],
      validationStatus: isSet(object.validationStatus)
        ? feedItemValidationStatusEnum_FeedItemValidationStatusFromJSON(object.validationStatus)
        : 0,
      validationErrors: globalThis.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => FeedItemValidationError.fromJSON(e))
        : [],
      qualityApprovalStatus: isSet(object.qualityApprovalStatus)
        ? feedItemQualityApprovalStatusEnum_FeedItemQualityApprovalStatusFromJSON(object.qualityApprovalStatus)
        : 0,
      qualityDisapprovalReasons: globalThis.Array.isArray(object?.qualityDisapprovalReasons)
        ? object.qualityDisapprovalReasons.map((e: any) =>
          feedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReasonFromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: FeedItemPlaceholderPolicyInfo): unknown {
    const obj: any = {};
    if (message.placeholderTypeEnum !== 0) {
      obj.placeholderTypeEnum = placeholderTypeEnum_PlaceholderTypeToJSON(message.placeholderTypeEnum);
    }
    if (message.feedMappingResourceName !== undefined) {
      obj.feedMappingResourceName = message.feedMappingResourceName;
    }
    if (message.reviewStatus !== 0) {
      obj.reviewStatus = policyReviewStatusEnum_PolicyReviewStatusToJSON(message.reviewStatus);
    }
    if (message.approvalStatus !== 0) {
      obj.approvalStatus = policyApprovalStatusEnum_PolicyApprovalStatusToJSON(message.approvalStatus);
    }
    if (message.policyTopicEntries?.length) {
      obj.policyTopicEntries = message.policyTopicEntries.map((e) => PolicyTopicEntry.toJSON(e));
    }
    if (message.validationStatus !== 0) {
      obj.validationStatus = feedItemValidationStatusEnum_FeedItemValidationStatusToJSON(message.validationStatus);
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors.map((e) => FeedItemValidationError.toJSON(e));
    }
    if (message.qualityApprovalStatus !== 0) {
      obj.qualityApprovalStatus = feedItemQualityApprovalStatusEnum_FeedItemQualityApprovalStatusToJSON(
        message.qualityApprovalStatus,
      );
    }
    if (message.qualityDisapprovalReasons?.length) {
      obj.qualityDisapprovalReasons = message.qualityDisapprovalReasons.map((e) =>
        feedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReasonToJSON(e)
      );
    }
    return obj;
  },

  create(base?: DeepPartial<FeedItemPlaceholderPolicyInfo>): FeedItemPlaceholderPolicyInfo {
    return FeedItemPlaceholderPolicyInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeedItemPlaceholderPolicyInfo>): FeedItemPlaceholderPolicyInfo {
    const message = createBaseFeedItemPlaceholderPolicyInfo();
    message.placeholderTypeEnum = object.placeholderTypeEnum ?? 0;
    message.feedMappingResourceName = object.feedMappingResourceName ?? undefined;
    message.reviewStatus = object.reviewStatus ?? 0;
    message.approvalStatus = object.approvalStatus ?? 0;
    message.policyTopicEntries = object.policyTopicEntries?.map((e) => PolicyTopicEntry.fromPartial(e)) || [];
    message.validationStatus = object.validationStatus ?? 0;
    message.validationErrors = object.validationErrors?.map((e) => FeedItemValidationError.fromPartial(e)) || [];
    message.qualityApprovalStatus = object.qualityApprovalStatus ?? 0;
    message.qualityDisapprovalReasons = object.qualityDisapprovalReasons?.map((e) => e) || [];
    return message;
  },
};

function createBaseFeedItemValidationError(): FeedItemValidationError {
  return { validationError: 0, description: undefined, feedAttributeIds: [], extraInfo: undefined };
}

export const FeedItemValidationError: MessageFns<FeedItemValidationError> = {
  encode(message: FeedItemValidationError, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.validationError !== 0) {
      writer.uint32(8).int32(message.validationError);
    }
    if (message.description !== undefined) {
      writer.uint32(50).string(message.description);
    }
    writer.uint32(58).fork();
    for (const v of message.feedAttributeIds) {
      writer.int64(v.toString());
    }
    writer.join();
    if (message.extraInfo !== undefined) {
      writer.uint32(66).string(message.extraInfo);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItemValidationError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItemValidationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validationError = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag === 56) {
            message.feedAttributeIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.feedAttributeIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.extraInfo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeedItemValidationError {
    return {
      validationError: isSet(object.validationError)
        ? feedItemValidationErrorEnum_FeedItemValidationErrorFromJSON(object.validationError)
        : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      feedAttributeIds: globalThis.Array.isArray(object?.feedAttributeIds)
        ? object.feedAttributeIds.map((e: any) => Long.fromValue(e))
        : [],
      extraInfo: isSet(object.extraInfo) ? globalThis.String(object.extraInfo) : undefined,
    };
  },

  toJSON(message: FeedItemValidationError): unknown {
    const obj: any = {};
    if (message.validationError !== 0) {
      obj.validationError = feedItemValidationErrorEnum_FeedItemValidationErrorToJSON(message.validationError);
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.feedAttributeIds?.length) {
      obj.feedAttributeIds = message.feedAttributeIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.extraInfo !== undefined) {
      obj.extraInfo = message.extraInfo;
    }
    return obj;
  },

  create(base?: DeepPartial<FeedItemValidationError>): FeedItemValidationError {
    return FeedItemValidationError.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeedItemValidationError>): FeedItemValidationError {
    const message = createBaseFeedItemValidationError();
    message.validationError = object.validationError ?? 0;
    message.description = object.description ?? undefined;
    message.feedAttributeIds = object.feedAttributeIds?.map((e) => Long.fromValue(e)) || [];
    message.extraInfo = object.extraInfo ?? undefined;
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
