// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/resources/asset_set.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.resources";

/**
 * An asset set representing a collection of assets.
 * Use AssetSetAsset to link an asset to the asset set.
 */
export interface AssetSet {
  /** Output only. The ID of the asset set. */
  id: Long;
  /**
   * Immutable. The resource name of the asset set.
   * Asset set resource names have the form:
   *
   * `customers/{customer_id}/assetSets/{asset_set_id}`
   */
  resourceName: string;
}

function createBaseAssetSet(): AssetSet {
  return { id: Long.ZERO, resourceName: "" };
}

export const AssetSet: MessageFns<AssetSet> = {
  encode(message: AssetSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.id.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.id.toString());
    }
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 48) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetSet {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
    };
  },

  toJSON(message: AssetSet): unknown {
    const obj: any = {};
    if (!message.id.equals(Long.ZERO)) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<AssetSet>): AssetSet {
    return AssetSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AssetSet>): AssetSet {
    const message = createBaseAssetSet();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.resourceName = object.resourceName ?? "";
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