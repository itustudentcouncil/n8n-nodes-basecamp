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
// @generated from file google/cloud/connectors/v1/connectors_service.proto (package google.cloud.connectors.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_cloud_connectors_v1_common } from "./common_pb";
import type { ConnectionSchema, ConnectionSchemaMetadataSchema, CreateConnectionRequestSchema, DeleteConnectionRequestSchema, GetConnectionRequestSchema, GetConnectionSchemaMetadataRequestSchema, ListConnectionsRequestSchema, ListConnectionsResponseSchema, ListRuntimeActionSchemasRequestSchema, ListRuntimeActionSchemasResponseSchema, ListRuntimeEntitySchemasRequestSchema, ListRuntimeEntitySchemasResponseSchema, RefreshConnectionSchemaMetadataRequestSchema, UpdateConnectionRequestSchema } from "./connection_pb";
import { file_google_cloud_connectors_v1_connection } from "./connection_pb";
import type { ConnectorSchema, GetConnectorRequestSchema, ListConnectorsRequestSchema, ListConnectorsResponseSchema } from "./connector_pb";
import { file_google_cloud_connectors_v1_connector } from "./connector_pb";
import type { ConnectorVersionSchema, GetConnectorVersionRequestSchema, ListConnectorVersionsRequestSchema, ListConnectorVersionsResponseSchema } from "./connector_version_pb";
import { file_google_cloud_connectors_v1_connector_version } from "./connector_version_pb";
import type { GetProviderRequestSchema, ListProvidersRequestSchema, ListProvidersResponseSchema, ProviderSchema } from "./provider_pb";
import { file_google_cloud_connectors_v1_provider } from "./provider_pb";
import type { GetRuntimeConfigRequestSchema, RuntimeConfigSchema } from "./runtime_pb";
import { file_google_cloud_connectors_v1_runtime } from "./runtime_pb";
import type { GetGlobalSettingsRequestSchema, SettingsSchema } from "./settings_pb";
import { file_google_cloud_connectors_v1_settings } from "./settings_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/cloud/connectors/v1/connectors_service.proto.
 */
