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
// @generated from file google/cloud/documentai/v1beta2/document_understanding.proto (package google.cloud.documentai.v1beta2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { DocumentSchema } from "./document_pb";
import { file_google_cloud_documentai_v1beta2_document } from "./document_pb";
import type { BoundingPoly } from "./geometry_pb";
import { file_google_cloud_documentai_v1beta2_geometry } from "./geometry_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/documentai/v1beta2/document_understanding.proto.
 */
export const file_google_cloud_documentai_v1beta2_document_understanding: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvY2xvdWQvZG9jdW1lbnRhaS92MWJldGEyL2RvY3VtZW50X3VuZGVyc3RhbmRpbmcucHJvdG8SH2dvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTIifgocQmF0Y2hQcm9jZXNzRG9jdW1lbnRzUmVxdWVzdBJOCghyZXF1ZXN0cxgBIAMoCzI3Lmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTIuUHJvY2Vzc0RvY3VtZW50UmVxdWVzdEID4EECEg4KBnBhcmVudBgCIAEoCSLfBAoWUHJvY2Vzc0RvY3VtZW50UmVxdWVzdBIOCgZwYXJlbnQYCSABKAkSRwoMaW5wdXRfY29uZmlnGAEgASgLMiwuZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5JbnB1dENvbmZpZ0ID4EECEkQKDW91dHB1dF9jb25maWcYAiABKAsyLS5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEyLk91dHB1dENvbmZpZxIVCg1kb2N1bWVudF90eXBlGAMgASgJElcKF3RhYmxlX2V4dHJhY3Rpb25fcGFyYW1zGAQgASgLMjYuZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5UYWJsZUV4dHJhY3Rpb25QYXJhbXMSVQoWZm9ybV9leHRyYWN0aW9uX3BhcmFtcxgFIAEoCzI1Lmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTIuRm9ybUV4dHJhY3Rpb25QYXJhbXMSWQoYZW50aXR5X2V4dHJhY3Rpb25fcGFyYW1zGAYgASgLMjcuZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5FbnRpdHlFeHRyYWN0aW9uUGFyYW1zEj4KCm9jcl9wYXJhbXMYByABKAsyKi5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEyLk9jclBhcmFtcxJECg1hdXRvbWxfcGFyYW1zGAggASgLMi0uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5BdXRvTWxQYXJhbXMibAodQmF0Y2hQcm9jZXNzRG9jdW1lbnRzUmVzcG9uc2USSwoJcmVzcG9uc2VzGAEgAygLMjguZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5Qcm9jZXNzRG9jdW1lbnRSZXNwb25zZSKjAQoXUHJvY2Vzc0RvY3VtZW50UmVzcG9uc2USQgoMaW5wdXRfY29uZmlnGAEgASgLMiwuZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5JbnB1dENvbmZpZxJECg1vdXRwdXRfY29uZmlnGAIgASgLMi0uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5PdXRwdXRDb25maWciIwoJT2NyUGFyYW1zEhYKDmxhbmd1YWdlX2hpbnRzGAEgAygJIqsBChVUYWJsZUV4dHJhY3Rpb25QYXJhbXMSDwoHZW5hYmxlZBgBIAEoCBJPChF0YWJsZV9ib3VuZF9oaW50cxgCIAMoCzIvLmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTIuVGFibGVCb3VuZEhpbnRCA+BBARIZCgxoZWFkZXJfaGludHMYAyADKAlCA+BBARIVCg1tb2RlbF92ZXJzaW9uGAQgASgJIm8KDlRhYmxlQm91bmRIaW50EhgKC3BhZ2VfbnVtYmVyGAEgASgFQgPgQQESQwoMYm91bmRpbmdfYm94GAIgASgLMi0uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5Cb3VuZGluZ1BvbHkijwEKFEZvcm1FeHRyYWN0aW9uUGFyYW1zEg8KB2VuYWJsZWQYASABKAgSTwoUa2V5X3ZhbHVlX3BhaXJfaGludHMYAiADKAsyMS5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEyLktleVZhbHVlUGFpckhpbnQSFQoNbW9kZWxfdmVyc2lvbhgDIAEoCSI0ChBLZXlWYWx1ZVBhaXJIaW50EgsKA2tleRgBIAEoCRITCgt2YWx1ZV90eXBlcxgCIAMoCSJAChZFbnRpdHlFeHRyYWN0aW9uUGFyYW1zEg8KB2VuYWJsZWQYASABKAgSFQoNbW9kZWxfdmVyc2lvbhgCIAEoCSIdCgxBdXRvTWxQYXJhbXMSDQoFbW9kZWwYASABKAkihQEKC0lucHV0Q29uZmlnEkAKCmdjc19zb3VyY2UYASABKAsyKi5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEyLkdjc1NvdXJjZUgAEhIKCGNvbnRlbnRzGAMgASgMSAASFgoJbWltZV90eXBlGAIgASgJQgPgQQJCCAoGc291cmNlIoIBCgxPdXRwdXRDb25maWcSSgoPZ2NzX2Rlc3RpbmF0aW9uGAEgASgLMi8uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5HY3NEZXN0aW5hdGlvbkgAEhcKD3BhZ2VzX3Blcl9zaGFyZBgCIAEoBUINCgtkZXN0aW5hdGlvbiIdCglHY3NTb3VyY2USEAoDdXJpGAEgASgJQgPgQQIiIgoOR2NzRGVzdGluYXRpb24SEAoDdXJpGAEgASgJQgPgQQIixwIKEU9wZXJhdGlvbk1ldGFkYXRhEkcKBXN0YXRlGAEgASgOMjguZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMi5PcGVyYXRpb25NZXRhZGF0YS5TdGF0ZRIVCg1zdGF0ZV9tZXNzYWdlGAIgASgJEi8KC2NyZWF0ZV90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIvCgt1cGRhdGVfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAicAoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABIMCghBQ0NFUFRFRBABEgsKB1dBSVRJTkcQAhILCgdSVU5OSU5HEAMSDQoJU1VDQ0VFREVEEAQSDQoJQ0FOQ0VMTEVEEAUSCgoGRkFJTEVEEAYyoAUKHERvY3VtZW50VW5kZXJzdGFuZGluZ1NlcnZpY2USvAIKFUJhdGNoUHJvY2Vzc0RvY3VtZW50cxI9Lmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTIuQmF0Y2hQcm9jZXNzRG9jdW1lbnRzUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24ixAHKQTIKHUJhdGNoUHJvY2Vzc0RvY3VtZW50c1Jlc3BvbnNlEhFPcGVyYXRpb25NZXRhZGF0YdpBCHJlcXVlc3RzgtPkkwJ+OgEqWjg6ASoiMy92MWJldGEyL3twYXJlbnQ9cHJvamVjdHMvKn0vZG9jdW1lbnRzOmJhdGNoUHJvY2VzcyI/L3YxYmV0YTIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9kb2N1bWVudHM6YmF0Y2hQcm9jZXNzEvEBCg9Qcm9jZXNzRG9jdW1lbnQSNy5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEyLlByb2Nlc3NEb2N1bWVudFJlcXVlc3QaKS5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEyLkRvY3VtZW50InqC0+STAnQ6ASpaMzoBKiIuL3YxYmV0YTIve3BhcmVudD1wcm9qZWN0cy8qfS9kb2N1bWVudHM6cHJvY2VzcyI6L3YxYmV0YTIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9kb2N1bWVudHM6cHJvY2VzcxpNykEZZG9jdW1lbnRhaS5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1C5gEKI2NvbS5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGEyQg9Eb2N1bWVudEFpUHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9kb2N1bWVudGFpL2FwaXYxYmV0YTIvZG9jdW1lbnRhaXBiO2RvY3VtZW50YWlwYqoCH0dvb2dsZS5DbG91ZC5Eb2N1bWVudEFJLlYxQmV0YTLKAh9Hb29nbGVcQ2xvdWRcRG9jdW1lbnRBSVxWMWJldGEy6gIiR29vZ2xlOjpDbG91ZDo6RG9jdW1lbnRBSTo6VjFiZXRhMmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_cloud_documentai_v1beta2_document, file_google_cloud_documentai_v1beta2_geometry, file_google_longrunning_operations, file_google_protobuf_timestamp]);

