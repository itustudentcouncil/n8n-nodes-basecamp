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
// @generated from file google/cloud/netapp/v1/snapshot.proto (package google.cloud.netapp.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/netapp/v1/snapshot.proto.
 */
export const file_google_cloud_netapp_v1_snapshot: GenFile = /*@__PURE__*/
  fileDesc("CiVnb29nbGUvY2xvdWQvbmV0YXBwL3YxL3NuYXBzaG90LnByb3RvEhZnb29nbGUuY2xvdWQubmV0YXBwLnYxIpcBChRMaXN0U25hcHNob3RzUmVxdWVzdBI2CgZwYXJlbnQYASABKAlCJuBBAvpBIBIebmV0YXBwLmdvb2dsZWFwaXMuY29tL1NuYXBzaG90EhEKCXBhZ2Vfc2l6ZRgCIAEoBRISCgpwYWdlX3Rva2VuGAMgASgJEhAKCG9yZGVyX2J5GAQgASgJEg4KBmZpbHRlchgFIAEoCSJ6ChVMaXN0U25hcHNob3RzUmVzcG9uc2USMwoJc25hcHNob3RzGAEgAygLMiAuZ29vZ2xlLmNsb3VkLm5ldGFwcC52MS5TbmFwc2hvdBIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEwoLdW5yZWFjaGFibGUYAyADKAkiSgoSR2V0U25hcHNob3RSZXF1ZXN0EjQKBG5hbWUYASABKAlCJuBBAvpBIAoebmV0YXBwLmdvb2dsZWFwaXMuY29tL1NuYXBzaG90IqIBChVDcmVhdGVTbmFwc2hvdFJlcXVlc3QSNgoGcGFyZW50GAEgASgJQibgQQL6QSASHm5ldGFwcC5nb29nbGVhcGlzLmNvbS9TbmFwc2hvdBI3CghzbmFwc2hvdBgCIAEoCzIgLmdvb2dsZS5jbG91ZC5uZXRhcHAudjEuU25hcHNob3RCA+BBAhIYCgtzbmFwc2hvdF9pZBgDIAEoCUID4EECIk0KFURlbGV0ZVNuYXBzaG90UmVxdWVzdBI0CgRuYW1lGAEgASgJQibgQQL6QSAKHm5ldGFwcC5nb29nbGVhcGlzLmNvbS9TbmFwc2hvdCKGAQoVVXBkYXRlU25hcHNob3RSZXF1ZXN0EjQKC3VwZGF0ZV9tYXNrGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EECEjcKCHNuYXBzaG90GAIgASgLMiAuZ29vZ2xlLmNsb3VkLm5ldGFwcC52MS5TbmFwc2hvdEID4EECIr8ECghTbmFwc2hvdBIRCgRuYW1lGAEgASgJQgPgQQgSOgoFc3RhdGUYAiABKA4yJi5nb29nbGUuY2xvdWQubmV0YXBwLnYxLlNuYXBzaG90LlN0YXRlQgPgQQMSGgoNc3RhdGVfZGV0YWlscxgDIAEoCUID4EEDEhMKC2Rlc2NyaXB0aW9uGAQgASgJEhcKCnVzZWRfYnl0ZXMYBSABKAFCA+BBAxI0CgtjcmVhdGVfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI8CgZsYWJlbHMYByADKAsyLC5nb29nbGUuY2xvdWQubmV0YXBwLnYxLlNuYXBzaG90LkxhYmVsc0VudHJ5Gi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEibAoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABIJCgVSRUFEWRABEgwKCENSRUFUSU5HEAISDAoIREVMRVRJTkcQAxIMCghVUERBVElORxAEEgwKCERJU0FCTEVEEAUSCQoFRVJST1IQBjqIAepBhAEKHm5ldGFwcC5nb29nbGVhcGlzLmNvbS9TbmFwc2hvdBJNcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L3ZvbHVtZXMve3ZvbHVtZX0vc25hcHNob3RzL3tzbmFwc2hvdH0qCXNuYXBzaG90czIIc25hcHNob3RCrwEKGmNvbS5nb29nbGUuY2xvdWQubmV0YXBwLnYxQg1TbmFwc2hvdFByb3RvUAFaMmNsb3VkLmdvb2dsZS5jb20vZ28vbmV0YXBwL2FwaXYxL25ldGFwcHBiO25ldGFwcHBiqgIWR29vZ2xlLkNsb3VkLk5ldEFwcC5WMcoCFkdvb2dsZVxDbG91ZFxOZXRBcHBcVjHqAhlHb29nbGU6OkNsb3VkOjpOZXRBcHA6OlYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * ListSnapshotsRequest lists snapshots.
 *
 * @generated from message google.cloud.netapp.v1.ListSnapshotsRequest
 */
export type ListSnapshotsRequest = Message<"google.cloud.netapp.v1.ListSnapshotsRequest"> & {
  /**
   * Required. The volume for which to retrieve snapshot information,
   * in the format
   * `projects/{project_id}/locations/{location}/volumes/{volume_id}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of items to return.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * The next_page_token value to use if there are additional
   * results to retrieve for this list request.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Sort results. Supported values are "name", "name desc" or "" (unsorted).
   *
   * @generated from field: string order_by = 4;
   */
  orderBy: string;

  /**
   * List filter.
   *
   * @generated from field: string filter = 5;
   */
  filter: string;
};

/**
 * Describes the message google.cloud.netapp.v1.ListSnapshotsRequest.
 * Use `create(ListSnapshotsRequestSchema)` to create a new message.
 */
export const ListSnapshotsRequestSchema: GenMessage<ListSnapshotsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_netapp_v1_snapshot, 0);

