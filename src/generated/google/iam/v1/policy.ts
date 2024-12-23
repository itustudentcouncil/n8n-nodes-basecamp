// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/iam/v1/policy.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Expr } from "../../type/expr.js";

export const protobufPackage = "google.iam.v1";

/**
 * An Identity and Access Management (IAM) policy, which specifies access
 * controls for Google Cloud resources.
 *
 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
 * `members`, or principals, to a single `role`. Principals can be user
 * accounts, service accounts, Google groups, and domains (such as G Suite). A
 * `role` is a named list of permissions; each `role` can be an IAM predefined
 * role or a user-created custom role.
 *
 * For some types of Google Cloud resources, a `binding` can also specify a
 * `condition`, which is a logical expression that allows access to a resource
 * only if the expression evaluates to `true`. A condition can add constraints
 * based on attributes of the request, the resource, or both. To learn which
 * resources support conditions in their IAM policies, see the
 * [IAM
 * documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
 *
 * **JSON example:**
 *
 * ```
 *     {
 *       "bindings": [
 *         {
 *           "role": "roles/resourcemanager.organizationAdmin",
 *           "members": [
 *             "user:mike@example.com",
 *             "group:admins@example.com",
 *             "domain:google.com",
 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
 *           ]
 *         },
 *         {
 *           "role": "roles/resourcemanager.organizationViewer",
 *           "members": [
 *             "user:eve@example.com"
 *           ],
 *           "condition": {
 *             "title": "expirable access",
 *             "description": "Does not grant access after Sep 2020",
 *             "expression": "request.time <
 *             timestamp('2020-10-01T00:00:00.000Z')",
 *           }
 *         }
 *       ],
 *       "etag": "BwWWja0YfJA=",
 *       "version": 3
 *     }
 * ```
 *
 * **YAML example:**
 *
 * ```
 *     bindings:
 *     - members:
 *       - user:mike@example.com
 *       - group:admins@example.com
 *       - domain:google.com
 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
 *       role: roles/resourcemanager.organizationAdmin
 *     - members:
 *       - user:eve@example.com
 *       role: roles/resourcemanager.organizationViewer
 *       condition:
 *         title: expirable access
 *         description: Does not grant access after Sep 2020
 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
 *     etag: BwWWja0YfJA=
 *     version: 3
 * ```
 *
 * For a description of IAM and its features, see the
 * [IAM documentation](https://cloud.google.com/iam/docs/).
 */
