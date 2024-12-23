// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/keyword_plan_ad_group_keyword.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  KeywordMatchTypeEnum_KeywordMatchType,
  keywordMatchTypeEnum_KeywordMatchTypeFromJSON,
  keywordMatchTypeEnum_KeywordMatchTypeToJSON,
} from "../enums/keyword_match_type.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/**
 * A Keyword Plan ad group keyword.
 * Max number of keyword plan keywords per plan: 10000.
 */
export interface KeywordPlanAdGroupKeyword {
  /**
   * Immutable. The resource name of the Keyword Plan ad group keyword.
   * KeywordPlanAdGroupKeyword resource names have the form:
   *
   * `customers/{customer_id}/keywordPlanAdGroupKeywords/{kp_ad_group_keyword_id}`
   */
  resourceName: string;
  /** The Keyword Plan ad group to which this keyword belongs. */
  keywordPlanAdGroup?:
    | string
    | undefined;
  /** Output only. The ID of the Keyword Plan keyword. */
  id?:
    | Long
    | undefined;
  /** The keyword text. */
  text?:
    | string
    | undefined;
  /** The keyword match type. */
  matchType: KeywordMatchTypeEnum_KeywordMatchType;
  /**
   * A keyword level max cpc bid in micros (for example, $1 = 1mm). The currency
   * is the same as the account currency code. This will override any CPC bid
   * set at the keyword plan ad group level. Not applicable for negative
   * keywords. (negative = true) This field is Optional.
   */
  cpcBidMicros?:
    | Long
    | undefined;
  /** Immutable. If true, the keyword is negative. */
  negative?: boolean | undefined;
}

function createBaseKeywordPlanAdGroupKeyword(): KeywordPlanAdGroupKeyword {
  return {
    resourceName: "",
    keywordPlanAdGroup: undefined,
    id: undefined,
    text: undefined,
    matchType: 0,
    cpcBidMicros: undefined,
    negative: undefined,
  };
}

export const KeywordPlanAdGroupKeyword: MessageFns<KeywordPlanAdGroupKeyword> = {
  encode(message: KeywordPlanAdGroupKeyword, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.keywordPlanAdGroup !== undefined) {
      writer.uint32(66).string(message.keywordPlanAdGroup);
    }
    if (message.id !== undefined) {
      writer.uint32(72).int64(message.id.toString());
    }
    if (message.text !== undefined) {
      writer.uint32(82).string(message.text);
    }
    if (message.matchType !== 0) {
      writer.uint32(40).int32(message.matchType);
    }
    if (message.cpcBidMicros !== undefined) {
      writer.uint32(88).int64(message.cpcBidMicros.toString());
    }
    if (message.negative !== undefined) {
      writer.uint32(96).bool(message.negative);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): KeywordPlanAdGroupKeyword {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeywordPlanAdGroupKeyword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.keywordPlanAdGroup = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.matchType = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.cpcBidMicros = Long.fromString(reader.int64().toString());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.negative = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeywordPlanAdGroupKeyword {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      keywordPlanAdGroup: isSet(object.keywordPlanAdGroup) ? globalThis.String(object.keywordPlanAdGroup) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      text: isSet(object.text) ? globalThis.String(object.text) : undefined,
      matchType: isSet(object.matchType) ? keywordMatchTypeEnum_KeywordMatchTypeFromJSON(object.matchType) : 0,
      cpcBidMicros: isSet(object.cpcBidMicros) ? Long.fromValue(object.cpcBidMicros) : undefined,
      negative: isSet(object.negative) ? globalThis.Boolean(object.negative) : undefined,
    };
  },

  toJSON(message: KeywordPlanAdGroupKeyword): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.keywordPlanAdGroup !== undefined) {
      obj.keywordPlanAdGroup = message.keywordPlanAdGroup;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.text !== undefined) {
      obj.text = message.text;
    }
    if (message.matchType !== 0) {
      obj.matchType = keywordMatchTypeEnum_KeywordMatchTypeToJSON(message.matchType);
    }
    if (message.cpcBidMicros !== undefined) {
      obj.cpcBidMicros = (message.cpcBidMicros || Long.ZERO).toString();
    }
    if (message.negative !== undefined) {
      obj.negative = message.negative;
    }
    return obj;
  },

  create(base?: DeepPartial<KeywordPlanAdGroupKeyword>): KeywordPlanAdGroupKeyword {
    return KeywordPlanAdGroupKeyword.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KeywordPlanAdGroupKeyword>): KeywordPlanAdGroupKeyword {
    const message = createBaseKeywordPlanAdGroupKeyword();
    message.resourceName = object.resourceName ?? "";
    message.keywordPlanAdGroup = object.keywordPlanAdGroup ?? undefined;
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.text = object.text ?? undefined;
    message.matchType = object.matchType ?? 0;
    message.cpcBidMicros = (object.cpcBidMicros !== undefined && object.cpcBidMicros !== null)
      ? Long.fromValue(object.cpcBidMicros)
      : undefined;
    message.negative = object.negative ?? undefined;
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
