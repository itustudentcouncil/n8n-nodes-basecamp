// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/paid_organic_search_term_view.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.resources";

/**
 * A paid organic search term view providing a view of search stats across
 * ads and organic listings aggregated by search term at the ad group level.
 */
export interface PaidOrganicSearchTermView {
  /**
   * Output only. The resource name of the search term view.
   * Search term view resource names have the form:
   *
   * `customers/{customer_id}/paidOrganicSearchTermViews/{campaign_id}~
   * {ad_group_id}~{URL-base64 search term}`
   */
  resourceName: string;
  /** Output only. The search term. */
  searchTerm?: string | undefined;
}

function createBasePaidOrganicSearchTermView(): PaidOrganicSearchTermView {
  return { resourceName: "", searchTerm: undefined };
}

export const PaidOrganicSearchTermView: MessageFns<PaidOrganicSearchTermView> = {
  encode(message: PaidOrganicSearchTermView, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.searchTerm !== undefined) {
      writer.uint32(26).string(message.searchTerm);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaidOrganicSearchTermView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaidOrganicSearchTermView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.searchTerm = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaidOrganicSearchTermView {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      searchTerm: isSet(object.searchTerm) ? globalThis.String(object.searchTerm) : undefined,
    };
  },

  toJSON(message: PaidOrganicSearchTermView): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.searchTerm !== undefined) {
      obj.searchTerm = message.searchTerm;
    }
    return obj;
  },

  create(base?: DeepPartial<PaidOrganicSearchTermView>): PaidOrganicSearchTermView {
    return PaidOrganicSearchTermView.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PaidOrganicSearchTermView>): PaidOrganicSearchTermView {
    const message = createBasePaidOrganicSearchTermView();
    message.resourceName = object.resourceName ?? "";
    message.searchTerm = object.searchTerm ?? undefined;
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