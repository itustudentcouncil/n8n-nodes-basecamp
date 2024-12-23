// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1/schema/predict/params/video_action_recognition.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1.schema.predict.params";

/** Prediction model parameters for Video Action Recognition. */
export interface VideoActionRecognitionPredictionParams {
  /**
   * The Model only returns predictions with at least this confidence score.
   * Default value is 0.0
   */
  confidenceThreshold: number;
  /**
   * The model only returns up to that many top, by confidence score,
   * predictions per frame of the video. If this number is very high, the
   * Model may return fewer predictions per frame. Default value is 50.
   */
  maxPredictions: number;
}

function createBaseVideoActionRecognitionPredictionParams(): VideoActionRecognitionPredictionParams {
  return { confidenceThreshold: 0, maxPredictions: 0 };
}

export const VideoActionRecognitionPredictionParams: MessageFns<VideoActionRecognitionPredictionParams> = {
  encode(message: VideoActionRecognitionPredictionParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.confidenceThreshold !== 0) {
      writer.uint32(13).float(message.confidenceThreshold);
    }
    if (message.maxPredictions !== 0) {
      writer.uint32(16).int32(message.maxPredictions);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VideoActionRecognitionPredictionParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoActionRecognitionPredictionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.confidenceThreshold = reader.float();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxPredictions = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VideoActionRecognitionPredictionParams {
    return {
      confidenceThreshold: isSet(object.confidenceThreshold) ? globalThis.Number(object.confidenceThreshold) : 0,
      maxPredictions: isSet(object.maxPredictions) ? globalThis.Number(object.maxPredictions) : 0,
    };
  },

  toJSON(message: VideoActionRecognitionPredictionParams): unknown {
    const obj: any = {};
    if (message.confidenceThreshold !== 0) {
      obj.confidenceThreshold = message.confidenceThreshold;
    }
    if (message.maxPredictions !== 0) {
      obj.maxPredictions = Math.round(message.maxPredictions);
    }
    return obj;
  },

  create(base?: DeepPartial<VideoActionRecognitionPredictionParams>): VideoActionRecognitionPredictionParams {
    return VideoActionRecognitionPredictionParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VideoActionRecognitionPredictionParams>): VideoActionRecognitionPredictionParams {
    const message = createBaseVideoActionRecognitionPredictionParams();
    message.confidenceThreshold = object.confidenceThreshold ?? 0;
    message.maxPredictions = object.maxPredictions ?? 0;
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