/**
 * ListSnapshotsResponse is the result of ListSnapshotsRequest.
 *
 * @generated from message google.cloud.netapp.v1.ListSnapshotsResponse
 */
export type ListSnapshotsResponse = Message<"google.cloud.netapp.v1.ListSnapshotsResponse"> & {
  /**
   * A list of snapshots in the project for the specified volume.
   *
   * @generated from field: repeated google.cloud.netapp.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[];

  /**
   * The token you can use to retrieve the next page of results. Not returned
   * if there are no more results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Locations that could not be reached.
   *
   * @generated from field: repeated string unreachable = 3;
   */
  unreachable: string[];
};

/**
 * Describes the message google.cloud.netapp.v1.ListSnapshotsResponse.
 * Use `create(ListSnapshotsResponseSchema)` to create a new message.
 */
export const ListSnapshotsResponseSchema: GenMessage<ListSnapshotsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_netapp_v1_snapshot, 1);

/**
 * GetSnapshotRequest gets the state of a snapshot.
 *
 * @generated from message google.cloud.netapp.v1.GetSnapshotRequest
 */
export type GetSnapshotRequest = Message<"google.cloud.netapp.v1.GetSnapshotRequest"> & {
  /**
   * Required. The snapshot resource name, in the format
   * `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.netapp.v1.GetSnapshotRequest.
 * Use `create(GetSnapshotRequestSchema)` to create a new message.
 */
export const GetSnapshotRequestSchema: GenMessage<GetSnapshotRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_netapp_v1_snapshot, 2);

/**
 * CreateSnapshotRequest creates a snapshot.
 *
 * @generated from message google.cloud.netapp.v1.CreateSnapshotRequest
 */
export type CreateSnapshotRequest = Message<"google.cloud.netapp.v1.CreateSnapshotRequest"> & {
  /**
   * Required. The NetApp volume to create the snapshots of, in the format
   * `projects/{project_id}/locations/{location}/volumes/{volume_id}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. A snapshot resource
   *
   * @generated from field: google.cloud.netapp.v1.Snapshot snapshot = 2;
   */
  snapshot?: Snapshot;

  /**
   * Required. ID of the snapshot to create. Must be unique within the parent
   * resource. Must contain only letters, numbers, underscore and hyphen, with
   * the first character a letter or underscore, the last a letter or underscore
   * or a number, and a 63 character maximum.
   *
   * @generated from field: string snapshot_id = 3;
   */
  snapshotId: string;
};

/**
 * Describes the message google.cloud.netapp.v1.CreateSnapshotRequest.
 * Use `create(CreateSnapshotRequestSchema)` to create a new message.
 */
export const CreateSnapshotRequestSchema: GenMessage<CreateSnapshotRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_netapp_v1_snapshot, 3);

