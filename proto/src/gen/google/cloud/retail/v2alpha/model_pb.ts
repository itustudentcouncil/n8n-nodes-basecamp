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
// @generated from file google/cloud/retail/v2alpha/model.proto (package google.cloud.retail.v2alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { RecommendationsFilteringOption } from "./common_pb";
import { file_google_cloud_retail_v2alpha_common } from "./common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/retail/v2alpha/model.proto.
 */
export const file_google_cloud_retail_v2alpha_model: GenFile = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvY2xvdWQvcmV0YWlsL3YyYWxwaGEvbW9kZWwucHJvdG8SG2dvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYSKBFQoFTW9kZWwSYgoYcGFnZV9vcHRpbWl6YXRpb25fY29uZmlnGBEgASgLMjkuZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLk1vZGVsLlBhZ2VPcHRpbWl6YXRpb25Db25maWdCA+BBAUgAEhEKBG5hbWUYASABKAlCA+BBAhIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhJNCg50cmFpbmluZ19zdGF0ZRgDIAEoDjIwLmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5UcmFpbmluZ1N0YXRlQgPgQQESSwoNc2VydmluZ19zdGF0ZRgEIAEoDjIvLmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5TZXJ2aW5nU3RhdGVCA+BBAxI0CgtjcmVhdGVfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI0Cgt1cGRhdGVfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIRCgR0eXBlGAcgASgJQgPgQQISIwoWb3B0aW1pemF0aW9uX29iamVjdGl2ZRgIIAEoCUID4EEBEloKFXBlcmlvZGljX3R1bmluZ19zdGF0ZRgLIAEoDjI2Lmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5QZXJpb2RpY1R1bmluZ1N0YXRlQgPgQQESNwoObGFzdF90dW5lX3RpbWUYDCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSHQoQdHVuaW5nX29wZXJhdGlvbhgPIAEoCUID4EEDEkUKCmRhdGFfc3RhdGUYECABKA4yLC5nb29nbGUuY2xvdWQucmV0YWlsLnYyYWxwaGEuTW9kZWwuRGF0YVN0YXRlQgPgQQMSWgoQZmlsdGVyaW5nX29wdGlvbhgSIAEoDjI7Lmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5SZWNvbW1lbmRhdGlvbnNGaWx0ZXJpbmdPcHRpb25CA+BBARJXChRzZXJ2aW5nX2NvbmZpZ19saXN0cxgTIAMoCzI0Lmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5TZXJ2aW5nQ29uZmlnTGlzdEID4EEDEloKFW1vZGVsX2ZlYXR1cmVzX2NvbmZpZxgWIAEoCzI2Lmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5Nb2RlbEZlYXR1cmVzQ29uZmlnQgPgQQEawgUKFlBhZ2VPcHRpbWl6YXRpb25Db25maWcSKQoccGFnZV9vcHRpbWl6YXRpb25fZXZlbnRfdHlwZRgBIAEoCUID4EECElQKBnBhbmVscxgCIAMoCzI/Lmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5QYWdlT3B0aW1pemF0aW9uQ29uZmlnLlBhbmVsQgPgQQISXwoLcmVzdHJpY3Rpb24YAyABKA4yRS5nb29nbGUuY2xvdWQucmV0YWlsLnYyYWxwaGEuTW9kZWwuUGFnZU9wdGltaXphdGlvbkNvbmZpZy5SZXN0cmljdGlvbkID4EEBGjUKCUNhbmRpZGF0ZRIbChFzZXJ2aW5nX2NvbmZpZ19pZBgBIAEoCUgAQgsKCWNhbmRpZGF0ZRrlAQoFUGFuZWwSGQoMZGlzcGxheV9uYW1lGAEgASgJQgPgQQESXAoKY2FuZGlkYXRlcxgCIAMoCzJDLmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5QYWdlT3B0aW1pemF0aW9uQ29uZmlnLkNhbmRpZGF0ZUID4EECEmMKEWRlZmF1bHRfY2FuZGlkYXRlGAMgASgLMkMuZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLk1vZGVsLlBhZ2VPcHRpbWl6YXRpb25Db25maWcuQ2FuZGlkYXRlQgPgQQIipgEKC1Jlc3RyaWN0aW9uEhsKF1JFU1RSSUNUSU9OX1VOU1BFQ0lGSUVEEAASEgoOTk9fUkVTVFJJQ1RJT04QARIlCiFVTklRVUVfU0VSVklOR19DT05GSUdfUkVTVFJJQ1RJT04QAhIcChhVTklRVUVfTU9ERUxfUkVTVFJJQ1RJT04QAxIhCh1VTklRVUVfTU9ERUxfVFlQRV9SRVNUUklDVElPThAEGjQKEVNlcnZpbmdDb25maWdMaXN0Eh8KEnNlcnZpbmdfY29uZmlnX2lkcxgBIAMoCUID4EEBGoQBCiZGcmVxdWVudGx5Qm91Z2h0VG9nZXRoZXJGZWF0dXJlc0NvbmZpZxJaChVjb250ZXh0X3Byb2R1Y3RzX3R5cGUYAiABKA4yNi5nb29nbGUuY2xvdWQucmV0YWlsLnYyYWxwaGEuTW9kZWwuQ29udGV4dFByb2R1Y3RzVHlwZUID4EEBGqYBChNNb2RlbEZlYXR1cmVzQ29uZmlnEnYKIWZyZXF1ZW50bHlfYm91Z2h0X3RvZ2V0aGVyX2NvbmZpZxgBIAEoCzJJLmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5Nb2RlbC5GcmVxdWVudGx5Qm91Z2h0VG9nZXRoZXJGZWF0dXJlc0NvbmZpZ0gAQhcKFXR5cGVfZGVkaWNhdGVkX2NvbmZpZyJSCgxTZXJ2aW5nU3RhdGUSHQoZU0VSVklOR19TVEFURV9VTlNQRUNJRklFRBAAEgwKCElOQUNUSVZFEAESCgoGQUNUSVZFEAISCQoFVFVORUQQAyJJCg1UcmFpbmluZ1N0YXRlEh4KGlRSQUlOSU5HX1NUQVRFX1VOU1BFQ0lGSUVEEAASCgoGUEFVU0VEEAESDAoIVFJBSU5JTkcQAiKQAQoTUGVyaW9kaWNUdW5pbmdTdGF0ZRIlCiFQRVJJT0RJQ19UVU5JTkdfU1RBVEVfVU5TUEVDSUZJRUQQABIcChhQRVJJT0RJQ19UVU5JTkdfRElTQUJMRUQQARIXChNBTExfVFVOSU5HX0RJU0FCTEVEEAMSGwoXUEVSSU9ESUNfVFVOSU5HX0VOQUJMRUQQAiJECglEYXRhU3RhdGUSGgoWREFUQV9TVEFURV9VTlNQRUNJRklFRBAAEgsKB0RBVEFfT0sQARIOCgpEQVRBX0VSUk9SEAIidwoTQ29udGV4dFByb2R1Y3RzVHlwZRIlCiFDT05URVhUX1BST0RVQ1RTX1RZUEVfVU5TUEVDSUZJRUQQABIaChZTSU5HTEVfQ09OVEVYVF9QUk9EVUNUEAESHQoZTVVMVElQTEVfQ09OVEVYVF9QUk9EVUNUUxACOmvqQWgKG3JldGFpbC5nb29nbGVhcGlzLmNvbS9Nb2RlbBJJcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2NhdGFsb2dzL3tjYXRhbG9nfS9tb2RlbHMve21vZGVsfUIRCg90cmFpbmluZ19jb25maWdCzgEKH2NvbS5nb29nbGUuY2xvdWQucmV0YWlsLnYyYWxwaGFCCk1vZGVsUHJvdG9QAVo3Y2xvdWQuZ29vZ2xlLmNvbS9nby9yZXRhaWwvYXBpdjJhbHBoYS9yZXRhaWxwYjtyZXRhaWxwYqICBlJFVEFJTKoCG0dvb2dsZS5DbG91ZC5SZXRhaWwuVjJBbHBoYcoCG0dvb2dsZVxDbG91ZFxSZXRhaWxcVjJhbHBoYeoCHkdvb2dsZTo6Q2xvdWQ6OlJldGFpbDo6VjJhbHBoYWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_retail_v2alpha_common, file_google_protobuf_timestamp]);

