// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/websecurityscanner/v1/scan_run_log.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  ScanRun_ExecutionState,
  scanRun_ExecutionStateFromJSON,
  scanRun_ExecutionStateToJSON,
  ScanRun_ResultState,
  scanRun_ResultStateFromJSON,
  scanRun_ResultStateToJSON,
} from "./scan_run.js";
import { ScanRunErrorTrace } from "./scan_run_error_trace.js";

export const protobufPackage = "google.cloud.websecurityscanner.v1";

/**
 * A ScanRunLog is an output-only proto used for Stackdriver customer logging.
 * It is used for logs covering the start and end of scan pipelines.
 * Other than an added summary, this is a subset of the ScanRun.
 * Representation in logs is either a proto Struct, or converted to JSON.
 * Next id: 9
 */
export interface ScanRunLog {
  /** Human friendly message about the event. */
  summary: string;
  /** The resource name of the ScanRun being logged. */
  name: string;
  /** The execution state of the ScanRun. */
  executionState: ScanRun_ExecutionState;
  /** The result state of the ScanRun. */
  resultState: ScanRun_ResultState;
  urlsCrawledCount: Long;
  urlsTestedCount: Long;
  hasFindings: boolean;
  errorTrace: ScanRunErrorTrace | undefined;
}

function createBaseScanRunLog(): ScanRunLog {
  return {
    summary: "",
    name: "",
    executionState: 0,
    resultState: 0,
    urlsCrawledCount: Long.ZERO,
    urlsTestedCount: Long.ZERO,
    hasFindings: false,
    errorTrace: undefined,
  };
}

export const ScanRunLog: MessageFns<ScanRunLog> = {
  encode(message: ScanRunLog, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.summary !== "") {
      writer.uint32(10).string(message.summary);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.executionState !== 0) {
      writer.uint32(24).int32(message.executionState);
    }
    if (message.resultState !== 0) {
      writer.uint32(32).int32(message.resultState);
    }
    if (!message.urlsCrawledCount.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.urlsCrawledCount.toString());
    }
    if (!message.urlsTestedCount.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.urlsTestedCount.toString());
    }
    if (message.hasFindings !== false) {
      writer.uint32(56).bool(message.hasFindings);
    }
    if (message.errorTrace !== undefined) {
      ScanRunErrorTrace.encode(message.errorTrace, writer.uint32(66).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanRunLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanRunLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.summary = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.executionState = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.resultState = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.urlsCrawledCount = Long.fromString(reader.int64().toString());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.urlsTestedCount = Long.fromString(reader.int64().toString());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.hasFindings = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.errorTrace = ScanRunErrorTrace.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanRunLog {
    return {
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      executionState: isSet(object.executionState) ? scanRun_ExecutionStateFromJSON(object.executionState) : 0,
      resultState: isSet(object.resultState) ? scanRun_ResultStateFromJSON(object.resultState) : 0,
      urlsCrawledCount: isSet(object.urlsCrawledCount) ? Long.fromValue(object.urlsCrawledCount) : Long.ZERO,
      urlsTestedCount: isSet(object.urlsTestedCount) ? Long.fromValue(object.urlsTestedCount) : Long.ZERO,
      hasFindings: isSet(object.hasFindings) ? globalThis.Boolean(object.hasFindings) : false,
      errorTrace: isSet(object.errorTrace) ? ScanRunErrorTrace.fromJSON(object.errorTrace) : undefined,
    };
  },

  toJSON(message: ScanRunLog): unknown {
    const obj: any = {};
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.executionState !== 0) {
      obj.executionState = scanRun_ExecutionStateToJSON(message.executionState);
    }
    if (message.resultState !== 0) {
      obj.resultState = scanRun_ResultStateToJSON(message.resultState);
    }
    if (!message.urlsCrawledCount.equals(Long.ZERO)) {
      obj.urlsCrawledCount = (message.urlsCrawledCount || Long.ZERO).toString();
    }
    if (!message.urlsTestedCount.equals(Long.ZERO)) {
      obj.urlsTestedCount = (message.urlsTestedCount || Long.ZERO).toString();
    }
    if (message.hasFindings !== false) {
      obj.hasFindings = message.hasFindings;
    }
    if (message.errorTrace !== undefined) {
      obj.errorTrace = ScanRunErrorTrace.toJSON(message.errorTrace);
    }
    return obj;
  },

  create(base?: DeepPartial<ScanRunLog>): ScanRunLog {
    return ScanRunLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanRunLog>): ScanRunLog {
    const message = createBaseScanRunLog();
    message.summary = object.summary ?? "";
    message.name = object.name ?? "";
    message.executionState = object.executionState ?? 0;
    message.resultState = object.resultState ?? 0;
    message.urlsCrawledCount = (object.urlsCrawledCount !== undefined && object.urlsCrawledCount !== null)
      ? Long.fromValue(object.urlsCrawledCount)
      : Long.ZERO;
    message.urlsTestedCount = (object.urlsTestedCount !== undefined && object.urlsTestedCount !== null)
      ? Long.fromValue(object.urlsTestedCount)
      : Long.ZERO;
    message.hasFindings = object.hasFindings ?? false;
    message.errorTrace = (object.errorTrace !== undefined && object.errorTrace !== null)
      ? ScanRunErrorTrace.fromPartial(object.errorTrace)
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
