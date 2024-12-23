// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datacatalog/v1beta1/common.proto

/* eslint-disable */

export const protobufPackage = "google.cloud.datacatalog.v1beta1";

/**
 * This enum describes all the possible systems that Data Catalog integrates
 * with.
 */
export enum IntegratedSystem {
  /** INTEGRATED_SYSTEM_UNSPECIFIED - Default unknown system. */
  INTEGRATED_SYSTEM_UNSPECIFIED = 0,
  /** BIGQUERY - BigQuery. */
  BIGQUERY = 1,
  /** CLOUD_PUBSUB - Cloud Pub/Sub. */
  CLOUD_PUBSUB = 2,
  UNRECOGNIZED = -1,
}

export function integratedSystemFromJSON(object: any): IntegratedSystem {
  switch (object) {
    case 0:
    case "INTEGRATED_SYSTEM_UNSPECIFIED":
      return IntegratedSystem.INTEGRATED_SYSTEM_UNSPECIFIED;
    case 1:
    case "BIGQUERY":
      return IntegratedSystem.BIGQUERY;
    case 2:
    case "CLOUD_PUBSUB":
      return IntegratedSystem.CLOUD_PUBSUB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IntegratedSystem.UNRECOGNIZED;
  }
}

export function integratedSystemToJSON(object: IntegratedSystem): string {
  switch (object) {
    case IntegratedSystem.INTEGRATED_SYSTEM_UNSPECIFIED:
      return "INTEGRATED_SYSTEM_UNSPECIFIED";
    case IntegratedSystem.BIGQUERY:
      return "BIGQUERY";
    case IntegratedSystem.CLOUD_PUBSUB:
      return "CLOUD_PUBSUB";
    case IntegratedSystem.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * This enum describes all the systems that manage
 * Taxonomy and PolicyTag resources in DataCatalog.
 */
export enum ManagingSystem {
  /** MANAGING_SYSTEM_UNSPECIFIED - Default value */
  MANAGING_SYSTEM_UNSPECIFIED = 0,
  /** MANAGING_SYSTEM_DATAPLEX - Dataplex. */
  MANAGING_SYSTEM_DATAPLEX = 1,
  /** MANAGING_SYSTEM_OTHER - Other */
  MANAGING_SYSTEM_OTHER = 2,
  UNRECOGNIZED = -1,
}

export function managingSystemFromJSON(object: any): ManagingSystem {
  switch (object) {
    case 0:
    case "MANAGING_SYSTEM_UNSPECIFIED":
      return ManagingSystem.MANAGING_SYSTEM_UNSPECIFIED;
    case 1:
    case "MANAGING_SYSTEM_DATAPLEX":
      return ManagingSystem.MANAGING_SYSTEM_DATAPLEX;
    case 2:
    case "MANAGING_SYSTEM_OTHER":
      return ManagingSystem.MANAGING_SYSTEM_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ManagingSystem.UNRECOGNIZED;
  }
}

export function managingSystemToJSON(object: ManagingSystem): string {
  switch (object) {
    case ManagingSystem.MANAGING_SYSTEM_UNSPECIFIED:
      return "MANAGING_SYSTEM_UNSPECIFIED";
    case ManagingSystem.MANAGING_SYSTEM_DATAPLEX:
      return "MANAGING_SYSTEM_DATAPLEX";
    case ManagingSystem.MANAGING_SYSTEM_OTHER:
      return "MANAGING_SYSTEM_OTHER";
    case ManagingSystem.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
