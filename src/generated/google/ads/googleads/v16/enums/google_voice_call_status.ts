// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/google_voice_call_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing possible statuses of a google voice call. */
export interface GoogleVoiceCallStatusEnum {
}

/** Possible statuses of a google voice call. */
export enum GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** MISSED - The call was missed. */
  MISSED = 2,
  /** RECEIVED - The call was received. */
  RECEIVED = 3,
  UNRECOGNIZED = -1,
}

export function googleVoiceCallStatusEnum_GoogleVoiceCallStatusFromJSON(
  object: any,
): GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.UNKNOWN;
    case 2:
    case "MISSED":
      return GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.MISSED;
    case 3:
    case "RECEIVED":
      return GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.RECEIVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.UNRECOGNIZED;
  }
}

export function googleVoiceCallStatusEnum_GoogleVoiceCallStatusToJSON(
  object: GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus,
): string {
  switch (object) {
    case GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.UNKNOWN:
      return "UNKNOWN";
    case GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.MISSED:
      return "MISSED";
    case GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.RECEIVED:
      return "RECEIVED";
    case GoogleVoiceCallStatusEnum_GoogleVoiceCallStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseGoogleVoiceCallStatusEnum(): GoogleVoiceCallStatusEnum {
  return {};
}

export const GoogleVoiceCallStatusEnum: MessageFns<GoogleVoiceCallStatusEnum> = {
  encode(_: GoogleVoiceCallStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GoogleVoiceCallStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleVoiceCallStatusEnum();
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

  fromJSON(_: any): GoogleVoiceCallStatusEnum {
    return {};
  },

  toJSON(_: GoogleVoiceCallStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GoogleVoiceCallStatusEnum>): GoogleVoiceCallStatusEnum {
    return GoogleVoiceCallStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<GoogleVoiceCallStatusEnum>): GoogleVoiceCallStatusEnum {
    const message = createBaseGoogleVoiceCallStatusEnum();
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
