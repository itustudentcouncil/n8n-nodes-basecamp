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
// @generated from file google/cloud/aiplatform/v1/schema/trainingjob/definition/automl_text_extraction.proto (package google.cloud.aiplatform.v1.schema.trainingjob.definition, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/schema/trainingjob/definition/automl_text_extraction.proto.
 */
export const file_google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_text_extraction: GenFile = /*@__PURE__*/
  fileDesc("ClVnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9zY2hlbWEvdHJhaW5pbmdqb2IvZGVmaW5pdGlvbi9hdXRvbWxfdGV4dF9leHRyYWN0aW9uLnByb3RvEjhnb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5zY2hlbWEudHJhaW5pbmdqb2IuZGVmaW5pdGlvbiJ8ChRBdXRvTWxUZXh0RXh0cmFjdGlvbhJkCgZpbnB1dHMYASABKAsyVC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5zY2hlbWEudHJhaW5pbmdqb2IuZGVmaW5pdGlvbi5BdXRvTWxUZXh0RXh0cmFjdGlvbklucHV0cyIcChpBdXRvTWxUZXh0RXh0cmFjdGlvbklucHV0c0LwAgo8Y29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLnNjaGVtYS50cmFpbmluZ2pvYi5kZWZpbml0aW9uQhlBdXRvTUxUZXh0RXh0cmFjdGlvblByb3RvUAFaXGNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MS9zY2hlbWEvdHJhaW5pbmdqb2IvZGVmaW5pdGlvbi9kZWZpbml0aW9ucGI7ZGVmaW5pdGlvbnBiqgI4R29vZ2xlLkNsb3VkLkFJUGxhdGZvcm0uVjEuU2NoZW1hLlRyYWluaW5nSm9iLkRlZmluaXRpb27KAjhHb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMVxTY2hlbWFcVHJhaW5pbmdKb2JcRGVmaW5pdGlvbuoCPkdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxOjpTY2hlbWE6OlRyYWluaW5nSm9iOjpEZWZpbml0aW9uYgZwcm90bzM");

/**
 * A TrainingJob that trains and uploads an AutoML Text Extraction Model.
 *
 * @generated from message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlTextExtraction
 */
export type AutoMlTextExtraction = Message<"google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlTextExtraction"> & {
  /**
   * The input parameters of this TrainingJob.
   *
   * @generated from field: google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlTextExtractionInputs inputs = 1;
   */
  inputs?: AutoMlTextExtractionInputs;
};

/**
 * Describes the message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlTextExtraction.
 * Use `create(AutoMlTextExtractionSchema)` to create a new message.
 */
export const AutoMlTextExtractionSchema: GenMessage<AutoMlTextExtraction> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_text_extraction, 0);

/**
 * @generated from message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlTextExtractionInputs
 */
export type AutoMlTextExtractionInputs = Message<"google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlTextExtractionInputs"> & {
};

/**
 * Describes the message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlTextExtractionInputs.
 * Use `create(AutoMlTextExtractionInputsSchema)` to create a new message.
 */
export const AutoMlTextExtractionInputsSchema: GenMessage<AutoMlTextExtractionInputs> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_text_extraction, 1);
