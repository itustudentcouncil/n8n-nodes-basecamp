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
// @generated from file google/cloud/datacatalog/v1/tags.proto (package google.cloud.datacatalog.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/datacatalog/v1/tags.proto.
 */
export const file_google_cloud_datacatalog_v1_tags: GenFile = /*@__PURE__*/
  fileDesc("CiZnb29nbGUvY2xvdWQvZGF0YWNhdGFsb2cvdjEvdGFncy5wcm90bxIbZ29vZ2xlLmNsb3VkLmRhdGFjYXRhbG9nLnYxIoYDCgNUYWcSDAoEbmFtZRgBIAEoCRIVCgh0ZW1wbGF0ZRgCIAEoCUID4EECEiIKFXRlbXBsYXRlX2Rpc3BsYXlfbmFtZRgFIAEoCUID4EEDEhAKBmNvbHVtbhgEIAEoCUgAEkEKBmZpZWxkcxgDIAMoCzIsLmdvb2dsZS5jbG91ZC5kYXRhY2F0YWxvZy52MS5UYWcuRmllbGRzRW50cnlCA+BBAhpUCgtGaWVsZHNFbnRyeRILCgNrZXkYASABKAkSNAoFdmFsdWUYAiABKAsyJS5nb29nbGUuY2xvdWQuZGF0YWNhdGFsb2cudjEuVGFnRmllbGQ6AjgBOoEB6kF+Ch5kYXRhY2F0YWxvZy5nb29nbGVhcGlzLmNvbS9UYWcSXHByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9lbnRyeUdyb3Vwcy97ZW50cnlfZ3JvdXB9L2VudHJpZXMve2VudHJ5fS90YWdzL3t0YWd9QgcKBXNjb3BlIsICCghUYWdGaWVsZBIZCgxkaXNwbGF5X25hbWUYASABKAlCA+BBAxIWCgxkb3VibGVfdmFsdWUYAiABKAFIABIWCgxzdHJpbmdfdmFsdWUYAyABKAlIABIUCgpib29sX3ZhbHVlGAQgASgISAASNQoPdGltZXN0YW1wX3ZhbHVlGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEgAEkUKCmVudW1fdmFsdWUYBiABKAsyLy5nb29nbGUuY2xvdWQuZGF0YWNhdGFsb2cudjEuVGFnRmllbGQuRW51bVZhbHVlSAASGAoOcmljaHRleHRfdmFsdWUYCCABKAlIABISCgVvcmRlchgHIAEoBUID4EEDGiEKCUVudW1WYWx1ZRIUCgxkaXNwbGF5X25hbWUYASABKAlCBgoEa2luZCLqAgoLVGFnVGVtcGxhdGUSDAoEbmFtZRgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSHAoUaXNfcHVibGljbHlfcmVhZGFibGUYBSABKAgSSQoGZmllbGRzGAMgAygLMjQuZ29vZ2xlLmNsb3VkLmRhdGFjYXRhbG9nLnYxLlRhZ1RlbXBsYXRlLkZpZWxkc0VudHJ5QgPgQQIaXAoLRmllbGRzRW50cnkSCwoDa2V5GAEgASgJEjwKBXZhbHVlGAIgASgLMi0uZ29vZ2xlLmNsb3VkLmRhdGFjYXRhbG9nLnYxLlRhZ1RlbXBsYXRlRmllbGQ6AjgBOnDqQW0KJmRhdGFjYXRhbG9nLmdvb2dsZWFwaXMuY29tL1RhZ1RlbXBsYXRlEkNwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vdGFnVGVtcGxhdGVzL3t0YWdfdGVtcGxhdGV9IrcCChBUYWdUZW1wbGF0ZUZpZWxkEhEKBG5hbWUYBiABKAlCA+BBAxIUCgxkaXNwbGF5X25hbWUYASABKAkSOQoEdHlwZRgCIAEoCzImLmdvb2dsZS5jbG91ZC5kYXRhY2F0YWxvZy52MS5GaWVsZFR5cGVCA+BBAhITCgtpc19yZXF1aXJlZBgDIAEoCBITCgtkZXNjcmlwdGlvbhgEIAEoCRINCgVvcmRlchgFIAEoBTqFAepBgQEKK2RhdGFjYXRhbG9nLmdvb2dsZWFwaXMuY29tL1RhZ1RlbXBsYXRlRmllbGQSUnByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS90YWdUZW1wbGF0ZXMve3RhZ190ZW1wbGF0ZX0vZmllbGRzL3tmaWVsZH0ipgMKCUZpZWxkVHlwZRJOCg5wcmltaXRpdmVfdHlwZRgBIAEoDjI0Lmdvb2dsZS5jbG91ZC5kYXRhY2F0YWxvZy52MS5GaWVsZFR5cGUuUHJpbWl0aXZlVHlwZUgAEkQKCWVudW1fdHlwZRgCIAEoCzIvLmdvb2dsZS5jbG91ZC5kYXRhY2F0YWxvZy52MS5GaWVsZFR5cGUuRW51bVR5cGVIABqFAQoIRW51bVR5cGUSUQoOYWxsb3dlZF92YWx1ZXMYASADKAsyOS5nb29nbGUuY2xvdWQuZGF0YWNhdGFsb2cudjEuRmllbGRUeXBlLkVudW1UeXBlLkVudW1WYWx1ZRomCglFbnVtVmFsdWUSGQoMZGlzcGxheV9uYW1lGAEgASgJQgPgQQIibgoNUHJpbWl0aXZlVHlwZRIeChpQUklNSVRJVkVfVFlQRV9VTlNQRUNJRklFRBAAEgoKBkRPVUJMRRABEgoKBlNUUklORxACEggKBEJPT0wQAxINCglUSU1FU1RBTVAQBBIMCghSSUNIVEVYVBAFQgsKCXR5cGVfZGVjbELGAQofY29tLmdvb2dsZS5jbG91ZC5kYXRhY2F0YWxvZy52MVABWkFjbG91ZC5nb29nbGUuY29tL2dvL2RhdGFjYXRhbG9nL2FwaXYxL2RhdGFjYXRhbG9ncGI7ZGF0YWNhdGFsb2dwYvgBAaoCG0dvb2dsZS5DbG91ZC5EYXRhQ2F0YWxvZy5WMcoCG0dvb2dsZVxDbG91ZFxEYXRhQ2F0YWxvZ1xWMeoCHkdvb2dsZTo6Q2xvdWQ6OkRhdGFDYXRhbG9nOjpWMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags
 * conform with the specification of their tag template.
 *
 * See [Data Catalog
 * IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information
 * on the permissions needed to create or view tags.
 *
 * @generated from message google.cloud.datacatalog.v1.Tag
 */
export type Tag = Message<"google.cloud.datacatalog.v1.Tag"> & {
  /**
   * The resource name of the tag in URL format where tag ID is a
   * system-generated identifier.
   *
   * Note: The tag itself might not be stored in the location specified in its
   * name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The resource name of the tag template this tag uses. Example:
   *
   * `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}`
   *
   * This field cannot be modified after creation.
   *
   * @generated from field: string template = 2;
   */
  template: string;

  /**
   * Output only. The display name of the tag template.
   *
   * @generated from field: string template_display_name = 5;
   */
  templateDisplayName: string;

  /**
   * The scope within the parent resource that this tag is attached to. If not
   * provided, the tag is attached to the parent resource itself.
   *
   * Deleting the scope from the parent resource deletes all tags attached
   * to that scope.
   *
   * These fields cannot be updated after creation.
   *
   * @generated from oneof google.cloud.datacatalog.v1.Tag.scope
   */
  scope: {
    /**
     * Resources like entry can have schemas associated with them. This scope
     * allows you to attach tags to an individual column based on that schema.
     *
     * To attach a tag to a nested column, separate column names with a dot
     * (`.`). Example: `column.nested_column`.
     *
     * @generated from field: string column = 4;
     */
    value: string;
    case: "column";
  } | { case: undefined; value?: undefined };

  /**
   * Required. Maps the ID of a tag field to its value and additional
   * information about that field.
   *
   * Tag template defines valid field IDs. A tag
   * must have at least 1 field and at most 500 fields.
   *
   * @generated from field: map<string, google.cloud.datacatalog.v1.TagField> fields = 3;
   */
  fields: { [key: string]: TagField };
};

/**
 * Describes the message google.cloud.datacatalog.v1.Tag.
 * Use `create(TagSchema)` to create a new message.
 */
export const TagSchema: GenMessage<Tag> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 0);

/**
 * Contains the value and additional information on a field within
 * a [Tag][google.cloud.datacatalog.v1.Tag].
 *
 * @generated from message google.cloud.datacatalog.v1.TagField
 */
export type TagField = Message<"google.cloud.datacatalog.v1.TagField"> & {
  /**
   * Output only. The display name of this field.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;

  /**
   * Required. The value of this field.
   *
   * @generated from oneof google.cloud.datacatalog.v1.TagField.kind
   */
  kind: {
    /**
     * The value of a tag field with a double type.
     *
     * @generated from field: double double_value = 2;
     */
    value: number;
    case: "doubleValue";
  } | {
    /**
     * The value of a tag field with a string type.
     *
     * The maximum length is 2000 UTF-8 characters.
     *
     * @generated from field: string string_value = 3;
     */
    value: string;
    case: "stringValue";
  } | {
    /**
     * The value of a tag field with a boolean type.
     *
     * @generated from field: bool bool_value = 4;
     */
    value: boolean;
    case: "boolValue";
  } | {
    /**
     * The value of a tag field with a timestamp type.
     *
     * @generated from field: google.protobuf.Timestamp timestamp_value = 5;
     */
    value: Timestamp;
    case: "timestampValue";
  } | {
    /**
     * The value of a tag field with an enum type.
     *
     * This value must be one of the allowed values listed in this enum.
     *
     * @generated from field: google.cloud.datacatalog.v1.TagField.EnumValue enum_value = 6;
     */
    value: TagField_EnumValue;
    case: "enumValue";
  } | {
    /**
     * The value of a tag field with a rich text type.
     *
     * The maximum length is 10 MiB as this value holds HTML descriptions
     * including encoded images. The maximum length of the text without images
     * is 100 KiB.
     *
     * @generated from field: string richtext_value = 8;
     */
    value: string;
    case: "richtextValue";
  } | { case: undefined; value?: undefined };

  /**
   * Output only. The order of this field with respect to other fields in this
   * tag. Can be set by
   * [Tag][google.cloud.datacatalog.v1.TagTemplateField.order].
   *
   * For example, a higher value can indicate a more important field.
   * The value can be negative. Multiple fields can have the same order, and
   * field orders within a tag don't have to be sequential.
   *
   * @generated from field: int32 order = 7;
   */
  order: number;
};

/**
 * Describes the message google.cloud.datacatalog.v1.TagField.
 * Use `create(TagFieldSchema)` to create a new message.
 */
export const TagFieldSchema: GenMessage<TagField> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 1);

