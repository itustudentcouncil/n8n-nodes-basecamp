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
//

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/cloud/documentai/v1beta1/document_understanding.proto (package google.cloud.documentai.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { BoundingPoly } from "./geometry_pb";
import { file_google_cloud_documentai_v1beta1_geometry } from "./geometry_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/documentai/v1beta1/document_understanding.proto.
 */
export const file_google_cloud_documentai_v1beta1_document_understanding: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvY2xvdWQvZG9jdW1lbnRhaS92MWJldGExL2RvY3VtZW50X3VuZGVyc3RhbmRpbmcucHJvdG8SH2dvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTEifgocQmF0Y2hQcm9jZXNzRG9jdW1lbnRzUmVxdWVzdBJOCghyZXF1ZXN0cxgBIAMoCzI3Lmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTEuUHJvY2Vzc0RvY3VtZW50UmVxdWVzdEID4EECEg4KBnBhcmVudBgCIAEoCSKOBAoWUHJvY2Vzc0RvY3VtZW50UmVxdWVzdBJHCgxpbnB1dF9jb25maWcYASABKAsyLC5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGExLklucHV0Q29uZmlnQgPgQQISSQoNb3V0cHV0X2NvbmZpZxgCIAEoCzItLmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTEuT3V0cHV0Q29uZmlnQgPgQQISFQoNZG9jdW1lbnRfdHlwZRgDIAEoCRJXChd0YWJsZV9leHRyYWN0aW9uX3BhcmFtcxgEIAEoCzI2Lmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTEuVGFibGVFeHRyYWN0aW9uUGFyYW1zElUKFmZvcm1fZXh0cmFjdGlvbl9wYXJhbXMYBSABKAsyNS5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGExLkZvcm1FeHRyYWN0aW9uUGFyYW1zElkKGGVudGl0eV9leHRyYWN0aW9uX3BhcmFtcxgGIAEoCzI3Lmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTEuRW50aXR5RXh0cmFjdGlvblBhcmFtcxI+CgpvY3JfcGFyYW1zGAcgASgLMiouZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMS5PY3JQYXJhbXMibAodQmF0Y2hQcm9jZXNzRG9jdW1lbnRzUmVzcG9uc2USSwoJcmVzcG9uc2VzGAEgAygLMjguZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMS5Qcm9jZXNzRG9jdW1lbnRSZXNwb25zZSKjAQoXUHJvY2Vzc0RvY3VtZW50UmVzcG9uc2USQgoMaW5wdXRfY29uZmlnGAEgASgLMiwuZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMS5JbnB1dENvbmZpZxJECg1vdXRwdXRfY29uZmlnGAIgASgLMi0uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMS5PdXRwdXRDb25maWciIwoJT2NyUGFyYW1zEhYKDmxhbmd1YWdlX2hpbnRzGAEgAygJIqsBChVUYWJsZUV4dHJhY3Rpb25QYXJhbXMSDwoHZW5hYmxlZBgBIAEoCBJPChF0YWJsZV9ib3VuZF9oaW50cxgCIAMoCzIvLmdvb2dsZS5jbG91ZC5kb2N1bWVudGFpLnYxYmV0YTEuVGFibGVCb3VuZEhpbnRCA+BBARIZCgxoZWFkZXJfaGludHMYAyADKAlCA+BBARIVCg1tb2RlbF92ZXJzaW9uGAQgASgJIm8KDlRhYmxlQm91bmRIaW50EhgKC3BhZ2VfbnVtYmVyGAEgASgFQgPgQQESQwoMYm91bmRpbmdfYm94GAIgASgLMi0uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMS5Cb3VuZGluZ1BvbHkijwEKFEZvcm1FeHRyYWN0aW9uUGFyYW1zEg8KB2VuYWJsZWQYASABKAgSTwoUa2V5X3ZhbHVlX3BhaXJfaGludHMYAiADKAsyMS5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGExLktleVZhbHVlUGFpckhpbnQSFQoNbW9kZWxfdmVyc2lvbhgDIAEoCSI0ChBLZXlWYWx1ZVBhaXJIaW50EgsKA2tleRgBIAEoCRITCgt2YWx1ZV90eXBlcxgCIAMoCSJAChZFbnRpdHlFeHRyYWN0aW9uUGFyYW1zEg8KB2VuYWJsZWQYASABKAgSFQoNbW9kZWxfdmVyc2lvbhgCIAEoCSJxCgtJbnB1dENvbmZpZxJACgpnY3Nfc291cmNlGAEgASgLMiouZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMS5HY3NTb3VyY2VIABIWCgltaW1lX3R5cGUYAiABKAlCA+BBAkIICgZzb3VyY2UiggEKDE91dHB1dENvbmZpZxJKCg9nY3NfZGVzdGluYXRpb24YASABKAsyLy5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGExLkdjc0Rlc3RpbmF0aW9uSAASFwoPcGFnZXNfcGVyX3NoYXJkGAIgASgFQg0KC2Rlc3RpbmF0aW9uIh0KCUdjc1NvdXJjZRIQCgN1cmkYASABKAlCA+BBAiIiCg5HY3NEZXN0aW5hdGlvbhIQCgN1cmkYASABKAlCA+BBAiLHAgoRT3BlcmF0aW9uTWV0YWRhdGESRwoFc3RhdGUYASABKA4yOC5nb29nbGUuY2xvdWQuZG9jdW1lbnRhaS52MWJldGExLk9wZXJhdGlvbk1ldGFkYXRhLlN0YXRlEhUKDXN0YXRlX21lc3NhZ2UYAiABKAkSLwoLY3JlYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi8KC3VwZGF0ZV90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJwCgVTdGF0ZRIVChFTVEFURV9VTlNQRUNJRklFRBAAEgwKCEFDQ0VQVEVEEAESCwoHV0FJVElORxACEgsKB1JVTk5JTkcQAxINCglTVUNDRUVERUQQBBINCglDQU5DRUxMRUQQBRIKCgZGQUlMRUQQBjKsAwocRG9jdW1lbnRVbmRlcnN0YW5kaW5nU2VydmljZRK8AgoVQmF0Y2hQcm9jZXNzRG9jdW1lbnRzEj0uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMS5CYXRjaFByb2Nlc3NEb2N1bWVudHNSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiLEAcpBMgodQmF0Y2hQcm9jZXNzRG9jdW1lbnRzUmVzcG9uc2USEU9wZXJhdGlvbk1ldGFkYXRh2kEIcmVxdWVzdHOC0+STAn46ASpaODoBKiIzL3YxYmV0YTEve3BhcmVudD1wcm9qZWN0cy8qfS9kb2N1bWVudHM6YmF0Y2hQcm9jZXNzIj8vdjFiZXRhMS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2RvY3VtZW50czpiYXRjaFByb2Nlc3MaTcpBGWRvY3VtZW50YWkuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQuYBCiNjb20uZ29vZ2xlLmNsb3VkLmRvY3VtZW50YWkudjFiZXRhMUIPRG9jdW1lbnRBaVByb3RvUAFaQ2Nsb3VkLmdvb2dsZS5jb20vZ28vZG9jdW1lbnRhaS9hcGl2MWJldGExL2RvY3VtZW50YWlwYjtkb2N1bWVudGFpcGKqAh9Hb29nbGUuQ2xvdWQuRG9jdW1lbnRBSS5WMUJldGExygIfR29vZ2xlXENsb3VkXERvY3VtZW50QUlcVjFiZXRhMeoCIkdvb2dsZTo6Q2xvdWQ6OkRvY3VtZW50QUk6OlYxYmV0YTFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_cloud_documentai_v1beta1_geometry, file_google_longrunning_operations, file_google_protobuf_timestamp]);

