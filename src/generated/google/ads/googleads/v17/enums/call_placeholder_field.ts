// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/call_placeholder_field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Values for Call placeholder fields. */
export interface CallPlaceholderFieldEnum {
}

/** Possible values for Call placeholder fields. */
export enum CallPlaceholderFieldEnum_CallPlaceholderField {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** PHONE_NUMBER - Data Type: STRING. The advertiser's phone number to append to the ad. */
  PHONE_NUMBER = 2,
  /**
   * COUNTRY_CODE - Data Type: STRING. Uppercase two-letter country code of the advertiser's
   * phone number.
   */
  COUNTRY_CODE = 3,
  /**
   * TRACKED - Data Type: BOOLEAN. Indicates whether call tracking is enabled. Default:
   * true.
   */
  TRACKED = 4,
  /**
   * CONVERSION_TYPE_ID - Data Type: INT64. The ID of an AdCallMetricsConversion object. This
   * object contains the phoneCallDurationfield which is the minimum duration
   * (in seconds) of a call to be considered a conversion.
   */
  CONVERSION_TYPE_ID = 5,
  /**
   * CONVERSION_REPORTING_STATE - Data Type: STRING. Indicates whether this call extension uses its own
   * call conversion setting or follows the account level setting.
   * Valid values are: USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION and
   * USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION.
   */
  CONVERSION_REPORTING_STATE = 6,
  UNRECOGNIZED = -1,
}

export function callPlaceholderFieldEnum_CallPlaceholderFieldFromJSON(
  object: any,
): CallPlaceholderFieldEnum_CallPlaceholderField {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CallPlaceholderFieldEnum_CallPlaceholderField.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CallPlaceholderFieldEnum_CallPlaceholderField.UNKNOWN;
    case 2:
    case "PHONE_NUMBER":
      return CallPlaceholderFieldEnum_CallPlaceholderField.PHONE_NUMBER;
    case 3:
    case "COUNTRY_CODE":
      return CallPlaceholderFieldEnum_CallPlaceholderField.COUNTRY_CODE;
    case 4:
    case "TRACKED":
      return CallPlaceholderFieldEnum_CallPlaceholderField.TRACKED;
    case 5:
    case "CONVERSION_TYPE_ID":
      return CallPlaceholderFieldEnum_CallPlaceholderField.CONVERSION_TYPE_ID;
    case 6:
    case "CONVERSION_REPORTING_STATE":
      return CallPlaceholderFieldEnum_CallPlaceholderField.CONVERSION_REPORTING_STATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CallPlaceholderFieldEnum_CallPlaceholderField.UNRECOGNIZED;
  }
}

export function callPlaceholderFieldEnum_CallPlaceholderFieldToJSON(
  object: CallPlaceholderFieldEnum_CallPlaceholderField,
): string {
  switch (object) {
    case CallPlaceholderFieldEnum_CallPlaceholderField.UNSPECIFIED:
      return "UNSPECIFIED";
    case CallPlaceholderFieldEnum_CallPlaceholderField.UNKNOWN:
      return "UNKNOWN";
    case CallPlaceholderFieldEnum_CallPlaceholderField.PHONE_NUMBER:
      return "PHONE_NUMBER";
    case CallPlaceholderFieldEnum_CallPlaceholderField.COUNTRY_CODE:
      return "COUNTRY_CODE";
    case CallPlaceholderFieldEnum_CallPlaceholderField.TRACKED:
      return "TRACKED";
    case CallPlaceholderFieldEnum_CallPlaceholderField.CONVERSION_TYPE_ID:
      return "CONVERSION_TYPE_ID";
    case CallPlaceholderFieldEnum_CallPlaceholderField.CONVERSION_REPORTING_STATE:
      return "CONVERSION_REPORTING_STATE";
    case CallPlaceholderFieldEnum_CallPlaceholderField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCallPlaceholderFieldEnum(): CallPlaceholderFieldEnum {
  return {};
}

export const CallPlaceholderFieldEnum: MessageFns<CallPlaceholderFieldEnum> = {
  encode(_: CallPlaceholderFieldEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CallPlaceholderFieldEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallPlaceholderFieldEnum();
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

  fromJSON(_: any): CallPlaceholderFieldEnum {
    return {};
  },

  toJSON(_: CallPlaceholderFieldEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CallPlaceholderFieldEnum>): CallPlaceholderFieldEnum {
    return CallPlaceholderFieldEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CallPlaceholderFieldEnum>): CallPlaceholderFieldEnum {
    const message = createBaseCallPlaceholderFieldEnum();
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
