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
// @generated from file google/cloud/securitycenter/v1/cloud_armor.proto (package google.cloud.securitycenter.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v1/cloud_armor.proto.
 */
export const file_google_cloud_securitycenter_v1_cloud_armor: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjEvY2xvdWRfYXJtb3IucHJvdG8SHmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MSLeAgoKQ2xvdWRBcm1vchJHCg9zZWN1cml0eV9wb2xpY3kYASABKAsyLi5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjEuU2VjdXJpdHlQb2xpY3kSOgoIcmVxdWVzdHMYAiABKAsyKC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjEuUmVxdWVzdHMSTwoTYWRhcHRpdmVfcHJvdGVjdGlvbhgDIAEoCzIyLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MS5BZGFwdGl2ZVByb3RlY3Rpb24SNgoGYXR0YWNrGAQgASgLMiYuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYxLkF0dGFjaxIVCg10aHJlYXRfdmVjdG9yGAUgASgJEisKCGR1cmF0aW9uGAYgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uIj0KDlNlY3VyaXR5UG9saWN5EgwKBG5hbWUYASABKAkSDAoEdHlwZRgCIAEoCRIPCgdwcmV2aWV3GAMgASgIImoKCFJlcXVlc3RzEg0KBXJhdGlvGAEgASgBEhoKEnNob3J0X3Rlcm1fYWxsb3dlZBgCIAEoBRIZChFsb25nX3Rlcm1fYWxsb3dlZBgDIAEoBRIYChBsb25nX3Rlcm1fZGVuaWVkGAQgASgFIigKEkFkYXB0aXZlUHJvdGVjdGlvbhISCgpjb25maWRlbmNlGAEgASgBIkgKBkF0dGFjaxISCgp2b2x1bWVfcHBzGAEgASgFEhIKCnZvbHVtZV9icHMYAiABKAUSFgoOY2xhc3NpZmljYXRpb24YAyABKAlC6QEKImNvbS5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjFCD0Nsb3VkQXJtb3JQcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlY3VyaXR5Y2VudGVyL2FwaXYxL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCHkdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMcoCHkdvb2dsZVxDbG91ZFxTZWN1cml0eUNlbnRlclxWMeoCIUdvb2dsZTo6Q2xvdWQ6OlNlY3VyaXR5Q2VudGVyOjpWMWIGcHJvdG8z", [file_google_protobuf_duration]);

/**
 * Fields related to Google Cloud Armor findings.
 *
 * @generated from message google.cloud.securitycenter.v1.CloudArmor
 */
export type CloudArmor = Message<"google.cloud.securitycenter.v1.CloudArmor"> & {
  /**
   * Information about the [Google Cloud Armor security
   * policy](https://cloud.google.com/armor/docs/security-policy-overview)
   * relevant to the finding.
   *
   * @generated from field: google.cloud.securitycenter.v1.SecurityPolicy security_policy = 1;
   */
  securityPolicy?: SecurityPolicy;

  /**
   * Information about incoming requests evaluated by [Google Cloud Armor
   * security
   * policies](https://cloud.google.com/armor/docs/security-policy-overview).
   *
   * @generated from field: google.cloud.securitycenter.v1.Requests requests = 2;
   */
  requests?: Requests;

  /**
   * Information about potential Layer 7 DDoS attacks identified by [Google
   * Cloud Armor Adaptive
   * Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview).
   *
   * @generated from field: google.cloud.securitycenter.v1.AdaptiveProtection adaptive_protection = 3;
   */
  adaptiveProtection?: AdaptiveProtection;

  /**
   * Information about DDoS attack volume and classification.
   *
   * @generated from field: google.cloud.securitycenter.v1.Attack attack = 4;
   */
  attack?: Attack;

  /**
   * Distinguish between volumetric & protocol DDoS attack and
   * application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS
   * attacks, or "L_7" for Layer 7 DDoS attacks.
   *
   * @generated from field: string threat_vector = 5;
   */
  threatVector: string;

  /**
   * Duration of attack from the start until the current moment (updated every 5
   * minutes).
   *
   * @generated from field: google.protobuf.Duration duration = 6;
   */
  duration?: Duration;
};

/**
 * Describes the message google.cloud.securitycenter.v1.CloudArmor.
 * Use `create(CloudArmorSchema)` to create a new message.
 */
