// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/discoveryengine/v1beta/project_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Operation } from "../../../longrunning/operations.js";

export const protobufPackage = "google.cloud.discoveryengine.v1beta";

/**
 * Request for
 * [ProjectService.ProvisionProject][google.cloud.discoveryengine.v1beta.ProjectService.ProvisionProject]
 * method.
 */
export interface ProvisionProjectRequest {
  /**
   * Required. Full resource name of a
   * [Project][google.cloud.discoveryengine.v1beta.Project], such as
   * `projects/{project_id_or_number}`.
   */
  name: string;
  /**
   * Required. Set to `true` to specify that caller has read and would like to
   * give consent to the [Terms for data
   * use](https://cloud.google.com/retail/data-use-terms).
   */
  acceptDataUseTerms: boolean;
  /**
   * Required. The version of the [Terms for data
   * use](https://cloud.google.com/retail/data-use-terms) that caller has read
   * and would like to give consent to.
   *
   * Acceptable version is `2022-11-23`, and this may change over time.
   */
  dataUseTermsVersion: string;
}

/** Metadata associated with a project provision operation. */
export interface ProvisionProjectMetadata {
}

function createBaseProvisionProjectRequest(): ProvisionProjectRequest {
  return { name: "", acceptDataUseTerms: false, dataUseTermsVersion: "" };
}

export const ProvisionProjectRequest: MessageFns<ProvisionProjectRequest> = {
  encode(message: ProvisionProjectRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.acceptDataUseTerms !== false) {
      writer.uint32(16).bool(message.acceptDataUseTerms);
    }
    if (message.dataUseTermsVersion !== "") {
      writer.uint32(26).string(message.dataUseTermsVersion);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProvisionProjectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvisionProjectRequest();
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

          message.acceptDataUseTerms = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataUseTermsVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProvisionProjectRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      acceptDataUseTerms: isSet(object.acceptDataUseTerms) ? globalThis.Boolean(object.acceptDataUseTerms) : false,
      dataUseTermsVersion: isSet(object.dataUseTermsVersion) ? globalThis.String(object.dataUseTermsVersion) : "",
    };
  },

  toJSON(message: ProvisionProjectRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.acceptDataUseTerms !== false) {
      obj.acceptDataUseTerms = message.acceptDataUseTerms;
    }
    if (message.dataUseTermsVersion !== "") {
      obj.dataUseTermsVersion = message.dataUseTermsVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<ProvisionProjectRequest>): ProvisionProjectRequest {
    return ProvisionProjectRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProvisionProjectRequest>): ProvisionProjectRequest {
    const message = createBaseProvisionProjectRequest();
    message.name = object.name ?? "";
    message.acceptDataUseTerms = object.acceptDataUseTerms ?? false;
    message.dataUseTermsVersion = object.dataUseTermsVersion ?? "";
    return message;
  },
};

function createBaseProvisionProjectMetadata(): ProvisionProjectMetadata {
  return {};
}

export const ProvisionProjectMetadata: MessageFns<ProvisionProjectMetadata> = {
  encode(_: ProvisionProjectMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProvisionProjectMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvisionProjectMetadata();
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

  fromJSON(_: any): ProvisionProjectMetadata {
    return {};
  },

  toJSON(_: ProvisionProjectMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ProvisionProjectMetadata>): ProvisionProjectMetadata {
    return ProvisionProjectMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ProvisionProjectMetadata>): ProvisionProjectMetadata {
    const message = createBaseProvisionProjectMetadata();
    return message;
  },
};

/**
 * Service for operations on the
 * [Project][google.cloud.discoveryengine.v1beta.Project].
 */
export type ProjectServiceDefinition = typeof ProjectServiceDefinition;
export const ProjectServiceDefinition = {
  name: "ProjectService",
  fullName: "google.cloud.discoveryengine.v1beta.ProjectService",
  methods: {
    /**
     * Provisions the project resource. During the
     * process, related systems will get prepared and initialized.
     *
     * Caller must read the [Terms for data
     * use](https://cloud.google.com/retail/data-use-terms), and optionally
     * specify in request to provide consent to that service terms.
     */
    provisionProject: {
      name: "ProvisionProject",
      requestType: ProvisionProjectRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              107,
              10,
              43,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              99,
              108,
              111,
              117,
              100,
              46,
              100,
              105,
              115,
              99,
              111,
              118,
              101,
              114,
              121,
              101,
              110,
              103,
              105,
              110,
              101,
              46,
              118,
              49,
              98,
              101,
              116,
              97,
              46,
              80,
              114,
              111,
              106,
              101,
              99,
              116,
              18,
              60,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              99,
              108,
              111,
              117,
              100,
              46,
              100,
              105,
              115,
              99,
              111,
              118,
              101,
              114,
              121,
              101,
              110,
              103,
              105,
              110,
              101,
              46,
              118,
              49,
              98,
              101,
              116,
              97,
              46,
              80,
              114,
              111,
              118,
              105,
              115,
              105,
              111,
              110,
              80,
              114,
              111,
              106,
              101,
              99,
              116,
              77,
              101,
              116,
              97,
              100,
              97,
              116,
              97,
            ]),
          ],
          8410: [Buffer.from([4, 110, 97, 109, 101])],
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
              58,
              112,
              114,
              111,
              118,
              105,
              115,
              105,
              111,
              110,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ProjectServiceImplementation<CallContextExt = {}> {
  /**
   * Provisions the project resource. During the
   * process, related systems will get prepared and initialized.
   *
   * Caller must read the [Terms for data
   * use](https://cloud.google.com/retail/data-use-terms), and optionally
   * specify in request to provide consent to that service terms.
   */
  provisionProject(
    request: ProvisionProjectRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
}

export interface ProjectServiceClient<CallOptionsExt = {}> {
  /**
   * Provisions the project resource. During the
   * process, related systems will get prepared and initialized.
   *
   * Caller must read the [Terms for data
   * use](https://cloud.google.com/retail/data-use-terms), and optionally
   * specify in request to provide consent to that service terms.
   */
  provisionProject(
    request: DeepPartial<ProvisionProjectRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
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