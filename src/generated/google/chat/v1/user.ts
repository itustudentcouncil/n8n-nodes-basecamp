// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/chat/v1/user.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.chat.v1";

/**
 * A user in Google Chat.
 * When returned as an output from a request, if your Chat app [authenticates as
 * a
 * user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user),
 * the output for a `User` resource only populates the user's `name` and `type`.
 */
export interface User {
  /**
   * Resource name for a Google Chat [user][google.chat.v1.User].
   *
   * Format: `users/{user}`. `users/app` can be used as an alias for the calling
   * app [bot][google.chat.v1.User.Type.BOT] user.
   *
   * For [human users][google.chat.v1.User.Type.HUMAN], `{user}` is the same
   * user identifier as:
   *
   * - the `id` for the
   * [Person](https://developers.google.com/people/api/rest/v1/people) in the
   * People API. For example, `users/123456789` in Chat API represents the same
   * person as the `123456789` Person profile ID in People API.
   *
   * - the `id` for a
   * [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users)
   * in the Admin SDK Directory API.
   *
   * - the user's email address can be used as an alias for `{user}` in API
   * requests. For example, if the People API Person profile ID for
   * `user@example.com` is `123456789`, you can use `users/user@example.com` as
   * an alias to reference `users/123456789`. Only the canonical resource name
   * (for example `users/123456789`) will be returned from the API.
   */
  name: string;
  /** Output only. The user's display name. */
  displayName: string;
  /** Unique identifier of the user's Google Workspace domain. */
  domainId: string;
  /** User type. */
  type: User_Type;
  /**
   * Output only. When `true`, the user is deleted or their profile is not
   * visible.
   */
  isAnonymous: boolean;
}

export enum User_Type {
  /** TYPE_UNSPECIFIED - Default value for the enum. DO NOT USE. */
  TYPE_UNSPECIFIED = 0,
  /** HUMAN - Human user. */
  HUMAN = 1,
  /** BOT - Chat app user. */
  BOT = 2,
  UNRECOGNIZED = -1,
}

export function user_TypeFromJSON(object: any): User_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return User_Type.TYPE_UNSPECIFIED;
    case 1:
    case "HUMAN":
      return User_Type.HUMAN;
    case 2:
    case "BOT":
      return User_Type.BOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return User_Type.UNRECOGNIZED;
  }
}

export function user_TypeToJSON(object: User_Type): string {
  switch (object) {
    case User_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case User_Type.HUMAN:
      return "HUMAN";
    case User_Type.BOT:
      return "BOT";
    case User_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUser(): User {
  return { name: "", displayName: "", domainId: "", type: 0, isAnonymous: false };
}

export const User: MessageFns<User> = {
  encode(message: User, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.domainId !== "") {
      writer.uint32(50).string(message.domainId);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.isAnonymous !== false) {
      writer.uint32(56).bool(message.isAnonymous);
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

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.domainId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isAnonymous = reader.bool();
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      domainId: isSet(object.domainId) ? globalThis.String(object.domainId) : "",
      type: isSet(object.type) ? user_TypeFromJSON(object.type) : 0,
      isAnonymous: isSet(object.isAnonymous) ? globalThis.Boolean(object.isAnonymous) : false,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.domainId !== "") {
      obj.domainId = message.domainId;
    }
    if (message.type !== 0) {
      obj.type = user_TypeToJSON(message.type);
    }
    if (message.isAnonymous !== false) {
      obj.isAnonymous = message.isAnonymous;
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.domainId = object.domainId ?? "";
    message.type = object.type ?? 0;
    message.isAnonymous = object.isAnonymous ?? false;
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