// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/type/fraction.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.type";

/** Represents a fraction in terms of a numerator divided by a denominator. */
export interface Fraction {
  /** The numerator in the fraction, e.g. 2 in 2/3. */
  numerator: Long;
  /**
   * The value by which the numerator is divided, e.g. 3 in 2/3. Must be
   * positive.
   */
  denominator: Long;
}

function createBaseFraction(): Fraction {
  return { numerator: Long.ZERO, denominator: Long.ZERO };
}

export const Fraction: MessageFns<Fraction> = {
  encode(message: Fraction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.numerator.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.numerator.toString());
    }
    if (!message.denominator.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.denominator.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numerator = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.denominator = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fraction {
    return {
      numerator: isSet(object.numerator) ? Long.fromValue(object.numerator) : Long.ZERO,
      denominator: isSet(object.denominator) ? Long.fromValue(object.denominator) : Long.ZERO,
    };
  },

  toJSON(message: Fraction): unknown {
    const obj: any = {};
    if (!message.numerator.equals(Long.ZERO)) {
      obj.numerator = (message.numerator || Long.ZERO).toString();
    }
    if (!message.denominator.equals(Long.ZERO)) {
      obj.denominator = (message.denominator || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Fraction>): Fraction {
    return Fraction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Fraction>): Fraction {
    const message = createBaseFraction();
    message.numerator = (object.numerator !== undefined && object.numerator !== null)
      ? Long.fromValue(object.numerator)
      : Long.ZERO;
    message.denominator = (object.denominator !== undefined && object.denominator !== null)
      ? Long.fromValue(object.denominator)
      : Long.ZERO;
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