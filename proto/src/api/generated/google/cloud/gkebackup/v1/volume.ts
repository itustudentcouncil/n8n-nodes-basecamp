// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/gkebackup/v1/volume.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { NamespacedName } from "./common.js";

export const protobufPackage = "google.cloud.gkebackup.v1";

/**
 * Represents the backup of a specific persistent volume as a component of a
 * Backup - both the record of the operation and a pointer to the underlying
 * storage-specific artifacts.
 */
export interface VolumeBackup {
  /**
   * Output only. The full name of the VolumeBackup resource.
   * Format: `projects/* /locations/* /backupPlans/* /backups/* /volumeBackups/*`.
   */
  name: string;
  /**
   * Output only. Server generated global unique identifier of
   * [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.
   */
  uid: string;
  /**
   * Output only. The timestamp when this VolumeBackup resource was
   * created.
   */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. The timestamp when this VolumeBackup resource was last
   * updated.
   */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. A reference to the source Kubernetes PVC from which this
   * VolumeBackup was created.
   */
  sourcePvc:
    | NamespacedName
    | undefined;
  /**
   * Output only. A storage system-specific opaque handle to the underlying
   * volume backup.
   */
  volumeBackupHandle: string;
  /** Output only. The format used for the volume backup. */
  format: VolumeBackup_VolumeBackupFormat;
  /**
   * Output only. The aggregate size of the underlying artifacts associated with
   * this VolumeBackup in the backup storage. This may change over time when
   * multiple backups of the same volume share the same backup storage
   * location. In particular, this is likely to increase in size when
   * the immediately preceding backup of the same volume is deleted.
   */
  storageBytes: Long;
  /**
   * Output only. The minimum size of the disk to which this VolumeBackup can be
   * restored.
   */
  diskSizeBytes: Long;
  /**
   * Output only. The timestamp when the associated underlying volume backup
   * operation completed.
   */
  completeTime:
    | Date
    | undefined;
  /** Output only. The current state of this VolumeBackup. */
  state: VolumeBackup_State;
  /**
   * Output only. A human readable message explaining why the VolumeBackup is in
   * its current state.
   */
  stateMessage: string;
  /**
   * Output only. `etag` is used for optimistic concurrency control as a way to
   * help prevent simultaneous updates of a volume backup from overwriting each
   * other. It is strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform volume backup updates in order to avoid
   * race conditions.
   */
  etag: string;
}

/** Identifies the format used for the volume backup. */
export enum VolumeBackup_VolumeBackupFormat {
  /** VOLUME_BACKUP_FORMAT_UNSPECIFIED - Default value, not specified. */
  VOLUME_BACKUP_FORMAT_UNSPECIFIED = 0,
  /** GCE_PERSISTENT_DISK - Compute Engine Persistent Disk snapshot based volume backup. */
  GCE_PERSISTENT_DISK = 1,
  UNRECOGNIZED = -1,
}

export function volumeBackup_VolumeBackupFormatFromJSON(object: any): VolumeBackup_VolumeBackupFormat {
  switch (object) {
    case 0:
    case "VOLUME_BACKUP_FORMAT_UNSPECIFIED":
      return VolumeBackup_VolumeBackupFormat.VOLUME_BACKUP_FORMAT_UNSPECIFIED;
    case 1:
    case "GCE_PERSISTENT_DISK":
      return VolumeBackup_VolumeBackupFormat.GCE_PERSISTENT_DISK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VolumeBackup_VolumeBackupFormat.UNRECOGNIZED;
  }
}