/**
 * Request to batch process documents as an asynchronous operation. The output
 * is written to Cloud Storage as JSON in the [Document] format.
 *
 * @generated from message google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest
 */
export type BatchProcessDocumentsRequest = Message<"google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest"> & {
  /**
   * Required. Individual requests for each document.
   *
   * @generated from field: repeated google.cloud.documentai.v1beta2.ProcessDocumentRequest requests = 1;
   */
  requests: ProcessDocumentRequest[];

  /**
   * Target project and location to make a call.
   *
   * Format: `projects/{project-id}/locations/{location-id}`.
   *
   * If no location is specified, a region will be chosen automatically.
   *
   * @generated from field: string parent = 2;
   */
  parent: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest.
 * Use `create(BatchProcessDocumentsRequestSchema)` to create a new message.
 */
export const BatchProcessDocumentsRequestSchema: GenMessage<BatchProcessDocumentsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 0);

/**
 * Request to process one document.
 *
 * @generated from message google.cloud.documentai.v1beta2.ProcessDocumentRequest
 */
export type ProcessDocumentRequest = Message<"google.cloud.documentai.v1beta2.ProcessDocumentRequest"> & {
  /**
   * Target project and location to make a call.
   *
   * Format: `projects/{project-id}/locations/{location-id}`.
   *
   * If no location is specified, a region will be chosen automatically.
   * This field is only populated when used in ProcessDocument method.
   *
   * @generated from field: string parent = 9;
   */
  parent: string;

  /**
   * Required. Information about the input file.
   *
   * @generated from field: google.cloud.documentai.v1beta2.InputConfig input_config = 1;
   */
  inputConfig?: InputConfig;

  /**
   * The desired output location. This field is only needed in
   * BatchProcessDocumentsRequest.
   *
   * @generated from field: google.cloud.documentai.v1beta2.OutputConfig output_config = 2;
   */
  outputConfig?: OutputConfig;

  /**
   * Specifies a known document type for deeper structure detection. Valid
   * values are currently "general" and "invoice". If not provided, "general"\
   * is used as default. If any other value is given, the request is rejected.
   *
   * @generated from field: string document_type = 3;
   */
  documentType: string;

  /**
   * Controls table extraction behavior. If not specified, the system will
   * decide reasonable defaults.
   *
   * @generated from field: google.cloud.documentai.v1beta2.TableExtractionParams table_extraction_params = 4;
   */
  tableExtractionParams?: TableExtractionParams;

  /**
   * Controls form extraction behavior. If not specified, the system will
   * decide reasonable defaults.
   *
   * @generated from field: google.cloud.documentai.v1beta2.FormExtractionParams form_extraction_params = 5;
   */
  formExtractionParams?: FormExtractionParams;

  /**
   * Controls entity extraction behavior. If not specified, the system will
   * decide reasonable defaults.
   *
   * @generated from field: google.cloud.documentai.v1beta2.EntityExtractionParams entity_extraction_params = 6;
   */
  entityExtractionParams?: EntityExtractionParams;

  /**
   * Controls OCR behavior. If not specified, the system will decide reasonable
   * defaults.
   *
   * @generated from field: google.cloud.documentai.v1beta2.OcrParams ocr_params = 7;
   */
  ocrParams?: OcrParams;

  /**
   * Controls AutoML model prediction behavior. AutoMlParams cannot be used
   * together with other Params.
   *
   * @generated from field: google.cloud.documentai.v1beta2.AutoMlParams automl_params = 8;
   */
  automlParams?: AutoMlParams;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.ProcessDocumentRequest.
 * Use `create(ProcessDocumentRequestSchema)` to create a new message.
 */
export const ProcessDocumentRequestSchema: GenMessage<ProcessDocumentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 1);

