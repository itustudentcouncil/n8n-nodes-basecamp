// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v2/log_entry.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.securitycenter.v2";

/** An individual entry in a log. */
export interface LogEntry {
  /** An individual entry in a log stored in Cloud Logging. */
  cloudLoggingEntry?: CloudLoggingEntry | undefined;
}

/**
 * Metadata taken from a [Cloud Logging
 * LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
 */
export interface CloudLoggingEntry {
  /** A unique identifier for the log entry. */
  insertId: string;
  /**
   * The type of the log (part of `log_name`. `log_name` is the resource name of
   * the log to which this log entry belongs). For example:
   * `cloudresourcemanager.googleapis.com/activity` Note that this field is not
   * URL-encoded, unlike in `LogEntry`.
   */
  logId: string;
  /**
   * The organization, folder, or project of the monitored resource that
   * produced this log entry.
   */
  resourceContainer: string;
  /** The time the event described by the log entry occurred. */
  timestamp: Date | undefined;
}

function createBaseLogEntry(): LogEntry {
  return { cloudLoggingEntry: undefined };
}

export const LogEntry: MessageFns<LogEntry> = {
  encode(message: LogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cloudLoggingEntry !== undefined) {
      CloudLoggingEntry.encode(message.cloudLoggingEntry, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cloudLoggingEntry = CloudLoggingEntry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogEntry {
    return {
      cloudLoggingEntry: isSet(object.cloudLoggingEntry)
        ? CloudLoggingEntry.fromJSON(object.cloudLoggingEntry)
        : undefined,
    };
  },

  toJSON(message: LogEntry): unknown {
    const obj: any = {};
    if (message.cloudLoggingEntry !== undefined) {
      obj.cloudLoggingEntry = CloudLoggingEntry.toJSON(message.cloudLoggingEntry);
    }
    return obj;
  },

  create(base?: DeepPartial<LogEntry>): LogEntry {
    return LogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LogEntry>): LogEntry {
    const message = createBaseLogEntry();
    message.cloudLoggingEntry = (object.cloudLoggingEntry !== undefined && object.cloudLoggingEntry !== null)
      ? CloudLoggingEntry.fromPartial(object.cloudLoggingEntry)
      : undefined;
    return message;
  },
};

function createBaseCloudLoggingEntry(): CloudLoggingEntry {
  return { insertId: "", logId: "", resourceContainer: "", timestamp: undefined };
}

export const CloudLoggingEntry: MessageFns<CloudLoggingEntry> = {
  encode(message: CloudLoggingEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.insertId !== "") {
      writer.uint32(10).string(message.insertId);
    }
    if (message.logId !== "") {
      writer.uint32(18).string(message.logId);
    }
    if (message.resourceContainer !== "") {
      writer.uint32(26).string(message.resourceContainer);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CloudLoggingEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudLoggingEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.insertId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceContainer = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloudLoggingEntry {
    return {
      insertId: isSet(object.insertId) ? globalThis.String(object.insertId) : "",
      logId: isSet(object.logId) ? globalThis.String(object.logId) : "",
      resourceContainer: isSet(object.resourceContainer) ? globalThis.String(object.resourceContainer) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: CloudLoggingEntry): unknown {
    const obj: any = {};
    if (message.insertId !== "") {
      obj.insertId = message.insertId;
    }
    if (message.logId !== "") {
      obj.logId = message.logId;
    }
    if (message.resourceContainer !== "") {
      obj.resourceContainer = message.resourceContainer;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<CloudLoggingEntry>): CloudLoggingEntry {
    return CloudLoggingEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloudLoggingEntry>): CloudLoggingEntry {
    const message = createBaseCloudLoggingEntry();
    message.insertId = object.insertId ?? "";
    message.logId = object.logId ?? "";
    message.resourceContainer = object.resourceContainer ?? "";
    message.timestamp = object.timestamp ?? undefined;
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