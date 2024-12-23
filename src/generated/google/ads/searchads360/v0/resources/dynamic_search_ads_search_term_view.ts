// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/resources/dynamic_search_ads_search_term_view.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.resources";

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
   * Output only. The dynamically selected landing page URL of the impression.
   *
   * This field is read-only.
   */
  landingPage?: string | undefined;
}

function createBaseDynamicSearchAdsSearchTermView(): DynamicSearchAdsSearchTermView {
  return { resourceName: "", landingPage: undefined };
}

export const DynamicSearchAdsSearchTermView: MessageFns<DynamicSearchAdsSearchTermView> = {
  encode(message: DynamicSearchAdsSearchTermView, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.landingPage !== undefined) {
      writer.uint32(90).string(message.landingPage);
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
        case 11:
          if (tag !== 90) {
            break;
          }

          message.landingPage = reader.string();
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
      landingPage: isSet(object.landingPage) ? globalThis.String(object.landingPage) : undefined,
    };
  },

  toJSON(message: DynamicSearchAdsSearchTermView): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.landingPage !== undefined) {
      obj.landingPage = message.landingPage;
    }
    return obj;
  },

  create(base?: DeepPartial<DynamicSearchAdsSearchTermView>): DynamicSearchAdsSearchTermView {
    return DynamicSearchAdsSearchTermView.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DynamicSearchAdsSearchTermView>): DynamicSearchAdsSearchTermView {
    const message = createBaseDynamicSearchAdsSearchTermView();
    message.resourceName = object.resourceName ?? "";
    message.landingPage = object.landingPage ?? undefined;
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
