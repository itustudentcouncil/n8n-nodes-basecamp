// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/notebook_execution_job.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../protobuf/duration.js";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { Status } from "../../../rpc/status.js";
import { EncryptionSpec } from "./encryption_spec.js";
import { JobState, jobStateFromJSON, jobStateToJSON } from "./job_state.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/** NotebookExecutionJob represents an instance of a notebook execution. */
export interface NotebookExecutionJob {
  /** The Dataform Repository pointing to a single file notebook repository. */
  dataformRepositorySource?:
    | NotebookExecutionJob_DataformRepositorySource
    | undefined;
  /**
   * The Cloud Storage url pointing to the ipynb file. Format:
   * `gs://bucket/notebook_file.ipynb`
   */
  gcsNotebookSource?:
    | NotebookExecutionJob_GcsNotebookSource
    | undefined;
  /** The contents of an input notebook file. */
  directNotebookSource?:
    | NotebookExecutionJob_DirectNotebookSource
    | undefined;
  /** The NotebookRuntimeTemplate to source compute configuration from. */
  notebookRuntimeTemplateResourceName?:
    | string
    | undefined;
  /**
   * The Cloud Storage location to upload the result to. Format:
   * `gs://bucket-name`
   */
  gcsOutputUri?:
    | string
    | undefined;
  /** The user email to run the execution as. Only supported by Colab runtimes. */
  executionUser?:
    | string
    | undefined;
  /** The service account to run the execution as. */
  serviceAccount?:
    | string
    | undefined;
  /**
   * Output only. The resource name of this NotebookExecutionJob. Format:
   * `projects/{project_id}/locations/{location}/notebookExecutionJobs/{job_id}`
   */
  name: string;
  /**
   * The display name of the NotebookExecutionJob. The name can be up to 128
   * characters long and can consist of any UTF-8 characters.
   */
  displayName: string;
  /** Max running time of the execution job in seconds (default 86400s / 24 hrs). */
  executionTimeout:
    | Duration
    | undefined;
  /**
   * Output only. The Schedule resource name if this job is triggered by one.
   * Format:
   * `projects/{project_id}/locations/{location}/schedules/{schedule_id}`
   */
  scheduleResourceName: string;
  /** Output only. The state of the NotebookExecutionJob. */
  jobState: JobState;
  /**
   * Output only. Populated when the NotebookExecutionJob is completed. When
   * there is an error during notebook execution, the error details are
   * populated.
   */
  status:
    | Status
    | undefined;
  /** Output only. Timestamp when this NotebookExecutionJob was created. */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. Timestamp when this NotebookExecutionJob was most recently
   * updated.
   */
  updateTime:
    | Date
    | undefined;
  /**
   * The labels with user-defined metadata to organize NotebookExecutionJobs.
   *
   * Label keys and values can be no longer than 64 characters
   * (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed.
   *
   * See https://goo.gl/xmQnxf for more information and examples of labels.
   * System reserved label keys are prefixed with "aiplatform.googleapis.com/"
   * and are immutable.
   */
  labels: { [key: string]: string };
  /**
   * Customer-managed encryption key spec for the notebook execution job.
   * This field is auto-populated if the
   * [NotebookService.NotebookRuntimeTemplate][] has an encryption spec.
   */
  encryptionSpec: EncryptionSpec | undefined;
}

/** The Dataform Repository containing the input notebook. */
export interface NotebookExecutionJob_DataformRepositorySource {
  /**
   * The resource name of the Dataform Repository. Format:
   * `projects/{project_id}/locations/{location}/repositories/{repository_id}`
   */
  dataformRepositoryResourceName: string;
  /**
   * The commit SHA to read repository with. If unset, the file will be read
   * at HEAD.
   */
  commitSha: string;
}

/** The Cloud Storage uri for the input notebook. */
export interface NotebookExecutionJob_GcsNotebookSource {
  /**
   * The Cloud Storage uri pointing to the ipynb file. Format:
   * `gs://bucket/notebook_file.ipynb`
   */
  uri: string;
  /**
   * The version of the Cloud Storage object to read. If unset, the current
   * version of the object is read. See
   * https://cloud.google.com/storage/docs/metadata#generation-number.
   */
  generation: string;
}

/** The content of the input notebook in ipynb format. */
export interface NotebookExecutionJob_DirectNotebookSource {
  /** The base64-encoded contents of the input notebook file. */
  content: Buffer;
}

export interface NotebookExecutionJob_LabelsEntry {
  key: string;
  value: string;
}

