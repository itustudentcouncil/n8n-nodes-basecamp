// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/video/stitcher/v1/fetch_options.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.video.stitcher.v1";

/** Options on how fetches should be made. */
export interface FetchOptions {
  /**
   * Custom headers to pass into fetch request.
   * Headers must have a maximum of 3 key value pairs.
   * Each key value pair must have a maximum of 256 characters per key and 256
   * characters per value.
   */
  headers: { [key: string]: string };
}

export interface FetchOptions_HeadersEntry {
  key: string;
  value: string;
}

function createBaseFetchOptions(): FetchOptions {
  return { headers: {} };
}

export const FetchOptions: MessageFns<FetchOptions> = {
  encode(message: FetchOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.headers).forEach(([key, value]) => {
      FetchOptions_HeadersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FetchOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = FetchOptions_HeadersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.headers[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchOptions {
    return {
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FetchOptions): unknown {
    const obj: any = {};
    if (message.headers) {
      const entries = Object.entries(message.headers);
      if (entries.length > 0) {
        obj.headers = {};
        entries.forEach(([k, v]) => {
          obj.headers[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<FetchOptions>): FetchOptions {
    return FetchOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FetchOptions>): FetchOptions {
    const message = createBaseFetchOptions();
    message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseFetchOptions_HeadersEntry(): FetchOptions_HeadersEntry {
  return { key: "", value: "" };
}

export const FetchOptions_HeadersEntry: MessageFns<FetchOptions_HeadersEntry> = {
  encode(message: FetchOptions_HeadersEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FetchOptions_HeadersEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchOptions_HeadersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchOptions_HeadersEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: FetchOptions_HeadersEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<FetchOptions_HeadersEntry>): FetchOptions_HeadersEntry {
    return FetchOptions_HeadersEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FetchOptions_HeadersEntry>): FetchOptions_HeadersEntry {
    const message = createBaseFetchOptions_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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