/**
 * An enum value.
 *
 * @generated from message google.cloud.datacatalog.v1.TagField.EnumValue
 */
export type TagField_EnumValue = Message<"google.cloud.datacatalog.v1.TagField.EnumValue"> & {
  /**
   * The display name of the enum value.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;
};

/**
 * Describes the message google.cloud.datacatalog.v1.TagField.EnumValue.
 * Use `create(TagField_EnumValueSchema)` to create a new message.
 */
export const TagField_EnumValueSchema: GenMessage<TagField_EnumValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 1, 0);

/**
 * A tag template defines a tag that can have one or more typed fields.
 *
 * The template is used to create tags that are attached to Google Cloud
 *  resources. [Tag template roles]
 * (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles)
 * provide permissions to create, edit, and use the template. For example,
 * see the [TagTemplate User]
 * (https://cloud.google.com/data-catalog/docs/how-to/template-user) role
 * that includes a permission to use the tag template to tag resources.
 *
 * @generated from message google.cloud.datacatalog.v1.TagTemplate
 */
export type TagTemplate = Message<"google.cloud.datacatalog.v1.TagTemplate"> & {
  /**
   * The resource name of the tag template in URL format.
   *
   * Note: The tag template itself and its child resources might not be
   * stored in the location specified in its name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Display name for this template. Defaults to an empty string.
   *
   * The name must contain only Unicode letters, numbers (0-9), underscores (_),
   * dashes (-), spaces ( ), and can't start or end with spaces.
   * The maximum length is 200 characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Indicates whether tags created with this template are public. Public tags
   * do not require tag template access to appear in
   * [ListTags][google.cloud.datacatalog.v1.ListTags] API response.
   *
   * Additionally, you can search for a public tag by value with a
   * simple search query in addition to using a ``tag:`` predicate.
   *
   * @generated from field: bool is_publicly_readable = 5;
   */
  isPubliclyReadable: boolean;

  /**
   * Required. Map of tag template field IDs to the settings for the field.
   * This map is an exhaustive list of the allowed fields. The map must contain
   * at least one field and at most 500 fields.
   *
   * The keys to this map are tag template field IDs. The IDs have the
   * following limitations:
   *
   * * Can contain uppercase and lowercase letters, numbers (0-9) and
   *   underscores (_).
   * * Must be at least 1 character and at most 64 characters long.
   * * Must start with a letter or underscore.
   *
   * @generated from field: map<string, google.cloud.datacatalog.v1.TagTemplateField> fields = 3;
   */
  fields: { [key: string]: TagTemplateField };
};

