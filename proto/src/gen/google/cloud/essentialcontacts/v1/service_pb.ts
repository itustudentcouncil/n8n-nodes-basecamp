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
// @generated from file google/cloud/essentialcontacts/v1/service.proto (package google.cloud.essentialcontacts.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { NotificationCategory, ValidationState } from "./enums_pb";
import { file_google_cloud_essentialcontacts_v1_enums } from "./enums_pb";
import type { EmptySchema, FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/essentialcontacts/v1/service.proto.
 */
export const file_google_cloud_essentialcontacts_v1_service: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvZXNzZW50aWFsY29udGFjdHMvdjEvc2VydmljZS5wcm90bxIhZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxIuUDCgdDb250YWN0EhEKBG5hbWUYASABKAlCA+BBAxISCgVlbWFpbBgCIAEoCUID4EECEmkKI25vdGlmaWNhdGlvbl9jYXRlZ29yeV9zdWJzY3JpcHRpb25zGAMgAygOMjcuZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxLk5vdGlmaWNhdGlvbkNhdGVnb3J5QgPgQQISGQoMbGFuZ3VhZ2VfdGFnGAQgASgJQgPgQQISTAoQdmFsaWRhdGlvbl9zdGF0ZRgIIAEoDjIyLmdvb2dsZS5jbG91ZC5lc3NlbnRpYWxjb250YWN0cy52MS5WYWxpZGF0aW9uU3RhdGUSMQoNdmFsaWRhdGVfdGltZRgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXA6qwHqQacBCihlc3NlbnRpYWxjb250YWN0cy5nb29nbGVhcGlzLmNvbS9Db250YWN0EiVwcm9qZWN0cy97cHJvamVjdH0vY29udGFjdHMve2NvbnRhY3R9EiNmb2xkZXJzL3tmb2xkZXJ9L2NvbnRhY3RzL3tjb250YWN0fRIvb3JnYW5pemF0aW9ucy97b3JnYW5pemF0aW9ufS9jb250YWN0cy97Y29udGFjdH0iiAEKE0xpc3RDb250YWN0c1JlcXVlc3QSQAoGcGFyZW50GAEgASgJQjDgQQL6QSoSKGVzc2VudGlhbGNvbnRhY3RzLmdvb2dsZWFwaXMuY29tL0NvbnRhY3QSFgoJcGFnZV9zaXplGAIgASgFQgPgQQESFwoKcGFnZV90b2tlbhgDIAEoCUID4EEBIm0KFExpc3RDb250YWN0c1Jlc3BvbnNlEjwKCGNvbnRhY3RzGAEgAygLMiouZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxLkNvbnRhY3QSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJIlMKEUdldENvbnRhY3RSZXF1ZXN0Ej4KBG5hbWUYASABKAlCMOBBAvpBKgooZXNzZW50aWFsY29udGFjdHMuZ29vZ2xlYXBpcy5jb20vQ29udGFjdCJWChREZWxldGVDb250YWN0UmVxdWVzdBI+CgRuYW1lGAEgASgJQjDgQQL6QSoKKGVzc2VudGlhbGNvbnRhY3RzLmdvb2dsZWFwaXMuY29tL0NvbnRhY3QimgEKFENyZWF0ZUNvbnRhY3RSZXF1ZXN0EkAKBnBhcmVudBgBIAEoCUIw4EEC+kEqEihlc3NlbnRpYWxjb250YWN0cy5nb29nbGVhcGlzLmNvbS9Db250YWN0EkAKB2NvbnRhY3QYAiABKAsyKi5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuQ29udGFjdEID4EECIo4BChRVcGRhdGVDb250YWN0UmVxdWVzdBJACgdjb250YWN0GAIgASgLMiouZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxLkNvbnRhY3RCA+BBAhI0Cgt1cGRhdGVfbWFzaxgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2tCA+BBASLlAQoWQ29tcHV0ZUNvbnRhY3RzUmVxdWVzdBJACgZwYXJlbnQYASABKAlCMOBBAvpBKhIoZXNzZW50aWFsY29udGFjdHMuZ29vZ2xlYXBpcy5jb20vQ29udGFjdBJYChdub3RpZmljYXRpb25fY2F0ZWdvcmllcxgGIAMoDjI3Lmdvb2dsZS5jbG91ZC5lc3NlbnRpYWxjb250YWN0cy52MS5Ob3RpZmljYXRpb25DYXRlZ29yeRIWCglwYWdlX3NpemUYAyABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAQgASgJQgPgQQEicAoXQ29tcHV0ZUNvbnRhY3RzUmVzcG9uc2USPAoIY29udGFjdHMYASADKAsyKi5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuQ29udGFjdBIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAki/QEKFlNlbmRUZXN0TWVzc2FnZVJlcXVlc3QSQgoIY29udGFjdHMYASADKAlCMOBBAvpBKgooZXNzZW50aWFsY29udGFjdHMuZ29vZ2xlYXBpcy5jb20vQ29udGFjdBJCCghyZXNvdXJjZRgCIAEoCUIw4EEC+kEqEihlc3NlbnRpYWxjb250YWN0cy5nb29nbGVhcGlzLmNvbS9Db250YWN0ElsKFW5vdGlmaWNhdGlvbl9jYXRlZ29yeRgDIAEoDjI3Lmdvb2dsZS5jbG91ZC5lc3NlbnRpYWxjb250YWN0cy52MS5Ob3RpZmljYXRpb25DYXRlZ29yeUID4EECMssPChhFc3NlbnRpYWxDb250YWN0c1NlcnZpY2USmAIKDUNyZWF0ZUNvbnRhY3QSNy5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuQ3JlYXRlQ29udGFjdFJlcXVlc3QaKi5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuQ29udGFjdCKhAdpBDnBhcmVudCxjb250YWN0gtPkkwKJAToHY29udGFjdFoqOgdjb250YWN0Ih8vdjEve3BhcmVudD1mb2xkZXJzLyp9L2NvbnRhY3RzWjA6B2NvbnRhY3QiJS92MS97cGFyZW50PW9yZ2FuaXphdGlvbnMvKn0vY29udGFjdHMiIC92MS97cGFyZW50PXByb2plY3RzLyp9L2NvbnRhY3RzErUCCg1VcGRhdGVDb250YWN0EjcuZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxLlVwZGF0ZUNvbnRhY3RSZXF1ZXN0GiouZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxLkNvbnRhY3QivgHaQRNjb250YWN0LHVwZGF0ZV9tYXNrgtPkkwKhAToHY29udGFjdFoyOgdjb250YWN0MicvdjEve2NvbnRhY3QubmFtZT1mb2xkZXJzLyovY29udGFjdHMvKn1aODoHY29udGFjdDItL3YxL3tjb250YWN0Lm5hbWU9b3JnYW5pemF0aW9ucy8qL2NvbnRhY3RzLyp9MigvdjEve2NvbnRhY3QubmFtZT1wcm9qZWN0cy8qL2NvbnRhY3RzLyp9Ev4BCgxMaXN0Q29udGFjdHMSNi5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuTGlzdENvbnRhY3RzUmVxdWVzdBo3Lmdvb2dsZS5jbG91ZC5lc3NlbnRpYWxjb250YWN0cy52MS5MaXN0Q29udGFjdHNSZXNwb25zZSJ92kEGcGFyZW50gtPkkwJuWiESHy92MS97cGFyZW50PWZvbGRlcnMvKn0vY29udGFjdHNaJxIlL3YxL3twYXJlbnQ9b3JnYW5pemF0aW9ucy8qfS9jb250YWN0cxIgL3YxL3twYXJlbnQ9cHJvamVjdHMvKn0vY29udGFjdHMS6wEKCkdldENvbnRhY3QSNC5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuR2V0Q29udGFjdFJlcXVlc3QaKi5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuQ29udGFjdCJ72kEEbmFtZYLT5JMCblohEh8vdjEve25hbWU9Zm9sZGVycy8qL2NvbnRhY3RzLyp9WicSJS92MS97bmFtZT1vcmdhbml6YXRpb25zLyovY29udGFjdHMvKn0SIC92MS97bmFtZT1wcm9qZWN0cy8qL2NvbnRhY3RzLyp9Et0BCg1EZWxldGVDb250YWN0EjcuZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxLkRlbGV0ZUNvbnRhY3RSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5InvaQQRuYW1lgtPkkwJuWiEqHy92MS97bmFtZT1mb2xkZXJzLyovY29udGFjdHMvKn1aJyolL3YxL3tuYW1lPW9yZ2FuaXphdGlvbnMvKi9jb250YWN0cy8qfSogL3YxL3tuYW1lPXByb2plY3RzLyovY29udGFjdHMvKn0SmAIKD0NvbXB1dGVDb250YWN0cxI5Lmdvb2dsZS5jbG91ZC5lc3NlbnRpYWxjb250YWN0cy52MS5Db21wdXRlQ29udGFjdHNSZXF1ZXN0GjouZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxLkNvbXB1dGVDb250YWN0c1Jlc3BvbnNlIo0BgtPkkwKGAVopEicvdjEve3BhcmVudD1mb2xkZXJzLyp9L2NvbnRhY3RzOmNvbXB1dGVaLxItL3YxL3twYXJlbnQ9b3JnYW5pemF0aW9ucy8qfS9jb250YWN0czpjb21wdXRlEigvdjEve3BhcmVudD1wcm9qZWN0cy8qfS9jb250YWN0czpjb21wdXRlEpsCCg9TZW5kVGVzdE1lc3NhZ2USOS5nb29nbGUuY2xvdWQuZXNzZW50aWFsY29udGFjdHMudjEuU2VuZFRlc3RNZXNzYWdlUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSK0AYLT5JMCrQE6ASpaNjoBKiIxL3YxL3tyZXNvdXJjZT1mb2xkZXJzLyp9L2NvbnRhY3RzOnNlbmRUZXN0TWVzc2FnZVo8OgEqIjcvdjEve3Jlc291cmNlPW9yZ2FuaXphdGlvbnMvKn0vY29udGFjdHM6c2VuZFRlc3RNZXNzYWdlIjIvdjEve3Jlc291cmNlPXByb2plY3RzLyp9L2NvbnRhY3RzOnNlbmRUZXN0TWVzc2FnZRpUykEgZXNzZW50aWFsY29udGFjdHMuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQu0BCiVjb20uZ29vZ2xlLmNsb3VkLmVzc2VudGlhbGNvbnRhY3RzLnYxUAFaU2Nsb3VkLmdvb2dsZS5jb20vZ28vZXNzZW50aWFsY29udGFjdHMvYXBpdjEvZXNzZW50aWFsY29udGFjdHNwYjtlc3NlbnRpYWxjb250YWN0c3BiqgIhR29vZ2xlLkNsb3VkLkVzc2VudGlhbENvbnRhY3RzLlYxygIhR29vZ2xlXENsb3VkXEVzc2VudGlhbENvbnRhY3RzXFYx6gIkR29vZ2xlOjpDbG91ZDo6RXNzZW50aWFsQ29udGFjdHM6OlYxYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_essentialcontacts_v1_enums, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * A contact that will receive notifications from Google Cloud.
 *
 * @generated from message google.cloud.essentialcontacts.v1.Contact
 */
export type Contact = Message<"google.cloud.essentialcontacts.v1.Contact"> & {
  /**
   * Output only. The identifier for the contact.
   * Format: {resource_type}/{resource_id}/contacts/{contact_id}
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The email address to send notifications to. The email address
   * does not need to be a Google Account.
   *
   * @generated from field: string email = 2;
   */
  email: string;

  /**
   * Required. The categories of notifications that the contact will receive
   * communications for.
   *
   * @generated from field: repeated google.cloud.essentialcontacts.v1.NotificationCategory notification_category_subscriptions = 3;
   */
  notificationCategorySubscriptions: NotificationCategory[];

  /**
   * Required. The preferred language for notifications, as a ISO 639-1 language
   * code. See [Supported
   * languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages)
   * for a list of supported languages.
   *
   * @generated from field: string language_tag = 4;
   */
  languageTag: string;

  /**
   * The validity of the contact. A contact is considered valid if it is the
   * correct recipient for notifications for a particular resource.
   *
   * @generated from field: google.cloud.essentialcontacts.v1.ValidationState validation_state = 8;
   */
  validationState: ValidationState;

  /**
   * The last time the validation_state was updated, either manually or
   * automatically. A contact is considered stale if its validation state was
   * updated more than 1 year ago.
   *
   * @generated from field: google.protobuf.Timestamp validate_time = 9;
   */
  validateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.Contact.
 * Use `create(ContactSchema)` to create a new message.
 */
export const ContactSchema: GenMessage<Contact> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 0);

/**
 * Request message for the ListContacts method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.ListContactsRequest
 */
export type ListContactsRequest = Message<"google.cloud.essentialcontacts.v1.ListContactsRequest"> & {
  /**
   * Required. The parent resource name.
   * Format: organizations/{organization_id}, folders/{folder_id} or
   * projects/{project_id}
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `next_page_token` in the
   * response indicates that more results might be available.
   * If not specified, the default page_size is 100.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. If present, retrieves the next batch of results from the
   * preceding call to this method. `page_token` must be the value of
   * `next_page_token` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.ListContactsRequest.
 * Use `create(ListContactsRequestSchema)` to create a new message.
 */
export const ListContactsRequestSchema: GenMessage<ListContactsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 1);

/**
 * Response message for the ListContacts method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.ListContactsResponse
 */
export type ListContactsResponse = Message<"google.cloud.essentialcontacts.v1.ListContactsResponse"> & {
  /**
   * The contacts for the specified resource.
   *
   * @generated from field: repeated google.cloud.essentialcontacts.v1.Contact contacts = 1;
   */
  contacts: Contact[];

  /**
   * If there are more results than those appearing in this response, then
   * `next_page_token` is included. To get the next set of results, call this
   * method again using the value of `next_page_token` as `page_token` and the
   * rest of the parameters the same as the original request.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.ListContactsResponse.
 * Use `create(ListContactsResponseSchema)` to create a new message.
 */
export const ListContactsResponseSchema: GenMessage<ListContactsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 2);

/**
 * Request message for the GetContact method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.GetContactRequest
 */
export type GetContactRequest = Message<"google.cloud.essentialcontacts.v1.GetContactRequest"> & {
  /**
   * Required. The name of the contact to retrieve.
   * Format: organizations/{organization_id}/contacts/{contact_id},
   * folders/{folder_id}/contacts/{contact_id} or
   * projects/{project_id}/contacts/{contact_id}
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.GetContactRequest.
 * Use `create(GetContactRequestSchema)` to create a new message.
 */
export const GetContactRequestSchema: GenMessage<GetContactRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 3);

/**
 * Request message for the DeleteContact method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.DeleteContactRequest
 */
export type DeleteContactRequest = Message<"google.cloud.essentialcontacts.v1.DeleteContactRequest"> & {
  /**
   * Required. The name of the contact to delete.
   * Format: organizations/{organization_id}/contacts/{contact_id},
   * folders/{folder_id}/contacts/{contact_id} or
   * projects/{project_id}/contacts/{contact_id}
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.DeleteContactRequest.
 * Use `create(DeleteContactRequestSchema)` to create a new message.
 */
export const DeleteContactRequestSchema: GenMessage<DeleteContactRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 4);

/**
 * Request message for the CreateContact method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.CreateContactRequest
 */
export type CreateContactRequest = Message<"google.cloud.essentialcontacts.v1.CreateContactRequest"> & {
  /**
   * Required. The resource to save this contact for.
   * Format: organizations/{organization_id}, folders/{folder_id} or
   * projects/{project_id}
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The contact to create. Must specify an email address and language
   * tag.
   *
   * @generated from field: google.cloud.essentialcontacts.v1.Contact contact = 2;
   */
  contact?: Contact;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.CreateContactRequest.
 * Use `create(CreateContactRequestSchema)` to create a new message.
 */
export const CreateContactRequestSchema: GenMessage<CreateContactRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 5);

/**
 * Request message for the UpdateContact method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.UpdateContactRequest
 */
export type UpdateContactRequest = Message<"google.cloud.essentialcontacts.v1.UpdateContactRequest"> & {
  /**
   * Required. The contact resource to replace the existing saved contact. Note:
   * the email address of the contact cannot be modified.
   *
   * @generated from field: google.cloud.essentialcontacts.v1.Contact contact = 2;
   */
  contact?: Contact;

  /**
   * Optional. The update mask applied to the resource. For the `FieldMask`
   * definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.UpdateContactRequest.
 * Use `create(UpdateContactRequestSchema)` to create a new message.
 */
export const UpdateContactRequestSchema: GenMessage<UpdateContactRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 6);

/**
 * Request message for the ComputeContacts method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.ComputeContactsRequest
 */
export type ComputeContactsRequest = Message<"google.cloud.essentialcontacts.v1.ComputeContactsRequest"> & {
  /**
   * Required. The name of the resource to compute contacts for.
   * Format: organizations/{organization_id},
   * folders/{folder_id} or projects/{project_id}
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The categories of notifications to compute contacts for. If ALL is included
   * in this list, contacts subscribed to any notification category will be
   * returned.
   *
   * @generated from field: repeated google.cloud.essentialcontacts.v1.NotificationCategory notification_categories = 6;
   */
  notificationCategories: NotificationCategory[];

  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `next_page_token` in the
   * response indicates that more results might be available.
   * If not specified, the default page_size is 100.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  /**
   * Optional. If present, retrieves the next batch of results from the
   * preceding call to this method. `page_token` must be the value of
   * `next_page_token` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.ComputeContactsRequest.
 * Use `create(ComputeContactsRequestSchema)` to create a new message.
 */
export const ComputeContactsRequestSchema: GenMessage<ComputeContactsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 7);

/**
 * Response message for the ComputeContacts method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.ComputeContactsResponse
 */
export type ComputeContactsResponse = Message<"google.cloud.essentialcontacts.v1.ComputeContactsResponse"> & {
  /**
   * All contacts for the resource that are subscribed to the specified
   * notification categories, including contacts inherited from any parent
   * resources.
   *
   * @generated from field: repeated google.cloud.essentialcontacts.v1.Contact contacts = 1;
   */
  contacts: Contact[];

  /**
   * If there are more results than those appearing in this response, then
   * `next_page_token` is included. To get the next set of results, call this
   * method again using the value of `next_page_token` as `page_token` and the
   * rest of the parameters the same as the original request.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.ComputeContactsResponse.
 * Use `create(ComputeContactsResponseSchema)` to create a new message.
 */
export const ComputeContactsResponseSchema: GenMessage<ComputeContactsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 8);

/**
 * Request message for the SendTestMessage method.
 *
 * @generated from message google.cloud.essentialcontacts.v1.SendTestMessageRequest
 */
export type SendTestMessageRequest = Message<"google.cloud.essentialcontacts.v1.SendTestMessageRequest"> & {
  /**
   * Required. The list of names of the contacts to send a test message to.
   * Format: organizations/{organization_id}/contacts/{contact_id},
   * folders/{folder_id}/contacts/{contact_id} or
   * projects/{project_id}/contacts/{contact_id}
   *
   * @generated from field: repeated string contacts = 1;
   */
  contacts: string[];

  /**
   * Required. The name of the resource to send the test message for. All
   * contacts must either be set directly on this resource or inherited from
   * another resource that is an ancestor of this one. Format:
   * organizations/{organization_id}, folders/{folder_id} or
   * projects/{project_id}
   *
   * @generated from field: string resource = 2;
   */
  resource: string;

  /**
   * Required. The notification category to send the test message for. All
   * contacts must be subscribed to this category.
   *
   * @generated from field: google.cloud.essentialcontacts.v1.NotificationCategory notification_category = 3;
   */
  notificationCategory: NotificationCategory;
};

/**
 * Describes the message google.cloud.essentialcontacts.v1.SendTestMessageRequest.
 * Use `create(SendTestMessageRequestSchema)` to create a new message.
 */
export const SendTestMessageRequestSchema: GenMessage<SendTestMessageRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_essentialcontacts_v1_service, 9);