/**
 * Metadata that describes the training and serving parameters of a
 * [Model][google.cloud.retail.v2alpha.Model]. A
 * [Model][google.cloud.retail.v2alpha.Model] can be associated with a
 * [ServingConfig][google.cloud.retail.v2alpha.ServingConfig] and then queried
 * through the Predict API.
 *
 * @generated from message google.cloud.retail.v2alpha.Model
 */
export type Model = Message<"google.cloud.retail.v2alpha.Model"> & {
  /**
   * Training configuration specific to a
   * [Model.type][google.cloud.retail.v2alpha.Model.type] - currently, only for
   * page optimization.
   *
   * @generated from oneof google.cloud.retail.v2alpha.Model.training_config
   */
  trainingConfig: {
    /**
     * Optional. The page optimization config.
     *
     * @generated from field: google.cloud.retail.v2alpha.Model.PageOptimizationConfig page_optimization_config = 17;
     */
    value: Model_PageOptimizationConfig;
    case: "pageOptimizationConfig";
  } | { case: undefined; value?: undefined };

  /**
   * Required. The fully qualified resource name of the model.
   *
   * Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
   * catalog_id has char limit of 50.
   * recommendation_model_id has char limit of 40.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The display name of the model.
   *
   * Should be human readable, used to display Recommendation Models in the
   * Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024
   * characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Optional. The training state that the model is in (e.g.
   * `TRAINING` or `PAUSED`).
   *
   * Since part of the cost of running the service
   * is frequency of training - this can be used to determine when to train
   * model in order to control cost. If not specified: the default value for
   * `CreateModel` method is `TRAINING`. The default value for
   * `UpdateModel` method is to keep the state the same as before.
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.TrainingState training_state = 3;
   */
  trainingState: Model_TrainingState;

  /**
   * Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.ServingState serving_state = 4;
   */
  servingState: Model_ServingState;

  /**
   * Output only. Timestamp the Recommendation Model was created at.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp the Recommendation Model was last updated. E.g.
   * if a Recommendation Model was paused - this would be the time the pause was
   * initiated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 6;
   */
  updateTime?: Timestamp;

  /**
   * Required. The type of model e.g. `home-page`.
   *
   * Currently supported values: `recommended-for-you`, `others-you-may-like`,
   * `frequently-bought-together`, `page-optimization`, `similar-items`,
   * `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value).
   *
   *
   * This field together with
   * [optimization_objective][google.cloud.retail.v2alpha.Model.optimization_objective]
   * describe model metadata to use to control model training and serving.
   * See https://cloud.google.com/retail/docs/models
   * for more details on what the model metadata control and which combination
   * of parameters are valid. For invalid combinations of parameters (e.g. type
   * = `frequently-bought-together` and optimization_objective = `ctr`), you
   * receive an error 400 if you try to create/update a recommendation with
   * this set of knobs.
   *
   * @generated from field: string type = 7;
   */
  type: string;

  /**
   * Optional. The optimization objective e.g. `cvr`.
   *
   * Currently supported
   * values: `ctr`, `cvr`, `revenue-per-order`.
   *
   *  If not specified, we choose default based on model type.
   * Default depends on type of recommendation:
   *
   * `recommended-for-you` => `ctr`
   *
   * `others-you-may-like` => `ctr`
   *
   * `frequently-bought-together` => `revenue_per_order`
   *
   * This field together with
   * [optimization_objective][google.cloud.retail.v2alpha.Model.type]
   * describe model metadata to use to control model training and serving.
   * See https://cloud.google.com/retail/docs/models
   * for more details on what the model metadata control and which combination
   * of parameters are valid. For invalid combinations of parameters (e.g. type
   * = `frequently-bought-together` and optimization_objective = `ctr`), you
   * receive an error 400 if you try to create/update a recommendation with
   * this set of knobs.
   *
   * @generated from field: string optimization_objective = 8;
   */
  optimizationObjective: string;

  /**
   * Optional. The state of periodic tuning.
   *
   * The period we use is 3 months - to do a
   * one-off tune earlier use the `TuneModel` method. Default value
   * is `PERIODIC_TUNING_ENABLED`.
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.PeriodicTuningState periodic_tuning_state = 11;
   */
  periodicTuningState: Model_PeriodicTuningState;

  /**
   * Output only. The timestamp when the latest successful tune finished.
   *
   * @generated from field: google.protobuf.Timestamp last_tune_time = 12;
   */
  lastTuneTime?: Timestamp;

  /**
   * Output only. The tune operation associated with the model.
   *
   * Can be used to determine if there is an ongoing tune for this
   * recommendation. Empty field implies no tune is goig on.
   *
   * @generated from field: string tuning_operation = 15;
   */
  tuningOperation: string;

  /**
   * Output only. The state of data requirements for this model: `DATA_OK` and
   * `DATA_ERROR`.
   *
   * Recommendation model cannot be trained if the data is in
   * `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even
   * if serving state is `ACTIVE`: models were trained successfully before, but
   * cannot be refreshed because model no longer has sufficient
   * data for training.
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.DataState data_state = 16;
   */
  dataState: Model_DataState;

  /**
   * Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering
   * by attributes is enabled for the model.
   *
   * @generated from field: google.cloud.retail.v2alpha.RecommendationsFilteringOption filtering_option = 18;
   */
  filteringOption: RecommendationsFilteringOption;

  /**
   * Output only. The list of valid serving configs associated with the
   * PageOptimizationConfig.
   *
   * @generated from field: repeated google.cloud.retail.v2alpha.Model.ServingConfigList serving_config_lists = 19;
   */
  servingConfigLists: Model_ServingConfigList[];

  /**
   * Optional. Additional model features config.
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.ModelFeaturesConfig model_features_config = 22;
   */
  modelFeaturesConfig?: Model_ModelFeaturesConfig;
};

