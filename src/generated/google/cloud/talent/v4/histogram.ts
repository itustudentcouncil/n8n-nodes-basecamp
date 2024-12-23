// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/talent/v4/histogram.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.talent.v4";

/** The histogram request. */
export interface HistogramQuery {
  /**
   * An expression specifies a histogram request against matching jobs for
   * searches.
   *
   * See
   * [SearchJobsRequest.histogram_queries][google.cloud.talent.v4.SearchJobsRequest.histogram_queries]
   * for details about syntax.
   */
  histogramQuery: string;
}

/**
 * Histogram result that matches
 * [HistogramQuery][google.cloud.talent.v4.HistogramQuery] specified in
 * searches.
 */
export interface HistogramQueryResult {
  /** Requested histogram expression. */
  histogramQuery: string;
  /**
   * A map from the values of the facet associated with distinct values to the
   * number of matching entries with corresponding value.
   *
   * The key format is:
   *
   * * (for string histogram) string values stored in the field.
   * * (for named numeric bucket) name specified in `bucket()` function, like
   *   for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`.
   * * (for anonymous numeric bucket) range formatted as `<low>-<high>`, for
   *   example, `0-1000`, `MIN-0`, and `0-MAX`.
   */
  histogram: { [key: string]: Long };
}

export interface HistogramQueryResult_HistogramEntry {
  key: string;
  value: Long;
}

function createBaseHistogramQuery(): HistogramQuery {
  return { histogramQuery: "" };
}

export const HistogramQuery: MessageFns<HistogramQuery> = {
  encode(message: HistogramQuery, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.histogramQuery !== "") {
      writer.uint32(10).string(message.histogramQuery);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HistogramQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistogramQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.histogramQuery = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistogramQuery {
    return { histogramQuery: isSet(object.histogramQuery) ? globalThis.String(object.histogramQuery) : "" };
  },

  toJSON(message: HistogramQuery): unknown {
    const obj: any = {};
    if (message.histogramQuery !== "") {
      obj.histogramQuery = message.histogramQuery;
    }
    return obj;
  },

  create(base?: DeepPartial<HistogramQuery>): HistogramQuery {
    return HistogramQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HistogramQuery>): HistogramQuery {
    const message = createBaseHistogramQuery();
    message.histogramQuery = object.histogramQuery ?? "";
    return message;
  },
};

function createBaseHistogramQueryResult(): HistogramQueryResult {
  return { histogramQuery: "", histogram: {} };
}

export const HistogramQueryResult: MessageFns<HistogramQueryResult> = {
  encode(message: HistogramQueryResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.histogramQuery !== "") {
      writer.uint32(10).string(message.histogramQuery);
    }
    Object.entries(message.histogram).forEach(([key, value]) => {
      HistogramQueryResult_HistogramEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HistogramQueryResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistogramQueryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.histogramQuery = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = HistogramQueryResult_HistogramEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.histogram[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistogramQueryResult {
    return {
      histogramQuery: isSet(object.histogramQuery) ? globalThis.String(object.histogramQuery) : "",
      histogram: isObject(object.histogram)
        ? Object.entries(object.histogram).reduce<{ [key: string]: Long }>((acc, [key, value]) => {
          acc[key] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: HistogramQueryResult): unknown {
    const obj: any = {};
    if (message.histogramQuery !== "") {
      obj.histogramQuery = message.histogramQuery;
    }
    if (message.histogram) {
      const entries = Object.entries(message.histogram);
      if (entries.length > 0) {
        obj.histogram = {};
        entries.forEach(([k, v]) => {
          obj.histogram[k] = v.toString();
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<HistogramQueryResult>): HistogramQueryResult {
    return HistogramQueryResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HistogramQueryResult>): HistogramQueryResult {
    const message = createBaseHistogramQueryResult();
    message.histogramQuery = object.histogramQuery ?? "";
    message.histogram = Object.entries(object.histogram ?? {}).reduce<{ [key: string]: Long }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Long.fromValue(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseHistogramQueryResult_HistogramEntry(): HistogramQueryResult_HistogramEntry {
  return { key: "", value: Long.ZERO };
}

export const HistogramQueryResult_HistogramEntry: MessageFns<HistogramQueryResult_HistogramEntry> = {
  encode(message: HistogramQueryResult_HistogramEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HistogramQueryResult_HistogramEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistogramQueryResult_HistogramEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistogramQueryResult_HistogramEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: HistogramQueryResult_HistogramEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<HistogramQueryResult_HistogramEntry>): HistogramQueryResult_HistogramEntry {
    return HistogramQueryResult_HistogramEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HistogramQueryResult_HistogramEntry>): HistogramQueryResult_HistogramEntry {
    const message = createBaseHistogramQueryResult_HistogramEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
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