/**
 * Response to an batch document processing request. This is returned in
 * the LRO Operation after the operation is complete.
 *
 * @generated from message google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse
 */
export type BatchProcessDocumentsResponse = Message<"google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse"> & {
  /**
   * Responses for each individual document.
   *
   * @generated from field: repeated google.cloud.documentai.v1beta2.ProcessDocumentResponse responses = 1;
   */
  responses: ProcessDocumentResponse[];
};

/**
 * Describes the message google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse.
 * Use `create(BatchProcessDocumentsResponseSchema)` to create a new message.
 */
export const BatchProcessDocumentsResponseSchema: GenMessage<BatchProcessDocumentsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 2);

/**
 * Response to a single document processing request.
 *
 * @generated from message google.cloud.documentai.v1beta2.ProcessDocumentResponse
 */
export type ProcessDocumentResponse = Message<"google.cloud.documentai.v1beta2.ProcessDocumentResponse"> & {
  /**
   * Information about the input file. This is the same as the corresponding
   * input config in the request.
   *
   * @generated from field: google.cloud.documentai.v1beta2.InputConfig input_config = 1;
   */
  inputConfig?: InputConfig;

  /**
   * The output location of the parsed responses. The responses are written to
   * this location as JSON-serialized `Document` objects.
   *
   * @generated from field: google.cloud.documentai.v1beta2.OutputConfig output_config = 2;
   */
  outputConfig?: OutputConfig;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.ProcessDocumentResponse.
 * Use `create(ProcessDocumentResponseSchema)` to create a new message.
 */
export const ProcessDocumentResponseSchema: GenMessage<ProcessDocumentResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 3);

