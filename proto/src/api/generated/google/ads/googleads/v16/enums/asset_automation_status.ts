// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/asset_automation_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing the status of asset automation. */
export interface AssetAutomationStatusEnum {
}

/** The status of asset automation. */
export enum AssetAutomationStatusEnum_AssetAutomationStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used as a return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /**
   * OPTED_IN - Opted-in will enable generating and serving an asset
   * automation type.
   */
  OPTED_IN = 2,
  /**
   * OPTED_OUT - Opted-out will stop generating and serving an asset
   * automation type.
   */
  OPTED_OUT = 3,
  UNRECOGNIZED = -1,
}

export function assetAutomationStatusEnum_AssetAutomationStatusFromJSON(
  object: any,
): AssetAutomationStatusEnum_AssetAutomationStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AssetAutomationStatusEnum_AssetAutomationStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AssetAutomationStatusEnum_AssetAutomationStatus.UNKNOWN;
    case 2:
    case "OPTED_IN":
      return AssetAutomationStatusEnum_AssetAutomationStatus.OPTED_IN;
    case 3:
    case "OPTED_OUT":
      return AssetAutomationStatusEnum_AssetAutomationStatus.OPTED_OUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetAutomationStatusEnum_AssetAutomationStatus.UNRECOGNIZED;
  }
}

export function assetAutomationStatusEnum_AssetAutomationStatusToJSON(
  object: AssetAutomationStatusEnum_AssetAutomationStatus,
): string {
  switch (object) {
    case AssetAutomationStatusEnum_AssetAutomationStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case AssetAutomationStatusEnum_AssetAutomationStatus.UNKNOWN:
      return "UNKNOWN";
    case AssetAutomationStatusEnum_AssetAutomationStatus.OPTED_IN:
      return "OPTED_IN";
    case AssetAutomationStatusEnum_AssetAutomationStatus.OPTED_OUT:
      return "OPTED_OUT";
    case AssetAutomationStatusEnum_AssetAutomationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAssetAutomationStatusEnum(): AssetAutomationStatusEnum {
  return {};
}

export const AssetAutomationStatusEnum: MessageFns<AssetAutomationStatusEnum> = {
  encode(_: AssetAutomationStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetAutomationStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetAutomationStatusEnum();
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

  fromJSON(_: any): AssetAutomationStatusEnum {
    return {};
  },

  toJSON(_: AssetAutomationStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AssetAutomationStatusEnum>): AssetAutomationStatusEnum {
    return AssetAutomationStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AssetAutomationStatusEnum>): AssetAutomationStatusEnum {
    const message = createBaseAssetAutomationStatusEnum();
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