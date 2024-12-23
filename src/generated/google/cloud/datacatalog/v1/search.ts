// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datacatalog/v1/search.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { IntegratedSystem, integratedSystemFromJSON, integratedSystemToJSON } from "./common.js";

export const protobufPackage = "google.cloud.datacatalog.v1";

/** The resource types that can be returned in search results. */
export enum SearchResultType {
  /** SEARCH_RESULT_TYPE_UNSPECIFIED - Default unknown type. */
  SEARCH_RESULT_TYPE_UNSPECIFIED = 0,
  /** ENTRY - An [Entry][google.cloud.datacatalog.v1.Entry]. */
  ENTRY = 1,
  /** TAG_TEMPLATE - A [TagTemplate][google.cloud.datacatalog.v1.TagTemplate]. */
  TAG_TEMPLATE = 2,
  /** ENTRY_GROUP - An [EntryGroup][google.cloud.datacatalog.v1.EntryGroup]. */
  ENTRY_GROUP = 3,
  UNRECOGNIZED = -1,
}

export function searchResultTypeFromJSON(object: any): SearchResultType {
  switch (object) {
    case 0:
    case "SEARCH_RESULT_TYPE_UNSPECIFIED":
      return SearchResultType.SEARCH_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "ENTRY":
      return SearchResultType.ENTRY;
    case 2:
    case "TAG_TEMPLATE":
      return SearchResultType.TAG_TEMPLATE;
    case 3:
    case "ENTRY_GROUP":
      return SearchResultType.ENTRY_GROUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SearchResultType.UNRECOGNIZED;
  }
}

