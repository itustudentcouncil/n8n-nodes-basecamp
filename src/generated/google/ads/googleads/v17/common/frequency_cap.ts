// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/common/frequency_cap.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  FrequencyCapEventTypeEnum_FrequencyCapEventType,
  frequencyCapEventTypeEnum_FrequencyCapEventTypeFromJSON,
  frequencyCapEventTypeEnum_FrequencyCapEventTypeToJSON,
} from "../enums/frequency_cap_event_type.js";
import {
  FrequencyCapLevelEnum_FrequencyCapLevel,
  frequencyCapLevelEnum_FrequencyCapLevelFromJSON,
  frequencyCapLevelEnum_FrequencyCapLevelToJSON,
} from "../enums/frequency_cap_level.js";
import {
  FrequencyCapTimeUnitEnum_FrequencyCapTimeUnit,
  frequencyCapTimeUnitEnum_FrequencyCapTimeUnitFromJSON,
  frequencyCapTimeUnitEnum_FrequencyCapTimeUnitToJSON,
} from "../enums/frequency_cap_time_unit.js";

export const protobufPackage = "google.ads.googleads.v17.common";

/**
 * A rule specifying the maximum number of times an ad (or some set of ads) can
 * be shown to a user over a particular time period.
 */
export interface FrequencyCapEntry {
  /**
   * The key of a particular frequency cap. There can be no more
   * than one frequency cap with the same key.
   */
  key:
    | FrequencyCapKey
    | undefined;
  /** Maximum number of events allowed during the time range by this cap. */
  cap?: number | undefined;
}

/**
 * A group of fields used as keys for a frequency cap.
 * There can be no more than one frequency cap with the same key.
 */
export interface FrequencyCapKey {
  /**
   * The level on which the cap is to be applied (for example, ad group ad, ad
   * group). The cap is applied to all the entities of this level.
   */
  level: FrequencyCapLevelEnum_FrequencyCapLevel;
  /** The type of event that the cap applies to (for example, impression). */
  eventType: FrequencyCapEventTypeEnum_FrequencyCapEventType;
  /** Unit of time the cap is defined at (for example, day, week). */
  timeUnit: FrequencyCapTimeUnitEnum_FrequencyCapTimeUnit;
  /** Number of time units the cap lasts. */
  timeLength?: number | undefined;
}

function createBaseFrequencyCapEntry(): FrequencyCapEntry {
  return { key: undefined, cap: undefined };
}

export const FrequencyCapEntry: MessageFns<FrequencyCapEntry> = {
  encode(message: FrequencyCapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== undefined) {
      FrequencyCapKey.encode(message.key, writer.uint32(10).fork()).join();
    }
    if (message.cap !== undefined) {
      writer.uint32(24).int32(message.cap);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FrequencyCapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrequencyCapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = FrequencyCapKey.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cap = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FrequencyCapEntry {
    return {
      key: isSet(object.key) ? FrequencyCapKey.fromJSON(object.key) : undefined,
      cap: isSet(object.cap) ? globalThis.Number(object.cap) : undefined,
    };
  },

  toJSON(message: FrequencyCapEntry): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = FrequencyCapKey.toJSON(message.key);
    }
    if (message.cap !== undefined) {
      obj.cap = Math.round(message.cap);
    }
    return obj;
  },

  create(base?: DeepPartial<FrequencyCapEntry>): FrequencyCapEntry {
    return FrequencyCapEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FrequencyCapEntry>): FrequencyCapEntry {
    const message = createBaseFrequencyCapEntry();
    message.key = (object.key !== undefined && object.key !== null)
      ? FrequencyCapKey.fromPartial(object.key)
      : undefined;
    message.cap = object.cap ?? undefined;
    return message;
  },
};

function createBaseFrequencyCapKey(): FrequencyCapKey {
  return { level: 0, eventType: 0, timeUnit: 0, timeLength: undefined };
}

export const FrequencyCapKey: MessageFns<FrequencyCapKey> = {
  encode(message: FrequencyCapKey, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    if (message.eventType !== 0) {
      writer.uint32(24).int32(message.eventType);
    }
    if (message.timeUnit !== 0) {
      writer.uint32(16).int32(message.timeUnit);
    }
    if (message.timeLength !== undefined) {
      writer.uint32(40).int32(message.timeLength);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FrequencyCapKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrequencyCapKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.level = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timeUnit = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.timeLength = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FrequencyCapKey {
    return {
      level: isSet(object.level) ? frequencyCapLevelEnum_FrequencyCapLevelFromJSON(object.level) : 0,
      eventType: isSet(object.eventType)
        ? frequencyCapEventTypeEnum_FrequencyCapEventTypeFromJSON(object.eventType)
        : 0,
      timeUnit: isSet(object.timeUnit) ? frequencyCapTimeUnitEnum_FrequencyCapTimeUnitFromJSON(object.timeUnit) : 0,
      timeLength: isSet(object.timeLength) ? globalThis.Number(object.timeLength) : undefined,
    };
  },

  toJSON(message: FrequencyCapKey): unknown {
    const obj: any = {};
    if (message.level !== 0) {
      obj.level = frequencyCapLevelEnum_FrequencyCapLevelToJSON(message.level);
    }
    if (message.eventType !== 0) {
      obj.eventType = frequencyCapEventTypeEnum_FrequencyCapEventTypeToJSON(message.eventType);
    }
    if (message.timeUnit !== 0) {
      obj.timeUnit = frequencyCapTimeUnitEnum_FrequencyCapTimeUnitToJSON(message.timeUnit);
    }
    if (message.timeLength !== undefined) {
      obj.timeLength = Math.round(message.timeLength);
    }
    return obj;
  },

  create(base?: DeepPartial<FrequencyCapKey>): FrequencyCapKey {
    return FrequencyCapKey.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FrequencyCapKey>): FrequencyCapKey {
    const message = createBaseFrequencyCapKey();
    message.level = object.level ?? 0;
    message.eventType = object.eventType ?? 0;
    message.timeUnit = object.timeUnit ?? 0;
    message.timeLength = object.timeLength ?? undefined;
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
