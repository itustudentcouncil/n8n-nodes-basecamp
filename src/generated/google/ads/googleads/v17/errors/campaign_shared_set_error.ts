// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/campaign_shared_set_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible campaign shared set errors. */
export interface CampaignSharedSetErrorEnum {
}

/** Enum describing possible campaign shared set errors. */
export enum CampaignSharedSetErrorEnum_CampaignSharedSetError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** SHARED_SET_ACCESS_DENIED - The shared set belongs to another customer and permission isn't granted. */
  SHARED_SET_ACCESS_DENIED = 2,
  UNRECOGNIZED = -1,
}

export function campaignSharedSetErrorEnum_CampaignSharedSetErrorFromJSON(
  object: any,
): CampaignSharedSetErrorEnum_CampaignSharedSetError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CampaignSharedSetErrorEnum_CampaignSharedSetError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CampaignSharedSetErrorEnum_CampaignSharedSetError.UNKNOWN;
    case 2:
    case "SHARED_SET_ACCESS_DENIED":
      return CampaignSharedSetErrorEnum_CampaignSharedSetError.SHARED_SET_ACCESS_DENIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CampaignSharedSetErrorEnum_CampaignSharedSetError.UNRECOGNIZED;
  }
}

export function campaignSharedSetErrorEnum_CampaignSharedSetErrorToJSON(
  object: CampaignSharedSetErrorEnum_CampaignSharedSetError,
): string {
  switch (object) {
    case CampaignSharedSetErrorEnum_CampaignSharedSetError.UNSPECIFIED:
      return "UNSPECIFIED";
    case CampaignSharedSetErrorEnum_CampaignSharedSetError.UNKNOWN:
      return "UNKNOWN";
    case CampaignSharedSetErrorEnum_CampaignSharedSetError.SHARED_SET_ACCESS_DENIED:
      return "SHARED_SET_ACCESS_DENIED";
    case CampaignSharedSetErrorEnum_CampaignSharedSetError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCampaignSharedSetErrorEnum(): CampaignSharedSetErrorEnum {
  return {};
}

export const CampaignSharedSetErrorEnum: MessageFns<CampaignSharedSetErrorEnum> = {
  encode(_: CampaignSharedSetErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignSharedSetErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignSharedSetErrorEnum();
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

  fromJSON(_: any): CampaignSharedSetErrorEnum {
    return {};
  },

  toJSON(_: CampaignSharedSetErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CampaignSharedSetErrorEnum>): CampaignSharedSetErrorEnum {
    return CampaignSharedSetErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CampaignSharedSetErrorEnum>): CampaignSharedSetErrorEnum {
    const message = createBaseCampaignSharedSetErrorEnum();
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
