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
// @generated from file google/ai/generativelanguage/v1beta3/discuss_service.proto (package google.ai.generativelanguage.v1beta3, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { CitationMetadata } from "./citation_pb";
import { file_google_ai_generativelanguage_v1beta3_citation } from "./citation_pb";
import type { ContentFilter } from "./safety_pb";
import { file_google_ai_generativelanguage_v1beta3_safety } from "./safety_pb";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message as Message$1 } from "@bufbuild/protobuf";

/**
 * Describes the file google/ai/generativelanguage/v1beta3/discuss_service.proto.
 */
export const file_google_ai_generativelanguage_v1beta3_discuss_service: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlL3YxYmV0YTMvZGlzY3Vzc19zZXJ2aWNlLnByb3RvEiRnb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YTMizgIKFkdlbmVyYXRlTWVzc2FnZVJlcXVlc3QSPgoFbW9kZWwYASABKAlCL+BBAvpBKQonZ2VuZXJhdGl2ZWxhbmd1YWdlLmdvb2dsZWFwaXMuY29tL01vZGVsEkgKBnByb21wdBgCIAEoCzIzLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhMy5NZXNzYWdlUHJvbXB0QgPgQQISHQoLdGVtcGVyYXR1cmUYAyABKAJCA+BBAUgAiAEBEiEKD2NhbmRpZGF0ZV9jb3VudBgEIAEoBUID4EEBSAGIAQESFwoFdG9wX3AYBSABKAJCA+BBAUgCiAEBEhcKBXRvcF9rGAYgASgFQgPgQQFIA4gBAUIOCgxfdGVtcGVyYXR1cmVCEgoQX2NhbmRpZGF0ZV9jb3VudEIICgZfdG9wX3BCCAoGX3RvcF9rIuMBChdHZW5lcmF0ZU1lc3NhZ2VSZXNwb25zZRJBCgpjYW5kaWRhdGVzGAEgAygLMi0uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLk1lc3NhZ2USPwoIbWVzc2FnZXMYAiADKAsyLS5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YTMuTWVzc2FnZRJECgdmaWx0ZXJzGAMgAygLMjMuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLkNvbnRlbnRGaWx0ZXIipwEKB01lc3NhZ2USEwoGYXV0aG9yGAEgASgJQgPgQQESFAoHY29udGVudBgCIAEoCUID4EECElsKEWNpdGF0aW9uX21ldGFkYXRhGAMgASgLMjYuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLkNpdGF0aW9uTWV0YWRhdGFCA+BBA0gAiAEBQhQKEl9jaXRhdGlvbl9tZXRhZGF0YSKxAQoNTWVzc2FnZVByb21wdBIUCgdjb250ZXh0GAEgASgJQgPgQQESRAoIZXhhbXBsZXMYAiADKAsyLS5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YTMuRXhhbXBsZUID4EEBEkQKCG1lc3NhZ2VzGAMgAygLMi0uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLk1lc3NhZ2VCA+BBAiKQAQoHRXhhbXBsZRJBCgVpbnB1dBgBIAEoCzItLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhMy5NZXNzYWdlQgPgQQISQgoGb3V0cHV0GAIgASgLMi0uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLk1lc3NhZ2VCA+BBAiKlAQoZQ291bnRNZXNzYWdlVG9rZW5zUmVxdWVzdBI+CgVtb2RlbBgBIAEoCUIv4EEC+kEpCidnZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vTW9kZWwSSAoGcHJvbXB0GAIgASgLMjMuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLk1lc3NhZ2VQcm9tcHRCA+BBAiIxChpDb3VudE1lc3NhZ2VUb2tlbnNSZXNwb25zZRITCgt0b2tlbl9jb3VudBgBIAEoBTKWBAoORGlzY3Vzc1NlcnZpY2US+wEKD0dlbmVyYXRlTWVzc2FnZRI8Lmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhMy5HZW5lcmF0ZU1lc3NhZ2VSZXF1ZXN0Gj0uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLkdlbmVyYXRlTWVzc2FnZVJlc3BvbnNlImvaQTRtb2RlbCxwcm9tcHQsdGVtcGVyYXR1cmUsY2FuZGlkYXRlX2NvdW50LHRvcF9wLHRvcF9rgtPkkwIuOgEqIikvdjFiZXRhMy97bW9kZWw9bW9kZWxzLyp9OmdlbmVyYXRlTWVzc2FnZRLfAQoSQ291bnRNZXNzYWdlVG9rZW5zEj8uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEzLkNvdW50TWVzc2FnZVRva2Vuc1JlcXVlc3QaQC5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YTMuQ291bnRNZXNzYWdlVG9rZW5zUmVzcG9uc2UiRtpBDG1vZGVsLHByb21wdILT5JMCMToBKiIsL3YxYmV0YTMve21vZGVsPW1vZGVscy8qfTpjb3VudE1lc3NhZ2VUb2tlbnMaJMpBIWdlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbUKhAQooY29tLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhM0ITRGlzY3Vzc1NlcnZpY2VQcm90b1ABWl5jbG91ZC5nb29nbGUuY29tL2dvL2FpL2dlbmVyYXRpdmVsYW5ndWFnZS9hcGl2MWJldGEzL2dlbmVyYXRpdmVsYW5ndWFnZXBiO2dlbmVyYXRpdmVsYW5ndWFnZXBiYgZwcm90bzM", [file_google_ai_generativelanguage_v1beta3_citation, file_google_ai_generativelanguage_v1beta3_safety, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource]);