/**
 * Describes the message google.cloud.retail.v2alpha.Model.
 * Use `create(ModelSchema)` to create a new message.
 */
export const ModelSchema: GenMessage<Model> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_model, 0);

/**
 * The PageOptimizationConfig for model training.
 *
 * This determines how many panels to optimize for, and which serving
 * configs to consider for each panel.
 * The purpose of this model is to optimize which
 * [ServingConfig][google.cloud.retail.v2alpha.ServingConfig] to show on which
 * panels in way that optimizes the visitors shopping journey.
 *
 * @generated from message google.cloud.retail.v2alpha.Model.PageOptimizationConfig
 */
export type Model_PageOptimizationConfig = Message<"google.cloud.retail.v2alpha.Model.PageOptimizationConfig"> & {
  /**
   * Required. The type of [UserEvent][google.cloud.retail.v2alpha.UserEvent]
   * this page optimization is shown for.
   *
   * Each page has an associated event type - this will be the
   * corresponding event type for the page that the page optimization
   * model is used on.
   *
   * Supported types:
   *
   * * `add-to-cart`: Products being added to cart.
   * * `detail-page-view`: Products detail page viewed.
   * * `home-page-view`: Homepage viewed
   * * `category-page-view`: Homepage viewed
   * * `shopping-cart-page-view`: User viewing a shopping cart.
   *
   * `home-page-view` only allows models with type `recommended-for-you`.
   * All other page_optimization_event_type allow all
   * [Model.types][google.cloud.retail.v2alpha.Model.type].
   *
   * @generated from field: string page_optimization_event_type = 1;
   */
  pageOptimizationEventType: string;

  /**
   * Required. A list of panel configurations.
   *
   * Limit = 5.
   *
   * @generated from field: repeated google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Panel panels = 2;
   */
  panels: Model_PageOptimizationConfig_Panel[];

  /**
   * Optional. How to restrict results across panels e.g. can the same
   * [ServingConfig][google.cloud.retail.v2alpha.ServingConfig] be shown on
   * multiple panels at once.
   *
   * If unspecified, default to `UNIQUE_MODEL_RESTRICTION`.
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Restriction restriction = 3;
   */
  restriction: Model_PageOptimizationConfig_Restriction;
};

