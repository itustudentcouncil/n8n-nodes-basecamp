// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/resultstore/v2/common.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../protobuf/duration.js";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.devtools.resultstore.v2";

/** These correspond to the prefix of the rule name. Eg cc_test has language CC. */
export enum Language {
  /** LANGUAGE_UNSPECIFIED - Language unspecified or not listed here. */
  LANGUAGE_UNSPECIFIED = 0,
  /** NONE - Not related to any particular language */
  NONE = 1,
  /** ANDROID - Android */
  ANDROID = 2,
  /** AS - ActionScript (Flash) */
  AS = 3,
  /** CC - C++ or C */
  CC = 4,
  /** CSS - Cascading-Style-Sheets */
  CSS = 5,
  /** DART - Dart */
  DART = 6,
  /** GO - Go */
  GO = 7,
  /** GWT - Google-Web-Toolkit */
  GWT = 8,
  /** HASKELL - Haskell */
  HASKELL = 9,
  /** JAVA - Java */
  JAVA = 10,
  /** JS - Javascript */
  JS = 11,
  /** LISP - Lisp */
  LISP = 12,
  /** OBJC - Objective-C */
  OBJC = 13,
  /** PY - Python */
  PY = 14,
  /** SH - Shell (Typically Bash) */
  SH = 15,
  /** SWIFT - Swift */
  SWIFT = 16,
  /** TS - TypeScript */
  TS = 18,
  /** WEB - Webtesting */
  WEB = 19,
  /** SCALA - Scala */
  SCALA = 20,
  /** PROTO - Protocol Buffer */
  PROTO = 21,
  /** XML - Extensible Markup Language */
  XML = 22,
  UNRECOGNIZED = -1,
}

export function languageFromJSON(object: any): Language {
  switch (object) {
    case 0:
    case "LANGUAGE_UNSPECIFIED":
      return Language.LANGUAGE_UNSPECIFIED;
    case 1:
    case "NONE":
      return Language.NONE;
    case 2:
    case "ANDROID":
      return Language.ANDROID;
    case 3:
    case "AS":
      return Language.AS;
    case 4:
    case "CC":
      return Language.CC;
    case 5:
    case "CSS":
      return Language.CSS;
    case 6:
    case "DART":
      return Language.DART;
    case 7:
    case "GO":
      return Language.GO;
    case 8:
    case "GWT":
      return Language.GWT;
    case 9:
    case "HASKELL":
      return Language.HASKELL;
    case 10:
    case "JAVA":
      return Language.JAVA;
    case 11:
    case "JS":
      return Language.JS;
    case 12:
    case "LISP":
      return Language.LISP;
    case 13:
    case "OBJC":
      return Language.OBJC;
    case 14:
    case "PY":
      return Language.PY;
    case 15:
    case "SH":
      return Language.SH;
    case 16:
    case "SWIFT":
      return Language.SWIFT;
    case 18:
    case "TS":
      return Language.TS;
    case 19:
    case "WEB":
      return Language.WEB;
    case 20:
    case "SCALA":
      return Language.SCALA;
    case 21:
    case "PROTO":
      return Language.PROTO;
    case 22:
    case "XML":
      return Language.XML;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Language.UNRECOGNIZED;
  }
}

