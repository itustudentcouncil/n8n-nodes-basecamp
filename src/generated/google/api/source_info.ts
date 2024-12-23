// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/api/source_info.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Any } from "../protobuf/any.js";

export const protobufPackage = "google.api";

/** Source information used to create a Service Config */
export interface SourceInfo {
  /** All files used during config generation. */
  sourceFiles: Any[];
}

function createBaseSourceInfo(): SourceInfo {
  return { sourceFiles: [] };
}

export const SourceInfo: MessageFns<SourceInfo> = {
  encode(message: SourceInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.sourceFiles) {
      Any.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceFiles.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      sourceFiles: globalThis.Array.isArray(object?.sourceFiles)
        ? object.sourceFiles.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    if (message.sourceFiles?.length) {
      obj.sourceFiles = message.sourceFiles.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SourceInfo>): SourceInfo {
    return SourceInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = createBaseSourceInfo();
    message.sourceFiles = object.sourceFiles?.map((e) => Any.fromPartial(e)) || [];
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
