// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/distance_view.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  DistanceBucketEnum_DistanceBucket,
  distanceBucketEnum_DistanceBucketFromJSON,
  distanceBucketEnum_DistanceBucketToJSON,
} from "../enums/distance_bucket.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/**
 * A distance view with metrics aggregated by the user's distance from an
 * advertiser's location extensions. Each DistanceBucket includes all
 * impressions that fall within its distance and a single impression will
 * contribute to the metrics for all DistanceBuckets that include the user's
 * distance.
 */
export interface DistanceView {
  /**
   * Output only. The resource name of the distance view.
   * Distance view resource names have the form:
   *
   * `customers/{customer_id}/distanceViews/1~{distance_bucket}`
   */
  resourceName: string;
  /** Output only. Grouping of user distance from location extensions. */
  distanceBucket: DistanceBucketEnum_DistanceBucket;
  /**
   * Output only. True if the DistanceBucket is using the metric system, false
   * otherwise.
   */
  metricSystem?: boolean | undefined;
}

function createBaseDistanceView(): DistanceView {
  return { resourceName: "", distanceBucket: 0, metricSystem: undefined };
}

export const DistanceView: MessageFns<DistanceView> = {
  encode(message: DistanceView, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.distanceBucket !== 0) {
      writer.uint32(16).int32(message.distanceBucket);
    }
    if (message.metricSystem !== undefined) {
      writer.uint32(32).bool(message.metricSystem);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DistanceView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistanceView();
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

          message.distanceBucket = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.metricSystem = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DistanceView {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      distanceBucket: isSet(object.distanceBucket)
        ? distanceBucketEnum_DistanceBucketFromJSON(object.distanceBucket)
        : 0,
      metricSystem: isSet(object.metricSystem) ? globalThis.Boolean(object.metricSystem) : undefined,
    };
  },

  toJSON(message: DistanceView): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.distanceBucket !== 0) {
      obj.distanceBucket = distanceBucketEnum_DistanceBucketToJSON(message.distanceBucket);
    }
    if (message.metricSystem !== undefined) {
      obj.metricSystem = message.metricSystem;
    }
    return obj;
  },

  create(base?: DeepPartial<DistanceView>): DistanceView {
    return DistanceView.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DistanceView>): DistanceView {
    const message = createBaseDistanceView();
    message.resourceName = object.resourceName ?? "";
    message.distanceBucket = object.distanceBucket ?? 0;
    message.metricSystem = object.metricSystem ?? undefined;
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