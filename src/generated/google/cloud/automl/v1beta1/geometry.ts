// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/automl/v1beta1/geometry.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.automl.v1beta1";

/**
 * A vertex represents a 2D point in the image.
 * The normalized vertex coordinates are between 0 to 1 fractions relative to
 * the original plane (image, video). E.g. if the plane (e.g. whole image) would
 * have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would
 * be at the position (1, 6) on that plane.
 */
export interface NormalizedVertex {
  /** Required. Horizontal coordinate. */
  x: number;
  /** Required. Vertical coordinate. */
  y: number;
}

/**
 * A bounding polygon of a detected object on a plane.
 * On output both vertices and normalized_vertices are provided.
 * The polygon is formed by connecting vertices in the order they are listed.
 */
export interface BoundingPoly {
  /** Output only . The bounding polygon normalized vertices. */
  normalizedVertices: NormalizedVertex[];
}

function createBaseNormalizedVertex(): NormalizedVertex {
  return { x: 0, y: 0 };
}

export const NormalizedVertex: MessageFns<NormalizedVertex> = {
  encode(message: NormalizedVertex, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NormalizedVertex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNormalizedVertex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NormalizedVertex {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: NormalizedVertex): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    return obj;
  },

  create(base?: DeepPartial<NormalizedVertex>): NormalizedVertex {
    return NormalizedVertex.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NormalizedVertex>): NormalizedVertex {
    const message = createBaseNormalizedVertex();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseBoundingPoly(): BoundingPoly {
  return { normalizedVertices: [] };
}

export const BoundingPoly: MessageFns<BoundingPoly> = {
  encode(message: BoundingPoly, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.normalizedVertices) {
      NormalizedVertex.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BoundingPoly {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoundingPoly();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.normalizedVertices.push(NormalizedVertex.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BoundingPoly {
    return {
      normalizedVertices: globalThis.Array.isArray(object?.normalizedVertices)
        ? object.normalizedVertices.map((e: any) => NormalizedVertex.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BoundingPoly): unknown {
    const obj: any = {};
    if (message.normalizedVertices?.length) {
      obj.normalizedVertices = message.normalizedVertices.map((e) => NormalizedVertex.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BoundingPoly>): BoundingPoly {
    return BoundingPoly.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BoundingPoly>): BoundingPoly {
    const message = createBaseBoundingPoly();
    message.normalizedVertices = object.normalizedVertices?.map((e) => NormalizedVertex.fromPartial(e)) || [];
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