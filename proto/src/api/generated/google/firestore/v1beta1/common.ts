// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/firestore/v1beta1/common.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../protobuf/timestamp.js";

export const protobufPackage = "google.firestore.v1beta1";

/**
 * A set of field paths on a document.
 * Used to restrict a get or update operation on a document to a subset of its
 * fields.
 * This is different from standard field masks, as this is always scoped to a
 * [Document][google.firestore.v1beta1.Document], and takes in account the dynamic nature of [Value][google.firestore.v1beta1.Value].
 */
export interface DocumentMask {
  /**
   * The list of field paths in the mask. See [Document.fields][google.firestore.v1beta1.Document.fields] for a field
   * path syntax reference.
   */
  fieldPaths: string[];
}

/** A precondition on a document, used for conditional operations. */
export interface Precondition {
  /**
   * When set to `true`, the target document must exist.
   * When set to `false`, the target document must not exist.
   */
  exists?:
    | boolean
    | undefined;
  /**
   * When set, the target document must exist and have been last updated at
   * that time.
   */
  updateTime?: Date | undefined;
}

/** Options for creating a new transaction. */
export interface TransactionOptions {
  /** The transaction can only be used for read operations. */
  readOnly?:
    | TransactionOptions_ReadOnly
    | undefined;
  /** The transaction can be used for both read and write operations. */
  readWrite?: TransactionOptions_ReadWrite | undefined;
}

/** Options for a transaction that can be used to read and write documents. */
export interface TransactionOptions_ReadWrite {
  /** An optional transaction to retry. */
  retryTransaction: Buffer;
}

/** Options for a transaction that can only be used to read documents. */
export interface TransactionOptions_ReadOnly {
  /**
   * Reads documents at the given time.
   * This may not be older than 60 seconds.
   */
  readTime?: Date | undefined;
}

function createBaseDocumentMask(): DocumentMask {
  return { fieldPaths: [] };
}

export const DocumentMask: MessageFns<DocumentMask> = {
  encode(message: DocumentMask, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.fieldPaths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DocumentMask {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fieldPaths.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DocumentMask {
    return {
      fieldPaths: globalThis.Array.isArray(object?.fieldPaths)
        ? object.fieldPaths.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: DocumentMask): unknown {
    const obj: any = {};
    if (message.fieldPaths?.length) {
      obj.fieldPaths = message.fieldPaths;
    }
    return obj;
  },

  create(base?: DeepPartial<DocumentMask>): DocumentMask {
    return DocumentMask.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DocumentMask>): DocumentMask {
    const message = createBaseDocumentMask();
    message.fieldPaths = object.fieldPaths?.map((e) => e) || [];
    return message;
  },
};

function createBasePrecondition(): Precondition {
  return { exists: undefined, updateTime: undefined };
}

export const Precondition: MessageFns<Precondition> = {
  encode(message: Precondition, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.exists !== undefined) {
      writer.uint32(8).bool(message.exists);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Precondition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrecondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.exists = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Precondition {
    return {
      exists: isSet(object.exists) ? globalThis.Boolean(object.exists) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: Precondition): unknown {
    const obj: any = {};
    if (message.exists !== undefined) {
      obj.exists = message.exists;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Precondition>): Precondition {
    return Precondition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Precondition>): Precondition {
    const message = createBasePrecondition();
    message.exists = object.exists ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseTransactionOptions(): TransactionOptions {
  return { readOnly: undefined, readWrite: undefined };
}

export const TransactionOptions: MessageFns<TransactionOptions> = {
  encode(message: TransactionOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.readOnly !== undefined) {
      TransactionOptions_ReadOnly.encode(message.readOnly, writer.uint32(18).fork()).join();
    }
    if (message.readWrite !== undefined) {
      TransactionOptions_ReadWrite.encode(message.readWrite, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransactionOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.readOnly = TransactionOptions_ReadOnly.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.readWrite = TransactionOptions_ReadWrite.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionOptions {
    return {
      readOnly: isSet(object.readOnly) ? TransactionOptions_ReadOnly.fromJSON(object.readOnly) : undefined,
      readWrite: isSet(object.readWrite) ? TransactionOptions_ReadWrite.fromJSON(object.readWrite) : undefined,
    };
  },

  toJSON(message: TransactionOptions): unknown {
    const obj: any = {};
    if (message.readOnly !== undefined) {
      obj.readOnly = TransactionOptions_ReadOnly.toJSON(message.readOnly);
    }
    if (message.readWrite !== undefined) {
      obj.readWrite = TransactionOptions_ReadWrite.toJSON(message.readWrite);
    }
    return obj;
  },

  create(base?: DeepPartial<TransactionOptions>): TransactionOptions {
    return TransactionOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TransactionOptions>): TransactionOptions {
    const message = createBaseTransactionOptions();
    message.readOnly = (object.readOnly !== undefined && object.readOnly !== null)
      ? TransactionOptions_ReadOnly.fromPartial(object.readOnly)
      : undefined;
    message.readWrite = (object.readWrite !== undefined && object.readWrite !== null)
      ? TransactionOptions_ReadWrite.fromPartial(object.readWrite)
      : undefined;
    return message;
  },
};

function createBaseTransactionOptions_ReadWrite(): TransactionOptions_ReadWrite {
  return { retryTransaction: Buffer.alloc(0) };
}

export const TransactionOptions_ReadWrite: MessageFns<TransactionOptions_ReadWrite> = {
  encode(message: TransactionOptions_ReadWrite, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.retryTransaction.length !== 0) {
      writer.uint32(10).bytes(message.retryTransaction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransactionOptions_ReadWrite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionOptions_ReadWrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.retryTransaction = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionOptions_ReadWrite {
    return {
      retryTransaction: isSet(object.retryTransaction)
        ? Buffer.from(bytesFromBase64(object.retryTransaction))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: TransactionOptions_ReadWrite): unknown {
    const obj: any = {};
    if (message.retryTransaction.length !== 0) {
      obj.retryTransaction = base64FromBytes(message.retryTransaction);
    }
    return obj;
  },

  create(base?: DeepPartial<TransactionOptions_ReadWrite>): TransactionOptions_ReadWrite {
    return TransactionOptions_ReadWrite.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TransactionOptions_ReadWrite>): TransactionOptions_ReadWrite {
    const message = createBaseTransactionOptions_ReadWrite();
    message.retryTransaction = object.retryTransaction ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseTransactionOptions_ReadOnly(): TransactionOptions_ReadOnly {
  return { readTime: undefined };
}

export const TransactionOptions_ReadOnly: MessageFns<TransactionOptions_ReadOnly> = {
  encode(message: TransactionOptions_ReadOnly, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.readTime !== undefined) {
      Timestamp.encode(toTimestamp(message.readTime), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransactionOptions_ReadOnly {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionOptions_ReadOnly();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.readTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionOptions_ReadOnly {
    return { readTime: isSet(object.readTime) ? fromJsonTimestamp(object.readTime) : undefined };
  },

  toJSON(message: TransactionOptions_ReadOnly): unknown {
    const obj: any = {};
    if (message.readTime !== undefined) {
      obj.readTime = message.readTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TransactionOptions_ReadOnly>): TransactionOptions_ReadOnly {
    return TransactionOptions_ReadOnly.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TransactionOptions_ReadOnly>): TransactionOptions_ReadOnly {
    const message = createBaseTransactionOptions_ReadOnly();
    message.readTime = object.readTime ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
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