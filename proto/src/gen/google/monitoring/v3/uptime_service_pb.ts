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
// @generated from file google/monitoring/v3/uptime_service.proto (package google.monitoring.v3, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../api/annotations_pb";
import { file_google_api_client } from "../../api/client_pb";
import { file_google_api_field_behavior } from "../../api/field_behavior_pb";
import { file_google_api_resource } from "../../api/resource_pb";
import type { UptimeCheckConfig, UptimeCheckConfigSchema, UptimeCheckIp } from "./uptime_pb";
import { file_google_monitoring_v3_uptime } from "./uptime_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/monitoring/v3/uptime_service.proto.
 */
export const file_google_monitoring_v3_uptime_service: GenFile = /*@__PURE__*/
  fileDesc("Cilnb29nbGUvbW9uaXRvcmluZy92My91cHRpbWVfc2VydmljZS5wcm90bxIUZ29vZ2xlLm1vbml0b3JpbmcudjMimwEKHUxpc3RVcHRpbWVDaGVja0NvbmZpZ3NSZXF1ZXN0EkMKBnBhcmVudBgBIAEoCUIz4EEC+kEtEittb25pdG9yaW5nLmdvb2dsZWFwaXMuY29tL1VwdGltZUNoZWNrQ29uZmlnEg4KBmZpbHRlchgCIAEoCRIRCglwYWdlX3NpemUYAyABKAUSEgoKcGFnZV90b2tlbhgEIAEoCSKUAQoeTGlzdFVwdGltZUNoZWNrQ29uZmlnc1Jlc3BvbnNlEkUKFHVwdGltZV9jaGVja19jb25maWdzGAEgAygLMicuZ29vZ2xlLm1vbml0b3JpbmcudjMuVXB0aW1lQ2hlY2tDb25maWcSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJEhIKCnRvdGFsX3NpemUYAyABKAUiYAobR2V0VXB0aW1lQ2hlY2tDb25maWdSZXF1ZXN0EkEKBG5hbWUYASABKAlCM+BBAvpBLQorbW9uaXRvcmluZy5nb29nbGVhcGlzLmNvbS9VcHRpbWVDaGVja0NvbmZpZyKwAQoeQ3JlYXRlVXB0aW1lQ2hlY2tDb25maWdSZXF1ZXN0EkMKBnBhcmVudBgBIAEoCUIz4EEC+kEtEittb25pdG9yaW5nLmdvb2dsZWFwaXMuY29tL1VwdGltZUNoZWNrQ29uZmlnEkkKE3VwdGltZV9jaGVja19jb25maWcYAiABKAsyJy5nb29nbGUubW9uaXRvcmluZy52My5VcHRpbWVDaGVja0NvbmZpZ0ID4EECIpwBCh5VcGRhdGVVcHRpbWVDaGVja0NvbmZpZ1JlcXVlc3QSLwoLdXBkYXRlX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEkkKE3VwdGltZV9jaGVja19jb25maWcYAyABKAsyJy5nb29nbGUubW9uaXRvcmluZy52My5VcHRpbWVDaGVja0NvbmZpZ0ID4EECImMKHkRlbGV0ZVVwdGltZUNoZWNrQ29uZmlnUmVxdWVzdBJBCgRuYW1lGAEgASgJQjPgQQL6QS0KK21vbml0b3JpbmcuZ29vZ2xlYXBpcy5jb20vVXB0aW1lQ2hlY2tDb25maWciQgoZTGlzdFVwdGltZUNoZWNrSXBzUmVxdWVzdBIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCSJ0ChpMaXN0VXB0aW1lQ2hlY2tJcHNSZXNwb25zZRI9ChB1cHRpbWVfY2hlY2tfaXBzGAEgAygLMiMuZ29vZ2xlLm1vbml0b3JpbmcudjMuVXB0aW1lQ2hlY2tJcBIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkyvQoKElVwdGltZUNoZWNrU2VydmljZRLAAQoWTGlzdFVwdGltZUNoZWNrQ29uZmlncxIzLmdvb2dsZS5tb25pdG9yaW5nLnYzLkxpc3RVcHRpbWVDaGVja0NvbmZpZ3NSZXF1ZXN0GjQuZ29vZ2xlLm1vbml0b3JpbmcudjMuTGlzdFVwdGltZUNoZWNrQ29uZmlnc1Jlc3BvbnNlIjvaQQZwYXJlbnSC0+STAiwSKi92My97cGFyZW50PXByb2plY3RzLyp9L3VwdGltZUNoZWNrQ29uZmlncxKtAQoUR2V0VXB0aW1lQ2hlY2tDb25maWcSMS5nb29nbGUubW9uaXRvcmluZy52My5HZXRVcHRpbWVDaGVja0NvbmZpZ1JlcXVlc3QaJy5nb29nbGUubW9uaXRvcmluZy52My5VcHRpbWVDaGVja0NvbmZpZyI52kEEbmFtZYLT5JMCLBIqL3YzL3tuYW1lPXByb2plY3RzLyovdXB0aW1lQ2hlY2tDb25maWdzLyp9Et4BChdDcmVhdGVVcHRpbWVDaGVja0NvbmZpZxI0Lmdvb2dsZS5tb25pdG9yaW5nLnYzLkNyZWF0ZVVwdGltZUNoZWNrQ29uZmlnUmVxdWVzdBonLmdvb2dsZS5tb25pdG9yaW5nLnYzLlVwdGltZUNoZWNrQ29uZmlnImTaQRpwYXJlbnQsdXB0aW1lX2NoZWNrX2NvbmZpZ4LT5JMCQToTdXB0aW1lX2NoZWNrX2NvbmZpZyIqL3YzL3twYXJlbnQ9cHJvamVjdHMvKn0vdXB0aW1lQ2hlY2tDb25maWdzEusBChdVcGRhdGVVcHRpbWVDaGVja0NvbmZpZxI0Lmdvb2dsZS5tb25pdG9yaW5nLnYzLlVwZGF0ZVVwdGltZUNoZWNrQ29uZmlnUmVxdWVzdBonLmdvb2dsZS5tb25pdG9yaW5nLnYzLlVwdGltZUNoZWNrQ29uZmlnInHaQRN1cHRpbWVfY2hlY2tfY29uZmlngtPkkwJVOhN1cHRpbWVfY2hlY2tfY29uZmlnMj4vdjMve3VwdGltZV9jaGVja19jb25maWcubmFtZT1wcm9qZWN0cy8qL3VwdGltZUNoZWNrQ29uZmlncy8qfRKiAQoXRGVsZXRlVXB0aW1lQ2hlY2tDb25maWcSNC5nb29nbGUubW9uaXRvcmluZy52My5EZWxldGVVcHRpbWVDaGVja0NvbmZpZ1JlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiOdpBBG5hbWWC0+STAiwqKi92My97bmFtZT1wcm9qZWN0cy8qL3VwdGltZUNoZWNrQ29uZmlncy8qfRKTAQoSTGlzdFVwdGltZUNoZWNrSXBzEi8uZ29vZ2xlLm1vbml0b3JpbmcudjMuTGlzdFVwdGltZUNoZWNrSXBzUmVxdWVzdBowLmdvb2dsZS5tb25pdG9yaW5nLnYzLkxpc3RVcHRpbWVDaGVja0lwc1Jlc3BvbnNlIhqC0+STAhQSEi92My91cHRpbWVDaGVja0lwcxqpAcpBGW1vbml0b3JpbmcuZ29vZ2xlYXBpcy5jb23SQYkBaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL21vbml0b3JpbmcsaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9tb25pdG9yaW5nLnJlYWRCzQEKGGNvbS5nb29nbGUubW9uaXRvcmluZy52M0ISVXB0aW1lU2VydmljZVByb3RvUAFaQWNsb3VkLmdvb2dsZS5jb20vZ28vbW9uaXRvcmluZy9hcGl2My92Mi9tb25pdG9yaW5ncGI7bW9uaXRvcmluZ3BiqgIaR29vZ2xlLkNsb3VkLk1vbml0b3JpbmcuVjPKAhpHb29nbGVcQ2xvdWRcTW9uaXRvcmluZ1xWM+oCHUdvb2dsZTo6Q2xvdWQ6Ok1vbml0b3Jpbmc6OlYzYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_monitoring_v3_uptime, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * The protocol for the `ListUptimeCheckConfigs` request.
 *
 * @generated from message google.monitoring.v3.ListUptimeCheckConfigsRequest
 */
export type ListUptimeCheckConfigsRequest = Message<"google.monitoring.v3.ListUptimeCheckConfigsRequest"> & {
  /**
   * Required. The
   * [project](https://cloud.google.com/monitoring/api/v3#project_name) whose
   * Uptime check configurations are listed. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * If provided, this field specifies the criteria that must be met by
   * uptime checks to be included in the response.
   *
   * For more details, see [Filtering
   * syntax](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering#filter_syntax).
   *
   * @generated from field: string filter = 2;
   */
  filter: string;

  /**
   * The maximum number of results to return in a single response. The server
   * may further constrain the maximum number of results returned in a single
   * page. If the page_size is <=0, the server will decide the number of results
   * to be returned.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  /**
   * If this field is not empty then it must contain the `nextPageToken` value
   * returned by a previous call to this method.  Using this field causes the
   * method to return more results from the previous method call.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;
};

/**
 * Describes the message google.monitoring.v3.ListUptimeCheckConfigsRequest.
 * Use `create(ListUptimeCheckConfigsRequestSchema)` to create a new message.
 */
export const ListUptimeCheckConfigsRequestSchema: GenMessage<ListUptimeCheckConfigsRequest> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 0);

/**
 * The protocol for the `ListUptimeCheckConfigs` response.
 *
 * @generated from message google.monitoring.v3.ListUptimeCheckConfigsResponse
 */
export type ListUptimeCheckConfigsResponse = Message<"google.monitoring.v3.ListUptimeCheckConfigsResponse"> & {
  /**
   * The returned Uptime check configurations.
   *
   * @generated from field: repeated google.monitoring.v3.UptimeCheckConfig uptime_check_configs = 1;
   */
  uptimeCheckConfigs: UptimeCheckConfig[];

  /**
   * This field represents the pagination token to retrieve the next page of
   * results. If the value is empty, it means no further results for the
   * request. To retrieve the next page of results, the value of the
   * next_page_token is passed to the subsequent List method call (in the
   * request message's page_token field).
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * The total number of Uptime check configurations for the project,
   * irrespective of any pagination.
   *
   * @generated from field: int32 total_size = 3;
   */
  totalSize: number;
};

/**
 * Describes the message google.monitoring.v3.ListUptimeCheckConfigsResponse.
 * Use `create(ListUptimeCheckConfigsResponseSchema)` to create a new message.
 */
export const ListUptimeCheckConfigsResponseSchema: GenMessage<ListUptimeCheckConfigsResponse> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 1);

