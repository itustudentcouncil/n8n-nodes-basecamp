// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/feed_item_quality_disapproval_reason.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing possible quality evaluation disapproval reasons
 * of a feed item.
 */
export interface FeedItemQualityDisapprovalReasonEnum {
}

/** The possible quality evaluation disapproval reasons of a feed item. */
export enum FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason {
  /** UNSPECIFIED - No value has been specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** PRICE_TABLE_REPETITIVE_HEADERS - Price contains repetitive headers. */
  PRICE_TABLE_REPETITIVE_HEADERS = 2,
  /** PRICE_TABLE_REPETITIVE_DESCRIPTION - Price contains repetitive description. */
  PRICE_TABLE_REPETITIVE_DESCRIPTION = 3,
  /** PRICE_TABLE_INCONSISTENT_ROWS - Price contains inconsistent items. */
  PRICE_TABLE_INCONSISTENT_ROWS = 4,
  /** PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS - Price contains qualifiers in description. */
  PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS = 5,
  /** PRICE_UNSUPPORTED_LANGUAGE - Price contains an unsupported language. */
  PRICE_UNSUPPORTED_LANGUAGE = 6,
  /** PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH - Price item header is not relevant to the price type. */
  PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH = 7,
  /** PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT - Price item header has promotional text. */
  PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT = 8,
  /** PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT - Price item description is not relevant to the item header. */
  PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT = 9,
  /** PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT - Price item description contains promotional text. */
  PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT = 10,
  /** PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE - Price item header and description are repetitive. */
  PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE = 11,
  /** PRICE_TABLE_ROW_UNRATEABLE - Price item is in a foreign language, nonsense, or can't be rated. */
  PRICE_TABLE_ROW_UNRATEABLE = 12,
  /** PRICE_TABLE_ROW_PRICE_INVALID - Price item price is invalid or inaccurate. */
  PRICE_TABLE_ROW_PRICE_INVALID = 13,
  /** PRICE_TABLE_ROW_URL_INVALID - Price item URL is invalid or irrelevant. */
  PRICE_TABLE_ROW_URL_INVALID = 14,
  /** PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE - Price item header or description has price. */
  PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE = 15,
  /** STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED - Structured snippet values do not match the header. */
  STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED = 16,
  /** STRUCTURED_SNIPPETS_REPEATED_VALUES - Structured snippet values are repeated. */
  STRUCTURED_SNIPPETS_REPEATED_VALUES = 17,
  /** STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES - Structured snippet values violate editorial guidelines like punctuation. */
  STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES = 18,
  /** STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT - Structured snippet contain promotional text. */
  STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT = 19,
  UNRECOGNIZED = -1,
}

export function feedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReasonFromJSON(
  object: any,
): FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.UNKNOWN;
    case 2:
    case "PRICE_TABLE_REPETITIVE_HEADERS":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_REPETITIVE_HEADERS;
    case 3:
    case "PRICE_TABLE_REPETITIVE_DESCRIPTION":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_REPETITIVE_DESCRIPTION;
    case 4:
    case "PRICE_TABLE_INCONSISTENT_ROWS":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_INCONSISTENT_ROWS;
    case 5:
    case "PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS;
    case 6:
    case "PRICE_UNSUPPORTED_LANGUAGE":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_UNSUPPORTED_LANGUAGE;
    case 7:
    case "PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH;
    case 8:
    case "PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT;
    case 9:
    case "PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT;
    case 10:
    case "PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT;
    case 11:
    case "PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE;
    case 12:
    case "PRICE_TABLE_ROW_UNRATEABLE":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_ROW_UNRATEABLE;
    case 13:
    case "PRICE_TABLE_ROW_PRICE_INVALID":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_ROW_PRICE_INVALID;
    case 14:
    case "PRICE_TABLE_ROW_URL_INVALID":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_ROW_URL_INVALID;
    case 15:
    case "PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE;
    case 16:
    case "STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED;
    case 17:
    case "STRUCTURED_SNIPPETS_REPEATED_VALUES":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.STRUCTURED_SNIPPETS_REPEATED_VALUES;
    case 18:
    case "STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES;
    case 19:
    case "STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT":
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
        .STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.UNRECOGNIZED;
  }
}

export function feedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReasonToJSON(
  object: FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason,
): string {
  switch (object) {
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.UNKNOWN:
      return "UNKNOWN";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_REPETITIVE_HEADERS:
      return "PRICE_TABLE_REPETITIVE_HEADERS";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_REPETITIVE_DESCRIPTION:
      return "PRICE_TABLE_REPETITIVE_DESCRIPTION";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_INCONSISTENT_ROWS:
      return "PRICE_TABLE_INCONSISTENT_ROWS";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS:
      return "PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_UNSUPPORTED_LANGUAGE:
      return "PRICE_UNSUPPORTED_LANGUAGE";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
      .PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH:
      return "PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
      .PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT:
      return "PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT:
      return "PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
      .PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT:
      return "PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
      .PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE:
      return "PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_ROW_UNRATEABLE:
      return "PRICE_TABLE_ROW_UNRATEABLE";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_ROW_PRICE_INVALID:
      return "PRICE_TABLE_ROW_PRICE_INVALID";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_TABLE_ROW_URL_INVALID:
      return "PRICE_TABLE_ROW_URL_INVALID";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE:
      return "PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason
      .STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED:
      return "STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.STRUCTURED_SNIPPETS_REPEATED_VALUES:
      return "STRUCTURED_SNIPPETS_REPEATED_VALUES";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES:
      return "STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT:
      return "STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT";
    case FeedItemQualityDisapprovalReasonEnum_FeedItemQualityDisapprovalReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFeedItemQualityDisapprovalReasonEnum(): FeedItemQualityDisapprovalReasonEnum {
  return {};
}

export const FeedItemQualityDisapprovalReasonEnum: MessageFns<FeedItemQualityDisapprovalReasonEnum> = {
  encode(_: FeedItemQualityDisapprovalReasonEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItemQualityDisapprovalReasonEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItemQualityDisapprovalReasonEnum();
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

  fromJSON(_: any): FeedItemQualityDisapprovalReasonEnum {
    return {};
  },

  toJSON(_: FeedItemQualityDisapprovalReasonEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FeedItemQualityDisapprovalReasonEnum>): FeedItemQualityDisapprovalReasonEnum {
    return FeedItemQualityDisapprovalReasonEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FeedItemQualityDisapprovalReasonEnum>): FeedItemQualityDisapprovalReasonEnum {
    const message = createBaseFeedItemQualityDisapprovalReasonEnum();
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