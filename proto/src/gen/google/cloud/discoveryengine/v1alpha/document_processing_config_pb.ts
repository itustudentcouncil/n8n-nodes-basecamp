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
// @generated from file google/cloud/discoveryengine/v1alpha/document_processing_config.proto (package google.cloud.discoveryengine.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1alpha/document_processing_config.proto.
 */
export const file_google_cloud_discoveryengine_v1alpha_document_processing_config: GenFile = /*@__PURE__*/
  fileDesc("CkVnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxYWxwaGEvZG9jdW1lbnRfcHJvY2Vzc2luZ19jb25maWcucHJvdG8SJGdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYSLUDAoYRG9jdW1lbnRQcm9jZXNzaW5nQ29uZmlnEgwKBG5hbWUYASABKAkSZgoPY2h1bmtpbmdfY29uZmlnGAMgASgLMk0uZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkRvY3VtZW50UHJvY2Vzc2luZ0NvbmZpZy5DaHVua2luZ0NvbmZpZxJsChZkZWZhdWx0X3BhcnNpbmdfY29uZmlnGAQgASgLMkwuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkRvY3VtZW50UHJvY2Vzc2luZ0NvbmZpZy5QYXJzaW5nQ29uZmlnEnwKGHBhcnNpbmdfY29uZmlnX292ZXJyaWRlcxgFIAMoCzJaLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5Eb2N1bWVudFByb2Nlc3NpbmdDb25maWcuUGFyc2luZ0NvbmZpZ092ZXJyaWRlc0VudHJ5GoQCCg5DaHVua2luZ0NvbmZpZxKPAQocbGF5b3V0X2Jhc2VkX2NodW5raW5nX2NvbmZpZxgBIAEoCzJnLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5Eb2N1bWVudFByb2Nlc3NpbmdDb25maWcuQ2h1bmtpbmdDb25maWcuTGF5b3V0QmFzZWRDaHVua2luZ0NvbmZpZ0gAGlIKGUxheW91dEJhc2VkQ2h1bmtpbmdDb25maWcSEgoKY2h1bmtfc2l6ZRgBIAEoBRIhChlpbmNsdWRlX2FuY2VzdG9yX2hlYWRpbmdzGAIgASgIQgwKCmNodW5rX21vZGUaswQKDVBhcnNpbmdDb25maWcSgwEKFmRpZ2l0YWxfcGFyc2luZ19jb25maWcYASABKAsyYS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuRG9jdW1lbnRQcm9jZXNzaW5nQ29uZmlnLlBhcnNpbmdDb25maWcuRGlnaXRhbFBhcnNpbmdDb25maWdIABJ7ChJvY3JfcGFyc2luZ19jb25maWcYAiABKAsyXS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuRG9jdW1lbnRQcm9jZXNzaW5nQ29uZmlnLlBhcnNpbmdDb25maWcuT2NyUGFyc2luZ0NvbmZpZ0gAEoEBChVsYXlvdXRfcGFyc2luZ19jb25maWcYAyABKAsyYC5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuRG9jdW1lbnRQcm9jZXNzaW5nQ29uZmlnLlBhcnNpbmdDb25maWcuTGF5b3V0UGFyc2luZ0NvbmZpZ0gAGhYKFERpZ2l0YWxQYXJzaW5nQ29uZmlnGlMKEE9jclBhcnNpbmdDb25maWcSJgoaZW5oYW5jZWRfZG9jdW1lbnRfZWxlbWVudHMYASADKAlCAhgBEhcKD3VzZV9uYXRpdmVfdGV4dBgCIAEoCBoVChNMYXlvdXRQYXJzaW5nQ29uZmlnQhcKFXR5cGVfZGVkaWNhdGVkX2NvbmZpZxqLAQobUGFyc2luZ0NvbmZpZ092ZXJyaWRlc0VudHJ5EgsKA2tleRgBIAEoCRJbCgV2YWx1ZRgCIAEoCzJMLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5Eb2N1bWVudFByb2Nlc3NpbmdDb25maWcuUGFyc2luZ0NvbmZpZzoCOAE6igLqQYYCCjdkaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vRG9jdW1lbnRQcm9jZXNzaW5nQ29uZmlnElhwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vZGF0YVN0b3Jlcy97ZGF0YV9zdG9yZX0vZG9jdW1lbnRQcm9jZXNzaW5nQ29uZmlnEnFwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vY29sbGVjdGlvbnMve2NvbGxlY3Rpb259L2RhdGFTdG9yZXMve2RhdGFfc3RvcmV9L2RvY3VtZW50UHJvY2Vzc2luZ0NvbmZpZ0KpAgooY29tLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYUIdRG9jdW1lbnRQcm9jZXNzaW5nQ29uZmlnUHJvdG9QAVpSY2xvdWQuZ29vZ2xlLmNvbS9nby9kaXNjb3ZlcnllbmdpbmUvYXBpdjFhbHBoYS9kaXNjb3ZlcnllbmdpbmVwYjtkaXNjb3ZlcnllbmdpbmVwYqICD0RJU0NPVkVSWUVOR0lORaoCJEdvb2dsZS5DbG91ZC5EaXNjb3ZlcnlFbmdpbmUuVjFBbHBoYcoCJEdvb2dsZVxDbG91ZFxEaXNjb3ZlcnlFbmdpbmVcVjFhbHBoYeoCJ0dvb2dsZTo6Q2xvdWQ6OkRpc2NvdmVyeUVuZ2luZTo6VjFhbHBoYWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * A singleton resource of
 * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore]. It's empty when
 * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore] is created, which
 * defaults to digital parser. The first call to
 * [DataStoreService.UpdateDocumentProcessingConfig][google.cloud.discoveryengine.v1alpha.DataStoreService.UpdateDocumentProcessingConfig]
 * method will initialize the config.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig
 */
