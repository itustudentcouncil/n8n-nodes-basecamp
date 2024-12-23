// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/beyondcorp/appconnectors/v1/resource_info.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Any } from "../../../../protobuf/any.js";
import { Timestamp } from "../../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.beyondcorp.appconnectors.v1";

/** HealthStatus represents the health status. */
export enum HealthStatus {
  /** HEALTH_STATUS_UNSPECIFIED - Health status is unknown: not initialized or failed to retrieve. */
  HEALTH_STATUS_UNSPECIFIED = 0,
  /** HEALTHY - The resource is healthy. */
  HEALTHY = 1,
  /** UNHEALTHY - The resource is unhealthy. */
  UNHEALTHY = 2,
  /** UNRESPONSIVE - The resource is unresponsive. */
  UNRESPONSIVE = 3,
  /** DEGRADED - Some sub-resources are UNHEALTHY. */
  DEGRADED = 4,
  UNRECOGNIZED = -1,
}

export function healthStatusFromJSON(object: any): HealthStatus {
  switch (object) {
    case 0:
    case "HEALTH_STATUS_UNSPECIFIED":
      return HealthStatus.HEALTH_STATUS_UNSPECIFIED;
    case 1:
    case "HEALTHY":
      return HealthStatus.HEALTHY;
    case 2:
    case "UNHEALTHY":
      return HealthStatus.UNHEALTHY;
    case 3:
    case "UNRESPONSIVE":
      return HealthStatus.UNRESPONSIVE;
    case 4:
    case "DEGRADED":
      return HealthStatus.DEGRADED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HealthStatus.UNRECOGNIZED;
  }
}

export function healthStatusToJSON(object: HealthStatus): string {
  switch (object) {
    case HealthStatus.HEALTH_STATUS_UNSPECIFIED:
      return "HEALTH_STATUS_UNSPECIFIED";
    case HealthStatus.HEALTHY:
      return "HEALTHY";
    case HealthStatus.UNHEALTHY:
      return "UNHEALTHY";
    case HealthStatus.UNRESPONSIVE:
      return "UNRESPONSIVE";
    case HealthStatus.DEGRADED:
      return "DEGRADED";
    case HealthStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * ResourceInfo represents the information/status of an app connector resource.
 * Such as:
 * - remote_agent
 *   - container
 *     - runtime
 *     - appgateway
 *       - appconnector
 *         - appconnection
 *           - tunnel
 *       - logagent
 */
export interface ResourceInfo {
  /** Required. Unique Id for the resource. */
  id: string;
  /**
   * Overall health status. Overall status is derived based on the status of
   * each sub level resources.
   */
  status: HealthStatus;
  /** Specific details for the resource. This is for internal use only. */
  resource:
    | Any
    | undefined;
  /**
   * The timestamp to collect the info. It is suggested to be set by
   * the topmost level resource only.
   */
  time:
    | Date
    | undefined;
  /** List of Info for the sub level resources. */
  sub: ResourceInfo[];
}

function createBaseResourceInfo(): ResourceInfo {
  return { id: "", status: 0, resource: undefined, time: undefined, sub: [] };
}

export const ResourceInfo: MessageFns<ResourceInfo> = {
  encode(message: ResourceInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.resource !== undefined) {
      Any.encode(message.resource, writer.uint32(26).fork()).join();
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).join();
    }
    for (const v of message.sub) {
      ResourceInfo.encode(v!, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resource = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sub.push(ResourceInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceInfo {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      status: isSet(object.status) ? healthStatusFromJSON(object.status) : 0,
      resource: isSet(object.resource) ? Any.fromJSON(object.resource) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      sub: globalThis.Array.isArray(object?.sub) ? object.sub.map((e: any) => ResourceInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourceInfo): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.status !== 0) {
      obj.status = healthStatusToJSON(message.status);
    }
    if (message.resource !== undefined) {
      obj.resource = Any.toJSON(message.resource);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.sub?.length) {
      obj.sub = message.sub.map((e) => ResourceInfo.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ResourceInfo>): ResourceInfo {
    return ResourceInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourceInfo>): ResourceInfo {
    const message = createBaseResourceInfo();
    message.id = object.id ?? "";
    message.status = object.status ?? 0;
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Any.fromPartial(object.resource)
      : undefined;
    message.time = object.time ?? undefined;
    message.sub = object.sub?.map((e) => ResourceInfo.fromPartial(e)) || [];
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
