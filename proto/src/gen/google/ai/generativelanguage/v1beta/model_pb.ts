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
// @generated from file google/ai/generativelanguage/v1beta/model.proto (package google.ai.generativelanguage.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ai/generativelanguage/v1beta/model.proto.
 */
export const file_google_ai_generativelanguage_v1beta_model: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlL3YxYmV0YS9tb2RlbC5wcm90bxIjZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEiqgMKBU1vZGVsEhEKBG5hbWUYASABKAlCA+BBAhIaCg1iYXNlX21vZGVsX2lkGAIgASgJQgPgQQISFAoHdmVyc2lvbhgDIAEoCUID4EECEhQKDGRpc3BsYXlfbmFtZRgEIAEoCRITCgtkZXNjcmlwdGlvbhgFIAEoCRIZChFpbnB1dF90b2tlbl9saW1pdBgGIAEoBRIaChJvdXRwdXRfdG9rZW5fbGltaXQYByABKAUSJAocc3VwcG9ydGVkX2dlbmVyYXRpb25fbWV0aG9kcxgIIAMoCRIYCgt0ZW1wZXJhdHVyZRgJIAEoAkgAiAEBEhwKD21heF90ZW1wZXJhdHVyZRgNIAEoAkgBiAEBEhIKBXRvcF9wGAogASgCSAKIAQESEgoFdG9wX2sYCyABKAVIA4gBATo86kE5CidnZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vTW9kZWwSDm1vZGVscy97bW9kZWx9Qg4KDF90ZW1wZXJhdHVyZUISChBfbWF4X3RlbXBlcmF0dXJlQggKBl90b3BfcEIICgZfdG9wX2tClgEKJ2NvbS5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YUIKTW9kZWxQcm90b1ABWl1jbG91ZC5nb29nbGUuY29tL2dvL2FpL2dlbmVyYXRpdmVsYW5ndWFnZS9hcGl2MWJldGEvZ2VuZXJhdGl2ZWxhbmd1YWdlcGI7Z2VuZXJhdGl2ZWxhbmd1YWdlcGJiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * Information about a Generative Language Model.
 *
 * @generated from message google.ai.generativelanguage.v1beta.Model
 */
export type Model = Message<"google.ai.generativelanguage.v1beta.Model"> & {
  /**
   * Required. The resource name of the `Model`. Refer to [Model
   * variants](https://ai.google.dev/gemini-api/docs/models/gemini#model-variations)
   * for all allowed values.
   *
   * Format: `models/{model}` with a `{model}` naming convention of:
   *
   * * "{base_model_id}-{version}"
   *
   * Examples:
   *
   * * `models/gemini-1.5-flash-001`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The name of the base model, pass this to the generation request.
   *
   * Examples:
   *
   * * `gemini-1.5-flash`
   *
   * @generated from field: string base_model_id = 2;
   */
  baseModelId: string;

  /**
   * Required. The version number of the model.
   *
   * This represents the major version (`1.0` or `1.5`)
   *
   * @generated from field: string version = 3;
   */
  version: string;

  /**
   * The human-readable name of the model. E.g. "Gemini 1.5 Flash".
   *
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   *
   * @generated from field: string display_name = 4;
   */
  displayName: string;

  /**
   * A short description of the model.
   *
   * @generated from field: string description = 5;
   */
  description: string;

  /**
   * Maximum number of input tokens allowed for this model.
   *
   * @generated from field: int32 input_token_limit = 6;
   */
  inputTokenLimit: number;

  /**
   * Maximum number of output tokens available for this model.
   *
   * @generated from field: int32 output_token_limit = 7;
   */
  outputTokenLimit: number;

  /**
   * The model's supported generation methods.
   *
   * The corresponding API method names are defined as Pascal case
   * strings, such as `generateMessage` and `generateContent`.
   *
   * @generated from field: repeated string supported_generation_methods = 8;
   */
  supportedGenerationMethods: string[];

  /**
   * Controls the randomness of the output.
   *
   * Values can range over `[0.0,max_temperature]`, inclusive. A higher value
   * will produce responses that are more varied, while a value closer to `0.0`
   * will typically result in less surprising responses from the model.
   * This value specifies default to be used by the backend while making the
   * call to the model.
   *
   * @generated from field: optional float temperature = 9;
   */
  temperature?: number;

  /**
   * The maximum temperature this model can use.
   *
   * @generated from field: optional float max_temperature = 13;
   */
  maxTemperature?: number;

  /**
   * For [Nucleus
   * sampling](https://ai.google.dev/gemini-api/docs/prompting-strategies#top-p).
   *
   * Nucleus sampling considers the smallest set of tokens whose probability
   * sum is at least `top_p`.
   * This value specifies default to be used by the backend while making the
   * call to the model.
   *
   * @generated from field: optional float top_p = 10;
   */
  topP?: number;

  /**
   * For Top-k sampling.
   *
   * Top-k sampling considers the set of `top_k` most probable tokens.
   * This value specifies default to be used by the backend while making the
   * call to the model.
   * If empty, indicates the model doesn't use top-k sampling, and `top_k` isn't
   * allowed as a generation parameter.
   *
   * @generated from field: optional int32 top_k = 11;
   */
  topK?: number;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.Model.
 * Use `create(ModelSchema)` to create a new message.
 */
export const ModelSchema: GenMessage<Model> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_model, 0);
