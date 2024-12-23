// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: example-workspace/foo/bar.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "pgv.example.foo";

export interface BarNone {
  value: number;
}

export interface BarOne {
  value: number;
}

export interface Bars {
  barNone: BarNone | undefined;
  barOne: BarOne | undefined;
}

function createBaseBarNone(): BarNone {
  return { value: 0 };
}

export const BarNone: MessageFns<BarNone> = {
  encode(message: BarNone, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BarNone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBarNone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BarNone {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: BarNone): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<BarNone>): BarNone {
    return BarNone.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BarNone>): BarNone {
    const message = createBaseBarNone();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseBarOne(): BarOne {
  return { value: 0 };
}

export const BarOne: MessageFns<BarOne> = {
  encode(message: BarOne, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BarOne {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBarOne();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BarOne {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: BarOne): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<BarOne>): BarOne {
    return BarOne.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BarOne>): BarOne {
    const message = createBaseBarOne();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseBars(): Bars {
  return { barNone: undefined, barOne: undefined };
}

export const Bars: MessageFns<Bars> = {
  encode(message: Bars, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.barNone !== undefined) {
      BarNone.encode(message.barNone, writer.uint32(10).fork()).join();
    }
    if (message.barOne !== undefined) {
      BarOne.encode(message.barOne, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Bars {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBars();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.barNone = BarNone.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.barOne = BarOne.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bars {
    return {
      barNone: isSet(object.barNone) ? BarNone.fromJSON(object.barNone) : undefined,
      barOne: isSet(object.barOne) ? BarOne.fromJSON(object.barOne) : undefined,
    };
  },

  toJSON(message: Bars): unknown {
    const obj: any = {};
    if (message.barNone !== undefined) {
      obj.barNone = BarNone.toJSON(message.barNone);
    }
    if (message.barOne !== undefined) {
      obj.barOne = BarOne.toJSON(message.barOne);
    }
    return obj;
  },

  create(base?: DeepPartial<Bars>): Bars {
    return Bars.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Bars>): Bars {
    const message = createBaseBars();
    message.barNone = (object.barNone !== undefined && object.barNone !== null)
      ? BarNone.fromPartial(object.barNone)
      : undefined;
    message.barOne = (object.barOne !== undefined && object.barOne !== null)
      ? BarOne.fromPartial(object.barOne)
      : undefined;
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
