// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: tests/harness/cases/wkt_timestamp.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../google/protobuf/timestamp.js";

export const protobufPackage = "tests.harness.cases";

export interface TimestampNone {
  val: Date | undefined;
}

export interface TimestampRequired {
  val: Date | undefined;
}

export interface TimestampConst {
  val: Date | undefined;
}

export interface TimestampLT {
  val: Date | undefined;
}

export interface TimestampLTE {
  val: Date | undefined;
}

export interface TimestampGT {
  val: Date | undefined;
}

export interface TimestampGTE {
  val: Date | undefined;
}

export interface TimestampGTLT {
  val: Date | undefined;
}

export interface TimestampExLTGT {
  val: Date | undefined;
}

export interface TimestampGTELTE {
  val: Date | undefined;
}

export interface TimestampExGTELTE {
  val: Date | undefined;
}

export interface TimestampLTNow {
  val: Date | undefined;
}

export interface TimestampGTNow {
  val: Date | undefined;
}

export interface TimestampWithin {
  val: Date | undefined;
}

export interface TimestampLTNowWithin {
  val: Date | undefined;
}

export interface TimestampGTNowWithin {
  val: Date | undefined;
}

function createBaseTimestampNone(): TimestampNone {
  return { val: undefined };
}

export const TimestampNone: MessageFns<TimestampNone> = {
  encode(message: TimestampNone, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampNone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampNone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampNone {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampNone): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampNone>): TimestampNone {
    return TimestampNone.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampNone>): TimestampNone {
    const message = createBaseTimestampNone();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampRequired(): TimestampRequired {
  return { val: undefined };
}

export const TimestampRequired: MessageFns<TimestampRequired> = {
  encode(message: TimestampRequired, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampRequired {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampRequired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampRequired {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampRequired): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampRequired>): TimestampRequired {
    return TimestampRequired.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampRequired>): TimestampRequired {
    const message = createBaseTimestampRequired();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampConst(): TimestampConst {
  return { val: undefined };
}

export const TimestampConst: MessageFns<TimestampConst> = {
  encode(message: TimestampConst, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampConst {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampConst();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampConst {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampConst): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampConst>): TimestampConst {
    return TimestampConst.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampConst>): TimestampConst {
    const message = createBaseTimestampConst();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampLT(): TimestampLT {
  return { val: undefined };
}

export const TimestampLT: MessageFns<TimestampLT> = {
  encode(message: TimestampLT, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampLT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampLT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampLT {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampLT): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampLT>): TimestampLT {
    return TimestampLT.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampLT>): TimestampLT {
    const message = createBaseTimestampLT();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampLTE(): TimestampLTE {
  return { val: undefined };
}

export const TimestampLTE: MessageFns<TimestampLTE> = {
  encode(message: TimestampLTE, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampLTE {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampLTE();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampLTE {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampLTE): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampLTE>): TimestampLTE {
    return TimestampLTE.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampLTE>): TimestampLTE {
    const message = createBaseTimestampLTE();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampGT(): TimestampGT {
  return { val: undefined };
}

export const TimestampGT: MessageFns<TimestampGT> = {
  encode(message: TimestampGT, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampGT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampGT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampGT {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampGT): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampGT>): TimestampGT {
    return TimestampGT.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampGT>): TimestampGT {
    const message = createBaseTimestampGT();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampGTE(): TimestampGTE {
  return { val: undefined };
}

export const TimestampGTE: MessageFns<TimestampGTE> = {
  encode(message: TimestampGTE, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampGTE {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampGTE();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampGTE {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampGTE): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampGTE>): TimestampGTE {
    return TimestampGTE.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampGTE>): TimestampGTE {
    const message = createBaseTimestampGTE();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampGTLT(): TimestampGTLT {
  return { val: undefined };
}

export const TimestampGTLT: MessageFns<TimestampGTLT> = {
  encode(message: TimestampGTLT, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampGTLT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampGTLT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampGTLT {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampGTLT): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampGTLT>): TimestampGTLT {
    return TimestampGTLT.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampGTLT>): TimestampGTLT {
    const message = createBaseTimestampGTLT();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampExLTGT(): TimestampExLTGT {
  return { val: undefined };
}

export const TimestampExLTGT: MessageFns<TimestampExLTGT> = {
  encode(message: TimestampExLTGT, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampExLTGT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampExLTGT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampExLTGT {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampExLTGT): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampExLTGT>): TimestampExLTGT {
    return TimestampExLTGT.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampExLTGT>): TimestampExLTGT {
    const message = createBaseTimestampExLTGT();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampGTELTE(): TimestampGTELTE {
  return { val: undefined };
}

export const TimestampGTELTE: MessageFns<TimestampGTELTE> = {
  encode(message: TimestampGTELTE, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampGTELTE {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampGTELTE();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampGTELTE {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampGTELTE): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampGTELTE>): TimestampGTELTE {
    return TimestampGTELTE.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampGTELTE>): TimestampGTELTE {
    const message = createBaseTimestampGTELTE();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampExGTELTE(): TimestampExGTELTE {
  return { val: undefined };
}

export const TimestampExGTELTE: MessageFns<TimestampExGTELTE> = {
  encode(message: TimestampExGTELTE, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampExGTELTE {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampExGTELTE();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampExGTELTE {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampExGTELTE): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampExGTELTE>): TimestampExGTELTE {
    return TimestampExGTELTE.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampExGTELTE>): TimestampExGTELTE {
    const message = createBaseTimestampExGTELTE();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampLTNow(): TimestampLTNow {
  return { val: undefined };
}

export const TimestampLTNow: MessageFns<TimestampLTNow> = {
  encode(message: TimestampLTNow, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampLTNow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampLTNow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampLTNow {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampLTNow): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampLTNow>): TimestampLTNow {
    return TimestampLTNow.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampLTNow>): TimestampLTNow {
    const message = createBaseTimestampLTNow();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampGTNow(): TimestampGTNow {
  return { val: undefined };
}

export const TimestampGTNow: MessageFns<TimestampGTNow> = {
  encode(message: TimestampGTNow, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampGTNow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampGTNow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampGTNow {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampGTNow): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampGTNow>): TimestampGTNow {
    return TimestampGTNow.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampGTNow>): TimestampGTNow {
    const message = createBaseTimestampGTNow();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampWithin(): TimestampWithin {
  return { val: undefined };
}

export const TimestampWithin: MessageFns<TimestampWithin> = {
  encode(message: TimestampWithin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampWithin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampWithin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampWithin {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampWithin): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampWithin>): TimestampWithin {
    return TimestampWithin.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampWithin>): TimestampWithin {
    const message = createBaseTimestampWithin();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampLTNowWithin(): TimestampLTNowWithin {
  return { val: undefined };
}

export const TimestampLTNowWithin: MessageFns<TimestampLTNowWithin> = {
  encode(message: TimestampLTNowWithin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampLTNowWithin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampLTNowWithin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampLTNowWithin {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampLTNowWithin): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampLTNowWithin>): TimestampLTNowWithin {
    return TimestampLTNowWithin.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampLTNowWithin>): TimestampLTNowWithin {
    const message = createBaseTimestampLTNowWithin();
    message.val = object.val ?? undefined;
    return message;
  },
};

function createBaseTimestampGTNowWithin(): TimestampGTNowWithin {
  return { val: undefined };
}

export const TimestampGTNowWithin: MessageFns<TimestampGTNowWithin> = {
  encode(message: TimestampGTNowWithin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.val !== undefined) {
      Timestamp.encode(toTimestamp(message.val), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimestampGTNowWithin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampGTNowWithin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.val = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimestampGTNowWithin {
    return { val: isSet(object.val) ? fromJsonTimestamp(object.val) : undefined };
  },

  toJSON(message: TimestampGTNowWithin): unknown {
    const obj: any = {};
    if (message.val !== undefined) {
      obj.val = message.val.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampGTNowWithin>): TimestampGTNowWithin {
    return TimestampGTNowWithin.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampGTNowWithin>): TimestampGTNowWithin {
    const message = createBaseTimestampGTNowWithin();
    message.val = object.val ?? undefined;
    return message;
  },
};

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