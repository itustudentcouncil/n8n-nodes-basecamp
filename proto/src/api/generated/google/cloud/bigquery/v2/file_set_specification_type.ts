// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/v2/file_set_specification_type.proto

/* eslint-disable */

export const protobufPackage = "google.cloud.bigquery.v2";

/**
 * This enum defines how to interpret source URIs for load jobs and external
 * tables.
 */
export enum FileSetSpecType {
  /**
   * FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH - This option expands source URIs by listing files from the object store. It
   * is the default behavior if FileSetSpecType is not set.
   */
  FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH = 0,
  /**
   * FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST - This option indicates that the provided URIs are newline-delimited manifest
   * files, with one URI per line. Wildcard URIs are not supported.
   */
  FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST = 1,
  UNRECOGNIZED = -1,
}

export function fileSetSpecTypeFromJSON(object: any): FileSetSpecType {
  switch (object) {
    case 0:
    case "FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH":
      return FileSetSpecType.FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH;
    case 1:
    case "FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST":
      return FileSetSpecType.FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileSetSpecType.UNRECOGNIZED;
  }
}

export function fileSetSpecTypeToJSON(object: FileSetSpecType): string {
  switch (object) {
    case FileSetSpecType.FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH:
      return "FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH";
    case FileSetSpecType.FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST:
      return "FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST";
    case FileSetSpecType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}