// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/appengine/v1beta/instance.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../protobuf/timestamp.js";

export const protobufPackage = "google.appengine.v1beta";

/**
 * An Instance resource is the computing unit that App Engine uses to
 * automatically scale an application.
 */
export interface Instance {
  /**
   * Output only. Full path to the Instance resource in the API.
   * Example: `apps/myapp/services/default/versions/v1/instances/instance-1`.
   */
  name: string;
  /**
   * Output only. Relative name of the instance within the version.
   * Example: `instance-1`.
   */
  id: string;
  /** Output only. App Engine release this instance is running on. */
  appEngineRelease: string;
  /** Output only. Availability of the instance. */
  availability: Instance_Availability;
  /**
   * Output only. Name of the virtual machine where this instance lives. Only applicable
   * for instances in App Engine flexible environment.
   */
  vmName: string;
  /**
   * Output only. Zone where the virtual machine is located. Only applicable for instances
   * in App Engine flexible environment.
   */
  vmZoneName: string;
  /**
   * Output only. Virtual machine ID of this instance. Only applicable for instances in
   * App Engine flexible environment.
   */
  vmId: string;
  /**
   * Output only. Time that this instance was started.
   *
   * @OutputOnly
   */
  startTime:
    | Date
    | undefined;
  /** Output only. Number of requests since this instance was started. */
  requests: number;
  /** Output only. Number of errors since this instance was started. */
  errors: number;
  /** Output only. Average queries per second (QPS) over the last minute. */
  qps: number;
  /** Output only. Average latency (ms) over the last minute. */
  averageLatency: number;
  /** Output only. Total memory in use (bytes). */
  memoryUsage: Long;
  /**
   * Output only. Status of the virtual machine where this instance lives. Only applicable
   * for instances in App Engine flexible environment.
   */
  vmStatus: string;
  /**
   * Output only. Whether this instance is in debug mode. Only applicable for instances in
   * App Engine flexible environment.
   */
  vmDebugEnabled: boolean;
  /**
   * Output only. The IP address of this instance. Only applicable for instances in App
   * Engine flexible environment.
   */
  vmIp: string;
  /**
   * Output only. The liveness health check of this instance. Only applicable for instances
   * in App Engine flexible environment.
   */
  vmLiveness: Instance_Liveness_LivenessState;
}

/** Availability of the instance. */
export enum Instance_Availability {
  UNSPECIFIED = 0,
  RESIDENT = 1,
  DYNAMIC = 2,
  UNRECOGNIZED = -1,
}

export function instance_AvailabilityFromJSON(object: any): Instance_Availability {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Instance_Availability.UNSPECIFIED;
    case 1:
    case "RESIDENT":
      return Instance_Availability.RESIDENT;
    case 2:
    case "DYNAMIC":
      return Instance_Availability.DYNAMIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Instance_Availability.UNRECOGNIZED;
  }
}

