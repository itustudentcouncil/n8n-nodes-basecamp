// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/resources/ad_group_ad.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  AdGroupAdEngineStatusEnum_AdGroupAdEngineStatus,
  adGroupAdEngineStatusEnum_AdGroupAdEngineStatusFromJSON,
  adGroupAdEngineStatusEnum_AdGroupAdEngineStatusToJSON,
} from "../enums/ad_group_ad_engine_status.js";
import {
  AdGroupAdStatusEnum_AdGroupAdStatus,
  adGroupAdStatusEnum_AdGroupAdStatusFromJSON,
  adGroupAdStatusEnum_AdGroupAdStatusToJSON,
} from "../enums/ad_group_ad_status.js";
import { Ad } from "./ad.js";

export const protobufPackage = "google.ads.searchads360.v0.resources";

/** An ad group ad. */
export interface AdGroupAd {
  /**
   * Immutable. The resource name of the ad.
   * Ad group ad resource names have the form:
   *
   * `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}`
   */
  resourceName: string;
  /** The status of the ad. */
  status: AdGroupAdStatusEnum_AdGroupAdStatus;
  /** Immutable. The ad. */
  ad:
    | Ad
    | undefined;
  /**
   * Output only. The timestamp when this ad_group_ad was created. The datetime
   * is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
   */
  creationTime: string;
  /** Output only. The resource names of labels attached to this ad group ad. */
  labels: string[];
  /**
   * Output only. ID of the ad in the external engine account. This field is for
   * Search Ads 360 account only, for example, Yahoo Japan, Microsoft, Baidu
   * etc. For non-Search Ads 360 entity, use "ad_group_ad.ad.id" instead.
   */
  engineId: string;
  /**
   * Output only. Additional status of the ad in the external engine account.
   * Possible statuses (depending on the type of external account) include
   * active, eligible, pending review, etc.
   */
  engineStatus: AdGroupAdEngineStatusEnum_AdGroupAdEngineStatus;
  /**
   * Output only. The datetime when this ad group ad was last modified. The
   * datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss"
   * format.
   */
  lastModifiedTime: string;
}

function createBaseAdGroupAd(): AdGroupAd {
  return {
    resourceName: "",
    status: 0,
    ad: undefined,
    creationTime: "",
    labels: [],
    engineId: "",
    engineStatus: 0,
    lastModifiedTime: "",
  };
}

export const AdGroupAd: MessageFns<AdGroupAd> = {
  encode(message: AdGroupAd, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(42).fork()).join();
    }
    if (message.creationTime !== "") {
      writer.uint32(114).string(message.creationTime);
    }
    for (const v of message.labels) {
      writer.uint32(82).string(v!);
    }
    if (message.engineId !== "") {
      writer.uint32(90).string(message.engineId);
    }
    if (message.engineStatus !== 0) {
      writer.uint32(120).int32(message.engineStatus);
    }
    if (message.lastModifiedTime !== "") {
      writer.uint32(98).string(message.lastModifiedTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdGroupAd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdGroupAd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.creationTime = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.labels.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.engineId = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.engineStatus = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.lastModifiedTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdGroupAd {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      status: isSet(object.status) ? adGroupAdStatusEnum_AdGroupAdStatusFromJSON(object.status) : 0,
      ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined,
      creationTime: isSet(object.creationTime) ? globalThis.String(object.creationTime) : "",
      labels: globalThis.Array.isArray(object?.labels) ? object.labels.map((e: any) => globalThis.String(e)) : [],
      engineId: isSet(object.engineId) ? globalThis.String(object.engineId) : "",
      engineStatus: isSet(object.engineStatus)
        ? adGroupAdEngineStatusEnum_AdGroupAdEngineStatusFromJSON(object.engineStatus)
        : 0,
      lastModifiedTime: isSet(object.lastModifiedTime) ? globalThis.String(object.lastModifiedTime) : "",
    };
  },

  toJSON(message: AdGroupAd): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.status !== 0) {
      obj.status = adGroupAdStatusEnum_AdGroupAdStatusToJSON(message.status);
    }
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    if (message.creationTime !== "") {
      obj.creationTime = message.creationTime;
    }
    if (message.labels?.length) {
      obj.labels = message.labels;
    }
    if (message.engineId !== "") {
      obj.engineId = message.engineId;
    }
    if (message.engineStatus !== 0) {
      obj.engineStatus = adGroupAdEngineStatusEnum_AdGroupAdEngineStatusToJSON(message.engineStatus);
    }
    if (message.lastModifiedTime !== "") {
      obj.lastModifiedTime = message.lastModifiedTime;
    }
    return obj;
  },

  create(base?: DeepPartial<AdGroupAd>): AdGroupAd {
    return AdGroupAd.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AdGroupAd>): AdGroupAd {
    const message = createBaseAdGroupAd();
    message.resourceName = object.resourceName ?? "";
    message.status = object.status ?? 0;
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    message.creationTime = object.creationTime ?? "";
    message.labels = object.labels?.map((e) => e) || [];
    message.engineId = object.engineId ?? "";
    message.engineStatus = object.engineStatus ?? 0;
    message.lastModifiedTime = object.lastModifiedTime ?? "";
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