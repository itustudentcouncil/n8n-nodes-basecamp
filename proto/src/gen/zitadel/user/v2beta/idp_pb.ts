// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/user/v2beta/idp.proto (package zitadel.user.v2beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_validate_validate } from "../../../validate/validate_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/user/v2beta/idp.proto.
 */
export const file_zitadel_user_v2beta_idp: GenFile = /*@__PURE__*/
  fileDesc("Ch16aXRhZGVsL3VzZXIvdjJiZXRhL2lkcC5wcm90bxITeml0YWRlbC51c2VyLnYyYmV0YSLJAQoPTERBUENyZWRlbnRpYWxzElkKCHVzZXJuYW1lGAEgASgJQkeSQTcyI1VzZXJuYW1lIHVzZWQgdG8gbG9naW4gdGhyb3VnaCBMREFQSgoidXNlcm5hbWUieMgBgAEB+kIKcggQARjIAZABARJbCghwYXNzd29yZBgCIAEoCUJJkkE5MiNQYXNzd29yZCB1c2VkIHRvIGxvZ2luIHRocm91Z2ggTERBUEoMIlBhc3N3b3JkMSEieMgBgAEB+kIKcggQARjIAZABASK6AgoMUmVkaXJlY3RVUkxzEpcBCgtzdWNjZXNzX3VybBgBIAEoCUKBAZJBcTJBVVJMIG9uIHdoaWNoIHRoZSB1c2VyIHdpbGwgYmUgcmVkaXJlY3RlZCBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9naW5KJiJodHRwczovL2N1c3RvbS5jb20vbG9naW4vaWRwL3N1Y2Nlc3MieIAQgAEB+kIKcggQARiAEJABARKPAQoLZmFpbHVyZV91cmwYAiABKAlCepJBajI9VVJMIG9uIHdoaWNoIHRoZSB1c2VyIHdpbGwgYmUgcmVkaXJlY3RlZCBhZnRlciBhIGZhaWxlZCBsb2dpbkojImh0dHBzOi8vY3VzdG9tLmNvbS9sb2dpbi9pZHAvZmFpbCJ4gBCAAQH6QgpyCBABGIAQkAEBIqQCCglJRFBJbnRlbnQSTAoNaWRwX2ludGVudF9pZBgBIAEoCUI1kkEyMhRJRCBvZiB0aGUgSURQIGludGVudEoUIjE2Mzg0MDc3NjgzNTQzMjcwNSJ4yAGAAQESYgoQaWRwX2ludGVudF90b2tlbhgCIAEoCUJIkkFFMhd0b2tlbiBvZiB0aGUgSURQIGludGVudEokIlNKS0wzaW9JRHBvMzQyaW9xdzk4ZmpwM3NkZjMyd2FoYj0ieMgBgAEBEmUKB3VzZXJfaWQYAyABKAlCVJJBUTI2SUQgb2YgdGhlIFpJVEFERUwgdXNlciBpZiBleHRlcm5hbCB1c2VyIGFscmVhZHkgbGlua2VkShQiMTYzODQwNzc2ODM1NDMyMzQ1InjIASKbBgoOSURQSW5mb3JtYXRpb24SiAEKBW9hdXRoGAEgASgLMi4ueml0YWRlbC51c2VyLnYyYmV0YS5JRFBPQXV0aEFjY2Vzc0luZm9ybWF0aW9uQkeSQUQyQk9BdXRoL09JREMgYWNjZXNzIChhbmQgaWRfdG9rZW4pIHJldHVybmVkIGJ5IHRoZSBpZGVudGl0eSBwcm92aWRlckgAEnwKBGxkYXAYBiABKAsyLS56aXRhZGVsLnVzZXIudjJiZXRhLklEUExEQVBBY2Nlc3NJbmZvcm1hdGlvbkI9kkE6MjhMREFQIGVudGl0eSBhdHRyaWJ1dGVzIHJldHVybmVkIGJ5IHRoZSBpZGVudGl0eSBwcm92aWRlckgAEnIKBHNhbWwYByABKAsyLS56aXRhZGVsLnVzZXIudjJiZXRhLklEUFNBTUxBY2Nlc3NJbmZvcm1hdGlvbkIzkkEwMi5TQU1MUmVzcG9uc2UgcmV0dXJuZWQgYnkgdGhlIGlkZW50aXR5IHByb3ZpZGVySAASWAoGaWRwX2lkGAIgASgJQkiSQUUyG0lEIG9mIHRoZSBpZGVudGl0eSBwcm92aWRlckomImQ2NTRlNmJhLTcwYTMtNDhlZi1hOTVkLTM3YzhkOGE3OTAxYSISXQoHdXNlcl9pZBgDIAEoCUJMkkFJMidJRCBvZiB0aGUgdXNlciBvZiB0aGUgaWRlbnRpdHkgcHJvdmlkZXJKHiI2NTE2ODQ5ODA0ODkwNDY4MDQ4NDYxNDAzNTE4IhJaCgl1c2VyX25hbWUYBCABKAlCR5JBRDItdXNlcm5hbWUgb2YgdGhlIHVzZXIgb2YgdGhlIGlkZW50aXR5IHByb3ZpZGVyShMidXNlckBleHRlcm5hbC5jb20iEm0KD3Jhd19pbmZvcm1hdGlvbhgFIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RCO5JBODI2Y29tcGxldGUgaW5mb3JtYXRpb24gcmV0dXJuZWQgYnkgdGhlIGlkZW50aXR5IHByb3ZpZGVyQggKBmFjY2VzcyJVChlJRFBPQXV0aEFjY2Vzc0luZm9ybWF0aW9uEhQKDGFjY2Vzc190b2tlbhgBIAEoCRIVCghpZF90b2tlbhgCIAEoCUgAiAEBQgsKCV9pZF90b2tlbiJHChhJRFBMREFQQWNjZXNzSW5mb3JtYXRpb24SKwoKYXR0cmlidXRlcxgBIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QiLQoYSURQU0FNTEFjY2Vzc0luZm9ybWF0aW9uEhEKCWFzc2VydGlvbhgBIAEoDCLOAgoHSURQTGluaxJoCgZpZHBfaWQYASABKAlCWJJBSzIbSUQgb2YgdGhlIGlkZW50aXR5IHByb3ZpZGVySiYiZDY1NGU2YmEtNzBhMy00OGVmLWE5NWQtMzdjOGQ4YTc5MDFhInjIAYABAfpCB3IFEAEYyAESbQoHdXNlcl9pZBgCIAEoCUJckkFPMidJRCBvZiB0aGUgdXNlciBvZiB0aGUgaWRlbnRpdHkgcHJvdmlkZXJKHiI2NTE2ODQ5ODA0ODkwNDY4MDQ4NDYxNDAzNTE4InjIAYABAfpCB3IFEAEYyAESagoJdXNlcl9uYW1lGAMgASgJQleSQUoyLXVzZXJuYW1lIG9mIHRoZSB1c2VyIG9mIHRoZSBpZGVudGl0eSBwcm92aWRlckoTInVzZXJAZXh0ZXJuYWwuY29tInjIAYABAfpCB3IFEAEYyAFCNlo0Z2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvcGtnL2dycGMvdXNlci92MmJldGE7dXNlcmIGcHJvdG8z", [file_google_api_field_behavior, file_google_protobuf_struct, file_protoc_gen_openapiv2_options_annotations, file_validate_validate]);

