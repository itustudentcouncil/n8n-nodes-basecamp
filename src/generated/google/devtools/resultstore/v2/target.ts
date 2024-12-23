// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/resultstore/v2/target.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Language, languageFromJSON, languageToJSON, Property, StatusAttributes, Timing } from "./common.js";
import { File } from "./file.js";

export const protobufPackage = "google.devtools.resultstore.v2";

/** These correspond to the suffix of the rule name. Eg cc_test has type TEST. */
export enum TargetType {
  /** TARGET_TYPE_UNSPECIFIED - Unspecified by the build system. */
  TARGET_TYPE_UNSPECIFIED = 0,
  /** APPLICATION - An application e.g. ios_application. */
  APPLICATION = 1,
  /** BINARY - A binary target e.g. cc_binary. */
  BINARY = 2,
  /** LIBRARY - A library target e.g. java_library */
  LIBRARY = 3,
  /** PACKAGE - A package */
  PACKAGE = 4,
  /** TEST - Any test target, in bazel that means a rule with a '_test' suffix. */
  TEST = 5,
  UNRECOGNIZED = -1,
}

export function targetTypeFromJSON(object: any): TargetType {
  switch (object) {
    case 0:
    case "TARGET_TYPE_UNSPECIFIED":
      return TargetType.TARGET_TYPE_UNSPECIFIED;
    case 1:
    case "APPLICATION":
      return TargetType.APPLICATION;
    case 2:
    case "BINARY":
      return TargetType.BINARY;
    case 3:
    case "LIBRARY":
      return TargetType.LIBRARY;
    case 4:
    case "PACKAGE":
      return TargetType.PACKAGE;
    case 5:
    case "TEST":
      return TargetType.TEST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TargetType.UNRECOGNIZED;
  }
}

