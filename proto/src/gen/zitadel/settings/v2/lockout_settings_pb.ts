// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/settings/v2/lockout_settings.proto (package zitadel.settings.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import type { ResourceOwnerType } from "./settings_pb";
import { file_zitadel_settings_v2_settings } from "./settings_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/settings/v2/lockout_settings.proto.
 */
export const file_zitadel_settings_v2_lockout_settings: GenFile = /*@__PURE__*/
  fileDesc("Cip6aXRhZGVsL3NldHRpbmdzL3YyL2xvY2tvdXRfc2V0dGluZ3MucHJvdG8SE3ppdGFkZWwuc2V0dGluZ3MudjIipwUKD0xvY2tvdXRTZXR0aW5ncxL0AQoVbWF4X3Bhc3N3b3JkX2F0dGVtcHRzGAEgASgEQtQBkkHQATLHAU1heGltdW0gcGFzc3dvcmQgY2hlY2sgYXR0ZW1wdHMgYmVmb3JlIHRoZSBhY2NvdW50IGdldHMgbG9ja2VkLiBBdHRlbXB0cyBhcmUgcmVzZXQgYXMgc29vbiBhcyB0aGUgcGFzc3dvcmQgaXMgZW50ZXJlZCBjb3JyZWN0bHkgb3IgdGhlIHBhc3N3b3JkIGlzIHJlc2V0LiBJZiBzZXQgdG8gMCB0aGUgYWNjb3VudCB3aWxsIG5ldmVyIGJlIGxvY2tlZC5KBCIxMCISpwEKE3Jlc291cmNlX293bmVyX3R5cGUYAiABKA4yJi56aXRhZGVsLnNldHRpbmdzLnYyLlJlc291cmNlT3duZXJUeXBlQmKSQV8yXXJlc291cmNlX293bmVyX3R5cGUgcmV0dXJucyBpZiB0aGUgc2V0dGluZ3MgaXMgbWFuYWdlZCBvbiB0aGUgb3JnYW5pemF0aW9uIG9yIG9uIHRoZSBpbnN0YW5jZRLyAQoQbWF4X290cF9hdHRlbXB0cxgDIAEoBELXAZJB0wEyygFNYXhpbXVtIGZhaWxlZCBhdHRlbXB0cyBmb3IgYSBzaW5nbGUgT1RQIHR5cGUgKFRPVFAsIFNNUywgRW1haWwpIGJlZm9yZSB0aGUgYWNjb3VudCBnZXRzIGxvY2tlZC4gQXR0ZW1wdHMgYXJlIHJlc2V0IGFzIHNvb24gYXMgdGhlIE9UUCBpcyBlbnRlcmVkIGNvcnJlY3RseS4gSWYgc2V0IHRvIDAgdGhlIGFjY291bnQgd2lsbCBuZXZlciBiZSBsb2NrZWQuSgQiMTAiQjpaOGdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3NldHRpbmdzL3YyO3NldHRpbmdzYgZwcm90bzM", [file_protoc_gen_openapiv2_options_annotations, file_zitadel_settings_v2_settings]);

/**
 * @generated from message zitadel.settings.v2.LockoutSettings
 */
export type LockoutSettings = Message<"zitadel.settings.v2.LockoutSettings"> & {
  /**
   * @generated from field: uint64 max_password_attempts = 1;
   */
  maxPasswordAttempts: bigint;

  /**
   * resource_owner_type returns if the settings is managed on the organization or on the instance
   *
   * @generated from field: zitadel.settings.v2.ResourceOwnerType resource_owner_type = 2;
   */
  resourceOwnerType: ResourceOwnerType;

  /**
   * @generated from field: uint64 max_otp_attempts = 3;
   */
  maxOtpAttempts: bigint;
};

/**
 * Describes the message zitadel.settings.v2.LockoutSettings.
 * Use `create(LockoutSettingsSchema)` to create a new message.
 */
export const LockoutSettingsSchema: GenMessage<LockoutSettings> = /*@__PURE__*/
  messageDesc(file_zitadel_settings_v2_lockout_settings, 0);
