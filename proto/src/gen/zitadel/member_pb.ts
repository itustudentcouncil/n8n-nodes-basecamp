// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/member.proto (package zitadel.member.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ObjectDetails, TextQueryMethod } from "./object_pb";
import { file_zitadel_object } from "./object_pb";
import type { Type } from "./user_pb";
import { file_zitadel_user } from "./user_pb";
import { file_validate_validate } from "../validate/validate_pb";
import { file_protoc_gen_openapiv2_options_annotations } from "../protoc-gen-openapiv2/options/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/member.proto.
 */
export const file_zitadel_member: GenFile = /*@__PURE__*/
  fileDesc("ChR6aXRhZGVsL21lbWJlci5wcm90bxIReml0YWRlbC5tZW1iZXIudjEiwQUKBk1lbWJlchIpCgd1c2VyX2lkGAEgASgJQhiSQRVKEyI2OTYyOTAyMzkwNjQ4ODMzNCISKgoHZGV0YWlscxgCIAEoCzIZLnppdGFkZWwudjEuT2JqZWN0RGV0YWlscxJECgVyb2xlcxgDIAMoCUI1kkEyMiF0aGUgcm9sZSBrZXlzIGdyYW50ZWQgdG8gdGhlIHVzZXJKDVsiSUFNX09XTkVSIl0SVwoUcHJlZmVycmVkX2xvZ2luX25hbWUYBCABKAlCOZJBNjIgcHJlZmVycmVkIGxvZ2luIG5hbWUgb2YgdGhlIHVzZXJKEiJnaWdpQHppdGFkZWwuY29tIhJICgVlbWFpbBgFIAEoCUI5kkE2MiBwcmVmZXJyZWQgbG9naW4gbmFtZSBvZiB0aGUgdXNlckoSImdpZ2lAeml0YWRlbC5jb20iEjsKCmZpcnN0X25hbWUYBiABKAlCJ5JBJDIadGhlIGZpcnN0IG5hbWUgb2YgdGhlIHVzZXJKBiJHaWdpIhI4CglsYXN0X25hbWUYByABKAlCJZJBIjIVbGFzdCBuYW1lIG9mIHRoZSB1c2VySgkiR2lyYWZmZSISQwoMZGlzcGxheV9uYW1lGAggASgJQi2SQSoyGGRpc3BsYXkgbmFtZSBvZiB0aGUgdXNlckoOIkdpZ2kgR2lyYWZmZSISaAoKYXZhdGFyX3VybBgJIAEoCUJUkkFRMhZhdmF0YXIgVVJMIG9mIHRoZSB1c2VySjciaHR0cHM6Ly9hcGkueml0YWRlbC5jaC9hc3NldHMvdjEvYXZhdGFyLTMyNDMyamtoNGtqMzIiElEKCXVzZXJfdHlwZRgKIAEoDjIVLnppdGFkZWwudXNlci52MS5UeXBlQieSQSQyInR5cGUgb2YgdGhlIHVzZXIgKGh1bWFuIC8gbWFjaGluZSkihgIKC1NlYXJjaFF1ZXJ5Ej0KEGZpcnN0X25hbWVfcXVlcnkYASABKAsyIS56aXRhZGVsLm1lbWJlci52MS5GaXJzdE5hbWVRdWVyeUgAEjsKD2xhc3RfbmFtZV9xdWVyeRgCIAEoCzIgLnppdGFkZWwubWVtYmVyLnYxLkxhc3ROYW1lUXVlcnlIABI0CgtlbWFpbF9xdWVyeRgDIAEoCzIdLnppdGFkZWwubWVtYmVyLnYxLkVtYWlsUXVlcnlIABI3Cg11c2VyX2lkX3F1ZXJ5GAQgASgLMh4ueml0YWRlbC5tZW1iZXIudjEuVXNlcklEUXVlcnlIAEIMCgVxdWVyeRID+EIBIqIBCg5GaXJzdE5hbWVRdWVyeRIqCgpmaXJzdF9uYW1lGAEgASgJQhaSQQtKBiJHaWdpInjIAfpCBXIDGMgBEmQKBm1ldGhvZBgCIAEoDjIbLnppdGFkZWwudjEuVGV4dFF1ZXJ5TWV0aG9kQjeSQSwyKmRlZmluZXMgd2hpY2ggdGV4dCBlcXVhbGl0eSBtZXRob2QgaXMgdXNlZPpCBYIBAhABIqMBCg1MYXN0TmFtZVF1ZXJ5EiwKCWxhc3RfbmFtZRgBIAEoCUIZkkEOSgkiR2lyYWZmZSJ4yAH6QgVyAxjIARJkCgZtZXRob2QYAiABKA4yGy56aXRhZGVsLnYxLlRleHRRdWVyeU1ldGhvZEI3kkEsMipkZWZpbmVzIHdoaWNoIHRleHQgZXF1YWxpdHkgbWV0aG9kIGlzIHVzZWT6QgWCAQIQASLAAQoKRW1haWxRdWVyeRJMCgVlbWFpbBgBIAEoCUI9kkEyMhllbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyShIiZ2lnaUB6aXRhZGVsLmNvbSJ4yAH6QgVyAxjIARJkCgZtZXRob2QYAiABKA4yGy56aXRhZGVsLnYxLlRleHRRdWVyeU1ldGhvZEI3kkEsMipkZWZpbmVzIHdoaWNoIHRleHQgZXF1YWxpdHkgbWV0aG9kIGlzIHVzZWT6QgWCAQIQASJXCgtVc2VySURRdWVyeRJICgd1c2VyX2lkGAEgASgJQjeSQSwyEnRoZSBpZCBvZiB0aGUgdXNlckoTIjY5NjI5MDIzOTA2NDg4MzM0InjIAfpCBXIDGMgBQixaKmdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL21lbWJlcmIGcHJvdG8z", [file_zitadel_object, file_zitadel_user, file_validate_validate, file_protoc_gen_openapiv2_options_annotations]);

