// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ai/generativelanguage/v1/content.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ai.generativelanguage.v1";

/**
 * The base structured datatype containing multi-part content of a message.
 *
 * A `Content` includes a `role` field designating the producer of the `Content`
 * and a `parts` field containing multi-part data that contains the content of
 * the message turn.
 */
export interface Content {
  /**
   * Ordered `Parts` that constitute a single message. Parts may have different
   * MIME types.
   */
  parts: Part[];
  /**
   * Optional. The producer of the content. Must be either 'user' or 'model'.
   *
   * Useful to set for multi-turn conversations, otherwise can be left blank
   * or unset.
   */
  role: string;
}

/**
 * A datatype containing media that is part of a multi-part `Content` message.
 *
 * A `Part` consists of data which has an associated datatype. A `Part` can only
 * contain one of the accepted types in `Part.data`.
 *
 * A `Part` must have a fixed IANA MIME type identifying the type and subtype
 * of the media if the `inline_data` field is filled with raw bytes.
 */
export interface Part {
  /** Inline text. */
  text?:
    | string
    | undefined;
  /** Inline media bytes. */
  inlineData?: Blob | undefined;
}

/**
 * Raw media bytes.
 *
 * Text should not be sent as raw bytes, use the 'text' field.
 */
export interface Blob {
  /**
   * The IANA standard MIME type of the source data.
   * Examples:
   *   - image/png
   *   - image/jpeg
   * If an unsupported MIME type is provided, an error will be returned. For a
   * complete list of supported types, see [Supported file
   * formats](https://ai.google.dev/gemini-api/docs/prompting_with_media#supported_file_formats).
   */
  mimeType: string;
  /** Raw bytes for media formats. */
  data: Buffer;
}

function createBaseContent(): Content {
  return { parts: [], role: "" };
}

export const Content: MessageFns<Content> = {
  encode(message: Content, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.parts) {
      Part.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Content {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parts.push(Part.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Content {
    return {
      parts: globalThis.Array.isArray(object?.parts) ? object.parts.map((e: any) => Part.fromJSON(e)) : [],
      role: isSet(object.role) ? globalThis.String(object.role) : "",
    };
  },

  toJSON(message: Content): unknown {
    const obj: any = {};
    if (message.parts?.length) {
      obj.parts = message.parts.map((e) => Part.toJSON(e));
    }
    if (message.role !== "") {
      obj.role = message.role;
    }
    return obj;
  },

  create(base?: DeepPartial<Content>): Content {
    return Content.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Content>): Content {
    const message = createBaseContent();
    message.parts = object.parts?.map((e) => Part.fromPartial(e)) || [];
    message.role = object.role ?? "";
    return message;
  },
};

function createBasePart(): Part {
  return { text: undefined, inlineData: undefined };
}

export const Part: MessageFns<Part> = {
  encode(message: Part, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.text !== undefined) {
      writer.uint32(18).string(message.text);
    }
    if (message.inlineData !== undefined) {
      Blob.encode(message.inlineData, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Part {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inlineData = Blob.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Part {
    return {
      text: isSet(object.text) ? globalThis.String(object.text) : undefined,
      inlineData: isSet(object.inlineData) ? Blob.fromJSON(object.inlineData) : undefined,
    };
  },

  toJSON(message: Part): unknown {
    const obj: any = {};
    if (message.text !== undefined) {
      obj.text = message.text;
    }
    if (message.inlineData !== undefined) {
      obj.inlineData = Blob.toJSON(message.inlineData);
    }
    return obj;
  },

  create(base?: DeepPartial<Part>): Part {
    return Part.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Part>): Part {
    const message = createBasePart();
    message.text = object.text ?? undefined;
    message.inlineData = (object.inlineData !== undefined && object.inlineData !== null)
      ? Blob.fromPartial(object.inlineData)
      : undefined;
    return message;
  },
};

function createBaseBlob(): Blob {
  return { mimeType: "", data: Buffer.alloc(0) };
}

export const Blob: MessageFns<Blob> = {
  encode(message: Blob, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.mimeType !== "") {
      writer.uint32(10).string(message.mimeType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Blob {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mimeType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Blob {
    return {
      mimeType: isSet(object.mimeType) ? globalThis.String(object.mimeType) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: Blob): unknown {
    const obj: any = {};
    if (message.mimeType !== "") {
      obj.mimeType = message.mimeType;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<Blob>): Blob {
    return Blob.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Blob>): Blob {
    const message = createBaseBlob();
    message.mimeType = object.mimeType ?? "";
    message.data = object.data ?? Buffer.alloc(0);
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
