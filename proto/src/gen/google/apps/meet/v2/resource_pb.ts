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
// @generated from file google/apps/meet/v2/resource.proto (package google.apps.meet.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/apps/meet/v2/resource.proto.
 */
export const file_google_apps_meet_v2_resource: GenFile = /*@__PURE__*/
  fileDesc("CiJnb29nbGUvYXBwcy9tZWV0L3YyL3Jlc291cmNlLnByb3RvEhNnb29nbGUuYXBwcy5tZWV0LnYyIvMBCgVTcGFjZRIRCgRuYW1lGAEgASgJQgPgQQUSGAoLbWVldGluZ191cmkYAiABKAlCA+BBAxIZCgxtZWV0aW5nX2NvZGUYAyABKAlCA+BBAxIwCgZjb25maWcYBSABKAsyIC5nb29nbGUuYXBwcy5tZWV0LnYyLlNwYWNlQ29uZmlnEkAKEWFjdGl2ZV9jb25mZXJlbmNlGAYgASgLMiUuZ29vZ2xlLmFwcHMubWVldC52Mi5BY3RpdmVDb25mZXJlbmNlOi7qQSsKGW1lZXQuZ29vZ2xlYXBpcy5jb20vU3BhY2USDnNwYWNlcy97c3BhY2V9IlsKEEFjdGl2ZUNvbmZlcmVuY2USRwoRY29uZmVyZW5jZV9yZWNvcmQYASABKAlCLOBBA/pBJgokbWVldC5nb29nbGVhcGlzLmNvbS9Db25mZXJlbmNlUmVjb3JkIscCCgtTcGFjZUNvbmZpZxJACgthY2Nlc3NfdHlwZRgBIAEoDjIrLmdvb2dsZS5hcHBzLm1lZXQudjIuU3BhY2VDb25maWcuQWNjZXNzVHlwZRJNChJlbnRyeV9wb2ludF9hY2Nlc3MYAiABKA4yMS5nb29nbGUuYXBwcy5tZWV0LnYyLlNwYWNlQ29uZmlnLkVudHJ5UG9pbnRBY2Nlc3MiUAoKQWNjZXNzVHlwZRIbChdBQ0NFU1NfVFlQRV9VTlNQRUNJRklFRBAAEggKBE9QRU4QARILCgdUUlVTVEVEEAISDgoKUkVTVFJJQ1RFRBADIlUKEEVudHJ5UG9pbnRBY2Nlc3MSIgoeRU5UUllfUE9JTlRfQUNDRVNTX1VOU1BFQ0lGSUVEEAASBwoDQUxMEAESFAoQQ1JFQVRPUl9BUFBfT05MWRACIuwCChBDb25mZXJlbmNlUmVjb3JkEhEKBG5hbWUYASABKAlCA+BBCBIzCgpzdGFydF90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjEKCGVuZF90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjQKC2V4cGlyZV90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjAKBXNwYWNlGAUgASgJQiHgQQP6QRsKGW1lZXQuZ29vZ2xlYXBpcy5jb20vU3BhY2U6depBcgokbWVldC5nb29nbGVhcGlzLmNvbS9Db25mZXJlbmNlUmVjb3JkEiVjb25mZXJlbmNlUmVjb3Jkcy97Y29uZmVyZW5jZV9yZWNvcmR9KhFjb25mZXJlbmNlUmVjb3JkczIQY29uZmVyZW5jZVJlY29yZCLUAwoLUGFydGljaXBhbnQSOgoNc2lnbmVkaW5fdXNlchgEIAEoCzIhLmdvb2dsZS5hcHBzLm1lZXQudjIuU2lnbmVkaW5Vc2VySAASPAoOYW5vbnltb3VzX3VzZXIYBSABKAsyIi5nb29nbGUuYXBwcy5tZWV0LnYyLkFub255bW91c1VzZXJIABI0CgpwaG9uZV91c2VyGAYgASgLMh4uZ29vZ2xlLmFwcHMubWVldC52Mi5QaG9uZVVzZXJIABIRCgRuYW1lGAEgASgJQgPgQQMSPAoTZWFybGllc3Rfc3RhcnRfdGltZRgHIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI4Cg9sYXRlc3RfZW5kX3RpbWUYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQM6gQHqQX4KH21lZXQuZ29vZ2xlYXBpcy5jb20vUGFydGljaXBhbnQSQGNvbmZlcmVuY2VSZWNvcmRzL3tjb25mZXJlbmNlX3JlY29yZH0vcGFydGljaXBhbnRzL3twYXJ0aWNpcGFudH0qDHBhcnRpY2lwYW50czILcGFydGljaXBhbnRCBgoEdXNlciLTAgoSUGFydGljaXBhbnRTZXNzaW9uEhEKBG5hbWUYASABKAlCA+BBCBIzCgpzdGFydF90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjEKCGVuZF90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDOsEB6kG9AQombWVldC5nb29nbGVhcGlzLmNvbS9QYXJ0aWNpcGFudFNlc3Npb24SamNvbmZlcmVuY2VSZWNvcmRzL3tjb25mZXJlbmNlX3JlY29yZH0vcGFydGljaXBhbnRzL3twYXJ0aWNpcGFudH0vcGFydGljaXBhbnRTZXNzaW9ucy97cGFydGljaXBhbnRfc2Vzc2lvbn0qE3BhcnRpY2lwYW50U2Vzc2lvbnMyEnBhcnRpY2lwYW50U2Vzc2lvbiI8CgxTaWduZWRpblVzZXISEQoEdXNlchgBIAEoCUID4EEDEhkKDGRpc3BsYXlfbmFtZRgCIAEoCUID4EEDIioKDUFub255bW91c1VzZXISGQoMZGlzcGxheV9uYW1lGAEgASgJQgPgQQMiJgoJUGhvbmVVc2VyEhkKDGRpc3BsYXlfbmFtZRgBIAEoCUID4EEDIt0DCglSZWNvcmRpbmcSRwoRZHJpdmVfZGVzdGluYXRpb24YBiABKAsyJS5nb29nbGUuYXBwcy5tZWV0LnYyLkRyaXZlRGVzdGluYXRpb25CA+BBA0gAEhEKBG5hbWUYASABKAlCA+BBAxI4CgVzdGF0ZRgDIAEoDjIkLmdvb2dsZS5hcHBzLm1lZXQudjIuUmVjb3JkaW5nLlN0YXRlQgPgQQMSMwoKc3RhcnRfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIxCghlbmRfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAyJKCgVTdGF0ZRIVChFTVEFURV9VTlNQRUNJRklFRBAAEgsKB1NUQVJURUQQARIJCgVFTkRFRBACEhIKDkZJTEVfR0VORVJBVEVEEAM6d+pBdAodbWVldC5nb29nbGVhcGlzLmNvbS9SZWNvcmRpbmcSPGNvbmZlcmVuY2VSZWNvcmRzL3tjb25mZXJlbmNlX3JlY29yZH0vcmVjb3JkaW5ncy97cmVjb3JkaW5nfSoKcmVjb3JkaW5nczIJcmVjb3JkaW5nQg0KC2Rlc3RpbmF0aW9uIj4KEERyaXZlRGVzdGluYXRpb24SEQoEZmlsZRgBIAEoCUID4EEDEhcKCmV4cG9ydF91cmkYAiABKAlCA+BBAyLiAwoKVHJhbnNjcmlwdBJFChBkb2NzX2Rlc3RpbmF0aW9uGAYgASgLMiQuZ29vZ2xlLmFwcHMubWVldC52Mi5Eb2NzRGVzdGluYXRpb25CA+BBA0gAEhEKBG5hbWUYASABKAlCA+BBAxI5CgVzdGF0ZRgDIAEoDjIlLmdvb2dsZS5hcHBzLm1lZXQudjIuVHJhbnNjcmlwdC5TdGF0ZUID4EEDEjMKCnN0YXJ0X3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSMQoIZW5kX3RpbWUYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMiSgoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABILCgdTVEFSVEVEEAESCQoFRU5ERUQQAhISCg5GSUxFX0dFTkVSQVRFRBADOnzqQXkKHm1lZXQuZ29vZ2xlYXBpcy5jb20vVHJhbnNjcmlwdBI+Y29uZmVyZW5jZVJlY29yZHMve2NvbmZlcmVuY2VfcmVjb3JkfS90cmFuc2NyaXB0cy97dHJhbnNjcmlwdH0qC3RyYW5zY3JpcHRzMgp0cmFuc2NyaXB0Qg0KC2Rlc3RpbmF0aW9uIkEKD0RvY3NEZXN0aW5hdGlvbhIVCghkb2N1bWVudBgBIAEoCUID4EEDEhcKCmV4cG9ydF91cmkYAiABKAlCA+BBAyKZAwoPVHJhbnNjcmlwdEVudHJ5EhEKBG5hbWUYASABKAlCA+BBAxI8CgtwYXJ0aWNpcGFudBgCIAEoCUIn4EED+kEhCh9tZWV0Lmdvb2dsZWFwaXMuY29tL1BhcnRpY2lwYW50EhEKBHRleHQYAyABKAlCA+BBAxIaCg1sYW5ndWFnZV9jb2RlGAQgASgJQgPgQQMSMwoKc3RhcnRfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIxCghlbmRfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAzqdAepBmQEKI21lZXQuZ29vZ2xlYXBpcy5jb20vVHJhbnNjcmlwdEVudHJ5Ek5jb25mZXJlbmNlUmVjb3Jkcy97Y29uZmVyZW5jZV9yZWNvcmR9L3RyYW5zY3JpcHRzL3t0cmFuc2NyaXB0fS9lbnRyaWVzL3tlbnRyeX0qEXRyYW5zY3JpcHRFbnRyaWVzMg90cmFuc2NyaXB0RW50cnlCogEKF2NvbS5nb29nbGUuYXBwcy5tZWV0LnYyQg1SZXNvdXJjZVByb3RvUAFaMWNsb3VkLmdvb2dsZS5jb20vZ28vYXBwcy9tZWV0L2FwaXYyL21lZXRwYjttZWV0cGKqAhNHb29nbGUuQXBwcy5NZWV0LlYyygITR29vZ2xlXEFwcHNcTWVldFxWMuoCFkdvb2dsZTo6QXBwczo6TWVldDo6VjJiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Virtual place where conferences are held. Only one active conference can be
 * held in one space at any given time.
 *
 * @generated from message google.apps.meet.v2.Space
 */
export type Space = Message<"google.apps.meet.v2.Space"> & {
  /**
   * Immutable. Resource name of the space.
   * Format: `spaces/{space}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. URI used to join meetings, such as
   * `https://meet.google.com/abc-mnop-xyz`.
   *
   * @generated from field: string meeting_uri = 2;
   */
  meetingUri: string;

  /**
   * Output only. Type friendly code to join the meeting. Format:
   * `[a-z]+-[a-z]+-[a-z]+` such as `abc-mnop-xyz`. The maximum length is 128
   * characters. Can only be used as an alias of the space ID to get the space.
   *
   * @generated from field: string meeting_code = 3;
   */
  meetingCode: string;

  /**
   * Configuration pertaining to the meeting space.
   *
   * @generated from field: google.apps.meet.v2.SpaceConfig config = 5;
   */
  config?: SpaceConfig;

  /**
   * Active conference, if it exists.
   *
   * @generated from field: google.apps.meet.v2.ActiveConference active_conference = 6;
   */
  activeConference?: ActiveConference;
};

/**
 * Describes the message google.apps.meet.v2.Space.
 * Use `create(SpaceSchema)` to create a new message.
 */
export const SpaceSchema: GenMessage<Space> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 0);

