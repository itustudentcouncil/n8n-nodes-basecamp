// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/storage/v1beta1/arrow.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.bigquery.storage.v1beta1";

/** Arrow schema. */
export interface ArrowSchema {
  /** IPC serialized Arrow schema. */
  serializedSchema: Buffer;
}

/** Arrow RecordBatch. */
export interface ArrowRecordBatch {
  /** IPC serialized Arrow RecordBatch. */
  serializedRecordBatch: Buffer;
  /** The count of rows in the returning block. */
  rowCount: Long;
}

function createBaseArrowSchema(): ArrowSchema {
  return { serializedSchema: Buffer.alloc(0) };
}

export const ArrowSchema: MessageFns<ArrowSchema> = {
  encode(message: ArrowSchema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serializedSchema.length !== 0) {
      writer.uint32(10).bytes(message.serializedSchema);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ArrowSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrowSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serializedSchema = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArrowSchema {
    return {
      serializedSchema: isSet(object.serializedSchema)
        ? Buffer.from(bytesFromBase64(object.serializedSchema))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: ArrowSchema): unknown {
    const obj: any = {};
    if (message.serializedSchema.length !== 0) {
      obj.serializedSchema = base64FromBytes(message.serializedSchema);
    }
    return obj;
  },

  create(base?: DeepPartial<ArrowSchema>): ArrowSchema {
    return ArrowSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ArrowSchema>): ArrowSchema {
    const message = createBaseArrowSchema();
    message.serializedSchema = object.serializedSchema ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseArrowRecordBatch(): ArrowRecordBatch {
  return { serializedRecordBatch: Buffer.alloc(0), rowCount: Long.ZERO };
}

export const ArrowRecordBatch: MessageFns<ArrowRecordBatch> = {
  encode(message: ArrowRecordBatch, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serializedRecordBatch.length !== 0) {
      writer.uint32(10).bytes(message.serializedRecordBatch);
    }
    if (!message.rowCount.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.rowCount.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ArrowRecordBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrowRecordBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serializedRecordBatch = Buffer.from(reader.bytes());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rowCount = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArrowRecordBatch {
    return {
      serializedRecordBatch: isSet(object.serializedRecordBatch)
        ? Buffer.from(bytesFromBase64(object.serializedRecordBatch))
        : Buffer.alloc(0),
      rowCount: isSet(object.rowCount) ? Long.fromValue(object.rowCount) : Long.ZERO,
    };
  },

  toJSON(message: ArrowRecordBatch): unknown {
    const obj: any = {};
    if (message.serializedRecordBatch.length !== 0) {
      obj.serializedRecordBatch = base64FromBytes(message.serializedRecordBatch);
    }
    if (!message.rowCount.equals(Long.ZERO)) {
      obj.rowCount = (message.rowCount || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<ArrowRecordBatch>): ArrowRecordBatch {
    return ArrowRecordBatch.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ArrowRecordBatch>): ArrowRecordBatch {
    const message = createBaseArrowRecordBatch();
    message.serializedRecordBatch = object.serializedRecordBatch ?? Buffer.alloc(0);
    message.rowCount = (object.rowCount !== undefined && object.rowCount !== null)
      ? Long.fromValue(object.rowCount)
      : Long.ZERO;
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