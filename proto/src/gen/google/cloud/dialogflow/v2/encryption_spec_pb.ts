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
// @generated from file google/cloud/dialogflow/v2/encryption_spec.proto (package google.cloud.dialogflow.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dialogflow/v2/encryption_spec.proto.
 */
export const file_google_cloud_dialogflow_v2_encryption_spec: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvZGlhbG9nZmxvdy92Mi9lbmNyeXB0aW9uX3NwZWMucHJvdG8SGmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyIloKGEdldEVuY3J5cHRpb25TcGVjUmVxdWVzdBI+CgRuYW1lGAEgASgJQjDgQQL6QSoKKGRpYWxvZ2Zsb3cuZ29vZ2xlYXBpcy5jb20vRW5jcnlwdGlvblNwZWMiwwEKDkVuY3J5cHRpb25TcGVjEhEKBG5hbWUYASABKAlCA+BBBRIUCgdrbXNfa2V5GAIgASgJQgPgQQI6hwHqQYMBCihkaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL0VuY3J5cHRpb25TcGVjEjZwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vZW5jcnlwdGlvblNwZWMqD2VuY3J5cHRpb25TcGVjczIOZW5jcnlwdGlvblNwZWMiawofSW5pdGlhbGl6ZUVuY3J5cHRpb25TcGVjUmVxdWVzdBJICg9lbmNyeXB0aW9uX3NwZWMYASABKAsyKi5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5FbmNyeXB0aW9uU3BlY0ID4EECIiIKIEluaXRpYWxpemVFbmNyeXB0aW9uU3BlY1Jlc3BvbnNlInUKIEluaXRpYWxpemVFbmNyeXB0aW9uU3BlY01ldGFkYXRhElEKB3JlcXVlc3QYBCABKAsyOy5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5Jbml0aWFsaXplRW5jcnlwdGlvblNwZWNSZXF1ZXN0QgPgQQMy9QQKFUVuY3J5cHRpb25TcGVjU2VydmljZRK2AQoRR2V0RW5jcnlwdGlvblNwZWMSNC5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5HZXRFbmNyeXB0aW9uU3BlY1JlcXVlc3QaKi5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5FbmNyeXB0aW9uU3BlYyI/2kEEbmFtZYLT5JMCMhIwL3YyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovZW5jcnlwdGlvblNwZWN9EqgCChhJbml0aWFsaXplRW5jcnlwdGlvblNwZWMSOy5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5Jbml0aWFsaXplRW5jcnlwdGlvblNwZWNSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiKvAcpBRAogSW5pdGlhbGl6ZUVuY3J5cHRpb25TcGVjUmVzcG9uc2USIEluaXRpYWxpemVFbmNyeXB0aW9uU3BlY01ldGFkYXRh2kEPZW5jcnlwdGlvbl9zcGVjgtPkkwJQOgEqIksvdjIve2VuY3J5cHRpb25fc3BlYy5uYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovZW5jcnlwdGlvblNwZWN9OmluaXRpYWxpemUaeMpBGWRpYWxvZ2Zsb3cuZ29vZ2xlYXBpcy5jb23SQVlodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtLGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZGlhbG9nZmxvd0KcAQoeY29tLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyQhNFbmNyeXB0aW9uU3BlY1Byb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vZGlhbG9nZmxvdy9hcGl2Mi9kaWFsb2dmbG93cGI7ZGlhbG9nZmxvd3Bi+AEBogICREaqAhpHb29nbGUuQ2xvdWQuRGlhbG9nZmxvdy5WMmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_longrunning_operations]);

/**
 * The request to get location-level encryption specification.
 *
 * @generated from message google.cloud.dialogflow.v2.GetEncryptionSpecRequest
 */
export type GetEncryptionSpecRequest = Message<"google.cloud.dialogflow.v2.GetEncryptionSpecRequest"> & {
  /**
   * Required. The name of the encryption spec resource to get.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2.GetEncryptionSpecRequest.
 * Use `create(GetEncryptionSpecRequestSchema)` to create a new message.
 */
export const GetEncryptionSpecRequestSchema: GenMessage<GetEncryptionSpecRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_encryption_spec, 0);

/**
 * A customer-managed encryption key specification that can be applied to all
 * created resources (e.g. Conversation).
 *
 * @generated from message google.cloud.dialogflow.v2.EncryptionSpec
 */
