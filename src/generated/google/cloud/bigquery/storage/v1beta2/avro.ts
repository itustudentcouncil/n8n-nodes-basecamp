// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/storage/v1beta2/avro.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.bigquery.storage.v1beta2";

/** Avro schema. */
export interface AvroSchema {
  /**
   * Json serialized schema, as described at
   * https://avro.apache.org/docs/1.8.1/spec.html.
   */
  schema: string;
}

/** Avro rows. */
export interface AvroRows {
  /** Binary serialized rows in a block. */
  serializedBinaryRows: Buffer;
}

function createBaseAvroSchema(): AvroSchema {
  return { schema: "" };
}

export const AvroSchema: MessageFns<AvroSchema> = {
  encode(message: AvroSchema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AvroSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvroSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AvroSchema {
    return { schema: isSet(object.schema) ? globalThis.String(object.schema) : "" };
  },

  toJSON(message: AvroSchema): unknown {
    const obj: any = {};
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    return obj;
  },

  create(base?: DeepPartial<AvroSchema>): AvroSchema {
    return AvroSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AvroSchema>): AvroSchema {
    const message = createBaseAvroSchema();
    message.schema = object.schema ?? "";
    return message;
  },
};

function createBaseAvroRows(): AvroRows {
  return { serializedBinaryRows: Buffer.alloc(0) };
}

export const AvroRows: MessageFns<AvroRows> = {
  encode(message: AvroRows, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serializedBinaryRows.length !== 0) {
      writer.uint32(10).bytes(message.serializedBinaryRows);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AvroRows {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvroRows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serializedBinaryRows = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AvroRows {
    return {
      serializedBinaryRows: isSet(object.serializedBinaryRows)
        ? Buffer.from(bytesFromBase64(object.serializedBinaryRows))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: AvroRows): unknown {
    const obj: any = {};
    if (message.serializedBinaryRows.length !== 0) {
      obj.serializedBinaryRows = base64FromBytes(message.serializedBinaryRows);
    }
    return obj;
  },

  create(base?: DeepPartial<AvroRows>): AvroRows {
    return AvroRows.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AvroRows>): AvroRows {
    const message = createBaseAvroRows();
    message.serializedBinaryRows = object.serializedBinaryRows ?? Buffer.alloc(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

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