/**
 * Request to batch process documents as an asynchronous operation.
 *
 * @generated from message google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
 */
export type BatchProcessDocumentsRequest = Message<"google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest"> & {
  /**
   * Required. Individual requests for each document.
   *
   * @generated from field: repeated google.cloud.documentai.v1beta1.ProcessDocumentRequest requests = 1;
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
 * Describes the message google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest.
 * Use `create(BatchProcessDocumentsRequestSchema)` to create a new message.
 */
export const BatchProcessDocumentsRequestSchema: GenMessage<BatchProcessDocumentsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 0);

/**
 * Request to process one document.
 *
 * @generated from message google.cloud.documentai.v1beta1.ProcessDocumentRequest
 */
export type ProcessDocumentRequest = Message<"google.cloud.documentai.v1beta1.ProcessDocumentRequest"> & {
  /**
   * Required. Information about the input file.
   *
   * @generated from field: google.cloud.documentai.v1beta1.InputConfig input_config = 1;
   */
  inputConfig?: InputConfig;

  /**
   * Required. The desired output location.
   *
   * @generated from field: google.cloud.documentai.v1beta1.OutputConfig output_config = 2;
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
   * @generated from field: google.cloud.documentai.v1beta1.TableExtractionParams table_extraction_params = 4;
   */
  tableExtractionParams?: TableExtractionParams;

  /**
   * Controls form extraction behavior. If not specified, the system will
   * decide reasonable defaults.
   *
   * @generated from field: google.cloud.documentai.v1beta1.FormExtractionParams form_extraction_params = 5;
   */
  formExtractionParams?: FormExtractionParams;

  /**
   * Controls entity extraction behavior. If not specified, the system will
   * decide reasonable defaults.
   *
   * @generated from field: google.cloud.documentai.v1beta1.EntityExtractionParams entity_extraction_params = 6;
   */
  entityExtractionParams?: EntityExtractionParams;

  /**
   * Controls OCR behavior. If not specified, the system will decide reasonable
   * defaults.
   *
   * @generated from field: google.cloud.documentai.v1beta1.OcrParams ocr_params = 7;
   */
  ocrParams?: OcrParams;
};

