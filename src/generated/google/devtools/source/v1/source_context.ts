// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/source/v1/source_context.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.devtools.source.v1";

/**
 * A SourceContext is a reference to a tree of files. A SourceContext together
 * with a path point to a unique revision of a single file or directory.
 */
export interface SourceContext {
  /** A SourceContext referring to a revision in a cloud repo. */
  cloudRepo?:
    | CloudRepoSourceContext
    | undefined;
  /** A SourceContext referring to a snapshot in a cloud workspace. */
  cloudWorkspace?:
    | CloudWorkspaceSourceContext
    | undefined;
  /** A SourceContext referring to a Gerrit project. */
  gerrit?:
    | GerritSourceContext
    | undefined;
  /** A SourceContext referring to any third party Git repo (e.g. GitHub). */
  git?: GitSourceContext | undefined;
}

/**
 * An ExtendedSourceContext is a SourceContext combined with additional
 * details describing the context.
 */
export interface ExtendedSourceContext {
  /** Any source context. */
  context:
    | SourceContext
    | undefined;
  /** Labels with user defined metadata. */
  labels: { [key: string]: string };
}

export interface ExtendedSourceContext_LabelsEntry {
  key: string;
  value: string;
}

/** An alias to a repo revision. */
export interface AliasContext {
  /** The alias kind. */
  kind: AliasContext_Kind;
  /** The alias name. */
  name: string;
}

/** The type of an Alias. */
export enum AliasContext_Kind {
  /** ANY - Do not use. */
  ANY = 0,
  /** FIXED - Git tag */
  FIXED = 1,
  /** MOVABLE - Git branch */
  MOVABLE = 2,
  /**
   * OTHER - OTHER is used to specify non-standard aliases, those not of the kinds
   * above. For example, if a Git repo has a ref named "refs/foo/bar", it
   * is considered to be of kind OTHER.
   */
  OTHER = 4,
  UNRECOGNIZED = -1,
}

export function aliasContext_KindFromJSON(object: any): AliasContext_Kind {
  switch (object) {
    case 0:
    case "ANY":
      return AliasContext_Kind.ANY;
    case 1:
    case "FIXED":
      return AliasContext_Kind.FIXED;
    case 2:
    case "MOVABLE":
      return AliasContext_Kind.MOVABLE;
    case 4:
    case "OTHER":
      return AliasContext_Kind.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AliasContext_Kind.UNRECOGNIZED;
  }
}

