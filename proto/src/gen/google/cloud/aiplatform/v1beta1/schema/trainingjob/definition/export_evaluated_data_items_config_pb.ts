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
// @generated from file google/cloud/aiplatform/v1beta1/schema/trainingjob/definition/export_evaluated_data_items_config.proto (package google.cloud.aiplatform.v1beta1.schema.trainingjob.definition, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/schema/trainingjob/definition/export_evaluated_data_items_config.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config: GenFile = /*@__PURE__*/
  fileDesc("CmZnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL3NjaGVtYS90cmFpbmluZ2pvYi9kZWZpbml0aW9uL2V4cG9ydF9ldmFsdWF0ZWRfZGF0YV9pdGVtc19jb25maWcucHJvdG8SPWdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuc2NoZW1hLnRyYWluaW5nam9iLmRlZmluaXRpb24iYwoeRXhwb3J0RXZhbHVhdGVkRGF0YUl0ZW1zQ29uZmlnEiAKGGRlc3RpbmF0aW9uX2JpZ3F1ZXJ5X3VyaRgBIAEoCRIfChdvdmVycmlkZV9leGlzdGluZ190YWJsZRgCIAEoCEKTAwpBY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuc2NoZW1hLnRyYWluaW5nam9iLmRlZmluaXRpb25CI0V4cG9ydEV2YWx1YXRlZERhdGFJdGVtc0NvbmZpZ1Byb3RvUAFaYWNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MWJldGExL3NjaGVtYS90cmFpbmluZ2pvYi9kZWZpbml0aW9uL2RlZmluaXRpb25wYjtkZWZpbml0aW9ucGKqAj1Hb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMUJldGExLlNjaGVtYS5UcmFpbmluZ0pvYi5EZWZpbml0aW9uygI9R29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjFiZXRhMVxTY2hlbWFcVHJhaW5pbmdKb2JcRGVmaW5pdGlvbuoCQ0dvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYmV0YTE6OlNjaGVtYTo6VHJhaW5pbmdKb2I6OkRlZmluaXRpb25iBnByb3RvMw");

/**
 * Configuration for exporting test set predictions to a BigQuery table.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.schema.trainingjob.definition.ExportEvaluatedDataItemsConfig
 */
export type ExportEvaluatedDataItemsConfig = Message<"google.cloud.aiplatform.v1beta1.schema.trainingjob.definition.ExportEvaluatedDataItemsConfig"> & {
  /**
   * URI of desired destination BigQuery table. Expected format:
   * bq://<project_id>:<dataset_id>:<table>
   *
   * If not specified, then results are exported to the following auto-created
   * BigQuery table:
   * <project_id>:export_evaluated_examples_<model_name>_<yyyy_MM_dd'T'HH_mm_ss_SSS'Z'>.evaluated_examples
   *
   * @generated from field: string destination_bigquery_uri = 1;
   */
  destinationBigqueryUri: string;

  /**
   * If true and an export destination is specified, then the contents of the
   * destination are overwritten. Otherwise, if the export destination already
   * exists, then the export operation fails.
   *
   * @generated from field: bool override_existing_table = 2;
   */
  overrideExistingTable: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.schema.trainingjob.definition.ExportEvaluatedDataItemsConfig.
 * Use `create(ExportEvaluatedDataItemsConfigSchema)` to create a new message.
 */
export const ExportEvaluatedDataItemsConfigSchema: GenMessage<ExportEvaluatedDataItemsConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config, 0);
