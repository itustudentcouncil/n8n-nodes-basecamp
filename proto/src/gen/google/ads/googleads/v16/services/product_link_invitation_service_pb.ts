// Copyright 2023 Google LLC
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
// @generated from file google/ads/googleads/v16/services/product_link_invitation_service.proto (package google.ads.googleads.v16.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus } from "../enums/product_link_invitation_status_pb";
import { file_google_ads_googleads_v16_enums_product_link_invitation_status } from "../enums/product_link_invitation_status_pb";
import type { ProductLinkInvitation } from "../resources/product_link_invitation_pb";
import { file_google_ads_googleads_v16_resources_product_link_invitation } from "../resources/product_link_invitation_pb";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/services/product_link_invitation_service.proto.
 */
export const file_google_ads_googleads_v16_services_product_link_invitation_service: GenFile = /*@__PURE__*/
  fileDesc("Ckdnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvc2VydmljZXMvcHJvZHVjdF9saW5rX2ludml0YXRpb25fc2VydmljZS5wcm90bxIhZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzIp8BCiJDcmVhdGVQcm9kdWN0TGlua0ludml0YXRpb25SZXF1ZXN0EhgKC2N1c3RvbWVyX2lkGAEgASgJQgPgQQISXwoXcHJvZHVjdF9saW5rX2ludml0YXRpb24YAiABKAsyOS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzLlByb2R1Y3RMaW5rSW52aXRhdGlvbkID4EECInEKI0NyZWF0ZVByb2R1Y3RMaW5rSW52aXRhdGlvblJlc3BvbnNlEkoKDXJlc291cmNlX25hbWUYASABKAlCM/pBMAouZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL1Byb2R1Y3RMaW5rSW52aXRhdGlvbiKYAgoiVXBkYXRlUHJvZHVjdExpbmtJbnZpdGF0aW9uUmVxdWVzdBIYCgtjdXN0b21lcl9pZBgBIAEoCUID4EECEogBCh5wcm9kdWN0X2xpbmtfaW52aXRhdGlvbl9zdGF0dXMYAiABKA4yWy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUHJvZHVjdExpbmtJbnZpdGF0aW9uU3RhdHVzRW51bS5Qcm9kdWN0TGlua0ludml0YXRpb25TdGF0dXNCA+BBAhJNCg1yZXNvdXJjZV9uYW1lGAMgASgJQjbgQQL6QTAKLmdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9Qcm9kdWN0TGlua0ludml0YXRpb24icQojVXBkYXRlUHJvZHVjdExpbmtJbnZpdGF0aW9uUmVzcG9uc2USSgoNcmVzb3VyY2VfbmFtZRgBIAEoCUIz+kEwCi5nb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vUHJvZHVjdExpbmtJbnZpdGF0aW9uIo0BCiJSZW1vdmVQcm9kdWN0TGlua0ludml0YXRpb25SZXF1ZXN0EhgKC2N1c3RvbWVyX2lkGAEgASgJQgPgQQISTQoNcmVzb3VyY2VfbmFtZRgCIAEoCUI24EEC+kEwCi5nb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vUHJvZHVjdExpbmtJbnZpdGF0aW9uInEKI1JlbW92ZVByb2R1Y3RMaW5rSW52aXRhdGlvblJlc3BvbnNlEkoKDXJlc291cmNlX25hbWUYASABKAlCM/pBMAouZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL1Byb2R1Y3RMaW5rSW52aXRhdGlvbjLLBwocUHJvZHVjdExpbmtJbnZpdGF0aW9uU2VydmljZRKbAgobQ3JlYXRlUHJvZHVjdExpbmtJbnZpdGF0aW9uEkUuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLkNyZWF0ZVByb2R1Y3RMaW5rSW52aXRhdGlvblJlcXVlc3QaRi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXMuQ3JlYXRlUHJvZHVjdExpbmtJbnZpdGF0aW9uUmVzcG9uc2UibdpBI2N1c3RvbWVyX2lkLHByb2R1Y3RfbGlua19pbnZpdGF0aW9ugtPkkwJBOgEqIjwvdjE2L2N1c3RvbWVycy97Y3VzdG9tZXJfaWQ9Kn0vcHJvZHVjdExpbmtJbnZpdGF0aW9uczpjcmVhdGUSsQIKG1VwZGF0ZVByb2R1Y3RMaW5rSW52aXRhdGlvbhJFLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5zZXJ2aWNlcy5VcGRhdGVQcm9kdWN0TGlua0ludml0YXRpb25SZXF1ZXN0GkYuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLlVwZGF0ZVByb2R1Y3RMaW5rSW52aXRhdGlvblJlc3BvbnNlIoIB2kE4Y3VzdG9tZXJfaWQscHJvZHVjdF9saW5rX2ludml0YXRpb25fc3RhdHVzLHJlc291cmNlX25hbWWC0+STAkE6ASoiPC92MTYvY3VzdG9tZXJzL3tjdXN0b21lcl9pZD0qfS9wcm9kdWN0TGlua0ludml0YXRpb25zOnVwZGF0ZRKRAgobUmVtb3ZlUHJvZHVjdExpbmtJbnZpdGF0aW9uEkUuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLlJlbW92ZVByb2R1Y3RMaW5rSW52aXRhdGlvblJlcXVlc3QaRi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXMuUmVtb3ZlUHJvZHVjdExpbmtJbnZpdGF0aW9uUmVzcG9uc2UiY9pBGWN1c3RvbWVyX2lkLHJlc291cmNlX25hbWWC0+STAkE6ASoiPC92MTYvY3VzdG9tZXJzL3tjdXN0b21lcl9pZD0qfS9wcm9kdWN0TGlua0ludml0YXRpb25zOnJlbW92ZRpFykEYZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29t0kEnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9hZHdvcmRzQo0CCiVjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzQiFQcm9kdWN0TGlua0ludml0YXRpb25TZXJ2aWNlUHJvdG9QAVpJZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9zZXJ2aWNlcztzZXJ2aWNlc6ICA0dBQaoCIUdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5TZXJ2aWNlc8oCIUdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxTZXJ2aWNlc+oCJUdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6U2VydmljZXNiBnByb3RvMw", [file_google_ads_googleads_v16_enums_product_link_invitation_status, file_google_ads_googleads_v16_resources_product_link_invitation, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource]);

