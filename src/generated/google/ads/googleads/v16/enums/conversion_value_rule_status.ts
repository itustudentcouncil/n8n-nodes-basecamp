// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/conversion_value_rule_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing possible statuses of a conversion value rule. */
export interface ConversionValueRuleStatusEnum {
}

/** Possible statuses of a conversion value rule. */
export enum ConversionValueRuleStatusEnum_ConversionValueRuleStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ENABLED - Conversion Value Rule is enabled and can be applied. */
  ENABLED = 2,
  /** REMOVED - Conversion Value Rule is permanently deleted and can't be applied. */
  REMOVED = 3,
  /** PAUSED - Conversion Value Rule is paused, but can be re-enabled. */
  PAUSED = 4,
  UNRECOGNIZED = -1,
}

export function conversionValueRuleStatusEnum_ConversionValueRuleStatusFromJSON(
  object: any,
): ConversionValueRuleStatusEnum_ConversionValueRuleStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConversionValueRuleStatusEnum_ConversionValueRuleStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConversionValueRuleStatusEnum_ConversionValueRuleStatus.UNKNOWN;
    case 2:
    case "ENABLED":
      return ConversionValueRuleStatusEnum_ConversionValueRuleStatus.ENABLED;
    case 3:
    case "REMOVED":
      return ConversionValueRuleStatusEnum_ConversionValueRuleStatus.REMOVED;
    case 4:
    case "PAUSED":
      return ConversionValueRuleStatusEnum_ConversionValueRuleStatus.PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConversionValueRuleStatusEnum_ConversionValueRuleStatus.UNRECOGNIZED;
  }
}

export function conversionValueRuleStatusEnum_ConversionValueRuleStatusToJSON(
  object: ConversionValueRuleStatusEnum_ConversionValueRuleStatus,
): string {
  switch (object) {
    case ConversionValueRuleStatusEnum_ConversionValueRuleStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConversionValueRuleStatusEnum_ConversionValueRuleStatus.UNKNOWN:
      return "UNKNOWN";
    case ConversionValueRuleStatusEnum_ConversionValueRuleStatus.ENABLED:
      return "ENABLED";
    case ConversionValueRuleStatusEnum_ConversionValueRuleStatus.REMOVED:
      return "REMOVED";
    case ConversionValueRuleStatusEnum_ConversionValueRuleStatus.PAUSED:
      return "PAUSED";
    case ConversionValueRuleStatusEnum_ConversionValueRuleStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConversionValueRuleStatusEnum(): ConversionValueRuleStatusEnum {
  return {};
}

export const ConversionValueRuleStatusEnum: MessageFns<ConversionValueRuleStatusEnum> = {
  encode(_: ConversionValueRuleStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionValueRuleStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionValueRuleStatusEnum();
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

  fromJSON(_: any): ConversionValueRuleStatusEnum {
    return {};
  },

  toJSON(_: ConversionValueRuleStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConversionValueRuleStatusEnum>): ConversionValueRuleStatusEnum {
    return ConversionValueRuleStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConversionValueRuleStatusEnum>): ConversionValueRuleStatusEnum {
    const message = createBaseConversionValueRuleStatusEnum();
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
