// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/settings/object/v3alpha/object.proto (package zitadel.settings.object.v3alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_validate_validate } from "../../../../validate/validate_pb";
import type { Owner } from "../../../object/v3alpha/object_pb";
import { file_zitadel_object_v3alpha_object } from "../../../object/v3alpha/object_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/settings/object/v3alpha/object.proto.
 */
export const file_zitadel_settings_object_v3alpha_object: GenFile = /*@__PURE__*/
  fileDesc("Cix6aXRhZGVsL3NldHRpbmdzL29iamVjdC92M2FscGhhL29iamVjdC5wcm90bxIfeml0YWRlbC5zZXR0aW5ncy5vYmplY3QudjNhbHBoYSKeAQoHRGV0YWlscxIaCghzZXF1ZW5jZRgBIAEoBEIIkkEFSgMiMiISLwoLY2hhbmdlX2RhdGUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEkYKBW93bmVyGAMgASgLMh0ueml0YWRlbC5vYmplY3QudjNhbHBoYS5Pd25lckIYkkEVShMiNjk2MjkwMjM5MDY0ODgzMzQiQkRaQmdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3NldHRpbmdzL29iamVjdC92M2FscGhhO29iamVjdGIGcHJvdG8z", [file_google_protobuf_timestamp, file_protoc_gen_openapiv2_options_annotations, file_validate_validate, file_google_protobuf_duration, file_zitadel_object_v3alpha_object]);

/**
 * @generated from message zitadel.settings.object.v3alpha.Details
 */
export type Details = Message<"zitadel.settings.object.v3alpha.Details"> & {
  /**
   * sequence represents the order of events. It's always counting
   *
   * on read: the sequence of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: uint64 sequence = 1;
   */
  sequence: bigint;

  /**
   * change_date is the timestamp when the object was changed
   *
   * on read: the timestamp of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: google.protobuf.Timestamp change_date = 2;
   */
  changeDate?: Timestamp;

  /**
   * resource_owner represents the context an object belongs to
   *
   * @generated from field: zitadel.object.v3alpha.Owner owner = 3;
   */
  owner?: Owner;
};

/**
 * Describes the message zitadel.settings.object.v3alpha.Details.
 * Use `create(DetailsSchema)` to create a new message.
 */
export const DetailsSchema: GenMessage<Details> = /*@__PURE__*/
  messageDesc(file_zitadel_settings_object_v3alpha_object, 0);