export type DocumentProcessingConfig = Message<"google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig"> & {
  /**
   * The full resource name of the Document Processing Config.
   * Format:
   * `projects/*\/locations/*\/collections/*\/dataStores/*\/documentProcessingConfig`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Whether chunking mode is enabled.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig chunking_config = 3;
   */
  chunkingConfig?: DocumentProcessingConfig_ChunkingConfig;

  /**
   * Configurations for default Document parser.
   * If not specified, we will configure it as default DigitalParsingConfig, and
   * the default parsing config will be applied to all file types for Document
   * parsing.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig default_parsing_config = 4;
   */
  defaultParsingConfig?: DocumentProcessingConfig_ParsingConfig;

  /**
   * Map from file type to override the default parsing configuration based on
   * the file type. Supported keys:
   *
   * * `pdf`: Override parsing config for PDF files, either digital parsing, ocr
   * parsing or layout parsing is supported.
   * * `html`: Override parsing config for HTML files, only digital parsing and
   * layout parsing are supported.
   * * `docx`: Override parsing config for DOCX files, only digital parsing and
   * layout parsing are supported.
   * * `pptx`: Override parsing config for PPTX files, only digital parsing and
   * layout parsing are supported.
   * * `xlsx`: Override parsing config for XLSX files, only digital parsing and
   * layout parsing are supported.
   *
   * @generated from field: map<string, google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig> parsing_config_overrides = 5;
   */
  parsingConfigOverrides: { [key: string]: DocumentProcessingConfig_ParsingConfig };
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.
 * Use `create(DocumentProcessingConfigSchema)` to create a new message.
 */
export const DocumentProcessingConfigSchema: GenMessage<DocumentProcessingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document_processing_config, 0);

/**
 * Configuration for chunking config.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig
 */
