// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/placement_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing possible placement types. */
export interface PlacementTypeEnum {
}

/** Possible placement types for a feed mapping. */
export enum PlacementTypeEnum_PlacementType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** WEBSITE - Websites(for example, 'www.flowers4sale.com'). */
  WEBSITE = 2,
  /** MOBILE_APP_CATEGORY - Mobile application categories(for example, 'Games'). */
  MOBILE_APP_CATEGORY = 3,
  /** MOBILE_APPLICATION - mobile applications(for example, 'mobileapp::2-com.whatsthewordanswers'). */
  MOBILE_APPLICATION = 4,
  /** YOUTUBE_VIDEO - YouTube videos(for example, 'youtube.com/video/wtLJPvx7-ys'). */
  YOUTUBE_VIDEO = 5,
  /** YOUTUBE_CHANNEL - YouTube channels(for example, 'youtube.com::L8ZULXASCc1I_oaOT0NaOQ'). */
  YOUTUBE_CHANNEL = 6,
  /** GOOGLE_PRODUCTS - Surfaces owned and operated by Google(for example, 'tv.google.com'). */
  GOOGLE_PRODUCTS = 7,
  UNRECOGNIZED = -1,
}

export function placementTypeEnum_PlacementTypeFromJSON(object: any): PlacementTypeEnum_PlacementType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PlacementTypeEnum_PlacementType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PlacementTypeEnum_PlacementType.UNKNOWN;
    case 2:
    case "WEBSITE":
      return PlacementTypeEnum_PlacementType.WEBSITE;
    case 3:
    case "MOBILE_APP_CATEGORY":
      return PlacementTypeEnum_PlacementType.MOBILE_APP_CATEGORY;
    case 4:
    case "MOBILE_APPLICATION":
      return PlacementTypeEnum_PlacementType.MOBILE_APPLICATION;
    case 5:
    case "YOUTUBE_VIDEO":
      return PlacementTypeEnum_PlacementType.YOUTUBE_VIDEO;
    case 6:
    case "YOUTUBE_CHANNEL":
      return PlacementTypeEnum_PlacementType.YOUTUBE_CHANNEL;
    case 7:
    case "GOOGLE_PRODUCTS":
      return PlacementTypeEnum_PlacementType.GOOGLE_PRODUCTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PlacementTypeEnum_PlacementType.UNRECOGNIZED;
  }
}

export function placementTypeEnum_PlacementTypeToJSON(object: PlacementTypeEnum_PlacementType): string {
  switch (object) {
    case PlacementTypeEnum_PlacementType.UNSPECIFIED:
      return "UNSPECIFIED";
    case PlacementTypeEnum_PlacementType.UNKNOWN:
      return "UNKNOWN";
    case PlacementTypeEnum_PlacementType.WEBSITE:
      return "WEBSITE";
    case PlacementTypeEnum_PlacementType.MOBILE_APP_CATEGORY:
      return "MOBILE_APP_CATEGORY";
    case PlacementTypeEnum_PlacementType.MOBILE_APPLICATION:
      return "MOBILE_APPLICATION";
    case PlacementTypeEnum_PlacementType.YOUTUBE_VIDEO:
      return "YOUTUBE_VIDEO";
    case PlacementTypeEnum_PlacementType.YOUTUBE_CHANNEL:
      return "YOUTUBE_CHANNEL";
    case PlacementTypeEnum_PlacementType.GOOGLE_PRODUCTS:
      return "GOOGLE_PRODUCTS";
    case PlacementTypeEnum_PlacementType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePlacementTypeEnum(): PlacementTypeEnum {
  return {};
}

export const PlacementTypeEnum: MessageFns<PlacementTypeEnum> = {
  encode(_: PlacementTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlacementTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementTypeEnum();
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

  fromJSON(_: any): PlacementTypeEnum {
    return {};
  },

  toJSON(_: PlacementTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PlacementTypeEnum>): PlacementTypeEnum {
    return PlacementTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PlacementTypeEnum>): PlacementTypeEnum {
    const message = createBasePlacementTypeEnum();
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
