// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/consent_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Enums represent consent status. */
export interface ConsentStatusEnum {
}

/** Consent status */
export enum ConsentStatusEnum_ConsentStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Output-only. Represents a format not yet defined in this enum. */
  UNKNOWN = 1,
  /** GRANTED - Granted. */
  GRANTED = 2,
  /** DENIED - Denied. */
  DENIED = 3,
  UNRECOGNIZED = -1,
}

export function consentStatusEnum_ConsentStatusFromJSON(object: any): ConsentStatusEnum_ConsentStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConsentStatusEnum_ConsentStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConsentStatusEnum_ConsentStatus.UNKNOWN;
    case 2:
    case "GRANTED":
      return ConsentStatusEnum_ConsentStatus.GRANTED;
    case 3:
    case "DENIED":
      return ConsentStatusEnum_ConsentStatus.DENIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConsentStatusEnum_ConsentStatus.UNRECOGNIZED;
  }
}

export function consentStatusEnum_ConsentStatusToJSON(object: ConsentStatusEnum_ConsentStatus): string {
  switch (object) {
    case ConsentStatusEnum_ConsentStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConsentStatusEnum_ConsentStatus.UNKNOWN:
      return "UNKNOWN";
    case ConsentStatusEnum_ConsentStatus.GRANTED:
      return "GRANTED";
    case ConsentStatusEnum_ConsentStatus.DENIED:
      return "DENIED";
    case ConsentStatusEnum_ConsentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConsentStatusEnum(): ConsentStatusEnum {
  return {};
}

export const ConsentStatusEnum: MessageFns<ConsentStatusEnum> = {
  encode(_: ConsentStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConsentStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsentStatusEnum();
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

  fromJSON(_: any): ConsentStatusEnum {
    return {};
  },

  toJSON(_: ConsentStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConsentStatusEnum>): ConsentStatusEnum {
    return ConsentStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConsentStatusEnum>): ConsentStatusEnum {
    const message = createBaseConsentStatusEnum();
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
