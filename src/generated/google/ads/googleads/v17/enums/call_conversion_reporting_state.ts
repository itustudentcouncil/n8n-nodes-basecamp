// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/call_conversion_reporting_state.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Container for enum describing possible data types for call conversion
 * reporting state.
 */
export interface CallConversionReportingStateEnum {
}

/** Possible data types for a call conversion action state. */
export enum CallConversionReportingStateEnum_CallConversionReportingState {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** DISABLED - Call conversion action is disabled. */
  DISABLED = 2,
  /**
   * USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION - Call conversion action will use call conversion type set at the
   * account level.
   */
  USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION = 3,
  /**
   * USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION - Call conversion action will use call conversion type set at the resource
   * (call only ads/call extensions) level.
   */
  USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION = 4,
  UNRECOGNIZED = -1,
}

export function callConversionReportingStateEnum_CallConversionReportingStateFromJSON(
  object: any,
): CallConversionReportingStateEnum_CallConversionReportingState {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CallConversionReportingStateEnum_CallConversionReportingState.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CallConversionReportingStateEnum_CallConversionReportingState.UNKNOWN;
    case 2:
    case "DISABLED":
      return CallConversionReportingStateEnum_CallConversionReportingState.DISABLED;
    case 3:
    case "USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION":
      return CallConversionReportingStateEnum_CallConversionReportingState.USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION;
    case 4:
    case "USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION":
      return CallConversionReportingStateEnum_CallConversionReportingState.USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CallConversionReportingStateEnum_CallConversionReportingState.UNRECOGNIZED;
  }
}

export function callConversionReportingStateEnum_CallConversionReportingStateToJSON(
  object: CallConversionReportingStateEnum_CallConversionReportingState,
): string {
  switch (object) {
    case CallConversionReportingStateEnum_CallConversionReportingState.UNSPECIFIED:
      return "UNSPECIFIED";
    case CallConversionReportingStateEnum_CallConversionReportingState.UNKNOWN:
      return "UNKNOWN";
    case CallConversionReportingStateEnum_CallConversionReportingState.DISABLED:
      return "DISABLED";
    case CallConversionReportingStateEnum_CallConversionReportingState.USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION:
      return "USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION";
    case CallConversionReportingStateEnum_CallConversionReportingState.USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION:
      return "USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION";
    case CallConversionReportingStateEnum_CallConversionReportingState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCallConversionReportingStateEnum(): CallConversionReportingStateEnum {
  return {};
}

export const CallConversionReportingStateEnum: MessageFns<CallConversionReportingStateEnum> = {
  encode(_: CallConversionReportingStateEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CallConversionReportingStateEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallConversionReportingStateEnum();
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

  fromJSON(_: any): CallConversionReportingStateEnum {
    return {};
  },

  toJSON(_: CallConversionReportingStateEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CallConversionReportingStateEnum>): CallConversionReportingStateEnum {
    return CallConversionReportingStateEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CallConversionReportingStateEnum>): CallConversionReportingStateEnum {
    const message = createBaseCallConversionReportingStateEnum();
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