export function targetTypeToJSON(object: TargetType): string {
  switch (object) {
    case TargetType.TARGET_TYPE_UNSPECIFIED:
      return "TARGET_TYPE_UNSPECIFIED";
    case TargetType.APPLICATION:
      return "APPLICATION";
    case TargetType.BINARY:
      return "BINARY";
    case TargetType.LIBRARY:
      return "LIBRARY";
    case TargetType.PACKAGE:
      return "PACKAGE";
    case TargetType.TEST:
      return "TEST";
    case TargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Indicates how big the user indicated the test action was. */
export enum TestSize {
  /** TEST_SIZE_UNSPECIFIED - Unspecified by the user. */
  TEST_SIZE_UNSPECIFIED = 0,
  /** SMALL - Unit test taking less than 1 minute. */
  SMALL = 1,
  /** MEDIUM - Integration tests taking less than 5 minutes. */
  MEDIUM = 2,
  /** LARGE - End-to-end tests taking less than 15 minutes. */
  LARGE = 3,
  /** ENORMOUS - Even bigger than LARGE. */
  ENORMOUS = 4,
  /** OTHER_SIZE - Something that doesn't fit into the above categories. */
  OTHER_SIZE = 5,
  UNRECOGNIZED = -1,
}

export function testSizeFromJSON(object: any): TestSize {
  switch (object) {
    case 0:
    case "TEST_SIZE_UNSPECIFIED":
      return TestSize.TEST_SIZE_UNSPECIFIED;
    case 1:
    case "SMALL":
      return TestSize.SMALL;
    case 2:
    case "MEDIUM":
      return TestSize.MEDIUM;
    case 3:
    case "LARGE":
      return TestSize.LARGE;
    case 4:
    case "ENORMOUS":
      return TestSize.ENORMOUS;
    case 5:
    case "OTHER_SIZE":
      return TestSize.OTHER_SIZE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TestSize.UNRECOGNIZED;
  }
}

export function testSizeToJSON(object: TestSize): string {
  switch (object) {
    case TestSize.TEST_SIZE_UNSPECIFIED:
      return "TEST_SIZE_UNSPECIFIED";
    case TestSize.SMALL:
      return "SMALL";
    case TestSize.MEDIUM:
      return "MEDIUM";
    case TestSize.LARGE:
      return "LARGE";
    case TestSize.ENORMOUS:
      return "ENORMOUS";
    case TestSize.OTHER_SIZE:
      return "OTHER_SIZE";
    case TestSize.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Each Target represents data for a given target in a given Invocation.
 * ConfiguredTarget and Action resources under each Target contain the bulk of
 * the data.
 */
export interface Target {
  /**
   * The resource name.  Its format must be:
   * invocations/${INVOCATION_ID}/targets/${url_encode(TARGET_ID)}
   */
  name: string;
  /**
   * The resource ID components that identify the Target. They must match the
   * resource name after proper encoding.
   */
  id:
    | Target_Id
    | undefined;
  /**
   * This is the aggregate status of the target.
   * DEPRECATED - use ConfiguredTarget.status_attributes instead
   *
   * @deprecated
   */
  statusAttributes:
    | StatusAttributes
    | undefined;
  /** When this target started and its duration. */
  timing:
    | Timing
    | undefined;
  /** Attributes that apply to all targets. */
  targetAttributes:
    | TargetAttributes
    | undefined;
  /** Attributes that apply to all test actions under this target. */
  testAttributes:
    | TestAttributes
    | undefined;
  /**
   * Arbitrary name-value pairs.
   * This is implemented as a multi-map. Multiple properties are allowed with
   * the same key. Properties will be returned in lexicographical order by key.
   */
  properties: Property[];
  /**
   * A list of file references for target level files.
   * The file IDs must be unique within this list. Duplicate file IDs will
   * result in an error. Files will be returned in lexicographical order by ID.
   * Use this field to specify outputs not related to a configuration.
   */
  files: File[];
  /**
   * Provides a hint to clients as to whether to display the Target to users.
   * If true then clients likely want to display the Target by default.
   * Once set to true, this may not be set back to false.
   */
  visible: boolean;
}

/** The resource ID components that identify the Target. */
export interface Target_Id {
  /** The Invocation ID. */
  invocationId: string;
  /** The Target ID. */
  targetId: string;
}

/** Attributes that apply to all targets. */
export interface TargetAttributes {
  /**
   * If known, indicates the type of this target.  In bazel this corresponds
   * to the rule-suffix.
   */
  type: TargetType;
  /** If known, the main language of this target, e.g. java, cc, python, etc. */
  language: Language;
  /**
   * The tags attribute of the build rule. These should be short, descriptive
   * words, and there should only be a few of them.
   * This is implemented as a set. All tags will be unique. Any duplicate tags
   * will be ignored. Tags will be returned in lexicographical order.
   */
  tags: string[];
}

/** Attributes that apply only to test actions under this target. */
export interface TestAttributes {
  /** Indicates how big the user indicated the test action was. */
  size: TestSize;
}

function createBaseTarget(): Target {
  return {
    name: "",
    id: undefined,
    statusAttributes: undefined,
    timing: undefined,
    targetAttributes: undefined,
    testAttributes: undefined,
    properties: [],
    files: [],
    visible: false,
  };
}

export const Target: MessageFns<Target> = {
  encode(message: Target, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== undefined) {
      Target_Id.encode(message.id, writer.uint32(18).fork()).join();
    }
    if (message.statusAttributes !== undefined) {
      StatusAttributes.encode(message.statusAttributes, writer.uint32(26).fork()).join();
    }
    if (message.timing !== undefined) {
      Timing.encode(message.timing, writer.uint32(34).fork()).join();
    }
    if (message.targetAttributes !== undefined) {
      TargetAttributes.encode(message.targetAttributes, writer.uint32(42).fork()).join();
    }
    if (message.testAttributes !== undefined) {
      TestAttributes.encode(message.testAttributes, writer.uint32(50).fork()).join();
    }
    for (const v of message.properties) {
      Property.encode(v!, writer.uint32(58).fork()).join();
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(66).fork()).join();
    }
    if (message.visible !== false) {
      writer.uint32(80).bool(message.visible);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Target {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget();
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

          message.id = Target_Id.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.statusAttributes = StatusAttributes.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timing = Timing.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.targetAttributes = TargetAttributes.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.testAttributes = TestAttributes.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.properties.push(Property.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.files.push(File.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.visible = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? Target_Id.fromJSON(object.id) : undefined,
      statusAttributes: isSet(object.statusAttributes) ? StatusAttributes.fromJSON(object.statusAttributes) : undefined,
      timing: isSet(object.timing) ? Timing.fromJSON(object.timing) : undefined,
      targetAttributes: isSet(object.targetAttributes) ? TargetAttributes.fromJSON(object.targetAttributes) : undefined,
      testAttributes: isSet(object.testAttributes) ? TestAttributes.fromJSON(object.testAttributes) : undefined,
      properties: globalThis.Array.isArray(object?.properties)
        ? object.properties.map((e: any) => Property.fromJSON(e))
        : [],
      files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => File.fromJSON(e)) : [],
      visible: isSet(object.visible) ? globalThis.Boolean(object.visible) : false,
    };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== undefined) {
      obj.id = Target_Id.toJSON(message.id);
    }
    if (message.statusAttributes !== undefined) {
      obj.statusAttributes = StatusAttributes.toJSON(message.statusAttributes);
    }
    if (message.timing !== undefined) {
      obj.timing = Timing.toJSON(message.timing);
    }
    if (message.targetAttributes !== undefined) {
      obj.targetAttributes = TargetAttributes.toJSON(message.targetAttributes);
    }
    if (message.testAttributes !== undefined) {
      obj.testAttributes = TestAttributes.toJSON(message.testAttributes);
    }
    if (message.properties?.length) {
      obj.properties = message.properties.map((e) => Property.toJSON(e));
    }
    if (message.files?.length) {
      obj.files = message.files.map((e) => File.toJSON(e));
    }
    if (message.visible !== false) {
      obj.visible = message.visible;
    }
    return obj;
  },

  create(base?: DeepPartial<Target>): Target {
    return Target.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Target>): Target {
    const message = createBaseTarget();
    message.name = object.name ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Target_Id.fromPartial(object.id) : undefined;
    message.statusAttributes = (object.statusAttributes !== undefined && object.statusAttributes !== null)
      ? StatusAttributes.fromPartial(object.statusAttributes)
      : undefined;
    message.timing = (object.timing !== undefined && object.timing !== null)
      ? Timing.fromPartial(object.timing)
      : undefined;
    message.targetAttributes = (object.targetAttributes !== undefined && object.targetAttributes !== null)
      ? TargetAttributes.fromPartial(object.targetAttributes)
      : undefined;
    message.testAttributes = (object.testAttributes !== undefined && object.testAttributes !== null)
      ? TestAttributes.fromPartial(object.testAttributes)
      : undefined;
    message.properties = object.properties?.map((e) => Property.fromPartial(e)) || [];
    message.files = object.files?.map((e) => File.fromPartial(e)) || [];
    message.visible = object.visible ?? false;
    return message;
  },
};

function createBaseTarget_Id(): Target_Id {
  return { invocationId: "", targetId: "" };
}

export const Target_Id: MessageFns<Target_Id> = {
  encode(message: Target_Id, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.invocationId !== "") {
      writer.uint32(10).string(message.invocationId);
    }
    if (message.targetId !== "") {
      writer.uint32(18).string(message.targetId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Target_Id {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget_Id();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.invocationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target_Id {
    return {
      invocationId: isSet(object.invocationId) ? globalThis.String(object.invocationId) : "",
      targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "",
    };
  },

  toJSON(message: Target_Id): unknown {
    const obj: any = {};
    if (message.invocationId !== "") {
      obj.invocationId = message.invocationId;
    }
    if (message.targetId !== "") {
      obj.targetId = message.targetId;
    }
    return obj;
  },

  create(base?: DeepPartial<Target_Id>): Target_Id {
    return Target_Id.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Target_Id>): Target_Id {
    const message = createBaseTarget_Id();
    message.invocationId = object.invocationId ?? "";
    message.targetId = object.targetId ?? "";
    return message;
  },
};

function createBaseTargetAttributes(): TargetAttributes {
  return { type: 0, language: 0, tags: [] };
}

export const TargetAttributes: MessageFns<TargetAttributes> = {
  encode(message: TargetAttributes, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.language !== 0) {
      writer.uint32(16).int32(message.language);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TargetAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.language = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetAttributes {
    return {
      type: isSet(object.type) ? targetTypeFromJSON(object.type) : 0,
      language: isSet(object.language) ? languageFromJSON(object.language) : 0,
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: TargetAttributes): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = targetTypeToJSON(message.type);
    }
    if (message.language !== 0) {
      obj.language = languageToJSON(message.language);
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create(base?: DeepPartial<TargetAttributes>): TargetAttributes {
    return TargetAttributes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TargetAttributes>): TargetAttributes {
    const message = createBaseTargetAttributes();
    message.type = object.type ?? 0;
    message.language = object.language ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestAttributes(): TestAttributes {
  return { size: 0 };
}

export const TestAttributes: MessageFns<TestAttributes> = {
  encode(message: TestAttributes, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.size !== 0) {
      writer.uint32(8).int32(message.size);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TestAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.size = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestAttributes {
    return { size: isSet(object.size) ? testSizeFromJSON(object.size) : 0 };
  },

  toJSON(message: TestAttributes): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = testSizeToJSON(message.size);
    }
    return obj;
  },

  create(base?: DeepPartial<TestAttributes>): TestAttributes {
    return TestAttributes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TestAttributes>): TestAttributes {
    const message = createBaseTestAttributes();
    message.size = object.size ?? 0;
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
