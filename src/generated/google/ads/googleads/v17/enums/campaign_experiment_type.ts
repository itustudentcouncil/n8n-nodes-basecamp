// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/campaign_experiment_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing campaign experiment type. */
export interface CampaignExperimentTypeEnum {
}

/**
 * Indicates if this campaign is a normal campaign,
 * a draft campaign, or an experiment campaign.
 */
export enum CampaignExperimentTypeEnum_CampaignExperimentType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** BASE - This is a regular campaign. */
  BASE = 2,
  /**
   * DRAFT - This is a draft version of a campaign.
   * It has some modifications from a base campaign,
   * but it does not serve or accrue metrics.
   */
  DRAFT = 3,
  /**
   * EXPERIMENT - This is an experiment version of a campaign.
   * It has some modifications from a base campaign,
   * and a percentage of traffic is being diverted
   * from the BASE campaign to this experiment campaign.
   */
  EXPERIMENT = 4,
  UNRECOGNIZED = -1,
}

export function campaignExperimentTypeEnum_CampaignExperimentTypeFromJSON(
  object: any,
): CampaignExperimentTypeEnum_CampaignExperimentType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CampaignExperimentTypeEnum_CampaignExperimentType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CampaignExperimentTypeEnum_CampaignExperimentType.UNKNOWN;
    case 2:
    case "BASE":
      return CampaignExperimentTypeEnum_CampaignExperimentType.BASE;
    case 3:
    case "DRAFT":
      return CampaignExperimentTypeEnum_CampaignExperimentType.DRAFT;
    case 4:
    case "EXPERIMENT":
      return CampaignExperimentTypeEnum_CampaignExperimentType.EXPERIMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CampaignExperimentTypeEnum_CampaignExperimentType.UNRECOGNIZED;
  }
}

export function campaignExperimentTypeEnum_CampaignExperimentTypeToJSON(
  object: CampaignExperimentTypeEnum_CampaignExperimentType,
): string {
  switch (object) {
    case CampaignExperimentTypeEnum_CampaignExperimentType.UNSPECIFIED:
      return "UNSPECIFIED";
    case CampaignExperimentTypeEnum_CampaignExperimentType.UNKNOWN:
      return "UNKNOWN";
    case CampaignExperimentTypeEnum_CampaignExperimentType.BASE:
      return "BASE";
    case CampaignExperimentTypeEnum_CampaignExperimentType.DRAFT:
      return "DRAFT";
    case CampaignExperimentTypeEnum_CampaignExperimentType.EXPERIMENT:
      return "EXPERIMENT";
    case CampaignExperimentTypeEnum_CampaignExperimentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCampaignExperimentTypeEnum(): CampaignExperimentTypeEnum {
  return {};
}

export const CampaignExperimentTypeEnum: MessageFns<CampaignExperimentTypeEnum> = {
  encode(_: CampaignExperimentTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignExperimentTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignExperimentTypeEnum();
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

  fromJSON(_: any): CampaignExperimentTypeEnum {
    return {};
  },

  toJSON(_: CampaignExperimentTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CampaignExperimentTypeEnum>): CampaignExperimentTypeEnum {
    return CampaignExperimentTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CampaignExperimentTypeEnum>): CampaignExperimentTypeEnum {
    const message = createBaseCampaignExperimentTypeEnum();
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
