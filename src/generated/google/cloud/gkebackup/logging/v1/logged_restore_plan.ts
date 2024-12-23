// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/gkebackup/logging/v1/logged_restore_plan.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { NamespacedNames, Namespaces } from "./logged_common.js";

export const protobufPackage = "google.cloud.gkebackup.logging.v1";

/**
 * RestorePlan as stored in Platform log. It's used to log the details of
 * a createRestorePlan/updateRestorePlan request, so only fields that can be
 * taken from user input are included here.
 */
export interface LoggedRestorePlan {
  /** User specified descriptive string for this RestorePlan. */
  description: string;
  /**
   * The BackupPlan from which Backups may be used as the source
   * for Restores created via this RestorePlan.
   * Format: projects/* /locations/* /backupPlans/*.
   */
  backupPlan: string;
  /**
   * The target cluster into which Restores created via this RestorePlan
   * will restore data. NOTE: the cluster's region must be the same as the
   * RestorePlan.
   * Possible formats:
   *   1. projects/* /locations/* /clusters/*
   *   2. projects/* /zones/* /clusters/*
   */
  cluster: string;
  /** Configuration of Restores created via this RestorePlan. */
  restoreConfig:
    | RestoreConfig
    | undefined;
  /** A set of custom labels supplied by user. */
  labels: { [key: string]: string };
}

export interface LoggedRestorePlan_LabelsEntry {
  key: string;
  value: string;
}

/** Configuration of a restore. */
export interface RestoreConfig {
  /**
   * Specifies the mechanism to be used to restore volume data.
   * Default: VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED (will be treated as
   * NO_VOLUME_DATA_RESTORATION).
   */
  volumeDataRestorePolicy: RestoreConfig_VolumeDataRestorePolicy;
  /**
   * Defines the behavior for handling the situation where cluster-scoped
   * resources being restored already exist in the target cluster. This MUST be
   * set to a value other than CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED if
   * cluster_resource_restore_scope is not empty.
   */
  clusterResourceConflictPolicy: RestoreConfig_ClusterResourceConflictPolicy;
  /**
   * Defines the behavior for handling the situation where sets of namespaced
   * resources being restored already exist in the target cluster. This MUST be
   * set to a value other than NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED if
   * any namespaced restoration is configured via
   * namespaced_resource_restore_scope .
   */
  namespacedResourceRestoreMode: RestoreConfig_NamespacedResourceRestoreMode;
  /**
   * Identifies the cluster-scoped resources to restore from the Backup.
   * Not specifying it means NO cluster resource will be restored.
   */
  clusterResourceRestoreScope:
    | RestoreConfig_ClusterResourceRestoreScope
    | undefined;
  /**
   * Restore all namespaced resources in the Backup if set to "True".
   * Specifying this field to "False" is an error.
   */
  allNamespaces?:
    | boolean
    | undefined;
  /**
   * A list of selected Namespaces to restore from the Backup. The listed
   * Namespaces and all resources contained in them will be restored.
   */
  selectedNamespaces?:
    | Namespaces
    | undefined;
  /**
   * A list of selected ProtectedApplications to restore. The listed
   * ProtectedApplications and all the resources to which they refer will be
   * restored.
   */
  selectedApplications?:
    | NamespacedNames
    | undefined;
  /**
   * A list of transformation rules to be applied against Kubernetes resources
   * as they are selected for restoration from a Backup. Rules are executed in
   * order defined - this order matters, as changes made by a rule may impact
   * the filtering logic of subsequent rules. An empty list means no
   * substitution will occur.
   */
  substitutionRules: RestoreConfig_SubstitutionRule[];
}

/** Defines how volume data should be restored */
export enum RestoreConfig_VolumeDataRestorePolicy {
  /** VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED - unspecified, default value */
  VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED = 0,
  /**
   * RESTORE_VOLUME_DATA_FROM_BACKUP - For each PVC to be restored, will create a new underlying volume (and PV)
   * from the corresponding VolumeBackup contained within the Backup.
   */
  RESTORE_VOLUME_DATA_FROM_BACKUP = 1,
  /**
   * REUSE_VOLUME_HANDLE_FROM_BACKUP - For each PVC to be restored, attempt to reuse the original PV contained
   * in the Backup (with its original underlying volume).  Note that option
   * is likely only usable when restoring a workload to its original cluster.
   */
  REUSE_VOLUME_HANDLE_FROM_BACKUP = 2,
  /**
   * NO_VOLUME_DATA_RESTORATION - For each PVC to be restored, PVCs will be created without any particular
   * action to restore data.  In this case, the normal Kubernetes provisioning
   * logic would kick in, and this would likely result in either dynamically
   * provisioning blank PVs or binding to statically provisioned PVs.
   */
  NO_VOLUME_DATA_RESTORATION = 3,
  UNRECOGNIZED = -1,
}

