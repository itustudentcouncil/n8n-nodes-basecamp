// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/campaign_draft.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  CampaignDraftStatusEnum_CampaignDraftStatus,
  campaignDraftStatusEnum_CampaignDraftStatusFromJSON,
  campaignDraftStatusEnum_CampaignDraftStatusToJSON,
} from "../enums/campaign_draft_status.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** A campaign draft. */
export interface CampaignDraft {
  /**
   * Immutable. The resource name of the campaign draft.
   * Campaign draft resource names have the form:
   *
   * `customers/{customer_id}/campaignDrafts/{base_campaign_id}~{draft_id}`
   */
  resourceName: string;
  /**
   * Output only. The ID of the draft.
   *
   * This field is read-only.
   */
  draftId?:
    | Long
    | undefined;
  /** Immutable. The base campaign to which the draft belongs. */
  baseCampaign?:
    | string
    | undefined;
  /**
   * The name of the campaign draft.
   *
   * This field is required and should not be empty when creating new
   * campaign drafts.
   *
   * It must not contain any null (code point 0x0), NL line feed
   * (code point 0xA) or carriage return (code point 0xD) characters.
   */
  name?:
    | string
    | undefined;
  /**
   * Output only. Resource name of the Campaign that results from overlaying the
   * draft changes onto the base campaign.
   *
   * This field is read-only.
   */
  draftCampaign?:
    | string
    | undefined;
  /**
   * Output only. The status of the campaign draft. This field is read-only.
   *
   * When a new campaign draft is added, the status defaults to PROPOSED.
   */
  status: CampaignDraftStatusEnum_CampaignDraftStatus;
  /**
   * Output only. Whether there is an experiment based on this draft currently
   * serving.
   */
  hasExperimentRunning?:
    | boolean
    | undefined;
  /**
   * Output only. The resource name of the long-running operation that can be
   * used to poll for completion of draft promotion. This is only set if the
   * draft promotion is in progress or finished.
   */
  longRunningOperation?: string | undefined;
}

function createBaseCampaignDraft(): CampaignDraft {
  return {
    resourceName: "",
    draftId: undefined,
    baseCampaign: undefined,
    name: undefined,
    draftCampaign: undefined,
    status: 0,
    hasExperimentRunning: undefined,
    longRunningOperation: undefined,
  };
}

export const CampaignDraft: MessageFns<CampaignDraft> = {
  encode(message: CampaignDraft, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.draftId !== undefined) {
      writer.uint32(72).int64(message.draftId.toString());
    }
    if (message.baseCampaign !== undefined) {
      writer.uint32(82).string(message.baseCampaign);
    }
    if (message.name !== undefined) {
      writer.uint32(90).string(message.name);
    }
    if (message.draftCampaign !== undefined) {
      writer.uint32(98).string(message.draftCampaign);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.hasExperimentRunning !== undefined) {
      writer.uint32(104).bool(message.hasExperimentRunning);
    }
    if (message.longRunningOperation !== undefined) {
      writer.uint32(114).string(message.longRunningOperation);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignDraft {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignDraft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.draftId = Long.fromString(reader.int64().toString());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.baseCampaign = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.name = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.draftCampaign = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.hasExperimentRunning = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.longRunningOperation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CampaignDraft {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      draftId: isSet(object.draftId) ? Long.fromValue(object.draftId) : undefined,
      baseCampaign: isSet(object.baseCampaign) ? globalThis.String(object.baseCampaign) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      draftCampaign: isSet(object.draftCampaign) ? globalThis.String(object.draftCampaign) : undefined,
      status: isSet(object.status) ? campaignDraftStatusEnum_CampaignDraftStatusFromJSON(object.status) : 0,
      hasExperimentRunning: isSet(object.hasExperimentRunning)
        ? globalThis.Boolean(object.hasExperimentRunning)
        : undefined,
      longRunningOperation: isSet(object.longRunningOperation)
        ? globalThis.String(object.longRunningOperation)
        : undefined,
    };
  },

  toJSON(message: CampaignDraft): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.draftId !== undefined) {
      obj.draftId = (message.draftId || Long.ZERO).toString();
    }
    if (message.baseCampaign !== undefined) {
      obj.baseCampaign = message.baseCampaign;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.draftCampaign !== undefined) {
      obj.draftCampaign = message.draftCampaign;
    }
    if (message.status !== 0) {
      obj.status = campaignDraftStatusEnum_CampaignDraftStatusToJSON(message.status);
    }
    if (message.hasExperimentRunning !== undefined) {
      obj.hasExperimentRunning = message.hasExperimentRunning;
    }
    if (message.longRunningOperation !== undefined) {
      obj.longRunningOperation = message.longRunningOperation;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignDraft>): CampaignDraft {
    return CampaignDraft.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignDraft>): CampaignDraft {
    const message = createBaseCampaignDraft();
    message.resourceName = object.resourceName ?? "";
    message.draftId = (object.draftId !== undefined && object.draftId !== null)
      ? Long.fromValue(object.draftId)
      : undefined;
    message.baseCampaign = object.baseCampaign ?? undefined;
    message.name = object.name ?? undefined;
    message.draftCampaign = object.draftCampaign ?? undefined;
    message.status = object.status ?? 0;
    message.hasExperimentRunning = object.hasExperimentRunning ?? undefined;
    message.longRunningOperation = object.longRunningOperation ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}