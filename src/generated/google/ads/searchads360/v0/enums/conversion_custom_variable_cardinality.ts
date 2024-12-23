// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/enums/conversion_custom_variable_cardinality.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.enums";

/** Container for enum describing the family of a conversion custom variable. */
export interface ConversionCustomVariableCardinalityEnum {
}

/** Cardinality of a conversion custom variable. */
export enum ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /**
   * BELOW_ALL_LIMITS - The conversion custom variable has cardinality below all limits. The
   * variable can be used for segmentation, and stats can accrue for
   * new values if the variable is enabled.
   */
  BELOW_ALL_LIMITS = 2,
  /**
   * EXCEEDS_SEGMENTATION_LIMIT_BUT_NOT_STATS_LIMIT - The conversion custom variable has cardinality that exceeds the
   * segmentation limit, but does not exceed the stats limit. Segmentation
   * will be disabled, but stats can accrue for new values if the variable is
   * enabled.
   */
  EXCEEDS_SEGMENTATION_LIMIT_BUT_NOT_STATS_LIMIT = 3,
  /**
   * APPROACHES_STATS_LIMIT - The conversion custom variable has exceeded the segmentation limits, and
   * is approaching the stats limits (> 90%). Segmentation will be disabled,
   * but stats can accrue for new values if the variable is enabled.
   */
  APPROACHES_STATS_LIMIT = 4,
  /**
   * EXCEEDS_STATS_LIMIT - The conversion custom variable has exceeded both the segmentation limits
   * and stats limits. Segmentation will be disabled, and stats for enabled
   * variables can accrue only if the existing values do not increase the
   * cardinality of the variable any further.
   */
  EXCEEDS_STATS_LIMIT = 5,
  UNRECOGNIZED = -1,
}

export function conversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinalityFromJSON(
  object: any,
): ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.UNKNOWN;
    case 2:
    case "BELOW_ALL_LIMITS":
      return ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.BELOW_ALL_LIMITS;
    case 3:
    case "EXCEEDS_SEGMENTATION_LIMIT_BUT_NOT_STATS_LIMIT":
      return ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality
        .EXCEEDS_SEGMENTATION_LIMIT_BUT_NOT_STATS_LIMIT;
    case 4:
    case "APPROACHES_STATS_LIMIT":
      return ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.APPROACHES_STATS_LIMIT;
    case 5:
    case "EXCEEDS_STATS_LIMIT":
      return ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.EXCEEDS_STATS_LIMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.UNRECOGNIZED;
  }
}

export function conversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinalityToJSON(
  object: ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality,
): string {
  switch (object) {
    case ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.UNKNOWN:
      return "UNKNOWN";
    case ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.BELOW_ALL_LIMITS:
      return "BELOW_ALL_LIMITS";
    case ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality
      .EXCEEDS_SEGMENTATION_LIMIT_BUT_NOT_STATS_LIMIT:
      return "EXCEEDS_SEGMENTATION_LIMIT_BUT_NOT_STATS_LIMIT";
    case ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.APPROACHES_STATS_LIMIT:
      return "APPROACHES_STATS_LIMIT";
    case ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.EXCEEDS_STATS_LIMIT:
      return "EXCEEDS_STATS_LIMIT";
    case ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConversionCustomVariableCardinalityEnum(): ConversionCustomVariableCardinalityEnum {
  return {};
}

export const ConversionCustomVariableCardinalityEnum: MessageFns<ConversionCustomVariableCardinalityEnum> = {
  encode(_: ConversionCustomVariableCardinalityEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionCustomVariableCardinalityEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionCustomVariableCardinalityEnum();
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

  fromJSON(_: any): ConversionCustomVariableCardinalityEnum {
    return {};
  },

  toJSON(_: ConversionCustomVariableCardinalityEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConversionCustomVariableCardinalityEnum>): ConversionCustomVariableCardinalityEnum {
    return ConversionCustomVariableCardinalityEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConversionCustomVariableCardinalityEnum>): ConversionCustomVariableCardinalityEnum {
    const message = createBaseConversionCustomVariableCardinalityEnum();
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
