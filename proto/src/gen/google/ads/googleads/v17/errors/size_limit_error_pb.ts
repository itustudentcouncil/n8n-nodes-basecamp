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
// @generated from file google/ads/googleads/v17/errors/size_limit_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/size_limit_error.proto.
 */
export const file_google_ads_googleads_v17_errors_size_limit_error: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL3NpemVfbGltaXRfZXJyb3IucHJvdG8SH2dvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnMihwEKElNpemVMaW1pdEVycm9yRW51bSJxCg5TaXplTGltaXRFcnJvchIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIfChtSRVFVRVNUX1NJWkVfTElNSVRfRVhDRUVERUQQAhIgChxSRVNQT05TRV9TSVpFX0xJTUlUX0VYQ0VFREVEEANC8wEKI2NvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzQhNTaXplTGltaXRFcnJvclByb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzO2Vycm9yc6ICA0dBQaoCH0dvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FcnJvcnPKAh9Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcRXJyb3Jz6gIjR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpFcnJvcnNiBnByb3RvMw");

/**
 * Container for enum describing possible size limit errors.
 *
 * @generated from message google.ads.googleads.v17.errors.SizeLimitErrorEnum
 */
export type SizeLimitErrorEnum = Message<"google.ads.googleads.v17.errors.SizeLimitErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.SizeLimitErrorEnum.
 * Use `create(SizeLimitErrorEnumSchema)` to create a new message.
 */
export const SizeLimitErrorEnumSchema: GenMessage<SizeLimitErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_size_limit_error, 0);

/**
 * Enum describing possible size limit errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.SizeLimitErrorEnum.SizeLimitError
 */
export enum SizeLimitErrorEnum_SizeLimitError {
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
   * The number of entries in the request exceeds the system limit, or the
   * contents of the operations exceed transaction limits due to their size
   * or complexity. Try reducing the number of entries per request.
   *
   * @generated from enum value: REQUEST_SIZE_LIMIT_EXCEEDED = 2;
   */
  REQUEST_SIZE_LIMIT_EXCEEDED = 2,

  /**
   * The number of entries in the response exceeds the system limit.
   *
   * @generated from enum value: RESPONSE_SIZE_LIMIT_EXCEEDED = 3;
   */
  RESPONSE_SIZE_LIMIT_EXCEEDED = 3,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.SizeLimitErrorEnum.SizeLimitError.
 */
export const SizeLimitErrorEnum_SizeLimitErrorSchema: GenEnum<SizeLimitErrorEnum_SizeLimitError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_size_limit_error, 0, 0);
