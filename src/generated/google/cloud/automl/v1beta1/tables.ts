// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/automl/v1beta1/tables.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Value } from "../../../protobuf/struct.js";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { ColumnSpec } from "./column_spec.js";
import { CorrelationStats } from "./data_stats.js";
import { DoubleRange } from "./ranges.js";

export const protobufPackage = "google.cloud.automl.v1beta1";

/** Metadata for a dataset used for AutoML Tables. */
export interface TablesDatasetMetadata {
  /** Output only. The table_spec_id of the primary table of this dataset. */
  primaryTableSpecId: string;
  /**
   * column_spec_id of the primary table's column that should be used as the
   * training & prediction target.
   * This column must be non-nullable and have one of following data types
   * (otherwise model creation will error):
   *
   * * CATEGORY
   *
   * * FLOAT64
   *
   * If the type is CATEGORY , only up to
   * 100 unique values may exist in that column across all rows.
   *
   * NOTE: Updates of this field will instantly affect any other users
   * concurrently working with the dataset.
   */
  targetColumnSpecId: string;
  /**
   * column_spec_id of the primary table's column that should be used as the
   * weight column, i.e. the higher the value the more important the row will be
   * during model training.
   * Required type: FLOAT64.
   * Allowed values: 0 to 10000, inclusive on both ends; 0 means the row is
   *                 ignored for training.
   * If not set all rows are assumed to have equal weight of 1.
   * NOTE: Updates of this field will instantly affect any other users
   * concurrently working with the dataset.
   */
  weightColumnSpecId: string;
  /**
   * column_spec_id of the primary table column which specifies a possible ML
   * use of the row, i.e. the column will be used to split the rows into TRAIN,
   * VALIDATE and TEST sets.
   * Required type: STRING.
   * This column, if set, must either have all of `TRAIN`, `VALIDATE`, `TEST`
   * among its values, or only have `TEST`, `UNASSIGNED` values. In the latter
   * case the rows with `UNASSIGNED` value will be assigned by AutoML. Note
   * that if a given ml use distribution makes it impossible to create a "good"
   * model, that call will error describing the issue.
   * If both this column_spec_id and primary table's time_column_spec_id are not
   * set, then all rows are treated as `UNASSIGNED`.
   * NOTE: Updates of this field will instantly affect any other users
   * concurrently working with the dataset.
   */
  mlUseColumnSpecId: string;
  /**
   * Output only. Correlations between
   *
   * [TablesDatasetMetadata.target_column_spec_id][google.cloud.automl.v1beta1.TablesDatasetMetadata.target_column_spec_id],
   * and other columns of the
   *
   * [TablesDatasetMetadataprimary_table][google.cloud.automl.v1beta1.TablesDatasetMetadata.primary_table_spec_id].
   * Only set if the target column is set. Mapping from other column spec id to
   * its CorrelationStats with the target column.
   * This field may be stale, see the stats_update_time field for
   * for the timestamp at which these stats were last updated.
   */
  targetColumnCorrelations: { [key: string]: CorrelationStats };
  /**
   * Output only. The most recent timestamp when target_column_correlations
   * field and all descendant ColumnSpec.data_stats and
   * ColumnSpec.top_correlated_columns fields were last (re-)generated. Any
   * changes that happened to the dataset afterwards are not reflected in these
   * fields values. The regeneration happens in the background on a best effort
   * basis.
   */
  statsUpdateTime: Date | undefined;
}

export interface TablesDatasetMetadata_TargetColumnCorrelationsEntry {
  key: string;
  value: CorrelationStats | undefined;
}