export function aliasContext_KindToJSON(object: AliasContext_Kind): string {
  switch (object) {
    case AliasContext_Kind.ANY:
      return "ANY";
    case AliasContext_Kind.FIXED:
      return "FIXED";
    case AliasContext_Kind.MOVABLE:
      return "MOVABLE";
    case AliasContext_Kind.OTHER:
      return "OTHER";
    case AliasContext_Kind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A CloudRepoSourceContext denotes a particular revision in a cloud
 * repo (a repo hosted by the Google Cloud Platform).
 */
export interface CloudRepoSourceContext {
  /** The ID of the repo. */
  repoId:
    | RepoId
    | undefined;
  /** A revision ID. */
  revisionId?:
    | string
    | undefined;
  /**
   * The name of an alias (branch, tag, etc.).
   *
   * @deprecated
   */
  aliasName?:
    | string
    | undefined;
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext | undefined;
}

/** A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot. */
export interface CloudWorkspaceSourceContext {
  /** The ID of the workspace. */
  workspaceId:
    | CloudWorkspaceId
    | undefined;
  /**
   * The ID of the snapshot.
   * An empty snapshot_id refers to the most recent snapshot.
   */
  snapshotId: string;
}

/** A SourceContext referring to a Gerrit project. */
export interface GerritSourceContext {
  /** The URI of a running Gerrit instance. */
  hostUri: string;
  /**
   * The full project name within the host. Projects may be nested, so
   * "project/subproject" is a valid project name.
   * The "repo name" is hostURI/project.
   */
  gerritProject: string;
  /** A revision (commit) ID. */
  revisionId?:
    | string
    | undefined;
  /**
   * The name of an alias (branch, tag, etc.).
   *
   * @deprecated
   */
  aliasName?:
    | string
    | undefined;
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext | undefined;
}

/**
 * A GitSourceContext denotes a particular revision in a third party Git
 * repository (e.g. GitHub).
 */
export interface GitSourceContext {
  /** Git repository URL. */
  url: string;
  /**
   * Git commit hash.
   * required.
   */
  revisionId: string;
}

/** A unique identifier for a cloud repo. */
export interface RepoId {
  /** A combination of a project ID and a repo name. */
  projectRepoId?:
    | ProjectRepoId
    | undefined;
  /** A server-assigned, globally unique identifier. */
  uid?: string | undefined;
}

/**
 * Selects a repo using a Google Cloud Platform project ID
 * (e.g. winged-cargo-31) and a repo name within that project.
 */
export interface ProjectRepoId {
  /** The ID of the project. */
  projectId: string;
  /** The name of the repo. Leave empty for the default repo. */
  repoName: string;
}

/**
 * A CloudWorkspaceId is a unique identifier for a cloud workspace.
 * A cloud workspace is a place associated with a repo where modified files
 * can be stored before they are committed.
 */
export interface CloudWorkspaceId {
  /** The ID of the repo containing the workspace. */
  repoId:
    | RepoId
    | undefined;
  /**
   * The unique name of the workspace within the repo.  This is the name
   * chosen by the client in the Source API's CreateWorkspace method.
   */
  name: string;
}

function createBaseSourceContext(): SourceContext {
  return { cloudRepo: undefined, cloudWorkspace: undefined, gerrit: undefined, git: undefined };
}

export const SourceContext: MessageFns<SourceContext> = {
  encode(message: SourceContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cloudRepo !== undefined) {
      CloudRepoSourceContext.encode(message.cloudRepo, writer.uint32(10).fork()).join();
    }
    if (message.cloudWorkspace !== undefined) {
      CloudWorkspaceSourceContext.encode(message.cloudWorkspace, writer.uint32(18).fork()).join();
    }
    if (message.gerrit !== undefined) {
      GerritSourceContext.encode(message.gerrit, writer.uint32(26).fork()).join();
    }
    if (message.git !== undefined) {
      GitSourceContext.encode(message.git, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cloudRepo = CloudRepoSourceContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cloudWorkspace = CloudWorkspaceSourceContext.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gerrit = GerritSourceContext.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.git = GitSourceContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceContext {
    return {
      cloudRepo: isSet(object.cloudRepo) ? CloudRepoSourceContext.fromJSON(object.cloudRepo) : undefined,
      cloudWorkspace: isSet(object.cloudWorkspace)
        ? CloudWorkspaceSourceContext.fromJSON(object.cloudWorkspace)
        : undefined,
      gerrit: isSet(object.gerrit) ? GerritSourceContext.fromJSON(object.gerrit) : undefined,
      git: isSet(object.git) ? GitSourceContext.fromJSON(object.git) : undefined,
    };
  },

  toJSON(message: SourceContext): unknown {
    const obj: any = {};
    if (message.cloudRepo !== undefined) {
      obj.cloudRepo = CloudRepoSourceContext.toJSON(message.cloudRepo);
    }
    if (message.cloudWorkspace !== undefined) {
      obj.cloudWorkspace = CloudWorkspaceSourceContext.toJSON(message.cloudWorkspace);
    }
    if (message.gerrit !== undefined) {
      obj.gerrit = GerritSourceContext.toJSON(message.gerrit);
    }
    if (message.git !== undefined) {
      obj.git = GitSourceContext.toJSON(message.git);
    }
    return obj;
  },

  create(base?: DeepPartial<SourceContext>): SourceContext {
    return SourceContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourceContext>): SourceContext {
    const message = createBaseSourceContext();
    message.cloudRepo = (object.cloudRepo !== undefined && object.cloudRepo !== null)
      ? CloudRepoSourceContext.fromPartial(object.cloudRepo)
      : undefined;
    message.cloudWorkspace = (object.cloudWorkspace !== undefined && object.cloudWorkspace !== null)
      ? CloudWorkspaceSourceContext.fromPartial(object.cloudWorkspace)
      : undefined;
    message.gerrit = (object.gerrit !== undefined && object.gerrit !== null)
      ? GerritSourceContext.fromPartial(object.gerrit)
      : undefined;
    message.git = (object.git !== undefined && object.git !== null)
      ? GitSourceContext.fromPartial(object.git)
      : undefined;
    return message;
  },
};

function createBaseExtendedSourceContext(): ExtendedSourceContext {
  return { context: undefined, labels: {} };
}

export const ExtendedSourceContext: MessageFns<ExtendedSourceContext> = {
  encode(message: ExtendedSourceContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      SourceContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ExtendedSourceContext_LabelsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedSourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = SourceContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = ExtendedSourceContext_LabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
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

  fromJSON(object: any): ExtendedSourceContext {
    return {
      context: isSet(object.context) ? SourceContext.fromJSON(object.context) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ExtendedSourceContext): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = SourceContext.toJSON(message.context);
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

  create(base?: DeepPartial<ExtendedSourceContext>): ExtendedSourceContext {
    return ExtendedSourceContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExtendedSourceContext>): ExtendedSourceContext {
    const message = createBaseExtendedSourceContext();
    message.context = (object.context !== undefined && object.context !== null)
      ? SourceContext.fromPartial(object.context)
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

function createBaseExtendedSourceContext_LabelsEntry(): ExtendedSourceContext_LabelsEntry {
  return { key: "", value: "" };
}

export const ExtendedSourceContext_LabelsEntry: MessageFns<ExtendedSourceContext_LabelsEntry> = {
  encode(message: ExtendedSourceContext_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedSourceContext_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedSourceContext_LabelsEntry();
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

  fromJSON(object: any): ExtendedSourceContext_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ExtendedSourceContext_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<ExtendedSourceContext_LabelsEntry>): ExtendedSourceContext_LabelsEntry {
    return ExtendedSourceContext_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExtendedSourceContext_LabelsEntry>): ExtendedSourceContext_LabelsEntry {
    const message = createBaseExtendedSourceContext_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAliasContext(): AliasContext {
  return { kind: 0, name: "" };
}

export const AliasContext: MessageFns<AliasContext> = {
  encode(message: AliasContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AliasContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAliasContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): AliasContext {
    return {
      kind: isSet(object.kind) ? aliasContext_KindFromJSON(object.kind) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: AliasContext): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = aliasContext_KindToJSON(message.kind);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<AliasContext>): AliasContext {
    return AliasContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AliasContext>): AliasContext {
    const message = createBaseAliasContext();
    message.kind = object.kind ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCloudRepoSourceContext(): CloudRepoSourceContext {
  return { repoId: undefined, revisionId: undefined, aliasName: undefined, aliasContext: undefined };
}

export const CloudRepoSourceContext: MessageFns<CloudRepoSourceContext> = {
  encode(message: CloudRepoSourceContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.repoId !== undefined) {
      RepoId.encode(message.repoId, writer.uint32(10).fork()).join();
    }
    if (message.revisionId !== undefined) {
      writer.uint32(18).string(message.revisionId);
    }
    if (message.aliasName !== undefined) {
      writer.uint32(26).string(message.aliasName);
    }
    if (message.aliasContext !== undefined) {
      AliasContext.encode(message.aliasContext, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CloudRepoSourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudRepoSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repoId = RepoId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.revisionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aliasName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.aliasContext = AliasContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloudRepoSourceContext {
    return {
      repoId: isSet(object.repoId) ? RepoId.fromJSON(object.repoId) : undefined,
      revisionId: isSet(object.revisionId) ? globalThis.String(object.revisionId) : undefined,
      aliasName: isSet(object.aliasName) ? globalThis.String(object.aliasName) : undefined,
      aliasContext: isSet(object.aliasContext) ? AliasContext.fromJSON(object.aliasContext) : undefined,
    };
  },

  toJSON(message: CloudRepoSourceContext): unknown {
    const obj: any = {};
    if (message.repoId !== undefined) {
      obj.repoId = RepoId.toJSON(message.repoId);
    }
    if (message.revisionId !== undefined) {
      obj.revisionId = message.revisionId;
    }
    if (message.aliasName !== undefined) {
      obj.aliasName = message.aliasName;
    }
    if (message.aliasContext !== undefined) {
      obj.aliasContext = AliasContext.toJSON(message.aliasContext);
    }
    return obj;
  },

  create(base?: DeepPartial<CloudRepoSourceContext>): CloudRepoSourceContext {
    return CloudRepoSourceContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloudRepoSourceContext>): CloudRepoSourceContext {
    const message = createBaseCloudRepoSourceContext();
    message.repoId = (object.repoId !== undefined && object.repoId !== null)
      ? RepoId.fromPartial(object.repoId)
      : undefined;
    message.revisionId = object.revisionId ?? undefined;
    message.aliasName = object.aliasName ?? undefined;
    message.aliasContext = (object.aliasContext !== undefined && object.aliasContext !== null)
      ? AliasContext.fromPartial(object.aliasContext)
      : undefined;
    return message;
  },
};

function createBaseCloudWorkspaceSourceContext(): CloudWorkspaceSourceContext {
  return { workspaceId: undefined, snapshotId: "" };
}

export const CloudWorkspaceSourceContext: MessageFns<CloudWorkspaceSourceContext> = {
  encode(message: CloudWorkspaceSourceContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.workspaceId !== undefined) {
      CloudWorkspaceId.encode(message.workspaceId, writer.uint32(10).fork()).join();
    }
    if (message.snapshotId !== "") {
      writer.uint32(18).string(message.snapshotId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CloudWorkspaceSourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudWorkspaceSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.workspaceId = CloudWorkspaceId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapshotId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloudWorkspaceSourceContext {
    return {
      workspaceId: isSet(object.workspaceId) ? CloudWorkspaceId.fromJSON(object.workspaceId) : undefined,
      snapshotId: isSet(object.snapshotId) ? globalThis.String(object.snapshotId) : "",
    };
  },

  toJSON(message: CloudWorkspaceSourceContext): unknown {
    const obj: any = {};
    if (message.workspaceId !== undefined) {
      obj.workspaceId = CloudWorkspaceId.toJSON(message.workspaceId);
    }
    if (message.snapshotId !== "") {
      obj.snapshotId = message.snapshotId;
    }
    return obj;
  },

  create(base?: DeepPartial<CloudWorkspaceSourceContext>): CloudWorkspaceSourceContext {
    return CloudWorkspaceSourceContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloudWorkspaceSourceContext>): CloudWorkspaceSourceContext {
    const message = createBaseCloudWorkspaceSourceContext();
    message.workspaceId = (object.workspaceId !== undefined && object.workspaceId !== null)
      ? CloudWorkspaceId.fromPartial(object.workspaceId)
      : undefined;
    message.snapshotId = object.snapshotId ?? "";
    return message;
  },
};

function createBaseGerritSourceContext(): GerritSourceContext {
  return { hostUri: "", gerritProject: "", revisionId: undefined, aliasName: undefined, aliasContext: undefined };
}

export const GerritSourceContext: MessageFns<GerritSourceContext> = {
  encode(message: GerritSourceContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hostUri !== "") {
      writer.uint32(10).string(message.hostUri);
    }
    if (message.gerritProject !== "") {
      writer.uint32(18).string(message.gerritProject);
    }
    if (message.revisionId !== undefined) {
      writer.uint32(26).string(message.revisionId);
    }
    if (message.aliasName !== undefined) {
      writer.uint32(34).string(message.aliasName);
    }
    if (message.aliasContext !== undefined) {
      AliasContext.encode(message.aliasContext, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GerritSourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGerritSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gerritProject = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.revisionId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.aliasName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.aliasContext = AliasContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GerritSourceContext {
    return {
      hostUri: isSet(object.hostUri) ? globalThis.String(object.hostUri) : "",
      gerritProject: isSet(object.gerritProject) ? globalThis.String(object.gerritProject) : "",
      revisionId: isSet(object.revisionId) ? globalThis.String(object.revisionId) : undefined,
      aliasName: isSet(object.aliasName) ? globalThis.String(object.aliasName) : undefined,
      aliasContext: isSet(object.aliasContext) ? AliasContext.fromJSON(object.aliasContext) : undefined,
    };
  },

  toJSON(message: GerritSourceContext): unknown {
    const obj: any = {};
    if (message.hostUri !== "") {
      obj.hostUri = message.hostUri;
    }
    if (message.gerritProject !== "") {
      obj.gerritProject = message.gerritProject;
    }
    if (message.revisionId !== undefined) {
      obj.revisionId = message.revisionId;
    }
    if (message.aliasName !== undefined) {
      obj.aliasName = message.aliasName;
    }
    if (message.aliasContext !== undefined) {
      obj.aliasContext = AliasContext.toJSON(message.aliasContext);
    }
    return obj;
  },

  create(base?: DeepPartial<GerritSourceContext>): GerritSourceContext {
    return GerritSourceContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GerritSourceContext>): GerritSourceContext {
    const message = createBaseGerritSourceContext();
    message.hostUri = object.hostUri ?? "";
    message.gerritProject = object.gerritProject ?? "";
    message.revisionId = object.revisionId ?? undefined;
    message.aliasName = object.aliasName ?? undefined;
    message.aliasContext = (object.aliasContext !== undefined && object.aliasContext !== null)
      ? AliasContext.fromPartial(object.aliasContext)
      : undefined;
    return message;
  },
};

function createBaseGitSourceContext(): GitSourceContext {
  return { url: "", revisionId: "" };
}

export const GitSourceContext: MessageFns<GitSourceContext> = {
  encode(message: GitSourceContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.revisionId !== "") {
      writer.uint32(18).string(message.revisionId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GitSourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGitSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.revisionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GitSourceContext {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      revisionId: isSet(object.revisionId) ? globalThis.String(object.revisionId) : "",
    };
  },

  toJSON(message: GitSourceContext): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.revisionId !== "") {
      obj.revisionId = message.revisionId;
    }
    return obj;
  },

  create(base?: DeepPartial<GitSourceContext>): GitSourceContext {
    return GitSourceContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GitSourceContext>): GitSourceContext {
    const message = createBaseGitSourceContext();
    message.url = object.url ?? "";
    message.revisionId = object.revisionId ?? "";
    return message;
  },
};

function createBaseRepoId(): RepoId {
  return { projectRepoId: undefined, uid: undefined };
}

export const RepoId: MessageFns<RepoId> = {
  encode(message: RepoId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.projectRepoId !== undefined) {
      ProjectRepoId.encode(message.projectRepoId, writer.uint32(10).fork()).join();
    }
    if (message.uid !== undefined) {
      writer.uint32(18).string(message.uid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RepoId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepoId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectRepoId = ProjectRepoId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RepoId {
    return {
      projectRepoId: isSet(object.projectRepoId) ? ProjectRepoId.fromJSON(object.projectRepoId) : undefined,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : undefined,
    };
  },

  toJSON(message: RepoId): unknown {
    const obj: any = {};
    if (message.projectRepoId !== undefined) {
      obj.projectRepoId = ProjectRepoId.toJSON(message.projectRepoId);
    }
    if (message.uid !== undefined) {
      obj.uid = message.uid;
    }
    return obj;
  },

  create(base?: DeepPartial<RepoId>): RepoId {
    return RepoId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RepoId>): RepoId {
    const message = createBaseRepoId();
    message.projectRepoId = (object.projectRepoId !== undefined && object.projectRepoId !== null)
      ? ProjectRepoId.fromPartial(object.projectRepoId)
      : undefined;
    message.uid = object.uid ?? undefined;
    return message;
  },
};

function createBaseProjectRepoId(): ProjectRepoId {
  return { projectId: "", repoName: "" };
}

export const ProjectRepoId: MessageFns<ProjectRepoId> = {
  encode(message: ProjectRepoId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.repoName !== "") {
      writer.uint32(18).string(message.repoName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProjectRepoId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectRepoId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repoName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectRepoId {
    return {
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      repoName: isSet(object.repoName) ? globalThis.String(object.repoName) : "",
    };
  },

  toJSON(message: ProjectRepoId): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.repoName !== "") {
      obj.repoName = message.repoName;
    }
    return obj;
  },

  create(base?: DeepPartial<ProjectRepoId>): ProjectRepoId {
    return ProjectRepoId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProjectRepoId>): ProjectRepoId {
    const message = createBaseProjectRepoId();
    message.projectId = object.projectId ?? "";
    message.repoName = object.repoName ?? "";
    return message;
  },
};

function createBaseCloudWorkspaceId(): CloudWorkspaceId {
  return { repoId: undefined, name: "" };
}

export const CloudWorkspaceId: MessageFns<CloudWorkspaceId> = {
  encode(message: CloudWorkspaceId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.repoId !== undefined) {
      RepoId.encode(message.repoId, writer.uint32(10).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CloudWorkspaceId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudWorkspaceId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repoId = RepoId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): CloudWorkspaceId {
    return {
      repoId: isSet(object.repoId) ? RepoId.fromJSON(object.repoId) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: CloudWorkspaceId): unknown {
    const obj: any = {};
    if (message.repoId !== undefined) {
      obj.repoId = RepoId.toJSON(message.repoId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<CloudWorkspaceId>): CloudWorkspaceId {
    return CloudWorkspaceId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloudWorkspaceId>): CloudWorkspaceId {
    const message = createBaseCloudWorkspaceId();
    message.repoId = (object.repoId !== undefined && object.repoId !== null)
      ? RepoId.fromPartial(object.repoId)
      : undefined;
    message.name = object.name ?? "";
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
