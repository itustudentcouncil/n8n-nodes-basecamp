// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/dynamic_search_ads_search_term_view.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** A dynamic search ads search term view. */
export interface DynamicSearchAdsSearchTermView {
  /**
   * Output only. The resource name of the dynamic search ads search term view.
   * Dynamic search ads search term view resource names have the form:
   *
   * `customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fingerprint}~{headline_fingerprint}~{landing_page_fingerprint}~{page_url_fingerprint}`
   */
  resourceName: string;
  /**
   * Output only. Search term
   *
   * This field is read-only.
   */
  searchTerm?:
    | string
    | undefined;
  /**
   * Output only. The dynamically generated headline of the Dynamic Search Ad.
   *
   * This field is read-only.
   */
  headline?:
    | string
    | undefined;
  /**
   * Output only. The dynamically selected landing page URL of the impression.
   *
   * This field is read-only.
   */
  landingPage?:
    | string
    | undefined;
  /**
   * Output only. The URL of page feed item served for the impression.
   *
   * This field is read-only.
   */
  pageUrl?:
    | string
    | undefined;
  /**
   * Output only. True if query matches a negative keyword.
   *
   * This field is read-only.
   */
  hasNegativeKeyword?:
    | boolean
    | undefined;
  /**
   * Output only. True if query is added to targeted keywords.
   *
   * This field is read-only.
   */
  hasMatchingKeyword?:
    | boolean
    | undefined;
  /**
   * Output only. True if query matches a negative url.
   *
   * This field is read-only.
   */
  hasNegativeUrl?: boolean | undefined;
}

function createBaseDynamicSearchAdsSearchTermView(): DynamicSearchAdsSearchTermView {
  return {
    resourceName: "",
    searchTerm: undefined,
    headline: undefined,
    landingPage: undefined,
    pageUrl: undefined,
    hasNegativeKeyword: undefined,
    hasMatchingKeyword: undefined,
    hasNegativeUrl: undefined,
  };
}

export const DynamicSearchAdsSearchTermView: MessageFns<DynamicSearchAdsSearchTermView> = {
  encode(message: DynamicSearchAdsSearchTermView, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.searchTerm !== undefined) {
      writer.uint32(74).string(message.searchTerm);
    }
    if (message.headline !== undefined) {
      writer.uint32(82).string(message.headline);
    }
    if (message.landingPage !== undefined) {
      writer.uint32(90).string(message.landingPage);
    }
    if (message.pageUrl !== undefined) {
      writer.uint32(98).string(message.pageUrl);
    }
    if (message.hasNegativeKeyword !== undefined) {
      writer.uint32(104).bool(message.hasNegativeKeyword);
    }
    if (message.hasMatchingKeyword !== undefined) {
      writer.uint32(112).bool(message.hasMatchingKeyword);
    }
    if (message.hasNegativeUrl !== undefined) {
      writer.uint32(120).bool(message.hasNegativeUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DynamicSearchAdsSearchTermView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicSearchAdsSearchTermView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.searchTerm = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.headline = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.landingPage = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.pageUrl = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.hasNegativeKeyword = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.hasMatchingKeyword = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.hasNegativeUrl = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DynamicSearchAdsSearchTermView {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      searchTerm: isSet(object.searchTerm) ? globalThis.String(object.searchTerm) : undefined,
      headline: isSet(object.headline) ? globalThis.String(object.headline) : undefined,
      landingPage: isSet(object.landingPage) ? globalThis.String(object.landingPage) : undefined,
      pageUrl: isSet(object.pageUrl) ? globalThis.String(object.pageUrl) : undefined,
      hasNegativeKeyword: isSet(object.hasNegativeKeyword) ? globalThis.Boolean(object.hasNegativeKeyword) : undefined,
      hasMatchingKeyword: isSet(object.hasMatchingKeyword) ? globalThis.Boolean(object.hasMatchingKeyword) : undefined,
      hasNegativeUrl: isSet(object.hasNegativeUrl) ? globalThis.Boolean(object.hasNegativeUrl) : undefined,
    };
  },

  toJSON(message: DynamicSearchAdsSearchTermView): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.searchTerm !== undefined) {
      obj.searchTerm = message.searchTerm;
    }
    if (message.headline !== undefined) {
      obj.headline = message.headline;
    }
    if (message.landingPage !== undefined) {
      obj.landingPage = message.landingPage;
    }
    if (message.pageUrl !== undefined) {
      obj.pageUrl = message.pageUrl;
    }
    if (message.hasNegativeKeyword !== undefined) {
      obj.hasNegativeKeyword = message.hasNegativeKeyword;
    }
    if (message.hasMatchingKeyword !== undefined) {
      obj.hasMatchingKeyword = message.hasMatchingKeyword;
    }
    if (message.hasNegativeUrl !== undefined) {
      obj.hasNegativeUrl = message.hasNegativeUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<DynamicSearchAdsSearchTermView>): DynamicSearchAdsSearchTermView {
    return DynamicSearchAdsSearchTermView.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DynamicSearchAdsSearchTermView>): DynamicSearchAdsSearchTermView {
    const message = createBaseDynamicSearchAdsSearchTermView();
    message.resourceName = object.resourceName ?? "";
    message.searchTerm = object.searchTerm ?? undefined;
    message.headline = object.headline ?? undefined;
    message.landingPage = object.landingPage ?? undefined;
    message.pageUrl = object.pageUrl ?? undefined;
    message.hasNegativeKeyword = object.hasNegativeKeyword ?? undefined;
    message.hasMatchingKeyword = object.hasMatchingKeyword ?? undefined;
    message.hasNegativeUrl = object.hasNegativeUrl ?? undefined;
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