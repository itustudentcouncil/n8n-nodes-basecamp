// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/notebooks/v1/event.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.notebooks.v1";

/** The definition of an Event for a managed / semi-managed notebook instance. */
export interface Event {
  /** Event report time. */
  reportTime:
    | Date
    | undefined;
  /** Event type. */
  type: Event_EventType;
  /** Optional. Event details. This field is used to pass event information. */
  details: { [key: string]: string };
}

/** The definition of the event types. */
export enum Event_EventType {
  /** EVENT_TYPE_UNSPECIFIED - Event is not specified. */
  EVENT_TYPE_UNSPECIFIED = 0,
  /** IDLE - The instance / runtime is idle */
  IDLE = 1,
  /**
   * HEARTBEAT - The instance / runtime is available.
   * This event indicates that instance / runtime underlying compute is
   * operational.
   */
  HEARTBEAT = 2,
  /**
   * HEALTH - The instance / runtime health is available.
   * This event indicates that instance / runtime health information.
   */
  HEALTH = 3,
  /**
   * MAINTENANCE - The instance / runtime is available.
   * This event allows instance / runtime to send Host maintenance
   * information to Control Plane.
   * https://cloud.google.com/compute/docs/gpus/gpu-host-maintenance
   */
  MAINTENANCE = 4,
  UNRECOGNIZED = -1,
}

export function event_EventTypeFromJSON(object: any): Event_EventType {
  switch (object) {
    case 0:
    case "EVENT_TYPE_UNSPECIFIED":
      return Event_EventType.EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "IDLE":
      return Event_EventType.IDLE;
    case 2:
    case "HEARTBEAT":
      return Event_EventType.HEARTBEAT;
    case 3:
    case "HEALTH":
      return Event_EventType.HEALTH;
    case 4:
    case "MAINTENANCE":
      return Event_EventType.MAINTENANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Event_EventType.UNRECOGNIZED;
  }
}

export function event_EventTypeToJSON(object: Event_EventType): string {
  switch (object) {
    case Event_EventType.EVENT_TYPE_UNSPECIFIED:
      return "EVENT_TYPE_UNSPECIFIED";
    case Event_EventType.IDLE:
      return "IDLE";
    case Event_EventType.HEARTBEAT:
      return "HEARTBEAT";
    case Event_EventType.HEALTH:
      return "HEALTH";
    case Event_EventType.MAINTENANCE:
      return "MAINTENANCE";
    case Event_EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Event_DetailsEntry {
  key: string;
  value: string;
}

function createBaseEvent(): Event {
  return { reportTime: undefined, type: 0, details: {} };
}

export const Event: MessageFns<Event> = {
  encode(message: Event, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.reportTime !== undefined) {
      Timestamp.encode(toTimestamp(message.reportTime), writer.uint32(10).fork()).join();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    Object.entries(message.details).forEach(([key, value]) => {
      Event_DetailsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reportTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = Event_DetailsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.details[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      reportTime: isSet(object.reportTime) ? fromJsonTimestamp(object.reportTime) : undefined,
      type: isSet(object.type) ? event_EventTypeFromJSON(object.type) : 0,
      details: isObject(object.details)
        ? Object.entries(object.details).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    if (message.reportTime !== undefined) {
      obj.reportTime = message.reportTime.toISOString();
    }
    if (message.type !== 0) {
      obj.type = event_EventTypeToJSON(message.type);
    }
    if (message.details) {
      const entries = Object.entries(message.details);
      if (entries.length > 0) {
        obj.details = {};
        entries.forEach(([k, v]) => {
          obj.details[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<Event>): Event {
    return Event.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.reportTime = object.reportTime ?? undefined;
    message.type = object.type ?? 0;
    message.details = Object.entries(object.details ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseEvent_DetailsEntry(): Event_DetailsEntry {
  return { key: "", value: "" };
}

export const Event_DetailsEntry: MessageFns<Event_DetailsEntry> = {
  encode(message: Event_DetailsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Event_DetailsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_DetailsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event_DetailsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Event_DetailsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<Event_DetailsEntry>): Event_DetailsEntry {
    return Event_DetailsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Event_DetailsEntry>): Event_DetailsEntry {
    const message = createBaseEvent_DetailsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
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