/**
 * Describes the message google.cloud.datacatalog.v1.TagTemplate.
 * Use `create(TagTemplateSchema)` to create a new message.
 */
export const TagTemplateSchema: GenMessage<TagTemplate> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 2);

/**
 * The template for an individual field within a tag template.
 *
 * @generated from message google.cloud.datacatalog.v1.TagTemplateField
 */
export type TagTemplateField = Message<"google.cloud.datacatalog.v1.TagTemplateField"> & {
  /**
   * Output only. The resource name of the tag template field in URL format.
   * Example:
   *
   * `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}`
   *
   * Note: The tag template field itself might not be stored in the location
   * specified in its name.
   *
   * The name must contain only letters (a-z, A-Z), numbers (0-9),
   * or underscores (_), and must start with a letter or underscore.
   * The maximum length is 64 characters.
   *
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * The display name for this field. Defaults to an empty string.
   *
   * The name must contain only Unicode letters, numbers (0-9), underscores (_),
   * dashes (-), spaces ( ), and can't start or end with spaces.
   * The maximum length is 200 characters.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;

  /**
   * Required. The type of value this tag field can contain.
   *
   * @generated from field: google.cloud.datacatalog.v1.FieldType type = 2;
   */
  type?: FieldType;

  /**
   * If true, this field is required. Defaults to false.
   *
   * @generated from field: bool is_required = 3;
   */
  isRequired: boolean;

  /**
   * The description for this field. Defaults to an empty string.
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * The order of this field with respect to other fields in this tag
   * template.
   *
   * For example, a higher value can indicate a more important field.
   * The value can be negative. Multiple fields can have the same order and
   * field orders within a tag don't have to be sequential.
   *
   * @generated from field: int32 order = 5;
   */
  order: number;
};

