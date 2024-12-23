// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/schema/predict/prediction/time_series_forecasting.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1beta1.schema.predict.prediction";

/** Prediction output format for Time Series Forecasting. */
export interface TimeSeriesForecastingPredictionResult {
  /** The regression value. */
  value: number;
}

function createBaseTimeSeriesForecastingPredictionResult(): TimeSeriesForecastingPredictionResult {
  return { value: 0 };
}

export const TimeSeriesForecastingPredictionResult: MessageFns<TimeSeriesForecastingPredictionResult> = {
  encode(message: TimeSeriesForecastingPredictionResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesForecastingPredictionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesForecastingPredictionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.value = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesForecastingPredictionResult {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: TimeSeriesForecastingPredictionResult): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesForecastingPredictionResult>): TimeSeriesForecastingPredictionResult {
    return TimeSeriesForecastingPredictionResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesForecastingPredictionResult>): TimeSeriesForecastingPredictionResult {
    const message = createBaseTimeSeriesForecastingPredictionResult();
    message.value = object.value ?? 0;
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
