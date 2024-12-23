// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/stream/logging/v1/logging.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.stream.logging.v1";

/** OperationEventType is the enum value for the state of operation. */
export enum OperationEventType {
  /** OPERATION_EVENT_TYPE_UNSPECIFIED - Unspecified operation event type. */
  OPERATION_EVENT_TYPE_UNSPECIFIED = 0,
  /** OPERATION_EVENT_CREATE_CONTENT_STARTED - Operation for create stream content started. */
  OPERATION_EVENT_CREATE_CONTENT_STARTED = 1,
  /** OPERATION_EVENT_CREATE_CONTENT_ENDED - Operation for create stream content ended. */
  OPERATION_EVENT_CREATE_CONTENT_ENDED = 2,
  /** OPERATION_EVENT_BUILD_CONTENT_STARTED - Operation for build stream content started. */
  OPERATION_EVENT_BUILD_CONTENT_STARTED = 3,
  /** OPERATION_EVENT_BUILD_CONTENT_ENDED - Operation for build stream content ended. */
  OPERATION_EVENT_BUILD_CONTENT_ENDED = 4,
  /** OPERATION_EVENT_UPDATE_CONTENT_STARTED - Operation for update stream content started. */
  OPERATION_EVENT_UPDATE_CONTENT_STARTED = 5,
  /** OPERATION_EVENT_UPDATE_CONTENT_ENDED - Operation for update stream content ended. */
  OPERATION_EVENT_UPDATE_CONTENT_ENDED = 6,
  /** OPERATION_EVENT_DELETE_CONTENT_STARTED - Operation for delete stream content started. */
  OPERATION_EVENT_DELETE_CONTENT_STARTED = 7,
  /** OPERATION_EVENT_DELETE_CONTENT_ENDED - Operation for delete stream content ended. */
  OPERATION_EVENT_DELETE_CONTENT_ENDED = 8,
  /** OPERATION_EVENT_CREATE_INSTANCE_STARTED - Operation for create stream instance started. */
  OPERATION_EVENT_CREATE_INSTANCE_STARTED = 9,
  /** OPERATION_EVENT_CREATE_INSTANCE_ENDED - Operation for create stream instance ended. */
  OPERATION_EVENT_CREATE_INSTANCE_ENDED = 10,
  /** OPERATION_EVENT_UPDATE_INSTANCE_STARTED - Operation for update stream instance started. */
  OPERATION_EVENT_UPDATE_INSTANCE_STARTED = 11,
  /** OPERATION_EVENT_UPDATE_INSTANCE_ENDED - Operation for update stream instance ended. */
  OPERATION_EVENT_UPDATE_INSTANCE_ENDED = 12,
  /** OPERATION_EVENT_DELETE_INSTANCE_STARTED - Operation for delete stream instance started. */
  OPERATION_EVENT_DELETE_INSTANCE_STARTED = 13,
  /** OPERATION_EVENT_DELETE_INSTANCE_ENDED - Operation for delete stream instance ended. */
  OPERATION_EVENT_DELETE_INSTANCE_ENDED = 14,
  UNRECOGNIZED = -1,
}

