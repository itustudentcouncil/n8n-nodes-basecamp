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
// @generated from file google/ads/googleads/v17/enums/app_store.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/app_store.proto.
 */
export const file_google_ads_googleads_v17_enums_app_store: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvYXBwX3N0b3JlLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMiWwoMQXBwU3RvcmVFbnVtIksKCEFwcFN0b3JlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhAKDEFQUExFX0lUVU5FUxACEg8KC0dPT0dMRV9QTEFZEANC5wEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXNCDUFwcFN0b3JlUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RW51bXNiBnByb3RvMw");

/**
 * Container for enum describing app store type in an app extension.
 *
 * @generated from message google.ads.googleads.v17.enums.AppStoreEnum
 */
export type AppStoreEnum = Message<"google.ads.googleads.v17.enums.AppStoreEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.AppStoreEnum.
 * Use `create(AppStoreEnumSchema)` to create a new message.
 */
export const AppStoreEnumSchema: GenMessage<AppStoreEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_app_store, 0);

/**
 * App store type in an app extension.
 *
 * @generated from enum google.ads.googleads.v17.enums.AppStoreEnum.AppStore
 */
export enum AppStoreEnum_AppStore {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for return value only. Represents value unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Apple iTunes.
   *
   * @generated from enum value: APPLE_ITUNES = 2;
   */
  APPLE_ITUNES = 2,

  /**
   * Google Play.
   *
   * @generated from enum value: GOOGLE_PLAY = 3;
   */
  GOOGLE_PLAY = 3,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.AppStoreEnum.AppStore.
 */
export const AppStoreEnum_AppStoreSchema: GenEnum<AppStoreEnum_AppStore> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_app_store, 0, 0);