/** Model metadata specific to AutoML Tables. */
export interface TablesModelMetadata {
  /**
   * Required when optimization_objective is "MAXIMIZE_PRECISION_AT_RECALL".
   * Must be between 0 and 1, inclusive.
   */
  optimizationObjectiveRecallValue?:
    | number
    | undefined;
  /**
   * Required when optimization_objective is "MAXIMIZE_RECALL_AT_PRECISION".
   * Must be between 0 and 1, inclusive.
   */
  optimizationObjectivePrecisionValue?:
    | number
    | undefined;
  /**
   * Column spec of the dataset's primary table's column the model is
   * predicting. Snapshotted when model creation started.
   * Only 3 fields are used:
   * name - May be set on CreateModel, if it's not then the ColumnSpec
   *        corresponding to the current target_column_spec_id of the dataset
   *        the model is trained from is used.
   *        If neither is set, CreateModel will error.
   * display_name - Output only.
   * data_type - Output only.
   */
  targetColumnSpec:
    | ColumnSpec
    | undefined;
  /**
   * Column specs of the dataset's primary table's columns, on which
   * the model is trained and which are used as the input for predictions.
   * The
   *
   * [target_column][google.cloud.automl.v1beta1.TablesModelMetadata.target_column_spec]
   * as well as, according to dataset's state upon model creation,
   *
   * [weight_column][google.cloud.automl.v1beta1.TablesDatasetMetadata.weight_column_spec_id],
   * and
   *
   * [ml_use_column][google.cloud.automl.v1beta1.TablesDatasetMetadata.ml_use_column_spec_id]
   * must never be included here.
   *
   * Only 3 fields are used:
   *
   * * name - May be set on CreateModel, if set only the columns specified are
   *   used, otherwise all primary table's columns (except the ones listed
   *   above) are used for the training and prediction input.
   *
   * * display_name - Output only.
   *
   * * data_type - Output only.
   */
  inputFeatureColumnSpecs: ColumnSpec[];
  /**
   * Objective function the model is optimizing towards. The training process
   * creates a model that maximizes/minimizes the value of the objective
   * function over the validation set.
   *
   * The supported optimization objectives depend on the prediction type.
   * If the field is not set, a default objective function is used.
   *
   * CLASSIFICATION_BINARY:
   *   "MAXIMIZE_AU_ROC" (default) - Maximize the area under the receiver
   *                                 operating characteristic (ROC) curve.
   *   "MINIMIZE_LOG_LOSS" - Minimize log loss.
   *   "MAXIMIZE_AU_PRC" - Maximize the area under the precision-recall curve.
   *   "MAXIMIZE_PRECISION_AT_RECALL" - Maximize precision for a specified
   *                                   recall value.
   *   "MAXIMIZE_RECALL_AT_PRECISION" - Maximize recall for a specified
   *                                    precision value.
   *
   * CLASSIFICATION_MULTI_CLASS :
   *   "MINIMIZE_LOG_LOSS" (default) - Minimize log loss.
   *
   * REGRESSION:
   *   "MINIMIZE_RMSE" (default) - Minimize root-mean-squared error (RMSE).
   *   "MINIMIZE_MAE" - Minimize mean-absolute error (MAE).
   *   "MINIMIZE_RMSLE" - Minimize root-mean-squared log error (RMSLE).
   */
  optimizationObjective: string;
  /**
   * Output only. Auxiliary information for each of the
   * input_feature_column_specs with respect to this particular model.
   */
  tablesModelColumnInfo: TablesModelColumnInfo[];
  /**
   * Required. The train budget of creating this model, expressed in milli node
   * hours i.e. 1,000 value in this field means 1 node hour.
   *
   * The training cost of the model will not exceed this budget. The final cost
   * will be attempted to be close to the budget, though may end up being (even)
   * noticeably smaller - at the backend's discretion. This especially may
   * happen when further model training ceases to provide any improvements.
   *
   * If the budget is set to a value known to be insufficient to train a
   * model for the given dataset, the training won't be attempted and
   * will error.
   *
   * The train budget must be between 1,000 and 72,000 milli node hours,
   * inclusive.
   */
  trainBudgetMilliNodeHours: Long;
  /**
   * Output only. The actual training cost of the model, expressed in milli
   * node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed
   * to not exceed the train budget.
   */
  trainCostMilliNodeHours: Long;
  /**
   * Use the entire training budget. This disables the early stopping feature.
   * By default, the early stopping feature is enabled, which means that AutoML
   * Tables might stop training before the entire training budget has been used.
   */
  disableEarlyStopping: boolean;
}

