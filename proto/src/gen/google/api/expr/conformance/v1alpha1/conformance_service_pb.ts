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
// @generated from file google/api/expr/conformance/v1alpha1/conformance_service.proto (package google.api.expr.conformance.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_client } from "../../../client_pb";
import type { CheckedExpr, Decl } from "../../v1alpha1/checked_pb";
import { file_google_api_expr_v1alpha1_checked } from "../../v1alpha1/checked_pb";
import type { ExprValue } from "../../v1alpha1/eval_pb";
import { file_google_api_expr_v1alpha1_eval } from "../../v1alpha1/eval_pb";
import type { ParsedExpr } from "../../v1alpha1/syntax_pb";
import { file_google_api_expr_v1alpha1_syntax } from "../../v1alpha1/syntax_pb";
import type { Status } from "../../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/expr/conformance/v1alpha1/conformance_service.proto.
 */
export const file_google_api_expr_conformance_v1alpha1_conformance_service: GenFile = /*@__PURE__*/
  fileDesc("Cj5nb29nbGUvYXBpL2V4cHIvY29uZm9ybWFuY2UvdjFhbHBoYTEvY29uZm9ybWFuY2Vfc2VydmljZS5wcm90bxIkZ29vZ2xlLmFwaS5leHByLmNvbmZvcm1hbmNlLnYxYWxwaGExImsKDFBhcnNlUmVxdWVzdBISCgpjZWxfc291cmNlGAEgASgJEhYKDnN5bnRheF92ZXJzaW9uGAIgASgJEhcKD3NvdXJjZV9sb2NhdGlvbhgDIAEoCRIWCg5kaXNhYmxlX21hY3JvcxgEIAEoCCJuCg1QYXJzZVJlc3BvbnNlEjkKC3BhcnNlZF9leHByGAEgASgLMiQuZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExLlBhcnNlZEV4cHISIgoGaXNzdWVzGAIgAygLMhIuZ29vZ2xlLnJwYy5TdGF0dXMiogEKDENoZWNrUmVxdWVzdBI5CgtwYXJzZWRfZXhwchgBIAEoCzIkLmdvb2dsZS5hcGkuZXhwci52MWFscGhhMS5QYXJzZWRFeHByEjAKCHR5cGVfZW52GAIgAygLMh4uZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExLkRlY2wSEQoJY29udGFpbmVyGAMgASgJEhIKCm5vX3N0ZF9lbnYYBCABKAgicAoNQ2hlY2tSZXNwb25zZRI7CgxjaGVja2VkX2V4cHIYASABKAsyJS5nb29nbGUuYXBpLmV4cHIudjFhbHBoYTEuQ2hlY2tlZEV4cHISIgoGaXNzdWVzGAIgAygLMhIuZ29vZ2xlLnJwYy5TdGF0dXMi0gIKC0V2YWxSZXF1ZXN0EjsKC3BhcnNlZF9leHByGAEgASgLMiQuZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExLlBhcnNlZEV4cHJIABI9CgxjaGVja2VkX2V4cHIYAiABKAsyJS5nb29nbGUuYXBpLmV4cHIudjFhbHBoYTEuQ2hlY2tlZEV4cHJIABJRCghiaW5kaW5ncxgDIAMoCzI/Lmdvb2dsZS5hcGkuZXhwci5jb25mb3JtYW5jZS52MWFscGhhMS5FdmFsUmVxdWVzdC5CaW5kaW5nc0VudHJ5EhEKCWNvbnRhaW5lchgEIAEoCRpUCg1CaW5kaW5nc0VudHJ5EgsKA2tleRgBIAEoCRIyCgV2YWx1ZRgCIAEoCzIjLmdvb2dsZS5hcGkuZXhwci52MWFscGhhMS5FeHByVmFsdWU6AjgBQgsKCWV4cHJfa2luZCJnCgxFdmFsUmVzcG9uc2USMwoGcmVzdWx0GAEgASgLMiMuZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExLkV4cHJWYWx1ZRIiCgZpc3N1ZXMYAiADKAsyEi5nb29nbGUucnBjLlN0YXR1cyJQCg5Tb3VyY2VQb3NpdGlvbhIQCghsb2NhdGlvbhgBIAEoCRIOCgZvZmZzZXQYAiABKAUSDAoEbGluZRgDIAEoBRIOCgZjb2x1bW4YBCABKAUigAIKDElzc3VlRGV0YWlscxJNCghzZXZlcml0eRgBIAEoDjI7Lmdvb2dsZS5hcGkuZXhwci5jb25mb3JtYW5jZS52MWFscGhhMS5Jc3N1ZURldGFpbHMuU2V2ZXJpdHkSRgoIcG9zaXRpb24YAiABKAsyNC5nb29nbGUuYXBpLmV4cHIuY29uZm9ybWFuY2UudjFhbHBoYTEuU291cmNlUG9zaXRpb24SCgoCaWQYAyABKAMiTQoIU2V2ZXJpdHkSGAoUU0VWRVJJVFlfVU5TUEVDSUZJRUQQABIPCgtERVBSRUNBVElPThABEgsKB1dBUk5JTkcQAhIJCgVFUlJPUhADMoQDChJDb25mb3JtYW5jZVNlcnZpY2UScgoFUGFyc2USMi5nb29nbGUuYXBpLmV4cHIuY29uZm9ybWFuY2UudjFhbHBoYTEuUGFyc2VSZXF1ZXN0GjMuZ29vZ2xlLmFwaS5leHByLmNvbmZvcm1hbmNlLnYxYWxwaGExLlBhcnNlUmVzcG9uc2UiABJyCgVDaGVjaxIyLmdvb2dsZS5hcGkuZXhwci5jb25mb3JtYW5jZS52MWFscGhhMS5DaGVja1JlcXVlc3QaMy5nb29nbGUuYXBpLmV4cHIuY29uZm9ybWFuY2UudjFhbHBoYTEuQ2hlY2tSZXNwb25zZSIAEm8KBEV2YWwSMS5nb29nbGUuYXBpLmV4cHIuY29uZm9ybWFuY2UudjFhbHBoYTEuRXZhbFJlcXVlc3QaMi5nb29nbGUuYXBpLmV4cHIuY29uZm9ybWFuY2UudjFhbHBoYTEuRXZhbFJlc3BvbnNlIgAaFcpBEmNlbC5nb29nbGVhcGlzLmNvbUKUAQooY29tLmdvb2dsZS5hcGkuZXhwci5jb25mb3JtYW5jZS52MWFscGhhMUIXQ29uZm9ybWFuY2VTZXJ2aWNlUHJvdG9QAVpKZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvZXhwci9jb25mb3JtYW5jZS92MWFscGhhMTtjb25mcGL4AQFiBnByb3RvMw", [file_google_api_client, file_google_api_expr_v1alpha1_checked, file_google_api_expr_v1alpha1_eval, file_google_api_expr_v1alpha1_syntax, file_google_rpc_status]);

