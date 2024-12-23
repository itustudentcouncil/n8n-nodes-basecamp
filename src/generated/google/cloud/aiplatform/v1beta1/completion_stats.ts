// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/completion_stats.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/**
 * Success and error statistics of processing multiple entities
 * (for example, DataItems or structured data rows) in batch.
 */
export interface CompletionStats {
  /** Output only. The number of entities that had been processed successfully. */
  successfulCount: Long;
  /** Output only. The number of entities for which any error was encountered. */
  failedCount: Long;
  /**
   * Output only. In cases when enough errors are encountered a job, pipeline,
   * or operation may be failed as a whole. Below is the number of entities for
   * which the processing had not been finished (either in successful or failed
   * state). Set to -1 if the number is unknown (for example, the operation
   * failed before the total entity number could be collected).
   */
  incompleteCount: Long;
  /**
   * Output only. The number of the successful forecast points that are
   * generated by the forecasting model. This is ONLY used by the forecasting
   * batch prediction.
   */
  successfulForecastPointCount: Long;
}

function createBaseCompletionStats(): CompletionStats {
  return {
    successfulCount: Long.ZERO,
    failedCount: Long.ZERO,
    incompleteCount: Long.ZERO,
    successfulForecastPointCount: Long.ZERO,
  };
}

export const CompletionStats: MessageFns<CompletionStats> = {
  encode(message: CompletionStats, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.successfulCount.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.successfulCount.toString());
    }
    if (!message.failedCount.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.failedCount.toString());
    }
    if (!message.incompleteCount.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.incompleteCount.toString());
    }
    if (!message.successfulForecastPointCount.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.successfulForecastPointCount.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompletionStats {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompletionStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.successfulCount = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.failedCount = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.incompleteCount = Long.fromString(reader.int64().toString());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.successfulForecastPointCount = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompletionStats {
    return {
      successfulCount: isSet(object.successfulCount) ? Long.fromValue(object.successfulCount) : Long.ZERO,
      failedCount: isSet(object.failedCount) ? Long.fromValue(object.failedCount) : Long.ZERO,
      incompleteCount: isSet(object.incompleteCount) ? Long.fromValue(object.incompleteCount) : Long.ZERO,
      successfulForecastPointCount: isSet(object.successfulForecastPointCount)
        ? Long.fromValue(object.successfulForecastPointCount)
        : Long.ZERO,
    };
  },

  toJSON(message: CompletionStats): unknown {
    const obj: any = {};
    if (!message.successfulCount.equals(Long.ZERO)) {
      obj.successfulCount = (message.successfulCount || Long.ZERO).toString();
    }
    if (!message.failedCount.equals(Long.ZERO)) {
      obj.failedCount = (message.failedCount || Long.ZERO).toString();
    }
    if (!message.incompleteCount.equals(Long.ZERO)) {
      obj.incompleteCount = (message.incompleteCount || Long.ZERO).toString();
    }
    if (!message.successfulForecastPointCount.equals(Long.ZERO)) {
      obj.successfulForecastPointCount = (message.successfulForecastPointCount || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<CompletionStats>): CompletionStats {
    return CompletionStats.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompletionStats>): CompletionStats {
    const message = createBaseCompletionStats();
    message.successfulCount = (object.successfulCount !== undefined && object.successfulCount !== null)
      ? Long.fromValue(object.successfulCount)
      : Long.ZERO;
    message.failedCount = (object.failedCount !== undefined && object.failedCount !== null)
      ? Long.fromValue(object.failedCount)
      : Long.ZERO;
    message.incompleteCount = (object.incompleteCount !== undefined && object.incompleteCount !== null)
      ? Long.fromValue(object.incompleteCount)
      : Long.ZERO;
    message.successfulForecastPointCount =
      (object.successfulForecastPointCount !== undefined && object.successfulForecastPointCount !== null)
        ? Long.fromValue(object.successfulForecastPointCount)
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
