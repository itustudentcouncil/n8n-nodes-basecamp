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
// @generated from file google/ads/googleads/v16/errors/new_resource_creation_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/new_resource_creation_error.proto.
 */
export const file_google_ads_googleads_v16_errors_new_resource_creation_error: GenFile = /*@__PURE__*/
  fileDesc("CkFnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL25ld19yZXNvdXJjZV9jcmVhdGlvbl9lcnJvci5wcm90bxIfZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVycm9ycyKwAQocTmV3UmVzb3VyY2VDcmVhdGlvbkVycm9yRW51bSKPAQoYTmV3UmVzb3VyY2VDcmVhdGlvbkVycm9yEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhwKGENBTk5PVF9TRVRfSURfRk9SX0NSRUFURRACEhYKEkRVUExJQ0FURV9URU1QX0lEUxADEh8KG1RFTVBfSURfUkVTT1VSQ0VfSEFEX0VSUk9SUxAEQv0BCiNjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVycm9yc0IdTmV3UmVzb3VyY2VDcmVhdGlvbkVycm9yUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lcnJvcnM7ZXJyb3JzogIDR0FBqgIfR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVycm9yc8oCH0dvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFcnJvcnPqAiNHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVycm9yc2IGcHJvdG8z");

/**
 * Container for enum describing possible new resource creation errors.
 *
 * @generated from message google.ads.googleads.v16.errors.NewResourceCreationErrorEnum
 */
export type NewResourceCreationErrorEnum = Message<"google.ads.googleads.v16.errors.NewResourceCreationErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.NewResourceCreationErrorEnum.
 * Use `create(NewResourceCreationErrorEnumSchema)` to create a new message.
 */
export const NewResourceCreationErrorEnumSchema: GenMessage<NewResourceCreationErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_new_resource_creation_error, 0);

/**
 * Enum describing possible new resource creation errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.NewResourceCreationErrorEnum.NewResourceCreationError
 */
export enum NewResourceCreationErrorEnum_NewResourceCreationError {
  /**
   * Enum unspecified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received error code is not known in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Do not set the id field while creating new resources.
   *
   * @generated from enum value: CANNOT_SET_ID_FOR_CREATE = 2;
   */
  CANNOT_SET_ID_FOR_CREATE = 2,

  /**
   * Creating more than one resource with the same temp ID is not allowed.
   *
   * @generated from enum value: DUPLICATE_TEMP_IDS = 3;
   */
  DUPLICATE_TEMP_IDS = 3,

  /**
   * Parent resource with specified temp ID failed validation, so no
   * validation will be done for this child resource.
   *
   * @generated from enum value: TEMP_ID_RESOURCE_HAD_ERRORS = 4;
   */
  TEMP_ID_RESOURCE_HAD_ERRORS = 4,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.NewResourceCreationErrorEnum.NewResourceCreationError.
 */
export const NewResourceCreationErrorEnum_NewResourceCreationErrorSchema: GenEnum<NewResourceCreationErrorEnum_NewResourceCreationError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_new_resource_creation_error, 0, 0);
