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
// @generated from file google/firestore/v1/write.proto (package google.firestore.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { BloomFilter } from "./bloom_filter_pb";
import { file_google_firestore_v1_bloom_filter } from "./bloom_filter_pb";
import type { DocumentMask, Precondition } from "./common_pb";
import { file_google_firestore_v1_common } from "./common_pb";
import type { ArrayValue, Document, Value } from "./document_pb";
import { file_google_firestore_v1_document } from "./document_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/firestore/v1/write.proto.
 */
export const file_google_firestore_v1_write: GenFile = /*@__PURE__*/
  fileDesc("Ch9nb29nbGUvZmlyZXN0b3JlL3YxL3dyaXRlLnByb3RvEhNnb29nbGUuZmlyZXN0b3JlLnYxItsCCgVXcml0ZRIvCgZ1cGRhdGUYASABKAsyHS5nb29nbGUuZmlyZXN0b3JlLnYxLkRvY3VtZW50SAASEAoGZGVsZXRlGAIgASgJSAASOwoJdHJhbnNmb3JtGAYgASgLMiYuZ29vZ2xlLmZpcmVzdG9yZS52MS5Eb2N1bWVudFRyYW5zZm9ybUgAEjYKC3VwZGF0ZV9tYXNrGAMgASgLMiEuZ29vZ2xlLmZpcmVzdG9yZS52MS5Eb2N1bWVudE1hc2sSUAoRdXBkYXRlX3RyYW5zZm9ybXMYByADKAsyNS5nb29nbGUuZmlyZXN0b3JlLnYxLkRvY3VtZW50VHJhbnNmb3JtLkZpZWxkVHJhbnNmb3JtEjsKEGN1cnJlbnRfZG9jdW1lbnQYBCABKAsyIS5nb29nbGUuZmlyZXN0b3JlLnYxLlByZWNvbmRpdGlvbkILCglvcGVyYXRpb24i5QQKEURvY3VtZW50VHJhbnNmb3JtEhAKCGRvY3VtZW50GAEgASgJEk8KEGZpZWxkX3RyYW5zZm9ybXMYAiADKAsyNS5nb29nbGUuZmlyZXN0b3JlLnYxLkRvY3VtZW50VHJhbnNmb3JtLkZpZWxkVHJhbnNmb3JtGuwDCg5GaWVsZFRyYW5zZm9ybRISCgpmaWVsZF9wYXRoGAEgASgJEmAKE3NldF90b19zZXJ2ZXJfdmFsdWUYAiABKA4yQS5nb29nbGUuZmlyZXN0b3JlLnYxLkRvY3VtZW50VHJhbnNmb3JtLkZpZWxkVHJhbnNmb3JtLlNlcnZlclZhbHVlSAASLwoJaW5jcmVtZW50GAMgASgLMhouZ29vZ2xlLmZpcmVzdG9yZS52MS5WYWx1ZUgAEi0KB21heGltdW0YBCABKAsyGi5nb29nbGUuZmlyZXN0b3JlLnYxLlZhbHVlSAASLQoHbWluaW11bRgFIAEoCzIaLmdvb2dsZS5maXJlc3RvcmUudjEuVmFsdWVIABJCChdhcHBlbmRfbWlzc2luZ19lbGVtZW50cxgGIAEoCzIfLmdvb2dsZS5maXJlc3RvcmUudjEuQXJyYXlWYWx1ZUgAEkAKFXJlbW92ZV9hbGxfZnJvbV9hcnJheRgHIAEoCzIfLmdvb2dsZS5maXJlc3RvcmUudjEuQXJyYXlWYWx1ZUgAIj0KC1NlcnZlclZhbHVlEhwKGFNFUlZFUl9WQUxVRV9VTlNQRUNJRklFRBAAEhAKDFJFUVVFU1RfVElNRRABQhAKDnRyYW5zZm9ybV90eXBlInUKC1dyaXRlUmVzdWx0Ei8KC3VwZGF0ZV90aW1lGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI1ChF0cmFuc2Zvcm1fcmVzdWx0cxgCIAMoCzIaLmdvb2dsZS5maXJlc3RvcmUudjEuVmFsdWUicQoORG9jdW1lbnRDaGFuZ2USLwoIZG9jdW1lbnQYASABKAsyHS5nb29nbGUuZmlyZXN0b3JlLnYxLkRvY3VtZW50EhIKCnRhcmdldF9pZHMYBSADKAUSGgoScmVtb3ZlZF90YXJnZXRfaWRzGAYgAygFIm0KDkRvY3VtZW50RGVsZXRlEhAKCGRvY3VtZW50GAEgASgJEhoKEnJlbW92ZWRfdGFyZ2V0X2lkcxgGIAMoBRItCglyZWFkX3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIm0KDkRvY3VtZW50UmVtb3ZlEhAKCGRvY3VtZW50GAEgASgJEhoKEnJlbW92ZWRfdGFyZ2V0X2lkcxgCIAMoBRItCglyZWFkX3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIm4KD0V4aXN0ZW5jZUZpbHRlchIRCgl0YXJnZXRfaWQYASABKAUSDQoFY291bnQYAiABKAUSOQoPdW5jaGFuZ2VkX25hbWVzGAMgASgLMiAuZ29vZ2xlLmZpcmVzdG9yZS52MS5CbG9vbUZpbHRlckLCAQoXY29tLmdvb2dsZS5maXJlc3RvcmUudjFCCldyaXRlUHJvdG9QAVo7Y2xvdWQuZ29vZ2xlLmNvbS9nby9maXJlc3RvcmUvYXBpdjEvZmlyZXN0b3JlcGI7ZmlyZXN0b3JlcGKiAgRHQ0ZTqgIZR29vZ2xlLkNsb3VkLkZpcmVzdG9yZS5WMcoCGUdvb2dsZVxDbG91ZFxGaXJlc3RvcmVcVjHqAhxHb29nbGU6OkNsb3VkOjpGaXJlc3RvcmU6OlYxYgZwcm90bzM", [file_google_firestore_v1_bloom_filter, file_google_firestore_v1_common, file_google_firestore_v1_document, file_google_protobuf_timestamp]);

