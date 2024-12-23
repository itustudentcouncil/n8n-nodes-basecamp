// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/conversion_goal_campaign_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  GoalConfigLevelEnum_GoalConfigLevel,
  goalConfigLevelEnum_GoalConfigLevelFromJSON,
  goalConfigLevelEnum_GoalConfigLevelToJSON,
} from "../enums/goal_config_level.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** Conversion goal settings for a Campaign. */
export interface ConversionGoalCampaignConfig {
  /**
   * Immutable. The resource name of the conversion goal campaign config.
   * Conversion goal campaign config resource names have the form:
   *
   * `customers/{customer_id}/conversionGoalCampaignConfigs/{campaign_id}`
   */
  resourceName: string;
  /**
   * Immutable. The campaign with which this conversion goal campaign config is
   * associated.
   */
  campaign: string;
  /** The level of goal config the campaign is using. */
  goalConfigLevel: GoalConfigLevelEnum_GoalConfigLevel;
  /** The custom conversion goal the campaign is using for optimization. */
  customConversionGoal: string;
}

function createBaseConversionGoalCampaignConfig(): ConversionGoalCampaignConfig {
  return { resourceName: "", campaign: "", goalConfigLevel: 0, customConversionGoal: "" };
}

export const ConversionGoalCampaignConfig: MessageFns<ConversionGoalCampaignConfig> = {
  encode(message: ConversionGoalCampaignConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaign !== "") {
      writer.uint32(18).string(message.campaign);
    }
    if (message.goalConfigLevel !== 0) {
      writer.uint32(24).int32(message.goalConfigLevel);
    }
    if (message.customConversionGoal !== "") {
      writer.uint32(34).string(message.customConversionGoal);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionGoalCampaignConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionGoalCampaignConfig();
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
          if (tag !== 18) {
            break;
          }

          message.campaign = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.goalConfigLevel = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.customConversionGoal = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversionGoalCampaignConfig {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaign: isSet(object.campaign) ? globalThis.String(object.campaign) : "",
      goalConfigLevel: isSet(object.goalConfigLevel)
        ? goalConfigLevelEnum_GoalConfigLevelFromJSON(object.goalConfigLevel)
        : 0,
      customConversionGoal: isSet(object.customConversionGoal) ? globalThis.String(object.customConversionGoal) : "",
    };
  },

  toJSON(message: ConversionGoalCampaignConfig): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaign !== "") {
      obj.campaign = message.campaign;
    }
    if (message.goalConfigLevel !== 0) {
      obj.goalConfigLevel = goalConfigLevelEnum_GoalConfigLevelToJSON(message.goalConfigLevel);
    }
    if (message.customConversionGoal !== "") {
      obj.customConversionGoal = message.customConversionGoal;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversionGoalCampaignConfig>): ConversionGoalCampaignConfig {
    return ConversionGoalCampaignConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConversionGoalCampaignConfig>): ConversionGoalCampaignConfig {
    const message = createBaseConversionGoalCampaignConfig();
    message.resourceName = object.resourceName ?? "";
    message.campaign = object.campaign ?? "";
    message.goalConfigLevel = object.goalConfigLevel ?? 0;
    message.customConversionGoal = object.customConversionGoal ?? "";
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
