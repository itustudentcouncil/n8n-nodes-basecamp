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
// @generated from file google/ai/generativelanguage/v1/model_service.proto (package google.ai.generativelanguage.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Model, ModelSchema } from "./model_pb";
import { file_google_ai_generativelanguage_v1_model } from "./model_pb";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ai/generativelanguage/v1/model_service.proto.
 */
export const file_google_ai_generativelanguage_v1_model_service: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlL3YxL21vZGVsX3NlcnZpY2UucHJvdG8SH2dvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjEiUAoPR2V0TW9kZWxSZXF1ZXN0Ej0KBG5hbWUYASABKAlCL+BBAvpBKQonZ2VuZXJhdGl2ZWxhbmd1YWdlLmdvb2dsZWFwaXMuY29tL01vZGVsIjoKEUxpc3RNb2RlbHNSZXF1ZXN0EhEKCXBhZ2Vfc2l6ZRgCIAEoBRISCgpwYWdlX3Rva2VuGAMgASgJImUKEkxpc3RNb2RlbHNSZXNwb25zZRI2CgZtb2RlbHMYASADKAsyJi5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxLk1vZGVsEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCTLiAgoMTW9kZWxTZXJ2aWNlEogBCghHZXRNb2RlbBIwLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjEuR2V0TW9kZWxSZXF1ZXN0GiYuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MS5Nb2RlbCIi2kEEbmFtZYLT5JMCFRITL3YxL3tuYW1lPW1vZGVscy8qfRKgAQoKTGlzdE1vZGVscxIyLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjEuTGlzdE1vZGVsc1JlcXVlc3QaMy5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxLkxpc3RNb2RlbHNSZXNwb25zZSIp2kEUcGFnZV9zaXplLHBhZ2VfdG9rZW6C0+STAgwSCi92MS9tb2RlbHMaJMpBIWdlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbUKVAQojY29tLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFCEU1vZGVsU2VydmljZVByb3RvUAFaWWNsb3VkLmdvb2dsZS5jb20vZ28vYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlL2FwaXYxL2dlbmVyYXRpdmVsYW5ndWFnZXBiO2dlbmVyYXRpdmVsYW5ndWFnZXBiYgZwcm90bzM", [file_google_ai_generativelanguage_v1_model, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource]);

/**
 * Request for getting information about a specific Model.
 *
 * @generated from message google.ai.generativelanguage.v1.GetModelRequest
 */
export type GetModelRequest = Message<"google.ai.generativelanguage.v1.GetModelRequest"> & {
  /**
   * Required. The resource name of the model.
   *
   * This name should match a model name returned by the `ListModels` method.
   *
   * Format: `models/{model}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1.GetModelRequest.
 * Use `create(GetModelRequestSchema)` to create a new message.
 */
export const GetModelRequestSchema: GenMessage<GetModelRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1_model_service, 0);

/**
 * Request for listing all Models.
 *
 * @generated from message google.ai.generativelanguage.v1.ListModelsRequest
 */
export type ListModelsRequest = Message<"google.ai.generativelanguage.v1.ListModelsRequest"> & {
  /**
   * The maximum number of `Models` to return (per page).
   *
   * If unspecified, 50 models will be returned per page.
   * This method returns at most 1000 models per page, even if you pass a larger
   * page_size.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A page token, received from a previous `ListModels` call.
   *
   * Provide the `page_token` returned by one request as an argument to the next
   * request to retrieve the next page.
   *
   * When paginating, all other parameters provided to `ListModels` must match
   * the call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1.ListModelsRequest.
 * Use `create(ListModelsRequestSchema)` to create a new message.
 */
export const ListModelsRequestSchema: GenMessage<ListModelsRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1_model_service, 1);

/**
 * Response from `ListModel` containing a paginated list of Models.
 *
 * @generated from message google.ai.generativelanguage.v1.ListModelsResponse
 */
export type ListModelsResponse = Message<"google.ai.generativelanguage.v1.ListModelsResponse"> & {
  /**
   * The returned Models.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1.Model models = 1;
   */
  models: Model[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   *
   * If this field is omitted, there are no more pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1.ListModelsResponse.
 * Use `create(ListModelsResponseSchema)` to create a new message.
 */
export const ListModelsResponseSchema: GenMessage<ListModelsResponse> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1_model_service, 2);

/**
 * Provides methods for getting metadata information about Generative Models.
 *
 * @generated from service google.ai.generativelanguage.v1.ModelService
 */
export const ModelService: GenService<{
  /**
   * Gets information about a specific `Model` such as its version number, token
   * limits,
   * [parameters](https://ai.google.dev/gemini-api/docs/models/generative-models#model-parameters)
   * and other metadata. Refer to the [Gemini models
   * guide](https://ai.google.dev/gemini-api/docs/models/gemini) for detailed
   * model information.
   *
   * @generated from rpc google.ai.generativelanguage.v1.ModelService.GetModel
   */
  getModel: {
    methodKind: "unary";
    input: typeof GetModelRequestSchema;
    output: typeof ModelSchema;
  },
  /**
   * Lists the [`Model`s](https://ai.google.dev/gemini-api/docs/models/gemini)
   * available through the Gemini API.
   *
   * @generated from rpc google.ai.generativelanguage.v1.ModelService.ListModels
   */
  listModels: {
    methodKind: "unary";
    input: typeof ListModelsRequestSchema;
    output: typeof ListModelsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ai_generativelanguage_v1_model_service, 0);
