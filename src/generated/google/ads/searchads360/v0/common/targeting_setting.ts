// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/common/targeting_setting.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  TargetingDimensionEnum_TargetingDimension,
  targetingDimensionEnum_TargetingDimensionFromJSON,
  targetingDimensionEnum_TargetingDimensionToJSON,
} from "../enums/targeting_dimension.js";

export const protobufPackage = "google.ads.searchads360.v0.common";

/**
 * Settings for the targeting-related features, at the campaign and ad group
 * levels. For more details about the targeting setting, visit
 * https://support.google.com/google-ads/answer/7365594
 */
export interface TargetingSetting {
  /**
   * The per-targeting-dimension setting to restrict the reach of your campaign
   * or ad group.
   */
  targetRestrictions: TargetRestriction[];
}

/** The list of per-targeting-dimension targeting settings. */
export interface TargetRestriction {
  /** The targeting dimension that these settings apply to. */
  targetingDimension: TargetingDimensionEnum_TargetingDimension;
  /**
   * Indicates whether to restrict your ads to show only for the criteria you
   * have selected for this targeting_dimension, or to target all values for
   * this targeting_dimension and show ads based on your targeting in other
   * TargetingDimensions. A value of `true` means that these criteria will only
   * apply bid modifiers, and not affect targeting. A value of `false` means
   * that these criteria will restrict targeting as well as applying bid
   * modifiers.
   */
  bidOnly?: boolean | undefined;
}

function createBaseTargetingSetting(): TargetingSetting {
  return { targetRestrictions: [] };
}

export const TargetingSetting: MessageFns<TargetingSetting> = {
  encode(message: TargetingSetting, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.targetRestrictions) {
      TargetRestriction.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TargetingSetting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetingSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetRestrictions.push(TargetRestriction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetingSetting {
    return {
      targetRestrictions: globalThis.Array.isArray(object?.targetRestrictions)
        ? object.targetRestrictions.map((e: any) => TargetRestriction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TargetingSetting): unknown {
    const obj: any = {};
    if (message.targetRestrictions?.length) {
      obj.targetRestrictions = message.targetRestrictions.map((e) => TargetRestriction.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TargetingSetting>): TargetingSetting {
    return TargetingSetting.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TargetingSetting>): TargetingSetting {
    const message = createBaseTargetingSetting();
    message.targetRestrictions = object.targetRestrictions?.map((e) => TargetRestriction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTargetRestriction(): TargetRestriction {
  return { targetingDimension: 0, bidOnly: undefined };
}

export const TargetRestriction: MessageFns<TargetRestriction> = {
  encode(message: TargetRestriction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.targetingDimension !== 0) {
      writer.uint32(8).int32(message.targetingDimension);
    }
    if (message.bidOnly !== undefined) {
      writer.uint32(24).bool(message.bidOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TargetRestriction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetRestriction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.targetingDimension = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bidOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetRestriction {
    return {
      targetingDimension: isSet(object.targetingDimension)
        ? targetingDimensionEnum_TargetingDimensionFromJSON(object.targetingDimension)
        : 0,
      bidOnly: isSet(object.bidOnly) ? globalThis.Boolean(object.bidOnly) : undefined,
    };
  },

  toJSON(message: TargetRestriction): unknown {
    const obj: any = {};
    if (message.targetingDimension !== 0) {
      obj.targetingDimension = targetingDimensionEnum_TargetingDimensionToJSON(message.targetingDimension);
    }
    if (message.bidOnly !== undefined) {
      obj.bidOnly = message.bidOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<TargetRestriction>): TargetRestriction {
    return TargetRestriction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TargetRestriction>): TargetRestriction {
    const message = createBaseTargetRestriction();
    message.targetingDimension = object.targetingDimension ?? 0;
    message.bidOnly = object.bidOnly ?? undefined;
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
