// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/callout_placeholder_field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Values for Callout placeholder fields. */
export interface CalloutPlaceholderFieldEnum {
}

/** Possible values for Callout placeholder fields. */
export enum CalloutPlaceholderFieldEnum_CalloutPlaceholderField {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** CALLOUT_TEXT - Data Type: STRING. Callout text. */
  CALLOUT_TEXT = 2,
  UNRECOGNIZED = -1,
}

export function calloutPlaceholderFieldEnum_CalloutPlaceholderFieldFromJSON(
  object: any,
): CalloutPlaceholderFieldEnum_CalloutPlaceholderField {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CalloutPlaceholderFieldEnum_CalloutPlaceholderField.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CalloutPlaceholderFieldEnum_CalloutPlaceholderField.UNKNOWN;
    case 2:
    case "CALLOUT_TEXT":
      return CalloutPlaceholderFieldEnum_CalloutPlaceholderField.CALLOUT_TEXT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CalloutPlaceholderFieldEnum_CalloutPlaceholderField.UNRECOGNIZED;
  }
}

export function calloutPlaceholderFieldEnum_CalloutPlaceholderFieldToJSON(
  object: CalloutPlaceholderFieldEnum_CalloutPlaceholderField,
): string {
  switch (object) {
    case CalloutPlaceholderFieldEnum_CalloutPlaceholderField.UNSPECIFIED:
      return "UNSPECIFIED";
    case CalloutPlaceholderFieldEnum_CalloutPlaceholderField.UNKNOWN:
      return "UNKNOWN";
    case CalloutPlaceholderFieldEnum_CalloutPlaceholderField.CALLOUT_TEXT:
      return "CALLOUT_TEXT";
    case CalloutPlaceholderFieldEnum_CalloutPlaceholderField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCalloutPlaceholderFieldEnum(): CalloutPlaceholderFieldEnum {
  return {};
}

export const CalloutPlaceholderFieldEnum: MessageFns<CalloutPlaceholderFieldEnum> = {
  encode(_: CalloutPlaceholderFieldEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CalloutPlaceholderFieldEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalloutPlaceholderFieldEnum();
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

  fromJSON(_: any): CalloutPlaceholderFieldEnum {
    return {};
  },

  toJSON(_: CalloutPlaceholderFieldEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CalloutPlaceholderFieldEnum>): CalloutPlaceholderFieldEnum {
    return CalloutPlaceholderFieldEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CalloutPlaceholderFieldEnum>): CalloutPlaceholderFieldEnum {
    const message = createBaseCalloutPlaceholderFieldEnum();
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
