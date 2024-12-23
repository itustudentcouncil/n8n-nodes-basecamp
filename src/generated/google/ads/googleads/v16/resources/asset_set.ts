// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/asset_set.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BusinessProfileLocationGroup, ChainLocationGroup, LocationSet } from "../common/asset_set_types.js";
import {
  AssetSetStatusEnum_AssetSetStatus,
  assetSetStatusEnum_AssetSetStatusFromJSON,
  assetSetStatusEnum_AssetSetStatusToJSON,
} from "../enums/asset_set_status.js";
import {
  AssetSetTypeEnum_AssetSetType,
  assetSetTypeEnum_AssetSetTypeFromJSON,
  assetSetTypeEnum_AssetSetTypeToJSON,
} from "../enums/asset_set_type.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

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
  /**
   * Required. Name of the asset set. Required. It must have a minimum length of
   * 1 and maximum length of 128.
   */
  name: string;
  /** Required. Immutable. The type of the asset set. Required. */
  type: AssetSetTypeEnum_AssetSetType;
  /** Output only. The status of the asset set. Read-only. */
  status: AssetSetStatusEnum_AssetSetStatus;
  /** Merchant ID and Feed Label from Google Merchant Center. */
  merchantCenterFeed:
    | AssetSet_MerchantCenterFeed
    | undefined;
  /**
   * Immutable. Parent asset set id for the asset set where the elements of this
   * asset set come from. For example: the sync level location AssetSet id where
   * the the elements in LocationGroup AssetSet come from. This field is
   * required and only applicable for Location Group typed AssetSet.
   */
  locationGroupParentAssetSetId: Long;
  /**
   * Output only. For Performance Max for travel goals campaigns with a Hotel
   * Center account link. Read-only.
   */
  hotelPropertyData:
    | AssetSet_HotelPropertyData
    | undefined;
  /**
   * Location asset set data. This will be used for sync level location
   * set. This can only be set if AssetSet's type is LOCATION_SYNC.
   */
  locationSet?:
    | LocationSet
    | undefined;
  /** Business Profile location group asset set data. */
  businessProfileLocationGroup?:
    | BusinessProfileLocationGroup
    | undefined;
  /**
   * Represents information about a Chain dynamic location group.
   * Only applicable if the sync level AssetSet's type is LOCATION_SYNC and
   * sync source is chain.
   */
  chainLocationGroup?: ChainLocationGroup | undefined;
}

/** Merchant ID and Feed Label from Google Merchant Center. */
export interface AssetSet_MerchantCenterFeed {
  /** Required. Merchant ID from Google Merchant Center */
  merchantId: Long;
  /** Optional. Feed Label from Google Merchant Center. */
  feedLabel?: string | undefined;
}

/**
 * For Performance Max for travel goals campaigns with a Hotel
 * Center account link. Read-only.
 */
export interface AssetSet_HotelPropertyData {
  /** Output only. The hotel center ID of the partner. */
  hotelCenterId?:
    | Long
    | undefined;
  /** Output only. Name of the hotel partner. */
  partnerName?: string | undefined;
}

function createBaseAssetSet(): AssetSet {
  return {
    id: Long.ZERO,
    resourceName: "",
    name: "",
    type: 0,
    status: 0,
    merchantCenterFeed: undefined,
    locationGroupParentAssetSetId: Long.ZERO,
    hotelPropertyData: undefined,
    locationSet: undefined,
    businessProfileLocationGroup: undefined,
    chainLocationGroup: undefined,
  };
}

