// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/common/ad_asset.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.common";

/** A text asset used inside an ad. */
export interface AdTextAsset {
  /** Asset text. */
  text?: string | undefined;
}

function createBaseAdTextAsset(): AdTextAsset {
  return { text: undefined };
}

export const AdTextAsset: MessageFns<AdTextAsset> = {
  encode(message: AdTextAsset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.text !== undefined) {
      writer.uint32(34).string(message.text);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdTextAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdTextAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdTextAsset {
    return { text: isSet(object.text) ? globalThis.String(object.text) : undefined };
  },

  toJSON(message: AdTextAsset): unknown {
    const obj: any = {};
    if (message.text !== undefined) {
      obj.text = message.text;
    }
    return obj;
  },

  create(base?: DeepPartial<AdTextAsset>): AdTextAsset {
    return AdTextAsset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AdTextAsset>): AdTextAsset {
    const message = createBaseAdTextAsset();
    message.text = object.text ?? undefined;
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