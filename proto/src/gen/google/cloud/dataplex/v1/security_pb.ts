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
// @generated from file google/cloud/dataplex/v1/security.proto (package google.cloud.dataplex.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dataplex/v1/security.proto.
 */
export const file_google_cloud_dataplex_v1_security: GenFile = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvY2xvdWQvZGF0YXBsZXgvdjEvc2VjdXJpdHkucHJvdG8SGGdvb2dsZS5jbG91ZC5kYXRhcGxleC52MSJVChJSZXNvdXJjZUFjY2Vzc1NwZWMSFAoHcmVhZGVycxgBIAMoCUID4EEBEhQKB3dyaXRlcnMYAiADKAlCA+BBARITCgZvd25lcnMYAyADKAlCA+BBASImCg5EYXRhQWNjZXNzU3BlYxIUCgdyZWFkZXJzGAEgAygJQgPgQQFCaQocY29tLmdvb2dsZS5jbG91ZC5kYXRhcGxleC52MUINU2VjdXJpdHlQcm90b1ABWjhjbG91ZC5nb29nbGUuY29tL2dvL2RhdGFwbGV4L2FwaXYxL2RhdGFwbGV4cGI7ZGF0YXBsZXhwYmIGcHJvdG8z", [file_google_api_field_behavior]);

/**
 * ResourceAccessSpec holds the access control configuration to be enforced
 * on the resources, for example, Cloud Storage bucket, BigQuery dataset,
 * BigQuery table.
 *
 * @generated from message google.cloud.dataplex.v1.ResourceAccessSpec
 */
export type ResourceAccessSpec = Message<"google.cloud.dataplex.v1.ResourceAccessSpec"> & {
  /**
   * Optional. The format of strings follows the pattern followed by IAM in the
   * bindings. user:{email}, serviceAccount:{email} group:{email}.
   * The set of principals to be granted reader role on the resource.
   *
   * @generated from field: repeated string readers = 1;
   */
  readers: string[];

  /**
   * Optional. The set of principals to be granted writer role on the resource.
   *
   * @generated from field: repeated string writers = 2;
   */
  writers: string[];

  /**
   * Optional. The set of principals to be granted owner role on the resource.
   *
   * @generated from field: repeated string owners = 3;
   */
  owners: string[];
};

/**
 * Describes the message google.cloud.dataplex.v1.ResourceAccessSpec.
 * Use `create(ResourceAccessSpecSchema)` to create a new message.
 */
export const ResourceAccessSpecSchema: GenMessage<ResourceAccessSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_dataplex_v1_security, 0);

/**
 * DataAccessSpec holds the access control configuration to be enforced on data
 * stored within resources (eg: rows, columns in BigQuery Tables). When
 * associated with data, the data is only accessible to
 * principals explicitly granted access through the DataAccessSpec. Principals
 * with access to the containing resource are not implicitly granted access.
 *
 * @generated from message google.cloud.dataplex.v1.DataAccessSpec
 */
export type DataAccessSpec = Message<"google.cloud.dataplex.v1.DataAccessSpec"> & {
  /**
   * Optional. The format of strings follows the pattern followed by IAM in the
   * bindings. user:{email}, serviceAccount:{email} group:{email}.
   * The set of principals to be granted reader role on data
   * stored within resources.
   *
   * @generated from field: repeated string readers = 1;
   */
  readers: string[];
};

/**
 * Describes the message google.cloud.dataplex.v1.DataAccessSpec.
 * Use `create(DataAccessSpecSchema)` to create a new message.
 */
export const DataAccessSpecSchema: GenMessage<DataAccessSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_dataplex_v1_security, 1);