/**
 * A write on a document.
 *
 * @generated from message google.firestore.v1.Write
 */
export type Write = Message<"google.firestore.v1.Write"> & {
  /**
   * The operation to execute.
   *
   * @generated from oneof google.firestore.v1.Write.operation
   */
  operation: {
    /**
     * A document to write.
     *
     * @generated from field: google.firestore.v1.Document update = 1;
     */
    value: Document;
    case: "update";
  } | {
    /**
     * A document name to delete. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     *
     * @generated from field: string delete = 2;
     */
    value: string;
    case: "delete";
  } | {
    /**
     * Applies a transformation to a document.
     *
     * @generated from field: google.firestore.v1.DocumentTransform transform = 6;
     */
    value: DocumentTransform;
    case: "transform";
  } | { case: undefined; value?: undefined };

  /**
   * The fields to update in this write.
   *
   * This field can be set only when the operation is `update`.
   * If the mask is not set for an `update` and the document exists, any
   * existing data will be overwritten.
   * If the mask is set and the document on the server has fields not covered by
   * the mask, they are left unchanged.
   * Fields referenced in the mask, but not present in the input document, are
   * deleted from the document on the server.
   * The field paths in this mask must not contain a reserved field name.
   *
   * @generated from field: google.firestore.v1.DocumentMask update_mask = 3;
   */
  updateMask?: DocumentMask;

  /**
   * The transforms to perform after update.
   *
   * This field can be set only when the operation is `update`. If present, this
   * write is equivalent to performing `update` and `transform` to the same
   * document atomically and in order.
   *
   * @generated from field: repeated google.firestore.v1.DocumentTransform.FieldTransform update_transforms = 7;
   */
  updateTransforms: DocumentTransform_FieldTransform[];

  /**
   * An optional precondition on the document.
   *
   * The write will fail if this is set and not met by the target document.
   *
   * @generated from field: google.firestore.v1.Precondition current_document = 4;
   */
  currentDocument?: Precondition;
};

/**
 * Describes the message google.firestore.v1.Write.
 * Use `create(WriteSchema)` to create a new message.
 */
export const WriteSchema: GenMessage<Write> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 0);

/**
 * A transformation of a document.
 *
 * @generated from message google.firestore.v1.DocumentTransform
 */
