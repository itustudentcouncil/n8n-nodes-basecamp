// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1/schema/trainingjob/definition/automl_image_classification.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1.schema.trainingjob.definition";

/** A TrainingJob that trains and uploads an AutoML Image Classification Model. */
export interface AutoMlImageClassification {
  /** The input parameters of this TrainingJob. */
  inputs:
    | AutoMlImageClassificationInputs
    | undefined;
  /** The metadata information. */
  metadata: AutoMlImageClassificationMetadata | undefined;
}

export interface AutoMlImageClassificationInputs {
  modelType: AutoMlImageClassificationInputs_ModelType;
  /**
   * The ID of the `base` model. If it is specified, the new model will be
   * trained based on the `base` model. Otherwise, the new model will be
   * trained from scratch. The `base` model must be in the same
   * Project and Location as the new Model to train, and have the same
   * modelType.
   */
  baseModelId: string;
  /**
   * The training budget of creating this model, expressed in milli node
   * hours i.e. 1,000 value in this field means 1 node hour. The actual
   * metadata.costMilliNodeHours will be equal or less than this value.
   * If further model training ceases to provide any improvements, it will
   * stop without using the full budget and the metadata.successfulStopReason
   * will be `model-converged`.
   * Note, node_hour  = actual_hour * number_of_nodes_involved.
   * For modelType `cloud`(default), the budget must be between 8,000
   * and 800,000 milli node hours, inclusive. The default value is 192,000
   * which represents one day in wall time, considering 8 nodes are used.
   * For model types `mobile-tf-low-latency-1`, `mobile-tf-versatile-1`,
   * `mobile-tf-high-accuracy-1`, the training budget must be between
   * 1,000 and 100,000 milli node hours, inclusive.
   * The default value is 24,000 which represents one day in wall time on a
   * single node that is used.
   */
  budgetMilliNodeHours: Long;
  /**
   * Use the entire training budget. This disables the early stopping feature.
   * When false the early stopping feature is enabled, which means that
   * AutoML Image Classification might stop training before the entire
   * training budget has been used.
   */
  disableEarlyStopping: boolean;
  /**
   * If false, a single-label (multi-class) Model will be trained (i.e.
   * assuming that for each image just up to one annotation may be
   * applicable). If true, a multi-label Model will be trained (i.e.
   * assuming that for each image multiple annotations may be applicable).
   */
  multiLabel: boolean;
}

export enum AutoMlImageClassificationInputs_ModelType {
  /** MODEL_TYPE_UNSPECIFIED - Should not be set. */
  MODEL_TYPE_UNSPECIFIED = 0,
  /**
   * CLOUD - A Model best tailored to be used within Google Cloud, and which cannot
   * be exported.
   * Default.
   */
  CLOUD = 1,
  /**
   * MOBILE_TF_LOW_LATENCY_1 - A model that, in addition to being available within Google
   * Cloud, can also be exported (see ModelService.ExportModel) as TensorFlow
   * or Core ML model and used on a mobile or edge device afterwards.
   * Expected to have low latency, but may have lower prediction
   * quality than other mobile models.
   */
  MOBILE_TF_LOW_LATENCY_1 = 2,
  /**
   * MOBILE_TF_VERSATILE_1 - A model that, in addition to being available within Google
   * Cloud, can also be exported (see ModelService.ExportModel) as TensorFlow
   * or Core ML model and used on a mobile or edge device with afterwards.
   */
  MOBILE_TF_VERSATILE_1 = 3,
  /**
   * MOBILE_TF_HIGH_ACCURACY_1 - A model that, in addition to being available within Google
   * Cloud, can also be exported (see ModelService.ExportModel) as TensorFlow
   * or Core ML model and used on a mobile or edge device afterwards.
   * Expected to have a higher latency, but should also have a higher
   * prediction quality than other mobile models.
   */
  MOBILE_TF_HIGH_ACCURACY_1 = 4,
  UNRECOGNIZED = -1,
}

export function autoMlImageClassificationInputs_ModelTypeFromJSON(
  object: any,
): AutoMlImageClassificationInputs_ModelType {
  switch (object) {
    case 0:
    case "MODEL_TYPE_UNSPECIFIED":
      return AutoMlImageClassificationInputs_ModelType.MODEL_TYPE_UNSPECIFIED;
    case 1:
    case "CLOUD":
      return AutoMlImageClassificationInputs_ModelType.CLOUD;
    case 2:
    case "MOBILE_TF_LOW_LATENCY_1":
      return AutoMlImageClassificationInputs_ModelType.MOBILE_TF_LOW_LATENCY_1;
    case 3:
    case "MOBILE_TF_VERSATILE_1":
      return AutoMlImageClassificationInputs_ModelType.MOBILE_TF_VERSATILE_1;
    case 4:
    case "MOBILE_TF_HIGH_ACCURACY_1":
      return AutoMlImageClassificationInputs_ModelType.MOBILE_TF_HIGH_ACCURACY_1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AutoMlImageClassificationInputs_ModelType.UNRECOGNIZED;
  }
}

