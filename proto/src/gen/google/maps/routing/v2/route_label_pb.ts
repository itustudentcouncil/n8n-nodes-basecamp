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
// @generated from file google/maps/routing/v2/route_label.proto (package google.maps.routing.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file google/maps/routing/v2/route_label.proto.
 */
export const file_google_maps_routing_v2_route_label: GenFile = /*@__PURE__*/
  fileDesc("Cihnb29nbGUvbWFwcy9yb3V0aW5nL3YyL3JvdXRlX2xhYmVsLnByb3RvEhZnb29nbGUubWFwcy5yb3V0aW5nLnYyKm0KClJvdXRlTGFiZWwSGwoXUk9VVEVfTEFCRUxfVU5TUEVDSUZJRUQQABIRCg1ERUZBVUxUX1JPVVRFEAESGwoXREVGQVVMVF9ST1VURV9BTFRFUk5BVEUQAhISCg5GVUVMX0VGRklDSUVOVBADQsQBChpjb20uZ29vZ2xlLm1hcHMucm91dGluZy52MkIPUm91dGVMYWJlbFByb3RvUAFaOmNsb3VkLmdvb2dsZS5jb20vZ28vbWFwcy9yb3V0aW5nL2FwaXYyL3JvdXRpbmdwYjtyb3V0aW5ncGL4AQGiAgVHTVJWMqoCFkdvb2dsZS5NYXBzLlJvdXRpbmcuVjLKAhZHb29nbGVcTWFwc1xSb3V0aW5nXFYy6gIZR29vZ2xlOjpNYXBzOjpSb3V0aW5nOjpWMmIGcHJvdG8z");

/**
 * Labels for the [`Route`][google.maps.routing.v2.Route] that are useful to
 * identify specific properties of the route to compare against others.
 *
 * @generated from enum google.maps.routing.v2.RouteLabel
 */
export enum RouteLabel {
  /**
   * Default - not used.
   *
   * @generated from enum value: ROUTE_LABEL_UNSPECIFIED = 0;
   */
  ROUTE_LABEL_UNSPECIFIED = 0,

  /**
   * The default "best" route returned for the route computation.
   *
   * @generated from enum value: DEFAULT_ROUTE = 1;
   */
  DEFAULT_ROUTE = 1,

  /**
   * An alternative to the default "best" route. Routes like this will be
   * returned when
   * [`compute_alternative_routes`][google.maps.routing.v2.ComputeRoutesRequest.compute_alternative_routes]
   * is specified.
   *
   * @generated from enum value: DEFAULT_ROUTE_ALTERNATE = 2;
   */
  DEFAULT_ROUTE_ALTERNATE = 2,

  /**
   * Fuel efficient route. Routes labeled with this value are determined to be
   * optimized for Eco parameters such as fuel consumption.
   *
   * @generated from enum value: FUEL_EFFICIENT = 3;
   */
  FUEL_EFFICIENT = 3,
}

/**
 * Describes the enum google.maps.routing.v2.RouteLabel.
 */
export const RouteLabelSchema: GenEnum<RouteLabel> = /*@__PURE__*/
  enumDesc(file_google_maps_routing_v2_route_label, 0);
