// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/identitytoolkit/v2/authentication_service.proto

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

/** Finalizes sign-in by verifying MFA challenge. */
export interface FinalizeMfaSignInRequest {
  /** Required. Pending credential from first factor sign-in. */
  mfaPendingCredential: string;
  /** Proof of completion of the SMS based MFA challenge. */
  phoneVerificationInfo?:
    | FinalizeMfaPhoneRequestInfo
    | undefined;
  /**
   * The ID of the Identity Platform tenant the user is signing in to. If not
   * set, the user will sign in to the default Identity Platform project.
   */
  tenantId: string;
}

/** FinalizeMfaSignIn response. */
export interface FinalizeMfaSignInResponse {
  /** ID token for the authenticated user. */
  idToken: string;
  /** Refresh token for the authenticated user. */
  refreshToken: string;
  /** Extra phone auth info, including android verification proof. */
  phoneAuthInfo?: FinalizeMfaPhoneResponseInfo | undefined;
}

/** Starts multi-factor sign-in by sending the multi-factor auth challenge. */
export interface StartMfaSignInRequest {
  /** Required. Pending credential from first factor sign-in. */
  mfaPendingCredential: string;
  /** Required. MFA enrollment id from the user's list of current MFA enrollments. */
  mfaEnrollmentId: string;
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneSignInInfo?:
    | StartMfaPhoneRequestInfo
    | undefined;
  /**
   * The ID of the Identity Platform tenant the user is signing in to. If not
   * set, the user will sign in to the default Identity Platform project.
   */
  tenantId: string;
}

/** StartMfaSignIn response. */
export interface StartMfaSignInResponse {
  /**
   * MultiFactor sign-in session information specific to SMS-type second
   * factors. Along with the one-time code retrieved from the sent SMS, the
   * contents of this session information should be passed to
   * FinalizeMfaSignIn to complete the sign in.
   */
  phoneResponseInfo?: StartMfaPhoneResponseInfo | undefined;
}

function createBaseFinalizeMfaSignInRequest(): FinalizeMfaSignInRequest {
  return { mfaPendingCredential: "", phoneVerificationInfo: undefined, tenantId: "" };
}

