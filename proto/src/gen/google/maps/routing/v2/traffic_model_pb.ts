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
// @generated from file google/maps/routing/v2/traffic_model.proto (package google.maps.routing.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file google/maps/routing/v2/traffic_model.proto.
 */
export const file_google_maps_routing_v2_traffic_model: GenFile = /*@__PURE__*/
  fileDesc("Cipnb29nbGUvbWFwcy9yb3V0aW5nL3YyL3RyYWZmaWNfbW9kZWwucHJvdG8SFmdvb2dsZS5tYXBzLnJvdXRpbmcudjIqXgoMVHJhZmZpY01vZGVsEh0KGVRSQUZGSUNfTU9ERUxfVU5TUEVDSUZJRUQQABIOCgpCRVNUX0dVRVNTEAESDwoLUEVTU0lNSVNUSUMQAhIOCgpPUFRJTUlTVElDEANCxgEKGmNvbS5nb29nbGUubWFwcy5yb3V0aW5nLnYyQhFUcmFmZmljTW9kZWxQcm90b1ABWjpjbG91ZC5nb29nbGUuY29tL2dvL21hcHMvcm91dGluZy9hcGl2Mi9yb3V0aW5ncGI7cm91dGluZ3Bi+AEBogIFR01SVjKqAhZHb29nbGUuTWFwcy5Sb3V0aW5nLlYyygIWR29vZ2xlXE1hcHNcUm91dGluZ1xWMuoCGUdvb2dsZTo6TWFwczo6Um91dGluZzo6VjJiBnByb3RvMw");

/**
 * Specifies the assumptions to use when calculating time in traffic. This
 * setting affects the value returned in the `duration` field in the
 * response, which contains the predicted time in traffic based on historical
 * averages.
 *
 * @generated from enum google.maps.routing.v2.TrafficModel
 */
export enum TrafficModel {
  /**
   * Unused. If specified, will default to `BEST_GUESS`.
   *
   * @generated from enum value: TRAFFIC_MODEL_UNSPECIFIED = 0;
   */
  TRAFFIC_MODEL_UNSPECIFIED = 0,

  /**
   * Indicates that the returned `duration` should be the best
   * estimate of travel time given what is known about both historical traffic
   * conditions and live traffic. Live traffic becomes more important the closer
   * the `departure_time` is to now.
   *
   * @generated from enum value: BEST_GUESS = 1;
   */
  BEST_GUESS = 1,

  /**
   * Indicates that the returned duration should be longer than the
   * actual travel time on most days, though occasional days with particularly
   * bad traffic conditions may exceed this value.
   *
   * @generated from enum value: PESSIMISTIC = 2;
   */
  PESSIMISTIC = 2,

  /**
   * Indicates that the returned duration should be shorter than the actual
   * travel time on most days, though occasional days with particularly good
   * traffic conditions may be faster than this value.
   *
   * @generated from enum value: OPTIMISTIC = 3;
   */
  OPTIMISTIC = 3,
}

/**
 * Describes the enum google.maps.routing.v2.TrafficModel.
 */
export const TrafficModelSchema: GenEnum<TrafficModel> = /*@__PURE__*/
  enumDesc(file_google_maps_routing_v2_traffic_model, 0);
