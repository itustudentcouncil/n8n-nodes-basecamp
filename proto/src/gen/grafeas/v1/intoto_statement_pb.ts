// Copyright 2021 The Grafeas Authors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file grafeas/v1/intoto_statement.proto (package grafeas.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp, Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { InTotoProvenance } from "./intoto_provenance_pb";
import { file_grafeas_v1_intoto_provenance } from "./intoto_provenance_pb";
import type { SlsaProvenance } from "./slsa_provenance_pb";
import { file_grafeas_v1_slsa_provenance } from "./slsa_provenance_pb";
import type { SlsaProvenanceZeroTwo } from "./slsa_provenance_zero_two_pb";
import { file_grafeas_v1_slsa_provenance_zero_two } from "./slsa_provenance_zero_two_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file grafeas/v1/intoto_statement.proto.
 */
export const file_grafeas_v1_intoto_statement: GenFile = /*@__PURE__*/
  fileDesc("CiFncmFmZWFzL3YxL2ludG90b19zdGF0ZW1lbnQucHJvdG8SCmdyYWZlYXMudjEiowIKD0luVG90b1N0YXRlbWVudBITCgR0eXBlGAEgASgJUgVfdHlwZRIkCgdzdWJqZWN0GAIgAygLMhMuZ3JhZmVhcy52MS5TdWJqZWN0EhYKDnByZWRpY2F0ZV90eXBlGAMgASgJEjIKCnByb3ZlbmFuY2UYBCABKAsyHC5ncmFmZWFzLnYxLkluVG90b1Byb3ZlbmFuY2VIABI1Cg9zbHNhX3Byb3ZlbmFuY2UYBSABKAsyGi5ncmFmZWFzLnYxLlNsc2FQcm92ZW5hbmNlSAASRQoYc2xzYV9wcm92ZW5hbmNlX3plcm9fdHdvGAYgASgLMiEuZ3JhZmVhcy52MS5TbHNhUHJvdmVuYW5jZVplcm9Ud29IAEILCglwcmVkaWNhdGUidwoHU3ViamVjdBIMCgRuYW1lGAEgASgJEi8KBmRpZ2VzdBgCIAMoCzIfLmdyYWZlYXMudjEuU3ViamVjdC5EaWdlc3RFbnRyeRotCgtEaWdlc3RFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIssMChZJblRvdG9TbHNhUHJvdmVuYW5jZVYxEhMKBHR5cGUYASABKAlSBV90eXBlEiQKB3N1YmplY3QYAiADKAsyEy5ncmFmZWFzLnYxLlN1YmplY3QSFgoOcHJlZGljYXRlX3R5cGUYAyABKAkSRgoJcHJlZGljYXRlGAQgASgLMjMuZ3JhZmVhcy52MS5JblRvdG9TbHNhUHJvdmVuYW5jZVYxLlNsc2FQcm92ZW5hbmNlVjEapAEKEFNsc2FQcm92ZW5hbmNlVjESTAoQYnVpbGRfZGVmaW5pdGlvbhgBIAEoCzIyLmdyYWZlYXMudjEuSW5Ub3RvU2xzYVByb3ZlbmFuY2VWMS5CdWlsZERlZmluaXRpb24SQgoLcnVuX2RldGFpbHMYAiABKAsyLS5ncmFmZWFzLnYxLkluVG90b1Nsc2FQcm92ZW5hbmNlVjEuUnVuRGV0YWlscxrnAQoPQnVpbGREZWZpbml0aW9uEhIKCmJ1aWxkX3R5cGUYASABKAkSNAoTZXh0ZXJuYWxfcGFyYW1ldGVycxgCIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSNAoTaW50ZXJuYWxfcGFyYW1ldGVycxgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSVAoVcmVzb2x2ZWRfZGVwZW5kZW5jaWVzGAQgAygLMjUuZ3JhZmVhcy52MS5JblRvdG9TbHNhUHJvdmVuYW5jZVYxLlJlc291cmNlRGVzY3JpcHRvchqaAwoSUmVzb3VyY2VEZXNjcmlwdG9yEgwKBG5hbWUYASABKAkSCwoDdXJpGAIgASgJElEKBmRpZ2VzdBgDIAMoCzJBLmdyYWZlYXMudjEuSW5Ub3RvU2xzYVByb3ZlbmFuY2VWMS5SZXNvdXJjZURlc2NyaXB0b3IuRGlnZXN0RW50cnkSDwoHY29udGVudBgEIAEoDBIZChFkb3dubG9hZF9sb2NhdGlvbhgFIAEoCRISCgptZWRpYV90eXBlGAYgASgJElsKC2Fubm90YXRpb25zGAcgAygLMkYuZ3JhZmVhcy52MS5JblRvdG9TbHNhUHJvdmVuYW5jZVYxLlJlc291cmNlRGVzY3JpcHRvci5Bbm5vdGF0aW9uc0VudHJ5Gi0KC0RpZ2VzdEVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEaSgoQQW5ub3RhdGlvbnNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBGuIBCgpSdW5EZXRhaWxzEkUKB2J1aWxkZXIYASABKAsyNC5ncmFmZWFzLnYxLkluVG90b1Nsc2FQcm92ZW5hbmNlVjEuUHJvdmVuYW5jZUJ1aWxkZXISQgoIbWV0YWRhdGEYAiABKAsyMC5ncmFmZWFzLnYxLkluVG90b1Nsc2FQcm92ZW5hbmNlVjEuQnVpbGRNZXRhZGF0YRJJCgpieXByb2R1Y3RzGAMgAygLMjUuZ3JhZmVhcy52MS5JblRvdG9TbHNhUHJvdmVuYW5jZVYxLlJlc291cmNlRGVzY3JpcHRvchr4AQoRUHJvdmVuYW5jZUJ1aWxkZXISCgoCaWQYASABKAkSUgoHdmVyc2lvbhgCIAMoCzJBLmdyYWZlYXMudjEuSW5Ub3RvU2xzYVByb3ZlbmFuY2VWMS5Qcm92ZW5hbmNlQnVpbGRlci5WZXJzaW9uRW50cnkSUwoUYnVpbGRlcl9kZXBlbmRlbmNpZXMYAyADKAsyNS5ncmFmZWFzLnYxLkluVG90b1Nsc2FQcm92ZW5hbmNlVjEuUmVzb3VyY2VEZXNjcmlwdG9yGi4KDFZlcnNpb25FbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGocBCg1CdWlsZE1ldGFkYXRhEhUKDWludm9jYXRpb25faWQYASABKAkSLgoKc3RhcnRlZF9vbhgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLwoLZmluaXNoZWRfb24YAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQmcKDWlvLmdyYWZlYXMudjFCFEluVG90b1N0YXRlbWVudFByb3RvUAFaOGdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvZ3JhZmVhcy92MTtncmFmZWFzogIDR1JBYgZwcm90bzM", [file_google_protobuf_struct, file_google_protobuf_timestamp, file_grafeas_v1_intoto_provenance, file_grafeas_v1_slsa_provenance, file_grafeas_v1_slsa_provenance_zero_two]);