/**
 * The protocol for the `GetUptimeCheckConfig` request.
 *
 * @generated from message google.monitoring.v3.GetUptimeCheckConfigRequest
 */
export type GetUptimeCheckConfigRequest = Message<"google.monitoring.v3.GetUptimeCheckConfigRequest"> & {
  /**
   * Required. The Uptime check configuration to retrieve. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID]
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.monitoring.v3.GetUptimeCheckConfigRequest.
 * Use `create(GetUptimeCheckConfigRequestSchema)` to create a new message.
 */
export const GetUptimeCheckConfigRequestSchema: GenMessage<GetUptimeCheckConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 2);

/**
 * The protocol for the `CreateUptimeCheckConfig` request.
 *
 * @generated from message google.monitoring.v3.CreateUptimeCheckConfigRequest
 */
export type CreateUptimeCheckConfigRequest = Message<"google.monitoring.v3.CreateUptimeCheckConfigRequest"> & {
  /**
   * Required. The
   * [project](https://cloud.google.com/monitoring/api/v3#project_name) in which
   * to create the Uptime check. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The new Uptime check configuration.
   *
   * @generated from field: google.monitoring.v3.UptimeCheckConfig uptime_check_config = 2;
   */
  uptimeCheckConfig?: UptimeCheckConfig;
};

