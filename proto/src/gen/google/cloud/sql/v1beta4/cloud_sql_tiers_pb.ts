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
// @generated from file google/cloud/sql/v1beta4/cloud_sql_tiers.proto (package google.cloud.sql.v1beta4, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/sql/v1beta4/cloud_sql_tiers.proto.
 */
export const file_google_cloud_sql_v1beta4_cloud_sql_tiers: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvY2xvdWQvc3FsL3YxYmV0YTQvY2xvdWRfc3FsX3RpZXJzLnByb3RvEhhnb29nbGUuY2xvdWQuc3FsLnYxYmV0YTQiJgoTU3FsVGllcnNMaXN0UmVxdWVzdBIPCgdwcm9qZWN0GAEgASgJIlAKEVRpZXJzTGlzdFJlc3BvbnNlEgwKBGtpbmQYASABKAkSLQoFaXRlbXMYAiADKAsyHi5nb29nbGUuY2xvdWQuc3FsLnYxYmV0YTQuVGllciJTCgRUaWVyEgwKBHRpZXIYASABKAkSCwoDUkFNGAIgASgDEgwKBGtpbmQYAyABKAkSEgoKRGlza19RdW90YRgEIAEoAxIOCgZyZWdpb24YBSADKAkyowIKD1NxbFRpZXJzU2VydmljZRKRAQoETGlzdBItLmdvb2dsZS5jbG91ZC5zcWwudjFiZXRhNC5TcWxUaWVyc0xpc3RSZXF1ZXN0GisuZ29vZ2xlLmNsb3VkLnNxbC52MWJldGE0LlRpZXJzTGlzdFJlc3BvbnNlIi2C0+STAicSJS9zcWwvdjFiZXRhNC9wcm9qZWN0cy97cHJvamVjdH0vdGllcnMafMpBF3NxbGFkbWluLmdvb2dsZWFwaXMuY29t0kFfaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NxbHNlcnZpY2UuYWRtaW5CZAocY29tLmdvb2dsZS5jbG91ZC5zcWwudjFiZXRhNEISQ2xvdWRTcWxUaWVyc1Byb3RvUAFaLmNsb3VkLmdvb2dsZS5jb20vZ28vc3FsL2FwaXYxYmV0YTQvc3FscGI7c3FscGJiBnByb3RvMw", [file_google_api_annotations, file_google_api_client]);

/**
 * @generated from message google.cloud.sql.v1beta4.SqlTiersListRequest
 */
export type SqlTiersListRequest = Message<"google.cloud.sql.v1beta4.SqlTiersListRequest"> & {
  /**
   * Project ID of the project for which to list tiers.
   *
   * @generated from field: string project = 1;
   */
  project: string;
};

/**
 * Describes the message google.cloud.sql.v1beta4.SqlTiersListRequest.
 * Use `create(SqlTiersListRequestSchema)` to create a new message.
 */
export const SqlTiersListRequestSchema: GenMessage<SqlTiersListRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_sql_v1beta4_cloud_sql_tiers, 0);

/**
 * Tiers list response.
 *
 * @generated from message google.cloud.sql.v1beta4.TiersListResponse
 */
export type TiersListResponse = Message<"google.cloud.sql.v1beta4.TiersListResponse"> & {
  /**
   * This is always `sql#tiersList`.
   *
   * @generated from field: string kind = 1;
   */
  kind: string;

  /**
   * List of tiers.
   *
   * @generated from field: repeated google.cloud.sql.v1beta4.Tier items = 2;
   */
  items: Tier[];
};

/**
 * Describes the message google.cloud.sql.v1beta4.TiersListResponse.
 * Use `create(TiersListResponseSchema)` to create a new message.
 */
export const TiersListResponseSchema: GenMessage<TiersListResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_sql_v1beta4_cloud_sql_tiers, 1);

/**
 * A Google Cloud SQL service tier resource.
 *
 * @generated from message google.cloud.sql.v1beta4.Tier
 */
export type Tier = Message<"google.cloud.sql.v1beta4.Tier"> & {
  /**
   * An identifier for the machine type, for example, `db-custom-1-3840`. For
   * related information, see [Pricing](/sql/pricing).
   *
   * @generated from field: string tier = 1;
   */
  tier: string;

  /**
   * The maximum RAM usage of this tier in bytes.
   *
   * @generated from field: int64 RAM = 2;
   */
  RAM: bigint;

  /**
   * This is always `sql#tier`.
   *
   * @generated from field: string kind = 3;
   */
  kind: string;

  /**
   * The maximum disk size of this tier in bytes.
   *
   * @generated from field: int64 Disk_Quota = 4;
   */
  DiskQuota: bigint;

  /**
   * The applicable regions for this tier.
   *
   * @generated from field: repeated string region = 5;
   */
  region: string[];
};

/**
 * Describes the message google.cloud.sql.v1beta4.Tier.
 * Use `create(TierSchema)` to create a new message.
 */
export const TierSchema: GenMessage<Tier> = /*@__PURE__*/
  messageDesc(file_google_cloud_sql_v1beta4_cloud_sql_tiers, 2);

/**
 * Service for providing machine types (tiers) for Cloud SQL.
 *
 * @generated from service google.cloud.sql.v1beta4.SqlTiersService
 */
export const SqlTiersService: GenService<{
  /**
   * Lists all available machine types (tiers) for Cloud SQL, for example,
   * `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).
   *
   * @generated from rpc google.cloud.sql.v1beta4.SqlTiersService.List
   */
  list: {
    methodKind: "unary";
    input: typeof SqlTiersListRequestSchema;
    output: typeof TiersListResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_sql_v1beta4_cloud_sql_tiers, 0);
