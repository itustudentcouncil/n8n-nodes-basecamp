// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/settings/v2beta/settings.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";

/**
 * Describes the file zitadel/settings/v2beta/settings.proto.
 */
export const file_zitadel_settings_v2beta_settings: GenFile = /*@__PURE__*/
  fileDesc("CiZ6aXRhZGVsL3NldHRpbmdzL3YyYmV0YS9zZXR0aW5ncy5wcm90bxIXeml0YWRlbC5zZXR0aW5ncy52MmJldGEqdwoRUmVzb3VyY2VPd25lclR5cGUSIwofUkVTT1VSQ0VfT1dORVJfVFlQRV9VTlNQRUNJRklFRBAAEiAKHFJFU09VUkNFX09XTkVSX1RZUEVfSU5TVEFOQ0UQARIbChdSRVNPVVJDRV9PV05FUl9UWVBFX09SRxACQj5aPGdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3NldHRpbmdzL3YyYmV0YTtzZXR0aW5nc2IGcHJvdG8z", [file_protoc_gen_openapiv2_options_annotations]);

/**
 * @generated from enum zitadel.settings.v2beta.ResourceOwnerType
 */
export enum ResourceOwnerType {
  /**
   * @generated from enum value: RESOURCE_OWNER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RESOURCE_OWNER_TYPE_INSTANCE = 1;
   */
  INSTANCE = 1,

  /**
   * @generated from enum value: RESOURCE_OWNER_TYPE_ORG = 2;
   */
  ORG = 2,
}

/**
 * Describes the enum zitadel.settings.v2beta.ResourceOwnerType.
 */
export const ResourceOwnerTypeSchema: GenEnum<ResourceOwnerType> = /*@__PURE__*/
  enumDesc(file_zitadel_settings_v2beta_settings, 0);
