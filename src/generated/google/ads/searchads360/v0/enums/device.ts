// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/enums/device.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.enums";

/** Container for enumeration of Google Ads devices available for targeting. */
export interface DeviceEnum {
}

/** Enumerates Google Ads devices available for targeting. */
export enum DeviceEnum_Device {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The value is unknown in this version. */
  UNKNOWN = 1,
  /** MOBILE - Mobile devices with full browsers. */
  MOBILE = 2,
  /** TABLET - Tablets with full browsers. */
  TABLET = 3,
  /** DESKTOP - Computers. */
  DESKTOP = 4,
  /** CONNECTED_TV - Smart TVs and game consoles. */
  CONNECTED_TV = 6,
  /** OTHER - Other device types. */
  OTHER = 5,
  UNRECOGNIZED = -1,
}

export function deviceEnum_DeviceFromJSON(object: any): DeviceEnum_Device {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return DeviceEnum_Device.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return DeviceEnum_Device.UNKNOWN;
    case 2:
    case "MOBILE":
      return DeviceEnum_Device.MOBILE;
    case 3:
    case "TABLET":
      return DeviceEnum_Device.TABLET;
    case 4:
    case "DESKTOP":
      return DeviceEnum_Device.DESKTOP;
    case 6:
    case "CONNECTED_TV":
      return DeviceEnum_Device.CONNECTED_TV;
    case 5:
    case "OTHER":
      return DeviceEnum_Device.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeviceEnum_Device.UNRECOGNIZED;
  }
}

export function deviceEnum_DeviceToJSON(object: DeviceEnum_Device): string {
  switch (object) {
    case DeviceEnum_Device.UNSPECIFIED:
      return "UNSPECIFIED";
    case DeviceEnum_Device.UNKNOWN:
      return "UNKNOWN";
    case DeviceEnum_Device.MOBILE:
      return "MOBILE";
    case DeviceEnum_Device.TABLET:
      return "TABLET";
    case DeviceEnum_Device.DESKTOP:
      return "DESKTOP";
    case DeviceEnum_Device.CONNECTED_TV:
      return "CONNECTED_TV";
    case DeviceEnum_Device.OTHER:
      return "OTHER";
    case DeviceEnum_Device.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDeviceEnum(): DeviceEnum {
  return {};
}

export const DeviceEnum: MessageFns<DeviceEnum> = {
  encode(_: DeviceEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeviceEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceEnum();
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

  fromJSON(_: any): DeviceEnum {
    return {};
  },

  toJSON(_: DeviceEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DeviceEnum>): DeviceEnum {
    return DeviceEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DeviceEnum>): DeviceEnum {
    const message = createBaseDeviceEnum();
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
