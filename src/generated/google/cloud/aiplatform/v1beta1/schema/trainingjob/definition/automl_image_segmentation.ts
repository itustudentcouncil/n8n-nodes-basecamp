// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/schema/trainingjob/definition/automl_image_segmentation.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1beta1.schema.trainingjob.definition";

/** A TrainingJob that trains and uploads an AutoML Image Segmentation Model. */
export interface AutoMlImageSegmentation {
  /** The input parameters of this TrainingJob. */
  inputs:
    | AutoMlImageSegmentationInputs
    | undefined;
  /** The metadata information. */
  metadata: AutoMlImageSegmentationMetadata | undefined;
}

export interface AutoMlImageSegmentationInputs {
  modelType: AutoMlImageSegmentationInputs_ModelType;
  /**
   * The training budget of creating this model, expressed in milli node
   * hours i.e. 1,000 value in this field means 1 node hour. The actual
   * metadata.costMilliNodeHours will be equal or less than this value.
   * If further model training ceases to provide any improvements, it will
   * stop without using the full budget and the metadata.successfulStopReason
   * will be `model-converged`.
   * Note, node_hour  = actual_hour * number_of_nodes_involved. Or
   * actaul_wall_clock_hours = train_budget_milli_node_hours /
   *                           (number_of_nodes_involved * 1000)
   * For modelType `cloud-high-accuracy-1`(default), the budget must be between
   * 20,000 and 2,000,000 milli node hours, inclusive. The default value is
   * 192,000 which represents one day in wall time
   * (1000 milli * 24 hours * 8 nodes).
   */
  budgetMilliNodeHours: Long;
  /**
   * The ID of the `base` model. If it is specified, the new model will be
   * trained based on the `base` model. Otherwise, the new model will be
   * trained from scratch. The `base` model must be in the same
   * Project and Location as the new Model to train, and have the same
   * modelType.
   */
  baseModelId: string;
}

export enum AutoMlImageSegmentationInputs_ModelType {
  /** MODEL_TYPE_UNSPECIFIED - Should not be set. */
  MODEL_TYPE_UNSPECIFIED = 0,
  /**
   * CLOUD_HIGH_ACCURACY_1 - A model to be used via prediction calls to uCAIP API. Expected
   * to have a higher latency, but should also have a higher prediction
   * quality than other models.
   */
  CLOUD_HIGH_ACCURACY_1 = 1,
  /**
   * CLOUD_LOW_ACCURACY_1 - A model to be used via prediction calls to uCAIP API. Expected
   * to have a lower latency but relatively lower prediction quality.
   */
  CLOUD_LOW_ACCURACY_1 = 2,
  /**
   * MOBILE_TF_LOW_LATENCY_1 - A model that, in addition to being available within Google
   * Cloud, can also be exported (see ModelService.ExportModel) as TensorFlow
   * model and used on a mobile or edge device afterwards.
   * Expected to have low latency, but may have lower prediction
   * quality than other mobile models.
   */
  MOBILE_TF_LOW_LATENCY_1 = 3,
  UNRECOGNIZED = -1,
}

export function autoMlImageSegmentationInputs_ModelTypeFromJSON(object: any): AutoMlImageSegmentationInputs_ModelType {
  switch (object) {
    case 0:
    case "MODEL_TYPE_UNSPECIFIED":
      return AutoMlImageSegmentationInputs_ModelType.MODEL_TYPE_UNSPECIFIED;
    case 1:
    case "CLOUD_HIGH_ACCURACY_1":
      return AutoMlImageSegmentationInputs_ModelType.CLOUD_HIGH_ACCURACY_1;
    case 2:
    case "CLOUD_LOW_ACCURACY_1":
      return AutoMlImageSegmentationInputs_ModelType.CLOUD_LOW_ACCURACY_1;
    case 3:
    case "MOBILE_TF_LOW_LATENCY_1":
      return AutoMlImageSegmentationInputs_ModelType.MOBILE_TF_LOW_LATENCY_1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AutoMlImageSegmentationInputs_ModelType.UNRECOGNIZED;
  }
}

