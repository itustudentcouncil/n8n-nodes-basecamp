// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/local_services_business_registration_check_rejection_reason.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing the rejection reason of a local services
 * business registration check verification artifact.
 */
export interface LocalServicesBusinessRegistrationCheckRejectionReasonEnum {
}

/**
 * Enums describing possible rejection reasons of a local services business
 * registration check verification artifact.
 */
export enum LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** BUSINESS_NAME_MISMATCH - Business name doesn't match business name for the Local Services Ad. */
  BUSINESS_NAME_MISMATCH = 2,
  /** BUSINESS_DETAILS_MISMATCH - Business details mismatch. */
  BUSINESS_DETAILS_MISMATCH = 3,
  /** ID_NOT_FOUND - Business registration ID not found. */
  ID_NOT_FOUND = 4,
  /** POOR_DOCUMENT_IMAGE_QUALITY - Uploaded document not clear, blurry, etc. */
  POOR_DOCUMENT_IMAGE_QUALITY = 5,
  /** DOCUMENT_EXPIRED - Uploaded document has expired. */
  DOCUMENT_EXPIRED = 6,
  /** DOCUMENT_INVALID - Document revoked or annuled. */
  DOCUMENT_INVALID = 7,
  /** DOCUMENT_TYPE_MISMATCH - Document type mismatch. */
  DOCUMENT_TYPE_MISMATCH = 8,
  /** DOCUMENT_UNVERIFIABLE - Uploaded document could not be verified as legitimate. */
  DOCUMENT_UNVERIFIABLE = 9,
  /**
   * OTHER - The business registration process could not be completed due to an issue.
   * Contact https://support.google.com/localservices to learn more.
   */
  OTHER = 10,
  UNRECOGNIZED = -1,
}

export function localServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReasonFromJSON(
  object: any,
): LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .UNKNOWN;
    case 2:
    case "BUSINESS_NAME_MISMATCH":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .BUSINESS_NAME_MISMATCH;
    case 3:
    case "BUSINESS_DETAILS_MISMATCH":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .BUSINESS_DETAILS_MISMATCH;
    case 4:
    case "ID_NOT_FOUND":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .ID_NOT_FOUND;
    case 5:
    case "POOR_DOCUMENT_IMAGE_QUALITY":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .POOR_DOCUMENT_IMAGE_QUALITY;
    case 6:
    case "DOCUMENT_EXPIRED":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .DOCUMENT_EXPIRED;
    case 7:
    case "DOCUMENT_INVALID":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .DOCUMENT_INVALID;
    case 8:
    case "DOCUMENT_TYPE_MISMATCH":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .DOCUMENT_TYPE_MISMATCH;
    case 9:
    case "DOCUMENT_UNVERIFIABLE":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .DOCUMENT_UNVERIFIABLE;
    case 10:
    case "OTHER":
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
        .UNRECOGNIZED;
  }
}

export function localServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReasonToJSON(
  object:
    LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason,
): string {
  switch (object) {
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .UNSPECIFIED:
      return "UNSPECIFIED";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .UNKNOWN:
      return "UNKNOWN";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .BUSINESS_NAME_MISMATCH:
      return "BUSINESS_NAME_MISMATCH";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .BUSINESS_DETAILS_MISMATCH:
      return "BUSINESS_DETAILS_MISMATCH";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .ID_NOT_FOUND:
      return "ID_NOT_FOUND";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .POOR_DOCUMENT_IMAGE_QUALITY:
      return "POOR_DOCUMENT_IMAGE_QUALITY";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .DOCUMENT_EXPIRED:
      return "DOCUMENT_EXPIRED";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .DOCUMENT_INVALID:
      return "DOCUMENT_INVALID";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .DOCUMENT_TYPE_MISMATCH:
      return "DOCUMENT_TYPE_MISMATCH";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .DOCUMENT_UNVERIFIABLE:
      return "DOCUMENT_UNVERIFIABLE";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .OTHER:
      return "OTHER";
    case LocalServicesBusinessRegistrationCheckRejectionReasonEnum_LocalServicesBusinessRegistrationCheckRejectionReason
      .UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLocalServicesBusinessRegistrationCheckRejectionReasonEnum(): LocalServicesBusinessRegistrationCheckRejectionReasonEnum {
  return {};
}

export const LocalServicesBusinessRegistrationCheckRejectionReasonEnum: MessageFns<
  LocalServicesBusinessRegistrationCheckRejectionReasonEnum
> = {
  encode(
    _: LocalServicesBusinessRegistrationCheckRejectionReasonEnum,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocalServicesBusinessRegistrationCheckRejectionReasonEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalServicesBusinessRegistrationCheckRejectionReasonEnum();
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

  fromJSON(_: any): LocalServicesBusinessRegistrationCheckRejectionReasonEnum {
    return {};
  },

  toJSON(_: LocalServicesBusinessRegistrationCheckRejectionReasonEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<LocalServicesBusinessRegistrationCheckRejectionReasonEnum>,
  ): LocalServicesBusinessRegistrationCheckRejectionReasonEnum {
    return LocalServicesBusinessRegistrationCheckRejectionReasonEnum.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<LocalServicesBusinessRegistrationCheckRejectionReasonEnum>,
  ): LocalServicesBusinessRegistrationCheckRejectionReasonEnum {
    const message = createBaseLocalServicesBusinessRegistrationCheckRejectionReasonEnum();
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
