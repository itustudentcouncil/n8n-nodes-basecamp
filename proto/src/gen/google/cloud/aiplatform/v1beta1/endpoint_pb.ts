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
// @generated from file google/cloud/aiplatform/v1beta1/endpoint.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { EncryptionSpec } from "./encryption_spec_pb";
import { file_google_cloud_aiplatform_v1beta1_encryption_spec } from "./encryption_spec_pb";
import type { ExplanationSpec } from "./explanation_pb";
import { file_google_cloud_aiplatform_v1beta1_explanation } from "./explanation_pb";
import type { BigQueryDestination } from "./io_pb";
import { file_google_cloud_aiplatform_v1beta1_io } from "./io_pb";
import type { AutomaticResources, DedicatedResources } from "./machine_resources_pb";
import { file_google_cloud_aiplatform_v1beta1_machine_resources } from "./machine_resources_pb";
import type { PrivateServiceConnectConfig } from "./service_networking_pb";
import { file_google_cloud_aiplatform_v1beta1_service_networking } from "./service_networking_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/endpoint.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_endpoint: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL2VuZHBvaW50LnByb3RvEh9nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExIscKCghFbmRwb2ludBIRCgRuYW1lGAEgASgJQgPgQQMSGQoMZGlzcGxheV9uYW1lGAIgASgJQgPgQQISEwoLZGVzY3JpcHRpb24YAyABKAkSTAoPZGVwbG95ZWRfbW9kZWxzGAQgAygLMi4uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5EZXBsb3llZE1vZGVsQgPgQQMSUgoNdHJhZmZpY19zcGxpdBgFIAMoCzI7Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuRW5kcG9pbnQuVHJhZmZpY1NwbGl0RW50cnkSDAoEZXRhZxgGIAEoCRJFCgZsYWJlbHMYByADKAsyNS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkVuZHBvaW50LkxhYmVsc0VudHJ5EjQKC2NyZWF0ZV90aW1lGAggASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjQKC3VwZGF0ZV90aW1lGAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEkgKD2VuY3J5cHRpb25fc3BlYxgKIAEoCzIvLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuRW5jcnlwdGlvblNwZWMSNwoHbmV0d29yaxgNIAEoCUIm4EEB+kEgCh5jb21wdXRlLmdvb2dsZWFwaXMuY29tL05ldHdvcmsSKgoeZW5hYmxlX3ByaXZhdGVfc2VydmljZV9jb25uZWN0GBEgASgIQgIYARJpCh5wcml2YXRlX3NlcnZpY2VfY29ubmVjdF9jb25maWcYFSABKAsyPC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLlByaXZhdGVTZXJ2aWNlQ29ubmVjdENvbmZpZ0ID4EEBEmcKH21vZGVsX2RlcGxveW1lbnRfbW9uaXRvcmluZ19qb2IYDiABKAlCPuBBA/pBOAo2YWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9Nb2RlbERlcGxveW1lbnRNb25pdG9yaW5nSm9iEnUKJ3ByZWRpY3RfcmVxdWVzdF9yZXNwb25zZV9sb2dnaW5nX2NvbmZpZxgSIAEoCzJELmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuUHJlZGljdFJlcXVlc3RSZXNwb25zZUxvZ2dpbmdDb25maWcSIgoaZGVkaWNhdGVkX2VuZHBvaW50X2VuYWJsZWQYGCABKAgSIwoWZGVkaWNhdGVkX2VuZHBvaW50X2RucxgZIAEoCUID4EEDEhoKDXNhdGlzZmllc19wenMYGyABKAhCA+BBAxIaCg1zYXRpc2ZpZXNfcHppGBwgASgIQgPgQQMaMwoRVHJhZmZpY1NwbGl0RW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgFOgI4ARotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBOrUB6kGxAQoiYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9FbmRwb2ludBI8cHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2VuZHBvaW50cy97ZW5kcG9pbnR9Ek1wcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vcHVibGlzaGVycy97cHVibGlzaGVyfS9tb2RlbHMve21vZGVsfSLtBQoNRGVwbG95ZWRNb2RlbBJSChNkZWRpY2F0ZWRfcmVzb3VyY2VzGAcgASgLMjMuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5EZWRpY2F0ZWRSZXNvdXJjZXNIABJSChNhdXRvbWF0aWNfcmVzb3VyY2VzGAggASgLMjMuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5BdXRvbWF0aWNSZXNvdXJjZXNIABJRChBzaGFyZWRfcmVzb3VyY2VzGBEgASgJQjX6QTIKMGFpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb20vRGVwbG95bWVudFJlc291cmNlUG9vbEgAEg8KAmlkGAEgASgJQgPgQQUSNgoFbW9kZWwYAiABKAlCJ+BBAvpBIQofYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9Nb2RlbBIdChBtb2RlbF92ZXJzaW9uX2lkGBIgASgJQgPgQQMSFAoMZGlzcGxheV9uYW1lGAMgASgJEjQKC2NyZWF0ZV90aW1lGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEkoKEGV4cGxhbmF0aW9uX3NwZWMYCSABKAsyMC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkV4cGxhbmF0aW9uU3BlYxIcChRkaXNhYmxlX2V4cGxhbmF0aW9ucxgTIAEoCBIXCg9zZXJ2aWNlX2FjY291bnQYCyABKAkSIAoYZW5hYmxlX2NvbnRhaW5lcl9sb2dnaW5nGAwgASgIEh0KFWVuYWJsZV9hY2Nlc3NfbG9nZ2luZxgNIAEoCBJRChFwcml2YXRlX2VuZHBvaW50cxgOIAEoCzIxLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuUHJpdmF0ZUVuZHBvaW50c0ID4EEDQhYKFHByZWRpY3Rpb25fcmVzb3VyY2VzIo8BChBQcml2YXRlRW5kcG9pbnRzEh0KEHByZWRpY3RfaHR0cF91cmkYASABKAlCA+BBAxIdChBleHBsYWluX2h0dHBfdXJpGAIgASgJQgPgQQMSHAoPaGVhbHRoX2h0dHBfdXJpGAMgASgJQgPgQQMSHwoSc2VydmljZV9hdHRhY2htZW50GAQgASgJQgPgQQMioQEKI1ByZWRpY3RSZXF1ZXN0UmVzcG9uc2VMb2dnaW5nQ29uZmlnEg8KB2VuYWJsZWQYASABKAgSFQoNc2FtcGxpbmdfcmF0ZRgCIAEoARJSChRiaWdxdWVyeV9kZXN0aW5hdGlvbhgDIAEoCzI0Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuQmlnUXVlcnlEZXN0aW5hdGlvbkLkAQojY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTFCDUVuZHBvaW50UHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxYmV0YTEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCH0dvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTHKAh9Hb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMWJldGEx6gIiR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiZXRhMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1beta1_encryption_spec, file_google_cloud_aiplatform_v1beta1_explanation, file_google_cloud_aiplatform_v1beta1_io, file_google_cloud_aiplatform_v1beta1_machine_resources, file_google_cloud_aiplatform_v1beta1_service_networking, file_google_protobuf_timestamp]);

