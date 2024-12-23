// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/resultstore/v2/coverage_summary.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Language, languageFromJSON, languageToJSON } from "./common.js";

export const protobufPackage = "google.devtools.resultstore.v2";

/** Summary of line coverage */
export interface LineCoverageSummary {
  /** Number of lines instrumented for coverage. */
  instrumentedLineCount: number;
  /** Number of instrumented lines that were executed by the test. */
  executedLineCount: number;
}

/**
 * Summary of branch coverage
 * A branch may be:
 *  * not executed.  Counted only in total.
 *  * executed but not taken.  Appears in total and executed.
 *  * executed and taken.  Appears in all three fields.
 */
export interface BranchCoverageSummary {
  /** The number of branches present in the file. */
  totalBranchCount: number;
  /**
   * The number of branches executed out of the total branches present.
   * A branch is executed when its condition is evaluated.
   * This is <= total_branch_count as not all branches are executed.
   */
  executedBranchCount: number;
  /**
   * The number of branches taken out of the total branches executed.
   * A branch is taken when its condition is satisfied.
   * This is <= executed_branch_count as not all executed branches are taken.
   */
  takenBranchCount: number;
}

/** Summary of coverage in each language */
export interface LanguageCoverageSummary {
  /** This summary is for all files written in this programming language. */
  language: Language;
  /** Summary of lines covered vs instrumented. */
  lineSummary:
    | LineCoverageSummary
    | undefined;
  /** Summary of branch coverage. */
  branchSummary: BranchCoverageSummary | undefined;
}

function createBaseLineCoverageSummary(): LineCoverageSummary {
  return { instrumentedLineCount: 0, executedLineCount: 0 };
}

export const LineCoverageSummary: MessageFns<LineCoverageSummary> = {
  encode(message: LineCoverageSummary, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.instrumentedLineCount !== 0) {
      writer.uint32(8).int32(message.instrumentedLineCount);
    }
    if (message.executedLineCount !== 0) {
      writer.uint32(16).int32(message.executedLineCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LineCoverageSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLineCoverageSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.instrumentedLineCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.executedLineCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LineCoverageSummary {
    return {
      instrumentedLineCount: isSet(object.instrumentedLineCount) ? globalThis.Number(object.instrumentedLineCount) : 0,
      executedLineCount: isSet(object.executedLineCount) ? globalThis.Number(object.executedLineCount) : 0,
    };
  },

  toJSON(message: LineCoverageSummary): unknown {
    const obj: any = {};
    if (message.instrumentedLineCount !== 0) {
      obj.instrumentedLineCount = Math.round(message.instrumentedLineCount);
    }
    if (message.executedLineCount !== 0) {
      obj.executedLineCount = Math.round(message.executedLineCount);
    }
    return obj;
  },

  create(base?: DeepPartial<LineCoverageSummary>): LineCoverageSummary {
    return LineCoverageSummary.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LineCoverageSummary>): LineCoverageSummary {
    const message = createBaseLineCoverageSummary();
    message.instrumentedLineCount = object.instrumentedLineCount ?? 0;
    message.executedLineCount = object.executedLineCount ?? 0;
    return message;
  },
};

function createBaseBranchCoverageSummary(): BranchCoverageSummary {
  return { totalBranchCount: 0, executedBranchCount: 0, takenBranchCount: 0 };
}

export const BranchCoverageSummary: MessageFns<BranchCoverageSummary> = {
  encode(message: BranchCoverageSummary, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.totalBranchCount !== 0) {
      writer.uint32(8).int32(message.totalBranchCount);
    }
    if (message.executedBranchCount !== 0) {
      writer.uint32(16).int32(message.executedBranchCount);
    }
    if (message.takenBranchCount !== 0) {
      writer.uint32(24).int32(message.takenBranchCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BranchCoverageSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBranchCoverageSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalBranchCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.executedBranchCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.takenBranchCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BranchCoverageSummary {
    return {
      totalBranchCount: isSet(object.totalBranchCount) ? globalThis.Number(object.totalBranchCount) : 0,
      executedBranchCount: isSet(object.executedBranchCount) ? globalThis.Number(object.executedBranchCount) : 0,
      takenBranchCount: isSet(object.takenBranchCount) ? globalThis.Number(object.takenBranchCount) : 0,
    };
  },

  toJSON(message: BranchCoverageSummary): unknown {
    const obj: any = {};
    if (message.totalBranchCount !== 0) {
      obj.totalBranchCount = Math.round(message.totalBranchCount);
    }
    if (message.executedBranchCount !== 0) {
      obj.executedBranchCount = Math.round(message.executedBranchCount);
    }
    if (message.takenBranchCount !== 0) {
      obj.takenBranchCount = Math.round(message.takenBranchCount);
    }
    return obj;
  },

  create(base?: DeepPartial<BranchCoverageSummary>): BranchCoverageSummary {
    return BranchCoverageSummary.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BranchCoverageSummary>): BranchCoverageSummary {
    const message = createBaseBranchCoverageSummary();
    message.totalBranchCount = object.totalBranchCount ?? 0;
    message.executedBranchCount = object.executedBranchCount ?? 0;
    message.takenBranchCount = object.takenBranchCount ?? 0;
    return message;
  },
};

function createBaseLanguageCoverageSummary(): LanguageCoverageSummary {
  return { language: 0, lineSummary: undefined, branchSummary: undefined };
}

export const LanguageCoverageSummary: MessageFns<LanguageCoverageSummary> = {
  encode(message: LanguageCoverageSummary, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.language !== 0) {
      writer.uint32(8).int32(message.language);
    }
    if (message.lineSummary !== undefined) {
      LineCoverageSummary.encode(message.lineSummary, writer.uint32(18).fork()).join();
    }
    if (message.branchSummary !== undefined) {
      BranchCoverageSummary.encode(message.branchSummary, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LanguageCoverageSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLanguageCoverageSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.language = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lineSummary = LineCoverageSummary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.branchSummary = BranchCoverageSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LanguageCoverageSummary {
    return {
      language: isSet(object.language) ? languageFromJSON(object.language) : 0,
      lineSummary: isSet(object.lineSummary) ? LineCoverageSummary.fromJSON(object.lineSummary) : undefined,
      branchSummary: isSet(object.branchSummary) ? BranchCoverageSummary.fromJSON(object.branchSummary) : undefined,
    };
  },

  toJSON(message: LanguageCoverageSummary): unknown {
    const obj: any = {};
    if (message.language !== 0) {
      obj.language = languageToJSON(message.language);
    }
    if (message.lineSummary !== undefined) {
      obj.lineSummary = LineCoverageSummary.toJSON(message.lineSummary);
    }
    if (message.branchSummary !== undefined) {
      obj.branchSummary = BranchCoverageSummary.toJSON(message.branchSummary);
    }
    return obj;
  },

  create(base?: DeepPartial<LanguageCoverageSummary>): LanguageCoverageSummary {
    return LanguageCoverageSummary.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LanguageCoverageSummary>): LanguageCoverageSummary {
    const message = createBaseLanguageCoverageSummary();
    message.language = object.language ?? 0;
    message.lineSummary = (object.lineSummary !== undefined && object.lineSummary !== null)
      ? LineCoverageSummary.fromPartial(object.lineSummary)
      : undefined;
    message.branchSummary = (object.branchSummary !== undefined && object.branchSummary !== null)
      ? BranchCoverageSummary.fromPartial(object.branchSummary)
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
