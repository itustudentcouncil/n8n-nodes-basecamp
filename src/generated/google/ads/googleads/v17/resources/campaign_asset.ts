// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/campaign_asset.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AssetLinkPrimaryStatusDetails } from "../common/asset_policy.js";
import {
  AssetFieldTypeEnum_AssetFieldType,
  assetFieldTypeEnum_AssetFieldTypeFromJSON,
  assetFieldTypeEnum_AssetFieldTypeToJSON,
} from "../enums/asset_field_type.js";
import {
  AssetLinkPrimaryStatusEnum_AssetLinkPrimaryStatus,
  assetLinkPrimaryStatusEnum_AssetLinkPrimaryStatusFromJSON,
  assetLinkPrimaryStatusEnum_AssetLinkPrimaryStatusToJSON,
} from "../enums/asset_link_primary_status.js";
import {
  AssetLinkPrimaryStatusReasonEnum_AssetLinkPrimaryStatusReason,
  assetLinkPrimaryStatusReasonEnum_AssetLinkPrimaryStatusReasonFromJSON,
  assetLinkPrimaryStatusReasonEnum_AssetLinkPrimaryStatusReasonToJSON,
} from "../enums/asset_link_primary_status_reason.js";
import {
  AssetLinkStatusEnum_AssetLinkStatus,
  assetLinkStatusEnum_AssetLinkStatusFromJSON,
  assetLinkStatusEnum_AssetLinkStatusToJSON,
} from "../enums/asset_link_status.js";
import {
  AssetSourceEnum_AssetSource,
  assetSourceEnum_AssetSourceFromJSON,
  assetSourceEnum_AssetSourceToJSON,
} from "../enums/asset_source.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** A link between a Campaign and an Asset. */
export interface CampaignAsset {
  /**
   * Immutable. The resource name of the campaign asset.
   * CampaignAsset resource names have the form:
   *
   * `customers/{customer_id}/campaignAssets/{campaign_id}~{asset_id}~{field_type}`
   */
  resourceName: string;
  /** Immutable. The campaign to which the asset is linked. */
  campaign?:
    | string
    | undefined;
  /** Immutable. The asset which is linked to the campaign. */
  asset?:
    | string
    | undefined;
  /**
   * Immutable. Role that the asset takes under the linked campaign.
   * Required.
   */
  fieldType: AssetFieldTypeEnum_AssetFieldType;
  /** Output only. Source of the campaign asset link. */
  source: AssetSourceEnum_AssetSource;
  /** Status of the campaign asset. */
  status: AssetLinkStatusEnum_AssetLinkStatus;
  /**
   * Output only. Provides the PrimaryStatus of this asset link.
   * Primary status is meant essentially to differentiate between the plain
   * "status" field, which has advertiser set values of enabled, paused, or
   * removed.  The primary status takes into account other signals (for assets
   * its mainly policy and quality approvals) to come up with a more
   * comprehensive status to indicate its serving state.
   */
  primaryStatus: AssetLinkPrimaryStatusEnum_AssetLinkPrimaryStatus;
  /**
   * Output only. Provides the details of the primary status and its associated
   * reasons.
   */
  primaryStatusDetails: AssetLinkPrimaryStatusDetails[];
  /**
   * Output only. Provides a list of reasons for why an asset is not serving or
   * not serving at full capacity.
   */
  primaryStatusReasons: AssetLinkPrimaryStatusReasonEnum_AssetLinkPrimaryStatusReason[];
}

function createBaseCampaignAsset(): CampaignAsset {
  return {
    resourceName: "",
    campaign: undefined,
    asset: undefined,
    fieldType: 0,
    source: 0,
    status: 0,
    primaryStatus: 0,
    primaryStatusDetails: [],
    primaryStatusReasons: [],
  };
}

