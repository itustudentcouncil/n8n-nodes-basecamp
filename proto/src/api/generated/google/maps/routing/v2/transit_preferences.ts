// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/routing/v2/transit_preferences.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.maps.routing.v2";

/**
 * Preferences for `TRANSIT` based routes that influence the route that is
 * returned.
 */
export interface TransitPreferences {
  /**
   * A set of travel modes to use when getting a `TRANSIT` route. Defaults to
   * all supported modes of travel.
   */
  allowedTravelModes: TransitPreferences_TransitTravelMode[];
  /**
   * A routing preference that, when specified, influences the `TRANSIT` route
   * returned.
   */
  routingPreference: TransitPreferences_TransitRoutingPreference;
}

/** A set of values used to specify the mode of transit. */
export enum TransitPreferences_TransitTravelMode {
  /** TRANSIT_TRAVEL_MODE_UNSPECIFIED - No transit travel mode specified. */
  TRANSIT_TRAVEL_MODE_UNSPECIFIED = 0,
  /** BUS - Travel by bus. */
  BUS = 1,
  /** SUBWAY - Travel by subway. */
  SUBWAY = 2,
  /** TRAIN - Travel by train. */
  TRAIN = 3,
  /** LIGHT_RAIL - Travel by light rail or tram. */
  LIGHT_RAIL = 4,
  /**
   * RAIL - Travel by rail. This is equivalent to a combination of `SUBWAY`, `TRAIN`,
   * and `LIGHT_RAIL`.
   */
  RAIL = 5,
  UNRECOGNIZED = -1,
}

export function transitPreferences_TransitTravelModeFromJSON(object: any): TransitPreferences_TransitTravelMode {
  switch (object) {
    case 0:
    case "TRANSIT_TRAVEL_MODE_UNSPECIFIED":
      return TransitPreferences_TransitTravelMode.TRANSIT_TRAVEL_MODE_UNSPECIFIED;
    case 1:
    case "BUS":
      return TransitPreferences_TransitTravelMode.BUS;
    case 2:
    case "SUBWAY":
      return TransitPreferences_TransitTravelMode.SUBWAY;
    case 3:
    case "TRAIN":
      return TransitPreferences_TransitTravelMode.TRAIN;
    case 4:
    case "LIGHT_RAIL":
      return TransitPreferences_TransitTravelMode.LIGHT_RAIL;
    case 5:
    case "RAIL":
      return TransitPreferences_TransitTravelMode.RAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransitPreferences_TransitTravelMode.UNRECOGNIZED;
  }
}

export function transitPreferences_TransitTravelModeToJSON(object: TransitPreferences_TransitTravelMode): string {
  switch (object) {
    case TransitPreferences_TransitTravelMode.TRANSIT_TRAVEL_MODE_UNSPECIFIED:
      return "TRANSIT_TRAVEL_MODE_UNSPECIFIED";
    case TransitPreferences_TransitTravelMode.BUS:
      return "BUS";
    case TransitPreferences_TransitTravelMode.SUBWAY:
      return "SUBWAY";
    case TransitPreferences_TransitTravelMode.TRAIN:
      return "TRAIN";
    case TransitPreferences_TransitTravelMode.LIGHT_RAIL:
      return "LIGHT_RAIL";
    case TransitPreferences_TransitTravelMode.RAIL:
      return "RAIL";
    case TransitPreferences_TransitTravelMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Specifies routing preferences for transit routes. */
export enum TransitPreferences_TransitRoutingPreference {
  /** TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED - No preference specified. */
  TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED = 0,
  /**
   * LESS_WALKING - Indicates that the calculated route should prefer limited amounts of
   * walking.
   */
  LESS_WALKING = 1,
  /**
   * FEWER_TRANSFERS - Indicates that the calculated route should prefer a limited number of
   * transfers.
   */
  FEWER_TRANSFERS = 2,
  UNRECOGNIZED = -1,
}

export function transitPreferences_TransitRoutingPreferenceFromJSON(
  object: any,
): TransitPreferences_TransitRoutingPreference {
  switch (object) {
    case 0:
    case "TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED":
      return TransitPreferences_TransitRoutingPreference.TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED;
    case 1:
    case "LESS_WALKING":
      return TransitPreferences_TransitRoutingPreference.LESS_WALKING;
    case 2:
    case "FEWER_TRANSFERS":
      return TransitPreferences_TransitRoutingPreference.FEWER_TRANSFERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransitPreferences_TransitRoutingPreference.UNRECOGNIZED;
  }
}

export function transitPreferences_TransitRoutingPreferenceToJSON(
  object: TransitPreferences_TransitRoutingPreference,
): string {
  switch (object) {
    case TransitPreferences_TransitRoutingPreference.TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED:
      return "TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED";
    case TransitPreferences_TransitRoutingPreference.LESS_WALKING:
      return "LESS_WALKING";
    case TransitPreferences_TransitRoutingPreference.FEWER_TRANSFERS:
      return "FEWER_TRANSFERS";
    case TransitPreferences_TransitRoutingPreference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTransitPreferences(): TransitPreferences {
  return { allowedTravelModes: [], routingPreference: 0 };
}

export const TransitPreferences: MessageFns<TransitPreferences> = {
  encode(message: TransitPreferences, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.allowedTravelModes) {
      writer.int32(v);
    }
    writer.join();
    if (message.routingPreference !== 0) {
      writer.uint32(16).int32(message.routingPreference);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransitPreferences {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransitPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.allowedTravelModes.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allowedTravelModes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.routingPreference = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransitPreferences {
    return {
      allowedTravelModes: globalThis.Array.isArray(object?.allowedTravelModes)
        ? object.allowedTravelModes.map((e: any) => transitPreferences_TransitTravelModeFromJSON(e))
        : [],
      routingPreference: isSet(object.routingPreference)
        ? transitPreferences_TransitRoutingPreferenceFromJSON(object.routingPreference)
        : 0,
    };
  },

  toJSON(message: TransitPreferences): unknown {
    const obj: any = {};
    if (message.allowedTravelModes?.length) {
      obj.allowedTravelModes = message.allowedTravelModes.map((e) => transitPreferences_TransitTravelModeToJSON(e));
    }
    if (message.routingPreference !== 0) {
      obj.routingPreference = transitPreferences_TransitRoutingPreferenceToJSON(message.routingPreference);
    }
    return obj;
  },

  create(base?: DeepPartial<TransitPreferences>): TransitPreferences {
    return TransitPreferences.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TransitPreferences>): TransitPreferences {
    const message = createBaseTransitPreferences();
    message.allowedTravelModes = object.allowedTravelModes?.map((e) => e) || [];
    message.routingPreference = object.routingPreference ?? 0;
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