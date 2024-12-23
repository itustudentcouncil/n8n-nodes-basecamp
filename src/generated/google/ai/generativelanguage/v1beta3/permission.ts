// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ai/generativelanguage/v1beta3/permission.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ai.generativelanguage.v1beta3";

/**
 * Permission resource grants user, group or the rest of the world access to the
 * PaLM API resource (e.g. a tuned model, file).
 *
 * A role is a collection of permitted operations that allows users to perform
 * specific actions on PaLM API resources. To make them available to users,
 * groups, or service accounts, you assign roles. When you assign a role, you
 * grant permissions that the role contains.
 *
 * There are three concentric roles. Each role is a superset of the previous
 * role's permitted operations:
 *  - reader can use the resource (e.g. tuned model) for inference
 *  - writer has reader's permissions and additionally can edit and share
 *  - owner has writer's permissions and additionally can delete
 */
export interface Permission {
  /**
   * Output only. The permission name. A unique name will be generated on
   * create. Example: tunedModels/{tuned_model}permssions/{permission} Output
   * only.
   */
  name: string;
  /** Required. Immutable. The type of the grantee. */
  granteeType?:
    | Permission_GranteeType
    | undefined;
  /**
   * Optional. Immutable. The email address of the user of group which this
   * permission refers. Field is not set when permission's grantee type is
   * EVERYONE.
   */
  emailAddress?:
    | string
    | undefined;
  /** Required. The role granted by this permission. */
  role?: Permission_Role | undefined;
}

/** Defines types of the grantee of this permission. */
export enum Permission_GranteeType {
  /** GRANTEE_TYPE_UNSPECIFIED - The default value. This value is unused. */
  GRANTEE_TYPE_UNSPECIFIED = 0,
  /** USER - Represents a user. When set, you must provide email_address for the user. */
  USER = 1,
  /**
   * GROUP - Represents a group. When set, you must provide email_address for the
   * group.
   */
  GROUP = 2,
  /** EVERYONE - Represents access to everyone. No extra information is required. */
  EVERYONE = 3,
  UNRECOGNIZED = -1,
}

export function permission_GranteeTypeFromJSON(object: any): Permission_GranteeType {
  switch (object) {
    case 0:
    case "GRANTEE_TYPE_UNSPECIFIED":
      return Permission_GranteeType.GRANTEE_TYPE_UNSPECIFIED;
    case 1:
    case "USER":
      return Permission_GranteeType.USER;
    case 2:
    case "GROUP":
      return Permission_GranteeType.GROUP;
    case 3:
    case "EVERYONE":
      return Permission_GranteeType.EVERYONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission_GranteeType.UNRECOGNIZED;
  }
}

export function permission_GranteeTypeToJSON(object: Permission_GranteeType): string {
  switch (object) {
    case Permission_GranteeType.GRANTEE_TYPE_UNSPECIFIED:
      return "GRANTEE_TYPE_UNSPECIFIED";
    case Permission_GranteeType.USER:
      return "USER";
    case Permission_GranteeType.GROUP:
      return "GROUP";
    case Permission_GranteeType.EVERYONE:
      return "EVERYONE";
    case Permission_GranteeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Defines the role granted by this permission. */
export enum Permission_Role {
  /** ROLE_UNSPECIFIED - The default value. This value is unused. */
  ROLE_UNSPECIFIED = 0,
  /** OWNER - Owner can use, update, share and delete the resource. */
  OWNER = 1,
  /** WRITER - Writer can use, update and share the resource. */
  WRITER = 2,
  /** READER - Reader can use the resource. */
  READER = 3,
  UNRECOGNIZED = -1,
}

export function permission_RoleFromJSON(object: any): Permission_Role {
  switch (object) {
    case 0:
    case "ROLE_UNSPECIFIED":
      return Permission_Role.ROLE_UNSPECIFIED;
    case 1:
    case "OWNER":
      return Permission_Role.OWNER;
    case 2:
    case "WRITER":
      return Permission_Role.WRITER;
    case 3:
    case "READER":
      return Permission_Role.READER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission_Role.UNRECOGNIZED;
  }
}

export function permission_RoleToJSON(object: Permission_Role): string {
  switch (object) {
    case Permission_Role.ROLE_UNSPECIFIED:
      return "ROLE_UNSPECIFIED";
    case Permission_Role.OWNER:
      return "OWNER";
    case Permission_Role.WRITER:
      return "WRITER";
    case Permission_Role.READER:
      return "READER";
    case Permission_Role.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePermission(): Permission {
  return { name: "", granteeType: undefined, emailAddress: undefined, role: undefined };
}

export const Permission: MessageFns<Permission> = {
  encode(message: Permission, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.granteeType !== undefined) {
      writer.uint32(16).int32(message.granteeType);
    }
    if (message.emailAddress !== undefined) {
      writer.uint32(26).string(message.emailAddress);
    }
    if (message.role !== undefined) {
      writer.uint32(32).int32(message.role);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Permission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
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
          if (tag !== 16) {
            break;
          }

          message.granteeType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      granteeType: isSet(object.granteeType) ? permission_GranteeTypeFromJSON(object.granteeType) : undefined,
      emailAddress: isSet(object.emailAddress) ? globalThis.String(object.emailAddress) : undefined,
      role: isSet(object.role) ? permission_RoleFromJSON(object.role) : undefined,
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.granteeType !== undefined) {
      obj.granteeType = permission_GranteeTypeToJSON(message.granteeType);
    }
    if (message.emailAddress !== undefined) {
      obj.emailAddress = message.emailAddress;
    }
    if (message.role !== undefined) {
      obj.role = permission_RoleToJSON(message.role);
    }
    return obj;
  },

  create(base?: DeepPartial<Permission>): Permission {
    return Permission.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Permission>): Permission {
    const message = createBasePermission();
    message.name = object.name ?? "";
    message.granteeType = object.granteeType ?? undefined;
    message.emailAddress = object.emailAddress ?? undefined;
    message.role = object.role ?? undefined;
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
