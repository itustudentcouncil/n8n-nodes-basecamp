// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/bigtable/admin/v2/common.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.bigtable.admin.v2";

/** Storage media types for persisting Bigtable data. */
export enum StorageType {
  /** STORAGE_TYPE_UNSPECIFIED - The user did not specify a storage type. */
  STORAGE_TYPE_UNSPECIFIED = 0,
  /** SSD - Flash (SSD) storage should be used. */
  SSD = 1,
  /** HDD - Magnetic drive (HDD) storage should be used. */
  HDD = 2,
  UNRECOGNIZED = -1,
}

export function storageTypeFromJSON(object: any): StorageType {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_UNSPECIFIED;
    case 1:
    case "SSD":
      return StorageType.SSD;
    case 2:
    case "HDD":
      return StorageType.HDD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}

export function storageTypeToJSON(object: StorageType): string {
  switch (object) {
    case StorageType.STORAGE_TYPE_UNSPECIFIED:
      return "STORAGE_TYPE_UNSPECIFIED";
    case StorageType.SSD:
      return "SSD";
    case StorageType.HDD:
      return "HDD";
    case StorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Encapsulates progress related information for a Cloud Bigtable long
 * running operation.
 */
export interface OperationProgress {
  /**
   * Percent completion of the operation.
   * Values are between 0 and 100 inclusive.
   */
  progressPercent: number;
  /** Time the request was received. */
  startTime:
    | Date
    | undefined;
  /**
   * If set, the time at which this operation failed or was completed
   * successfully.
   */
  endTime: Date | undefined;
}

function createBaseOperationProgress(): OperationProgress {
  return { progressPercent: 0, startTime: undefined, endTime: undefined };
}

export const OperationProgress: MessageFns<OperationProgress> = {
  encode(message: OperationProgress, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.progressPercent !== 0) {
      writer.uint32(8).int32(message.progressPercent);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).join();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperationProgress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.progressPercent = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationProgress {
    return {
      progressPercent: isSet(object.progressPercent) ? globalThis.Number(object.progressPercent) : 0,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
    };
  },

  toJSON(message: OperationProgress): unknown {
    const obj: any = {};
    if (message.progressPercent !== 0) {
      obj.progressPercent = Math.round(message.progressPercent);
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<OperationProgress>): OperationProgress {
    return OperationProgress.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperationProgress>): OperationProgress {
    const message = createBaseOperationProgress();
    message.progressPercent = object.progressPercent ?? 0;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
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