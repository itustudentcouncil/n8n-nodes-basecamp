// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/matching_function_operator.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing matching function operator. */
export interface MatchingFunctionOperatorEnum {
}

/** Possible operators in a matching function. */
export enum MatchingFunctionOperatorEnum_MatchingFunctionOperator {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** IN - The IN operator. */
  IN = 2,
  /** IDENTITY - The IDENTITY operator. */
  IDENTITY = 3,
  /** EQUALS - The EQUALS operator */
  EQUALS = 4,
  /**
   * AND - Operator that takes two or more operands that are of type
   * FunctionOperand and checks that all the operands evaluate to true.
   * For functions related to ad formats, all the operands must be in
   * left_operands.
   */
  AND = 5,
  /**
   * CONTAINS_ANY - Operator that returns true if the elements in left_operands contain any
   * of the elements in right_operands. Otherwise, return false. The
   * right_operands must contain at least 1 and no more than 3
   * ConstantOperands.
   */
  CONTAINS_ANY = 6,
  UNRECOGNIZED = -1,
}

export function matchingFunctionOperatorEnum_MatchingFunctionOperatorFromJSON(
  object: any,
): MatchingFunctionOperatorEnum_MatchingFunctionOperator {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.UNKNOWN;
    case 2:
    case "IN":
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.IN;
    case 3:
    case "IDENTITY":
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.IDENTITY;
    case 4:
    case "EQUALS":
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.EQUALS;
    case 5:
    case "AND":
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.AND;
    case 6:
    case "CONTAINS_ANY":
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.CONTAINS_ANY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MatchingFunctionOperatorEnum_MatchingFunctionOperator.UNRECOGNIZED;
  }
}

export function matchingFunctionOperatorEnum_MatchingFunctionOperatorToJSON(
  object: MatchingFunctionOperatorEnum_MatchingFunctionOperator,
): string {
  switch (object) {
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.UNSPECIFIED:
      return "UNSPECIFIED";
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.UNKNOWN:
      return "UNKNOWN";
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.IN:
      return "IN";
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.IDENTITY:
      return "IDENTITY";
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.EQUALS:
      return "EQUALS";
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.AND:
      return "AND";
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.CONTAINS_ANY:
      return "CONTAINS_ANY";
    case MatchingFunctionOperatorEnum_MatchingFunctionOperator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseMatchingFunctionOperatorEnum(): MatchingFunctionOperatorEnum {
  return {};
}

export const MatchingFunctionOperatorEnum: MessageFns<MatchingFunctionOperatorEnum> = {
  encode(_: MatchingFunctionOperatorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MatchingFunctionOperatorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchingFunctionOperatorEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MatchingFunctionOperatorEnum {
    return {};
  },

  toJSON(_: MatchingFunctionOperatorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MatchingFunctionOperatorEnum>): MatchingFunctionOperatorEnum {
    return MatchingFunctionOperatorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MatchingFunctionOperatorEnum>): MatchingFunctionOperatorEnum {
    const message = createBaseMatchingFunctionOperatorEnum();
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