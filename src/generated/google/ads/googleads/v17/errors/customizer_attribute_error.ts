// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/customizer_attribute_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible customizer attribute errors. */
export interface CustomizerAttributeErrorEnum {
}

/** Enum describing possible customizer attribute errors. */
export enum CustomizerAttributeErrorEnum_CustomizerAttributeError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /**
   * DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME - CustomizerAttribute name matches that of another active
   * CustomizerAttribute.
   */
  DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME = 2,
  UNRECOGNIZED = -1,
}

export function customizerAttributeErrorEnum_CustomizerAttributeErrorFromJSON(
  object: any,
): CustomizerAttributeErrorEnum_CustomizerAttributeError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CustomizerAttributeErrorEnum_CustomizerAttributeError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CustomizerAttributeErrorEnum_CustomizerAttributeError.UNKNOWN;
    case 2:
    case "DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME":
      return CustomizerAttributeErrorEnum_CustomizerAttributeError.DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomizerAttributeErrorEnum_CustomizerAttributeError.UNRECOGNIZED;
  }
}

export function customizerAttributeErrorEnum_CustomizerAttributeErrorToJSON(
  object: CustomizerAttributeErrorEnum_CustomizerAttributeError,
): string {
  switch (object) {
    case CustomizerAttributeErrorEnum_CustomizerAttributeError.UNSPECIFIED:
      return "UNSPECIFIED";
    case CustomizerAttributeErrorEnum_CustomizerAttributeError.UNKNOWN:
      return "UNKNOWN";
    case CustomizerAttributeErrorEnum_CustomizerAttributeError.DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME:
      return "DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME";
    case CustomizerAttributeErrorEnum_CustomizerAttributeError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCustomizerAttributeErrorEnum(): CustomizerAttributeErrorEnum {
  return {};
}

export const CustomizerAttributeErrorEnum: MessageFns<CustomizerAttributeErrorEnum> = {
  encode(_: CustomizerAttributeErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomizerAttributeErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomizerAttributeErrorEnum();
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

  fromJSON(_: any): CustomizerAttributeErrorEnum {
    return {};
  },

  toJSON(_: CustomizerAttributeErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CustomizerAttributeErrorEnum>): CustomizerAttributeErrorEnum {
    return CustomizerAttributeErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CustomizerAttributeErrorEnum>): CustomizerAttributeErrorEnum {
    const message = createBaseCustomizerAttributeErrorEnum();
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
