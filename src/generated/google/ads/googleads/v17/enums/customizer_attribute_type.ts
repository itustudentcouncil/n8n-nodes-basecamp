// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/customizer_attribute_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing possible types of a customizer attribute. */
export interface CustomizerAttributeTypeEnum {
}

/** The possible types of a customizer attribute. */
export enum CustomizerAttributeTypeEnum_CustomizerAttributeType {
  /** UNSPECIFIED - The status has not been specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received value is not known in this version. */
  UNKNOWN = 1,
  /** TEXT - Text customizer. */
  TEXT = 2,
  /** NUMBER - Number customizer. */
  NUMBER = 3,
  /** PRICE - Price customizer consisting of a number and a currency. */
  PRICE = 4,
  /** PERCENT - Percentage customizer consisting of a number and a '%'. */
  PERCENT = 5,
  UNRECOGNIZED = -1,
}

export function customizerAttributeTypeEnum_CustomizerAttributeTypeFromJSON(
  object: any,
): CustomizerAttributeTypeEnum_CustomizerAttributeType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CustomizerAttributeTypeEnum_CustomizerAttributeType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CustomizerAttributeTypeEnum_CustomizerAttributeType.UNKNOWN;
    case 2:
    case "TEXT":
      return CustomizerAttributeTypeEnum_CustomizerAttributeType.TEXT;
    case 3:
    case "NUMBER":
      return CustomizerAttributeTypeEnum_CustomizerAttributeType.NUMBER;
    case 4:
    case "PRICE":
      return CustomizerAttributeTypeEnum_CustomizerAttributeType.PRICE;
    case 5:
    case "PERCENT":
      return CustomizerAttributeTypeEnum_CustomizerAttributeType.PERCENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomizerAttributeTypeEnum_CustomizerAttributeType.UNRECOGNIZED;
  }
}

export function customizerAttributeTypeEnum_CustomizerAttributeTypeToJSON(
  object: CustomizerAttributeTypeEnum_CustomizerAttributeType,
): string {
  switch (object) {
    case CustomizerAttributeTypeEnum_CustomizerAttributeType.UNSPECIFIED:
      return "UNSPECIFIED";
    case CustomizerAttributeTypeEnum_CustomizerAttributeType.UNKNOWN:
      return "UNKNOWN";
    case CustomizerAttributeTypeEnum_CustomizerAttributeType.TEXT:
      return "TEXT";
    case CustomizerAttributeTypeEnum_CustomizerAttributeType.NUMBER:
      return "NUMBER";
    case CustomizerAttributeTypeEnum_CustomizerAttributeType.PRICE:
      return "PRICE";
    case CustomizerAttributeTypeEnum_CustomizerAttributeType.PERCENT:
      return "PERCENT";
    case CustomizerAttributeTypeEnum_CustomizerAttributeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCustomizerAttributeTypeEnum(): CustomizerAttributeTypeEnum {
  return {};
}

export const CustomizerAttributeTypeEnum: MessageFns<CustomizerAttributeTypeEnum> = {
  encode(_: CustomizerAttributeTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomizerAttributeTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomizerAttributeTypeEnum();
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

  fromJSON(_: any): CustomizerAttributeTypeEnum {
    return {};
  },

  toJSON(_: CustomizerAttributeTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CustomizerAttributeTypeEnum>): CustomizerAttributeTypeEnum {
    return CustomizerAttributeTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CustomizerAttributeTypeEnum>): CustomizerAttributeTypeEnum {
    const message = createBaseCustomizerAttributeTypeEnum();
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
