// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/routes/v1/compute_route_matrix_request.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import {
  RouteModifiers,
  RouteTravelMode,
  routeTravelModeFromJSON,
  routeTravelModeToJSON,
  RoutingPreference,
  routingPreferenceFromJSON,
  routingPreferenceToJSON,
} from "./compute_routes_request.js";
import { Waypoint } from "./waypoint.js";

export const protobufPackage = "google.maps.routes.v1";

/** ComputeRouteMatrix request message */
export interface ComputeRouteMatrixRequest {
  /**
   * Required. Array of origins, which determines the rows of the response matrix.
   * Several size restrictions apply to the cardinality of origins and
   * destinations:
   *
   * * The number of elements (origins × destinations) must be no greater than
   * 625 in any case.
   * * The number of elements (origins × destinations) must be no greater than
   * 100 if routing_preference is set to `TRAFFIC_AWARE_OPTIMAL`.
   * * The number of waypoints (origins + destinations) specified as `place_id`
   * must be no greater than 50.
   */
  origins: RouteMatrixOrigin[];
  /** Required. Array of destinations, which determines the columns of the response matrix. */
  destinations: RouteMatrixDestination[];
  /** Optional. Specifies the mode of transportation. */
  travelMode: RouteTravelMode;
  /**
   * Optional. Specifies how to compute the route. The server attempts to use the selected
   * routing preference to compute the route. If the routing preference results
   * in an error or an extra long latency, an error is returned. In the future,
   * we might implement a fallback mechanism to use a different option when the
   * preferred option does not give a valid result. You can specify this option
   * only when the `travel_mode` is `DRIVE` or `TWO_WHEELER`, otherwise the
   * request fails.
   */
  routingPreference: RoutingPreference;
  /**
   * Optional. The departure time. If you don't set this value, this defaults to the time
   * that you made the request. If you set this value to a time that has already
   * occurred, the request fails.
   */
  departureTime: Date | undefined;
}

/** A single origin for ComputeRouteMatrixRequest */
export interface RouteMatrixOrigin {
  /** Required. Origin waypoint */
  waypoint:
    | Waypoint
    | undefined;
  /** Optional. Modifiers for every route that takes this as the origin */
  routeModifiers: RouteModifiers | undefined;
}

/** A single destination for ComputeRouteMatrixRequest */
export interface RouteMatrixDestination {
  /** Required. Destination waypoint */
  waypoint: Waypoint | undefined;
}

function createBaseComputeRouteMatrixRequest(): ComputeRouteMatrixRequest {
  return { origins: [], destinations: [], travelMode: 0, routingPreference: 0, departureTime: undefined };
}

