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
// @generated from file google/cloud/documentai/v1beta3/document_io.proto (package google.cloud.documentai.v1beta3, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/documentai/v1beta3/document_io.proto.
 */
export const file_google_cloud_documentai_v1beta3_document_io: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvY2xvdWQvZG9jdW1lbnRhaS92MWJldGEzL2RvY3VtZW50X2lvLnByb3RvEh9nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEzIkcKC1Jhd0RvY3VtZW50Eg8KB2NvbnRlbnQYASABKAwSEQoJbWltZV90eXBlGAIgASgJEhQKDGRpc3BsYXlfbmFtZRgDIAEoCSIxCgtHY3NEb2N1bWVudBIPCgdnY3NfdXJpGAEgASgJEhEKCW1pbWVfdHlwZRgCIAEoCSJPCgxHY3NEb2N1bWVudHMSPwoJZG9jdW1lbnRzGAEgAygLMiwuZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMy5HY3NEb2N1bWVudCIjCglHY3NQcmVmaXgSFgoOZ2NzX3VyaV9wcmVmaXgYASABKAkirwEKGUJhdGNoRG9jdW1lbnRzSW5wdXRDb25maWcSQAoKZ2NzX3ByZWZpeBgBIAEoCzIqLmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTMuR2NzUHJlZml4SAASRgoNZ2NzX2RvY3VtZW50cxgCIAEoCzItLmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTMuR2NzRG9jdW1lbnRzSABCCAoGc291cmNlIo8DChREb2N1bWVudE91dHB1dENvbmZpZxJiChFnY3Nfb3V0cHV0X2NvbmZpZxgBIAEoCzJFLmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTMuRG9jdW1lbnRPdXRwdXRDb25maWcuR2NzT3V0cHV0Q29uZmlnSAAagwIKD0djc091dHB1dENvbmZpZxIPCgdnY3NfdXJpGAEgASgJEi4KCmZpZWxkX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEm0KD3NoYXJkaW5nX2NvbmZpZxgDIAEoCzJULmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTMuRG9jdW1lbnRPdXRwdXRDb25maWcuR2NzT3V0cHV0Q29uZmlnLlNoYXJkaW5nQ29uZmlnGkAKDlNoYXJkaW5nQ29uZmlnEhcKD3BhZ2VzX3Blcl9zaGFyZBgBIAEoBRIVCg1wYWdlc19vdmVybGFwGAIgASgFQg0KC2Rlc3RpbmF0aW9uIvwDCglPY3JDb25maWcSPwoFaGludHMYAiABKAsyMC5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEzLk9jckNvbmZpZy5IaW50cxIhChllbmFibGVfbmF0aXZlX3BkZl9wYXJzaW5nGAMgASgIEiMKG2VuYWJsZV9pbWFnZV9xdWFsaXR5X3Njb3JlcxgEIAEoCBIcChRhZHZhbmNlZF9vY3Jfb3B0aW9ucxgFIAMoCRIVCg1lbmFibGVfc3ltYm9sGAYgASgIEh4KEmNvbXB1dGVfc3R5bGVfaW5mbxgIIAEoCEICGAESKQohZGlzYWJsZV9jaGFyYWN0ZXJfYm94ZXNfZGV0ZWN0aW9uGAogASgIElQKEHByZW1pdW1fZmVhdHVyZXMYCyABKAsyOi5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEzLk9jckNvbmZpZy5QcmVtaXVtRmVhdHVyZXMaHwoFSGludHMSFgoObGFuZ3VhZ2VfaGludHMYASADKAkabwoPUHJlbWl1bUZlYXR1cmVzEicKH2VuYWJsZV9zZWxlY3Rpb25fbWFya19kZXRlY3Rpb24YAyABKAgSGgoSY29tcHV0ZV9zdHlsZV9pbmZvGAQgASgIEhcKD2VuYWJsZV9tYXRoX29jchgFIAEoCELmAQojY29tLmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTNCD0RvY3VtZW50SW9Qcm90b1ABWkNjbG91ZC5nb29nbGUuY29tL2dvL2RvY3VtZW50YWkvYXBpdjFiZXRhMy9kb2N1bWVudGFpcGI7ZG9jdW1lbnRhaXBiqgIfR29vZ2xlLkNsb3VkLkRvY3VtZW50QUkuVjFCZXRhM8oCH0dvb2dsZVxDbG91ZFxEb2N1bWVudEFJXFYxYmV0YTPqAiJHb29nbGU6OkNsb3VkOjpEb2N1bWVudEFJOjpWMWJldGEzYgZwcm90bzM", [file_google_protobuf_field_mask]);