export type DocumentTransform = Message<"google.firestore.v1.DocumentTransform"> & {
  /**
   * The name of the document to transform.
   *
   * @generated from field: string document = 1;
   */
  document: string;

  /**
   * The list of transformations to apply to the fields of the document, in
   * order.
   * This must not be empty.
   *
   * @generated from field: repeated google.firestore.v1.DocumentTransform.FieldTransform field_transforms = 2;
   */
  fieldTransforms: DocumentTransform_FieldTransform[];
};

/**
 * Describes the message google.firestore.v1.DocumentTransform.
 * Use `create(DocumentTransformSchema)` to create a new message.
 */
export const DocumentTransformSchema: GenMessage<DocumentTransform> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 1);

/**
 * A transformation of a field of the document.
 *
 * @generated from message google.firestore.v1.DocumentTransform.FieldTransform
 */
export type DocumentTransform_FieldTransform = Message<"google.firestore.v1.DocumentTransform.FieldTransform"> & {
  /**
   * The path of the field. See
   * [Document.fields][google.firestore.v1.Document.fields] for the field path
   * syntax reference.
   *
   * @generated from field: string field_path = 1;
   */
  fieldPath: string;

  /**
   * The transformation to apply on the field.
   *
   * @generated from oneof google.firestore.v1.DocumentTransform.FieldTransform.transform_type
   */
  transformType: {
    /**
     * Sets the field to the given server value.
     *
     * @generated from field: google.firestore.v1.DocumentTransform.FieldTransform.ServerValue set_to_server_value = 2;
     */
    value: DocumentTransform_FieldTransform_ServerValue;
    case: "setToServerValue";
  } | {
    /**
     * Adds the given value to the field's current value.
     *
     * This must be an integer or a double value.
     * If the field is not an integer or double, or if the field does not yet
     * exist, the transformation will set the field to the given value.
     * If either of the given value or the current field value are doubles,
     * both values will be interpreted as doubles. Double arithmetic and
     * representation of double values follow IEEE 754 semantics.
     * If there is positive/negative integer overflow, the field is resolved
     * to the largest magnitude positive/negative integer.
     *
     * @generated from field: google.firestore.v1.Value increment = 3;
     */
    value: Value;
    case: "increment";
  } | {
    /**
     * Sets the field to the maximum of its current value and the given value.
     *
     * This must be an integer or a double value.
     * If the field is not an integer or double, or if the field does not yet
     * exist, the transformation will set the field to the given value.
     * If a maximum operation is applied where the field and the input value
     * are of mixed types (that is - one is an integer and one is a double)
     * the field takes on the type of the larger operand. If the operands are
     * equivalent (e.g. 3 and 3.0), the field does not change.
     * 0, 0.0, and -0.0 are all zero. The maximum of a zero stored value and
     * zero input value is always the stored value.
     * The maximum of any numeric value x and NaN is NaN.
     *
     * @generated from field: google.firestore.v1.Value maximum = 4;
     */
    value: Value;
    case: "maximum";
  } | {
    /**
     * Sets the field to the minimum of its current value and the given value.
     *
     * This must be an integer or a double value.
     * If the field is not an integer or double, or if the field does not yet
     * exist, the transformation will set the field to the input value.
     * If a minimum operation is applied where the field and the input value
     * are of mixed types (that is - one is an integer and one is a double)
     * the field takes on the type of the smaller operand. If the operands are
     * equivalent (e.g. 3 and 3.0), the field does not change.
     * 0, 0.0, and -0.0 are all zero. The minimum of a zero stored value and
     * zero input value is always the stored value.
     * The minimum of any numeric value x and NaN is NaN.
     *
     * @generated from field: google.firestore.v1.Value minimum = 5;
     */
    value: Value;
    case: "minimum";
  } | {
    /**
     * Append the given elements in order if they are not already present in
     * the current field value.
     * If the field is not an array, or if the field does not yet exist, it is
     * first set to the empty array.
     *
     * Equivalent numbers of different types (e.g. 3L and 3.0) are
     * considered equal when checking if a value is missing.
     * NaN is equal to NaN, and Null is equal to Null.
     * If the input contains multiple equivalent values, only the first will
     * be considered.
     *
     * The corresponding transform_result will be the null value.
     *
     * @generated from field: google.firestore.v1.ArrayValue append_missing_elements = 6;
     */
    value: ArrayValue;
    case: "appendMissingElements";
  } | {
    /**
     * Remove all of the given elements from the array in the field.
     * If the field is not an array, or if the field does not yet exist, it is
     * set to the empty array.
     *
     * Equivalent numbers of the different types (e.g. 3L and 3.0) are
     * considered equal when deciding whether an element should be removed.
     * NaN is equal to NaN, and Null is equal to Null.
     * This will remove all equivalent values if there are duplicates.
     *
     * The corresponding transform_result will be the null value.
     *
     * @generated from field: google.firestore.v1.ArrayValue remove_all_from_array = 7;
     */
    value: ArrayValue;
    case: "removeAllFromArray";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.firestore.v1.DocumentTransform.FieldTransform.
 * Use `create(DocumentTransform_FieldTransformSchema)` to create a new message.
 */
export const DocumentTransform_FieldTransformSchema: GenMessage<DocumentTransform_FieldTransform> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 1, 0);

/**
 * A value that is calculated by the server.
 *
 * @generated from enum google.firestore.v1.DocumentTransform.FieldTransform.ServerValue
 */
export enum DocumentTransform_FieldTransform_ServerValue {
  /**
   * Unspecified. This value must not be used.
   *
   * @generated from enum value: SERVER_VALUE_UNSPECIFIED = 0;
   */
  SERVER_VALUE_UNSPECIFIED = 0,

  /**
   * The time at which the server processed the request, with millisecond
   * precision. If used on multiple fields (same or different documents) in
   * a transaction, all the fields will get the same server timestamp.
   *
   * @generated from enum value: REQUEST_TIME = 1;
   */
  REQUEST_TIME = 1,
}

/**
 * Describes the enum google.firestore.v1.DocumentTransform.FieldTransform.ServerValue.
 */
export const DocumentTransform_FieldTransform_ServerValueSchema: GenEnum<DocumentTransform_FieldTransform_ServerValue> = /*@__PURE__*/
  enumDesc(file_google_firestore_v1_write, 1, 0, 0);

/**
 * The result of applying a write.
 *
 * @generated from message google.firestore.v1.WriteResult
 */
export type WriteResult = Message<"google.firestore.v1.WriteResult"> & {
  /**
   * The last update time of the document after applying the write. Not set
   * after a `delete`.
   *
   * If the write did not actually change the document, this will be the
   * previous update_time.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 1;
   */
  updateTime?: Timestamp;

  /**
   * The results of applying each
   * [DocumentTransform.FieldTransform][google.firestore.v1.DocumentTransform.FieldTransform],
   * in the same order.
   *
   * @generated from field: repeated google.firestore.v1.Value transform_results = 2;
   */
  transformResults: Value[];
};

/**
 * Describes the message google.firestore.v1.WriteResult.
 * Use `create(WriteResultSchema)` to create a new message.
 */
export const WriteResultSchema: GenMessage<WriteResult> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 2);

