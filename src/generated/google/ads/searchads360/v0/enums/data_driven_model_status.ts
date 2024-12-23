// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/enums/data_driven_model_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.enums";

/** Container for enum indicating data driven model status. */
export interface DataDrivenModelStatusEnum {
}

/** Enumerates data driven model statuses. */
export enum DataDrivenModelStatusEnum_DataDrivenModelStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** AVAILABLE - The data driven model is available. */
  AVAILABLE = 2,
  /**
   * STALE - The data driven model is stale. It hasn't been updated for at least 7
   * days. It is still being used, but will become expired if it does not get
   * updated for 30 days.
   */
  STALE = 3,
  /**
   * EXPIRED - The data driven model expired. It hasn't been updated for at least 30
   * days and cannot be used. Most commonly this is because there hasn't been
   * the required number of events in a recent 30-day period.
   */
  EXPIRED = 4,
  /**
   * NEVER_GENERATED - The data driven model has never been generated. Most commonly this is
   * because there has never been the required number of events in any 30-day
   * period.
   */
  NEVER_GENERATED = 5,
  UNRECOGNIZED = -1,
}

export function dataDrivenModelStatusEnum_DataDrivenModelStatusFromJSON(
  object: any,
): DataDrivenModelStatusEnum_DataDrivenModelStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return DataDrivenModelStatusEnum_DataDrivenModelStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return DataDrivenModelStatusEnum_DataDrivenModelStatus.UNKNOWN;
    case 2:
    case "AVAILABLE":
      return DataDrivenModelStatusEnum_DataDrivenModelStatus.AVAILABLE;
    case 3:
    case "STALE":
      return DataDrivenModelStatusEnum_DataDrivenModelStatus.STALE;
    case 4:
    case "EXPIRED":
      return DataDrivenModelStatusEnum_DataDrivenModelStatus.EXPIRED;
    case 5:
    case "NEVER_GENERATED":
      return DataDrivenModelStatusEnum_DataDrivenModelStatus.NEVER_GENERATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataDrivenModelStatusEnum_DataDrivenModelStatus.UNRECOGNIZED;
  }
}

export function dataDrivenModelStatusEnum_DataDrivenModelStatusToJSON(
  object: DataDrivenModelStatusEnum_DataDrivenModelStatus,
): string {
  switch (object) {
    case DataDrivenModelStatusEnum_DataDrivenModelStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case DataDrivenModelStatusEnum_DataDrivenModelStatus.UNKNOWN:
      return "UNKNOWN";
    case DataDrivenModelStatusEnum_DataDrivenModelStatus.AVAILABLE:
      return "AVAILABLE";
    case DataDrivenModelStatusEnum_DataDrivenModelStatus.STALE:
      return "STALE";
    case DataDrivenModelStatusEnum_DataDrivenModelStatus.EXPIRED:
      return "EXPIRED";
    case DataDrivenModelStatusEnum_DataDrivenModelStatus.NEVER_GENERATED:
      return "NEVER_GENERATED";
    case DataDrivenModelStatusEnum_DataDrivenModelStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDataDrivenModelStatusEnum(): DataDrivenModelStatusEnum {
  return {};
}

export const DataDrivenModelStatusEnum: MessageFns<DataDrivenModelStatusEnum> = {
  encode(_: DataDrivenModelStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DataDrivenModelStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataDrivenModelStatusEnum();
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

  fromJSON(_: any): DataDrivenModelStatusEnum {
    return {};
  },

  toJSON(_: DataDrivenModelStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DataDrivenModelStatusEnum>): DataDrivenModelStatusEnum {
    return DataDrivenModelStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DataDrivenModelStatusEnum>): DataDrivenModelStatusEnum {
    const message = createBaseDataDrivenModelStatusEnum();
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
