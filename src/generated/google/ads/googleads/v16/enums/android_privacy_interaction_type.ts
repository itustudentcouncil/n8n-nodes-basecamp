// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/android_privacy_interaction_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** The interaction type enum for Android privacy shared key. */
export interface AndroidPrivacyInteractionTypeEnum {
}

/** Enumerates interaction types */
export enum AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The value is unknown in this version. */
  UNKNOWN = 1,
  /** CLICK - The physical click interaction type. */
  CLICK = 2,
  /** ENGAGED_VIEW - The 10 seconds engaged view interaction type. */
  ENGAGED_VIEW = 3,
  /** VIEW - The view (ad impression) interaction type. */
  VIEW = 4,
  UNRECOGNIZED = -1,
}

export function androidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionTypeFromJSON(
  object: any,
): AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.UNKNOWN;
    case 2:
    case "CLICK":
      return AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.CLICK;
    case 3:
    case "ENGAGED_VIEW":
      return AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.ENGAGED_VIEW;
    case 4:
    case "VIEW":
      return AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.VIEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.UNRECOGNIZED;
  }
}

export function androidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionTypeToJSON(
  object: AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType,
): string {
  switch (object) {
    case AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.UNSPECIFIED:
      return "UNSPECIFIED";
    case AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.UNKNOWN:
      return "UNKNOWN";
    case AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.CLICK:
      return "CLICK";
    case AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.ENGAGED_VIEW:
      return "ENGAGED_VIEW";
    case AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.VIEW:
      return "VIEW";
    case AndroidPrivacyInteractionTypeEnum_AndroidPrivacyInteractionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAndroidPrivacyInteractionTypeEnum(): AndroidPrivacyInteractionTypeEnum {
  return {};
}

export const AndroidPrivacyInteractionTypeEnum: MessageFns<AndroidPrivacyInteractionTypeEnum> = {
  encode(_: AndroidPrivacyInteractionTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AndroidPrivacyInteractionTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndroidPrivacyInteractionTypeEnum();
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

  fromJSON(_: any): AndroidPrivacyInteractionTypeEnum {
    return {};
  },

  toJSON(_: AndroidPrivacyInteractionTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AndroidPrivacyInteractionTypeEnum>): AndroidPrivacyInteractionTypeEnum {
    return AndroidPrivacyInteractionTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AndroidPrivacyInteractionTypeEnum>): AndroidPrivacyInteractionTypeEnum {
    const message = createBaseAndroidPrivacyInteractionTypeEnum();
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
