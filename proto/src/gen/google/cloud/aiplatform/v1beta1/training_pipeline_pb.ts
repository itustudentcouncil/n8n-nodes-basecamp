// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/cloud/aiplatform/v1beta1/training_pipeline.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { EncryptionSpec } from "./encryption_spec_pb";
import { file_google_cloud_aiplatform_v1beta1_encryption_spec } from "./encryption_spec_pb";
import type { BigQueryDestination, GcsDestination } from "./io_pb";
import { file_google_cloud_aiplatform_v1beta1_io } from "./io_pb";
import type { Model } from "./model_pb";
import { file_google_cloud_aiplatform_v1beta1_model } from "./model_pb";
import type { PipelineState } from "./pipeline_state_pb";
import { file_google_cloud_aiplatform_v1beta1_pipeline_state } from "./pipeline_state_pb";
import type { Timestamp, Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Status } from "../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/training_pipeline.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_training_pipeline: GenFile = /*@__PURE__*/
  fileDesc("Cjdnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL3RyYWluaW5nX3BpcGVsaW5lLnByb3RvEh9nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExIqcIChBUcmFpbmluZ1BpcGVsaW5lEhEKBG5hbWUYASABKAlCA+BBAxIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhJLChFpbnB1dF9kYXRhX2NvbmZpZxgDIAEoCzIwLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuSW5wdXREYXRhQ29uZmlnEiUKGHRyYWluaW5nX3Rhc2tfZGVmaW5pdGlvbhgEIAEoCUID4EECEjkKFHRyYWluaW5nX3Rhc2tfaW5wdXRzGAUgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlQgPgQQISOwoWdHJhaW5pbmdfdGFza19tZXRhZGF0YRgGIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZUID4EEDEj8KD21vZGVsX3RvX3VwbG9hZBgHIAEoCzImLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTW9kZWwSFQoIbW9kZWxfaWQYFiABKAlCA+BBARIZCgxwYXJlbnRfbW9kZWwYFSABKAlCA+BBARJCCgVzdGF0ZRgJIAEoDjIuLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuUGlwZWxpbmVTdGF0ZUID4EEDEiYKBWVycm9yGAogASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXNCA+BBAxI0CgtjcmVhdGVfdGltZRgLIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIzCgpzdGFydF90aW1lGAwgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjEKCGVuZF90aW1lGA0gASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjQKC3VwZGF0ZV90aW1lGA4gASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEk0KBmxhYmVscxgPIAMoCzI9Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVHJhaW5pbmdQaXBlbGluZS5MYWJlbHNFbnRyeRJICg9lbmNyeXB0aW9uX3NwZWMYEiABKAsyLy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkVuY3J5cHRpb25TcGVjGi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAE6fupBewoqYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9UcmFpbmluZ1BpcGVsaW5lEk1wcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vdHJhaW5pbmdQaXBlbGluZXMve3RyYWluaW5nX3BpcGVsaW5lfSLSBQoPSW5wdXREYXRhQ29uZmlnEkgKDmZyYWN0aW9uX3NwbGl0GAIgASgLMi4uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5GcmFjdGlvblNwbGl0SAASRAoMZmlsdGVyX3NwbGl0GAMgASgLMiwuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5GaWx0ZXJTcGxpdEgAEkwKEHByZWRlZmluZWRfc3BsaXQYBCABKAsyMC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLlByZWRlZmluZWRTcGxpdEgAEkoKD3RpbWVzdGFtcF9zcGxpdBgFIAEoCzIvLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVGltZXN0YW1wU3BsaXRIABJMChBzdHJhdGlmaWVkX3NwbGl0GAwgASgLMjAuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5TdHJhdGlmaWVkU3BsaXRIABJKCg9nY3NfZGVzdGluYXRpb24YCCABKAsyLy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdjc0Rlc3RpbmF0aW9uSAESVAoUYmlncXVlcnlfZGVzdGluYXRpb24YCiABKAsyNC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkJpZ1F1ZXJ5RGVzdGluYXRpb25IARIXCgpkYXRhc2V0X2lkGAEgASgJQgPgQQISGgoSYW5ub3RhdGlvbnNfZmlsdGVyGAYgASgJEh0KFWFubm90YXRpb25fc2NoZW1hX3VyaRgJIAEoCRIWCg5zYXZlZF9xdWVyeV9pZBgHIAEoCRIhChlwZXJzaXN0X21sX3VzZV9hc3NpZ25tZW50GAsgASgIQgcKBXNwbGl0Qg0KC2Rlc3RpbmF0aW9uIl4KDUZyYWN0aW9uU3BsaXQSGQoRdHJhaW5pbmdfZnJhY3Rpb24YASABKAESGwoTdmFsaWRhdGlvbl9mcmFjdGlvbhgCIAEoARIVCg10ZXN0X2ZyYWN0aW9uGAMgASgBImUKC0ZpbHRlclNwbGl0EhwKD3RyYWluaW5nX2ZpbHRlchgBIAEoCUID4EECEh4KEXZhbGlkYXRpb25fZmlsdGVyGAIgASgJQgPgQQISGAoLdGVzdF9maWx0ZXIYAyABKAlCA+BBAiIjCg9QcmVkZWZpbmVkU3BsaXQSEAoDa2V5GAEgASgJQgPgQQIicQoOVGltZXN0YW1wU3BsaXQSGQoRdHJhaW5pbmdfZnJhY3Rpb24YASABKAESGwoTdmFsaWRhdGlvbl9mcmFjdGlvbhgCIAEoARIVCg10ZXN0X2ZyYWN0aW9uGAMgASgBEhAKA2tleRgEIAEoCUID4EECInIKD1N0cmF0aWZpZWRTcGxpdBIZChF0cmFpbmluZ19mcmFjdGlvbhgBIAEoARIbChN2YWxpZGF0aW9uX2ZyYWN0aW9uGAIgASgBEhUKDXRlc3RfZnJhY3Rpb24YAyABKAESEAoDa2V5GAQgASgJQgPgQQJC7AEKI2NvbS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExQhVUcmFpbmluZ1BpcGVsaW5lUHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxYmV0YTEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCH0dvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTHKAh9Hb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMWJldGEx6gIiR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiZXRhMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1beta1_encryption_spec, file_google_cloud_aiplatform_v1beta1_io, file_google_cloud_aiplatform_v1beta1_model, file_google_cloud_aiplatform_v1beta1_pipeline_state, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_rpc_status]);

/**
 * The TrainingPipeline orchestrates tasks associated with training a Model. It
 * always executes the training task, and optionally may also
 * export data from Vertex AI's Dataset which becomes the training input,
 * [upload][google.cloud.aiplatform.v1beta1.ModelService.UploadModel] the Model
 * to Vertex AI, and evaluate the Model.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.TrainingPipeline
 */
export type TrainingPipeline = Message<"google.cloud.aiplatform.v1beta1.TrainingPipeline"> & {
  /**
   * Output only. Resource name of the TrainingPipeline.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The user-defined name of this TrainingPipeline.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Specifies Vertex AI owned input data that may be used for training the
   * Model. The TrainingPipeline's
   * [training_task_definition][google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition]
   * should make clear whether this config is used and if there are any special
   * requirements on how it should be filled. If nothing about this config is
   * mentioned in the
   * [training_task_definition][google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition],
   * then it should be assumed that the TrainingPipeline does not depend on this
   * configuration.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.InputDataConfig input_data_config = 3;
   */
  inputDataConfig?: InputDataConfig;

  /**
   * Required. A Google Cloud Storage path to the YAML file that defines the
   * training task which is responsible for producing the model artifact, and
   * may also include additional auxiliary work. The definition files that can
   * be used here are found in
   * gs://google-cloud-aiplatform/schema/trainingjob/definition/.
   * Note: The URI given on output will be immutable and probably different,
   * including the URI scheme, than the one given on input. The output URI will
   * point to a location where the user only has a read access.
   *
   * @generated from field: string training_task_definition = 4;
   */
  trainingTaskDefinition: string;

  /**
   * Required. The training task's parameter(s), as specified in the
   * [training_task_definition][google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition]'s
   * `inputs`.
   *
   * @generated from field: google.protobuf.Value training_task_inputs = 5;
   */
  trainingTaskInputs?: Value;

  /**
   * Output only. The metadata information as specified in the
   * [training_task_definition][google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition]'s
   * `metadata`. This metadata is an auxiliary runtime and final information
   * about the training task. While the pipeline is running this information is
   * populated only at a best effort basis. Only present if the
   * pipeline's
   * [training_task_definition][google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition]
   * contains `metadata` object.
   *
   * @generated from field: google.protobuf.Value training_task_metadata = 6;
   */
  trainingTaskMetadata?: Value;

  /**
   * Describes the Model that may be uploaded (via
   * [ModelService.UploadModel][google.cloud.aiplatform.v1beta1.ModelService.UploadModel])
   * by this TrainingPipeline. The TrainingPipeline's
   * [training_task_definition][google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition]
   * should make clear whether this Model description should be populated, and
   * if there are any special requirements regarding how it should be filled. If
   * nothing is mentioned in the
   * [training_task_definition][google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition],
   * then it should be assumed that this field should not be filled and the
   * training task either uploads the Model without a need of this information,
   * or that training task does not support uploading a Model as part of the
   * pipeline. When the Pipeline's state becomes `PIPELINE_STATE_SUCCEEDED` and
   * the trained Model had been uploaded into Vertex AI, then the
   * model_to_upload's resource
   * [name][google.cloud.aiplatform.v1beta1.Model.name] is populated. The Model
   * is always uploaded into the Project and Location in which this pipeline
   * is.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.Model model_to_upload = 7;
   */
  modelToUpload?: Model;

  /**
   * Optional. The ID to use for the uploaded Model, which will become the final
   * component of the model resource name.
   *
   * This value may be up to 63 characters, and valid characters are
   * `[a-z0-9_-]`. The first character cannot be a number or hyphen.
   *
   * @generated from field: string model_id = 22;
   */
  modelId: string;

  /**
   * Optional. When specify this field, the `model_to_upload` will not be
   * uploaded as a new model, instead, it will become a new version of this
   * `parent_model`.
   *
   * @generated from field: string parent_model = 21;
   */
  parentModel: string;

  /**
   * Output only. The detailed state of the pipeline.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.PipelineState state = 9;
   */
  state: PipelineState;

  /**
   * Output only. Only populated when the pipeline's state is
   * `PIPELINE_STATE_FAILED` or `PIPELINE_STATE_CANCELLED`.
   *
   * @generated from field: google.rpc.Status error = 10;
   */
  error?: Status;

  /**
   * Output only. Time when the TrainingPipeline was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 11;
   */
  createTime?: Timestamp;

  /**
   * Output only. Time when the TrainingPipeline for the first time entered the
   * `PIPELINE_STATE_RUNNING` state.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 12;
   */
  startTime?: Timestamp;

  /**
   * Output only. Time when the TrainingPipeline entered any of the following
   * states: `PIPELINE_STATE_SUCCEEDED`, `PIPELINE_STATE_FAILED`,
   * `PIPELINE_STATE_CANCELLED`.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 13;
   */
  endTime?: Timestamp;

  /**
   * Output only. Time when the TrainingPipeline was most recently updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 14;
   */
  updateTime?: Timestamp;

  /**
   * The labels with user-defined metadata to organize TrainingPipelines.
   *
   * Label keys and values can be no longer than 64 characters
   * (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed.
   *
   * See https://goo.gl/xmQnxf for more information and examples of labels.
   *
   * @generated from field: map<string, string> labels = 15;
   */
  labels: { [key: string]: string };

  /**
   * Customer-managed encryption key spec for a TrainingPipeline. If set, this
   * TrainingPipeline will be secured by this key.
   *
   * Note: Model trained by this TrainingPipeline is also secured by this key if
   * [model_to_upload][google.cloud.aiplatform.v1beta1.TrainingPipeline.encryption_spec]
   * is not set separately.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.EncryptionSpec encryption_spec = 18;
   */
  encryptionSpec?: EncryptionSpec;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.TrainingPipeline.
 * Use `create(TrainingPipelineSchema)` to create a new message.
 */
export const TrainingPipelineSchema: GenMessage<TrainingPipeline> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_training_pipeline, 0);

/**
 * Specifies Vertex AI owned input data to be used for training, and
 * possibly evaluating, the Model.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.InputDataConfig
 */
export type InputDataConfig = Message<"google.cloud.aiplatform.v1beta1.InputDataConfig"> & {
  /**
   * The instructions how the input data should be split between the
   * training, validation and test sets.
   * If no split type is provided, the
   * [fraction_split][google.cloud.aiplatform.v1beta1.InputDataConfig.fraction_split]
   * is used by default.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.InputDataConfig.split
   */
  split: {
    /**
     * Split based on fractions defining the size of each set.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.FractionSplit fraction_split = 2;
     */
    value: FractionSplit;
    case: "fractionSplit";
  } | {
    /**
     * Split based on the provided filters for each set.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.FilterSplit filter_split = 3;
     */
    value: FilterSplit;
    case: "filterSplit";
  } | {
    /**
     * Supported only for tabular Datasets.
     *
     * Split based on a predefined key.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.PredefinedSplit predefined_split = 4;
     */
    value: PredefinedSplit;
    case: "predefinedSplit";
  } | {
    /**
     * Supported only for tabular Datasets.
     *
     * Split based on the timestamp of the input data pieces.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.TimestampSplit timestamp_split = 5;
     */
    value: TimestampSplit;
    case: "timestampSplit";
  } | {
    /**
     * Supported only for tabular Datasets.
     *
     * Split based on the distribution of the specified column.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.StratifiedSplit stratified_split = 12;
     */
    value: StratifiedSplit;
    case: "stratifiedSplit";
  } | { case: undefined; value?: undefined };

  /**
   * Only applicable to Custom and Hyperparameter Tuning TrainingPipelines.
   *
   * The destination of the training data to be written to.
   *
   * Supported destination file formats:
   *   * For non-tabular data: "jsonl".
   *   * For tabular data: "csv" and "bigquery".
   *
   * The following Vertex AI environment variables are passed to containers
   * or python modules of the training task when this field is set:
   *
   * * AIP_DATA_FORMAT : Exported data format.
   * * AIP_TRAINING_DATA_URI : Sharded exported training data uris.
   * * AIP_VALIDATION_DATA_URI : Sharded exported validation data uris.
   * * AIP_TEST_DATA_URI : Sharded exported test data uris.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.InputDataConfig.destination
   */
  destination: {
    /**
     * The Cloud Storage location where the training data is to be
     * written to. In the given directory a new directory is created with
     * name:
     * `dataset-<dataset-id>-<annotation-type>-<timestamp-of-training-call>`
     * where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format.
     * All training input data is written into that directory.
     *
     * The Vertex AI environment variables representing Cloud Storage
     * data URIs are represented in the Cloud Storage wildcard
     * format to support sharded data. e.g.: "gs://.../training-*.jsonl"
     *
     * * AIP_DATA_FORMAT = "jsonl" for non-tabular data, "csv" for tabular data
     * * AIP_TRAINING_DATA_URI =
     * "gcs_destination/dataset-<dataset-id>-<annotation-type>-<time>/training-*.${AIP_DATA_FORMAT}"
     *
     * * AIP_VALIDATION_DATA_URI =
     * "gcs_destination/dataset-<dataset-id>-<annotation-type>-<time>/validation-*.${AIP_DATA_FORMAT}"
     *
     * * AIP_TEST_DATA_URI =
     * "gcs_destination/dataset-<dataset-id>-<annotation-type>-<time>/test-*.${AIP_DATA_FORMAT}"
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.GcsDestination gcs_destination = 8;
     */
    value: GcsDestination;
    case: "gcsDestination";
  } | {
    /**
     * Only applicable to custom training with tabular Dataset with BigQuery
     * source.
     *
     * The BigQuery project location where the training data is to be written
     * to. In the given project a new dataset is created with name
     * `dataset_<dataset-id>_<annotation-type>_<timestamp-of-training-call>`
     * where timestamp is in YYYY_MM_DDThh_mm_ss_sssZ format. All training
     * input data is written into that dataset. In the dataset three
     * tables are created, `training`, `validation` and `test`.
     *
     * * AIP_DATA_FORMAT = "bigquery".
     * * AIP_TRAINING_DATA_URI  =
     * "bigquery_destination.dataset_<dataset-id>_<annotation-type>_<time>.training"
     *
     * * AIP_VALIDATION_DATA_URI =
     * "bigquery_destination.dataset_<dataset-id>_<annotation-type>_<time>.validation"
     *
     * * AIP_TEST_DATA_URI =
     * "bigquery_destination.dataset_<dataset-id>_<annotation-type>_<time>.test"
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.BigQueryDestination bigquery_destination = 10;
     */
    value: BigQueryDestination;
    case: "bigqueryDestination";
  } | { case: undefined; value?: undefined };

  /**
   * Required. The ID of the Dataset in the same Project and Location which data
   * will be used to train the Model. The Dataset must use schema compatible
   * with Model being trained, and what is compatible should be described in the
   * used TrainingPipeline's [training_task_definition]
   * [google.cloud.aiplatform.v1beta1.TrainingPipeline.training_task_definition].
   * For tabular Datasets, all their data is exported to training, to pick
   * and choose from.
   *
   * @generated from field: string dataset_id = 1;
   */
  datasetId: string;

  /**
   * Applicable only to Datasets that have DataItems and Annotations.
   *
   * A filter on Annotations of the Dataset. Only Annotations that both
   * match this filter and belong to DataItems not ignored by the split method
   * are used in respectively training, validation or test role, depending on
   * the role of the DataItem they are on (for the auto-assigned that role is
   * decided by Vertex AI). A filter with same syntax as the one used in
   * [ListAnnotations][google.cloud.aiplatform.v1beta1.DatasetService.ListAnnotations]
   * may be used, but note here it filters across all Annotations of the
   * Dataset, and not just within a single DataItem.
   *
   * @generated from field: string annotations_filter = 6;
   */
  annotationsFilter: string;

  /**
   * Applicable only to custom training with Datasets that have DataItems and
   * Annotations.
   *
   * Cloud Storage URI that points to a YAML file describing the annotation
   * schema. The schema is defined as an OpenAPI 3.0.2 [Schema
   * Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).
   * The schema files that can be used here are found in
   * gs://google-cloud-aiplatform/schema/dataset/annotation/ , note that the
   * chosen schema must be consistent with
   * [metadata][google.cloud.aiplatform.v1beta1.Dataset.metadata_schema_uri] of
   * the Dataset specified by
   * [dataset_id][google.cloud.aiplatform.v1beta1.InputDataConfig.dataset_id].
   *
   * Only Annotations that both match this schema and belong to DataItems not
   * ignored by the split method are used in respectively training, validation
   * or test role, depending on the role of the DataItem they are on.
   *
   * When used in conjunction with
   * [annotations_filter][google.cloud.aiplatform.v1beta1.InputDataConfig.annotations_filter],
   * the Annotations used for training are filtered by both
   * [annotations_filter][google.cloud.aiplatform.v1beta1.InputDataConfig.annotations_filter]
   * and
   * [annotation_schema_uri][google.cloud.aiplatform.v1beta1.InputDataConfig.annotation_schema_uri].
   *
   * @generated from field: string annotation_schema_uri = 9;
   */
  annotationSchemaUri: string;

  /**
   * Only applicable to Datasets that have SavedQueries.
   *
   * The ID of a SavedQuery (annotation set) under the Dataset specified by
   * [dataset_id][google.cloud.aiplatform.v1beta1.InputDataConfig.dataset_id]
   * used for filtering Annotations for training.
   *
   * Only Annotations that are associated with this SavedQuery are used in
   * respectively training. When used in conjunction with
   * [annotations_filter][google.cloud.aiplatform.v1beta1.InputDataConfig.annotations_filter],
   * the Annotations used for training are filtered by both
   * [saved_query_id][google.cloud.aiplatform.v1beta1.InputDataConfig.saved_query_id]
   * and
   * [annotations_filter][google.cloud.aiplatform.v1beta1.InputDataConfig.annotations_filter].
   *
   * Only one of
   * [saved_query_id][google.cloud.aiplatform.v1beta1.InputDataConfig.saved_query_id]
   * and
   * [annotation_schema_uri][google.cloud.aiplatform.v1beta1.InputDataConfig.annotation_schema_uri]
   * should be specified as both of them represent the same thing: problem type.
   *
   * @generated from field: string saved_query_id = 7;
   */
  savedQueryId: string;

  /**
   * Whether to persist the ML use assignment to data item system labels.
   *
   * @generated from field: bool persist_ml_use_assignment = 11;
   */
  persistMlUseAssignment: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.InputDataConfig.
 * Use `create(InputDataConfigSchema)` to create a new message.
 */
export const InputDataConfigSchema: GenMessage<InputDataConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_training_pipeline, 1);

/**
 * Assigns the input data to training, validation, and test sets as per the
 * given fractions. Any of `training_fraction`, `validation_fraction` and
 * `test_fraction` may optionally be provided, they must sum to up to 1. If the
 * provided ones sum to less than 1, the remainder is assigned to sets as
 * decided by Vertex AI. If none of the fractions are set, by default roughly
 * 80% of data is used for training, 10% for validation, and 10% for test.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.FractionSplit
 */
export type FractionSplit = Message<"google.cloud.aiplatform.v1beta1.FractionSplit"> & {
  /**
   * The fraction of the input data that is to be used to train the Model.
   *
   * @generated from field: double training_fraction = 1;
   */
  trainingFraction: number;

  /**
   * The fraction of the input data that is to be used to validate the Model.
   *
   * @generated from field: double validation_fraction = 2;
   */
  validationFraction: number;

  /**
   * The fraction of the input data that is to be used to evaluate the Model.
   *
   * @generated from field: double test_fraction = 3;
   */
  testFraction: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.FractionSplit.
 * Use `create(FractionSplitSchema)` to create a new message.
 */
export const FractionSplitSchema: GenMessage<FractionSplit> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_training_pipeline, 2);

/**
 * Assigns input data to training, validation, and test sets based on the given
 * filters, data pieces not matched by any filter are ignored. Currently only
 * supported for Datasets containing DataItems.
 * If any of the filters in this message are to match nothing, then they can be
 * set as '-' (the minus sign).
 *
 * Supported only for unstructured Datasets.
 *
 *
 * @generated from message google.cloud.aiplatform.v1beta1.FilterSplit
 */
export type FilterSplit = Message<"google.cloud.aiplatform.v1beta1.FilterSplit"> & {
  /**
   * Required. A filter on DataItems of the Dataset. DataItems that match
   * this filter are used to train the Model. A filter with same syntax
   * as the one used in
   * [DatasetService.ListDataItems][google.cloud.aiplatform.v1beta1.DatasetService.ListDataItems]
   * may be used. If a single DataItem is matched by more than one of the
   * FilterSplit filters, then it is assigned to the first set that applies to
   * it in the training, validation, test order.
   *
   * @generated from field: string training_filter = 1;
   */
  trainingFilter: string;

  /**
   * Required. A filter on DataItems of the Dataset. DataItems that match
   * this filter are used to validate the Model. A filter with same syntax
   * as the one used in
   * [DatasetService.ListDataItems][google.cloud.aiplatform.v1beta1.DatasetService.ListDataItems]
   * may be used. If a single DataItem is matched by more than one of the
   * FilterSplit filters, then it is assigned to the first set that applies to
   * it in the training, validation, test order.
   *
   * @generated from field: string validation_filter = 2;
   */
  validationFilter: string;

  /**
   * Required. A filter on DataItems of the Dataset. DataItems that match
   * this filter are used to test the Model. A filter with same syntax
   * as the one used in
   * [DatasetService.ListDataItems][google.cloud.aiplatform.v1beta1.DatasetService.ListDataItems]
   * may be used. If a single DataItem is matched by more than one of the
   * FilterSplit filters, then it is assigned to the first set that applies to
   * it in the training, validation, test order.
   *
   * @generated from field: string test_filter = 3;
   */
  testFilter: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.FilterSplit.
 * Use `create(FilterSplitSchema)` to create a new message.
 */
export const FilterSplitSchema: GenMessage<FilterSplit> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_training_pipeline, 3);

/**
 * Assigns input data to training, validation, and test sets based on the
 * value of a provided key.
 *
 * Supported only for tabular Datasets.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.PredefinedSplit
 */
export type PredefinedSplit = Message<"google.cloud.aiplatform.v1beta1.PredefinedSplit"> & {
  /**
   * Required. The key is a name of one of the Dataset's data columns.
   * The value of the key (either the label's value or value in the column)
   * must be one of {`training`, `validation`, `test`}, and it defines to which
   * set the given piece of data is assigned. If for a piece of data the key
   * is not present or has an invalid value, that piece is ignored by the
   * pipeline.
   *
   * @generated from field: string key = 1;
   */
  key: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.PredefinedSplit.
 * Use `create(PredefinedSplitSchema)` to create a new message.
 */
export const PredefinedSplitSchema: GenMessage<PredefinedSplit> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_training_pipeline, 4);

/**
 * Assigns input data to training, validation, and test sets based on a
 * provided timestamps. The youngest data pieces are assigned to training set,
 * next to validation set, and the oldest to the test set.
 *
 * Supported only for tabular Datasets.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.TimestampSplit
 */
export type TimestampSplit = Message<"google.cloud.aiplatform.v1beta1.TimestampSplit"> & {
  /**
   * The fraction of the input data that is to be used to train the Model.
   *
   * @generated from field: double training_fraction = 1;
   */
  trainingFraction: number;

  /**
   * The fraction of the input data that is to be used to validate the Model.
   *
   * @generated from field: double validation_fraction = 2;
   */
  validationFraction: number;

  /**
   * The fraction of the input data that is to be used to evaluate the Model.
   *
   * @generated from field: double test_fraction = 3;
   */
  testFraction: number;

  /**
   * Required. The key is a name of one of the Dataset's data columns.
   * The values of the key (the values in the column) must be in RFC 3339
   * `date-time` format, where `time-offset` = `"Z"`
   * (e.g. 1985-04-12T23:20:50.52Z). If for a piece of data the key is not
   * present or has an invalid value, that piece is ignored by the pipeline.
   *
   * @generated from field: string key = 4;
   */
  key: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.TimestampSplit.
 * Use `create(TimestampSplitSchema)` to create a new message.
 */
export const TimestampSplitSchema: GenMessage<TimestampSplit> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_training_pipeline, 5);

/**
 * Assigns input data to the training, validation, and test sets so that the
 * distribution of values found in the categorical column (as specified by the
 * `key` field) is mirrored within each split. The fraction values determine
 * the relative sizes of the splits.
 *
 * For example, if the specified column has three values, with 50% of the rows
 * having value "A", 25% value "B", and 25% value "C", and the split fractions
 * are specified as 80/10/10, then the training set will constitute 80% of the
 * training data, with about 50% of the training set rows having the value "A"
 * for the specified column, about 25% having the value "B", and about 25%
 * having the value "C".
 *
 * Only the top 500 occurring values are used; any values not in the top
 * 500 values are randomly assigned to a split. If less than three rows contain
 * a specific value, those rows are randomly assigned.
 *
 * Supported only for tabular Datasets.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.StratifiedSplit
 */
export type StratifiedSplit = Message<"google.cloud.aiplatform.v1beta1.StratifiedSplit"> & {
  /**
   * The fraction of the input data that is to be used to train the Model.
   *
   * @generated from field: double training_fraction = 1;
   */
  trainingFraction: number;

  /**
   * The fraction of the input data that is to be used to validate the Model.
   *
   * @generated from field: double validation_fraction = 2;
   */
  validationFraction: number;

  /**
   * The fraction of the input data that is to be used to evaluate the Model.
   *
   * @generated from field: double test_fraction = 3;
   */
  testFraction: number;

  /**
   * Required. The key is a name of one of the Dataset's data columns.
   * The key provided must be for a categorical column.
   *
   * @generated from field: string key = 4;
   */
  key: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.StratifiedSplit.
 * Use `create(StratifiedSplitSchema)` to create a new message.
 */
export const StratifiedSplitSchema: GenMessage<StratifiedSplit> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_training_pipeline, 6);
