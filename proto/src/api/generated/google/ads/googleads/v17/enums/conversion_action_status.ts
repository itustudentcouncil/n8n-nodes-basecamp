// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/conversion_action_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing possible statuses of a conversion action. */
export interface ConversionActionStatusEnum {
}

/** Possible statuses of a conversion action. */
export enum ConversionActionStatusEnum_ConversionActionStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ENABLED - Conversions will be recorded. */
  ENABLED = 2,
  /** REMOVED - Conversions will not be recorded. */
  REMOVED = 3,
  /**
   * HIDDEN - Conversions will not be recorded and the conversion action will not
   * appear in the UI.
   */
  HIDDEN = 4,
  UNRECOGNIZED = -1,
}

export function conversionActionStatusEnum_ConversionActionStatusFromJSON(
  object: any,
): ConversionActionStatusEnum_ConversionActionStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConversionActionStatusEnum_ConversionActionStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConversionActionStatusEnum_ConversionActionStatus.UNKNOWN;
    case 2:
    case "ENABLED":
      return ConversionActionStatusEnum_ConversionActionStatus.ENABLED;
    case 3:
    case "REMOVED":
      return ConversionActionStatusEnum_ConversionActionStatus.REMOVED;
    case 4:
    case "HIDDEN":
      return ConversionActionStatusEnum_ConversionActionStatus.HIDDEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConversionActionStatusEnum_ConversionActionStatus.UNRECOGNIZED;
  }
}

export function conversionActionStatusEnum_ConversionActionStatusToJSON(
  object: ConversionActionStatusEnum_ConversionActionStatus,
): string {
  switch (object) {
    case ConversionActionStatusEnum_ConversionActionStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConversionActionStatusEnum_ConversionActionStatus.UNKNOWN:
      return "UNKNOWN";
    case ConversionActionStatusEnum_ConversionActionStatus.ENABLED:
      return "ENABLED";
    case ConversionActionStatusEnum_ConversionActionStatus.REMOVED:
      return "REMOVED";
    case ConversionActionStatusEnum_ConversionActionStatus.HIDDEN:
      return "HIDDEN";
    case ConversionActionStatusEnum_ConversionActionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConversionActionStatusEnum(): ConversionActionStatusEnum {
  return {};
}

export const ConversionActionStatusEnum: MessageFns<ConversionActionStatusEnum> = {
  encode(_: ConversionActionStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionActionStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionActionStatusEnum();
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

  fromJSON(_: any): ConversionActionStatusEnum {
    return {};
  },

  toJSON(_: ConversionActionStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConversionActionStatusEnum>): ConversionActionStatusEnum {
    return ConversionActionStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConversionActionStatusEnum>): ConversionActionStatusEnum {
    const message = createBaseConversionActionStatusEnum();
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