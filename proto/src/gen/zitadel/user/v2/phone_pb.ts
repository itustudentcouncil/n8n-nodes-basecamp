// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/user/v2/phone.proto (package zitadel.user.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/user/v2/phone.proto.
 */
export const file_zitadel_user_v2_phone: GenFile = /*@__PURE__*/
  fileDesc("Cht6aXRhZGVsL3VzZXIvdjIvcGhvbmUucHJvdG8SD3ppdGFkZWwudXNlci52MiL2AQoNU2V0SHVtYW5QaG9uZRIvCgVwaG9uZRgBIAEoCUIgkkETSg4iKzQxNzkxMjM0NTY3InjIAfpCB3IFEAAYyAESPwoJc2VuZF9jb2RlGAIgASgLMioueml0YWRlbC51c2VyLnYyLlNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVIABJDCgtyZXR1cm5fY29kZRgDIAEoCzIsLnppdGFkZWwudXNlci52Mi5SZXR1cm5QaG9uZVZlcmlmaWNhdGlvbkNvZGVIABIeCgtpc192ZXJpZmllZBgEIAEoCEIH+kIEagIIAUgAQg4KDHZlcmlmaWNhdGlvbiJICgpIdW1hblBob25lEiUKBXBob25lGAEgASgJQhaSQRNKDiIrNDE3OTEyMzQ1NjcieMgBEhMKC2lzX3ZlcmlmaWVkGAIgASgIIhsKGVNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiHQobUmV0dXJuUGhvbmVWZXJpZmljYXRpb25Db2RlQjJaMGdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3VzZXIvdjI7dXNlcmIGcHJvdG8z", [file_google_api_annotations, file_google_api_field_behavior, file_protoc_gen_openapiv2_options_annotations, file_validate_validate]);

/**
 * @generated from message zitadel.user.v2.SetHumanPhone
 */
export type SetHumanPhone = Message<"zitadel.user.v2.SetHumanPhone"> & {
  /**
   * @generated from field: string phone = 1;
   */
  phone: string;

  /**
   * @generated from oneof zitadel.user.v2.SetHumanPhone.verification
   */
  verification: {
    /**
     * @generated from field: zitadel.user.v2.SendPhoneVerificationCode send_code = 2;
     */
    value: SendPhoneVerificationCode;
    case: "sendCode";
  } | {
    /**
     * @generated from field: zitadel.user.v2.ReturnPhoneVerificationCode return_code = 3;
     */
    value: ReturnPhoneVerificationCode;
    case: "returnCode";
  } | {
    /**
     * @generated from field: bool is_verified = 4;
     */
    value: boolean;
    case: "isVerified";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message zitadel.user.v2.SetHumanPhone.
 * Use `create(SetHumanPhoneSchema)` to create a new message.
 */
export const SetHumanPhoneSchema: GenMessage<SetHumanPhone> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2_phone, 0);

/**
 * @generated from message zitadel.user.v2.HumanPhone
 */
export type HumanPhone = Message<"zitadel.user.v2.HumanPhone"> & {
  /**
   * @generated from field: string phone = 1;
   */
  phone: string;

  /**
   * @generated from field: bool is_verified = 2;
   */
  isVerified: boolean;
};

/**
 * Describes the message zitadel.user.v2.HumanPhone.
 * Use `create(HumanPhoneSchema)` to create a new message.
 */
export const HumanPhoneSchema: GenMessage<HumanPhone> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2_phone, 1);

/**
 * @generated from message zitadel.user.v2.SendPhoneVerificationCode
 */
export type SendPhoneVerificationCode = Message<"zitadel.user.v2.SendPhoneVerificationCode"> & {
};

/**
 * Describes the message zitadel.user.v2.SendPhoneVerificationCode.
 * Use `create(SendPhoneVerificationCodeSchema)` to create a new message.
 */
export const SendPhoneVerificationCodeSchema: GenMessage<SendPhoneVerificationCode> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2_phone, 2);

/**
 * @generated from message zitadel.user.v2.ReturnPhoneVerificationCode
 */
export type ReturnPhoneVerificationCode = Message<"zitadel.user.v2.ReturnPhoneVerificationCode"> & {
};

/**
 * Describes the message zitadel.user.v2.ReturnPhoneVerificationCode.
 * Use `create(ReturnPhoneVerificationCodeSchema)` to create a new message.
 */
export const ReturnPhoneVerificationCodeSchema: GenMessage<ReturnPhoneVerificationCode> = /*@__PURE__*/
  messageDesc(file_zitadel_user_v2_phone, 3);
