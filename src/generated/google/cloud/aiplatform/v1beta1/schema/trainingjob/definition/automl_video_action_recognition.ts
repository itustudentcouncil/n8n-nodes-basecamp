// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/schema/trainingjob/definition/automl_video_action_recognition.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1beta1.schema.trainingjob.definition";

/**
 * A TrainingJob that trains and uploads an AutoML Video Action Recognition
 * Model.
 */
export interface AutoMlVideoActionRecognition {
  /** The input parameters of this TrainingJob. */
  inputs: AutoMlVideoActionRecognitionInputs | undefined;
}

export interface AutoMlVideoActionRecognitionInputs {
  modelType: AutoMlVideoActionRecognitionInputs_ModelType;
}

export enum AutoMlVideoActionRecognitionInputs_ModelType {
  /** MODEL_TYPE_UNSPECIFIED - Should not be set. */
  MODEL_TYPE_UNSPECIFIED = 0,
  /**
   * CLOUD - A model best tailored to be used within Google Cloud, and which c annot
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
  /**
   * MOBILE_CORAL_VERSATILE_1 - A model that, in addition to being available within Google Cloud, can
   * also be exported (see ModelService.ExportModel) as a TensorFlow or
   * TensorFlow Lite model and used on a Coral device afterwards.
   */
  MOBILE_CORAL_VERSATILE_1 = 4,
  UNRECOGNIZED = -1,
}

export function autoMlVideoActionRecognitionInputs_ModelTypeFromJSON(
  object: any,
): AutoMlVideoActionRecognitionInputs_ModelType {
  switch (object) {
    case 0:
    case "MODEL_TYPE_UNSPECIFIED":
      return AutoMlVideoActionRecognitionInputs_ModelType.MODEL_TYPE_UNSPECIFIED;
    case 1:
    case "CLOUD":
      return AutoMlVideoActionRecognitionInputs_ModelType.CLOUD;
    case 2:
    case "MOBILE_VERSATILE_1":
      return AutoMlVideoActionRecognitionInputs_ModelType.MOBILE_VERSATILE_1;
    case 3:
    case "MOBILE_JETSON_VERSATILE_1":
      return AutoMlVideoActionRecognitionInputs_ModelType.MOBILE_JETSON_VERSATILE_1;
    case 4:
    case "MOBILE_CORAL_VERSATILE_1":
      return AutoMlVideoActionRecognitionInputs_ModelType.MOBILE_CORAL_VERSATILE_1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AutoMlVideoActionRecognitionInputs_ModelType.UNRECOGNIZED;
  }
}

export function autoMlVideoActionRecognitionInputs_ModelTypeToJSON(
  object: AutoMlVideoActionRecognitionInputs_ModelType,
): string {
  switch (object) {
    case AutoMlVideoActionRecognitionInputs_ModelType.MODEL_TYPE_UNSPECIFIED:
      return "MODEL_TYPE_UNSPECIFIED";
    case AutoMlVideoActionRecognitionInputs_ModelType.CLOUD:
      return "CLOUD";
    case AutoMlVideoActionRecognitionInputs_ModelType.MOBILE_VERSATILE_1:
      return "MOBILE_VERSATILE_1";
    case AutoMlVideoActionRecognitionInputs_ModelType.MOBILE_JETSON_VERSATILE_1:
      return "MOBILE_JETSON_VERSATILE_1";
    case AutoMlVideoActionRecognitionInputs_ModelType.MOBILE_CORAL_VERSATILE_1:
      return "MOBILE_CORAL_VERSATILE_1";
    case AutoMlVideoActionRecognitionInputs_ModelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAutoMlVideoActionRecognition(): AutoMlVideoActionRecognition {
  return { inputs: undefined };
}

export const AutoMlVideoActionRecognition: MessageFns<AutoMlVideoActionRecognition> = {
  encode(message: AutoMlVideoActionRecognition, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inputs !== undefined) {
      AutoMlVideoActionRecognitionInputs.encode(message.inputs, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlVideoActionRecognition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlVideoActionRecognition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs = AutoMlVideoActionRecognitionInputs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlVideoActionRecognition {
    return { inputs: isSet(object.inputs) ? AutoMlVideoActionRecognitionInputs.fromJSON(object.inputs) : undefined };
  },

  toJSON(message: AutoMlVideoActionRecognition): unknown {
    const obj: any = {};
    if (message.inputs !== undefined) {
      obj.inputs = AutoMlVideoActionRecognitionInputs.toJSON(message.inputs);
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlVideoActionRecognition>): AutoMlVideoActionRecognition {
    return AutoMlVideoActionRecognition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlVideoActionRecognition>): AutoMlVideoActionRecognition {
    const message = createBaseAutoMlVideoActionRecognition();
    message.inputs = (object.inputs !== undefined && object.inputs !== null)
      ? AutoMlVideoActionRecognitionInputs.fromPartial(object.inputs)
      : undefined;
    return message;
  },
};

function createBaseAutoMlVideoActionRecognitionInputs(): AutoMlVideoActionRecognitionInputs {
  return { modelType: 0 };
}

export const AutoMlVideoActionRecognitionInputs: MessageFns<AutoMlVideoActionRecognitionInputs> = {
  encode(message: AutoMlVideoActionRecognitionInputs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.modelType !== 0) {
      writer.uint32(8).int32(message.modelType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlVideoActionRecognitionInputs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlVideoActionRecognitionInputs();
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

  fromJSON(object: any): AutoMlVideoActionRecognitionInputs {
    return {
      modelType: isSet(object.modelType) ? autoMlVideoActionRecognitionInputs_ModelTypeFromJSON(object.modelType) : 0,
    };
  },

  toJSON(message: AutoMlVideoActionRecognitionInputs): unknown {
    const obj: any = {};
    if (message.modelType !== 0) {
      obj.modelType = autoMlVideoActionRecognitionInputs_ModelTypeToJSON(message.modelType);
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlVideoActionRecognitionInputs>): AutoMlVideoActionRecognitionInputs {
    return AutoMlVideoActionRecognitionInputs.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlVideoActionRecognitionInputs>): AutoMlVideoActionRecognitionInputs {
    const message = createBaseAutoMlVideoActionRecognitionInputs();
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
