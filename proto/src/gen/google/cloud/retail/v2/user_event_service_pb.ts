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
// @generated from file google/cloud/retail/v2/user_event_service.proto (package google.cloud.retail.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { HttpBodySchema } from "../../../api/httpbody_pb";
import { file_google_api_httpbody } from "../../../api/httpbody_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { ImportUserEventsRequestSchema } from "./import_config_pb";
import { file_google_cloud_retail_v2_import_config } from "./import_config_pb";
import type { PurgeUserEventsRequestSchema } from "./purge_config_pb";
import { file_google_cloud_retail_v2_purge_config } from "./purge_config_pb";
import type { UserEvent, UserEventSchema } from "./user_event_pb";
import { file_google_cloud_retail_v2_user_event } from "./user_event_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/retail/v2/user_event_service.proto.
 */
export const file_google_cloud_retail_v2_user_event_service: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvcmV0YWlsL3YyL3VzZXJfZXZlbnRfc2VydmljZS5wcm90bxIWZ29vZ2xlLmNsb3VkLnJldGFpbC52MiJ9ChVXcml0ZVVzZXJFdmVudFJlcXVlc3QSEwoGcGFyZW50GAEgASgJQgPgQQISOgoKdXNlcl9ldmVudBgCIAEoCzIhLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuVXNlckV2ZW50QgPgQQISEwoLd3JpdGVfYXN5bmMYAyABKAginwEKF0NvbGxlY3RVc2VyRXZlbnRSZXF1ZXN0EhcKDXByZWJ1aWx0X3J1bGUYBiABKAlIABITCgZwYXJlbnQYASABKAlCA+BBAhIXCgp1c2VyX2V2ZW50GAIgASgJQgPgQQISCwoDdXJpGAMgASgJEgsKA2V0cxgEIAEoAxIQCghyYXdfanNvbhgFIAEoCUIRCg9jb252ZXJzaW9uX3J1bGUi/gEKF1Jlam9pblVzZXJFdmVudHNSZXF1ZXN0EhMKBnBhcmVudBgBIAEoCUID4EECEmUKF3VzZXJfZXZlbnRfcmVqb2luX3Njb3BlGAIgASgOMkQuZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5SZWpvaW5Vc2VyRXZlbnRzUmVxdWVzdC5Vc2VyRXZlbnRSZWpvaW5TY29wZSJnChRVc2VyRXZlbnRSZWpvaW5TY29wZRInCiNVU0VSX0VWRU5UX1JFSk9JTl9TQ09QRV9VTlNQRUNJRklFRBAAEhEKDUpPSU5FRF9FVkVOVFMQARITCg9VTkpPSU5FRF9FVkVOVFMQAiI+ChhSZWpvaW5Vc2VyRXZlbnRzUmVzcG9uc2USIgoacmVqb2luZWRfdXNlcl9ldmVudHNfY291bnQYASABKAMiGgoYUmVqb2luVXNlckV2ZW50c01ldGFkYXRhMr8JChBVc2VyRXZlbnRTZXJ2aWNlErcBCg5Xcml0ZVVzZXJFdmVudBItLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuV3JpdGVVc2VyRXZlbnRSZXF1ZXN0GiEuZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5Vc2VyRXZlbnQiU4LT5JMCTToKdXNlcl9ldmVudCI/L3YyL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jYXRhbG9ncy8qfS91c2VyRXZlbnRzOndyaXRlEqQBChBDb2xsZWN0VXNlckV2ZW50Ei8uZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5Db2xsZWN0VXNlckV2ZW50UmVxdWVzdBoULmdvb2dsZS5hcGkuSHR0cEJvZHkiSYLT5JMCQxJBL3YyL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jYXRhbG9ncy8qfS91c2VyRXZlbnRzOmNvbGxlY3QShgIKD1B1cmdlVXNlckV2ZW50cxIuLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuUHVyZ2VVc2VyRXZlbnRzUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24iowHKQVYKLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuUHVyZ2VVc2VyRXZlbnRzUmVzcG9uc2USJGdvb2dsZS5jbG91ZC5yZXRhaWwudjIuUHVyZ2VNZXRhZGF0YYLT5JMCRDoBKiI/L3YyL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jYXRhbG9ncy8qfS91c2VyRXZlbnRzOnB1cmdlEosCChBJbXBvcnRVc2VyRXZlbnRzEi8uZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5JbXBvcnRVc2VyRXZlbnRzUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24ipgHKQVgKL2dvb2dsZS5jbG91ZC5yZXRhaWwudjIuSW1wb3J0VXNlckV2ZW50c1Jlc3BvbnNlEiVnb29nbGUuY2xvdWQucmV0YWlsLnYyLkltcG9ydE1ldGFkYXRhgtPkkwJFOgEqIkAvdjIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyp9L3VzZXJFdmVudHM6aW1wb3J0EucBChBSZWpvaW5Vc2VyRXZlbnRzEi8uZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5SZWpvaW5Vc2VyRXZlbnRzUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24iggHKQTQKGFJlam9pblVzZXJFdmVudHNSZXNwb25zZRIYUmVqb2luVXNlckV2ZW50c01ldGFkYXRhgtPkkwJFOgEqIkAvdjIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyp9L3VzZXJFdmVudHM6cmVqb2luGknKQRVyZXRhaWwuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQsABChpjb20uZ29vZ2xlLmNsb3VkLnJldGFpbC52MkIVVXNlckV2ZW50U2VydmljZVByb3RvUAFaMmNsb3VkLmdvb2dsZS5jb20vZ28vcmV0YWlsL2FwaXYyL3JldGFpbHBiO3JldGFpbHBiogIGUkVUQUlMqgIWR29vZ2xlLkNsb3VkLlJldGFpbC5WMsoCFkdvb2dsZVxDbG91ZFxSZXRhaWxcVjLqAhlHb29nbGU6OkNsb3VkOjpSZXRhaWw6OlYyYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_httpbody, file_google_api_resource, file_google_cloud_retail_v2_import_config, file_google_cloud_retail_v2_purge_config, file_google_cloud_retail_v2_user_event, file_google_longrunning_operations]);

