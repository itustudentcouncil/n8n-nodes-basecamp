// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/schema/trainingjob/definition/automl_video_classification.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1beta1.schema.trainingjob.definition";

/** A TrainingJob that trains and uploads an AutoML Video Classification Model. */
export interface AutoMlVideoClassification {
  /** The input parameters of this TrainingJob. */
  inputs: AutoMlVideoClassificationInputs | undefined;
}

export interface AutoMlVideoClassificationInputs {
  modelType: AutoMlVideoClassificationInputs_ModelType;
}

export enum AutoMlVideoClassificationInputs_ModelType {
  /** MODEL_TYPE_UNSPECIFIED - Should not be set. */
  MODEL_TYPE_UNSPECIFIED = 0,
  /**
   * CLOUD - A model best tailored to be used within Google Cloud, and which cannot
   * be exported. Default.
   */
  CLOUD = 1,
  /**
   * MOBILE_VERSATILE_1 - A model that, in addition to being available within Google Cloud, can
   * also be exported (see ModelService.ExportModel) as a TensorFlow or
   * TensorFlow Lite model and used on a mobile or edge device afterwards.
   */
  MOBILE_VERSATILE_1 = 2,
  /**
   * MOBILE_JETSON_VERSATILE_1 - A model that, in addition to being available within Google Cloud, can
   * also be exported (see ModelService.ExportModel) to a Jetson device
   * afterwards.
   */
  MOBILE_JETSON_VERSATILE_1 = 3,
  UNRECOGNIZED = -1,
}

export function autoMlVideoClassificationInputs_ModelTypeFromJSON(
  object: any,
): AutoMlVideoClassificationInputs_ModelType {
  switch (object) {
    case 0:
    case "MODEL_TYPE_UNSPECIFIED":
      return AutoMlVideoClassificationInputs_ModelType.MODEL_TYPE_UNSPECIFIED;
    case 1:
    case "CLOUD":
      return AutoMlVideoClassificationInputs_ModelType.CLOUD;
    case 2:
    case "MOBILE_VERSATILE_1":
      return AutoMlVideoClassificationInputs_ModelType.MOBILE_VERSATILE_1;
    case 3:
    case "MOBILE_JETSON_VERSATILE_1":
      return AutoMlVideoClassificationInputs_ModelType.MOBILE_JETSON_VERSATILE_1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AutoMlVideoClassificationInputs_ModelType.UNRECOGNIZED;
  }
}

export function autoMlVideoClassificationInputs_ModelTypeToJSON(
  object: AutoMlVideoClassificationInputs_ModelType,
): string {
  switch (object) {
    case AutoMlVideoClassificationInputs_ModelType.MODEL_TYPE_UNSPECIFIED:
      return "MODEL_TYPE_UNSPECIFIED";
    case AutoMlVideoClassificationInputs_ModelType.CLOUD:
      return "CLOUD";
    case AutoMlVideoClassificationInputs_ModelType.MOBILE_VERSATILE_1:
      return "MOBILE_VERSATILE_1";
    case AutoMlVideoClassificationInputs_ModelType.MOBILE_JETSON_VERSATILE_1:
      return "MOBILE_JETSON_VERSATILE_1";
    case AutoMlVideoClassificationInputs_ModelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAutoMlVideoClassification(): AutoMlVideoClassification {
  return { inputs: undefined };
}

export const AutoMlVideoClassification: MessageFns<AutoMlVideoClassification> = {
  encode(message: AutoMlVideoClassification, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inputs !== undefined) {
      AutoMlVideoClassificationInputs.encode(message.inputs, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlVideoClassification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlVideoClassification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs = AutoMlVideoClassificationInputs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlVideoClassification {
    return { inputs: isSet(object.inputs) ? AutoMlVideoClassificationInputs.fromJSON(object.inputs) : undefined };
  },

  toJSON(message: AutoMlVideoClassification): unknown {
    const obj: any = {};
    if (message.inputs !== undefined) {
      obj.inputs = AutoMlVideoClassificationInputs.toJSON(message.inputs);
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlVideoClassification>): AutoMlVideoClassification {
    return AutoMlVideoClassification.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlVideoClassification>): AutoMlVideoClassification {
    const message = createBaseAutoMlVideoClassification();
    message.inputs = (object.inputs !== undefined && object.inputs !== null)
      ? AutoMlVideoClassificationInputs.fromPartial(object.inputs)
      : undefined;
    return message;
  },
};

function createBaseAutoMlVideoClassificationInputs(): AutoMlVideoClassificationInputs {
  return { modelType: 0 };
}

export const AutoMlVideoClassificationInputs: MessageFns<AutoMlVideoClassificationInputs> = {
  encode(message: AutoMlVideoClassificationInputs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.modelType !== 0) {
      writer.uint32(8).int32(message.modelType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlVideoClassificationInputs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlVideoClassificationInputs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.modelType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlVideoClassificationInputs {
    return {
      modelType: isSet(object.modelType) ? autoMlVideoClassificationInputs_ModelTypeFromJSON(object.modelType) : 0,
    };
  },

  toJSON(message: AutoMlVideoClassificationInputs): unknown {
    const obj: any = {};
    if (message.modelType !== 0) {
      obj.modelType = autoMlVideoClassificationInputs_ModelTypeToJSON(message.modelType);
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlVideoClassificationInputs>): AutoMlVideoClassificationInputs {
    return AutoMlVideoClassificationInputs.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlVideoClassificationInputs>): AutoMlVideoClassificationInputs {
    const message = createBaseAutoMlVideoClassificationInputs();
    message.modelType = object.modelType ?? 0;
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