export function volumeBackup_VolumeBackupFormatToJSON(object: VolumeBackup_VolumeBackupFormat): string {
  switch (object) {
    case VolumeBackup_VolumeBackupFormat.VOLUME_BACKUP_FORMAT_UNSPECIFIED:
      return "VOLUME_BACKUP_FORMAT_UNSPECIFIED";
    case VolumeBackup_VolumeBackupFormat.GCE_PERSISTENT_DISK:
      return "GCE_PERSISTENT_DISK";
    case VolumeBackup_VolumeBackupFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** The current state of a VolumeBackup */
export enum VolumeBackup_State {
  /** STATE_UNSPECIFIED - This is an illegal state and should not be encountered. */
  STATE_UNSPECIFIED = 0,
  /**
   * CREATING - A volume for the backup was identified and backup process is about to
   * start.
   */
  CREATING = 1,
  /**
   * SNAPSHOTTING - The volume backup operation has begun and is in the initial "snapshot"
   * phase of the process. Any defined ProtectedApplication "pre" hooks will
   * be executed before entering this state and "post" hooks will be executed
   * upon leaving this state.
   */
  SNAPSHOTTING = 2,
  /**
   * UPLOADING - The snapshot phase of the volume backup operation has completed and
   * the snapshot is now being uploaded to backup storage.
   */
  UPLOADING = 3,
  /** SUCCEEDED - The volume backup operation has completed successfully. */
  SUCCEEDED = 4,
  /** FAILED - The volume backup operation has failed. */
  FAILED = 5,
  /**
   * DELETING - This VolumeBackup resource (and its associated artifacts) is in the
   * process of being deleted.
   */
  DELETING = 6,
  UNRECOGNIZED = -1,
}

export function volumeBackup_StateFromJSON(object: any): VolumeBackup_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return VolumeBackup_State.STATE_UNSPECIFIED;
    case 1:
    case "CREATING":
      return VolumeBackup_State.CREATING;
    case 2:
    case "SNAPSHOTTING":
      return VolumeBackup_State.SNAPSHOTTING;
    case 3:
    case "UPLOADING":
      return VolumeBackup_State.UPLOADING;
    case 4:
    case "SUCCEEDED":
      return VolumeBackup_State.SUCCEEDED;
    case 5:
    case "FAILED":
      return VolumeBackup_State.FAILED;
    case 6:
    case "DELETING":
      return VolumeBackup_State.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VolumeBackup_State.UNRECOGNIZED;
  }
}