/**
 * Request message for WriteUserEvent method.
 *
 * @generated from message google.cloud.retail.v2.WriteUserEventRequest
 */
export type WriteUserEventRequest = Message<"google.cloud.retail.v2.WriteUserEventRequest"> & {
  /**
   * Required. The parent catalog resource name, such as
   * `projects/1234/locations/global/catalogs/default_catalog`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. User event to write.
   *
   * @generated from field: google.cloud.retail.v2.UserEvent user_event = 2;
   */
  userEvent?: UserEvent;

  /**
   * If set to true, the user event will be written asynchronously after
   * validation, and the API will respond without waiting for the write.
   * Therefore, silent failures can occur even if the API returns success. In
   * case of silent failures, error messages can be found in Stackdriver logs.
   *
   * @generated from field: bool write_async = 3;
   */
  writeAsync: boolean;
};

/**
 * Describes the message google.cloud.retail.v2.WriteUserEventRequest.
 * Use `create(WriteUserEventRequestSchema)` to create a new message.
 */
export const WriteUserEventRequestSchema: GenMessage<WriteUserEventRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_user_event_service, 0);

/**
 * Request message for CollectUserEvent method.
 *
 * @generated from message google.cloud.retail.v2.CollectUserEventRequest
 */
export type CollectUserEventRequest = Message<"google.cloud.retail.v2.CollectUserEventRequest"> & {
  /**
   * The rule that can convert the raw_json to a user event. It is needed
   * only when the raw_json is set.
   *
   * @generated from oneof google.cloud.retail.v2.CollectUserEventRequest.conversion_rule
   */
  conversionRule: {
    /**
     * The prebuilt rule name that can convert a specific type of raw_json.
     * For example: "ga4_bq" rule for the GA4 user event schema.
     *
     * @generated from field: string prebuilt_rule = 6;
     */
    value: string;
    case: "prebuiltRule";
  } | { case: undefined; value?: undefined };

  /**
   * Required. The parent catalog name, such as
   * `projects/1234/locations/global/catalogs/default_catalog`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. URL encoded UserEvent proto with a length limit of 2,000,000
   * characters.
   *
   * @generated from field: string user_event = 2;
   */
  userEvent: string;

  /**
   * The URL including cgi-parameters but excluding the hash fragment with a
   * length limit of 5,000 characters. This is often more useful than the
   * referer URL, because many browsers only send the domain for 3rd party
   * requests.
   *
   * @generated from field: string uri = 3;
   */
  uri: string;

  /**
   * The event timestamp in milliseconds. This prevents browser caching of
   * otherwise identical get requests. The name is abbreviated to reduce the
   * payload bytes.
   *
   * @generated from field: int64 ets = 4;
   */
  ets: bigint;

  /**
   * An arbitrary serialized JSON string that contains necessary information
   * that can comprise a user event. When this field is specified, the
   * user_event field will be ignored. Note: line-delimited JSON is not
   * supported, a single JSON only.
   *
   * @generated from field: string raw_json = 5;
   */
  rawJson: string;
};

