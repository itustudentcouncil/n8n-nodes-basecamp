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
// @generated from file google/ads/googleads/v17/services/customer_service.proto (package google.ads.googleads.v17.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { AccessRoleEnum_AccessRole } from "../enums/access_role_pb";
import { file_google_ads_googleads_v17_enums_access_role } from "../enums/access_role_pb";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v17_enums_response_content_type } from "../enums/response_content_type_pb";
import type { Customer } from "../resources/customer_pb";
import { file_google_ads_googleads_v17_resources_customer } from "../resources/customer_pb";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/services/customer_service.proto.
 */
export const file_google_ads_googleads_v17_services_customer_service: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXMvY3VzdG9tZXJfc2VydmljZS5wcm90bxIhZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzIoICChVNdXRhdGVDdXN0b21lclJlcXVlc3QSGAoLY3VzdG9tZXJfaWQYASABKAlCA+BBAhJMCglvcGVyYXRpb24YBCABKAsyNC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuQ3VzdG9tZXJPcGVyYXRpb25CA+BBAhIVCg12YWxpZGF0ZV9vbmx5GAUgASgIEmoKFXJlc3BvbnNlX2NvbnRlbnRfdHlwZRgGIAEoDjJLLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcy5SZXNwb25zZUNvbnRlbnRUeXBlRW51bS5SZXNwb25zZUNvbnRlbnRUeXBlIpgCChtDcmVhdGVDdXN0b21lckNsaWVudFJlcXVlc3QSGAoLY3VzdG9tZXJfaWQYASABKAlCA+BBAhJKCg9jdXN0b21lcl9jbGllbnQYAiABKAsyLC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzLkN1c3RvbWVyQgPgQQISGgoNZW1haWxfYWRkcmVzcxgFIAEoCUgAiAEBEk4KC2FjY2Vzc19yb2xlGAQgASgOMjkuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zLkFjY2Vzc1JvbGVFbnVtLkFjY2Vzc1JvbGUSFQoNdmFsaWRhdGVfb25seRgGIAEoCEIQCg5fZW1haWxfYWRkcmVzcyKCAQoRQ3VzdG9tZXJPcGVyYXRpb24SPAoGdXBkYXRlGAEgASgLMiwuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5DdXN0b21lchIvCgt1cGRhdGVfbWFzaxgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sidgocQ3JlYXRlQ3VzdG9tZXJDbGllbnRSZXNwb25zZRI9Cg1yZXNvdXJjZV9uYW1lGAIgASgJQib6QSMKIWdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9DdXN0b21lchIXCg9pbnZpdGF0aW9uX2xpbmsYAyABKAkiYQoWTXV0YXRlQ3VzdG9tZXJSZXNwb25zZRJHCgZyZXN1bHQYAiABKAsyNy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTXV0YXRlQ3VzdG9tZXJSZXN1bHQilQEKFE11dGF0ZUN1c3RvbWVyUmVzdWx0Ej0KDXJlc291cmNlX25hbWUYASABKAlCJvpBIwohZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0N1c3RvbWVyEj4KCGN1c3RvbWVyGAIgASgLMiwuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5DdXN0b21lciIgCh5MaXN0QWNjZXNzaWJsZUN1c3RvbWVyc1JlcXVlc3QiOQofTGlzdEFjY2Vzc2libGVDdXN0b21lcnNSZXNwb25zZRIWCg5yZXNvdXJjZV9uYW1lcxgBIAMoCTL1BQoPQ3VzdG9tZXJTZXJ2aWNlEs8BCg5NdXRhdGVDdXN0b21lchI4Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5NdXRhdGVDdXN0b21lclJlcXVlc3QaOS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTXV0YXRlQ3VzdG9tZXJSZXNwb25zZSJI2kEVY3VzdG9tZXJfaWQsb3BlcmF0aW9ugtPkkwIqOgEqIiUvdjE3L2N1c3RvbWVycy97Y3VzdG9tZXJfaWQ9Kn06bXV0YXRlEtABChdMaXN0QWNjZXNzaWJsZUN1c3RvbWVycxJBLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5MaXN0QWNjZXNzaWJsZUN1c3RvbWVyc1JlcXVlc3QaQi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTGlzdEFjY2Vzc2libGVDdXN0b21lcnNSZXNwb25zZSIugtPkkwIoEiYvdjE3L2N1c3RvbWVyczpsaXN0QWNjZXNzaWJsZUN1c3RvbWVycxL1AQoUQ3JlYXRlQ3VzdG9tZXJDbGllbnQSPi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuQ3JlYXRlQ3VzdG9tZXJDbGllbnRSZXF1ZXN0Gj8uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzLkNyZWF0ZUN1c3RvbWVyQ2xpZW50UmVzcG9uc2UiXNpBG2N1c3RvbWVyX2lkLGN1c3RvbWVyX2NsaWVudILT5JMCODoBKiIzL3YxNy9jdXN0b21lcnMve2N1c3RvbWVyX2lkPSp9OmNyZWF0ZUN1c3RvbWVyQ2xpZW50GkXKQRhnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb23SQSdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Fkd29yZHNCgAIKJWNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXNCFEN1c3RvbWVyU2VydmljZVByb3RvUAFaSWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXM7c2VydmljZXOiAgNHQUGqAiFHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuU2VydmljZXPKAiFHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcU2VydmljZXPqAiVHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTc6OlNlcnZpY2VzYgZwcm90bzM", [file_google_ads_googleads_v17_enums_access_role, file_google_ads_googleads_v17_enums_response_content_type, file_google_ads_googleads_v17_resources_customer, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask]);