/**
 * Parameters to control Optical Character Recognition (OCR) behavior.
 *
 * @generated from message google.cloud.documentai.v1beta2.OcrParams
 */
export type OcrParams = Message<"google.cloud.documentai.v1beta2.OcrParams"> & {
  /**
   * List of languages to use for OCR. In most cases, an empty value
   * yields the best results since it enables automatic language detection. For
   * languages based on the Latin alphabet, setting `language_hints` is not
   * needed. In rare cases, when the language of the text in the image is known,
   * setting a hint will help get better results (although it will be a
   * significant hindrance if the hint is wrong). Document processing returns an
   * error if one or more of the specified languages is not one of the
   * supported languages.
   *
   * @generated from field: repeated string language_hints = 1;
   */
  languageHints: string[];
};

/**
 * Describes the message google.cloud.documentai.v1beta2.OcrParams.
 * Use `create(OcrParamsSchema)` to create a new message.
 */
export const OcrParamsSchema: GenMessage<OcrParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 4);

/**
 * Parameters to control table extraction behavior.
 *
 * @generated from message google.cloud.documentai.v1beta2.TableExtractionParams
 */
export type TableExtractionParams = Message<"google.cloud.documentai.v1beta2.TableExtractionParams"> & {
  /**
   * Whether to enable table extraction.
   *
   * @generated from field: bool enabled = 1;
   */
  enabled: boolean;

  /**
   * Optional. Table bounding box hints that can be provided to complex cases
   * which our algorithm cannot locate the table(s) in.
   *
   * @generated from field: repeated google.cloud.documentai.v1beta2.TableBoundHint table_bound_hints = 2;
   */
  tableBoundHints: TableBoundHint[];

  /**
   * Optional. Reserved for future use.
   *
   * @generated from field: repeated string header_hints = 3;
   */
  headerHints: string[];

  /**
   * Model version of the table extraction system. Default is "builtin/stable".
   * Specify "builtin/latest" for the latest model.
   *
   * @generated from field: string model_version = 4;
   */
  modelVersion: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.TableExtractionParams.
 * Use `create(TableExtractionParamsSchema)` to create a new message.
 */
export const TableExtractionParamsSchema: GenMessage<TableExtractionParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 5);