/**
 * Models are deployed into it, and afterwards Endpoint is called to obtain
 * predictions and explanations.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.Endpoint
 */
export type Endpoint = Message<"google.cloud.aiplatform.v1beta1.Endpoint"> & {
  /**
   * Output only. The resource name of the Endpoint.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The display name of the Endpoint.
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * The description of the Endpoint.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Output only. The models deployed in this Endpoint.
   * To add or remove DeployedModels use
   * [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel]
   * and
   * [EndpointService.UndeployModel][google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel]
   * respectively.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.DeployedModel deployed_models = 4;
   */
  deployedModels: DeployedModel[];

  /**
   * A map from a DeployedModel's ID to the percentage of this Endpoint's
   * traffic that should be forwarded to that DeployedModel.
   *
   * If a DeployedModel's ID is not listed in this map, then it receives no
   * traffic.
   *
   * The traffic percentage values must add up to 100, or map must be empty if
   * the Endpoint is to not accept any traffic at a moment.
   *
   * @generated from field: map<string, int32> traffic_split = 5;
   */
  trafficSplit: { [key: string]: number };

  /**
   * Used to perform consistent read-modify-write updates. If not set, a blind
   * "overwrite" update happens.
   *
   * @generated from field: string etag = 6;
   */
  etag: string;

  /**
   * The labels with user-defined metadata to organize your Endpoints.
   *
   * Label keys and values can be no longer than 64 characters
   * (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed.
   *
   * See https://goo.gl/xmQnxf for more information and examples of labels.
   *
   * @generated from field: map<string, string> labels = 7;
   */
  labels: { [key: string]: string };

  /**
   * Output only. Timestamp when this Endpoint was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 8;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp when this Endpoint was last updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 9;
   */
  updateTime?: Timestamp;

  /**
   * Customer-managed encryption key spec for an Endpoint. If set, this
   * Endpoint and all sub-resources of this Endpoint will be secured by
   * this key.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.EncryptionSpec encryption_spec = 10;
   */
  encryptionSpec?: EncryptionSpec;

  /**
   * Optional. The full name of the Google Compute Engine
   * [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks)
   * to which the Endpoint should be peered.
   *
   * Private services access must already be configured for the network. If left
   * unspecified, the Endpoint is not peered with any network.
   *
   * Only one of the fields,
   * [network][google.cloud.aiplatform.v1beta1.Endpoint.network] or
   * [enable_private_service_connect][google.cloud.aiplatform.v1beta1.Endpoint.enable_private_service_connect],
   * can be set.
   *
   * [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert):
   * `projects/{project}/global/networks/{network}`.
   * Where `{project}` is a project number, as in `12345`, and `{network}` is
   * network name.
   *
   * @generated from field: string network = 13;
   */
  network: string;

  /**
   * Deprecated: If true, expose the Endpoint via private service connect.
   *
   * Only one of the fields,
   * [network][google.cloud.aiplatform.v1beta1.Endpoint.network] or
   * [enable_private_service_connect][google.cloud.aiplatform.v1beta1.Endpoint.enable_private_service_connect],
   * can be set.
   *
   * @generated from field: bool enable_private_service_connect = 17 [deprecated = true];
   * @deprecated
   */
  enablePrivateServiceConnect: boolean;

  /**
   * Optional. Configuration for private service connect.
   *
   * [network][google.cloud.aiplatform.v1beta1.Endpoint.network] and
   * [private_service_connect_config][google.cloud.aiplatform.v1beta1.Endpoint.private_service_connect_config]
   * are mutually exclusive.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.PrivateServiceConnectConfig private_service_connect_config = 21;
   */
  privateServiceConnectConfig?: PrivateServiceConnectConfig;

  /**
   * Output only. Resource name of the Model Monitoring job associated with this
   * Endpoint if monitoring is enabled by
   * [JobService.CreateModelDeploymentMonitoringJob][google.cloud.aiplatform.v1beta1.JobService.CreateModelDeploymentMonitoringJob].
   * Format:
   * `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
   *
   * @generated from field: string model_deployment_monitoring_job = 14;
   */
  modelDeploymentMonitoringJob: string;

  /**
   * Configures the request-response logging for online prediction.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.PredictRequestResponseLoggingConfig predict_request_response_logging_config = 18;
   */
  predictRequestResponseLoggingConfig?: PredictRequestResponseLoggingConfig;

  /**
   * If true, the endpoint will be exposed through a dedicated
   * DNS [Endpoint.dedicated_endpoint_dns]. Your request to the dedicated DNS
   * will be isolated from other users' traffic and will have better performance
   * and reliability.
   * Note: Once you enabled dedicated endpoint, you won't be able to send
   * request to the shared DNS {region}-aiplatform.googleapis.com. The
   * limitation will be removed soon.
   *
   * @generated from field: bool dedicated_endpoint_enabled = 24;
   */
  dedicatedEndpointEnabled: boolean;

  /**
   * Output only. DNS of the dedicated endpoint. Will only be populated if
   * dedicated_endpoint_enabled is true.
   * Format:
   * `https://{endpoint_id}.{region}-{project_number}.prediction.vertexai.goog`.
   *
   * @generated from field: string dedicated_endpoint_dns = 25;
   */
  dedicatedEndpointDns: string;

  /**
   * Output only. Reserved for future use.
   *
   * @generated from field: bool satisfies_pzs = 27;
   */
  satisfiesPzs: boolean;

  /**
   * Output only. Reserved for future use.
   *
   * @generated from field: bool satisfies_pzi = 28;
   */
  satisfiesPzi: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.Endpoint.
 * Use `create(EndpointSchema)` to create a new message.
 */
export const EndpointSchema: GenMessage<Endpoint> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint, 0);

