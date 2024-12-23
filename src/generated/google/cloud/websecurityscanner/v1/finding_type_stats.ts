// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/websecurityscanner/v1/finding_type_stats.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.websecurityscanner.v1";

/**
 * A FindingTypeStats resource represents stats regarding a specific FindingType
 * of Findings under a given ScanRun.
 */
export interface FindingTypeStats {
  /** Output only. The finding type associated with the stats. */
  findingType: string;
  /** Output only. The count of findings belonging to this finding type. */
  findingCount: number;
}

function createBaseFindingTypeStats(): FindingTypeStats {
  return { findingType: "", findingCount: 0 };
}

export const FindingTypeStats: MessageFns<FindingTypeStats> = {
  encode(message: FindingTypeStats, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.findingType !== "") {
      writer.uint32(10).string(message.findingType);
    }
    if (message.findingCount !== 0) {
      writer.uint32(16).int32(message.findingCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FindingTypeStats {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindingTypeStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.findingType = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.findingCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindingTypeStats {
    return {
      findingType: isSet(object.findingType) ? globalThis.String(object.findingType) : "",
      findingCount: isSet(object.findingCount) ? globalThis.Number(object.findingCount) : 0,
    };
  },

  toJSON(message: FindingTypeStats): unknown {
    const obj: any = {};
    if (message.findingType !== "") {
      obj.findingType = message.findingType;
    }
    if (message.findingCount !== 0) {
      obj.findingCount = Math.round(message.findingCount);
    }
    return obj;
  },

  create(base?: DeepPartial<FindingTypeStats>): FindingTypeStats {
    return FindingTypeStats.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FindingTypeStats>): FindingTypeStats {
    const message = createBaseFindingTypeStats();
    message.findingType = object.findingType ?? "";
    message.findingCount = object.findingCount ?? 0;
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
