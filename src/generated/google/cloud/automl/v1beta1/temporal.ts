// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/automl/v1beta1/temporal.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../protobuf/duration.js";

export const protobufPackage = "google.cloud.automl.v1beta1";

/** A time period inside of an example that has a time dimension (e.g. video). */
export interface TimeSegment {
  /**
   * Start of the time segment (inclusive), represented as the duration since
   * the example start.
   */
  startTimeOffset:
    | Duration
    | undefined;
  /**
   * End of the time segment (exclusive), represented as the duration since the
   * example start.
   */
  endTimeOffset: Duration | undefined;
}

function createBaseTimeSegment(): TimeSegment {
  return { startTimeOffset: undefined, endTimeOffset: undefined };
}

export const TimeSegment: MessageFns<TimeSegment> = {
  encode(message: TimeSegment, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.startTimeOffset !== undefined) {
      Duration.encode(message.startTimeOffset, writer.uint32(10).fork()).join();
    }
    if (message.endTimeOffset !== undefined) {
      Duration.encode(message.endTimeOffset, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSegment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSegment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startTimeOffset = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endTimeOffset = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSegment {
    return {
      startTimeOffset: isSet(object.startTimeOffset) ? Duration.fromJSON(object.startTimeOffset) : undefined,
      endTimeOffset: isSet(object.endTimeOffset) ? Duration.fromJSON(object.endTimeOffset) : undefined,
    };
  },

  toJSON(message: TimeSegment): unknown {
    const obj: any = {};
    if (message.startTimeOffset !== undefined) {
      obj.startTimeOffset = Duration.toJSON(message.startTimeOffset);
    }
    if (message.endTimeOffset !== undefined) {
      obj.endTimeOffset = Duration.toJSON(message.endTimeOffset);
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSegment>): TimeSegment {
    return TimeSegment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSegment>): TimeSegment {
    const message = createBaseTimeSegment();
    message.startTimeOffset = (object.startTimeOffset !== undefined && object.startTimeOffset !== null)
      ? Duration.fromPartial(object.startTimeOffset)
      : undefined;
    message.endTimeOffset = (object.endTimeOffset !== undefined && object.endTimeOffset !== null)
      ? Duration.fromPartial(object.endTimeOffset)
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