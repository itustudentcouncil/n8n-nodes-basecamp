// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/datastore/admin/v1/migration.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.datastore.admin.v1";

/** States for a migration. */
export enum MigrationState {
  /** MIGRATION_STATE_UNSPECIFIED - Unspecified. */
  MIGRATION_STATE_UNSPECIFIED = 0,
  /** RUNNING - The migration is running. */
  RUNNING = 1,
  /** PAUSED - The migration is paused. */
  PAUSED = 2,
  /** COMPLETE - The migration is complete. */
  COMPLETE = 3,
  UNRECOGNIZED = -1,
}

export function migrationStateFromJSON(object: any): MigrationState {
  switch (object) {
    case 0:
    case "MIGRATION_STATE_UNSPECIFIED":
      return MigrationState.MIGRATION_STATE_UNSPECIFIED;
    case 1:
    case "RUNNING":
      return MigrationState.RUNNING;
    case 2:
    case "PAUSED":
      return MigrationState.PAUSED;
    case 3:
    case "COMPLETE":
      return MigrationState.COMPLETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MigrationState.UNRECOGNIZED;
  }
}

export function migrationStateToJSON(object: MigrationState): string {
  switch (object) {
    case MigrationState.MIGRATION_STATE_UNSPECIFIED:
      return "MIGRATION_STATE_UNSPECIFIED";
    case MigrationState.RUNNING:
      return "RUNNING";
    case MigrationState.PAUSED:
      return "PAUSED";
    case MigrationState.COMPLETE:
      return "COMPLETE";
    case MigrationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Steps in a migration. */
export enum MigrationStep {
  /** MIGRATION_STEP_UNSPECIFIED - Unspecified. */
  MIGRATION_STEP_UNSPECIFIED = 0,
  /** PREPARE - Pre-migration: the database is prepared for migration. */
  PREPARE = 6,
  /** START - Start of migration. */
  START = 1,
  /** APPLY_WRITES_SYNCHRONOUSLY - Writes are applied synchronously to at least one replica. */
  APPLY_WRITES_SYNCHRONOUSLY = 7,
  /**
   * COPY_AND_VERIFY - Data is copied to Cloud Firestore and then verified to match the data in
   * Cloud Datastore.
   */
  COPY_AND_VERIFY = 2,
  /** REDIRECT_EVENTUALLY_CONSISTENT_READS - Eventually-consistent reads are redirected to Cloud Firestore. */
  REDIRECT_EVENTUALLY_CONSISTENT_READS = 3,
  /** REDIRECT_STRONGLY_CONSISTENT_READS - Strongly-consistent reads are redirected to Cloud Firestore. */
  REDIRECT_STRONGLY_CONSISTENT_READS = 4,
  /** REDIRECT_WRITES - Writes are redirected to Cloud Firestore. */
  REDIRECT_WRITES = 5,
  UNRECOGNIZED = -1,
}

export function migrationStepFromJSON(object: any): MigrationStep {
  switch (object) {
    case 0:
    case "MIGRATION_STEP_UNSPECIFIED":
      return MigrationStep.MIGRATION_STEP_UNSPECIFIED;
    case 6:
    case "PREPARE":
      return MigrationStep.PREPARE;
    case 1:
    case "START":
      return MigrationStep.START;
    case 7:
    case "APPLY_WRITES_SYNCHRONOUSLY":
      return MigrationStep.APPLY_WRITES_SYNCHRONOUSLY;
    case 2:
    case "COPY_AND_VERIFY":
      return MigrationStep.COPY_AND_VERIFY;
    case 3:
    case "REDIRECT_EVENTUALLY_CONSISTENT_READS":
      return MigrationStep.REDIRECT_EVENTUALLY_CONSISTENT_READS;
    case 4:
    case "REDIRECT_STRONGLY_CONSISTENT_READS":
      return MigrationStep.REDIRECT_STRONGLY_CONSISTENT_READS;
    case 5:
    case "REDIRECT_WRITES":
      return MigrationStep.REDIRECT_WRITES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MigrationStep.UNRECOGNIZED;
  }
}

export function migrationStepToJSON(object: MigrationStep): string {
  switch (object) {
    case MigrationStep.MIGRATION_STEP_UNSPECIFIED:
      return "MIGRATION_STEP_UNSPECIFIED";
    case MigrationStep.PREPARE:
      return "PREPARE";
    case MigrationStep.START:
      return "START";
    case MigrationStep.APPLY_WRITES_SYNCHRONOUSLY:
      return "APPLY_WRITES_SYNCHRONOUSLY";
    case MigrationStep.COPY_AND_VERIFY:
      return "COPY_AND_VERIFY";
    case MigrationStep.REDIRECT_EVENTUALLY_CONSISTENT_READS:
      return "REDIRECT_EVENTUALLY_CONSISTENT_READS";
    case MigrationStep.REDIRECT_STRONGLY_CONSISTENT_READS:
      return "REDIRECT_STRONGLY_CONSISTENT_READS";
    case MigrationStep.REDIRECT_WRITES:
      return "REDIRECT_WRITES";
    case MigrationStep.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * An event signifying a change in state of a [migration from Cloud Datastore to
 * Cloud Firestore in Datastore
 * mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).
 */
export interface MigrationStateEvent {
  /** The new state of the migration. */
  state: MigrationState;
}

/**
 * An event signifying the start of a new step in a [migration from Cloud
 * Datastore to Cloud Firestore in Datastore
 * mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).
 */
export interface MigrationProgressEvent {
  /**
   * The step that is starting.
   *
   * An event with step set to `START` indicates that the migration
   * has been reverted back to the initial pre-migration state.
   */
  step: MigrationStep;
  /** Details for the `PREPARE` step. */
  prepareStepDetails?:
    | MigrationProgressEvent_PrepareStepDetails
    | undefined;
  /** Details for the `REDIRECT_WRITES` step. */
  redirectWritesStepDetails?: MigrationProgressEvent_RedirectWritesStepDetails | undefined;
}

/** Concurrency modes for transactions in Cloud Firestore. */
export enum MigrationProgressEvent_ConcurrencyMode {
  /** CONCURRENCY_MODE_UNSPECIFIED - Unspecified. */
  CONCURRENCY_MODE_UNSPECIFIED = 0,
  /** PESSIMISTIC - Pessimistic concurrency. */
  PESSIMISTIC = 1,
  /** OPTIMISTIC - Optimistic concurrency. */
  OPTIMISTIC = 2,
  /** OPTIMISTIC_WITH_ENTITY_GROUPS - Optimistic concurrency with entity groups. */
  OPTIMISTIC_WITH_ENTITY_GROUPS = 3,
  UNRECOGNIZED = -1,
}

export function migrationProgressEvent_ConcurrencyModeFromJSON(object: any): MigrationProgressEvent_ConcurrencyMode {
  switch (object) {
    case 0:
    case "CONCURRENCY_MODE_UNSPECIFIED":
      return MigrationProgressEvent_ConcurrencyMode.CONCURRENCY_MODE_UNSPECIFIED;
    case 1:
    case "PESSIMISTIC":
      return MigrationProgressEvent_ConcurrencyMode.PESSIMISTIC;
    case 2:
    case "OPTIMISTIC":
      return MigrationProgressEvent_ConcurrencyMode.OPTIMISTIC;
    case 3:
    case "OPTIMISTIC_WITH_ENTITY_GROUPS":
      return MigrationProgressEvent_ConcurrencyMode.OPTIMISTIC_WITH_ENTITY_GROUPS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MigrationProgressEvent_ConcurrencyMode.UNRECOGNIZED;
  }
}

export function migrationProgressEvent_ConcurrencyModeToJSON(object: MigrationProgressEvent_ConcurrencyMode): string {
  switch (object) {
    case MigrationProgressEvent_ConcurrencyMode.CONCURRENCY_MODE_UNSPECIFIED:
      return "CONCURRENCY_MODE_UNSPECIFIED";
    case MigrationProgressEvent_ConcurrencyMode.PESSIMISTIC:
      return "PESSIMISTIC";
    case MigrationProgressEvent_ConcurrencyMode.OPTIMISTIC:
      return "OPTIMISTIC";
    case MigrationProgressEvent_ConcurrencyMode.OPTIMISTIC_WITH_ENTITY_GROUPS:
      return "OPTIMISTIC_WITH_ENTITY_GROUPS";
    case MigrationProgressEvent_ConcurrencyMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Details for the `PREPARE` step. */
export interface MigrationProgressEvent_PrepareStepDetails {
  /**
   * The concurrency mode this database will use when it reaches the
   * `REDIRECT_WRITES` step.
   */
  concurrencyMode: MigrationProgressEvent_ConcurrencyMode;
}

/** Details for the `REDIRECT_WRITES` step. */
export interface MigrationProgressEvent_RedirectWritesStepDetails {
  /** Ths concurrency mode for this database. */
  concurrencyMode: MigrationProgressEvent_ConcurrencyMode;
}

function createBaseMigrationStateEvent(): MigrationStateEvent {
  return { state: 0 };
}

export const MigrationStateEvent: MessageFns<MigrationStateEvent> = {
  encode(message: MigrationStateEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MigrationStateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationStateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MigrationStateEvent {
    return { state: isSet(object.state) ? migrationStateFromJSON(object.state) : 0 };
  },

  toJSON(message: MigrationStateEvent): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = migrationStateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<MigrationStateEvent>): MigrationStateEvent {
    return MigrationStateEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MigrationStateEvent>): MigrationStateEvent {
    const message = createBaseMigrationStateEvent();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseMigrationProgressEvent(): MigrationProgressEvent {
  return { step: 0, prepareStepDetails: undefined, redirectWritesStepDetails: undefined };
}

export const MigrationProgressEvent: MessageFns<MigrationProgressEvent> = {
  encode(message: MigrationProgressEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.step !== 0) {
      writer.uint32(8).int32(message.step);
    }
    if (message.prepareStepDetails !== undefined) {
      MigrationProgressEvent_PrepareStepDetails.encode(message.prepareStepDetails, writer.uint32(18).fork()).join();
    }
    if (message.redirectWritesStepDetails !== undefined) {
      MigrationProgressEvent_RedirectWritesStepDetails.encode(
        message.redirectWritesStepDetails,
        writer.uint32(26).fork(),
      ).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MigrationProgressEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationProgressEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.step = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prepareStepDetails = MigrationProgressEvent_PrepareStepDetails.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redirectWritesStepDetails = MigrationProgressEvent_RedirectWritesStepDetails.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MigrationProgressEvent {
    return {
      step: isSet(object.step) ? migrationStepFromJSON(object.step) : 0,
      prepareStepDetails: isSet(object.prepareStepDetails)
        ? MigrationProgressEvent_PrepareStepDetails.fromJSON(object.prepareStepDetails)
        : undefined,
      redirectWritesStepDetails: isSet(object.redirectWritesStepDetails)
        ? MigrationProgressEvent_RedirectWritesStepDetails.fromJSON(object.redirectWritesStepDetails)
        : undefined,
    };
  },

  toJSON(message: MigrationProgressEvent): unknown {
    const obj: any = {};
    if (message.step !== 0) {
      obj.step = migrationStepToJSON(message.step);
    }
    if (message.prepareStepDetails !== undefined) {
      obj.prepareStepDetails = MigrationProgressEvent_PrepareStepDetails.toJSON(message.prepareStepDetails);
    }
    if (message.redirectWritesStepDetails !== undefined) {
      obj.redirectWritesStepDetails = MigrationProgressEvent_RedirectWritesStepDetails.toJSON(
        message.redirectWritesStepDetails,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<MigrationProgressEvent>): MigrationProgressEvent {
    return MigrationProgressEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MigrationProgressEvent>): MigrationProgressEvent {
    const message = createBaseMigrationProgressEvent();
    message.step = object.step ?? 0;
    message.prepareStepDetails = (object.prepareStepDetails !== undefined && object.prepareStepDetails !== null)
      ? MigrationProgressEvent_PrepareStepDetails.fromPartial(object.prepareStepDetails)
      : undefined;
    message.redirectWritesStepDetails =
      (object.redirectWritesStepDetails !== undefined && object.redirectWritesStepDetails !== null)
        ? MigrationProgressEvent_RedirectWritesStepDetails.fromPartial(object.redirectWritesStepDetails)
        : undefined;
    return message;
  },
};

function createBaseMigrationProgressEvent_PrepareStepDetails(): MigrationProgressEvent_PrepareStepDetails {
  return { concurrencyMode: 0 };
}

export const MigrationProgressEvent_PrepareStepDetails: MessageFns<MigrationProgressEvent_PrepareStepDetails> = {
  encode(message: MigrationProgressEvent_PrepareStepDetails, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.concurrencyMode !== 0) {
      writer.uint32(8).int32(message.concurrencyMode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MigrationProgressEvent_PrepareStepDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationProgressEvent_PrepareStepDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.concurrencyMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MigrationProgressEvent_PrepareStepDetails {
    return {
      concurrencyMode: isSet(object.concurrencyMode)
        ? migrationProgressEvent_ConcurrencyModeFromJSON(object.concurrencyMode)
        : 0,
    };
  },

  toJSON(message: MigrationProgressEvent_PrepareStepDetails): unknown {
    const obj: any = {};
    if (message.concurrencyMode !== 0) {
      obj.concurrencyMode = migrationProgressEvent_ConcurrencyModeToJSON(message.concurrencyMode);
    }
    return obj;
  },

  create(base?: DeepPartial<MigrationProgressEvent_PrepareStepDetails>): MigrationProgressEvent_PrepareStepDetails {
    return MigrationProgressEvent_PrepareStepDetails.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MigrationProgressEvent_PrepareStepDetails>,
  ): MigrationProgressEvent_PrepareStepDetails {
    const message = createBaseMigrationProgressEvent_PrepareStepDetails();
    message.concurrencyMode = object.concurrencyMode ?? 0;
    return message;
  },
};

function createBaseMigrationProgressEvent_RedirectWritesStepDetails(): MigrationProgressEvent_RedirectWritesStepDetails {
  return { concurrencyMode: 0 };
}

export const MigrationProgressEvent_RedirectWritesStepDetails: MessageFns<
  MigrationProgressEvent_RedirectWritesStepDetails
> = {
  encode(
    message: MigrationProgressEvent_RedirectWritesStepDetails,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.concurrencyMode !== 0) {
      writer.uint32(8).int32(message.concurrencyMode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MigrationProgressEvent_RedirectWritesStepDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationProgressEvent_RedirectWritesStepDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.concurrencyMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MigrationProgressEvent_RedirectWritesStepDetails {
    return {
      concurrencyMode: isSet(object.concurrencyMode)
        ? migrationProgressEvent_ConcurrencyModeFromJSON(object.concurrencyMode)
        : 0,
    };
  },

  toJSON(message: MigrationProgressEvent_RedirectWritesStepDetails): unknown {
    const obj: any = {};
    if (message.concurrencyMode !== 0) {
      obj.concurrencyMode = migrationProgressEvent_ConcurrencyModeToJSON(message.concurrencyMode);
    }
    return obj;
  },

  create(
    base?: DeepPartial<MigrationProgressEvent_RedirectWritesStepDetails>,
  ): MigrationProgressEvent_RedirectWritesStepDetails {
    return MigrationProgressEvent_RedirectWritesStepDetails.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MigrationProgressEvent_RedirectWritesStepDetails>,
  ): MigrationProgressEvent_RedirectWritesStepDetails {
    const message = createBaseMigrationProgressEvent_RedirectWritesStepDetails();
    message.concurrencyMode = object.concurrencyMode ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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
