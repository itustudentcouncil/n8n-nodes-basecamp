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
// @generated from file google/cloud/recommender/v1beta1/insight.proto (package google.cloud.recommender.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/recommender/v1beta1/insight.proto.
 */
export const file_google_cloud_recommender_v1beta1_insight: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvY2xvdWQvcmVjb21tZW5kZXIvdjFiZXRhMS9pbnNpZ2h0LnByb3RvEiBnb29nbGUuY2xvdWQucmVjb21tZW5kZXIudjFiZXRhMSLKCQoHSW5zaWdodBIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEhgKEHRhcmdldF9yZXNvdXJjZXMYCSADKAkSFwoPaW5zaWdodF9zdWJ0eXBlGAogASgJEigKB2NvbnRlbnQYAyABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0EjUKEWxhc3RfcmVmcmVzaF90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI1ChJvYnNlcnZhdGlvbl9wZXJpb2QYBSABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24SRgoKc3RhdGVfaW5mbxgGIAEoCzIyLmdvb2dsZS5jbG91ZC5yZWNvbW1lbmRlci52MWJldGExLkluc2lnaHRTdGF0ZUluZm8SRAoIY2F0ZWdvcnkYByABKA4yMi5nb29nbGUuY2xvdWQucmVjb21tZW5kZXIudjFiZXRhMS5JbnNpZ2h0LkNhdGVnb3J5EkQKCHNldmVyaXR5GA8gASgOMjIuZ29vZ2xlLmNsb3VkLnJlY29tbWVuZGVyLnYxYmV0YTEuSW5zaWdodC5TZXZlcml0eRIMCgRldGFnGAsgASgJEmUKGmFzc29jaWF0ZWRfcmVjb21tZW5kYXRpb25zGAggAygLMkEuZ29vZ2xlLmNsb3VkLnJlY29tbWVuZGVyLnYxYmV0YTEuSW5zaWdodC5SZWNvbW1lbmRhdGlvblJlZmVyZW5jZRoxChdSZWNvbW1lbmRhdGlvblJlZmVyZW5jZRIWCg5yZWNvbW1lbmRhdGlvbhgBIAEoCSJgCghDYXRlZ29yeRIYChRDQVRFR09SWV9VTlNQRUNJRklFRBAAEggKBENPU1QQARIMCghTRUNVUklUWRACEg8KC1BFUkZPUk1BTkNFEAMSEQoNTUFOQUdFQUJJTElUWRAEIlEKCFNldmVyaXR5EhgKFFNFVkVSSVRZX1VOU1BFQ0lGSUVEEAASBwoDTE9XEAESCgoGTUVESVVNEAISCAoESElHSBADEgwKCENSSVRJQ0FMEAQ6nwPqQZsDCiJyZWNvbW1lbmRlci5nb29nbGVhcGlzLmNvbS9JbnNpZ2h0ElZwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vaW5zaWdodFR5cGVzL3tpbnNpZ2h0X3R5cGV9L2luc2lnaHRzL3tpbnNpZ2h0fRJlYmlsbGluZ0FjY291bnRzL3tiaWxsaW5nX2FjY291bnR9L2xvY2F0aW9ucy97bG9jYXRpb259L2luc2lnaHRUeXBlcy97aW5zaWdodF90eXBlfS9pbnNpZ2h0cy97aW5zaWdodH0SVGZvbGRlcnMve2ZvbGRlcn0vbG9jYXRpb25zL3tsb2NhdGlvbn0vaW5zaWdodFR5cGVzL3tpbnNpZ2h0X3R5cGV9L2luc2lnaHRzL3tpbnNpZ2h0fRJgb3JnYW5pemF0aW9ucy97b3JnYW5pemF0aW9ufS9sb2NhdGlvbnMve2xvY2F0aW9ufS9pbnNpZ2h0VHlwZXMve2luc2lnaHRfdHlwZX0vaW5zaWdodHMve2luc2lnaHR9IrkCChBJbnNpZ2h0U3RhdGVJbmZvEkcKBXN0YXRlGAEgASgOMjguZ29vZ2xlLmNsb3VkLnJlY29tbWVuZGVyLnYxYmV0YTEuSW5zaWdodFN0YXRlSW5mby5TdGF0ZRJdCg5zdGF0ZV9tZXRhZGF0YRgCIAMoCzJFLmdvb2dsZS5jbG91ZC5yZWNvbW1lbmRlci52MWJldGExLkluc2lnaHRTdGF0ZUluZm8uU3RhdGVNZXRhZGF0YUVudHJ5GjQKElN0YXRlTWV0YWRhdGFFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIkcKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASCgoGQUNUSVZFEAESDAoIQUNDRVBURUQQAhINCglESVNNSVNTRUQQAyKSAwoLSW5zaWdodFR5cGUSDAoEbmFtZRgBIAEoCTr0AupB8AIKJnJlY29tbWVuZGVyLmdvb2dsZWFwaXMuY29tL0luc2lnaHRUeXBlEkNwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vaW5zaWdodFR5cGVzL3tpbnNpZ2h0X3R5cGV9ElJiaWxsaW5nQWNjb3VudHMve2JpbGxpbmdfYWNjb3VudH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vaW5zaWdodFR5cGVzL3tpbnNpZ2h0X3R5cGV9EkFmb2xkZXJzL3tmb2xkZXJ9L2xvY2F0aW9ucy97bG9jYXRpb259L2luc2lnaHRUeXBlcy97aW5zaWdodF90eXBlfRJNb3JnYW5pemF0aW9ucy97b3JnYW5pemF0aW9ufS9sb2NhdGlvbnMve2xvY2F0aW9ufS9pbnNpZ2h0VHlwZXMve2luc2lnaHRfdHlwZX0SG2luc2lnaHRUeXBlcy97aW5zaWdodF90eXBlfUKaAQokY29tLmdvb2dsZS5jbG91ZC5yZWNvbW1lbmRlci52MWJldGExUAFaRmNsb3VkLmdvb2dsZS5jb20vZ28vcmVjb21tZW5kZXIvYXBpdjFiZXRhMS9yZWNvbW1lbmRlcnBiO3JlY29tbWVuZGVycGKiAgRDUkVDqgIgR29vZ2xlLkNsb3VkLlJlY29tbWVuZGVyLlYxQmV0YTFiBnByb3RvMw", [file_google_api_resource, file_google_protobuf_duration, file_google_protobuf_struct, file_google_protobuf_timestamp]);