/**
 * DeleteSnapshotRequest deletes a snapshot.
 *
 * @generated from message google.cloud.netapp.v1.DeleteSnapshotRequest
 */
export type DeleteSnapshotRequest = Message<"google.cloud.netapp.v1.DeleteSnapshotRequest"> & {
  /**
   * Required. The snapshot resource name, in the format
   * `projects/*\/locations/*\/volumes/*\/snapshots/{snapshot_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.netapp.v1.DeleteSnapshotRequest.
 * Use `create(DeleteSnapshotRequestSchema)` to create a new message.
 */
export const DeleteSnapshotRequestSchema: GenMessage<DeleteSnapshotRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_netapp_v1_snapshot, 4);

/**
 * UpdateSnapshotRequest updates description and/or labels for a snapshot.
 *
 * @generated from message google.cloud.netapp.v1.UpdateSnapshotRequest
 */
export type UpdateSnapshotRequest = Message<"google.cloud.netapp.v1.UpdateSnapshotRequest"> & {
  /**
   * Required. Mask of fields to update.  At least one path must be supplied in
   * this field.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 1;
   */
  updateMask?: FieldMask;

  /**
   * Required. A snapshot resource
   *
   * @generated from field: google.cloud.netapp.v1.Snapshot snapshot = 2;
   */
  snapshot?: Snapshot;
};

/**
 * Describes the message google.cloud.netapp.v1.UpdateSnapshotRequest.
 * Use `create(UpdateSnapshotRequestSchema)` to create a new message.
 */
export const UpdateSnapshotRequestSchema: GenMessage<UpdateSnapshotRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_netapp_v1_snapshot, 5);

/**
 * Snapshot is a point-in-time version of a Volume's content.
 *
 * @generated from message google.cloud.netapp.v1.Snapshot
 */
export type Snapshot = Message<"google.cloud.netapp.v1.Snapshot"> & {
  /**
   * Identifier. The resource name of the snapshot.
   * Format:
   * `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. The snapshot state.
   *
   * @generated from field: google.cloud.netapp.v1.Snapshot.State state = 2;
   */
  state: Snapshot_State;

  /**
   * Output only. State details of the storage pool
   *
   * @generated from field: string state_details = 3;
   */
  stateDetails: string;

  /**
   * A description of the snapshot with 2048 characters or less.
   * Requests with longer descriptions will be rejected.
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * Output only. Current storage usage for the snapshot in bytes.
   *
   * @generated from field: double used_bytes = 5;
   */
  usedBytes: number;

  /**
   * Output only. The time when the snapshot was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 6;
   */
  createTime?: Timestamp;

  /**
   * Resource labels to represent user provided metadata.
   *
   * @generated from field: map<string, string> labels = 7;
   */
  labels: { [key: string]: string };
};

/**
 * Describes the message google.cloud.netapp.v1.Snapshot.
 * Use `create(SnapshotSchema)` to create a new message.
 */
export const SnapshotSchema: GenMessage<Snapshot> = /*@__PURE__*/
  messageDesc(file_google_cloud_netapp_v1_snapshot, 6);

/**
 * The Snapshot States
 *
 * @generated from enum google.cloud.netapp.v1.Snapshot.State
 */
export enum Snapshot_State {
  /**
   * Unspecified Snapshot State
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Snapshot State is Ready
   *
   * @generated from enum value: READY = 1;
   */
  READY = 1,

  /**
   * Snapshot State is Creating
   *
   * @generated from enum value: CREATING = 2;
   */
  CREATING = 2,

  /**
   * Snapshot State is Deleting
   *
   * @generated from enum value: DELETING = 3;
   */
  DELETING = 3,

  /**
   * Snapshot State is Updating
   *
   * @generated from enum value: UPDATING = 4;
   */
  UPDATING = 4,

  /**
   * Snapshot State is Disabled
   *
   * @generated from enum value: DISABLED = 5;
   */
  DISABLED = 5,

  /**
   * Snapshot State is Error
   *
   * @generated from enum value: ERROR = 6;
   */
  ERROR = 6,
}

/**
 * Describes the enum google.cloud.netapp.v1.Snapshot.State.
 */
export const Snapshot_StateSchema: GenEnum<Snapshot_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_netapp_v1_snapshot, 6, 0);