/**
 * Describes the message google.cloud.documentai.v1beta1.ProcessDocumentRequest.
 * Use `create(ProcessDocumentRequestSchema)` to create a new message.
 */
export const ProcessDocumentRequestSchema: GenMessage<ProcessDocumentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 1);

/**
 * Response to an batch document processing request. This is returned in
 * the LRO Operation after the operation is complete.
 *
 * @generated from message google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
 */
export type BatchProcessDocumentsResponse = Message<"google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse"> & {
  /**
   * Responses for each individual document.
   *
   * @generated from field: repeated google.cloud.documentai.v1beta1.ProcessDocumentResponse responses = 1;
   */
  responses: ProcessDocumentResponse[];
};

/**
 * Describes the message google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse.
 * Use `create(BatchProcessDocumentsResponseSchema)` to create a new message.
 */
export const BatchProcessDocumentsResponseSchema: GenMessage<BatchProcessDocumentsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 2);

/**
 * Response to a single document processing request.
 *
 * @generated from message google.cloud.documentai.v1beta1.ProcessDocumentResponse
 */
export type ProcessDocumentResponse = Message<"google.cloud.documentai.v1beta1.ProcessDocumentResponse"> & {
  /**
   * Information about the input file. This is the same as the corresponding
   * input config in the request.
   *
   * @generated from field: google.cloud.documentai.v1beta1.InputConfig input_config = 1;
   */
  inputConfig?: InputConfig;

  /**
   * The output location of the parsed responses. The responses are written to
   * this location as JSON-serialized `Document` objects.
   *
   * @generated from field: google.cloud.documentai.v1beta1.OutputConfig output_config = 2;
   */
  outputConfig?: OutputConfig;
};

/**
 * Describes the message google.cloud.documentai.v1beta1.ProcessDocumentResponse.
 * Use `create(ProcessDocumentResponseSchema)` to create a new message.
 */
export const ProcessDocumentResponseSchema: GenMessage<ProcessDocumentResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 3);

/**
 * Parameters to control Optical Character Recognition (OCR) behavior.
 *
 * @generated from message google.cloud.documentai.v1beta1.OcrParams
 */
export type OcrParams = Message<"google.cloud.documentai.v1beta1.OcrParams"> & {
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
 * Describes the message google.cloud.documentai.v1beta1.OcrParams.
 * Use `create(OcrParamsSchema)` to create a new message.
 */
export const OcrParamsSchema: GenMessage<OcrParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 4);

/**
 * Parameters to control table extraction behavior.
 *
 * @generated from message google.cloud.documentai.v1beta1.TableExtractionParams
 */