export const AssetSet: MessageFns<AssetSet> = {
  encode(message: AssetSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.id.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.id.toString());
    }
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.merchantCenterFeed !== undefined) {
      AssetSet_MerchantCenterFeed.encode(message.merchantCenterFeed, writer.uint32(42).fork()).join();
    }
    if (!message.locationGroupParentAssetSetId.equals(Long.ZERO)) {
      writer.uint32(80).int64(message.locationGroupParentAssetSetId.toString());
    }
    if (message.hotelPropertyData !== undefined) {
      AssetSet_HotelPropertyData.encode(message.hotelPropertyData, writer.uint32(90).fork()).join();
    }
    if (message.locationSet !== undefined) {
      LocationSet.encode(message.locationSet, writer.uint32(58).fork()).join();
    }
    if (message.businessProfileLocationGroup !== undefined) {
      BusinessProfileLocationGroup.encode(message.businessProfileLocationGroup, writer.uint32(66).fork()).join();
    }
    if (message.chainLocationGroup !== undefined) {
      ChainLocationGroup.encode(message.chainLocationGroup, writer.uint32(74).fork()).join();
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.merchantCenterFeed = AssetSet_MerchantCenterFeed.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.locationGroupParentAssetSetId = Long.fromString(reader.int64().toString());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.hotelPropertyData = AssetSet_HotelPropertyData.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.locationSet = LocationSet.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.businessProfileLocationGroup = BusinessProfileLocationGroup.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.chainLocationGroup = ChainLocationGroup.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? assetSetTypeEnum_AssetSetTypeFromJSON(object.type) : 0,
      status: isSet(object.status) ? assetSetStatusEnum_AssetSetStatusFromJSON(object.status) : 0,
      merchantCenterFeed: isSet(object.merchantCenterFeed)
        ? AssetSet_MerchantCenterFeed.fromJSON(object.merchantCenterFeed)
        : undefined,
      locationGroupParentAssetSetId: isSet(object.locationGroupParentAssetSetId)
        ? Long.fromValue(object.locationGroupParentAssetSetId)
        : Long.ZERO,
      hotelPropertyData: isSet(object.hotelPropertyData)
        ? AssetSet_HotelPropertyData.fromJSON(object.hotelPropertyData)
        : undefined,
      locationSet: isSet(object.locationSet) ? LocationSet.fromJSON(object.locationSet) : undefined,
      businessProfileLocationGroup: isSet(object.businessProfileLocationGroup)
        ? BusinessProfileLocationGroup.fromJSON(object.businessProfileLocationGroup)
        : undefined,
      chainLocationGroup: isSet(object.chainLocationGroup)
        ? ChainLocationGroup.fromJSON(object.chainLocationGroup)
        : undefined,
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
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = assetSetTypeEnum_AssetSetTypeToJSON(message.type);
    }
    if (message.status !== 0) {
      obj.status = assetSetStatusEnum_AssetSetStatusToJSON(message.status);
    }
    if (message.merchantCenterFeed !== undefined) {
      obj.merchantCenterFeed = AssetSet_MerchantCenterFeed.toJSON(message.merchantCenterFeed);
    }
    if (!message.locationGroupParentAssetSetId.equals(Long.ZERO)) {
      obj.locationGroupParentAssetSetId = (message.locationGroupParentAssetSetId || Long.ZERO).toString();
    }
    if (message.hotelPropertyData !== undefined) {
      obj.hotelPropertyData = AssetSet_HotelPropertyData.toJSON(message.hotelPropertyData);
    }
    if (message.locationSet !== undefined) {
      obj.locationSet = LocationSet.toJSON(message.locationSet);
    }
    if (message.businessProfileLocationGroup !== undefined) {
      obj.businessProfileLocationGroup = BusinessProfileLocationGroup.toJSON(message.businessProfileLocationGroup);
    }
    if (message.chainLocationGroup !== undefined) {
      obj.chainLocationGroup = ChainLocationGroup.toJSON(message.chainLocationGroup);
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
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.status = object.status ?? 0;
    message.merchantCenterFeed = (object.merchantCenterFeed !== undefined && object.merchantCenterFeed !== null)
      ? AssetSet_MerchantCenterFeed.fromPartial(object.merchantCenterFeed)
      : undefined;
    message.locationGroupParentAssetSetId =
      (object.locationGroupParentAssetSetId !== undefined && object.locationGroupParentAssetSetId !== null)
        ? Long.fromValue(object.locationGroupParentAssetSetId)
        : Long.ZERO;
    message.hotelPropertyData = (object.hotelPropertyData !== undefined && object.hotelPropertyData !== null)
      ? AssetSet_HotelPropertyData.fromPartial(object.hotelPropertyData)
      : undefined;
    message.locationSet = (object.locationSet !== undefined && object.locationSet !== null)
      ? LocationSet.fromPartial(object.locationSet)
      : undefined;
    message.businessProfileLocationGroup =
      (object.businessProfileLocationGroup !== undefined && object.businessProfileLocationGroup !== null)
        ? BusinessProfileLocationGroup.fromPartial(object.businessProfileLocationGroup)
        : undefined;
    message.chainLocationGroup = (object.chainLocationGroup !== undefined && object.chainLocationGroup !== null)
      ? ChainLocationGroup.fromPartial(object.chainLocationGroup)
      : undefined;
    return message;
  },
};

