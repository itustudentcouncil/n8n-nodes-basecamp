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
// @generated from file google/maps/routing/v2/vehicle_info.proto (package google.maps.routing.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { VehicleEmissionType } from "./vehicle_emission_type_pb";
import { file_google_maps_routing_v2_vehicle_emission_type } from "./vehicle_emission_type_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/maps/routing/v2/vehicle_info.proto.
 */
export const file_google_maps_routing_v2_vehicle_info: GenFile = /*@__PURE__*/
  fileDesc("Cilnb29nbGUvbWFwcy9yb3V0aW5nL3YyL3ZlaGljbGVfaW5mby5wcm90bxIWZ29vZ2xlLm1hcHMucm91dGluZy52MiJRCgtWZWhpY2xlSW5mbxJCCg1lbWlzc2lvbl90eXBlGAIgASgOMisuZ29vZ2xlLm1hcHMucm91dGluZy52Mi5WZWhpY2xlRW1pc3Npb25UeXBlQsUBChpjb20uZ29vZ2xlLm1hcHMucm91dGluZy52MkIQVmVoaWNsZUluZm9Qcm90b1ABWjpjbG91ZC5nb29nbGUuY29tL2dvL21hcHMvcm91dGluZy9hcGl2Mi9yb3V0aW5ncGI7cm91dGluZ3Bi+AEBogIFR01SVjKqAhZHb29nbGUuTWFwcy5Sb3V0aW5nLlYyygIWR29vZ2xlXE1hcHNcUm91dGluZ1xWMuoCGUdvb2dsZTo6TWFwczo6Um91dGluZzo6VjJiBnByb3RvMw", [file_google_maps_routing_v2_vehicle_emission_type]);

/**
 * Contains the vehicle information, such as the vehicle emission type.
 *
 * @generated from message google.maps.routing.v2.VehicleInfo
 */
export type VehicleInfo = Message<"google.maps.routing.v2.VehicleInfo"> & {
  /**
   * Describes the vehicle's emission type.
   * Applies only to the `DRIVE`
   * [`RouteTravelMode`][google.maps.routing.v2.RouteTravelMode].
   *
   * @generated from field: google.maps.routing.v2.VehicleEmissionType emission_type = 2;
   */
  emissionType: VehicleEmissionType;
};

/**
 * Describes the message google.maps.routing.v2.VehicleInfo.
 * Use `create(VehicleInfoSchema)` to create a new message.
 */
export const VehicleInfoSchema: GenMessage<VehicleInfo> = /*@__PURE__*/
  messageDesc(file_google_maps_routing_v2_vehicle_info, 0);
