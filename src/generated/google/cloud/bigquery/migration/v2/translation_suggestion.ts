// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/migration/v2/translation_suggestion.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.bigquery.migration.v2";

/** Details about a record. */
export interface TranslationReportRecord {
  /** Severity of the translation record. */
  severity: TranslationReportRecord_Severity;
  /**
   * Specifies the row from the source text where the error occurred (0 based).
   * Example: 2
   */
  scriptLine: number;
  /**
   * Specifies the column from the source texts where the error occurred. (0
   * based) example: 6
   */
  scriptColumn: number;
  /** Category of the error/warning. Example: SyntaxError */
  category: string;
  /** Detailed message of the record. */
  message: string;
}

/** The severity type of the record. */
export enum TranslationReportRecord_Severity {
  /** SEVERITY_UNSPECIFIED - SeverityType not specified. */
  SEVERITY_UNSPECIFIED = 0,
  /** INFO - INFO type. */
  INFO = 1,
  /**
   * WARNING - WARNING type. The translated query may still provide useful information
   * if all the report records are WARNING.
   */
  WARNING = 2,
  /** ERROR - ERROR type. Translation failed. */
  ERROR = 3,
  UNRECOGNIZED = -1,
}

export function translationReportRecord_SeverityFromJSON(object: any): TranslationReportRecord_Severity {
  switch (object) {
    case 0:
    case "SEVERITY_UNSPECIFIED":
      return TranslationReportRecord_Severity.SEVERITY_UNSPECIFIED;
    case 1:
    case "INFO":
      return TranslationReportRecord_Severity.INFO;
    case 2:
    case "WARNING":
      return TranslationReportRecord_Severity.WARNING;
    case 3:
    case "ERROR":
      return TranslationReportRecord_Severity.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TranslationReportRecord_Severity.UNRECOGNIZED;
  }
}

export function translationReportRecord_SeverityToJSON(object: TranslationReportRecord_Severity): string {
  switch (object) {
    case TranslationReportRecord_Severity.SEVERITY_UNSPECIFIED:
      return "SEVERITY_UNSPECIFIED";
    case TranslationReportRecord_Severity.INFO:
      return "INFO";
    case TranslationReportRecord_Severity.WARNING:
      return "WARNING";
    case TranslationReportRecord_Severity.ERROR:
      return "ERROR";
    case TranslationReportRecord_Severity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTranslationReportRecord(): TranslationReportRecord {
  return { severity: 0, scriptLine: 0, scriptColumn: 0, category: "", message: "" };
}

export const TranslationReportRecord: MessageFns<TranslationReportRecord> = {
  encode(message: TranslationReportRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.severity !== 0) {
      writer.uint32(8).int32(message.severity);
    }
    if (message.scriptLine !== 0) {
      writer.uint32(16).int32(message.scriptLine);
    }
    if (message.scriptColumn !== 0) {
      writer.uint32(24).int32(message.scriptColumn);
    }
    if (message.category !== "") {
      writer.uint32(34).string(message.category);
    }
    if (message.message !== "") {
      writer.uint32(42).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TranslationReportRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationReportRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.severity = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.scriptLine = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.scriptColumn = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.category = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranslationReportRecord {
    return {
      severity: isSet(object.severity) ? translationReportRecord_SeverityFromJSON(object.severity) : 0,
      scriptLine: isSet(object.scriptLine) ? globalThis.Number(object.scriptLine) : 0,
      scriptColumn: isSet(object.scriptColumn) ? globalThis.Number(object.scriptColumn) : 0,
      category: isSet(object.category) ? globalThis.String(object.category) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: TranslationReportRecord): unknown {
    const obj: any = {};
    if (message.severity !== 0) {
      obj.severity = translationReportRecord_SeverityToJSON(message.severity);
    }
    if (message.scriptLine !== 0) {
      obj.scriptLine = Math.round(message.scriptLine);
    }
    if (message.scriptColumn !== 0) {
      obj.scriptColumn = Math.round(message.scriptColumn);
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create(base?: DeepPartial<TranslationReportRecord>): TranslationReportRecord {
    return TranslationReportRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TranslationReportRecord>): TranslationReportRecord {
    const message = createBaseTranslationReportRecord();
    message.severity = object.severity ?? 0;
    message.scriptLine = object.scriptLine ?? 0;
    message.scriptColumn = object.scriptColumn ?? 0;
    message.category = object.category ?? "";
    message.message = object.message ?? "";
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