/**
 * Request to generate a message response from the model.
 *
 * @generated from message google.ai.generativelanguage.v1beta3.GenerateMessageRequest
 */
export type GenerateMessageRequest = Message$1<"google.ai.generativelanguage.v1beta3.GenerateMessageRequest"> & {
  /**
   * Required. The name of the model to use.
   *
   * Format: `name=models/{model}`.
   *
   * @generated from field: string model = 1;
   */
  model: string;

  /**
   * Required. The structured textual input given to the model as a prompt.
   *
   * Given a
   * prompt, the model will return what it predicts is the next message in the
   * discussion.
   *
   * @generated from field: google.ai.generativelanguage.v1beta3.MessagePrompt prompt = 2;
   */
  prompt?: MessagePrompt;

  /**
   * Optional. Controls the randomness of the output.
   *
   * Values can range over `[0.0,1.0]`,
   * inclusive. A value closer to `1.0` will produce responses that are more
   * varied, while a value closer to `0.0` will typically result in
   * less surprising responses from the model.
   *
   * @generated from field: optional float temperature = 3;
   */
  temperature?: number;

  /**
   * Optional. The number of generated response messages to return.
   *
   * This value must be between
   * `[1, 8]`, inclusive. If unset, this will default to `1`.
   *
   * @generated from field: optional int32 candidate_count = 4;
   */
  candidateCount?: number;

  /**
   * Optional. The maximum cumulative probability of tokens to consider when
   * sampling.
   *
   * The model uses combined Top-k and nucleus sampling.
   *
   * Nucleus sampling considers the smallest set of tokens whose probability
   * sum is at least `top_p`.
   *
   * @generated from field: optional float top_p = 5;
   */
  topP?: number;

  /**
   * Optional. The maximum number of tokens to consider when sampling.
   *
   * The model uses combined Top-k and nucleus sampling.
   *
   * Top-k sampling considers the set of `top_k` most probable tokens.
   *
   * @generated from field: optional int32 top_k = 6;
   */
  topK?: number;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta3.GenerateMessageRequest.
 * Use `create(GenerateMessageRequestSchema)` to create a new message.
 */
export const GenerateMessageRequestSchema: GenMessage<GenerateMessageRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 0);

/**
 * The response from the model.
 *
 * This includes candidate messages and
 * conversation history in the form of chronologically-ordered messages.
 *
 * @generated from message google.ai.generativelanguage.v1beta3.GenerateMessageResponse
 */
