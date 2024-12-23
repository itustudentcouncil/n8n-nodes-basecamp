// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/spanner/admin/database/v1/backup_schedule.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../../protobuf/duration.js";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { Timestamp } from "../../../../protobuf/timestamp.js";
import { CreateBackupEncryptionConfig, FullBackupSpec, IncrementalBackupSpec } from "./backup.js";

export const protobufPackage = "google.spanner.admin.database.v1";

/** Defines specifications of the backup schedule. */
export interface BackupScheduleSpec {
  /** Cron style schedule specification. */
  cronSpec?: CrontabSpec | undefined;
}

/**
 * BackupSchedule expresses the automated backup creation specification for a
 * Spanner database.
 * Next ID: 10
 */
export interface BackupSchedule {
  /**
   * Identifier. Output only for the
   * [CreateBackupSchedule][DatabaseAdmin.CreateBackupSchededule] operation.
   * Required for the
   * [UpdateBackupSchedule][google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule]
   * operation. A globally unique identifier for the backup schedule which
   * cannot be changed. Values are of the form
   * `projects/<project>/instances/<instance>/databases/<database>/backupSchedules/[a-z][a-z0-9_\-]*[a-z0-9]`
   * The final segment of the name must be between 2 and 60 characters in
   * length.
   */
  name: string;
  /**
   * Optional. The schedule specification based on which the backup creations
   * are triggered.
   */
  spec:
    | BackupScheduleSpec
    | undefined;
  /**
   * Optional. The retention duration of a backup that must be at least 6 hours
   * and at most 366 days. The backup is eligible to be automatically deleted
   * once the retention period has elapsed.
   */
  retentionDuration:
    | Duration
    | undefined;
  /**
   * Optional. The encryption configuration that will be used to encrypt the
   * backup. If this field is not specified, the backup will use the same
   * encryption configuration as the database.
   */
  encryptionConfig:
    | CreateBackupEncryptionConfig
    | undefined;
  /** The schedule creates only full backups. */
  fullBackupSpec?:
    | FullBackupSpec
    | undefined;
  /** The schedule creates incremental backup chains. */
  incrementalBackupSpec?:
    | IncrementalBackupSpec
    | undefined;
  /**
   * Output only. The timestamp at which the schedule was last updated.
   * If the schedule has never been updated, this field contains the timestamp
   * when the schedule was first created.
   */
  updateTime: Date | undefined;
}

/**
 * CrontabSpec can be used to specify the version time and frequency at
 * which the backup should be created.
 */
export interface CrontabSpec {
  /**
   * Required. Textual representation of the crontab. User can customize the
   * backup frequency and the backup version time using the cron
   * expression. The version time must be in UTC timzeone.
   *
   * The backup will contain an externally consistent copy of the
   * database at the version time. Allowed frequencies are 12 hour, 1 day,
   * 1 week and 1 month. Examples of valid cron specifications:
   *   * `0 2/12 * * * ` : every 12 hours at (2, 14) hours past midnight in UTC.
   *   * `0 2,14 * * * ` : every 12 hours at (2,14) hours past midnight in UTC.
   *   * `0 2 * * * `    : once a day at 2 past midnight in UTC.
   *   * `0 2 * * 0 `    : once a week every Sunday at 2 past midnight in UTC.
   *   * `0 2 8 * * `    : once a month on 8th day at 2 past midnight in UTC.
   */
  text: string;
  /**
   * Output only. The time zone of the times in `CrontabSpec.text`. Currently
   * only UTC is supported.
   */
  timeZone: string;
  /**
   * Output only. Schedule backups will contain an externally consistent copy
   * of the database at the version time specified in
   * `schedule_spec.cron_spec`. However, Spanner may not initiate the creation
   * of the scheduled backups at that version time. Spanner will initiate
   * the creation of scheduled backups within the time window bounded by the
   * version_time specified in `schedule_spec.cron_spec` and version_time +
   * `creation_window`.
   */
  creationWindow: Duration | undefined;
}

