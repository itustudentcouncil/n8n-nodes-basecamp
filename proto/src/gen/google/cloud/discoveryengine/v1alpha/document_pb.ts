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
// @generated from file google/cloud/discoveryengine/v1alpha/document.proto (package google.cloud.discoveryengine.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Principal } from "./common_pb";
import { file_google_cloud_discoveryengine_v1alpha_common } from "./common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Status } from "../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../rpc/status_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1alpha/document.proto.
 */
export const file_google_cloud_discoveryengine_v1alpha_document: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxYWxwaGEvZG9jdW1lbnQucHJvdG8SJGdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYSKnCQoIRG9jdW1lbnQSLgoLc3RydWN0X2RhdGEYBCABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0SAASEwoJanNvbl9kYXRhGAUgASgJSAASEQoEbmFtZRgBIAEoCUID4EEFEg8KAmlkGAIgASgJQgPgQQUSEQoJc2NoZW1hX2lkGAMgASgJEkcKB2NvbnRlbnQYCiABKAsyNi5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuRG9jdW1lbnQuQ29udGVudBIaChJwYXJlbnRfZG9jdW1lbnRfaWQYByABKAkSOQoTZGVyaXZlZF9zdHJ1Y3RfZGF0YRgGIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RCA+BBAxJICghhY2xfaW5mbxgLIAEoCzI2Lmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5Eb2N1bWVudC5BY2xJbmZvEjMKCmluZGV4X3RpbWUYDSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSVQoMaW5kZXhfc3RhdHVzGA8gASgLMjouZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkRvY3VtZW50LkluZGV4U3RhdHVzQgPgQQMaSwoHQ29udGVudBITCglyYXdfYnl0ZXMYAiABKAxIABINCgN1cmkYAyABKAlIABIRCgltaW1lX3R5cGUYASABKAlCCQoHY29udGVudBrQAQoHQWNsSW5mbxJZCgdyZWFkZXJzGAEgAygLMkguZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkRvY3VtZW50LkFjbEluZm8uQWNjZXNzUmVzdHJpY3Rpb24aagoRQWNjZXNzUmVzdHJpY3Rpb24SQwoKcHJpbmNpcGFscxgBIAMoCzIvLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5QcmluY2lwYWwSEAoIaWRwX3dpZGUYAiABKAgaaAoLSW5kZXhTdGF0dXMSLgoKaW5kZXhfdGltZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASKQoNZXJyb3Jfc2FtcGxlcxgCIAMoCzISLmdvb2dsZS5ycGMuU3RhdHVzOpYC6kGSAgonZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0RvY3VtZW50EmZwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vZGF0YVN0b3Jlcy97ZGF0YV9zdG9yZX0vYnJhbmNoZXMve2JyYW5jaH0vZG9jdW1lbnRzL3tkb2N1bWVudH0Sf3Byb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9jb2xsZWN0aW9ucy97Y29sbGVjdGlvbn0vZGF0YVN0b3Jlcy97ZGF0YV9zdG9yZX0vYnJhbmNoZXMve2JyYW5jaH0vZG9jdW1lbnRzL3tkb2N1bWVudH1CBgoEZGF0YSKEAQoRUHJvY2Vzc2VkRG9jdW1lbnQSEwoJanNvbl9kYXRhGAIgASgJSAASQQoIZG9jdW1lbnQYASABKAlCL+BBAvpBKQonZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0RvY3VtZW50QhcKFXByb2Nlc3NlZF9kYXRhX2Zvcm1hdEKZAgooY29tLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYUINRG9jdW1lbnRQcm90b1ABWlJjbG91ZC5nb29nbGUuY29tL2dvL2Rpc2NvdmVyeWVuZ2luZS9hcGl2MWFscGhhL2Rpc2NvdmVyeWVuZ2luZXBiO2Rpc2NvdmVyeWVuZ2luZXBiogIPRElTQ09WRVJZRU5HSU5FqgIkR29vZ2xlLkNsb3VkLkRpc2NvdmVyeUVuZ2luZS5WMUFscGhhygIkR29vZ2xlXENsb3VkXERpc2NvdmVyeUVuZ2luZVxWMWFscGhh6gInR29vZ2xlOjpDbG91ZDo6RGlzY292ZXJ5RW5naW5lOjpWMWFscGhhYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_discoveryengine_v1alpha_common, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_rpc_status]);

/**
 * Document captures all raw metadata information of items to be recommended or
 * searched.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Document
 */
