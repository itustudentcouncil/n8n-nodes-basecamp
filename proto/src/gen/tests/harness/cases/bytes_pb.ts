// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file tests/harness/cases/bytes.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file tests/harness/cases/bytes.proto.
 */
export const file_tests_harness_cases_bytes: GenFile = /*@__PURE__*/
  fileDesc("Ch90ZXN0cy9oYXJuZXNzL2Nhc2VzL2J5dGVzLnByb3RvEhN0ZXN0cy5oYXJuZXNzLmNhc2VzIhgKCUJ5dGVzTm9uZRILCgN2YWwYASABKAwiJQoKQnl0ZXNDb25zdBIXCgN2YWwYASABKAxCCvpCB3oFCgNmb28iJwoHQnl0ZXNJbhIcCgN2YWwYASABKAxCD/pCDHoKQgNiYXJCA2JheiIsCgpCeXRlc05vdEluEh4KA3ZhbBgBIAEoDEIR+kIOegxKBGZpenpKBGJ1enoiIAoIQnl0ZXNMZW4SFAoDdmFsGAEgASgMQgf6QgR6AmgDIiMKC0J5dGVzTWluTGVuEhQKA3ZhbBgBIAEoDEIH+kIEegIQAyIjCgtCeXRlc01heExlbhIUCgN2YWwYASABKAxCB/pCBHoCGAUiKAoOQnl0ZXNNaW5NYXhMZW4SFgoDdmFsGAEgASgMQgn6QgZ6BBADGAUiLQoTQnl0ZXNFcXVhbE1pbk1heExlbhIWCgN2YWwYASABKAxCCfpCBnoEEAUYBSIsCgxCeXRlc1BhdHRlcm4SHAoDdmFsGAEgASgMQg/6Qgx6CiIIXlsALX9dKyQiJAoLQnl0ZXNQcmVmaXgSFQoDdmFsGAEgASgMQgj6QgV6AyoBmSIoCg1CeXRlc0NvbnRhaW5zEhcKA3ZhbBgBIAEoDEIK+kIHegU6A2JhciInCgtCeXRlc1N1ZmZpeBIYCgN2YWwYASABKAxCC/pCCHoGMgRidXp6Ih8KB0J5dGVzSVASFAoDdmFsGAEgASgMQgf6QgR6AlABIiEKCUJ5dGVzSVB2NBIUCgN2YWwYASABKAxCB/pCBHoCWAEiIQoJQnl0ZXNJUHY2EhQKA3ZhbBgBIAEoDEIH+kIEegJgASIpCg9CeXRlc0lQdjZJZ25vcmUSFgoDdmFsGAEgASgMQgn6QgZ6BHABYAFCSFpGZ2l0aHViLmNvbS9lbnZveXByb3h5L3Byb3RvYy1nZW4tdmFsaWRhdGUvdGVzdHMvaGFybmVzcy9jYXNlcy9nbztjYXNlc2IGcHJvdG8z", [file_validate_validate]);

/**
 * @generated from message tests.harness.cases.BytesNone
 */
export type BytesNone = Message<"tests.harness.cases.BytesNone"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesNone.
 * Use `create(BytesNoneSchema)` to create a new message.
 */
export const BytesNoneSchema: GenMessage<BytesNone> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 0);

/**
 * @generated from message tests.harness.cases.BytesConst
 */
export type BytesConst = Message<"tests.harness.cases.BytesConst"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesConst.
 * Use `create(BytesConstSchema)` to create a new message.
 */
export const BytesConstSchema: GenMessage<BytesConst> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 1);

/**
 * @generated from message tests.harness.cases.BytesIn
 */
export type BytesIn = Message<"tests.harness.cases.BytesIn"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesIn.
 * Use `create(BytesInSchema)` to create a new message.
 */
export const BytesInSchema: GenMessage<BytesIn> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 2);

/**
 * @generated from message tests.harness.cases.BytesNotIn
 */
export type BytesNotIn = Message<"tests.harness.cases.BytesNotIn"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesNotIn.
 * Use `create(BytesNotInSchema)` to create a new message.
 */
export const BytesNotInSchema: GenMessage<BytesNotIn> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 3);

/**
 * @generated from message tests.harness.cases.BytesLen
 */
export type BytesLen = Message<"tests.harness.cases.BytesLen"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesLen.
 * Use `create(BytesLenSchema)` to create a new message.
 */
