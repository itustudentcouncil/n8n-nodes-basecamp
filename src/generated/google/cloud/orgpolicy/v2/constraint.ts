// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/orgpolicy/v2/constraint.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.orgpolicy.v2";

/**
 * A constraint describes a way to restrict resource's configuration. For
 * example, you could enforce a constraint that controls which Google Cloud
 * services can be activated across an organization, or whether a Compute Engine
 * instance can have serial port connections established. Constraints can be
 * configured by the organization policy administrator to fit the needs of the
 * organization by setting a policy that includes constraints at different
 * locations in the organization's resource hierarchy. Policies are inherited
 * down the resource hierarchy from higher levels, but can also be overridden.
 * For details about the inheritance rules please read about
 * [`policies`][google.cloud.OrgPolicy.v2.Policy].
 *
 * Constraints have a default behavior determined by the `constraint_default`
 * field, which is the enforcement behavior that is used in the absence of a
 * policy being defined or inherited for the resource in question.
 */
export interface Constraint {
  /**
   * Immutable. The resource name of the constraint. Must be in one of
   * the following forms:
   *
   * * `projects/{project_number}/constraints/{constraint_name}`
   * * `folders/{folder_id}/constraints/{constraint_name}`
   * * `organizations/{organization_id}/constraints/{constraint_name}`
   *
   * For example, "/projects/123/constraints/compute.disableSerialPortAccess".
   */
  name: string;
  /**
   * The human readable name.
   *
   * Mutable.
   */
  displayName: string;
  /**
   * Detailed description of what this constraint controls as well as how and
   * where it is enforced.
   *
   * Mutable.
   */
  description: string;
  /** The evaluation behavior of this constraint in the absence of a policy. */
  constraintDefault: Constraint_ConstraintDefault;
  /** Defines this constraint as being a ListConstraint. */
  listConstraint?:
    | Constraint_ListConstraint
    | undefined;
  /** Defines this constraint as being a BooleanConstraint. */
  booleanConstraint?:
    | Constraint_BooleanConstraint
    | undefined;
  /** Shows if dry run is supported for this constraint or not. */
  supportsDryRun: boolean;
}

/**
 * Specifies the default behavior in the absence of any policy for the
 * constraint. This must not be `CONSTRAINT_DEFAULT_UNSPECIFIED`.
 *
 * Immutable after creation.
 */
export enum Constraint_ConstraintDefault {
  /**
   * CONSTRAINT_DEFAULT_UNSPECIFIED - This is only used for distinguishing unset values and should never be
   * used.
   */
  CONSTRAINT_DEFAULT_UNSPECIFIED = 0,
  /**
   * ALLOW - Indicate that all values are allowed for list constraints.
   * Indicate that enforcement is off for boolean constraints.
   */
  ALLOW = 1,
  /**
   * DENY - Indicate that all values are denied for list constraints.
   * Indicate that enforcement is on for boolean constraints.
   */
  DENY = 2,
  UNRECOGNIZED = -1,
}

export function constraint_ConstraintDefaultFromJSON(object: any): Constraint_ConstraintDefault {
  switch (object) {
    case 0:
    case "CONSTRAINT_DEFAULT_UNSPECIFIED":
      return Constraint_ConstraintDefault.CONSTRAINT_DEFAULT_UNSPECIFIED;
    case 1:
    case "ALLOW":
      return Constraint_ConstraintDefault.ALLOW;
    case 2:
    case "DENY":
      return Constraint_ConstraintDefault.DENY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Constraint_ConstraintDefault.UNRECOGNIZED;
  }
}

