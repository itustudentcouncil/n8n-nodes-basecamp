// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/performance_max_upgrade_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Performance Max Upgrade status for campaign. */
export interface PerformanceMaxUpgradeStatusEnum {
}

/** Performance Max Upgrade status enum for campaign. */
export enum PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** UPGRADE_IN_PROGRESS - The upgrade to a Performance Max campaign is in progress. */
  UPGRADE_IN_PROGRESS = 3,
  /** UPGRADE_COMPLETE - The upgrade to a Performance Max campaign is complete. */
  UPGRADE_COMPLETE = 4,
  /**
   * UPGRADE_FAILED - The upgrade to a Performance Max campaign failed.
   * The campaign will still serve as it was before upgrade was attempted.
   */
  UPGRADE_FAILED = 5,
  /** UPGRADE_ELIGIBLE - The campaign is eligible for upgrade to a Performance Max campaign. */
  UPGRADE_ELIGIBLE = 6,
  UNRECOGNIZED = -1,
}

export function performanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatusFromJSON(
  object: any,
): PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UNKNOWN;
    case 3:
    case "UPGRADE_IN_PROGRESS":
      return PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_IN_PROGRESS;
    case 4:
    case "UPGRADE_COMPLETE":
      return PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_COMPLETE;
    case 5:
    case "UPGRADE_FAILED":
      return PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_FAILED;
    case 6:
    case "UPGRADE_ELIGIBLE":
      return PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_ELIGIBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UNRECOGNIZED;
  }
}

export function performanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatusToJSON(
  object: PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus,
): string {
  switch (object) {
    case PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UNKNOWN:
      return "UNKNOWN";
    case PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_IN_PROGRESS:
      return "UPGRADE_IN_PROGRESS";
    case PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_COMPLETE:
      return "UPGRADE_COMPLETE";
    case PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_FAILED:
      return "UPGRADE_FAILED";
    case PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UPGRADE_ELIGIBLE:
      return "UPGRADE_ELIGIBLE";
    case PerformanceMaxUpgradeStatusEnum_PerformanceMaxUpgradeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePerformanceMaxUpgradeStatusEnum(): PerformanceMaxUpgradeStatusEnum {
  return {};
}

export const PerformanceMaxUpgradeStatusEnum: MessageFns<PerformanceMaxUpgradeStatusEnum> = {
  encode(_: PerformanceMaxUpgradeStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PerformanceMaxUpgradeStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerformanceMaxUpgradeStatusEnum();
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

  fromJSON(_: any): PerformanceMaxUpgradeStatusEnum {
    return {};
  },

  toJSON(_: PerformanceMaxUpgradeStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PerformanceMaxUpgradeStatusEnum>): PerformanceMaxUpgradeStatusEnum {
    return PerformanceMaxUpgradeStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PerformanceMaxUpgradeStatusEnum>): PerformanceMaxUpgradeStatusEnum {
    const message = createBasePerformanceMaxUpgradeStatusEnum();
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