/**
 * Active conference.
 *
 * @generated from message google.apps.meet.v2.ActiveConference
 */
export type ActiveConference = Message<"google.apps.meet.v2.ActiveConference"> & {
  /**
   * Output only. Reference to 'ConferenceRecord' resource.
   * Format: `conferenceRecords/{conference_record}` where `{conference_record}`
   * is a unique ID for each instance of a call within a space.
   *
   * @generated from field: string conference_record = 1;
   */
  conferenceRecord: string;
};

/**
 * Describes the message google.apps.meet.v2.ActiveConference.
 * Use `create(ActiveConferenceSchema)` to create a new message.
 */
export const ActiveConferenceSchema: GenMessage<ActiveConference> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 1);

/**
 * The configuration pertaining to a meeting space.
 *
 * @generated from message google.apps.meet.v2.SpaceConfig
 */
export type SpaceConfig = Message<"google.apps.meet.v2.SpaceConfig"> & {
  /**
   * Access type of the meeting space that determines who can join without
   * knocking. Default: The user's default access settings.  Controlled by the
   * user's admin for enterprise users or RESTRICTED.
   *
   * @generated from field: google.apps.meet.v2.SpaceConfig.AccessType access_type = 1;
   */
  accessType: SpaceConfig_AccessType;

  /**
   * Defines the entry points that can be used to join meetings hosted in this
   * meeting space.
   * Default: EntryPointAccess.ALL
   *
   * @generated from field: google.apps.meet.v2.SpaceConfig.EntryPointAccess entry_point_access = 2;
   */
  entryPointAccess: SpaceConfig_EntryPointAccess;
};

