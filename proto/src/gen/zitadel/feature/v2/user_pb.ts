// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/feature/v2/user.proto (package zitadel.feature.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_validate_validate } from "../../../validate/validate_pb";
import type { Details } from "../../object/v2/object_pb";
import { file_zitadel_object_v2_object } from "../../object/v2/object_pb";
import { file_zitadel_feature_v2_feature } from "./feature_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/feature/v2/user.proto.
 */
export const file_zitadel_feature_v2_user: GenFile = /*@__PURE__*/
  fileDesc("Ch16aXRhZGVsL2ZlYXR1cmUvdjIvdXNlci5wcm90bxISeml0YWRlbC5mZWF0dXJlLnYyIlIKFVNldFVzZXJGZWF0dXJlUmVxdWVzdBI5Cgd1c2VyX2lkGAEgASgJQiiSQRtKEyI2OTYyOTAyMzkwNjQ4ODMzNCJ4yAGAAQH6QgdyBRABGMgBIkYKF1NldFVzZXJGZWF0dXJlc1Jlc3BvbnNlEisKB2RldGFpbHMYASABKAsyGi56aXRhZGVsLm9iamVjdC52Mi5EZXRhaWxzIlUKGFJlc2V0VXNlckZlYXR1cmVzUmVxdWVzdBI5Cgd1c2VyX2lkGAEgASgJQiiSQRtKEyI2OTYyOTAyMzkwNjQ4ODMzNCJ4yAGAAQH6QgdyBRABGMgBIkgKGVJlc2V0VXNlckZlYXR1cmVzUmVzcG9uc2USKwoHZGV0YWlscxgBIAEoCzIaLnppdGFkZWwub2JqZWN0LnYyLkRldGFpbHMiwwMKFkdldFVzZXJGZWF0dXJlc1JlcXVlc3QSOQoHdXNlcl9pZBgBIAEoCUIokkEbShMiNjk2MjkwMjM5MDY0ODgzMzQieMgBgAEB+kIHcgUQARjIARLtAgoLaW5oZXJpdGFuY2UYAiABKAhC1wKSQdMCMsoCSW5oZXJpdCB1bnNldCBmZWF0dXJlcyBmcm9tIHRoZSByZXNvdXJjZSBvd25lcnMuIFRoaXMgb3B0aW9uIGlzIHJlY3Vyc2l2ZTogaWYgdGhlIGZsYWcgaXMgc2V0LCB0aGUgcmVzb3VyY2UncyBhbmNlc3RvcnMgYXJlIGNvbnN1bHRlZCB1cCB0byBzeXN0ZW0gZGVmYXVsdHMuIElmIHRoaXMgb3B0aW9uIGlzIGRpc2FibGVkIGFuZCB0aGUgZmVhdHVyZSBpcyBub3Qgc2V0IG9uIHRoZSB1c2VyLCBpdCB3aWxsIGJlIG9tbWl0dGVkIGZyb20gdGhlIHJlc3BvbnNlIG9yIE5vdCBGb3VuZCBpcyByZXR1cm5lZCB3aGVuIHRoZSB1c2VyIGhhcyBubyBmZWF0dXJlcyBmbGFncyBhdCBhbGwuSgR0cnVlIkYKF0dldFVzZXJGZWF0dXJlc1Jlc3BvbnNlEisKB2RldGFpbHMYASABKAsyGi56aXRhZGVsLm9iamVjdC52Mi5EZXRhaWxzQjhaNmdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL2ZlYXR1cmUvdjI7ZmVhdHVyZWIGcHJvdG8z", [file_protoc_gen_openapiv2_options_annotations, file_validate_validate, file_zitadel_object_v2_object, file_zitadel_feature_v2_feature]);

/**
 * @generated from message zitadel.feature.v2.SetUserFeatureRequest
 */
export type SetUserFeatureRequest = Message<"zitadel.feature.v2.SetUserFeatureRequest"> & {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;
};

/**
 * Describes the message zitadel.feature.v2.SetUserFeatureRequest.
 * Use `create(SetUserFeatureRequestSchema)` to create a new message.
 */
export const SetUserFeatureRequestSchema: GenMessage<SetUserFeatureRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_feature_v2_user, 0);

/**
 * @generated from message zitadel.feature.v2.SetUserFeaturesResponse
 */
export type SetUserFeaturesResponse = Message<"zitadel.feature.v2.SetUserFeaturesResponse"> & {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: Details;
};

/**
 * Describes the message zitadel.feature.v2.SetUserFeaturesResponse.
 * Use `create(SetUserFeaturesResponseSchema)` to create a new message.
 */
export const SetUserFeaturesResponseSchema: GenMessage<SetUserFeaturesResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_feature_v2_user, 1);

/**
 * @generated from message zitadel.feature.v2.ResetUserFeaturesRequest
 */
export type ResetUserFeaturesRequest = Message<"zitadel.feature.v2.ResetUserFeaturesRequest"> & {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;
};

/**
 * Describes the message zitadel.feature.v2.ResetUserFeaturesRequest.
 * Use `create(ResetUserFeaturesRequestSchema)` to create a new message.
 */
export const ResetUserFeaturesRequestSchema: GenMessage<ResetUserFeaturesRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_feature_v2_user, 2);

/**
 * @generated from message zitadel.feature.v2.ResetUserFeaturesResponse
 */
export type ResetUserFeaturesResponse = Message<"zitadel.feature.v2.ResetUserFeaturesResponse"> & {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: Details;
};

/**
 * Describes the message zitadel.feature.v2.ResetUserFeaturesResponse.
 * Use `create(ResetUserFeaturesResponseSchema)` to create a new message.
 */
export const ResetUserFeaturesResponseSchema: GenMessage<ResetUserFeaturesResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_feature_v2_user, 3);

/**
 * @generated from message zitadel.feature.v2.GetUserFeaturesRequest
 */
export type GetUserFeaturesRequest = Message<"zitadel.feature.v2.GetUserFeaturesRequest"> & {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: bool inheritance = 2;
   */
  inheritance: boolean;
};

/**
 * Describes the message zitadel.feature.v2.GetUserFeaturesRequest.
 * Use `create(GetUserFeaturesRequestSchema)` to create a new message.
 */
export const GetUserFeaturesRequestSchema: GenMessage<GetUserFeaturesRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_feature_v2_user, 4);

/**
 * @generated from message zitadel.feature.v2.GetUserFeaturesResponse
 */
export type GetUserFeaturesResponse = Message<"zitadel.feature.v2.GetUserFeaturesResponse"> & {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: Details;
};

/**
 * Describes the message zitadel.feature.v2.GetUserFeaturesResponse.
 * Use `create(GetUserFeaturesResponseSchema)` to create a new message.
 */
export const GetUserFeaturesResponseSchema: GenMessage<GetUserFeaturesResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_feature_v2_user, 5);
