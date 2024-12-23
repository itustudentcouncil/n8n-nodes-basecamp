// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/identitytoolkit/v2/account_management_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import {
  FinalizeMfaPhoneRequestInfo,
  FinalizeMfaPhoneResponseInfo,
  StartMfaPhoneRequestInfo,
  StartMfaPhoneResponseInfo,
} from "./mfa_info.js";

export const protobufPackage = "google.cloud.identitytoolkit.v2";

/** Finishes enrolling a second factor for the user. */
export interface FinalizeMfaEnrollmentRequest {
  /** Required. ID token. */
  idToken: string;
  /**
   * Display name which is entered  by users to distinguish between different
   * second factors with same type or different type.
   */
  displayName: string;
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneVerificationInfo?:
    | FinalizeMfaPhoneRequestInfo
    | undefined;
  /**
   * The ID of the Identity Platform tenant that the user enrolling MFA belongs
   * to. If not set, the user belongs to the default Identity Platform project.
   */
  tenantId: string;
}

/** FinalizeMfaEnrollment response. */
export interface FinalizeMfaEnrollmentResponse {
  /** ID token updated to reflect MFA enrollment. */
  idToken: string;
  /** Refresh token updated to reflect MFA enrollment. */
  refreshToken: string;
  /** Auxiliary auth info specific to phone auth. */
  phoneAuthInfo?: FinalizeMfaPhoneResponseInfo | undefined;
}

/** Sends MFA enrollment verification SMS for a user. */
export interface StartMfaEnrollmentRequest {
  /** Required. User's ID token. */
  idToken: string;
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneEnrollmentInfo?:
    | StartMfaPhoneRequestInfo
    | undefined;
  /**
   * The ID of the Identity Platform tenant that the user enrolling MFA belongs
   * to. If not set, the user belongs to the default Identity Platform project.
   */
  tenantId: string;
}

/** StartMfaEnrollment response. */
export interface StartMfaEnrollmentResponse {
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneSessionInfo?: StartMfaPhoneResponseInfo | undefined;
}

/** Withdraws MFA. */
export interface WithdrawMfaRequest {
  /** Required. User's ID token. */
  idToken: string;
  /** Required. MFA enrollment id from a current MFA enrollment. */
  mfaEnrollmentId: string;
  /**
   * The ID of the Identity Platform tenant that the user unenrolling MFA
   * belongs to. If not set, the user belongs to the default Identity Platform
   * project.
   */
  tenantId: string;
}

/** Withdraws MultiFactorAuth response. */
export interface WithdrawMfaResponse {
  /** ID token updated to reflect removal of the second factor. */
  idToken: string;
  /** Refresh token updated to reflect removal of the second factor. */
  refreshToken: string;
}

function createBaseFinalizeMfaEnrollmentRequest(): FinalizeMfaEnrollmentRequest {
  return { idToken: "", displayName: "", phoneVerificationInfo: undefined, tenantId: "" };
}

