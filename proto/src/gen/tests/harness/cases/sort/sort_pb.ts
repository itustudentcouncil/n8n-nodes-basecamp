// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file tests/harness/cases/sort/sort.proto (package tests.harness.cases.sort, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file tests/harness/cases/sort/sort.proto.
 */
export const file_tests_harness_cases_sort_sort: GenFile = /*@__PURE__*/
  fileDesc("CiN0ZXN0cy9oYXJuZXNzL2Nhc2VzL3NvcnQvc29ydC5wcm90bxIYdGVzdHMuaGFybmVzcy5jYXNlcy5zb3J0KjUKCURpcmVjdGlvbhIVChFVTktOT1dOX0RJUkVDVElPThAAEgcKA0FTQxABEggKBERFU0MQAkJMWkpnaXRodWIuY29tL2Vudm95cHJveHkvcHJvdG9jLWdlbi12YWxpZGF0ZS90ZXN0cy9oYXJuZXNzL2Nhc2VzL3NvcnQvZ287c29ydGIGcHJvdG8z");

/**
 * @generated from enum tests.harness.cases.sort.Direction
 */
export enum Direction {
  /**
   * @generated from enum value: UNKNOWN_DIRECTION = 0;
   */
  UNKNOWN_DIRECTION = 0,

  /**
   * @generated from enum value: ASC = 1;
   */
  ASC = 1,

  /**
   * @generated from enum value: DESC = 2;
   */
  DESC = 2,
}

/**
 * Describes the enum tests.harness.cases.sort.Direction.
 */
export const DirectionSchema: GenEnum<Direction> = /*@__PURE__*/
  enumDesc(file_tests_harness_cases_sort_sort, 0);
