// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: zitadel/user/v2beta/user.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { Details } from "../../object/v2beta/object.js";
import { HumanEmail } from "./email.js";
import { HumanPhone } from "./phone.js";

export const protobufPackage = "zitadel.user.v2beta";

export enum Gender {
  GENDER_UNSPECIFIED = 0,
  GENDER_FEMALE = 1,
  GENDER_MALE = 2,
  GENDER_DIVERSE = 3,
  UNRECOGNIZED = -1,
}

export function genderFromJSON(object: any): Gender {
  switch (object) {
    case 0:
    case "GENDER_UNSPECIFIED":
      return Gender.GENDER_UNSPECIFIED;
    case 1:
    case "GENDER_FEMALE":
      return Gender.GENDER_FEMALE;
    case 2:
    case "GENDER_MALE":
      return Gender.GENDER_MALE;
    case 3:
    case "GENDER_DIVERSE":
      return Gender.GENDER_DIVERSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Gender.UNRECOGNIZED;
  }
}

export function genderToJSON(object: Gender): string {
  switch (object) {
    case Gender.GENDER_UNSPECIFIED:
      return "GENDER_UNSPECIFIED";
    case Gender.GENDER_FEMALE:
      return "GENDER_FEMALE";
    case Gender.GENDER_MALE:
      return "GENDER_MALE";
    case Gender.GENDER_DIVERSE:
      return "GENDER_DIVERSE";
    case Gender.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AccessTokenType {
  ACCESS_TOKEN_TYPE_BEARER = 0,
  ACCESS_TOKEN_TYPE_JWT = 1,
  UNRECOGNIZED = -1,
}

export function accessTokenTypeFromJSON(object: any): AccessTokenType {
  switch (object) {
    case 0:
    case "ACCESS_TOKEN_TYPE_BEARER":
      return AccessTokenType.ACCESS_TOKEN_TYPE_BEARER;
    case 1:
    case "ACCESS_TOKEN_TYPE_JWT":
      return AccessTokenType.ACCESS_TOKEN_TYPE_JWT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessTokenType.UNRECOGNIZED;
  }
}

export function accessTokenTypeToJSON(object: AccessTokenType): string {
  switch (object) {
    case AccessTokenType.ACCESS_TOKEN_TYPE_BEARER:
      return "ACCESS_TOKEN_TYPE_BEARER";
    case AccessTokenType.ACCESS_TOKEN_TYPE_JWT:
      return "ACCESS_TOKEN_TYPE_JWT";
    case AccessTokenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UserState {
  USER_STATE_UNSPECIFIED = 0,
  USER_STATE_ACTIVE = 1,
  USER_STATE_INACTIVE = 2,
  USER_STATE_DELETED = 3,
  USER_STATE_LOCKED = 4,
  USER_STATE_INITIAL = 5,
  UNRECOGNIZED = -1,
}

export function userStateFromJSON(object: any): UserState {
  switch (object) {
    case 0:
    case "USER_STATE_UNSPECIFIED":
      return UserState.USER_STATE_UNSPECIFIED;
    case 1:
    case "USER_STATE_ACTIVE":
      return UserState.USER_STATE_ACTIVE;
    case 2:
    case "USER_STATE_INACTIVE":
      return UserState.USER_STATE_INACTIVE;
    case 3:
    case "USER_STATE_DELETED":
      return UserState.USER_STATE_DELETED;
    case 4:
    case "USER_STATE_LOCKED":
      return UserState.USER_STATE_LOCKED;
    case 5:
    case "USER_STATE_INITIAL":
      return UserState.USER_STATE_INITIAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserState.UNRECOGNIZED;
  }
}

export function userStateToJSON(object: UserState): string {
  switch (object) {
    case UserState.USER_STATE_UNSPECIFIED:
      return "USER_STATE_UNSPECIFIED";
    case UserState.USER_STATE_ACTIVE:
      return "USER_STATE_ACTIVE";
    case UserState.USER_STATE_INACTIVE:
      return "USER_STATE_INACTIVE";
    case UserState.USER_STATE_DELETED:
      return "USER_STATE_DELETED";
    case UserState.USER_STATE_LOCKED:
      return "USER_STATE_LOCKED";
    case UserState.USER_STATE_INITIAL:
      return "USER_STATE_INITIAL";
    case UserState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SetHumanProfile {
  givenName: string;
  familyName: string;
  nickName?: string | undefined;
  displayName?: string | undefined;
  preferredLanguage?: string | undefined;
  gender?: Gender | undefined;
}

export interface HumanProfile {
  givenName: string;
  familyName: string;
  nickName?: string | undefined;
  displayName?: string | undefined;
  preferredLanguage?: string | undefined;
  gender?: Gender | undefined;
  avatarUrl: string;
}

export interface SetMetadataEntry {
  key: string;
  value: Buffer;
}

export interface HumanUser {
  /** Unique identifier of the user. */
  userId: string;
  /** State of the user, for example active, inactive, locked, deleted, initial. */
  state: UserState;
  /** Username of the user, which can be globally unique or unique on organization level. */
  username: string;
  /** Possible usable login names for the user. */
  loginNames: string[];
  /** Preferred login name of the user. */
  preferredLoginName: string;
  /** Profile information of the user. */
  profile:
    | HumanProfile
    | undefined;
  /** Email of the user, if defined. */
  email:
    | HumanEmail
    | undefined;
  /** Phone of the user, if defined. */
  phone:
    | HumanPhone
    | undefined;
  /** User is required to change the used password on the next login. */
  passwordChangeRequired: boolean;
  /** The time the user last changed their password. */
  passwordChanged: Date | undefined;
}

export interface User {
  userId: string;
  details: Details | undefined;
  state: UserState;
  username: string;
  loginNames: string[];
  preferredLoginName: string;
  human?: HumanUser | undefined;
  machine?: MachineUser | undefined;
}

export interface MachineUser {
  name: string;
  description: string;
  hasSecret: boolean;
  accessTokenType: AccessTokenType;
}

function createBaseSetHumanProfile(): SetHumanProfile {
  return {
    givenName: "",
    familyName: "",
    nickName: undefined,
    displayName: undefined,
    preferredLanguage: undefined,
    gender: undefined,
  };
}

export const SetHumanProfile: MessageFns<SetHumanProfile> = {
  encode(message: SetHumanProfile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.givenName !== "") {
      writer.uint32(10).string(message.givenName);
    }
    if (message.familyName !== "") {
      writer.uint32(18).string(message.familyName);
    }
    if (message.nickName !== undefined) {
      writer.uint32(26).string(message.nickName);
    }
    if (message.displayName !== undefined) {
      writer.uint32(34).string(message.displayName);
    }
    if (message.preferredLanguage !== undefined) {
      writer.uint32(42).string(message.preferredLanguage);
    }
    if (message.gender !== undefined) {
      writer.uint32(48).int32(message.gender);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SetHumanProfile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetHumanProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.familyName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLanguage = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetHumanProfile {
    return {
      givenName: isSet(object.givenName) ? globalThis.String(object.givenName) : "",
      familyName: isSet(object.familyName) ? globalThis.String(object.familyName) : "",
      nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : undefined,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : undefined,
      preferredLanguage: isSet(object.preferredLanguage) ? globalThis.String(object.preferredLanguage) : undefined,
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : undefined,
    };
  },

  toJSON(message: SetHumanProfile): unknown {
    const obj: any = {};
    if (message.givenName !== "") {
      obj.givenName = message.givenName;
    }
    if (message.familyName !== "") {
      obj.familyName = message.familyName;
    }
    if (message.nickName !== undefined) {
      obj.nickName = message.nickName;
    }
    if (message.displayName !== undefined) {
      obj.displayName = message.displayName;
    }
    if (message.preferredLanguage !== undefined) {
      obj.preferredLanguage = message.preferredLanguage;
    }
    if (message.gender !== undefined) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create(base?: DeepPartial<SetHumanProfile>): SetHumanProfile {
    return SetHumanProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetHumanProfile>): SetHumanProfile {
    const message = createBaseSetHumanProfile();
    message.givenName = object.givenName ?? "";
    message.familyName = object.familyName ?? "";
    message.nickName = object.nickName ?? undefined;
    message.displayName = object.displayName ?? undefined;
    message.preferredLanguage = object.preferredLanguage ?? undefined;
    message.gender = object.gender ?? undefined;
    return message;
  },
};

function createBaseHumanProfile(): HumanProfile {
  return {
    givenName: "",
    familyName: "",
    nickName: undefined,
    displayName: undefined,
    preferredLanguage: undefined,
    gender: undefined,
    avatarUrl: "",
  };
}

export const HumanProfile: MessageFns<HumanProfile> = {
  encode(message: HumanProfile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.givenName !== "") {
      writer.uint32(10).string(message.givenName);
    }
    if (message.familyName !== "") {
      writer.uint32(18).string(message.familyName);
    }
    if (message.nickName !== undefined) {
      writer.uint32(26).string(message.nickName);
    }
    if (message.displayName !== undefined) {
      writer.uint32(34).string(message.displayName);
    }
    if (message.preferredLanguage !== undefined) {
      writer.uint32(42).string(message.preferredLanguage);
    }
    if (message.gender !== undefined) {
      writer.uint32(48).int32(message.gender);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(58).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HumanProfile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHumanProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.familyName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLanguage = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HumanProfile {
    return {
      givenName: isSet(object.givenName) ? globalThis.String(object.givenName) : "",
      familyName: isSet(object.familyName) ? globalThis.String(object.familyName) : "",
      nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : undefined,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : undefined,
      preferredLanguage: isSet(object.preferredLanguage) ? globalThis.String(object.preferredLanguage) : undefined,
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : undefined,
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
    };
  },

  toJSON(message: HumanProfile): unknown {
    const obj: any = {};
    if (message.givenName !== "") {
      obj.givenName = message.givenName;
    }
    if (message.familyName !== "") {
      obj.familyName = message.familyName;
    }
    if (message.nickName !== undefined) {
      obj.nickName = message.nickName;
    }
    if (message.displayName !== undefined) {
      obj.displayName = message.displayName;
    }
    if (message.preferredLanguage !== undefined) {
      obj.preferredLanguage = message.preferredLanguage;
    }
    if (message.gender !== undefined) {
      obj.gender = genderToJSON(message.gender);
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<HumanProfile>): HumanProfile {
    return HumanProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HumanProfile>): HumanProfile {
    const message = createBaseHumanProfile();
    message.givenName = object.givenName ?? "";
    message.familyName = object.familyName ?? "";
    message.nickName = object.nickName ?? undefined;
    message.displayName = object.displayName ?? undefined;
    message.preferredLanguage = object.preferredLanguage ?? undefined;
    message.gender = object.gender ?? undefined;
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseSetMetadataEntry(): SetMetadataEntry {
  return { key: "", value: Buffer.alloc(0) };
}

export const SetMetadataEntry: MessageFns<SetMetadataEntry> = {
  encode(message: SetMetadataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SetMetadataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMetadataEntry();
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

          message.value = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetMetadataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
    };
  },

  toJSON(message: SetMetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<SetMetadataEntry>): SetMetadataEntry {
    return SetMetadataEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetMetadataEntry>): SetMetadataEntry {
    const message = createBaseSetMetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseHumanUser(): HumanUser {
  return {
    userId: "",
    state: 0,
    username: "",
    loginNames: [],
    preferredLoginName: "",
    profile: undefined,
    email: undefined,
    phone: undefined,
    passwordChangeRequired: false,
    passwordChanged: undefined,
  };
}

export const HumanUser: MessageFns<HumanUser> = {
  encode(message: HumanUser, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    for (const v of message.loginNames) {
      writer.uint32(34).string(v!);
    }
    if (message.preferredLoginName !== "") {
      writer.uint32(42).string(message.preferredLoginName);
    }
    if (message.profile !== undefined) {
      HumanProfile.encode(message.profile, writer.uint32(50).fork()).join();
    }
    if (message.email !== undefined) {
      HumanEmail.encode(message.email, writer.uint32(58).fork()).join();
    }
    if (message.phone !== undefined) {
      HumanPhone.encode(message.phone, writer.uint32(66).fork()).join();
    }
    if (message.passwordChangeRequired !== false) {
      writer.uint32(72).bool(message.passwordChangeRequired);
    }
    if (message.passwordChanged !== undefined) {
      Timestamp.encode(toTimestamp(message.passwordChanged), writer.uint32(82).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HumanUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHumanUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loginNames.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLoginName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.profile = HumanProfile.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.email = HumanEmail.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.phone = HumanPhone.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.passwordChangeRequired = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.passwordChanged = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HumanUser {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      state: isSet(object.state) ? userStateFromJSON(object.state) : 0,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      loginNames: globalThis.Array.isArray(object?.loginNames)
        ? object.loginNames.map((e: any) => globalThis.String(e))
        : [],
      preferredLoginName: isSet(object.preferredLoginName) ? globalThis.String(object.preferredLoginName) : "",
      profile: isSet(object.profile) ? HumanProfile.fromJSON(object.profile) : undefined,
      email: isSet(object.email) ? HumanEmail.fromJSON(object.email) : undefined,
      phone: isSet(object.phone) ? HumanPhone.fromJSON(object.phone) : undefined,
      passwordChangeRequired: isSet(object.passwordChangeRequired)
        ? globalThis.Boolean(object.passwordChangeRequired)
        : false,
      passwordChanged: isSet(object.passwordChanged) ? fromJsonTimestamp(object.passwordChanged) : undefined,
    };
  },

  toJSON(message: HumanUser): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.state !== 0) {
      obj.state = userStateToJSON(message.state);
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.loginNames?.length) {
      obj.loginNames = message.loginNames;
    }
    if (message.preferredLoginName !== "") {
      obj.preferredLoginName = message.preferredLoginName;
    }
    if (message.profile !== undefined) {
      obj.profile = HumanProfile.toJSON(message.profile);
    }
    if (message.email !== undefined) {
      obj.email = HumanEmail.toJSON(message.email);
    }
    if (message.phone !== undefined) {
      obj.phone = HumanPhone.toJSON(message.phone);
    }
    if (message.passwordChangeRequired !== false) {
      obj.passwordChangeRequired = message.passwordChangeRequired;
    }
    if (message.passwordChanged !== undefined) {
      obj.passwordChanged = message.passwordChanged.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<HumanUser>): HumanUser {
    return HumanUser.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HumanUser>): HumanUser {
    const message = createBaseHumanUser();
    message.userId = object.userId ?? "";
    message.state = object.state ?? 0;
    message.username = object.username ?? "";
    message.loginNames = object.loginNames?.map((e) => e) || [];
    message.preferredLoginName = object.preferredLoginName ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? HumanProfile.fromPartial(object.profile)
      : undefined;
    message.email = (object.email !== undefined && object.email !== null)
      ? HumanEmail.fromPartial(object.email)
      : undefined;
    message.phone = (object.phone !== undefined && object.phone !== null)
      ? HumanPhone.fromPartial(object.phone)
      : undefined;
    message.passwordChangeRequired = object.passwordChangeRequired ?? false;
    message.passwordChanged = object.passwordChanged ?? undefined;
    return message;
  },
};

function createBaseUser(): User {
  return {
    userId: "",
    details: undefined,
    state: 0,
    username: "",
    loginNames: [],
    preferredLoginName: "",
    human: undefined,
    machine: undefined,
  };
}

export const User: MessageFns<User> = {
  encode(message: User, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(66).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    for (const v of message.loginNames) {
      writer.uint32(34).string(v!);
    }
    if (message.preferredLoginName !== "") {
      writer.uint32(42).string(message.preferredLoginName);
    }
    if (message.human !== undefined) {
      HumanUser.encode(message.human, writer.uint32(50).fork()).join();
    }
    if (message.machine !== undefined) {
      MachineUser.encode(message.machine, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): User {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loginNames.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLoginName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.human = HumanUser.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.machine = MachineUser.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      state: isSet(object.state) ? userStateFromJSON(object.state) : 0,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      loginNames: globalThis.Array.isArray(object?.loginNames)
        ? object.loginNames.map((e: any) => globalThis.String(e))
        : [],
      preferredLoginName: isSet(object.preferredLoginName) ? globalThis.String(object.preferredLoginName) : "",
      human: isSet(object.human) ? HumanUser.fromJSON(object.human) : undefined,
      machine: isSet(object.machine) ? MachineUser.fromJSON(object.machine) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.state !== 0) {
      obj.state = userStateToJSON(message.state);
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.loginNames?.length) {
      obj.loginNames = message.loginNames;
    }
    if (message.preferredLoginName !== "") {
      obj.preferredLoginName = message.preferredLoginName;
    }
    if (message.human !== undefined) {
      obj.human = HumanUser.toJSON(message.human);
    }
    if (message.machine !== undefined) {
      obj.machine = MachineUser.toJSON(message.machine);
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.userId = object.userId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.username = object.username ?? "";
    message.loginNames = object.loginNames?.map((e) => e) || [];
    message.preferredLoginName = object.preferredLoginName ?? "";
    message.human = (object.human !== undefined && object.human !== null)
      ? HumanUser.fromPartial(object.human)
      : undefined;
    message.machine = (object.machine !== undefined && object.machine !== null)
      ? MachineUser.fromPartial(object.machine)
      : undefined;
    return message;
  },
};

function createBaseMachineUser(): MachineUser {
  return { name: "", description: "", hasSecret: false, accessTokenType: 0 };
}

export const MachineUser: MessageFns<MachineUser> = {
  encode(message: MachineUser, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hasSecret !== false) {
      writer.uint32(24).bool(message.hasSecret);
    }
    if (message.accessTokenType !== 0) {
      writer.uint32(32).int32(message.accessTokenType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MachineUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMachineUser();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasSecret = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.accessTokenType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MachineUser {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      hasSecret: isSet(object.hasSecret) ? globalThis.Boolean(object.hasSecret) : false,
      accessTokenType: isSet(object.accessTokenType) ? accessTokenTypeFromJSON(object.accessTokenType) : 0,
    };
  },

  toJSON(message: MachineUser): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.hasSecret !== false) {
      obj.hasSecret = message.hasSecret;
    }
    if (message.accessTokenType !== 0) {
      obj.accessTokenType = accessTokenTypeToJSON(message.accessTokenType);
    }
    return obj;
  },

  create(base?: DeepPartial<MachineUser>): MachineUser {
    return MachineUser.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MachineUser>): MachineUser {
    const message = createBaseMachineUser();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.hasSecret = object.hasSecret ?? false;
    message.accessTokenType = object.accessTokenType ?? 0;
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