/**
 * Describes the message google.apps.meet.v2.SpaceConfig.
 * Use `create(SpaceConfigSchema)` to create a new message.
 */
export const SpaceConfigSchema: GenMessage<SpaceConfig> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 2);

/**
 * Possible access types for a meeting space.
 *
 * @generated from enum google.apps.meet.v2.SpaceConfig.AccessType
 */
export enum SpaceConfig_AccessType {
  /**
   * Default value specified by the user's organization.
   * Note: This is never returned, as the configured access type is
   * returned instead.
   *
   * @generated from enum value: ACCESS_TYPE_UNSPECIFIED = 0;
   */
  ACCESS_TYPE_UNSPECIFIED = 0,

  /**
   * Anyone with the join information (for example, the URL or phone access
   * information) can join without knocking.
   *
   * @generated from enum value: OPEN = 1;
   */
  OPEN = 1,

  /**
   * Members of the host's organization, invited external users, and dial-in
   * users can join without knocking. Everyone else must knock.
   *
   * @generated from enum value: TRUSTED = 2;
   */
  TRUSTED = 2,

  /**
   * Only invitees can join without knocking. Everyone else must knock.
   *
   * @generated from enum value: RESTRICTED = 3;
   */
  RESTRICTED = 3,
}

/**
 * Describes the enum google.apps.meet.v2.SpaceConfig.AccessType.
 */