export function restoreConfig_VolumeDataRestorePolicyFromJSON(object: any): RestoreConfig_VolumeDataRestorePolicy {
  switch (object) {
    case 0:
    case "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED":
      return RestoreConfig_VolumeDataRestorePolicy.VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED;
    case 1:
    case "RESTORE_VOLUME_DATA_FROM_BACKUP":
      return RestoreConfig_VolumeDataRestorePolicy.RESTORE_VOLUME_DATA_FROM_BACKUP;
    case 2:
    case "REUSE_VOLUME_HANDLE_FROM_BACKUP":
      return RestoreConfig_VolumeDataRestorePolicy.REUSE_VOLUME_HANDLE_FROM_BACKUP;
    case 3:
    case "NO_VOLUME_DATA_RESTORATION":
      return RestoreConfig_VolumeDataRestorePolicy.NO_VOLUME_DATA_RESTORATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RestoreConfig_VolumeDataRestorePolicy.UNRECOGNIZED;
  }
}

export function restoreConfig_VolumeDataRestorePolicyToJSON(object: RestoreConfig_VolumeDataRestorePolicy): string {
  switch (object) {
    case RestoreConfig_VolumeDataRestorePolicy.VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED:
      return "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED";
    case RestoreConfig_VolumeDataRestorePolicy.RESTORE_VOLUME_DATA_FROM_BACKUP:
      return "RESTORE_VOLUME_DATA_FROM_BACKUP";
    case RestoreConfig_VolumeDataRestorePolicy.REUSE_VOLUME_HANDLE_FROM_BACKUP:
      return "REUSE_VOLUME_HANDLE_FROM_BACKUP";
    case RestoreConfig_VolumeDataRestorePolicy.NO_VOLUME_DATA_RESTORATION:
      return "NO_VOLUME_DATA_RESTORATION";
    case RestoreConfig_VolumeDataRestorePolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Defines the behavior for handling the situation where cluster-scoped
 * resources being restored already exist in the target cluster.
 */
export enum RestoreConfig_ClusterResourceConflictPolicy {
  /**
   * CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED - Unspecified. Only allowed if no cluster-scoped resources will be
   * restored.
   */
  CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED = 0,
  /** USE_EXISTING_VERSION - Do not attempt to restore the conflicting resource. */
  USE_EXISTING_VERSION = 1,
  /**
   * USE_BACKUP_VERSION - Delete the existing version before re-creating it from the Backup.
   * Note that this is a dangerous option which could cause unintentional
   * data loss if used inappropriately - for example, deleting a CRD will
   * cause Kubernetes to delete all CRs of that type.
   */
  USE_BACKUP_VERSION = 2,
  UNRECOGNIZED = -1,
}

export function restoreConfig_ClusterResourceConflictPolicyFromJSON(
  object: any,
): RestoreConfig_ClusterResourceConflictPolicy {
  switch (object) {
    case 0:
    case "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED":
      return RestoreConfig_ClusterResourceConflictPolicy.CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED;
    case 1:
    case "USE_EXISTING_VERSION":
      return RestoreConfig_ClusterResourceConflictPolicy.USE_EXISTING_VERSION;
    case 2:
    case "USE_BACKUP_VERSION":
      return RestoreConfig_ClusterResourceConflictPolicy.USE_BACKUP_VERSION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RestoreConfig_ClusterResourceConflictPolicy.UNRECOGNIZED;
  }
}

export function restoreConfig_ClusterResourceConflictPolicyToJSON(
  object: RestoreConfig_ClusterResourceConflictPolicy,
): string {
  switch (object) {
    case RestoreConfig_ClusterResourceConflictPolicy.CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED:
      return "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED";
    case RestoreConfig_ClusterResourceConflictPolicy.USE_EXISTING_VERSION:
      return "USE_EXISTING_VERSION";
    case RestoreConfig_ClusterResourceConflictPolicy.USE_BACKUP_VERSION:
      return "USE_BACKUP_VERSION";
    case RestoreConfig_ClusterResourceConflictPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Defines the behavior for handling the situation where sets of namespaced
 * resources being restored already exist in the target cluster.
 */
export enum RestoreConfig_NamespacedResourceRestoreMode {
  /** NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED - Unspecified. Only allowed if no namespaced resources will be restored. */
  NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED = 0,
  /**
   * DELETE_AND_RESTORE - When conflicting top-level resources (either Namespaces or
   * ProtectedApplications, depending upon the scope) are encountered, this
   * will first trigger a delete of the conflicting resource AND ALL OF ITS
   * REFERENCED RESOURCES (e.g., all resources in the Namespace or all
   * resources referenced by the ProtectedApplication) before restoring the
   * resources from the Backup. This mode should only be used when you are
   * intending to revert some portion of a cluster to an earlier state.
   */
  DELETE_AND_RESTORE = 1,
  /**
   * FAIL_ON_CONFLICT - If conflicting top-level resources (either Namespaces or
   * ProtectedApplications, depending upon the scope) are encountered at the
   * beginning of a restore process, the Restore will fail.  If a conflict
   * occurs during the restore process itself (e.g., because an out of band
   * process creates conflicting resources), a conflict will be reported.
   */
  FAIL_ON_CONFLICT = 2,
  UNRECOGNIZED = -1,
}

export function restoreConfig_NamespacedResourceRestoreModeFromJSON(
  object: any,
): RestoreConfig_NamespacedResourceRestoreMode {
  switch (object) {
    case 0:
    case "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED":
      return RestoreConfig_NamespacedResourceRestoreMode.NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED;
    case 1:
    case "DELETE_AND_RESTORE":
      return RestoreConfig_NamespacedResourceRestoreMode.DELETE_AND_RESTORE;
    case 2:
    case "FAIL_ON_CONFLICT":
      return RestoreConfig_NamespacedResourceRestoreMode.FAIL_ON_CONFLICT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RestoreConfig_NamespacedResourceRestoreMode.UNRECOGNIZED;
  }
}

export function restoreConfig_NamespacedResourceRestoreModeToJSON(
  object: RestoreConfig_NamespacedResourceRestoreMode,
): string {
  switch (object) {
    case RestoreConfig_NamespacedResourceRestoreMode.NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED:
      return "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED";
    case RestoreConfig_NamespacedResourceRestoreMode.DELETE_AND_RESTORE:
      return "DELETE_AND_RESTORE";
    case RestoreConfig_NamespacedResourceRestoreMode.FAIL_ON_CONFLICT:
      return "FAIL_ON_CONFLICT";
    case RestoreConfig_NamespacedResourceRestoreMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * This is a direct map to the Kubernetes GroupKind type
 * [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind)
 * and is used for identifying specific "types" of resources to restore.
 */
export interface RestoreConfig_GroupKind {
  /**
   * API group string of a Kubernetes resource, e.g.
   * "apiextensions.k8s.io", "storage.k8s.io", etc.
   * Note: use empty string for core API group
   */
  resourceGroup: string;
  /**
   * Kind of a Kubernetes resource, e.g.
   * "CustomResourceDefinition", "StorageClass", etc.
   */
  resourceKind: string;
}

/** Identifies the cluster-scoped resources to restore from the Backup. */
export interface RestoreConfig_ClusterResourceRestoreScope {
  /**
   * A list of "types" of cluster-scoped resources to be restored from the
   * Backup.  An empty list means that NO cluster-scoped resources will be
   * restored. Note that Namespaces and PersistentVolume restoration is
   * handled separately and is not governed by this field.
   */
  selectedGroupKinds: RestoreConfig_GroupKind[];
}

/**
 * A transformation rule to be applied against Kubernetes resources as they
 * are selected for restoration from a Backup. A rule contains both filtering
 * logic (which resources are subject to substitution) and substitution logic.
 */
export interface RestoreConfig_SubstitutionRule {
  /**
   * (Filtering parameter) Any resource subject to substitution must be
   * contained within one of the listed Kubernetes Namespace in the Backup.
   * If this field is not provided, no namespace filtering will be performed
   * (all resources in all Namespaces, including all cluster-scoped resources,
   * will be candidates for substitution).
   * To mix cluster-scoped and namespaced resources in the same rule, use an
   * empty string ("") as one of the target namespaces.
   */
  targetNamespaces: string[];
  /**
   * (Filtering parameter) Any resource subject to substitution must belong to
   * one of the listed "types".
   * If this field is not provided, no type filtering will be performed (all
   * resources of all types matching previous filtering parameters will be
   * candidates for substitution).
   */
  targetGroupKinds: RestoreConfig_GroupKind[];
  /**
   * This is a [JSONPath]
   * ([https://kubernetes.io/docs/reference/kubectl/jsonpath/)
   * expression that matches specific fields of candidate
   * resources and it operates as both a filtering parameter (resources that
   * are not matched with this expression will not be candidates for
   * substitution) as well as a field identifier (identifies exactly which
   * fields out of the candidate resources will be modified).
   */
  targetJsonPath: string;
  /**
   * (Filtering parameter) This is a [regular expression]
   * (https://en.wikipedia.org/wiki/Regular_expression)
   * that is compared against the fields matched by the target_json_path
   * expression (and must also have passed the previous filters).
   * Substitution will not be performed against fields whose
   * value does not match this expression. If this field is NOT specified,
   * then ALL fields matched by the target_json_path expression will undergo
   * substitution. Note that an empty (e.g., "", rather than unspecified)
   * value for for this field will only match empty fields.
   */
  originalValuePattern: string;
  /**
   * This is the new value to set for any fields that pass the filtering and
   * selection criteria. To remove a value from a Kubernetes resource, either
   * leave this field unspecified, or set it to the empty string ("").
   */
  newValue: string;
}

function createBaseLoggedRestorePlan(): LoggedRestorePlan {
  return { description: "", backupPlan: "", cluster: "", restoreConfig: undefined, labels: {} };
}

export const LoggedRestorePlan: MessageFns<LoggedRestorePlan> = {
  encode(message: LoggedRestorePlan, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.backupPlan !== "") {
      writer.uint32(18).string(message.backupPlan);
    }
    if (message.cluster !== "") {
      writer.uint32(26).string(message.cluster);
    }
    if (message.restoreConfig !== undefined) {
      RestoreConfig.encode(message.restoreConfig, writer.uint32(34).fork()).join();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      LoggedRestorePlan_LabelsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoggedRestorePlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoggedRestorePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backupPlan = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cluster = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.restoreConfig = RestoreConfig.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = LoggedRestorePlan_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoggedRestorePlan {
    return {
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      backupPlan: isSet(object.backupPlan) ? globalThis.String(object.backupPlan) : "",
      cluster: isSet(object.cluster) ? globalThis.String(object.cluster) : "",
      restoreConfig: isSet(object.restoreConfig) ? RestoreConfig.fromJSON(object.restoreConfig) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: LoggedRestorePlan): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.backupPlan !== "") {
      obj.backupPlan = message.backupPlan;
    }
    if (message.cluster !== "") {
      obj.cluster = message.cluster;
    }
    if (message.restoreConfig !== undefined) {
      obj.restoreConfig = RestoreConfig.toJSON(message.restoreConfig);
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
    return obj;
  },

  create(base?: DeepPartial<LoggedRestorePlan>): LoggedRestorePlan {
    return LoggedRestorePlan.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoggedRestorePlan>): LoggedRestorePlan {
    const message = createBaseLoggedRestorePlan();
    message.description = object.description ?? "";
    message.backupPlan = object.backupPlan ?? "";
    message.cluster = object.cluster ?? "";
    message.restoreConfig = (object.restoreConfig !== undefined && object.restoreConfig !== null)
      ? RestoreConfig.fromPartial(object.restoreConfig)
      : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseLoggedRestorePlan_LabelsEntry(): LoggedRestorePlan_LabelsEntry {
  return { key: "", value: "" };
}

export const LoggedRestorePlan_LabelsEntry: MessageFns<LoggedRestorePlan_LabelsEntry> = {
  encode(message: LoggedRestorePlan_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoggedRestorePlan_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoggedRestorePlan_LabelsEntry();
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

  fromJSON(object: any): LoggedRestorePlan_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: LoggedRestorePlan_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<LoggedRestorePlan_LabelsEntry>): LoggedRestorePlan_LabelsEntry {
    return LoggedRestorePlan_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoggedRestorePlan_LabelsEntry>): LoggedRestorePlan_LabelsEntry {
    const message = createBaseLoggedRestorePlan_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRestoreConfig(): RestoreConfig {
  return {
    volumeDataRestorePolicy: 0,
    clusterResourceConflictPolicy: 0,
    namespacedResourceRestoreMode: 0,
    clusterResourceRestoreScope: undefined,
    allNamespaces: undefined,
    selectedNamespaces: undefined,
    selectedApplications: undefined,
    substitutionRules: [],
  };
}

export const RestoreConfig: MessageFns<RestoreConfig> = {
  encode(message: RestoreConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.volumeDataRestorePolicy !== 0) {
      writer.uint32(8).int32(message.volumeDataRestorePolicy);
    }
    if (message.clusterResourceConflictPolicy !== 0) {
      writer.uint32(16).int32(message.clusterResourceConflictPolicy);
    }
    if (message.namespacedResourceRestoreMode !== 0) {
      writer.uint32(24).int32(message.namespacedResourceRestoreMode);
    }
    if (message.clusterResourceRestoreScope !== undefined) {
      RestoreConfig_ClusterResourceRestoreScope.encode(message.clusterResourceRestoreScope, writer.uint32(34).fork())
        .join();
    }
    if (message.allNamespaces !== undefined) {
      writer.uint32(40).bool(message.allNamespaces);
    }
    if (message.selectedNamespaces !== undefined) {
      Namespaces.encode(message.selectedNamespaces, writer.uint32(50).fork()).join();
    }
    if (message.selectedApplications !== undefined) {
      NamespacedNames.encode(message.selectedApplications, writer.uint32(58).fork()).join();
    }
    for (const v of message.substitutionRules) {
      RestoreConfig_SubstitutionRule.encode(v!, writer.uint32(66).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RestoreConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.volumeDataRestorePolicy = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clusterResourceConflictPolicy = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.namespacedResourceRestoreMode = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clusterResourceRestoreScope = RestoreConfig_ClusterResourceRestoreScope.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allNamespaces = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.selectedNamespaces = Namespaces.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.selectedApplications = NamespacedNames.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.substitutionRules.push(RestoreConfig_SubstitutionRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreConfig {
    return {
      volumeDataRestorePolicy: isSet(object.volumeDataRestorePolicy)
        ? restoreConfig_VolumeDataRestorePolicyFromJSON(object.volumeDataRestorePolicy)
        : 0,
      clusterResourceConflictPolicy: isSet(object.clusterResourceConflictPolicy)
        ? restoreConfig_ClusterResourceConflictPolicyFromJSON(object.clusterResourceConflictPolicy)
        : 0,
      namespacedResourceRestoreMode: isSet(object.namespacedResourceRestoreMode)
        ? restoreConfig_NamespacedResourceRestoreModeFromJSON(object.namespacedResourceRestoreMode)
        : 0,
      clusterResourceRestoreScope: isSet(object.clusterResourceRestoreScope)
        ? RestoreConfig_ClusterResourceRestoreScope.fromJSON(object.clusterResourceRestoreScope)
        : undefined,
      allNamespaces: isSet(object.allNamespaces) ? globalThis.Boolean(object.allNamespaces) : undefined,
      selectedNamespaces: isSet(object.selectedNamespaces) ? Namespaces.fromJSON(object.selectedNamespaces) : undefined,
      selectedApplications: isSet(object.selectedApplications)
        ? NamespacedNames.fromJSON(object.selectedApplications)
        : undefined,
      substitutionRules: globalThis.Array.isArray(object?.substitutionRules)
        ? object.substitutionRules.map((e: any) => RestoreConfig_SubstitutionRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RestoreConfig): unknown {
    const obj: any = {};
    if (message.volumeDataRestorePolicy !== 0) {
      obj.volumeDataRestorePolicy = restoreConfig_VolumeDataRestorePolicyToJSON(message.volumeDataRestorePolicy);
    }
    if (message.clusterResourceConflictPolicy !== 0) {
      obj.clusterResourceConflictPolicy = restoreConfig_ClusterResourceConflictPolicyToJSON(
        message.clusterResourceConflictPolicy,
      );
    }
    if (message.namespacedResourceRestoreMode !== 0) {
      obj.namespacedResourceRestoreMode = restoreConfig_NamespacedResourceRestoreModeToJSON(
        message.namespacedResourceRestoreMode,
      );
    }
    if (message.clusterResourceRestoreScope !== undefined) {
      obj.clusterResourceRestoreScope = RestoreConfig_ClusterResourceRestoreScope.toJSON(
        message.clusterResourceRestoreScope,
      );
    }
    if (message.allNamespaces !== undefined) {
      obj.allNamespaces = message.allNamespaces;
    }
    if (message.selectedNamespaces !== undefined) {
      obj.selectedNamespaces = Namespaces.toJSON(message.selectedNamespaces);
    }
    if (message.selectedApplications !== undefined) {
      obj.selectedApplications = NamespacedNames.toJSON(message.selectedApplications);
    }
    if (message.substitutionRules?.length) {
      obj.substitutionRules = message.substitutionRules.map((e) => RestoreConfig_SubstitutionRule.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreConfig>): RestoreConfig {
    return RestoreConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreConfig>): RestoreConfig {
    const message = createBaseRestoreConfig();
    message.volumeDataRestorePolicy = object.volumeDataRestorePolicy ?? 0;
    message.clusterResourceConflictPolicy = object.clusterResourceConflictPolicy ?? 0;
    message.namespacedResourceRestoreMode = object.namespacedResourceRestoreMode ?? 0;
    message.clusterResourceRestoreScope =
      (object.clusterResourceRestoreScope !== undefined && object.clusterResourceRestoreScope !== null)
        ? RestoreConfig_ClusterResourceRestoreScope.fromPartial(object.clusterResourceRestoreScope)
        : undefined;
    message.allNamespaces = object.allNamespaces ?? undefined;
    message.selectedNamespaces = (object.selectedNamespaces !== undefined && object.selectedNamespaces !== null)
      ? Namespaces.fromPartial(object.selectedNamespaces)
      : undefined;
    message.selectedApplications = (object.selectedApplications !== undefined && object.selectedApplications !== null)
      ? NamespacedNames.fromPartial(object.selectedApplications)
      : undefined;
    message.substitutionRules = object.substitutionRules?.map((e) => RestoreConfig_SubstitutionRule.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseRestoreConfig_GroupKind(): RestoreConfig_GroupKind {
  return { resourceGroup: "", resourceKind: "" };
}

export const RestoreConfig_GroupKind: MessageFns<RestoreConfig_GroupKind> = {
  encode(message: RestoreConfig_GroupKind, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceGroup !== "") {
      writer.uint32(10).string(message.resourceGroup);
    }
    if (message.resourceKind !== "") {
      writer.uint32(18).string(message.resourceKind);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RestoreConfig_GroupKind {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreConfig_GroupKind();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceGroup = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceKind = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreConfig_GroupKind {
    return {
      resourceGroup: isSet(object.resourceGroup) ? globalThis.String(object.resourceGroup) : "",
      resourceKind: isSet(object.resourceKind) ? globalThis.String(object.resourceKind) : "",
    };
  },

  toJSON(message: RestoreConfig_GroupKind): unknown {
    const obj: any = {};
    if (message.resourceGroup !== "") {
      obj.resourceGroup = message.resourceGroup;
    }
    if (message.resourceKind !== "") {
      obj.resourceKind = message.resourceKind;
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreConfig_GroupKind>): RestoreConfig_GroupKind {
    return RestoreConfig_GroupKind.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreConfig_GroupKind>): RestoreConfig_GroupKind {
    const message = createBaseRestoreConfig_GroupKind();
    message.resourceGroup = object.resourceGroup ?? "";
    message.resourceKind = object.resourceKind ?? "";
    return message;
  },
};

function createBaseRestoreConfig_ClusterResourceRestoreScope(): RestoreConfig_ClusterResourceRestoreScope {
  return { selectedGroupKinds: [] };
}

export const RestoreConfig_ClusterResourceRestoreScope: MessageFns<RestoreConfig_ClusterResourceRestoreScope> = {
  encode(message: RestoreConfig_ClusterResourceRestoreScope, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.selectedGroupKinds) {
      RestoreConfig_GroupKind.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RestoreConfig_ClusterResourceRestoreScope {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreConfig_ClusterResourceRestoreScope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selectedGroupKinds.push(RestoreConfig_GroupKind.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreConfig_ClusterResourceRestoreScope {
    return {
      selectedGroupKinds: globalThis.Array.isArray(object?.selectedGroupKinds)
        ? object.selectedGroupKinds.map((e: any) => RestoreConfig_GroupKind.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RestoreConfig_ClusterResourceRestoreScope): unknown {
    const obj: any = {};
    if (message.selectedGroupKinds?.length) {
      obj.selectedGroupKinds = message.selectedGroupKinds.map((e) => RestoreConfig_GroupKind.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreConfig_ClusterResourceRestoreScope>): RestoreConfig_ClusterResourceRestoreScope {
    return RestoreConfig_ClusterResourceRestoreScope.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<RestoreConfig_ClusterResourceRestoreScope>,
  ): RestoreConfig_ClusterResourceRestoreScope {
    const message = createBaseRestoreConfig_ClusterResourceRestoreScope();
    message.selectedGroupKinds = object.selectedGroupKinds?.map((e) => RestoreConfig_GroupKind.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRestoreConfig_SubstitutionRule(): RestoreConfig_SubstitutionRule {
  return { targetNamespaces: [], targetGroupKinds: [], targetJsonPath: "", originalValuePattern: "", newValue: "" };
}

export const RestoreConfig_SubstitutionRule: MessageFns<RestoreConfig_SubstitutionRule> = {
  encode(message: RestoreConfig_SubstitutionRule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.targetNamespaces) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.targetGroupKinds) {
      RestoreConfig_GroupKind.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.targetJsonPath !== "") {
      writer.uint32(26).string(message.targetJsonPath);
    }
    if (message.originalValuePattern !== "") {
      writer.uint32(34).string(message.originalValuePattern);
    }
    if (message.newValue !== "") {
      writer.uint32(42).string(message.newValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RestoreConfig_SubstitutionRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreConfig_SubstitutionRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetNamespaces.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetGroupKinds.push(RestoreConfig_GroupKind.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.targetJsonPath = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.originalValuePattern = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.newValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestoreConfig_SubstitutionRule {
    return {
      targetNamespaces: globalThis.Array.isArray(object?.targetNamespaces)
        ? object.targetNamespaces.map((e: any) => globalThis.String(e))
        : [],
      targetGroupKinds: globalThis.Array.isArray(object?.targetGroupKinds)
        ? object.targetGroupKinds.map((e: any) => RestoreConfig_GroupKind.fromJSON(e))
        : [],
      targetJsonPath: isSet(object.targetJsonPath) ? globalThis.String(object.targetJsonPath) : "",
      originalValuePattern: isSet(object.originalValuePattern) ? globalThis.String(object.originalValuePattern) : "",
      newValue: isSet(object.newValue) ? globalThis.String(object.newValue) : "",
    };
  },

  toJSON(message: RestoreConfig_SubstitutionRule): unknown {
    const obj: any = {};
    if (message.targetNamespaces?.length) {
      obj.targetNamespaces = message.targetNamespaces;
    }
    if (message.targetGroupKinds?.length) {
      obj.targetGroupKinds = message.targetGroupKinds.map((e) => RestoreConfig_GroupKind.toJSON(e));
    }
    if (message.targetJsonPath !== "") {
      obj.targetJsonPath = message.targetJsonPath;
    }
    if (message.originalValuePattern !== "") {
      obj.originalValuePattern = message.originalValuePattern;
    }
    if (message.newValue !== "") {
      obj.newValue = message.newValue;
    }
    return obj;
  },

  create(base?: DeepPartial<RestoreConfig_SubstitutionRule>): RestoreConfig_SubstitutionRule {
    return RestoreConfig_SubstitutionRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestoreConfig_SubstitutionRule>): RestoreConfig_SubstitutionRule {
    const message = createBaseRestoreConfig_SubstitutionRule();
    message.targetNamespaces = object.targetNamespaces?.map((e) => e) || [];
    message.targetGroupKinds = object.targetGroupKinds?.map((e) => RestoreConfig_GroupKind.fromPartial(e)) || [];
    message.targetJsonPath = object.targetJsonPath ?? "";
    message.originalValuePattern = object.originalValuePattern ?? "";
    message.newValue = object.newValue ?? "";
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