export function constraint_ConstraintDefaultToJSON(object: Constraint_ConstraintDefault): string {
  switch (object) {
    case Constraint_ConstraintDefault.CONSTRAINT_DEFAULT_UNSPECIFIED:
      return "CONSTRAINT_DEFAULT_UNSPECIFIED";
    case Constraint_ConstraintDefault.ALLOW:
      return "ALLOW";
    case Constraint_ConstraintDefault.DENY:
      return "DENY";
    case Constraint_ConstraintDefault.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A constraint that allows or disallows a list of string values, which are
 * configured by an Organization Policy administrator with a policy.
 */
export interface Constraint_ListConstraint {
  /**
   * Indicates whether values grouped into categories can be used in
   * `Policy.allowed_values` and `Policy.denied_values`. For example,
   * `"in:Python"` would match any value in the 'Python' group.
   */
  supportsIn: boolean;
  /**
   * Indicates whether subtrees of the Resource Manager resource hierarchy
   * can be used in `Policy.allowed_values` and `Policy.denied_values`. For
   * example, `"under:folders/123"` would match any resource under the
   * 'folders/123' folder.
   */
  supportsUnder: boolean;
}

/**
 * A constraint that is either enforced or not.
 *
 * For example, a constraint `constraints/compute.disableSerialPortAccess`.
 * If it is enforced on a VM instance, serial port connections will not be
 * opened to that instance.
 */
export interface Constraint_BooleanConstraint {
}

/**
 * A custom constraint defined by customers which can *only* be applied to the
 * given resource types and organization.
 *
 * By creating a custom constraint, customers can apply policies of this
 * custom constraint. *Creating a custom constraint itself does NOT apply any
 * policy enforcement*.
 */
export interface CustomConstraint {
  /**
   * Immutable. Name of the constraint. This is unique within the organization.
   * Format of the name should be
   *
   * * `organizations/{organization_id}/customConstraints/{custom_constraint_id}`
   *
   * Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms`
   *
   * The max length is 70 characters and the minimum length is 1. Note that the
   * prefix `organizations/{organization_id}/customConstraints/` is not counted.
   */
  name: string;
  /**
   * Immutable. The resource instance type on which this policy applies. Format
   * will be of the form : `<canonical service name>/<type>` Example:
   *
   *  * `compute.googleapis.com/Instance`.
   */
  resourceTypes: string[];
  /** All the operations being applied for this constraint. */
  methodTypes: CustomConstraint_MethodType[];
  /**
   * Org policy condition/expression. For example:
   * `resource.instanceName.matches("[production|test]_.*_(\d)+")` or,
   * `resource.management.auto_upgrade == true`
   *
   * The max length of the condition is 1000 characters.
   */
  condition: string;
  /** Allow or deny type. */
  actionType: CustomConstraint_ActionType;
  /**
   * One line display name for the UI.
   * The max length of the display_name is 200 characters.
   */
  displayName: string;
  /**
   * Detailed information about this custom policy constraint.
   * The max length of the description is 2000 characters.
   */
  description: string;
  /**
   * Output only. The last time this custom constraint was updated. This
   * represents the last time that the `CreateCustomConstraint` or
   * `UpdateCustomConstraint` RPC was called
   */
  updateTime: Date | undefined;
}

/**
 * The operation for which this constraint will be applied. To apply this
 * constraint only when creating new VMs, the `method_types` should be
 * `CREATE` only. To apply this constraint when creating or deleting
 * VMs, the `method_types` should be `CREATE` and `DELETE`.
 *
 * `UPDATE` only custom constraints are not supported. Use `CREATE` or
 * `CREATE, UPDATE`.
 */
export enum CustomConstraint_MethodType {
  /** METHOD_TYPE_UNSPECIFIED - Unspecified. Results in an error. */
  METHOD_TYPE_UNSPECIFIED = 0,
  /** CREATE - Constraint applied when creating the resource. */
  CREATE = 1,
  /** UPDATE - Constraint applied when updating the resource. */
  UPDATE = 2,
  /**
   * DELETE - Constraint applied when deleting the resource.
   * Not supported yet.
   */
  DELETE = 3,
  /** REMOVE_GRANT - Constraint applied when removing an IAM grant. */
  REMOVE_GRANT = 4,
  /** GOVERN_TAGS - Constraint applied when enforcing forced tagging. */
  GOVERN_TAGS = 5,
  UNRECOGNIZED = -1,
}

export function customConstraint_MethodTypeFromJSON(object: any): CustomConstraint_MethodType {
  switch (object) {
    case 0:
    case "METHOD_TYPE_UNSPECIFIED":
      return CustomConstraint_MethodType.METHOD_TYPE_UNSPECIFIED;
    case 1:
    case "CREATE":
      return CustomConstraint_MethodType.CREATE;
    case 2:
    case "UPDATE":
      return CustomConstraint_MethodType.UPDATE;
    case 3:
    case "DELETE":
      return CustomConstraint_MethodType.DELETE;
    case 4:
    case "REMOVE_GRANT":
      return CustomConstraint_MethodType.REMOVE_GRANT;
    case 5:
    case "GOVERN_TAGS":
      return CustomConstraint_MethodType.GOVERN_TAGS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomConstraint_MethodType.UNRECOGNIZED;
  }
}

export function customConstraint_MethodTypeToJSON(object: CustomConstraint_MethodType): string {
  switch (object) {
    case CustomConstraint_MethodType.METHOD_TYPE_UNSPECIFIED:
      return "METHOD_TYPE_UNSPECIFIED";
    case CustomConstraint_MethodType.CREATE:
      return "CREATE";
    case CustomConstraint_MethodType.UPDATE:
      return "UPDATE";
    case CustomConstraint_MethodType.DELETE:
      return "DELETE";
    case CustomConstraint_MethodType.REMOVE_GRANT:
      return "REMOVE_GRANT";
    case CustomConstraint_MethodType.GOVERN_TAGS:
      return "GOVERN_TAGS";
    case CustomConstraint_MethodType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Allow or deny type. */
export enum CustomConstraint_ActionType {
  /** ACTION_TYPE_UNSPECIFIED - Unspecified. Results in an error. */
  ACTION_TYPE_UNSPECIFIED = 0,
  /** ALLOW - Allowed action type. */
  ALLOW = 1,
  /** DENY - Deny action type. */
  DENY = 2,
  UNRECOGNIZED = -1,
}

export function customConstraint_ActionTypeFromJSON(object: any): CustomConstraint_ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_UNSPECIFIED":
      return CustomConstraint_ActionType.ACTION_TYPE_UNSPECIFIED;
    case 1:
    case "ALLOW":
      return CustomConstraint_ActionType.ALLOW;
    case 2:
    case "DENY":
      return CustomConstraint_ActionType.DENY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomConstraint_ActionType.UNRECOGNIZED;
  }
}

export function customConstraint_ActionTypeToJSON(object: CustomConstraint_ActionType): string {
  switch (object) {
    case CustomConstraint_ActionType.ACTION_TYPE_UNSPECIFIED:
      return "ACTION_TYPE_UNSPECIFIED";
    case CustomConstraint_ActionType.ALLOW:
      return "ALLOW";
    case CustomConstraint_ActionType.DENY:
      return "DENY";
    case CustomConstraint_ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConstraint(): Constraint {
  return {
    name: "",
    displayName: "",
    description: "",
    constraintDefault: 0,
    listConstraint: undefined,
    booleanConstraint: undefined,
    supportsDryRun: false,
  };
}

export const Constraint: MessageFns<Constraint> = {
  encode(message: Constraint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.constraintDefault !== 0) {
      writer.uint32(32).int32(message.constraintDefault);
    }
    if (message.listConstraint !== undefined) {
      Constraint_ListConstraint.encode(message.listConstraint, writer.uint32(42).fork()).join();
    }
    if (message.booleanConstraint !== undefined) {
      Constraint_BooleanConstraint.encode(message.booleanConstraint, writer.uint32(50).fork()).join();
    }
    if (message.supportsDryRun !== false) {
      writer.uint32(56).bool(message.supportsDryRun);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Constraint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstraint();
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
          if (tag !== 32) {
            break;
          }

          message.constraintDefault = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.listConstraint = Constraint_ListConstraint.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.booleanConstraint = Constraint_BooleanConstraint.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.supportsDryRun = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Constraint {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      constraintDefault: isSet(object.constraintDefault)
        ? constraint_ConstraintDefaultFromJSON(object.constraintDefault)
        : 0,
      listConstraint: isSet(object.listConstraint)
        ? Constraint_ListConstraint.fromJSON(object.listConstraint)
        : undefined,
      booleanConstraint: isSet(object.booleanConstraint)
        ? Constraint_BooleanConstraint.fromJSON(object.booleanConstraint)
        : undefined,
      supportsDryRun: isSet(object.supportsDryRun) ? globalThis.Boolean(object.supportsDryRun) : false,
    };
  },

  toJSON(message: Constraint): unknown {
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
    if (message.constraintDefault !== 0) {
      obj.constraintDefault = constraint_ConstraintDefaultToJSON(message.constraintDefault);
    }
    if (message.listConstraint !== undefined) {
      obj.listConstraint = Constraint_ListConstraint.toJSON(message.listConstraint);
    }
    if (message.booleanConstraint !== undefined) {
      obj.booleanConstraint = Constraint_BooleanConstraint.toJSON(message.booleanConstraint);
    }
    if (message.supportsDryRun !== false) {
      obj.supportsDryRun = message.supportsDryRun;
    }
    return obj;
  },

  create(base?: DeepPartial<Constraint>): Constraint {
    return Constraint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Constraint>): Constraint {
    const message = createBaseConstraint();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.constraintDefault = object.constraintDefault ?? 0;
    message.listConstraint = (object.listConstraint !== undefined && object.listConstraint !== null)
      ? Constraint_ListConstraint.fromPartial(object.listConstraint)
      : undefined;
    message.booleanConstraint = (object.booleanConstraint !== undefined && object.booleanConstraint !== null)
      ? Constraint_BooleanConstraint.fromPartial(object.booleanConstraint)
      : undefined;
    message.supportsDryRun = object.supportsDryRun ?? false;
    return message;
  },
};

function createBaseConstraint_ListConstraint(): Constraint_ListConstraint {
  return { supportsIn: false, supportsUnder: false };
}

export const Constraint_ListConstraint: MessageFns<Constraint_ListConstraint> = {
  encode(message: Constraint_ListConstraint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.supportsIn !== false) {
      writer.uint32(8).bool(message.supportsIn);
    }
    if (message.supportsUnder !== false) {
      writer.uint32(16).bool(message.supportsUnder);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Constraint_ListConstraint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstraint_ListConstraint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.supportsIn = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.supportsUnder = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Constraint_ListConstraint {
    return {
      supportsIn: isSet(object.supportsIn) ? globalThis.Boolean(object.supportsIn) : false,
      supportsUnder: isSet(object.supportsUnder) ? globalThis.Boolean(object.supportsUnder) : false,
    };
  },

  toJSON(message: Constraint_ListConstraint): unknown {
    const obj: any = {};
    if (message.supportsIn !== false) {
      obj.supportsIn = message.supportsIn;
    }
    if (message.supportsUnder !== false) {
      obj.supportsUnder = message.supportsUnder;
    }
    return obj;
  },

  create(base?: DeepPartial<Constraint_ListConstraint>): Constraint_ListConstraint {
    return Constraint_ListConstraint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Constraint_ListConstraint>): Constraint_ListConstraint {
    const message = createBaseConstraint_ListConstraint();
    message.supportsIn = object.supportsIn ?? false;
    message.supportsUnder = object.supportsUnder ?? false;
    return message;
  },
};

function createBaseConstraint_BooleanConstraint(): Constraint_BooleanConstraint {
  return {};
}

export const Constraint_BooleanConstraint: MessageFns<Constraint_BooleanConstraint> = {
  encode(_: Constraint_BooleanConstraint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Constraint_BooleanConstraint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstraint_BooleanConstraint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Constraint_BooleanConstraint {
    return {};
  },

  toJSON(_: Constraint_BooleanConstraint): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Constraint_BooleanConstraint>): Constraint_BooleanConstraint {
    return Constraint_BooleanConstraint.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Constraint_BooleanConstraint>): Constraint_BooleanConstraint {
    const message = createBaseConstraint_BooleanConstraint();
    return message;
  },
};

function createBaseCustomConstraint(): CustomConstraint {
  return {
    name: "",
    resourceTypes: [],
    methodTypes: [],
    condition: "",
    actionType: 0,
    displayName: "",
    description: "",
    updateTime: undefined,
  };
}

export const CustomConstraint: MessageFns<CustomConstraint> = {
  encode(message: CustomConstraint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.resourceTypes) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.methodTypes) {
      writer.int32(v);
    }
    writer.join();
    if (message.condition !== "") {
      writer.uint32(34).string(message.condition);
    }
    if (message.actionType !== 0) {
      writer.uint32(40).int32(message.actionType);
    }
    if (message.displayName !== "") {
      writer.uint32(50).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(66).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomConstraint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomConstraint();
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

          message.resourceTypes.push(reader.string());
          continue;
        case 3:
          if (tag === 24) {
            message.methodTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.methodTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.condition = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.actionType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): CustomConstraint {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resourceTypes: globalThis.Array.isArray(object?.resourceTypes)
        ? object.resourceTypes.map((e: any) => globalThis.String(e))
        : [],
      methodTypes: globalThis.Array.isArray(object?.methodTypes)
        ? object.methodTypes.map((e: any) => customConstraint_MethodTypeFromJSON(e))
        : [],
      condition: isSet(object.condition) ? globalThis.String(object.condition) : "",
      actionType: isSet(object.actionType) ? customConstraint_ActionTypeFromJSON(object.actionType) : 0,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: CustomConstraint): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resourceTypes?.length) {
      obj.resourceTypes = message.resourceTypes;
    }
    if (message.methodTypes?.length) {
      obj.methodTypes = message.methodTypes.map((e) => customConstraint_MethodTypeToJSON(e));
    }
    if (message.condition !== "") {
      obj.condition = message.condition;
    }
    if (message.actionType !== 0) {
      obj.actionType = customConstraint_ActionTypeToJSON(message.actionType);
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<CustomConstraint>): CustomConstraint {
    return CustomConstraint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomConstraint>): CustomConstraint {
    const message = createBaseCustomConstraint();
    message.name = object.name ?? "";
    message.resourceTypes = object.resourceTypes?.map((e) => e) || [];
    message.methodTypes = object.methodTypes?.map((e) => e) || [];
    message.condition = object.condition ?? "";
    message.actionType = object.actionType ?? 0;
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.updateTime = object.updateTime ?? undefined;
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