export function volumeBackup_StateToJSON(object: VolumeBackup_State): string {
  switch (object) {
    case VolumeBackup_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case VolumeBackup_State.CREATING:
      return "CREATING";
    case VolumeBackup_State.SNAPSHOTTING:
      return "SNAPSHOTTING";
    case VolumeBackup_State.UPLOADING:
      return "UPLOADING";
    case VolumeBackup_State.SUCCEEDED:
      return "SUCCEEDED";
    case VolumeBackup_State.FAILED:
      return "FAILED";
    case VolumeBackup_State.DELETING:
      return "DELETING";
    case VolumeBackup_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Represents the operation of restoring a volume from a VolumeBackup. */
export interface VolumeRestore {
  /**
   * Output only. Full name of the VolumeRestore resource.
   * Format: `projects/* /locations/* /restorePlans/* /restores/* /volumeRestores/*`
   */
  name: string;
  /**
   * Output only. Server generated global unique identifier of
   * [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.
   */
  uid: string;
  /**
   * Output only. The timestamp when this VolumeRestore resource was
   * created.
   */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. The timestamp when this VolumeRestore resource was last
   * updated.
   */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. The full name of the VolumeBackup from which the volume will
   * be restored. Format:
   * `projects/* /locations/* /backupPlans/* /backups/* /volumeBackups/*`.
   */
  volumeBackup: string;
  /** Output only. The reference to the target Kubernetes PVC to be restored. */
  targetPvc:
    | NamespacedName
    | undefined;
  /**
   * Output only. A storage system-specific opaque handler to the underlying
   * volume created for the target PVC from the volume backup.
   */
  volumeHandle: string;
  /** Output only. The type of volume provisioned */
  volumeType: VolumeRestore_VolumeType;
  /**
   * Output only. The timestamp when the associated underlying volume
   * restoration completed.
   */
  completeTime:
    | Date
    | undefined;
  /** Output only. The current state of this VolumeRestore. */
  state: VolumeRestore_State;
  /**
   * Output only. A human readable message explaining why the VolumeRestore is
   * in its current state.
   */
  stateMessage: string;
  /**
   * Output only. `etag` is used for optimistic concurrency control as a way to
   * help prevent simultaneous updates of a volume restore from overwriting each
   * other. It is strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform volume restore updates in order to avoid
   * race conditions.
   */
  etag: string;
}

/** Supported volume types. */
export enum VolumeRestore_VolumeType {
  /** VOLUME_TYPE_UNSPECIFIED - Default */
  VOLUME_TYPE_UNSPECIFIED = 0,
  /** GCE_PERSISTENT_DISK - Compute Engine Persistent Disk volume */
  GCE_PERSISTENT_DISK = 1,
  UNRECOGNIZED = -1,
}

export function volumeRestore_VolumeTypeFromJSON(object: any): VolumeRestore_VolumeType {
  switch (object) {
    case 0:
    case "VOLUME_TYPE_UNSPECIFIED":
      return VolumeRestore_VolumeType.VOLUME_TYPE_UNSPECIFIED;
    case 1:
    case "GCE_PERSISTENT_DISK":
      return VolumeRestore_VolumeType.GCE_PERSISTENT_DISK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VolumeRestore_VolumeType.UNRECOGNIZED;
  }
}

export function volumeRestore_VolumeTypeToJSON(object: VolumeRestore_VolumeType): string {
  switch (object) {
    case VolumeRestore_VolumeType.VOLUME_TYPE_UNSPECIFIED:
      return "VOLUME_TYPE_UNSPECIFIED";
    case VolumeRestore_VolumeType.GCE_PERSISTENT_DISK:
      return "GCE_PERSISTENT_DISK";
    case VolumeRestore_VolumeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** The current state of a VolumeRestore */
export enum VolumeRestore_State {
  /** STATE_UNSPECIFIED - This is an illegal state and should not be encountered. */
  STATE_UNSPECIFIED = 0,
  /**
   * CREATING - A volume for the restore was identified and restore process is about to
   * start.
   */
  CREATING = 1,
  /** RESTORING - The volume is currently being restored. */
  RESTORING = 2,
  /** SUCCEEDED - The volume has been successfully restored. */
  SUCCEEDED = 3,
  /** FAILED - The volume restoration process failed. */
  FAILED = 4,
  /** DELETING - This VolumeRestore resource is in the process of being deleted. */
  DELETING = 5,
  UNRECOGNIZED = -1,
}

export function volumeRestore_StateFromJSON(object: any): VolumeRestore_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return VolumeRestore_State.STATE_UNSPECIFIED;
    case 1:
    case "CREATING":
      return VolumeRestore_State.CREATING;
    case 2:
    case "RESTORING":
      return VolumeRestore_State.RESTORING;
    case 3:
    case "SUCCEEDED":
      return VolumeRestore_State.SUCCEEDED;
    case 4:
    case "FAILED":
      return VolumeRestore_State.FAILED;
    case 5:
    case "DELETING":
      return VolumeRestore_State.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VolumeRestore_State.UNRECOGNIZED;
  }
}

export function volumeRestore_StateToJSON(object: VolumeRestore_State): string {
  switch (object) {
    case VolumeRestore_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case VolumeRestore_State.CREATING:
      return "CREATING";
    case VolumeRestore_State.RESTORING:
      return "RESTORING";
    case VolumeRestore_State.SUCCEEDED:
      return "SUCCEEDED";
    case VolumeRestore_State.FAILED:
      return "FAILED";
    case VolumeRestore_State.DELETING:
      return "DELETING";
    case VolumeRestore_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseVolumeBackup(): VolumeBackup {
  return {
    name: "",
    uid: "",
    createTime: undefined,
    updateTime: undefined,
    sourcePvc: undefined,
    volumeBackupHandle: "",
    format: 0,
    storageBytes: Long.ZERO,
    diskSizeBytes: Long.ZERO,
    completeTime: undefined,
    state: 0,
    stateMessage: "",
    etag: "",
  };
}

export const VolumeBackup: MessageFns<VolumeBackup> = {
  encode(message: VolumeBackup, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(26).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(34).fork()).join();
    }
    if (message.sourcePvc !== undefined) {
      NamespacedName.encode(message.sourcePvc, writer.uint32(42).fork()).join();
    }
    if (message.volumeBackupHandle !== "") {
      writer.uint32(50).string(message.volumeBackupHandle);
    }
    if (message.format !== 0) {
      writer.uint32(56).int32(message.format);
    }
    if (!message.storageBytes.equals(Long.ZERO)) {
      writer.uint32(64).int64(message.storageBytes.toString());
    }
    if (!message.diskSizeBytes.equals(Long.ZERO)) {
      writer.uint32(72).int64(message.diskSizeBytes.toString());
    }
    if (message.completeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completeTime), writer.uint32(82).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(88).int32(message.state);
    }
    if (message.stateMessage !== "") {
      writer.uint32(98).string(message.stateMessage);
    }
    if (message.etag !== "") {
      writer.uint32(106).string(message.etag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VolumeBackup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolumeBackup();
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

          message.uid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sourcePvc = NamespacedName.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.volumeBackupHandle = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.storageBytes = Long.fromString(reader.int64().toString());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.diskSizeBytes = Long.fromString(reader.int64().toString());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.completeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.stateMessage = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VolumeBackup {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      sourcePvc: isSet(object.sourcePvc) ? NamespacedName.fromJSON(object.sourcePvc) : undefined,
      volumeBackupHandle: isSet(object.volumeBackupHandle) ? globalThis.String(object.volumeBackupHandle) : "",
      format: isSet(object.format) ? volumeBackup_VolumeBackupFormatFromJSON(object.format) : 0,
      storageBytes: isSet(object.storageBytes) ? Long.fromValue(object.storageBytes) : Long.ZERO,
      diskSizeBytes: isSet(object.diskSizeBytes) ? Long.fromValue(object.diskSizeBytes) : Long.ZERO,
      completeTime: isSet(object.completeTime) ? fromJsonTimestamp(object.completeTime) : undefined,
      state: isSet(object.state) ? volumeBackup_StateFromJSON(object.state) : 0,
      stateMessage: isSet(object.stateMessage) ? globalThis.String(object.stateMessage) : "",
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: VolumeBackup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.sourcePvc !== undefined) {
      obj.sourcePvc = NamespacedName.toJSON(message.sourcePvc);
    }
    if (message.volumeBackupHandle !== "") {
      obj.volumeBackupHandle = message.volumeBackupHandle;
    }
    if (message.format !== 0) {
      obj.format = volumeBackup_VolumeBackupFormatToJSON(message.format);
    }
    if (!message.storageBytes.equals(Long.ZERO)) {
      obj.storageBytes = (message.storageBytes || Long.ZERO).toString();
    }
    if (!message.diskSizeBytes.equals(Long.ZERO)) {
      obj.diskSizeBytes = (message.diskSizeBytes || Long.ZERO).toString();
    }
    if (message.completeTime !== undefined) {
      obj.completeTime = message.completeTime.toISOString();
    }
    if (message.state !== 0) {
      obj.state = volumeBackup_StateToJSON(message.state);
    }
    if (message.stateMessage !== "") {
      obj.stateMessage = message.stateMessage;
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create(base?: DeepPartial<VolumeBackup>): VolumeBackup {
    return VolumeBackup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VolumeBackup>): VolumeBackup {
    const message = createBaseVolumeBackup();
    message.name = object.name ?? "";
    message.uid = object.uid ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.sourcePvc = (object.sourcePvc !== undefined && object.sourcePvc !== null)
      ? NamespacedName.fromPartial(object.sourcePvc)
      : undefined;
    message.volumeBackupHandle = object.volumeBackupHandle ?? "";
    message.format = object.format ?? 0;
    message.storageBytes = (object.storageBytes !== undefined && object.storageBytes !== null)
      ? Long.fromValue(object.storageBytes)
      : Long.ZERO;
    message.diskSizeBytes = (object.diskSizeBytes !== undefined && object.diskSizeBytes !== null)
      ? Long.fromValue(object.diskSizeBytes)
      : Long.ZERO;
    message.completeTime = object.completeTime ?? undefined;
    message.state = object.state ?? 0;
    message.stateMessage = object.stateMessage ?? "";
    message.etag = object.etag ?? "";
    return message;
  },
};

function createBaseVolumeRestore(): VolumeRestore {
  return {
    name: "",
    uid: "",
    createTime: undefined,
    updateTime: undefined,
    volumeBackup: "",
    targetPvc: undefined,
    volumeHandle: "",
    volumeType: 0,
    completeTime: undefined,
    state: 0,
    stateMessage: "",
    etag: "",
  };
}

export const VolumeRestore: MessageFns<VolumeRestore> = {
  encode(message: VolumeRestore, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(26).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(34).fork()).join();
    }
    if (message.volumeBackup !== "") {
      writer.uint32(42).string(message.volumeBackup);
    }
    if (message.targetPvc !== undefined) {
      NamespacedName.encode(message.targetPvc, writer.uint32(50).fork()).join();
    }
    if (message.volumeHandle !== "") {
      writer.uint32(58).string(message.volumeHandle);
    }
    if (message.volumeType !== 0) {
      writer.uint32(64).int32(message.volumeType);
    }
    if (message.completeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completeTime), writer.uint32(74).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(80).int32(message.state);
    }
    if (message.stateMessage !== "") {
      writer.uint32(90).string(message.stateMessage);
    }
    if (message.etag !== "") {
      writer.uint32(98).string(message.etag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VolumeRestore {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolumeRestore();
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

          message.uid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.volumeBackup = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.targetPvc = NamespacedName.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.volumeHandle = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.volumeType = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.completeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.stateMessage = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VolumeRestore {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      volumeBackup: isSet(object.volumeBackup) ? globalThis.String(object.volumeBackup) : "",
      targetPvc: isSet(object.targetPvc) ? NamespacedName.fromJSON(object.targetPvc) : undefined,
      volumeHandle: isSet(object.volumeHandle) ? globalThis.String(object.volumeHandle) : "",
      volumeType: isSet(object.volumeType) ? volumeRestore_VolumeTypeFromJSON(object.volumeType) : 0,
      completeTime: isSet(object.completeTime) ? fromJsonTimestamp(object.completeTime) : undefined,
      state: isSet(object.state) ? volumeRestore_StateFromJSON(object.state) : 0,
      stateMessage: isSet(object.stateMessage) ? globalThis.String(object.stateMessage) : "",
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: VolumeRestore): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.volumeBackup !== "") {
      obj.volumeBackup = message.volumeBackup;
    }
    if (message.targetPvc !== undefined) {
      obj.targetPvc = NamespacedName.toJSON(message.targetPvc);
    }
    if (message.volumeHandle !== "") {
      obj.volumeHandle = message.volumeHandle;
    }
    if (message.volumeType !== 0) {
      obj.volumeType = volumeRestore_VolumeTypeToJSON(message.volumeType);
    }
    if (message.completeTime !== undefined) {
      obj.completeTime = message.completeTime.toISOString();
    }
    if (message.state !== 0) {
      obj.state = volumeRestore_StateToJSON(message.state);
    }
    if (message.stateMessage !== "") {
      obj.stateMessage = message.stateMessage;
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create(base?: DeepPartial<VolumeRestore>): VolumeRestore {
    return VolumeRestore.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VolumeRestore>): VolumeRestore {
    const message = createBaseVolumeRestore();
    message.name = object.name ?? "";
    message.uid = object.uid ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.volumeBackup = object.volumeBackup ?? "";
    message.targetPvc = (object.targetPvc !== undefined && object.targetPvc !== null)
      ? NamespacedName.fromPartial(object.targetPvc)
      : undefined;
    message.volumeHandle = object.volumeHandle ?? "";
    message.volumeType = object.volumeType ?? 0;
    message.completeTime = object.completeTime ?? undefined;
    message.state = object.state ?? 0;
    message.stateMessage = object.stateMessage ?? "";
    message.etag = object.etag ?? "";
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