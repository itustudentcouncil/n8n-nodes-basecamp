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
// @generated from file google/devtools/resultstore/v2/download_metadata.proto (package google.devtools.resultstore.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { UploadStatus } from "./common_pb";
import { file_google_devtools_resultstore_v2_common } from "./common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/devtools/resultstore/v2/download_metadata.proto.
 */
export const file_google_devtools_resultstore_v2_download_metadata: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvZGV2dG9vbHMvcmVzdWx0c3RvcmUvdjIvZG93bmxvYWRfbWV0YWRhdGEucHJvdG8SHmdvb2dsZS5kZXZ0b29scy5yZXN1bHRzdG9yZS52MiLaAgoQRG93bmxvYWRNZXRhZGF0YRIMCgRuYW1lGAEgASgJEkMKDXVwbG9hZF9zdGF0dXMYAiABKA4yLC5nb29nbGUuZGV2dG9vbHMucmVzdWx0c3RvcmUudjIuVXBsb2FkU3RhdHVzEi8KC2NyZWF0ZV90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIxCg1maW5hbGl6ZV90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIyCg5pbW11dGFibGVfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXA6W+pBWAorcmVzdWx0c3RvcmUuZ29vZ2xlYXBpcy5jb20vRG93bmxvYWRNZXRhZGF0YRIpaW52b2NhdGlvbnMve2ludm9jYXRpb259L2Rvd25sb2FkTWV0YWRhdGFCiAEKImNvbS5nb29nbGUuZGV2dG9vbHMucmVzdWx0c3RvcmUudjJCFURvd25sb2FkTWV0YWRhdGFQcm90b1ABWklnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2RldnRvb2xzL3Jlc3VsdHN0b3JlL3YyO3Jlc3VsdHN0b3JlYgZwcm90bzM", [file_google_api_resource, file_google_devtools_resultstore_v2_common, file_google_protobuf_timestamp]);

/**
 * The download metadata for an invocation
 *
 * @generated from message google.devtools.resultstore.v2.DownloadMetadata
 */
export type DownloadMetadata = Message<"google.devtools.resultstore.v2.DownloadMetadata"> & {
  /**
   * The name of the download metadata.  Its format will be:
   * invocations/${INVOCATION_ID}/downloadMetadata
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Indicates the upload status of the invocation, whether it is
   * post-processing, or immutable, etc.
   *
   * @generated from field: google.devtools.resultstore.v2.UploadStatus upload_status = 2;
   */
  uploadStatus: UploadStatus;

  /**
   * If populated, the time when CreateInvocation is called.
   * This does not necessarily line up with the start time of the invocation.
   * Please use invocation.timing.start_time for that purpose.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * If populated, the time when FinalizeInvocation is called or when invocation
   * is automatically finalized. This field is populated when upload_status
   * becomes POST_PROCESSING.
   *
   * @generated from field: google.protobuf.Timestamp finalize_time = 4;
   */
  finalizeTime?: Timestamp;

  /**
   * If populated, the time when all post processing is done and the invocation
   * is marked as immutable. This field is populated when upload_status becomes
   * IMMUTABLE.
   *
   * @generated from field: google.protobuf.Timestamp immutable_time = 5;
   */
  immutableTime?: Timestamp;
};

/**
 * Describes the message google.devtools.resultstore.v2.DownloadMetadata.
 * Use `create(DownloadMetadataSchema)` to create a new message.
 */
export const DownloadMetadataSchema: GenMessage<DownloadMetadata> = /*@__PURE__*/
  messageDesc(file_google_devtools_resultstore_v2_download_metadata, 0);