export const CloudArmorSchema: GenMessage<CloudArmor> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_cloud_armor, 0);

/**
 * Information about the [Google Cloud Armor security
 * policy](https://cloud.google.com/armor/docs/security-policy-overview)
 * relevant to the finding.
 *
 * @generated from message google.cloud.securitycenter.v1.SecurityPolicy
 */
export type SecurityPolicy = Message<"google.cloud.securitycenter.v1.SecurityPolicy"> & {
  /**
   * The name of the Google Cloud Armor security policy, for example,
   * "my-security-policy".
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The type of Google Cloud Armor security policy for example, 'backend
   * security policy', 'edge security policy', 'network edge security policy',
   * or 'always-on DDoS protection'.
   *
   * @generated from field: string type = 2;
   */
  type: string;

  /**
   * Whether or not the associated rule or policy is in preview mode.
   *
   * @generated from field: bool preview = 3;
   */
  preview: boolean;
};

/**
 * Describes the message google.cloud.securitycenter.v1.SecurityPolicy.
 * Use `create(SecurityPolicySchema)` to create a new message.
 */
export const SecurityPolicySchema: GenMessage<SecurityPolicy> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_cloud_armor, 1);

/**
 * Information about the requests relevant to the finding.
 *
 * @generated from message google.cloud.securitycenter.v1.Requests
 */
export type Requests = Message<"google.cloud.securitycenter.v1.Requests"> & {
  /**
   * For 'Increasing deny ratio', the ratio is the denied traffic divided by the
   * allowed traffic. For 'Allowed traffic spike', the ratio is the allowed
   * traffic in the short term divided by allowed traffic in the long term.
   *
   * @generated from field: double ratio = 1;
   */
  ratio: number;

  /**
   * Allowed RPS (requests per second) in the short term.
   *
   * @generated from field: int32 short_term_allowed = 2;
   */
  shortTermAllowed: number;

  /**
   * Allowed RPS (requests per second) over the long term.
   *
   * @generated from field: int32 long_term_allowed = 3;
   */
  longTermAllowed: number;

  /**
   * Denied RPS (requests per second) over the long term.
   *
   * @generated from field: int32 long_term_denied = 4;
   */
  longTermDenied: number;
};

/**
 * Describes the message google.cloud.securitycenter.v1.Requests.
 * Use `create(RequestsSchema)` to create a new message.
 */
export const RequestsSchema: GenMessage<Requests> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_cloud_armor, 2);

/**
 * Information about [Google Cloud Armor Adaptive
 * Protection](https://cloud.google.com/armor/docs/cloud-armor-overview#google-cloud-armor-adaptive-protection).
 *
 * @generated from message google.cloud.securitycenter.v1.AdaptiveProtection
 */
export type AdaptiveProtection = Message<"google.cloud.securitycenter.v1.AdaptiveProtection"> & {
  /**
   * A score of 0 means that there is low confidence that the detected event is
   * an actual attack. A score of 1 means that there is high confidence that the
   * detected event is an attack. See the [Adaptive Protection
   * documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning)
   * for further explanation.
   *
   * @generated from field: double confidence = 1;
   */
  confidence: number;
};

/**
 * Describes the message google.cloud.securitycenter.v1.AdaptiveProtection.
 * Use `create(AdaptiveProtectionSchema)` to create a new message.
 */
export const AdaptiveProtectionSchema: GenMessage<AdaptiveProtection> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_cloud_armor, 3);

/**
 * Information about DDoS attack volume and classification.
 *
 * @generated from message google.cloud.securitycenter.v1.Attack
 */
export type Attack = Message<"google.cloud.securitycenter.v1.Attack"> & {
  /**
   * Total PPS (packets per second) volume of attack.
   *
   * @generated from field: int32 volume_pps = 1;
   */
  volumePps: number;

  /**
   * Total BPS (bytes per second) volume of attack.
   *
   * @generated from field: int32 volume_bps = 2;
   */
  volumeBps: number;

  /**
   * Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'.
   *
   * @generated from field: string classification = 3;
   */
  classification: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1.Attack.
 * Use `create(AttackSchema)` to create a new message.
 */
export const AttackSchema: GenMessage<Attack> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_cloud_armor, 4);