export const file_google_cloud_connectors_v1_connectors_service: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvY29ubmVjdG9ycy92MS9jb25uZWN0b3JzX3NlcnZpY2UucHJvdG8SGmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxMukcCgpDb25uZWN0b3JzErwBCg9MaXN0Q29ubmVjdGlvbnMSMi5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5MaXN0Q29ubmVjdGlvbnNSZXF1ZXN0GjMuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuTGlzdENvbm5lY3Rpb25zUmVzcG9uc2UiQNpBBnBhcmVudILT5JMCMRIvL3YxL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vY29ubmVjdGlvbnMSqQEKDUdldENvbm5lY3Rpb24SMC5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5HZXRDb25uZWN0aW9uUmVxdWVzdBomLmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLkNvbm5lY3Rpb24iPtpBBG5hbWWC0+STAjESLy92MS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2Nvbm5lY3Rpb25zLyp9EvABChBDcmVhdGVDb25uZWN0aW9uEjMuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuQ3JlYXRlQ29ubmVjdGlvblJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIocBykEfCgpDb25uZWN0aW9uEhFPcGVyYXRpb25NZXRhZGF0YdpBH3BhcmVudCxjb25uZWN0aW9uLGNvbm5lY3Rpb25faWSC0+STAj06CmNvbm5lY3Rpb24iLy92MS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2Nvbm5lY3Rpb25zEvIBChBVcGRhdGVDb25uZWN0aW9uEjMuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuVXBkYXRlQ29ubmVjdGlvblJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIokBykEfCgpDb25uZWN0aW9uEhFPcGVyYXRpb25NZXRhZGF0YdpBFmNvbm5lY3Rpb24sdXBkYXRlX21hc2uC0+STAkg6CmNvbm5lY3Rpb24yOi92MS97Y29ubmVjdGlvbi5uYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovY29ubmVjdGlvbnMvKn0S0wEKEERlbGV0ZUNvbm5lY3Rpb24SMy5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5EZWxldGVDb25uZWN0aW9uUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24ia8pBKgoVZ29vZ2xlLnByb3RvYnVmLkVtcHR5EhFPcGVyYXRpb25NZXRhZGF0YdpBBG5hbWWC0+STAjEqLy92MS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2Nvbm5lY3Rpb25zLyp9ErQBCg1MaXN0UHJvdmlkZXJzEjAuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuTGlzdFByb3ZpZGVyc1JlcXVlc3QaMS5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5MaXN0UHJvdmlkZXJzUmVzcG9uc2UiPtpBBnBhcmVudILT5JMCLxItL3YxL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vcHJvdmlkZXJzEqEBCgtHZXRQcm92aWRlchIuLmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLkdldFByb3ZpZGVyUmVxdWVzdBokLmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLlByb3ZpZGVyIjzaQQRuYW1lgtPkkwIvEi0vdjEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9wcm92aWRlcnMvKn0SxAEKDkxpc3RDb25uZWN0b3JzEjEuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuTGlzdENvbm5lY3RvcnNSZXF1ZXN0GjIuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuTGlzdENvbm5lY3RvcnNSZXNwb25zZSJL2kEGcGFyZW50gtPkkwI8EjovdjEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3Byb3ZpZGVycy8qfS9jb25uZWN0b3JzErEBCgxHZXRDb25uZWN0b3ISLy5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5HZXRDb25uZWN0b3JSZXF1ZXN0GiUuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuQ29ubmVjdG9yIknaQQRuYW1lgtPkkwI8EjovdjEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9wcm92aWRlcnMvKi9jb25uZWN0b3JzLyp9EuQBChVMaXN0Q29ubmVjdG9yVmVyc2lvbnMSOC5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5MaXN0Q29ubmVjdG9yVmVyc2lvbnNSZXF1ZXN0GjkuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuTGlzdENvbm5lY3RvclZlcnNpb25zUmVzcG9uc2UiVtpBBnBhcmVudILT5JMCRxJFL3YxL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9wcm92aWRlcnMvKi9jb25uZWN0b3JzLyp9L3ZlcnNpb25zEtEBChNHZXRDb25uZWN0b3JWZXJzaW9uEjYuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuR2V0Q29ubmVjdG9yVmVyc2lvblJlcXVlc3QaLC5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5Db25uZWN0b3JWZXJzaW9uIlTaQQRuYW1lgtPkkwJHEkUvdjEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9wcm92aWRlcnMvKi9jb25uZWN0b3JzLyovdmVyc2lvbnMvKn0S7AEKG0dldENvbm5lY3Rpb25TY2hlbWFNZXRhZGF0YRI+Lmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLkdldENvbm5lY3Rpb25TY2hlbWFNZXRhZGF0YVJlcXVlc3QaNC5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5Db25uZWN0aW9uU2NoZW1hTWV0YWRhdGEiV9pBBG5hbWWC0+STAkoSSC92MS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2Nvbm5lY3Rpb25zLyovY29ubmVjdGlvblNjaGVtYU1ldGFkYXRhfRKZAgofUmVmcmVzaENvbm5lY3Rpb25TY2hlbWFNZXRhZGF0YRJCLmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLlJlZnJlc2hDb25uZWN0aW9uU2NoZW1hTWV0YWRhdGFSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiKSAcpBLQoYQ29ubmVjdGlvblNjaGVtYU1ldGFkYXRhEhFPcGVyYXRpb25NZXRhZGF0YdpBBG5hbWWC0+STAlU6ASoiUC92MS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2Nvbm5lY3Rpb25zLyovY29ubmVjdGlvblNjaGVtYU1ldGFkYXRhfTpyZWZyZXNoEu4BChhMaXN0UnVudGltZUVudGl0eVNjaGVtYXMSOy5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5MaXN0UnVudGltZUVudGl0eVNjaGVtYXNSZXF1ZXN0GjwuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuTGlzdFJ1bnRpbWVFbnRpdHlTY2hlbWFzUmVzcG9uc2UiV9pBBnBhcmVudILT5JMCSBJGL3YxL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jb25uZWN0aW9ucy8qfS9ydW50aW1lRW50aXR5U2NoZW1hcxLuAQoYTGlzdFJ1bnRpbWVBY3Rpb25TY2hlbWFzEjsuZ29vZ2xlLmNsb3VkLmNvbm5lY3RvcnMudjEuTGlzdFJ1bnRpbWVBY3Rpb25TY2hlbWFzUmVxdWVzdBo8Lmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLkxpc3RSdW50aW1lQWN0aW9uU2NoZW1hc1Jlc3BvbnNlIlfaQQZwYXJlbnSC0+STAkgSRi92MS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyovY29ubmVjdGlvbnMvKn0vcnVudGltZUFjdGlvblNjaGVtYXMSsgEKEEdldFJ1bnRpbWVDb25maWcSMy5nb29nbGUuY2xvdWQuY29ubmVjdG9ycy52MS5HZXRSdW50aW1lQ29uZmlnUmVxdWVzdBopLmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLlJ1bnRpbWVDb25maWciPtpBBG5hbWWC0+STAjESLy92MS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3J1bnRpbWVDb25maWd9Eq8BChFHZXRHbG9iYWxTZXR0aW5ncxI0Lmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLkdldEdsb2JhbFNldHRpbmdzUmVxdWVzdBokLmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxLlNldHRpbmdzIj7aQQRuYW1lgtPkkwIxEi8vdjEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvZ2xvYmFsL3NldHRpbmdzfRpNykEZY29ubmVjdG9ycy5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1CegoeY29tLmdvb2dsZS5jbG91ZC5jb25uZWN0b3JzLnYxQhZDb25uZWN0b3JzU2VydmljZVByb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vY29ubmVjdG9ycy9hcGl2MS9jb25uZWN0b3JzcGI7Y29ubmVjdG9yc3BiYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_cloud_connectors_v1_common, file_google_cloud_connectors_v1_connection, file_google_cloud_connectors_v1_connector, file_google_cloud_connectors_v1_connector_version, file_google_cloud_connectors_v1_provider, file_google_cloud_connectors_v1_runtime, file_google_cloud_connectors_v1_settings, file_google_longrunning_operations, file_google_protobuf_empty]);