/**
 * @generated from message zitadel.member.v1.Member
 */
export type Member = Message<"zitadel.member.v1.Member"> & {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles: string[];

  /**
   * @generated from field: string preferred_login_name = 4;
   */
  preferredLoginName: string;

  /**
   * @generated from field: string email = 5;
   */
  email: string;

  /**
   * @generated from field: string first_name = 6;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 7;
   */
  lastName: string;

  /**
   * @generated from field: string display_name = 8;
   */
  displayName: string;

  /**
   * @generated from field: string avatar_url = 9;
   */
  avatarUrl: string;

  /**
   * @generated from field: zitadel.user.v1.Type user_type = 10;
   */
  userType: Type;
};

/**
 * Describes the message zitadel.member.v1.Member.
 * Use `create(MemberSchema)` to create a new message.
 */
export const MemberSchema: GenMessage<Member> = /*@__PURE__*/
  messageDesc(file_zitadel_member, 0);

/**
 * @generated from message zitadel.member.v1.SearchQuery
 */
export type SearchQuery = Message<"zitadel.member.v1.SearchQuery"> & {
  /**
   * @generated from oneof zitadel.member.v1.SearchQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.member.v1.FirstNameQuery first_name_query = 1;
     */
    value: FirstNameQuery;
    case: "firstNameQuery";
  } | {
    /**
     * @generated from field: zitadel.member.v1.LastNameQuery last_name_query = 2;
     */
    value: LastNameQuery;
    case: "lastNameQuery";
  } | {
    /**
     * @generated from field: zitadel.member.v1.EmailQuery email_query = 3;
     */
    value: EmailQuery;
    case: "emailQuery";
  } | {
    /**
     * @generated from field: zitadel.member.v1.UserIDQuery user_id_query = 4;
     */
    value: UserIDQuery;
    case: "userIdQuery";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message zitadel.member.v1.SearchQuery.
 * Use `create(SearchQuerySchema)` to create a new message.
 */
export const SearchQuerySchema: GenMessage<SearchQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_member, 1);

/**
 * @generated from message zitadel.member.v1.FirstNameQuery
 */
export type FirstNameQuery = Message<"zitadel.member.v1.FirstNameQuery"> & {
  /**
   * @generated from field: string first_name = 1;
   */
  firstName: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * Describes the message zitadel.member.v1.FirstNameQuery.
 * Use `create(FirstNameQuerySchema)` to create a new message.
 */
export const FirstNameQuerySchema: GenMessage<FirstNameQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_member, 2);

/**
 * @generated from message zitadel.member.v1.LastNameQuery
 */
export type LastNameQuery = Message<"zitadel.member.v1.LastNameQuery"> & {
  /**
   * @generated from field: string last_name = 1;
   */
  lastName: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * Describes the message zitadel.member.v1.LastNameQuery.
 * Use `create(LastNameQuerySchema)` to create a new message.
 */
export const LastNameQuerySchema: GenMessage<LastNameQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_member, 3);

/**
 * @generated from message zitadel.member.v1.EmailQuery
 */
export type EmailQuery = Message<"zitadel.member.v1.EmailQuery"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * Describes the message zitadel.member.v1.EmailQuery.
 * Use `create(EmailQuerySchema)` to create a new message.
 */
export const EmailQuerySchema: GenMessage<EmailQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_member, 4);

/**
 * @generated from message zitadel.member.v1.UserIDQuery
 */
export type UserIDQuery = Message<"zitadel.member.v1.UserIDQuery"> & {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;
};

/**
 * Describes the message zitadel.member.v1.UserIDQuery.
 * Use `create(UserIDQuerySchema)` to create a new message.
 */
export const UserIDQuerySchema: GenMessage<UserIDQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_member, 5);