export const BytesLenSchema: GenMessage<BytesLen> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 4);

/**
 * @generated from message tests.harness.cases.BytesMinLen
 */
export type BytesMinLen = Message<"tests.harness.cases.BytesMinLen"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesMinLen.
 * Use `create(BytesMinLenSchema)` to create a new message.
 */
export const BytesMinLenSchema: GenMessage<BytesMinLen> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 5);

/**
 * @generated from message tests.harness.cases.BytesMaxLen
 */
export type BytesMaxLen = Message<"tests.harness.cases.BytesMaxLen"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesMaxLen.
 * Use `create(BytesMaxLenSchema)` to create a new message.
 */
export const BytesMaxLenSchema: GenMessage<BytesMaxLen> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 6);

/**
 * @generated from message tests.harness.cases.BytesMinMaxLen
 */
export type BytesMinMaxLen = Message<"tests.harness.cases.BytesMinMaxLen"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesMinMaxLen.
 * Use `create(BytesMinMaxLenSchema)` to create a new message.
 */
export const BytesMinMaxLenSchema: GenMessage<BytesMinMaxLen> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 7);

/**
 * @generated from message tests.harness.cases.BytesEqualMinMaxLen
 */
export type BytesEqualMinMaxLen = Message<"tests.harness.cases.BytesEqualMinMaxLen"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesEqualMinMaxLen.
 * Use `create(BytesEqualMinMaxLenSchema)` to create a new message.
 */
export const BytesEqualMinMaxLenSchema: GenMessage<BytesEqualMinMaxLen> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 8);

/**
 * @generated from message tests.harness.cases.BytesPattern
 */
export type BytesPattern = Message<"tests.harness.cases.BytesPattern"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesPattern.
 * Use `create(BytesPatternSchema)` to create a new message.
 */
export const BytesPatternSchema: GenMessage<BytesPattern> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 9);

/**
 * @generated from message tests.harness.cases.BytesPrefix
 */
export type BytesPrefix = Message<"tests.harness.cases.BytesPrefix"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesPrefix.
 * Use `create(BytesPrefixSchema)` to create a new message.
 */
export const BytesPrefixSchema: GenMessage<BytesPrefix> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 10);

/**
 * @generated from message tests.harness.cases.BytesContains
 */
export type BytesContains = Message<"tests.harness.cases.BytesContains"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesContains.
 * Use `create(BytesContainsSchema)` to create a new message.
 */
export const BytesContainsSchema: GenMessage<BytesContains> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 11);

/**
 * @generated from message tests.harness.cases.BytesSuffix
 */
export type BytesSuffix = Message<"tests.harness.cases.BytesSuffix"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesSuffix.
 * Use `create(BytesSuffixSchema)` to create a new message.
 */
export const BytesSuffixSchema: GenMessage<BytesSuffix> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 12);

/**
 * @generated from message tests.harness.cases.BytesIP
 */
export type BytesIP = Message<"tests.harness.cases.BytesIP"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesIP.
 * Use `create(BytesIPSchema)` to create a new message.
 */
export const BytesIPSchema: GenMessage<BytesIP> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 13);

/**
 * @generated from message tests.harness.cases.BytesIPv4
 */
export type BytesIPv4 = Message<"tests.harness.cases.BytesIPv4"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesIPv4.
 * Use `create(BytesIPv4Schema)` to create a new message.
 */
export const BytesIPv4Schema: GenMessage<BytesIPv4> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 14);

/**
 * @generated from message tests.harness.cases.BytesIPv6
 */
export type BytesIPv6 = Message<"tests.harness.cases.BytesIPv6"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesIPv6.
 * Use `create(BytesIPv6Schema)` to create a new message.
 */
export const BytesIPv6Schema: GenMessage<BytesIPv6> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 15);

/**
 * @generated from message tests.harness.cases.BytesIPv6Ignore
 */
export type BytesIPv6Ignore = Message<"tests.harness.cases.BytesIPv6Ignore"> & {
  /**
   * @generated from field: bytes val = 1;
   */
  val: Uint8Array;
};

/**
 * Describes the message tests.harness.cases.BytesIPv6Ignore.
 * Use `create(BytesIPv6IgnoreSchema)` to create a new message.
 */
export const BytesIPv6IgnoreSchema: GenMessage<BytesIPv6Ignore> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_bytes, 16);