/**
 * Spec defined at
 * https://github.com/in-toto/attestation/tree/main/spec#statement The
 * serialized InTotoStatement will be stored as Envelope.payload.
 * Envelope.payloadType is always "application/vnd.in-toto+json".
 *
 * @generated from message grafeas.v1.InTotoStatement
 */
export type InTotoStatement = Message<"grafeas.v1.InTotoStatement"> & {
  /**
   * Always `https://in-toto.io/Statement/v0.1`.
   *
   * @generated from field: string type = 1 [json_name = "_type"];
   */
  type: string;

  /**
   * @generated from field: repeated grafeas.v1.Subject subject = 2;
   */
  subject: Subject[];

  /**
   * `https://slsa.dev/provenance/v0.1` for SlsaProvenance.
   *
   * @generated from field: string predicate_type = 3;
   */
  predicateType: string;

  /**
   * @generated from oneof grafeas.v1.InTotoStatement.predicate
   */
  predicate: {
    /**
     * @generated from field: grafeas.v1.InTotoProvenance provenance = 4;
     */
    value: InTotoProvenance;
    case: "provenance";
  } | {
    /**
     * @generated from field: grafeas.v1.SlsaProvenance slsa_provenance = 5;
     */
    value: SlsaProvenance;
    case: "slsaProvenance";
  } | {
    /**
     * @generated from field: grafeas.v1.SlsaProvenanceZeroTwo slsa_provenance_zero_two = 6;
     */
    value: SlsaProvenanceZeroTwo;
    case: "slsaProvenanceZeroTwo";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message grafeas.v1.InTotoStatement.
 * Use `create(InTotoStatementSchema)` to create a new message.
 */
export const InTotoStatementSchema: GenMessage<InTotoStatement> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 0);

/**
 * @generated from message grafeas.v1.Subject
 */
export type Subject = Message<"grafeas.v1.Subject"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * `"<ALGORITHM>": "<HEX_VALUE>"`
   * Algorithms can be e.g. sha256, sha512
   * See
   * https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet
   *
   * @generated from field: map<string, string> digest = 2;
   */
  digest: { [key: string]: string };
};

