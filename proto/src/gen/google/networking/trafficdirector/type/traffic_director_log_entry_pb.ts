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
// @generated from file google/networking/trafficdirector/type/traffic_director_log_entry.proto (package google.networking.trafficdirector.type, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/networking/trafficdirector/type/traffic_director_log_entry.proto.
 */
export const file_google_networking_trafficdirector_type_traffic_director_log_entry: GenFile = /*@__PURE__*/
  fileDesc("Ckdnb29nbGUvbmV0d29ya2luZy90cmFmZmljZGlyZWN0b3IvdHlwZS90cmFmZmljX2RpcmVjdG9yX2xvZ19lbnRyeS5wcm90bxImZ29vZ2xlLm5ldHdvcmtpbmcudHJhZmZpY2RpcmVjdG9yLnR5cGUixwQKF1RyYWZmaWNEaXJlY3RvckxvZ0VudHJ5Eg8KB25vZGVfaWQYASABKAkSDwoHbm9kZV9pcBgCIAEoCRITCgtkZXNjcmlwdGlvbhgEIAEoCRJfCgtjbGllbnRfdHlwZRgFIAEoDjJKLmdvb2dsZS5uZXR3b3JraW5nLnRyYWZmaWNkaXJlY3Rvci50eXBlLlRyYWZmaWNEaXJlY3RvckxvZ0VudHJ5LkNsaWVudFR5cGUSFgoOY2xpZW50X3ZlcnNpb24YBiABKAkScgoVdHJhbnNwb3J0X2FwaV92ZXJzaW9uGAcgASgOMlMuZ29vZ2xlLm5ldHdvcmtpbmcudHJhZmZpY2RpcmVjdG9yLnR5cGUuVHJhZmZpY0RpcmVjdG9yTG9nRW50cnkuVHJhbnNwb3J0QXBpVmVyc2lvbiK5AQoKQ2xpZW50VHlwZRIbChdDTElFTlRfVFlQRV9VTlNQRUNJRklFRBAAEgkKBUVOVk9ZEAESDQoJR1JQQ19KQVZBEAISDAoIR1JQQ19DUFAQAxIPCgtHUlBDX1BZVEhPThAEEgsKB0dSUENfR08QBRINCglHUlBDX1JVQlkQBhIMCghHUlBDX1BIUBAHEg0KCUdSUENfTk9ERRAIEg8KC0dSUENfQ1NIQVJQEAkSCwoHVU5LTk9XThAKIkwKE1RyYW5zcG9ydEFwaVZlcnNpb24SJQohVFJBTlNQT1JUX0FQSV9WRVJTSU9OX1VOU1BFQ0lGSUVEEAASBgoCVjIQARIGCgJWMxACQqwCCipjb20uZ29vZ2xlLm5ldHdvcmtpbmcudHJhZmZpY2RpcmVjdG9yLnR5cGVCHFRyYWZmaWNEaXJlY3RvckxvZ0VudHJ5UHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9uZXR3b3JraW5nL3RyYWZmaWNkaXJlY3Rvci90eXBlogIFVFJGQ0SqAixHb29nbGUuQ2xvdWQuTmV0d29ya2luZy5UcmFmZmljRGlyZWN0b3IuVHlwZcoCLEdvb2dsZVxDbG91ZFxOZXR3b3JraW5nXFRyYWZmaWNEaXJlY3RvclxUeXBl6gIwR29vZ2xlOjpDbG91ZDo6TmV0d29ya2luZzo6VHJhZmZpY0RpcmVjdG9yOjpUeXBlYgZwcm90bzM");

/**
 * A common proto for describing how the Traffic Director handles
 * xDS-connections/requests/responses.
 *
 * @generated from message google.networking.trafficdirector.type.TrafficDirectorLogEntry
 */
export type TrafficDirectorLogEntry = Message<"google.networking.trafficdirector.type.TrafficDirectorLogEntry"> & {
  /**
   * An ID of xDS-client connecting to the Traffic Director.
   *
   * @generated from field: string node_id = 1;
   */
  nodeId: string;

  /**
   * The string representation of IPv4 or IPv6 address of xDS-client
   * connecting to the Traffic Director.
   * IPv4 address must be in the format defined in RFC791, four octets separated
   * by a period. Size of a string is between 7-15 characters. Example: 1.2.3.4
   * IPv6 address must be in one of the formats defined in RFC4291. Size of a
   * string is between 7-39 characters. Example: 2001:DB8:0:0:8:800:200C:417A
   *
   * @generated from field: string node_ip = 2;
   */
  nodeIp: string;

  /**
   * A free text describing details of the event.
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * Type of xDS-client connecting to Traffic Director
   *
   * @generated from field: google.networking.trafficdirector.type.TrafficDirectorLogEntry.ClientType client_type = 5;
   */
  clientType: TrafficDirectorLogEntry_ClientType;

  /**
   * The version of xDS-client connecting to Traffic Director.
   *
   * @generated from field: string client_version = 6;
   */
  clientVersion: string;

  /**
   * The xDS API version used by xDS clients connecting to Traffic Director.
   *
   * @generated from field: google.networking.trafficdirector.type.TrafficDirectorLogEntry.TransportApiVersion transport_api_version = 7;
   */
  transportApiVersion: TrafficDirectorLogEntry_TransportApiVersion;
};

