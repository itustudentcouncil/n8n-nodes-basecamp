// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/campaign_primary_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing possible campaign primary status. */
export interface CampaignPrimaryStatusEnum {
}

/**
 * Enum describing the possible campaign primary status. Provides insight into
 * why a campaign is not serving or not serving optimally. Modification to the
 * campaign and its related entities might take a while to be reflected in
 * this status.
 */
export enum CampaignPrimaryStatusEnum_CampaignPrimaryStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ELIGIBLE - The campaign is eligible to serve. */
  ELIGIBLE = 2,
  /** PAUSED - The user-specified campaign status is paused. */
  PAUSED = 3,
  /** REMOVED - The user-specified campaign status is removed. */
  REMOVED = 4,
  /** ENDED - The user-specified time for this campaign to end has passed. */
  ENDED = 5,
  /** PENDING - The campaign may serve in the future. */
  PENDING = 6,
  /**
   * MISCONFIGURED - The campaign or its associated entities have incorrect user-specified
   * settings.
   */
  MISCONFIGURED = 7,
  /**
   * LIMITED - The campaign or its associated entities are limited by user-specified
   * settings.
   */
  LIMITED = 8,
  /**
   * LEARNING - The automated bidding system is adjusting to user-specified changes to
   * the campaign or associated entities.
   */
  LEARNING = 9,
  /** NOT_ELIGIBLE - The campaign is not eligible to serve. */
  NOT_ELIGIBLE = 10,
  UNRECOGNIZED = -1,
}

export function campaignPrimaryStatusEnum_CampaignPrimaryStatusFromJSON(
  object: any,
): CampaignPrimaryStatusEnum_CampaignPrimaryStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.UNKNOWN;
    case 2:
    case "ELIGIBLE":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.ELIGIBLE;
    case 3:
    case "PAUSED":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.PAUSED;
    case 4:
    case "REMOVED":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.REMOVED;
    case 5:
    case "ENDED":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.ENDED;
    case 6:
    case "PENDING":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.PENDING;
    case 7:
    case "MISCONFIGURED":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.MISCONFIGURED;
    case 8:
    case "LIMITED":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.LIMITED;
    case 9:
    case "LEARNING":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.LEARNING;
    case 10:
    case "NOT_ELIGIBLE":
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.NOT_ELIGIBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CampaignPrimaryStatusEnum_CampaignPrimaryStatus.UNRECOGNIZED;
  }
}

export function campaignPrimaryStatusEnum_CampaignPrimaryStatusToJSON(
  object: CampaignPrimaryStatusEnum_CampaignPrimaryStatus,
): string {
  switch (object) {
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.UNKNOWN:
      return "UNKNOWN";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.ELIGIBLE:
      return "ELIGIBLE";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.PAUSED:
      return "PAUSED";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.REMOVED:
      return "REMOVED";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.ENDED:
      return "ENDED";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.PENDING:
      return "PENDING";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.MISCONFIGURED:
      return "MISCONFIGURED";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.LIMITED:
      return "LIMITED";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.LEARNING:
      return "LEARNING";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.NOT_ELIGIBLE:
      return "NOT_ELIGIBLE";
    case CampaignPrimaryStatusEnum_CampaignPrimaryStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCampaignPrimaryStatusEnum(): CampaignPrimaryStatusEnum {
  return {};
}

export const CampaignPrimaryStatusEnum: MessageFns<CampaignPrimaryStatusEnum> = {
  encode(_: CampaignPrimaryStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignPrimaryStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignPrimaryStatusEnum();
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

  fromJSON(_: any): CampaignPrimaryStatusEnum {
    return {};
  },

  toJSON(_: CampaignPrimaryStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CampaignPrimaryStatusEnum>): CampaignPrimaryStatusEnum {
    return CampaignPrimaryStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CampaignPrimaryStatusEnum>): CampaignPrimaryStatusEnum {
    const message = createBaseCampaignPrimaryStatusEnum();
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