/**
 * Describes the message google.monitoring.v3.CreateUptimeCheckConfigRequest.
 * Use `create(CreateUptimeCheckConfigRequestSchema)` to create a new message.
 */
export const CreateUptimeCheckConfigRequestSchema: GenMessage<CreateUptimeCheckConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 3);

/**
 * The protocol for the `UpdateUptimeCheckConfig` request.
 *
 * @generated from message google.monitoring.v3.UpdateUptimeCheckConfigRequest
 */
export type UpdateUptimeCheckConfigRequest = Message<"google.monitoring.v3.UpdateUptimeCheckConfigRequest"> & {
  /**
   * Optional. If present, only the listed fields in the current Uptime check
   * configuration are updated with values from the new configuration. If this
   * field is empty, then the current configuration is completely replaced with
   * the new configuration.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  /**
   * Required. If an `updateMask` has been specified, this field gives
   * the values for the set of fields mentioned in the `updateMask`. If an
   * `updateMask` has not been given, this Uptime check configuration replaces
   * the current configuration. If a field is mentioned in `updateMask` but
   * the corresponding field is omitted in this partial Uptime check
   * configuration, it has the effect of deleting/clearing the field from the
   * configuration on the server.
   *
   * The following fields can be updated: `display_name`,
   * `http_check`, `tcp_check`, `timeout`, `content_matchers`, and
   * `selected_regions`.
   *
   * @generated from field: google.monitoring.v3.UptimeCheckConfig uptime_check_config = 3;
   */
  uptimeCheckConfig?: UptimeCheckConfig;
};

