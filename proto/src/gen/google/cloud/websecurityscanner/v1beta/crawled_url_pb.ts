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
//

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/cloud/websecurityscanner/v1beta/crawled_url.proto (package google.cloud.websecurityscanner.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/websecurityscanner/v1beta/crawled_url.proto.
 */
export const file_google_cloud_websecurityscanner_v1beta_crawled_url: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvY2xvdWQvd2Vic2VjdXJpdHlzY2FubmVyL3YxYmV0YS9jcmF3bGVkX3VybC5wcm90bxImZ29vZ2xlLmNsb3VkLndlYnNlY3VyaXR5c2Nhbm5lci52MWJldGEiPAoKQ3Jhd2xlZFVybBITCgtodHRwX21ldGhvZBgBIAEoCRILCgN1cmwYAiABKAkSDAoEYm9keRgDIAEoCUKZAgoqY29tLmdvb2dsZS5jbG91ZC53ZWJzZWN1cml0eXNjYW5uZXIudjFiZXRhQg9DcmF3bGVkVXJsUHJvdG9QAVpaY2xvdWQuZ29vZ2xlLmNvbS9nby93ZWJzZWN1cml0eXNjYW5uZXIvYXBpdjFiZXRhL3dlYnNlY3VyaXR5c2Nhbm5lcnBiO3dlYnNlY3VyaXR5c2Nhbm5lcnBiqgImR29vZ2xlLkNsb3VkLldlYlNlY3VyaXR5U2Nhbm5lci5WMUJldGHKAiZHb29nbGVcQ2xvdWRcV2ViU2VjdXJpdHlTY2FubmVyXFYxYmV0YeoCKUdvb2dsZTo6Q2xvdWQ6OldlYlNlY3VyaXR5U2Nhbm5lcjo6VjFiZXRhYgZwcm90bzM");

/**
 * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web
 * Security Scanner Service crawls the web applications, following all links
 * within the scope of sites, to find the URLs to test against.
 *
 * @generated from message google.cloud.websecurityscanner.v1beta.CrawledUrl
 */
export type CrawledUrl = Message<"google.cloud.websecurityscanner.v1beta.CrawledUrl"> & {
  /**
   * The http method of the request that was used to visit the URL, in
   * uppercase.
   *
   * @generated from field: string http_method = 1;
   */
  httpMethod: string;

  /**
   * The URL that was crawled.
   *
   * @generated from field: string url = 2;
   */
  url: string;

  /**
   * The body of the request that was used to visit the URL.
   *
   * @generated from field: string body = 3;
   */
  body: string;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1beta.CrawledUrl.
 * Use `create(CrawledUrlSchema)` to create a new message.
 */
export const CrawledUrlSchema: GenMessage<CrawledUrl> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1beta_crawled_url, 0);
