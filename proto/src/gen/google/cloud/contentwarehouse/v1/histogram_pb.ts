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
// @generated from file google/cloud/contentwarehouse/v1/histogram.proto (package google.cloud.contentwarehouse.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/contentwarehouse/v1/histogram.proto.
 */
export const file_google_cloud_contentwarehouse_v1_histogram: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvY29udGVudHdhcmVob3VzZS92MS9oaXN0b2dyYW0ucHJvdG8SIGdvb2dsZS5jbG91ZC5jb250ZW50d2FyZWhvdXNlLnYxIqgBCg5IaXN0b2dyYW1RdWVyeRIXCg9oaXN0b2dyYW1fcXVlcnkYASABKAkSIwobcmVxdWlyZV9wcmVjaXNlX3Jlc3VsdF9zaXplGAIgASgIElgKB2ZpbHRlcnMYAyABKAsyQi5nb29nbGUuY2xvdWQuY29udGVudHdhcmVob3VzZS52MS5IaXN0b2dyYW1RdWVyeVByb3BlcnR5TmFtZUZpbHRlckID4EEBIroCCiBIaXN0b2dyYW1RdWVyeVByb3BlcnR5TmFtZUZpbHRlchJNChBkb2N1bWVudF9zY2hlbWFzGAEgAygJQjP6QTAKLmNvbnRlbnR3YXJlaG91c2UuZ29vZ2xlYXBpcy5jb20vRG9jdW1lbnRTY2hlbWESFgoOcHJvcGVydHlfbmFtZXMYAiADKAkSYQoGeV9heGlzGAMgASgOMlEuZ29vZ2xlLmNsb3VkLmNvbnRlbnR3YXJlaG91c2UudjEuSGlzdG9ncmFtUXVlcnlQcm9wZXJ0eU5hbWVGaWx0ZXIuSGlzdG9ncmFtWUF4aXMiTAoOSGlzdG9ncmFtWUF4aXMSHAoYSElTVE9HUkFNX1lBWElTX0RPQ1VNRU5UEAASHAoYSElTVE9HUkFNX1lBWElTX1BST1BFUlRZEAEiuwEKFEhpc3RvZ3JhbVF1ZXJ5UmVzdWx0EhcKD2hpc3RvZ3JhbV9xdWVyeRgBIAEoCRJYCgloaXN0b2dyYW0YAiADKAsyRS5nb29nbGUuY2xvdWQuY29udGVudHdhcmVob3VzZS52MS5IaXN0b2dyYW1RdWVyeVJlc3VsdC5IaXN0b2dyYW1FbnRyeRowCg5IaXN0b2dyYW1FbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAM6AjgBQvYBCiRjb20uZ29vZ2xlLmNsb3VkLmNvbnRlbnR3YXJlaG91c2UudjFCDkhpc3RvZ3JhbVByb3RvUAFaUGNsb3VkLmdvb2dsZS5jb20vZ28vY29udGVudHdhcmVob3VzZS9hcGl2MS9jb250ZW50d2FyZWhvdXNlcGI7Y29udGVudHdhcmVob3VzZXBiqgIgR29vZ2xlLkNsb3VkLkNvbnRlbnRXYXJlaG91c2UuVjHKAiBHb29nbGVcQ2xvdWRcQ29udGVudFdhcmVob3VzZVxWMeoCI0dvb2dsZTo6Q2xvdWQ6OkNvbnRlbnRXYXJlaG91c2U6OlYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * The histogram request.
 *
 * @generated from message google.cloud.contentwarehouse.v1.HistogramQuery
 */
export type HistogramQuery = Message<"google.cloud.contentwarehouse.v1.HistogramQuery"> & {
  /**
   * An expression specifies a histogram request against matching documents for
   * searches.
   *
   * See
   * [SearchDocumentsRequest.histogram_queries][google.cloud.contentwarehouse.v1.SearchDocumentsRequest.histogram_queries]
   * for details about syntax.
   *
   * @generated from field: string histogram_query = 1;
   */
  histogramQuery: string;

  /**
   * Controls if the histogram query requires the return of a precise count.
   * Enable this flag may adversely impact performance.
   *
   * Defaults to true.
   *
   * @generated from field: bool require_precise_result_size = 2;
   */
  requirePreciseResultSize: boolean;

  /**
   * Optional. Filter the result of histogram query by the property names. It
   * only works with histogram query count('FilterableProperties'). It is an
   * optional. It will perform histogram on all the property names for all the
   * document schemas. Setting this field will have a better performance.
   *
   * @generated from field: google.cloud.contentwarehouse.v1.HistogramQueryPropertyNameFilter filters = 3;
   */
  filters?: HistogramQueryPropertyNameFilter;
};

/**
 * Describes the message google.cloud.contentwarehouse.v1.HistogramQuery.
 * Use `create(HistogramQuerySchema)` to create a new message.
 */
