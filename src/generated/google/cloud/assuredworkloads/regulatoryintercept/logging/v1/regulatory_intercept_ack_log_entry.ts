// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/assuredworkloads/regulatoryintercept/logging/v1/regulatory_intercept_ack_log_entry.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.assuredworkloads.regulatoryintercept.logging.v1";

export interface RegulatoryInterceptAckLogEntry {
  /** The id of the user that triggered the Regulatory Intercept. */
  userId: string;
  /**
   * The id of the GCP resource associated with the Assured Workload applicable
   * to the request. Must be of the format
   * //cloudresourcemanager.googleapis.com/{type}/{id}
   */
  assuredWorkloadResourceId: string;
}

function createBaseRegulatoryInterceptAckLogEntry(): RegulatoryInterceptAckLogEntry {
  return { userId: "", assuredWorkloadResourceId: "" };
}

export const RegulatoryInterceptAckLogEntry: MessageFns<RegulatoryInterceptAckLogEntry> = {
  encode(message: RegulatoryInterceptAckLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.assuredWorkloadResourceId !== "") {
      writer.uint32(18).string(message.assuredWorkloadResourceId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RegulatoryInterceptAckLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegulatoryInterceptAckLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assuredWorkloadResourceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegulatoryInterceptAckLogEntry {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      assuredWorkloadResourceId: isSet(object.assuredWorkloadResourceId)
        ? globalThis.String(object.assuredWorkloadResourceId)
        : "",
    };
  },

  toJSON(message: RegulatoryInterceptAckLogEntry): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.assuredWorkloadResourceId !== "") {
      obj.assuredWorkloadResourceId = message.assuredWorkloadResourceId;
    }
    return obj;
  },

  create(base?: DeepPartial<RegulatoryInterceptAckLogEntry>): RegulatoryInterceptAckLogEntry {
    return RegulatoryInterceptAckLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegulatoryInterceptAckLogEntry>): RegulatoryInterceptAckLogEntry {
    const message = createBaseRegulatoryInterceptAckLogEntry();
    message.userId = object.userId ?? "";
    message.assuredWorkloadResourceId = object.assuredWorkloadResourceId ?? "";
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