/**
 * A [Document][google.firestore.v1.Document] has changed.
 *
 * May be the result of multiple [writes][google.firestore.v1.Write], including
 * deletes, that ultimately resulted in a new value for the
 * [Document][google.firestore.v1.Document].
 *
 * Multiple [DocumentChange][google.firestore.v1.DocumentChange] messages may be
 * returned for the same logical change, if multiple targets are affected.
 *
 * @generated from message google.firestore.v1.DocumentChange
 */
export type DocumentChange = Message<"google.firestore.v1.DocumentChange"> & {
  /**
   * The new state of the [Document][google.firestore.v1.Document].
   *
   * If `mask` is set, contains only fields that were updated or added.
   *
   * @generated from field: google.firestore.v1.Document document = 1;
   */
  document?: Document;

  /**
   * A set of target IDs of targets that match this document.
   *
   * @generated from field: repeated int32 target_ids = 5;
   */
  targetIds: number[];

  /**
   * A set of target IDs for targets that no longer match this document.
   *
   * @generated from field: repeated int32 removed_target_ids = 6;
   */
  removedTargetIds: number[];
};

/**
 * Describes the message google.firestore.v1.DocumentChange.
 * Use `create(DocumentChangeSchema)` to create a new message.
 */
export const DocumentChangeSchema: GenMessage<DocumentChange> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 3);

/**
 * A [Document][google.firestore.v1.Document] has been deleted.
 *
 * May be the result of multiple [writes][google.firestore.v1.Write], including
 * updates, the last of which deleted the
 * [Document][google.firestore.v1.Document].
 *
 * Multiple [DocumentDelete][google.firestore.v1.DocumentDelete] messages may be
 * returned for the same logical delete, if multiple targets are affected.
 *
 * @generated from message google.firestore.v1.DocumentDelete
 */