/**
 * A hint for a table bounding box on the page for table parsing.
 *
 * @generated from message google.cloud.documentai.v1beta2.TableBoundHint
 */
export type TableBoundHint = Message<"google.cloud.documentai.v1beta2.TableBoundHint"> & {
  /**
   * Optional. Page number for multi-paged inputs this hint applies to. If not
   * provided, this hint will apply to all pages by default. This value is
   * 1-based.
   *
   * @generated from field: int32 page_number = 1;
   */
  pageNumber: number;

  /**
   * Bounding box hint for a table on this page. The coordinates must be
   * normalized to [0,1] and the bounding box must be an axis-aligned rectangle.
   *
   * @generated from field: google.cloud.documentai.v1beta2.BoundingPoly bounding_box = 2;
   */
  boundingBox?: BoundingPoly;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.TableBoundHint.
 * Use `create(TableBoundHintSchema)` to create a new message.
 */
export const TableBoundHintSchema: GenMessage<TableBoundHint> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 6);

/**
 * Parameters to control form extraction behavior.
 *
 * @generated from message google.cloud.documentai.v1beta2.FormExtractionParams
 */
export type FormExtractionParams = Message<"google.cloud.documentai.v1beta2.FormExtractionParams"> & {
  /**
   * Whether to enable form extraction.
   *
   * @generated from field: bool enabled = 1;
   */
  enabled: boolean;

  /**
   * Reserved for future use.
   *
   * @generated from field: repeated google.cloud.documentai.v1beta2.KeyValuePairHint key_value_pair_hints = 2;
   */
  keyValuePairHints: KeyValuePairHint[];

  /**
   * Model version of the form extraction system. Default is
   * "builtin/stable". Specify "builtin/latest" for the latest model.
   * For custom form models, specify: "custom/{model_name}". Model name
   * format is "bucket_name/path/to/modeldir" corresponding to
   * "gs://bucket_name/path/to/modeldir" where annotated examples are stored.
   *
   * @generated from field: string model_version = 3;
   */
  modelVersion: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.FormExtractionParams.
 * Use `create(FormExtractionParamsSchema)` to create a new message.
 */
export const FormExtractionParamsSchema: GenMessage<FormExtractionParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 7);

/**
 * Reserved for future use.
 *
 * @generated from message google.cloud.documentai.v1beta2.KeyValuePairHint
 */
export type KeyValuePairHint = Message<"google.cloud.documentai.v1beta2.KeyValuePairHint"> & {
  /**
   * The key text for the hint.
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * Type of the value. This is case-insensitive, and could be one of:
   * ADDRESS, LOCATION, ORGANIZATION, PERSON, PHONE_NUMBER,
   * ID, NUMBER, EMAIL, PRICE, TERMS, DATE, NAME. Types not in this list will
   * be ignored.
   *
   * @generated from field: repeated string value_types = 2;
   */
  valueTypes: string[];
};

/**
 * Describes the message google.cloud.documentai.v1beta2.KeyValuePairHint.
 * Use `create(KeyValuePairHintSchema)` to create a new message.
 */
export const KeyValuePairHintSchema: GenMessage<KeyValuePairHint> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 8);

/**
 * Parameters to control entity extraction behavior.
 *
 * @generated from message google.cloud.documentai.v1beta2.EntityExtractionParams
 */
export type EntityExtractionParams = Message<"google.cloud.documentai.v1beta2.EntityExtractionParams"> & {
  /**
   * Whether to enable entity extraction.
   *
   * @generated from field: bool enabled = 1;
   */
  enabled: boolean;

  /**
   * Model version of the entity extraction. Default is
   * "builtin/stable". Specify "builtin/latest" for the latest model.
   *
   * @generated from field: string model_version = 2;
   */
  modelVersion: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.EntityExtractionParams.
 * Use `create(EntityExtractionParamsSchema)` to create a new message.
 */
export const EntityExtractionParamsSchema: GenMessage<EntityExtractionParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 9);

