// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/notebooks/logging/v1/runtime_log.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.notebooks.logging.v1";

/** Log content of an event related to a runtime. */
export interface RuntimeEvent {
  /** Required. Type of event. */
  type: RuntimeEvent_EventType;
  /** Optional. Additional metadata for the event. */
  details: { [key: string]: string };
}

/** Defines event type. */
export enum RuntimeEvent_EventType {
  /** EVENT_TYPE_UNSPECIFIED - Event is not specified. */
  EVENT_TYPE_UNSPECIFIED = 0,
  /** RUNTIME_STATE_CHANGE_EVENT - Runtime state has been updated. */
  RUNTIME_STATE_CHANGE_EVENT = 1,
  UNRECOGNIZED = -1,
}

export function runtimeEvent_EventTypeFromJSON(object: any): RuntimeEvent_EventType {
  switch (object) {
    case 0:
    case "EVENT_TYPE_UNSPECIFIED":
      return RuntimeEvent_EventType.EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "RUNTIME_STATE_CHANGE_EVENT":
      return RuntimeEvent_EventType.RUNTIME_STATE_CHANGE_EVENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RuntimeEvent_EventType.UNRECOGNIZED;
  }
}

export function runtimeEvent_EventTypeToJSON(object: RuntimeEvent_EventType): string {
  switch (object) {
    case RuntimeEvent_EventType.EVENT_TYPE_UNSPECIFIED:
      return "EVENT_TYPE_UNSPECIFIED";
    case RuntimeEvent_EventType.RUNTIME_STATE_CHANGE_EVENT:
      return "RUNTIME_STATE_CHANGE_EVENT";
    case RuntimeEvent_EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RuntimeEvent_DetailsEntry {
  key: string;
  value: string;
}

function createBaseRuntimeEvent(): RuntimeEvent {
  return { type: 0, details: {} };
}

export const RuntimeEvent: MessageFns<RuntimeEvent> = {
  encode(message: RuntimeEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    Object.entries(message.details).forEach(([key, value]) => {
      RuntimeEvent_DetailsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RuntimeEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = RuntimeEvent_DetailsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.details[entry2.key] = entry2.value;
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

  fromJSON(object: any): RuntimeEvent {
    return {
      type: isSet(object.type) ? runtimeEvent_EventTypeFromJSON(object.type) : 0,
      details: isObject(object.details)
        ? Object.entries(object.details).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: RuntimeEvent): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = runtimeEvent_EventTypeToJSON(message.type);
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

  create(base?: DeepPartial<RuntimeEvent>): RuntimeEvent {
    return RuntimeEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RuntimeEvent>): RuntimeEvent {
    const message = createBaseRuntimeEvent();
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

function createBaseRuntimeEvent_DetailsEntry(): RuntimeEvent_DetailsEntry {
  return { key: "", value: "" };
}

export const RuntimeEvent_DetailsEntry: MessageFns<RuntimeEvent_DetailsEntry> = {
  encode(message: RuntimeEvent_DetailsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RuntimeEvent_DetailsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimeEvent_DetailsEntry();
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

  fromJSON(object: any): RuntimeEvent_DetailsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: RuntimeEvent_DetailsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<RuntimeEvent_DetailsEntry>): RuntimeEvent_DetailsEntry {
    return RuntimeEvent_DetailsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RuntimeEvent_DetailsEntry>): RuntimeEvent_DetailsEntry {
    const message = createBaseRuntimeEvent_DetailsEntry();
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