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
// @generated from file google/apps/drive/activity/v2/drive_activity_service.proto (package google.apps.drive.activity.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import type { QueryDriveActivityRequestSchema } from "./query_drive_activity_request_pb";
import { file_google_apps_drive_activity_v2_query_drive_activity_request } from "./query_drive_activity_request_pb";
import type { QueryDriveActivityResponseSchema } from "./query_drive_activity_response_pb";
import { file_google_apps_drive_activity_v2_query_drive_activity_response } from "./query_drive_activity_response_pb";

/**
 * Describes the file google/apps/drive/activity/v2/drive_activity_service.proto.
 */
export const file_google_apps_drive_activity_v2_drive_activity_service: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvYXBwcy9kcml2ZS9hY3Rpdml0eS92Mi9kcml2ZV9hY3Rpdml0eV9zZXJ2aWNlLnByb3RvEh1nb29nbGUuYXBwcy5kcml2ZS5hY3Rpdml0eS52MjLMAgoURHJpdmVBY3Rpdml0eVNlcnZpY2USqAEKElF1ZXJ5RHJpdmVBY3Rpdml0eRI4Lmdvb2dsZS5hcHBzLmRyaXZlLmFjdGl2aXR5LnYyLlF1ZXJ5RHJpdmVBY3Rpdml0eVJlcXVlc3QaOS5nb29nbGUuYXBwcy5kcml2ZS5hY3Rpdml0eS52Mi5RdWVyeURyaXZlQWN0aXZpdHlSZXNwb25zZSIdgtPkkwIXOgEqIhIvdjIvYWN0aXZpdHk6cXVlcnkaiAHKQRxkcml2ZWFjdGl2aXR5Lmdvb2dsZWFwaXMuY29t0kFmaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZS5hY3Rpdml0eSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLmFjdGl2aXR5LnJlYWRvbmx5Qs4BCiFjb20uZ29vZ2xlLmFwcHMuZHJpdmUuYWN0aXZpdHkudjJCGURyaXZlQWN0aXZpdHlTZXJ2aWNlUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcHBzL2RyaXZlL2FjdGl2aXR5L3YyO2FjdGl2aXR5ogIER0FEQaoCHUdvb2dsZS5BcHBzLkRyaXZlLkFjdGl2aXR5LlYyygIdR29vZ2xlXEFwcHNcRHJpdmVcQWN0aXZpdHlcVjJiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_apps_drive_activity_v2_query_drive_activity_request, file_google_apps_drive_activity_v2_query_drive_activity_response]);

/**
 * Service for querying activity on Drive items. Activity is user
 * or system action on Drive items that happened in the past. A Drive item can
 * be a file or folder, or a Team Drive.
 *
 * @generated from service google.apps.drive.activity.v2.DriveActivityService
 */
export const DriveActivityService: GenService<{
  /**
   * Query past activity in Google Drive.
   *
   * @generated from rpc google.apps.drive.activity.v2.DriveActivityService.QueryDriveActivity
   */
  queryDriveActivity: {
    methodKind: "unary";
    input: typeof QueryDriveActivityRequestSchema;
    output: typeof QueryDriveActivityResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_apps_drive_activity_v2_drive_activity_service, 0);