/**
 * Describes the message google.cloud.retail.v2.CollectUserEventRequest.
 * Use `create(CollectUserEventRequestSchema)` to create a new message.
 */
export const CollectUserEventRequestSchema: GenMessage<CollectUserEventRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_user_event_service, 1);

/**
 * Request message for RejoinUserEvents method.
 *
 * @generated from message google.cloud.retail.v2.RejoinUserEventsRequest
 */
export type RejoinUserEventsRequest = Message<"google.cloud.retail.v2.RejoinUserEventsRequest"> & {
  /**
   * Required. The parent catalog resource name, such as
   * `projects/1234/locations/global/catalogs/default_catalog`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The type of the user event rejoin to define the scope and range of the user
   * events to be rejoined with the latest product catalog. Defaults to
   * `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to
   * an invalid integer value.
   *
   * @generated from field: google.cloud.retail.v2.RejoinUserEventsRequest.UserEventRejoinScope user_event_rejoin_scope = 2;
   */
  userEventRejoinScope: RejoinUserEventsRequest_UserEventRejoinScope;
};

/**
 * Describes the message google.cloud.retail.v2.RejoinUserEventsRequest.
 * Use `create(RejoinUserEventsRequestSchema)` to create a new message.
 */
export const RejoinUserEventsRequestSchema: GenMessage<RejoinUserEventsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_user_event_service, 2);

/**
 * The scope of user events to be rejoined with the latest product catalog.
 * If the rejoining aims at reducing number of unjoined events, set
 * `UserEventRejoinScope` to `UNJOINED_EVENTS`.
 * If the rejoining aims at correcting product catalog information in joined
 * events, set `UserEventRejoinScope` to `JOINED_EVENTS`.
 * If all events needs to be rejoined, set `UserEventRejoinScope` to
 * `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED`.
 *
 * @generated from enum google.cloud.retail.v2.RejoinUserEventsRequest.UserEventRejoinScope
 */
export enum RejoinUserEventsRequest_UserEventRejoinScope {
  /**
   * Rejoin all events with the latest product catalog, including both joined
   * events and unjoined events.
   *
   * @generated from enum value: USER_EVENT_REJOIN_SCOPE_UNSPECIFIED = 0;
   */
  USER_EVENT_REJOIN_SCOPE_UNSPECIFIED = 0,

  /**
   * Only rejoin joined events with the latest product catalog.
   *
   * @generated from enum value: JOINED_EVENTS = 1;
   */
  JOINED_EVENTS = 1,

  /**
   * Only rejoin unjoined events with the latest product catalog.
   *
   * @generated from enum value: UNJOINED_EVENTS = 2;
   */
  UNJOINED_EVENTS = 2,
}

/**
 * Describes the enum google.cloud.retail.v2.RejoinUserEventsRequest.UserEventRejoinScope.
 */