/**
 * Describes the message google.monitoring.v3.UpdateUptimeCheckConfigRequest.
 * Use `create(UpdateUptimeCheckConfigRequestSchema)` to create a new message.
 */
export const UpdateUptimeCheckConfigRequestSchema: GenMessage<UpdateUptimeCheckConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 4);

/**
 * The protocol for the `DeleteUptimeCheckConfig` request.
 *
 * @generated from message google.monitoring.v3.DeleteUptimeCheckConfigRequest
 */
export type DeleteUptimeCheckConfigRequest = Message<"google.monitoring.v3.DeleteUptimeCheckConfigRequest"> & {
  /**
   * Required. The Uptime check configuration to delete. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID]
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.monitoring.v3.DeleteUptimeCheckConfigRequest.
 * Use `create(DeleteUptimeCheckConfigRequestSchema)` to create a new message.
 */
export const DeleteUptimeCheckConfigRequestSchema: GenMessage<DeleteUptimeCheckConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 5);

/**
 * The protocol for the `ListUptimeCheckIps` request.
 *
 * @generated from message google.monitoring.v3.ListUptimeCheckIpsRequest
 */
export type ListUptimeCheckIpsRequest = Message<"google.monitoring.v3.ListUptimeCheckIpsRequest"> & {
  /**
   * The maximum number of results to return in a single response. The server
   * may further constrain the maximum number of results returned in a single
   * page. If the page_size is <=0, the server will decide the number of results
   * to be returned.
   * NOTE: this field is not yet implemented
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * If this field is not empty then it must contain the `nextPageToken` value
   * returned by a previous call to this method.  Using this field causes the
   * method to return more results from the previous method call.
   * NOTE: this field is not yet implemented
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.monitoring.v3.ListUptimeCheckIpsRequest.
 * Use `create(ListUptimeCheckIpsRequestSchema)` to create a new message.
 */
export const ListUptimeCheckIpsRequestSchema: GenMessage<ListUptimeCheckIpsRequest> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 6);

/**
 * The protocol for the `ListUptimeCheckIps` response.
 *
 * @generated from message google.monitoring.v3.ListUptimeCheckIpsResponse
 */
