// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/shared_criterion.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  BrandInfo,
  KeywordInfo,
  MobileAppCategoryInfo,
  MobileApplicationInfo,
  PlacementInfo,
  YouTubeChannelInfo,
  YouTubeVideoInfo,
} from "../common/criteria.js";
import {
  CriterionTypeEnum_CriterionType,
  criterionTypeEnum_CriterionTypeFromJSON,
  criterionTypeEnum_CriterionTypeToJSON,
} from "../enums/criterion_type.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** A criterion belonging to a shared set. */
export interface SharedCriterion {
  /**
   * Immutable. The resource name of the shared criterion.
   * Shared set resource names have the form:
   *
   * `customers/{customer_id}/sharedCriteria/{shared_set_id}~{criterion_id}`
   */
  resourceName: string;
  /** Immutable. The shared set to which the shared criterion belongs. */
  sharedSet?:
    | string
    | undefined;
  /**
   * Output only. The ID of the criterion.
   *
   * This field is ignored for mutates.
   */
  criterionId?:
    | Long
    | undefined;
  /** Output only. The type of the criterion. */
  type: CriterionTypeEnum_CriterionType;
  /** Immutable. Keyword. */
  keyword?:
    | KeywordInfo
    | undefined;
  /** Immutable. YouTube Video. */
  youtubeVideo?:
    | YouTubeVideoInfo
    | undefined;
  /** Immutable. YouTube Channel. */
  youtubeChannel?:
    | YouTubeChannelInfo
    | undefined;
  /** Immutable. Placement. */
  placement?:
    | PlacementInfo
    | undefined;
  /** Immutable. Mobile App Category. */
  mobileAppCategory?:
    | MobileAppCategoryInfo
    | undefined;
  /** Immutable. Mobile application. */
  mobileApplication?:
    | MobileApplicationInfo
    | undefined;
  /** Immutable. Brand. */
  brand?: BrandInfo | undefined;
}

function createBaseSharedCriterion(): SharedCriterion {
  return {
    resourceName: "",
    sharedSet: undefined,
    criterionId: undefined,
    type: 0,
    keyword: undefined,
    youtubeVideo: undefined,
    youtubeChannel: undefined,
    placement: undefined,
    mobileAppCategory: undefined,
    mobileApplication: undefined,
    brand: undefined,
  };
}

