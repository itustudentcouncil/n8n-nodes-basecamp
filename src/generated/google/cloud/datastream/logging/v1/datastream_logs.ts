// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datastream/logging/v1/datastream_logs.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Stream_State, stream_StateFromJSON, stream_StateToJSON } from "../../v1/datastream_resources.js";

export const protobufPackage = "google.cloud.datastream.logging.v1";

/** Log definition for activities related to a stream. */
export interface StreamActivityLogEntry {
  /** A code representing the event. */
  eventCode: string;
  /** A free-text message describing the event. */
  eventMessage: string;
  /** A payload for a change in the state of a stream. */
  streamStateChange?: StreamActivityLogEntry_StreamStateChange | undefined;
}

/** Payload for a change in the state of a stream. */
export interface StreamActivityLogEntry_StreamStateChange {
  /** Output only. The new stream state. */
  newState: Stream_State;
}

function createBaseStreamActivityLogEntry(): StreamActivityLogEntry {
  return { eventCode: "", eventMessage: "", streamStateChange: undefined };
}

export const StreamActivityLogEntry: MessageFns<StreamActivityLogEntry> = {
  encode(message: StreamActivityLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.eventCode !== "") {
      writer.uint32(10).string(message.eventCode);
    }
    if (message.eventMessage !== "") {
      writer.uint32(18).string(message.eventMessage);
    }
    if (message.streamStateChange !== undefined) {
      StreamActivityLogEntry_StreamStateChange.encode(message.streamStateChange, writer.uint32(802).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StreamActivityLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamActivityLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventMessage = reader.string();
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.streamStateChange = StreamActivityLogEntry_StreamStateChange.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamActivityLogEntry {
    return {
      eventCode: isSet(object.eventCode) ? globalThis.String(object.eventCode) : "",
      eventMessage: isSet(object.eventMessage) ? globalThis.String(object.eventMessage) : "",
      streamStateChange: isSet(object.streamStateChange)
        ? StreamActivityLogEntry_StreamStateChange.fromJSON(object.streamStateChange)
        : undefined,
    };
  },

  toJSON(message: StreamActivityLogEntry): unknown {
    const obj: any = {};
    if (message.eventCode !== "") {
      obj.eventCode = message.eventCode;
    }
    if (message.eventMessage !== "") {
      obj.eventMessage = message.eventMessage;
    }
    if (message.streamStateChange !== undefined) {
      obj.streamStateChange = StreamActivityLogEntry_StreamStateChange.toJSON(message.streamStateChange);
    }
    return obj;
  },

  create(base?: DeepPartial<StreamActivityLogEntry>): StreamActivityLogEntry {
    return StreamActivityLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamActivityLogEntry>): StreamActivityLogEntry {
    const message = createBaseStreamActivityLogEntry();
    message.eventCode = object.eventCode ?? "";
    message.eventMessage = object.eventMessage ?? "";
    message.streamStateChange = (object.streamStateChange !== undefined && object.streamStateChange !== null)
      ? StreamActivityLogEntry_StreamStateChange.fromPartial(object.streamStateChange)
      : undefined;
    return message;
  },
};

function createBaseStreamActivityLogEntry_StreamStateChange(): StreamActivityLogEntry_StreamStateChange {
  return { newState: 0 };
}

export const StreamActivityLogEntry_StreamStateChange: MessageFns<StreamActivityLogEntry_StreamStateChange> = {
  encode(message: StreamActivityLogEntry_StreamStateChange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.newState !== 0) {
      writer.uint32(8).int32(message.newState);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StreamActivityLogEntry_StreamStateChange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamActivityLogEntry_StreamStateChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newState = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamActivityLogEntry_StreamStateChange {
    return { newState: isSet(object.newState) ? stream_StateFromJSON(object.newState) : 0 };
  },

  toJSON(message: StreamActivityLogEntry_StreamStateChange): unknown {
    const obj: any = {};
    if (message.newState !== 0) {
      obj.newState = stream_StateToJSON(message.newState);
    }
    return obj;
  },

  create(base?: DeepPartial<StreamActivityLogEntry_StreamStateChange>): StreamActivityLogEntry_StreamStateChange {
    return StreamActivityLogEntry_StreamStateChange.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamActivityLogEntry_StreamStateChange>): StreamActivityLogEntry_StreamStateChange {
    const message = createBaseStreamActivityLogEntry_StreamStateChange();
    message.newState = object.newState ?? 0;
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