/**
 * Payload message of raw document content (bytes).
 *
 * @generated from message google.cloud.documentai.v1beta3.RawDocument
 */
export type RawDocument = Message<"google.cloud.documentai.v1beta3.RawDocument"> & {
  /**
   * Inline document content.
   *
   * @generated from field: bytes content = 1;
   */
  content: Uint8Array;

  /**
   * An IANA MIME type (RFC6838) indicating the nature and format of the
   * [content][google.cloud.documentai.v1beta3.RawDocument.content].
   *
   * @generated from field: string mime_type = 2;
   */
  mimeType: string;

  /**
   * The display name of the document, it supports all Unicode characters except
   * the following:
   * `*`, `?`, `[`, `]`, `%`, `{`, `}`,`'`, `\"`, `,`
   * `~`, `=` and `:` are reserved.
   * If not specified, a default ID is generated.
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta3.RawDocument.
 * Use `create(RawDocumentSchema)` to create a new message.
 */
export const RawDocumentSchema: GenMessage<RawDocument> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 0);

/**
 * Specifies a document stored on Cloud Storage.
 *
 * @generated from message google.cloud.documentai.v1beta3.GcsDocument
 */
export type GcsDocument = Message<"google.cloud.documentai.v1beta3.GcsDocument"> & {
  /**
   * The Cloud Storage object uri.
   *
   * @generated from field: string gcs_uri = 1;
   */
  gcsUri: string;

  /**
   * An IANA MIME type (RFC6838) of the content.
   *
   * @generated from field: string mime_type = 2;
   */
  mimeType: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta3.GcsDocument.
 * Use `create(GcsDocumentSchema)` to create a new message.
 */
export const GcsDocumentSchema: GenMessage<GcsDocument> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 1);

/**
 * Specifies a set of documents on Cloud Storage.
 *
 * @generated from message google.cloud.documentai.v1beta3.GcsDocuments
 */
export type GcsDocuments = Message<"google.cloud.documentai.v1beta3.GcsDocuments"> & {
  /**
   * The list of documents.
   *
   * @generated from field: repeated google.cloud.documentai.v1beta3.GcsDocument documents = 1;
   */
  documents: GcsDocument[];
};

/**
 * Describes the message google.cloud.documentai.v1beta3.GcsDocuments.
 * Use `create(GcsDocumentsSchema)` to create a new message.
 */
export const GcsDocumentsSchema: GenMessage<GcsDocuments> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 2);

/**
 * Specifies all documents on Cloud Storage with a common prefix.
 *
 * @generated from message google.cloud.documentai.v1beta3.GcsPrefix
 */
export type GcsPrefix = Message<"google.cloud.documentai.v1beta3.GcsPrefix"> & {
  /**
   * The URI prefix.
   *
   * @generated from field: string gcs_uri_prefix = 1;
   */
  gcsUriPrefix: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta3.GcsPrefix.
 * Use `create(GcsPrefixSchema)` to create a new message.
 */
export const GcsPrefixSchema: GenMessage<GcsPrefix> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 3);

/**
 * The common config to specify a set of documents used as input.
 *
 * @generated from message google.cloud.documentai.v1beta3.BatchDocumentsInputConfig
 */
