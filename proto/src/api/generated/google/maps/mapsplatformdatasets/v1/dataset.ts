// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/mapsplatformdatasets/v1/dataset.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { GcsSource, LocalFileSource } from "./data_source.js";

export const protobufPackage = "google.maps.mapsplatformdatasets.v1";

/**
 * Usage specifies where the data is intended to be used to inform how to
 * process the data.
 */
export enum Usage {
  /** USAGE_UNSPECIFIED - The usage of this dataset is not set. */
  USAGE_UNSPECIFIED = 0,
  /** USAGE_DATA_DRIVEN_STYLING - This dataset will be used for data driven styling. */
  USAGE_DATA_DRIVEN_STYLING = 1,
  UNRECOGNIZED = -1,
}

export function usageFromJSON(object: any): Usage {
  switch (object) {
    case 0:
    case "USAGE_UNSPECIFIED":
      return Usage.USAGE_UNSPECIFIED;
    case 1:
    case "USAGE_DATA_DRIVEN_STYLING":
      return Usage.USAGE_DATA_DRIVEN_STYLING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Usage.UNRECOGNIZED;
  }
}

export function usageToJSON(object: Usage): string {
  switch (object) {
    case Usage.USAGE_UNSPECIFIED:
      return "USAGE_UNSPECIFIED";
    case Usage.USAGE_DATA_DRIVEN_STYLING:
      return "USAGE_DATA_DRIVEN_STYLING";
    case Usage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A representation of a dataset resource. */
export interface Dataset {
  /**
   * Resource name.
   * Format: projects/{project}/datasets/{dataset_id}
   */
  name: string;
  /**
   * Human readable name, shown in the console UI.
   *
   * Must be unique within a project.
   */
  displayName: string;
  /** A description of this dataset. */
  description: string;
  /** The version ID of the dataset. */
  versionId: string;
  /** Specified use case for this dataset. */
  usage: Usage[];
  /** A local file source for the dataset for a single upload. */
  localFileSource?:
    | LocalFileSource
    | undefined;
  /** A Google Cloud Storage file source for the dataset for a single upload. */
  gcsSource?:
    | GcsSource
    | undefined;
  /** Output only. The status of this dataset version. */
  status:
    | Status
    | undefined;
  /** Output only. Time when the dataset was first created. */
  createTime:
    | Date
    | undefined;
  /** Output only. Time when the dataset metadata was last updated. */
  updateTime:
    | Date
    | undefined;
  /** Output only. Time when this version was created. */
  versionCreateTime:
    | Date
    | undefined;
  /**
   * Output only. The description for this version of dataset. It is provided
   * when importing data to the dataset.
   */
  versionDescription: string;
}

/** Status of the dataset. */
export interface Status {
  /** State enum for status. */
  state: Status_State;
  /**
   * Error message indicating reason of failure. It is empty if the datasets is
   * not in a failed state.
   */
  errorMessage: string;
}

/** A list of states for the dataset. */
export enum Status_State {
  /** STATE_UNSPECIFIED - The state of this dataset is not set. */
  STATE_UNSPECIFIED = 0,
  /** STATE_IMPORTING - Data is being imported to a dataset. */
  STATE_IMPORTING = 1,
  /** STATE_IMPORT_SUCCEEDED - Importing data to a dataset succeeded. */
  STATE_IMPORT_SUCCEEDED = 2,
  /** STATE_IMPORT_FAILED - Importing data to a dataset failed. */
  STATE_IMPORT_FAILED = 3,
  /** STATE_DELETING - The dataset is in the process of getting deleted. */
  STATE_DELETING = 4,
  /**
   * STATE_DELETION_FAILED - The deletion failed state. This state represents that dataset deletion
   * has failed. Deletion may be retried.
   */
  STATE_DELETION_FAILED = 5,
  /** STATE_PROCESSING - Data is being processed. */
  STATE_PROCESSING = 6,
  /**
   * STATE_PROCESSING_FAILED - The processing failed state. This state represents that processing has
   * failed and may report errors.
   */
  STATE_PROCESSING_FAILED = 7,
  /** STATE_NEEDS_REVIEW - This state is currently not used. */
  STATE_NEEDS_REVIEW = 8,
  /**
   * STATE_PUBLISHING - The publishing state. This state represents the publishing is in
   * progress.
   */
  STATE_PUBLISHING = 9,
  /**
   * STATE_PUBLISHING_FAILED - The publishing failed states. This state represents that the publishing
   * failed. Publishing may be retried.
   */
  STATE_PUBLISHING_FAILED = 10,
  /**
   * STATE_COMPLETED - The completed state. This state represents the dataset being available
   * for its specific usage.
   */
  STATE_COMPLETED = 11,
  UNRECOGNIZED = -1,
}

export function status_StateFromJSON(object: any): Status_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Status_State.STATE_UNSPECIFIED;
    case 1:
    case "STATE_IMPORTING":
      return Status_State.STATE_IMPORTING;
    case 2:
    case "STATE_IMPORT_SUCCEEDED":
      return Status_State.STATE_IMPORT_SUCCEEDED;
    case 3:
    case "STATE_IMPORT_FAILED":
      return Status_State.STATE_IMPORT_FAILED;
    case 4:
    case "STATE_DELETING":
      return Status_State.STATE_DELETING;
    case 5:
    case "STATE_DELETION_FAILED":
      return Status_State.STATE_DELETION_FAILED;
    case 6:
    case "STATE_PROCESSING":
      return Status_State.STATE_PROCESSING;
    case 7:
    case "STATE_PROCESSING_FAILED":
      return Status_State.STATE_PROCESSING_FAILED;
    case 8:
    case "STATE_NEEDS_REVIEW":
      return Status_State.STATE_NEEDS_REVIEW;
    case 9:
    case "STATE_PUBLISHING":
      return Status_State.STATE_PUBLISHING;
    case 10:
    case "STATE_PUBLISHING_FAILED":
      return Status_State.STATE_PUBLISHING_FAILED;
    case 11:
    case "STATE_COMPLETED":
      return Status_State.STATE_COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status_State.UNRECOGNIZED;
  }
}