export const SpaceConfig_AccessTypeSchema: GenEnum<SpaceConfig_AccessType> = /*@__PURE__*/
  enumDesc(file_google_apps_meet_v2_resource, 2, 0);

/**
 * Entry points that can be used to join a meeting.  Example:
 * `meet.google.com`, the Meet Embed SDK Web, or a mobile application.
 *
 * @generated from enum google.apps.meet.v2.SpaceConfig.EntryPointAccess
 */
export enum SpaceConfig_EntryPointAccess {
  /**
   * Unused.
   *
   * @generated from enum value: ENTRY_POINT_ACCESS_UNSPECIFIED = 0;
   */
  ENTRY_POINT_ACCESS_UNSPECIFIED = 0,

  /**
   * All entry points are allowed.
   *
   * @generated from enum value: ALL = 1;
   */
  ALL = 1,

  /**
   * Only entry points owned by the Google Cloud project that created the
   * space can be used to join meetings in this space. Apps can use the Meet
   * Embed SDK Web or mobile Meet SDKs to create owned entry points.
   *
   * @generated from enum value: CREATOR_APP_ONLY = 2;
   */
  CREATOR_APP_ONLY = 2,
}

/**
 * Describes the enum google.apps.meet.v2.SpaceConfig.EntryPointAccess.
 */
export const SpaceConfig_EntryPointAccessSchema: GenEnum<SpaceConfig_EntryPointAccess> = /*@__PURE__*/
  enumDesc(file_google_apps_meet_v2_resource, 2, 1);

/**
 * Single instance of a meeting held in a space.
 *
 * @generated from message google.apps.meet.v2.ConferenceRecord
 */
export type ConferenceRecord = Message<"google.apps.meet.v2.ConferenceRecord"> & {
  /**
   * Identifier. Resource name of the conference record.
   * Format: `conferenceRecords/{conference_record}` where `{conference_record}`
   * is a unique ID for each instance of a call within a space.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Timestamp when the conference started. Always set.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * Output only. Timestamp when the conference ended.
   * Set for past conferences. Unset if the conference is ongoing.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 3;
   */
  endTime?: Timestamp;

  /**
   * Output only. Server enforced expiration time for when this conference
   * record resource is deleted. The resource is deleted 30 days after the
   * conference ends.
   *
   * @generated from field: google.protobuf.Timestamp expire_time = 4;
   */
  expireTime?: Timestamp;

  /**
   * Output only. The space where the conference was held.
   *
   * @generated from field: string space = 5;
   */
  space: string;
};

