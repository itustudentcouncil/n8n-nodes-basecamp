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
//

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/cloud/vision/v1p4beta1/face.proto (package google.cloud.vision.v1p4beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_cloud_vision_v1p4beta1_geometry } from "./geometry_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/vision/v1p4beta1/face.proto.
 */
export const file_google_cloud_vision_v1p4beta1_face: GenFile = /*@__PURE__*/
  fileDesc("Cihnb29nbGUvY2xvdWQvdmlzaW9uL3YxcDRiZXRhMS9mYWNlLnByb3RvEh1nb29nbGUuY2xvdWQudmlzaW9uLnYxcDRiZXRhMSIuChVGYWNlUmVjb2duaXRpb25QYXJhbXMSFQoNY2VsZWJyaXR5X3NldBgBIAMoCSJECglDZWxlYnJpdHkSDAoEbmFtZRgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkiaAoVRmFjZVJlY29nbml0aW9uUmVzdWx0EjsKCWNlbGVicml0eRgBIAEoCzIoLmdvb2dsZS5jbG91ZC52aXNpb24udjFwNGJldGExLkNlbGVicml0eRISCgpjb25maWRlbmNlGAIgASgCQnoKIWNvbS5nb29nbGUuY2xvdWQudmlzaW9uLnYxcDRiZXRhMUIOQ2VsZWJyaXR5UHJvdG9QAVo5Y2xvdWQuZ29vZ2xlLmNvbS9nby92aXNpb24vYXBpdjFwNGJldGExL3Zpc2lvbnBiO3Zpc2lvbnBi+AEBogIER0NWTmIGcHJvdG8z", [file_google_cloud_vision_v1p4beta1_geometry]);

/**
 * Parameters for a celebrity recognition request.
 *
 * @generated from message google.cloud.vision.v1p4beta1.FaceRecognitionParams
 */
export type FaceRecognitionParams = Message<"google.cloud.vision.v1p4beta1.FaceRecognitionParams"> & {
  /**
   * The resource names for one or more
   * [CelebritySet][google.cloud.vision.v1p4beta1.CelebritySet]s. A celebrity
   * set is preloaded and can be specified as "builtin/default". If this is
   * specified, the algorithm will try to match the faces detected in the input
   * image to the Celebrities in the CelebritySets.
   *
   * @generated from field: repeated string celebrity_set = 1;
   */
  celebritySet: string[];
};

/**
 * Describes the message google.cloud.vision.v1p4beta1.FaceRecognitionParams.
 * Use `create(FaceRecognitionParamsSchema)` to create a new message.
 */
export const FaceRecognitionParamsSchema: GenMessage<FaceRecognitionParams> = /*@__PURE__*/
  messageDesc(file_google_cloud_vision_v1p4beta1_face, 0);

/**
 * A Celebrity is a group of Faces with an identity.
 *
 * @generated from message google.cloud.vision.v1p4beta1.Celebrity
 */
export type Celebrity = Message<"google.cloud.vision.v1p4beta1.Celebrity"> & {
  /**
   * The resource name of the preloaded Celebrity. Has the format
   * `builtin/{mid}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The Celebrity's display name.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * The Celebrity's description.
   *
   * @generated from field: string description = 3;
   */
  description: string;
};

/**
 * Describes the message google.cloud.vision.v1p4beta1.Celebrity.
 * Use `create(CelebritySchema)` to create a new message.
 */
export const CelebritySchema: GenMessage<Celebrity> = /*@__PURE__*/
  messageDesc(file_google_cloud_vision_v1p4beta1_face, 1);

/**
 * Information about a face's identity.
 *
 * @generated from message google.cloud.vision.v1p4beta1.FaceRecognitionResult
 */
export type FaceRecognitionResult = Message<"google.cloud.vision.v1p4beta1.FaceRecognitionResult"> & {
  /**
   * The [Celebrity][google.cloud.vision.v1p4beta1.Celebrity] that this face was
   * matched to.
   *
   * @generated from field: google.cloud.vision.v1p4beta1.Celebrity celebrity = 1;
   */
  celebrity?: Celebrity;

  /**
   * Recognition confidence. Range [0, 1].
   *
   * @generated from field: float confidence = 2;
   */
  confidence: number;
};

/**
 * Describes the message google.cloud.vision.v1p4beta1.FaceRecognitionResult.
 * Use `create(FaceRecognitionResultSchema)` to create a new message.
 */
export const FaceRecognitionResultSchema: GenMessage<FaceRecognitionResult> = /*@__PURE__*/
  messageDesc(file_google_cloud_vision_v1p4beta1_face, 2);
