// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/v2/decimal_target_types.proto

/* eslint-disable */

export const protobufPackage = "google.cloud.bigquery.v2";

/**
 * The data types that could be used as a target type when converting decimal
 * values.
 */
export enum DecimalTargetType {
  /** DECIMAL_TARGET_TYPE_UNSPECIFIED - Invalid type. */
  DECIMAL_TARGET_TYPE_UNSPECIFIED = 0,
  /**
   * NUMERIC - Decimal values could be converted to NUMERIC
   * type.
   */
  NUMERIC = 1,
  /**
   * BIGNUMERIC - Decimal values could be converted to BIGNUMERIC
   * type.
   */
  BIGNUMERIC = 2,
  /** STRING - Decimal values could be converted to STRING type. */
  STRING = 3,
  UNRECOGNIZED = -1,
}

export function decimalTargetTypeFromJSON(object: any): DecimalTargetType {
  switch (object) {
    case 0:
    case "DECIMAL_TARGET_TYPE_UNSPECIFIED":
      return DecimalTargetType.DECIMAL_TARGET_TYPE_UNSPECIFIED;
    case 1:
    case "NUMERIC":
      return DecimalTargetType.NUMERIC;
    case 2:
    case "BIGNUMERIC":
      return DecimalTargetType.BIGNUMERIC;
    case 3:
    case "STRING":
      return DecimalTargetType.STRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DecimalTargetType.UNRECOGNIZED;
  }
}

export function decimalTargetTypeToJSON(object: DecimalTargetType): string {
  switch (object) {
    case DecimalTargetType.DECIMAL_TARGET_TYPE_UNSPECIFIED:
      return "DECIMAL_TARGET_TYPE_UNSPECIFIED";
    case DecimalTargetType.NUMERIC:
      return "NUMERIC";
    case DecimalTargetType.BIGNUMERIC:
      return "BIGNUMERIC";
    case DecimalTargetType.STRING:
      return "STRING";
    case DecimalTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}