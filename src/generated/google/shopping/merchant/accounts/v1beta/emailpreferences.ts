// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/shopping/merchant/accounts/v1beta/emailpreferences.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";

export const protobufPackage = "google.shopping.merchant.accounts.v1beta";

/**
 * The categories of notifications the user opted into / opted out of. The email
 * preferences do not include mandatory announcements as users can't opt out of
 * them.
 */
export interface EmailPreferences {
  /**
   * Identifier. The name of the EmailPreferences. The endpoint is only
   * supported for the authenticated user.
   */
  name: string;
  /** Optional. Updates on new features, tips and best practices. */
  newsAndTips: EmailPreferences_OptInState;
}

/** Opt in state of the email preference. */
export enum EmailPreferences_OptInState {
  /** OPT_IN_STATE_UNSPECIFIED - Opt-in status is not specified. */
  OPT_IN_STATE_UNSPECIFIED = 0,
  /** OPTED_OUT - User has opted out of receiving this type of email. */
  OPTED_OUT = 1,
  /** OPTED_IN - User has opted in to receiving this type of email. */
  OPTED_IN = 2,
  /**
   * UNCONFIRMED - User has opted in to receiving this type of email and the confirmation
   * email has been sent, but user has not yet confirmed the opt in (applies
   * only to certain countries).
   */
  UNCONFIRMED = 3,
  UNRECOGNIZED = -1,
}

export function emailPreferences_OptInStateFromJSON(object: any): EmailPreferences_OptInState {
  switch (object) {
    case 0:
    case "OPT_IN_STATE_UNSPECIFIED":
      return EmailPreferences_OptInState.OPT_IN_STATE_UNSPECIFIED;
    case 1:
    case "OPTED_OUT":
      return EmailPreferences_OptInState.OPTED_OUT;
    case 2:
    case "OPTED_IN":
      return EmailPreferences_OptInState.OPTED_IN;
    case 3:
    case "UNCONFIRMED":
      return EmailPreferences_OptInState.UNCONFIRMED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EmailPreferences_OptInState.UNRECOGNIZED;
  }
}