export const FinalizeMfaSignInRequest: MessageFns<FinalizeMfaSignInRequest> = {
  encode(message: FinalizeMfaSignInRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.mfaPendingCredential !== "") {
      writer.uint32(18).string(message.mfaPendingCredential);
    }
    if (message.phoneVerificationInfo !== undefined) {
      FinalizeMfaPhoneRequestInfo.encode(message.phoneVerificationInfo, writer.uint32(26).fork()).join();
    }
    if (message.tenantId !== "") {
      writer.uint32(34).string(message.tenantId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FinalizeMfaSignInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizeMfaSignInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mfaPendingCredential = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phoneVerificationInfo = FinalizeMfaPhoneRequestInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): FinalizeMfaSignInRequest {
    return {
      mfaPendingCredential: isSet(object.mfaPendingCredential) ? globalThis.String(object.mfaPendingCredential) : "",
      phoneVerificationInfo: isSet(object.phoneVerificationInfo)
        ? FinalizeMfaPhoneRequestInfo.fromJSON(object.phoneVerificationInfo)
        : undefined,
      tenantId: isSet(object.tenantId) ? globalThis.String(object.tenantId) : "",
    };
  },

  toJSON(message: FinalizeMfaSignInRequest): unknown {
    const obj: any = {};
    if (message.mfaPendingCredential !== "") {
      obj.mfaPendingCredential = message.mfaPendingCredential;
    }
    if (message.phoneVerificationInfo !== undefined) {
      obj.phoneVerificationInfo = FinalizeMfaPhoneRequestInfo.toJSON(message.phoneVerificationInfo);
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    return obj;
  },

  create(base?: DeepPartial<FinalizeMfaSignInRequest>): FinalizeMfaSignInRequest {
    return FinalizeMfaSignInRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FinalizeMfaSignInRequest>): FinalizeMfaSignInRequest {
    const message = createBaseFinalizeMfaSignInRequest();
    message.mfaPendingCredential = object.mfaPendingCredential ?? "";
    message.phoneVerificationInfo =
      (object.phoneVerificationInfo !== undefined && object.phoneVerificationInfo !== null)
        ? FinalizeMfaPhoneRequestInfo.fromPartial(object.phoneVerificationInfo)
        : undefined;
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseFinalizeMfaSignInResponse(): FinalizeMfaSignInResponse {
  return { idToken: "", refreshToken: "", phoneAuthInfo: undefined };
}

export const FinalizeMfaSignInResponse: MessageFns<FinalizeMfaSignInResponse> = {
  encode(message: FinalizeMfaSignInResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): FinalizeMfaSignInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizeMfaSignInResponse();
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

  fromJSON(object: any): FinalizeMfaSignInResponse {
    return {
      idToken: isSet(object.idToken) ? globalThis.String(object.idToken) : "",
      refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
      phoneAuthInfo: isSet(object.phoneAuthInfo)
        ? FinalizeMfaPhoneResponseInfo.fromJSON(object.phoneAuthInfo)
        : undefined,
    };
  },

  toJSON(message: FinalizeMfaSignInResponse): unknown {
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

  create(base?: DeepPartial<FinalizeMfaSignInResponse>): FinalizeMfaSignInResponse {
    return FinalizeMfaSignInResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FinalizeMfaSignInResponse>): FinalizeMfaSignInResponse {
    const message = createBaseFinalizeMfaSignInResponse();
    message.idToken = object.idToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.phoneAuthInfo = (object.phoneAuthInfo !== undefined && object.phoneAuthInfo !== null)
      ? FinalizeMfaPhoneResponseInfo.fromPartial(object.phoneAuthInfo)
      : undefined;
    return message;
  },
};

function createBaseStartMfaSignInRequest(): StartMfaSignInRequest {
  return { mfaPendingCredential: "", mfaEnrollmentId: "", phoneSignInInfo: undefined, tenantId: "" };
}

export const StartMfaSignInRequest: MessageFns<StartMfaSignInRequest> = {
  encode(message: StartMfaSignInRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.mfaPendingCredential !== "") {
      writer.uint32(18).string(message.mfaPendingCredential);
    }
    if (message.mfaEnrollmentId !== "") {
      writer.uint32(26).string(message.mfaEnrollmentId);
    }
    if (message.phoneSignInInfo !== undefined) {
      StartMfaPhoneRequestInfo.encode(message.phoneSignInInfo, writer.uint32(34).fork()).join();
    }
    if (message.tenantId !== "") {
      writer.uint32(42).string(message.tenantId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StartMfaSignInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartMfaSignInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mfaPendingCredential = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mfaEnrollmentId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.phoneSignInInfo = StartMfaPhoneRequestInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): StartMfaSignInRequest {
    return {
      mfaPendingCredential: isSet(object.mfaPendingCredential) ? globalThis.String(object.mfaPendingCredential) : "",
      mfaEnrollmentId: isSet(object.mfaEnrollmentId) ? globalThis.String(object.mfaEnrollmentId) : "",
      phoneSignInInfo: isSet(object.phoneSignInInfo)
        ? StartMfaPhoneRequestInfo.fromJSON(object.phoneSignInInfo)
        : undefined,
      tenantId: isSet(object.tenantId) ? globalThis.String(object.tenantId) : "",
    };
  },

  toJSON(message: StartMfaSignInRequest): unknown {
    const obj: any = {};
    if (message.mfaPendingCredential !== "") {
      obj.mfaPendingCredential = message.mfaPendingCredential;
    }
    if (message.mfaEnrollmentId !== "") {
      obj.mfaEnrollmentId = message.mfaEnrollmentId;
    }
    if (message.phoneSignInInfo !== undefined) {
      obj.phoneSignInInfo = StartMfaPhoneRequestInfo.toJSON(message.phoneSignInInfo);
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    return obj;
  },

  create(base?: DeepPartial<StartMfaSignInRequest>): StartMfaSignInRequest {
    return StartMfaSignInRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartMfaSignInRequest>): StartMfaSignInRequest {
    const message = createBaseStartMfaSignInRequest();
    message.mfaPendingCredential = object.mfaPendingCredential ?? "";
    message.mfaEnrollmentId = object.mfaEnrollmentId ?? "";
    message.phoneSignInInfo = (object.phoneSignInInfo !== undefined && object.phoneSignInInfo !== null)
      ? StartMfaPhoneRequestInfo.fromPartial(object.phoneSignInInfo)
      : undefined;
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseStartMfaSignInResponse(): StartMfaSignInResponse {
  return { phoneResponseInfo: undefined };
}

export const StartMfaSignInResponse: MessageFns<StartMfaSignInResponse> = {
  encode(message: StartMfaSignInResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.phoneResponseInfo !== undefined) {
      StartMfaPhoneResponseInfo.encode(message.phoneResponseInfo, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StartMfaSignInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartMfaSignInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phoneResponseInfo = StartMfaPhoneResponseInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartMfaSignInResponse {
    return {
      phoneResponseInfo: isSet(object.phoneResponseInfo)
        ? StartMfaPhoneResponseInfo.fromJSON(object.phoneResponseInfo)
        : undefined,
    };
  },

  toJSON(message: StartMfaSignInResponse): unknown {
    const obj: any = {};
    if (message.phoneResponseInfo !== undefined) {
      obj.phoneResponseInfo = StartMfaPhoneResponseInfo.toJSON(message.phoneResponseInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<StartMfaSignInResponse>): StartMfaSignInResponse {
    return StartMfaSignInResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartMfaSignInResponse>): StartMfaSignInResponse {
    const message = createBaseStartMfaSignInResponse();
    message.phoneResponseInfo = (object.phoneResponseInfo !== undefined && object.phoneResponseInfo !== null)
      ? StartMfaPhoneResponseInfo.fromPartial(object.phoneResponseInfo)
      : undefined;
    return message;
  },
};

/** Authentication for Identity Toolkit */
export type AuthenticationServiceDefinition = typeof AuthenticationServiceDefinition;
export const AuthenticationServiceDefinition = {
  name: "AuthenticationService",
  fullName: "google.cloud.identitytoolkit.v2.AuthenticationService",
  methods: {
    /** Verifies the MFA challenge and performs sign-in */
    finalizeMfaSignIn: {
      name: "FinalizeMfaSignIn",
      requestType: FinalizeMfaSignInRequest,
      requestStream: false,
      responseType: FinalizeMfaSignInResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              36,
              58,
              1,
              42,
              34,
              31,
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
              83,
              105,
              103,
              110,
              73,
              110,
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
    /** Sends the MFA challenge */
    startMfaSignIn: {
      name: "StartMfaSignIn",
      requestType: StartMfaSignInRequest,
      requestStream: false,
      responseType: StartMfaSignInResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              33,
              58,
              1,
              42,
              34,
              28,
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
              83,
              105,
              103,
              110,
              73,
              110,
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
  },
} as const;

export interface AuthenticationServiceImplementation<CallContextExt = {}> {
  /** Verifies the MFA challenge and performs sign-in */
  finalizeMfaSignIn(
    request: FinalizeMfaSignInRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FinalizeMfaSignInResponse>>;
  /** Sends the MFA challenge */
  startMfaSignIn(
    request: StartMfaSignInRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StartMfaSignInResponse>>;
}

export interface AuthenticationServiceClient<CallOptionsExt = {}> {
  /** Verifies the MFA challenge and performs sign-in */
  finalizeMfaSignIn(
    request: DeepPartial<FinalizeMfaSignInRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FinalizeMfaSignInResponse>;
  /** Sends the MFA challenge */
  startMfaSignIn(
    request: DeepPartial<StartMfaSignInRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StartMfaSignInResponse>;
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