export type ListUptimeCheckIpsResponse = Message<"google.monitoring.v3.ListUptimeCheckIpsResponse"> & {
  /**
   * The returned list of IP addresses (including region and location) that the
   * checkers run from.
   *
   * @generated from field: repeated google.monitoring.v3.UptimeCheckIp uptime_check_ips = 1;
   */
  uptimeCheckIps: UptimeCheckIp[];

  /**
   * This field represents the pagination token to retrieve the next page of
   * results. If the value is empty, it means no further results for the
   * request. To retrieve the next page of results, the value of the
   * next_page_token is passed to the subsequent List method call (in the
   * request message's page_token field).
   * NOTE: this field is not yet implemented
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.monitoring.v3.ListUptimeCheckIpsResponse.
 * Use `create(ListUptimeCheckIpsResponseSchema)` to create a new message.
 */
export const ListUptimeCheckIpsResponseSchema: GenMessage<ListUptimeCheckIpsResponse> = /*@__PURE__*/
  messageDesc(file_google_monitoring_v3_uptime_service, 7);

/**
 * The UptimeCheckService API is used to manage (list, create, delete, edit)
 * Uptime check configurations in the Cloud Monitoring product. An Uptime
 * check is a piece of configuration that determines which resources and
 * services to monitor for availability. These configurations can also be
 * configured interactively by navigating to the [Cloud console]
 * (https://console.cloud.google.com), selecting the appropriate project,
 * clicking on "Monitoring" on the left-hand side to navigate to Cloud
 * Monitoring, and then clicking on "Uptime".
 *
 * @generated from service google.monitoring.v3.UptimeCheckService
 */
export const UptimeCheckService: GenService<{
  /**
   * Lists the existing valid Uptime check configurations for the project
   * (leaving out any invalid configurations).
   *
   * @generated from rpc google.monitoring.v3.UptimeCheckService.ListUptimeCheckConfigs
   */
  listUptimeCheckConfigs: {
    methodKind: "unary";
    input: typeof ListUptimeCheckConfigsRequestSchema;
    output: typeof ListUptimeCheckConfigsResponseSchema;
  },
  /**
   * Gets a single Uptime check configuration.
   *
   * @generated from rpc google.monitoring.v3.UptimeCheckService.GetUptimeCheckConfig
   */
  getUptimeCheckConfig: {
    methodKind: "unary";
    input: typeof GetUptimeCheckConfigRequestSchema;
    output: typeof UptimeCheckConfigSchema;
  },
  /**
   * Creates a new Uptime check configuration.
   *
   * @generated from rpc google.monitoring.v3.UptimeCheckService.CreateUptimeCheckConfig
   */
  createUptimeCheckConfig: {
    methodKind: "unary";
    input: typeof CreateUptimeCheckConfigRequestSchema;
    output: typeof UptimeCheckConfigSchema;
  },
  /**
   * Updates an Uptime check configuration. You can either replace the entire
   * configuration with a new one or replace only certain fields in the current
   * configuration by specifying the fields to be updated via `updateMask`.
   * Returns the updated configuration.
   *
   * @generated from rpc google.monitoring.v3.UptimeCheckService.UpdateUptimeCheckConfig
   */
  updateUptimeCheckConfig: {
    methodKind: "unary";
    input: typeof UpdateUptimeCheckConfigRequestSchema;
    output: typeof UptimeCheckConfigSchema;
  },
  /**
   * Deletes an Uptime check configuration. Note that this method will fail
   * if the Uptime check configuration is referenced by an alert policy or
   * other dependent configs that would be rendered invalid by the deletion.
   *
   * @generated from rpc google.monitoring.v3.UptimeCheckService.DeleteUptimeCheckConfig
   */
  deleteUptimeCheckConfig: {
    methodKind: "unary";
    input: typeof DeleteUptimeCheckConfigRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Returns the list of IP addresses that checkers run from
   *
   * @generated from rpc google.monitoring.v3.UptimeCheckService.ListUptimeCheckIps
   */
  listUptimeCheckIps: {
    methodKind: "unary";
    input: typeof ListUptimeCheckIpsRequestSchema;
    output: typeof ListUptimeCheckIpsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_monitoring_v3_uptime_service, 0);