export type TableExtractionParams = Message<"google.cloud.documentai.v1beta1.TableExtractionParams"> & {
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
   * @generated from field: repeated google.cloud.documentai.v1beta1.TableBoundHint table_bound_hints = 2;
   */
  tableBoundHints: TableBoundHint[];

  /**
   * Optional. Table header hints. The extraction will bias towards producing
   * these terms as table headers, which may improve accuracy.
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
 * Describes the message google.cloud.documentai.v1beta1.TableExtractionParams.
 * Use `create(TableExtractionParamsSchema)` to create a new message.
 */
export const TableExtractionParamsSchema: GenMessage<TableExtractionParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 5);

/**
 * A hint for a table bounding box on the page for table parsing.
 *
 * @generated from message google.cloud.documentai.v1beta1.TableBoundHint
 */
export type TableBoundHint = Message<"google.cloud.documentai.v1beta1.TableBoundHint"> & {
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
   * @generated from field: google.cloud.documentai.v1beta1.BoundingPoly bounding_box = 2;
   */
  boundingBox?: BoundingPoly;
};

/**
 * Describes the message google.cloud.documentai.v1beta1.TableBoundHint.
 * Use `create(TableBoundHintSchema)` to create a new message.
 */
export const TableBoundHintSchema: GenMessage<TableBoundHint> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 6);

/**
 * Parameters to control form extraction behavior.
 *
 * @generated from message google.cloud.documentai.v1beta1.FormExtractionParams
 */
export type FormExtractionParams = Message<"google.cloud.documentai.v1beta1.FormExtractionParams"> & {
  /**
   * Whether to enable form extraction.
   *
   * @generated from field: bool enabled = 1;
   */
  enabled: boolean;

  /**
   * User can provide pairs of (key text, value type) to improve the parsing
   * result.
   *
   * For example, if a document has a field called "Date" that holds a date
   * value and a field called "Amount" that may hold either a currency value
   * (e.g., "$500.00") or a simple number value (e.g., "20"), you could use the
   * following hints: [ {"key": "Date", value_types: [ "DATE"]}, {"key":
   * "Amount", "value_types": [ "PRICE", "NUMBER" ]} ]
   *
   * If the value type is unknown, but you want to provide hints for the keys,
   * you can leave the value_types field blank. e.g. {"key": "Date",
   * "value_types": []}
   *
   * @generated from field: repeated google.cloud.documentai.v1beta1.KeyValuePairHint key_value_pair_hints = 2;
   */
  keyValuePairHints: KeyValuePairHint[];

  /**
   * Model version of the form extraction system. Default is
   * "builtin/stable". Specify "builtin/latest" for the latest model.
   *
   * @generated from field: string model_version = 3;
   */
  modelVersion: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta1.FormExtractionParams.
 * Use `create(FormExtractionParamsSchema)` to create a new message.
 */
export const FormExtractionParamsSchema: GenMessage<FormExtractionParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 7);

/**
 * User-provided hint for key value pair.
 *
 * @generated from message google.cloud.documentai.v1beta1.KeyValuePairHint
 */
export type KeyValuePairHint = Message<"google.cloud.documentai.v1beta1.KeyValuePairHint"> & {
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
 * Describes the message google.cloud.documentai.v1beta1.KeyValuePairHint.
 * Use `create(KeyValuePairHintSchema)` to create a new message.
 */
export const KeyValuePairHintSchema: GenMessage<KeyValuePairHint> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 8);

/**
 * Parameters to control entity extraction behavior.
 *
 * @generated from message google.cloud.documentai.v1beta1.EntityExtractionParams
 */
export type EntityExtractionParams = Message<"google.cloud.documentai.v1beta1.EntityExtractionParams"> & {
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
 * Describes the message google.cloud.documentai.v1beta1.EntityExtractionParams.
 * Use `create(EntityExtractionParamsSchema)` to create a new message.
 */
export const EntityExtractionParamsSchema: GenMessage<EntityExtractionParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 9);

/**
 * The desired input location and metadata.
 *
 * @generated from message google.cloud.documentai.v1beta1.InputConfig
 */
