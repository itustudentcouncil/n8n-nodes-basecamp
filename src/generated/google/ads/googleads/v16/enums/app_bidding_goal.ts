// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/app_bidding_goal.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing an app bidding goal for raise Target CPA
 * recommendation.
 */
export interface AppBiddingGoalEnum {
}

/**
 * Represents the goal towards which the bidding strategy, of an app
 * campaign, should optimize for.
 */
export enum AppBiddingGoalEnum_AppBiddingGoal {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Represents value unknown in this version of the API. */
  UNKNOWN = 1,
  /**
   * OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME - The bidding strategy of the app campaign should aim to maximize
   * installation of the app.
   */
  OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME = 2,
  /**
   * OPTIMIZE_FOR_IN_APP_CONVERSION_VOLUME - The bidding strategy of the app campaign should aim to maximize
   * the selected in-app conversions' volume.
   */
  OPTIMIZE_FOR_IN_APP_CONVERSION_VOLUME = 3,
  /**
   * OPTIMIZE_FOR_TOTAL_CONVERSION_VALUE - The bidding strategy of the app campaign should aim to maximize
   * all conversions' value, that is, install and selected in-app conversions.
   */
  OPTIMIZE_FOR_TOTAL_CONVERSION_VALUE = 4,
  /**
   * OPTIMIZE_FOR_TARGET_IN_APP_CONVERSION - The bidding strategy of the app campaign should aim to maximize
   * just the selected in-app conversion's volume, while achieving or
   * exceeding target cost per in-app conversion.
   */
  OPTIMIZE_FOR_TARGET_IN_APP_CONVERSION = 5,
  /**
   * OPTIMIZE_FOR_RETURN_ON_ADVERTISING_SPEND - The bidding strategy of the app campaign should aim to maximize
   * all conversions' value, that is, install and selected in-app conversions
   * while achieving or exceeding target return on advertising spend.
   */
  OPTIMIZE_FOR_RETURN_ON_ADVERTISING_SPEND = 6,
  /**
   * OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME_WITHOUT_TARGET_CPI - This bidding strategy of the app campaign should aim to
   * maximize installation of the app without advertiser-provided target
   * cost-per-install.
   */
  OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME_WITHOUT_TARGET_CPI = 7,
  /**
   * OPTIMIZE_FOR_PRE_REGISTRATION_CONVERSION_VOLUME - This bidding strategy of the app campaign should aim to
   * maximize pre-registration of the app.
   */
  OPTIMIZE_FOR_PRE_REGISTRATION_CONVERSION_VOLUME = 8,
  UNRECOGNIZED = -1,
}

export function appBiddingGoalEnum_AppBiddingGoalFromJSON(object: any): AppBiddingGoalEnum_AppBiddingGoal {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AppBiddingGoalEnum_AppBiddingGoal.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AppBiddingGoalEnum_AppBiddingGoal.UNKNOWN;
    case 2:
    case "OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME":
      return AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME;
    case 3:
    case "OPTIMIZE_FOR_IN_APP_CONVERSION_VOLUME":
      return AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_IN_APP_CONVERSION_VOLUME;
    case 4:
    case "OPTIMIZE_FOR_TOTAL_CONVERSION_VALUE":
      return AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_TOTAL_CONVERSION_VALUE;
    case 5:
    case "OPTIMIZE_FOR_TARGET_IN_APP_CONVERSION":
      return AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_TARGET_IN_APP_CONVERSION;
    case 6:
    case "OPTIMIZE_FOR_RETURN_ON_ADVERTISING_SPEND":
      return AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_RETURN_ON_ADVERTISING_SPEND;
    case 7:
    case "OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME_WITHOUT_TARGET_CPI":
      return AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME_WITHOUT_TARGET_CPI;
    case 8:
    case "OPTIMIZE_FOR_PRE_REGISTRATION_CONVERSION_VOLUME":
      return AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_PRE_REGISTRATION_CONVERSION_VOLUME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AppBiddingGoalEnum_AppBiddingGoal.UNRECOGNIZED;
  }
}

export function appBiddingGoalEnum_AppBiddingGoalToJSON(object: AppBiddingGoalEnum_AppBiddingGoal): string {
  switch (object) {
    case AppBiddingGoalEnum_AppBiddingGoal.UNSPECIFIED:
      return "UNSPECIFIED";
    case AppBiddingGoalEnum_AppBiddingGoal.UNKNOWN:
      return "UNKNOWN";
    case AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME:
      return "OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME";
    case AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_IN_APP_CONVERSION_VOLUME:
      return "OPTIMIZE_FOR_IN_APP_CONVERSION_VOLUME";
    case AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_TOTAL_CONVERSION_VALUE:
      return "OPTIMIZE_FOR_TOTAL_CONVERSION_VALUE";
    case AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_TARGET_IN_APP_CONVERSION:
      return "OPTIMIZE_FOR_TARGET_IN_APP_CONVERSION";
    case AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_RETURN_ON_ADVERTISING_SPEND:
      return "OPTIMIZE_FOR_RETURN_ON_ADVERTISING_SPEND";
    case AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME_WITHOUT_TARGET_CPI:
      return "OPTIMIZE_FOR_INSTALL_CONVERSION_VOLUME_WITHOUT_TARGET_CPI";
    case AppBiddingGoalEnum_AppBiddingGoal.OPTIMIZE_FOR_PRE_REGISTRATION_CONVERSION_VOLUME:
      return "OPTIMIZE_FOR_PRE_REGISTRATION_CONVERSION_VOLUME";
    case AppBiddingGoalEnum_AppBiddingGoal.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAppBiddingGoalEnum(): AppBiddingGoalEnum {
  return {};
}

export const AppBiddingGoalEnum: MessageFns<AppBiddingGoalEnum> = {
  encode(_: AppBiddingGoalEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AppBiddingGoalEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppBiddingGoalEnum();
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

  fromJSON(_: any): AppBiddingGoalEnum {
    return {};
  },

  toJSON(_: AppBiddingGoalEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AppBiddingGoalEnum>): AppBiddingGoalEnum {
    return AppBiddingGoalEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AppBiddingGoalEnum>): AppBiddingGoalEnum {
    const message = createBaseAppBiddingGoalEnum();
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
