// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file tests/harness/cases/yet_another_package/embed.proto (package tests.harness.cases.yet_another_package, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_validate_validate } from "../../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file tests/harness/cases/yet_another_package/embed.proto.
 */
export const file_tests_harness_cases_yet_another_package_embed: GenFile = /*@__PURE__*/
  fileDesc("CjN0ZXN0cy9oYXJuZXNzL2Nhc2VzL3lldF9hbm90aGVyX3BhY2thZ2UvZW1iZWQucHJvdG8SJ3Rlc3RzLmhhcm5lc3MuY2FzZXMueWV0X2Fub3RoZXJfcGFja2FnZSJfCgVFbWJlZBIUCgN2YWwYASABKANCB/pCBCICIAAiFwoKRW51bWVyYXRlZBIJCgVWQUxVRRAAIicKCUJhck51bWJlchIICgRaRVJPEAASBwoDT05FEAESBwoDVFdPEAJCalpoZ2l0aHViLmNvbS9lbnZveXByb3h5L3Byb3RvYy1nZW4tdmFsaWRhdGUvdGVzdHMvaGFybmVzcy9jYXNlcy95ZXRfYW5vdGhlcl9wYWNrYWdlL2dvO3lldF9hbm90aGVyX3BhY2thZ2ViBnByb3RvMw", [file_validate_validate]);

/**
 * Validate message embedding across packages.
 *
 * @generated from message tests.harness.cases.yet_another_package.Embed
 */
export type Embed = Message<"tests.harness.cases.yet_another_package.Embed"> & {
  /**
   * @generated from field: int64 val = 1;
   */
  val: bigint;
};

/**
 * Describes the message tests.harness.cases.yet_another_package.Embed.
 * Use `create(EmbedSchema)` to create a new message.
 */
export const EmbedSchema: GenMessage<Embed> = /*@__PURE__*/
  messageDesc(file_tests_harness_cases_yet_another_package_embed, 0);

/**
 * @generated from enum tests.harness.cases.yet_another_package.Embed.Enumerated
 */
export enum Embed_Enumerated {
  /**
   * @generated from enum value: VALUE = 0;
   */
  VALUE = 0,
}

/**
 * Describes the enum tests.harness.cases.yet_another_package.Embed.Enumerated.
 */
export const Embed_EnumeratedSchema: GenEnum<Embed_Enumerated> = /*@__PURE__*/
  enumDesc(file_tests_harness_cases_yet_another_package_embed, 0, 0);

/**
 * @generated from enum tests.harness.cases.yet_another_package.Embed.BarNumber
 */
export enum Embed_BarNumber {
  /**
   * @generated from enum value: ZERO = 0;
   */
  ZERO = 0,

  /**
   * @generated from enum value: ONE = 1;
   */
  ONE = 1,

  /**
   * @generated from enum value: TWO = 2;
   */
  TWO = 2,
}

/**
 * Describes the enum tests.harness.cases.yet_another_package.Embed.BarNumber.
 */
export const Embed_BarNumberSchema: GenEnum<Embed_BarNumber> = /*@__PURE__*/
  enumDesc(file_tests_harness_cases_yet_another_package_embed, 0, 1);