export const CampaignAsset: MessageFns<CampaignAsset> = {
  encode(message: CampaignAsset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaign !== undefined) {
      writer.uint32(50).string(message.campaign);
    }
    if (message.asset !== undefined) {
      writer.uint32(58).string(message.asset);
    }
    if (message.fieldType !== 0) {
      writer.uint32(32).int32(message.fieldType);
    }
    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.primaryStatus !== 0) {
      writer.uint32(72).int32(message.primaryStatus);
    }
    for (const v of message.primaryStatusDetails) {
      AssetLinkPrimaryStatusDetails.encode(v!, writer.uint32(82).fork()).join();
    }
    writer.uint32(90).fork();
    for (const v of message.primaryStatusReasons) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignAsset();
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
          if (tag !== 58) {
            break;
          }

          message.asset = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.fieldType = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.primaryStatus = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.primaryStatusDetails.push(AssetLinkPrimaryStatusDetails.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag === 88) {
            message.primaryStatusReasons.push(reader.int32() as any);

            continue;
          }

          if (tag === 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.primaryStatusReasons.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CampaignAsset {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaign: isSet(object.campaign) ? globalThis.String(object.campaign) : undefined,
      asset: isSet(object.asset) ? globalThis.String(object.asset) : undefined,
      fieldType: isSet(object.fieldType) ? assetFieldTypeEnum_AssetFieldTypeFromJSON(object.fieldType) : 0,
      source: isSet(object.source) ? assetSourceEnum_AssetSourceFromJSON(object.source) : 0,
      status: isSet(object.status) ? assetLinkStatusEnum_AssetLinkStatusFromJSON(object.status) : 0,
      primaryStatus: isSet(object.primaryStatus)
        ? assetLinkPrimaryStatusEnum_AssetLinkPrimaryStatusFromJSON(object.primaryStatus)
        : 0,
      primaryStatusDetails: globalThis.Array.isArray(object?.primaryStatusDetails)
        ? object.primaryStatusDetails.map((e: any) => AssetLinkPrimaryStatusDetails.fromJSON(e))
        : [],
      primaryStatusReasons: globalThis.Array.isArray(object?.primaryStatusReasons)
        ? object.primaryStatusReasons.map((e: any) =>
          assetLinkPrimaryStatusReasonEnum_AssetLinkPrimaryStatusReasonFromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CampaignAsset): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaign !== undefined) {
      obj.campaign = message.campaign;
    }
    if (message.asset !== undefined) {
      obj.asset = message.asset;
    }
    if (message.fieldType !== 0) {
      obj.fieldType = assetFieldTypeEnum_AssetFieldTypeToJSON(message.fieldType);
    }
    if (message.source !== 0) {
      obj.source = assetSourceEnum_AssetSourceToJSON(message.source);
    }
    if (message.status !== 0) {
      obj.status = assetLinkStatusEnum_AssetLinkStatusToJSON(message.status);
    }
    if (message.primaryStatus !== 0) {
      obj.primaryStatus = assetLinkPrimaryStatusEnum_AssetLinkPrimaryStatusToJSON(message.primaryStatus);
    }
    if (message.primaryStatusDetails?.length) {
      obj.primaryStatusDetails = message.primaryStatusDetails.map((e) => AssetLinkPrimaryStatusDetails.toJSON(e));
    }
    if (message.primaryStatusReasons?.length) {
      obj.primaryStatusReasons = message.primaryStatusReasons.map((e) =>
        assetLinkPrimaryStatusReasonEnum_AssetLinkPrimaryStatusReasonToJSON(e)
      );
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignAsset>): CampaignAsset {
    return CampaignAsset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignAsset>): CampaignAsset {
    const message = createBaseCampaignAsset();
    message.resourceName = object.resourceName ?? "";
    message.campaign = object.campaign ?? undefined;
    message.asset = object.asset ?? undefined;
    message.fieldType = object.fieldType ?? 0;
    message.source = object.source ?? 0;
    message.status = object.status ?? 0;
    message.primaryStatus = object.primaryStatus ?? 0;
    message.primaryStatusDetails =
      object.primaryStatusDetails?.map((e) => AssetLinkPrimaryStatusDetails.fromPartial(e)) || [];
    message.primaryStatusReasons = object.primaryStatusReasons?.map((e) => e) || [];
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