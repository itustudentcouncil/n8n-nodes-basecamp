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
// @generated from file google/devtools/resultstore/v2/coverage.proto (package google.devtools.resultstore.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/devtools/resultstore/v2/coverage.proto.
 */
export const file_google_devtools_resultstore_v2_coverage: GenFile = /*@__PURE__*/
  fileDesc("Ci1nb29nbGUvZGV2dG9vbHMvcmVzdWx0c3RvcmUvdjIvY292ZXJhZ2UucHJvdG8SHmdvb2dsZS5kZXZ0b29scy5yZXN1bHRzdG9yZS52MiJCCgxMaW5lQ292ZXJhZ2USGgoSaW5zdHJ1bWVudGVkX2xpbmVzGAEgASgMEhYKDmV4ZWN1dGVkX2xpbmVzGAIgASgMImMKDkJyYW5jaENvdmVyYWdlEhYKDmJyYW5jaF9wcmVzZW50GAEgASgMEhgKEGJyYW5jaGVzX2luX2xpbmUYAiADKAUSEAoIZXhlY3V0ZWQYAyABKAwSDQoFdGFrZW4YBCABKAwiqgEKDEZpbGVDb3ZlcmFnZRIMCgRwYXRoGAEgASgJEkMKDWxpbmVfY292ZXJhZ2UYAiABKAsyLC5nb29nbGUuZGV2dG9vbHMucmVzdWx0c3RvcmUudjIuTGluZUNvdmVyYWdlEkcKD2JyYW5jaF9jb3ZlcmFnZRgDIAEoCzIuLmdvb2dsZS5kZXZ0b29scy5yZXN1bHRzdG9yZS52Mi5CcmFuY2hDb3ZlcmFnZSJWCg5BY3Rpb25Db3ZlcmFnZRJECg5maWxlX2NvdmVyYWdlcxgCIAMoCzIsLmdvb2dsZS5kZXZ0b29scy5yZXN1bHRzdG9yZS52Mi5GaWxlQ292ZXJhZ2UiWQoRQWdncmVnYXRlQ292ZXJhZ2USRAoOZmlsZV9jb3ZlcmFnZXMYASADKAsyLC5nb29nbGUuZGV2dG9vbHMucmVzdWx0c3RvcmUudjIuRmlsZUNvdmVyYWdlQoABCiJjb20uZ29vZ2xlLmRldnRvb2xzLnJlc3VsdHN0b3JlLnYyQg1Db3ZlcmFnZVByb3RvUAFaSWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvZGV2dG9vbHMvcmVzdWx0c3RvcmUvdjI7cmVzdWx0c3RvcmViBnByb3RvMw");

/**
 * Describes line coverage for a file
 *
 * @generated from message google.devtools.resultstore.v2.LineCoverage
 */
export type LineCoverage = Message<"google.devtools.resultstore.v2.LineCoverage"> & {
  /**
   * Which source lines in the file represent the start of a statement that was
   * instrumented to detect whether it was executed by the test.
   *
   * This is a bitfield where i-th bit corresponds to the i-th line. Divide line
   * number by 8 to get index into byte array. Mod line number by 8 to get bit
   * number (0 = LSB, 7 = MSB).
   *
   * A 1 denotes the line was instrumented.
   * A 0 denotes the line was not instrumented.
   *
   * @generated from field: bytes instrumented_lines = 1;
   */
  instrumentedLines: Uint8Array;

  /**
   * Which of the instrumented source lines were executed by the test. Should
   * include lines that were not instrumented.
   *
   * This is a bitfield where i-th bit corresponds to the i-th line. Divide line
   * number by 8 to get index into byte array. Mod line number by 8 to get bit
   * number (0 = LSB, 7 = MSB).
   *
   * A 1 denotes the line was executed.
   * A 0 denotes the line was not executed.
   *
   * @generated from field: bytes executed_lines = 2;
   */
  executedLines: Uint8Array;
};

/**
 * Describes the message google.devtools.resultstore.v2.LineCoverage.
 * Use `create(LineCoverageSchema)` to create a new message.
 */
export const LineCoverageSchema: GenMessage<LineCoverage> = /*@__PURE__*/
  messageDesc(file_google_devtools_resultstore_v2_coverage, 0);

/**
 * Describes branch coverage for a file
 *
 * @generated from message google.devtools.resultstore.v2.BranchCoverage
 */
