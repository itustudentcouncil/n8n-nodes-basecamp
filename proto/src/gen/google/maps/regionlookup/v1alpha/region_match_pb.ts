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
// @generated from file google/maps/regionlookup/v1alpha/region_match.proto (package google.maps.regionlookup.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/maps/regionlookup/v1alpha/region_match.proto.
 */
export const file_google_maps_regionlookup_v1alpha_region_match: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvbWFwcy9yZWdpb25sb29rdXAvdjFhbHBoYS9yZWdpb25fbWF0Y2gucHJvdG8SIGdvb2dsZS5tYXBzLnJlZ2lvbmxvb2t1cC52MWFscGhhIlgKC1JlZ2lvbk1hdGNoEhgKEG1hdGNoZWRfcGxhY2VfaWQYASABKAkSGwoTY2FuZGlkYXRlX3BsYWNlX2lkcxgCIAMoCRISCgpkZWJ1Z19pbmZvGAMgASgJQtwBCiRjb20uZ29vZ2xlLm1hcHMucmVnaW9ubG9va3VwLnYxYWxwaGFCEFJlZ2lvbk1hdGNoUHJvdG9QAVpOY2xvdWQuZ29vZ2xlLmNvbS9nby9tYXBzL3JlZ2lvbmxvb2t1cC9hcGl2MWFscGhhL3JlZ2lvbmxvb2t1cHBiO3JlZ2lvbmxvb2t1cHBi+AEBogIGTVJMVjFBqgIgR29vZ2xlLk1hcHMuUmVnaW9uTG9va3VwLlYxQWxwaGHKAiBHb29nbGVcTWFwc1xSZWdpb25Mb29rdXBcVjFhbHBoYWIGcHJvdG8z");

/**
 * Region Match.
 *
 * Next available tag: 5
 *
 * @generated from message google.maps.regionlookup.v1alpha.RegionMatch
 */
export type RegionMatch = Message<"google.maps.regionlookup.v1alpha.RegionMatch"> & {
  /**
   * Place ID of the region that is matched. If region is found, this field is
   * not set.
   *
   * @generated from field: string matched_place_id = 1;
   */
  matchedPlaceId: string;

  /**
   * Region candidate IDs. Up to three candidates may be returned.
   *
   * @generated from field: repeated string candidate_place_ids = 2;
   */
  candidatePlaceIds: string[];

  /**
   * Matching debug information for when no match is found.
   *
   * @generated from field: string debug_info = 3;
   */
  debugInfo: string;
};

/**
 * Describes the message google.maps.regionlookup.v1alpha.RegionMatch.
 * Use `create(RegionMatchSchema)` to create a new message.
 */
export const RegionMatchSchema: GenMessage<RegionMatch> = /*@__PURE__*/
  messageDesc(file_google_maps_regionlookup_v1alpha_region_match, 0);