export const ComputeRouteMatrixRequest: MessageFns<ComputeRouteMatrixRequest> = {
  encode(message: ComputeRouteMatrixRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.origins) {
      RouteMatrixOrigin.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.destinations) {
      RouteMatrixDestination.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.travelMode !== 0) {
      writer.uint32(24).int32(message.travelMode);
    }
    if (message.routingPreference !== 0) {
      writer.uint32(32).int32(message.routingPreference);
    }
    if (message.departureTime !== undefined) {
      Timestamp.encode(toTimestamp(message.departureTime), writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ComputeRouteMatrixRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComputeRouteMatrixRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.origins.push(RouteMatrixOrigin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destinations.push(RouteMatrixDestination.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.travelMode = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.routingPreference = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.departureTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ComputeRouteMatrixRequest {
    return {
      origins: globalThis.Array.isArray(object?.origins)
        ? object.origins.map((e: any) => RouteMatrixOrigin.fromJSON(e))
        : [],
      destinations: globalThis.Array.isArray(object?.destinations)
        ? object.destinations.map((e: any) => RouteMatrixDestination.fromJSON(e))
        : [],
      travelMode: isSet(object.travelMode) ? routeTravelModeFromJSON(object.travelMode) : 0,
      routingPreference: isSet(object.routingPreference) ? routingPreferenceFromJSON(object.routingPreference) : 0,
      departureTime: isSet(object.departureTime) ? fromJsonTimestamp(object.departureTime) : undefined,
    };
  },

  toJSON(message: ComputeRouteMatrixRequest): unknown {
    const obj: any = {};
    if (message.origins?.length) {
      obj.origins = message.origins.map((e) => RouteMatrixOrigin.toJSON(e));
    }
    if (message.destinations?.length) {
      obj.destinations = message.destinations.map((e) => RouteMatrixDestination.toJSON(e));
    }
    if (message.travelMode !== 0) {
      obj.travelMode = routeTravelModeToJSON(message.travelMode);
    }
    if (message.routingPreference !== 0) {
      obj.routingPreference = routingPreferenceToJSON(message.routingPreference);
    }
    if (message.departureTime !== undefined) {
      obj.departureTime = message.departureTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<ComputeRouteMatrixRequest>): ComputeRouteMatrixRequest {
    return ComputeRouteMatrixRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ComputeRouteMatrixRequest>): ComputeRouteMatrixRequest {
    const message = createBaseComputeRouteMatrixRequest();
    message.origins = object.origins?.map((e) => RouteMatrixOrigin.fromPartial(e)) || [];
    message.destinations = object.destinations?.map((e) => RouteMatrixDestination.fromPartial(e)) || [];
    message.travelMode = object.travelMode ?? 0;
    message.routingPreference = object.routingPreference ?? 0;
    message.departureTime = object.departureTime ?? undefined;
    return message;
  },
};

function createBaseRouteMatrixOrigin(): RouteMatrixOrigin {
  return { waypoint: undefined, routeModifiers: undefined };
}

export const RouteMatrixOrigin: MessageFns<RouteMatrixOrigin> = {
  encode(message: RouteMatrixOrigin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.waypoint !== undefined) {
      Waypoint.encode(message.waypoint, writer.uint32(10).fork()).join();
    }
    if (message.routeModifiers !== undefined) {
      RouteModifiers.encode(message.routeModifiers, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteMatrixOrigin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteMatrixOrigin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.waypoint = Waypoint.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.routeModifiers = RouteModifiers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RouteMatrixOrigin {
    return {
      waypoint: isSet(object.waypoint) ? Waypoint.fromJSON(object.waypoint) : undefined,
      routeModifiers: isSet(object.routeModifiers) ? RouteModifiers.fromJSON(object.routeModifiers) : undefined,
    };
  },

  toJSON(message: RouteMatrixOrigin): unknown {
    const obj: any = {};
    if (message.waypoint !== undefined) {
      obj.waypoint = Waypoint.toJSON(message.waypoint);
    }
    if (message.routeModifiers !== undefined) {
      obj.routeModifiers = RouteModifiers.toJSON(message.routeModifiers);
    }
    return obj;
  },

  create(base?: DeepPartial<RouteMatrixOrigin>): RouteMatrixOrigin {
    return RouteMatrixOrigin.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RouteMatrixOrigin>): RouteMatrixOrigin {
    const message = createBaseRouteMatrixOrigin();
    message.waypoint = (object.waypoint !== undefined && object.waypoint !== null)
      ? Waypoint.fromPartial(object.waypoint)
      : undefined;
    message.routeModifiers = (object.routeModifiers !== undefined && object.routeModifiers !== null)
      ? RouteModifiers.fromPartial(object.routeModifiers)
      : undefined;
    return message;
  },
};

function createBaseRouteMatrixDestination(): RouteMatrixDestination {
  return { waypoint: undefined };
}

export const RouteMatrixDestination: MessageFns<RouteMatrixDestination> = {
  encode(message: RouteMatrixDestination, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.waypoint !== undefined) {
      Waypoint.encode(message.waypoint, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteMatrixDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteMatrixDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.waypoint = Waypoint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RouteMatrixDestination {
    return { waypoint: isSet(object.waypoint) ? Waypoint.fromJSON(object.waypoint) : undefined };
  },

  toJSON(message: RouteMatrixDestination): unknown {
    const obj: any = {};
    if (message.waypoint !== undefined) {
      obj.waypoint = Waypoint.toJSON(message.waypoint);
    }
    return obj;
  },

  create(base?: DeepPartial<RouteMatrixDestination>): RouteMatrixDestination {
    return RouteMatrixDestination.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RouteMatrixDestination>): RouteMatrixDestination {
    const message = createBaseRouteMatrixDestination();
    message.waypoint = (object.waypoint !== undefined && object.waypoint !== null)
      ? Waypoint.fromPartial(object.waypoint)
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

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