export const RejoinUserEventsRequest_UserEventRejoinScopeSchema: GenEnum<RejoinUserEventsRequest_UserEventRejoinScope> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2_user_event_service, 2, 0);

/**
 * Response message for `RejoinUserEvents` method.
 *
 * @generated from message google.cloud.retail.v2.RejoinUserEventsResponse
 */
export type RejoinUserEventsResponse = Message<"google.cloud.retail.v2.RejoinUserEventsResponse"> & {
  /**
   * Number of user events that were joined with latest product catalog.
   *
   * @generated from field: int64 rejoined_user_events_count = 1;
   */
  rejoinedUserEventsCount: bigint;
};

/**
 * Describes the message google.cloud.retail.v2.RejoinUserEventsResponse.
 * Use `create(RejoinUserEventsResponseSchema)` to create a new message.
 */
export const RejoinUserEventsResponseSchema: GenMessage<RejoinUserEventsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_user_event_service, 3);

/**
 * Metadata for `RejoinUserEvents` method.
 *
 * @generated from message google.cloud.retail.v2.RejoinUserEventsMetadata
 */
export type RejoinUserEventsMetadata = Message<"google.cloud.retail.v2.RejoinUserEventsMetadata"> & {
};

/**
 * Describes the message google.cloud.retail.v2.RejoinUserEventsMetadata.
 * Use `create(RejoinUserEventsMetadataSchema)` to create a new message.
 */
export const RejoinUserEventsMetadataSchema: GenMessage<RejoinUserEventsMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_user_event_service, 4);

/**
 * Service for ingesting end user actions on the customer website.
 *
 * @generated from service google.cloud.retail.v2.UserEventService
 */
export const UserEventService: GenService<{
  /**
   * Writes a single user event.
   *
   * @generated from rpc google.cloud.retail.v2.UserEventService.WriteUserEvent
   */
  writeUserEvent: {
    methodKind: "unary";
    input: typeof WriteUserEventRequestSchema;
    output: typeof UserEventSchema;
  },
  /**
   * Writes a single user event from the browser. This uses a GET request to
   * due to browser restriction of POST-ing to a 3rd party domain.
   *
   * This method is used only by the Retail API JavaScript pixel and Google Tag
   * Manager. Users should not call this method directly.
   *
   * @generated from rpc google.cloud.retail.v2.UserEventService.CollectUserEvent
   */
  collectUserEvent: {
    methodKind: "unary";
    input: typeof CollectUserEventRequestSchema;
    output: typeof HttpBodySchema;
  },
  /**
   * Deletes permanently all user events specified by the filter provided.
   * Depending on the number of events specified by the filter, this operation
   * could take hours or days to complete. To test a filter, use the list
   * command first.
   *
   * @generated from rpc google.cloud.retail.v2.UserEventService.PurgeUserEvents
   */
  purgeUserEvents: {
    methodKind: "unary";
    input: typeof PurgeUserEventsRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Bulk import of User events. Request processing might be
   * synchronous. Events that already exist are skipped.
   * Use this method for backfilling historical user events.
   *
   * `Operation.response` is of type `ImportResponse`. Note that it is
   * possible for a subset of the items to be successfully inserted.
   * `Operation.metadata` is of type `ImportMetadata`.
   *
   * @generated from rpc google.cloud.retail.v2.UserEventService.ImportUserEvents
   */
  importUserEvents: {
    methodKind: "unary";
    input: typeof ImportUserEventsRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Starts a user-event rejoin operation with latest product catalog. Events
   * are not annotated with detailed product information for products that are
   * missing from the catalog when the user event is ingested. These
   * events are stored as unjoined events with limited usage on training and
   * serving. You can use this method to start a join operation on specified
   * events with the latest version of product catalog. You can also use this
   * method to correct events joined with the wrong product catalog. A rejoin
   * operation can take hours or days to complete.
   *
   * @generated from rpc google.cloud.retail.v2.UserEventService.RejoinUserEvents
   */
  rejoinUserEvents: {
    methodKind: "unary";
    input: typeof RejoinUserEventsRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_retail_v2_user_event_service, 0);