/**
 * Request message for
 * [CustomerService.MutateCustomer][google.ads.googleads.v17.services.CustomerService.MutateCustomer].
 *
 * @generated from message google.ads.googleads.v17.services.MutateCustomerRequest
 */
export type MutateCustomerRequest = Message<"google.ads.googleads.v17.services.MutateCustomerRequest"> & {
  /**
   * Required. The ID of the customer being modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The operation to perform on the customer
   *
   * @generated from field: google.ads.googleads.v17.services.CustomerOperation operation = 4;
   */
  operation?: CustomerOperation;

  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   *
   * @generated from field: bool validate_only = 5;
   */
  validateOnly: boolean;

  /**
   * The response content type setting. Determines whether the mutable resource
   * or just the resource name should be returned post mutation.
   *
   * @generated from field: google.ads.googleads.v17.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 6;
   */
  responseContentType: ResponseContentTypeEnum_ResponseContentType;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateCustomerRequest.
 * Use `create(MutateCustomerRequestSchema)` to create a new message.
 */
export const MutateCustomerRequestSchema: GenMessage<MutateCustomerRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 0);

/**
 * Request message for
 * [CustomerService.CreateCustomerClient][google.ads.googleads.v17.services.CustomerService.CreateCustomerClient].
 *
 * @generated from message google.ads.googleads.v17.services.CreateCustomerClientRequest
 */
export type CreateCustomerClientRequest = Message<"google.ads.googleads.v17.services.CreateCustomerClientRequest"> & {
  /**
   * Required. The ID of the Manager under whom client customer is being
   * created.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The new client customer to create. The resource name on this
   * customer will be ignored.
   *
   * @generated from field: google.ads.googleads.v17.resources.Customer customer_client = 2;
   */
  customerClient?: Customer;

  /**
   * Email address of the user who should be invited on the created client
   * customer. Accessible only to customers on the allow-list.
   *
   * @generated from field: optional string email_address = 5;
   */
  emailAddress?: string;

  /**
   * The proposed role of user on the created client customer.
   * Accessible only to customers on the allow-list.
   *
   * @generated from field: google.ads.googleads.v17.enums.AccessRoleEnum.AccessRole access_role = 4;
   */
  accessRole: AccessRoleEnum_AccessRole;

  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   *
   * @generated from field: bool validate_only = 6;
   */
  validateOnly: boolean;
};

/**
 * Describes the message google.ads.googleads.v17.services.CreateCustomerClientRequest.
 * Use `create(CreateCustomerClientRequestSchema)` to create a new message.
 */
export const CreateCustomerClientRequestSchema: GenMessage<CreateCustomerClientRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 1);

/**
 * A single update on a customer.
 *
 * @generated from message google.ads.googleads.v17.services.CustomerOperation
 */
export type CustomerOperation = Message<"google.ads.googleads.v17.services.CustomerOperation"> & {
  /**
   * Mutate operation. Only updates are supported for customer.
   *
   * @generated from field: google.ads.googleads.v17.resources.Customer update = 1;
   */
  update?: Customer;

  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.ads.googleads.v17.services.CustomerOperation.
 * Use `create(CustomerOperationSchema)` to create a new message.
 */
export const CustomerOperationSchema: GenMessage<CustomerOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 2);

/**
 * Response message for CreateCustomerClient mutate.
 *
 * @generated from message google.ads.googleads.v17.services.CreateCustomerClientResponse
 */
export type CreateCustomerClientResponse = Message<"google.ads.googleads.v17.services.CreateCustomerClientResponse"> & {
  /**
   * The resource name of the newly created customer. Customer resource names
   * have the form: `customers/{customer_id}`.
   *
   * @generated from field: string resource_name = 2;
   */
  resourceName: string;

  /**
   * Link for inviting user to access the created customer. Accessible to
   * allowlisted customers only.
   *
   * @generated from field: string invitation_link = 3;
   */
  invitationLink: string;
};

