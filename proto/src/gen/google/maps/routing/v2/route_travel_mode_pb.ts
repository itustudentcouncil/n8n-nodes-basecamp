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
// @generated from file google/maps/routing/v2/route_travel_mode.proto (package google.maps.routing.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file google/maps/routing/v2/route_travel_mode.proto.
 */
export const file_google_maps_routing_v2_route_travel_mode: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvbWFwcy9yb3V0aW5nL3YyL3JvdXRlX3RyYXZlbF9tb2RlLnByb3RvEhZnb29nbGUubWFwcy5yb3V0aW5nLnYyKm4KD1JvdXRlVHJhdmVsTW9kZRIbChdUUkFWRUxfTU9ERV9VTlNQRUNJRklFRBAAEgkKBURSSVZFEAESCwoHQklDWUNMRRACEggKBFdBTEsQAxIPCgtUV09fV0hFRUxFUhAEEgsKB1RSQU5TSVQQB0LJAQoaY29tLmdvb2dsZS5tYXBzLnJvdXRpbmcudjJCFFJvdXRlVHJhdmVsTW9kZVByb3RvUAFaOmNsb3VkLmdvb2dsZS5jb20vZ28vbWFwcy9yb3V0aW5nL2FwaXYyL3JvdXRpbmdwYjtyb3V0aW5ncGL4AQGiAgVHTVJWMqoCFkdvb2dsZS5NYXBzLlJvdXRpbmcuVjLKAhZHb29nbGVcTWFwc1xSb3V0aW5nXFYy6gIZR29vZ2xlOjpNYXBzOjpSb3V0aW5nOjpWMmIGcHJvdG8z");

/**
 * A set of values used to specify the mode of travel.
 * NOTE: `WALK`, `BICYCLE`, and `TWO_WHEELER` routes are in beta and might
 * sometimes be missing clear sidewalks, pedestrian paths, or bicycling paths.
 * You must display this warning to the user for all walking, bicycling, and
 * two-wheel routes that you display in your app.
 *
 * @generated from enum google.maps.routing.v2.RouteTravelMode
 */
export enum RouteTravelMode {
  /**
   * No travel mode specified. Defaults to `DRIVE`.
   *
   * @generated from enum value: TRAVEL_MODE_UNSPECIFIED = 0;
   */
  TRAVEL_MODE_UNSPECIFIED = 0,

  /**
   * Travel by passenger car.
   *
   * @generated from enum value: DRIVE = 1;
   */
  DRIVE = 1,

  /**
   * Travel by bicycle.
   *
   * @generated from enum value: BICYCLE = 2;
   */
  BICYCLE = 2,

  /**
   * Travel by walking.
   *
   * @generated from enum value: WALK = 3;
   */
  WALK = 3,

  /**
   * Two-wheeled, motorized vehicle. For example, motorcycle. Note that this
   * differs from the `BICYCLE` travel mode which covers human-powered mode.
   *
   * @generated from enum value: TWO_WHEELER = 4;
   */
  TWO_WHEELER = 4,

  /**
   * Travel by public transit routes, where available.
   *
   * @generated from enum value: TRANSIT = 7;
   */
  TRANSIT = 7,
}

/**
 * Describes the enum google.maps.routing.v2.RouteTravelMode.
 */
export const RouteTravelModeSchema: GenEnum<RouteTravelMode> = /*@__PURE__*/
  enumDesc(file_google_maps_routing_v2_route_travel_mode, 0);