/**
 * A deployment of a Model. Endpoints contain one or more DeployedModels.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.DeployedModel
 */
export type DeployedModel = Message<"google.cloud.aiplatform.v1beta1.DeployedModel"> & {
  /**
   * The prediction (for example, the machine) resources that the DeployedModel
   * uses. The user is billed for the resources (at least their minimal amount)
   * even if the DeployedModel receives no traffic.
   * Not all Models support all resources types. See
   * [Model.supported_deployment_resources_types][google.cloud.aiplatform.v1beta1.Model.supported_deployment_resources_types].
   * Required except for Large Model Deploy use cases.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.DeployedModel.prediction_resources
   */
  predictionResources: {
    /**
     * A description of resources that are dedicated to the DeployedModel, and
     * that need a higher degree of manual configuration.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.DedicatedResources dedicated_resources = 7;
     */
    value: DedicatedResources;
    case: "dedicatedResources";
  } | {
    /**
     * A description of resources that to large degree are decided by Vertex
     * AI, and require only a modest additional configuration.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.AutomaticResources automatic_resources = 8;
     */
    value: AutomaticResources;
    case: "automaticResources";
  } | {
    /**
     * The resource name of the shared DeploymentResourcePool to deploy on.
     * Format:
     * `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`
     *
     * @generated from field: string shared_resources = 17;
     */
    value: string;
    case: "sharedResources";
  } | { case: undefined; value?: undefined };

  /**
   * Immutable. The ID of the DeployedModel. If not provided upon deployment,
   * Vertex AI will generate a value for this ID.
   *
   * This value should be 1-10 characters, and valid characters are `/[0-9]/`.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Required. The resource name of the Model that this is the deployment of.
   * Note that the Model may be in a different location than the DeployedModel's
   * Endpoint.
   *
   * The resource name may contain version id or version alias to specify the
   * version.
   *  Example: `projects/{project}/locations/{location}/models/{model}@2`
   *              or
   *            `projects/{project}/locations/{location}/models/{model}@golden`
   * if no version is specified, the default version will be deployed.
   *
   * @generated from field: string model = 2;
   */
  model: string;

  /**
   * Output only. The version ID of the model that is deployed.
   *
   * @generated from field: string model_version_id = 18;
   */
  modelVersionId: string;

  /**
   * The display name of the DeployedModel. If not provided upon creation,
   * the Model's display_name is used.
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;

  /**
   * Output only. Timestamp when the DeployedModel was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 6;
   */
  createTime?: Timestamp;

  /**
   * Explanation configuration for this DeployedModel.
   *
   * When deploying a Model using
   * [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel],
   * this value overrides the value of
   * [Model.explanation_spec][google.cloud.aiplatform.v1beta1.Model.explanation_spec].
   * All fields of
   * [explanation_spec][google.cloud.aiplatform.v1beta1.DeployedModel.explanation_spec]
   * are optional in the request. If a field of
   * [explanation_spec][google.cloud.aiplatform.v1beta1.DeployedModel.explanation_spec]
   * is not populated, the value of the same field of
   * [Model.explanation_spec][google.cloud.aiplatform.v1beta1.Model.explanation_spec]
   * is inherited. If the corresponding
   * [Model.explanation_spec][google.cloud.aiplatform.v1beta1.Model.explanation_spec]
   * is not populated, all fields of the
   * [explanation_spec][google.cloud.aiplatform.v1beta1.DeployedModel.explanation_spec]
   * will be used for the explanation configuration.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ExplanationSpec explanation_spec = 9;
   */
  explanationSpec?: ExplanationSpec;

  /**
   * If true, deploy the model without explainable feature, regardless the
   * existence of
   * [Model.explanation_spec][google.cloud.aiplatform.v1beta1.Model.explanation_spec]
   * or
   * [explanation_spec][google.cloud.aiplatform.v1beta1.DeployedModel.explanation_spec].
   *
   * @generated from field: bool disable_explanations = 19;
   */
  disableExplanations: boolean;

  /**
   * The service account that the DeployedModel's container runs as. Specify the
   * email address of the service account. If this service account is not
   * specified, the container runs as a service account that doesn't have access
   * to the resource project.
   *
   * Users deploying the Model must have the `iam.serviceAccounts.actAs`
   * permission on this service account.
   *
   * @generated from field: string service_account = 11;
   */
  serviceAccount: string;

  /**
   * If true, the container of the DeployedModel instances will send `stderr`
   * and `stdout` streams to Cloud Logging.
   *
   * Only supported for custom-trained Models and AutoML Tabular Models.
   *
   * @generated from field: bool enable_container_logging = 12;
   */
  enableContainerLogging: boolean;

  /**
   * If true, online prediction access logs are sent to Cloud
   * Logging.
   * These logs are like standard server access logs, containing
   * information like timestamp and latency for each prediction request.
   *
   * Note that logs may incur a cost, especially if your project
   * receives prediction requests at a high queries per second rate (QPS).
   * Estimate your costs before enabling this option.
   *
   * @generated from field: bool enable_access_logging = 13;
   */
  enableAccessLogging: boolean;

  /**
   * Output only. Provide paths for users to send predict/explain/health
   * requests directly to the deployed model services running on Cloud via
   * private services access. This field is populated if
   * [network][google.cloud.aiplatform.v1beta1.Endpoint.network] is configured.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.PrivateEndpoints private_endpoints = 14;
   */
  privateEndpoints?: PrivateEndpoints;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.DeployedModel.
 * Use `create(DeployedModelSchema)` to create a new message.
 */
export const DeployedModelSchema: GenMessage<DeployedModel> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint, 1);