export type Document = Message<"google.cloud.discoveryengine.v1alpha.Document"> & {
  /**
   * Data representation. One of
   * [struct_data][google.cloud.discoveryengine.v1alpha.Document.struct_data] or
   * [json_data][google.cloud.discoveryengine.v1alpha.Document.json_data] should
   * be provided otherwise an `INVALID_ARGUMENT` error is thrown.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.Document.data
   */
  data: {
    /**
     * The structured JSON data for the document. It should conform to the
     * registered [Schema][google.cloud.discoveryengine.v1alpha.Schema] or an
     * `INVALID_ARGUMENT` error is thrown.
     *
     * @generated from field: google.protobuf.Struct struct_data = 4;
     */
    value: JsonObject;
    case: "structData";
  } | {
    /**
     * The JSON string representation of the document. It should conform to the
     * registered [Schema][google.cloud.discoveryengine.v1alpha.Schema] or an
     * `INVALID_ARGUMENT` error is thrown.
     *
     * @generated from field: string json_data = 5;
     */
    value: string;
    case: "jsonData";
  } | { case: undefined; value?: undefined };

  /**
   * Immutable. The full resource name of the document.
   * Format:
   * `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`.
   *
   * This field must be a UTF-8 encoded string with a length limit of 1024
   * characters.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Immutable. The identifier of the document.
   *
   * Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
   * standard with a length limit of 63 characters.
   *
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * The identifier of the schema located in the same data store.
   *
   * @generated from field: string schema_id = 3;
   */
  schemaId: string;

  /**
   * The unstructured data linked to this document. Content must be set if this
   * document is under a
   * `CONTENT_REQUIRED` data store.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.Document.Content content = 10;
   */
  content?: Document_Content;

  /**
   * The identifier of the parent document. Currently supports at most two level
   * document hierarchy.
   *
   * Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
   * standard with a length limit of 63 characters.
   *
   * @generated from field: string parent_document_id = 7;
   */
  parentDocumentId: string;

  /**
   * Output only. This field is OUTPUT_ONLY.
   * It contains derived data that are not in the original input document.
   *
   * @generated from field: google.protobuf.Struct derived_struct_data = 6;
   */
  derivedStructData?: JsonObject;

  /**
   * Access control information for the document.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.Document.AclInfo acl_info = 11;
   */
  aclInfo?: Document_AclInfo;

  /**
   * Output only. The last time the document was indexed. If this field is set,
   * the document could be returned in search results.
   *
   * This field is OUTPUT_ONLY. If this field is not populated, it means the
   * document has never been indexed.
   *
   * @generated from field: google.protobuf.Timestamp index_time = 13;
   */
  indexTime?: Timestamp;

  /**
   * Output only. The index status of the document.
   *
   * * If document is indexed successfully, the index_time field is populated.
   * * Otherwise, if document is not indexed due to errors, the error_samples
   *   field is populated.
   * * Otherwise, index_status is unset.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.Document.IndexStatus index_status = 15;
   */
  indexStatus?: Document_IndexStatus;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Document.
 * Use `create(DocumentSchema)` to create a new message.
 */
export const DocumentSchema: GenMessage<Document> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document, 0);

/**
 * Unstructured data linked to this document.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Document.Content
 */
export type Document_Content = Message<"google.cloud.discoveryengine.v1alpha.Document.Content"> & {
  /**
   * @generated from oneof google.cloud.discoveryengine.v1alpha.Document.Content.content
   */
  content: {
    /**
     * The content represented as a stream of bytes. The maximum length is
     * 1,000,000 bytes (1 MB / ~0.95 MiB).
     *
     * Note: As with all `bytes` fields, this field is represented as pure
     * binary in Protocol Buffers and base64-encoded string in JSON. For
     * example, `abc123!?$*&()'-=@~` should be represented as
     * `YWJjMTIzIT8kKiYoKSctPUB+` in JSON. See
     * https://developers.google.com/protocol-buffers/docs/proto3#json.
     *
     * @generated from field: bytes raw_bytes = 2;
     */
    value: Uint8Array;
    case: "rawBytes";
  } | {
    /**
     * The URI of the content. Only Cloud Storage URIs (e.g.
     * `gs://bucket-name/path/to/file`) are supported. The maximum file size
     * is 2.5 MB for text-based formats, 200 MB for other formats.
     *
     * @generated from field: string uri = 3;
     */
    value: string;
    case: "uri";
  } | { case: undefined; value?: undefined };

  /**
   * The MIME type of the content. Supported types:
   *
   * * `application/pdf` (PDF, only native PDFs are supported for now)
   * * `text/html` (HTML)
   * * `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (DOCX)
   * * `application/vnd.openxmlformats-officedocument.presentationml.presentation` (PPTX)
   * * `text/plain` (TXT)
   *
   * See https://www.iana.org/assignments/media-types/media-types.xhtml.
   *
   * @generated from field: string mime_type = 1;
   */
  mimeType: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Document.Content.
 * Use `create(Document_ContentSchema)` to create a new message.
 */
export const Document_ContentSchema: GenMessage<Document_Content> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document, 0, 0);