/**
 * Describes the message google.cloud.retail.v2alpha.Model.PageOptimizationConfig.
 * Use `create(Model_PageOptimizationConfigSchema)` to create a new message.
 */
export const Model_PageOptimizationConfigSchema: GenMessage<Model_PageOptimizationConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_model, 0, 0);

/**
 * A candidate to consider for a given panel. Currently only
 * [ServingConfig][google.cloud.retail.v2alpha.ServingConfig] are valid
 * candidates.
 *
 * @generated from message google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Candidate
 */
export type Model_PageOptimizationConfig_Candidate = Message<"google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Candidate"> & {
  /**
   * @generated from oneof google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Candidate.candidate
   */
  candidate: {
    /**
     * This has to be a valid
     * [ServingConfig][google.cloud.retail.v2alpha.ServingConfig]
     * identifier. For example, for a ServingConfig with full name:
     * `projects/*\/locations/global/catalogs/default_catalog/servingConfigs/my_candidate_config`,
     * this would be `my_candidate_config`.
     *
     * @generated from field: string serving_config_id = 1;
     */
    value: string;
    case: "servingConfigId";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Candidate.
 * Use `create(Model_PageOptimizationConfig_CandidateSchema)` to create a new message.
 */
export const Model_PageOptimizationConfig_CandidateSchema: GenMessage<Model_PageOptimizationConfig_Candidate> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_model, 0, 0, 0);

/**
 * An individual panel with a list of
 * [ServingConfigs][google.cloud.retail.v2alpha.ServingConfig] to consider
 * for it.
 *
 * @generated from message google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Panel
 */
export type Model_PageOptimizationConfig_Panel = Message<"google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Panel"> & {
  /**
   * Optional. The name to display for the panel.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;

  /**
   * Required. The candidates to consider on the panel.
   *
   * @generated from field: repeated google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Candidate candidates = 2;
   */
  candidates: Model_PageOptimizationConfig_Candidate[];

  /**
   * Required. The default candidate. If the model fails at serving time,
   * we fall back to the default.
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Candidate default_candidate = 3;
   */
  defaultCandidate?: Model_PageOptimizationConfig_Candidate;
};

/**
 * Describes the message google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Panel.
 * Use `create(Model_PageOptimizationConfig_PanelSchema)` to create a new message.
 */
export const Model_PageOptimizationConfig_PanelSchema: GenMessage<Model_PageOptimizationConfig_Panel> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_model, 0, 0, 1);