/**
 * Describes the message google.apps.meet.v2.ConferenceRecord.
 * Use `create(ConferenceRecordSchema)` to create a new message.
 */
export const ConferenceRecordSchema: GenMessage<ConferenceRecord> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 3);

/**
 * User who attended or is attending a conference.
 *
 * @generated from message google.apps.meet.v2.Participant
 */
export type Participant = Message<"google.apps.meet.v2.Participant"> & {
  /**
   * @generated from oneof google.apps.meet.v2.Participant.user
   */
  user: {
    /**
     * Signed-in user.
     *
     * @generated from field: google.apps.meet.v2.SignedinUser signedin_user = 4;
     */
    value: SignedinUser;
    case: "signedinUser";
  } | {
    /**
     * Anonymous user.
     *
     * @generated from field: google.apps.meet.v2.AnonymousUser anonymous_user = 5;
     */
    value: AnonymousUser;
    case: "anonymousUser";
  } | {
    /**
     * User calling from their phone.
     *
     * @generated from field: google.apps.meet.v2.PhoneUser phone_user = 6;
     */
    value: PhoneUser;
    case: "phoneUser";
  } | { case: undefined; value?: undefined };

  /**
   * Output only. Resource name of the participant.
   * Format: `conferenceRecords/{conference_record}/participants/{participant}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Time when the participant first joined the meeting.
   *
   * @generated from field: google.protobuf.Timestamp earliest_start_time = 7;
   */
  earliestStartTime?: Timestamp;

  /**
   * Output only. Time when the participant left the meeting for the last time.
   * This can be null if it's an active meeting.
   *
   * @generated from field: google.protobuf.Timestamp latest_end_time = 8;
   */
  latestEndTime?: Timestamp;
};

/**
 * Describes the message google.apps.meet.v2.Participant.
 * Use `create(ParticipantSchema)` to create a new message.
 */
export const ParticipantSchema: GenMessage<Participant> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 4);

/**
 * Refers to each unique join or leave session when a user joins a conference
 * from a device. Note that any time a user joins the conference a new unique ID
 * is assigned. That means if a user joins a space multiple times from the same
 * device, they're assigned different IDs, and are also be treated as different
 * participant sessions.
 *
 * @generated from message google.apps.meet.v2.ParticipantSession
 */
export type ParticipantSession = Message<"google.apps.meet.v2.ParticipantSession"> & {
  /**
   * Identifier. Session id.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Timestamp when the user session starts.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * Output only. Timestamp when the user session ends. Unset if the user
   * session hasn’t ended.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 3;
   */
  endTime?: Timestamp;
};

/**
 * Describes the message google.apps.meet.v2.ParticipantSession.
 * Use `create(ParticipantSessionSchema)` to create a new message.
 */
export const ParticipantSessionSchema: GenMessage<ParticipantSession> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 5);

/**
 * A signed-in user can be:
 * a) An individual joining from a personal computer, mobile device, or through
 * companion mode.
 * b) A robot account used by conference room devices.
 *
 * @generated from message google.apps.meet.v2.SignedinUser
 */
export type SignedinUser = Message<"google.apps.meet.v2.SignedinUser"> & {
  /**
   * Output only. Unique ID for the user. Interoperable with Admin SDK API and
   * People API. Format: `users/{user}`
   *
   * @generated from field: string user = 1;
   */
  user: string;

  /**
   * Output only. For a personal device, it's the user's first name and last
   * name. For a robot account, it's the administrator-specified device name.
   * For example, "Altostrat Room".
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;
};

/**
 * Describes the message google.apps.meet.v2.SignedinUser.
 * Use `create(SignedinUserSchema)` to create a new message.
 */
export const SignedinUserSchema: GenMessage<SignedinUser> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 6);

/**
 * User who joins anonymously (meaning not signed into a Google Account).
 *
 * @generated from message google.apps.meet.v2.AnonymousUser
 */
export type AnonymousUser = Message<"google.apps.meet.v2.AnonymousUser"> & {
  /**
   * Output only. User provided name when they join a conference anonymously.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;
};

/**
 * Describes the message google.apps.meet.v2.AnonymousUser.
 * Use `create(AnonymousUserSchema)` to create a new message.
 */
export const AnonymousUserSchema: GenMessage<AnonymousUser> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 7);

