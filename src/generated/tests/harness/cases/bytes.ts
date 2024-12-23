// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: tests/harness/cases/bytes.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "tests.harness.cases";

export interface BytesNone {
  val: Buffer;
}

export interface BytesConst {
  val: Buffer;
}

export interface BytesIn {
  val: Buffer;
}

export interface BytesNotIn {
  val: Buffer;
}

export interface BytesLen {
  val: Buffer;
}

export interface BytesMinLen {
  val: Buffer;
}

export interface BytesMaxLen {
  val: Buffer;
}

export interface BytesMinMaxLen {
  val: Buffer;
}

export interface BytesEqualMinMaxLen {
  val: Buffer;
}

export interface BytesPattern {
  val: Buffer;
}

export interface BytesPrefix {
  val: Buffer;
}

export interface BytesContains {
  val: Buffer;
}

export interface BytesSuffix {
  val: Buffer;
}

export interface BytesIP {
  val: Buffer;
}

export interface BytesIPv4 {
  val: Buffer;
}

export interface BytesIPv6 {
  val: Buffer;
}

export interface BytesIPv6Ignore {
  val: Buffer;
}

function createBaseBytesNone(): BytesNone {
  return { val: Buffer.alloc(0) };
}

export const BytesNone: MessageFns<BytesNone> = {
  encode(message: BytesNone, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesNone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesNone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesNone {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesNone): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesNone>): BytesNone {
    return BytesNone.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesNone>): BytesNone {
    const message = createBaseBytesNone();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesConst(): BytesConst {
  return { val: Buffer.alloc(0) };
}

export const BytesConst: MessageFns<BytesConst> = {
  encode(message: BytesConst, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesConst {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesConst();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesConst {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesConst): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesConst>): BytesConst {
    return BytesConst.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesConst>): BytesConst {
    const message = createBaseBytesConst();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesIn(): BytesIn {
  return { val: Buffer.alloc(0) };
}

export const BytesIn: MessageFns<BytesIn> = {
  encode(message: BytesIn, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesIn {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesIn): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesIn>): BytesIn {
    return BytesIn.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesIn>): BytesIn {
    const message = createBaseBytesIn();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesNotIn(): BytesNotIn {
  return { val: Buffer.alloc(0) };
}

export const BytesNotIn: MessageFns<BytesNotIn> = {
  encode(message: BytesNotIn, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesNotIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesNotIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesNotIn {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesNotIn): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesNotIn>): BytesNotIn {
    return BytesNotIn.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesNotIn>): BytesNotIn {
    const message = createBaseBytesNotIn();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesLen(): BytesLen {
  return { val: Buffer.alloc(0) };
}

export const BytesLen: MessageFns<BytesLen> = {
  encode(message: BytesLen, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesLen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesLen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesLen {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesLen): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesLen>): BytesLen {
    return BytesLen.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesLen>): BytesLen {
    const message = createBaseBytesLen();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesMinLen(): BytesMinLen {
  return { val: Buffer.alloc(0) };
}

export const BytesMinLen: MessageFns<BytesMinLen> = {
  encode(message: BytesMinLen, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesMinLen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesMinLen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesMinLen {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesMinLen): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesMinLen>): BytesMinLen {
    return BytesMinLen.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesMinLen>): BytesMinLen {
    const message = createBaseBytesMinLen();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesMaxLen(): BytesMaxLen {
  return { val: Buffer.alloc(0) };
}

export const BytesMaxLen: MessageFns<BytesMaxLen> = {
  encode(message: BytesMaxLen, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesMaxLen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesMaxLen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesMaxLen {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesMaxLen): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesMaxLen>): BytesMaxLen {
    return BytesMaxLen.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesMaxLen>): BytesMaxLen {
    const message = createBaseBytesMaxLen();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesMinMaxLen(): BytesMinMaxLen {
  return { val: Buffer.alloc(0) };
}

export const BytesMinMaxLen: MessageFns<BytesMinMaxLen> = {
  encode(message: BytesMinMaxLen, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesMinMaxLen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesMinMaxLen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesMinMaxLen {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesMinMaxLen): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesMinMaxLen>): BytesMinMaxLen {
    return BytesMinMaxLen.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesMinMaxLen>): BytesMinMaxLen {
    const message = createBaseBytesMinMaxLen();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesEqualMinMaxLen(): BytesEqualMinMaxLen {
  return { val: Buffer.alloc(0) };
}

export const BytesEqualMinMaxLen: MessageFns<BytesEqualMinMaxLen> = {
  encode(message: BytesEqualMinMaxLen, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesEqualMinMaxLen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesEqualMinMaxLen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesEqualMinMaxLen {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesEqualMinMaxLen): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesEqualMinMaxLen>): BytesEqualMinMaxLen {
    return BytesEqualMinMaxLen.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesEqualMinMaxLen>): BytesEqualMinMaxLen {
    const message = createBaseBytesEqualMinMaxLen();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesPattern(): BytesPattern {
  return { val: Buffer.alloc(0) };
}

export const BytesPattern: MessageFns<BytesPattern> = {
  encode(message: BytesPattern, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesPattern {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesPattern {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesPattern): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesPattern>): BytesPattern {
    return BytesPattern.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesPattern>): BytesPattern {
    const message = createBaseBytesPattern();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesPrefix(): BytesPrefix {
  return { val: Buffer.alloc(0) };
}

export const BytesPrefix: MessageFns<BytesPrefix> = {
  encode(message: BytesPrefix, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesPrefix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesPrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesPrefix {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesPrefix): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesPrefix>): BytesPrefix {
    return BytesPrefix.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesPrefix>): BytesPrefix {
    const message = createBaseBytesPrefix();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesContains(): BytesContains {
  return { val: Buffer.alloc(0) };
}

export const BytesContains: MessageFns<BytesContains> = {
  encode(message: BytesContains, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesContains {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesContains();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesContains {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesContains): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesContains>): BytesContains {
    return BytesContains.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesContains>): BytesContains {
    const message = createBaseBytesContains();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesSuffix(): BytesSuffix {
  return { val: Buffer.alloc(0) };
}

export const BytesSuffix: MessageFns<BytesSuffix> = {
  encode(message: BytesSuffix, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesSuffix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesSuffix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesSuffix {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesSuffix): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesSuffix>): BytesSuffix {
    return BytesSuffix.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesSuffix>): BytesSuffix {
    const message = createBaseBytesSuffix();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesIP(): BytesIP {
  return { val: Buffer.alloc(0) };
}

export const BytesIP: MessageFns<BytesIP> = {
  encode(message: BytesIP, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesIP {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesIP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesIP {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesIP): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesIP>): BytesIP {
    return BytesIP.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesIP>): BytesIP {
    const message = createBaseBytesIP();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesIPv4(): BytesIPv4 {
  return { val: Buffer.alloc(0) };
}

export const BytesIPv4: MessageFns<BytesIPv4> = {
  encode(message: BytesIPv4, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesIPv4 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesIPv4();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesIPv4 {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesIPv4): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesIPv4>): BytesIPv4 {
    return BytesIPv4.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesIPv4>): BytesIPv4 {
    const message = createBaseBytesIPv4();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesIPv6(): BytesIPv6 {
  return { val: Buffer.alloc(0) };
}

export const BytesIPv6: MessageFns<BytesIPv6> = {
  encode(message: BytesIPv6, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesIPv6 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesIPv6();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesIPv6 {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesIPv6): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesIPv6>): BytesIPv6 {
    return BytesIPv6.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesIPv6>): BytesIPv6 {
    const message = createBaseBytesIPv6();
    message.val = object.val ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBytesIPv6Ignore(): BytesIPv6Ignore {
  return { val: Buffer.alloc(0) };
}

export const BytesIPv6Ignore: MessageFns<BytesIPv6Ignore> = {
  encode(message: BytesIPv6Ignore, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BytesIPv6Ignore {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesIPv6Ignore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BytesIPv6Ignore {
    return { val: isSet(object.val) ? Buffer.from(bytesFromBase64(object.val)) : Buffer.alloc(0) };
  },

  toJSON(message: BytesIPv6Ignore): unknown {
    const obj: any = {};
    if (message.val.length !== 0) {
      obj.val = base64FromBytes(message.val);
    }
    return obj;
  },

  create(base?: DeepPartial<BytesIPv6Ignore>): BytesIPv6Ignore {
    return BytesIPv6Ignore.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BytesIPv6Ignore>): BytesIPv6Ignore {
    const message = createBaseBytesIPv6Ignore();
    message.val = object.val ?? Buffer.alloc(0);
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
