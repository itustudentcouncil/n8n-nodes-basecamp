// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/automl/v1beta1/classification.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TimeSegment } from "./temporal.js";

export const protobufPackage = "google.cloud.automl.v1beta1";

/** Type of the classification problem. */
export enum ClassificationType {
  /** CLASSIFICATION_TYPE_UNSPECIFIED - An un-set value of this enum. */
  CLASSIFICATION_TYPE_UNSPECIFIED = 0,
  /** MULTICLASS - At most one label is allowed per example. */
  MULTICLASS = 1,
  /** MULTILABEL - Multiple labels are allowed for one example. */
  MULTILABEL = 2,
  UNRECOGNIZED = -1,
}

export function classificationTypeFromJSON(object: any): ClassificationType {
  switch (object) {
    case 0:
    case "CLASSIFICATION_TYPE_UNSPECIFIED":
      return ClassificationType.CLASSIFICATION_TYPE_UNSPECIFIED;
    case 1:
    case "MULTICLASS":
      return ClassificationType.MULTICLASS;
    case 2:
    case "MULTILABEL":
      return ClassificationType.MULTILABEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClassificationType.UNRECOGNIZED;
  }
}

export function classificationTypeToJSON(object: ClassificationType): string {
  switch (object) {
    case ClassificationType.CLASSIFICATION_TYPE_UNSPECIFIED:
      return "CLASSIFICATION_TYPE_UNSPECIFIED";
    case ClassificationType.MULTICLASS:
      return "MULTICLASS";
    case ClassificationType.MULTILABEL:
      return "MULTILABEL";
    case ClassificationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Contains annotation details specific to classification. */
export interface ClassificationAnnotation {
  /**
   * Output only. A confidence estimate between 0.0 and 1.0. A higher value
   * means greater confidence that the annotation is positive. If a user
   * approves an annotation as negative or positive, the score value remains
   * unchanged. If a user creates an annotation, the score is 0 for negative or
   * 1 for positive.
   */
  score: number;
}

/** Contains annotation details specific to video classification. */
export interface VideoClassificationAnnotation {
  /**
   * Output only. Expresses the type of video classification. Possible values:
   *
   * *  `segment` - Classification done on a specified by user
   *        time segment of a video. AnnotationSpec is answered to be present
   *        in that time segment, if it is present in any part of it. The video
   *        ML model evaluations are done only for this type of classification.
   *
   * *  `shot`- Shot-level classification.
   *        AutoML Video Intelligence determines the boundaries
   *        for each camera shot in the entire segment of the video that user
   *        specified in the request configuration. AutoML Video Intelligence
   *        then returns labels and their confidence scores for each detected
   *        shot, along with the start and end time of the shot.
   *        WARNING: Model evaluation is not done for this classification type,
   *        the quality of it depends on training data, but there are no
   *        metrics provided to describe that quality.
   *
   * *  `1s_interval` - AutoML Video Intelligence returns labels and their
   *        confidence scores for each second of the entire segment of the video
   *        that user specified in the request configuration.
   *        WARNING: Model evaluation is not done for this classification type,
   *        the quality of it depends on training data, but there are no
   *        metrics provided to describe that quality.
   */
  type: string;
  /** Output only . The classification details of this annotation. */
  classificationAnnotation:
    | ClassificationAnnotation
    | undefined;
  /**
   * Output only . The time segment of the video to which the
   * annotation applies.
   */
  timeSegment: TimeSegment | undefined;
}

/**
 * Model evaluation metrics for classification problems.
 * Note: For Video Classification this metrics only describe quality of the
 * Video Classification predictions of "segment_classification" type.
 */
export interface ClassificationEvaluationMetrics {
  /**
   * Output only. The Area Under Precision-Recall Curve metric. Micro-averaged
   * for the overall evaluation.
   */
  auPrc: number;
  /**
   * Output only. The Area Under Precision-Recall Curve metric based on priors.
   * Micro-averaged for the overall evaluation.
   * Deprecated.
   *
   * @deprecated
   */
  baseAuPrc: number;
  /**
   * Output only. The Area Under Receiver Operating Characteristic curve metric.
   * Micro-averaged for the overall evaluation.
   */
  auRoc: number;
  /** Output only. The Log Loss metric. */
  logLoss: number;
  /**
   * Output only. Metrics for each confidence_threshold in
   * 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and
   * position_threshold = INT32_MAX_VALUE.
   * ROC and precision-recall curves, and other aggregated metrics are derived
   * from them. The confidence metrics entries may also be supplied for
   * additional values of position_threshold, but from these no aggregated
   * metrics are computed.
   */
  confidenceMetricsEntry: ClassificationEvaluationMetrics_ConfidenceMetricsEntry[];
  /**
   * Output only. Confusion matrix of the evaluation.
   * Only set for MULTICLASS classification problems where number
   * of labels is no more than 10.
   * Only set for model level evaluation, not for evaluation per label.
   */
  confusionMatrix:
    | ClassificationEvaluationMetrics_ConfusionMatrix
    | undefined;
  /** Output only. The annotation spec ids used for this evaluation. */
  annotationSpecId: string[];
}

/** Metrics for a single confidence threshold. */
export interface ClassificationEvaluationMetrics_ConfidenceMetricsEntry {
  /**
   * Output only. Metrics are computed with an assumption that the model
   * never returns predictions with score lower than this value.
   */
  confidenceThreshold: number;
  /**
   * Output only. Metrics are computed with an assumption that the model
   * always returns at most this many predictions (ordered by their score,
   * descendingly), but they all still need to meet the confidence_threshold.
   */
  positionThreshold: number;
  /**
   * Output only. Recall (True Positive Rate) for the given confidence
   * threshold.
   */
  recall: number;
  /** Output only. Precision for the given confidence threshold. */
  precision: number;
  /** Output only. False Positive Rate for the given confidence threshold. */
  falsePositiveRate: number;
  /** Output only. The harmonic mean of recall and precision. */
  f1Score: number;
  /**
   * Output only. The Recall (True Positive Rate) when only considering the
   * label that has the highest prediction score and not below the confidence
   * threshold for each example.
   */
  recallAt1: number;
  /**
   * Output only. The precision when only considering the label that has the
   * highest prediction score and not below the confidence threshold for each
   * example.
   */
  precisionAt1: number;
  /**
   * Output only. The False Positive Rate when only considering the label that
   * has the highest prediction score and not below the confidence threshold
   * for each example.
   */
  falsePositiveRateAt1: number;
  /** Output only. The harmonic mean of [recall_at1][google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry.recall_at1] and [precision_at1][google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry.precision_at1]. */
  f1ScoreAt1: number;
  /**
   * Output only. The number of model created labels that match a ground truth
   * label.
   */
  truePositiveCount: Long;
  /**
   * Output only. The number of model created labels that do not match a
   * ground truth label.
   */
  falsePositiveCount: Long;
  /**
   * Output only. The number of ground truth labels that are not matched
   * by a model created label.
   */
  falseNegativeCount: Long;
  /**
   * Output only. The number of labels that were not created by the model,
   * but if they would, they would not match a ground truth label.
   */
  trueNegativeCount: Long;
}

/** Confusion matrix of the model running the classification. */
export interface ClassificationEvaluationMetrics_ConfusionMatrix {
  /**
   * Output only. IDs of the annotation specs used in the confusion matrix.
   * For Tables CLASSIFICATION
   *
   * [prediction_type][google.cloud.automl.v1beta1.TablesModelMetadata.prediction_type]
   * only list of [annotation_spec_display_name-s][] is populated.
   */
  annotationSpecId: string[];
  /**
   * Output only. Display name of the annotation specs used in the confusion
   * matrix, as they were at the moment of the evaluation. For Tables
   * CLASSIFICATION
   *
   * [prediction_type-s][google.cloud.automl.v1beta1.TablesModelMetadata.prediction_type],
   * distinct values of the target column at the moment of the model
   * evaluation are populated here.
   */
  displayName: string[];
  /**
   * Output only. Rows in the confusion matrix. The number of rows is equal to
   * the size of `annotation_spec_id`.
   * `row[i].example_count[j]` is the number of examples that have ground
   * truth of the `annotation_spec_id[i]` and are predicted as
   * `annotation_spec_id[j]` by the model being evaluated.
   */
  row: ClassificationEvaluationMetrics_ConfusionMatrix_Row[];
}

/** Output only. A row in the confusion matrix. */
export interface ClassificationEvaluationMetrics_ConfusionMatrix_Row {
  /**
   * Output only. Value of the specific cell in the confusion matrix.
   * The number of values each row has (i.e. the length of the row) is equal
   * to the length of the `annotation_spec_id` field or, if that one is not
   * populated, length of the [display_name][google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfusionMatrix.display_name] field.
   */
  exampleCount: number[];
}

function createBaseClassificationAnnotation(): ClassificationAnnotation {
  return { score: 0 };
}

export const ClassificationAnnotation: MessageFns<ClassificationAnnotation> = {
  encode(message: ClassificationAnnotation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClassificationAnnotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): ClassificationAnnotation {
    return { score: isSet(object.score) ? globalThis.Number(object.score) : 0 };
  },

  toJSON(message: ClassificationAnnotation): unknown {
    const obj: any = {};
    if (message.score !== 0) {
      obj.score = message.score;
    }
    return obj;
  },

  create(base?: DeepPartial<ClassificationAnnotation>): ClassificationAnnotation {
    return ClassificationAnnotation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClassificationAnnotation>): ClassificationAnnotation {
    const message = createBaseClassificationAnnotation();
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseVideoClassificationAnnotation(): VideoClassificationAnnotation {
  return { type: "", classificationAnnotation: undefined, timeSegment: undefined };
}

export const VideoClassificationAnnotation: MessageFns<VideoClassificationAnnotation> = {
  encode(message: VideoClassificationAnnotation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.classificationAnnotation !== undefined) {
      ClassificationAnnotation.encode(message.classificationAnnotation, writer.uint32(18).fork()).join();
    }
    if (message.timeSegment !== undefined) {
      TimeSegment.encode(message.timeSegment, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VideoClassificationAnnotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoClassificationAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.classificationAnnotation = ClassificationAnnotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timeSegment = TimeSegment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VideoClassificationAnnotation {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      classificationAnnotation: isSet(object.classificationAnnotation)
        ? ClassificationAnnotation.fromJSON(object.classificationAnnotation)
        : undefined,
      timeSegment: isSet(object.timeSegment) ? TimeSegment.fromJSON(object.timeSegment) : undefined,
    };
  },

  toJSON(message: VideoClassificationAnnotation): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.classificationAnnotation !== undefined) {
      obj.classificationAnnotation = ClassificationAnnotation.toJSON(message.classificationAnnotation);
    }
    if (message.timeSegment !== undefined) {
      obj.timeSegment = TimeSegment.toJSON(message.timeSegment);
    }
    return obj;
  },

  create(base?: DeepPartial<VideoClassificationAnnotation>): VideoClassificationAnnotation {
    return VideoClassificationAnnotation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VideoClassificationAnnotation>): VideoClassificationAnnotation {
    const message = createBaseVideoClassificationAnnotation();
    message.type = object.type ?? "";
    message.classificationAnnotation =
      (object.classificationAnnotation !== undefined && object.classificationAnnotation !== null)
        ? ClassificationAnnotation.fromPartial(object.classificationAnnotation)
        : undefined;
    message.timeSegment = (object.timeSegment !== undefined && object.timeSegment !== null)
      ? TimeSegment.fromPartial(object.timeSegment)
      : undefined;
    return message;
  },
};

function createBaseClassificationEvaluationMetrics(): ClassificationEvaluationMetrics {
  return {
    auPrc: 0,
    baseAuPrc: 0,
    auRoc: 0,
    logLoss: 0,
    confidenceMetricsEntry: [],
    confusionMatrix: undefined,
    annotationSpecId: [],
  };
}

export const ClassificationEvaluationMetrics: MessageFns<ClassificationEvaluationMetrics> = {
  encode(message: ClassificationEvaluationMetrics, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.auPrc !== 0) {
      writer.uint32(13).float(message.auPrc);
    }
    if (message.baseAuPrc !== 0) {
      writer.uint32(21).float(message.baseAuPrc);
    }
    if (message.auRoc !== 0) {
      writer.uint32(53).float(message.auRoc);
    }
    if (message.logLoss !== 0) {
      writer.uint32(61).float(message.logLoss);
    }
    for (const v of message.confidenceMetricsEntry) {
      ClassificationEvaluationMetrics_ConfidenceMetricsEntry.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.confusionMatrix !== undefined) {
      ClassificationEvaluationMetrics_ConfusionMatrix.encode(message.confusionMatrix, writer.uint32(34).fork()).join();
    }
    for (const v of message.annotationSpecId) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClassificationEvaluationMetrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationEvaluationMetrics();
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
          if (tag !== 21) {
            break;
          }

          message.baseAuPrc = reader.float();
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.auRoc = reader.float();
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.logLoss = reader.float();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.confidenceMetricsEntry.push(
            ClassificationEvaluationMetrics_ConfidenceMetricsEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.confusionMatrix = ClassificationEvaluationMetrics_ConfusionMatrix.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.annotationSpecId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClassificationEvaluationMetrics {
    return {
      auPrc: isSet(object.auPrc) ? globalThis.Number(object.auPrc) : 0,
      baseAuPrc: isSet(object.baseAuPrc) ? globalThis.Number(object.baseAuPrc) : 0,
      auRoc: isSet(object.auRoc) ? globalThis.Number(object.auRoc) : 0,
      logLoss: isSet(object.logLoss) ? globalThis.Number(object.logLoss) : 0,
      confidenceMetricsEntry: globalThis.Array.isArray(object?.confidenceMetricsEntry)
        ? object.confidenceMetricsEntry.map((e: any) =>
          ClassificationEvaluationMetrics_ConfidenceMetricsEntry.fromJSON(e)
        )
        : [],
      confusionMatrix: isSet(object.confusionMatrix)
        ? ClassificationEvaluationMetrics_ConfusionMatrix.fromJSON(object.confusionMatrix)
        : undefined,
      annotationSpecId: globalThis.Array.isArray(object?.annotationSpecId)
        ? object.annotationSpecId.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ClassificationEvaluationMetrics): unknown {
    const obj: any = {};
    if (message.auPrc !== 0) {
      obj.auPrc = message.auPrc;
    }
    if (message.baseAuPrc !== 0) {
      obj.baseAuPrc = message.baseAuPrc;
    }
    if (message.auRoc !== 0) {
      obj.auRoc = message.auRoc;
    }
    if (message.logLoss !== 0) {
      obj.logLoss = message.logLoss;
    }
    if (message.confidenceMetricsEntry?.length) {
      obj.confidenceMetricsEntry = message.confidenceMetricsEntry.map((e) =>
        ClassificationEvaluationMetrics_ConfidenceMetricsEntry.toJSON(e)
      );
    }
    if (message.confusionMatrix !== undefined) {
      obj.confusionMatrix = ClassificationEvaluationMetrics_ConfusionMatrix.toJSON(message.confusionMatrix);
    }
    if (message.annotationSpecId?.length) {
      obj.annotationSpecId = message.annotationSpecId;
    }
    return obj;
  },

  create(base?: DeepPartial<ClassificationEvaluationMetrics>): ClassificationEvaluationMetrics {
    return ClassificationEvaluationMetrics.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClassificationEvaluationMetrics>): ClassificationEvaluationMetrics {
    const message = createBaseClassificationEvaluationMetrics();
    message.auPrc = object.auPrc ?? 0;
    message.baseAuPrc = object.baseAuPrc ?? 0;
    message.auRoc = object.auRoc ?? 0;
    message.logLoss = object.logLoss ?? 0;
    message.confidenceMetricsEntry =
      object.confidenceMetricsEntry?.map((e) =>
        ClassificationEvaluationMetrics_ConfidenceMetricsEntry.fromPartial(e)
      ) || [];
    message.confusionMatrix = (object.confusionMatrix !== undefined && object.confusionMatrix !== null)
      ? ClassificationEvaluationMetrics_ConfusionMatrix.fromPartial(object.confusionMatrix)
      : undefined;
    message.annotationSpecId = object.annotationSpecId?.map((e) => e) || [];
    return message;
  },
};

function createBaseClassificationEvaluationMetrics_ConfidenceMetricsEntry(): ClassificationEvaluationMetrics_ConfidenceMetricsEntry {
  return {
    confidenceThreshold: 0,
    positionThreshold: 0,
    recall: 0,
    precision: 0,
    falsePositiveRate: 0,
    f1Score: 0,
    recallAt1: 0,
    precisionAt1: 0,
    falsePositiveRateAt1: 0,
    f1ScoreAt1: 0,
    truePositiveCount: Long.ZERO,
    falsePositiveCount: Long.ZERO,
    falseNegativeCount: Long.ZERO,
    trueNegativeCount: Long.ZERO,
  };
}

export const ClassificationEvaluationMetrics_ConfidenceMetricsEntry: MessageFns<
  ClassificationEvaluationMetrics_ConfidenceMetricsEntry
> = {
  encode(
    message: ClassificationEvaluationMetrics_ConfidenceMetricsEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.confidenceThreshold !== 0) {
      writer.uint32(13).float(message.confidenceThreshold);
    }
    if (message.positionThreshold !== 0) {
      writer.uint32(112).int32(message.positionThreshold);
    }
    if (message.recall !== 0) {
      writer.uint32(21).float(message.recall);
    }
    if (message.precision !== 0) {
      writer.uint32(29).float(message.precision);
    }
    if (message.falsePositiveRate !== 0) {
      writer.uint32(69).float(message.falsePositiveRate);
    }
    if (message.f1Score !== 0) {
      writer.uint32(37).float(message.f1Score);
    }
    if (message.recallAt1 !== 0) {
      writer.uint32(45).float(message.recallAt1);
    }
    if (message.precisionAt1 !== 0) {
      writer.uint32(53).float(message.precisionAt1);
    }
    if (message.falsePositiveRateAt1 !== 0) {
      writer.uint32(77).float(message.falsePositiveRateAt1);
    }
    if (message.f1ScoreAt1 !== 0) {
      writer.uint32(61).float(message.f1ScoreAt1);
    }
    if (!message.truePositiveCount.equals(Long.ZERO)) {
      writer.uint32(80).int64(message.truePositiveCount.toString());
    }
    if (!message.falsePositiveCount.equals(Long.ZERO)) {
      writer.uint32(88).int64(message.falsePositiveCount.toString());
    }
    if (!message.falseNegativeCount.equals(Long.ZERO)) {
      writer.uint32(96).int64(message.falseNegativeCount.toString());
    }
    if (!message.trueNegativeCount.equals(Long.ZERO)) {
      writer.uint32(104).int64(message.trueNegativeCount.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClassificationEvaluationMetrics_ConfidenceMetricsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationEvaluationMetrics_ConfidenceMetricsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.confidenceThreshold = reader.float();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.positionThreshold = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.recall = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.precision = reader.float();
          continue;
        case 8:
          if (tag !== 69) {
            break;
          }

          message.falsePositiveRate = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.f1Score = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.recallAt1 = reader.float();
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.precisionAt1 = reader.float();
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.falsePositiveRateAt1 = reader.float();
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.f1ScoreAt1 = reader.float();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.truePositiveCount = Long.fromString(reader.int64().toString());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.falsePositiveCount = Long.fromString(reader.int64().toString());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.falseNegativeCount = Long.fromString(reader.int64().toString());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.trueNegativeCount = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClassificationEvaluationMetrics_ConfidenceMetricsEntry {
    return {
      confidenceThreshold: isSet(object.confidenceThreshold) ? globalThis.Number(object.confidenceThreshold) : 0,
      positionThreshold: isSet(object.positionThreshold) ? globalThis.Number(object.positionThreshold) : 0,
      recall: isSet(object.recall) ? globalThis.Number(object.recall) : 0,
      precision: isSet(object.precision) ? globalThis.Number(object.precision) : 0,
      falsePositiveRate: isSet(object.falsePositiveRate) ? globalThis.Number(object.falsePositiveRate) : 0,
      f1Score: isSet(object.f1Score) ? globalThis.Number(object.f1Score) : 0,
      recallAt1: isSet(object.recallAt1) ? globalThis.Number(object.recallAt1) : 0,
      precisionAt1: isSet(object.precisionAt1) ? globalThis.Number(object.precisionAt1) : 0,
      falsePositiveRateAt1: isSet(object.falsePositiveRateAt1) ? globalThis.Number(object.falsePositiveRateAt1) : 0,
      f1ScoreAt1: isSet(object.f1ScoreAt1) ? globalThis.Number(object.f1ScoreAt1) : 0,
      truePositiveCount: isSet(object.truePositiveCount) ? Long.fromValue(object.truePositiveCount) : Long.ZERO,
      falsePositiveCount: isSet(object.falsePositiveCount) ? Long.fromValue(object.falsePositiveCount) : Long.ZERO,
      falseNegativeCount: isSet(object.falseNegativeCount) ? Long.fromValue(object.falseNegativeCount) : Long.ZERO,
      trueNegativeCount: isSet(object.trueNegativeCount) ? Long.fromValue(object.trueNegativeCount) : Long.ZERO,
    };
  },

  toJSON(message: ClassificationEvaluationMetrics_ConfidenceMetricsEntry): unknown {
    const obj: any = {};
    if (message.confidenceThreshold !== 0) {
      obj.confidenceThreshold = message.confidenceThreshold;
    }
    if (message.positionThreshold !== 0) {
      obj.positionThreshold = Math.round(message.positionThreshold);
    }
    if (message.recall !== 0) {
      obj.recall = message.recall;
    }
    if (message.precision !== 0) {
      obj.precision = message.precision;
    }
    if (message.falsePositiveRate !== 0) {
      obj.falsePositiveRate = message.falsePositiveRate;
    }
    if (message.f1Score !== 0) {
      obj.f1Score = message.f1Score;
    }
    if (message.recallAt1 !== 0) {
      obj.recallAt1 = message.recallAt1;
    }
    if (message.precisionAt1 !== 0) {
      obj.precisionAt1 = message.precisionAt1;
    }
    if (message.falsePositiveRateAt1 !== 0) {
      obj.falsePositiveRateAt1 = message.falsePositiveRateAt1;
    }
    if (message.f1ScoreAt1 !== 0) {
      obj.f1ScoreAt1 = message.f1ScoreAt1;
    }
    if (!message.truePositiveCount.equals(Long.ZERO)) {
      obj.truePositiveCount = (message.truePositiveCount || Long.ZERO).toString();
    }
    if (!message.falsePositiveCount.equals(Long.ZERO)) {
      obj.falsePositiveCount = (message.falsePositiveCount || Long.ZERO).toString();
    }
    if (!message.falseNegativeCount.equals(Long.ZERO)) {
      obj.falseNegativeCount = (message.falseNegativeCount || Long.ZERO).toString();
    }
    if (!message.trueNegativeCount.equals(Long.ZERO)) {
      obj.trueNegativeCount = (message.trueNegativeCount || Long.ZERO).toString();
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClassificationEvaluationMetrics_ConfidenceMetricsEntry>,
  ): ClassificationEvaluationMetrics_ConfidenceMetricsEntry {
    return ClassificationEvaluationMetrics_ConfidenceMetricsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClassificationEvaluationMetrics_ConfidenceMetricsEntry>,
  ): ClassificationEvaluationMetrics_ConfidenceMetricsEntry {
    const message = createBaseClassificationEvaluationMetrics_ConfidenceMetricsEntry();
    message.confidenceThreshold = object.confidenceThreshold ?? 0;
    message.positionThreshold = object.positionThreshold ?? 0;
    message.recall = object.recall ?? 0;
    message.precision = object.precision ?? 0;
    message.falsePositiveRate = object.falsePositiveRate ?? 0;
    message.f1Score = object.f1Score ?? 0;
    message.recallAt1 = object.recallAt1 ?? 0;
    message.precisionAt1 = object.precisionAt1 ?? 0;
    message.falsePositiveRateAt1 = object.falsePositiveRateAt1 ?? 0;
    message.f1ScoreAt1 = object.f1ScoreAt1 ?? 0;
    message.truePositiveCount = (object.truePositiveCount !== undefined && object.truePositiveCount !== null)
      ? Long.fromValue(object.truePositiveCount)
      : Long.ZERO;
    message.falsePositiveCount = (object.falsePositiveCount !== undefined && object.falsePositiveCount !== null)
      ? Long.fromValue(object.falsePositiveCount)
      : Long.ZERO;
    message.falseNegativeCount = (object.falseNegativeCount !== undefined && object.falseNegativeCount !== null)
      ? Long.fromValue(object.falseNegativeCount)
      : Long.ZERO;
    message.trueNegativeCount = (object.trueNegativeCount !== undefined && object.trueNegativeCount !== null)
      ? Long.fromValue(object.trueNegativeCount)
      : Long.ZERO;
    return message;
  },
};

function createBaseClassificationEvaluationMetrics_ConfusionMatrix(): ClassificationEvaluationMetrics_ConfusionMatrix {
  return { annotationSpecId: [], displayName: [], row: [] };
}

export const ClassificationEvaluationMetrics_ConfusionMatrix: MessageFns<
  ClassificationEvaluationMetrics_ConfusionMatrix
> = {
  encode(
    message: ClassificationEvaluationMetrics_ConfusionMatrix,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    for (const v of message.annotationSpecId) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.displayName) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.row) {
      ClassificationEvaluationMetrics_ConfusionMatrix_Row.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClassificationEvaluationMetrics_ConfusionMatrix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationEvaluationMetrics_ConfusionMatrix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.annotationSpecId.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.row.push(ClassificationEvaluationMetrics_ConfusionMatrix_Row.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClassificationEvaluationMetrics_ConfusionMatrix {
    return {
      annotationSpecId: globalThis.Array.isArray(object?.annotationSpecId)
        ? object.annotationSpecId.map((e: any) => globalThis.String(e))
        : [],
      displayName: globalThis.Array.isArray(object?.displayName)
        ? object.displayName.map((e: any) => globalThis.String(e))
        : [],
      row: globalThis.Array.isArray(object?.row)
        ? object.row.map((e: any) => ClassificationEvaluationMetrics_ConfusionMatrix_Row.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClassificationEvaluationMetrics_ConfusionMatrix): unknown {
    const obj: any = {};
    if (message.annotationSpecId?.length) {
      obj.annotationSpecId = message.annotationSpecId;
    }
    if (message.displayName?.length) {
      obj.displayName = message.displayName;
    }
    if (message.row?.length) {
      obj.row = message.row.map((e) => ClassificationEvaluationMetrics_ConfusionMatrix_Row.toJSON(e));
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClassificationEvaluationMetrics_ConfusionMatrix>,
  ): ClassificationEvaluationMetrics_ConfusionMatrix {
    return ClassificationEvaluationMetrics_ConfusionMatrix.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClassificationEvaluationMetrics_ConfusionMatrix>,
  ): ClassificationEvaluationMetrics_ConfusionMatrix {
    const message = createBaseClassificationEvaluationMetrics_ConfusionMatrix();
    message.annotationSpecId = object.annotationSpecId?.map((e) => e) || [];
    message.displayName = object.displayName?.map((e) => e) || [];
    message.row = object.row?.map((e) => ClassificationEvaluationMetrics_ConfusionMatrix_Row.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClassificationEvaluationMetrics_ConfusionMatrix_Row(): ClassificationEvaluationMetrics_ConfusionMatrix_Row {
  return { exampleCount: [] };
}

export const ClassificationEvaluationMetrics_ConfusionMatrix_Row: MessageFns<
  ClassificationEvaluationMetrics_ConfusionMatrix_Row
> = {
  encode(
    message: ClassificationEvaluationMetrics_ConfusionMatrix_Row,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.exampleCount) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClassificationEvaluationMetrics_ConfusionMatrix_Row {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationEvaluationMetrics_ConfusionMatrix_Row();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.exampleCount.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exampleCount.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClassificationEvaluationMetrics_ConfusionMatrix_Row {
    return {
      exampleCount: globalThis.Array.isArray(object?.exampleCount)
        ? object.exampleCount.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: ClassificationEvaluationMetrics_ConfusionMatrix_Row): unknown {
    const obj: any = {};
    if (message.exampleCount?.length) {
      obj.exampleCount = message.exampleCount.map((e) => Math.round(e));
    }
    return obj;
  },

  create(
    base?: DeepPartial<ClassificationEvaluationMetrics_ConfusionMatrix_Row>,
  ): ClassificationEvaluationMetrics_ConfusionMatrix_Row {
    return ClassificationEvaluationMetrics_ConfusionMatrix_Row.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ClassificationEvaluationMetrics_ConfusionMatrix_Row>,
  ): ClassificationEvaluationMetrics_ConfusionMatrix_Row {
    const message = createBaseClassificationEvaluationMetrics_ConfusionMatrix_Row();
    message.exampleCount = object.exampleCount?.map((e) => e) || [];
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