export type GenerateMessageResponse = Message$1<"google.ai.generativelanguage.v1beta3.GenerateMessageResponse"> & {
  /**
   * Candidate response messages from the model.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta3.Message candidates = 1;
   */
  candidates: Message[];

  /**
   * The conversation history used by the model.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta3.Message messages = 2;
   */
  messages: Message[];

  /**
   * A set of content filtering metadata for the prompt and response
   * text.
   *
   * This indicates which `SafetyCategory`(s) blocked a
   * candidate from this response, the lowest `HarmProbability`
   * that triggered a block, and the HarmThreshold setting for that category.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta3.ContentFilter filters = 3;
   */
  filters: ContentFilter[];
};

/**
 * Describes the message google.ai.generativelanguage.v1beta3.GenerateMessageResponse.
 * Use `create(GenerateMessageResponseSchema)` to create a new message.
 */
export const GenerateMessageResponseSchema: GenMessage<GenerateMessageResponse> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 1);

/**
 * The base unit of structured text.
 *
 * A `Message` includes an `author` and the `content` of
 * the `Message`.
 *
 * The `author` is used to tag messages when they are fed to the
 * model as text.
 *
 * @generated from message google.ai.generativelanguage.v1beta3.Message
 */
export type Message = Message$1<"google.ai.generativelanguage.v1beta3.Message"> & {
  /**
   * Optional. The author of this Message.
   *
   * This serves as a key for tagging
   * the content of this Message when it is fed to the model as text.
   *
   * The author can be any alphanumeric string.
   *
   * @generated from field: string author = 1;
   */
  author: string;

  /**
   * Required. The text content of the structured `Message`.
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * Output only. Citation information for model-generated `content` in this
   * `Message`.
   *
   * If this `Message` was generated as output from the model, this field may be
   * populated with attribution information for any text included in the
   * `content`. This field is used only on output.
   *
   * @generated from field: optional google.ai.generativelanguage.v1beta3.CitationMetadata citation_metadata = 3;
   */
  citationMetadata?: CitationMetadata;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta3.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export const MessageSchema: GenMessage<Message> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 2);

/**
 * All of the structured input text passed to the model as a prompt.
 *
 * A `MessagePrompt` contains a structured set of fields that provide context
 * for the conversation, examples of user input/model output message pairs that
 * prime the model to respond in different ways, and the conversation history
 * or list of messages representing the alternating turns of the conversation
 * between the user and the model.
 *
 * @generated from message google.ai.generativelanguage.v1beta3.MessagePrompt
 */
export type MessagePrompt = Message$1<"google.ai.generativelanguage.v1beta3.MessagePrompt"> & {
  /**
   * Optional. Text that should be provided to the model first to ground the
   * response.
   *
   * If not empty, this `context` will be given to the model first before the
   * `examples` and `messages`. When using a `context` be sure to provide it
   * with every request to maintain continuity.
   *
   * This field can be a description of your prompt to the model to help provide
   * context and guide the responses. Examples: "Translate the phrase from
   * English to French." or "Given a statement, classify the sentiment as happy,
   * sad or neutral."
   *
   * Anything included in this field will take precedence over message history
   * if the total input size exceeds the model's `input_token_limit` and the
   * input request is truncated.
   *
   * @generated from field: string context = 1;
   */
  context: string;

  /**
   * Optional. Examples of what the model should generate.
   *
   * This includes both user input and the response that the model should
   * emulate.
   *
   * These `examples` are treated identically to conversation messages except
   * that they take precedence over the history in `messages`:
   * If the total input size exceeds the model's `input_token_limit` the input
   * will be truncated. Items will be dropped from `messages` before `examples`.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta3.Example examples = 2;
   */
  examples: Example[];

  /**
   * Required. A snapshot of the recent conversation history sorted
   * chronologically.
   *
   * Turns alternate between two authors.
   *
   * If the total input size exceeds the model's `input_token_limit` the input
   * will be truncated: The oldest items will be dropped from `messages`.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta3.Message messages = 3;
   */
  messages: Message[];
};

