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
// @generated from file google/cloud/websecurityscanner/v1beta/finding_addon.proto (package google.cloud.websecurityscanner.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/websecurityscanner/v1beta/finding_addon.proto.
 */
export const file_google_cloud_websecurityscanner_v1beta_finding_addon: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvY2xvdWQvd2Vic2VjdXJpdHlzY2FubmVyL3YxYmV0YS9maW5kaW5nX2FkZG9uLnByb3RvEiZnb29nbGUuY2xvdWQud2Vic2VjdXJpdHlzY2FubmVyLnYxYmV0YSIqCgRGb3JtEhIKCmFjdGlvbl91cmkYASABKAkSDgoGZmllbGRzGAIgAygJIlEKD091dGRhdGVkTGlicmFyeRIUCgxsaWJyYXJ5X25hbWUYASABKAkSDwoHdmVyc2lvbhgCIAEoCRIXCg9sZWFybl9tb3JlX3VybHMYAyADKAkiPwoRVmlvbGF0aW5nUmVzb3VyY2USFAoMY29udGVudF90eXBlGAEgASgJEhQKDHJlc291cmNlX3VybBgCIAEoCSIvChRWdWxuZXJhYmxlUGFyYW1ldGVycxIXCg9wYXJhbWV0ZXJfbmFtZXMYASADKAki6AEKEVZ1bG5lcmFibGVIZWFkZXJzElEKB2hlYWRlcnMYASADKAsyQC5nb29nbGUuY2xvdWQud2Vic2VjdXJpdHlzY2FubmVyLnYxYmV0YS5WdWxuZXJhYmxlSGVhZGVycy5IZWFkZXISWQoPbWlzc2luZ19oZWFkZXJzGAIgAygLMkAuZ29vZ2xlLmNsb3VkLndlYnNlY3VyaXR5c2Nhbm5lci52MWJldGEuVnVsbmVyYWJsZUhlYWRlcnMuSGVhZGVyGiUKBkhlYWRlchIMCgRuYW1lGAEgASgJEg0KBXZhbHVlGAIgASgJIjIKA1hzcxIUCgxzdGFja190cmFjZXMYASADKAkSFQoNZXJyb3JfbWVzc2FnZRgCIAEoCUKbAgoqY29tLmdvb2dsZS5jbG91ZC53ZWJzZWN1cml0eXNjYW5uZXIudjFiZXRhQhFGaW5kaW5nQWRkb25Qcm90b1ABWlpjbG91ZC5nb29nbGUuY29tL2dvL3dlYnNlY3VyaXR5c2Nhbm5lci9hcGl2MWJldGEvd2Vic2VjdXJpdHlzY2FubmVycGI7d2Vic2VjdXJpdHlzY2FubmVycGKqAiZHb29nbGUuQ2xvdWQuV2ViU2VjdXJpdHlTY2FubmVyLlYxQmV0YcoCJkdvb2dsZVxDbG91ZFxXZWJTZWN1cml0eVNjYW5uZXJcVjFiZXRh6gIpR29vZ2xlOjpDbG91ZDo6V2ViU2VjdXJpdHlTY2FubmVyOjpWMWJldGFiBnByb3RvMw");

/**
 * ! Information about a vulnerability with an HTML.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.Form
 */
export type Form = Message<"google.cloud.websecurityscanner.v1beta.Form"> & {
  /**
   * ! The URI where to send the form when it's submitted.
   *
   * @generated from field: string action_uri = 1;
   */
  actionUri: string;

  /**
   * ! The names of form fields related to the vulnerability.
   *
   * @generated from field: repeated string fields = 2;
   */
  fields: string[];
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.Form.
 * Use `create(FormSchema)` to create a new message.
 */
export const FormSchema: GenMessage<Form> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_finding_addon, 0);

/**
 * Information reported for an outdated library.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.OutdatedLibrary
 */
export type OutdatedLibrary = Message<"google.cloud.websecurityscanner.v1beta.OutdatedLibrary"> & {
  /**
   * The name of the outdated library.
   *
   * @generated from field: string library_name = 1;
   */
  libraryName: string;

  /**
   * The version number.
   *
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * URLs to learn more information about the vulnerabilities in the library.
   *
   * @generated from field: repeated string learn_more_urls = 3;
   */
  learnMoreUrls: string[];
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.OutdatedLibrary.
 * Use `create(OutdatedLibrarySchema)` to create a new message.
 */
export const OutdatedLibrarySchema: GenMessage<OutdatedLibrary> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_finding_addon, 1);

/**
 * Information regarding any resource causing the vulnerability such
 * as JavaScript sources, image, audio files, etc.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.ViolatingResource
 */
export type ViolatingResource = Message<"google.cloud.websecurityscanner.v1beta.ViolatingResource"> & {
  /**
   * The MIME type of this resource.
   *
   * @generated from field: string content_type = 1;
   */
  contentType: string;

  /**
   * URL of this violating resource.
   *
   * @generated from field: string resource_url = 2;
   */
  resourceUrl: string;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.ViolatingResource.
 * Use `create(ViolatingResourceSchema)` to create a new message.
 */
export const ViolatingResourceSchema: GenMessage<ViolatingResource> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_finding_addon, 2);

/**
 * Information about vulnerable request parameters.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.VulnerableParameters
 */
export type VulnerableParameters = Message<"google.cloud.websecurityscanner.v1beta.VulnerableParameters"> & {
  /**
   * The vulnerable parameter names.
   *
   * @generated from field: repeated string parameter_names = 1;
   */
  parameterNames: string[];
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.VulnerableParameters.
 * Use `create(VulnerableParametersSchema)` to create a new message.
 */
export const VulnerableParametersSchema: GenMessage<VulnerableParameters> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_finding_addon, 3);

/**
 * Information about vulnerable or missing HTTP Headers.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.VulnerableHeaders
 */
export type VulnerableHeaders = Message<"google.cloud.websecurityscanner.v1beta.VulnerableHeaders"> & {
  /**
   * List of vulnerable headers.
   *
   * @generated from field: repeated google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header headers = 1;
   */
  headers: VulnerableHeaders_Header[];

  /**
   * List of missing headers.
   *
   * @generated from field: repeated google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header missing_headers = 2;
   */
  missingHeaders: VulnerableHeaders_Header[];
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.VulnerableHeaders.
 * Use `create(VulnerableHeadersSchema)` to create a new message.
 */
export const VulnerableHeadersSchema: GenMessage<VulnerableHeaders> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_finding_addon, 4);

/**
 * Describes a HTTP Header.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header
 */
export type VulnerableHeaders_Header = Message<"google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header"> & {
  /**
   * Header name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Header value.
   *
   * @generated from field: string value = 2;
   */
  value: string;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header.
 * Use `create(VulnerableHeaders_HeaderSchema)` to create a new message.
 */
export const VulnerableHeaders_HeaderSchema: GenMessage<VulnerableHeaders_Header> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_finding_addon, 4, 0);

/**
 * Information reported for an XSS.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.Xss
 */
export type Xss = Message<"google.cloud.websecurityscanner.v1beta.Xss"> & {
  /**
   * Stack traces leading to the point where the XSS occurred.
   *
   * @generated from field: repeated string stack_traces = 1;
   */
  stackTraces: string[];

  /**
   * An error message generated by a javascript breakage.
   *
   * @generated from field: string error_message = 2;
   */
  errorMessage: string;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.Xss.
 * Use `create(XssSchema)` to create a new message.
 */
export const XssSchema: GenMessage<Xss> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_finding_addon, 5);