/**
 * Describes the message google.cloud.datacatalog.v1.TagTemplateField.
 * Use `create(TagTemplateFieldSchema)` to create a new message.
 */
export const TagTemplateFieldSchema: GenMessage<TagTemplateField> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 3);

/**
 * @generated from message google.cloud.datacatalog.v1.FieldType
 */
export type FieldType = Message<"google.cloud.datacatalog.v1.FieldType"> & {
  /**
   * Required.
   *
   * @generated from oneof google.cloud.datacatalog.v1.FieldType.type_decl
   */
  typeDecl: {
    /**
     * Primitive types, such as string, boolean, etc.
     *
     * @generated from field: google.cloud.datacatalog.v1.FieldType.PrimitiveType primitive_type = 1;
     */
    value: FieldType_PrimitiveType;
    case: "primitiveType";
  } | {
    /**
     * An enum type.
     *
     * @generated from field: google.cloud.datacatalog.v1.FieldType.EnumType enum_type = 2;
     */
    value: FieldType_EnumType;
    case: "enumType";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.datacatalog.v1.FieldType.
 * Use `create(FieldTypeSchema)` to create a new message.
 */
export const FieldTypeSchema: GenMessage<FieldType> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 4);

/**
 * @generated from message google.cloud.datacatalog.v1.FieldType.EnumType
 */
export type FieldType_EnumType = Message<"google.cloud.datacatalog.v1.FieldType.EnumType"> & {
  /**
   * The set of allowed values for this enum.
   *
   * This set must not be empty and can include up to 100 allowed values.
   * The display names of the values in this set must not be empty and must
   * be case-insensitively unique within this set.
   *
   * The order of items in this set is preserved. This field can be used to
   * create, remove, and reorder enum values. To rename enum values, use the
   * `RenameTagTemplateFieldEnumValue` method.
   *
   * @generated from field: repeated google.cloud.datacatalog.v1.FieldType.EnumType.EnumValue allowed_values = 1;
   */
  allowedValues: FieldType_EnumType_EnumValue[];
};

/**
 * Describes the message google.cloud.datacatalog.v1.FieldType.EnumType.
 * Use `create(FieldType_EnumTypeSchema)` to create a new message.
 */
export const FieldType_EnumTypeSchema: GenMessage<FieldType_EnumType> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 4, 0);

