// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/user_list_flexible_rule_operator.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Logical operator connecting two rules. */
export interface UserListFlexibleRuleOperatorEnum {
}

/** Enum describing possible user list combined rule operators. */
export enum UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** AND - A AND B. */
  AND = 2,
  /** OR - A OR B. */
  OR = 3,
  UNRECOGNIZED = -1,
}

export function userListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperatorFromJSON(
  object: any,
): UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.UNKNOWN;
    case 2:
    case "AND":
      return UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.AND;
    case 3:
    case "OR":
      return UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.OR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.UNRECOGNIZED;
  }
}

export function userListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperatorToJSON(
  object: UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator,
): string {
  switch (object) {
    case UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.UNSPECIFIED:
      return "UNSPECIFIED";
    case UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.UNKNOWN:
      return "UNKNOWN";
    case UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.AND:
      return "AND";
    case UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.OR:
      return "OR";
    case UserListFlexibleRuleOperatorEnum_UserListFlexibleRuleOperator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserListFlexibleRuleOperatorEnum(): UserListFlexibleRuleOperatorEnum {
  return {};
}

export const UserListFlexibleRuleOperatorEnum: MessageFns<UserListFlexibleRuleOperatorEnum> = {
  encode(_: UserListFlexibleRuleOperatorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserListFlexibleRuleOperatorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListFlexibleRuleOperatorEnum();
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

  fromJSON(_: any): UserListFlexibleRuleOperatorEnum {
    return {};
  },

  toJSON(_: UserListFlexibleRuleOperatorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UserListFlexibleRuleOperatorEnum>): UserListFlexibleRuleOperatorEnum {
    return UserListFlexibleRuleOperatorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UserListFlexibleRuleOperatorEnum>): UserListFlexibleRuleOperatorEnum {
    const message = createBaseUserListFlexibleRuleOperatorEnum();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}