export interface Policy {
  /**
   * Specifies the format of the policy.
   *
   * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
   * are rejected.
   *
   * Any operation that affects conditional role bindings must specify version
   * `3`. This requirement applies to the following operations:
   *
   * * Getting a policy that includes a conditional role binding
   * * Adding a conditional role binding to a policy
   * * Changing a conditional role binding in a policy
   * * Removing any role binding, with or without a condition, from a policy
   *   that includes conditions
   *
   * **Important:** If you use IAM Conditions, you must include the `etag` field
   * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
   * you to overwrite a version `3` policy with a version `1` policy, and all of
   * the conditions in the version `3` policy are lost.
   *
   * If a policy does not include any conditions, operations on that policy may
   * specify any valid version or leave the field unset.
   *
   * To learn which resources support conditions in their IAM policies, see the
   * [IAM
   * documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
   */
  version: number;
  /**
   * Associates a list of `members`, or principals, with a `role`. Optionally,
   * may specify a `condition` that determines how and when the `bindings` are
   * applied. Each of the `bindings` must contain at least one principal.
   *
   * The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250
   * of these principals can be Google groups. Each occurrence of a principal
   * counts towards these limits. For example, if the `bindings` grant 50
   * different roles to `user:alice@example.com`, and not to any other
   * principal, then you can add another 1,450 principals to the `bindings` in
   * the `Policy`.
   */
  bindings: Binding[];
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs: AuditConfig[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help
   * prevent simultaneous updates of a policy from overwriting each other.
   * It is strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   *
   * **Important:** If you use IAM Conditions, you must include the `etag` field
   * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
   * you to overwrite a version `3` policy with a version `1` policy, and all of
   * the conditions in the version `3` policy are lost.
   */
  etag: Buffer;
}

/** Associates `members`, or principals, with a `role`. */
export interface Binding {
  /**
   * Role that is assigned to the list of `members`, or principals.
   * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
   */
  role: string;
  /**
   * Specifies the principals requesting access for a Google Cloud resource.
   * `members` can have the following values:
   *
   * * `allUsers`: A special identifier that represents anyone who is
   *    on the internet; with or without a Google account.
   *
   * * `allAuthenticatedUsers`: A special identifier that represents anyone
   *    who is authenticated with a Google account or a service account.
   *
   * * `user:{emailid}`: An email address that represents a specific Google
   *    account. For example, `alice@example.com` .
   *
   * * `serviceAccount:{emailid}`: An email address that represents a service
   *    account. For example, `my-other-app@appspot.gserviceaccount.com`.
   *
   * * `group:{emailid}`: An email address that represents a Google group.
   *    For example, `admins@example.com`.
   *
   * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
   *    identifier) representing a user that has been recently deleted. For
   *    example, `alice@example.com?uid=123456789012345678901`. If the user is
   *    recovered, this value reverts to `user:{emailid}` and the recovered user
   *    retains the role in the binding.
   *
   * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
   *    unique identifier) representing a service account that has been recently
   *    deleted. For example,
   *    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
   *    If the service account is undeleted, this value reverts to
   *    `serviceAccount:{emailid}` and the undeleted service account retains the
   *    role in the binding.
   *
   * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
   *    identifier) representing a Google group that has been recently
   *    deleted. For example, `admins@example.com?uid=123456789012345678901`. If
   *    the group is recovered, this value reverts to `group:{emailid}` and the
   *    recovered group retains the role in the binding.
   *
   * * `domain:{domain}`: The G Suite domain (primary) that represents all the
   *    users of that domain. For example, `google.com` or `example.com`.
   */
  members: string[];
  /**
   * The condition that is associated with this binding.
   *
   * If the condition evaluates to `true`, then this binding applies to the
   * current request.
   *
   * If the condition evaluates to `false`, then this binding does not apply to
   * the current request. However, a different role binding might grant the same
   * role to one or more of the principals in this binding.
   *
   * To learn which resources support conditions in their IAM policies, see the
   * [IAM
   * documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
   */
  condition: Expr | undefined;
}

/**
 * Specifies the audit configuration for a service.
 * The configuration determines which permission types are logged, and what
 * identities, if any, are exempted from logging.
 * An AuditConfig must have one or more AuditLogConfigs.
 *
 * If there are AuditConfigs for both `allServices` and a specific service,
 * the union of the two AuditConfigs is used for that service: the log_types
 * specified in each AuditConfig are enabled, and the exempted_members in each
 * AuditLogConfig are exempted.
 *
 * Example Policy with multiple AuditConfigs:
 *
 *     {
 *       "audit_configs": [
 *         {
 *           "service": "allServices",
 *           "audit_log_configs": [
 *             {
 *               "log_type": "DATA_READ",
 *               "exempted_members": [
 *                 "user:jose@example.com"
 *               ]
 *             },
 *             {
 *               "log_type": "DATA_WRITE"
 *             },
 *             {
 *               "log_type": "ADMIN_READ"
 *             }
 *           ]
 *         },
 *         {
 *           "service": "sampleservice.googleapis.com",
 *           "audit_log_configs": [
 *             {
 *               "log_type": "DATA_READ"
 *             },
 *             {
 *               "log_type": "DATA_WRITE",
 *               "exempted_members": [
 *                 "user:aliya@example.com"
 *               ]
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *
 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
 * logging. It also exempts `jose@example.com` from DATA_READ logging, and
 * `aliya@example.com` from DATA_WRITE logging.
 */
export interface AuditConfig {
  /**
   * Specifies a service that will be enabled for audit logging.
   * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
   * `allServices` is a special value that covers all services.
   */
  service: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs: AuditLogConfig[];
}

/**
 * Provides the configuration for logging a type of permissions.
 * Example:
 *
 *     {
 *       "audit_log_configs": [
 *         {
 *           "log_type": "DATA_READ",
 *           "exempted_members": [
 *             "user:jose@example.com"
 *           ]
 *         },
 *         {
 *           "log_type": "DATA_WRITE"
 *         }
 *       ]
 *     }
 *
 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
 * jose@example.com from DATA_READ logging.
 */
export interface AuditLogConfig {
  /** The log type that this config enables. */
  logType: AuditLogConfig_LogType;
  /**
   * Specifies the identities that do not cause logging for this type of
   * permission.
   * Follows the same format of
   * [Binding.members][google.iam.v1.Binding.members].
   */
  exemptedMembers: string[];
}

/**
 * The list of valid permission types for which logging can be configured.
 * Admin writes are always logged, and are not configurable.
 */
export enum AuditLogConfig_LogType {
  /** LOG_TYPE_UNSPECIFIED - Default case. Should never be this. */
  LOG_TYPE_UNSPECIFIED = 0,
  /** ADMIN_READ - Admin reads. Example: CloudIAM getIamPolicy */
  ADMIN_READ = 1,
  /** DATA_WRITE - Data writes. Example: CloudSQL Users create */
  DATA_WRITE = 2,
  /** DATA_READ - Data reads. Example: CloudSQL Users list */
  DATA_READ = 3,
  UNRECOGNIZED = -1,
}

export function auditLogConfig_LogTypeFromJSON(object: any): AuditLogConfig_LogType {
  switch (object) {
    case 0:
    case "LOG_TYPE_UNSPECIFIED":
      return AuditLogConfig_LogType.LOG_TYPE_UNSPECIFIED;
    case 1:
    case "ADMIN_READ":
      return AuditLogConfig_LogType.ADMIN_READ;
    case 2:
    case "DATA_WRITE":
      return AuditLogConfig_LogType.DATA_WRITE;
    case 3:
    case "DATA_READ":
      return AuditLogConfig_LogType.DATA_READ;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuditLogConfig_LogType.UNRECOGNIZED;
  }
}

export function auditLogConfig_LogTypeToJSON(object: AuditLogConfig_LogType): string {
  switch (object) {
    case AuditLogConfig_LogType.LOG_TYPE_UNSPECIFIED:
      return "LOG_TYPE_UNSPECIFIED";
    case AuditLogConfig_LogType.ADMIN_READ:
      return "ADMIN_READ";
    case AuditLogConfig_LogType.DATA_WRITE:
      return "DATA_WRITE";
    case AuditLogConfig_LogType.DATA_READ:
      return "DATA_READ";
    case AuditLogConfig_LogType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** The difference delta between two policies. */
export interface PolicyDelta {
  /** The delta for Bindings between two policies. */
  bindingDeltas: BindingDelta[];
  /** The delta for AuditConfigs between two policies. */
  auditConfigDeltas: AuditConfigDelta[];
}

/**
 * One delta entry for Binding. Each individual change (only one member in each
 * entry) to a binding will be a separate entry.
 */
export interface BindingDelta {
  /**
   * The action that was performed on a Binding.
   * Required
   */
  action: BindingDelta_Action;
  /**
   * Role that is assigned to `members`.
   * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
   * Required
   */
  role: string;
  /**
   * A single identity requesting access for a Google Cloud resource.
   * Follows the same format of Binding.members.
   * Required
   */
  member: string;
  /** The condition that is associated with this binding. */
  condition: Expr | undefined;
}

/** The type of action performed on a Binding in a policy. */
export enum BindingDelta_Action {
  /** ACTION_UNSPECIFIED - Unspecified. */
  ACTION_UNSPECIFIED = 0,
  /** ADD - Addition of a Binding. */
  ADD = 1,
  /** REMOVE - Removal of a Binding. */
  REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function bindingDelta_ActionFromJSON(object: any): BindingDelta_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return BindingDelta_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ADD":
      return BindingDelta_Action.ADD;
    case 2:
    case "REMOVE":
      return BindingDelta_Action.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BindingDelta_Action.UNRECOGNIZED;
  }
}

export function bindingDelta_ActionToJSON(object: BindingDelta_Action): string {
  switch (object) {
    case BindingDelta_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case BindingDelta_Action.ADD:
      return "ADD";
    case BindingDelta_Action.REMOVE:
      return "REMOVE";
    case BindingDelta_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * One delta entry for AuditConfig. Each individual change (only one
 * exempted_member in each entry) to a AuditConfig will be a separate entry.
 */
export interface AuditConfigDelta {
  /**
   * The action that was performed on an audit configuration in a policy.
   * Required
   */
  action: AuditConfigDelta_Action;
  /**
   * Specifies a service that was configured for Cloud Audit Logging.
   * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
   * `allServices` is a special value that covers all services.
   * Required
   */
  service: string;
  /**
   * A single identity that is exempted from "data access" audit
   * logging for the `service` specified above.
   * Follows the same format of Binding.members.
   */
  exemptedMember: string;
  /**
   * Specifies the log_type that was be enabled. ADMIN_ACTIVITY is always
   * enabled, and cannot be configured.
   * Required
   */
  logType: string;
}

/** The type of action performed on an audit configuration in a policy. */
export enum AuditConfigDelta_Action {
  /** ACTION_UNSPECIFIED - Unspecified. */
  ACTION_UNSPECIFIED = 0,
  /** ADD - Addition of an audit configuration. */
  ADD = 1,
  /** REMOVE - Removal of an audit configuration. */
  REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function auditConfigDelta_ActionFromJSON(object: any): AuditConfigDelta_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return AuditConfigDelta_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ADD":
      return AuditConfigDelta_Action.ADD;
    case 2:
    case "REMOVE":
      return AuditConfigDelta_Action.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuditConfigDelta_Action.UNRECOGNIZED;
  }
}

export function auditConfigDelta_ActionToJSON(object: AuditConfigDelta_Action): string {
  switch (object) {
    case AuditConfigDelta_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case AuditConfigDelta_Action.ADD:
      return "ADD";
    case AuditConfigDelta_Action.REMOVE:
      return "REMOVE";
    case AuditConfigDelta_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePolicy(): Policy {
  return { version: 0, bindings: [], auditConfigs: [], etag: Buffer.alloc(0) };
}

export const Policy: MessageFns<Policy> = {
  encode(message: Policy, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    for (const v of message.bindings) {
      Binding.encode(v!, writer.uint32(34).fork()).join();
    }
    for (const v of message.auditConfigs) {
      AuditConfig.encode(v!, writer.uint32(50).fork()).join();
    }
    if (message.etag.length !== 0) {
      writer.uint32(26).bytes(message.etag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Policy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bindings.push(Binding.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.auditConfigs.push(AuditConfig.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.etag = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Policy {
    return {
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
      bindings: globalThis.Array.isArray(object?.bindings) ? object.bindings.map((e: any) => Binding.fromJSON(e)) : [],
      auditConfigs: globalThis.Array.isArray(object?.auditConfigs)
        ? object.auditConfigs.map((e: any) => AuditConfig.fromJSON(e))
        : [],
      etag: isSet(object.etag) ? Buffer.from(bytesFromBase64(object.etag)) : Buffer.alloc(0),
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.bindings?.length) {
      obj.bindings = message.bindings.map((e) => Binding.toJSON(e));
    }
    if (message.auditConfigs?.length) {
      obj.auditConfigs = message.auditConfigs.map((e) => AuditConfig.toJSON(e));
    }
    if (message.etag.length !== 0) {
      obj.etag = base64FromBytes(message.etag);
    }
    return obj;
  },

  create(base?: DeepPartial<Policy>): Policy {
    return Policy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Policy>): Policy {
    const message = createBasePolicy();
    message.version = object.version ?? 0;
    message.bindings = object.bindings?.map((e) => Binding.fromPartial(e)) || [];
    message.auditConfigs = object.auditConfigs?.map((e) => AuditConfig.fromPartial(e)) || [];
    message.etag = object.etag ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseBinding(): Binding {
  return { role: "", members: [], condition: undefined };
}

export const Binding: MessageFns<Binding> = {
  encode(message: Binding, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    for (const v of message.members) {
      writer.uint32(18).string(v!);
    }
    if (message.condition !== undefined) {
      Expr.encode(message.condition, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Binding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.members.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.condition = Expr.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Binding {
    return {
      role: isSet(object.role) ? globalThis.String(object.role) : "",
      members: globalThis.Array.isArray(object?.members) ? object.members.map((e: any) => globalThis.String(e)) : [],
      condition: isSet(object.condition) ? Expr.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: Binding): unknown {
    const obj: any = {};
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.members?.length) {
      obj.members = message.members;
    }
    if (message.condition !== undefined) {
      obj.condition = Expr.toJSON(message.condition);
    }
    return obj;
  },

  create(base?: DeepPartial<Binding>): Binding {
    return Binding.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Binding>): Binding {
    const message = createBaseBinding();
    message.role = object.role ?? "";
    message.members = object.members?.map((e) => e) || [];
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? Expr.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseAuditConfig(): AuditConfig {
  return { service: "", auditLogConfigs: [] };
}

export const AuditConfig: MessageFns<AuditConfig> = {
  encode(message: AuditConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.auditLogConfigs) {
      AuditLogConfig.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.auditLogConfigs.push(AuditLogConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuditConfig {
    return {
      service: isSet(object.service) ? globalThis.String(object.service) : "",
      auditLogConfigs: globalThis.Array.isArray(object?.auditLogConfigs)
        ? object.auditLogConfigs.map((e: any) => AuditLogConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuditConfig): unknown {
    const obj: any = {};
    if (message.service !== "") {
      obj.service = message.service;
    }
    if (message.auditLogConfigs?.length) {
      obj.auditLogConfigs = message.auditLogConfigs.map((e) => AuditLogConfig.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AuditConfig>): AuditConfig {
    return AuditConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditConfig>): AuditConfig {
    const message = createBaseAuditConfig();
    message.service = object.service ?? "";
    message.auditLogConfigs = object.auditLogConfigs?.map((e) => AuditLogConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAuditLogConfig(): AuditLogConfig {
  return { logType: 0, exemptedMembers: [] };
}

export const AuditLogConfig: MessageFns<AuditLogConfig> = {
  encode(message: AuditLogConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.logType !== 0) {
      writer.uint32(8).int32(message.logType);
    }
    for (const v of message.exemptedMembers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditLogConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditLogConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.logType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.exemptedMembers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuditLogConfig {
    return {
      logType: isSet(object.logType) ? auditLogConfig_LogTypeFromJSON(object.logType) : 0,
      exemptedMembers: globalThis.Array.isArray(object?.exemptedMembers)
        ? object.exemptedMembers.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: AuditLogConfig): unknown {
    const obj: any = {};
    if (message.logType !== 0) {
      obj.logType = auditLogConfig_LogTypeToJSON(message.logType);
    }
    if (message.exemptedMembers?.length) {
      obj.exemptedMembers = message.exemptedMembers;
    }
    return obj;
  },

  create(base?: DeepPartial<AuditLogConfig>): AuditLogConfig {
    return AuditLogConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditLogConfig>): AuditLogConfig {
    const message = createBaseAuditLogConfig();
    message.logType = object.logType ?? 0;
    message.exemptedMembers = object.exemptedMembers?.map((e) => e) || [];
    return message;
  },
};

function createBasePolicyDelta(): PolicyDelta {
  return { bindingDeltas: [], auditConfigDeltas: [] };
}

export const PolicyDelta: MessageFns<PolicyDelta> = {
  encode(message: PolicyDelta, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.bindingDeltas) {
      BindingDelta.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.auditConfigDeltas) {
      AuditConfigDelta.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PolicyDelta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bindingDeltas.push(BindingDelta.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auditConfigDeltas.push(AuditConfigDelta.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicyDelta {
    return {
      bindingDeltas: globalThis.Array.isArray(object?.bindingDeltas)
        ? object.bindingDeltas.map((e: any) => BindingDelta.fromJSON(e))
        : [],
      auditConfigDeltas: globalThis.Array.isArray(object?.auditConfigDeltas)
        ? object.auditConfigDeltas.map((e: any) => AuditConfigDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PolicyDelta): unknown {
    const obj: any = {};
    if (message.bindingDeltas?.length) {
      obj.bindingDeltas = message.bindingDeltas.map((e) => BindingDelta.toJSON(e));
    }
    if (message.auditConfigDeltas?.length) {
      obj.auditConfigDeltas = message.auditConfigDeltas.map((e) => AuditConfigDelta.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PolicyDelta>): PolicyDelta {
    return PolicyDelta.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PolicyDelta>): PolicyDelta {
    const message = createBasePolicyDelta();
    message.bindingDeltas = object.bindingDeltas?.map((e) => BindingDelta.fromPartial(e)) || [];
    message.auditConfigDeltas = object.auditConfigDeltas?.map((e) => AuditConfigDelta.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBindingDelta(): BindingDelta {
  return { action: 0, role: "", member: "", condition: undefined };
}

export const BindingDelta: MessageFns<BindingDelta> = {
  encode(message: BindingDelta, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    if (message.condition !== undefined) {
      Expr.encode(message.condition, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BindingDelta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindingDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.role = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.member = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.condition = Expr.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BindingDelta {
    return {
      action: isSet(object.action) ? bindingDelta_ActionFromJSON(object.action) : 0,
      role: isSet(object.role) ? globalThis.String(object.role) : "",
      member: isSet(object.member) ? globalThis.String(object.member) : "",
      condition: isSet(object.condition) ? Expr.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: BindingDelta): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = bindingDelta_ActionToJSON(message.action);
    }
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.member !== "") {
      obj.member = message.member;
    }
    if (message.condition !== undefined) {
      obj.condition = Expr.toJSON(message.condition);
    }
    return obj;
  },

  create(base?: DeepPartial<BindingDelta>): BindingDelta {
    return BindingDelta.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BindingDelta>): BindingDelta {
    const message = createBaseBindingDelta();
    message.action = object.action ?? 0;
    message.role = object.role ?? "";
    message.member = object.member ?? "";
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? Expr.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseAuditConfigDelta(): AuditConfigDelta {
  return { action: 0, service: "", exemptedMember: "", logType: "" };
}

export const AuditConfigDelta: MessageFns<AuditConfigDelta> = {
  encode(message: AuditConfigDelta, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.service !== "") {
      writer.uint32(18).string(message.service);
    }
    if (message.exemptedMember !== "") {
      writer.uint32(26).string(message.exemptedMember);
    }
    if (message.logType !== "") {
      writer.uint32(34).string(message.logType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditConfigDelta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditConfigDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.service = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.exemptedMember = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.logType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuditConfigDelta {
    return {
      action: isSet(object.action) ? auditConfigDelta_ActionFromJSON(object.action) : 0,
      service: isSet(object.service) ? globalThis.String(object.service) : "",
      exemptedMember: isSet(object.exemptedMember) ? globalThis.String(object.exemptedMember) : "",
      logType: isSet(object.logType) ? globalThis.String(object.logType) : "",
    };
  },

  toJSON(message: AuditConfigDelta): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = auditConfigDelta_ActionToJSON(message.action);
    }
    if (message.service !== "") {
      obj.service = message.service;
    }
    if (message.exemptedMember !== "") {
      obj.exemptedMember = message.exemptedMember;
    }
    if (message.logType !== "") {
      obj.logType = message.logType;
    }
    return obj;
  },

  create(base?: DeepPartial<AuditConfigDelta>): AuditConfigDelta {
    return AuditConfigDelta.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditConfigDelta>): AuditConfigDelta {
    const message = createBaseAuditConfigDelta();
    message.action = object.action ?? 0;
    message.service = object.service ?? "";
    message.exemptedMember = object.exemptedMember ?? "";
    message.logType = object.logType ?? "";
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