/** Contains annotation details specific to Tables. */
export interface TablesAnnotation {
  /**
   * Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher
   * value means greater confidence in the returned value.
   * For
   *
   * [target_column_spec][google.cloud.automl.v1beta1.TablesModelMetadata.target_column_spec]
   * of FLOAT64 data type the score is not populated.
   */
  score: number;
  /**
   * Output only. Only populated when
   *
   * [target_column_spec][google.cloud.automl.v1beta1.TablesModelMetadata.target_column_spec]
   * has FLOAT64 data type. An interval in which the exactly correct target
   * value has 95% chance to be in.
   */
  predictionInterval:
    | DoubleRange
    | undefined;
  /**
   * The predicted value of the row's
   *
   * [target_column][google.cloud.automl.v1beta1.TablesModelMetadata.target_column_spec].
   * The value depends on the column's DataType:
   *
   * * CATEGORY - the predicted (with the above confidence `score`) CATEGORY
   *   value.
   *
   * * FLOAT64 - the predicted (with above `prediction_interval`) FLOAT64 value.
   */
  value:
    | any
    | undefined;
  /**
   * Output only. Auxiliary information for each of the model's
   *
   * [input_feature_column_specs][google.cloud.automl.v1beta1.TablesModelMetadata.input_feature_column_specs]
   * with respect to this particular prediction.
   * If no other fields than
   *
   * [column_spec_name][google.cloud.automl.v1beta1.TablesModelColumnInfo.column_spec_name]
   * and
   *
   * [column_display_name][google.cloud.automl.v1beta1.TablesModelColumnInfo.column_display_name]
   * would be populated, then this whole field is not.
   */
  tablesModelColumnInfo: TablesModelColumnInfo[];
  /**
   * Output only. Stores the prediction score for the baseline example, which
   * is defined as the example with all values set to their baseline values.
   * This is used as part of the Sampled Shapley explanation of the model's
   * prediction. This field is populated only when feature importance is
   * requested. For regression models, this holds the baseline prediction for
   * the baseline example. For classification models, this holds the baseline
   * prediction for the baseline example for the argmax class.
   */
  baselineScore: number;
}

/**
 * An information specific to given column and Tables Model, in context
 * of the Model and the predictions created by it.
 */
export interface TablesModelColumnInfo {
  /**
   * Output only. The name of the ColumnSpec describing the column. Not
   * populated when this proto is outputted to BigQuery.
   */
  columnSpecName: string;
  /**
   * Output only. The display name of the column (same as the display_name of
   * its ColumnSpec).
   */
  columnDisplayName: string;
  /**
   * Output only. When given as part of a Model (always populated):
   * Measurement of how much model predictions correctness on the TEST data
   * depend on values in this column. A value between 0 and 1, higher means
   * higher influence. These values are normalized - for all input feature
   * columns of a given model they add to 1.
   *
   * When given back by Predict (populated iff
   * [feature_importance
   * param][google.cloud.automl.v1beta1.PredictRequest.params] is set) or Batch
   * Predict (populated iff
   * [feature_importance][google.cloud.automl.v1beta1.PredictRequest.params]
   * param is set):
   * Measurement of how impactful for the prediction returned for the given row
   * the value in this column was. Specifically, the feature importance
   * specifies the marginal contribution that the feature made to the prediction
   * score compared to the baseline score. These values are computed using the
   * Sampled Shapley method.
   */
  featureImportance: number;
}

function createBaseTablesDatasetMetadata(): TablesDatasetMetadata {
  return {
    primaryTableSpecId: "",
    targetColumnSpecId: "",
    weightColumnSpecId: "",
    mlUseColumnSpecId: "",
    targetColumnCorrelations: {},
    statsUpdateTime: undefined,
  };
}

