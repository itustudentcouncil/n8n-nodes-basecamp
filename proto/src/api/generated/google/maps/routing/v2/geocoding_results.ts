// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/routing/v2/geocoding_results.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Status } from "../../../rpc/status.js";

export const protobufPackage = "google.maps.routing.v2";

/**
 * Contains [`GeocodedWaypoints`][google.maps.routing.v2.GeocodedWaypoint] for
 * origin, destination and intermediate waypoints. Only populated for address
 * waypoints.
 */
export interface GeocodingResults {
  /** Origin geocoded waypoint. */
  origin:
    | GeocodedWaypoint
    | undefined;
  /** Destination geocoded waypoint. */
  destination:
    | GeocodedWaypoint
    | undefined;
  /**
   * A list of intermediate geocoded waypoints each containing an index field
   * that corresponds to the zero-based position of the waypoint in the order
   * they were specified in the request.
   */
  intermediates: GeocodedWaypoint[];
}

/**
 * Details about the locations used as waypoints. Only populated for address
 * waypoints. Includes details about the geocoding results for the purposes of
 * determining what the address was geocoded to.
 */
export interface GeocodedWaypoint {
  /** Indicates the status code resulting from the geocoding operation. */
  geocoderStatus:
    | Status
    | undefined;
  /**
   * The index of the corresponding intermediate waypoint in the request.
   * Only populated if the corresponding waypoint is an intermediate
   * waypoint.
   */
  intermediateWaypointRequestIndex?:
    | number
    | undefined;
  /**
   * The type(s) of the result, in the form of zero or more type tags.
   * Supported types: [Address types and address component
   * types](https://developers.google.com/maps/documentation/geocoding/requests-geocoding#Types).
   */
  type: string[];
  /**
   * Indicates that the geocoder did not return an exact match for the original
   * request, though it was able to match part of the requested address. You may
   * wish to examine the original request for misspellings and/or an incomplete
   * address.
   */
  partialMatch: boolean;
  /** The place ID for this result. */
  placeId: string;
}

function createBaseGeocodingResults(): GeocodingResults {
  return { origin: undefined, destination: undefined, intermediates: [] };
}

export const GeocodingResults: MessageFns<GeocodingResults> = {
  encode(message: GeocodingResults, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.origin !== undefined) {
      GeocodedWaypoint.encode(message.origin, writer.uint32(10).fork()).join();
    }
    if (message.destination !== undefined) {
      GeocodedWaypoint.encode(message.destination, writer.uint32(18).fork()).join();
    }
    for (const v of message.intermediates) {
      GeocodedWaypoint.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GeocodingResults {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeocodingResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.origin = GeocodedWaypoint.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destination = GeocodedWaypoint.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.intermediates.push(GeocodedWaypoint.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GeocodingResults {
    return {
      origin: isSet(object.origin) ? GeocodedWaypoint.fromJSON(object.origin) : undefined,
      destination: isSet(object.destination) ? GeocodedWaypoint.fromJSON(object.destination) : undefined,
      intermediates: globalThis.Array.isArray(object?.intermediates)
        ? object.intermediates.map((e: any) => GeocodedWaypoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GeocodingResults): unknown {
    const obj: any = {};
    if (message.origin !== undefined) {
      obj.origin = GeocodedWaypoint.toJSON(message.origin);
    }
    if (message.destination !== undefined) {
      obj.destination = GeocodedWaypoint.toJSON(message.destination);
    }
    if (message.intermediates?.length) {
      obj.intermediates = message.intermediates.map((e) => GeocodedWaypoint.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GeocodingResults>): GeocodingResults {
    return GeocodingResults.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GeocodingResults>): GeocodingResults {
    const message = createBaseGeocodingResults();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? GeocodedWaypoint.fromPartial(object.origin)
      : undefined;
    message.destination = (object.destination !== undefined && object.destination !== null)
      ? GeocodedWaypoint.fromPartial(object.destination)
      : undefined;
    message.intermediates = object.intermediates?.map((e) => GeocodedWaypoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGeocodedWaypoint(): GeocodedWaypoint {
  return {
    geocoderStatus: undefined,
    intermediateWaypointRequestIndex: undefined,
    type: [],
    partialMatch: false,
    placeId: "",
  };
}

export const GeocodedWaypoint: MessageFns<GeocodedWaypoint> = {
  encode(message: GeocodedWaypoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.geocoderStatus !== undefined) {
      Status.encode(message.geocoderStatus, writer.uint32(10).fork()).join();
    }
    if (message.intermediateWaypointRequestIndex !== undefined) {
      writer.uint32(16).int32(message.intermediateWaypointRequestIndex);
    }
    for (const v of message.type) {
      writer.uint32(26).string(v!);
    }
    if (message.partialMatch !== false) {
      writer.uint32(32).bool(message.partialMatch);
    }
    if (message.placeId !== "") {
      writer.uint32(42).string(message.placeId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GeocodedWaypoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeocodedWaypoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.geocoderStatus = Status.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.intermediateWaypointRequestIndex = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.partialMatch = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.placeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GeocodedWaypoint {
    return {
      geocoderStatus: isSet(object.geocoderStatus) ? Status.fromJSON(object.geocoderStatus) : undefined,
      intermediateWaypointRequestIndex: isSet(object.intermediateWaypointRequestIndex)
        ? globalThis.Number(object.intermediateWaypointRequestIndex)
        : undefined,
      type: globalThis.Array.isArray(object?.type) ? object.type.map((e: any) => globalThis.String(e)) : [],
      partialMatch: isSet(object.partialMatch) ? globalThis.Boolean(object.partialMatch) : false,
      placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "",
    };
  },

  toJSON(message: GeocodedWaypoint): unknown {
    const obj: any = {};
    if (message.geocoderStatus !== undefined) {
      obj.geocoderStatus = Status.toJSON(message.geocoderStatus);
    }
    if (message.intermediateWaypointRequestIndex !== undefined) {
      obj.intermediateWaypointRequestIndex = Math.round(message.intermediateWaypointRequestIndex);
    }
    if (message.type?.length) {
      obj.type = message.type;
    }
    if (message.partialMatch !== false) {
      obj.partialMatch = message.partialMatch;
    }
    if (message.placeId !== "") {
      obj.placeId = message.placeId;
    }
    return obj;
  },

  create(base?: DeepPartial<GeocodedWaypoint>): GeocodedWaypoint {
    return GeocodedWaypoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GeocodedWaypoint>): GeocodedWaypoint {
    const message = createBaseGeocodedWaypoint();
    message.geocoderStatus = (object.geocoderStatus !== undefined && object.geocoderStatus !== null)
      ? Status.fromPartial(object.geocoderStatus)
      : undefined;
    message.intermediateWaypointRequestIndex = object.intermediateWaypointRequestIndex ?? undefined;
    message.type = object.type?.map((e) => e) || [];
    message.partialMatch = object.partialMatch ?? false;
    message.placeId = object.placeId ?? "";
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