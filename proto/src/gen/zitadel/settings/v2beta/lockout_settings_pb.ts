// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/settings/v2beta/lockout_settings.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import type { ResourceOwnerType } from "./settings_pb";
import { file_zitadel_settings_v2beta_settings } from "./settings_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/settings/v2beta/lockout_settings.proto.
 */
export const file_zitadel_settings_v2beta_lockout_settings: GenFile = /*@__PURE__*/
  fileDesc("Ci56aXRhZGVsL3NldHRpbmdzL3YyYmV0YS9sb2Nrb3V0X3NldHRpbmdzLnByb3RvEhd6aXRhZGVsLnNldHRpbmdzLnYyYmV0YSKrBQoPTG9ja291dFNldHRpbmdzEvQBChVtYXhfcGFzc3dvcmRfYXR0ZW1wdHMYASABKARC1AGSQdABMscBTWF4aW11bSBwYXNzd29yZCBjaGVjayBhdHRlbXB0cyBiZWZvcmUgdGhlIGFjY291bnQgZ2V0cyBsb2NrZWQuIEF0dGVtcHRzIGFyZSByZXNldCBhcyBzb29uIGFzIHRoZSBwYXNzd29yZCBpcyBlbnRlcmVkIGNvcnJlY3RseSBvciB0aGUgcGFzc3dvcmQgaXMgcmVzZXQuIElmIHNldCB0byAwIHRoZSBhY2NvdW50IHdpbGwgbmV2ZXIgYmUgbG9ja2VkLkoEIjEwIhKrAQoTcmVzb3VyY2Vfb3duZXJfdHlwZRgCIAEoDjIqLnppdGFkZWwuc2V0dGluZ3MudjJiZXRhLlJlc291cmNlT3duZXJUeXBlQmKSQV8yXXJlc291cmNlX293bmVyX3R5cGUgcmV0dXJucyBpZiB0aGUgc2V0dGluZ3MgaXMgbWFuYWdlZCBvbiB0aGUgb3JnYW5pemF0aW9uIG9yIG9uIHRoZSBpbnN0YW5jZRLyAQoQbWF4X290cF9hdHRlbXB0cxgDIAEoBELXAZJB0wEyygFNYXhpbXVtIGZhaWxlZCBhdHRlbXB0cyBmb3IgYSBzaW5nbGUgT1RQIHR5cGUgKFRPVFAsIFNNUywgRW1haWwpIGJlZm9yZSB0aGUgYWNjb3VudCBnZXRzIGxvY2tlZC4gQXR0ZW1wdHMgYXJlIHJlc2V0IGFzIHNvb24gYXMgdGhlIE9UUCBpcyBlbnRlcmVkIGNvcnJlY3RseS4gSWYgc2V0IHRvIDAgdGhlIGFjY291bnQgd2lsbCBuZXZlciBiZSBsb2NrZWQuSgQiMTAiQj5aPGdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3NldHRpbmdzL3YyYmV0YTtzZXR0aW5nc2IGcHJvdG8z", [file_protoc_gen_openapiv2_options_annotations, file_zitadel_settings_v2beta_settings]);

/**
 * @generated from message zitadel.settings.v2beta.LockoutSettings
 */
export type LockoutSettings = Message<"zitadel.settings.v2beta.LockoutSettings"> & {
  /**
   * @generated from field: uint64 max_password_attempts = 1;
   */
  maxPasswordAttempts: bigint;

  /**
   * resource_owner_type returns if the settings is managed on the organization or on the instance
   *
   * @generated from field: zitadel.settings.v2beta.ResourceOwnerType resource_owner_type = 2;
   */
  resourceOwnerType: ResourceOwnerType;

  /**
   * @generated from field: uint64 max_otp_attempts = 3;
   */
  maxOtpAttempts: bigint;
};

/**
 * Describes the message zitadel.settings.v2beta.LockoutSettings.
 * Use `create(LockoutSettingsSchema)` to create a new message.
 */
export const LockoutSettingsSchema: GenMessage<LockoutSettings> = /*@__PURE__*/
  messageDesc(file_zitadel_settings_v2beta_lockout_settings, 0);
