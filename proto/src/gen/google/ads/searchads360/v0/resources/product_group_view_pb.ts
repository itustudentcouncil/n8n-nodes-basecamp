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
// @generated from file google/ads/searchads360/v0/resources/product_group_view.proto (package google.ads.searchads360.v0.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/resources/product_group_view.proto.
 */
export const file_google_ads_searchads360_v0_resources_product_group_view: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9yZXNvdXJjZXMvcHJvZHVjdF9ncm91cF92aWV3LnByb3RvEiRnb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5yZXNvdXJjZXMi2QEKEFByb2R1Y3RHcm91cFZpZXcSSwoNcmVzb3VyY2VfbmFtZRgBIAEoCUI04EED+kEuCixzZWFyY2hhZHMzNjAuZ29vZ2xlYXBpcy5jb20vUHJvZHVjdEdyb3VwVmlldzp46kF1CixzZWFyY2hhZHMzNjAuZ29vZ2xlYXBpcy5jb20vUHJvZHVjdEdyb3VwVmlldxJFY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vcHJvZHVjdEdyb3VwVmlld3Mve2FkZ3JvdXBfaWR9fntjcml0ZXJpb25faWR9QpUCCihjb20uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAucmVzb3VyY2VzQhVQcm9kdWN0R3JvdXBWaWV3UHJvdG9QAVpNZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvc2VhcmNoYWRzMzYwL3YwL3Jlc291cmNlcztyZXNvdXJjZXOiAgdHQVNBMzYwqgIkR29vZ2xlLkFkcy5TZWFyY2hBZHMzNjAuVjAuUmVzb3VyY2VzygIkR29vZ2xlXEFkc1xTZWFyY2hBZHMzNjBcVjBcUmVzb3VyY2Vz6gIoR29vZ2xlOjpBZHM6OlNlYXJjaEFkczM2MDo6VjA6OlJlc291cmNlc2IGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * A product group view.
 *
 * @generated from message google.ads.searchads360.v0.resources.ProductGroupView
 */
export type ProductGroupView = Message<"google.ads.searchads360.v0.resources.ProductGroupView"> & {
  /**
   * Output only. The resource name of the product group view.
   * Product group view resource names have the form:
   *
   * `customers/{customer_id}/productGroupViews/{ad_group_id}~{criterion_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.ProductGroupView.
 * Use `create(ProductGroupViewSchema)` to create a new message.
 */
export const ProductGroupViewSchema: GenMessage<ProductGroupView> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_product_group_view, 0);