/**
 * Request message for the Parse method.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.ParseRequest
 */
export type ParseRequest = Message<"google.api.expr.conformance.v1alpha1.ParseRequest"> & {
  /**
   * Required. Source text in CEL syntax.
   *
   * @generated from field: string cel_source = 1;
   */
  celSource: string;

  /**
   * Tag for version of CEL syntax, for future use.
   *
   * @generated from field: string syntax_version = 2;
   */
  syntaxVersion: string;

  /**
   * File or resource for source text, used in [SourceInfo][google.api.SourceInfo].
   *
   * @generated from field: string source_location = 3;
   */
  sourceLocation: string;

  /**
   * Prevent macro expansion.  See "Macros" in Language Defiinition.
   *
   * @generated from field: bool disable_macros = 4;
   */
  disableMacros: boolean;
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.ParseRequest.
 * Use `create(ParseRequestSchema)` to create a new message.
 */
export const ParseRequestSchema: GenMessage<ParseRequest> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 0);

/**
 * Response message for the Parse method.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.ParseResponse
 */
export type ParseResponse = Message<"google.api.expr.conformance.v1alpha1.ParseResponse"> & {
  /**
   * The parsed representation, or unset if parsing failed.
   *
   * @generated from field: google.api.expr.v1alpha1.ParsedExpr parsed_expr = 1;
   */
  parsedExpr?: ParsedExpr;

  /**
   * Any number of issues with [StatusDetails][] as the details.
   *
   * @generated from field: repeated google.rpc.Status issues = 2;
   */
  issues: Status[];
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.ParseResponse.
 * Use `create(ParseResponseSchema)` to create a new message.
 */
export const ParseResponseSchema: GenMessage<ParseResponse> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 1);

