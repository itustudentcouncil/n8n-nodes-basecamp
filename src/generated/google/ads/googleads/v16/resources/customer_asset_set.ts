// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/customer_asset_set.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  AssetSetLinkStatusEnum_AssetSetLinkStatus,
  assetSetLinkStatusEnum_AssetSetLinkStatusFromJSON,
  assetSetLinkStatusEnum_AssetSetLinkStatusToJSON,
} from "../enums/asset_set_link_status.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/**
 * CustomerAssetSet is the linkage between a customer and an asset set.
 * Adding a CustomerAssetSet links an asset set with a customer.
 */
export interface CustomerAssetSet {
  /**
   * Immutable. The resource name of the customer asset set.
   * Asset set asset resource names have the form:
   *
   * `customers/{customer_id}/customerAssetSets/{asset_set_id}`
   */
  resourceName: string;
  /** Immutable. The asset set which is linked to the customer. */
  assetSet: string;
  /** Immutable. The customer to which this asset set is linked. */
  customer: string;
  /** Output only. The status of the customer asset set asset. Read-only. */
  status: AssetSetLinkStatusEnum_AssetSetLinkStatus;
}

function createBaseCustomerAssetSet(): CustomerAssetSet {
  return { resourceName: "", assetSet: "", customer: "", status: 0 };
}

export const CustomerAssetSet: MessageFns<CustomerAssetSet> = {
  encode(message: CustomerAssetSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.assetSet !== "") {
      writer.uint32(18).string(message.assetSet);
    }
    if (message.customer !== "") {
      writer.uint32(26).string(message.customer);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomerAssetSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerAssetSet();
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

          message.assetSet = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.customer = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): CustomerAssetSet {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      assetSet: isSet(object.assetSet) ? globalThis.String(object.assetSet) : "",
      customer: isSet(object.customer) ? globalThis.String(object.customer) : "",
      status: isSet(object.status) ? assetSetLinkStatusEnum_AssetSetLinkStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: CustomerAssetSet): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.assetSet !== "") {
      obj.assetSet = message.assetSet;
    }
    if (message.customer !== "") {
      obj.customer = message.customer;
    }
    if (message.status !== 0) {
      obj.status = assetSetLinkStatusEnum_AssetSetLinkStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<CustomerAssetSet>): CustomerAssetSet {
    return CustomerAssetSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomerAssetSet>): CustomerAssetSet {
    const message = createBaseCustomerAssetSet();
    message.resourceName = object.resourceName ?? "";
    message.assetSet = object.assetSet ?? "";
    message.customer = object.customer ?? "";
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