export function languageToJSON(object: Language): string {
  switch (object) {
    case Language.LANGUAGE_UNSPECIFIED:
      return "LANGUAGE_UNSPECIFIED";
    case Language.NONE:
      return "NONE";
    case Language.ANDROID:
      return "ANDROID";
    case Language.AS:
      return "AS";
    case Language.CC:
      return "CC";
    case Language.CSS:
      return "CSS";
    case Language.DART:
      return "DART";
    case Language.GO:
      return "GO";
    case Language.GWT:
      return "GWT";
    case Language.HASKELL:
      return "HASKELL";
    case Language.JAVA:
      return "JAVA";
    case Language.JS:
      return "JS";
    case Language.LISP:
      return "LISP";
    case Language.OBJC:
      return "OBJC";
    case Language.PY:
      return "PY";
    case Language.SH:
      return "SH";
    case Language.SWIFT:
      return "SWIFT";
    case Language.TS:
      return "TS";
    case Language.WEB:
      return "WEB";
    case Language.SCALA:
      return "SCALA";
    case Language.PROTO:
      return "PROTO";
    case Language.XML:
      return "XML";
    case Language.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Status of a resource. */
export enum Status {
  /** STATUS_UNSPECIFIED - The implicit default enum value. Should never be set. */
  STATUS_UNSPECIFIED = 0,
  /** BUILDING - Displays as "Building". Means the target is compiling, linking, etc. */
  BUILDING = 1,
  /**
   * BUILT - Displays as "Built". Means the target was built successfully.
   * If testing was requested, it should never reach this status: it should go
   * straight from BUILDING to TESTING.
   */
  BUILT = 2,
  /** FAILED_TO_BUILD - Displays as "Broken". Means build failure such as compile error. */
  FAILED_TO_BUILD = 3,
  /** TESTING - Displays as "Testing". Means the test is running. */
  TESTING = 4,
  /** PASSED - Displays as "Passed". Means the test was run and passed. */
  PASSED = 5,
  /** FAILED - Displays as "Failed". Means the test was run and failed. */
  FAILED = 6,
  /** TIMED_OUT - Displays as "Timed out". Means the test didn't finish in time. */
  TIMED_OUT = 7,
  /**
   * CANCELLED - Displays as "Cancelled". Means the build or test was cancelled.
   * E.g. User hit control-C.
   */
  CANCELLED = 8,
  /**
   * TOOL_FAILED - Displays as "Tool Failed". Means the build or test had internal tool
   * failure.
   */
  TOOL_FAILED = 9,
  /**
   * INCOMPLETE - Displays as "Incomplete". Means the build or test did not complete.  This
   * might happen when a build breakage or test failure causes the tool to stop
   * trying to build anything more or run any more tests, with the default
   * bazel --nokeep_going option or the --notest_keep_going option.
   */
  INCOMPLETE = 10,
  /**
   * FLAKY - Displays as "Flaky". Means the aggregate status contains some runs that
   * were successful, and some that were not.
   */
  FLAKY = 11,
  /**
   * UNKNOWN - Displays as "Unknown". Means the tool uploading to the server died
   * mid-upload or does not know the state.
   */
  UNKNOWN = 12,
  /**
   * SKIPPED - Displays as "Skipped". Means building and testing were skipped.
   * (E.g. Restricted to a different configuration.)
   */
  SKIPPED = 13,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Status.STATUS_UNSPECIFIED;
    case 1:
    case "BUILDING":
      return Status.BUILDING;
    case 2:
    case "BUILT":
      return Status.BUILT;
    case 3:
    case "FAILED_TO_BUILD":
      return Status.FAILED_TO_BUILD;
    case 4:
    case "TESTING":
      return Status.TESTING;
    case 5:
    case "PASSED":
      return Status.PASSED;
    case 6:
    case "FAILED":
      return Status.FAILED;
    case 7:
    case "TIMED_OUT":
      return Status.TIMED_OUT;
    case 8:
    case "CANCELLED":
      return Status.CANCELLED;
    case 9:
    case "TOOL_FAILED":
      return Status.TOOL_FAILED;
    case 10:
    case "INCOMPLETE":
      return Status.INCOMPLETE;
    case 11:
    case "FLAKY":
      return Status.FLAKY;
    case 12:
    case "UNKNOWN":
      return Status.UNKNOWN;
    case 13:
    case "SKIPPED":
      return Status.SKIPPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Status.BUILDING:
      return "BUILDING";
    case Status.BUILT:
      return "BUILT";
    case Status.FAILED_TO_BUILD:
      return "FAILED_TO_BUILD";
    case Status.TESTING:
      return "TESTING";
    case Status.PASSED:
      return "PASSED";
    case Status.FAILED:
      return "FAILED";
    case Status.TIMED_OUT:
      return "TIMED_OUT";
    case Status.CANCELLED:
      return "CANCELLED";
    case Status.TOOL_FAILED:
      return "TOOL_FAILED";
    case Status.INCOMPLETE:
      return "INCOMPLETE";
    case Status.FLAKY:
      return "FLAKY";
    case Status.UNKNOWN:
      return "UNKNOWN";
    case Status.SKIPPED:
      return "SKIPPED";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Indicates the upload status of the invocation, whether it is
 * post-processing, or immutable, etc.
 */
export enum UploadStatus {
  /** UPLOAD_STATUS_UNSPECIFIED - The implicit default enum value. Should never be set. */
  UPLOAD_STATUS_UNSPECIFIED = 0,
  /** UPLOADING - The invocation is still uploading to the ResultStore. */
  UPLOADING = 1,
  /**
   * POST_PROCESSING - The invocation upload is complete. The ResultStore is still post-processing
   * the invocation.
   */
  POST_PROCESSING = 2,
  /**
   * IMMUTABLE - All post-processing is complete, and the invocation is now immutable.
   * Data may be subject to TTL and can be deleted.
   */
  IMMUTABLE = 3,
  UNRECOGNIZED = -1,
}

export function uploadStatusFromJSON(object: any): UploadStatus {
  switch (object) {
    case 0:
    case "UPLOAD_STATUS_UNSPECIFIED":
      return UploadStatus.UPLOAD_STATUS_UNSPECIFIED;
    case 1:
    case "UPLOADING":
      return UploadStatus.UPLOADING;
    case 2:
    case "POST_PROCESSING":
      return UploadStatus.POST_PROCESSING;
    case 3:
    case "IMMUTABLE":
      return UploadStatus.IMMUTABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UploadStatus.UNRECOGNIZED;
  }
}

export function uploadStatusToJSON(object: UploadStatus): string {
  switch (object) {
    case UploadStatus.UPLOAD_STATUS_UNSPECIFIED:
      return "UPLOAD_STATUS_UNSPECIFIED";
    case UploadStatus.UPLOADING:
      return "UPLOADING";
    case UploadStatus.POST_PROCESSING:
      return "POST_PROCESSING";
    case UploadStatus.IMMUTABLE:
      return "IMMUTABLE";
    case UploadStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Describes the status of a resource in both enum and string form.
 * Only use description when conveying additional info not captured in the enum
 * name.
 */
export interface StatusAttributes {
  /** Enum representation of the status. */
  status: Status;
  /** A longer description about the status. */
  description: string;
}

/** A generic key-value property definition. */
export interface Property {
  /** The key. */
  key: string;
  /** The value. */
  value: string;
}

/**
 * The timing of a particular Invocation, Action, etc. The start_time is
 * specified, stop time can be calculated by adding duration to start_time.
 */
export interface Timing {
  /** The time the resource started running. This is in UTC Epoch time. */
  startTime:
    | Date
    | undefined;
  /** The duration for which the resource ran. */
  duration: Duration | undefined;
}

/**
 * Represents a dependency of a resource on another resource. This can be used
 * to define a graph or a workflow paradigm through resources.
 */
export interface Dependency {
  /**
   * Output only. The name of a target.  Its format must be:
   * invocations/${INVOCATION_ID}/targets/${url_encode(TARGET_ID)}
   * This must point to a target under the same invocation.
   */
  target?:
    | string
    | undefined;
  /**
   * Output only. The name of a configured target.  Its format must be:
   * invocations/${INVOCATION_ID}/targets/${url_encode(TARGET_ID)}/configuredTargets/${CONFIG_ID}
   * This must point to a configured target under the same invocation.
   */
  configuredTarget?:
    | string
    | undefined;
  /**
   * Output only. The name of an action.  Its format must be:
   * invocations/${INVOCATION_ID}/targets/${url_encode(TARGET_ID)}/configuredTargets/${CONFIG_ID}/actions/${ACTION_ID}
   * This must point to an action under the same invocation.
   */
  action?:
    | string
    | undefined;
  /** The ID of the resource depended upon, matching resource name above. */
  id:
    | Dependency_Id
    | undefined;
  /**
   * A label describing this dependency.
   * The label "Root Cause" is handled specially. It is used to point to the
   * exact resource that caused a resource to fail.
   */
  label: string;
}

/**
 * The resource ID components of a resource depended upon. It may be a Target,
 * ConfiguredTarget, or Action, with the appropriate components filled in.
 * Invocation ID is elided, as this must point to a resource under this
 * Invocation.
 */
export interface Dependency_Id {
  /** The unencoded Target ID of the Target, ConfiguredTarget, or Action. */
  targetId: string;
  /** The Configuration ID of the ConfiguredTarget, or Action. */
  configurationId: string;
  /** The Action ID of the Action. */
  actionId: string;
}

function createBaseStatusAttributes(): StatusAttributes {
  return { status: 0, description: "" };
}

export const StatusAttributes: MessageFns<StatusAttributes> = {
  encode(message: StatusAttributes, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatusAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): StatusAttributes {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: StatusAttributes): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<StatusAttributes>): StatusAttributes {
    return StatusAttributes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StatusAttributes>): StatusAttributes {
    const message = createBaseStatusAttributes();
    message.status = object.status ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseProperty(): Property {
  return { key: "", value: "" };
}

export const Property: MessageFns<Property> = {
  encode(message: Property, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Property {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperty();
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

  fromJSON(object: any): Property {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<Property>): Property {
    return Property.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Property>): Property {
    const message = createBaseProperty();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTiming(): Timing {
  return { startTime: undefined, duration: undefined };
}

export const Timing: MessageFns<Timing> = {
  encode(message: Timing, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).join();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Timing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTiming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timing {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: Timing): unknown {
    const obj: any = {};
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    return obj;
  },

  create(base?: DeepPartial<Timing>): Timing {
    return Timing.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Timing>): Timing {
    const message = createBaseTiming();
    message.startTime = object.startTime ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

function createBaseDependency(): Dependency {
  return { target: undefined, configuredTarget: undefined, action: undefined, id: undefined, label: "" };
}

export const Dependency: MessageFns<Dependency> = {
  encode(message: Dependency, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.target !== undefined) {
      writer.uint32(10).string(message.target);
    }
    if (message.configuredTarget !== undefined) {
      writer.uint32(18).string(message.configuredTarget);
    }
    if (message.action !== undefined) {
      writer.uint32(26).string(message.action);
    }
    if (message.id !== undefined) {
      Dependency_Id.encode(message.id, writer.uint32(42).fork()).join();
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dependency {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDependency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.target = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.configuredTarget = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.action = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.id = Dependency_Id.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.label = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dependency {
    return {
      target: isSet(object.target) ? globalThis.String(object.target) : undefined,
      configuredTarget: isSet(object.configuredTarget) ? globalThis.String(object.configuredTarget) : undefined,
      action: isSet(object.action) ? globalThis.String(object.action) : undefined,
      id: isSet(object.id) ? Dependency_Id.fromJSON(object.id) : undefined,
      label: isSet(object.label) ? globalThis.String(object.label) : "",
    };
  },

  toJSON(message: Dependency): unknown {
    const obj: any = {};
    if (message.target !== undefined) {
      obj.target = message.target;
    }
    if (message.configuredTarget !== undefined) {
      obj.configuredTarget = message.configuredTarget;
    }
    if (message.action !== undefined) {
      obj.action = message.action;
    }
    if (message.id !== undefined) {
      obj.id = Dependency_Id.toJSON(message.id);
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    return obj;
  },

  create(base?: DeepPartial<Dependency>): Dependency {
    return Dependency.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dependency>): Dependency {
    const message = createBaseDependency();
    message.target = object.target ?? undefined;
    message.configuredTarget = object.configuredTarget ?? undefined;
    message.action = object.action ?? undefined;
    message.id = (object.id !== undefined && object.id !== null) ? Dependency_Id.fromPartial(object.id) : undefined;
    message.label = object.label ?? "";
    return message;
  },
};

function createBaseDependency_Id(): Dependency_Id {
  return { targetId: "", configurationId: "", actionId: "" };
}

export const Dependency_Id: MessageFns<Dependency_Id> = {
  encode(message: Dependency_Id, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.targetId !== "") {
      writer.uint32(18).string(message.targetId);
    }
    if (message.configurationId !== "") {
      writer.uint32(26).string(message.configurationId);
    }
    if (message.actionId !== "") {
      writer.uint32(34).string(message.actionId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dependency_Id {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDependency_Id();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configurationId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.actionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dependency_Id {
    return {
      targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "",
      configurationId: isSet(object.configurationId) ? globalThis.String(object.configurationId) : "",
      actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
    };
  },

  toJSON(message: Dependency_Id): unknown {
    const obj: any = {};
    if (message.targetId !== "") {
      obj.targetId = message.targetId;
    }
    if (message.configurationId !== "") {
      obj.configurationId = message.configurationId;
    }
    if (message.actionId !== "") {
      obj.actionId = message.actionId;
    }
    return obj;
  },

  create(base?: DeepPartial<Dependency_Id>): Dependency_Id {
    return Dependency_Id.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dependency_Id>): Dependency_Id {
    const message = createBaseDependency_Id();
    message.targetId = object.targetId ?? "";
    message.configurationId = object.configurationId ?? "";
    message.actionId = object.actionId ?? "";
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