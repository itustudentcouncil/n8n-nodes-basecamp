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
// @generated from file grafeas/v1/dsse_attestation.proto (package grafeas.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Envelope } from "./common_pb";
import { file_grafeas_v1_common } from "./common_pb";
import type { InTotoStatement } from "./intoto_statement_pb";
import { file_grafeas_v1_intoto_statement } from "./intoto_statement_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file grafeas/v1/dsse_attestation.proto.
 */
export const file_grafeas_v1_dsse_attestation: GenFile = /*@__PURE__*/
  fileDesc("CiFncmFmZWFzL3YxL2Rzc2VfYXR0ZXN0YXRpb24ucHJvdG8SCmdyYWZlYXMudjEidgoTRFNTRUF0dGVzdGF0aW9uTm90ZRI2CgRoaW50GAEgASgLMiguZ3JhZmVhcy52MS5EU1NFQXR0ZXN0YXRpb25Ob3RlLkRTU0VIaW50GicKCERTU0VIaW50EhsKE2h1bWFuX3JlYWRhYmxlX25hbWUYASABKAkiiAEKGURTU0VBdHRlc3RhdGlvbk9jY3VycmVuY2USJgoIZW52ZWxvcGUYASABKAsyFC5ncmFmZWFzLnYxLkVudmVsb3BlEjAKCXN0YXRlbWVudBgCIAEoCzIbLmdyYWZlYXMudjEuSW5Ub3RvU3RhdGVtZW50SABCEQoPZGVjb2RlZF9wYXlsb2FkQlEKDWlvLmdyYWZlYXMudjFQAVo4Z29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9ncmFmZWFzL3YxO2dyYWZlYXOiAgNHUkFiBnByb3RvMw", [file_grafeas_v1_common, file_grafeas_v1_intoto_statement]);

/**
 * @generated from message grafeas.v1.DSSEAttestationNote
 */
export type DSSEAttestationNote = Message<"grafeas.v1.DSSEAttestationNote"> & {
  /**
   * DSSEHint hints at the purpose of the attestation authority.
   *
   * @generated from field: grafeas.v1.DSSEAttestationNote.DSSEHint hint = 1;
   */
  hint?: DSSEAttestationNote_DSSEHint;
};

/**
 * Describes the message grafeas.v1.DSSEAttestationNote.
 * Use `create(DSSEAttestationNoteSchema)` to create a new message.
 */
export const DSSEAttestationNoteSchema: GenMessage<DSSEAttestationNote> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_dsse_attestation, 0);

/**
 * This submessage provides human-readable hints about the purpose of the
 * authority. Because the name of a note acts as its resource reference, it is
 * important to disambiguate the canonical name of the Note (which might be a
 * UUID for security purposes) from "readable" names more suitable for debug
 * output. Note that these hints should not be used to look up authorities in
 * security sensitive contexts, such as when looking up attestations to
 * verify.
 *
 * @generated from message grafeas.v1.DSSEAttestationNote.DSSEHint
 */
export type DSSEAttestationNote_DSSEHint = Message<"grafeas.v1.DSSEAttestationNote.DSSEHint"> & {
  /**
   * Required. The human readable name of this attestation authority, for
   * example "cloudbuild-prod".
   *
   * @generated from field: string human_readable_name = 1;
   */
  humanReadableName: string;
};

/**
 * Describes the message grafeas.v1.DSSEAttestationNote.DSSEHint.
 * Use `create(DSSEAttestationNote_DSSEHintSchema)` to create a new message.
 */
export const DSSEAttestationNote_DSSEHintSchema: GenMessage<DSSEAttestationNote_DSSEHint> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_dsse_attestation, 0, 0);

/**
 * Deprecated. Prefer to use a regular Occurrence, and populate the
 * Envelope at the top level of the Occurrence.
 *
 * @generated from message grafeas.v1.DSSEAttestationOccurrence
 */
export type DSSEAttestationOccurrence = Message<"grafeas.v1.DSSEAttestationOccurrence"> & {
  /**
   * If doing something security critical, make sure to verify the signatures in
   * this metadata.
   *
   * @generated from field: grafeas.v1.Envelope envelope = 1;
   */
  envelope?: Envelope;

  /**
   * @generated from oneof grafeas.v1.DSSEAttestationOccurrence.decoded_payload
   */
  decodedPayload: {
    /**
     * @generated from field: grafeas.v1.InTotoStatement statement = 2;
     */
    value: InTotoStatement;
    case: "statement";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message grafeas.v1.DSSEAttestationOccurrence.
 * Use `create(DSSEAttestationOccurrenceSchema)` to create a new message.
 */
export const DSSEAttestationOccurrenceSchema: GenMessage<DSSEAttestationOccurrence> = /*@__PURE__*/
  messageDesc(file_grafeas_v1_dsse_attestation, 1);
