// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/common/metric_goal.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  ExperimentMetricEnum_ExperimentMetric,
  experimentMetricEnum_ExperimentMetricFromJSON,
  experimentMetricEnum_ExperimentMetricToJSON,
} from "../enums/experiment_metric.js";
import {
  ExperimentMetricDirectionEnum_ExperimentMetricDirection,
  experimentMetricDirectionEnum_ExperimentMetricDirectionFromJSON,
  experimentMetricDirectionEnum_ExperimentMetricDirectionToJSON,
} from "../enums/experiment_metric_direction.js";

export const protobufPackage = "google.ads.googleads.v16.common";

/** A metric goal for an experiment. */
export interface MetricGoal {
  /**
   * The metric of the goal. For example, clicks, impressions, cost,
   * conversions, etc.
   */
  metric: ExperimentMetricEnum_ExperimentMetric;
  /**
   * The metric direction of the goal. For example, increase, decrease, no
   * change.
   */
  direction: ExperimentMetricDirectionEnum_ExperimentMetricDirection;
}

function createBaseMetricGoal(): MetricGoal {
  return { metric: 0, direction: 0 };
}

export const MetricGoal: MessageFns<MetricGoal> = {
  encode(message: MetricGoal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.metric !== 0) {
      writer.uint32(8).int32(message.metric);
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetricGoal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricGoal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.metric = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetricGoal {
    return {
      metric: isSet(object.metric) ? experimentMetricEnum_ExperimentMetricFromJSON(object.metric) : 0,
      direction: isSet(object.direction)
        ? experimentMetricDirectionEnum_ExperimentMetricDirectionFromJSON(object.direction)
        : 0,
    };
  },

  toJSON(message: MetricGoal): unknown {
    const obj: any = {};
    if (message.metric !== 0) {
      obj.metric = experimentMetricEnum_ExperimentMetricToJSON(message.metric);
    }
    if (message.direction !== 0) {
      obj.direction = experimentMetricDirectionEnum_ExperimentMetricDirectionToJSON(message.direction);
    }
    return obj;
  },

  create(base?: DeepPartial<MetricGoal>): MetricGoal {
    return MetricGoal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MetricGoal>): MetricGoal {
    const message = createBaseMetricGoal();
    message.metric = object.metric ?? 0;
    message.direction = object.direction ?? 0;
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