/**
 * User dialing in from a phone where the user's identity is unknown because
 * they haven't signed in with a Google Account.
 *
 * @generated from message google.apps.meet.v2.PhoneUser
 */
export type PhoneUser = Message<"google.apps.meet.v2.PhoneUser"> & {
  /**
   * Output only. Partially redacted user's phone number when calling.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;
};

/**
 * Describes the message google.apps.meet.v2.PhoneUser.
 * Use `create(PhoneUserSchema)` to create a new message.
 */
export const PhoneUserSchema: GenMessage<PhoneUser> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 8);

/**
 * Metadata about a recording created during a conference.
 *
 * @generated from message google.apps.meet.v2.Recording
 */
export type Recording = Message<"google.apps.meet.v2.Recording"> & {
  /**
   * @generated from oneof google.apps.meet.v2.Recording.destination
   */
  destination: {
    /**
     * Output only. Recording is saved to Google Drive as an MP4 file. The
     * `drive_destination` includes the Drive `fileId` that can be used to
     * download the file using the `files.get` method of the Drive API.
     *
     * @generated from field: google.apps.meet.v2.DriveDestination drive_destination = 6;
     */
    value: DriveDestination;
    case: "driveDestination";
  } | { case: undefined; value?: undefined };

  /**
   * Output only. Resource name of the recording.
   * Format: `conferenceRecords/{conference_record}/recordings/{recording}`
   * where `{recording}` is a 1:1 mapping to each unique recording session
   * during the conference.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Current state.
   *
   * @generated from field: google.apps.meet.v2.Recording.State state = 3;
   */
  state: Recording_State;

  /**
   * Output only. Timestamp when the recording started.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * Output only. Timestamp when the recording ended.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;
};

/**
 * Describes the message google.apps.meet.v2.Recording.
 * Use `create(RecordingSchema)` to create a new message.
 */
export const RecordingSchema: GenMessage<Recording> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 9);

/**
 * Current state of the recording session.
 *
 * @generated from enum google.apps.meet.v2.Recording.State
 */
export enum Recording_State {
  /**
   * Default, never used.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * An active recording session has started.
   *
   * @generated from enum value: STARTED = 1;
   */
  STARTED = 1,

  /**
   * This recording session has ended, but the recording file hasn't been
   * generated yet.
   *
   * @generated from enum value: ENDED = 2;
   */
  ENDED = 2,

  /**
   * Recording file is generated and ready to download.
   *
   * @generated from enum value: FILE_GENERATED = 3;
   */
  FILE_GENERATED = 3,
}

/**
 * Describes the enum google.apps.meet.v2.Recording.State.
 */
export const Recording_StateSchema: GenEnum<Recording_State> = /*@__PURE__*/
  enumDesc(file_google_apps_meet_v2_resource, 9, 0);

/**
 * Export location where a recording file is saved in Google Drive.
 *
 * @generated from message google.apps.meet.v2.DriveDestination
 */
export type DriveDestination = Message<"google.apps.meet.v2.DriveDestination"> & {
  /**
   * Output only. The `fileId` for the underlying MP4 file. For example,
   * "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use `$ GET
   * https://www.googleapis.com/drive/v3/files/{$fileId}?alt=media` to download
   * the blob. For more information, see
   * https://developers.google.com/drive/api/v3/reference/files/get.
   *
   * @generated from field: string file = 1;
   */
  file: string;

  /**
   * Output only. Link used to play back the recording file in the browser. For
   * example, `https://drive.google.com/file/d/{$fileId}/view`.
   *
   * @generated from field: string export_uri = 2;
   */
  exportUri: string;
};

/**
 * Describes the message google.apps.meet.v2.DriveDestination.
 * Use `create(DriveDestinationSchema)` to create a new message.
 */
export const DriveDestinationSchema: GenMessage<DriveDestination> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 10);

/**
 * Metadata for a transcript generated from a conference. It refers to the ASR
 * (Automatic Speech Recognition) result of user's speech during the conference.
 *
 * @generated from message google.apps.meet.v2.Transcript
 */