export function instance_AvailabilityToJSON(object: Instance_Availability): string {
  switch (object) {
    case Instance_Availability.UNSPECIFIED:
      return "UNSPECIFIED";
    case Instance_Availability.RESIDENT:
      return "RESIDENT";
    case Instance_Availability.DYNAMIC:
      return "DYNAMIC";
    case Instance_Availability.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Wrapper for LivenessState enum. */
export interface Instance_Liveness {
}

/** Liveness health check status for Flex instances. */
export enum Instance_Liveness_LivenessState {
  /**
   * LIVENESS_STATE_UNSPECIFIED - There is no liveness health check for the instance. Only applicable for
   * instances in App Engine standard environment.
   */
  LIVENESS_STATE_UNSPECIFIED = 0,
  /**
   * UNKNOWN - The health checking system is aware of the instance but its health is
   * not known at the moment.
   */
  UNKNOWN = 1,
  /**
   * HEALTHY - The instance is reachable i.e. a connection to the application health
   * checking endpoint can be established, and conforms to the requirements
   * defined by the health check.
   */
  HEALTHY = 2,
  /**
   * UNHEALTHY - The instance is reachable, but does not conform to the requirements
   * defined by the health check.
   */
  UNHEALTHY = 3,
  /**
   * DRAINING - The instance is being drained. The existing connections to the instance
   * have time to complete, but the new ones are being refused.
   */
  DRAINING = 4,
  /**
   * TIMEOUT - The instance is unreachable i.e. a connection to the application health
   * checking endpoint cannot be established, or the server does not respond
   * within the specified timeout.
   */
  TIMEOUT = 5,
  UNRECOGNIZED = -1,
}

export function instance_Liveness_LivenessStateFromJSON(object: any): Instance_Liveness_LivenessState {
  switch (object) {
    case 0:
    case "LIVENESS_STATE_UNSPECIFIED":
      return Instance_Liveness_LivenessState.LIVENESS_STATE_UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return Instance_Liveness_LivenessState.UNKNOWN;
    case 2:
    case "HEALTHY":
      return Instance_Liveness_LivenessState.HEALTHY;
    case 3:
    case "UNHEALTHY":
      return Instance_Liveness_LivenessState.UNHEALTHY;
    case 4:
    case "DRAINING":
      return Instance_Liveness_LivenessState.DRAINING;
    case 5:
    case "TIMEOUT":
      return Instance_Liveness_LivenessState.TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Instance_Liveness_LivenessState.UNRECOGNIZED;
  }
}

export function instance_Liveness_LivenessStateToJSON(object: Instance_Liveness_LivenessState): string {
  switch (object) {
    case Instance_Liveness_LivenessState.LIVENESS_STATE_UNSPECIFIED:
      return "LIVENESS_STATE_UNSPECIFIED";
    case Instance_Liveness_LivenessState.UNKNOWN:
      return "UNKNOWN";
    case Instance_Liveness_LivenessState.HEALTHY:
      return "HEALTHY";
    case Instance_Liveness_LivenessState.UNHEALTHY:
      return "UNHEALTHY";
    case Instance_Liveness_LivenessState.DRAINING:
      return "DRAINING";
    case Instance_Liveness_LivenessState.TIMEOUT:
      return "TIMEOUT";
    case Instance_Liveness_LivenessState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseInstance(): Instance {
  return {
    name: "",
    id: "",
    appEngineRelease: "",
    availability: 0,
    vmName: "",
    vmZoneName: "",
    vmId: "",
    startTime: undefined,
    requests: 0,
    errors: 0,
    qps: 0,
    averageLatency: 0,
    memoryUsage: Long.ZERO,
    vmStatus: "",
    vmDebugEnabled: false,
    vmIp: "",
    vmLiveness: 0,
  };
}

export const Instance: MessageFns<Instance> = {
  encode(message: Instance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.appEngineRelease !== "") {
      writer.uint32(26).string(message.appEngineRelease);
    }
    if (message.availability !== 0) {
      writer.uint32(32).int32(message.availability);
    }
    if (message.vmName !== "") {
      writer.uint32(42).string(message.vmName);
    }
    if (message.vmZoneName !== "") {
      writer.uint32(50).string(message.vmZoneName);
    }
    if (message.vmId !== "") {
      writer.uint32(58).string(message.vmId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(66).fork()).join();
    }
    if (message.requests !== 0) {
      writer.uint32(72).int32(message.requests);
    }
    if (message.errors !== 0) {
      writer.uint32(80).int32(message.errors);
    }
    if (message.qps !== 0) {
      writer.uint32(93).float(message.qps);
    }
    if (message.averageLatency !== 0) {
      writer.uint32(96).int32(message.averageLatency);
    }
    if (!message.memoryUsage.equals(Long.ZERO)) {
      writer.uint32(104).int64(message.memoryUsage.toString());
    }
    if (message.vmStatus !== "") {
      writer.uint32(114).string(message.vmStatus);
    }
    if (message.vmDebugEnabled !== false) {
      writer.uint32(120).bool(message.vmDebugEnabled);
    }
    if (message.vmIp !== "") {
      writer.uint32(130).string(message.vmIp);
    }
    if (message.vmLiveness !== 0) {
      writer.uint32(136).int32(message.vmLiveness);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Instance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.appEngineRelease = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.availability = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vmName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.vmZoneName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.vmId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.requests = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.errors = reader.int32();
          continue;
        case 11:
          if (tag !== 93) {
            break;
          }

          message.qps = reader.float();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.averageLatency = reader.int32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.memoryUsage = Long.fromString(reader.int64().toString());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.vmStatus = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.vmDebugEnabled = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.vmIp = reader.string();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.vmLiveness = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instance {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      appEngineRelease: isSet(object.appEngineRelease) ? globalThis.String(object.appEngineRelease) : "",
      availability: isSet(object.availability) ? instance_AvailabilityFromJSON(object.availability) : 0,
      vmName: isSet(object.vmName) ? globalThis.String(object.vmName) : "",
      vmZoneName: isSet(object.vmZoneName) ? globalThis.String(object.vmZoneName) : "",
      vmId: isSet(object.vmId) ? globalThis.String(object.vmId) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      requests: isSet(object.requests) ? globalThis.Number(object.requests) : 0,
      errors: isSet(object.errors) ? globalThis.Number(object.errors) : 0,
      qps: isSet(object.qps) ? globalThis.Number(object.qps) : 0,
      averageLatency: isSet(object.averageLatency) ? globalThis.Number(object.averageLatency) : 0,
      memoryUsage: isSet(object.memoryUsage) ? Long.fromValue(object.memoryUsage) : Long.ZERO,
      vmStatus: isSet(object.vmStatus) ? globalThis.String(object.vmStatus) : "",
      vmDebugEnabled: isSet(object.vmDebugEnabled) ? globalThis.Boolean(object.vmDebugEnabled) : false,
      vmIp: isSet(object.vmIp) ? globalThis.String(object.vmIp) : "",
      vmLiveness: isSet(object.vmLiveness) ? instance_Liveness_LivenessStateFromJSON(object.vmLiveness) : 0,
    };
  },

  toJSON(message: Instance): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.appEngineRelease !== "") {
      obj.appEngineRelease = message.appEngineRelease;
    }
    if (message.availability !== 0) {
      obj.availability = instance_AvailabilityToJSON(message.availability);
    }
    if (message.vmName !== "") {
      obj.vmName = message.vmName;
    }
    if (message.vmZoneName !== "") {
      obj.vmZoneName = message.vmZoneName;
    }
    if (message.vmId !== "") {
      obj.vmId = message.vmId;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.requests !== 0) {
      obj.requests = Math.round(message.requests);
    }
    if (message.errors !== 0) {
      obj.errors = Math.round(message.errors);
    }
    if (message.qps !== 0) {
      obj.qps = message.qps;
    }
    if (message.averageLatency !== 0) {
      obj.averageLatency = Math.round(message.averageLatency);
    }
    if (!message.memoryUsage.equals(Long.ZERO)) {
      obj.memoryUsage = (message.memoryUsage || Long.ZERO).toString();
    }
    if (message.vmStatus !== "") {
      obj.vmStatus = message.vmStatus;
    }
    if (message.vmDebugEnabled !== false) {
      obj.vmDebugEnabled = message.vmDebugEnabled;
    }
    if (message.vmIp !== "") {
      obj.vmIp = message.vmIp;
    }
    if (message.vmLiveness !== 0) {
      obj.vmLiveness = instance_Liveness_LivenessStateToJSON(message.vmLiveness);
    }
    return obj;
  },

  create(base?: DeepPartial<Instance>): Instance {
    return Instance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance>): Instance {
    const message = createBaseInstance();
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    message.appEngineRelease = object.appEngineRelease ?? "";
    message.availability = object.availability ?? 0;
    message.vmName = object.vmName ?? "";
    message.vmZoneName = object.vmZoneName ?? "";
    message.vmId = object.vmId ?? "";
    message.startTime = object.startTime ?? undefined;
    message.requests = object.requests ?? 0;
    message.errors = object.errors ?? 0;
    message.qps = object.qps ?? 0;
    message.averageLatency = object.averageLatency ?? 0;
    message.memoryUsage = (object.memoryUsage !== undefined && object.memoryUsage !== null)
      ? Long.fromValue(object.memoryUsage)
      : Long.ZERO;
    message.vmStatus = object.vmStatus ?? "";
    message.vmDebugEnabled = object.vmDebugEnabled ?? false;
    message.vmIp = object.vmIp ?? "";
    message.vmLiveness = object.vmLiveness ?? 0;
    return message;
  },
};

function createBaseInstance_Liveness(): Instance_Liveness {
  return {};
}

export const Instance_Liveness: MessageFns<Instance_Liveness> = {
  encode(_: Instance_Liveness, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Instance_Liveness {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance_Liveness();
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

  fromJSON(_: any): Instance_Liveness {
    return {};
  },

  toJSON(_: Instance_Liveness): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Instance_Liveness>): Instance_Liveness {
    return Instance_Liveness.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Instance_Liveness>): Instance_Liveness {
    const message = createBaseInstance_Liveness();
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