/**
 * @generated from message zitadel.user.v2beta.LDAPCredentials
 */
export type LDAPCredentials = Message<"zitadel.user.v2beta.LDAPCredentials"> & {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;
};

/**
 * Describes the message zitadel.user.v2beta.LDAPCredentials.
 * Use `create(LDAPCredentialsSchema)` to create a new message.
 */
export const LDAPCredentialsSchema: GenMessage<LDAPCredentials> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 0);

/**
 * @generated from message zitadel.user.v2beta.RedirectURLs
 */
export type RedirectURLs = Message<"zitadel.user.v2beta.RedirectURLs"> & {
  /**
   * @generated from field: string success_url = 1;
   */
  successUrl: string;

  /**
   * @generated from field: string failure_url = 2;
   */
  failureUrl: string;
};

/**
 * Describes the message zitadel.user.v2beta.RedirectURLs.
 * Use `create(RedirectURLsSchema)` to create a new message.
 */
export const RedirectURLsSchema: GenMessage<RedirectURLs> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 1);

/**
 * @generated from message zitadel.user.v2beta.IDPIntent
 */
export type IDPIntent = Message<"zitadel.user.v2beta.IDPIntent"> & {
  /**
   * @generated from field: string idp_intent_id = 1;
   */
  idpIntentId: string;

  /**
   * @generated from field: string idp_intent_token = 2;
   */
  idpIntentToken: string;

  /**
   * @generated from field: string user_id = 3;
   */
  userId: string;
};