/**
 * Describes the message grafeas.v1.Subject.
 * Use `create(SubjectSchema)` to create a new message.
 */
export const SubjectSchema: GenMessage<Subject> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 1);

/**
 * @generated from message grafeas.v1.InTotoSlsaProvenanceV1
 */
export type InTotoSlsaProvenanceV1 = Message<"grafeas.v1.InTotoSlsaProvenanceV1"> & {
  /**
   * InToto spec defined at
   * https://github.com/in-toto/attestation/tree/main/spec#statement
   *
   * @generated from field: string type = 1 [json_name = "_type"];
   */
  type: string;

  /**
   * @generated from field: repeated grafeas.v1.Subject subject = 2;
   */
  subject: Subject[];

  /**
   * @generated from field: string predicate_type = 3;
   */
  predicateType: string;

  /**
   * @generated from field: grafeas.v1.InTotoSlsaProvenanceV1.SlsaProvenanceV1 predicate = 4;
   */
  predicate?: InTotoSlsaProvenanceV1_SlsaProvenanceV1;
};

/**
 * Describes the message grafeas.v1.InTotoSlsaProvenanceV1.
 * Use `create(InTotoSlsaProvenanceV1Schema)` to create a new message.
 */
export const InTotoSlsaProvenanceV1Schema: GenMessage<InTotoSlsaProvenanceV1> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 2);

/**
 * Keep in sync with schema at
 * https://github.com/slsa-framework/slsa/blob/main/docs/provenance/schema/v1/provenance.proto
 * Builder renamed to ProvenanceBuilder because of Java conflicts.
 *
 * @generated from message grafeas.v1.InTotoSlsaProvenanceV1.SlsaProvenanceV1
 */
export type InTotoSlsaProvenanceV1_SlsaProvenanceV1 = Message<"grafeas.v1.InTotoSlsaProvenanceV1.SlsaProvenanceV1"> & {
  /**
   * @generated from field: grafeas.v1.InTotoSlsaProvenanceV1.BuildDefinition build_definition = 1;
   */
  buildDefinition?: InTotoSlsaProvenanceV1_BuildDefinition;

  /**
   * @generated from field: grafeas.v1.InTotoSlsaProvenanceV1.RunDetails run_details = 2;
   */
  runDetails?: InTotoSlsaProvenanceV1_RunDetails;
};

/**
 * Describes the message grafeas.v1.InTotoSlsaProvenanceV1.SlsaProvenanceV1.
 * Use `create(InTotoSlsaProvenanceV1_SlsaProvenanceV1Schema)` to create a new message.
 */
export const InTotoSlsaProvenanceV1_SlsaProvenanceV1Schema: GenMessage<InTotoSlsaProvenanceV1_SlsaProvenanceV1> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 2, 0);

/**
 * @generated from message grafeas.v1.InTotoSlsaProvenanceV1.BuildDefinition
 */
export type InTotoSlsaProvenanceV1_BuildDefinition = Message<"grafeas.v1.InTotoSlsaProvenanceV1.BuildDefinition"> & {
  /**
   * @generated from field: string build_type = 1;
   */
  buildType: string;

  /**
   * @generated from field: google.protobuf.Struct external_parameters = 2;
   */
  externalParameters?: JsonObject;

  /**
   * @generated from field: google.protobuf.Struct internal_parameters = 3;
   */
  internalParameters?: JsonObject;

  /**
   * @generated from field: repeated grafeas.v1.InTotoSlsaProvenanceV1.ResourceDescriptor resolved_dependencies = 4;
   */
  resolvedDependencies: InTotoSlsaProvenanceV1_ResourceDescriptor[];
};

/**
 * Describes the message grafeas.v1.InTotoSlsaProvenanceV1.BuildDefinition.
 * Use `create(InTotoSlsaProvenanceV1_BuildDefinitionSchema)` to create a new message.
 */
export const InTotoSlsaProvenanceV1_BuildDefinitionSchema: GenMessage<InTotoSlsaProvenanceV1_BuildDefinition> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 2, 1);