function createBaseNotebookExecutionJob(): NotebookExecutionJob {
  return {
    dataformRepositorySource: undefined,
    gcsNotebookSource: undefined,
    directNotebookSource: undefined,
    notebookRuntimeTemplateResourceName: undefined,
    gcsOutputUri: undefined,
    executionUser: undefined,
    serviceAccount: undefined,
    name: "",
    displayName: "",
    executionTimeout: undefined,
    scheduleResourceName: "",
    jobState: 0,
    status: undefined,
    createTime: undefined,
    updateTime: undefined,
    labels: {},
    encryptionSpec: undefined,
  };
}

export const NotebookExecutionJob: MessageFns<NotebookExecutionJob> = {
  encode(message: NotebookExecutionJob, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dataformRepositorySource !== undefined) {
      NotebookExecutionJob_DataformRepositorySource.encode(message.dataformRepositorySource, writer.uint32(26).fork())
        .join();
    }
    if (message.gcsNotebookSource !== undefined) {
      NotebookExecutionJob_GcsNotebookSource.encode(message.gcsNotebookSource, writer.uint32(34).fork()).join();
    }
    if (message.directNotebookSource !== undefined) {
      NotebookExecutionJob_DirectNotebookSource.encode(message.directNotebookSource, writer.uint32(138).fork()).join();
    }
    if (message.notebookRuntimeTemplateResourceName !== undefined) {
      writer.uint32(114).string(message.notebookRuntimeTemplateResourceName);
    }
    if (message.gcsOutputUri !== undefined) {
      writer.uint32(66).string(message.gcsOutputUri);
    }
    if (message.executionUser !== undefined) {
      writer.uint32(74).string(message.executionUser);
    }
    if (message.serviceAccount !== undefined) {
      writer.uint32(146).string(message.serviceAccount);
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.executionTimeout !== undefined) {
      Duration.encode(message.executionTimeout, writer.uint32(42).fork()).join();
    }
    if (message.scheduleResourceName !== "") {
      writer.uint32(50).string(message.scheduleResourceName);
    }
    if (message.jobState !== 0) {
      writer.uint32(80).int32(message.jobState);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(90).fork()).join();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(98).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(106).fork()).join();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      NotebookExecutionJob_LabelsEntry.encode({ key: key as any, value }, writer.uint32(154).fork()).join();
    });
    if (message.encryptionSpec !== undefined) {
      EncryptionSpec.encode(message.encryptionSpec, writer.uint32(178).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotebookExecutionJob {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotebookExecutionJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataformRepositorySource = NotebookExecutionJob_DataformRepositorySource.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gcsNotebookSource = NotebookExecutionJob_GcsNotebookSource.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.directNotebookSource = NotebookExecutionJob_DirectNotebookSource.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.notebookRuntimeTemplateResourceName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.gcsOutputUri = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.executionUser = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.serviceAccount = reader.string();
          continue;
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.executionTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.scheduleResourceName = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.jobState = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          const entry19 = NotebookExecutionJob_LabelsEntry.decode(reader, reader.uint32());
          if (entry19.value !== undefined) {
            message.labels[entry19.key] = entry19.value;
          }
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.encryptionSpec = EncryptionSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotebookExecutionJob {
    return {
      dataformRepositorySource: isSet(object.dataformRepositorySource)
        ? NotebookExecutionJob_DataformRepositorySource.fromJSON(object.dataformRepositorySource)
        : undefined,
      gcsNotebookSource: isSet(object.gcsNotebookSource)
        ? NotebookExecutionJob_GcsNotebookSource.fromJSON(object.gcsNotebookSource)
        : undefined,
      directNotebookSource: isSet(object.directNotebookSource)
        ? NotebookExecutionJob_DirectNotebookSource.fromJSON(object.directNotebookSource)
        : undefined,
      notebookRuntimeTemplateResourceName: isSet(object.notebookRuntimeTemplateResourceName)
        ? globalThis.String(object.notebookRuntimeTemplateResourceName)
        : undefined,
      gcsOutputUri: isSet(object.gcsOutputUri) ? globalThis.String(object.gcsOutputUri) : undefined,
      executionUser: isSet(object.executionUser) ? globalThis.String(object.executionUser) : undefined,
      serviceAccount: isSet(object.serviceAccount) ? globalThis.String(object.serviceAccount) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      executionTimeout: isSet(object.executionTimeout) ? Duration.fromJSON(object.executionTimeout) : undefined,
      scheduleResourceName: isSet(object.scheduleResourceName) ? globalThis.String(object.scheduleResourceName) : "",
      jobState: isSet(object.jobState) ? jobStateFromJSON(object.jobState) : 0,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      encryptionSpec: isSet(object.encryptionSpec) ? EncryptionSpec.fromJSON(object.encryptionSpec) : undefined,
    };
  },

  toJSON(message: NotebookExecutionJob): unknown {
    const obj: any = {};
    if (message.dataformRepositorySource !== undefined) {
      obj.dataformRepositorySource = NotebookExecutionJob_DataformRepositorySource.toJSON(
        message.dataformRepositorySource,
      );
    }
    if (message.gcsNotebookSource !== undefined) {
      obj.gcsNotebookSource = NotebookExecutionJob_GcsNotebookSource.toJSON(message.gcsNotebookSource);
    }
    if (message.directNotebookSource !== undefined) {
      obj.directNotebookSource = NotebookExecutionJob_DirectNotebookSource.toJSON(message.directNotebookSource);
    }
    if (message.notebookRuntimeTemplateResourceName !== undefined) {
      obj.notebookRuntimeTemplateResourceName = message.notebookRuntimeTemplateResourceName;
    }
    if (message.gcsOutputUri !== undefined) {
      obj.gcsOutputUri = message.gcsOutputUri;
    }
    if (message.executionUser !== undefined) {
      obj.executionUser = message.executionUser;
    }
    if (message.serviceAccount !== undefined) {
      obj.serviceAccount = message.serviceAccount;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.executionTimeout !== undefined) {
      obj.executionTimeout = Duration.toJSON(message.executionTimeout);
    }
    if (message.scheduleResourceName !== "") {
      obj.scheduleResourceName = message.scheduleResourceName;
    }
    if (message.jobState !== 0) {
      obj.jobState = jobStateToJSON(message.jobState);
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
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.encryptionSpec !== undefined) {
      obj.encryptionSpec = EncryptionSpec.toJSON(message.encryptionSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<NotebookExecutionJob>): NotebookExecutionJob {
    return NotebookExecutionJob.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NotebookExecutionJob>): NotebookExecutionJob {
    const message = createBaseNotebookExecutionJob();
    message.dataformRepositorySource =
      (object.dataformRepositorySource !== undefined && object.dataformRepositorySource !== null)
        ? NotebookExecutionJob_DataformRepositorySource.fromPartial(object.dataformRepositorySource)
        : undefined;
    message.gcsNotebookSource = (object.gcsNotebookSource !== undefined && object.gcsNotebookSource !== null)
      ? NotebookExecutionJob_GcsNotebookSource.fromPartial(object.gcsNotebookSource)
      : undefined;
    message.directNotebookSource = (object.directNotebookSource !== undefined && object.directNotebookSource !== null)
      ? NotebookExecutionJob_DirectNotebookSource.fromPartial(object.directNotebookSource)
      : undefined;
    message.notebookRuntimeTemplateResourceName = object.notebookRuntimeTemplateResourceName ?? undefined;
    message.gcsOutputUri = object.gcsOutputUri ?? undefined;
    message.executionUser = object.executionUser ?? undefined;
    message.serviceAccount = object.serviceAccount ?? undefined;
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.executionTimeout = (object.executionTimeout !== undefined && object.executionTimeout !== null)
      ? Duration.fromPartial(object.executionTimeout)
      : undefined;
    message.scheduleResourceName = object.scheduleResourceName ?? "";
    message.jobState = object.jobState ?? 0;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.encryptionSpec = (object.encryptionSpec !== undefined && object.encryptionSpec !== null)
      ? EncryptionSpec.fromPartial(object.encryptionSpec)
      : undefined;
    return message;
  },
};

function createBaseNotebookExecutionJob_DataformRepositorySource(): NotebookExecutionJob_DataformRepositorySource {
  return { dataformRepositoryResourceName: "", commitSha: "" };
}

export const NotebookExecutionJob_DataformRepositorySource: MessageFns<NotebookExecutionJob_DataformRepositorySource> =
  {
    encode(
      message: NotebookExecutionJob_DataformRepositorySource,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.dataformRepositoryResourceName !== "") {
        writer.uint32(10).string(message.dataformRepositoryResourceName);
      }
      if (message.commitSha !== "") {
        writer.uint32(18).string(message.commitSha);
      }
      return writer;
    },

    decode(input: BinaryReader | Uint8Array, length?: number): NotebookExecutionJob_DataformRepositorySource {
      const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseNotebookExecutionJob_DataformRepositorySource();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 10) {
              break;
            }

            message.dataformRepositoryResourceName = reader.string();
            continue;
          case 2:
            if (tag !== 18) {
              break;
            }

            message.commitSha = reader.string();
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },

    fromJSON(object: any): NotebookExecutionJob_DataformRepositorySource {
      return {
        dataformRepositoryResourceName: isSet(object.dataformRepositoryResourceName)
          ? globalThis.String(object.dataformRepositoryResourceName)
          : "",
        commitSha: isSet(object.commitSha) ? globalThis.String(object.commitSha) : "",
      };
    },

    toJSON(message: NotebookExecutionJob_DataformRepositorySource): unknown {
      const obj: any = {};
      if (message.dataformRepositoryResourceName !== "") {
        obj.dataformRepositoryResourceName = message.dataformRepositoryResourceName;
      }
      if (message.commitSha !== "") {
        obj.commitSha = message.commitSha;
      }
      return obj;
    },

    create(
      base?: DeepPartial<NotebookExecutionJob_DataformRepositorySource>,
    ): NotebookExecutionJob_DataformRepositorySource {
      return NotebookExecutionJob_DataformRepositorySource.fromPartial(base ?? {});
    },
    fromPartial(
      object: DeepPartial<NotebookExecutionJob_DataformRepositorySource>,
    ): NotebookExecutionJob_DataformRepositorySource {
      const message = createBaseNotebookExecutionJob_DataformRepositorySource();
      message.dataformRepositoryResourceName = object.dataformRepositoryResourceName ?? "";
      message.commitSha = object.commitSha ?? "";
      return message;
    },
  };

function createBaseNotebookExecutionJob_GcsNotebookSource(): NotebookExecutionJob_GcsNotebookSource {
  return { uri: "", generation: "" };
}

export const NotebookExecutionJob_GcsNotebookSource: MessageFns<NotebookExecutionJob_GcsNotebookSource> = {
  encode(message: NotebookExecutionJob_GcsNotebookSource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.generation !== "") {
      writer.uint32(18).string(message.generation);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotebookExecutionJob_GcsNotebookSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotebookExecutionJob_GcsNotebookSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.generation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotebookExecutionJob_GcsNotebookSource {
    return {
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      generation: isSet(object.generation) ? globalThis.String(object.generation) : "",
    };
  },

  toJSON(message: NotebookExecutionJob_GcsNotebookSource): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.generation !== "") {
      obj.generation = message.generation;
    }
    return obj;
  },

  create(base?: DeepPartial<NotebookExecutionJob_GcsNotebookSource>): NotebookExecutionJob_GcsNotebookSource {
    return NotebookExecutionJob_GcsNotebookSource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NotebookExecutionJob_GcsNotebookSource>): NotebookExecutionJob_GcsNotebookSource {
    const message = createBaseNotebookExecutionJob_GcsNotebookSource();
    message.uri = object.uri ?? "";
    message.generation = object.generation ?? "";
    return message;
  },
};

function createBaseNotebookExecutionJob_DirectNotebookSource(): NotebookExecutionJob_DirectNotebookSource {
  return { content: Buffer.alloc(0) };
}

export const NotebookExecutionJob_DirectNotebookSource: MessageFns<NotebookExecutionJob_DirectNotebookSource> = {
  encode(message: NotebookExecutionJob_DirectNotebookSource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotebookExecutionJob_DirectNotebookSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotebookExecutionJob_DirectNotebookSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotebookExecutionJob_DirectNotebookSource {
    return { content: isSet(object.content) ? Buffer.from(bytesFromBase64(object.content)) : Buffer.alloc(0) };
  },

  toJSON(message: NotebookExecutionJob_DirectNotebookSource): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    return obj;
  },

  create(base?: DeepPartial<NotebookExecutionJob_DirectNotebookSource>): NotebookExecutionJob_DirectNotebookSource {
    return NotebookExecutionJob_DirectNotebookSource.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NotebookExecutionJob_DirectNotebookSource>,
  ): NotebookExecutionJob_DirectNotebookSource {
    const message = createBaseNotebookExecutionJob_DirectNotebookSource();
    message.content = object.content ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseNotebookExecutionJob_LabelsEntry(): NotebookExecutionJob_LabelsEntry {
  return { key: "", value: "" };
}

export const NotebookExecutionJob_LabelsEntry: MessageFns<NotebookExecutionJob_LabelsEntry> = {
  encode(message: NotebookExecutionJob_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotebookExecutionJob_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotebookExecutionJob_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotebookExecutionJob_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: NotebookExecutionJob_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<NotebookExecutionJob_LabelsEntry>): NotebookExecutionJob_LabelsEntry {
    return NotebookExecutionJob_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NotebookExecutionJob_LabelsEntry>): NotebookExecutionJob_LabelsEntry {
    const message = createBaseNotebookExecutionJob_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
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