/**
 * Describes the message zitadel.user.v2beta.IDPIntent.
 * Use `create(IDPIntentSchema)` to create a new message.
 */
export const IDPIntentSchema: GenMessage<IDPIntent> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 2);

/**
 * @generated from message zitadel.user.v2beta.IDPInformation
 */
export type IDPInformation = Message<"zitadel.user.v2beta.IDPInformation"> & {
  /**
   * @generated from oneof zitadel.user.v2beta.IDPInformation.access
   */
  access: {
    /**
     * @generated from field: zitadel.user.v2beta.IDPOAuthAccessInformation oauth = 1;
     */
    value: IDPOAuthAccessInformation;
    case: "oauth";
  } | {
    /**
     * @generated from field: zitadel.user.v2beta.IDPLDAPAccessInformation ldap = 6;
     */
    value: IDPLDAPAccessInformation;
    case: "ldap";
  } | {
    /**
     * @generated from field: zitadel.user.v2beta.IDPSAMLAccessInformation saml = 7;
     */
    value: IDPSAMLAccessInformation;
    case: "saml";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string idp_id = 2;
   */
  idpId: string;

  /**
   * @generated from field: string user_id = 3;
   */
  userId: string;

  /**
   * @generated from field: string user_name = 4;
   */
  userName: string;

  /**
   * @generated from field: google.protobuf.Struct raw_information = 5;
   */
  rawInformation?: JsonObject;
};

/**
 * Describes the message zitadel.user.v2beta.IDPInformation.
 * Use `create(IDPInformationSchema)` to create a new message.
 */
export const IDPInformationSchema: GenMessage<IDPInformation> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 3);

/**
 * @generated from message zitadel.user.v2beta.IDPOAuthAccessInformation
 */
export type IDPOAuthAccessInformation = Message<"zitadel.user.v2beta.IDPOAuthAccessInformation"> & {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  /**
   * @generated from field: optional string id_token = 2;
   */
  idToken?: string;
};

/**
 * Describes the message zitadel.user.v2beta.IDPOAuthAccessInformation.
 * Use `create(IDPOAuthAccessInformationSchema)` to create a new message.
 */
export const IDPOAuthAccessInformationSchema: GenMessage<IDPOAuthAccessInformation> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 4);

/**
 * @generated from message zitadel.user.v2beta.IDPLDAPAccessInformation
 */
export type IDPLDAPAccessInformation = Message<"zitadel.user.v2beta.IDPLDAPAccessInformation"> & {
  /**
   * @generated from field: google.protobuf.Struct attributes = 1;
   */
  attributes?: JsonObject;
};

/**
 * Describes the message zitadel.user.v2beta.IDPLDAPAccessInformation.
 * Use `create(IDPLDAPAccessInformationSchema)` to create a new message.
 */
export const IDPLDAPAccessInformationSchema: GenMessage<IDPLDAPAccessInformation> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 5);

/**
 * @generated from message zitadel.user.v2beta.IDPSAMLAccessInformation
 */
export type IDPSAMLAccessInformation = Message<"zitadel.user.v2beta.IDPSAMLAccessInformation"> & {
  /**
   * @generated from field: bytes assertion = 1;
   */
  assertion: Uint8Array;
};

/**
 * Describes the message zitadel.user.v2beta.IDPSAMLAccessInformation.
 * Use `create(IDPSAMLAccessInformationSchema)` to create a new message.
 */
export const IDPSAMLAccessInformationSchema: GenMessage<IDPSAMLAccessInformation> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 6);

/**
 * @generated from message zitadel.user.v2beta.IDPLink
 */
export type IDPLink = Message<"zitadel.user.v2beta.IDPLink"> & {
  /**
   * @generated from field: string idp_id = 1;
   */
  idpId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * @generated from field: string user_name = 3;
   */
  userName: string;
};

/**
 * Describes the message zitadel.user.v2beta.IDPLink.
 * Use `create(IDPLinkSchema)` to create a new message.
 */
export const IDPLinkSchema: GenMessage<IDPLink> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2beta_idp, 7);
