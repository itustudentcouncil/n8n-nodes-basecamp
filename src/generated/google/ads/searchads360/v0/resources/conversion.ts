// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/resources/conversion.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  AssetFieldTypeEnum_AssetFieldType,
  assetFieldTypeEnum_AssetFieldTypeFromJSON,
  assetFieldTypeEnum_AssetFieldTypeToJSON,
} from "../enums/asset_field_type.js";
import {
  AttributionTypeEnum_AttributionType,
  attributionTypeEnum_AttributionTypeFromJSON,
  attributionTypeEnum_AttributionTypeToJSON,
} from "../enums/attribution_type.js";
import {
  ConversionStatusEnum_ConversionStatus,
  conversionStatusEnum_ConversionStatusFromJSON,
  conversionStatusEnum_ConversionStatusToJSON,
} from "../enums/conversion_status.js";
import {
  ProductChannelEnum_ProductChannel,
  productChannelEnum_ProductChannelFromJSON,
  productChannelEnum_ProductChannelToJSON,
} from "../enums/product_channel.js";

export const protobufPackage = "google.ads.searchads360.v0.resources";

/** A conversion. */
export interface Conversion {
  /**
   * Output only. The resource name of the conversion.
   * Conversion resource names have the form:
   *
   * `customers/{customer_id}/conversions/{ad_group_id}~{criterion_id}~{ds_conversion_id}`
   */
  resourceName: string;
  /** Output only. The ID of the conversion */
  id?:
    | Long
    | undefined;
  /**
   * Output only. Search Ads 360 criterion ID. A value of 0 indicates that the
   * criterion is unattributed.
   */
  criterionId?:
    | Long
    | undefined;
  /**
   * Output only. The Search Ads 360 inventory account ID containing the product
   * that was clicked on. Search Ads 360 generates this ID when you link an
   * inventory account in Search Ads 360.
   */
  merchantId?:
    | Long
    | undefined;
  /** Output only. Ad ID. A value of 0 indicates that the ad is unattributed. */
  adId?:
    | Long
    | undefined;
  /**
   * Output only. A unique string, for the visit that the conversion is
   * attributed to, that is passed to the landing page as the click id URL
   * parameter.
   */
  clickId?:
    | string
    | undefined;
  /**
   * Output only. The Search Ads 360 visit ID that the conversion is attributed
   * to.
   */
  visitId?:
    | Long
    | undefined;
  /**
   * Output only. For offline conversions, this is an ID provided by
   * advertisers. If an advertiser doesn't specify such an ID, Search Ads 360
   * generates one. For online conversions, this is equal to the id column or
   * the floodlight_order_id column depending on the advertiser's Floodlight
   * instructions.
   */
  advertiserConversionId?:
    | string
    | undefined;
  /** Output only. The ID of the product clicked on. */
  productId?:
    | string
    | undefined;
  /**
   * Output only. The sales channel of the product that was clicked on: Online
   * or Local.
   */
  productChannel?:
    | ProductChannelEnum_ProductChannel
    | undefined;
  /**
   * Output only. The language (ISO-639-1) that has been set for the Merchant
   * Center feed containing data about the product.
   */
  productLanguageCode?:
    | string
    | undefined;
  /**
   * Output only. The store in the Local Inventory Ad that was clicked on. This
   * should match the store IDs used in your local products feed.
   */
  productStoreId?:
    | string
    | undefined;
  /**
   * Output only. The country (ISO-3166-format) registered for the inventory
   * feed that contains the product clicked on.
   */
  productCountryCode?:
    | string
    | undefined;
  /** Output only. What the conversion is attributed to: Visit or Keyword+Ad. */
  attributionType?:
    | AttributionTypeEnum_AttributionType
    | undefined;
  /** Output only. The timestamp of the conversion event. */
  conversionDateTime?:
    | string
    | undefined;
  /** Output only. The timestamp of the last time the conversion was modified. */
  conversionLastModifiedDateTime?:
    | string
    | undefined;
  /**
   * Output only. The timestamp of the visit that the conversion is attributed
   * to.
   */
  conversionVisitDateTime?:
    | string
    | undefined;
  /**
   * Output only. The quantity of items recorded by the conversion, as
   * determined by the qty url parameter. The advertiser is responsible for
   * dynamically populating the parameter (such as number of items sold in the
   * conversion), otherwise it defaults to 1.
   */
  conversionQuantity?:
    | Long
    | undefined;
  /**
   * Output only. The adjusted revenue in micros for the conversion event. This
   * will always be in the currency of the serving account.
   */
  conversionRevenueMicros?:
    | Long
    | undefined;
  /**
   * Output only. The original, unchanged revenue associated with the Floodlight
   * event (in the currency of the current report), before Floodlight currency
   * instruction modifications.
   */
  floodlightOriginalRevenue?:
    | Long
    | undefined;
  /**
   * Output only. The Floodlight order ID provided by the advertiser for the
   * conversion.
   */
  floodlightOrderId?:
    | string
    | undefined;
  /** Output only. The status of the conversion, either ENABLED or REMOVED.. */
  status?:
    | ConversionStatusEnum_ConversionStatus
    | undefined;
  /**
   * Output only. ID of the asset which was interacted with during the
   * conversion event.
   */
  assetId?:
    | Long
    | undefined;
  /** Output only. Asset field type of the conversion event. */
  assetFieldType?: AssetFieldTypeEnum_AssetFieldType | undefined;
}

