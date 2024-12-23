// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/customer_search_term_insight.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.resources";

/**
 * A Customer search term view.
 * Historical data is available starting March 2023.
 */
export interface CustomerSearchTermInsight {
  /**
   * Output only. The resource name of the customer level search term insight.
   * Customer level search term insight resource names have the form:
   *
   * `customers/{customer_id}/customerSearchTermInsights/{category_id}`
   */
  resourceName: string;
  /**
   * Output only. The label for the search category. An empty string denotes the
   * catch-all category for search terms that didn't fit into another category.
   */
  categoryLabel?:
    | string
    | undefined;
  /** Output only. The ID of the insight. */
  id?: Long | undefined;
}

function createBaseCustomerSearchTermInsight(): CustomerSearchTermInsight {
  return { resourceName: "", categoryLabel: undefined, id: undefined };
}

export const CustomerSearchTermInsight: MessageFns<CustomerSearchTermInsight> = {
  encode(message: CustomerSearchTermInsight, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.categoryLabel !== undefined) {
      writer.uint32(18).string(message.categoryLabel);
    }
    if (message.id !== undefined) {
      writer.uint32(24).int64(message.id.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomerSearchTermInsight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerSearchTermInsight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.categoryLabel = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerSearchTermInsight {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      categoryLabel: isSet(object.categoryLabel) ? globalThis.String(object.categoryLabel) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
    };
  },

  toJSON(message: CustomerSearchTermInsight): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.categoryLabel !== undefined) {
      obj.categoryLabel = message.categoryLabel;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<CustomerSearchTermInsight>): CustomerSearchTermInsight {
    return CustomerSearchTermInsight.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomerSearchTermInsight>): CustomerSearchTermInsight {
    const message = createBaseCustomerSearchTermInsight();
    message.resourceName = object.resourceName ?? "";
    message.categoryLabel = object.categoryLabel ?? undefined;
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
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