export function autoMlImageSegmentationInputs_ModelTypeToJSON(object: AutoMlImageSegmentationInputs_ModelType): string {
  switch (object) {
    case AutoMlImageSegmentationInputs_ModelType.MODEL_TYPE_UNSPECIFIED:
      return "MODEL_TYPE_UNSPECIFIED";
    case AutoMlImageSegmentationInputs_ModelType.CLOUD_HIGH_ACCURACY_1:
      return "CLOUD_HIGH_ACCURACY_1";
    case AutoMlImageSegmentationInputs_ModelType.CLOUD_LOW_ACCURACY_1:
      return "CLOUD_LOW_ACCURACY_1";
    case AutoMlImageSegmentationInputs_ModelType.MOBILE_TF_LOW_LATENCY_1:
      return "MOBILE_TF_LOW_LATENCY_1";
    case AutoMlImageSegmentationInputs_ModelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AutoMlImageSegmentationMetadata {
  /**
   * The actual training cost of creating this model, expressed in
   * milli node hours, i.e. 1,000 value in this field means 1 node hour.
   * Guaranteed to not exceed inputs.budgetMilliNodeHours.
   */
  costMilliNodeHours: Long;
  /**
   * For successful job completions, this is the reason why the job has
   * finished.
   */
  successfulStopReason: AutoMlImageSegmentationMetadata_SuccessfulStopReason;
}

export enum AutoMlImageSegmentationMetadata_SuccessfulStopReason {
  /** SUCCESSFUL_STOP_REASON_UNSPECIFIED - Should not be set. */
  SUCCESSFUL_STOP_REASON_UNSPECIFIED = 0,
  /** BUDGET_REACHED - The inputs.budgetMilliNodeHours had been reached. */
  BUDGET_REACHED = 1,
  /**
   * MODEL_CONVERGED - Further training of the Model ceased to increase its quality, since it
   * already has converged.
   */
  MODEL_CONVERGED = 2,
  UNRECOGNIZED = -1,
}

export function autoMlImageSegmentationMetadata_SuccessfulStopReasonFromJSON(
  object: any,
): AutoMlImageSegmentationMetadata_SuccessfulStopReason {
  switch (object) {
    case 0:
    case "SUCCESSFUL_STOP_REASON_UNSPECIFIED":
      return AutoMlImageSegmentationMetadata_SuccessfulStopReason.SUCCESSFUL_STOP_REASON_UNSPECIFIED;
    case 1:
    case "BUDGET_REACHED":
      return AutoMlImageSegmentationMetadata_SuccessfulStopReason.BUDGET_REACHED;
    case 2:
    case "MODEL_CONVERGED":
      return AutoMlImageSegmentationMetadata_SuccessfulStopReason.MODEL_CONVERGED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AutoMlImageSegmentationMetadata_SuccessfulStopReason.UNRECOGNIZED;
  }
}

export function autoMlImageSegmentationMetadata_SuccessfulStopReasonToJSON(
  object: AutoMlImageSegmentationMetadata_SuccessfulStopReason,
): string {
  switch (object) {
    case AutoMlImageSegmentationMetadata_SuccessfulStopReason.SUCCESSFUL_STOP_REASON_UNSPECIFIED:
      return "SUCCESSFUL_STOP_REASON_UNSPECIFIED";
    case AutoMlImageSegmentationMetadata_SuccessfulStopReason.BUDGET_REACHED:
      return "BUDGET_REACHED";
    case AutoMlImageSegmentationMetadata_SuccessfulStopReason.MODEL_CONVERGED:
      return "MODEL_CONVERGED";
    case AutoMlImageSegmentationMetadata_SuccessfulStopReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAutoMlImageSegmentation(): AutoMlImageSegmentation {
  return { inputs: undefined, metadata: undefined };
}

export const AutoMlImageSegmentation: MessageFns<AutoMlImageSegmentation> = {
  encode(message: AutoMlImageSegmentation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inputs !== undefined) {
      AutoMlImageSegmentationInputs.encode(message.inputs, writer.uint32(10).fork()).join();
    }
    if (message.metadata !== undefined) {
      AutoMlImageSegmentationMetadata.encode(message.metadata, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlImageSegmentation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlImageSegmentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs = AutoMlImageSegmentationInputs.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = AutoMlImageSegmentationMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlImageSegmentation {
    return {
      inputs: isSet(object.inputs) ? AutoMlImageSegmentationInputs.fromJSON(object.inputs) : undefined,
      metadata: isSet(object.metadata) ? AutoMlImageSegmentationMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: AutoMlImageSegmentation): unknown {
    const obj: any = {};
    if (message.inputs !== undefined) {
      obj.inputs = AutoMlImageSegmentationInputs.toJSON(message.inputs);
    }
    if (message.metadata !== undefined) {
      obj.metadata = AutoMlImageSegmentationMetadata.toJSON(message.metadata);
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlImageSegmentation>): AutoMlImageSegmentation {
    return AutoMlImageSegmentation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlImageSegmentation>): AutoMlImageSegmentation {
    const message = createBaseAutoMlImageSegmentation();
    message.inputs = (object.inputs !== undefined && object.inputs !== null)
      ? AutoMlImageSegmentationInputs.fromPartial(object.inputs)
      : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? AutoMlImageSegmentationMetadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseAutoMlImageSegmentationInputs(): AutoMlImageSegmentationInputs {
  return { modelType: 0, budgetMilliNodeHours: Long.ZERO, baseModelId: "" };
}

export const AutoMlImageSegmentationInputs: MessageFns<AutoMlImageSegmentationInputs> = {
  encode(message: AutoMlImageSegmentationInputs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.modelType !== 0) {
      writer.uint32(8).int32(message.modelType);
    }
    if (!message.budgetMilliNodeHours.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.budgetMilliNodeHours.toString());
    }
    if (message.baseModelId !== "") {
      writer.uint32(26).string(message.baseModelId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlImageSegmentationInputs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlImageSegmentationInputs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.modelType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.budgetMilliNodeHours = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.baseModelId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlImageSegmentationInputs {
    return {
      modelType: isSet(object.modelType) ? autoMlImageSegmentationInputs_ModelTypeFromJSON(object.modelType) : 0,
      budgetMilliNodeHours: isSet(object.budgetMilliNodeHours)
        ? Long.fromValue(object.budgetMilliNodeHours)
        : Long.ZERO,
      baseModelId: isSet(object.baseModelId) ? globalThis.String(object.baseModelId) : "",
    };
  },

  toJSON(message: AutoMlImageSegmentationInputs): unknown {
    const obj: any = {};
    if (message.modelType !== 0) {
      obj.modelType = autoMlImageSegmentationInputs_ModelTypeToJSON(message.modelType);
    }
    if (!message.budgetMilliNodeHours.equals(Long.ZERO)) {
      obj.budgetMilliNodeHours = (message.budgetMilliNodeHours || Long.ZERO).toString();
    }
    if (message.baseModelId !== "") {
      obj.baseModelId = message.baseModelId;
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlImageSegmentationInputs>): AutoMlImageSegmentationInputs {
    return AutoMlImageSegmentationInputs.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlImageSegmentationInputs>): AutoMlImageSegmentationInputs {
    const message = createBaseAutoMlImageSegmentationInputs();
    message.modelType = object.modelType ?? 0;
    message.budgetMilliNodeHours = (object.budgetMilliNodeHours !== undefined && object.budgetMilliNodeHours !== null)
      ? Long.fromValue(object.budgetMilliNodeHours)
      : Long.ZERO;
    message.baseModelId = object.baseModelId ?? "";
    return message;
  },
};

function createBaseAutoMlImageSegmentationMetadata(): AutoMlImageSegmentationMetadata {
  return { costMilliNodeHours: Long.ZERO, successfulStopReason: 0 };
}

export const AutoMlImageSegmentationMetadata: MessageFns<AutoMlImageSegmentationMetadata> = {
  encode(message: AutoMlImageSegmentationMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.costMilliNodeHours.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.costMilliNodeHours.toString());
    }
    if (message.successfulStopReason !== 0) {
      writer.uint32(16).int32(message.successfulStopReason);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlImageSegmentationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlImageSegmentationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.costMilliNodeHours = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.successfulStopReason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlImageSegmentationMetadata {
    return {
      costMilliNodeHours: isSet(object.costMilliNodeHours) ? Long.fromValue(object.costMilliNodeHours) : Long.ZERO,
      successfulStopReason: isSet(object.successfulStopReason)
        ? autoMlImageSegmentationMetadata_SuccessfulStopReasonFromJSON(object.successfulStopReason)
        : 0,
    };
  },

  toJSON(message: AutoMlImageSegmentationMetadata): unknown {
    const obj: any = {};
    if (!message.costMilliNodeHours.equals(Long.ZERO)) {
      obj.costMilliNodeHours = (message.costMilliNodeHours || Long.ZERO).toString();
    }
    if (message.successfulStopReason !== 0) {
      obj.successfulStopReason = autoMlImageSegmentationMetadata_SuccessfulStopReasonToJSON(
        message.successfulStopReason,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlImageSegmentationMetadata>): AutoMlImageSegmentationMetadata {
    return AutoMlImageSegmentationMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlImageSegmentationMetadata>): AutoMlImageSegmentationMetadata {
    const message = createBaseAutoMlImageSegmentationMetadata();
    message.costMilliNodeHours = (object.costMilliNodeHours !== undefined && object.costMilliNodeHours !== null)
      ? Long.fromValue(object.costMilliNodeHours)
      : Long.ZERO;
    message.successfulStopReason = object.successfulStopReason ?? 0;
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
