// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/bidding_strategy.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  EnhancedCpc,
  MaximizeConversions,
  MaximizeConversionValue,
  TargetCpa,
  TargetImpressionShare,
  TargetRoas,
  TargetSpend,
} from "../common/bidding.js";
import {
  BiddingStrategyStatusEnum_BiddingStrategyStatus,
  biddingStrategyStatusEnum_BiddingStrategyStatusFromJSON,
  biddingStrategyStatusEnum_BiddingStrategyStatusToJSON,
} from "../enums/bidding_strategy_status.js";
import {
  BiddingStrategyTypeEnum_BiddingStrategyType,
  biddingStrategyTypeEnum_BiddingStrategyTypeFromJSON,
  biddingStrategyTypeEnum_BiddingStrategyTypeToJSON,
} from "../enums/bidding_strategy_type.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** A bidding strategy. */
export interface BiddingStrategy {
  /**
   * Immutable. The resource name of the bidding strategy.
   * Bidding strategy resource names have the form:
   *
   * `customers/{customer_id}/biddingStrategies/{bidding_strategy_id}`
   */
  resourceName: string;
  /** Output only. The ID of the bidding strategy. */
  id?:
    | Long
    | undefined;
  /**
   * The name of the bidding strategy.
   * All bidding strategies within an account must be named distinctly.
   *
   * The length of this string should be between 1 and 255, inclusive,
   * in UTF-8 bytes, (trimmed).
   */
  name?:
    | string
    | undefined;
  /**
   * Output only. The status of the bidding strategy.
   *
   * This field is read-only.
   */
  status: BiddingStrategyStatusEnum_BiddingStrategyStatus;
  /**
   * Output only. The type of the bidding strategy.
   * Create a bidding strategy by setting the bidding scheme.
   *
   * This field is read-only.
   */
  type: BiddingStrategyTypeEnum_BiddingStrategyType;
  /**
   * Immutable. The currency used by the bidding strategy (ISO 4217 three-letter
   * code).
   *
   * For bidding strategies in manager customers, this currency can be set on
   * creation and defaults to the manager customer's currency. For serving
   * customers, this field cannot be set; all strategies in a serving customer
   * implicitly use the serving customer's currency. In all cases the
   * effective_currency_code field returns the currency used by the strategy.
   */
  currencyCode: string;
  /**
   * Output only. The currency used by the bidding strategy (ISO 4217
   * three-letter code).
   *
   * For bidding strategies in manager customers, this is the currency set by
   * the advertiser when creating the strategy. For serving customers, this is
   * the customer's currency_code.
   *
   * Bidding strategy metrics are reported in this currency.
   *
   * This field is read-only.
   */
  effectiveCurrencyCode?:
    | string
    | undefined;
  /**
   * ID of the campaign budget that this portfolio bidding strategy
   * is aligned with. When a portfolio and a campaign budget are aligned, that
   * means that they are attached to the same set of campaigns. After a bidding
   * strategy is aligned with a campaign budget, campaigns that are added to the
   * bidding strategy must also use the aligned campaign budget.
   */
  alignedCampaignBudgetId: Long;
  /**
   * Output only. The number of campaigns attached to this bidding strategy.
   *
   * This field is read-only.
   */
  campaignCount?:
    | Long
    | undefined;
  /**
   * Output only. The number of non-removed campaigns attached to this bidding
   * strategy.
   *
   * This field is read-only.
   */
  nonRemovedCampaignCount?:
    | Long
    | undefined;
  /**
   * A bidding strategy that raises bids for clicks that seem more likely to
   * lead to a conversion and lowers them for clicks where they seem less
   * likely.
   */
  enhancedCpc?:
    | EnhancedCpc
    | undefined;
  /**
   * An automated bidding strategy to help get the most conversion value for
   * your campaigns while spending your budget.
   */
  maximizeConversionValue?:
    | MaximizeConversionValue
    | undefined;
  /**
   * An automated bidding strategy to help get the most conversions for your
   * campaigns while spending your budget.
   */
  maximizeConversions?:
    | MaximizeConversions
    | undefined;
  /**
   * A bidding strategy that sets bids to help get as many conversions as
   * possible at the target cost-per-acquisition (CPA) you set.
   */
  targetCpa?:
    | TargetCpa
    | undefined;
  /**
   * A bidding strategy that automatically optimizes towards a chosen
   * percentage of impressions.
   */
  targetImpressionShare?:
    | TargetImpressionShare
    | undefined;
  /**
   * A bidding strategy that helps you maximize revenue while averaging a
   * specific target Return On Ad Spend (ROAS).
   */
  targetRoas?:
    | TargetRoas
    | undefined;
  /**
   * A bid strategy that sets your bids to help get as many clicks as
   * possible within your budget.
   */
  targetSpend?: TargetSpend | undefined;
}