/**
 * Request message for the Check method.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.CheckRequest
 */
export type CheckRequest = Message<"google.api.expr.conformance.v1alpha1.CheckRequest"> & {
  /**
   * Required. The parsed representation of the CEL program.
   *
   * @generated from field: google.api.expr.v1alpha1.ParsedExpr parsed_expr = 1;
   */
  parsedExpr?: ParsedExpr;

  /**
   * Declarations of types for external variables and functions.
   * Required if program uses external variables or functions
   * not in the default environment.
   *
   * @generated from field: repeated google.api.expr.v1alpha1.Decl type_env = 2;
   */
  typeEnv: Decl[];

  /**
   * The protocol buffer context.  See "Name Resolution" in the
   * Language Definition.
   *
   * @generated from field: string container = 3;
   */
  container: string;

  /**
   * If true, use only the declarations in [type_env][google.api.expr.conformance.v1alpha1.CheckRequest.type_env].  If false (default),
   * add declarations for the standard definitions to the type environment.  See
   * "Standard Definitions" in the Language Definition.
   *
   * @generated from field: bool no_std_env = 4;
   */
  noStdEnv: boolean;
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.CheckRequest.
 * Use `create(CheckRequestSchema)` to create a new message.
 */
export const CheckRequestSchema: GenMessage<CheckRequest> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 2);

/**
 * Response message for the Check method.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.CheckResponse
 */
export type CheckResponse = Message<"google.api.expr.conformance.v1alpha1.CheckResponse"> & {
  /**
   * The annotated representation, or unset if checking failed.
   *
   * @generated from field: google.api.expr.v1alpha1.CheckedExpr checked_expr = 1;
   */
  checkedExpr?: CheckedExpr;

  /**
   * Any number of issues with [StatusDetails][] as the details.
   *
   * @generated from field: repeated google.rpc.Status issues = 2;
   */
  issues: Status[];
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.CheckResponse.
 * Use `create(CheckResponseSchema)` to create a new message.
 */
export const CheckResponseSchema: GenMessage<CheckResponse> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 3);

/**
 * Request message for the Eval method.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.EvalRequest
 */
export type EvalRequest = Message<"google.api.expr.conformance.v1alpha1.EvalRequest"> & {
  /**
   * Required. Either the parsed or annotated representation of the CEL program.
   *
   * @generated from oneof google.api.expr.conformance.v1alpha1.EvalRequest.expr_kind
   */
  exprKind: {
    /**
     * Evaluate based on the parsed representation.
     *
     * @generated from field: google.api.expr.v1alpha1.ParsedExpr parsed_expr = 1;
     */
    value: ParsedExpr;
    case: "parsedExpr";
  } | {
    /**
     * Evaluate based on the checked representation.
     *
     * @generated from field: google.api.expr.v1alpha1.CheckedExpr checked_expr = 2;
     */
    value: CheckedExpr;
    case: "checkedExpr";
  } | { case: undefined; value?: undefined };

  /**
   * Bindings for the external variables.  The types SHOULD be compatible
   * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   *
   * @generated from field: map<string, google.api.expr.v1alpha1.ExprValue> bindings = 3;
   */
  bindings: { [key: string]: ExprValue };

  /**
   * SHOULD be the same container as used in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   *
   * @generated from field: string container = 4;
   */
  container: string;
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.EvalRequest.
 * Use `create(EvalRequestSchema)` to create a new message.
 */
export const EvalRequestSchema: GenMessage<EvalRequest> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 4);

/**
 * Response message for the Eval method.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.EvalResponse
 */
export type EvalResponse = Message<"google.api.expr.conformance.v1alpha1.EvalResponse"> & {
  /**
   * The execution result, or unset if execution couldn't start.
   *
   * @generated from field: google.api.expr.v1alpha1.ExprValue result = 1;
   */
  result?: ExprValue;

  /**
   * Any number of issues with [StatusDetails][] as the details.
   * Note that CEL execution errors are reified into [ExprValue][].
   * Nevertheless, we'll allow out-of-band issues to be raised,
   * which also makes the replies more regular.
   *
   * @generated from field: repeated google.rpc.Status issues = 2;
   */
  issues: Status[];
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.EvalResponse.
 * Use `create(EvalResponseSchema)` to create a new message.
 */
export const EvalResponseSchema: GenMessage<EvalResponse> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 5);