export type BatchDocumentsInputConfig = Message<"google.cloud.documentai.v1beta3.BatchDocumentsInputConfig"> & {
  /**
   * The source.
   *
   * @generated from oneof google.cloud.documentai.v1beta3.BatchDocumentsInputConfig.source
   */
  source: {
    /**
     * The set of documents that match the specified Cloud Storage `gcs_prefix`.
     *
     * @generated from field: google.cloud.documentai.v1beta3.GcsPrefix gcs_prefix = 1;
     */
    value: GcsPrefix;
    case: "gcsPrefix";
  } | {
    /**
     * The set of documents individually specified on Cloud Storage.
     *
     * @generated from field: google.cloud.documentai.v1beta3.GcsDocuments gcs_documents = 2;
     */
    value: GcsDocuments;
    case: "gcsDocuments";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.documentai.v1beta3.BatchDocumentsInputConfig.
 * Use `create(BatchDocumentsInputConfigSchema)` to create a new message.
 */
export const BatchDocumentsInputConfigSchema: GenMessage<BatchDocumentsInputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 4);

/**
 * Config that controls the output of documents. All documents will be written
 * as a JSON file.
 *
 * @generated from message google.cloud.documentai.v1beta3.DocumentOutputConfig
 */
export type DocumentOutputConfig = Message<"google.cloud.documentai.v1beta3.DocumentOutputConfig"> & {
  /**
   * The destination of the results.
   *
   * @generated from oneof google.cloud.documentai.v1beta3.DocumentOutputConfig.destination
   */
  destination: {
    /**
     * Output config to write the results to Cloud Storage.
     *
     * @generated from field: google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig gcs_output_config = 1;
     */
    value: DocumentOutputConfig_GcsOutputConfig;
    case: "gcsOutputConfig";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.documentai.v1beta3.DocumentOutputConfig.
 * Use `create(DocumentOutputConfigSchema)` to create a new message.
 */
export const DocumentOutputConfigSchema: GenMessage<DocumentOutputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 5);

/**
 * The configuration used when outputting documents.
 *
 * @generated from message google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig
 */
export type DocumentOutputConfig_GcsOutputConfig = Message<"google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig"> & {
  /**
   * The Cloud Storage uri (a directory) of the output.
   *
   * @generated from field: string gcs_uri = 1;
   */
  gcsUri: string;

  /**
   * Specifies which fields to include in the output documents.
   * Only supports top level document and pages field so it must be in the
   * form of `{document_field_name}` or `pages.{page_field_name}`.
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 2;
   */
  fieldMask?: FieldMask;

  /**
   * Specifies the sharding config for the output document.
   *
   * @generated from field: google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig.ShardingConfig sharding_config = 3;
   */
  shardingConfig?: DocumentOutputConfig_GcsOutputConfig_ShardingConfig;
};

/**
 * Describes the message google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig.
 * Use `create(DocumentOutputConfig_GcsOutputConfigSchema)` to create a new message.
 */
export const DocumentOutputConfig_GcsOutputConfigSchema: GenMessage<DocumentOutputConfig_GcsOutputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 5, 0);

/**
 * The sharding config for the output document.
 *
 * @generated from message google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig.ShardingConfig
 */
export type DocumentOutputConfig_GcsOutputConfig_ShardingConfig = Message<"google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig.ShardingConfig"> & {
  /**
   * The number of pages per shard.
   *
   * @generated from field: int32 pages_per_shard = 1;
   */
  pagesPerShard: number;

  /**
   * The number of overlapping pages between consecutive shards.
   *
   * @generated from field: int32 pages_overlap = 2;
   */
  pagesOverlap: number;
};

/**
 * Describes the message google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig.ShardingConfig.
 * Use `create(DocumentOutputConfig_GcsOutputConfig_ShardingConfigSchema)` to create a new message.
 */
export const DocumentOutputConfig_GcsOutputConfig_ShardingConfigSchema: GenMessage<DocumentOutputConfig_GcsOutputConfig_ShardingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 5, 0, 0);

/**
 * Config for Document OCR.
 *
 * @generated from message google.cloud.documentai.v1beta3.OcrConfig
 */
