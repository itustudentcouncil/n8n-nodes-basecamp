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
// @generated from file google/cloud/cloudcontrolspartner/v1/monitoring.proto (package google.cloud.cloudcontrolspartner.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import type { GetViolationRequestSchema, ListViolationsRequestSchema, ListViolationsResponseSchema, ViolationSchema } from "./violations_pb";
import { file_google_cloud_cloudcontrolspartner_v1_violations } from "./violations_pb";

/**
 * Describes the file google/cloud/cloudcontrolspartner/v1/monitoring.proto.
 */
export const file_google_cloud_cloudcontrolspartner_v1_monitoring: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvY2xvdWQvY2xvdWRjb250cm9sc3BhcnRuZXIvdjEvbW9uaXRvcmluZy5wcm90bxIkZ29vZ2xlLmNsb3VkLmNsb3VkY29udHJvbHNwYXJ0bmVyLnYxMr4ECh5DbG91ZENvbnRyb2xzUGFydG5lck1vbml0b3JpbmcS6QEKDkxpc3RWaW9sYXRpb25zEjsuZ29vZ2xlLmNsb3VkLmNsb3VkY29udHJvbHNwYXJ0bmVyLnYxLkxpc3RWaW9sYXRpb25zUmVxdWVzdBo8Lmdvb2dsZS5jbG91ZC5jbG91ZGNvbnRyb2xzcGFydG5lci52MS5MaXN0VmlvbGF0aW9uc1Jlc3BvbnNlIlzaQQZwYXJlbnSC0+STAk0SSy92MS97cGFyZW50PW9yZ2FuaXphdGlvbnMvKi9sb2NhdGlvbnMvKi9jdXN0b21lcnMvKi93b3JrbG9hZHMvKn0vdmlvbGF0aW9ucxLWAQoMR2V0VmlvbGF0aW9uEjkuZ29vZ2xlLmNsb3VkLmNsb3VkY29udHJvbHNwYXJ0bmVyLnYxLkdldFZpb2xhdGlvblJlcXVlc3QaLy5nb29nbGUuY2xvdWQuY2xvdWRjb250cm9sc3BhcnRuZXIudjEuVmlvbGF0aW9uIlraQQRuYW1lgtPkkwJNEksvdjEve25hbWU9b3JnYW5pemF0aW9ucy8qL2xvY2F0aW9ucy8qL2N1c3RvbWVycy8qL3dvcmtsb2Fkcy8qL3Zpb2xhdGlvbnMvKn0aV8pBI2Nsb3VkY29udHJvbHNwYXJ0bmVyLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybUKTAgooY29tLmdvb2dsZS5jbG91ZC5jbG91ZGNvbnRyb2xzcGFydG5lci52MUIPTW9uaXRvcmluZ1Byb3RvUAFaXGNsb3VkLmdvb2dsZS5jb20vZ28vY2xvdWRjb250cm9sc3BhcnRuZXIvYXBpdjEvY2xvdWRjb250cm9sc3BhcnRuZXJwYjtjbG91ZGNvbnRyb2xzcGFydG5lcnBiqgIkR29vZ2xlLkNsb3VkLkNsb3VkQ29udHJvbHNQYXJ0bmVyLlYxygIkR29vZ2xlXENsb3VkXENsb3VkQ29udHJvbHNQYXJ0bmVyXFYx6gInR29vZ2xlOjpDbG91ZDo6Q2xvdWRDb250cm9sc1BhcnRuZXI6OlYxYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_cloud_cloudcontrolspartner_v1_violations]);

/**
 * Service describing handlers for resources
 *
 * @generated from service google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerMonitoring
 */
export const CloudControlsPartnerMonitoring: GenService<{
  /**
   * Lists Violations for a workload
   * Callers may also choose to read across multiple Customers or for a single
   * customer as per
   * [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash
   * character) as a wildcard character instead of {customer} & {workload}.
   * Format:
   * `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
   *
   * @generated from rpc google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerMonitoring.ListViolations
   */
  listViolations: {
    methodKind: "unary";
    input: typeof ListViolationsRequestSchema;
    output: typeof ListViolationsResponseSchema;
  },
  /**
   * Gets details of a single Violation.
   *
   * @generated from rpc google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerMonitoring.GetViolation
   */
  getViolation: {
    methodKind: "unary";
    input: typeof GetViolationRequestSchema;
    output: typeof ViolationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_cloudcontrolspartner_v1_monitoring, 0);