export function searchResultTypeToJSON(object: SearchResultType): string {
  switch (object) {
    case SearchResultType.SEARCH_RESULT_TYPE_UNSPECIFIED:
      return "SEARCH_RESULT_TYPE_UNSPECIFIED";
    case SearchResultType.ENTRY:
      return "ENTRY";
    case SearchResultType.TAG_TEMPLATE:
      return "TAG_TEMPLATE";
    case SearchResultType.ENTRY_GROUP:
      return "ENTRY_GROUP";
    case SearchResultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Result in the response to a search request.
 *
 * Each result captures details of one entry that matches the search.
 */
export interface SearchCatalogResult {
  /**
   * Type of the search result.
   *
   * You can use this field to determine which get method to call to fetch the
   * full resource.
   */
  searchResultType: SearchResultType;
  /**
   * Sub-type of the search result.
   *
   * A dot-delimited full type of the resource. The same type you
   * specify in the `type` search predicate.
   *
   * Examples: `entry.table`, `entry.dataStream`, `tagTemplate`.
   */
  searchResultSubtype: string;
  /**
   * The relative name of the resource in URL format.
   *
   * Examples:
   *
   *  * `projects/{PROJECT_ID}/locations/{LOCATION_ID}/entryGroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`
   *  * `projects/{PROJECT_ID}/tagTemplates/{TAG_TEMPLATE_ID}`
   */
  relativeResourceName: string;
  /**
   * The full name of the Google Cloud resource the entry belongs to.
   *
   * For more information, see [Full Resource Name]
   * (/apis/design/resource_names#full_resource_name).
   *
   * Example:
   *
   * `//bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID`
   */
  linkedResource: string;
  /** The last modification timestamp of the entry in the source system. */
  modifyTime:
    | Date
    | undefined;
  /**
   * Output only. The source system that Data Catalog automatically integrates
   * with, such as BigQuery, Cloud Pub/Sub, or Dataproc Metastore.
   */
  integratedSystem?:
    | IntegratedSystem
    | undefined;
  /** Custom source system that you can manually integrate Data Catalog with. */
  userSpecifiedSystem?:
    | string
    | undefined;
  /**
   * Fully qualified name (FQN) of the resource.
   *
   * FQNs take two forms:
   *
   * * For non-regionalized resources:
   *
   *   `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}`
   *
   * * For regionalized resources:
   *
   *   `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}`
   *
   * Example for a DPMS table:
   *
   * `dataproc_metastore:PROJECT_ID.LOCATION_ID.INSTANCE_ID.DATABASE_ID.TABLE_ID`
   */
  fullyQualifiedName: string;
  /** The display name of the result. */
  displayName: string;
  /**
   * Entry description that can consist of several sentences or paragraphs that
   * describe entry contents.
   */
  description: string;
}

function createBaseSearchCatalogResult(): SearchCatalogResult {
  return {
    searchResultType: 0,
    searchResultSubtype: "",
    relativeResourceName: "",
    linkedResource: "",
    modifyTime: undefined,
    integratedSystem: undefined,
    userSpecifiedSystem: undefined,
    fullyQualifiedName: "",
    displayName: "",
    description: "",
  };
}

export const SearchCatalogResult: MessageFns<SearchCatalogResult> = {
  encode(message: SearchCatalogResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.searchResultType !== 0) {
      writer.uint32(8).int32(message.searchResultType);
    }
    if (message.searchResultSubtype !== "") {
      writer.uint32(18).string(message.searchResultSubtype);
    }
    if (message.relativeResourceName !== "") {
      writer.uint32(26).string(message.relativeResourceName);
    }
    if (message.linkedResource !== "") {
      writer.uint32(34).string(message.linkedResource);
    }
    if (message.modifyTime !== undefined) {
      Timestamp.encode(toTimestamp(message.modifyTime), writer.uint32(58).fork()).join();
    }
    if (message.integratedSystem !== undefined) {
      writer.uint32(64).int32(message.integratedSystem);
    }
    if (message.userSpecifiedSystem !== undefined) {
      writer.uint32(74).string(message.userSpecifiedSystem);
    }
    if (message.fullyQualifiedName !== "") {
      writer.uint32(82).string(message.fullyQualifiedName);
    }
    if (message.displayName !== "") {
      writer.uint32(98).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(106).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchCatalogResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchCatalogResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.searchResultType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.searchResultSubtype = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relativeResourceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.linkedResource = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.modifyTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.integratedSystem = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.userSpecifiedSystem = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.fullyQualifiedName = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchCatalogResult {
    return {
      searchResultType: isSet(object.searchResultType) ? searchResultTypeFromJSON(object.searchResultType) : 0,
      searchResultSubtype: isSet(object.searchResultSubtype) ? globalThis.String(object.searchResultSubtype) : "",
      relativeResourceName: isSet(object.relativeResourceName) ? globalThis.String(object.relativeResourceName) : "",
      linkedResource: isSet(object.linkedResource) ? globalThis.String(object.linkedResource) : "",
      modifyTime: isSet(object.modifyTime) ? fromJsonTimestamp(object.modifyTime) : undefined,
      integratedSystem: isSet(object.integratedSystem) ? integratedSystemFromJSON(object.integratedSystem) : undefined,
      userSpecifiedSystem: isSet(object.userSpecifiedSystem)
        ? globalThis.String(object.userSpecifiedSystem)
        : undefined,
      fullyQualifiedName: isSet(object.fullyQualifiedName) ? globalThis.String(object.fullyQualifiedName) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: SearchCatalogResult): unknown {
    const obj: any = {};
    if (message.searchResultType !== 0) {
      obj.searchResultType = searchResultTypeToJSON(message.searchResultType);
    }
    if (message.searchResultSubtype !== "") {
      obj.searchResultSubtype = message.searchResultSubtype;
    }
    if (message.relativeResourceName !== "") {
      obj.relativeResourceName = message.relativeResourceName;
    }
    if (message.linkedResource !== "") {
      obj.linkedResource = message.linkedResource;
    }
    if (message.modifyTime !== undefined) {
      obj.modifyTime = message.modifyTime.toISOString();
    }
    if (message.integratedSystem !== undefined) {
      obj.integratedSystem = integratedSystemToJSON(message.integratedSystem);
    }
    if (message.userSpecifiedSystem !== undefined) {
      obj.userSpecifiedSystem = message.userSpecifiedSystem;
    }
    if (message.fullyQualifiedName !== "") {
      obj.fullyQualifiedName = message.fullyQualifiedName;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchCatalogResult>): SearchCatalogResult {
    return SearchCatalogResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchCatalogResult>): SearchCatalogResult {
    const message = createBaseSearchCatalogResult();
    message.searchResultType = object.searchResultType ?? 0;
    message.searchResultSubtype = object.searchResultSubtype ?? "";
    message.relativeResourceName = object.relativeResourceName ?? "";
    message.linkedResource = object.linkedResource ?? "";
    message.modifyTime = object.modifyTime ?? undefined;
    message.integratedSystem = object.integratedSystem ?? undefined;
    message.userSpecifiedSystem = object.userSpecifiedSystem ?? undefined;
    message.fullyQualifiedName = object.fullyQualifiedName ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
