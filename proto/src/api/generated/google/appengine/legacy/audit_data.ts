// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/appengine/legacy/audit_data.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.appengine.legacy";

/** Admin Console legacy audit log. */
export interface AuditData {
  /**
   * Text description of the admin event.
   * This is the "Event" column in Admin Console's Admin Logs.
   */
  eventMessage: string;
  /**
   * Arbitrary event data.
   * This is the "Result" column in Admin Console's Admin Logs.
   */
  eventData: { [key: string]: string };
}

export interface AuditData_EventDataEntry {
  key: string;
  value: string;
}

function createBaseAuditData(): AuditData {
  return { eventMessage: "", eventData: {} };
}

export const AuditData: MessageFns<AuditData> = {
  encode(message: AuditData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.eventMessage !== "") {
      writer.uint32(10).string(message.eventMessage);
    }
    Object.entries(message.eventData).forEach(([key, value]) => {
      AuditData_EventDataEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventMessage = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = AuditData_EventDataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.eventData[entry2.key] = entry2.value;
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

  fromJSON(object: any): AuditData {
    return {
      eventMessage: isSet(object.eventMessage) ? globalThis.String(object.eventMessage) : "",
      eventData: isObject(object.eventData)
        ? Object.entries(object.eventData).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: AuditData): unknown {
    const obj: any = {};
    if (message.eventMessage !== "") {
      obj.eventMessage = message.eventMessage;
    }
    if (message.eventData) {
      const entries = Object.entries(message.eventData);
      if (entries.length > 0) {
        obj.eventData = {};
        entries.forEach(([k, v]) => {
          obj.eventData[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<AuditData>): AuditData {
    return AuditData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditData>): AuditData {
    const message = createBaseAuditData();
    message.eventMessage = object.eventMessage ?? "";
    message.eventData = Object.entries(object.eventData ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseAuditData_EventDataEntry(): AuditData_EventDataEntry {
  return { key: "", value: "" };
}

export const AuditData_EventDataEntry: MessageFns<AuditData_EventDataEntry> = {
  encode(message: AuditData_EventDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditData_EventDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditData_EventDataEntry();
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

  fromJSON(object: any): AuditData_EventDataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: AuditData_EventDataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<AuditData_EventDataEntry>): AuditData_EventDataEntry {
    return AuditData_EventDataEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditData_EventDataEntry>): AuditData_EventDataEntry {
    const message = createBaseAuditData_EventDataEntry();
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