function createBaseConversion(): Conversion {
  return {
    resourceName: "",
    id: undefined,
    criterionId: undefined,
    merchantId: undefined,
    adId: undefined,
    clickId: undefined,
    visitId: undefined,
    advertiserConversionId: undefined,
    productId: undefined,
    productChannel: undefined,
    productLanguageCode: undefined,
    productStoreId: undefined,
    productCountryCode: undefined,
    attributionType: undefined,
    conversionDateTime: undefined,
    conversionLastModifiedDateTime: undefined,
    conversionVisitDateTime: undefined,
    conversionQuantity: undefined,
    conversionRevenueMicros: undefined,
    floodlightOriginalRevenue: undefined,
    floodlightOrderId: undefined,
    status: undefined,
    assetId: undefined,
    assetFieldType: undefined,
  };
}

export const Conversion: MessageFns<Conversion> = {
  encode(message: Conversion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(16).int64(message.id.toString());
    }
    if (message.criterionId !== undefined) {
      writer.uint32(24).int64(message.criterionId.toString());
    }
    if (message.merchantId !== undefined) {
      writer.uint32(32).int64(message.merchantId.toString());
    }
    if (message.adId !== undefined) {
      writer.uint32(40).int64(message.adId.toString());
    }
    if (message.clickId !== undefined) {
      writer.uint32(50).string(message.clickId);
    }
    if (message.visitId !== undefined) {
      writer.uint32(56).int64(message.visitId.toString());
    }
    if (message.advertiserConversionId !== undefined) {
      writer.uint32(66).string(message.advertiserConversionId);
    }
    if (message.productId !== undefined) {
      writer.uint32(74).string(message.productId);
    }
    if (message.productChannel !== undefined) {
      writer.uint32(80).int32(message.productChannel);
    }
    if (message.productLanguageCode !== undefined) {
      writer.uint32(90).string(message.productLanguageCode);
    }
    if (message.productStoreId !== undefined) {
      writer.uint32(98).string(message.productStoreId);
    }
    if (message.productCountryCode !== undefined) {
      writer.uint32(106).string(message.productCountryCode);
    }
    if (message.attributionType !== undefined) {
      writer.uint32(112).int32(message.attributionType);
    }
    if (message.conversionDateTime !== undefined) {
      writer.uint32(122).string(message.conversionDateTime);
    }
    if (message.conversionLastModifiedDateTime !== undefined) {
      writer.uint32(130).string(message.conversionLastModifiedDateTime);
    }
    if (message.conversionVisitDateTime !== undefined) {
      writer.uint32(138).string(message.conversionVisitDateTime);
    }
    if (message.conversionQuantity !== undefined) {
      writer.uint32(144).int64(message.conversionQuantity.toString());
    }
    if (message.conversionRevenueMicros !== undefined) {
      writer.uint32(152).int64(message.conversionRevenueMicros.toString());
    }
    if (message.floodlightOriginalRevenue !== undefined) {
      writer.uint32(160).int64(message.floodlightOriginalRevenue.toString());
    }
    if (message.floodlightOrderId !== undefined) {
      writer.uint32(170).string(message.floodlightOrderId);
    }
    if (message.status !== undefined) {
      writer.uint32(176).int32(message.status);
    }
    if (message.assetId !== undefined) {
      writer.uint32(184).int64(message.assetId.toString());
    }
    if (message.assetFieldType !== undefined) {
      writer.uint32(192).int32(message.assetFieldType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Conversion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversion();
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
          if (tag !== 16) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.criterionId = Long.fromString(reader.int64().toString());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.merchantId = Long.fromString(reader.int64().toString());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.adId = Long.fromString(reader.int64().toString());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.clickId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.visitId = Long.fromString(reader.int64().toString());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.advertiserConversionId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.productChannel = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.productLanguageCode = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.productStoreId = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.productCountryCode = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.attributionType = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.conversionDateTime = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.conversionLastModifiedDateTime = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.conversionVisitDateTime = reader.string();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.conversionQuantity = Long.fromString(reader.int64().toString());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.conversionRevenueMicros = Long.fromString(reader.int64().toString());
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.floodlightOriginalRevenue = Long.fromString(reader.int64().toString());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.floodlightOrderId = reader.string();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.assetId = Long.fromString(reader.int64().toString());
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.assetFieldType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Conversion {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      criterionId: isSet(object.criterionId) ? Long.fromValue(object.criterionId) : undefined,
      merchantId: isSet(object.merchantId) ? Long.fromValue(object.merchantId) : undefined,
      adId: isSet(object.adId) ? Long.fromValue(object.adId) : undefined,
      clickId: isSet(object.clickId) ? globalThis.String(object.clickId) : undefined,
      visitId: isSet(object.visitId) ? Long.fromValue(object.visitId) : undefined,
      advertiserConversionId: isSet(object.advertiserConversionId)
        ? globalThis.String(object.advertiserConversionId)
        : undefined,
      productId: isSet(object.productId) ? globalThis.String(object.productId) : undefined,
      productChannel: isSet(object.productChannel)
        ? productChannelEnum_ProductChannelFromJSON(object.productChannel)
        : undefined,
      productLanguageCode: isSet(object.productLanguageCode)
        ? globalThis.String(object.productLanguageCode)
        : undefined,
      productStoreId: isSet(object.productStoreId) ? globalThis.String(object.productStoreId) : undefined,
      productCountryCode: isSet(object.productCountryCode) ? globalThis.String(object.productCountryCode) : undefined,
      attributionType: isSet(object.attributionType)
        ? attributionTypeEnum_AttributionTypeFromJSON(object.attributionType)
        : undefined,
      conversionDateTime: isSet(object.conversionDateTime) ? globalThis.String(object.conversionDateTime) : undefined,
      conversionLastModifiedDateTime: isSet(object.conversionLastModifiedDateTime)
        ? globalThis.String(object.conversionLastModifiedDateTime)
        : undefined,
      conversionVisitDateTime: isSet(object.conversionVisitDateTime)
        ? globalThis.String(object.conversionVisitDateTime)
        : undefined,
      conversionQuantity: isSet(object.conversionQuantity) ? Long.fromValue(object.conversionQuantity) : undefined,
      conversionRevenueMicros: isSet(object.conversionRevenueMicros)
        ? Long.fromValue(object.conversionRevenueMicros)
        : undefined,
      floodlightOriginalRevenue: isSet(object.floodlightOriginalRevenue)
        ? Long.fromValue(object.floodlightOriginalRevenue)
        : undefined,
      floodlightOrderId: isSet(object.floodlightOrderId) ? globalThis.String(object.floodlightOrderId) : undefined,
      status: isSet(object.status) ? conversionStatusEnum_ConversionStatusFromJSON(object.status) : undefined,
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : undefined,
      assetFieldType: isSet(object.assetFieldType)
        ? assetFieldTypeEnum_AssetFieldTypeFromJSON(object.assetFieldType)
        : undefined,
    };
  },

  toJSON(message: Conversion): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.criterionId !== undefined) {
      obj.criterionId = (message.criterionId || Long.ZERO).toString();
    }
    if (message.merchantId !== undefined) {
      obj.merchantId = (message.merchantId || Long.ZERO).toString();
    }
    if (message.adId !== undefined) {
      obj.adId = (message.adId || Long.ZERO).toString();
    }
    if (message.clickId !== undefined) {
      obj.clickId = message.clickId;
    }
    if (message.visitId !== undefined) {
      obj.visitId = (message.visitId || Long.ZERO).toString();
    }
    if (message.advertiserConversionId !== undefined) {
      obj.advertiserConversionId = message.advertiserConversionId;
    }
    if (message.productId !== undefined) {
      obj.productId = message.productId;
    }
    if (message.productChannel !== undefined) {
      obj.productChannel = productChannelEnum_ProductChannelToJSON(message.productChannel);
    }
    if (message.productLanguageCode !== undefined) {
      obj.productLanguageCode = message.productLanguageCode;
    }
    if (message.productStoreId !== undefined) {
      obj.productStoreId = message.productStoreId;
    }
    if (message.productCountryCode !== undefined) {
      obj.productCountryCode = message.productCountryCode;
    }
    if (message.attributionType !== undefined) {
      obj.attributionType = attributionTypeEnum_AttributionTypeToJSON(message.attributionType);
    }
    if (message.conversionDateTime !== undefined) {
      obj.conversionDateTime = message.conversionDateTime;
    }
    if (message.conversionLastModifiedDateTime !== undefined) {
      obj.conversionLastModifiedDateTime = message.conversionLastModifiedDateTime;
    }
    if (message.conversionVisitDateTime !== undefined) {
      obj.conversionVisitDateTime = message.conversionVisitDateTime;
    }
    if (message.conversionQuantity !== undefined) {
      obj.conversionQuantity = (message.conversionQuantity || Long.ZERO).toString();
    }
    if (message.conversionRevenueMicros !== undefined) {
      obj.conversionRevenueMicros = (message.conversionRevenueMicros || Long.ZERO).toString();
    }
    if (message.floodlightOriginalRevenue !== undefined) {
      obj.floodlightOriginalRevenue = (message.floodlightOriginalRevenue || Long.ZERO).toString();
    }
    if (message.floodlightOrderId !== undefined) {
      obj.floodlightOrderId = message.floodlightOrderId;
    }
    if (message.status !== undefined) {
      obj.status = conversionStatusEnum_ConversionStatusToJSON(message.status);
    }
    if (message.assetId !== undefined) {
      obj.assetId = (message.assetId || Long.ZERO).toString();
    }
    if (message.assetFieldType !== undefined) {
      obj.assetFieldType = assetFieldTypeEnum_AssetFieldTypeToJSON(message.assetFieldType);
    }
    return obj;
  },

  create(base?: DeepPartial<Conversion>): Conversion {
    return Conversion.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Conversion>): Conversion {
    const message = createBaseConversion();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.criterionId = (object.criterionId !== undefined && object.criterionId !== null)
      ? Long.fromValue(object.criterionId)
      : undefined;
    message.merchantId = (object.merchantId !== undefined && object.merchantId !== null)
      ? Long.fromValue(object.merchantId)
      : undefined;
    message.adId = (object.adId !== undefined && object.adId !== null) ? Long.fromValue(object.adId) : undefined;
    message.clickId = object.clickId ?? undefined;
    message.visitId = (object.visitId !== undefined && object.visitId !== null)
      ? Long.fromValue(object.visitId)
      : undefined;
    message.advertiserConversionId = object.advertiserConversionId ?? undefined;
    message.productId = object.productId ?? undefined;
    message.productChannel = object.productChannel ?? undefined;
    message.productLanguageCode = object.productLanguageCode ?? undefined;
    message.productStoreId = object.productStoreId ?? undefined;
    message.productCountryCode = object.productCountryCode ?? undefined;
    message.attributionType = object.attributionType ?? undefined;
    message.conversionDateTime = object.conversionDateTime ?? undefined;
    message.conversionLastModifiedDateTime = object.conversionLastModifiedDateTime ?? undefined;
    message.conversionVisitDateTime = object.conversionVisitDateTime ?? undefined;
    message.conversionQuantity = (object.conversionQuantity !== undefined && object.conversionQuantity !== null)
      ? Long.fromValue(object.conversionQuantity)
      : undefined;
    message.conversionRevenueMicros =
      (object.conversionRevenueMicros !== undefined && object.conversionRevenueMicros !== null)
        ? Long.fromValue(object.conversionRevenueMicros)
        : undefined;
    message.floodlightOriginalRevenue =
      (object.floodlightOriginalRevenue !== undefined && object.floodlightOriginalRevenue !== null)
        ? Long.fromValue(object.floodlightOriginalRevenue)
        : undefined;
    message.floodlightOrderId = object.floodlightOrderId ?? undefined;
    message.status = object.status ?? undefined;
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : undefined;
    message.assetFieldType = object.assetFieldType ?? undefined;
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
