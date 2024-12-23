// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/oslogin/v1alpha/oslogin.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../../../protobuf/empty.js";
import { FieldMask } from "../../../protobuf/field_mask.js";
import { PosixAccount, SshPublicKey } from "../common/common.js";

export const protobufPackage = "google.cloud.oslogin.v1alpha";

/**
 * The user profile information used for logging in to a virtual machine on
 * Google Compute Engine.
 */
export interface LoginProfile {
  /** A unique user ID for identifying the user. */
  name: string;
  /** The list of POSIX accounts associated with the Directory API user. */
  posixAccounts: PosixAccount[];
  /** A map from SSH public key fingerprint to the associated key object. */
  sshPublicKeys: { [key: string]: SshPublicKey };
  /** Indicates if the user is suspended. */
  suspended: boolean;
}

export interface LoginProfile_SshPublicKeysEntry {
  key: string;
  value: SshPublicKey | undefined;
}

/** A request message for deleting a POSIX account entry. */
export interface DeletePosixAccountRequest {
  /**
   * A reference to the POSIX account to update. POSIX accounts are identified
   * by the project ID they are associated with. A reference to the POSIX
   * account is in format `users/{user}/projects/{project}`.
   */
  name: string;
}

/** A request message for deleting an SSH public key. */
export interface DeleteSshPublicKeyRequest {
  /**
   * The fingerprint of the public key to update. Public keys are identified by
   * their SHA-256 fingerprint. The fingerprint of the public key is in format
   * `users/{user}/sshPublicKeys/{fingerprint}`.
   */
  name: string;
}

/** A request message for retrieving the login profile information for a user. */
export interface GetLoginProfileRequest {
  /** The unique ID for the user in format `users/{user}`. */
  name: string;
}

/** A request message for retrieving an SSH public key. */
export interface GetSshPublicKeyRequest {
  /**
   * The fingerprint of the public key to retrieve. Public keys are identified
   * by their SHA-256 fingerprint. The fingerprint of the public key is in
   * format `users/{user}/sshPublicKeys/{fingerprint}`.
   */
  name: string;
}

/** A request message for importing an SSH public key. */
export interface ImportSshPublicKeyRequest {
  /** The unique ID for the user in format `users/{user}`. */
  parent: string;
  /** The SSH public key and expiration time. */
  sshPublicKey:
    | SshPublicKey
    | undefined;
  /** The project ID of the Google Cloud Platform project. */
  projectId: string;
}

/** A response message for importing an SSH public key. */
export interface ImportSshPublicKeyResponse {
  /** The login profile information for the user. */
  loginProfile: LoginProfile | undefined;
}

/** A request message for updating an SSH public key. */
export interface UpdateSshPublicKeyRequest {
  /**
   * The fingerprint of the public key to update. Public keys are identified by
   * their SHA-256 fingerprint. The fingerprint of the public key is in format
   * `users/{user}/sshPublicKeys/{fingerprint}`.
   */
  name: string;
  /** The SSH public key and expiration time. */
  sshPublicKey:
    | SshPublicKey
    | undefined;
  /** Mask to control which fields get updated. Updates all if not present. */
  updateMask: string[] | undefined;
}

function createBaseLoginProfile(): LoginProfile {
  return { name: "", posixAccounts: [], sshPublicKeys: {}, suspended: false };
}