/**
 * An insight along with the information used to derive the insight. The insight
 * may have associated recommendations as well.
 *
 * @generated from message google.cloud.recommender.v1beta1.Insight
 */
export type Insight = Message<"google.cloud.recommender.v1beta1.Insight"> & {
  /**
   * Name of the insight.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Free-form human readable summary in English. The maximum length is 500
   * characters.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Fully qualified resource names that this insight is targeting.
   *
   * @generated from field: repeated string target_resources = 9;
   */
  targetResources: string[];

  /**
   * Insight subtype. Insight content schema will be stable for a given subtype.
   *
   * @generated from field: string insight_subtype = 10;
   */
  insightSubtype: string;

  /**
   * A struct of custom fields to explain the insight.
   * Example: "grantedPermissionsCount": "1000"
   *
   * @generated from field: google.protobuf.Struct content = 3;
   */
  content?: JsonObject;

  /**
   * Timestamp of the latest data used to generate the insight.
   *
   * @generated from field: google.protobuf.Timestamp last_refresh_time = 4;
   */
  lastRefreshTime?: Timestamp;

  /**
   * Observation period that led to the insight. The source data used to
   * generate the insight ends at last_refresh_time and begins at
   * (last_refresh_time - observation_period).
   *
   * @generated from field: google.protobuf.Duration observation_period = 5;
   */
  observationPeriod?: Duration;

  /**
   * Information state and metadata.
   *
   * @generated from field: google.cloud.recommender.v1beta1.InsightStateInfo state_info = 6;
   */
  stateInfo?: InsightStateInfo;

  /**
   * Category being targeted by the insight.
   *
   * @generated from field: google.cloud.recommender.v1beta1.Insight.Category category = 7;
   */
  category: Insight_Category;

  /**
   * Insight's severity.
   *
   * @generated from field: google.cloud.recommender.v1beta1.Insight.Severity severity = 15;
   */
  severity: Insight_Severity;

  /**
   * Fingerprint of the Insight. Provides optimistic locking when updating
   * states.
   *
   * @generated from field: string etag = 11;
   */
  etag: string;

  /**
   * Recommendations derived from this insight.
   *
   * @generated from field: repeated google.cloud.recommender.v1beta1.Insight.RecommendationReference associated_recommendations = 8;
   */
  associatedRecommendations: Insight_RecommendationReference[];
};

/**
 * Describes the message google.cloud.recommender.v1beta1.Insight.
 * Use `create(InsightSchema)` to create a new message.
 */
export const InsightSchema: GenMessage<Insight> = /*@__PURE__*/
  messageDesc(file_google_cloud_recommender_v1beta1_insight, 0);

/**
 * Reference to an associated recommendation.
 *
 * @generated from message google.cloud.recommender.v1beta1.Insight.RecommendationReference
 */
export type Insight_RecommendationReference = Message<"google.cloud.recommender.v1beta1.Insight.RecommendationReference"> & {
  /**
   * Recommendation resource name, e.g.
   * projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID]
   *
   * @generated from field: string recommendation = 1;
   */
  recommendation: string;
};

/**
 * Describes the message google.cloud.recommender.v1beta1.Insight.RecommendationReference.
 * Use `create(Insight_RecommendationReferenceSchema)` to create a new message.
 */
export const Insight_RecommendationReferenceSchema: GenMessage<Insight_RecommendationReference> = /*@__PURE__*/
  messageDesc(file_google_cloud_recommender_v1beta1_insight, 0, 0);

/**
 * Insight category.
 *
 * @generated from enum google.cloud.recommender.v1beta1.Insight.Category
 */
