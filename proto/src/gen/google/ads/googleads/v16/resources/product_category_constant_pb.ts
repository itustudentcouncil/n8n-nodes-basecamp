// Copyright 2023 Google LLC
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
// @generated from file google/ads/googleads/v16/resources/product_category_constant.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ProductCategoryLevelEnum_ProductCategoryLevel } from "../enums/product_category_level_pb";
import { file_google_ads_googleads_v16_enums_product_category_level } from "../enums/product_category_level_pb";
import type { ProductCategoryStateEnum_ProductCategoryState } from "../enums/product_category_state_pb";
import { file_google_ads_googleads_v16_enums_product_category_state } from "../enums/product_category_state_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/product_category_constant.proto.
 */
export const file_google_ads_googleads_v16_resources_product_category_constant: GenFile = /*@__PURE__*/
  fileDesc("CkJnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL3Byb2R1Y3RfY2F0ZWdvcnlfY29uc3RhbnQucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMi0gYKF1Byb2R1Y3RDYXRlZ29yeUNvbnN0YW50Ek8KDXJlc291cmNlX25hbWUYASABKAlCOOBBA/pBMgowZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL1Byb2R1Y3RDYXRlZ29yeUNvbnN0YW50EhgKC2NhdGVnb3J5X2lkGAIgASgDQgPgQQMSZwogcHJvZHVjdF9jYXRlZ29yeV9jb25zdGFudF9wYXJlbnQYAyABKAlCOOBBA/pBMgowZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL1Byb2R1Y3RDYXRlZ29yeUNvbnN0YW50SACIAQESYQoFbGV2ZWwYBCABKA4yTS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUHJvZHVjdENhdGVnb3J5TGV2ZWxFbnVtLlByb2R1Y3RDYXRlZ29yeUxldmVsQgPgQQMSYQoFc3RhdGUYBSABKA4yTS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUHJvZHVjdENhdGVnb3J5U3RhdGVFbnVtLlByb2R1Y3RDYXRlZ29yeVN0YXRlQgPgQQMScwoNbG9jYWxpemF0aW9ucxgGIAMoCzJXLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMuUHJvZHVjdENhdGVnb3J5Q29uc3RhbnQuUHJvZHVjdENhdGVnb3J5TG9jYWxpemF0aW9uQgPgQQMaZwobUHJvZHVjdENhdGVnb3J5TG9jYWxpemF0aW9uEhgKC3JlZ2lvbl9jb2RlGAEgASgJQgPgQQMSGgoNbGFuZ3VhZ2VfY29kZRgCIAEoCUID4EEDEhIKBXZhbHVlGAMgASgJQgPgQQM6mQHqQZUBCjBnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vUHJvZHVjdENhdGVnb3J5Q29uc3RhbnQSLnByb2R1Y3RDYXRlZ29yeUNvbnN0YW50cy97bGV2ZWx9fntjYXRlZ29yeV9pZH0qGHByb2R1Y3RDYXRlZ29yeUNvbnN0YW50czIXcHJvZHVjdENhdGVnb3J5Q29uc3RhbnRCIwohX3Byb2R1Y3RfY2F0ZWdvcnlfY29uc3RhbnRfcGFyZW50Qo4CCiZjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlc0IcUHJvZHVjdENhdGVnb3J5Q29uc3RhbnRQcm90b1ABWktnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L3Jlc291cmNlcztyZXNvdXJjZXOiAgNHQUGqAiJHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuUmVzb3VyY2VzygIiR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XFJlc291cmNlc+oCJkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6UmVzb3VyY2VzYgZwcm90bzM", [file_google_ads_googleads_v16_enums_product_category_level, file_google_ads_googleads_v16_enums_product_category_state, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A Product Category.
 *
 * @generated from message google.ads.googleads.v16.resources.ProductCategoryConstant
 */
export type ProductCategoryConstant = Message<"google.ads.googleads.v16.resources.ProductCategoryConstant"> & {
  /**
   * Output only. The resource name of the product category.
   * Product category resource names have the form:
   *
   * `productCategoryConstants/{level}~{category_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the product category.
   *
   * This ID is equivalent to the google_product_category ID as described in
   * this article: https://support.google.com/merchants/answer/6324436.
   *
   * @generated from field: int64 category_id = 2;
   */
  categoryId: bigint;

  /**
   * Output only. Resource name of the parent product category.
   *
   * @generated from field: optional string product_category_constant_parent = 3;
   */
  productCategoryConstantParent?: string;

  /**
   * Output only. Level of the product category.
   *
   * @generated from field: google.ads.googleads.v16.enums.ProductCategoryLevelEnum.ProductCategoryLevel level = 4;
   */
  level: ProductCategoryLevelEnum_ProductCategoryLevel;

  /**
   * Output only. State of the product category.
   *
   * @generated from field: google.ads.googleads.v16.enums.ProductCategoryStateEnum.ProductCategoryState state = 5;
   */
  state: ProductCategoryStateEnum_ProductCategoryState;

  /**
   * Output only. List of all available localizations of the product category.
   *
   * @generated from field: repeated google.ads.googleads.v16.resources.ProductCategoryConstant.ProductCategoryLocalization localizations = 6;
   */
  localizations: ProductCategoryConstant_ProductCategoryLocalization[];
};

/**
 * Describes the message google.ads.googleads.v16.resources.ProductCategoryConstant.
 * Use `create(ProductCategoryConstantSchema)` to create a new message.
 */
export const ProductCategoryConstantSchema: GenMessage<ProductCategoryConstant> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_product_category_constant, 0);

/**
 * Localization for the product category.
 *
 * @generated from message google.ads.googleads.v16.resources.ProductCategoryConstant.ProductCategoryLocalization
 */
export type ProductCategoryConstant_ProductCategoryLocalization = Message<"google.ads.googleads.v16.resources.ProductCategoryConstant.ProductCategoryLocalization"> & {
  /**
   * Output only. Upper-case two-letter ISO 3166-1 country code of the
   * localized category.
   *
   * @generated from field: string region_code = 1;
   */
  regionCode: string;

  /**
   * Output only. Two-letter ISO 639-1 language code of the localized
   * category.
   *
   * @generated from field: string language_code = 2;
   */
  languageCode: string;

  /**
   * Output only. The name of the category in the specified locale.
   *
   * @generated from field: string value = 3;
   */
  value: string;
};

/**
 * Describes the message google.ads.googleads.v16.resources.ProductCategoryConstant.ProductCategoryLocalization.
 * Use `create(ProductCategoryConstant_ProductCategoryLocalizationSchema)` to create a new message.
 */
export const ProductCategoryConstant_ProductCategoryLocalizationSchema: GenMessage<ProductCategoryConstant_ProductCategoryLocalization> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_product_category_constant, 0, 0);
