// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/places/v1/geometry.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LatLng } from "../../../type/latlng.js";

export const protobufPackage = "google.maps.places.v1";

/** Circle with a LatLng as center and radius. */
export interface Circle {
  /**
   * Required. Center latitude and longitude.
   *
   * The range of latitude must be within [-90.0, 90.0]. The range of the
   * longitude must be within [-180.0, 180.0].
   */
  center:
    | LatLng
    | undefined;
  /**
   * Required. Radius measured in meters. The radius must be within [0.0,
   * 50000.0].
   */
  radius: number;
}

function createBaseCircle(): Circle {
  return { center: undefined, radius: 0 };
}

export const Circle: MessageFns<Circle> = {
  encode(message: Circle, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.center !== undefined) {
      LatLng.encode(message.center, writer.uint32(10).fork()).join();
    }
    if (message.radius !== 0) {
      writer.uint32(17).double(message.radius);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Circle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.center = LatLng.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.radius = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Circle {
    return {
      center: isSet(object.center) ? LatLng.fromJSON(object.center) : undefined,
      radius: isSet(object.radius) ? globalThis.Number(object.radius) : 0,
    };
  },

  toJSON(message: Circle): unknown {
    const obj: any = {};
    if (message.center !== undefined) {
      obj.center = LatLng.toJSON(message.center);
    }
    if (message.radius !== 0) {
      obj.radius = message.radius;
    }
    return obj;
  },

  create(base?: DeepPartial<Circle>): Circle {
    return Circle.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Circle>): Circle {
    const message = createBaseCircle();
    message.center = (object.center !== undefined && object.center !== null)
      ? LatLng.fromPartial(object.center)
      : undefined;
    message.radius = object.radius ?? 0;
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