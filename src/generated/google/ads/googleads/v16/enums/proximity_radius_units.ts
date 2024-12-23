// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/proximity_radius_units.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing unit of radius in proximity. */
export interface ProximityRadiusUnitsEnum {
}

/** The unit of radius distance in proximity (for example, MILES) */
export enum ProximityRadiusUnitsEnum_ProximityRadiusUnits {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** MILES - Miles */
  MILES = 2,
  /** KILOMETERS - Kilometers */
  KILOMETERS = 3,
  UNRECOGNIZED = -1,
}

export function proximityRadiusUnitsEnum_ProximityRadiusUnitsFromJSON(
  object: any,
): ProximityRadiusUnitsEnum_ProximityRadiusUnits {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ProximityRadiusUnitsEnum_ProximityRadiusUnits.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ProximityRadiusUnitsEnum_ProximityRadiusUnits.UNKNOWN;
    case 2:
    case "MILES":
      return ProximityRadiusUnitsEnum_ProximityRadiusUnits.MILES;
    case 3:
    case "KILOMETERS":
      return ProximityRadiusUnitsEnum_ProximityRadiusUnits.KILOMETERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProximityRadiusUnitsEnum_ProximityRadiusUnits.UNRECOGNIZED;
  }
}

export function proximityRadiusUnitsEnum_ProximityRadiusUnitsToJSON(
  object: ProximityRadiusUnitsEnum_ProximityRadiusUnits,
): string {
  switch (object) {
    case ProximityRadiusUnitsEnum_ProximityRadiusUnits.UNSPECIFIED:
      return "UNSPECIFIED";
    case ProximityRadiusUnitsEnum_ProximityRadiusUnits.UNKNOWN:
      return "UNKNOWN";
    case ProximityRadiusUnitsEnum_ProximityRadiusUnits.MILES:
      return "MILES";
    case ProximityRadiusUnitsEnum_ProximityRadiusUnits.KILOMETERS:
      return "KILOMETERS";
    case ProximityRadiusUnitsEnum_ProximityRadiusUnits.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProximityRadiusUnitsEnum(): ProximityRadiusUnitsEnum {
  return {};
}

export const ProximityRadiusUnitsEnum: MessageFns<ProximityRadiusUnitsEnum> = {
  encode(_: ProximityRadiusUnitsEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProximityRadiusUnitsEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProximityRadiusUnitsEnum();
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

  fromJSON(_: any): ProximityRadiusUnitsEnum {
    return {};
  },

  toJSON(_: ProximityRadiusUnitsEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ProximityRadiusUnitsEnum>): ProximityRadiusUnitsEnum {
    return ProximityRadiusUnitsEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ProximityRadiusUnitsEnum>): ProximityRadiusUnitsEnum {
    const message = createBaseProximityRadiusUnitsEnum();
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