/**
 * The request for
 * [CreateBackupSchedule][google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupSchedule].
 */
export interface CreateBackupScheduleRequest {
  /** Required. The name of the database that this backup schedule applies to. */
  parent: string;
  /**
   * Required. The Id to use for the backup schedule. The `backup_schedule_id`
   * appended to `parent` forms the full backup schedule name of the form
   * `projects/<project>/instances/<instance>/databases/<database>/backupSchedules/<backup_schedule_id>`.
   */
  backupScheduleId: string;
  /** Required. The backup schedule to create. */
  backupSchedule: BackupSchedule | undefined;
}

/**
 * The request for
 * [GetBackupSchedule][google.spanner.admin.database.v1.DatabaseAdmin.GetBackupSchedule].
 */
export interface GetBackupScheduleRequest {
  /**
   * Required. The name of the schedule to retrieve.
   * Values are of the form
   * `projects/<project>/instances/<instance>/databases/<database>/backupSchedules/<backup_schedule_id>`.
   */
  name: string;
}

/**
 * The request for
 * [DeleteBackupSchedule][google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupSchedule].
 */
export interface DeleteBackupScheduleRequest {
  /**
   * Required. The name of the schedule to delete.
   * Values are of the form
   * `projects/<project>/instances/<instance>/databases/<database>/backupSchedules/<backup_schedule_id>`.
   */
  name: string;
}

/**
 * The request for
 * [ListBackupSchedules][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules].
 */
export interface ListBackupSchedulesRequest {
  /**
   * Required. Database is the parent resource whose backup schedules should be
   * listed. Values are of the form
   * projects/<project>/instances/<instance>/databases/<database>
   */
  parent: string;
  /**
   * Optional. Number of backup schedules to be returned in the response. If 0
   * or less, defaults to the server's maximum allowed page size.
   */
  pageSize: number;
  /**
   * Optional. If non-empty, `page_token` should contain a
   * [next_page_token][google.spanner.admin.database.v1.ListBackupSchedulesResponse.next_page_token]
   * from a previous
   * [ListBackupSchedulesResponse][google.spanner.admin.database.v1.ListBackupSchedulesResponse]
   * to the same `parent`.
   */
  pageToken: string;
}

/**
 * The response for
 * [ListBackupSchedules][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules].
 */
export interface ListBackupSchedulesResponse {
  /** The list of backup schedules for a database. */
  backupSchedules: BackupSchedule[];
  /**
   * `next_page_token` can be sent in a subsequent
   * [ListBackupSchedules][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules]
   * call to fetch more of the schedules.
   */
  nextPageToken: string;
}

/**
 * The request for
 * [UpdateBackupScheduleRequest][google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule].
 */
export interface UpdateBackupScheduleRequest {
  /**
   * Required. The backup schedule to update. `backup_schedule.name`, and the
   * fields to be updated as specified by `update_mask` are required. Other
   * fields are ignored.
   */
  backupSchedule:
    | BackupSchedule
    | undefined;
  /**
   * Required. A mask specifying which fields in the BackupSchedule resource
   * should be updated. This mask is relative to the BackupSchedule resource,
   * not to the request message. The field mask must always be
   * specified; this prevents any future fields from being erased
   * accidentally.
   */
  updateMask: string[] | undefined;
}

function createBaseBackupScheduleSpec(): BackupScheduleSpec {
  return { cronSpec: undefined };
}

