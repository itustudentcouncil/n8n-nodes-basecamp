// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/combined_audience.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  CombinedAudienceStatusEnum_CombinedAudienceStatus,
  combinedAudienceStatusEnum_CombinedAudienceStatusFromJSON,
  combinedAudienceStatusEnum_CombinedAudienceStatusToJSON,
} from "../enums/combined_audience_status.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/**
 * Describe a resource for combined audiences which includes different
 * audiences.
 */
export interface CombinedAudience {
  /**
   * Immutable. The resource name of the combined audience.
   * Combined audience names have the form:
   *
   * `customers/{customer_id}/combinedAudience/{combined_audience_id}`
   */
  resourceName: string;
  /** Output only. ID of the combined audience. */
  id: Long;
  /**
   * Output only. Status of this combined audience. Indicates whether the
   * combined audience is enabled or removed.
   */
  status: CombinedAudienceStatusEnum_CombinedAudienceStatus;
  /**
   * Output only. Name of the combined audience. It should be unique across all
   * combined audiences.
   */
  name: string;
  /** Output only. Description of this combined audience. */
  description: string;
}

function createBaseCombinedAudience(): CombinedAudience {
  return { resourceName: "", id: Long.ZERO, status: 0, name: "", description: "" };
}

export const CombinedAudience: MessageFns<CombinedAudience> = {
  encode(message: CombinedAudience, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (!message.id.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.id.toString());
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CombinedAudience {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedAudience();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CombinedAudience {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      status: isSet(object.status) ? combinedAudienceStatusEnum_CombinedAudienceStatusFromJSON(object.status) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: CombinedAudience): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (!message.id.equals(Long.ZERO)) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.status !== 0) {
      obj.status = combinedAudienceStatusEnum_CombinedAudienceStatusToJSON(message.status);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<CombinedAudience>): CombinedAudience {
    return CombinedAudience.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CombinedAudience>): CombinedAudience {
    const message = createBaseCombinedAudience();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.status = object.status ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
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
