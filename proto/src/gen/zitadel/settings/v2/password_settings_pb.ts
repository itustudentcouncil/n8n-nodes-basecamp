// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/settings/v2/password_settings.proto (package zitadel.settings.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import type { ResourceOwnerType } from "./settings_pb";
import { file_zitadel_settings_v2_settings } from "./settings_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/settings/v2/password_settings.proto.
 */
export const file_zitadel_settings_v2_password_settings: GenFile = /*@__PURE__*/
  fileDesc("Cit6aXRhZGVsL3NldHRpbmdzL3YyL3Bhc3N3b3JkX3NldHRpbmdzLnByb3RvEhN6aXRhZGVsLnNldHRpbmdzLnYyIukEChpQYXNzd29yZENvbXBsZXhpdHlTZXR0aW5ncxJHCgptaW5fbGVuZ3RoGAEgASgEQjOSQTAyKURlZmluZXMgdGhlIG1pbmltdW0gbGVuZ3RoIG9mIGEgcGFzc3dvcmQuSgMiOCISWgoScmVxdWlyZXNfdXBwZXJjYXNlGAIgASgIQj6SQTsyOWRlZmluZXMgaWYgdGhlIHBhc3N3b3JkIE1VU1QgY29udGFpbiBhbiB1cHBlciBjYXNlIGxldHRlchJYChJyZXF1aXJlc19sb3dlcmNhc2UYAyABKAhCPJJBOTI3ZGVmaW5lcyBpZiB0aGUgcGFzc3dvcmQgTVVTVCBjb250YWluIGEgbG93ZXJjYXNlIGxldHRlchJLCg9yZXF1aXJlc19udW1iZXIYBCABKAhCMpJBLzItZGVmaW5lcyBpZiB0aGUgcGFzc3dvcmQgTVVTVCBjb250YWluIGEgbnVtYmVyElUKD3JlcXVpcmVzX3N5bWJvbBgFIAEoCEI8kkE5MjdkZWZpbmVzIGlmIHRoZSBwYXNzd29yZCBNVVNUIGNvbnRhaW4gYSBzeW1ib2wuIEUuZy4gIiQiEqcBChNyZXNvdXJjZV9vd25lcl90eXBlGAYgASgOMiYueml0YWRlbC5zZXR0aW5ncy52Mi5SZXNvdXJjZU93bmVyVHlwZUJikkFfMl1yZXNvdXJjZV9vd25lcl90eXBlIHJldHVybnMgaWYgdGhlIHNldHRpbmdzIGlzIG1hbmFnZWQgb24gdGhlIG9yZ2FuaXphdGlvbiBvciBvbiB0aGUgaW5zdGFuY2UipAEKFlBhc3N3b3JkRXhwaXJ5U2V0dGluZ3MSIAoMbWF4X2FnZV9kYXlzGAEgASgEQgqSQQdKBSIzNjUiEiMKEGV4cGlyZV93YXJuX2RheXMYAiABKARCCZJBBkoEIjEwIhJDChNyZXNvdXJjZV9vd25lcl90eXBlGAMgASgOMiYueml0YWRlbC5zZXR0aW5ncy52Mi5SZXNvdXJjZU93bmVyVHlwZUI6WjhnaXRodWIuY29tL3ppdGFkZWwveml0YWRlbC9wa2cvZ3JwYy9zZXR0aW5ncy92MjtzZXR0aW5nc2IGcHJvdG8z", [file_protoc_gen_openapiv2_options_annotations, file_zitadel_settings_v2_settings]);

/**
 * @generated from message zitadel.settings.v2.PasswordComplexitySettings
 */
export type PasswordComplexitySettings = Message<"zitadel.settings.v2.PasswordComplexitySettings"> & {
  /**
   * @generated from field: uint64 min_length = 1;
   */
  minLength: bigint;

  /**
   * @generated from field: bool requires_uppercase = 2;
   */
  requiresUppercase: boolean;

  /**
   * @generated from field: bool requires_lowercase = 3;
   */
  requiresLowercase: boolean;

  /**
   * @generated from field: bool requires_number = 4;
   */
  requiresNumber: boolean;

  /**
   * @generated from field: bool requires_symbol = 5;
   */
  requiresSymbol: boolean;

  /**
   * resource_owner_type returns if the settings is managed on the organization or on the instance
   *
   * @generated from field: zitadel.settings.v2.ResourceOwnerType resource_owner_type = 6;
   */
  resourceOwnerType: ResourceOwnerType;
};

/**
 * Describes the message zitadel.settings.v2.PasswordComplexitySettings.
 * Use `create(PasswordComplexitySettingsSchema)` to create a new message.
 */
export const PasswordComplexitySettingsSchema: GenMessage<PasswordComplexitySettings> = /*@__PURE__*/
  messageDesc(file_zitadel_settings_v2_password_settings, 0);

/**
 * @generated from message zitadel.settings.v2.PasswordExpirySettings
 */
export type PasswordExpirySettings = Message<"zitadel.settings.v2.PasswordExpirySettings"> & {
  /**
   * Amount of days after which a password will expire. The user will be forced to change the password on the following authentication.
   *
   * @generated from field: uint64 max_age_days = 1;
   */
  maxAgeDays: bigint;

  /**
   * Amount of days after which the user should be notified of the upcoming expiry. ZITADEL will not notify the user.
   *
   * @generated from field: uint64 expire_warn_days = 2;
   */
  expireWarnDays: bigint;

  /**
   * resource_owner_type returns if the settings is managed on the organization or on the instance
   *
   * @generated from field: zitadel.settings.v2.ResourceOwnerType resource_owner_type = 3;
   */
  resourceOwnerType: ResourceOwnerType;
};

/**
 * Describes the message zitadel.settings.v2.PasswordExpirySettings.
 * Use `create(PasswordExpirySettingsSchema)` to create a new message.
 */
export const PasswordExpirySettingsSchema: GenMessage<PasswordExpirySettings> = /*@__PURE__*/
  messageDesc(file_zitadel_settings_v2_password_settings, 1);
