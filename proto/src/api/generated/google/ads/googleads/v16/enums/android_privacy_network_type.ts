// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/android_privacy_network_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** The network type enum for Android privacy shared key. */
export interface AndroidPrivacyNetworkTypeEnum {
}

/** Enumerates network types */
export enum AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The value is unknown in this version. */
  UNKNOWN = 1,
  /** SEARCH - Search Network. */
  SEARCH = 2,
  /** DISPLAY - Display Network. */
  DISPLAY = 3,
  /** YOUTUBE - YouTube Network. */
  YOUTUBE = 4,
  UNRECOGNIZED = -1,
}

export function androidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkTypeFromJSON(
  object: any,
): AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.UNKNOWN;
    case 2:
    case "SEARCH":
      return AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.SEARCH;
    case 3:
    case "DISPLAY":
      return AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.DISPLAY;
    case 4:
    case "YOUTUBE":
      return AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.YOUTUBE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.UNRECOGNIZED;
  }
}

export function androidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkTypeToJSON(
  object: AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType,
): string {
  switch (object) {
    case AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.UNSPECIFIED:
      return "UNSPECIFIED";
    case AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.UNKNOWN:
      return "UNKNOWN";
    case AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.SEARCH:
      return "SEARCH";
    case AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.DISPLAY:
      return "DISPLAY";
    case AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.YOUTUBE:
      return "YOUTUBE";
    case AndroidPrivacyNetworkTypeEnum_AndroidPrivacyNetworkType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAndroidPrivacyNetworkTypeEnum(): AndroidPrivacyNetworkTypeEnum {
  return {};
}

export const AndroidPrivacyNetworkTypeEnum: MessageFns<AndroidPrivacyNetworkTypeEnum> = {
  encode(_: AndroidPrivacyNetworkTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AndroidPrivacyNetworkTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndroidPrivacyNetworkTypeEnum();
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

  fromJSON(_: any): AndroidPrivacyNetworkTypeEnum {
    return {};
  },

  toJSON(_: AndroidPrivacyNetworkTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AndroidPrivacyNetworkTypeEnum>): AndroidPrivacyNetworkTypeEnum {
    return AndroidPrivacyNetworkTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AndroidPrivacyNetworkTypeEnum>): AndroidPrivacyNetworkTypeEnum {
    const message = createBaseAndroidPrivacyNetworkTypeEnum();
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