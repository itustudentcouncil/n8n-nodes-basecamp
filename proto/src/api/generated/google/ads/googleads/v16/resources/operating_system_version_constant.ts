// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/operating_system_version_constant.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  OperatingSystemVersionOperatorTypeEnum_OperatingSystemVersionOperatorType,
  operatingSystemVersionOperatorTypeEnum_OperatingSystemVersionOperatorTypeFromJSON,
  operatingSystemVersionOperatorTypeEnum_OperatingSystemVersionOperatorTypeToJSON,
} from "../enums/operating_system_version_operator_type.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/**
 * A mobile operating system version or a range of versions, depending on
 * `operator_type`. List of available mobile platforms at
 * https://developers.google.com/google-ads/api/reference/data/codes-formats#mobile-platforms
 */
export interface OperatingSystemVersionConstant {
  /**
   * Output only. The resource name of the operating system version constant.
   * Operating system version constant resource names have the form:
   *
   * `operatingSystemVersionConstants/{criterion_id}`
   */
  resourceName: string;
  /** Output only. The ID of the operating system version. */
  id?:
    | Long
    | undefined;
  /** Output only. Name of the operating system. */
  name?:
    | string
    | undefined;
  /** Output only. The OS Major Version number. */
  osMajorVersion?:
    | number
    | undefined;
  /** Output only. The OS Minor Version number. */
  osMinorVersion?:
    | number
    | undefined;
  /**
   * Output only. Determines whether this constant represents a single version
   * or a range of versions.
   */
  operatorType: OperatingSystemVersionOperatorTypeEnum_OperatingSystemVersionOperatorType;
}

function createBaseOperatingSystemVersionConstant(): OperatingSystemVersionConstant {
  return {
    resourceName: "",
    id: undefined,
    name: undefined,
    osMajorVersion: undefined,
    osMinorVersion: undefined,
    operatorType: 0,
  };
}

export const OperatingSystemVersionConstant: MessageFns<OperatingSystemVersionConstant> = {
  encode(message: OperatingSystemVersionConstant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(56).int64(message.id.toString());
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.osMajorVersion !== undefined) {
      writer.uint32(72).int32(message.osMajorVersion);
    }
    if (message.osMinorVersion !== undefined) {
      writer.uint32(80).int32(message.osMinorVersion);
    }
    if (message.operatorType !== 0) {
      writer.uint32(48).int32(message.operatorType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperatingSystemVersionConstant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatingSystemVersionConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.name = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.osMajorVersion = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.osMinorVersion = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.operatorType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperatingSystemVersionConstant {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      osMajorVersion: isSet(object.osMajorVersion) ? globalThis.Number(object.osMajorVersion) : undefined,
      osMinorVersion: isSet(object.osMinorVersion) ? globalThis.Number(object.osMinorVersion) : undefined,
      operatorType: isSet(object.operatorType)
        ? operatingSystemVersionOperatorTypeEnum_OperatingSystemVersionOperatorTypeFromJSON(object.operatorType)
        : 0,
    };
  },

  toJSON(message: OperatingSystemVersionConstant): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.osMajorVersion !== undefined) {
      obj.osMajorVersion = Math.round(message.osMajorVersion);
    }
    if (message.osMinorVersion !== undefined) {
      obj.osMinorVersion = Math.round(message.osMinorVersion);
    }
    if (message.operatorType !== 0) {
      obj.operatorType = operatingSystemVersionOperatorTypeEnum_OperatingSystemVersionOperatorTypeToJSON(
        message.operatorType,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<OperatingSystemVersionConstant>): OperatingSystemVersionConstant {
    return OperatingSystemVersionConstant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperatingSystemVersionConstant>): OperatingSystemVersionConstant {
    const message = createBaseOperatingSystemVersionConstant();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.name = object.name ?? undefined;
    message.osMajorVersion = object.osMajorVersion ?? undefined;
    message.osMinorVersion = object.osMinorVersion ?? undefined;
    message.operatorType = object.operatorType ?? 0;
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