export const HistogramQuerySchema: GenMessage<HistogramQuery> = /*@__PURE__*/
  messageDesc(file_google_cloud_contentwarehouse_v1_histogram, 0);

/**
 * @generated from message google.cloud.contentwarehouse.v1.HistogramQueryPropertyNameFilter
 */
export type HistogramQueryPropertyNameFilter = Message<"google.cloud.contentwarehouse.v1.HistogramQueryPropertyNameFilter"> & {
  /**
   * This filter specifies the exact document schema(s)
   * [Document.document_schema_name][google.cloud.contentwarehouse.v1.Document.document_schema_name]
   * to run histogram query against. It is optional. It will perform histogram
   * for property names for all the document schemas if it is not set.
   *
   * At most 10 document schema names are allowed.
   * Format:
   * projects/{project_number}/locations/{location}/documentSchemas/{document_schema_id}.
   *
   * @generated from field: repeated string document_schemas = 1;
   */
  documentSchemas: string[];

  /**
   * It is optional. It will perform histogram for all the property names if it
   * is not set.
   * The properties need to be defined with the is_filterable flag set to
   * true and the name of the property should be in the format:
   * "schemaId.propertyName". The property needs to be defined in the schema.
   * Example: the schema id is abc. Then the name of property for property
   * MORTGAGE_TYPE will be "abc.MORTGAGE_TYPE".
   *
   * @generated from field: repeated string property_names = 2;
   */
  propertyNames: string[];

  /**
   * By default, the y_axis is HISTOGRAM_YAXIS_DOCUMENT if this field is not
   * set.
   *
   * @generated from field: google.cloud.contentwarehouse.v1.HistogramQueryPropertyNameFilter.HistogramYAxis y_axis = 3;
   */
  yAxis: HistogramQueryPropertyNameFilter_HistogramYAxis;
};

/**
 * Describes the message google.cloud.contentwarehouse.v1.HistogramQueryPropertyNameFilter.
 * Use `create(HistogramQueryPropertyNameFilterSchema)` to create a new message.
 */
export const HistogramQueryPropertyNameFilterSchema: GenMessage<HistogramQueryPropertyNameFilter> = /*@__PURE__*/
  messageDesc(file_google_cloud_contentwarehouse_v1_histogram, 1);

/**
 * The result of the histogram query count('FilterableProperties') using
 * HISTOGRAM_YAXIS_DOCUMENT will be:
 * invoice_id: 2
 * address: 1
 * payment_method: 2
 * line_item_description: 1
 *
 * @generated from enum google.cloud.contentwarehouse.v1.HistogramQueryPropertyNameFilter.HistogramYAxis
 */
export enum HistogramQueryPropertyNameFilter_HistogramYAxis {
  /**
   * Count the documents per property name.
   *
   * @generated from enum value: HISTOGRAM_YAXIS_DOCUMENT = 0;
   */
  HISTOGRAM_YAXIS_DOCUMENT = 0,

  /**
   * Count the properties per property name.
   *
   * @generated from enum value: HISTOGRAM_YAXIS_PROPERTY = 1;
   */
  HISTOGRAM_YAXIS_PROPERTY = 1,
}

/**
 * Describes the enum google.cloud.contentwarehouse.v1.HistogramQueryPropertyNameFilter.HistogramYAxis.
 */
export const HistogramQueryPropertyNameFilter_HistogramYAxisSchema: GenEnum<HistogramQueryPropertyNameFilter_HistogramYAxis> = /*@__PURE__*/
  enumDesc(file_google_cloud_contentwarehouse_v1_histogram, 1, 0);

/**
 * Histogram result that matches
 * [HistogramQuery][google.cloud.contentwarehouse.v1.HistogramQuery] specified
 * in searches.
 *
 * @generated from message google.cloud.contentwarehouse.v1.HistogramQueryResult
 */
export type HistogramQueryResult = Message<"google.cloud.contentwarehouse.v1.HistogramQueryResult"> & {
  /**
   * Requested histogram expression.
   *
   * @generated from field: string histogram_query = 1;
   */
  histogramQuery: string;

  /**
   * A map from the values of the facet associated with distinct values to the
   * number of matching entries with corresponding value.
   *
   * The key format is:
   *
   * * (for string histogram) string values stored in the field.
   *
   * @generated from field: map<string, int64> histogram = 2;
   */
  histogram: { [key: string]: bigint };
};

/**
 * Describes the message google.cloud.contentwarehouse.v1.HistogramQueryResult.
 * Use `create(HistogramQueryResultSchema)` to create a new message.
 */
export const HistogramQueryResultSchema: GenMessage<HistogramQueryResult> = /*@__PURE__*/
  messageDesc(file_google_cloud_contentwarehouse_v1_histogram, 2);
