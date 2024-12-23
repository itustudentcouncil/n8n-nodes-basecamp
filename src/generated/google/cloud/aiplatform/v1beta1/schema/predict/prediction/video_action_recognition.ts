// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/schema/predict/prediction/video_action_recognition.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../../../../protobuf/duration.js";
import { FloatValue } from "../../../../../../protobuf/wrappers.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1.schema.predict.prediction";

/** Prediction output format for Video Action Recognition. */
export interface VideoActionRecognitionPredictionResult {
  /** The resource ID of the AnnotationSpec that had been identified. */
  id: string;
  /** The display name of the AnnotationSpec that had been identified. */
  displayName: string;
  /**
   * The beginning, inclusive, of the video's time segment in which the
   * AnnotationSpec has been identified. Expressed as a number of seconds as
   * measured from the start of the video, with fractions up to a microsecond
   * precision, and with "s" appended at the end.
   */
  timeSegmentStart:
    | Duration
    | undefined;
  /**
   * The end, exclusive, of the video's time segment in which the
   * AnnotationSpec has been identified. Expressed as a number of seconds as
   * measured from the start of the video, with fractions up to a microsecond
   * precision, and with "s" appended at the end.
   */
  timeSegmentEnd:
    | Duration
    | undefined;
  /**
   * The Model's confidence in correction of this prediction, higher
   * value means higher confidence.
   */
  confidence: number | undefined;
}

function createBaseVideoActionRecognitionPredictionResult(): VideoActionRecognitionPredictionResult {
  return { id: "", displayName: "", timeSegmentStart: undefined, timeSegmentEnd: undefined, confidence: undefined };
}

export const VideoActionRecognitionPredictionResult: MessageFns<VideoActionRecognitionPredictionResult> = {
  encode(message: VideoActionRecognitionPredictionResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.timeSegmentStart !== undefined) {
      Duration.encode(message.timeSegmentStart, writer.uint32(34).fork()).join();
    }
    if (message.timeSegmentEnd !== undefined) {
      Duration.encode(message.timeSegmentEnd, writer.uint32(42).fork()).join();
    }
    if (message.confidence !== undefined) {
      FloatValue.encode({ value: message.confidence! }, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VideoActionRecognitionPredictionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoActionRecognitionPredictionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timeSegmentStart = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.timeSegmentEnd = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.confidence = FloatValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VideoActionRecognitionPredictionResult {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      timeSegmentStart: isSet(object.timeSegmentStart) ? Duration.fromJSON(object.timeSegmentStart) : undefined,
      timeSegmentEnd: isSet(object.timeSegmentEnd) ? Duration.fromJSON(object.timeSegmentEnd) : undefined,
      confidence: isSet(object.confidence) ? Number(object.confidence) : undefined,
    };
  },

  toJSON(message: VideoActionRecognitionPredictionResult): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.timeSegmentStart !== undefined) {
      obj.timeSegmentStart = Duration.toJSON(message.timeSegmentStart);
    }
    if (message.timeSegmentEnd !== undefined) {
      obj.timeSegmentEnd = Duration.toJSON(message.timeSegmentEnd);
    }
    if (message.confidence !== undefined) {
      obj.confidence = message.confidence;
    }
    return obj;
  },

  create(base?: DeepPartial<VideoActionRecognitionPredictionResult>): VideoActionRecognitionPredictionResult {
    return VideoActionRecognitionPredictionResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VideoActionRecognitionPredictionResult>): VideoActionRecognitionPredictionResult {
    const message = createBaseVideoActionRecognitionPredictionResult();
    message.id = object.id ?? "";
    message.displayName = object.displayName ?? "";
    message.timeSegmentStart = (object.timeSegmentStart !== undefined && object.timeSegmentStart !== null)
      ? Duration.fromPartial(object.timeSegmentStart)
      : undefined;
    message.timeSegmentEnd = (object.timeSegmentEnd !== undefined && object.timeSegmentEnd !== null)
      ? Duration.fromPartial(object.timeSegmentEnd)
      : undefined;
    message.confidence = object.confidence ?? undefined;
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
