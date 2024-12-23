// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/places/v1/photo.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AuthorAttribution } from "./attribution.js";

export const protobufPackage = "google.maps.places.v1";

/** Information about a photo of a place. */
export interface Photo {
  /**
   * Identifier. A reference representing this place photo which may be used to
   * look up this place photo again (also called the API "resource" name:
   * `places/{place_id}/photos/{photo}`).
   */
  name: string;
  /** The maximum available width, in pixels. */
  widthPx: number;
  /** The maximum available height, in pixels. */
  heightPx: number;
  /** This photo's authors. */
  authorAttributions: AuthorAttribution[];
}

function createBasePhoto(): Photo {
  return { name: "", widthPx: 0, heightPx: 0, authorAttributions: [] };
}

export const Photo: MessageFns<Photo> = {
  encode(message: Photo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.widthPx !== 0) {
      writer.uint32(16).int32(message.widthPx);
    }
    if (message.heightPx !== 0) {
      writer.uint32(24).int32(message.heightPx);
    }
    for (const v of message.authorAttributions) {
      AuthorAttribution.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Photo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhoto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.widthPx = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.heightPx = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.authorAttributions.push(AuthorAttribution.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Photo {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      widthPx: isSet(object.widthPx) ? globalThis.Number(object.widthPx) : 0,
      heightPx: isSet(object.heightPx) ? globalThis.Number(object.heightPx) : 0,
      authorAttributions: globalThis.Array.isArray(object?.authorAttributions)
        ? object.authorAttributions.map((e: any) => AuthorAttribution.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Photo): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.widthPx !== 0) {
      obj.widthPx = Math.round(message.widthPx);
    }
    if (message.heightPx !== 0) {
      obj.heightPx = Math.round(message.heightPx);
    }
    if (message.authorAttributions?.length) {
      obj.authorAttributions = message.authorAttributions.map((e) => AuthorAttribution.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Photo>): Photo {
    return Photo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Photo>): Photo {
    const message = createBasePhoto();
    message.name = object.name ?? "";
    message.widthPx = object.widthPx ?? 0;
    message.heightPx = object.heightPx ?? 0;
    message.authorAttributions = object.authorAttributions?.map((e) => AuthorAttribution.fromPartial(e)) || [];
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