/**
 * Manages contacts for important Google Cloud notifications.
 *
 * @generated from service google.cloud.essentialcontacts.v1.EssentialContactsService
 */
export const EssentialContactsService: GenService<{
  /**
   * Adds a new contact for a resource.
   *
   * @generated from rpc google.cloud.essentialcontacts.v1.EssentialContactsService.CreateContact
   */
  createContact: {
    methodKind: "unary";
    input: typeof CreateContactRequestSchema;
    output: typeof ContactSchema;
  },
  /**
   * Updates a contact.
   * Note: A contact's email address cannot be changed.
   *
   * @generated from rpc google.cloud.essentialcontacts.v1.EssentialContactsService.UpdateContact
   */
  updateContact: {
    methodKind: "unary";
    input: typeof UpdateContactRequestSchema;
    output: typeof ContactSchema;
  },
  /**
   * Lists the contacts that have been set on a resource.
   *
   * @generated from rpc google.cloud.essentialcontacts.v1.EssentialContactsService.ListContacts
   */
  listContacts: {
    methodKind: "unary";
    input: typeof ListContactsRequestSchema;
    output: typeof ListContactsResponseSchema;
  },
  /**
   * Gets a single contact.
   *
   * @generated from rpc google.cloud.essentialcontacts.v1.EssentialContactsService.GetContact
   */
  getContact: {
    methodKind: "unary";
    input: typeof GetContactRequestSchema;
    output: typeof ContactSchema;
  },
  /**
   * Deletes a contact.
   *
   * @generated from rpc google.cloud.essentialcontacts.v1.EssentialContactsService.DeleteContact
   */
  deleteContact: {
    methodKind: "unary";
    input: typeof DeleteContactRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Lists all contacts for the resource that are subscribed to the
   * specified notification categories, including contacts inherited from
   * any parent resources.
   *
   * @generated from rpc google.cloud.essentialcontacts.v1.EssentialContactsService.ComputeContacts
   */
  computeContacts: {
    methodKind: "unary";
    input: typeof ComputeContactsRequestSchema;
    output: typeof ComputeContactsResponseSchema;
  },
  /**
   * Allows a contact admin to send a test message to contact to verify that it
   * has been configured correctly.
   *
   * @generated from rpc google.cloud.essentialcontacts.v1.EssentialContactsService.SendTestMessage
   */
  sendTestMessage: {
    methodKind: "unary";
    input: typeof SendTestMessageRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_essentialcontacts_v1_service, 0);