/**
 * Parameters to control AutoML model prediction behavior.
 *
 * @generated from message google.cloud.documentai.v1beta2.AutoMlParams
 */
export type AutoMlParams = Message<"google.cloud.documentai.v1beta2.AutoMlParams"> & {
  /**
   * Resource name of the AutoML model.
   *
   * Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`.
   *
   * @generated from field: string model = 1;
   */
  model: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.AutoMlParams.
 * Use `create(AutoMlParamsSchema)` to create a new message.
 */
export const AutoMlParamsSchema: GenMessage<AutoMlParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 10);

/**
 * The desired input location and metadata.
 *
 * @generated from message google.cloud.documentai.v1beta2.InputConfig
 */
export type InputConfig = Message<"google.cloud.documentai.v1beta2.InputConfig"> & {
  /**
   * Required.
   *
   * @generated from oneof google.cloud.documentai.v1beta2.InputConfig.source
   */
  source: {
    /**
     * The Google Cloud Storage location to read the input from. This must be a
     * single file.
     *
     * @generated from field: google.cloud.documentai.v1beta2.GcsSource gcs_source = 1;
     */
    value: GcsSource;
    case: "gcsSource";
  } | {
    /**
     * Content in bytes, represented as a stream of bytes.
     * Note: As with all `bytes` fields, proto buffer messages use a pure binary
     * representation, whereas JSON representations use base64.
     *
     * This field only works for synchronous ProcessDocument method.
     *
     * @generated from field: bytes contents = 3;
     */
    value: Uint8Array;
    case: "contents";
  } | { case: undefined; value?: undefined };

  /**
   * Required. Mimetype of the input. Current supported mimetypes are
   * application/pdf, image/tiff, and image/gif. In addition, application/json
   * type is supported for requests with
   * [ProcessDocumentRequest.automl_params][google.cloud.documentai.v1beta2.ProcessDocumentRequest.automl_params]
   * field set. The JSON file needs to be in
   * [Document][google.cloud.documentai.v1beta2.Document] format.
   *
   * @generated from field: string mime_type = 2;
   */
  mimeType: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.InputConfig.
 * Use `create(InputConfigSchema)` to create a new message.
 */
export const InputConfigSchema: GenMessage<InputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 11);

/**
 * The desired output location and metadata.
 *
 * @generated from message google.cloud.documentai.v1beta2.OutputConfig
 */
export type OutputConfig = Message<"google.cloud.documentai.v1beta2.OutputConfig"> & {
  /**
   * Required.
   *
   * @generated from oneof google.cloud.documentai.v1beta2.OutputConfig.destination
   */
  destination: {
    /**
     * The Google Cloud Storage location to write the output to.
     *
     * @generated from field: google.cloud.documentai.v1beta2.GcsDestination gcs_destination = 1;
     */
    value: GcsDestination;
    case: "gcsDestination";
  } | { case: undefined; value?: undefined };

  /**
   * The max number of pages to include into each output Document shard JSON on
   * Google Cloud Storage.
   *
   * The valid range is [1, 100]. If not specified, the default value is 20.
   *
   * For example, for one pdf file with 100 pages, 100 parsed pages will be
   * produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each
   * containing 20 parsed pages will be written under the prefix
   * [OutputConfig.gcs_destination.uri][] and suffix pages-x-to-y.json where
   * x and y are 1-indexed page numbers.
   *
   * Example GCS outputs with 157 pages and pages_per_shard = 50:
   *
   * <prefix>pages-001-to-050.json
   * <prefix>pages-051-to-100.json
   * <prefix>pages-101-to-150.json
   * <prefix>pages-151-to-157.json
   *
   * @generated from field: int32 pages_per_shard = 2;
   */
  pagesPerShard: number;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.OutputConfig.
 * Use `create(OutputConfigSchema)` to create a new message.
 */
export const OutputConfigSchema: GenMessage<OutputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 12);

/**
 * The Google Cloud Storage location where the input file will be read from.
 *
 * @generated from message google.cloud.documentai.v1beta2.GcsSource
 */