export enum Insight_Category {
  /**
   * Unspecified category.
   *
   * @generated from enum value: CATEGORY_UNSPECIFIED = 0;
   */
  CATEGORY_UNSPECIFIED = 0,

  /**
   * The insight is related to cost.
   *
   * @generated from enum value: COST = 1;
   */
  COST = 1,

  /**
   * The insight is related to security.
   *
   * @generated from enum value: SECURITY = 2;
   */
  SECURITY = 2,

  /**
   * The insight is related to performance.
   *
   * @generated from enum value: PERFORMANCE = 3;
   */
  PERFORMANCE = 3,

  /**
   * This insight is related to manageability.
   *
   * @generated from enum value: MANAGEABILITY = 4;
   */
  MANAGEABILITY = 4,
}

/**
 * Describes the enum google.cloud.recommender.v1beta1.Insight.Category.
 */
export const Insight_CategorySchema: GenEnum<Insight_Category> = /*@__PURE__*/
  enumDesc(file_google_cloud_recommender_v1beta1_insight, 0, 0);

/**
 * Insight severity levels.
 *
 * @generated from enum google.cloud.recommender.v1beta1.Insight.Severity
 */
export enum Insight_Severity {
  /**
   * Insight has unspecified severity.
   *
   * @generated from enum value: SEVERITY_UNSPECIFIED = 0;
   */
  SEVERITY_UNSPECIFIED = 0,

  /**
   * Insight has low severity.
   *
   * @generated from enum value: LOW = 1;
   */
  LOW = 1,

  /**
   * Insight has medium severity.
   *
   * @generated from enum value: MEDIUM = 2;
   */
  MEDIUM = 2,

  /**
   * Insight has high severity.
   *
   * @generated from enum value: HIGH = 3;
   */
  HIGH = 3,

  /**
   * Insight has critical severity.
   *
   * @generated from enum value: CRITICAL = 4;
   */
  CRITICAL = 4,
}

/**
 * Describes the enum google.cloud.recommender.v1beta1.Insight.Severity.
 */
export const Insight_SeveritySchema: GenEnum<Insight_Severity> = /*@__PURE__*/
  enumDesc(file_google_cloud_recommender_v1beta1_insight, 0, 1);

/**
 * Information related to insight state.
 *
 * @generated from message google.cloud.recommender.v1beta1.InsightStateInfo
 */
export type InsightStateInfo = Message<"google.cloud.recommender.v1beta1.InsightStateInfo"> & {
  /**
   * Insight state.
   *
   * @generated from field: google.cloud.recommender.v1beta1.InsightStateInfo.State state = 1;
   */
  state: InsightStateInfo_State;

  /**
   * A map of metadata for the state, provided by user or automations systems.
   *
   * @generated from field: map<string, string> state_metadata = 2;
   */
  stateMetadata: { [key: string]: string };
};

/**
 * Describes the message google.cloud.recommender.v1beta1.InsightStateInfo.
 * Use `create(InsightStateInfoSchema)` to create a new message.
 */
export const InsightStateInfoSchema: GenMessage<InsightStateInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_recommender_v1beta1_insight, 1);

/**
 * Represents insight state.
 *
 * @generated from enum google.cloud.recommender.v1beta1.InsightStateInfo.State
 */
export enum InsightStateInfo_State {
  /**
   * Unspecified state.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Insight is active. Content for ACTIVE insights can be updated by Google.
   * ACTIVE insights can be marked DISMISSED OR ACCEPTED.
   *
   * @generated from enum value: ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * Some action has been taken based on this insight. Insights become
   * accepted when a recommendation derived from the insight has been marked
   * CLAIMED, SUCCEEDED, or FAILED. ACTIVE insights can also be marked
   * ACCEPTED explicitly. Content for ACCEPTED insights is immutable. ACCEPTED
   * insights can only be marked ACCEPTED (which may update state metadata).
   *
   * @generated from enum value: ACCEPTED = 2;
   */
  ACCEPTED = 2,

  /**
   * Insight is dismissed. Content for DISMISSED insights can be updated by
   * Google. DISMISSED insights can be marked as ACTIVE.
   *
   * @generated from enum value: DISMISSED = 3;
   */
  DISMISSED = 3,
}

/**
 * Describes the enum google.cloud.recommender.v1beta1.InsightStateInfo.State.
 */
export const InsightStateInfo_StateSchema: GenEnum<InsightStateInfo_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_recommender_v1beta1_insight, 1, 0);

/**
 * The type of insight.
 *
 * @generated from message google.cloud.recommender.v1beta1.InsightType
 */
export type InsightType = Message<"google.cloud.recommender.v1beta1.InsightType"> & {
  /**
   * The insight_type’s name in format insightTypes/{insight_type}
   * eg: insightTypes/google.iam.policy.Insight
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.recommender.v1beta1.InsightType.
 * Use `create(InsightTypeSchema)` to create a new message.
 */
export const InsightTypeSchema: GenMessage<InsightType> = /*@__PURE__*/
  messageDesc(file_google_cloud_recommender_v1beta1_insight, 2);
