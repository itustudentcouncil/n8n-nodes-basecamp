// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/summary_row_setting.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Indicates summary row setting in request parameter. */
export interface SummaryRowSettingEnum {
}

/** Enum describing return summary row settings. */
export enum SummaryRowSettingEnum_SummaryRowSetting {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Represent unknown values of return summary row. */
  UNKNOWN = 1,
  /** NO_SUMMARY_ROW - Do not return summary row. */
  NO_SUMMARY_ROW = 2,
  /**
   * SUMMARY_ROW_WITH_RESULTS - Return summary row along with results. The summary row will be returned
   * in the last batch alone (last batch will contain no results).
   */
  SUMMARY_ROW_WITH_RESULTS = 3,
  /** SUMMARY_ROW_ONLY - Return summary row only and return no results. */
  SUMMARY_ROW_ONLY = 4,
  UNRECOGNIZED = -1,
}

export function summaryRowSettingEnum_SummaryRowSettingFromJSON(object: any): SummaryRowSettingEnum_SummaryRowSetting {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SummaryRowSettingEnum_SummaryRowSetting.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return SummaryRowSettingEnum_SummaryRowSetting.UNKNOWN;
    case 2:
    case "NO_SUMMARY_ROW":
      return SummaryRowSettingEnum_SummaryRowSetting.NO_SUMMARY_ROW;
    case 3:
    case "SUMMARY_ROW_WITH_RESULTS":
      return SummaryRowSettingEnum_SummaryRowSetting.SUMMARY_ROW_WITH_RESULTS;
    case 4:
    case "SUMMARY_ROW_ONLY":
      return SummaryRowSettingEnum_SummaryRowSetting.SUMMARY_ROW_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SummaryRowSettingEnum_SummaryRowSetting.UNRECOGNIZED;
  }
}

export function summaryRowSettingEnum_SummaryRowSettingToJSON(object: SummaryRowSettingEnum_SummaryRowSetting): string {
  switch (object) {
    case SummaryRowSettingEnum_SummaryRowSetting.UNSPECIFIED:
      return "UNSPECIFIED";
    case SummaryRowSettingEnum_SummaryRowSetting.UNKNOWN:
      return "UNKNOWN";
    case SummaryRowSettingEnum_SummaryRowSetting.NO_SUMMARY_ROW:
      return "NO_SUMMARY_ROW";
    case SummaryRowSettingEnum_SummaryRowSetting.SUMMARY_ROW_WITH_RESULTS:
      return "SUMMARY_ROW_WITH_RESULTS";
    case SummaryRowSettingEnum_SummaryRowSetting.SUMMARY_ROW_ONLY:
      return "SUMMARY_ROW_ONLY";
    case SummaryRowSettingEnum_SummaryRowSetting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSummaryRowSettingEnum(): SummaryRowSettingEnum {
  return {};
}

export const SummaryRowSettingEnum: MessageFns<SummaryRowSettingEnum> = {
  encode(_: SummaryRowSettingEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SummaryRowSettingEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummaryRowSettingEnum();
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

  fromJSON(_: any): SummaryRowSettingEnum {
    return {};
  },

  toJSON(_: SummaryRowSettingEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SummaryRowSettingEnum>): SummaryRowSettingEnum {
    return SummaryRowSettingEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SummaryRowSettingEnum>): SummaryRowSettingEnum {
    const message = createBaseSummaryRowSettingEnum();
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