export function status_StateToJSON(object: Status_State): string {
  switch (object) {
    case Status_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Status_State.STATE_IMPORTING:
      return "STATE_IMPORTING";
    case Status_State.STATE_IMPORT_SUCCEEDED:
      return "STATE_IMPORT_SUCCEEDED";
    case Status_State.STATE_IMPORT_FAILED:
      return "STATE_IMPORT_FAILED";
    case Status_State.STATE_DELETING:
      return "STATE_DELETING";
    case Status_State.STATE_DELETION_FAILED:
      return "STATE_DELETION_FAILED";
    case Status_State.STATE_PROCESSING:
      return "STATE_PROCESSING";
    case Status_State.STATE_PROCESSING_FAILED:
      return "STATE_PROCESSING_FAILED";
    case Status_State.STATE_NEEDS_REVIEW:
      return "STATE_NEEDS_REVIEW";
    case Status_State.STATE_PUBLISHING:
      return "STATE_PUBLISHING";
    case Status_State.STATE_PUBLISHING_FAILED:
      return "STATE_PUBLISHING_FAILED";
    case Status_State.STATE_COMPLETED:
      return "STATE_COMPLETED";
    case Status_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDataset(): Dataset {
  return {
    name: "",
    displayName: "",
    description: "",
    versionId: "",
    usage: [],
    localFileSource: undefined,
    gcsSource: undefined,
    status: undefined,
    createTime: undefined,
    updateTime: undefined,
    versionCreateTime: undefined,
    versionDescription: "",
  };
}

export const Dataset: MessageFns<Dataset> = {
  encode(message: Dataset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.versionId !== "") {
      writer.uint32(34).string(message.versionId);
    }
    writer.uint32(42).fork();
    for (const v of message.usage) {
      writer.int32(v);
    }
    writer.join();
    if (message.localFileSource !== undefined) {
      LocalFileSource.encode(message.localFileSource, writer.uint32(50).fork()).join();
    }
    if (message.gcsSource !== undefined) {
      GcsSource.encode(message.gcsSource, writer.uint32(58).fork()).join();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(98).fork()).join();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(66).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(74).fork()).join();
    }
    if (message.versionCreateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.versionCreateTime), writer.uint32(82).fork()).join();
    }
    if (message.versionDescription !== "") {
      writer.uint32(90).string(message.versionDescription);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dataset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.versionId = reader.string();
          continue;
        case 5:
          if (tag === 40) {
            message.usage.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.usage.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.localFileSource = LocalFileSource.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gcsSource = GcsSource.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.versionCreateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.versionDescription = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dataset {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      usage: globalThis.Array.isArray(object?.usage) ? object.usage.map((e: any) => usageFromJSON(e)) : [],
      localFileSource: isSet(object.localFileSource) ? LocalFileSource.fromJSON(object.localFileSource) : undefined,
      gcsSource: isSet(object.gcsSource) ? GcsSource.fromJSON(object.gcsSource) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      versionCreateTime: isSet(object.versionCreateTime) ? fromJsonTimestamp(object.versionCreateTime) : undefined,
      versionDescription: isSet(object.versionDescription) ? globalThis.String(object.versionDescription) : "",
    };
  },

  toJSON(message: Dataset): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.usage?.length) {
      obj.usage = message.usage.map((e) => usageToJSON(e));
    }
    if (message.localFileSource !== undefined) {
      obj.localFileSource = LocalFileSource.toJSON(message.localFileSource);
    }
    if (message.gcsSource !== undefined) {
      obj.gcsSource = GcsSource.toJSON(message.gcsSource);
    }
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.versionCreateTime !== undefined) {
      obj.versionCreateTime = message.versionCreateTime.toISOString();
    }
    if (message.versionDescription !== "") {
      obj.versionDescription = message.versionDescription;
    }
    return obj;
  },

  create(base?: DeepPartial<Dataset>): Dataset {
    return Dataset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dataset>): Dataset {
    const message = createBaseDataset();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.versionId = object.versionId ?? "";
    message.usage = object.usage?.map((e) => e) || [];
    message.localFileSource = (object.localFileSource !== undefined && object.localFileSource !== null)
      ? LocalFileSource.fromPartial(object.localFileSource)
      : undefined;
    message.gcsSource = (object.gcsSource !== undefined && object.gcsSource !== null)
      ? GcsSource.fromPartial(object.gcsSource)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.versionCreateTime = object.versionCreateTime ?? undefined;
    message.versionDescription = object.versionDescription ?? "";
    return message;
  },
};

function createBaseStatus(): Status {
  return { state: 0, errorMessage: "" };
}

export const Status: MessageFns<Status> = {
  encode(message: Status, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Status {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Status {
    return {
      state: isSet(object.state) ? status_StateFromJSON(object.state) : 0,
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = status_StateToJSON(message.state);
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    return obj;
  },

  create(base?: DeepPartial<Status>): Status {
    return Status.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Status>): Status {
    const message = createBaseStatus();
    message.state = object.state ?? 0;
    message.errorMessage = object.errorMessage ?? "";
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