function createBaseAssetSet_MerchantCenterFeed(): AssetSet_MerchantCenterFeed {
  return { merchantId: Long.ZERO, feedLabel: undefined };
}

export const AssetSet_MerchantCenterFeed: MessageFns<AssetSet_MerchantCenterFeed> = {
  encode(message: AssetSet_MerchantCenterFeed, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.merchantId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.merchantId.toString());
    }
    if (message.feedLabel !== undefined) {
      writer.uint32(18).string(message.feedLabel);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetSet_MerchantCenterFeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSet_MerchantCenterFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.merchantId = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feedLabel = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetSet_MerchantCenterFeed {
    return {
      merchantId: isSet(object.merchantId) ? Long.fromValue(object.merchantId) : Long.ZERO,
      feedLabel: isSet(object.feedLabel) ? globalThis.String(object.feedLabel) : undefined,
    };
  },

  toJSON(message: AssetSet_MerchantCenterFeed): unknown {
    const obj: any = {};
    if (!message.merchantId.equals(Long.ZERO)) {
      obj.merchantId = (message.merchantId || Long.ZERO).toString();
    }
    if (message.feedLabel !== undefined) {
      obj.feedLabel = message.feedLabel;
    }
    return obj;
  },

  create(base?: DeepPartial<AssetSet_MerchantCenterFeed>): AssetSet_MerchantCenterFeed {
    return AssetSet_MerchantCenterFeed.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AssetSet_MerchantCenterFeed>): AssetSet_MerchantCenterFeed {
    const message = createBaseAssetSet_MerchantCenterFeed();
    message.merchantId = (object.merchantId !== undefined && object.merchantId !== null)
      ? Long.fromValue(object.merchantId)
      : Long.ZERO;
    message.feedLabel = object.feedLabel ?? undefined;
    return message;
  },
};

function createBaseAssetSet_HotelPropertyData(): AssetSet_HotelPropertyData {
  return { hotelCenterId: undefined, partnerName: undefined };
}

export const AssetSet_HotelPropertyData: MessageFns<AssetSet_HotelPropertyData> = {
  encode(message: AssetSet_HotelPropertyData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hotelCenterId !== undefined) {
      writer.uint32(8).int64(message.hotelCenterId.toString());
    }
    if (message.partnerName !== undefined) {
      writer.uint32(18).string(message.partnerName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetSet_HotelPropertyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSet_HotelPropertyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hotelCenterId = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.partnerName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetSet_HotelPropertyData {
    return {
      hotelCenterId: isSet(object.hotelCenterId) ? Long.fromValue(object.hotelCenterId) : undefined,
      partnerName: isSet(object.partnerName) ? globalThis.String(object.partnerName) : undefined,
    };
  },

  toJSON(message: AssetSet_HotelPropertyData): unknown {
    const obj: any = {};
    if (message.hotelCenterId !== undefined) {
      obj.hotelCenterId = (message.hotelCenterId || Long.ZERO).toString();
    }
    if (message.partnerName !== undefined) {
      obj.partnerName = message.partnerName;
    }
    return obj;
  },

  create(base?: DeepPartial<AssetSet_HotelPropertyData>): AssetSet_HotelPropertyData {
    return AssetSet_HotelPropertyData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AssetSet_HotelPropertyData>): AssetSet_HotelPropertyData {
    const message = createBaseAssetSet_HotelPropertyData();
    message.hotelCenterId = (object.hotelCenterId !== undefined && object.hotelCenterId !== null)
      ? Long.fromValue(object.hotelCenterId)
      : undefined;
    message.partnerName = object.partnerName ?? undefined;
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