export type DocumentProcessingConfig_ChunkingConfig = Message<"google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig"> & {
  /**
   * Additional configs that defines the behavior of the chunking.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig.chunk_mode
   */
  chunkMode: {
    /**
     * Configuration for the layout based chunking.
     *
     * @generated from field: google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig.LayoutBasedChunkingConfig layout_based_chunking_config = 1;
     */
    value: DocumentProcessingConfig_ChunkingConfig_LayoutBasedChunkingConfig;
    case: "layoutBasedChunkingConfig";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig.
 * Use `create(DocumentProcessingConfig_ChunkingConfigSchema)` to create a new message.
 */
export const DocumentProcessingConfig_ChunkingConfigSchema: GenMessage<DocumentProcessingConfig_ChunkingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document_processing_config, 0, 0);

/**
 * Configuration for the layout based chunking.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig.LayoutBasedChunkingConfig
 */
export type DocumentProcessingConfig_ChunkingConfig_LayoutBasedChunkingConfig = Message<"google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig.LayoutBasedChunkingConfig"> & {
  /**
   * The token size limit for each chunk.
   *
   * Supported values: 100-500 (inclusive).
   * Default value: 500.
   *
   * @generated from field: int32 chunk_size = 1;
   */
  chunkSize: number;

  /**
   * Whether to include appending different levels of headings to chunks
   * from the middle of the document to prevent context loss.
   *
   * Default value: False.
   *
   * @generated from field: bool include_ancestor_headings = 2;
   */
  includeAncestorHeadings: boolean;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ChunkingConfig.LayoutBasedChunkingConfig.
 * Use `create(DocumentProcessingConfig_ChunkingConfig_LayoutBasedChunkingConfigSchema)` to create a new message.
 */
export const DocumentProcessingConfig_ChunkingConfig_LayoutBasedChunkingConfigSchema: GenMessage<DocumentProcessingConfig_ChunkingConfig_LayoutBasedChunkingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document_processing_config, 0, 0, 0);

/**
 * Related configurations applied to a specific type of document parser.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig
 */
export type DocumentProcessingConfig_ParsingConfig = Message<"google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig"> & {
  /**
   * Configs for document processing types.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.type_dedicated_config
   */
  typeDedicatedConfig: {
    /**
     * Configurations applied to digital parser.
     *
     * @generated from field: google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.DigitalParsingConfig digital_parsing_config = 1;
     */
    value: DocumentProcessingConfig_ParsingConfig_DigitalParsingConfig;
    case: "digitalParsingConfig";
  } | {
    /**
     * Configurations applied to OCR parser. Currently it only applies to
     * PDFs.
     *
     * @generated from field: google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.OcrParsingConfig ocr_parsing_config = 2;
     */
    value: DocumentProcessingConfig_ParsingConfig_OcrParsingConfig;
    case: "ocrParsingConfig";
  } | {
    /**
     * Configurations applied to layout parser.
     *
     * @generated from field: google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.LayoutParsingConfig layout_parsing_config = 3;
     */
    value: DocumentProcessingConfig_ParsingConfig_LayoutParsingConfig;
    case: "layoutParsingConfig";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.
 * Use `create(DocumentProcessingConfig_ParsingConfigSchema)` to create a new message.
 */
export const DocumentProcessingConfig_ParsingConfigSchema: GenMessage<DocumentProcessingConfig_ParsingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document_processing_config, 0, 1);

/**
 * The digital parsing configurations for documents.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.DigitalParsingConfig
 */
export type DocumentProcessingConfig_ParsingConfig_DigitalParsingConfig = Message<"google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.DigitalParsingConfig"> & {
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.DigitalParsingConfig.
 * Use `create(DocumentProcessingConfig_ParsingConfig_DigitalParsingConfigSchema)` to create a new message.
 */
export const DocumentProcessingConfig_ParsingConfig_DigitalParsingConfigSchema: GenMessage<DocumentProcessingConfig_ParsingConfig_DigitalParsingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document_processing_config, 0, 1, 0);

/**
 * The OCR parsing configurations for documents.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.OcrParsingConfig
 */
export type DocumentProcessingConfig_ParsingConfig_OcrParsingConfig = Message<"google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.OcrParsingConfig"> & {
  /**
   * [DEPRECATED] This field is deprecated. To use the additional enhanced
   * document elements processing, please switch to `layout_parsing_config`.
   *
   * @generated from field: repeated string enhanced_document_elements = 1 [deprecated = true];
   * @deprecated
   */
  enhancedDocumentElements: string[];

  /**
   * If true, will use native text instead of OCR text on pages containing
   * native text.
   *
   * @generated from field: bool use_native_text = 2;
   */
  useNativeText: boolean;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.OcrParsingConfig.
 * Use `create(DocumentProcessingConfig_ParsingConfig_OcrParsingConfigSchema)` to create a new message.
 */
export const DocumentProcessingConfig_ParsingConfig_OcrParsingConfigSchema: GenMessage<DocumentProcessingConfig_ParsingConfig_OcrParsingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document_processing_config, 0, 1, 1);

/**
 * The layout parsing configurations for documents.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.LayoutParsingConfig
 */
export type DocumentProcessingConfig_ParsingConfig_LayoutParsingConfig = Message<"google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.LayoutParsingConfig"> & {
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DocumentProcessingConfig.ParsingConfig.LayoutParsingConfig.
 * Use `create(DocumentProcessingConfig_ParsingConfig_LayoutParsingConfigSchema)` to create a new message.
 */
export const DocumentProcessingConfig_ParsingConfig_LayoutParsingConfigSchema: GenMessage<DocumentProcessingConfig_ParsingConfig_LayoutParsingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document_processing_config, 0, 1, 2);