/**
 * Restrictions of expected returned results.
 *
 * @generated from enum google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Restriction
 */
export enum Model_PageOptimizationConfig_Restriction {
  /**
   * Unspecified value for restriction.
   *
   * @generated from enum value: RESTRICTION_UNSPECIFIED = 0;
   */
  RESTRICTION_UNSPECIFIED = 0,

  /**
   * Allow any [ServingConfig][google.cloud.retail.v2alpha.ServingConfig] to
   * be show on any number of panels.
   *
   * Example:
   *
   * `Panel1 candidates`: pdp_ctr, pdp_cvr, home_page_ctr_no_diversity
   *
   * `Panel2 candidates`: home_page_ctr_no_diversity,
   * home_page_ctr_diversity,
   *  pdp_cvr_no_diversity
   *
   * `Restriction` = NO_RESTRICTION
   *
   * `Valid combinations`:
   *
   *   * <i> (pdp_ctr, home_page_ctr_no_diversity)
   *   * (pdp_ctr, home_page_ctr_diversity)
   *   * (pdp_ctr, pdp_cvr_no_diversity)
   *   * (pdp_cvr, home_page_ctr_no_diversity)
   *   * (pdp_cvr, home_page_ctr_diversity)
   *   * (pdp_cvr, pdp_cvr_no_diversity)
   *   * (home_page_ctr_no_diversity, home_page_ctr_no_diversity)
   *   * (home_page_ctr_no_diversity, home_page_ctr_diversity)
   *   * (home_page_ctr_no_diversity, pdp_cvr_no_diversity) </i>
   *
   * `Invalid combinations`: []
   *
   * @generated from enum value: NO_RESTRICTION = 1;
   */
  NO_RESTRICTION = 1,

  /**
   * Do not allow the same
   * [ServingConfig.name][google.cloud.retail.v2alpha.ServingConfig.name] to
   * be shown on multiple panels.
   *
   * Example:
   *
   * `Panel1 candidates`: <i> pdp_ctr, pdp_cvr, home_page_ctr_no_diversity
   * </i>
   *
   * `Panel2 candidates`: <i> home_page_ctr_no_diversity,
   * home_page_ctr_diversity_low,
   *    pdp_cvr_no_diversity </i>
   *
   * `Restriction` = `UNIQUE_SERVING_CONFIG_RESTRICTION`
   *
   * `Valid combinations`:
   *
   *   * <i> (pdp_ctr, home_page_ctr_no_diversity)
   *   * (pdp_ctr, home_page_ctr_diversity_low)
   *   * (pdp_ctr, pdp_cvr_no_diversity)
   *   * (pdp_ctr, pdp_cvr_no_diversity)
   *   * (pdp_cvr, home_page_ctr_no_diversity)
   *   * (pdp_cvr, home_page_ctr_diversity_low)
   *   * (pdp_cvr, pdp_cvr_no_diversity)
   *   * (home_page_ctr_no_diversity, home_page_ctr_diversity_low)
   *   * (home_page_ctr_no_diversity, pdp_cvr_no_diversity) </i>
   *
   * `Invalid combinations`:
   *
   *  * <i> (home_page_ctr_no_diversity, home_page_ctr_no_diversity) </i>
   *
   * @generated from enum value: UNIQUE_SERVING_CONFIG_RESTRICTION = 2;
   */
  UNIQUE_SERVING_CONFIG_RESTRICTION = 2,

