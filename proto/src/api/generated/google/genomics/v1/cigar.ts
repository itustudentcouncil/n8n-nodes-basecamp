// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/genomics/v1/cigar.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.genomics.v1";

/** A single CIGAR operation. */
export interface CigarUnit {
  operation: CigarUnit_Operation;
  /** The number of genomic bases that the operation runs for. Required. */
  operationLength: Long;
  /**
   * `referenceSequence` is only used at mismatches
   * (`SEQUENCE_MISMATCH`) and deletions (`DELETE`).
   * Filling this field replaces SAM's MD tag. If the relevant information is
   * not available, this field is unset.
   */
  referenceSequence: string;
}

/**
 * Describes the different types of CIGAR alignment operations that exist.
 * Used wherever CIGAR alignments are used.
 */
export enum CigarUnit_Operation {
  OPERATION_UNSPECIFIED = 0,
  /**
   * ALIGNMENT_MATCH - An alignment match indicates that a sequence can be aligned to the
   * reference without evidence of an INDEL. Unlike the
   * `SEQUENCE_MATCH` and `SEQUENCE_MISMATCH` operators,
   * the `ALIGNMENT_MATCH` operator does not indicate whether the
   * reference and read sequences are an exact match. This operator is
   * equivalent to SAM's `M`.
   */
  ALIGNMENT_MATCH = 1,
  /**
   * INSERT - The insert operator indicates that the read contains evidence of bases
   * being inserted into the reference. This operator is equivalent to SAM's
   * `I`.
   */
  INSERT = 2,
  /**
   * DELETE - The delete operator indicates that the read contains evidence of bases
   * being deleted from the reference. This operator is equivalent to SAM's
   * `D`.
   */
  DELETE = 3,
  /**
   * SKIP - The skip operator indicates that this read skips a long segment of the
   * reference, but the bases have not been deleted. This operator is commonly
   * used when working with RNA-seq data, where reads may skip long segments
   * of the reference between exons. This operator is equivalent to SAM's
   * `N`.
   */
  SKIP = 4,
  /**
   * CLIP_SOFT - The soft clip operator indicates that bases at the start/end of a read
   * have not been considered during alignment. This may occur if the majority
   * of a read maps, except for low quality bases at the start/end of a read.
   * This operator is equivalent to SAM's `S`. Bases that are soft
   * clipped will still be stored in the read.
   */
  CLIP_SOFT = 5,
  /**
   * CLIP_HARD - The hard clip operator indicates that bases at the start/end of a read
   * have been omitted from this alignment. This may occur if this linear
   * alignment is part of a chimeric alignment, or if the read has been
   * trimmed (for example, during error correction or to trim poly-A tails for
   * RNA-seq). This operator is equivalent to SAM's `H`.
   */
  CLIP_HARD = 6,
  /**
   * PAD - The pad operator indicates that there is padding in an alignment. This
   * operator is equivalent to SAM's `P`.
   */
  PAD = 7,
  /**
   * SEQUENCE_MATCH - This operator indicates that this portion of the aligned sequence exactly
   * matches the reference. This operator is equivalent to SAM's `=`.
   */
  SEQUENCE_MATCH = 8,
  /**
   * SEQUENCE_MISMATCH - This operator indicates that this portion of the aligned sequence is an
   * alignment match to the reference, but a sequence mismatch. This can
   * indicate a SNP or a read error. This operator is equivalent to SAM's
   * `X`.
   */
  SEQUENCE_MISMATCH = 9,
  UNRECOGNIZED = -1,
}

export function cigarUnit_OperationFromJSON(object: any): CigarUnit_Operation {
  switch (object) {
    case 0:
    case "OPERATION_UNSPECIFIED":
      return CigarUnit_Operation.OPERATION_UNSPECIFIED;
    case 1:
    case "ALIGNMENT_MATCH":
      return CigarUnit_Operation.ALIGNMENT_MATCH;
    case 2:
    case "INSERT":
      return CigarUnit_Operation.INSERT;
    case 3:
    case "DELETE":
      return CigarUnit_Operation.DELETE;
    case 4:
    case "SKIP":
      return CigarUnit_Operation.SKIP;
    case 5:
    case "CLIP_SOFT":
      return CigarUnit_Operation.CLIP_SOFT;
    case 6:
    case "CLIP_HARD":
      return CigarUnit_Operation.CLIP_HARD;
    case 7:
    case "PAD":
      return CigarUnit_Operation.PAD;
    case 8:
    case "SEQUENCE_MATCH":
      return CigarUnit_Operation.SEQUENCE_MATCH;
    case 9:
    case "SEQUENCE_MISMATCH":
      return CigarUnit_Operation.SEQUENCE_MISMATCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CigarUnit_Operation.UNRECOGNIZED;
  }
}

export function cigarUnit_OperationToJSON(object: CigarUnit_Operation): string {
  switch (object) {
    case CigarUnit_Operation.OPERATION_UNSPECIFIED:
      return "OPERATION_UNSPECIFIED";
    case CigarUnit_Operation.ALIGNMENT_MATCH:
      return "ALIGNMENT_MATCH";
    case CigarUnit_Operation.INSERT:
      return "INSERT";
    case CigarUnit_Operation.DELETE:
      return "DELETE";
    case CigarUnit_Operation.SKIP:
      return "SKIP";
    case CigarUnit_Operation.CLIP_SOFT:
      return "CLIP_SOFT";
    case CigarUnit_Operation.CLIP_HARD:
      return "CLIP_HARD";
    case CigarUnit_Operation.PAD:
      return "PAD";
    case CigarUnit_Operation.SEQUENCE_MATCH:
      return "SEQUENCE_MATCH";
    case CigarUnit_Operation.SEQUENCE_MISMATCH:
      return "SEQUENCE_MISMATCH";
    case CigarUnit_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCigarUnit(): CigarUnit {
  return { operation: 0, operationLength: Long.ZERO, referenceSequence: "" };
}

export const CigarUnit: MessageFns<CigarUnit> = {
  encode(message: CigarUnit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (!message.operationLength.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.operationLength.toString());
    }
    if (message.referenceSequence !== "") {
      writer.uint32(26).string(message.referenceSequence);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CigarUnit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCigarUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.operationLength = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.referenceSequence = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CigarUnit {
    return {
      operation: isSet(object.operation) ? cigarUnit_OperationFromJSON(object.operation) : 0,
      operationLength: isSet(object.operationLength) ? Long.fromValue(object.operationLength) : Long.ZERO,
      referenceSequence: isSet(object.referenceSequence) ? globalThis.String(object.referenceSequence) : "",
    };
  },

  toJSON(message: CigarUnit): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = cigarUnit_OperationToJSON(message.operation);
    }
    if (!message.operationLength.equals(Long.ZERO)) {
      obj.operationLength = (message.operationLength || Long.ZERO).toString();
    }
    if (message.referenceSequence !== "") {
      obj.referenceSequence = message.referenceSequence;
    }
    return obj;
  },

  create(base?: DeepPartial<CigarUnit>): CigarUnit {
    return CigarUnit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CigarUnit>): CigarUnit {
    const message = createBaseCigarUnit();
    message.operation = object.operation ?? 0;
    message.operationLength = (object.operationLength !== undefined && object.operationLength !== null)
      ? Long.fromValue(object.operationLength)
      : Long.ZERO;
    message.referenceSequence = object.referenceSequence ?? "";
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