export type EncryptionSpec = Message<"google.cloud.dialogflow.v2.EncryptionSpec"> & {
  /**
   * Immutable. The resource name of the encryption key specification resource.
   * Format:
   * projects/{project}/locations/{location}/encryptionSpec
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The name of customer-managed encryption key that is used to
   * secure a resource and its sub-resources. If empty, the resource is secured
   * by the default Google encryption key. Only the key in the same location as
   * this resource is allowed to be used for encryption. Format:
   * `projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}`
   *
   * @generated from field: string kms_key = 2;
   */
  kmsKey: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2.EncryptionSpec.
 * Use `create(EncryptionSpecSchema)` to create a new message.
 */
export const EncryptionSpecSchema: GenMessage<EncryptionSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_encryption_spec, 1);

/**
 * The request to initialize a location-level encryption specification.
 *
 * @generated from message google.cloud.dialogflow.v2.InitializeEncryptionSpecRequest
 */
export type InitializeEncryptionSpecRequest = Message<"google.cloud.dialogflow.v2.InitializeEncryptionSpecRequest"> & {
  /**
   * Required. The encryption spec used for CMEK encryption. It is required that
   * the kms key is in the same region as the endpoint. The same key will be
   * used for all provisioned resources, if encryption is available. If the
   * kms_key_name is left empty, no encryption will be enforced.
   *
   * @generated from field: google.cloud.dialogflow.v2.EncryptionSpec encryption_spec = 1;
   */
  encryptionSpec?: EncryptionSpec;
};

/**
 * Describes the message google.cloud.dialogflow.v2.InitializeEncryptionSpecRequest.
 * Use `create(InitializeEncryptionSpecRequestSchema)` to create a new message.
 */
export const InitializeEncryptionSpecRequestSchema: GenMessage<InitializeEncryptionSpecRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_encryption_spec, 2);

/**
 * The response to initialize a location-level encryption specification.
 *
 * @generated from message google.cloud.dialogflow.v2.InitializeEncryptionSpecResponse
 */
export type InitializeEncryptionSpecResponse = Message<"google.cloud.dialogflow.v2.InitializeEncryptionSpecResponse"> & {
};

/**
 * Describes the message google.cloud.dialogflow.v2.InitializeEncryptionSpecResponse.
 * Use `create(InitializeEncryptionSpecResponseSchema)` to create a new message.
 */
export const InitializeEncryptionSpecResponseSchema: GenMessage<InitializeEncryptionSpecResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_encryption_spec, 3);

/**
 * Metadata for initializing a location-level encryption specification.
 *
 * @generated from message google.cloud.dialogflow.v2.InitializeEncryptionSpecMetadata
 */
export type InitializeEncryptionSpecMetadata = Message<"google.cloud.dialogflow.v2.InitializeEncryptionSpecMetadata"> & {
  /**
   * Output only. The original request for initialization.
   *
   * @generated from field: google.cloud.dialogflow.v2.InitializeEncryptionSpecRequest request = 4;
   */
  request?: InitializeEncryptionSpecRequest;
};

/**
 * Describes the message google.cloud.dialogflow.v2.InitializeEncryptionSpecMetadata.
 * Use `create(InitializeEncryptionSpecMetadataSchema)` to create a new message.
 */
export const InitializeEncryptionSpecMetadataSchema: GenMessage<InitializeEncryptionSpecMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_encryption_spec, 4);

/**
 * Manages encryption spec settings for Dialogflow and Agent Assist.
 *
 * @generated from service google.cloud.dialogflow.v2.EncryptionSpecService
 */
export const EncryptionSpecService: GenService<{
  /**
   * Gets location-level encryption key specification.
   *
   * @generated from rpc google.cloud.dialogflow.v2.EncryptionSpecService.GetEncryptionSpec
   */
  getEncryptionSpec: {
    methodKind: "unary";
    input: typeof GetEncryptionSpecRequestSchema;
    output: typeof EncryptionSpecSchema;
  },
  /**
   * Initializes a location-level encryption key specification.  An error will
   * be thrown if the location has resources already created before the
   * initialization. Once the encryption specification is initialized at a
   * location, it is immutable and all newly created resources under the
   * location will be encrypted with the existing specification.
   *
   * @generated from rpc google.cloud.dialogflow.v2.EncryptionSpecService.InitializeEncryptionSpec
   */
  initializeEncryptionSpec: {
    methodKind: "unary";
    input: typeof InitializeEncryptionSpecRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_dialogflow_v2_encryption_spec, 0);
