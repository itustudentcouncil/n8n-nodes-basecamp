// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/user_interest_taxonomy_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Message describing a UserInterestTaxonomyType. */
export interface UserInterestTaxonomyTypeEnum {
}

/** Enum containing the possible UserInterestTaxonomyTypes. */
export enum UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** AFFINITY - The affinity for this user interest. */
  AFFINITY = 2,
  /** IN_MARKET - The market for this user interest. */
  IN_MARKET = 3,
  /** MOBILE_APP_INSTALL_USER - Users known to have installed applications in the specified categories. */
  MOBILE_APP_INSTALL_USER = 4,
  /** VERTICAL_GEO - The geographical location of the interest-based vertical. */
  VERTICAL_GEO = 5,
  /** NEW_SMART_PHONE_USER - User interest criteria for new smart phone users. */
  NEW_SMART_PHONE_USER = 6,
  UNRECOGNIZED = -1,
}

export function userInterestTaxonomyTypeEnum_UserInterestTaxonomyTypeFromJSON(
  object: any,
): UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.UNKNOWN;
    case 2:
    case "AFFINITY":
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.AFFINITY;
    case 3:
    case "IN_MARKET":
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.IN_MARKET;
    case 4:
    case "MOBILE_APP_INSTALL_USER":
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.MOBILE_APP_INSTALL_USER;
    case 5:
    case "VERTICAL_GEO":
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.VERTICAL_GEO;
    case 6:
    case "NEW_SMART_PHONE_USER":
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.NEW_SMART_PHONE_USER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.UNRECOGNIZED;
  }
}

export function userInterestTaxonomyTypeEnum_UserInterestTaxonomyTypeToJSON(
  object: UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType,
): string {
  switch (object) {
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.UNSPECIFIED:
      return "UNSPECIFIED";
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.UNKNOWN:
      return "UNKNOWN";
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.AFFINITY:
      return "AFFINITY";
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.IN_MARKET:
      return "IN_MARKET";
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.MOBILE_APP_INSTALL_USER:
      return "MOBILE_APP_INSTALL_USER";
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.VERTICAL_GEO:
      return "VERTICAL_GEO";
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.NEW_SMART_PHONE_USER:
      return "NEW_SMART_PHONE_USER";
    case UserInterestTaxonomyTypeEnum_UserInterestTaxonomyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserInterestTaxonomyTypeEnum(): UserInterestTaxonomyTypeEnum {
  return {};
}

export const UserInterestTaxonomyTypeEnum: MessageFns<UserInterestTaxonomyTypeEnum> = {
  encode(_: UserInterestTaxonomyTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInterestTaxonomyTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInterestTaxonomyTypeEnum();
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

  fromJSON(_: any): UserInterestTaxonomyTypeEnum {
    return {};
  },

  toJSON(_: UserInterestTaxonomyTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UserInterestTaxonomyTypeEnum>): UserInterestTaxonomyTypeEnum {
    return UserInterestTaxonomyTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UserInterestTaxonomyTypeEnum>): UserInterestTaxonomyTypeEnum {
    const message = createBaseUserInterestTaxonomyTypeEnum();
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
