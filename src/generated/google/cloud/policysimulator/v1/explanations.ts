// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/policysimulator/v1/explanations.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Policy } from "../../../iam/v1/policy.js";
import { Expr } from "../../../type/expr.js";

export const protobufPackage = "google.cloud.policysimulator.v1";

/** Whether a principal has a permission for a resource. */
export enum AccessState {
  /** ACCESS_STATE_UNSPECIFIED - Default value. This value is unused. */
  ACCESS_STATE_UNSPECIFIED = 0,
  /** GRANTED - The principal has the permission. */
  GRANTED = 1,
  /** NOT_GRANTED - The principal does not have the permission. */
  NOT_GRANTED = 2,
  /**
   * UNKNOWN_CONDITIONAL - The principal has the permission only if a condition expression evaluates
   * to `true`.
   */
  UNKNOWN_CONDITIONAL = 3,
  /**
   * UNKNOWN_INFO_DENIED - The user who created the
   * [Replay][google.cloud.policysimulator.v1.Replay] does not have
   * access to all of the policies that Policy Simulator needs to evaluate.
   */
  UNKNOWN_INFO_DENIED = 4,
  UNRECOGNIZED = -1,
}

export function accessStateFromJSON(object: any): AccessState {
  switch (object) {
    case 0:
    case "ACCESS_STATE_UNSPECIFIED":
      return AccessState.ACCESS_STATE_UNSPECIFIED;
    case 1:
    case "GRANTED":
      return AccessState.GRANTED;
    case 2:
    case "NOT_GRANTED":
      return AccessState.NOT_GRANTED;
    case 3:
    case "UNKNOWN_CONDITIONAL":
      return AccessState.UNKNOWN_CONDITIONAL;
    case 4:
    case "UNKNOWN_INFO_DENIED":
      return AccessState.UNKNOWN_INFO_DENIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessState.UNRECOGNIZED;
  }
}