  /**
   * Do not allow multiple
   * [ServingConfigs][google.cloud.retail.v2alpha.ServingConfig] with same
   * [Model.name][google.cloud.retail.v2alpha.Model.name] to be show on on
   * different panels.
   *
   * Example:
   *
   * `Panel1 candidates`: <i> pdp_ctr, pdp_cvr, home_page_ctr_no_diversity
   * </i>
   *
   * `Panel2 candidates`: <i> home_page_ctr_no_diversity,
   * home_page_ctr_diversity_low,
   *  pdp_cvr_no_diversity </i>
   *
   * `Restriction` = `UNIQUE_MODEL_RESTRICTION`
   *
   * `Valid combinations`:
   *
   *  * <i> (pdp_ctr, home_page_ctr_no_diversity)
   *  * (pdp_ctr, home_page_ctr_diversity)
   *  * (pdp_ctr, pdp_cvr_no_diversity)
   *  * (pdp_ctr, pdp_cvr_no_diversity)
   *  * (pdp_cvr, home_page_ctr_no_diversity)
   *  * (pdp_cvr, home_page_ctr_diversity_low)
   *  * (home_page_ctr_no_diversity, pdp_cvr_no_diversity) </i>
   *
   * `Invalid combinations`:
   *
   *  *  <i> (home_page_ctr_no_diversity, home_page_ctr_no_diversity)
   *  * (pdp_cvr, pdp_cvr_no_diversity) </i>
   *
   * @generated from enum value: UNIQUE_MODEL_RESTRICTION = 3;
   */
  UNIQUE_MODEL_RESTRICTION = 3,

  /**
   * Do not allow multiple
   * [ServingConfigs][google.cloud.retail.v2alpha.ServingConfig] with same
   * [Model.type][google.cloud.retail.v2alpha.Model.type] to be shown on
   * different panels.
   *
   * Example:
   *
   * `Panel1 candidates`: <i> pdp_ctr, pdp_cvr, home_page_ctr_no_diversity
   * </i>
   *
   * `Panel2 candidates`: <i> home_page_ctr_no_diversity,
   * home_page_ctr_diversity_low,
   *  pdp_cvr_no_diversity </i>
   *
   * `Restriction` = `UNIQUE_MODEL_RESTRICTION`
   *
   * `Valid combinations`:
   *
   * * <i> (pdp_ctr, home_page_ctr_no_diversity)
   * * (pdp_ctr, home_page_ctr_diversity)
   * * (pdp_cvr, home_page_ctr_no_diversity)
   * *   (pdp_cvr, home_page_ctr_diversity_low)
   * * (home_page_ctr_no_diversity, pdp_cvr_no_diversity) </i>
   *
   * `Invalid combinations`:
   *
   *  *  <i> (pdp_ctr, pdp_cvr_no_diversity)
   *  * (pdp_ctr, pdp_cvr_no_diversity)
   *  * (pdp_cvr, pdp_cvr_no_diversity)
   *  * (home_page_ctr_no_diversity, home_page_ctr_no_diversity)
   *  *  (home_page_ctr_no_diversity, home_page_ctr_diversity) </i>
   *
   * @generated from enum value: UNIQUE_MODEL_TYPE_RESTRICTION = 4;
   */
  UNIQUE_MODEL_TYPE_RESTRICTION = 4,
}

/**
 * Describes the enum google.cloud.retail.v2alpha.Model.PageOptimizationConfig.Restriction.
 */
export const Model_PageOptimizationConfig_RestrictionSchema: GenEnum<Model_PageOptimizationConfig_Restriction> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2alpha_model, 0, 0, 0);

/**
 * Represents an ordered combination of valid serving configs, which
 * can be used for `PAGE_OPTIMIZATION` recommendations.
 *
 * @generated from message google.cloud.retail.v2alpha.Model.ServingConfigList
 */
export type Model_ServingConfigList = Message<"google.cloud.retail.v2alpha.Model.ServingConfigList"> & {
  /**
   * Optional. A set of valid serving configs that may be used for
   * `PAGE_OPTIMIZATION`.
   *
   * @generated from field: repeated string serving_config_ids = 1;
   */
  servingConfigIds: string[];
};