/**
 * Request message for
 * [ProductLinkInvitationService.CreateProductLinkInvitation][google.ads.googleads.v16.services.ProductLinkInvitationService.CreateProductLinkInvitation].
 *
 * @generated from message google.ads.googleads.v16.services.CreateProductLinkInvitationRequest
 */
export type CreateProductLinkInvitationRequest = Message<"google.ads.googleads.v16.services.CreateProductLinkInvitationRequest"> & {
  /**
   * Required. The ID of the customer being modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The product link invitation to be created.
   *
   * @generated from field: google.ads.googleads.v16.resources.ProductLinkInvitation product_link_invitation = 2;
   */
  productLinkInvitation?: ProductLinkInvitation;
};

/**
 * Describes the message google.ads.googleads.v16.services.CreateProductLinkInvitationRequest.
 * Use `create(CreateProductLinkInvitationRequestSchema)` to create a new message.
 */
export const CreateProductLinkInvitationRequestSchema: GenMessage<CreateProductLinkInvitationRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_product_link_invitation_service, 0);

/**
 * Response message for product link invitation create.
 *
 * @generated from message google.ads.googleads.v16.services.CreateProductLinkInvitationResponse
 */
export type CreateProductLinkInvitationResponse = Message<"google.ads.googleads.v16.services.CreateProductLinkInvitationResponse"> & {
  /**
   * Resource name of the product link invitation.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.googleads.v16.services.CreateProductLinkInvitationResponse.
 * Use `create(CreateProductLinkInvitationResponseSchema)` to create a new message.
 */
export const CreateProductLinkInvitationResponseSchema: GenMessage<CreateProductLinkInvitationResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_product_link_invitation_service, 1);

/**
 * Request message for
 * [ProductLinkInvitationService.UpdateProductLinkInvitation][google.ads.googleads.v16.services.ProductLinkInvitationService.UpdateProductLinkInvitation].
 *
 * @generated from message google.ads.googleads.v16.services.UpdateProductLinkInvitationRequest
 */