export const FinalizeMfaEnrollmentRequest: MessageFns<FinalizeMfaEnrollmentRequest> = {
  encode(message: FinalizeMfaEnrollmentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.idToken !== "") {
      writer.uint32(10).string(message.idToken);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.phoneVerificationInfo !== undefined) {
      FinalizeMfaPhoneRequestInfo.encode(message.phoneVerificationInfo, writer.uint32(34).fork()).join();
    }
    if (message.tenantId !== "") {
      writer.uint32(42).string(message.tenantId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FinalizeMfaEnrollmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizeMfaEnrollmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.phoneVerificationInfo = FinalizeMfaPhoneRequestInfo.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tenantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalizeMfaEnrollmentRequest {
    return {
      idToken: isSet(object.idToken) ? globalThis.String(object.idToken) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      phoneVerificationInfo: isSet(object.phoneVerificationInfo)
        ? FinalizeMfaPhoneRequestInfo.fromJSON(object.phoneVerificationInfo)
        : undefined,
      tenantId: isSet(object.tenantId) ? globalThis.String(object.tenantId) : "",
    };
  },

  toJSON(message: FinalizeMfaEnrollmentRequest): unknown {
    const obj: any = {};
    if (message.idToken !== "") {
      obj.idToken = message.idToken;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.phoneVerificationInfo !== undefined) {
      obj.phoneVerificationInfo = FinalizeMfaPhoneRequestInfo.toJSON(message.phoneVerificationInfo);
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    return obj;
  },

  create(base?: DeepPartial<FinalizeMfaEnrollmentRequest>): FinalizeMfaEnrollmentRequest {
    return FinalizeMfaEnrollmentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FinalizeMfaEnrollmentRequest>): FinalizeMfaEnrollmentRequest {
    const message = createBaseFinalizeMfaEnrollmentRequest();
    message.idToken = object.idToken ?? "";
    message.displayName = object.displayName ?? "";
    message.phoneVerificationInfo =
      (object.phoneVerificationInfo !== undefined && object.phoneVerificationInfo !== null)
        ? FinalizeMfaPhoneRequestInfo.fromPartial(object.phoneVerificationInfo)
        : undefined;
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseFinalizeMfaEnrollmentResponse(): FinalizeMfaEnrollmentResponse {
  return { idToken: "", refreshToken: "", phoneAuthInfo: undefined };
}

export const FinalizeMfaEnrollmentResponse: MessageFns<FinalizeMfaEnrollmentResponse> = {
  encode(message: FinalizeMfaEnrollmentResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.idToken !== "") {
      writer.uint32(10).string(message.idToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    if (message.phoneAuthInfo !== undefined) {
      FinalizeMfaPhoneResponseInfo.encode(message.phoneAuthInfo, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FinalizeMfaEnrollmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizeMfaEnrollmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phoneAuthInfo = FinalizeMfaPhoneResponseInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalizeMfaEnrollmentResponse {
    return {
      idToken: isSet(object.idToken) ? globalThis.String(object.idToken) : "",
      refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
      phoneAuthInfo: isSet(object.phoneAuthInfo)
        ? FinalizeMfaPhoneResponseInfo.fromJSON(object.phoneAuthInfo)
        : undefined,
    };
  },

  toJSON(message: FinalizeMfaEnrollmentResponse): unknown {
    const obj: any = {};
    if (message.idToken !== "") {
      obj.idToken = message.idToken;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    if (message.phoneAuthInfo !== undefined) {
      obj.phoneAuthInfo = FinalizeMfaPhoneResponseInfo.toJSON(message.phoneAuthInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<FinalizeMfaEnrollmentResponse>): FinalizeMfaEnrollmentResponse {
    return FinalizeMfaEnrollmentResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FinalizeMfaEnrollmentResponse>): FinalizeMfaEnrollmentResponse {
    const message = createBaseFinalizeMfaEnrollmentResponse();
    message.idToken = object.idToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.phoneAuthInfo = (object.phoneAuthInfo !== undefined && object.phoneAuthInfo !== null)
      ? FinalizeMfaPhoneResponseInfo.fromPartial(object.phoneAuthInfo)
      : undefined;
    return message;
  },
};

function createBaseStartMfaEnrollmentRequest(): StartMfaEnrollmentRequest {
  return { idToken: "", phoneEnrollmentInfo: undefined, tenantId: "" };
}

export const StartMfaEnrollmentRequest: MessageFns<StartMfaEnrollmentRequest> = {
  encode(message: StartMfaEnrollmentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.idToken !== "") {
      writer.uint32(10).string(message.idToken);
    }
    if (message.phoneEnrollmentInfo !== undefined) {
      StartMfaPhoneRequestInfo.encode(message.phoneEnrollmentInfo, writer.uint32(26).fork()).join();
    }
    if (message.tenantId !== "") {
      writer.uint32(34).string(message.tenantId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StartMfaEnrollmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartMfaEnrollmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phoneEnrollmentInfo = StartMfaPhoneRequestInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tenantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartMfaEnrollmentRequest {
    return {
      idToken: isSet(object.idToken) ? globalThis.String(object.idToken) : "",
      phoneEnrollmentInfo: isSet(object.phoneEnrollmentInfo)
        ? StartMfaPhoneRequestInfo.fromJSON(object.phoneEnrollmentInfo)
        : undefined,
      tenantId: isSet(object.tenantId) ? globalThis.String(object.tenantId) : "",
    };
  },

  toJSON(message: StartMfaEnrollmentRequest): unknown {
    const obj: any = {};
    if (message.idToken !== "") {
      obj.idToken = message.idToken;
    }
    if (message.phoneEnrollmentInfo !== undefined) {
      obj.phoneEnrollmentInfo = StartMfaPhoneRequestInfo.toJSON(message.phoneEnrollmentInfo);
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    return obj;
  },

  create(base?: DeepPartial<StartMfaEnrollmentRequest>): StartMfaEnrollmentRequest {
    return StartMfaEnrollmentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartMfaEnrollmentRequest>): StartMfaEnrollmentRequest {
    const message = createBaseStartMfaEnrollmentRequest();
    message.idToken = object.idToken ?? "";
    message.phoneEnrollmentInfo = (object.phoneEnrollmentInfo !== undefined && object.phoneEnrollmentInfo !== null)
      ? StartMfaPhoneRequestInfo.fromPartial(object.phoneEnrollmentInfo)
      : undefined;
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseStartMfaEnrollmentResponse(): StartMfaEnrollmentResponse {
  return { phoneSessionInfo: undefined };
}

export const StartMfaEnrollmentResponse: MessageFns<StartMfaEnrollmentResponse> = {
  encode(message: StartMfaEnrollmentResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.phoneSessionInfo !== undefined) {
      StartMfaPhoneResponseInfo.encode(message.phoneSessionInfo, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StartMfaEnrollmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartMfaEnrollmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phoneSessionInfo = StartMfaPhoneResponseInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartMfaEnrollmentResponse {
    return {
      phoneSessionInfo: isSet(object.phoneSessionInfo)
        ? StartMfaPhoneResponseInfo.fromJSON(object.phoneSessionInfo)
        : undefined,
    };
  },

  toJSON(message: StartMfaEnrollmentResponse): unknown {
    const obj: any = {};
    if (message.phoneSessionInfo !== undefined) {
      obj.phoneSessionInfo = StartMfaPhoneResponseInfo.toJSON(message.phoneSessionInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<StartMfaEnrollmentResponse>): StartMfaEnrollmentResponse {
    return StartMfaEnrollmentResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartMfaEnrollmentResponse>): StartMfaEnrollmentResponse {
    const message = createBaseStartMfaEnrollmentResponse();
    message.phoneSessionInfo = (object.phoneSessionInfo !== undefined && object.phoneSessionInfo !== null)
      ? StartMfaPhoneResponseInfo.fromPartial(object.phoneSessionInfo)
      : undefined;
    return message;
  },
};

function createBaseWithdrawMfaRequest(): WithdrawMfaRequest {
  return { idToken: "", mfaEnrollmentId: "", tenantId: "" };
}

export const WithdrawMfaRequest: MessageFns<WithdrawMfaRequest> = {
  encode(message: WithdrawMfaRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.idToken !== "") {
      writer.uint32(10).string(message.idToken);
    }
    if (message.mfaEnrollmentId !== "") {
      writer.uint32(18).string(message.mfaEnrollmentId);
    }
    if (message.tenantId !== "") {
      writer.uint32(26).string(message.tenantId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WithdrawMfaRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawMfaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mfaEnrollmentId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tenantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawMfaRequest {
    return {
      idToken: isSet(object.idToken) ? globalThis.String(object.idToken) : "",
      mfaEnrollmentId: isSet(object.mfaEnrollmentId) ? globalThis.String(object.mfaEnrollmentId) : "",
      tenantId: isSet(object.tenantId) ? globalThis.String(object.tenantId) : "",
    };
  },

  toJSON(message: WithdrawMfaRequest): unknown {
    const obj: any = {};
    if (message.idToken !== "") {
      obj.idToken = message.idToken;
    }
    if (message.mfaEnrollmentId !== "") {
      obj.mfaEnrollmentId = message.mfaEnrollmentId;
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    return obj;
  },

  create(base?: DeepPartial<WithdrawMfaRequest>): WithdrawMfaRequest {
    return WithdrawMfaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WithdrawMfaRequest>): WithdrawMfaRequest {
    const message = createBaseWithdrawMfaRequest();
    message.idToken = object.idToken ?? "";
    message.mfaEnrollmentId = object.mfaEnrollmentId ?? "";
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseWithdrawMfaResponse(): WithdrawMfaResponse {
  return { idToken: "", refreshToken: "" };
}

export const WithdrawMfaResponse: MessageFns<WithdrawMfaResponse> = {
  encode(message: WithdrawMfaResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.idToken !== "") {
      writer.uint32(10).string(message.idToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WithdrawMfaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawMfaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawMfaResponse {
    return {
      idToken: isSet(object.idToken) ? globalThis.String(object.idToken) : "",
      refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
    };
  },

  toJSON(message: WithdrawMfaResponse): unknown {
    const obj: any = {};
    if (message.idToken !== "") {
      obj.idToken = message.idToken;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    return obj;
  },

  create(base?: DeepPartial<WithdrawMfaResponse>): WithdrawMfaResponse {
    return WithdrawMfaResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WithdrawMfaResponse>): WithdrawMfaResponse {
    const message = createBaseWithdrawMfaResponse();
    message.idToken = object.idToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

/** Account management for Identity Toolkit */
export type AccountManagementServiceDefinition = typeof AccountManagementServiceDefinition;
export const AccountManagementServiceDefinition = {
  name: "AccountManagementService",
  fullName: "google.cloud.identitytoolkit.v2.AccountManagementService",
  methods: {
    /** Finishes enrolling a second factor for the user. */
    finalizeMfaEnrollment: {
      name: "FinalizeMfaEnrollment",
      requestType: FinalizeMfaEnrollmentRequest,
      requestStream: false,
      responseType: FinalizeMfaEnrollmentResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
              47,
              118,
              50,
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
              109,
              102,
              97,
              69,
              110,
              114,
              111,
              108,
              108,
              109,
              101,
              110,
              116,
              58,
              102,
              105,
              110,
              97,
              108,
              105,
              122,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Step one of the MFA enrollment process. In SMS case, this sends an
     * SMS verification code to the user.
     */
    startMfaEnrollment: {
      name: "StartMfaEnrollment",
      requestType: StartMfaEnrollmentRequest,
      requestStream: false,
      responseType: StartMfaEnrollmentResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              37,
              58,
              1,
              42,
              34,
              32,
              47,
              118,
              50,
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
              109,
              102,
              97,
              69,
              110,
              114,
              111,
              108,
              108,
              109,
              101,
              110,
              116,
              58,
              115,
              116,
              97,
              114,
              116,
            ]),
          ],
        },
      },
    },
    /** Revokes one second factor from the enrolled second factors for an account. */
    withdrawMfa: {
      name: "WithdrawMfa",
      requestType: WithdrawMfaRequest,
      requestStream: false,
      responseType: WithdrawMfaResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
              47,
              118,
              50,
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
              109,
              102,
              97,
              69,
              110,
              114,
              111,
              108,
              108,
              109,
              101,
              110,
              116,
              58,
              119,
              105,
              116,
              104,
              100,
              114,
              97,
              119,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface AccountManagementServiceImplementation<CallContextExt = {}> {
  /** Finishes enrolling a second factor for the user. */
  finalizeMfaEnrollment(
    request: FinalizeMfaEnrollmentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FinalizeMfaEnrollmentResponse>>;
  /**
   * Step one of the MFA enrollment process. In SMS case, this sends an
   * SMS verification code to the user.
   */
  startMfaEnrollment(
    request: StartMfaEnrollmentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StartMfaEnrollmentResponse>>;
  /** Revokes one second factor from the enrolled second factors for an account. */
  withdrawMfa(
    request: WithdrawMfaRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<WithdrawMfaResponse>>;
}

export interface AccountManagementServiceClient<CallOptionsExt = {}> {
  /** Finishes enrolling a second factor for the user. */
  finalizeMfaEnrollment(
    request: DeepPartial<FinalizeMfaEnrollmentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FinalizeMfaEnrollmentResponse>;
  /**
   * Step one of the MFA enrollment process. In SMS case, this sends an
   * SMS verification code to the user.
   */
  startMfaEnrollment(
    request: DeepPartial<StartMfaEnrollmentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StartMfaEnrollmentResponse>;
  /** Revokes one second factor from the enrolled second factors for an account. */
  withdrawMfa(
    request: DeepPartial<WithdrawMfaRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<WithdrawMfaResponse>;
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