/**
 * Connectors is the interface for managing Connectors.
 *
 * @generated from service google.cloud.connectors.v1.Connectors
 */
export const Connectors: GenService<{
  /**
   * Lists Connections in a given project and location.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.ListConnections
   */
  listConnections: {
    methodKind: "unary";
    input: typeof ListConnectionsRequestSchema;
    output: typeof ListConnectionsResponseSchema;
  },
  /**
   * Gets details of a single Connection.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.GetConnection
   */
  getConnection: {
    methodKind: "unary";
    input: typeof GetConnectionRequestSchema;
    output: typeof ConnectionSchema;
  },
  /**
   * Creates a new Connection in a given project and location.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.CreateConnection
   */
  createConnection: {
    methodKind: "unary";
    input: typeof CreateConnectionRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Updates the parameters of a single Connection.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.UpdateConnection
   */
  updateConnection: {
    methodKind: "unary";
    input: typeof UpdateConnectionRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Deletes a single Connection.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.DeleteConnection
   */
  deleteConnection: {
    methodKind: "unary";
    input: typeof DeleteConnectionRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Lists Providers in a given project and location.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.ListProviders
   */
  listProviders: {
    methodKind: "unary";
    input: typeof ListProvidersRequestSchema;
    output: typeof ListProvidersResponseSchema;
  },
  /**
   * Gets details of a provider.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.GetProvider
   */
  getProvider: {
    methodKind: "unary";
    input: typeof GetProviderRequestSchema;
    output: typeof ProviderSchema;
  },
  /**
   * Lists Connectors in a given project and location.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.ListConnectors
   */
  listConnectors: {
    methodKind: "unary";
    input: typeof ListConnectorsRequestSchema;
    output: typeof ListConnectorsResponseSchema;
  },
  /**
   * Gets details of a single Connector.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.GetConnector
   */
  getConnector: {
    methodKind: "unary";
    input: typeof GetConnectorRequestSchema;
    output: typeof ConnectorSchema;
  },
  /**
   * Lists Connector Versions in a given project and location.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.ListConnectorVersions
   */
  listConnectorVersions: {
    methodKind: "unary";
    input: typeof ListConnectorVersionsRequestSchema;
    output: typeof ListConnectorVersionsResponseSchema;
  },
  /**
   * Gets details of a single connector version.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.GetConnectorVersion
   */
  getConnectorVersion: {
    methodKind: "unary";
    input: typeof GetConnectorVersionRequestSchema;
    output: typeof ConnectorVersionSchema;
  },
  /**
   * Gets schema metadata of a connection.
   * SchemaMetadata is a singleton resource for each connection.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.GetConnectionSchemaMetadata
   */
  getConnectionSchemaMetadata: {
    methodKind: "unary";
    input: typeof GetConnectionSchemaMetadataRequestSchema;
    output: typeof ConnectionSchemaMetadataSchema;
  },
  /**
   * Refresh runtime schema of a connection.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.RefreshConnectionSchemaMetadata
   */
  refreshConnectionSchemaMetadata: {
    methodKind: "unary";
    input: typeof RefreshConnectionSchemaMetadataRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * List schema of a runtime entities filtered by entity name.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.ListRuntimeEntitySchemas
   */
  listRuntimeEntitySchemas: {
    methodKind: "unary";
    input: typeof ListRuntimeEntitySchemasRequestSchema;
    output: typeof ListRuntimeEntitySchemasResponseSchema;
  },
  /**
   * List schema of a runtime actions filtered by action name.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.ListRuntimeActionSchemas
   */
  listRuntimeActionSchemas: {
    methodKind: "unary";
    input: typeof ListRuntimeActionSchemasRequestSchema;
    output: typeof ListRuntimeActionSchemasResponseSchema;
  },
  /**
   * Gets the runtimeConfig of a location.
   * RuntimeConfig is a singleton resource for each location.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.GetRuntimeConfig
   */
  getRuntimeConfig: {
    methodKind: "unary";
    input: typeof GetRuntimeConfigRequestSchema;
    output: typeof RuntimeConfigSchema;
  },
  /**
   * GetGlobalSettings gets settings of a project.
   * GlobalSettings is a singleton resource.
   *
   * @generated from rpc google.cloud.connectors.v1.Connectors.GetGlobalSettings
   */
  getGlobalSettings: {
    methodKind: "unary";
    input: typeof GetGlobalSettingsRequestSchema;
    output: typeof SettingsSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_connectors_v1_connectors_service, 0);