/**
 * Describes the message google.cloud.retail.v2alpha.Model.ServingConfigList.
 * Use `create(Model_ServingConfigListSchema)` to create a new message.
 */
export const Model_ServingConfigListSchema: GenMessage<Model_ServingConfigList> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_model, 0, 1);

/**
 * Additional configs for the frequently-bought-together model type.
 *
 * @generated from message google.cloud.retail.v2alpha.Model.FrequentlyBoughtTogetherFeaturesConfig
 */
export type Model_FrequentlyBoughtTogetherFeaturesConfig = Message<"google.cloud.retail.v2alpha.Model.FrequentlyBoughtTogetherFeaturesConfig"> & {
  /**
   * Optional. Specifies the context of the model when it is used in predict
   * requests. Can only be set for the `frequently-bought-together` type. If
   * it isn't specified, it defaults to
   * [MULTIPLE_CONTEXT_PRODUCTS][google.cloud.retail.v2alpha.Model.ContextProductsType.MULTIPLE_CONTEXT_PRODUCTS].
   *
   * @generated from field: google.cloud.retail.v2alpha.Model.ContextProductsType context_products_type = 2;
   */
  contextProductsType: Model_ContextProductsType;
};

/**
 * Describes the message google.cloud.retail.v2alpha.Model.FrequentlyBoughtTogetherFeaturesConfig.
 * Use `create(Model_FrequentlyBoughtTogetherFeaturesConfigSchema)` to create a new message.
 */
export const Model_FrequentlyBoughtTogetherFeaturesConfigSchema: GenMessage<Model_FrequentlyBoughtTogetherFeaturesConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_model, 0, 2);

/**
 * Additional model features config.
 *
 * @generated from message google.cloud.retail.v2alpha.Model.ModelFeaturesConfig
 */
export type Model_ModelFeaturesConfig = Message<"google.cloud.retail.v2alpha.Model.ModelFeaturesConfig"> & {
  /**
   * @generated from oneof google.cloud.retail.v2alpha.Model.ModelFeaturesConfig.type_dedicated_config
   */
  typeDedicatedConfig: {
    /**
     * Additional configs for frequently-bought-together models.
     *
     * @generated from field: google.cloud.retail.v2alpha.Model.FrequentlyBoughtTogetherFeaturesConfig frequently_bought_together_config = 1;
     */
    value: Model_FrequentlyBoughtTogetherFeaturesConfig;
    case: "frequentlyBoughtTogetherConfig";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.retail.v2alpha.Model.ModelFeaturesConfig.
 * Use `create(Model_ModelFeaturesConfigSchema)` to create a new message.
 */
export const Model_ModelFeaturesConfigSchema: GenMessage<Model_ModelFeaturesConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_model, 0, 3);

/**
 * The serving state of the model.
 *
 * @generated from enum google.cloud.retail.v2alpha.Model.ServingState
 */
export enum Model_ServingState {
  /**
   * Unspecified serving state.
   *
   * @generated from enum value: SERVING_STATE_UNSPECIFIED = 0;
   */
  SERVING_STATE_UNSPECIFIED = 0,

  /**
   * The model is not serving.
   *
   * @generated from enum value: INACTIVE = 1;
   */
  INACTIVE = 1,

  /**
   * The model is serving and can be queried.
   *
   * @generated from enum value: ACTIVE = 2;
   */
  ACTIVE = 2,

  /**
   * The model is trained on tuned hyperparameters and can be
   * queried.
   *
   * @generated from enum value: TUNED = 3;
   */
  TUNED = 3,
}

/**
 * Describes the enum google.cloud.retail.v2alpha.Model.ServingState.
 */
export const Model_ServingStateSchema: GenEnum<Model_ServingState> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2alpha_model, 0, 0);

/**
 * The training state of the model.
 *
 * @generated from enum google.cloud.retail.v2alpha.Model.TrainingState
 */
export enum Model_TrainingState {
  /**
   * Unspecified training state.
   *
   * @generated from enum value: TRAINING_STATE_UNSPECIFIED = 0;
   */
  TRAINING_STATE_UNSPECIFIED = 0,

  /**
   * The model training is paused.
   *
   * @generated from enum value: PAUSED = 1;
   */
  PAUSED = 1,

  /**
   * The model is training.
   *
   * @generated from enum value: TRAINING = 2;
   */
  TRAINING = 2,
}

/**
 * Describes the enum google.cloud.retail.v2alpha.Model.TrainingState.
 */
