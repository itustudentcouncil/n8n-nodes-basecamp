// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/experiment_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing the type of experiment. */
export interface ExperimentTypeEnum {
}

/** The type of the experiment. */
export enum ExperimentTypeEnum_ExperimentType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The value is unknown in this version. */
  UNKNOWN = 1,
  /** DISPLAY_AND_VIDEO_360 - This is a DISPLAY_AND_VIDEO_360 experiment. */
  DISPLAY_AND_VIDEO_360 = 2,
  /** AD_VARIATION - This is an ad variation experiment. */
  AD_VARIATION = 3,
  /** YOUTUBE_CUSTOM - A custom experiment consisting of Video campaigns. */
  YOUTUBE_CUSTOM = 5,
  /** DISPLAY_CUSTOM - A custom experiment consisting of display campaigns. */
  DISPLAY_CUSTOM = 6,
  /** SEARCH_CUSTOM - A custom experiment consisting of search campaigns. */
  SEARCH_CUSTOM = 7,
  /** DISPLAY_AUTOMATED_BIDDING_STRATEGY - An experiment that compares bidding strategies for display campaigns. */
  DISPLAY_AUTOMATED_BIDDING_STRATEGY = 8,
  /** SEARCH_AUTOMATED_BIDDING_STRATEGY - An experiment that compares bidding strategies for search campaigns." */
  SEARCH_AUTOMATED_BIDDING_STRATEGY = 9,
  /** SHOPPING_AUTOMATED_BIDDING_STRATEGY - An experiment that compares bidding strategies for shopping campaigns. */
  SHOPPING_AUTOMATED_BIDDING_STRATEGY = 10,
  /** SMART_MATCHING - DEPRECATED. A smart matching experiment with search campaigns. */
  SMART_MATCHING = 11,
  /** HOTEL_CUSTOM - A custom experiment consisting of hotel campaigns. */
  HOTEL_CUSTOM = 12,
  UNRECOGNIZED = -1,
}

export function experimentTypeEnum_ExperimentTypeFromJSON(object: any): ExperimentTypeEnum_ExperimentType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ExperimentTypeEnum_ExperimentType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ExperimentTypeEnum_ExperimentType.UNKNOWN;
    case 2:
    case "DISPLAY_AND_VIDEO_360":
      return ExperimentTypeEnum_ExperimentType.DISPLAY_AND_VIDEO_360;
    case 3:
    case "AD_VARIATION":
      return ExperimentTypeEnum_ExperimentType.AD_VARIATION;
    case 5:
    case "YOUTUBE_CUSTOM":
      return ExperimentTypeEnum_ExperimentType.YOUTUBE_CUSTOM;
    case 6:
    case "DISPLAY_CUSTOM":
      return ExperimentTypeEnum_ExperimentType.DISPLAY_CUSTOM;
    case 7:
    case "SEARCH_CUSTOM":
      return ExperimentTypeEnum_ExperimentType.SEARCH_CUSTOM;
    case 8:
    case "DISPLAY_AUTOMATED_BIDDING_STRATEGY":
      return ExperimentTypeEnum_ExperimentType.DISPLAY_AUTOMATED_BIDDING_STRATEGY;
    case 9:
    case "SEARCH_AUTOMATED_BIDDING_STRATEGY":
      return ExperimentTypeEnum_ExperimentType.SEARCH_AUTOMATED_BIDDING_STRATEGY;
    case 10:
    case "SHOPPING_AUTOMATED_BIDDING_STRATEGY":
      return ExperimentTypeEnum_ExperimentType.SHOPPING_AUTOMATED_BIDDING_STRATEGY;
    case 11:
    case "SMART_MATCHING":
      return ExperimentTypeEnum_ExperimentType.SMART_MATCHING;
    case 12:
    case "HOTEL_CUSTOM":
      return ExperimentTypeEnum_ExperimentType.HOTEL_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExperimentTypeEnum_ExperimentType.UNRECOGNIZED;
  }
}

export function experimentTypeEnum_ExperimentTypeToJSON(object: ExperimentTypeEnum_ExperimentType): string {
  switch (object) {
    case ExperimentTypeEnum_ExperimentType.UNSPECIFIED:
      return "UNSPECIFIED";
    case ExperimentTypeEnum_ExperimentType.UNKNOWN:
      return "UNKNOWN";
    case ExperimentTypeEnum_ExperimentType.DISPLAY_AND_VIDEO_360:
      return "DISPLAY_AND_VIDEO_360";
    case ExperimentTypeEnum_ExperimentType.AD_VARIATION:
      return "AD_VARIATION";
    case ExperimentTypeEnum_ExperimentType.YOUTUBE_CUSTOM:
      return "YOUTUBE_CUSTOM";
    case ExperimentTypeEnum_ExperimentType.DISPLAY_CUSTOM:
      return "DISPLAY_CUSTOM";
    case ExperimentTypeEnum_ExperimentType.SEARCH_CUSTOM:
      return "SEARCH_CUSTOM";
    case ExperimentTypeEnum_ExperimentType.DISPLAY_AUTOMATED_BIDDING_STRATEGY:
      return "DISPLAY_AUTOMATED_BIDDING_STRATEGY";
    case ExperimentTypeEnum_ExperimentType.SEARCH_AUTOMATED_BIDDING_STRATEGY:
      return "SEARCH_AUTOMATED_BIDDING_STRATEGY";
    case ExperimentTypeEnum_ExperimentType.SHOPPING_AUTOMATED_BIDDING_STRATEGY:
      return "SHOPPING_AUTOMATED_BIDDING_STRATEGY";
    case ExperimentTypeEnum_ExperimentType.SMART_MATCHING:
      return "SMART_MATCHING";
    case ExperimentTypeEnum_ExperimentType.HOTEL_CUSTOM:
      return "HOTEL_CUSTOM";
    case ExperimentTypeEnum_ExperimentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseExperimentTypeEnum(): ExperimentTypeEnum {
  return {};
}

export const ExperimentTypeEnum: MessageFns<ExperimentTypeEnum> = {
  encode(_: ExperimentTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExperimentTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExperimentTypeEnum();
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

  fromJSON(_: any): ExperimentTypeEnum {
    return {};
  },

  toJSON(_: ExperimentTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ExperimentTypeEnum>): ExperimentTypeEnum {
    return ExperimentTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ExperimentTypeEnum>): ExperimentTypeEnum {
    const message = createBaseExperimentTypeEnum();
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