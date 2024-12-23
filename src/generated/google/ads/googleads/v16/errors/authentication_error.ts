// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/authentication_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible authentication errors. */
export interface AuthenticationErrorEnum {
}

/** Enum describing possible authentication errors. */
export enum AuthenticationErrorEnum_AuthenticationError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** AUTHENTICATION_ERROR - Authentication of the request failed. */
  AUTHENTICATION_ERROR = 2,
  /** CLIENT_CUSTOMER_ID_INVALID - Client customer ID is not a number. */
  CLIENT_CUSTOMER_ID_INVALID = 5,
  /** CUSTOMER_NOT_FOUND - No customer found for the provided customer ID. */
  CUSTOMER_NOT_FOUND = 8,
  /** GOOGLE_ACCOUNT_DELETED - Client's Google account is deleted. */
  GOOGLE_ACCOUNT_DELETED = 9,
  /** GOOGLE_ACCOUNT_COOKIE_INVALID - Google account login token in the cookie is invalid. */
  GOOGLE_ACCOUNT_COOKIE_INVALID = 10,
  /** GOOGLE_ACCOUNT_AUTHENTICATION_FAILED - A problem occurred during Google account authentication. */
  GOOGLE_ACCOUNT_AUTHENTICATION_FAILED = 25,
  /**
   * GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH - The user in the Google account login token does not match the user ID in
   * the cookie.
   */
  GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH = 12,
  /** LOGIN_COOKIE_REQUIRED - Login cookie is required for authentication. */
  LOGIN_COOKIE_REQUIRED = 13,
  /**
   * NOT_ADS_USER - The Google account that generated the OAuth access
   * token is not associated with a Google Ads account. Create a new
   * account, or add the Google account to an existing Google Ads account.
   */
  NOT_ADS_USER = 14,
  /** OAUTH_TOKEN_INVALID - OAuth token in the header is not valid. */
  OAUTH_TOKEN_INVALID = 15,
  /** OAUTH_TOKEN_EXPIRED - OAuth token in the header has expired. */
  OAUTH_TOKEN_EXPIRED = 16,
  /** OAUTH_TOKEN_DISABLED - OAuth token in the header has been disabled. */
  OAUTH_TOKEN_DISABLED = 17,
  /** OAUTH_TOKEN_REVOKED - OAuth token in the header has been revoked. */
  OAUTH_TOKEN_REVOKED = 18,
  /** OAUTH_TOKEN_HEADER_INVALID - OAuth token HTTP header is malformed. */
  OAUTH_TOKEN_HEADER_INVALID = 19,
  /** LOGIN_COOKIE_INVALID - Login cookie is not valid. */
  LOGIN_COOKIE_INVALID = 20,
  /** USER_ID_INVALID - User ID in the header is not a valid ID. */
  USER_ID_INVALID = 22,
  /**
   * TWO_STEP_VERIFICATION_NOT_ENROLLED - An account administrator changed this account's authentication settings.
   * To access this Google Ads account, enable 2-Step Verification in your
   * Google account at https://www.google.com/landing/2step.
   */
  TWO_STEP_VERIFICATION_NOT_ENROLLED = 23,
  /**
   * ADVANCED_PROTECTION_NOT_ENROLLED - An account administrator changed this account's authentication settings.
   * To access this Google Ads account, enable Advanced Protection in your
   * Google account at https://landing.google.com/advancedprotection.
   */
  ADVANCED_PROTECTION_NOT_ENROLLED = 24,
  /** ORGANIZATION_NOT_RECOGNIZED - The Cloud organization associated with the project is not recognized. */
  ORGANIZATION_NOT_RECOGNIZED = 26,
  /**
   * ORGANIZATION_NOT_APPROVED - The Cloud organization associated with the project is not approved for
   * prod access.
   */
  ORGANIZATION_NOT_APPROVED = 27,
  /**
   * ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN - The Cloud organization associated with the project is not associated with
   * the developer token.
   */
  ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN = 28,
  UNRECOGNIZED = -1,
}

