// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/websecurityscanner/v1beta/scan_run_warning_trace.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.websecurityscanner.v1beta";

/**
 * Output only.
 * Defines a warning trace message for ScanRun. Warning traces provide customers
 * with useful information that helps make the scanning process more effective.
 */
export interface ScanRunWarningTrace {
  /** Indicates the warning code. */
  code: ScanRunWarningTrace_Code;
}

/**
 * Output only.
 * Defines a warning message code.
 * Next id: 6
 */
export enum ScanRunWarningTrace_Code {
  /** CODE_UNSPECIFIED - Default value is never used. */
  CODE_UNSPECIFIED = 0,
  /**
   * INSUFFICIENT_CRAWL_RESULTS - Indicates that a scan discovered an unexpectedly low number of URLs. This
   * is sometimes caused by complex navigation features or by using a single
   * URL for numerous pages.
   */
  INSUFFICIENT_CRAWL_RESULTS = 1,
  /**
   * TOO_MANY_CRAWL_RESULTS - Indicates that a scan discovered too many URLs to test, or excessive
   * redundant URLs.
   */
  TOO_MANY_CRAWL_RESULTS = 2,
  /**
   * TOO_MANY_FUZZ_TASKS - Indicates that too many tests have been generated for the scan. Customer
   * should try reducing the number of starting URLs, increasing the QPS rate,
   * or narrowing down the scope of the scan using the excluded patterns.
   */
  TOO_MANY_FUZZ_TASKS = 3,
  /** BLOCKED_BY_IAP - Indicates that a scan is blocked by IAP. */
  BLOCKED_BY_IAP = 4,
  UNRECOGNIZED = -1,
}

export function scanRunWarningTrace_CodeFromJSON(object: any): ScanRunWarningTrace_Code {
  switch (object) {
    case 0:
    case "CODE_UNSPECIFIED":
      return ScanRunWarningTrace_Code.CODE_UNSPECIFIED;
    case 1:
    case "INSUFFICIENT_CRAWL_RESULTS":
      return ScanRunWarningTrace_Code.INSUFFICIENT_CRAWL_RESULTS;
    case 2:
    case "TOO_MANY_CRAWL_RESULTS":
      return ScanRunWarningTrace_Code.TOO_MANY_CRAWL_RESULTS;
    case 3:
    case "TOO_MANY_FUZZ_TASKS":
      return ScanRunWarningTrace_Code.TOO_MANY_FUZZ_TASKS;
    case 4:
    case "BLOCKED_BY_IAP":
      return ScanRunWarningTrace_Code.BLOCKED_BY_IAP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScanRunWarningTrace_Code.UNRECOGNIZED;
  }
}

export function scanRunWarningTrace_CodeToJSON(object: ScanRunWarningTrace_Code): string {
  switch (object) {
    case ScanRunWarningTrace_Code.CODE_UNSPECIFIED:
      return "CODE_UNSPECIFIED";
    case ScanRunWarningTrace_Code.INSUFFICIENT_CRAWL_RESULTS:
      return "INSUFFICIENT_CRAWL_RESULTS";
    case ScanRunWarningTrace_Code.TOO_MANY_CRAWL_RESULTS:
      return "TOO_MANY_CRAWL_RESULTS";
    case ScanRunWarningTrace_Code.TOO_MANY_FUZZ_TASKS:
      return "TOO_MANY_FUZZ_TASKS";
    case ScanRunWarningTrace_Code.BLOCKED_BY_IAP:
      return "BLOCKED_BY_IAP";
    case ScanRunWarningTrace_Code.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseScanRunWarningTrace(): ScanRunWarningTrace {
  return { code: 0 };
}

export const ScanRunWarningTrace: MessageFns<ScanRunWarningTrace> = {
  encode(message: ScanRunWarningTrace, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanRunWarningTrace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanRunWarningTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanRunWarningTrace {
    return { code: isSet(object.code) ? scanRunWarningTrace_CodeFromJSON(object.code) : 0 };
  },

  toJSON(message: ScanRunWarningTrace): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = scanRunWarningTrace_CodeToJSON(message.code);
    }
    return obj;
  },

  create(base?: DeepPartial<ScanRunWarningTrace>): ScanRunWarningTrace {
    return ScanRunWarningTrace.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanRunWarningTrace>): ScanRunWarningTrace {
    const message = createBaseScanRunWarningTrace();
    message.code = object.code ?? 0;
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