// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/local_services_insurance_rejection_reason.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing the rejection reason of a local services
 * insurance verification artifact.
 */
export interface LocalServicesInsuranceRejectionReasonEnum {
}

/**
 * Enums describing possible rejection reasons of a local services insurance
 * verification artifact.
 */
export enum LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** BUSINESS_NAME_MISMATCH - Business name doesn't match business name for the Local Services Ad. */
  BUSINESS_NAME_MISMATCH = 2,
  /**
   * INSURANCE_AMOUNT_INSUFFICIENT - Insurance amount doesn't meet requirement listed in the legal summaries
   * documentation for that geographic + category ID combination.
   */
  INSURANCE_AMOUNT_INSUFFICIENT = 3,
  /** EXPIRED - Insurance document is expired. */
  EXPIRED = 4,
  /** NO_SIGNATURE - Insurance document is missing a signature. */
  NO_SIGNATURE = 5,
  /** NO_POLICY_NUMBER - Insurance document is missing a policy number. */
  NO_POLICY_NUMBER = 6,
  /**
   * NO_COMMERCIAL_GENERAL_LIABILITY - Commercial General Liability(CGL) box is not marked in the insurance
   * document.
   */
  NO_COMMERCIAL_GENERAL_LIABILITY = 7,
  /** EDITABLE_FORMAT - Insurance document is in an editable format. */
  EDITABLE_FORMAT = 8,
  /** CATEGORY_MISMATCH - Insurance document does not cover insurance for a particular category. */
  CATEGORY_MISMATCH = 9,
  /** MISSING_EXPIRATION_DATE - Insurance document is missing an expiration date. */
  MISSING_EXPIRATION_DATE = 10,
  /** POOR_QUALITY - Insurance document is poor quality - blurry images, illegible, etc... */
  POOR_QUALITY = 11,
  /** POTENTIALLY_EDITED - Insurance document is suspected of being edited. */
  POTENTIALLY_EDITED = 12,
  /**
   * WRONG_DOCUMENT_TYPE - Insurance document not accepted. For example, documents of insurance
   * proposals, but missing coverages are not accepted.
   */
  WRONG_DOCUMENT_TYPE = 13,
  /** NON_FINAL - Insurance document is not final. */
  NON_FINAL = 14,
  /** OTHER - Insurance document has another flaw not listed explicitly. */
  OTHER = 15,
  UNRECOGNIZED = -1,
}

export function localServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReasonFromJSON(
  object: any,
): LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.UNKNOWN;
    case 2:
    case "BUSINESS_NAME_MISMATCH":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.BUSINESS_NAME_MISMATCH;
    case 3:
    case "INSURANCE_AMOUNT_INSUFFICIENT":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason
        .INSURANCE_AMOUNT_INSUFFICIENT;
    case 4:
    case "EXPIRED":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.EXPIRED;
    case 5:
    case "NO_SIGNATURE":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.NO_SIGNATURE;
    case 6:
    case "NO_POLICY_NUMBER":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.NO_POLICY_NUMBER;
    case 7:
    case "NO_COMMERCIAL_GENERAL_LIABILITY":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason
        .NO_COMMERCIAL_GENERAL_LIABILITY;
    case 8:
    case "EDITABLE_FORMAT":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.EDITABLE_FORMAT;
    case 9:
    case "CATEGORY_MISMATCH":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.CATEGORY_MISMATCH;
    case 10:
    case "MISSING_EXPIRATION_DATE":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.MISSING_EXPIRATION_DATE;
    case 11:
    case "POOR_QUALITY":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.POOR_QUALITY;
    case 12:
    case "POTENTIALLY_EDITED":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.POTENTIALLY_EDITED;
    case 13:
    case "WRONG_DOCUMENT_TYPE":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.WRONG_DOCUMENT_TYPE;
    case 14:
    case "NON_FINAL":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.NON_FINAL;
    case 15:
    case "OTHER":
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.UNRECOGNIZED;
  }
}

export function localServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReasonToJSON(
  object: LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason,
): string {
  switch (object) {
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.UNKNOWN:
      return "UNKNOWN";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.BUSINESS_NAME_MISMATCH:
      return "BUSINESS_NAME_MISMATCH";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.INSURANCE_AMOUNT_INSUFFICIENT:
      return "INSURANCE_AMOUNT_INSUFFICIENT";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.EXPIRED:
      return "EXPIRED";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.NO_SIGNATURE:
      return "NO_SIGNATURE";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.NO_POLICY_NUMBER:
      return "NO_POLICY_NUMBER";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason
      .NO_COMMERCIAL_GENERAL_LIABILITY:
      return "NO_COMMERCIAL_GENERAL_LIABILITY";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.EDITABLE_FORMAT:
      return "EDITABLE_FORMAT";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.CATEGORY_MISMATCH:
      return "CATEGORY_MISMATCH";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.MISSING_EXPIRATION_DATE:
      return "MISSING_EXPIRATION_DATE";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.POOR_QUALITY:
      return "POOR_QUALITY";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.POTENTIALLY_EDITED:
      return "POTENTIALLY_EDITED";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.WRONG_DOCUMENT_TYPE:
      return "WRONG_DOCUMENT_TYPE";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.NON_FINAL:
      return "NON_FINAL";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.OTHER:
      return "OTHER";
    case LocalServicesInsuranceRejectionReasonEnum_LocalServicesInsuranceRejectionReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLocalServicesInsuranceRejectionReasonEnum(): LocalServicesInsuranceRejectionReasonEnum {
  return {};
}

export const LocalServicesInsuranceRejectionReasonEnum: MessageFns<LocalServicesInsuranceRejectionReasonEnum> = {
  encode(_: LocalServicesInsuranceRejectionReasonEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocalServicesInsuranceRejectionReasonEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalServicesInsuranceRejectionReasonEnum();
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

  fromJSON(_: any): LocalServicesInsuranceRejectionReasonEnum {
    return {};
  },

  toJSON(_: LocalServicesInsuranceRejectionReasonEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LocalServicesInsuranceRejectionReasonEnum>): LocalServicesInsuranceRejectionReasonEnum {
    return LocalServicesInsuranceRejectionReasonEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<LocalServicesInsuranceRejectionReasonEnum>): LocalServicesInsuranceRejectionReasonEnum {
    const message = createBaseLocalServicesInsuranceRejectionReasonEnum();
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