// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/automl/v1beta1/text_extraction.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextSegment } from "./text_segment.js";

export const protobufPackage = "google.cloud.automl.v1beta1";

/** Annotation for identifying spans of text. */
export interface TextExtractionAnnotation {
  /**
   * An entity annotation will set this, which is the part of the original
   * text to which the annotation pertains.
   */
  textSegment?:
    | TextSegment
    | undefined;
  /**
   * Output only. A confidence estimate between 0.0 and 1.0. A higher value
   * means greater confidence in correctness of the annotation.
   */
  score: number;
}

/** Model evaluation metrics for text extraction problems. */
export interface TextExtractionEvaluationMetrics {
  /** Output only. The Area under precision recall curve metric. */
  auPrc: number;
  /**
   * Output only. Metrics that have confidence thresholds.
   * Precision-recall curve can be derived from it.
   */
  confidenceMetricsEntries: TextExtractionEvaluationMetrics_ConfidenceMetricsEntry[];
}

/** Metrics for a single confidence threshold. */
export interface TextExtractionEvaluationMetrics_ConfidenceMetricsEntry {
  /**
   * Output only. The confidence threshold value used to compute the metrics.
   * Only annotations with score of at least this threshold are considered to
   * be ones the model would return.
   */
  confidenceThreshold: number;
  /** Output only. Recall under the given confidence threshold. */
  recall: number;
  /** Output only. Precision under the given confidence threshold. */
  precision: number;
  /** Output only. The harmonic mean of recall and precision. */
  f1Score: number;
}

function createBaseTextExtractionAnnotation(): TextExtractionAnnotation {
  return { textSegment: undefined, score: 0 };
}