/**
 * A specific position in source.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.SourcePosition
 */
export type SourcePosition = Message<"google.api.expr.conformance.v1alpha1.SourcePosition"> & {
  /**
   * The source location name (e.g. file name).
   *
   * @generated from field: string location = 1;
   */
  location: string;

  /**
   * The UTF-8 code unit offset.
   *
   * @generated from field: int32 offset = 2;
   */
  offset: number;

  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   *
   * @generated from field: int32 line = 3;
   */
  line: number;

  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzero.
   *
   * @generated from field: int32 column = 4;
   */
  column: number;
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.SourcePosition.
 * Use `create(SourcePositionSchema)` to create a new message.
 */
export const SourcePositionSchema: GenMessage<SourcePosition> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 6);

/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 *
 * @generated from message google.api.expr.conformance.v1alpha1.IssueDetails
 */
export type IssueDetails = Message<"google.api.expr.conformance.v1alpha1.IssueDetails"> & {
  /**
   * The severity of the issue.
   *
   * @generated from field: google.api.expr.conformance.v1alpha1.IssueDetails.Severity severity = 1;
   */
  severity: IssueDetails_Severity;

  /**
   * Position in the source, if known.
   *
   * @generated from field: google.api.expr.conformance.v1alpha1.SourcePosition position = 2;
   */
  position?: SourcePosition;

  /**
   * Expression ID from [Expr][], 0 if unknown.
   *
   * @generated from field: int64 id = 3;
   */
  id: bigint;
};

/**
 * Describes the message google.api.expr.conformance.v1alpha1.IssueDetails.
 * Use `create(IssueDetailsSchema)` to create a new message.
 */
export const IssueDetailsSchema: GenMessage<IssueDetails> = /*@__PURE__*/
  messageDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 7);

/**
 * Severities of issues.
 *
 * @generated from enum google.api.expr.conformance.v1alpha1.IssueDetails.Severity
 */
export enum IssueDetails_Severity {
  /**
   * An unspecified severity.
   *
   * @generated from enum value: SEVERITY_UNSPECIFIED = 0;
   */
  SEVERITY_UNSPECIFIED = 0,

  /**
   * Deprecation issue for statements and method that may no longer be
   * supported or maintained.
   *
   * @generated from enum value: DEPRECATION = 1;
   */
  DEPRECATION = 1,

  /**
   * Warnings such as: unused variables.
   *
   * @generated from enum value: WARNING = 2;
   */
  WARNING = 2,

  /**
   * Errors such as: unmatched curly braces or variable redefinition.
   *
   * @generated from enum value: ERROR = 3;
   */
  ERROR = 3,
}

/**
 * Describes the enum google.api.expr.conformance.v1alpha1.IssueDetails.Severity.
 */
export const IssueDetails_SeveritySchema: GenEnum<IssueDetails_Severity> = /*@__PURE__*/
  enumDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 7, 0);

/**
 * Access a CEL implementation from another process or machine.
 * A CEL implementation is decomposed as a parser, a static checker,
 * and an evaluator.  Every CEL implementation is expected to provide
 * a server for this API.  The API will be used for conformance testing
 * and other utilities.
 *
 * @generated from service google.api.expr.conformance.v1alpha1.ConformanceService
 */
export const ConformanceService: GenService<{
  /**
   * Transforms CEL source text into a parsed representation.
   *
   * @generated from rpc google.api.expr.conformance.v1alpha1.ConformanceService.Parse
   */
  parse: {
    methodKind: "unary";
    input: typeof ParseRequestSchema;
    output: typeof ParseResponseSchema;
  },
  /**
   * Runs static checks on a parsed CEL representation and return
   * an annotated representation, or a set of issues.
   *
   * @generated from rpc google.api.expr.conformance.v1alpha1.ConformanceService.Check
   */
  check: {
    methodKind: "unary";
    input: typeof CheckRequestSchema;
    output: typeof CheckResponseSchema;
  },
  /**
   * Evaluates a parsed or annotation CEL representation given
   * values of external bindings.
   *
   * @generated from rpc google.api.expr.conformance.v1alpha1.ConformanceService.Eval
   */
  eval: {
    methodKind: "unary";
    input: typeof EvalRequestSchema;
    output: typeof EvalResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_api_expr_conformance_v1alpha1_conformance_service, 0);