export const BackupScheduleSpec: MessageFns<BackupScheduleSpec> = {
  encode(message: BackupScheduleSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cronSpec !== undefined) {
      CrontabSpec.encode(message.cronSpec, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BackupScheduleSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupScheduleSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cronSpec = CrontabSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackupScheduleSpec {
    return { cronSpec: isSet(object.cronSpec) ? CrontabSpec.fromJSON(object.cronSpec) : undefined };
  },

  toJSON(message: BackupScheduleSpec): unknown {
    const obj: any = {};
    if (message.cronSpec !== undefined) {
      obj.cronSpec = CrontabSpec.toJSON(message.cronSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<BackupScheduleSpec>): BackupScheduleSpec {
    return BackupScheduleSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackupScheduleSpec>): BackupScheduleSpec {
    const message = createBaseBackupScheduleSpec();
    message.cronSpec = (object.cronSpec !== undefined && object.cronSpec !== null)
      ? CrontabSpec.fromPartial(object.cronSpec)
      : undefined;
    return message;
  },
};

function createBaseBackupSchedule(): BackupSchedule {
  return {
    name: "",
    spec: undefined,
    retentionDuration: undefined,
    encryptionConfig: undefined,
    fullBackupSpec: undefined,
    incrementalBackupSpec: undefined,
    updateTime: undefined,
  };
}

export const BackupSchedule: MessageFns<BackupSchedule> = {
  encode(message: BackupSchedule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.spec !== undefined) {
      BackupScheduleSpec.encode(message.spec, writer.uint32(50).fork()).join();
    }
    if (message.retentionDuration !== undefined) {
      Duration.encode(message.retentionDuration, writer.uint32(26).fork()).join();
    }
    if (message.encryptionConfig !== undefined) {
      CreateBackupEncryptionConfig.encode(message.encryptionConfig, writer.uint32(34).fork()).join();
    }
    if (message.fullBackupSpec !== undefined) {
      FullBackupSpec.encode(message.fullBackupSpec, writer.uint32(58).fork()).join();
    }
    if (message.incrementalBackupSpec !== undefined) {
      IncrementalBackupSpec.encode(message.incrementalBackupSpec, writer.uint32(66).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BackupSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackupSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.spec = BackupScheduleSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.retentionDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encryptionConfig = CreateBackupEncryptionConfig.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fullBackupSpec = FullBackupSpec.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.incrementalBackupSpec = IncrementalBackupSpec.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackupSchedule {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      spec: isSet(object.spec) ? BackupScheduleSpec.fromJSON(object.spec) : undefined,
      retentionDuration: isSet(object.retentionDuration) ? Duration.fromJSON(object.retentionDuration) : undefined,
      encryptionConfig: isSet(object.encryptionConfig)
        ? CreateBackupEncryptionConfig.fromJSON(object.encryptionConfig)
        : undefined,
      fullBackupSpec: isSet(object.fullBackupSpec) ? FullBackupSpec.fromJSON(object.fullBackupSpec) : undefined,
      incrementalBackupSpec: isSet(object.incrementalBackupSpec)
        ? IncrementalBackupSpec.fromJSON(object.incrementalBackupSpec)
        : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: BackupSchedule): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.spec !== undefined) {
      obj.spec = BackupScheduleSpec.toJSON(message.spec);
    }
    if (message.retentionDuration !== undefined) {
      obj.retentionDuration = Duration.toJSON(message.retentionDuration);
    }
    if (message.encryptionConfig !== undefined) {
      obj.encryptionConfig = CreateBackupEncryptionConfig.toJSON(message.encryptionConfig);
    }
    if (message.fullBackupSpec !== undefined) {
      obj.fullBackupSpec = FullBackupSpec.toJSON(message.fullBackupSpec);
    }
    if (message.incrementalBackupSpec !== undefined) {
      obj.incrementalBackupSpec = IncrementalBackupSpec.toJSON(message.incrementalBackupSpec);
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<BackupSchedule>): BackupSchedule {
    return BackupSchedule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackupSchedule>): BackupSchedule {
    const message = createBaseBackupSchedule();
    message.name = object.name ?? "";
    message.spec = (object.spec !== undefined && object.spec !== null)
      ? BackupScheduleSpec.fromPartial(object.spec)
      : undefined;
    message.retentionDuration = (object.retentionDuration !== undefined && object.retentionDuration !== null)
      ? Duration.fromPartial(object.retentionDuration)
      : undefined;
    message.encryptionConfig = (object.encryptionConfig !== undefined && object.encryptionConfig !== null)
      ? CreateBackupEncryptionConfig.fromPartial(object.encryptionConfig)
      : undefined;
    message.fullBackupSpec = (object.fullBackupSpec !== undefined && object.fullBackupSpec !== null)
      ? FullBackupSpec.fromPartial(object.fullBackupSpec)
      : undefined;
    message.incrementalBackupSpec =
      (object.incrementalBackupSpec !== undefined && object.incrementalBackupSpec !== null)
        ? IncrementalBackupSpec.fromPartial(object.incrementalBackupSpec)
        : undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseCrontabSpec(): CrontabSpec {
  return { text: "", timeZone: "", creationWindow: undefined };
}

export const CrontabSpec: MessageFns<CrontabSpec> = {
  encode(message: CrontabSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.timeZone !== "") {
      writer.uint32(18).string(message.timeZone);
    }
    if (message.creationWindow !== undefined) {
      Duration.encode(message.creationWindow, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CrontabSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrontabSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeZone = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creationWindow = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrontabSpec {
    return {
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      timeZone: isSet(object.timeZone) ? globalThis.String(object.timeZone) : "",
      creationWindow: isSet(object.creationWindow) ? Duration.fromJSON(object.creationWindow) : undefined,
    };
  },

  toJSON(message: CrontabSpec): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.timeZone !== "") {
      obj.timeZone = message.timeZone;
    }
    if (message.creationWindow !== undefined) {
      obj.creationWindow = Duration.toJSON(message.creationWindow);
    }
    return obj;
  },

  create(base?: DeepPartial<CrontabSpec>): CrontabSpec {
    return CrontabSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CrontabSpec>): CrontabSpec {
    const message = createBaseCrontabSpec();
    message.text = object.text ?? "";
    message.timeZone = object.timeZone ?? "";
    message.creationWindow = (object.creationWindow !== undefined && object.creationWindow !== null)
      ? Duration.fromPartial(object.creationWindow)
      : undefined;
    return message;
  },
};

function createBaseCreateBackupScheduleRequest(): CreateBackupScheduleRequest {
  return { parent: "", backupScheduleId: "", backupSchedule: undefined };
}

export const CreateBackupScheduleRequest: MessageFns<CreateBackupScheduleRequest> = {
  encode(message: CreateBackupScheduleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.backupScheduleId !== "") {
      writer.uint32(18).string(message.backupScheduleId);
    }
    if (message.backupSchedule !== undefined) {
      BackupSchedule.encode(message.backupSchedule, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateBackupScheduleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBackupScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backupScheduleId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.backupSchedule = BackupSchedule.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBackupScheduleRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      backupScheduleId: isSet(object.backupScheduleId) ? globalThis.String(object.backupScheduleId) : "",
      backupSchedule: isSet(object.backupSchedule) ? BackupSchedule.fromJSON(object.backupSchedule) : undefined,
    };
  },

  toJSON(message: CreateBackupScheduleRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.backupScheduleId !== "") {
      obj.backupScheduleId = message.backupScheduleId;
    }
    if (message.backupSchedule !== undefined) {
      obj.backupSchedule = BackupSchedule.toJSON(message.backupSchedule);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateBackupScheduleRequest>): CreateBackupScheduleRequest {
    return CreateBackupScheduleRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateBackupScheduleRequest>): CreateBackupScheduleRequest {
    const message = createBaseCreateBackupScheduleRequest();
    message.parent = object.parent ?? "";
    message.backupScheduleId = object.backupScheduleId ?? "";
    message.backupSchedule = (object.backupSchedule !== undefined && object.backupSchedule !== null)
      ? BackupSchedule.fromPartial(object.backupSchedule)
      : undefined;
    return message;
  },
};

function createBaseGetBackupScheduleRequest(): GetBackupScheduleRequest {
  return { name: "" };
}

export const GetBackupScheduleRequest: MessageFns<GetBackupScheduleRequest> = {
  encode(message: GetBackupScheduleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetBackupScheduleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBackupScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBackupScheduleRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetBackupScheduleRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetBackupScheduleRequest>): GetBackupScheduleRequest {
    return GetBackupScheduleRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetBackupScheduleRequest>): GetBackupScheduleRequest {
    const message = createBaseGetBackupScheduleRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDeleteBackupScheduleRequest(): DeleteBackupScheduleRequest {
  return { name: "" };
}

export const DeleteBackupScheduleRequest: MessageFns<DeleteBackupScheduleRequest> = {
  encode(message: DeleteBackupScheduleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteBackupScheduleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBackupScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteBackupScheduleRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteBackupScheduleRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteBackupScheduleRequest>): DeleteBackupScheduleRequest {
    return DeleteBackupScheduleRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteBackupScheduleRequest>): DeleteBackupScheduleRequest {
    const message = createBaseDeleteBackupScheduleRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListBackupSchedulesRequest(): ListBackupSchedulesRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListBackupSchedulesRequest: MessageFns<ListBackupSchedulesRequest> = {
  encode(message: ListBackupSchedulesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListBackupSchedulesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupSchedulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBackupSchedulesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBackupSchedulesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListBackupSchedulesRequest>): ListBackupSchedulesRequest {
    return ListBackupSchedulesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListBackupSchedulesRequest>): ListBackupSchedulesRequest {
    const message = createBaseListBackupSchedulesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListBackupSchedulesResponse(): ListBackupSchedulesResponse {
  return { backupSchedules: [], nextPageToken: "" };
}

export const ListBackupSchedulesResponse: MessageFns<ListBackupSchedulesResponse> = {
  encode(message: ListBackupSchedulesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.backupSchedules) {
      BackupSchedule.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListBackupSchedulesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBackupSchedulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupSchedules.push(BackupSchedule.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBackupSchedulesResponse {
    return {
      backupSchedules: globalThis.Array.isArray(object?.backupSchedules)
        ? object.backupSchedules.map((e: any) => BackupSchedule.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBackupSchedulesResponse): unknown {
    const obj: any = {};
    if (message.backupSchedules?.length) {
      obj.backupSchedules = message.backupSchedules.map((e) => BackupSchedule.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListBackupSchedulesResponse>): ListBackupSchedulesResponse {
    return ListBackupSchedulesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListBackupSchedulesResponse>): ListBackupSchedulesResponse {
    const message = createBaseListBackupSchedulesResponse();
    message.backupSchedules = object.backupSchedules?.map((e) => BackupSchedule.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseUpdateBackupScheduleRequest(): UpdateBackupScheduleRequest {
  return { backupSchedule: undefined, updateMask: undefined };
}

export const UpdateBackupScheduleRequest: MessageFns<UpdateBackupScheduleRequest> = {
  encode(message: UpdateBackupScheduleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.backupSchedule !== undefined) {
      BackupSchedule.encode(message.backupSchedule, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateBackupScheduleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBackupScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backupSchedule = BackupSchedule.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateBackupScheduleRequest {
    return {
      backupSchedule: isSet(object.backupSchedule) ? BackupSchedule.fromJSON(object.backupSchedule) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateBackupScheduleRequest): unknown {
    const obj: any = {};
    if (message.backupSchedule !== undefined) {
      obj.backupSchedule = BackupSchedule.toJSON(message.backupSchedule);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateBackupScheduleRequest>): UpdateBackupScheduleRequest {
    return UpdateBackupScheduleRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateBackupScheduleRequest>): UpdateBackupScheduleRequest {
    const message = createBaseUpdateBackupScheduleRequest();
    message.backupSchedule = (object.backupSchedule !== undefined && object.backupSchedule !== null)
      ? BackupSchedule.fromPartial(object.backupSchedule)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
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