export type OcrConfig = Message<"google.cloud.documentai.v1beta3.OcrConfig"> & {
  /**
   * Hints for the OCR model.
   *
   * @generated from field: google.cloud.documentai.v1beta3.OcrConfig.Hints hints = 2;
   */
  hints?: OcrConfig_Hints;

  /**
   * Enables special handling for PDFs with existing text information. Results
   * in better text extraction quality in such PDF inputs.
   *
   * @generated from field: bool enable_native_pdf_parsing = 3;
   */
  enableNativePdfParsing: boolean;

  /**
   * Enables intelligent document quality scores after OCR. Can help with
   * diagnosing why OCR responses are of poor quality for a given input.
   * Adds additional latency comparable to regular OCR to the process call.
   *
   * @generated from field: bool enable_image_quality_scores = 4;
   */
  enableImageQualityScores: boolean;

  /**
   * A list of advanced OCR options to further fine-tune OCR behavior. Current
   * valid values are:
   *
   * - `legacy_layout`: a heuristics layout detection algorithm, which serves as
   * an alternative to the current ML-based layout detection algorithm.
   * Customers can choose the best suitable layout algorithm based on their
   * situation.
   *
   * @generated from field: repeated string advanced_ocr_options = 5;
   */
  advancedOcrOptions: string[];

  /**
   * Includes symbol level OCR information if set to true.
   *
   * @generated from field: bool enable_symbol = 6;
   */
  enableSymbol: boolean;

  /**
   * Turn on font identification model and return font style information.
   * Deprecated, use
   * [PremiumFeatures.compute_style_info][google.cloud.documentai.v1beta3.OcrConfig.PremiumFeatures.compute_style_info]
   * instead.
   *
   * @generated from field: bool compute_style_info = 8 [deprecated = true];
   * @deprecated
   */
  computeStyleInfo: boolean;

  /**
   * Turn off character box detector in OCR engine. Character box detection is
   * enabled by default in OCR 2.0 (and later) processors.
   *
   * @generated from field: bool disable_character_boxes_detection = 10;
   */
  disableCharacterBoxesDetection: boolean;

  /**
   * Configurations for premium OCR features.
   *
   * @generated from field: google.cloud.documentai.v1beta3.OcrConfig.PremiumFeatures premium_features = 11;
   */
  premiumFeatures?: OcrConfig_PremiumFeatures;
};

/**
 * Describes the message google.cloud.documentai.v1beta3.OcrConfig.
 * Use `create(OcrConfigSchema)` to create a new message.
 */
export const OcrConfigSchema: GenMessage<OcrConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 6);

/**
 * Hints for OCR Engine
 *
 * @generated from message google.cloud.documentai.v1beta3.OcrConfig.Hints
 */
export type OcrConfig_Hints = Message<"google.cloud.documentai.v1beta3.OcrConfig.Hints"> & {
  /**
   * List of BCP-47 language codes to use for OCR. In most cases, not
   * specifying it yields the best results since it enables automatic language
   * detection. For languages based on the Latin alphabet, setting hints is
   * not needed. In rare cases, when the language of the text in the
   * image is known, setting a hint will help get better results (although it
   * will be a significant hindrance if the hint is wrong).
   *
   * @generated from field: repeated string language_hints = 1;
   */
  languageHints: string[];
};

/**
 * Describes the message google.cloud.documentai.v1beta3.OcrConfig.Hints.
 * Use `create(OcrConfig_HintsSchema)` to create a new message.
 */
export const OcrConfig_HintsSchema: GenMessage<OcrConfig_Hints> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 6, 0);

/**
 * Configurations for premium OCR features.
 *
 * @generated from message google.cloud.documentai.v1beta3.OcrConfig.PremiumFeatures
 */
export type OcrConfig_PremiumFeatures = Message<"google.cloud.documentai.v1beta3.OcrConfig.PremiumFeatures"> & {
  /**
   * Turn on selection mark detector in OCR engine. Only available in OCR 2.0
   * (and later) processors.
   *
   * @generated from field: bool enable_selection_mark_detection = 3;
   */
  enableSelectionMarkDetection: boolean;

  /**
   * Turn on font identification model and return font style information.
   *
   * @generated from field: bool compute_style_info = 4;
   */
  computeStyleInfo: boolean;

  /**
   * Turn on the model that can extract LaTeX math formulas.
   *
   * @generated from field: bool enable_math_ocr = 5;
   */
  enableMathOcr: boolean;
};

/**
 * Describes the message google.cloud.documentai.v1beta3.OcrConfig.PremiumFeatures.
 * Use `create(OcrConfig_PremiumFeaturesSchema)` to create a new message.
 */
export const OcrConfig_PremiumFeaturesSchema: GenMessage<OcrConfig_PremiumFeatures> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta3_document_io, 6, 1);