/**
 * Describes the message google.ads.googleads.v17.services.CreateCustomerClientResponse.
 * Use `create(CreateCustomerClientResponseSchema)` to create a new message.
 */
export const CreateCustomerClientResponseSchema: GenMessage<CreateCustomerClientResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 3);

/**
 * Response message for customer mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateCustomerResponse
 */
export type MutateCustomerResponse = Message<"google.ads.googleads.v17.services.MutateCustomerResponse"> & {
  /**
   * Result for the mutate.
   *
   * @generated from field: google.ads.googleads.v17.services.MutateCustomerResult result = 2;
   */
  result?: MutateCustomerResult;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateCustomerResponse.
 * Use `create(MutateCustomerResponseSchema)` to create a new message.
 */
export const MutateCustomerResponseSchema: GenMessage<MutateCustomerResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 4);

/**
 * The result for the customer mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateCustomerResult
 */
export type MutateCustomerResult = Message<"google.ads.googleads.v17.services.MutateCustomerResult"> & {
  /**
   * Returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated customer with only mutable fields after mutate. The fields will
   * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v17.resources.Customer customer = 2;
   */
  customer?: Customer;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateCustomerResult.
 * Use `create(MutateCustomerResultSchema)` to create a new message.
 */
export const MutateCustomerResultSchema: GenMessage<MutateCustomerResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 5);

/**
 * Request message for
 * [CustomerService.ListAccessibleCustomers][google.ads.googleads.v17.services.CustomerService.ListAccessibleCustomers].
 *
 * @generated from message google.ads.googleads.v17.services.ListAccessibleCustomersRequest
 */
export type ListAccessibleCustomersRequest = Message<"google.ads.googleads.v17.services.ListAccessibleCustomersRequest"> & {
};

/**
 * Describes the message google.ads.googleads.v17.services.ListAccessibleCustomersRequest.
 * Use `create(ListAccessibleCustomersRequestSchema)` to create a new message.
 */
export const ListAccessibleCustomersRequestSchema: GenMessage<ListAccessibleCustomersRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 6);

/**
 * Response message for
 * [CustomerService.ListAccessibleCustomers][google.ads.googleads.v17.services.CustomerService.ListAccessibleCustomers].
 *
 * @generated from message google.ads.googleads.v17.services.ListAccessibleCustomersResponse
 */
export type ListAccessibleCustomersResponse = Message<"google.ads.googleads.v17.services.ListAccessibleCustomersResponse"> & {
  /**
   * Resource name of customers directly accessible by the
   * user authenticating the call.
   *
   * @generated from field: repeated string resource_names = 1;
   */
  resourceNames: string[];
};

/**
 * Describes the message google.ads.googleads.v17.services.ListAccessibleCustomersResponse.
 * Use `create(ListAccessibleCustomersResponseSchema)` to create a new message.
 */
export const ListAccessibleCustomersResponseSchema: GenMessage<ListAccessibleCustomersResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_customer_service, 7);

/**
 * Service to manage customers.
 *
 * @generated from service google.ads.googleads.v17.services.CustomerService
 */
export const CustomerService: GenService<{
  /**
   * Updates a customer. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [DatabaseError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [UrlFieldError]()
   *
   * @generated from rpc google.ads.googleads.v17.services.CustomerService.MutateCustomer
   */
  mutateCustomer: {
    methodKind: "unary";
    input: typeof MutateCustomerRequestSchema;
    output: typeof MutateCustomerResponseSchema;
  },
  /**
   * Returns resource names of customers directly accessible by the
   * user authenticating the call.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [QuotaError]()
   *   [RequestError]()
   *
   * @generated from rpc google.ads.googleads.v17.services.CustomerService.ListAccessibleCustomers
   */
  listAccessibleCustomers: {
    methodKind: "unary";
    input: typeof ListAccessibleCustomersRequestSchema;
    output: typeof ListAccessibleCustomersResponseSchema;
  },
  /**
   * Creates a new client under manager. The new client customer is returned.
   *
   * List of thrown errors:
   *   [AccessInvitationError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CurrencyCodeError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [ManagerLinkError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [StringLengthError]()
   *   [TimeZoneError]()
   *
   * @generated from rpc google.ads.googleads.v17.services.CustomerService.CreateCustomerClient
   */
  createCustomerClient: {
    methodKind: "unary";
    input: typeof CreateCustomerClientRequestSchema;
    output: typeof CreateCustomerClientResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v17_services_customer_service, 0);