export type GcsSource = Message<"google.cloud.documentai.v1beta2.GcsSource"> & {
  /**
   * @generated from field: string uri = 1;
   */
  uri: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.GcsSource.
 * Use `create(GcsSourceSchema)` to create a new message.
 */
export const GcsSourceSchema: GenMessage<GcsSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 13);

/**
 * The Google Cloud Storage location where the output file will be written to.
 *
 * @generated from message google.cloud.documentai.v1beta2.GcsDestination
 */
export type GcsDestination = Message<"google.cloud.documentai.v1beta2.GcsDestination"> & {
  /**
   * @generated from field: string uri = 1;
   */
  uri: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.GcsDestination.
 * Use `create(GcsDestinationSchema)` to create a new message.
 */
export const GcsDestinationSchema: GenMessage<GcsDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 14);

/**
 * Contains metadata for the BatchProcessDocuments operation.
 *
 * @generated from message google.cloud.documentai.v1beta2.OperationMetadata
 */
export type OperationMetadata = Message<"google.cloud.documentai.v1beta2.OperationMetadata"> & {
  /**
   * The state of the current batch processing.
   *
   * @generated from field: google.cloud.documentai.v1beta2.OperationMetadata.State state = 1;
   */
  state: OperationMetadata_State;

  /**
   * A message providing more details about the current state of processing.
   *
   * @generated from field: string state_message = 2;
   */
  stateMessage: string;

  /**
   * The creation time of the operation.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * The last update time of the operation.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 4;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.documentai.v1beta2.OperationMetadata.
 * Use `create(OperationMetadataSchema)` to create a new message.
 */
export const OperationMetadataSchema: GenMessage<OperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta2_document_understanding, 15);

/**
 * @generated from enum google.cloud.documentai.v1beta2.OperationMetadata.State
 */
export enum OperationMetadata_State {
  /**
   * The default value. This value is used if the state is omitted.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Request is received.
   *
   * @generated from enum value: ACCEPTED = 1;
   */
  ACCEPTED = 1,

  /**
   * Request operation is waiting for scheduling.
   *
   * @generated from enum value: WAITING = 2;
   */
  WAITING = 2,

  /**
   * Request is being processed.
   *
   * @generated from enum value: RUNNING = 3;
   */
  RUNNING = 3,

  /**
   * The batch processing completed successfully.
   *
   * @generated from enum value: SUCCEEDED = 4;
   */
  SUCCEEDED = 4,

  /**
   * The batch processing was cancelled.
   *
   * @generated from enum value: CANCELLED = 5;
   */
  CANCELLED = 5,

  /**
   * The batch processing has failed.
   *
   * @generated from enum value: FAILED = 6;
   */
  FAILED = 6,
}

/**
 * Describes the enum google.cloud.documentai.v1beta2.OperationMetadata.State.
 */
export const OperationMetadata_StateSchema: GenEnum<OperationMetadata_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_documentai_v1beta2_document_understanding, 15, 0);

/**
 * Service to parse structured information from unstructured or semi-structured
 * documents using state-of-the-art Google AI such as natural language,
 * computer vision, and translation.
 *
 * @generated from service google.cloud.documentai.v1beta2.DocumentUnderstandingService
 */
export const DocumentUnderstandingService: GenService<{
  /**
   * LRO endpoint to batch process many documents. The output is written
   * to Cloud Storage as JSON in the [Document] format.
   *
   * @generated from rpc google.cloud.documentai.v1beta2.DocumentUnderstandingService.BatchProcessDocuments
   */
  batchProcessDocuments: {
    methodKind: "unary";
    input: typeof BatchProcessDocumentsRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Processes a single document.
   *
   * @generated from rpc google.cloud.documentai.v1beta2.DocumentUnderstandingService.ProcessDocument
   */
  processDocument: {
    methodKind: "unary";
    input: typeof ProcessDocumentRequestSchema;
    output: typeof DocumentSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_documentai_v1beta2_document_understanding, 0);