/**
 * PrivateEndpoints proto is used to provide paths for users to send
 * requests privately.
 * To send request via private service access, use predict_http_uri,
 * explain_http_uri or health_http_uri. To send request via private service
 * connect, use service_attachment.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.PrivateEndpoints
 */
export type PrivateEndpoints = Message<"google.cloud.aiplatform.v1beta1.PrivateEndpoints"> & {
  /**
   * Output only. Http(s) path to send prediction requests.
   *
   * @generated from field: string predict_http_uri = 1;
   */
  predictHttpUri: string;

  /**
   * Output only. Http(s) path to send explain requests.
   *
   * @generated from field: string explain_http_uri = 2;
   */
  explainHttpUri: string;

  /**
   * Output only. Http(s) path to send health check requests.
   *
   * @generated from field: string health_http_uri = 3;
   */
  healthHttpUri: string;

  /**
   * Output only. The name of the service attachment resource. Populated if
   * private service connect is enabled.
   *
   * @generated from field: string service_attachment = 4;
   */
  serviceAttachment: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.PrivateEndpoints.
 * Use `create(PrivateEndpointsSchema)` to create a new message.
 */
export const PrivateEndpointsSchema: GenMessage<PrivateEndpoints> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint, 2);

/**
 * Configuration for logging request-response to a BigQuery table.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.PredictRequestResponseLoggingConfig
 */
export type PredictRequestResponseLoggingConfig = Message<"google.cloud.aiplatform.v1beta1.PredictRequestResponseLoggingConfig"> & {
  /**
   * If logging is enabled or not.
   *
   * @generated from field: bool enabled = 1;
   */
  enabled: boolean;

  /**
   * Percentage of requests to be logged, expressed as a fraction in
   * range(0,1].
   *
   * @generated from field: double sampling_rate = 2;
   */
  samplingRate: number;

  /**
   * BigQuery table for logging.
   * If only given a project, a new dataset will be created with name
   * `logging_<endpoint-display-name>_<endpoint-id>` where
   * <endpoint-display-name> will be made BigQuery-dataset-name compatible (e.g.
   * most special characters will become underscores). If no table name is
   * given, a new table will be created with name `request_response_logging`
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.BigQueryDestination bigquery_destination = 3;
   */
  bigqueryDestination?: BigQueryDestination;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.PredictRequestResponseLoggingConfig.
 * Use `create(PredictRequestResponseLoggingConfigSchema)` to create a new message.
 */
export const PredictRequestResponseLoggingConfigSchema: GenMessage<PredictRequestResponseLoggingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint, 3);