export function operationEventTypeFromJSON(object: any): OperationEventType {
  switch (object) {
    case 0:
    case "OPERATION_EVENT_TYPE_UNSPECIFIED":
      return OperationEventType.OPERATION_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "OPERATION_EVENT_CREATE_CONTENT_STARTED":
      return OperationEventType.OPERATION_EVENT_CREATE_CONTENT_STARTED;
    case 2:
    case "OPERATION_EVENT_CREATE_CONTENT_ENDED":
      return OperationEventType.OPERATION_EVENT_CREATE_CONTENT_ENDED;
    case 3:
    case "OPERATION_EVENT_BUILD_CONTENT_STARTED":
      return OperationEventType.OPERATION_EVENT_BUILD_CONTENT_STARTED;
    case 4:
    case "OPERATION_EVENT_BUILD_CONTENT_ENDED":
      return OperationEventType.OPERATION_EVENT_BUILD_CONTENT_ENDED;
    case 5:
    case "OPERATION_EVENT_UPDATE_CONTENT_STARTED":
      return OperationEventType.OPERATION_EVENT_UPDATE_CONTENT_STARTED;
    case 6:
    case "OPERATION_EVENT_UPDATE_CONTENT_ENDED":
      return OperationEventType.OPERATION_EVENT_UPDATE_CONTENT_ENDED;
    case 7:
    case "OPERATION_EVENT_DELETE_CONTENT_STARTED":
      return OperationEventType.OPERATION_EVENT_DELETE_CONTENT_STARTED;
    case 8:
    case "OPERATION_EVENT_DELETE_CONTENT_ENDED":
      return OperationEventType.OPERATION_EVENT_DELETE_CONTENT_ENDED;
    case 9:
    case "OPERATION_EVENT_CREATE_INSTANCE_STARTED":
      return OperationEventType.OPERATION_EVENT_CREATE_INSTANCE_STARTED;
    case 10:
    case "OPERATION_EVENT_CREATE_INSTANCE_ENDED":
      return OperationEventType.OPERATION_EVENT_CREATE_INSTANCE_ENDED;
    case 11:
    case "OPERATION_EVENT_UPDATE_INSTANCE_STARTED":
      return OperationEventType.OPERATION_EVENT_UPDATE_INSTANCE_STARTED;
    case 12:
    case "OPERATION_EVENT_UPDATE_INSTANCE_ENDED":
      return OperationEventType.OPERATION_EVENT_UPDATE_INSTANCE_ENDED;
    case 13:
    case "OPERATION_EVENT_DELETE_INSTANCE_STARTED":
      return OperationEventType.OPERATION_EVENT_DELETE_INSTANCE_STARTED;
    case 14:
    case "OPERATION_EVENT_DELETE_INSTANCE_ENDED":
      return OperationEventType.OPERATION_EVENT_DELETE_INSTANCE_ENDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationEventType.UNRECOGNIZED;
  }
}