export type Transcript = Message<"google.apps.meet.v2.Transcript"> & {
  /**
   * @generated from oneof google.apps.meet.v2.Transcript.destination
   */
  destination: {
    /**
     * Output only. Where the Google Docs transcript is saved.
     *
     * @generated from field: google.apps.meet.v2.DocsDestination docs_destination = 6;
     */
    value: DocsDestination;
    case: "docsDestination";
  } | { case: undefined; value?: undefined };

  /**
   * Output only. Resource name of the transcript.
   * Format: `conferenceRecords/{conference_record}/transcripts/{transcript}`,
   * where `{transcript}` is a 1:1 mapping to each unique transcription session
   * of the conference.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Current state.
   *
   * @generated from field: google.apps.meet.v2.Transcript.State state = 3;
   */
  state: Transcript_State;

  /**
   * Output only. Timestamp when the transcript started.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * Output only. Timestamp when the transcript stopped.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;
};

/**
 * Describes the message google.apps.meet.v2.Transcript.
 * Use `create(TranscriptSchema)` to create a new message.
 */
export const TranscriptSchema: GenMessage<Transcript> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 11);

/**
 * Current state of the transcript session.
 *
 * @generated from enum google.apps.meet.v2.Transcript.State
 */
export enum Transcript_State {
  /**
   * Default, never used.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * An active transcript session has started.
   *
   * @generated from enum value: STARTED = 1;
   */
  STARTED = 1,

  /**
   * This transcript session has ended, but the transcript file hasn't been
   * generated yet.
   *
   * @generated from enum value: ENDED = 2;
   */
  ENDED = 2,

  /**
   * Transcript file is generated and ready to download.
   *
   * @generated from enum value: FILE_GENERATED = 3;
   */
  FILE_GENERATED = 3,
}

/**
 * Describes the enum google.apps.meet.v2.Transcript.State.
 */
export const Transcript_StateSchema: GenEnum<Transcript_State> = /*@__PURE__*/
  enumDesc(file_google_apps_meet_v2_resource, 11, 0);

/**
 * Google Docs location where the transcript file is saved.
 *
 * @generated from message google.apps.meet.v2.DocsDestination
 */
export type DocsDestination = Message<"google.apps.meet.v2.DocsDestination"> & {
  /**
   * Output only. The document ID for the underlying Google Docs transcript
   * file. For example, "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use the
   * `documents.get` method of the Google Docs API
   * (https://developers.google.com/docs/api/reference/rest/v1/documents/get) to
   * fetch the content.
   *
   * @generated from field: string document = 1;
   */
  document: string;

  /**
   * Output only. URI for the Google Docs transcript file. Use
   * `https://docs.google.com/document/d/{$DocumentId}/view` to browse the
   * transcript in the browser.
   *
   * @generated from field: string export_uri = 2;
   */
  exportUri: string;
};

/**
 * Describes the message google.apps.meet.v2.DocsDestination.
 * Use `create(DocsDestinationSchema)` to create a new message.
 */
export const DocsDestinationSchema: GenMessage<DocsDestination> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 12);

/**
 * Single entry for one user’s speech during a transcript session.
 *
 * @generated from message google.apps.meet.v2.TranscriptEntry
 */
export type TranscriptEntry = Message<"google.apps.meet.v2.TranscriptEntry"> & {
  /**
   * Output only. Resource name of the entry. Format:
   * "conferenceRecords/{conference_record}/transcripts/{transcript}/entries/{entry}"
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Refers to the participant who speaks.
   *
   * @generated from field: string participant = 2;
   */
  participant: string;

  /**
   * Output only. The transcribed text of the participant's voice, at maximum
   * 10K words. Note that the limit is subject to change.
   *
   * @generated from field: string text = 3;
   */
  text: string;

  /**
   * Output only. Language of spoken text, such as "en-US".
   * IETF BCP 47 syntax (https://tools.ietf.org/html/bcp47)
   *
   * @generated from field: string language_code = 4;
   */
  languageCode: string;

  /**
   * Output only. Timestamp when the transcript entry started.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 5;
   */
  startTime?: Timestamp;

  /**
   * Output only. Timestamp when the transcript entry ended.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 6;
   */
  endTime?: Timestamp;
};

/**
 * Describes the message google.apps.meet.v2.TranscriptEntry.
 * Use `create(TranscriptEntrySchema)` to create a new message.
 */
export const TranscriptEntrySchema: GenMessage<TranscriptEntry> = /*@__PURE__*/
  messageDesc(file_google_apps_meet_v2_resource, 13);
