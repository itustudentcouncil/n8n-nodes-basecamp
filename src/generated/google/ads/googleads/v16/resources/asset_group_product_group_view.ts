// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/asset_group_product_group_view.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** An asset group product group view. */
export interface AssetGroupProductGroupView {
  /**
   * Output only. The resource name of the asset group product group view.
   * Asset group product group view resource names have the form:
   *
   * `customers/{customer_id}/assetGroupProductGroupViews/{asset_group_id}~{listing_group_filter_id}`
   */
  resourceName: string;
  /** Output only. The asset group associated with the listing group filter. */
  assetGroup: string;
  /** Output only. The resource name of the asset group listing group filter. */
  assetGroupListingGroupFilter: string;
}

function createBaseAssetGroupProductGroupView(): AssetGroupProductGroupView {
  return { resourceName: "", assetGroup: "", assetGroupListingGroupFilter: "" };
}

export const AssetGroupProductGroupView: MessageFns<AssetGroupProductGroupView> = {
  encode(message: AssetGroupProductGroupView, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.assetGroup !== "") {
      writer.uint32(18).string(message.assetGroup);
    }
    if (message.assetGroupListingGroupFilter !== "") {
      writer.uint32(34).string(message.assetGroupListingGroupFilter);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetGroupProductGroupView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetGroupProductGroupView();
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

          message.assetGroup = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.assetGroupListingGroupFilter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetGroupProductGroupView {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      assetGroup: isSet(object.assetGroup) ? globalThis.String(object.assetGroup) : "",
      assetGroupListingGroupFilter: isSet(object.assetGroupListingGroupFilter)
        ? globalThis.String(object.assetGroupListingGroupFilter)
        : "",
    };
  },

  toJSON(message: AssetGroupProductGroupView): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.assetGroup !== "") {
      obj.assetGroup = message.assetGroup;
    }
    if (message.assetGroupListingGroupFilter !== "") {
      obj.assetGroupListingGroupFilter = message.assetGroupListingGroupFilter;
    }
    return obj;
  },

  create(base?: DeepPartial<AssetGroupProductGroupView>): AssetGroupProductGroupView {
    return AssetGroupProductGroupView.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AssetGroupProductGroupView>): AssetGroupProductGroupView {
    const message = createBaseAssetGroupProductGroupView();
    message.resourceName = object.resourceName ?? "";
    message.assetGroup = object.assetGroup ?? "";
    message.assetGroupListingGroupFilter = object.assetGroupListingGroupFilter ?? "";
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