export type DocumentDelete = Message<"google.firestore.v1.DocumentDelete"> & {
  /**
   * The resource name of the [Document][google.firestore.v1.Document] that was
   * deleted.
   *
   * @generated from field: string document = 1;
   */
  document: string;

  /**
   * A set of target IDs for targets that previously matched this entity.
   *
   * @generated from field: repeated int32 removed_target_ids = 6;
   */
  removedTargetIds: number[];

  /**
   * The read timestamp at which the delete was observed.
   *
   * Greater or equal to the `commit_time` of the delete.
   *
   * @generated from field: google.protobuf.Timestamp read_time = 4;
   */
  readTime?: Timestamp;
};

/**
 * Describes the message google.firestore.v1.DocumentDelete.
 * Use `create(DocumentDeleteSchema)` to create a new message.
 */
export const DocumentDeleteSchema: GenMessage<DocumentDelete> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 4);

/**
 * A [Document][google.firestore.v1.Document] has been removed from the view of
 * the targets.
 *
 * Sent if the document is no longer relevant to a target and is out of view.
 * Can be sent instead of a DocumentDelete or a DocumentChange if the server
 * can not send the new value of the document.
 *
 * Multiple [DocumentRemove][google.firestore.v1.DocumentRemove] messages may be
 * returned for the same logical write or delete, if multiple targets are
 * affected.
 *
 * @generated from message google.firestore.v1.DocumentRemove
 */
export type DocumentRemove = Message<"google.firestore.v1.DocumentRemove"> & {
  /**
   * The resource name of the [Document][google.firestore.v1.Document] that has
   * gone out of view.
   *
   * @generated from field: string document = 1;
   */
  document: string;

  /**
   * A set of target IDs for targets that previously matched this document.
   *
   * @generated from field: repeated int32 removed_target_ids = 2;
   */
  removedTargetIds: number[];

  /**
   * The read timestamp at which the remove was observed.
   *
   * Greater or equal to the `commit_time` of the change/delete/remove.
   *
   * @generated from field: google.protobuf.Timestamp read_time = 4;
   */
  readTime?: Timestamp;
};

/**
 * Describes the message google.firestore.v1.DocumentRemove.
 * Use `create(DocumentRemoveSchema)` to create a new message.
 */
export const DocumentRemoveSchema: GenMessage<DocumentRemove> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 5);

/**
 * A digest of all the documents that match a given target.
 *
 * @generated from message google.firestore.v1.ExistenceFilter
 */
export type ExistenceFilter = Message<"google.firestore.v1.ExistenceFilter"> & {
  /**
   * The target ID to which this filter applies.
   *
   * @generated from field: int32 target_id = 1;
   */
  targetId: number;

  /**
   * The total count of documents that match
   * [target_id][google.firestore.v1.ExistenceFilter.target_id].
   *
   * If different from the count of documents in the client that match, the
   * client must manually determine which documents no longer match the target.
   *
   * The client can use the `unchanged_names` bloom filter to assist with
   * this determination by testing ALL the document names against the filter;
   * if the document name is NOT in the filter, it means the document no
   * longer matches the target.
   *
   * @generated from field: int32 count = 2;
   */
  count: number;

  /**
   * A bloom filter that, despite its name, contains the UTF-8 byte encodings of
   * the resource names of ALL the documents that match
   * [target_id][google.firestore.v1.ExistenceFilter.target_id], in the form
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *
   * This bloom filter may be omitted at the server's discretion, such as if it
   * is deemed that the client will not make use of it or if it is too
   * computationally expensive to calculate or transmit. Clients must gracefully
   * handle this field being absent by falling back to the logic used before
   * this field existed; that is, re-add the target without a resume token to
   * figure out which documents in the client's cache are out of sync.
   *
   * @generated from field: google.firestore.v1.BloomFilter unchanged_names = 3;
   */
  unchangedNames?: BloomFilter;
};

/**
 * Describes the message google.firestore.v1.ExistenceFilter.
 * Use `create(ExistenceFilterSchema)` to create a new message.
 */
export const ExistenceFilterSchema: GenMessage<ExistenceFilter> = /*@__PURE__*/
  messageDesc(file_google_firestore_v1_write, 6);