export const LoginProfile: MessageFns<LoginProfile> = {
  encode(message: LoginProfile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.posixAccounts) {
      PosixAccount.encode(v!, writer.uint32(18).fork()).join();
    }
    Object.entries(message.sshPublicKeys).forEach(([key, value]) => {
      LoginProfile_SshPublicKeysEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    if (message.suspended !== false) {
      writer.uint32(32).bool(message.suspended);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginProfile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginProfile();
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

          message.posixAccounts.push(PosixAccount.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = LoginProfile_SshPublicKeysEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.sshPublicKeys[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.suspended = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginProfile {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      posixAccounts: globalThis.Array.isArray(object?.posixAccounts)
        ? object.posixAccounts.map((e: any) => PosixAccount.fromJSON(e))
        : [],
      sshPublicKeys: isObject(object.sshPublicKeys)
        ? Object.entries(object.sshPublicKeys).reduce<{ [key: string]: SshPublicKey }>((acc, [key, value]) => {
          acc[key] = SshPublicKey.fromJSON(value);
          return acc;
        }, {})
        : {},
      suspended: isSet(object.suspended) ? globalThis.Boolean(object.suspended) : false,
    };
  },

  toJSON(message: LoginProfile): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.posixAccounts?.length) {
      obj.posixAccounts = message.posixAccounts.map((e) => PosixAccount.toJSON(e));
    }
    if (message.sshPublicKeys) {
      const entries = Object.entries(message.sshPublicKeys);
      if (entries.length > 0) {
        obj.sshPublicKeys = {};
        entries.forEach(([k, v]) => {
          obj.sshPublicKeys[k] = SshPublicKey.toJSON(v);
        });
      }
    }
    if (message.suspended !== false) {
      obj.suspended = message.suspended;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginProfile>): LoginProfile {
    return LoginProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginProfile>): LoginProfile {
    const message = createBaseLoginProfile();
    message.name = object.name ?? "";
    message.posixAccounts = object.posixAccounts?.map((e) => PosixAccount.fromPartial(e)) || [];
    message.sshPublicKeys = Object.entries(object.sshPublicKeys ?? {}).reduce<{ [key: string]: SshPublicKey }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = SshPublicKey.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.suspended = object.suspended ?? false;
    return message;
  },
};

function createBaseLoginProfile_SshPublicKeysEntry(): LoginProfile_SshPublicKeysEntry {
  return { key: "", value: undefined };
}

export const LoginProfile_SshPublicKeysEntry: MessageFns<LoginProfile_SshPublicKeysEntry> = {
  encode(message: LoginProfile_SshPublicKeysEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SshPublicKey.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginProfile_SshPublicKeysEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginProfile_SshPublicKeysEntry();
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

          message.value = SshPublicKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginProfile_SshPublicKeysEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? SshPublicKey.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LoginProfile_SshPublicKeysEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = SshPublicKey.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<LoginProfile_SshPublicKeysEntry>): LoginProfile_SshPublicKeysEntry {
    return LoginProfile_SshPublicKeysEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginProfile_SshPublicKeysEntry>): LoginProfile_SshPublicKeysEntry {
    const message = createBaseLoginProfile_SshPublicKeysEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? SshPublicKey.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseDeletePosixAccountRequest(): DeletePosixAccountRequest {
  return { name: "" };
}

export const DeletePosixAccountRequest: MessageFns<DeletePosixAccountRequest> = {
  encode(message: DeletePosixAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeletePosixAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePosixAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): DeletePosixAccountRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeletePosixAccountRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeletePosixAccountRequest>): DeletePosixAccountRequest {
    return DeletePosixAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeletePosixAccountRequest>): DeletePosixAccountRequest {
    const message = createBaseDeletePosixAccountRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDeleteSshPublicKeyRequest(): DeleteSshPublicKeyRequest {
  return { name: "" };
}

export const DeleteSshPublicKeyRequest: MessageFns<DeleteSshPublicKeyRequest> = {
  encode(message: DeleteSshPublicKeyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteSshPublicKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSshPublicKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): DeleteSshPublicKeyRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteSshPublicKeyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteSshPublicKeyRequest>): DeleteSshPublicKeyRequest {
    return DeleteSshPublicKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteSshPublicKeyRequest>): DeleteSshPublicKeyRequest {
    const message = createBaseDeleteSshPublicKeyRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetLoginProfileRequest(): GetLoginProfileRequest {
  return { name: "" };
}

export const GetLoginProfileRequest: MessageFns<GetLoginProfileRequest> = {
  encode(message: GetLoginProfileRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetLoginProfileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLoginProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): GetLoginProfileRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetLoginProfileRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetLoginProfileRequest>): GetLoginProfileRequest {
    return GetLoginProfileRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetLoginProfileRequest>): GetLoginProfileRequest {
    const message = createBaseGetLoginProfileRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetSshPublicKeyRequest(): GetSshPublicKeyRequest {
  return { name: "" };
}

export const GetSshPublicKeyRequest: MessageFns<GetSshPublicKeyRequest> = {
  encode(message: GetSshPublicKeyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetSshPublicKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSshPublicKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): GetSshPublicKeyRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetSshPublicKeyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetSshPublicKeyRequest>): GetSshPublicKeyRequest {
    return GetSshPublicKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSshPublicKeyRequest>): GetSshPublicKeyRequest {
    const message = createBaseGetSshPublicKeyRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseImportSshPublicKeyRequest(): ImportSshPublicKeyRequest {
  return { parent: "", sshPublicKey: undefined, projectId: "" };
}

export const ImportSshPublicKeyRequest: MessageFns<ImportSshPublicKeyRequest> = {
  encode(message: ImportSshPublicKeyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.sshPublicKey !== undefined) {
      SshPublicKey.encode(message.sshPublicKey, writer.uint32(18).fork()).join();
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportSshPublicKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportSshPublicKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sshPublicKey = SshPublicKey.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportSshPublicKeyRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      sshPublicKey: isSet(object.sshPublicKey) ? SshPublicKey.fromJSON(object.sshPublicKey) : undefined,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: ImportSshPublicKeyRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.sshPublicKey !== undefined) {
      obj.sshPublicKey = SshPublicKey.toJSON(message.sshPublicKey);
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create(base?: DeepPartial<ImportSshPublicKeyRequest>): ImportSshPublicKeyRequest {
    return ImportSshPublicKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportSshPublicKeyRequest>): ImportSshPublicKeyRequest {
    const message = createBaseImportSshPublicKeyRequest();
    message.parent = object.parent ?? "";
    message.sshPublicKey = (object.sshPublicKey !== undefined && object.sshPublicKey !== null)
      ? SshPublicKey.fromPartial(object.sshPublicKey)
      : undefined;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseImportSshPublicKeyResponse(): ImportSshPublicKeyResponse {
  return { loginProfile: undefined };
}

export const ImportSshPublicKeyResponse: MessageFns<ImportSshPublicKeyResponse> = {
  encode(message: ImportSshPublicKeyResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.loginProfile !== undefined) {
      LoginProfile.encode(message.loginProfile, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportSshPublicKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportSshPublicKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loginProfile = LoginProfile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportSshPublicKeyResponse {
    return { loginProfile: isSet(object.loginProfile) ? LoginProfile.fromJSON(object.loginProfile) : undefined };
  },

  toJSON(message: ImportSshPublicKeyResponse): unknown {
    const obj: any = {};
    if (message.loginProfile !== undefined) {
      obj.loginProfile = LoginProfile.toJSON(message.loginProfile);
    }
    return obj;
  },

  create(base?: DeepPartial<ImportSshPublicKeyResponse>): ImportSshPublicKeyResponse {
    return ImportSshPublicKeyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportSshPublicKeyResponse>): ImportSshPublicKeyResponse {
    const message = createBaseImportSshPublicKeyResponse();
    message.loginProfile = (object.loginProfile !== undefined && object.loginProfile !== null)
      ? LoginProfile.fromPartial(object.loginProfile)
      : undefined;
    return message;
  },
};

function createBaseUpdateSshPublicKeyRequest(): UpdateSshPublicKeyRequest {
  return { name: "", sshPublicKey: undefined, updateMask: undefined };
}

export const UpdateSshPublicKeyRequest: MessageFns<UpdateSshPublicKeyRequest> = {
  encode(message: UpdateSshPublicKeyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sshPublicKey !== undefined) {
      SshPublicKey.encode(message.sshPublicKey, writer.uint32(18).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateSshPublicKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSshPublicKeyRequest();
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

          message.sshPublicKey = SshPublicKey.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSshPublicKeyRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      sshPublicKey: isSet(object.sshPublicKey) ? SshPublicKey.fromJSON(object.sshPublicKey) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateSshPublicKeyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.sshPublicKey !== undefined) {
      obj.sshPublicKey = SshPublicKey.toJSON(message.sshPublicKey);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateSshPublicKeyRequest>): UpdateSshPublicKeyRequest {
    return UpdateSshPublicKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateSshPublicKeyRequest>): UpdateSshPublicKeyRequest {
    const message = createBaseUpdateSshPublicKeyRequest();
    message.name = object.name ?? "";
    message.sshPublicKey = (object.sshPublicKey !== undefined && object.sshPublicKey !== null)
      ? SshPublicKey.fromPartial(object.sshPublicKey)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

/**
 * Cloud OS Login API
 *
 * The Cloud OS Login API allows you to manage users and their associated SSH
 * public keys for logging into virtual machines on Google Cloud Platform.
 */
export type OsLoginServiceDefinition = typeof OsLoginServiceDefinition;
export const OsLoginServiceDefinition = {
  name: "OsLoginService",
  fullName: "google.cloud.oslogin.v1alpha.OsLoginService",
  methods: {
    /** Deletes a POSIX account. */
    deletePosixAccount: {
      name: "DeletePosixAccount",
      requestType: DeletePosixAccountRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              36,
              42,
              34,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              47,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Deletes an SSH public key. */
    deleteSshPublicKey: {
      name: "DeleteSshPublicKey",
      requestType: DeleteSshPublicKeyRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              41,
              42,
              39,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              47,
              115,
              115,
              104,
              80,
              117,
              98,
              108,
              105,
              99,
              75,
              101,
              121,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Retrieves the profile information used for logging in to a virtual machine
     * on Google Compute Engine.
     */
    getLoginProfile: {
      name: "GetLoginProfile",
      requestType: GetLoginProfileRequest,
      requestStream: false,
      responseType: LoginProfile,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              38,
              18,
              36,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              125,
              47,
              108,
              111,
              103,
              105,
              110,
              80,
              114,
              111,
              102,
              105,
              108,
              101,
            ]),
          ],
        },
      },
    },
    /** Retrieves an SSH public key. */
    getSshPublicKey: {
      name: "GetSshPublicKey",
      requestType: GetSshPublicKeyRequest,
      requestStream: false,
      responseType: SshPublicKey,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              41,
              18,
              39,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              47,
              115,
              115,
              104,
              80,
              117,
              98,
              108,
              105,
              99,
              75,
              101,
              121,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Adds an SSH public key and returns the profile information. Default POSIX
     * account information is set when no username and UID exist as part of the
     * login profile.
     */
    importSshPublicKey: {
      name: "ImportSshPublicKey",
      requestType: ImportSshPublicKeyRequest,
      requestStream: false,
      responseType: ImportSshPublicKeyResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              62,
              58,
              14,
              115,
              115,
              104,
              95,
              112,
              117,
              98,
              108,
              105,
              99,
              95,
              107,
              101,
              121,
              34,
              44,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              125,
              58,
              105,
              109,
              112,
              111,
              114,
              116,
              83,
              115,
              104,
              80,
              117,
              98,
              108,
              105,
              99,
              75,
              101,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * Updates an SSH public key and returns the profile information. This method
     * supports patch semantics.
     */
    updateSshPublicKey: {
      name: "UpdateSshPublicKey",
      requestType: UpdateSshPublicKeyRequest,
      requestStream: false,
      responseType: SshPublicKey,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              57,
              58,
              14,
              115,
              115,
              104,
              95,
              112,
              117,
              98,
              108,
              105,
              99,
              95,
              107,
              101,
              121,
              50,
              39,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              47,
              115,
              115,
              104,
              80,
              117,
              98,
              108,
              105,
              99,
              75,
              101,
              121,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface OsLoginServiceImplementation<CallContextExt = {}> {
  /** Deletes a POSIX account. */
  deletePosixAccount(
    request: DeletePosixAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  /** Deletes an SSH public key. */
  deleteSshPublicKey(
    request: DeleteSshPublicKeyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  /**
   * Retrieves the profile information used for logging in to a virtual machine
   * on Google Compute Engine.
   */
  getLoginProfile(
    request: GetLoginProfileRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LoginProfile>>;
  /** Retrieves an SSH public key. */
  getSshPublicKey(
    request: GetSshPublicKeyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SshPublicKey>>;
  /**
   * Adds an SSH public key and returns the profile information. Default POSIX
   * account information is set when no username and UID exist as part of the
   * login profile.
   */
  importSshPublicKey(
    request: ImportSshPublicKeyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ImportSshPublicKeyResponse>>;
  /**
   * Updates an SSH public key and returns the profile information. This method
   * supports patch semantics.
   */
  updateSshPublicKey(
    request: UpdateSshPublicKeyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SshPublicKey>>;
}

export interface OsLoginServiceClient<CallOptionsExt = {}> {
  /** Deletes a POSIX account. */
  deletePosixAccount(
    request: DeepPartial<DeletePosixAccountRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  /** Deletes an SSH public key. */
  deleteSshPublicKey(
    request: DeepPartial<DeleteSshPublicKeyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  /**
   * Retrieves the profile information used for logging in to a virtual machine
   * on Google Compute Engine.
   */
  getLoginProfile(
    request: DeepPartial<GetLoginProfileRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LoginProfile>;
  /** Retrieves an SSH public key. */
  getSshPublicKey(
    request: DeepPartial<GetSshPublicKeyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SshPublicKey>;
  /**
   * Adds an SSH public key and returns the profile information. Default POSIX
   * account information is set when no username and UID exist as part of the
   * login profile.
   */
  importSshPublicKey(
    request: DeepPartial<ImportSshPublicKeyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ImportSshPublicKeyResponse>;
  /**
   * Updates an SSH public key and returns the profile information. This method
   * supports patch semantics.
   */
  updateSshPublicKey(
    request: DeepPartial<UpdateSshPublicKeyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SshPublicKey>;
}

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
