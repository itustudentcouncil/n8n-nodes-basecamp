// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/conversion_action_counting_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing the conversion deduplication mode for
 * conversion optimizer.
 */
export interface ConversionActionCountingTypeEnum {
}

/**
 * Indicates how conversions for this action will be counted. For more
 * information, see https://support.google.com/google-ads/answer/3438531.
 */
export enum ConversionActionCountingTypeEnum_ConversionActionCountingType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ONE_PER_CLICK - Count only one conversion per click. */
  ONE_PER_CLICK = 2,
  /** MANY_PER_CLICK - Count all conversions per click. */
  MANY_PER_CLICK = 3,
  UNRECOGNIZED = -1,
}

export function conversionActionCountingTypeEnum_ConversionActionCountingTypeFromJSON(
  object: any,
): ConversionActionCountingTypeEnum_ConversionActionCountingType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConversionActionCountingTypeEnum_ConversionActionCountingType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConversionActionCountingTypeEnum_ConversionActionCountingType.UNKNOWN;
    case 2:
    case "ONE_PER_CLICK":
      return ConversionActionCountingTypeEnum_ConversionActionCountingType.ONE_PER_CLICK;
    case 3:
    case "MANY_PER_CLICK":
      return ConversionActionCountingTypeEnum_ConversionActionCountingType.MANY_PER_CLICK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConversionActionCountingTypeEnum_ConversionActionCountingType.UNRECOGNIZED;
  }
}

export function conversionActionCountingTypeEnum_ConversionActionCountingTypeToJSON(
  object: ConversionActionCountingTypeEnum_ConversionActionCountingType,
): string {
  switch (object) {
    case ConversionActionCountingTypeEnum_ConversionActionCountingType.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConversionActionCountingTypeEnum_ConversionActionCountingType.UNKNOWN:
      return "UNKNOWN";
    case ConversionActionCountingTypeEnum_ConversionActionCountingType.ONE_PER_CLICK:
      return "ONE_PER_CLICK";
    case ConversionActionCountingTypeEnum_ConversionActionCountingType.MANY_PER_CLICK:
      return "MANY_PER_CLICK";
    case ConversionActionCountingTypeEnum_ConversionActionCountingType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConversionActionCountingTypeEnum(): ConversionActionCountingTypeEnum {
  return {};
}

export const ConversionActionCountingTypeEnum: MessageFns<ConversionActionCountingTypeEnum> = {
  encode(_: ConversionActionCountingTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionActionCountingTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionActionCountingTypeEnum();
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

  fromJSON(_: any): ConversionActionCountingTypeEnum {
    return {};
  },

  toJSON(_: ConversionActionCountingTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConversionActionCountingTypeEnum>): ConversionActionCountingTypeEnum {
    return ConversionActionCountingTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConversionActionCountingTypeEnum>): ConversionActionCountingTypeEnum {
    const message = createBaseConversionActionCountingTypeEnum();
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