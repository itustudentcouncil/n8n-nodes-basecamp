// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/asset_set_asset.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  AssetSetAssetStatusEnum_AssetSetAssetStatus,
  assetSetAssetStatusEnum_AssetSetAssetStatusFromJSON,
  assetSetAssetStatusEnum_AssetSetAssetStatusToJSON,
} from "../enums/asset_set_asset_status.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/**
 * AssetSetAsset is the link between an asset and an asset set.
 * Adding an AssetSetAsset links an asset with an asset set.
 */
export interface AssetSetAsset {
  /**
   * Immutable. The resource name of the asset set asset.
   * Asset set asset resource names have the form:
   *
   * `customers/{customer_id}/assetSetAssets/{asset_set_id}~{asset_id}`
   */
  resourceName: string;
  /** Immutable. The asset set which this asset set asset is linking to. */
  assetSet: string;
  /** Immutable. The asset which this asset set asset is linking to. */
  asset: string;
  /** Output only. The status of the asset set asset. Read-only. */
  status: AssetSetAssetStatusEnum_AssetSetAssetStatus;
}

function createBaseAssetSetAsset(): AssetSetAsset {
  return { resourceName: "", assetSet: "", asset: "", status: 0 };
}

export const AssetSetAsset: MessageFns<AssetSetAsset> = {
  encode(message: AssetSetAsset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.assetSet !== "") {
      writer.uint32(18).string(message.assetSet);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetSetAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSetAsset();
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

          message.asset = reader.string();
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

  fromJSON(object: any): AssetSetAsset {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      assetSet: isSet(object.assetSet) ? globalThis.String(object.assetSet) : "",
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      status: isSet(object.status) ? assetSetAssetStatusEnum_AssetSetAssetStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: AssetSetAsset): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.assetSet !== "") {
      obj.assetSet = message.assetSet;
    }
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.status !== 0) {
      obj.status = assetSetAssetStatusEnum_AssetSetAssetStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<AssetSetAsset>): AssetSetAsset {
    return AssetSetAsset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AssetSetAsset>): AssetSetAsset {
    const message = createBaseAssetSetAsset();
    message.resourceName = object.resourceName ?? "";
    message.assetSet = object.assetSet ?? "";
    message.asset = object.asset ?? "";
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