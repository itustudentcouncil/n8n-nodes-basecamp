// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/local_services_employee_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing the types of local services employee. */
export interface LocalServicesEmployeeTypeEnum {
}

/** Enums describing types of a local services employee. */
export enum LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** BUSINESS_OWNER - Represents the owner of the business. */
  BUSINESS_OWNER = 2,
  /** EMPLOYEE - Represents an employee of the business. */
  EMPLOYEE = 3,
  UNRECOGNIZED = -1,
}

export function localServicesEmployeeTypeEnum_LocalServicesEmployeeTypeFromJSON(
  object: any,
): LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.UNKNOWN;
    case 2:
    case "BUSINESS_OWNER":
      return LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.BUSINESS_OWNER;
    case 3:
    case "EMPLOYEE":
      return LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.EMPLOYEE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.UNRECOGNIZED;
  }
}

export function localServicesEmployeeTypeEnum_LocalServicesEmployeeTypeToJSON(
  object: LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType,
): string {
  switch (object) {
    case LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.UNSPECIFIED:
      return "UNSPECIFIED";
    case LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.UNKNOWN:
      return "UNKNOWN";
    case LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.BUSINESS_OWNER:
      return "BUSINESS_OWNER";
    case LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.EMPLOYEE:
      return "EMPLOYEE";
    case LocalServicesEmployeeTypeEnum_LocalServicesEmployeeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLocalServicesEmployeeTypeEnum(): LocalServicesEmployeeTypeEnum {
  return {};
}

export const LocalServicesEmployeeTypeEnum: MessageFns<LocalServicesEmployeeTypeEnum> = {
  encode(_: LocalServicesEmployeeTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocalServicesEmployeeTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalServicesEmployeeTypeEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): LocalServicesEmployeeTypeEnum {
    return {};
  },

  toJSON(_: LocalServicesEmployeeTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LocalServicesEmployeeTypeEnum>): LocalServicesEmployeeTypeEnum {
    return LocalServicesEmployeeTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<LocalServicesEmployeeTypeEnum>): LocalServicesEmployeeTypeEnum {
    const message = createBaseLocalServicesEmployeeTypeEnum();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}