export const SharedCriterion: MessageFns<SharedCriterion> = {
  encode(message: SharedCriterion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.sharedSet !== undefined) {
      writer.uint32(82).string(message.sharedSet);
    }
    if (message.criterionId !== undefined) {
      writer.uint32(88).int64(message.criterionId.toString());
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.keyword !== undefined) {
      KeywordInfo.encode(message.keyword, writer.uint32(26).fork()).join();
    }
    if (message.youtubeVideo !== undefined) {
      YouTubeVideoInfo.encode(message.youtubeVideo, writer.uint32(42).fork()).join();
    }
    if (message.youtubeChannel !== undefined) {
      YouTubeChannelInfo.encode(message.youtubeChannel, writer.uint32(50).fork()).join();
    }
    if (message.placement !== undefined) {
      PlacementInfo.encode(message.placement, writer.uint32(58).fork()).join();
    }
    if (message.mobileAppCategory !== undefined) {
      MobileAppCategoryInfo.encode(message.mobileAppCategory, writer.uint32(66).fork()).join();
    }
    if (message.mobileApplication !== undefined) {
      MobileApplicationInfo.encode(message.mobileApplication, writer.uint32(74).fork()).join();
    }
    if (message.brand !== undefined) {
      BrandInfo.encode(message.brand, writer.uint32(98).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SharedCriterion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSharedCriterion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sharedSet = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.criterionId = Long.fromString(reader.int64().toString());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keyword = KeywordInfo.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.youtubeVideo = YouTubeVideoInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.youtubeChannel = YouTubeChannelInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.placement = PlacementInfo.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mobileAppCategory = MobileAppCategoryInfo.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.mobileApplication = MobileApplicationInfo.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.brand = BrandInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SharedCriterion {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      sharedSet: isSet(object.sharedSet) ? globalThis.String(object.sharedSet) : undefined,
      criterionId: isSet(object.criterionId) ? Long.fromValue(object.criterionId) : undefined,
      type: isSet(object.type) ? criterionTypeEnum_CriterionTypeFromJSON(object.type) : 0,
      keyword: isSet(object.keyword) ? KeywordInfo.fromJSON(object.keyword) : undefined,
      youtubeVideo: isSet(object.youtubeVideo) ? YouTubeVideoInfo.fromJSON(object.youtubeVideo) : undefined,
      youtubeChannel: isSet(object.youtubeChannel) ? YouTubeChannelInfo.fromJSON(object.youtubeChannel) : undefined,
      placement: isSet(object.placement) ? PlacementInfo.fromJSON(object.placement) : undefined,
      mobileAppCategory: isSet(object.mobileAppCategory)
        ? MobileAppCategoryInfo.fromJSON(object.mobileAppCategory)
        : undefined,
      mobileApplication: isSet(object.mobileApplication)
        ? MobileApplicationInfo.fromJSON(object.mobileApplication)
        : undefined,
      brand: isSet(object.brand) ? BrandInfo.fromJSON(object.brand) : undefined,
    };
  },

  toJSON(message: SharedCriterion): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.sharedSet !== undefined) {
      obj.sharedSet = message.sharedSet;
    }
    if (message.criterionId !== undefined) {
      obj.criterionId = (message.criterionId || Long.ZERO).toString();
    }
    if (message.type !== 0) {
      obj.type = criterionTypeEnum_CriterionTypeToJSON(message.type);
    }
    if (message.keyword !== undefined) {
      obj.keyword = KeywordInfo.toJSON(message.keyword);
    }
    if (message.youtubeVideo !== undefined) {
      obj.youtubeVideo = YouTubeVideoInfo.toJSON(message.youtubeVideo);
    }
    if (message.youtubeChannel !== undefined) {
      obj.youtubeChannel = YouTubeChannelInfo.toJSON(message.youtubeChannel);
    }
    if (message.placement !== undefined) {
      obj.placement = PlacementInfo.toJSON(message.placement);
    }
    if (message.mobileAppCategory !== undefined) {
      obj.mobileAppCategory = MobileAppCategoryInfo.toJSON(message.mobileAppCategory);
    }
    if (message.mobileApplication !== undefined) {
      obj.mobileApplication = MobileApplicationInfo.toJSON(message.mobileApplication);
    }
    if (message.brand !== undefined) {
      obj.brand = BrandInfo.toJSON(message.brand);
    }
    return obj;
  },

  create(base?: DeepPartial<SharedCriterion>): SharedCriterion {
    return SharedCriterion.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SharedCriterion>): SharedCriterion {
    const message = createBaseSharedCriterion();
    message.resourceName = object.resourceName ?? "";
    message.sharedSet = object.sharedSet ?? undefined;
    message.criterionId = (object.criterionId !== undefined && object.criterionId !== null)
      ? Long.fromValue(object.criterionId)
      : undefined;
    message.type = object.type ?? 0;
    message.keyword = (object.keyword !== undefined && object.keyword !== null)
      ? KeywordInfo.fromPartial(object.keyword)
      : undefined;
    message.youtubeVideo = (object.youtubeVideo !== undefined && object.youtubeVideo !== null)
      ? YouTubeVideoInfo.fromPartial(object.youtubeVideo)
      : undefined;
    message.youtubeChannel = (object.youtubeChannel !== undefined && object.youtubeChannel !== null)
      ? YouTubeChannelInfo.fromPartial(object.youtubeChannel)
      : undefined;
    message.placement = (object.placement !== undefined && object.placement !== null)
      ? PlacementInfo.fromPartial(object.placement)
      : undefined;
    message.mobileAppCategory = (object.mobileAppCategory !== undefined && object.mobileAppCategory !== null)
      ? MobileAppCategoryInfo.fromPartial(object.mobileAppCategory)
      : undefined;
    message.mobileApplication = (object.mobileApplication !== undefined && object.mobileApplication !== null)
      ? MobileApplicationInfo.fromPartial(object.mobileApplication)
      : undefined;
    message.brand = (object.brand !== undefined && object.brand !== null)
      ? BrandInfo.fromPartial(object.brand)
      : undefined;
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