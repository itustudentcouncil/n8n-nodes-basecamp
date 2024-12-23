// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/campaign_extension_setting.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  ExtensionSettingDeviceEnum_ExtensionSettingDevice,
  extensionSettingDeviceEnum_ExtensionSettingDeviceFromJSON,
  extensionSettingDeviceEnum_ExtensionSettingDeviceToJSON,
} from "../enums/extension_setting_device.js";
import {
  ExtensionTypeEnum_ExtensionType,
  extensionTypeEnum_ExtensionTypeFromJSON,
  extensionTypeEnum_ExtensionTypeToJSON,
} from "../enums/extension_type.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** A campaign extension setting. */
export interface CampaignExtensionSetting {
  /**
   * Immutable. The resource name of the campaign extension setting.
   * CampaignExtensionSetting resource names have the form:
   *
   * `customers/{customer_id}/campaignExtensionSettings/{campaign_id}~{extension_type}`
   */
  resourceName: string;
  /** Immutable. The extension type of the customer extension setting. */
  extensionType: ExtensionTypeEnum_ExtensionType;
  /**
   * Immutable. The resource name of the campaign. The linked extension feed
   * items will serve under this campaign. Campaign resource names have the
   * form:
   *
   * `customers/{customer_id}/campaigns/{campaign_id}`
   */
  campaign?:
    | string
    | undefined;
  /**
   * The resource names of the extension feed items to serve under the campaign.
   * ExtensionFeedItem resource names have the form:
   *
   * `customers/{customer_id}/extensionFeedItems/{feed_item_id}`
   */
  extensionFeedItems: string[];
  /** The device for which the extensions will serve. Optional. */
  device: ExtensionSettingDeviceEnum_ExtensionSettingDevice;
}

function createBaseCampaignExtensionSetting(): CampaignExtensionSetting {
  return { resourceName: "", extensionType: 0, campaign: undefined, extensionFeedItems: [], device: 0 };
}

export const CampaignExtensionSetting: MessageFns<CampaignExtensionSetting> = {
  encode(message: CampaignExtensionSetting, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.extensionType !== 0) {
      writer.uint32(16).int32(message.extensionType);
    }
    if (message.campaign !== undefined) {
      writer.uint32(50).string(message.campaign);
    }
    for (const v of message.extensionFeedItems) {
      writer.uint32(58).string(v!);
    }
    if (message.device !== 0) {
      writer.uint32(40).int32(message.device);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignExtensionSetting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignExtensionSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.extensionType = reader.int32() as any;
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

          message.extensionFeedItems.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.device = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CampaignExtensionSetting {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      extensionType: isSet(object.extensionType) ? extensionTypeEnum_ExtensionTypeFromJSON(object.extensionType) : 0,
      campaign: isSet(object.campaign) ? globalThis.String(object.campaign) : undefined,
      extensionFeedItems: globalThis.Array.isArray(object?.extensionFeedItems)
        ? object.extensionFeedItems.map((e: any) => globalThis.String(e))
        : [],
      device: isSet(object.device) ? extensionSettingDeviceEnum_ExtensionSettingDeviceFromJSON(object.device) : 0,
    };
  },

  toJSON(message: CampaignExtensionSetting): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.extensionType !== 0) {
      obj.extensionType = extensionTypeEnum_ExtensionTypeToJSON(message.extensionType);
    }
    if (message.campaign !== undefined) {
      obj.campaign = message.campaign;
    }
    if (message.extensionFeedItems?.length) {
      obj.extensionFeedItems = message.extensionFeedItems;
    }
    if (message.device !== 0) {
      obj.device = extensionSettingDeviceEnum_ExtensionSettingDeviceToJSON(message.device);
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignExtensionSetting>): CampaignExtensionSetting {
    return CampaignExtensionSetting.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignExtensionSetting>): CampaignExtensionSetting {
    const message = createBaseCampaignExtensionSetting();
    message.resourceName = object.resourceName ?? "";
    message.extensionType = object.extensionType ?? 0;
    message.campaign = object.campaign ?? undefined;
    message.extensionFeedItems = object.extensionFeedItems?.map((e) => e) || [];
    message.device = object.device ?? 0;
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