/**
 * Describes the message google.ai.generativelanguage.v1beta3.MessagePrompt.
 * Use `create(MessagePromptSchema)` to create a new message.
 */
export const MessagePromptSchema: GenMessage<MessagePrompt> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 3);

/**
 * An input/output example used to instruct the Model.
 *
 * It demonstrates how the model should respond or format its response.
 *
 * @generated from message google.ai.generativelanguage.v1beta3.Example
 */
export type Example = Message$1<"google.ai.generativelanguage.v1beta3.Example"> & {
  /**
   * Required. An example of an input `Message` from the user.
   *
   * @generated from field: google.ai.generativelanguage.v1beta3.Message input = 1;
   */
  input?: Message;

  /**
   * Required. An example of what the model should output given the input.
   *
   * @generated from field: google.ai.generativelanguage.v1beta3.Message output = 2;
   */
  output?: Message;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta3.Example.
 * Use `create(ExampleSchema)` to create a new message.
 */
export const ExampleSchema: GenMessage<Example> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 4);

/**
 * Counts the number of tokens in the `prompt` sent to a model.
 *
 * Models may tokenize text differently, so each model may return a different
 * `token_count`.
 *
 * @generated from message google.ai.generativelanguage.v1beta3.CountMessageTokensRequest
 */
export type CountMessageTokensRequest = Message$1<"google.ai.generativelanguage.v1beta3.CountMessageTokensRequest"> & {
  /**
   * Required. The model's resource name. This serves as an ID for the Model to
   * use.
   *
   * This name should match a model name returned by the `ListModels` method.
   *
   * Format: `models/{model}`
   *
   * @generated from field: string model = 1;
   */
  model: string;

  /**
   * Required. The prompt, whose token count is to be returned.
   *
   * @generated from field: google.ai.generativelanguage.v1beta3.MessagePrompt prompt = 2;
   */
  prompt?: MessagePrompt;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta3.CountMessageTokensRequest.
 * Use `create(CountMessageTokensRequestSchema)` to create a new message.
 */
export const CountMessageTokensRequestSchema: GenMessage<CountMessageTokensRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 5);

/**
 * A response from `CountMessageTokens`.
 *
 * It returns the model's `token_count` for the `prompt`.
 *
 * @generated from message google.ai.generativelanguage.v1beta3.CountMessageTokensResponse
 */
export type CountMessageTokensResponse = Message$1<"google.ai.generativelanguage.v1beta3.CountMessageTokensResponse"> & {
  /**
   * The number of tokens that the `model` tokenizes the `prompt` into.
   *
   * Always non-negative.
   *
   * @generated from field: int32 token_count = 1;
   */
  tokenCount: number;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta3.CountMessageTokensResponse.
 * Use `create(CountMessageTokensResponseSchema)` to create a new message.
 */
export const CountMessageTokensResponseSchema: GenMessage<CountMessageTokensResponse> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 6);

/**
 * An API for using Generative Language Models (GLMs) in dialog applications.
 *
 * Also known as large language models (LLMs), this API provides models that
 * are trained for multi-turn dialog.
 *
 * @generated from service google.ai.generativelanguage.v1beta3.DiscussService
 */
export const DiscussService: GenService<{
  /**
   * Generates a response from the model given an input `MessagePrompt`.
   *
   * @generated from rpc google.ai.generativelanguage.v1beta3.DiscussService.GenerateMessage
   */
  generateMessage: {
    methodKind: "unary";
    input: typeof GenerateMessageRequestSchema;
    output: typeof GenerateMessageResponseSchema;
  },
  /**
   * Runs a model's tokenizer on a string and returns the token count.
   *
   * @generated from rpc google.ai.generativelanguage.v1beta3.DiscussService.CountMessageTokens
   */
  countMessageTokens: {
    methodKind: "unary";
    input: typeof CountMessageTokensRequestSchema;
    output: typeof CountMessageTokensResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ai_generativelanguage_v1beta3_discuss_service, 0);