export function authenticationErrorEnum_AuthenticationErrorFromJSON(
  object: any,
): AuthenticationErrorEnum_AuthenticationError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AuthenticationErrorEnum_AuthenticationError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AuthenticationErrorEnum_AuthenticationError.UNKNOWN;
    case 2:
    case "AUTHENTICATION_ERROR":
      return AuthenticationErrorEnum_AuthenticationError.AUTHENTICATION_ERROR;
    case 5:
    case "CLIENT_CUSTOMER_ID_INVALID":
      return AuthenticationErrorEnum_AuthenticationError.CLIENT_CUSTOMER_ID_INVALID;
    case 8:
    case "CUSTOMER_NOT_FOUND":
      return AuthenticationErrorEnum_AuthenticationError.CUSTOMER_NOT_FOUND;
    case 9:
    case "GOOGLE_ACCOUNT_DELETED":
      return AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_DELETED;
    case 10:
    case "GOOGLE_ACCOUNT_COOKIE_INVALID":
      return AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_COOKIE_INVALID;
    case 25:
    case "GOOGLE_ACCOUNT_AUTHENTICATION_FAILED":
      return AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_AUTHENTICATION_FAILED;
    case 12:
    case "GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH":
      return AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH;
    case 13:
    case "LOGIN_COOKIE_REQUIRED":
      return AuthenticationErrorEnum_AuthenticationError.LOGIN_COOKIE_REQUIRED;
    case 14:
    case "NOT_ADS_USER":
      return AuthenticationErrorEnum_AuthenticationError.NOT_ADS_USER;
    case 15:
    case "OAUTH_TOKEN_INVALID":
      return AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_INVALID;
    case 16:
    case "OAUTH_TOKEN_EXPIRED":
      return AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_EXPIRED;
    case 17:
    case "OAUTH_TOKEN_DISABLED":
      return AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_DISABLED;
    case 18:
    case "OAUTH_TOKEN_REVOKED":
      return AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_REVOKED;
    case 19:
    case "OAUTH_TOKEN_HEADER_INVALID":
      return AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_HEADER_INVALID;
    case 20:
    case "LOGIN_COOKIE_INVALID":
      return AuthenticationErrorEnum_AuthenticationError.LOGIN_COOKIE_INVALID;
    case 22:
    case "USER_ID_INVALID":
      return AuthenticationErrorEnum_AuthenticationError.USER_ID_INVALID;
    case 23:
    case "TWO_STEP_VERIFICATION_NOT_ENROLLED":
      return AuthenticationErrorEnum_AuthenticationError.TWO_STEP_VERIFICATION_NOT_ENROLLED;
    case 24:
    case "ADVANCED_PROTECTION_NOT_ENROLLED":
      return AuthenticationErrorEnum_AuthenticationError.ADVANCED_PROTECTION_NOT_ENROLLED;
    case 26:
    case "ORGANIZATION_NOT_RECOGNIZED":
      return AuthenticationErrorEnum_AuthenticationError.ORGANIZATION_NOT_RECOGNIZED;
    case 27:
    case "ORGANIZATION_NOT_APPROVED":
      return AuthenticationErrorEnum_AuthenticationError.ORGANIZATION_NOT_APPROVED;
    case 28:
    case "ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN":
      return AuthenticationErrorEnum_AuthenticationError.ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthenticationErrorEnum_AuthenticationError.UNRECOGNIZED;
  }
}

export function authenticationErrorEnum_AuthenticationErrorToJSON(
  object: AuthenticationErrorEnum_AuthenticationError,
): string {
  switch (object) {
    case AuthenticationErrorEnum_AuthenticationError.UNSPECIFIED:
      return "UNSPECIFIED";
    case AuthenticationErrorEnum_AuthenticationError.UNKNOWN:
      return "UNKNOWN";
    case AuthenticationErrorEnum_AuthenticationError.AUTHENTICATION_ERROR:
      return "AUTHENTICATION_ERROR";
    case AuthenticationErrorEnum_AuthenticationError.CLIENT_CUSTOMER_ID_INVALID:
      return "CLIENT_CUSTOMER_ID_INVALID";
    case AuthenticationErrorEnum_AuthenticationError.CUSTOMER_NOT_FOUND:
      return "CUSTOMER_NOT_FOUND";
    case AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_DELETED:
      return "GOOGLE_ACCOUNT_DELETED";
    case AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_COOKIE_INVALID:
      return "GOOGLE_ACCOUNT_COOKIE_INVALID";
    case AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_AUTHENTICATION_FAILED:
      return "GOOGLE_ACCOUNT_AUTHENTICATION_FAILED";
    case AuthenticationErrorEnum_AuthenticationError.GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH:
      return "GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH";
    case AuthenticationErrorEnum_AuthenticationError.LOGIN_COOKIE_REQUIRED:
      return "LOGIN_COOKIE_REQUIRED";
    case AuthenticationErrorEnum_AuthenticationError.NOT_ADS_USER:
      return "NOT_ADS_USER";
    case AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_INVALID:
      return "OAUTH_TOKEN_INVALID";
    case AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_EXPIRED:
      return "OAUTH_TOKEN_EXPIRED";
    case AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_DISABLED:
      return "OAUTH_TOKEN_DISABLED";
    case AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_REVOKED:
      return "OAUTH_TOKEN_REVOKED";
    case AuthenticationErrorEnum_AuthenticationError.OAUTH_TOKEN_HEADER_INVALID:
      return "OAUTH_TOKEN_HEADER_INVALID";
    case AuthenticationErrorEnum_AuthenticationError.LOGIN_COOKIE_INVALID:
      return "LOGIN_COOKIE_INVALID";
    case AuthenticationErrorEnum_AuthenticationError.USER_ID_INVALID:
      return "USER_ID_INVALID";
    case AuthenticationErrorEnum_AuthenticationError.TWO_STEP_VERIFICATION_NOT_ENROLLED:
      return "TWO_STEP_VERIFICATION_NOT_ENROLLED";
    case AuthenticationErrorEnum_AuthenticationError.ADVANCED_PROTECTION_NOT_ENROLLED:
      return "ADVANCED_PROTECTION_NOT_ENROLLED";
    case AuthenticationErrorEnum_AuthenticationError.ORGANIZATION_NOT_RECOGNIZED:
      return "ORGANIZATION_NOT_RECOGNIZED";
    case AuthenticationErrorEnum_AuthenticationError.ORGANIZATION_NOT_APPROVED:
      return "ORGANIZATION_NOT_APPROVED";
    case AuthenticationErrorEnum_AuthenticationError.ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN:
      return "ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN";
    case AuthenticationErrorEnum_AuthenticationError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAuthenticationErrorEnum(): AuthenticationErrorEnum {
  return {};
}

export const AuthenticationErrorEnum: MessageFns<AuthenticationErrorEnum> = {
  encode(_: AuthenticationErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuthenticationErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationErrorEnum();
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

  fromJSON(_: any): AuthenticationErrorEnum {
    return {};
  },

  toJSON(_: AuthenticationErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AuthenticationErrorEnum>): AuthenticationErrorEnum {
    return AuthenticationErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AuthenticationErrorEnum>): AuthenticationErrorEnum {
    const message = createBaseAuthenticationErrorEnum();
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