export function operationEventTypeToJSON(object: OperationEventType): string {
  switch (object) {
    case OperationEventType.OPERATION_EVENT_TYPE_UNSPECIFIED:
      return "OPERATION_EVENT_TYPE_UNSPECIFIED";
    case OperationEventType.OPERATION_EVENT_CREATE_CONTENT_STARTED:
      return "OPERATION_EVENT_CREATE_CONTENT_STARTED";
    case OperationEventType.OPERATION_EVENT_CREATE_CONTENT_ENDED:
      return "OPERATION_EVENT_CREATE_CONTENT_ENDED";
    case OperationEventType.OPERATION_EVENT_BUILD_CONTENT_STARTED:
      return "OPERATION_EVENT_BUILD_CONTENT_STARTED";
    case OperationEventType.OPERATION_EVENT_BUILD_CONTENT_ENDED:
      return "OPERATION_EVENT_BUILD_CONTENT_ENDED";
    case OperationEventType.OPERATION_EVENT_UPDATE_CONTENT_STARTED:
      return "OPERATION_EVENT_UPDATE_CONTENT_STARTED";
    case OperationEventType.OPERATION_EVENT_UPDATE_CONTENT_ENDED:
      return "OPERATION_EVENT_UPDATE_CONTENT_ENDED";
    case OperationEventType.OPERATION_EVENT_DELETE_CONTENT_STARTED:
      return "OPERATION_EVENT_DELETE_CONTENT_STARTED";
    case OperationEventType.OPERATION_EVENT_DELETE_CONTENT_ENDED:
      return "OPERATION_EVENT_DELETE_CONTENT_ENDED";
    case OperationEventType.OPERATION_EVENT_CREATE_INSTANCE_STARTED:
      return "OPERATION_EVENT_CREATE_INSTANCE_STARTED";
    case OperationEventType.OPERATION_EVENT_CREATE_INSTANCE_ENDED:
      return "OPERATION_EVENT_CREATE_INSTANCE_ENDED";
    case OperationEventType.OPERATION_EVENT_UPDATE_INSTANCE_STARTED:
      return "OPERATION_EVENT_UPDATE_INSTANCE_STARTED";
    case OperationEventType.OPERATION_EVENT_UPDATE_INSTANCE_ENDED:
      return "OPERATION_EVENT_UPDATE_INSTANCE_ENDED";
    case OperationEventType.OPERATION_EVENT_DELETE_INSTANCE_STARTED:
      return "OPERATION_EVENT_DELETE_INSTANCE_STARTED";
    case OperationEventType.OPERATION_EVENT_DELETE_INSTANCE_ENDED:
      return "OPERATION_EVENT_DELETE_INSTANCE_ENDED";
    case OperationEventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SessionEventType is the enum value for the state of session. */
export enum SessionEventType {
  /** SESSION_EVENT_TYPE_UNSPECIFIED - Unspecified session event type. */
  SESSION_EVENT_TYPE_UNSPECIFIED = 0,
  /** SESSION_EVENT_SERVER_STREAMER_SHUTTING_DOWN - Session in streamer shutting down state. */
  SESSION_EVENT_SERVER_STREAMER_SHUTTING_DOWN = 1,
  /** SESSION_EVENT_SERVER_STREAMER_READY - Session in streamer ready state. */
  SESSION_EVENT_SERVER_STREAMER_READY = 2,
  /** SESSION_EVENT_SERVER_STREAMER_BINARY_STARTED - Session in streamer binary started state. */
  SESSION_EVENT_SERVER_STREAMER_BINARY_STARTED = 3,
  /** SESSION_EVENT_SERVER_STREAMER_READ_POD_IMAGE_NAMES - Session in streamer read pod image names state. */
  SESSION_EVENT_SERVER_STREAMER_READ_POD_IMAGE_NAMES = 4,
  /** SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_GAME - Session in streamer connected to game state. */
  SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_GAME = 5,
  /** SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_CLIENT - Session in streamer connected to client state. */
  SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_CLIENT = 6,
  /** SESSION_EVENT_SERVER_STREAMER_DISCONNECTED_FROM_CLIENT - Session in streamer disconnected from client state. */
  SESSION_EVENT_SERVER_STREAMER_DISCONNECTED_FROM_CLIENT = 7,
  /** SESSION_EVENT_SERVER_STREAMER_RECEIVED_CREATE_SESSION_REQUEST - Session in streamer received create session request state. */
  SESSION_EVENT_SERVER_STREAMER_RECEIVED_CREATE_SESSION_REQUEST = 8,
  /** SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_CLOSED - Session in streamer game message to stream closed state. */
  SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_CLOSED = 9,
  /** SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_CLOSED - Session in streamer game frame stream closed state. */
  SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_CLOSED = 10,
  /** SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_ERROR - Session in streamer game message stream error state. */
  SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_ERROR = 11,
  /** SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_ERROR - Session in streamer game audio stream error state. */
  SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_ERROR = 12,
  /** SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_CLOSED - Session in streamer game audio stream closed state. */
  SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_CLOSED = 13,
  /** SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_ERROR - Session in streamer game frame stream error state. */
  SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_ERROR = 14,
  /** SESSION_EVENT_SERVER_GAME_DISCONNECTING_AFTER_PAUSED_TOO_LONG - Session in game disconnecting after paused too long state. */
  SESSION_EVENT_SERVER_GAME_DISCONNECTING_AFTER_PAUSED_TOO_LONG = 15,
  /** SESSION_EVENT_SERVER_STREAMER_RECEIVED_EXPERIMENT_CONFIGURATION - Session in streamer received experiment configuration state. */
  SESSION_EVENT_SERVER_STREAMER_RECEIVED_EXPERIMENT_CONFIGURATION = 16,
  /** SESSION_EVENT_SERVER_GAME_CONNECTED_TO_LOGGING_SERVICE - Session in game connected to logging service state. */
  SESSION_EVENT_SERVER_GAME_CONNECTED_TO_LOGGING_SERVICE = 17,
  /** SESSION_EVENT_SERVER_STREAMER_DETERMINED_SESSION_OPTIONS - Session in streamer determined session options state. */
  SESSION_EVENT_SERVER_STREAMER_DETERMINED_SESSION_OPTIONS = 18,
  /** SESSION_EVENT_SERVER_STREAMER_KILLED_IN_MIDDLE_OF_SESSION - Session in streamer killed in middle of session state. */
  SESSION_EVENT_SERVER_STREAMER_KILLED_IN_MIDDLE_OF_SESSION = 19,
  /** SESSION_EVENT_SERVER_GAME_UPDATED_FRAME_PIPELINE - Session in game updated frame pipeline state. */
  SESSION_EVENT_SERVER_GAME_UPDATED_FRAME_PIPELINE = 20,
  /** SESSION_EVENT_SERVER_ERROR - Session in server error state. */
  SESSION_EVENT_SERVER_ERROR = 21,
  UNRECOGNIZED = -1,
}

export function sessionEventTypeFromJSON(object: any): SessionEventType {
  switch (object) {
    case 0:
    case "SESSION_EVENT_TYPE_UNSPECIFIED":
      return SessionEventType.SESSION_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "SESSION_EVENT_SERVER_STREAMER_SHUTTING_DOWN":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_SHUTTING_DOWN;
    case 2:
    case "SESSION_EVENT_SERVER_STREAMER_READY":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_READY;
    case 3:
    case "SESSION_EVENT_SERVER_STREAMER_BINARY_STARTED":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_BINARY_STARTED;
    case 4:
    case "SESSION_EVENT_SERVER_STREAMER_READ_POD_IMAGE_NAMES":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_READ_POD_IMAGE_NAMES;
    case 5:
    case "SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_GAME":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_GAME;
    case 6:
    case "SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_CLIENT":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_CLIENT;
    case 7:
    case "SESSION_EVENT_SERVER_STREAMER_DISCONNECTED_FROM_CLIENT":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_DISCONNECTED_FROM_CLIENT;
    case 8:
    case "SESSION_EVENT_SERVER_STREAMER_RECEIVED_CREATE_SESSION_REQUEST":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_RECEIVED_CREATE_SESSION_REQUEST;
    case 9:
    case "SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_CLOSED":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_CLOSED;
    case 10:
    case "SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_CLOSED":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_CLOSED;
    case 11:
    case "SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_ERROR":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_ERROR;
    case 12:
    case "SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_ERROR":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_ERROR;
    case 13:
    case "SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_CLOSED":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_CLOSED;
    case 14:
    case "SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_ERROR":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_ERROR;
    case 15:
    case "SESSION_EVENT_SERVER_GAME_DISCONNECTING_AFTER_PAUSED_TOO_LONG":
      return SessionEventType.SESSION_EVENT_SERVER_GAME_DISCONNECTING_AFTER_PAUSED_TOO_LONG;
    case 16:
    case "SESSION_EVENT_SERVER_STREAMER_RECEIVED_EXPERIMENT_CONFIGURATION":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_RECEIVED_EXPERIMENT_CONFIGURATION;
    case 17:
    case "SESSION_EVENT_SERVER_GAME_CONNECTED_TO_LOGGING_SERVICE":
      return SessionEventType.SESSION_EVENT_SERVER_GAME_CONNECTED_TO_LOGGING_SERVICE;
    case 18:
    case "SESSION_EVENT_SERVER_STREAMER_DETERMINED_SESSION_OPTIONS":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_DETERMINED_SESSION_OPTIONS;
    case 19:
    case "SESSION_EVENT_SERVER_STREAMER_KILLED_IN_MIDDLE_OF_SESSION":
      return SessionEventType.SESSION_EVENT_SERVER_STREAMER_KILLED_IN_MIDDLE_OF_SESSION;
    case 20:
    case "SESSION_EVENT_SERVER_GAME_UPDATED_FRAME_PIPELINE":
      return SessionEventType.SESSION_EVENT_SERVER_GAME_UPDATED_FRAME_PIPELINE;
    case 21:
    case "SESSION_EVENT_SERVER_ERROR":
      return SessionEventType.SESSION_EVENT_SERVER_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SessionEventType.UNRECOGNIZED;
  }
}

export function sessionEventTypeToJSON(object: SessionEventType): string {
  switch (object) {
    case SessionEventType.SESSION_EVENT_TYPE_UNSPECIFIED:
      return "SESSION_EVENT_TYPE_UNSPECIFIED";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_SHUTTING_DOWN:
      return "SESSION_EVENT_SERVER_STREAMER_SHUTTING_DOWN";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_READY:
      return "SESSION_EVENT_SERVER_STREAMER_READY";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_BINARY_STARTED:
      return "SESSION_EVENT_SERVER_STREAMER_BINARY_STARTED";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_READ_POD_IMAGE_NAMES:
      return "SESSION_EVENT_SERVER_STREAMER_READ_POD_IMAGE_NAMES";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_GAME:
      return "SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_GAME";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_CLIENT:
      return "SESSION_EVENT_SERVER_STREAMER_CONNECTED_TO_CLIENT";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_DISCONNECTED_FROM_CLIENT:
      return "SESSION_EVENT_SERVER_STREAMER_DISCONNECTED_FROM_CLIENT";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_RECEIVED_CREATE_SESSION_REQUEST:
      return "SESSION_EVENT_SERVER_STREAMER_RECEIVED_CREATE_SESSION_REQUEST";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_CLOSED:
      return "SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_CLOSED";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_CLOSED:
      return "SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_CLOSED";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_ERROR:
      return "SESSION_EVENT_SERVER_STREAMER_GAME_MESSAGE_STREAM_ERROR";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_ERROR:
      return "SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_ERROR";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_CLOSED:
      return "SESSION_EVENT_SERVER_STREAMER_GAME_AUDIO_STREAM_CLOSED";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_ERROR:
      return "SESSION_EVENT_SERVER_STREAMER_GAME_FRAME_STREAM_ERROR";
    case SessionEventType.SESSION_EVENT_SERVER_GAME_DISCONNECTING_AFTER_PAUSED_TOO_LONG:
      return "SESSION_EVENT_SERVER_GAME_DISCONNECTING_AFTER_PAUSED_TOO_LONG";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_RECEIVED_EXPERIMENT_CONFIGURATION:
      return "SESSION_EVENT_SERVER_STREAMER_RECEIVED_EXPERIMENT_CONFIGURATION";
    case SessionEventType.SESSION_EVENT_SERVER_GAME_CONNECTED_TO_LOGGING_SERVICE:
      return "SESSION_EVENT_SERVER_GAME_CONNECTED_TO_LOGGING_SERVICE";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_DETERMINED_SESSION_OPTIONS:
      return "SESSION_EVENT_SERVER_STREAMER_DETERMINED_SESSION_OPTIONS";
    case SessionEventType.SESSION_EVENT_SERVER_STREAMER_KILLED_IN_MIDDLE_OF_SESSION:
      return "SESSION_EVENT_SERVER_STREAMER_KILLED_IN_MIDDLE_OF_SESSION";
    case SessionEventType.SESSION_EVENT_SERVER_GAME_UPDATED_FRAME_PIPELINE:
      return "SESSION_EVENT_SERVER_GAME_UPDATED_FRAME_PIPELINE";
    case SessionEventType.SESSION_EVENT_SERVER_ERROR:
      return "SESSION_EVENT_SERVER_ERROR";
    case SessionEventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * OperationEventLog contains the time series data of the operations on the
 * stream resources. Internally, these logs represent events happening in
 * the control plane as result of API invocations against the stream resource
 * entities.
 */
export interface OperationEventLog {
  /** Enum for type of event being logged. */
  eventType: OperationEventType;
  /** Timestamp when the event occurred. */
  eventTime:
    | Date
    | undefined;
  /** Operation resource identifier. */
  operation: string;
  /** Artifact created as a result of the operation. */
  operationArtifacts: OperationArtifact[];
}

/**
 * OperationArtifact contains the information about the artifact created as
 * result of the operation.
 */
export interface OperationArtifact {
  /** Type of the artifact. */
  artifactType: string;
  /** Location of the artifact. */
  artifactUri: string;
}

/**
 * SessionEventLog contains the time series data regarding the streaming session
 * to serve the end consumer. Internally, these logs represent events in the
 * data plane streamer instance as a result of end consumer interacting with the
 * stream resources.
 */
export interface SessionEventLog {
  /** Enum for type of event being logged. */
  eventType: SessionEventType;
  /** Timestamp when the event occurred. */
  eventTime:
    | Date
    | undefined;
  /** Session identifier generated from the server. */
  sessionId: string;
}

function createBaseOperationEventLog(): OperationEventLog {
  return { eventType: 0, eventTime: undefined, operation: "", operationArtifacts: [] };
}

export const OperationEventLog: MessageFns<OperationEventLog> = {
  encode(message: OperationEventLog, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.eventType !== 0) {
      writer.uint32(8).int32(message.eventType);
    }
    if (message.eventTime !== undefined) {
      Timestamp.encode(toTimestamp(message.eventTime), writer.uint32(18).fork()).join();
    }
    if (message.operation !== "") {
      writer.uint32(26).string(message.operation);
    }
    for (const v of message.operationArtifacts) {
      OperationArtifact.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperationEventLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationEventLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.operationArtifacts.push(OperationArtifact.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationEventLog {
    return {
      eventType: isSet(object.eventType) ? operationEventTypeFromJSON(object.eventType) : 0,
      eventTime: isSet(object.eventTime) ? fromJsonTimestamp(object.eventTime) : undefined,
      operation: isSet(object.operation) ? globalThis.String(object.operation) : "",
      operationArtifacts: globalThis.Array.isArray(object?.operationArtifacts)
        ? object.operationArtifacts.map((e: any) => OperationArtifact.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperationEventLog): unknown {
    const obj: any = {};
    if (message.eventType !== 0) {
      obj.eventType = operationEventTypeToJSON(message.eventType);
    }
    if (message.eventTime !== undefined) {
      obj.eventTime = message.eventTime.toISOString();
    }
    if (message.operation !== "") {
      obj.operation = message.operation;
    }
    if (message.operationArtifacts?.length) {
      obj.operationArtifacts = message.operationArtifacts.map((e) => OperationArtifact.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<OperationEventLog>): OperationEventLog {
    return OperationEventLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperationEventLog>): OperationEventLog {
    const message = createBaseOperationEventLog();
    message.eventType = object.eventType ?? 0;
    message.eventTime = object.eventTime ?? undefined;
    message.operation = object.operation ?? "";
    message.operationArtifacts = object.operationArtifacts?.map((e) => OperationArtifact.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperationArtifact(): OperationArtifact {
  return { artifactType: "", artifactUri: "" };
}

export const OperationArtifact: MessageFns<OperationArtifact> = {
  encode(message: OperationArtifact, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.artifactType !== "") {
      writer.uint32(10).string(message.artifactType);
    }
    if (message.artifactUri !== "") {
      writer.uint32(18).string(message.artifactUri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperationArtifact {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationArtifact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.artifactType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.artifactUri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationArtifact {
    return {
      artifactType: isSet(object.artifactType) ? globalThis.String(object.artifactType) : "",
      artifactUri: isSet(object.artifactUri) ? globalThis.String(object.artifactUri) : "",
    };
  },

  toJSON(message: OperationArtifact): unknown {
    const obj: any = {};
    if (message.artifactType !== "") {
      obj.artifactType = message.artifactType;
    }
    if (message.artifactUri !== "") {
      obj.artifactUri = message.artifactUri;
    }
    return obj;
  },

  create(base?: DeepPartial<OperationArtifact>): OperationArtifact {
    return OperationArtifact.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperationArtifact>): OperationArtifact {
    const message = createBaseOperationArtifact();
    message.artifactType = object.artifactType ?? "";
    message.artifactUri = object.artifactUri ?? "";
    return message;
  },
};

function createBaseSessionEventLog(): SessionEventLog {
  return { eventType: 0, eventTime: undefined, sessionId: "" };
}

export const SessionEventLog: MessageFns<SessionEventLog> = {
  encode(message: SessionEventLog, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.eventType !== 0) {
      writer.uint32(8).int32(message.eventType);
    }
    if (message.eventTime !== undefined) {
      Timestamp.encode(toTimestamp(message.eventTime), writer.uint32(18).fork()).join();
    }
    if (message.sessionId !== "") {
      writer.uint32(26).string(message.sessionId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SessionEventLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionEventLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sessionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionEventLog {
    return {
      eventType: isSet(object.eventType) ? sessionEventTypeFromJSON(object.eventType) : 0,
      eventTime: isSet(object.eventTime) ? fromJsonTimestamp(object.eventTime) : undefined,
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
    };
  },

  toJSON(message: SessionEventLog): unknown {
    const obj: any = {};
    if (message.eventType !== 0) {
      obj.eventType = sessionEventTypeToJSON(message.eventType);
    }
    if (message.eventTime !== undefined) {
      obj.eventTime = message.eventTime.toISOString();
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    return obj;
  },

  create(base?: DeepPartial<SessionEventLog>): SessionEventLog {
    return SessionEventLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SessionEventLog>): SessionEventLog {
    const message = createBaseSessionEventLog();
    message.eventType = object.eventType ?? 0;
    message.eventTime = object.eventTime ?? undefined;
    message.sessionId = object.sessionId ?? "";
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