export type InputConfig = Message<"google.cloud.documentai.v1beta1.InputConfig"> & {
  /**
   * Required.
   *
   * @generated from oneof google.cloud.documentai.v1beta1.InputConfig.source
   */
  source: {
    /**
     * The Google Cloud Storage location to read the input from. This must be a
     * single file.
     *
     * @generated from field: google.cloud.documentai.v1beta1.GcsSource gcs_source = 1;
     */
    value: GcsSource;
    case: "gcsSource";
  } | { case: undefined; value?: undefined };

  /**
   * Required. Mimetype of the input. Current supported mimetypes are
   * application/pdf, image/tiff, and image/gif.
   *
   * @generated from field: string mime_type = 2;
   */
  mimeType: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta1.InputConfig.
 * Use `create(InputConfigSchema)` to create a new message.
 */
export const InputConfigSchema: GenMessage<InputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 10);

/**
 * The desired output location and metadata.
 *
 * @generated from message google.cloud.documentai.v1beta1.OutputConfig
 */
export type OutputConfig = Message<"google.cloud.documentai.v1beta1.OutputConfig"> & {
  /**
   * Required.
   *
   * @generated from oneof google.cloud.documentai.v1beta1.OutputConfig.destination
   */
  destination: {
    /**
     * The Google Cloud Storage location to write the output to.
     *
     * @generated from field: google.cloud.documentai.v1beta1.GcsDestination gcs_destination = 1;
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
 * Describes the message google.cloud.documentai.v1beta1.OutputConfig.
 * Use `create(OutputConfigSchema)` to create a new message.
 */
export const OutputConfigSchema: GenMessage<OutputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 11);

/**
 * The Google Cloud Storage location where the input file will be read from.
 *
 * @generated from message google.cloud.documentai.v1beta1.GcsSource
 */
export type GcsSource = Message<"google.cloud.documentai.v1beta1.GcsSource"> & {
  /**
   * @generated from field: string uri = 1;
   */
  uri: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta1.GcsSource.
 * Use `create(GcsSourceSchema)` to create a new message.
 */
export const GcsSourceSchema: GenMessage<GcsSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 12);

/**
 * The Google Cloud Storage location where the output file will be written to.
 *
 * @generated from message google.cloud.documentai.v1beta1.GcsDestination
 */
export type GcsDestination = Message<"google.cloud.documentai.v1beta1.GcsDestination"> & {
  /**
   * @generated from field: string uri = 1;
   */
  uri: string;
};

/**
 * Describes the message google.cloud.documentai.v1beta1.GcsDestination.
 * Use `create(GcsDestinationSchema)` to create a new message.
 */
export const GcsDestinationSchema: GenMessage<GcsDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 13);

/**
 * Contains metadata for the BatchProcessDocuments operation.
 *
 * @generated from message google.cloud.documentai.v1beta1.OperationMetadata
 */
export type OperationMetadata = Message<"google.cloud.documentai.v1beta1.OperationMetadata"> & {
  /**
   * The state of the current batch processing.
   *
   * @generated from field: google.cloud.documentai.v1beta1.OperationMetadata.State state = 1;
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
 * Describes the message google.cloud.documentai.v1beta1.OperationMetadata.
 * Use `create(OperationMetadataSchema)` to create a new message.
 */
export const OperationMetadataSchema: GenMessage<OperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_documentai_v1beta1_document_understanding, 14);

/**
 * @generated from enum google.cloud.documentai.v1beta1.OperationMetadata.State
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
 * Describes the enum google.cloud.documentai.v1beta1.OperationMetadata.State.
 */
export const OperationMetadata_StateSchema: GenEnum<OperationMetadata_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_documentai_v1beta1_document_understanding, 14, 0);

/**
 * Service to parse structured information from unstructured or semi-structured
 * documents using state-of-the-art Google AI such as natural language,
 * computer vision, and translation.
 *
 * @generated from service google.cloud.documentai.v1beta1.DocumentUnderstandingService
 */
export const DocumentUnderstandingService: GenService<{
  /**
   * LRO endpoint to batch process many documents.
   *
   * @generated from rpc google.cloud.documentai.v1beta1.DocumentUnderstandingService.BatchProcessDocuments
   */
  batchProcessDocuments: {
    methodKind: "unary";
    input: typeof BatchProcessDocumentsRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_documentai_v1beta1_document_understanding, 0);