export const Model_TrainingStateSchema: GenEnum<Model_TrainingState> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2alpha_model, 0, 1);

/**
 * Describes whether periodic tuning is enabled for this model
 * or not. Periodic tuning is scheduled at most every three months. You can
 * start a tuning process manually by using the `TuneModel`
 * method, which starts a tuning process immediately and resets the quarterly
 * schedule. Enabling or disabling periodic tuning does not affect any
 * current tuning processes.
 *
 * @generated from enum google.cloud.retail.v2alpha.Model.PeriodicTuningState
 */
export enum Model_PeriodicTuningState {
  /**
   * Unspecified default value, should never be explicitly set.
   *
   * @generated from enum value: PERIODIC_TUNING_STATE_UNSPECIFIED = 0;
   */
  PERIODIC_TUNING_STATE_UNSPECIFIED = 0,

  /**
   * The model has periodic tuning disabled. Tuning
   * can be reenabled by calling the `EnableModelPeriodicTuning`
   * method or by calling the `TuneModel` method.
   *
   * @generated from enum value: PERIODIC_TUNING_DISABLED = 1;
   */
  PERIODIC_TUNING_DISABLED = 1,

  /**
   * The model cannot be tuned with periodic tuning OR the
   * `TuneModel` method. Hide the options in customer UI and
   * reject any requests through the backend self serve API.
   *
   * @generated from enum value: ALL_TUNING_DISABLED = 3;
   */
  ALL_TUNING_DISABLED = 3,

  /**
   * The model has periodic tuning enabled. Tuning
   * can be disabled by calling the `DisableModelPeriodicTuning`
   * method.
   *
   * @generated from enum value: PERIODIC_TUNING_ENABLED = 2;
   */
  PERIODIC_TUNING_ENABLED = 2,
}

/**
 * Describes the enum google.cloud.retail.v2alpha.Model.PeriodicTuningState.
 */
export const Model_PeriodicTuningStateSchema: GenEnum<Model_PeriodicTuningState> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2alpha_model, 0, 2);

/**
 * Describes whether this model have sufficient training data
 * to be continuously trained.
 *
 * @generated from enum google.cloud.retail.v2alpha.Model.DataState
 */
export enum Model_DataState {
  /**
   * Unspecified default value, should never be explicitly set.
   *
   * @generated from enum value: DATA_STATE_UNSPECIFIED = 0;
   */
  DATA_STATE_UNSPECIFIED = 0,

  /**
   * The model has sufficient training data.
   *
   * @generated from enum value: DATA_OK = 1;
   */
  DATA_OK = 1,

  /**
   * The model does not have sufficient training data. Error
   * messages can be queried via Stackdriver.
   *
   * @generated from enum value: DATA_ERROR = 2;
   */
  DATA_ERROR = 2,
}

/**
 * Describes the enum google.cloud.retail.v2alpha.Model.DataState.
 */
export const Model_DataStateSchema: GenEnum<Model_DataState> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2alpha_model, 0, 3);

/**
 * Use single or multiple context products for recommendations.
 *
 * @generated from enum google.cloud.retail.v2alpha.Model.ContextProductsType
 */
export enum Model_ContextProductsType {
  /**
   * Unspecified default value, should never be explicitly set.
   * Defaults to
   * [MULTIPLE_CONTEXT_PRODUCTS][google.cloud.retail.v2alpha.Model.ContextProductsType.MULTIPLE_CONTEXT_PRODUCTS].
   *
   * @generated from enum value: CONTEXT_PRODUCTS_TYPE_UNSPECIFIED = 0;
   */
  CONTEXT_PRODUCTS_TYPE_UNSPECIFIED = 0,

  /**
   * Use only a single product as context for the recommendation. Typically
   * used on pages like add-to-cart or product details.
   *
   * @generated from enum value: SINGLE_CONTEXT_PRODUCT = 1;
   */
  SINGLE_CONTEXT_PRODUCT = 1,

  /**
   * Use one or multiple products as context for the recommendation. Typically
   * used on shopping cart pages.
   *
   * @generated from enum value: MULTIPLE_CONTEXT_PRODUCTS = 2;
   */
  MULTIPLE_CONTEXT_PRODUCTS = 2,
}

/**
 * Describes the enum google.cloud.retail.v2alpha.Model.ContextProductsType.
 */
export const Model_ContextProductsTypeSchema: GenEnum<Model_ContextProductsType> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2alpha_model, 0, 4);