export const TablesDatasetMetadata: MessageFns<TablesDatasetMetadata> = {
  encode(message: TablesDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.primaryTableSpecId !== "") {
      writer.uint32(10).string(message.primaryTableSpecId);
    }
    if (message.targetColumnSpecId !== "") {
      writer.uint32(18).string(message.targetColumnSpecId);
    }
    if (message.weightColumnSpecId !== "") {
      writer.uint32(26).string(message.weightColumnSpecId);
    }
    if (message.mlUseColumnSpecId !== "") {
      writer.uint32(34).string(message.mlUseColumnSpecId);
    }
    Object.entries(message.targetColumnCorrelations).forEach(([key, value]) => {
      TablesDatasetMetadata_TargetColumnCorrelationsEntry.encode({ key: key as any, value }, writer.uint32(50).fork())
        .join();
    });
    if (message.statsUpdateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.statsUpdateTime), writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.primaryTableSpecId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetColumnSpecId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.weightColumnSpecId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mlUseColumnSpecId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = TablesDatasetMetadata_TargetColumnCorrelationsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.targetColumnCorrelations[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.statsUpdateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesDatasetMetadata {
    return {
      primaryTableSpecId: isSet(object.primaryTableSpecId) ? globalThis.String(object.primaryTableSpecId) : "",
      targetColumnSpecId: isSet(object.targetColumnSpecId) ? globalThis.String(object.targetColumnSpecId) : "",
      weightColumnSpecId: isSet(object.weightColumnSpecId) ? globalThis.String(object.weightColumnSpecId) : "",
      mlUseColumnSpecId: isSet(object.mlUseColumnSpecId) ? globalThis.String(object.mlUseColumnSpecId) : "",
      targetColumnCorrelations: isObject(object.targetColumnCorrelations)
        ? Object.entries(object.targetColumnCorrelations).reduce<{ [key: string]: CorrelationStats }>(
          (acc, [key, value]) => {
            acc[key] = CorrelationStats.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      statsUpdateTime: isSet(object.statsUpdateTime) ? fromJsonTimestamp(object.statsUpdateTime) : undefined,
    };
  },

  toJSON(message: TablesDatasetMetadata): unknown {
    const obj: any = {};
    if (message.primaryTableSpecId !== "") {
      obj.primaryTableSpecId = message.primaryTableSpecId;
    }
    if (message.targetColumnSpecId !== "") {
      obj.targetColumnSpecId = message.targetColumnSpecId;
    }
    if (message.weightColumnSpecId !== "") {
      obj.weightColumnSpecId = message.weightColumnSpecId;
    }
    if (message.mlUseColumnSpecId !== "") {
      obj.mlUseColumnSpecId = message.mlUseColumnSpecId;
    }
    if (message.targetColumnCorrelations) {
      const entries = Object.entries(message.targetColumnCorrelations);
      if (entries.length > 0) {
        obj.targetColumnCorrelations = {};
        entries.forEach(([k, v]) => {
          obj.targetColumnCorrelations[k] = CorrelationStats.toJSON(v);
        });
      }
    }
    if (message.statsUpdateTime !== undefined) {
      obj.statsUpdateTime = message.statsUpdateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TablesDatasetMetadata>): TablesDatasetMetadata {
    return TablesDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesDatasetMetadata>): TablesDatasetMetadata {
    const message = createBaseTablesDatasetMetadata();
    message.primaryTableSpecId = object.primaryTableSpecId ?? "";
    message.targetColumnSpecId = object.targetColumnSpecId ?? "";
    message.weightColumnSpecId = object.weightColumnSpecId ?? "";
    message.mlUseColumnSpecId = object.mlUseColumnSpecId ?? "";
    message.targetColumnCorrelations = Object.entries(object.targetColumnCorrelations ?? {}).reduce<
      { [key: string]: CorrelationStats }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CorrelationStats.fromPartial(value);
      }
      return acc;
    }, {});
    message.statsUpdateTime = object.statsUpdateTime ?? undefined;
    return message;
  },
};

function createBaseTablesDatasetMetadata_TargetColumnCorrelationsEntry(): TablesDatasetMetadata_TargetColumnCorrelationsEntry {
  return { key: "", value: undefined };
}

export const TablesDatasetMetadata_TargetColumnCorrelationsEntry: MessageFns<
  TablesDatasetMetadata_TargetColumnCorrelationsEntry
> = {
  encode(
    message: TablesDatasetMetadata_TargetColumnCorrelationsEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CorrelationStats.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesDatasetMetadata_TargetColumnCorrelationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesDatasetMetadata_TargetColumnCorrelationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = CorrelationStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesDatasetMetadata_TargetColumnCorrelationsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? CorrelationStats.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TablesDatasetMetadata_TargetColumnCorrelationsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CorrelationStats.toJSON(message.value);
    }
    return obj;
  },

  create(
    base?: DeepPartial<TablesDatasetMetadata_TargetColumnCorrelationsEntry>,
  ): TablesDatasetMetadata_TargetColumnCorrelationsEntry {
    return TablesDatasetMetadata_TargetColumnCorrelationsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<TablesDatasetMetadata_TargetColumnCorrelationsEntry>,
  ): TablesDatasetMetadata_TargetColumnCorrelationsEntry {
    const message = createBaseTablesDatasetMetadata_TargetColumnCorrelationsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? CorrelationStats.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseTablesModelMetadata(): TablesModelMetadata {
  return {
    optimizationObjectiveRecallValue: undefined,
    optimizationObjectivePrecisionValue: undefined,
    targetColumnSpec: undefined,
    inputFeatureColumnSpecs: [],
    optimizationObjective: "",
    tablesModelColumnInfo: [],
    trainBudgetMilliNodeHours: Long.ZERO,
    trainCostMilliNodeHours: Long.ZERO,
    disableEarlyStopping: false,
  };
}

export const TablesModelMetadata: MessageFns<TablesModelMetadata> = {
  encode(message: TablesModelMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.optimizationObjectiveRecallValue !== undefined) {
      writer.uint32(141).float(message.optimizationObjectiveRecallValue);
    }
    if (message.optimizationObjectivePrecisionValue !== undefined) {
      writer.uint32(149).float(message.optimizationObjectivePrecisionValue);
    }
    if (message.targetColumnSpec !== undefined) {
      ColumnSpec.encode(message.targetColumnSpec, writer.uint32(18).fork()).join();
    }
    for (const v of message.inputFeatureColumnSpecs) {
      ColumnSpec.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.optimizationObjective !== "") {
      writer.uint32(34).string(message.optimizationObjective);
    }
    for (const v of message.tablesModelColumnInfo) {
      TablesModelColumnInfo.encode(v!, writer.uint32(42).fork()).join();
    }
    if (!message.trainBudgetMilliNodeHours.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.trainBudgetMilliNodeHours.toString());
    }
    if (!message.trainCostMilliNodeHours.equals(Long.ZERO)) {
      writer.uint32(56).int64(message.trainCostMilliNodeHours.toString());
    }
    if (message.disableEarlyStopping !== false) {
      writer.uint32(96).bool(message.disableEarlyStopping);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesModelMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesModelMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 17:
          if (tag !== 141) {
            break;
          }

          message.optimizationObjectiveRecallValue = reader.float();
          continue;
        case 18:
          if (tag !== 149) {
            break;
          }

          message.optimizationObjectivePrecisionValue = reader.float();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetColumnSpec = ColumnSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inputFeatureColumnSpecs.push(ColumnSpec.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.optimizationObjective = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tablesModelColumnInfo.push(TablesModelColumnInfo.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.trainBudgetMilliNodeHours = Long.fromString(reader.int64().toString());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.trainCostMilliNodeHours = Long.fromString(reader.int64().toString());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.disableEarlyStopping = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesModelMetadata {
    return {
      optimizationObjectiveRecallValue: isSet(object.optimizationObjectiveRecallValue)
        ? globalThis.Number(object.optimizationObjectiveRecallValue)
        : undefined,
      optimizationObjectivePrecisionValue: isSet(object.optimizationObjectivePrecisionValue)
        ? globalThis.Number(object.optimizationObjectivePrecisionValue)
        : undefined,
      targetColumnSpec: isSet(object.targetColumnSpec) ? ColumnSpec.fromJSON(object.targetColumnSpec) : undefined,
      inputFeatureColumnSpecs: globalThis.Array.isArray(object?.inputFeatureColumnSpecs)
        ? object.inputFeatureColumnSpecs.map((e: any) => ColumnSpec.fromJSON(e))
        : [],
      optimizationObjective: isSet(object.optimizationObjective) ? globalThis.String(object.optimizationObjective) : "",
      tablesModelColumnInfo: globalThis.Array.isArray(object?.tablesModelColumnInfo)
        ? object.tablesModelColumnInfo.map((e: any) => TablesModelColumnInfo.fromJSON(e))
        : [],
      trainBudgetMilliNodeHours: isSet(object.trainBudgetMilliNodeHours)
        ? Long.fromValue(object.trainBudgetMilliNodeHours)
        : Long.ZERO,
      trainCostMilliNodeHours: isSet(object.trainCostMilliNodeHours)
        ? Long.fromValue(object.trainCostMilliNodeHours)
        : Long.ZERO,
      disableEarlyStopping: isSet(object.disableEarlyStopping)
        ? globalThis.Boolean(object.disableEarlyStopping)
        : false,
    };
  },

  toJSON(message: TablesModelMetadata): unknown {
    const obj: any = {};
    if (message.optimizationObjectiveRecallValue !== undefined) {
      obj.optimizationObjectiveRecallValue = message.optimizationObjectiveRecallValue;
    }
    if (message.optimizationObjectivePrecisionValue !== undefined) {
      obj.optimizationObjectivePrecisionValue = message.optimizationObjectivePrecisionValue;
    }
    if (message.targetColumnSpec !== undefined) {
      obj.targetColumnSpec = ColumnSpec.toJSON(message.targetColumnSpec);
    }
    if (message.inputFeatureColumnSpecs?.length) {
      obj.inputFeatureColumnSpecs = message.inputFeatureColumnSpecs.map((e) => ColumnSpec.toJSON(e));
    }
    if (message.optimizationObjective !== "") {
      obj.optimizationObjective = message.optimizationObjective;
    }
    if (message.tablesModelColumnInfo?.length) {
      obj.tablesModelColumnInfo = message.tablesModelColumnInfo.map((e) => TablesModelColumnInfo.toJSON(e));
    }
    if (!message.trainBudgetMilliNodeHours.equals(Long.ZERO)) {
      obj.trainBudgetMilliNodeHours = (message.trainBudgetMilliNodeHours || Long.ZERO).toString();
    }
    if (!message.trainCostMilliNodeHours.equals(Long.ZERO)) {
      obj.trainCostMilliNodeHours = (message.trainCostMilliNodeHours || Long.ZERO).toString();
    }
    if (message.disableEarlyStopping !== false) {
      obj.disableEarlyStopping = message.disableEarlyStopping;
    }
    return obj;
  },

  create(base?: DeepPartial<TablesModelMetadata>): TablesModelMetadata {
    return TablesModelMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesModelMetadata>): TablesModelMetadata {
    const message = createBaseTablesModelMetadata();
    message.optimizationObjectiveRecallValue = object.optimizationObjectiveRecallValue ?? undefined;
    message.optimizationObjectivePrecisionValue = object.optimizationObjectivePrecisionValue ?? undefined;
    message.targetColumnSpec = (object.targetColumnSpec !== undefined && object.targetColumnSpec !== null)
      ? ColumnSpec.fromPartial(object.targetColumnSpec)
      : undefined;
    message.inputFeatureColumnSpecs = object.inputFeatureColumnSpecs?.map((e) => ColumnSpec.fromPartial(e)) || [];
    message.optimizationObjective = object.optimizationObjective ?? "";
    message.tablesModelColumnInfo = object.tablesModelColumnInfo?.map((e) => TablesModelColumnInfo.fromPartial(e)) ||
      [];
    message.trainBudgetMilliNodeHours =
      (object.trainBudgetMilliNodeHours !== undefined && object.trainBudgetMilliNodeHours !== null)
        ? Long.fromValue(object.trainBudgetMilliNodeHours)
        : Long.ZERO;
    message.trainCostMilliNodeHours =
      (object.trainCostMilliNodeHours !== undefined && object.trainCostMilliNodeHours !== null)
        ? Long.fromValue(object.trainCostMilliNodeHours)
        : Long.ZERO;
    message.disableEarlyStopping = object.disableEarlyStopping ?? false;
    return message;
  },
};

function createBaseTablesAnnotation(): TablesAnnotation {
  return { score: 0, predictionInterval: undefined, value: undefined, tablesModelColumnInfo: [], baselineScore: 0 };
}

export const TablesAnnotation: MessageFns<TablesAnnotation> = {
  encode(message: TablesAnnotation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    if (message.predictionInterval !== undefined) {
      DoubleRange.encode(message.predictionInterval, writer.uint32(34).fork()).join();
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).join();
    }
    for (const v of message.tablesModelColumnInfo) {
      TablesModelColumnInfo.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.baselineScore !== 0) {
      writer.uint32(45).float(message.baselineScore);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesAnnotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.score = reader.float();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.predictionInterval = DoubleRange.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tablesModelColumnInfo.push(TablesModelColumnInfo.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.baselineScore = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesAnnotation {
    return {
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
      predictionInterval: isSet(object.predictionInterval)
        ? DoubleRange.fromJSON(object.predictionInterval)
        : undefined,
      value: isSet(object?.value) ? object.value : undefined,
      tablesModelColumnInfo: globalThis.Array.isArray(object?.tablesModelColumnInfo)
        ? object.tablesModelColumnInfo.map((e: any) => TablesModelColumnInfo.fromJSON(e))
        : [],
      baselineScore: isSet(object.baselineScore) ? globalThis.Number(object.baselineScore) : 0,
    };
  },

  toJSON(message: TablesAnnotation): unknown {
    const obj: any = {};
    if (message.score !== 0) {
      obj.score = message.score;
    }
    if (message.predictionInterval !== undefined) {
      obj.predictionInterval = DoubleRange.toJSON(message.predictionInterval);
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    if (message.tablesModelColumnInfo?.length) {
      obj.tablesModelColumnInfo = message.tablesModelColumnInfo.map((e) => TablesModelColumnInfo.toJSON(e));
    }
    if (message.baselineScore !== 0) {
      obj.baselineScore = message.baselineScore;
    }
    return obj;
  },

  create(base?: DeepPartial<TablesAnnotation>): TablesAnnotation {
    return TablesAnnotation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesAnnotation>): TablesAnnotation {
    const message = createBaseTablesAnnotation();
    message.score = object.score ?? 0;
    message.predictionInterval = (object.predictionInterval !== undefined && object.predictionInterval !== null)
      ? DoubleRange.fromPartial(object.predictionInterval)
      : undefined;
    message.value = object.value ?? undefined;
    message.tablesModelColumnInfo = object.tablesModelColumnInfo?.map((e) => TablesModelColumnInfo.fromPartial(e)) ||
      [];
    message.baselineScore = object.baselineScore ?? 0;
    return message;
  },
};

function createBaseTablesModelColumnInfo(): TablesModelColumnInfo {
  return { columnSpecName: "", columnDisplayName: "", featureImportance: 0 };
}

export const TablesModelColumnInfo: MessageFns<TablesModelColumnInfo> = {
  encode(message: TablesModelColumnInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.columnSpecName !== "") {
      writer.uint32(10).string(message.columnSpecName);
    }
    if (message.columnDisplayName !== "") {
      writer.uint32(18).string(message.columnDisplayName);
    }
    if (message.featureImportance !== 0) {
      writer.uint32(29).float(message.featureImportance);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesModelColumnInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesModelColumnInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.columnSpecName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columnDisplayName = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.featureImportance = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesModelColumnInfo {
    return {
      columnSpecName: isSet(object.columnSpecName) ? globalThis.String(object.columnSpecName) : "",
      columnDisplayName: isSet(object.columnDisplayName) ? globalThis.String(object.columnDisplayName) : "",
      featureImportance: isSet(object.featureImportance) ? globalThis.Number(object.featureImportance) : 0,
    };
  },

  toJSON(message: TablesModelColumnInfo): unknown {
    const obj: any = {};
    if (message.columnSpecName !== "") {
      obj.columnSpecName = message.columnSpecName;
    }
    if (message.columnDisplayName !== "") {
      obj.columnDisplayName = message.columnDisplayName;
    }
    if (message.featureImportance !== 0) {
      obj.featureImportance = message.featureImportance;
    }
    return obj;
  },

  create(base?: DeepPartial<TablesModelColumnInfo>): TablesModelColumnInfo {
    return TablesModelColumnInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesModelColumnInfo>): TablesModelColumnInfo {
    const message = createBaseTablesModelColumnInfo();
    message.columnSpecName = object.columnSpecName ?? "";
    message.columnDisplayName = object.columnDisplayName ?? "";
    message.featureImportance = object.featureImportance ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