export type BranchCoverage = Message<"google.devtools.resultstore.v2.BranchCoverage"> & {
  /**
   * The field branch_present denotes the lines containing at least one branch.
   *
   * This is a bitfield where i-th bit corresponds to the i-th line. Divide line
   * number by 8 to get index into byte array. Mod line number by 8 to get bit
   * number (0 = LSB, 7 = MSB).
   *
   * A 1 denotes the line contains at least one branch.
   * A 0 denotes the line contains no branches.
   *
   * @generated from field: bytes branch_present = 1;
   */
  branchPresent: Uint8Array;

  /**
   * Contains the number of branches present, only for the lines which have the
   * corresponding bit set in branch_present, in a relative order ignoring
   * lines which do not have any branches.
   *
   * @generated from field: repeated int32 branches_in_line = 2;
   */
  branchesInLine: number[];

  /**
   * As each branch can have any one of the following three states: not
   * executed, executed but not taken, executed and taken.
   *
   * This is a bitfield where i-th bit corresponds to the i-th branch. Divide
   * branch number by 8 to get index into byte array. Mod branch number by 8 to
   * get bit number (0 = LSB, 7 = MSB).
   *
   * i-th bit of the following two byte arrays are used to denote the above
   * mentioned states.
   *
   * not executed: i-th bit of executed == 0 && i-th bit of taken == 0
   * executed but not taken: i-th bit of executed == 1 && i-th bit of taken == 0
   * executed and taken: i-th bit of executed == 1 && i-th bit of taken == 1
   *
   * @generated from field: bytes executed = 3;
   */
  executed: Uint8Array;

  /**
   * Described above.
   *
   * @generated from field: bytes taken = 4;
   */
  taken: Uint8Array;
};

/**
 * Describes the message google.devtools.resultstore.v2.BranchCoverage.
 * Use `create(BranchCoverageSchema)` to create a new message.
 */
export const BranchCoverageSchema: GenMessage<BranchCoverage> = /*@__PURE__*/
  messageDesc(file_google_devtools_resultstore_v2_coverage, 1);

/**
 * Describes code coverage for a particular file under test.
 *
 * @generated from message google.devtools.resultstore.v2.FileCoverage
 */
export type FileCoverage = Message<"google.devtools.resultstore.v2.FileCoverage"> & {
  /**
   * Path of source file within the SourceContext of this Invocation.
   *
   * @generated from field: string path = 1;
   */
  path: string;

  /**
   * Details of lines in a file for calculating line coverage.
   *
   * @generated from field: google.devtools.resultstore.v2.LineCoverage line_coverage = 2;
   */
  lineCoverage?: LineCoverage;

  /**
   * Details of branches in a file for calculating branch coverage.
   *
   * @generated from field: google.devtools.resultstore.v2.BranchCoverage branch_coverage = 3;
   */
  branchCoverage?: BranchCoverage;
};

/**
 * Describes the message google.devtools.resultstore.v2.FileCoverage.
 * Use `create(FileCoverageSchema)` to create a new message.
 */
export const FileCoverageSchema: GenMessage<FileCoverage> = /*@__PURE__*/
  messageDesc(file_google_devtools_resultstore_v2_coverage, 2);

/**
 * Describes code coverage for a build or test Action. This is used to store
 * baseline coverage for build Actions and test coverage for test Actions.
 *
 * @generated from message google.devtools.resultstore.v2.ActionCoverage
 */
export type ActionCoverage = Message<"google.devtools.resultstore.v2.ActionCoverage"> & {
  /**
   * List of coverage info for all source files that the TestResult covers.
   *
   * @generated from field: repeated google.devtools.resultstore.v2.FileCoverage file_coverages = 2;
   */
  fileCoverages: FileCoverage[];
};

/**
 * Describes the message google.devtools.resultstore.v2.ActionCoverage.
 * Use `create(ActionCoverageSchema)` to create a new message.
 */
export const ActionCoverageSchema: GenMessage<ActionCoverage> = /*@__PURE__*/
  messageDesc(file_google_devtools_resultstore_v2_coverage, 3);

/**
 * Describes aggregate code coverage for a collection of build or test Actions.
 * A line or branch is covered if and only if it is covered in any of the build
 * or test actions.
 *
 * @generated from message google.devtools.resultstore.v2.AggregateCoverage
 */
export type AggregateCoverage = Message<"google.devtools.resultstore.v2.AggregateCoverage"> & {
  /**
   * Aggregated coverage info for all source files that the actions cover.
   *
   * @generated from field: repeated google.devtools.resultstore.v2.FileCoverage file_coverages = 1;
   */
  fileCoverages: FileCoverage[];
};

/**
 * Describes the message google.devtools.resultstore.v2.AggregateCoverage.
 * Use `create(AggregateCoverageSchema)` to create a new message.
 */
export const AggregateCoverageSchema: GenMessage<AggregateCoverage> = /*@__PURE__*/
  messageDesc(file_google_devtools_resultstore_v2_coverage, 4);
