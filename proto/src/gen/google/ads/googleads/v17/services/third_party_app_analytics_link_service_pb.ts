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
// @generated from file google/ads/googleads/v17/services/third_party_app_analytics_link_service.proto (package google.ads.googleads.v17.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/services/third_party_app_analytics_link_service.proto.
 */
export const file_google_ads_googleads_v17_services_third_party_app_analytics_link_service: GenFile = /*@__PURE__*/
  fileDesc("Ck5nb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXMvdGhpcmRfcGFydHlfYXBwX2FuYWx5dGljc19saW5rX3NlcnZpY2UucHJvdG8SIWdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcyJzCiBSZWdlbmVyYXRlU2hhcmVhYmxlTGlua0lkUmVxdWVzdBJPCg1yZXNvdXJjZV9uYW1lGAEgASgJQjj6QTUKM2dvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9UaGlyZFBhcnR5QXBwQW5hbHl0aWNzTGluayIjCiFSZWdlbmVyYXRlU2hhcmVhYmxlTGlua0lkUmVzcG9uc2Uy+AIKIVRoaXJkUGFydHlBcHBBbmFseXRpY3NMaW5rU2VydmljZRKLAgoZUmVnZW5lcmF0ZVNoYXJlYWJsZUxpbmtJZBJDLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5SZWdlbmVyYXRlU2hhcmVhYmxlTGlua0lkUmVxdWVzdBpELmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5SZWdlbmVyYXRlU2hhcmVhYmxlTGlua0lkUmVzcG9uc2UiY4LT5JMCXToBKiJYL3YxNy97cmVzb3VyY2VfbmFtZT1jdXN0b21lcnMvKi90aGlyZFBhcnR5QXBwQW5hbHl0aWNzTGlua3MvKn06cmVnZW5lcmF0ZVNoYXJlYWJsZUxpbmtJZBpFykEYZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29t0kEnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9hZHdvcmRzQpICCiVjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzQiZUaGlyZFBhcnR5QXBwQW5hbHl0aWNzTGlua1NlcnZpY2VQcm90b1ABWklnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L3NlcnZpY2VzO3NlcnZpY2VzogIDR0FBqgIhR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE3LlNlcnZpY2VzygIhR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XFNlcnZpY2Vz6gIlR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpTZXJ2aWNlc2IGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_resource]);

/**
 * Request message for
 * [ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId][google.ads.googleads.v17.services.ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId].
 *
 * @generated from message google.ads.googleads.v17.services.RegenerateShareableLinkIdRequest
 */
export type RegenerateShareableLinkIdRequest = Message<"google.ads.googleads.v17.services.RegenerateShareableLinkIdRequest"> & {
  /**
   * Resource name of the third party app analytics link.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.googleads.v17.services.RegenerateShareableLinkIdRequest.
 * Use `create(RegenerateShareableLinkIdRequestSchema)` to create a new message.
 */
export const RegenerateShareableLinkIdRequestSchema: GenMessage<RegenerateShareableLinkIdRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_third_party_app_analytics_link_service, 0);

/**
 * Response message for
 * [ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId][google.ads.googleads.v17.services.ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId].
 *
 * @generated from message google.ads.googleads.v17.services.RegenerateShareableLinkIdResponse
 */
export type RegenerateShareableLinkIdResponse = Message<"google.ads.googleads.v17.services.RegenerateShareableLinkIdResponse"> & {
};

/**
 * Describes the message google.ads.googleads.v17.services.RegenerateShareableLinkIdResponse.
 * Use `create(RegenerateShareableLinkIdResponseSchema)` to create a new message.
 */
export const RegenerateShareableLinkIdResponseSchema: GenMessage<RegenerateShareableLinkIdResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_third_party_app_analytics_link_service, 1);

/**
 * This service allows management of links between Google Ads and third party
 * app analytics.
 *
 * @generated from service google.ads.googleads.v17.services.ThirdPartyAppAnalyticsLinkService
 */
export const ThirdPartyAppAnalyticsLinkService: GenService<{
  /**
   * Regenerate ThirdPartyAppAnalyticsLink.shareable_link_id that should be
   * provided to the third party when setting up app analytics.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [QuotaError]()
   *   [RequestError]()
   *
   * @generated from rpc google.ads.googleads.v17.services.ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId
   */
  regenerateShareableLinkId: {
    methodKind: "unary";
    input: typeof RegenerateShareableLinkIdRequestSchema;
    output: typeof RegenerateShareableLinkIdResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v17_services_third_party_app_analytics_link_service, 0);
