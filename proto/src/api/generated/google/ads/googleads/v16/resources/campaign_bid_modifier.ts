// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/campaign_bid_modifier.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { InteractionTypeInfo } from "../common/criteria.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** Represents a bid-modifiable only criterion at the campaign level. */
export interface CampaignBidModifier {
  /**
   * Immutable. The resource name of the campaign bid modifier.
   * Campaign bid modifier resource names have the form:
   *
   * `customers/{customer_id}/campaignBidModifiers/{campaign_id}~{criterion_id}`
   */
  resourceName: string;
  /** Output only. The campaign to which this criterion belongs. */
  campaign?:
    | string
    | undefined;
  /**
   * Output only. The ID of the criterion to bid modify.
   *
   * This field is ignored for mutates.
   */
  criterionId?:
    | Long
    | undefined;
  /** The modifier for the bid when the criterion matches. */
  bidModifier?:
    | number
    | undefined;
  /**
   * Immutable. Criterion for interaction type. Only supported for search
   * campaigns.
   */
  interactionType?: InteractionTypeInfo | undefined;
}

function createBaseCampaignBidModifier(): CampaignBidModifier {
  return {
    resourceName: "",
    campaign: undefined,
    criterionId: undefined,
    bidModifier: undefined,
    interactionType: undefined,
  };
}

export const CampaignBidModifier: MessageFns<CampaignBidModifier> = {
  encode(message: CampaignBidModifier, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaign !== undefined) {
      writer.uint32(50).string(message.campaign);
    }
    if (message.criterionId !== undefined) {
      writer.uint32(56).int64(message.criterionId.toString());
    }
    if (message.bidModifier !== undefined) {
      writer.uint32(65).double(message.bidModifier);
    }
    if (message.interactionType !== undefined) {
      InteractionTypeInfo.encode(message.interactionType, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignBidModifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignBidModifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.campaign = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.criterionId = Long.fromString(reader.int64().toString());
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.bidModifier = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.interactionType = InteractionTypeInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CampaignBidModifier {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaign: isSet(object.campaign) ? globalThis.String(object.campaign) : undefined,
      criterionId: isSet(object.criterionId) ? Long.fromValue(object.criterionId) : undefined,
      bidModifier: isSet(object.bidModifier) ? globalThis.Number(object.bidModifier) : undefined,
      interactionType: isSet(object.interactionType) ? InteractionTypeInfo.fromJSON(object.interactionType) : undefined,
    };
  },

  toJSON(message: CampaignBidModifier): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaign !== undefined) {
      obj.campaign = message.campaign;
    }
    if (message.criterionId !== undefined) {
      obj.criterionId = (message.criterionId || Long.ZERO).toString();
    }
    if (message.bidModifier !== undefined) {
      obj.bidModifier = message.bidModifier;
    }
    if (message.interactionType !== undefined) {
      obj.interactionType = InteractionTypeInfo.toJSON(message.interactionType);
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignBidModifier>): CampaignBidModifier {
    return CampaignBidModifier.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignBidModifier>): CampaignBidModifier {
    const message = createBaseCampaignBidModifier();
    message.resourceName = object.resourceName ?? "";
    message.campaign = object.campaign ?? undefined;
    message.criterionId = (object.criterionId !== undefined && object.criterionId !== null)
      ? Long.fromValue(object.criterionId)
      : undefined;
    message.bidModifier = object.bidModifier ?? undefined;
    message.interactionType = (object.interactionType !== undefined && object.interactionType !== null)
      ? InteractionTypeInfo.fromPartial(object.interactionType)
      : undefined;
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