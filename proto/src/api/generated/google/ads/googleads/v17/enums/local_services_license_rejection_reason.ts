// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/local_services_license_rejection_reason.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Container for enum describing the rejection reason of a local services
 * license verification artifact.
 */
export interface LocalServicesLicenseRejectionReasonEnum {
}

/**
 * Enums describing possible rejection reasons of a local services license
 * verification artifact.
 */
export enum LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** BUSINESS_NAME_MISMATCH - Business name doesn't match business name for the Local Services Ad. */
  BUSINESS_NAME_MISMATCH = 2,
  /** UNAUTHORIZED - License is unauthorized or been revoked. */
  UNAUTHORIZED = 3,
  /** EXPIRED - License is expired. */
  EXPIRED = 4,
  /** POOR_QUALITY - License is poor quality - blurry images, illegible, etc... */
  POOR_QUALITY = 5,
  /** UNVERIFIABLE - License cannot be verified due to a not legitimate image. */
  UNVERIFIABLE = 6,
  /** WRONG_DOCUMENT_OR_ID - License is not the requested document type or contains an invalid ID. */
  WRONG_DOCUMENT_OR_ID = 7,
  /** OTHER - License has another flaw not listed explicitly. */
  OTHER = 8,
  UNRECOGNIZED = -1,
}

export function localServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReasonFromJSON(
  object: any,
): LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNKNOWN;
    case 2:
    case "BUSINESS_NAME_MISMATCH":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.BUSINESS_NAME_MISMATCH;
    case 3:
    case "UNAUTHORIZED":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNAUTHORIZED;
    case 4:
    case "EXPIRED":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.EXPIRED;
    case 5:
    case "POOR_QUALITY":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.POOR_QUALITY;
    case 6:
    case "UNVERIFIABLE":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNVERIFIABLE;
    case 7:
    case "WRONG_DOCUMENT_OR_ID":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.WRONG_DOCUMENT_OR_ID;
    case 8:
    case "OTHER":
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNRECOGNIZED;
  }
}

export function localServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReasonToJSON(
  object: LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason,
): string {
  switch (object) {
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNKNOWN:
      return "UNKNOWN";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.BUSINESS_NAME_MISMATCH:
      return "BUSINESS_NAME_MISMATCH";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNAUTHORIZED:
      return "UNAUTHORIZED";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.EXPIRED:
      return "EXPIRED";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.POOR_QUALITY:
      return "POOR_QUALITY";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNVERIFIABLE:
      return "UNVERIFIABLE";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.WRONG_DOCUMENT_OR_ID:
      return "WRONG_DOCUMENT_OR_ID";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.OTHER:
      return "OTHER";
    case LocalServicesLicenseRejectionReasonEnum_LocalServicesLicenseRejectionReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLocalServicesLicenseRejectionReasonEnum(): LocalServicesLicenseRejectionReasonEnum {
  return {};
}

export const LocalServicesLicenseRejectionReasonEnum: MessageFns<LocalServicesLicenseRejectionReasonEnum> = {
  encode(_: LocalServicesLicenseRejectionReasonEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocalServicesLicenseRejectionReasonEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalServicesLicenseRejectionReasonEnum();
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

  fromJSON(_: any): LocalServicesLicenseRejectionReasonEnum {
    return {};
  },

  toJSON(_: LocalServicesLicenseRejectionReasonEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LocalServicesLicenseRejectionReasonEnum>): LocalServicesLicenseRejectionReasonEnum {
    return LocalServicesLicenseRejectionReasonEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<LocalServicesLicenseRejectionReasonEnum>): LocalServicesLicenseRejectionReasonEnum {
    const message = createBaseLocalServicesLicenseRejectionReasonEnum();
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