/**
 * Describes the message google.networking.trafficdirector.type.TrafficDirectorLogEntry.
 * Use `create(TrafficDirectorLogEntrySchema)` to create a new message.
 */
export const TrafficDirectorLogEntrySchema: GenMessage<TrafficDirectorLogEntry> = /*@__PURE__*/
  messageDesc(file_google_networking_trafficdirector_type_traffic_director_log_entry, 0);

/**
 * Defines possible values of client type.
 *
 * @generated from enum google.networking.trafficdirector.type.TrafficDirectorLogEntry.ClientType
 */
export enum TrafficDirectorLogEntry_ClientType {
  /**
   * Unspecified.
   *
   * @generated from enum value: CLIENT_TYPE_UNSPECIFIED = 0;
   */
  CLIENT_TYPE_UNSPECIFIED = 0,

  /**
   * Envoy client.
   *
   * @generated from enum value: ENVOY = 1;
   */
  ENVOY = 1,

  /**
   * gRPC Java client.
   *
   * @generated from enum value: GRPC_JAVA = 2;
   */
  GRPC_JAVA = 2,

  /**
   * gRPC C++ client.
   *
   * @generated from enum value: GRPC_CPP = 3;
   */
  GRPC_CPP = 3,

  /**
   * gRPC Python client.
   *
   * @generated from enum value: GRPC_PYTHON = 4;
   */
  GRPC_PYTHON = 4,

  /**
   * gRPC Go client.
   *
   * @generated from enum value: GRPC_GO = 5;
   */
  GRPC_GO = 5,

  /**
   * gRPC Ruby client.
   *
   * @generated from enum value: GRPC_RUBY = 6;
   */
  GRPC_RUBY = 6,

  /**
   * gRPC Ruby client.
   *
   * @generated from enum value: GRPC_PHP = 7;
   */
  GRPC_PHP = 7,

  /**
   * gRPC Node client.
   *
   * @generated from enum value: GRPC_NODE = 8;
   */
  GRPC_NODE = 8,

  /**
   * gRPC CSharp client.
   *
   * @generated from enum value: GRPC_CSHARP = 9;
   */
  GRPC_CSHARP = 9,

  /**
   * unknown client type.
   *
   * @generated from enum value: UNKNOWN = 10;
   */
  UNKNOWN = 10,
}

/**
 * Describes the enum google.networking.trafficdirector.type.TrafficDirectorLogEntry.ClientType.
 */
export const TrafficDirectorLogEntry_ClientTypeSchema: GenEnum<TrafficDirectorLogEntry_ClientType> = /*@__PURE__*/
  enumDesc(file_google_networking_trafficdirector_type_traffic_director_log_entry, 0, 0);

/**
 * Defines possible values of API version.
 *
 * @generated from enum google.networking.trafficdirector.type.TrafficDirectorLogEntry.TransportApiVersion
 */
export enum TrafficDirectorLogEntry_TransportApiVersion {
  /**
   * Unspecified.
   *
   * @generated from enum value: TRANSPORT_API_VERSION_UNSPECIFIED = 0;
   */
  TRANSPORT_API_VERSION_UNSPECIFIED = 0,

  /**
   * v2 xDS version.
   *
   * @generated from enum value: V2 = 1;
   */
  V2 = 1,

  /**
   * v3 xDS version.
   *
   * @generated from enum value: V3 = 2;
   */
  V3 = 2,
}

/**
 * Describes the enum google.networking.trafficdirector.type.TrafficDirectorLogEntry.TransportApiVersion.
 */
export const TrafficDirectorLogEntry_TransportApiVersionSchema: GenEnum<TrafficDirectorLogEntry_TransportApiVersion> = /*@__PURE__*/
  enumDesc(file_google_networking_trafficdirector_type_traffic_director_log_entry, 0, 1);