export function autoMlImageClassificationInputs_ModelTypeToJSON(
  object: AutoMlImageClassificationInputs_ModelType,
): string {
  switch (object) {
    case AutoMlImageClassificationInputs_ModelType.MODEL_TYPE_UNSPECIFIED:
      return "MODEL_TYPE_UNSPECIFIED";
    case AutoMlImageClassificationInputs_ModelType.CLOUD:
      return "CLOUD";
    case AutoMlImageClassificationInputs_ModelType.MOBILE_TF_LOW_LATENCY_1:
      return "MOBILE_TF_LOW_LATENCY_1";
    case AutoMlImageClassificationInputs_ModelType.MOBILE_TF_VERSATILE_1:
      return "MOBILE_TF_VERSATILE_1";
    case AutoMlImageClassificationInputs_ModelType.MOBILE_TF_HIGH_ACCURACY_1:
      return "MOBILE_TF_HIGH_ACCURACY_1";
    case AutoMlImageClassificationInputs_ModelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AutoMlImageClassificationMetadata {
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
  successfulStopReason: AutoMlImageClassificationMetadata_SuccessfulStopReason;
}

export enum AutoMlImageClassificationMetadata_SuccessfulStopReason {
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

export function autoMlImageClassificationMetadata_SuccessfulStopReasonFromJSON(
  object: any,
): AutoMlImageClassificationMetadata_SuccessfulStopReason {
  switch (object) {
    case 0:
    case "SUCCESSFUL_STOP_REASON_UNSPECIFIED":
      return AutoMlImageClassificationMetadata_SuccessfulStopReason.SUCCESSFUL_STOP_REASON_UNSPECIFIED;
    case 1:
    case "BUDGET_REACHED":
      return AutoMlImageClassificationMetadata_SuccessfulStopReason.BUDGET_REACHED;
    case 2:
    case "MODEL_CONVERGED":
      return AutoMlImageClassificationMetadata_SuccessfulStopReason.MODEL_CONVERGED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AutoMlImageClassificationMetadata_SuccessfulStopReason.UNRECOGNIZED;
  }
}

export function autoMlImageClassificationMetadata_SuccessfulStopReasonToJSON(
  object: AutoMlImageClassificationMetadata_SuccessfulStopReason,
): string {
  switch (object) {
    case AutoMlImageClassificationMetadata_SuccessfulStopReason.SUCCESSFUL_STOP_REASON_UNSPECIFIED:
      return "SUCCESSFUL_STOP_REASON_UNSPECIFIED";
    case AutoMlImageClassificationMetadata_SuccessfulStopReason.BUDGET_REACHED:
      return "BUDGET_REACHED";
    case AutoMlImageClassificationMetadata_SuccessfulStopReason.MODEL_CONVERGED:
      return "MODEL_CONVERGED";
    case AutoMlImageClassificationMetadata_SuccessfulStopReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAutoMlImageClassification(): AutoMlImageClassification {
  return { inputs: undefined, metadata: undefined };
}

export const AutoMlImageClassification: MessageFns<AutoMlImageClassification> = {
  encode(message: AutoMlImageClassification, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inputs !== undefined) {
      AutoMlImageClassificationInputs.encode(message.inputs, writer.uint32(10).fork()).join();
    }
    if (message.metadata !== undefined) {
      AutoMlImageClassificationMetadata.encode(message.metadata, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlImageClassification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlImageClassification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs = AutoMlImageClassificationInputs.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = AutoMlImageClassificationMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlImageClassification {
    return {
      inputs: isSet(object.inputs) ? AutoMlImageClassificationInputs.fromJSON(object.inputs) : undefined,
      metadata: isSet(object.metadata) ? AutoMlImageClassificationMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: AutoMlImageClassification): unknown {
    const obj: any = {};
    if (message.inputs !== undefined) {
      obj.inputs = AutoMlImageClassificationInputs.toJSON(message.inputs);
    }
    if (message.metadata !== undefined) {
      obj.metadata = AutoMlImageClassificationMetadata.toJSON(message.metadata);
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlImageClassification>): AutoMlImageClassification {
    return AutoMlImageClassification.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlImageClassification>): AutoMlImageClassification {
    const message = createBaseAutoMlImageClassification();
    message.inputs = (object.inputs !== undefined && object.inputs !== null)
      ? AutoMlImageClassificationInputs.fromPartial(object.inputs)
      : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? AutoMlImageClassificationMetadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseAutoMlImageClassificationInputs(): AutoMlImageClassificationInputs {
  return {
    modelType: 0,
    baseModelId: "",
    budgetMilliNodeHours: Long.ZERO,
    disableEarlyStopping: false,
    multiLabel: false,
  };
}

export const AutoMlImageClassificationInputs: MessageFns<AutoMlImageClassificationInputs> = {
  encode(message: AutoMlImageClassificationInputs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.modelType !== 0) {
      writer.uint32(8).int32(message.modelType);
    }
    if (message.baseModelId !== "") {
      writer.uint32(18).string(message.baseModelId);
    }
    if (!message.budgetMilliNodeHours.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.budgetMilliNodeHours.toString());
    }
    if (message.disableEarlyStopping !== false) {
      writer.uint32(32).bool(message.disableEarlyStopping);
    }
    if (message.multiLabel !== false) {
      writer.uint32(40).bool(message.multiLabel);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlImageClassificationInputs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlImageClassificationInputs();
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
          if (tag !== 18) {
            break;
          }

          message.baseModelId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.budgetMilliNodeHours = Long.fromString(reader.int64().toString());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.disableEarlyStopping = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.multiLabel = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoMlImageClassificationInputs {
    return {
      modelType: isSet(object.modelType) ? autoMlImageClassificationInputs_ModelTypeFromJSON(object.modelType) : 0,
      baseModelId: isSet(object.baseModelId) ? globalThis.String(object.baseModelId) : "",
      budgetMilliNodeHours: isSet(object.budgetMilliNodeHours)
        ? Long.fromValue(object.budgetMilliNodeHours)
        : Long.ZERO,
      disableEarlyStopping: isSet(object.disableEarlyStopping)
        ? globalThis.Boolean(object.disableEarlyStopping)
        : false,
      multiLabel: isSet(object.multiLabel) ? globalThis.Boolean(object.multiLabel) : false,
    };
  },

  toJSON(message: AutoMlImageClassificationInputs): unknown {
    const obj: any = {};
    if (message.modelType !== 0) {
      obj.modelType = autoMlImageClassificationInputs_ModelTypeToJSON(message.modelType);
    }
    if (message.baseModelId !== "") {
      obj.baseModelId = message.baseModelId;
    }
    if (!message.budgetMilliNodeHours.equals(Long.ZERO)) {
      obj.budgetMilliNodeHours = (message.budgetMilliNodeHours || Long.ZERO).toString();
    }
    if (message.disableEarlyStopping !== false) {
      obj.disableEarlyStopping = message.disableEarlyStopping;
    }
    if (message.multiLabel !== false) {
      obj.multiLabel = message.multiLabel;
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlImageClassificationInputs>): AutoMlImageClassificationInputs {
    return AutoMlImageClassificationInputs.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlImageClassificationInputs>): AutoMlImageClassificationInputs {
    const message = createBaseAutoMlImageClassificationInputs();
    message.modelType = object.modelType ?? 0;
    message.baseModelId = object.baseModelId ?? "";
    message.budgetMilliNodeHours = (object.budgetMilliNodeHours !== undefined && object.budgetMilliNodeHours !== null)
      ? Long.fromValue(object.budgetMilliNodeHours)
      : Long.ZERO;
    message.disableEarlyStopping = object.disableEarlyStopping ?? false;
    message.multiLabel = object.multiLabel ?? false;
    return message;
  },
};

function createBaseAutoMlImageClassificationMetadata(): AutoMlImageClassificationMetadata {
  return { costMilliNodeHours: Long.ZERO, successfulStopReason: 0 };
}

export const AutoMlImageClassificationMetadata: MessageFns<AutoMlImageClassificationMetadata> = {
  encode(message: AutoMlImageClassificationMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.costMilliNodeHours.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.costMilliNodeHours.toString());
    }
    if (message.successfulStopReason !== 0) {
      writer.uint32(16).int32(message.successfulStopReason);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AutoMlImageClassificationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoMlImageClassificationMetadata();
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

  fromJSON(object: any): AutoMlImageClassificationMetadata {
    return {
      costMilliNodeHours: isSet(object.costMilliNodeHours) ? Long.fromValue(object.costMilliNodeHours) : Long.ZERO,
      successfulStopReason: isSet(object.successfulStopReason)
        ? autoMlImageClassificationMetadata_SuccessfulStopReasonFromJSON(object.successfulStopReason)
        : 0,
    };
  },

  toJSON(message: AutoMlImageClassificationMetadata): unknown {
    const obj: any = {};
    if (!message.costMilliNodeHours.equals(Long.ZERO)) {
      obj.costMilliNodeHours = (message.costMilliNodeHours || Long.ZERO).toString();
    }
    if (message.successfulStopReason !== 0) {
      obj.successfulStopReason = autoMlImageClassificationMetadata_SuccessfulStopReasonToJSON(
        message.successfulStopReason,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<AutoMlImageClassificationMetadata>): AutoMlImageClassificationMetadata {
    return AutoMlImageClassificationMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AutoMlImageClassificationMetadata>): AutoMlImageClassificationMetadata {
    const message = createBaseAutoMlImageClassificationMetadata();
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