export function emailPreferences_OptInStateToJSON(object: EmailPreferences_OptInState): string {
  switch (object) {
    case EmailPreferences_OptInState.OPT_IN_STATE_UNSPECIFIED:
      return "OPT_IN_STATE_UNSPECIFIED";
    case EmailPreferences_OptInState.OPTED_OUT:
      return "OPTED_OUT";
    case EmailPreferences_OptInState.OPTED_IN:
      return "OPTED_IN";
    case EmailPreferences_OptInState.UNCONFIRMED:
      return "UNCONFIRMED";
    case EmailPreferences_OptInState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Request message for GetEmailPreferences method. */
export interface GetEmailPreferencesRequest {
  /**
   * Required. The name of the `EmailPreferences` resource.
   * Format: `accounts/{account}/users/{email}/emailPreferences`
   */
  name: string;
}

/** Request message for UpdateEmailPreferences method. */
export interface UpdateEmailPreferencesRequest {
  /** Required. Email Preferences to be updated. */
  emailPreferences:
    | EmailPreferences
    | undefined;
  /** Required. List of fields being updated. */
  updateMask: string[] | undefined;
}

function createBaseEmailPreferences(): EmailPreferences {
  return { name: "", newsAndTips: 0 };
}

export const EmailPreferences: MessageFns<EmailPreferences> = {
  encode(message: EmailPreferences, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.newsAndTips !== 0) {
      writer.uint32(16).int32(message.newsAndTips);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EmailPreferences {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailPreferences();
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

          message.newsAndTips = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EmailPreferences {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      newsAndTips: isSet(object.newsAndTips) ? emailPreferences_OptInStateFromJSON(object.newsAndTips) : 0,
    };
  },

  toJSON(message: EmailPreferences): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.newsAndTips !== 0) {
      obj.newsAndTips = emailPreferences_OptInStateToJSON(message.newsAndTips);
    }
    return obj;
  },

  create(base?: DeepPartial<EmailPreferences>): EmailPreferences {
    return EmailPreferences.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EmailPreferences>): EmailPreferences {
    const message = createBaseEmailPreferences();
    message.name = object.name ?? "";
    message.newsAndTips = object.newsAndTips ?? 0;
    return message;
  },
};

function createBaseGetEmailPreferencesRequest(): GetEmailPreferencesRequest {
  return { name: "" };
}

export const GetEmailPreferencesRequest: MessageFns<GetEmailPreferencesRequest> = {
  encode(message: GetEmailPreferencesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetEmailPreferencesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEmailPreferencesRequest();
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

  fromJSON(object: any): GetEmailPreferencesRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetEmailPreferencesRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetEmailPreferencesRequest>): GetEmailPreferencesRequest {
    return GetEmailPreferencesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetEmailPreferencesRequest>): GetEmailPreferencesRequest {
    const message = createBaseGetEmailPreferencesRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUpdateEmailPreferencesRequest(): UpdateEmailPreferencesRequest {
  return { emailPreferences: undefined, updateMask: undefined };
}

export const UpdateEmailPreferencesRequest: MessageFns<UpdateEmailPreferencesRequest> = {
  encode(message: UpdateEmailPreferencesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.emailPreferences !== undefined) {
      EmailPreferences.encode(message.emailPreferences, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateEmailPreferencesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEmailPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.emailPreferences = EmailPreferences.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): UpdateEmailPreferencesRequest {
    return {
      emailPreferences: isSet(object.emailPreferences) ? EmailPreferences.fromJSON(object.emailPreferences) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateEmailPreferencesRequest): unknown {
    const obj: any = {};
    if (message.emailPreferences !== undefined) {
      obj.emailPreferences = EmailPreferences.toJSON(message.emailPreferences);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateEmailPreferencesRequest>): UpdateEmailPreferencesRequest {
    return UpdateEmailPreferencesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateEmailPreferencesRequest>): UpdateEmailPreferencesRequest {
    const message = createBaseUpdateEmailPreferencesRequest();
    message.emailPreferences = (object.emailPreferences !== undefined && object.emailPreferences !== null)
      ? EmailPreferences.fromPartial(object.emailPreferences)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

/**
 * Service to support the `EmailPreferences` API.
 *
 * This service only permits retrieving and updating email preferences for the
 * authenticated user.
 */
export type EmailPreferencesServiceDefinition = typeof EmailPreferencesServiceDefinition;
export const EmailPreferencesServiceDefinition = {
  name: "EmailPreferencesService",
  fullName: "google.shopping.merchant.accounts.v1beta.EmailPreferencesService",
  methods: {
    /**
     * Returns the email preferences for a Merchant Center account user.
     *
     * Use the name=accounts/* /users/me/emailPreferences alias to get preferences
     * for the authenticated user.
     */
    getEmailPreferences: {
      name: "GetEmailPreferences",
      requestType: GetEmailPreferencesRequest,
      requestStream: false,
      responseType: EmailPreferences,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              61,
              18,
              59,
              47,
              97,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              97,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              42,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              47,
              101,
              109,
              97,
              105,
              108,
              80,
              114,
              101,
              102,
              101,
              114,
              101,
              110,
              99,
              101,
              115,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Updates the email preferences for a Merchant Center account user. MCA users
     * should specify the MCA account rather than a sub-account of the MCA.
     *
     * Preferences which are not explicitly selected in the update mask will not
     * be updated.
     *
     * It is invalid for updates to specify an UNCONFIRMED opt-in status value.
     *
     * Use the name=accounts/* /users/me/emailPreferences alias to update
     * preferences
     * for the authenticated user.
     */
    updateEmailPreferences: {
      name: "UpdateEmailPreferences",
      requestType: UpdateEmailPreferencesRequest,
      requestStream: false,
      responseType: EmailPreferences,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              29,
              101,
              109,
              97,
              105,
              108,
              95,
              112,
              114,
              101,
              102,
              101,
              114,
              101,
              110,
              99,
              101,
              115,
              44,
              117,
              112,
              100,
              97,
              116,
              101,
              95,
              109,
              97,
              115,
              107,
            ]),
          ],
          578365826: [
            Buffer.from([
              98,
              58,
              17,
              101,
              109,
              97,
              105,
              108,
              95,
              112,
              114,
              101,
              102,
              101,
              114,
              101,
              110,
              99,
              101,
              115,
              50,
              77,
              47,
              97,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              47,
              123,
              101,
              109,
              97,
              105,
              108,
              95,
              112,
              114,
              101,
              102,
              101,
              114,
              101,
              110,
              99,
              101,
              115,
              46,
              110,
              97,
              109,
              101,
              61,
              97,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              42,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              47,
              101,
              109,
              97,
              105,
              108,
              80,
              114,
              101,
              102,
              101,
              114,
              101,
              110,
              99,
              101,
              115,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface EmailPreferencesServiceImplementation<CallContextExt = {}> {
  /**
   * Returns the email preferences for a Merchant Center account user.
   *
   * Use the name=accounts/* /users/me/emailPreferences alias to get preferences
   * for the authenticated user.
   */
  getEmailPreferences(
    request: GetEmailPreferencesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<EmailPreferences>>;
  /**
   * Updates the email preferences for a Merchant Center account user. MCA users
   * should specify the MCA account rather than a sub-account of the MCA.
   *
   * Preferences which are not explicitly selected in the update mask will not
   * be updated.
   *
   * It is invalid for updates to specify an UNCONFIRMED opt-in status value.
   *
   * Use the name=accounts/* /users/me/emailPreferences alias to update
   * preferences
   * for the authenticated user.
   */
  updateEmailPreferences(
    request: UpdateEmailPreferencesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<EmailPreferences>>;
}

export interface EmailPreferencesServiceClient<CallOptionsExt = {}> {
  /**
   * Returns the email preferences for a Merchant Center account user.
   *
   * Use the name=accounts/* /users/me/emailPreferences alias to get preferences
   * for the authenticated user.
   */
  getEmailPreferences(
    request: DeepPartial<GetEmailPreferencesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<EmailPreferences>;
  /**
   * Updates the email preferences for a Merchant Center account user. MCA users
   * should specify the MCA account rather than a sub-account of the MCA.
   *
   * Preferences which are not explicitly selected in the update mask will not
   * be updated.
   *
   * It is invalid for updates to specify an UNCONFIRMED opt-in status value.
   *
   * Use the name=accounts/* /users/me/emailPreferences alias to update
   * preferences
   * for the authenticated user.
   */
  updateEmailPreferences(
    request: DeepPartial<UpdateEmailPreferencesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<EmailPreferences>;
}

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