/**
 * ACL Information of the Document.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Document.AclInfo
 */
export type Document_AclInfo = Message<"google.cloud.discoveryengine.v1alpha.Document.AclInfo"> & {
  /**
   * Readers of the document.
   *
   * @generated from field: repeated google.cloud.discoveryengine.v1alpha.Document.AclInfo.AccessRestriction readers = 1;
   */
  readers: Document_AclInfo_AccessRestriction[];
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Document.AclInfo.
 * Use `create(Document_AclInfoSchema)` to create a new message.
 */
export const Document_AclInfoSchema: GenMessage<Document_AclInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document, 0, 1);

/**
 * AclRestriction to model complex inheritance restrictions.
 *
 * Example: Modeling a "Both Permit" inheritance, where to access a
 * child document, user needs to have access to parent document.
 *
 * Document Hierarchy - Space_S --> Page_P.
 *
 * Readers:
 *   Space_S: group_1, user_1
 *   Page_P: group_2, group_3, user_2
 *
 * Space_S ACL Restriction -
 * {
 *   "acl_info": {
 *     "readers": [
 *       {
 *         "principals": [
 *           {
 *             "group_id": "group_1"
 *           },
 *           {
 *             "user_id": "user_1"
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * }
 *
 * Page_P ACL Restriction.
 * {
 *   "acl_info": {
 *     "readers": [
 *       {
 *         "principals": [
 *           {
 *             "group_id": "group_2"
 *           },
 *           {
 *             "group_id": "group_3"
 *           },
 *           {
 *             "user_id": "user_2"
 *           }
 *         ],
 *       },
 *       {
 *         "principals": [
 *           {
 *             "group_id": "group_1"
 *           },
 *           {
 *             "user_id": "user_1"
 *           }
 *         ],
 *       }
 *     ]
 *   }
 * }
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Document.AclInfo.AccessRestriction
 */
export type Document_AclInfo_AccessRestriction = Message<"google.cloud.discoveryengine.v1alpha.Document.AclInfo.AccessRestriction"> & {
  /**
   * List of principals.
   *
   * @generated from field: repeated google.cloud.discoveryengine.v1alpha.Principal principals = 1;
   */
  principals: Principal[];

  /**
   * All users within the Identity Provider.
   *
   * @generated from field: bool idp_wide = 2;
   */
  idpWide: boolean;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Document.AclInfo.AccessRestriction.
 * Use `create(Document_AclInfo_AccessRestrictionSchema)` to create a new message.
 */
export const Document_AclInfo_AccessRestrictionSchema: GenMessage<Document_AclInfo_AccessRestriction> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document, 0, 1, 0);

/**
 * Index status of the document.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Document.IndexStatus
 */
export type Document_IndexStatus = Message<"google.cloud.discoveryengine.v1alpha.Document.IndexStatus"> & {
  /**
   * The time when the document was indexed.
   * If this field is populated, it means the document has been indexed.
   *
   * @generated from field: google.protobuf.Timestamp index_time = 1;
   */
  indexTime?: Timestamp;

  /**
   * A sample of errors encountered while indexing the document.
   * If this field is populated, the document is not indexed due to errors.
   *
   * @generated from field: repeated google.rpc.Status error_samples = 2;
   */
  errorSamples: Status[];
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Document.IndexStatus.
 * Use `create(Document_IndexStatusSchema)` to create a new message.
 */
export const Document_IndexStatusSchema: GenMessage<Document_IndexStatus> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document, 0, 2);

/**
 * Document captures all raw metadata information of items to be recommended or
 * searched.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.ProcessedDocument
 */
export type ProcessedDocument = Message<"google.cloud.discoveryengine.v1alpha.ProcessedDocument"> & {
  /**
   * Output format of the processed document.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.ProcessedDocument.processed_data_format
   */
  processedDataFormat: {
    /**
     * The JSON string representation of the processed document.
     *
     * @generated from field: string json_data = 2;
     */
    value: string;
    case: "jsonData";
  } | { case: undefined; value?: undefined };

  /**
   * Required. Full resource name of the referenced document, in the format
   * `projects/*\/locations/*\/collections/*\/dataStores/*\/branches/*\/documents/*`.
   *
   * @generated from field: string document = 1;
   */
  document: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.ProcessedDocument.
 * Use `create(ProcessedDocumentSchema)` to create a new message.
 */
export const ProcessedDocumentSchema: GenMessage<ProcessedDocument> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_document, 1);
