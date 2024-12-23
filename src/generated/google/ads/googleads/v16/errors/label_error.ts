// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/label_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible label errors. */
export interface LabelErrorEnum {
}

/** Enum describing possible label errors. */
export enum LabelErrorEnum_LabelError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** CANNOT_APPLY_INACTIVE_LABEL - An inactive label cannot be applied. */
  CANNOT_APPLY_INACTIVE_LABEL = 2,
  /** CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION - A label cannot be applied to a disabled ad group criterion. */
  CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION = 3,
  /** CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION - A label cannot be applied to a negative ad group criterion. */
  CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION = 4,
  /** EXCEEDED_LABEL_LIMIT_PER_TYPE - Cannot apply more than 50 labels per resource. */
  EXCEEDED_LABEL_LIMIT_PER_TYPE = 5,
  /**
   * INVALID_RESOURCE_FOR_MANAGER_LABEL - Labels from a manager account cannot be applied to campaign, ad group,
   * ad group ad, or ad group criterion resources.
   */
  INVALID_RESOURCE_FOR_MANAGER_LABEL = 6,
  /** DUPLICATE_NAME - Label names must be unique. */
  DUPLICATE_NAME = 7,
  /** INVALID_LABEL_NAME - Label names cannot be empty. */
  INVALID_LABEL_NAME = 8,
  /** CANNOT_ATTACH_LABEL_TO_DRAFT - Labels cannot be applied to a draft. */
  CANNOT_ATTACH_LABEL_TO_DRAFT = 9,
  /**
   * CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER - Labels not from a manager account cannot be applied to the customer
   * resource.
   */
  CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER = 10,
  UNRECOGNIZED = -1,
}

export function labelErrorEnum_LabelErrorFromJSON(object: any): LabelErrorEnum_LabelError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return LabelErrorEnum_LabelError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return LabelErrorEnum_LabelError.UNKNOWN;
    case 2:
    case "CANNOT_APPLY_INACTIVE_LABEL":
      return LabelErrorEnum_LabelError.CANNOT_APPLY_INACTIVE_LABEL;
    case 3:
    case "CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION":
      return LabelErrorEnum_LabelError.CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION;
    case 4:
    case "CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION":
      return LabelErrorEnum_LabelError.CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION;
    case 5:
    case "EXCEEDED_LABEL_LIMIT_PER_TYPE":
      return LabelErrorEnum_LabelError.EXCEEDED_LABEL_LIMIT_PER_TYPE;
    case 6:
    case "INVALID_RESOURCE_FOR_MANAGER_LABEL":
      return LabelErrorEnum_LabelError.INVALID_RESOURCE_FOR_MANAGER_LABEL;
    case 7:
    case "DUPLICATE_NAME":
      return LabelErrorEnum_LabelError.DUPLICATE_NAME;
    case 8:
    case "INVALID_LABEL_NAME":
      return LabelErrorEnum_LabelError.INVALID_LABEL_NAME;
    case 9:
    case "CANNOT_ATTACH_LABEL_TO_DRAFT":
      return LabelErrorEnum_LabelError.CANNOT_ATTACH_LABEL_TO_DRAFT;
    case 10:
    case "CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER":
      return LabelErrorEnum_LabelError.CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LabelErrorEnum_LabelError.UNRECOGNIZED;
  }
}

export function labelErrorEnum_LabelErrorToJSON(object: LabelErrorEnum_LabelError): string {
  switch (object) {
    case LabelErrorEnum_LabelError.UNSPECIFIED:
      return "UNSPECIFIED";
    case LabelErrorEnum_LabelError.UNKNOWN:
      return "UNKNOWN";
    case LabelErrorEnum_LabelError.CANNOT_APPLY_INACTIVE_LABEL:
      return "CANNOT_APPLY_INACTIVE_LABEL";
    case LabelErrorEnum_LabelError.CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION:
      return "CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION";
    case LabelErrorEnum_LabelError.CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION:
      return "CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION";
    case LabelErrorEnum_LabelError.EXCEEDED_LABEL_LIMIT_PER_TYPE:
      return "EXCEEDED_LABEL_LIMIT_PER_TYPE";
    case LabelErrorEnum_LabelError.INVALID_RESOURCE_FOR_MANAGER_LABEL:
      return "INVALID_RESOURCE_FOR_MANAGER_LABEL";
    case LabelErrorEnum_LabelError.DUPLICATE_NAME:
      return "DUPLICATE_NAME";
    case LabelErrorEnum_LabelError.INVALID_LABEL_NAME:
      return "INVALID_LABEL_NAME";
    case LabelErrorEnum_LabelError.CANNOT_ATTACH_LABEL_TO_DRAFT:
      return "CANNOT_ATTACH_LABEL_TO_DRAFT";
    case LabelErrorEnum_LabelError.CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER:
      return "CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER";
    case LabelErrorEnum_LabelError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLabelErrorEnum(): LabelErrorEnum {
  return {};
}

export const LabelErrorEnum: MessageFns<LabelErrorEnum> = {
  encode(_: LabelErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LabelErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelErrorEnum();
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

  fromJSON(_: any): LabelErrorEnum {
    return {};
  },

  toJSON(_: LabelErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LabelErrorEnum>): LabelErrorEnum {
    return LabelErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<LabelErrorEnum>): LabelErrorEnum {
    const message = createBaseLabelErrorEnum();
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