/**
 * @generated from message google.cloud.datacatalog.v1.FieldType.EnumType.EnumValue
 */
export type FieldType_EnumType_EnumValue = Message<"google.cloud.datacatalog.v1.FieldType.EnumType.EnumValue"> & {
  /**
   * Required. The display name of the enum value. Must not be an empty
   * string.
   *
   * The name must contain only Unicode letters, numbers (0-9), underscores
   * (_), dashes (-), spaces ( ), and can't start or end with spaces. The
   * maximum length is 200 characters.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;
};

/**
 * Describes the message google.cloud.datacatalog.v1.FieldType.EnumType.EnumValue.
 * Use `create(FieldType_EnumType_EnumValueSchema)` to create a new message.
 */
export const FieldType_EnumType_EnumValueSchema: GenMessage<FieldType_EnumType_EnumValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_tags, 4, 0, 0);

/**
 * @generated from enum google.cloud.datacatalog.v1.FieldType.PrimitiveType
 */
export enum FieldType_PrimitiveType {
  /**
   * The default invalid value for a type.
   *
   * @generated from enum value: PRIMITIVE_TYPE_UNSPECIFIED = 0;
   */
  PRIMITIVE_TYPE_UNSPECIFIED = 0,

  /**
   * A double precision number.
   *
   * @generated from enum value: DOUBLE = 1;
   */
  DOUBLE = 1,

  /**
   * An UTF-8 string.
   *
   * @generated from enum value: STRING = 2;
   */
  STRING = 2,

  /**
   * A boolean value.
   *
   * @generated from enum value: BOOL = 3;
   */
  BOOL = 3,

  /**
   * A timestamp.
   *
   * @generated from enum value: TIMESTAMP = 4;
   */
  TIMESTAMP = 4,

  /**
   * A Richtext description.
   *
   * @generated from enum value: RICHTEXT = 5;
   */
  RICHTEXT = 5,
}

/**
 * Describes the enum google.cloud.datacatalog.v1.FieldType.PrimitiveType.
 */
export const FieldType_PrimitiveTypeSchema: GenEnum<FieldType_PrimitiveType> = /*@__PURE__*/
  enumDesc(file_google_cloud_datacatalog_v1_tags, 4, 0);
