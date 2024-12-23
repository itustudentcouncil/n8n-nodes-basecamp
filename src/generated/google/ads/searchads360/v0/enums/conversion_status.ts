// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/enums/conversion_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.enums";

/** Container for enum describing possible statuses of a conversion. */
export interface ConversionStatusEnum {
}

/** Possible statuses of a conversion. */
export enum ConversionStatusEnum_ConversionStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ENABLED - The conversion is enabled. */
  ENABLED = 2,
  /** REMOVED - The conversion has been removed. */
  REMOVED = 3,
  UNRECOGNIZED = -1,
}

export function conversionStatusEnum_ConversionStatusFromJSON(object: any): ConversionStatusEnum_ConversionStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConversionStatusEnum_ConversionStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConversionStatusEnum_ConversionStatus.UNKNOWN;
    case 2:
    case "ENABLED":
      return ConversionStatusEnum_ConversionStatus.ENABLED;
    case 3:
    case "REMOVED":
      return ConversionStatusEnum_ConversionStatus.REMOVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConversionStatusEnum_ConversionStatus.UNRECOGNIZED;
  }
}

export function conversionStatusEnum_ConversionStatusToJSON(object: ConversionStatusEnum_ConversionStatus): string {
  switch (object) {
    case ConversionStatusEnum_ConversionStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConversionStatusEnum_ConversionStatus.UNKNOWN:
      return "UNKNOWN";
    case ConversionStatusEnum_ConversionStatus.ENABLED:
      return "ENABLED";
    case ConversionStatusEnum_ConversionStatus.REMOVED:
      return "REMOVED";
    case ConversionStatusEnum_ConversionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConversionStatusEnum(): ConversionStatusEnum {
  return {};
}

export const ConversionStatusEnum: MessageFns<ConversionStatusEnum> = {
  encode(_: ConversionStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionStatusEnum();
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

  fromJSON(_: any): ConversionStatusEnum {
    return {};
  },

  toJSON(_: ConversionStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConversionStatusEnum>): ConversionStatusEnum {
    return ConversionStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConversionStatusEnum>): ConversionStatusEnum {
    const message = createBaseConversionStatusEnum();
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
