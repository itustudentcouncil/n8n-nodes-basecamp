// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/app_campaign_bidding_strategy_goal_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Container for enum describing goal towards which the bidding strategy of an
 * app campaign should optimize for.
 */
export interface AppCampaignBiddingStrategyGoalTypeEnum {
}

/** Goal type of App campaign BiddingStrategy. */
export enum AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /**
   * OPTIMIZE_INSTALLS_TARGET_INSTALL_COST - Aim to maximize the number of app installs. The cpa bid is the
   * target cost per install.
   */
  OPTIMIZE_INSTALLS_TARGET_INSTALL_COST = 2,
  /**
   * OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST - Aim to maximize the long term number of selected in-app conversions from
   * app installs. The cpa bid is the target cost per install.
   */
  OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST = 3,
  /**
   * OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST - Aim to maximize the long term number of selected in-app conversions from
   * app installs. The cpa bid is the target cost per in-app conversion. Note
   * that the actual cpa may seem higher than the target cpa at first, since
   * the long term conversions haven't happened yet.
   */
  OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST = 4,
  /**
   * OPTIMIZE_RETURN_ON_ADVERTISING_SPEND - Aim to maximize all conversions' value, for example, install + selected
   * in-app conversions while achieving or exceeding target return on
   * advertising spend.
   */
  OPTIMIZE_RETURN_ON_ADVERTISING_SPEND = 5,
  /** OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME - Aim to maximize the pre-registration of the app. */
  OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME = 6,
  /** OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST - Aim to maximize installation of the app without target cost-per-install. */
  OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST = 7,
  UNRECOGNIZED = -1,
}

export function appCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalTypeFromJSON(
  object: any,
): AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType.UNKNOWN;
    case 2:
    case "OPTIMIZE_INSTALLS_TARGET_INSTALL_COST":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
        .OPTIMIZE_INSTALLS_TARGET_INSTALL_COST;
    case 3:
    case "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
        .OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST;
    case 4:
    case "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
        .OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST;
    case 5:
    case "OPTIMIZE_RETURN_ON_ADVERTISING_SPEND":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
        .OPTIMIZE_RETURN_ON_ADVERTISING_SPEND;
    case 6:
    case "OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
        .OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME;
    case 7:
    case "OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST":
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
        .OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType.UNRECOGNIZED;
  }
}

export function appCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalTypeToJSON(
  object: AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType,
): string {
  switch (object) {
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType.UNSPECIFIED:
      return "UNSPECIFIED";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType.UNKNOWN:
      return "UNKNOWN";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
      .OPTIMIZE_INSTALLS_TARGET_INSTALL_COST:
      return "OPTIMIZE_INSTALLS_TARGET_INSTALL_COST";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
      .OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST:
      return "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
      .OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST:
      return "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType.OPTIMIZE_RETURN_ON_ADVERTISING_SPEND:
      return "OPTIMIZE_RETURN_ON_ADVERTISING_SPEND";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
      .OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME:
      return "OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType
      .OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST:
      return "OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST";
    case AppCampaignBiddingStrategyGoalTypeEnum_AppCampaignBiddingStrategyGoalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAppCampaignBiddingStrategyGoalTypeEnum(): AppCampaignBiddingStrategyGoalTypeEnum {
  return {};
}

export const AppCampaignBiddingStrategyGoalTypeEnum: MessageFns<AppCampaignBiddingStrategyGoalTypeEnum> = {
  encode(_: AppCampaignBiddingStrategyGoalTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AppCampaignBiddingStrategyGoalTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppCampaignBiddingStrategyGoalTypeEnum();
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

  fromJSON(_: any): AppCampaignBiddingStrategyGoalTypeEnum {
    return {};
  },

  toJSON(_: AppCampaignBiddingStrategyGoalTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AppCampaignBiddingStrategyGoalTypeEnum>): AppCampaignBiddingStrategyGoalTypeEnum {
    return AppCampaignBiddingStrategyGoalTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AppCampaignBiddingStrategyGoalTypeEnum>): AppCampaignBiddingStrategyGoalTypeEnum {
    const message = createBaseAppCampaignBiddingStrategyGoalTypeEnum();
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
