// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/phishingprotection/v1beta1/phishingprotection.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "google.cloud.phishingprotection.v1beta1";

/** The ReportPhishing request message. */
export interface ReportPhishingRequest {
  /**
   * Required. The name of the project for which the report will be created,
   * in the format "projects/{project_number}".
   */
  parent: string;
  /** Required. The URI that is being reported for phishing content to be analyzed. */
  uri: string;
}

/** The ReportPhishing (empty) response message. */
export interface ReportPhishingResponse {
}

function createBaseReportPhishingRequest(): ReportPhishingRequest {
  return { parent: "", uri: "" };
}

export const ReportPhishingRequest: MessageFns<ReportPhishingRequest> = {
  encode(message: ReportPhishingRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReportPhishingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportPhishingRequest();
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

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReportPhishingRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: ReportPhishingRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<ReportPhishingRequest>): ReportPhishingRequest {
    return ReportPhishingRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ReportPhishingRequest>): ReportPhishingRequest {
    const message = createBaseReportPhishingRequest();
    message.parent = object.parent ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseReportPhishingResponse(): ReportPhishingResponse {
  return {};
}

export const ReportPhishingResponse: MessageFns<ReportPhishingResponse> = {
  encode(_: ReportPhishingResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReportPhishingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportPhishingResponse();
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

  fromJSON(_: any): ReportPhishingResponse {
    return {};
  },

  toJSON(_: ReportPhishingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ReportPhishingResponse>): ReportPhishingResponse {
    return ReportPhishingResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ReportPhishingResponse>): ReportPhishingResponse {
    const message = createBaseReportPhishingResponse();
    return message;
  },
};

/** Service to report phishing URIs. */
export type PhishingProtectionServiceV1Beta1Definition = typeof PhishingProtectionServiceV1Beta1Definition;
export const PhishingProtectionServiceV1Beta1Definition = {
  name: "PhishingProtectionServiceV1Beta1",
  fullName: "google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1",
  methods: {
    /**
     * Reports a URI suspected of containing phishing content to be reviewed. Once
     * the report review is complete, its result can be found in the Cloud
     * Security Command Center findings dashboard for Phishing Protection. If the
     * result verifies the existence of malicious phishing content, the site will
     * be added the to [Google's Social Engineering
     * lists](https://support.google.com/webmasters/answer/6350487/) in order to
     * protect users that could get exposed to this threat in the future.
     */
    reportPhishing: {
      name: "ReportPhishing",
      requestType: ReportPhishingRequest,
      requestStream: false,
      responseType: ReportPhishingResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([10, 112, 97, 114, 101, 110, 116, 44, 117, 114, 105])],
          578365826: [
            Buffer.from([
              49,
              58,
              1,
              42,
              34,
              44,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
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
              47,
              112,
              104,
              105,
              115,
              104,
              105,
              110,
              103,
              58,
              114,
              101,
              112,
              111,
              114,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface PhishingProtectionServiceV1Beta1ServiceImplementation<CallContextExt = {}> {
  /**
   * Reports a URI suspected of containing phishing content to be reviewed. Once
   * the report review is complete, its result can be found in the Cloud
   * Security Command Center findings dashboard for Phishing Protection. If the
   * result verifies the existence of malicious phishing content, the site will
   * be added the to [Google's Social Engineering
   * lists](https://support.google.com/webmasters/answer/6350487/) in order to
   * protect users that could get exposed to this threat in the future.
   */
  reportPhishing(
    request: ReportPhishingRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ReportPhishingResponse>>;
}

export interface PhishingProtectionServiceV1Beta1Client<CallOptionsExt = {}> {
  /**
   * Reports a URI suspected of containing phishing content to be reviewed. Once
   * the report review is complete, its result can be found in the Cloud
   * Security Command Center findings dashboard for Phishing Protection. If the
   * result verifies the existence of malicious phishing content, the site will
   * be added the to [Google's Social Engineering
   * lists](https://support.google.com/webmasters/answer/6350487/) in order to
   * protect users that could get exposed to this threat in the future.
   */
  reportPhishing(
    request: DeepPartial<ReportPhishingRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ReportPhishingResponse>;
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