export type UpdateProductLinkInvitationRequest = Message<"google.ads.googleads.v16.services.UpdateProductLinkInvitationRequest"> & {
  /**
   * Required. The ID of the customer being modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The product link invitation to be created.
   *
   * @generated from field: google.ads.googleads.v16.enums.ProductLinkInvitationStatusEnum.ProductLinkInvitationStatus product_link_invitation_status = 2;
   */
  productLinkInvitationStatus: ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus;

  /**
   * Required. Resource name of the product link invitation.
   *
   * @generated from field: string resource_name = 3;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.googleads.v16.services.UpdateProductLinkInvitationRequest.
 * Use `create(UpdateProductLinkInvitationRequestSchema)` to create a new message.
 */
export const UpdateProductLinkInvitationRequestSchema: GenMessage<UpdateProductLinkInvitationRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_product_link_invitation_service, 2);

/**
 * Response message for product link invitation update.
 *
 * @generated from message google.ads.googleads.v16.services.UpdateProductLinkInvitationResponse
 */
export type UpdateProductLinkInvitationResponse = Message<"google.ads.googleads.v16.services.UpdateProductLinkInvitationResponse"> & {
  /**
   * Result of the update.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.googleads.v16.services.UpdateProductLinkInvitationResponse.
 * Use `create(UpdateProductLinkInvitationResponseSchema)` to create a new message.
 */
export const UpdateProductLinkInvitationResponseSchema: GenMessage<UpdateProductLinkInvitationResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_product_link_invitation_service, 3);

/**
 * Request message for
 * [ProductLinkinvitationService.RemoveProductLinkInvitation][].
 *
 * @generated from message google.ads.googleads.v16.services.RemoveProductLinkInvitationRequest
 */
export type RemoveProductLinkInvitationRequest = Message<"google.ads.googleads.v16.services.RemoveProductLinkInvitationRequest"> & {
  /**
   * Required. The ID of the product link invitation being removed.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The resource name of the product link invitation being removed.
   * expected, in this format:
   *
   * ` `
   *
   * @generated from field: string resource_name = 2;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.googleads.v16.services.RemoveProductLinkInvitationRequest.
 * Use `create(RemoveProductLinkInvitationRequestSchema)` to create a new message.
 */
export const RemoveProductLinkInvitationRequestSchema: GenMessage<RemoveProductLinkInvitationRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_product_link_invitation_service, 4);

/**
 * Response message for product link invitation removeal.
 *
 * @generated from message google.ads.googleads.v16.services.RemoveProductLinkInvitationResponse
 */
export type RemoveProductLinkInvitationResponse = Message<"google.ads.googleads.v16.services.RemoveProductLinkInvitationResponse"> & {
  /**
   * Result for the remove request.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.googleads.v16.services.RemoveProductLinkInvitationResponse.
 * Use `create(RemoveProductLinkInvitationResponseSchema)` to create a new message.
 */
export const RemoveProductLinkInvitationResponseSchema: GenMessage<RemoveProductLinkInvitationResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_product_link_invitation_service, 5);

/**
 * This service allows management of product link invitations from Google Ads
 * accounts to other accounts.
 *
 * @generated from service google.ads.googleads.v16.services.ProductLinkInvitationService
 */
export const ProductLinkInvitationService: GenService<{
  /**
   * Creates a product link invitation.
   *
   * @generated from rpc google.ads.googleads.v16.services.ProductLinkInvitationService.CreateProductLinkInvitation
   */
  createProductLinkInvitation: {
    methodKind: "unary";
    input: typeof CreateProductLinkInvitationRequestSchema;
    output: typeof CreateProductLinkInvitationResponseSchema;
  },
  /**
   * Update a product link invitation.
   *
   * @generated from rpc google.ads.googleads.v16.services.ProductLinkInvitationService.UpdateProductLinkInvitation
   */
  updateProductLinkInvitation: {
    methodKind: "unary";
    input: typeof UpdateProductLinkInvitationRequestSchema;
    output: typeof UpdateProductLinkInvitationResponseSchema;
  },
  /**
   * Remove a product link invitation.
   *
   * @generated from rpc google.ads.googleads.v16.services.ProductLinkInvitationService.RemoveProductLinkInvitation
   */
  removeProductLinkInvitation: {
    methodKind: "unary";
    input: typeof RemoveProductLinkInvitationRequestSchema;
    output: typeof RemoveProductLinkInvitationResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v16_services_product_link_invitation_service, 0);
