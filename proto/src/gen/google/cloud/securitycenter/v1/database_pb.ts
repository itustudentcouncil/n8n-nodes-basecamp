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
// @generated from file google/cloud/securitycenter/v1/database.proto (package google.cloud.securitycenter.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v1/database.proto.
 */
export const file_google_cloud_securitycenter_v1_database: GenFile = /*@__PURE__*/
  fileDesc("Ci1nb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjEvZGF0YWJhc2UucHJvdG8SHmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MSJzCghEYXRhYmFzZRIMCgRuYW1lGAEgASgJEhQKDGRpc3BsYXlfbmFtZRgCIAEoCRIRCgl1c2VyX25hbWUYAyABKAkSDQoFcXVlcnkYBCABKAkSEAoIZ3JhbnRlZXMYBSADKAkSDwoHdmVyc2lvbhgGIAEoCULnAQoiY29tLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MUINRGF0YWJhc2VQcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlY3VyaXR5Y2VudGVyL2FwaXYxL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCHkdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMcoCHkdvb2dsZVxDbG91ZFxTZWN1cml0eUNlbnRlclxWMeoCIUdvb2dsZTo6Q2xvdWQ6OlNlY3VyaXR5Q2VudGVyOjpWMWIGcHJvdG8z");

/**
 * Represents database access information, such as queries. A database may be a
 * sub-resource of an instance (as in the case of Cloud SQL instances or Cloud
 * Spanner instances), or the database instance itself. Some database resources
 * might not have the [full resource
 * name](https://google.aip.dev/122#full-resource-names) populated because these
 * resource types, such as Cloud SQL databases, are not yet supported by Cloud
 * Asset Inventory. In these cases only the display name is provided.
 *
 * @generated from message google.cloud.securitycenter.v1.Database
 */
export type Database = Message<"google.cloud.securitycenter.v1.Database"> & {
  /**
   * Some database resources may not have the [full resource
   * name](https://google.aip.dev/122#full-resource-names) populated because
   * these resource types are not yet supported by Cloud Asset Inventory (e.g.
   * Cloud SQL databases). In these cases only the display name will be
   * provided.
   * The [full resource name](https://google.aip.dev/122#full-resource-names) of
   * the database that the user connected to, if it is supported by Cloud Asset
   * Inventory.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The human-readable name of the database that the user connected to.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * The username used to connect to the database. The username might not be an
   * IAM principal and does not have a set format.
   *
   * @generated from field: string user_name = 3;
   */
  userName: string;

  /**
   * The SQL statement that is associated with the database access.
   *
   * @generated from field: string query = 4;
   */
  query: string;

  /**
   * The target usernames, roles, or groups of an SQL privilege grant, which is
   * not an IAM policy change.
   *
   * @generated from field: repeated string grantees = 5;
   */
  grantees: string[];

  /**
   * The version of the database, for example, POSTGRES_14.
   * See [the complete
   * list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).
   *
   * @generated from field: string version = 6;
   */
  version: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1.Database.
 * Use `create(DatabaseSchema)` to create a new message.
 */
export const DatabaseSchema: GenMessage<Database> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_database, 0);