/**
 * @generated from message grafeas.v1.InTotoSlsaProvenanceV1.ResourceDescriptor
 */
export type InTotoSlsaProvenanceV1_ResourceDescriptor = Message<"grafeas.v1.InTotoSlsaProvenanceV1.ResourceDescriptor"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string uri = 2;
   */
  uri: string;

  /**
   * @generated from field: map<string, string> digest = 3;
   */
  digest: { [key: string]: string };

  /**
   * @generated from field: bytes content = 4;
   */
  content: Uint8Array;

  /**
   * @generated from field: string download_location = 5;
   */
  downloadLocation: string;

  /**
   * @generated from field: string media_type = 6;
   */
  mediaType: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> annotations = 7;
   */
  annotations: { [key: string]: Value };
};

/**
 * Describes the message grafeas.v1.InTotoSlsaProvenanceV1.ResourceDescriptor.
 * Use `create(InTotoSlsaProvenanceV1_ResourceDescriptorSchema)` to create a new message.
 */
export const InTotoSlsaProvenanceV1_ResourceDescriptorSchema: GenMessage<InTotoSlsaProvenanceV1_ResourceDescriptor> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 2, 2);

/**
 * @generated from message grafeas.v1.InTotoSlsaProvenanceV1.RunDetails
 */
export type InTotoSlsaProvenanceV1_RunDetails = Message<"grafeas.v1.InTotoSlsaProvenanceV1.RunDetails"> & {
  /**
   * @generated from field: grafeas.v1.InTotoSlsaProvenanceV1.ProvenanceBuilder builder = 1;
   */
  builder?: InTotoSlsaProvenanceV1_ProvenanceBuilder;

  /**
   * @generated from field: grafeas.v1.InTotoSlsaProvenanceV1.BuildMetadata metadata = 2;
   */
  metadata?: InTotoSlsaProvenanceV1_BuildMetadata;

  /**
   * @generated from field: repeated grafeas.v1.InTotoSlsaProvenanceV1.ResourceDescriptor byproducts = 3;
   */
  byproducts: InTotoSlsaProvenanceV1_ResourceDescriptor[];
};

/**
 * Describes the message grafeas.v1.InTotoSlsaProvenanceV1.RunDetails.
 * Use `create(InTotoSlsaProvenanceV1_RunDetailsSchema)` to create a new message.
 */
export const InTotoSlsaProvenanceV1_RunDetailsSchema: GenMessage<InTotoSlsaProvenanceV1_RunDetails> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 2, 3);

/**
 * @generated from message grafeas.v1.InTotoSlsaProvenanceV1.ProvenanceBuilder
 */
export type InTotoSlsaProvenanceV1_ProvenanceBuilder = Message<"grafeas.v1.InTotoSlsaProvenanceV1.ProvenanceBuilder"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: map<string, string> version = 2;
   */
  version: { [key: string]: string };

  /**
   * @generated from field: repeated grafeas.v1.InTotoSlsaProvenanceV1.ResourceDescriptor builder_dependencies = 3;
   */
  builderDependencies: InTotoSlsaProvenanceV1_ResourceDescriptor[];
};

/**
 * Describes the message grafeas.v1.InTotoSlsaProvenanceV1.ProvenanceBuilder.
 * Use `create(InTotoSlsaProvenanceV1_ProvenanceBuilderSchema)` to create a new message.
 */
export const InTotoSlsaProvenanceV1_ProvenanceBuilderSchema: GenMessage<InTotoSlsaProvenanceV1_ProvenanceBuilder> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 2, 4);

/**
 * @generated from message grafeas.v1.InTotoSlsaProvenanceV1.BuildMetadata
 */
export type InTotoSlsaProvenanceV1_BuildMetadata = Message<"grafeas.v1.InTotoSlsaProvenanceV1.BuildMetadata"> & {
  /**
   * @generated from field: string invocation_id = 1;
   */
  invocationId: string;

  /**
   * @generated from field: google.protobuf.Timestamp started_on = 2;
   */
  startedOn?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp finished_on = 3;
   */
  finishedOn?: Timestamp;
};

/**
 * Describes the message grafeas.v1.InTotoSlsaProvenanceV1.BuildMetadata.
 * Use `create(InTotoSlsaProvenanceV1_BuildMetadataSchema)` to create a new message.
 */
export const InTotoSlsaProvenanceV1_BuildMetadataSchema: GenMessage<InTotoSlsaProvenanceV1_BuildMetadata> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_intoto_statement, 2, 5);
