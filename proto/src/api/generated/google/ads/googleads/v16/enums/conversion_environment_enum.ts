// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/conversion_environment_enum.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum representing the conversion environment an uploaded
 * conversion was recorded on, for example, App or Web.
 */
export interface ConversionEnvironmentEnum {
}

/** Conversion environment of the uploaded conversion. */
export enum ConversionEnvironmentEnum_ConversionEnvironment {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** APP - The conversion was recorded on an app. */
  APP = 2,
  /** WEB - The conversion was recorded on a website. */
  WEB = 3,
  UNRECOGNIZED = -1,
}

export function conversionEnvironmentEnum_ConversionEnvironmentFromJSON(
  object: any,
): ConversionEnvironmentEnum_ConversionEnvironment {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConversionEnvironmentEnum_ConversionEnvironment.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConversionEnvironmentEnum_ConversionEnvironment.UNKNOWN;
    case 2:
    case "APP":
      return ConversionEnvironmentEnum_ConversionEnvironment.APP;
    case 3:
    case "WEB":
      return ConversionEnvironmentEnum_ConversionEnvironment.WEB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConversionEnvironmentEnum_ConversionEnvironment.UNRECOGNIZED;
  }
}

export function conversionEnvironmentEnum_ConversionEnvironmentToJSON(
  object: ConversionEnvironmentEnum_ConversionEnvironment,
): string {
  switch (object) {
    case ConversionEnvironmentEnum_ConversionEnvironment.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConversionEnvironmentEnum_ConversionEnvironment.UNKNOWN:
      return "UNKNOWN";
    case ConversionEnvironmentEnum_ConversionEnvironment.APP:
      return "APP";
    case ConversionEnvironmentEnum_ConversionEnvironment.WEB:
      return "WEB";
    case ConversionEnvironmentEnum_ConversionEnvironment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConversionEnvironmentEnum(): ConversionEnvironmentEnum {
  return {};
}

export const ConversionEnvironmentEnum: MessageFns<ConversionEnvironmentEnum> = {
  encode(_: ConversionEnvironmentEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionEnvironmentEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionEnvironmentEnum();
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

  fromJSON(_: any): ConversionEnvironmentEnum {
    return {};
  },

  toJSON(_: ConversionEnvironmentEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConversionEnvironmentEnum>): ConversionEnvironmentEnum {
    return ConversionEnvironmentEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConversionEnvironmentEnum>): ConversionEnvironmentEnum {
    const message = createBaseConversionEnvironmentEnum();
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