export function accessStateToJSON(object: AccessState): string {
  switch (object) {
    case AccessState.ACCESS_STATE_UNSPECIFIED:
      return "ACCESS_STATE_UNSPECIFIED";
    case AccessState.GRANTED:
      return "GRANTED";
    case AccessState.NOT_GRANTED:
      return "NOT_GRANTED";
    case AccessState.UNKNOWN_CONDITIONAL:
      return "UNKNOWN_CONDITIONAL";
    case AccessState.UNKNOWN_INFO_DENIED:
      return "UNKNOWN_INFO_DENIED";
    case AccessState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The extent to which a single data point, such as the existence of a binding
 * or whether a binding includes a specific principal, contributes to an overall
 * determination.
 */
export enum HeuristicRelevance {
  /** HEURISTIC_RELEVANCE_UNSPECIFIED - Default value. This value is unused. */
  HEURISTIC_RELEVANCE_UNSPECIFIED = 0,
  /**
   * NORMAL - The data point has a limited effect on the result. Changing the data point
   * is unlikely to affect the overall determination.
   */
  NORMAL = 1,
  /**
   * HIGH - The data point has a strong effect on the result. Changing the data point
   * is likely to affect the overall determination.
   */
  HIGH = 2,
  UNRECOGNIZED = -1,
}

export function heuristicRelevanceFromJSON(object: any): HeuristicRelevance {
  switch (object) {
    case 0:
    case "HEURISTIC_RELEVANCE_UNSPECIFIED":
      return HeuristicRelevance.HEURISTIC_RELEVANCE_UNSPECIFIED;
    case 1:
    case "NORMAL":
      return HeuristicRelevance.NORMAL;
    case 2:
    case "HIGH":
      return HeuristicRelevance.HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HeuristicRelevance.UNRECOGNIZED;
  }
}

export function heuristicRelevanceToJSON(object: HeuristicRelevance): string {
  switch (object) {
    case HeuristicRelevance.HEURISTIC_RELEVANCE_UNSPECIFIED:
      return "HEURISTIC_RELEVANCE_UNSPECIFIED";
    case HeuristicRelevance.NORMAL:
      return "NORMAL";
    case HeuristicRelevance.HIGH:
      return "HIGH";
    case HeuristicRelevance.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Information about the principal, resource, and permission to check. */
export interface AccessTuple {
  /**
   * Required. The principal whose access you want to check, in the form of
   * the email address that represents that principal. For example,
   * `alice@example.com` or
   * `my-service-account@my-project.iam.gserviceaccount.com`.
   *
   * The principal must be a Google Account or a service account. Other types of
   * principals are not supported.
   */
  principal: string;
  /**
   * Required. The full resource name that identifies the resource. For example,
   * `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`.
   *
   * For examples of full resource names for Google Cloud services, see
   * https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
   */
  fullResourceName: string;
  /**
   * Required. The IAM permission to check for the specified principal and
   * resource.
   *
   * For a complete list of IAM permissions, see
   * https://cloud.google.com/iam/help/permissions/reference.
   *
   * For a complete list of predefined IAM roles and the permissions in each
   * role, see https://cloud.google.com/iam/help/roles/reference.
   */
  permission: string;
}

/**
 * Details about how a specific IAM [Policy][google.iam.v1.Policy] contributed
 * to the access check.
 */
export interface ExplainedPolicy {
  /**
   * Indicates whether _this policy_ provides the specified permission to the
   * specified principal for the specified resource.
   *
   * This field does _not_ indicate whether the principal actually has the
   * permission for the resource. There might be another policy that overrides
   * this policy. To determine whether the principal actually has the
   * permission, use the `access` field in the
   * [TroubleshootIamPolicyResponse][IamChecker.TroubleshootIamPolicyResponse].
   */
  access: AccessState;
  /**
   * The full resource name that identifies the resource. For example,
   * `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`.
   *
   * If the user who created the
   * [Replay][google.cloud.policysimulator.v1.Replay] does not have
   * access to the policy, this field is omitted.
   *
   * For examples of full resource names for Google Cloud services, see
   * https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
   */
  fullResourceName: string;
  /**
   * The IAM policy attached to the resource.
   *
   * If the user who created the
   * [Replay][google.cloud.policysimulator.v1.Replay] does not have
   * access to the policy, this field is empty.
   */
  policy:
    | Policy
    | undefined;
  /**
   * Details about how each binding in the policy affects the principal's
   * ability, or inability, to use the permission for the resource.
   *
   * If the user who created the
   * [Replay][google.cloud.policysimulator.v1.Replay] does not have
   * access to the policy, this field is omitted.
   */
  bindingExplanations: BindingExplanation[];
  /**
   * The relevance of this policy to the overall determination in the
   * [TroubleshootIamPolicyResponse][IamChecker.TroubleshootIamPolicyResponse].
   *
   * If the user who created the
   * [Replay][google.cloud.policysimulator.v1.Replay] does not have
   * access to the policy, this field is omitted.
   */
  relevance: HeuristicRelevance;
}

/**
 * Details about how a binding in a policy affects a principal's ability to use
 * a permission.
 */
export interface BindingExplanation {
  /**
   * Required. Indicates whether _this binding_ provides the specified
   * permission to the specified principal for the specified resource.
   *
   * This field does _not_ indicate whether the principal actually has the
   * permission for the resource. There might be another binding that overrides
   * this binding. To determine whether the principal actually has the
   * permission, use the `access` field in the
   * [TroubleshootIamPolicyResponse][IamChecker.TroubleshootIamPolicyResponse].
   */
  access: AccessState;
  /**
   * The role that this binding grants. For example,
   * `roles/compute.serviceAgent`.
   *
   * For a complete list of predefined IAM roles, as well as the permissions in
   * each role, see https://cloud.google.com/iam/help/roles/reference.
   */
  role: string;
  /**
   * Indicates whether the role granted by this binding contains the specified
   * permission.
   */
  rolePermission: BindingExplanation_RolePermission;
  /**
   * The relevance of the permission's existence, or nonexistence, in the role
   * to the overall determination for the entire policy.
   */
  rolePermissionRelevance: HeuristicRelevance;
  /**
   * Indicates whether each principal in the binding includes the principal
   * specified in the request, either directly or indirectly. Each key
   * identifies a principal in the binding, and each value indicates whether the
   * principal in the binding includes the principal in the request.
   *
   * For example, suppose that a binding includes the following principals:
   *
   * * `user:alice@example.com`
   * * `group:product-eng@example.com`
   *
   * The principal in the replayed access tuple is `user:bob@example.com`. This
   * user is a principal of the group `group:product-eng@example.com`.
   *
   * For the first principal in the binding, the key is
   * `user:alice@example.com`, and the `membership` field in the value is set to
   * `MEMBERSHIP_NOT_INCLUDED`.
   *
   * For the second principal in the binding, the key is
   * `group:product-eng@example.com`, and the `membership` field in the value is
   * set to `MEMBERSHIP_INCLUDED`.
   */
  memberships: { [key: string]: BindingExplanation_AnnotatedMembership };
  /**
   * The relevance of this binding to the overall determination for the entire
   * policy.
   */
  relevance: HeuristicRelevance;
  /**
   * A condition expression that prevents this binding from granting access
   * unless the expression evaluates to `true`.
   *
   * To learn about IAM Conditions, see
   * https://cloud.google.com/iam/docs/conditions-overview.
   */
  condition: Expr | undefined;
}

/** Whether a role includes a specific permission. */
export enum BindingExplanation_RolePermission {
  /** ROLE_PERMISSION_UNSPECIFIED - Default value. This value is unused. */
  ROLE_PERMISSION_UNSPECIFIED = 0,
  /** ROLE_PERMISSION_INCLUDED - The permission is included in the role. */
  ROLE_PERMISSION_INCLUDED = 1,
  /** ROLE_PERMISSION_NOT_INCLUDED - The permission is not included in the role. */
  ROLE_PERMISSION_NOT_INCLUDED = 2,
  /**
   * ROLE_PERMISSION_UNKNOWN_INFO_DENIED - The user who created the
   * [Replay][google.cloud.policysimulator.v1.Replay] is not
   * allowed to access the binding.
   */
  ROLE_PERMISSION_UNKNOWN_INFO_DENIED = 3,
  UNRECOGNIZED = -1,
}

export function bindingExplanation_RolePermissionFromJSON(object: any): BindingExplanation_RolePermission {
  switch (object) {
    case 0:
    case "ROLE_PERMISSION_UNSPECIFIED":
      return BindingExplanation_RolePermission.ROLE_PERMISSION_UNSPECIFIED;
    case 1:
    case "ROLE_PERMISSION_INCLUDED":
      return BindingExplanation_RolePermission.ROLE_PERMISSION_INCLUDED;
    case 2:
    case "ROLE_PERMISSION_NOT_INCLUDED":
      return BindingExplanation_RolePermission.ROLE_PERMISSION_NOT_INCLUDED;
    case 3:
    case "ROLE_PERMISSION_UNKNOWN_INFO_DENIED":
      return BindingExplanation_RolePermission.ROLE_PERMISSION_UNKNOWN_INFO_DENIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BindingExplanation_RolePermission.UNRECOGNIZED;
  }
}

export function bindingExplanation_RolePermissionToJSON(object: BindingExplanation_RolePermission): string {
  switch (object) {
    case BindingExplanation_RolePermission.ROLE_PERMISSION_UNSPECIFIED:
      return "ROLE_PERMISSION_UNSPECIFIED";
    case BindingExplanation_RolePermission.ROLE_PERMISSION_INCLUDED:
      return "ROLE_PERMISSION_INCLUDED";
    case BindingExplanation_RolePermission.ROLE_PERMISSION_NOT_INCLUDED:
      return "ROLE_PERMISSION_NOT_INCLUDED";
    case BindingExplanation_RolePermission.ROLE_PERMISSION_UNKNOWN_INFO_DENIED:
      return "ROLE_PERMISSION_UNKNOWN_INFO_DENIED";
    case BindingExplanation_RolePermission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Whether the binding includes the principal. */
export enum BindingExplanation_Membership {
  /** MEMBERSHIP_UNSPECIFIED - Default value. This value is unused. */
  MEMBERSHIP_UNSPECIFIED = 0,
  /**
   * MEMBERSHIP_INCLUDED - The binding includes the principal. The principal can be included
   * directly or indirectly. For example:
   *
   * * A principal is included directly if that principal is listed in the
   *   binding.
   * * A principal is included indirectly if that principal is in a Google
   *   group or Google Workspace domain that is listed in the binding.
   */
  MEMBERSHIP_INCLUDED = 1,
  /** MEMBERSHIP_NOT_INCLUDED - The binding does not include the principal. */
  MEMBERSHIP_NOT_INCLUDED = 2,
  /**
   * MEMBERSHIP_UNKNOWN_INFO_DENIED - The user who created the
   * [Replay][google.cloud.policysimulator.v1.Replay] is not
   * allowed to access the binding.
   */
  MEMBERSHIP_UNKNOWN_INFO_DENIED = 3,
  /**
   * MEMBERSHIP_UNKNOWN_UNSUPPORTED - The principal is an unsupported type. Only Google Accounts and service
   * accounts are supported.
   */
  MEMBERSHIP_UNKNOWN_UNSUPPORTED = 4,
  UNRECOGNIZED = -1,
}

export function bindingExplanation_MembershipFromJSON(object: any): BindingExplanation_Membership {
  switch (object) {
    case 0:
    case "MEMBERSHIP_UNSPECIFIED":
      return BindingExplanation_Membership.MEMBERSHIP_UNSPECIFIED;
    case 1:
    case "MEMBERSHIP_INCLUDED":
      return BindingExplanation_Membership.MEMBERSHIP_INCLUDED;
    case 2:
    case "MEMBERSHIP_NOT_INCLUDED":
      return BindingExplanation_Membership.MEMBERSHIP_NOT_INCLUDED;
    case 3:
    case "MEMBERSHIP_UNKNOWN_INFO_DENIED":
      return BindingExplanation_Membership.MEMBERSHIP_UNKNOWN_INFO_DENIED;
    case 4:
    case "MEMBERSHIP_UNKNOWN_UNSUPPORTED":
      return BindingExplanation_Membership.MEMBERSHIP_UNKNOWN_UNSUPPORTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BindingExplanation_Membership.UNRECOGNIZED;
  }
}

export function bindingExplanation_MembershipToJSON(object: BindingExplanation_Membership): string {
  switch (object) {
    case BindingExplanation_Membership.MEMBERSHIP_UNSPECIFIED:
      return "MEMBERSHIP_UNSPECIFIED";
    case BindingExplanation_Membership.MEMBERSHIP_INCLUDED:
      return "MEMBERSHIP_INCLUDED";
    case BindingExplanation_Membership.MEMBERSHIP_NOT_INCLUDED:
      return "MEMBERSHIP_NOT_INCLUDED";
    case BindingExplanation_Membership.MEMBERSHIP_UNKNOWN_INFO_DENIED:
      return "MEMBERSHIP_UNKNOWN_INFO_DENIED";
    case BindingExplanation_Membership.MEMBERSHIP_UNKNOWN_UNSUPPORTED:
      return "MEMBERSHIP_UNKNOWN_UNSUPPORTED";
    case BindingExplanation_Membership.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Details about whether the binding includes the principal. */
export interface BindingExplanation_AnnotatedMembership {
  /** Indicates whether the binding includes the principal. */
  membership: BindingExplanation_Membership;
  /**
   * The relevance of the principal's status to the overall determination for
   * the binding.
   */
  relevance: HeuristicRelevance;
}

export interface BindingExplanation_MembershipsEntry {
  key: string;
  value: BindingExplanation_AnnotatedMembership | undefined;
}

function createBaseAccessTuple(): AccessTuple {
  return { principal: "", fullResourceName: "", permission: "" };
}

export const AccessTuple: MessageFns<AccessTuple> = {
  encode(message: AccessTuple, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    if (message.fullResourceName !== "") {
      writer.uint32(18).string(message.fullResourceName);
    }
    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccessTuple {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fullResourceName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permission = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessTuple {
    return {
      principal: isSet(object.principal) ? globalThis.String(object.principal) : "",
      fullResourceName: isSet(object.fullResourceName) ? globalThis.String(object.fullResourceName) : "",
      permission: isSet(object.permission) ? globalThis.String(object.permission) : "",
    };
  },

  toJSON(message: AccessTuple): unknown {
    const obj: any = {};
    if (message.principal !== "") {
      obj.principal = message.principal;
    }
    if (message.fullResourceName !== "") {
      obj.fullResourceName = message.fullResourceName;
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    return obj;
  },

  create(base?: DeepPartial<AccessTuple>): AccessTuple {
    return AccessTuple.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessTuple>): AccessTuple {
    const message = createBaseAccessTuple();
    message.principal = object.principal ?? "";
    message.fullResourceName = object.fullResourceName ?? "";
    message.permission = object.permission ?? "";
    return message;
  },
};

function createBaseExplainedPolicy(): ExplainedPolicy {
  return { access: 0, fullResourceName: "", policy: undefined, bindingExplanations: [], relevance: 0 };
}

export const ExplainedPolicy: MessageFns<ExplainedPolicy> = {
  encode(message: ExplainedPolicy, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.access !== 0) {
      writer.uint32(8).int32(message.access);
    }
    if (message.fullResourceName !== "") {
      writer.uint32(18).string(message.fullResourceName);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).join();
    }
    for (const v of message.bindingExplanations) {
      BindingExplanation.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.relevance !== 0) {
      writer.uint32(40).int32(message.relevance);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExplainedPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplainedPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.access = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fullResourceName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.policy = Policy.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bindingExplanations.push(BindingExplanation.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.relevance = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExplainedPolicy {
    return {
      access: isSet(object.access) ? accessStateFromJSON(object.access) : 0,
      fullResourceName: isSet(object.fullResourceName) ? globalThis.String(object.fullResourceName) : "",
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
      bindingExplanations: globalThis.Array.isArray(object?.bindingExplanations)
        ? object.bindingExplanations.map((e: any) => BindingExplanation.fromJSON(e))
        : [],
      relevance: isSet(object.relevance) ? heuristicRelevanceFromJSON(object.relevance) : 0,
    };
  },

  toJSON(message: ExplainedPolicy): unknown {
    const obj: any = {};
    if (message.access !== 0) {
      obj.access = accessStateToJSON(message.access);
    }
    if (message.fullResourceName !== "") {
      obj.fullResourceName = message.fullResourceName;
    }
    if (message.policy !== undefined) {
      obj.policy = Policy.toJSON(message.policy);
    }
    if (message.bindingExplanations?.length) {
      obj.bindingExplanations = message.bindingExplanations.map((e) => BindingExplanation.toJSON(e));
    }
    if (message.relevance !== 0) {
      obj.relevance = heuristicRelevanceToJSON(message.relevance);
    }
    return obj;
  },

  create(base?: DeepPartial<ExplainedPolicy>): ExplainedPolicy {
    return ExplainedPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExplainedPolicy>): ExplainedPolicy {
    const message = createBaseExplainedPolicy();
    message.access = object.access ?? 0;
    message.fullResourceName = object.fullResourceName ?? "";
    message.policy = (object.policy !== undefined && object.policy !== null)
      ? Policy.fromPartial(object.policy)
      : undefined;
    message.bindingExplanations = object.bindingExplanations?.map((e) => BindingExplanation.fromPartial(e)) || [];
    message.relevance = object.relevance ?? 0;
    return message;
  },
};

function createBaseBindingExplanation(): BindingExplanation {
  return {
    access: 0,
    role: "",
    rolePermission: 0,
    rolePermissionRelevance: 0,
    memberships: {},
    relevance: 0,
    condition: undefined,
  };
}

export const BindingExplanation: MessageFns<BindingExplanation> = {
  encode(message: BindingExplanation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.access !== 0) {
      writer.uint32(8).int32(message.access);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    if (message.rolePermission !== 0) {
      writer.uint32(24).int32(message.rolePermission);
    }
    if (message.rolePermissionRelevance !== 0) {
      writer.uint32(32).int32(message.rolePermissionRelevance);
    }
    Object.entries(message.memberships).forEach(([key, value]) => {
      BindingExplanation_MembershipsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (message.relevance !== 0) {
      writer.uint32(48).int32(message.relevance);
    }
    if (message.condition !== undefined) {
      Expr.encode(message.condition, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BindingExplanation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindingExplanation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.access = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.role = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rolePermission = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.rolePermissionRelevance = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = BindingExplanation_MembershipsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.memberships[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.relevance = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): BindingExplanation {
    return {
      access: isSet(object.access) ? accessStateFromJSON(object.access) : 0,
      role: isSet(object.role) ? globalThis.String(object.role) : "",
      rolePermission: isSet(object.rolePermission)
        ? bindingExplanation_RolePermissionFromJSON(object.rolePermission)
        : 0,
      rolePermissionRelevance: isSet(object.rolePermissionRelevance)
        ? heuristicRelevanceFromJSON(object.rolePermissionRelevance)
        : 0,
      memberships: isObject(object.memberships)
        ? Object.entries(object.memberships).reduce<{ [key: string]: BindingExplanation_AnnotatedMembership }>(
          (acc, [key, value]) => {
            acc[key] = BindingExplanation_AnnotatedMembership.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      relevance: isSet(object.relevance) ? heuristicRelevanceFromJSON(object.relevance) : 0,
      condition: isSet(object.condition) ? Expr.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: BindingExplanation): unknown {
    const obj: any = {};
    if (message.access !== 0) {
      obj.access = accessStateToJSON(message.access);
    }
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.rolePermission !== 0) {
      obj.rolePermission = bindingExplanation_RolePermissionToJSON(message.rolePermission);
    }
    if (message.rolePermissionRelevance !== 0) {
      obj.rolePermissionRelevance = heuristicRelevanceToJSON(message.rolePermissionRelevance);
    }
    if (message.memberships) {
      const entries = Object.entries(message.memberships);
      if (entries.length > 0) {
        obj.memberships = {};
        entries.forEach(([k, v]) => {
          obj.memberships[k] = BindingExplanation_AnnotatedMembership.toJSON(v);
        });
      }
    }
    if (message.relevance !== 0) {
      obj.relevance = heuristicRelevanceToJSON(message.relevance);
    }
    if (message.condition !== undefined) {
      obj.condition = Expr.toJSON(message.condition);
    }
    return obj;
  },

  create(base?: DeepPartial<BindingExplanation>): BindingExplanation {
    return BindingExplanation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BindingExplanation>): BindingExplanation {
    const message = createBaseBindingExplanation();
    message.access = object.access ?? 0;
    message.role = object.role ?? "";
    message.rolePermission = object.rolePermission ?? 0;
    message.rolePermissionRelevance = object.rolePermissionRelevance ?? 0;
    message.memberships = Object.entries(object.memberships ?? {}).reduce<
      { [key: string]: BindingExplanation_AnnotatedMembership }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BindingExplanation_AnnotatedMembership.fromPartial(value);
      }
      return acc;
    }, {});
    message.relevance = object.relevance ?? 0;
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? Expr.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseBindingExplanation_AnnotatedMembership(): BindingExplanation_AnnotatedMembership {
  return { membership: 0, relevance: 0 };
}

export const BindingExplanation_AnnotatedMembership: MessageFns<BindingExplanation_AnnotatedMembership> = {
  encode(message: BindingExplanation_AnnotatedMembership, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.membership !== 0) {
      writer.uint32(8).int32(message.membership);
    }
    if (message.relevance !== 0) {
      writer.uint32(16).int32(message.relevance);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BindingExplanation_AnnotatedMembership {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindingExplanation_AnnotatedMembership();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.membership = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.relevance = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BindingExplanation_AnnotatedMembership {
    return {
      membership: isSet(object.membership) ? bindingExplanation_MembershipFromJSON(object.membership) : 0,
      relevance: isSet(object.relevance) ? heuristicRelevanceFromJSON(object.relevance) : 0,
    };
  },

  toJSON(message: BindingExplanation_AnnotatedMembership): unknown {
    const obj: any = {};
    if (message.membership !== 0) {
      obj.membership = bindingExplanation_MembershipToJSON(message.membership);
    }
    if (message.relevance !== 0) {
      obj.relevance = heuristicRelevanceToJSON(message.relevance);
    }
    return obj;
  },

  create(base?: DeepPartial<BindingExplanation_AnnotatedMembership>): BindingExplanation_AnnotatedMembership {
    return BindingExplanation_AnnotatedMembership.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BindingExplanation_AnnotatedMembership>): BindingExplanation_AnnotatedMembership {
    const message = createBaseBindingExplanation_AnnotatedMembership();
    message.membership = object.membership ?? 0;
    message.relevance = object.relevance ?? 0;
    return message;
  },
};

function createBaseBindingExplanation_MembershipsEntry(): BindingExplanation_MembershipsEntry {
  return { key: "", value: undefined };
}

export const BindingExplanation_MembershipsEntry: MessageFns<BindingExplanation_MembershipsEntry> = {
  encode(message: BindingExplanation_MembershipsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BindingExplanation_AnnotatedMembership.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BindingExplanation_MembershipsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindingExplanation_MembershipsEntry();
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

          message.value = BindingExplanation_AnnotatedMembership.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BindingExplanation_MembershipsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? BindingExplanation_AnnotatedMembership.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: BindingExplanation_MembershipsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = BindingExplanation_AnnotatedMembership.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<BindingExplanation_MembershipsEntry>): BindingExplanation_MembershipsEntry {
    return BindingExplanation_MembershipsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BindingExplanation_MembershipsEntry>): BindingExplanation_MembershipsEntry {
    const message = createBaseBindingExplanation_MembershipsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? BindingExplanation_AnnotatedMembership.fromPartial(object.value)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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