function createBaseBiddingStrategy(): BiddingStrategy {
  return {
    resourceName: "",
    id: undefined,
    name: undefined,
    status: 0,
    type: 0,
    currencyCode: "",
    effectiveCurrencyCode: undefined,
    alignedCampaignBudgetId: Long.ZERO,
    campaignCount: undefined,
    nonRemovedCampaignCount: undefined,
    enhancedCpc: undefined,
    maximizeConversionValue: undefined,
    maximizeConversions: undefined,
    targetCpa: undefined,
    targetImpressionShare: undefined,
    targetRoas: undefined,
    targetSpend: undefined,
  };
}

export const BiddingStrategy: MessageFns<BiddingStrategy> = {
  encode(message: BiddingStrategy, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(128).int64(message.id.toString());
    }
    if (message.name !== undefined) {
      writer.uint32(138).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(120).int32(message.status);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.currencyCode !== "") {
      writer.uint32(186).string(message.currencyCode);
    }
    if (message.effectiveCurrencyCode !== undefined) {
      writer.uint32(162).string(message.effectiveCurrencyCode);
    }
    if (!message.alignedCampaignBudgetId.equals(Long.ZERO)) {
      writer.uint32(200).int64(message.alignedCampaignBudgetId.toString());
    }
    if (message.campaignCount !== undefined) {
      writer.uint32(144).int64(message.campaignCount.toString());
    }
    if (message.nonRemovedCampaignCount !== undefined) {
      writer.uint32(152).int64(message.nonRemovedCampaignCount.toString());
    }
    if (message.enhancedCpc !== undefined) {
      EnhancedCpc.encode(message.enhancedCpc, writer.uint32(58).fork()).join();
    }
    if (message.maximizeConversionValue !== undefined) {
      MaximizeConversionValue.encode(message.maximizeConversionValue, writer.uint32(170).fork()).join();
    }
    if (message.maximizeConversions !== undefined) {
      MaximizeConversions.encode(message.maximizeConversions, writer.uint32(178).fork()).join();
    }
    if (message.targetCpa !== undefined) {
      TargetCpa.encode(message.targetCpa, writer.uint32(74).fork()).join();
    }
    if (message.targetImpressionShare !== undefined) {
      TargetImpressionShare.encode(message.targetImpressionShare, writer.uint32(386).fork()).join();
    }
    if (message.targetRoas !== undefined) {
      TargetRoas.encode(message.targetRoas, writer.uint32(90).fork()).join();
    }
    if (message.targetSpend !== undefined) {
      TargetSpend.encode(message.targetSpend, writer.uint32(98).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BiddingStrategy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBiddingStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.name = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.currencyCode = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.effectiveCurrencyCode = reader.string();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.alignedCampaignBudgetId = Long.fromString(reader.int64().toString());
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.campaignCount = Long.fromString(reader.int64().toString());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.nonRemovedCampaignCount = Long.fromString(reader.int64().toString());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.enhancedCpc = EnhancedCpc.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.maximizeConversionValue = MaximizeConversionValue.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.maximizeConversions = MaximizeConversions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.targetCpa = TargetCpa.decode(reader, reader.uint32());
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          message.targetImpressionShare = TargetImpressionShare.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.targetRoas = TargetRoas.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.targetSpend = TargetSpend.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BiddingStrategy {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      status: isSet(object.status) ? biddingStrategyStatusEnum_BiddingStrategyStatusFromJSON(object.status) : 0,
      type: isSet(object.type) ? biddingStrategyTypeEnum_BiddingStrategyTypeFromJSON(object.type) : 0,
      currencyCode: isSet(object.currencyCode) ? globalThis.String(object.currencyCode) : "",
      effectiveCurrencyCode: isSet(object.effectiveCurrencyCode)
        ? globalThis.String(object.effectiveCurrencyCode)
        : undefined,
      alignedCampaignBudgetId: isSet(object.alignedCampaignBudgetId)
        ? Long.fromValue(object.alignedCampaignBudgetId)
        : Long.ZERO,
      campaignCount: isSet(object.campaignCount) ? Long.fromValue(object.campaignCount) : undefined,
      nonRemovedCampaignCount: isSet(object.nonRemovedCampaignCount)
        ? Long.fromValue(object.nonRemovedCampaignCount)
        : undefined,
      enhancedCpc: isSet(object.enhancedCpc) ? EnhancedCpc.fromJSON(object.enhancedCpc) : undefined,
      maximizeConversionValue: isSet(object.maximizeConversionValue)
        ? MaximizeConversionValue.fromJSON(object.maximizeConversionValue)
        : undefined,
      maximizeConversions: isSet(object.maximizeConversions)
        ? MaximizeConversions.fromJSON(object.maximizeConversions)
        : undefined,
      targetCpa: isSet(object.targetCpa) ? TargetCpa.fromJSON(object.targetCpa) : undefined,
      targetImpressionShare: isSet(object.targetImpressionShare)
        ? TargetImpressionShare.fromJSON(object.targetImpressionShare)
        : undefined,
      targetRoas: isSet(object.targetRoas) ? TargetRoas.fromJSON(object.targetRoas) : undefined,
      targetSpend: isSet(object.targetSpend) ? TargetSpend.fromJSON(object.targetSpend) : undefined,
    };
  },

  toJSON(message: BiddingStrategy): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.status !== 0) {
      obj.status = biddingStrategyStatusEnum_BiddingStrategyStatusToJSON(message.status);
    }
    if (message.type !== 0) {
      obj.type = biddingStrategyTypeEnum_BiddingStrategyTypeToJSON(message.type);
    }
    if (message.currencyCode !== "") {
      obj.currencyCode = message.currencyCode;
    }
    if (message.effectiveCurrencyCode !== undefined) {
      obj.effectiveCurrencyCode = message.effectiveCurrencyCode;
    }
    if (!message.alignedCampaignBudgetId.equals(Long.ZERO)) {
      obj.alignedCampaignBudgetId = (message.alignedCampaignBudgetId || Long.ZERO).toString();
    }
    if (message.campaignCount !== undefined) {
      obj.campaignCount = (message.campaignCount || Long.ZERO).toString();
    }
    if (message.nonRemovedCampaignCount !== undefined) {
      obj.nonRemovedCampaignCount = (message.nonRemovedCampaignCount || Long.ZERO).toString();
    }
    if (message.enhancedCpc !== undefined) {
      obj.enhancedCpc = EnhancedCpc.toJSON(message.enhancedCpc);
    }
    if (message.maximizeConversionValue !== undefined) {
      obj.maximizeConversionValue = MaximizeConversionValue.toJSON(message.maximizeConversionValue);
    }
    if (message.maximizeConversions !== undefined) {
      obj.maximizeConversions = MaximizeConversions.toJSON(message.maximizeConversions);
    }
    if (message.targetCpa !== undefined) {
      obj.targetCpa = TargetCpa.toJSON(message.targetCpa);
    }
    if (message.targetImpressionShare !== undefined) {
      obj.targetImpressionShare = TargetImpressionShare.toJSON(message.targetImpressionShare);
    }
    if (message.targetRoas !== undefined) {
      obj.targetRoas = TargetRoas.toJSON(message.targetRoas);
    }
    if (message.targetSpend !== undefined) {
      obj.targetSpend = TargetSpend.toJSON(message.targetSpend);
    }
    return obj;
  },

  create(base?: DeepPartial<BiddingStrategy>): BiddingStrategy {
    return BiddingStrategy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BiddingStrategy>): BiddingStrategy {
    const message = createBaseBiddingStrategy();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.name = object.name ?? undefined;
    message.status = object.status ?? 0;
    message.type = object.type ?? 0;
    message.currencyCode = object.currencyCode ?? "";
    message.effectiveCurrencyCode = object.effectiveCurrencyCode ?? undefined;
    message.alignedCampaignBudgetId =
      (object.alignedCampaignBudgetId !== undefined && object.alignedCampaignBudgetId !== null)
        ? Long.fromValue(object.alignedCampaignBudgetId)
        : Long.ZERO;
    message.campaignCount = (object.campaignCount !== undefined && object.campaignCount !== null)
      ? Long.fromValue(object.campaignCount)
      : undefined;
    message.nonRemovedCampaignCount =
      (object.nonRemovedCampaignCount !== undefined && object.nonRemovedCampaignCount !== null)
        ? Long.fromValue(object.nonRemovedCampaignCount)
        : undefined;
    message.enhancedCpc = (object.enhancedCpc !== undefined && object.enhancedCpc !== null)
      ? EnhancedCpc.fromPartial(object.enhancedCpc)
      : undefined;
    message.maximizeConversionValue =
      (object.maximizeConversionValue !== undefined && object.maximizeConversionValue !== null)
        ? MaximizeConversionValue.fromPartial(object.maximizeConversionValue)
        : undefined;
    message.maximizeConversions = (object.maximizeConversions !== undefined && object.maximizeConversions !== null)
      ? MaximizeConversions.fromPartial(object.maximizeConversions)
      : undefined;
    message.targetCpa = (object.targetCpa !== undefined && object.targetCpa !== null)
      ? TargetCpa.fromPartial(object.targetCpa)
      : undefined;
    message.targetImpressionShare =
      (object.targetImpressionShare !== undefined && object.targetImpressionShare !== null)
        ? TargetImpressionShare.fromPartial(object.targetImpressionShare)
        : undefined;
    message.targetRoas = (object.targetRoas !== undefined && object.targetRoas !== null)
      ? TargetRoas.fromPartial(object.targetRoas)
      : undefined;
    message.targetSpend = (object.targetSpend !== undefined && object.targetSpend !== null)
      ? TargetSpend.fromPartial(object.targetSpend)
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
