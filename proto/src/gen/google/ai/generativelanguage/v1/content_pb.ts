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
// @generated from file google/ai/generativelanguage/v1/content.proto (package google.ai.generativelanguage.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ai/generativelanguage/v1/content.proto.
 */
export const file_google_ai_generativelanguage_v1_content: GenFile = /*@__PURE__*/
  fileDesc("Ci1nb29nbGUvYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlL3YxL2NvbnRlbnQucHJvdG8SH2dvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjEiUgoHQ29udGVudBI0CgVwYXJ0cxgBIAMoCzIlLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjEuUGFydBIRCgRyb2xlGAIgASgJQgPgQQEiXAoEUGFydBIOCgR0ZXh0GAIgASgJSAASPAoLaW5saW5lX2RhdGEYAyABKAsyJS5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxLkJsb2JIAEIGCgRkYXRhIicKBEJsb2ISEQoJbWltZV90eXBlGAEgASgJEgwKBGRhdGEYAiABKAxCkAEKI2NvbS5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxQgxDb250ZW50UHJvdG9QAVpZY2xvdWQuZ29vZ2xlLmNvbS9nby9haS9nZW5lcmF0aXZlbGFuZ3VhZ2UvYXBpdjEvZ2VuZXJhdGl2ZWxhbmd1YWdlcGI7Z2VuZXJhdGl2ZWxhbmd1YWdlcGJiBnByb3RvMw", [file_google_api_field_behavior]);

/**
 * The base structured datatype containing multi-part content of a message.
 *
 * A `Content` includes a `role` field designating the producer of the `Content`
 * and a `parts` field containing multi-part data that contains the content of
 * the message turn.
 *
 * @generated from message google.ai.generativelanguage.v1.Content
 */
export type Content = Message<"google.ai.generativelanguage.v1.Content"> & {
  /**
   * Ordered `Parts` that constitute a single message. Parts may have different
   * MIME types.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1.Part parts = 1;
   */
  parts: Part[];

  /**
   * Optional. The producer of the content. Must be either 'user' or 'model'.
   *
   * Useful to set for multi-turn conversations, otherwise can be left blank
   * or unset.
   *
   * @generated from field: string role = 2;
   */
  role: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1.Content.
 * Use `create(ContentSchema)` to create a new message.
 */
export const ContentSchema: GenMessage<Content> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1_content, 0);

/**
 * A datatype containing media that is part of a multi-part `Content` message.
 *
 * A `Part` consists of data which has an associated datatype. A `Part` can only
 * contain one of the accepted types in `Part.data`.
 *
 * A `Part` must have a fixed IANA MIME type identifying the type and subtype
 * of the media if the `inline_data` field is filled with raw bytes.
 *
 * @generated from message google.ai.generativelanguage.v1.Part
 */
export type Part = Message<"google.ai.generativelanguage.v1.Part"> & {
  /**
   * @generated from oneof google.ai.generativelanguage.v1.Part.data
   */
  data: {
    /**
     * Inline text.
     *
     * @generated from field: string text = 2;
     */
    value: string;
    case: "text";
  } | {
    /**
     * Inline media bytes.
     *
     * @generated from field: google.ai.generativelanguage.v1.Blob inline_data = 3;
     */
    value: Blob;
    case: "inlineData";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ai.generativelanguage.v1.Part.
 * Use `create(PartSchema)` to create a new message.
 */
export const PartSchema: GenMessage<Part> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1_content, 1);

/**
 * Raw media bytes.
 *
 * Text should not be sent as raw bytes, use the 'text' field.
 *
 * @generated from message google.ai.generativelanguage.v1.Blob
 */
export type Blob = Message<"google.ai.generativelanguage.v1.Blob"> & {
  /**
   * The IANA standard MIME type of the source data.
   * Examples:
   *   - image/png
   *   - image/jpeg
   * If an unsupported MIME type is provided, an error will be returned. For a
   * complete list of supported types, see [Supported file
   * formats](https://ai.google.dev/gemini-api/docs/prompting_with_media#supported_file_formats).
   *
   * @generated from field: string mime_type = 1;
   */
  mimeType: string;

  /**
   * Raw bytes for media formats.
   *
   * @generated from field: bytes data = 2;
   */
  data: Uint8Array;
};

/**
 * Describes the message google.ai.generativelanguage.v1.Blob.
 * Use `create(BlobSchema)` to create a new message.
 */
export const BlobSchema: GenMessage<Blob> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1_content, 2);