export const TextExtractionAnnotation: MessageFns<TextExtractionAnnotation> = {
  encode(message: TextExtractionAnnotation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.textSegment !== undefined) {
      TextSegment.encode(message.textSegment, writer.uint32(26).fork()).join();
    }
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextExtractionAnnotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextExtractionAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.textSegment = TextSegment.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 13) {
            break;
          }

          message.score = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextExtractionAnnotation {
    return {
      textSegment: isSet(object.textSegment) ? TextSegment.fromJSON(object.textSegment) : undefined,
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
    };
  },

  toJSON(message: TextExtractionAnnotation): unknown {
    const obj: any = {};
    if (message.textSegment !== undefined) {
      obj.textSegment = TextSegment.toJSON(message.textSegment);
    }
    if (message.score !== 0) {
      obj.score = message.score;
    }
    return obj;
  },

  create(base?: DeepPartial<TextExtractionAnnotation>): TextExtractionAnnotation {
    return TextExtractionAnnotation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextExtractionAnnotation>): TextExtractionAnnotation {
    const message = createBaseTextExtractionAnnotation();
    message.textSegment = (object.textSegment !== undefined && object.textSegment !== null)
      ? TextSegment.fromPartial(object.textSegment)
      : undefined;
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseTextExtractionEvaluationMetrics(): TextExtractionEvaluationMetrics {
  return { auPrc: 0, confidenceMetricsEntries: [] };
}

export const TextExtractionEvaluationMetrics: MessageFns<TextExtractionEvaluationMetrics> = {
  encode(message: TextExtractionEvaluationMetrics, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.auPrc !== 0) {
      writer.uint32(13).float(message.auPrc);
    }
    for (const v of message.confidenceMetricsEntries) {
      TextExtractionEvaluationMetrics_ConfidenceMetricsEntry.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextExtractionEvaluationMetrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextExtractionEvaluationMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.auPrc = reader.float();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceMetricsEntries.push(
            TextExtractionEvaluationMetrics_ConfidenceMetricsEntry.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextExtractionEvaluationMetrics {
    return {
      auPrc: isSet(object.auPrc) ? globalThis.Number(object.auPrc) : 0,
      confidenceMetricsEntries: globalThis.Array.isArray(object?.confidenceMetricsEntries)
        ? object.confidenceMetricsEntries.map((e: any) =>
          TextExtractionEvaluationMetrics_ConfidenceMetricsEntry.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: TextExtractionEvaluationMetrics): unknown {
    const obj: any = {};
    if (message.auPrc !== 0) {
      obj.auPrc = message.auPrc;
    }
    if (message.confidenceMetricsEntries?.length) {
      obj.confidenceMetricsEntries = message.confidenceMetricsEntries.map((e) =>
        TextExtractionEvaluationMetrics_ConfidenceMetricsEntry.toJSON(e)
      );
    }
    return obj;
  },

  create(base?: DeepPartial<TextExtractionEvaluationMetrics>): TextExtractionEvaluationMetrics {
    return TextExtractionEvaluationMetrics.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextExtractionEvaluationMetrics>): TextExtractionEvaluationMetrics {
    const message = createBaseTextExtractionEvaluationMetrics();
    message.auPrc = object.auPrc ?? 0;
    message.confidenceMetricsEntries =
      object.confidenceMetricsEntries?.map((e) =>
        TextExtractionEvaluationMetrics_ConfidenceMetricsEntry.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseTextExtractionEvaluationMetrics_ConfidenceMetricsEntry(): TextExtractionEvaluationMetrics_ConfidenceMetricsEntry {
  return { confidenceThreshold: 0, recall: 0, precision: 0, f1Score: 0 };
}

export const TextExtractionEvaluationMetrics_ConfidenceMetricsEntry: MessageFns<
  TextExtractionEvaluationMetrics_ConfidenceMetricsEntry
> = {
  encode(
    message: TextExtractionEvaluationMetrics_ConfidenceMetricsEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.confidenceThreshold !== 0) {
      writer.uint32(13).float(message.confidenceThreshold);
    }
    if (message.recall !== 0) {
      writer.uint32(29).float(message.recall);
    }
    if (message.precision !== 0) {
      writer.uint32(37).float(message.precision);
    }
    if (message.f1Score !== 0) {
      writer.uint32(45).float(message.f1Score);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextExtractionEvaluationMetrics_ConfidenceMetricsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextExtractionEvaluationMetrics_ConfidenceMetricsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.confidenceThreshold = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.recall = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.precision = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.f1Score = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextExtractionEvaluationMetrics_ConfidenceMetricsEntry {
    return {
      confidenceThreshold: isSet(object.confidenceThreshold) ? globalThis.Number(object.confidenceThreshold) : 0,
      recall: isSet(object.recall) ? globalThis.Number(object.recall) : 0,
      precision: isSet(object.precision) ? globalThis.Number(object.precision) : 0,
      f1Score: isSet(object.f1Score) ? globalThis.Number(object.f1Score) : 0,
    };
  },

  toJSON(message: TextExtractionEvaluationMetrics_ConfidenceMetricsEntry): unknown {
    const obj: any = {};
    if (message.confidenceThreshold !== 0) {
      obj.confidenceThreshold = message.confidenceThreshold;
    }
    if (message.recall !== 0) {
      obj.recall = message.recall;
    }
    if (message.precision !== 0) {
      obj.precision = message.precision;
    }
    if (message.f1Score !== 0) {
      obj.f1Score = message.f1Score;
    }
    return obj;
  },

  create(
    base?: DeepPartial<TextExtractionEvaluationMetrics_ConfidenceMetricsEntry>,
  ): TextExtractionEvaluationMetrics_ConfidenceMetricsEntry {
    return TextExtractionEvaluationMetrics_ConfidenceMetricsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<TextExtractionEvaluationMetrics_ConfidenceMetricsEntry>,
  ): TextExtractionEvaluationMetrics_ConfidenceMetricsEntry {
    const message = createBaseTextExtractionEvaluationMetrics_ConfidenceMetricsEntry();
    message.confidenceThreshold = object.confidenceThreshold ?? 0;
    message.recall = object.recall ?? 0;
    message.precision = object.precision ?? 0;
    message.f1Score = object.f1Score ?? 0;
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