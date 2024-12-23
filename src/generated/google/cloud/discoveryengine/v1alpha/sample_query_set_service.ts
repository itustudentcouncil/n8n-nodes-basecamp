// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/discoveryengine/v1alpha/sample_query_set_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../../../protobuf/empty.js";
import { FieldMask } from "../../../protobuf/field_mask.js";
import { SampleQuerySet } from "./sample_query_set.js";

export const protobufPackage = "google.cloud.discoveryengine.v1alpha";

/**
 * Request message for
 * [SampleQuerySetService.GetSampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.GetSampleQuerySet]
 * method.
 */
export interface GetSampleQuerySetRequest {
  /**
   * Required. Full resource name of
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet], such
   * as
   * `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`.
   *
   * If the caller does not have permission to access the
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet],
   * regardless of whether or not it exists, a PERMISSION_DENIED error is
   * returned.
   *
   * If the requested
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet] does
   * not exist, a NOT_FOUND error is returned.
   */
  name: string;
}

/**
 * Request message for
 * [SampleQuerySetService.ListSampleQuerySets][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.ListSampleQuerySets]
 * method.
 */
export interface ListSampleQuerySetsRequest {
  /**
   * Required. The parent location resource name, such as
   * `projects/{project}/locations/{location}`.
   *
   * If the caller does not have permission to list
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s
   * under this location, regardless of whether or not this location exists, a
   * `PERMISSION_DENIED` error is returned.
   */
  parent: string;
  /**
   * Maximum number of
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s to
   * return. If unspecified, defaults to 100. The maximum allowed value is 1000.
   * Values above 1000 will be coerced to 1000.
   *
   * If this field is negative, an `INVALID_ARGUMENT` error is returned.
   */
  pageSize: number;
  /**
   * A page token
   * [ListSampleQuerySetsResponse.next_page_token][google.cloud.discoveryengine.v1alpha.ListSampleQuerySetsResponse.next_page_token],
   * received from a previous
   * [SampleQuerySetService.ListSampleQuerySets][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.ListSampleQuerySets]
   * call. Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to
   * [SampleQuerySetService.ListSampleQuerySets][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.ListSampleQuerySets]
   * must match the call that provided the page token. Otherwise, an
   * `INVALID_ARGUMENT` error is returned.
   */
  pageToken: string;
}

/**
 * Response message for
 * [SampleQuerySetService.ListSampleQuerySets][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.ListSampleQuerySets]
 * method.
 */
export interface ListSampleQuerySetsResponse {
  /** The [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s. */
  sampleQuerySets: SampleQuerySet[];
  /**
   * A token that can be sent as
   * [ListSampleQuerySetsRequest.page_token][google.cloud.discoveryengine.v1alpha.ListSampleQuerySetsRequest.page_token]
   * to retrieve the next page. If this field is omitted, there are no
   * subsequent pages.
   */
  nextPageToken: string;
}

/**
 * Request message for
 * [SampleQuerySetService.CreateSampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.CreateSampleQuerySet]
 * method.
 */
export interface CreateSampleQuerySetRequest {
  /**
   * Required. The parent resource name, such as
   * `projects/{project}/locations/{location}`.
   */
  parent: string;
  /**
   * Required. The
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet] to
   * create.
   */
  sampleQuerySet:
    | SampleQuerySet
    | undefined;
  /**
   * Required. The ID to use for the
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet],
   * which will become the final component of the
   * [SampleQuerySet.name][google.cloud.discoveryengine.v1alpha.SampleQuerySet.name].
   *
   * If the caller does not have permission to create the
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet],
   * regardless of whether or not it exists, a `PERMISSION_DENIED` error is
   * returned.
   *
   * This field must be unique among all
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s with
   * the same
   * [parent][google.cloud.discoveryengine.v1alpha.CreateSampleQuerySetRequest.parent].
   * Otherwise, an `ALREADY_EXISTS` error is returned.
   *
   * This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
   * standard with a length limit of 63 characters. Otherwise, an
   * `INVALID_ARGUMENT` error is returned.
   */
  sampleQuerySetId: string;
}

/**
 * Request message for
 * [SampleQuerySetService.UpdateSampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.UpdateSampleQuerySet]
 * method.
 */
export interface UpdateSampleQuerySetRequest {
  /**
   * Required. The sample query set to update.
   *
   * If the caller does not have permission to update the
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet],
   * regardless of whether or not it exists, a `PERMISSION_DENIED` error is
   * returned.
   *
   * If the
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet] to
   * update does not exist a `NOT_FOUND` error is returned.
   */
  sampleQuerySet:
    | SampleQuerySet
    | undefined;
  /**
   * Indicates which fields in the provided imported 'sample query set' to
   * update. If not set, will by default update all fields.
   */
  updateMask: string[] | undefined;
}

/**
 * Request message for
 * [SampleQuerySetService.DeleteSampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySetService.DeleteSampleQuerySet]
 * method.
 */
export interface DeleteSampleQuerySetRequest {
  /**
   * Required. Full resource name of
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet], such
   * as
   * `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`.
   *
   * If the caller does not have permission to delete the
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet],
   * regardless of whether or not it exists, a `PERMISSION_DENIED` error is
   * returned.
   *
   * If the
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet] to
   * delete does not exist, a `NOT_FOUND` error is returned.
   */
  name: string;
}

function createBaseGetSampleQuerySetRequest(): GetSampleQuerySetRequest {
  return { name: "" };
}

export const GetSampleQuerySetRequest: MessageFns<GetSampleQuerySetRequest> = {
  encode(message: GetSampleQuerySetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetSampleQuerySetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSampleQuerySetRequest();
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

  fromJSON(object: any): GetSampleQuerySetRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetSampleQuerySetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetSampleQuerySetRequest>): GetSampleQuerySetRequest {
    return GetSampleQuerySetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSampleQuerySetRequest>): GetSampleQuerySetRequest {
    const message = createBaseGetSampleQuerySetRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListSampleQuerySetsRequest(): ListSampleQuerySetsRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListSampleQuerySetsRequest: MessageFns<ListSampleQuerySetsRequest> = {
  encode(message: ListSampleQuerySetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListSampleQuerySetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSampleQuerySetsRequest();
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
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListSampleQuerySetsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListSampleQuerySetsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListSampleQuerySetsRequest>): ListSampleQuerySetsRequest {
    return ListSampleQuerySetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSampleQuerySetsRequest>): ListSampleQuerySetsRequest {
    const message = createBaseListSampleQuerySetsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListSampleQuerySetsResponse(): ListSampleQuerySetsResponse {
  return { sampleQuerySets: [], nextPageToken: "" };
}

export const ListSampleQuerySetsResponse: MessageFns<ListSampleQuerySetsResponse> = {
  encode(message: ListSampleQuerySetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.sampleQuerySets) {
      SampleQuerySet.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListSampleQuerySetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSampleQuerySetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sampleQuerySets.push(SampleQuerySet.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListSampleQuerySetsResponse {
    return {
      sampleQuerySets: globalThis.Array.isArray(object?.sampleQuerySets)
        ? object.sampleQuerySets.map((e: any) => SampleQuerySet.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListSampleQuerySetsResponse): unknown {
    const obj: any = {};
    if (message.sampleQuerySets?.length) {
      obj.sampleQuerySets = message.sampleQuerySets.map((e) => SampleQuerySet.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListSampleQuerySetsResponse>): ListSampleQuerySetsResponse {
    return ListSampleQuerySetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSampleQuerySetsResponse>): ListSampleQuerySetsResponse {
    const message = createBaseListSampleQuerySetsResponse();
    message.sampleQuerySets = object.sampleQuerySets?.map((e) => SampleQuerySet.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseCreateSampleQuerySetRequest(): CreateSampleQuerySetRequest {
  return { parent: "", sampleQuerySet: undefined, sampleQuerySetId: "" };
}

export const CreateSampleQuerySetRequest: MessageFns<CreateSampleQuerySetRequest> = {
  encode(message: CreateSampleQuerySetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.sampleQuerySet !== undefined) {
      SampleQuerySet.encode(message.sampleQuerySet, writer.uint32(18).fork()).join();
    }
    if (message.sampleQuerySetId !== "") {
      writer.uint32(26).string(message.sampleQuerySetId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateSampleQuerySetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSampleQuerySetRequest();
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

          message.sampleQuerySet = SampleQuerySet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sampleQuerySetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSampleQuerySetRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      sampleQuerySet: isSet(object.sampleQuerySet) ? SampleQuerySet.fromJSON(object.sampleQuerySet) : undefined,
      sampleQuerySetId: isSet(object.sampleQuerySetId) ? globalThis.String(object.sampleQuerySetId) : "",
    };
  },

  toJSON(message: CreateSampleQuerySetRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.sampleQuerySet !== undefined) {
      obj.sampleQuerySet = SampleQuerySet.toJSON(message.sampleQuerySet);
    }
    if (message.sampleQuerySetId !== "") {
      obj.sampleQuerySetId = message.sampleQuerySetId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateSampleQuerySetRequest>): CreateSampleQuerySetRequest {
    return CreateSampleQuerySetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateSampleQuerySetRequest>): CreateSampleQuerySetRequest {
    const message = createBaseCreateSampleQuerySetRequest();
    message.parent = object.parent ?? "";
    message.sampleQuerySet = (object.sampleQuerySet !== undefined && object.sampleQuerySet !== null)
      ? SampleQuerySet.fromPartial(object.sampleQuerySet)
      : undefined;
    message.sampleQuerySetId = object.sampleQuerySetId ?? "";
    return message;
  },
};

function createBaseUpdateSampleQuerySetRequest(): UpdateSampleQuerySetRequest {
  return { sampleQuerySet: undefined, updateMask: undefined };
}

export const UpdateSampleQuerySetRequest: MessageFns<UpdateSampleQuerySetRequest> = {
  encode(message: UpdateSampleQuerySetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sampleQuerySet !== undefined) {
      SampleQuerySet.encode(message.sampleQuerySet, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateSampleQuerySetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSampleQuerySetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sampleQuerySet = SampleQuerySet.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateSampleQuerySetRequest {
    return {
      sampleQuerySet: isSet(object.sampleQuerySet) ? SampleQuerySet.fromJSON(object.sampleQuerySet) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateSampleQuerySetRequest): unknown {
    const obj: any = {};
    if (message.sampleQuerySet !== undefined) {
      obj.sampleQuerySet = SampleQuerySet.toJSON(message.sampleQuerySet);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateSampleQuerySetRequest>): UpdateSampleQuerySetRequest {
    return UpdateSampleQuerySetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateSampleQuerySetRequest>): UpdateSampleQuerySetRequest {
    const message = createBaseUpdateSampleQuerySetRequest();
    message.sampleQuerySet = (object.sampleQuerySet !== undefined && object.sampleQuerySet !== null)
      ? SampleQuerySet.fromPartial(object.sampleQuerySet)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseDeleteSampleQuerySetRequest(): DeleteSampleQuerySetRequest {
  return { name: "" };
}

export const DeleteSampleQuerySetRequest: MessageFns<DeleteSampleQuerySetRequest> = {
  encode(message: DeleteSampleQuerySetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteSampleQuerySetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSampleQuerySetRequest();
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

  fromJSON(object: any): DeleteSampleQuerySetRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteSampleQuerySetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteSampleQuerySetRequest>): DeleteSampleQuerySetRequest {
    return DeleteSampleQuerySetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteSampleQuerySetRequest>): DeleteSampleQuerySetRequest {
    const message = createBaseDeleteSampleQuerySetRequest();
    message.name = object.name ?? "";
    return message;
  },
};

/**
 * Service for managing
 * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s,
 */
export type SampleQuerySetServiceDefinition = typeof SampleQuerySetServiceDefinition;
export const SampleQuerySetServiceDefinition = {
  name: "SampleQuerySetService",
  fullName: "google.cloud.discoveryengine.v1alpha.SampleQuerySetService",
  methods: {
    /**
     * Gets a
     * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
     */
    getSampleQuerySet: {
      name: "GetSampleQuerySet",
      requestType: GetSampleQuerySetRequest,
      requestStream: false,
      responseType: SampleQuerySet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              58,
              18,
              56,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
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
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              115,
              97,
              109,
              112,
              108,
              101,
              81,
              117,
              101,
              114,
              121,
              83,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Gets a list of
     * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s.
     */
    listSampleQuerySets: {
      name: "ListSampleQuerySets",
      requestType: ListSampleQuerySetsRequest,
      requestStream: false,
      responseType: ListSampleQuerySetsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              58,
              18,
              56,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
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
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              47,
              115,
              97,
              109,
              112,
              108,
              101,
              81,
              117,
              101,
              114,
              121,
              83,
              101,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Creates a
     * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]
     */
    createSampleQuerySet: {
      name: "CreateSampleQuerySet",
      requestType: CreateSampleQuerySetRequest,
      requestStream: false,
      responseType: SampleQuerySet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              43,
              112,
              97,
              114,
              101,
              110,
              116,
              44,
              115,
              97,
              109,
              112,
              108,
              101,
              95,
              113,
              117,
              101,
              114,
              121,
              95,
              115,
              101,
              116,
              44,
              115,
              97,
              109,
              112,
              108,
              101,
              95,
              113,
              117,
              101,
              114,
              121,
              95,
              115,
              101,
              116,
              95,
              105,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              76,
              58,
              16,
              115,
              97,
              109,
              112,
              108,
              101,
              95,
              113,
              117,
              101,
              114,
              121,
              95,
              115,
              101,
              116,
              34,
              56,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
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
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              47,
              115,
              97,
              109,
              112,
              108,
              101,
              81,
              117,
              101,
              114,
              121,
              83,
              101,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Updates a
     * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
     */
    updateSampleQuerySet: {
      name: "UpdateSampleQuerySet",
      requestType: UpdateSampleQuerySetRequest,
      requestStream: false,
      responseType: SampleQuerySet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              28,
              115,
              97,
              109,
              112,
              108,
              101,
              95,
              113,
              117,
              101,
              114,
              121,
              95,
              115,
              101,
              116,
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
              93,
              58,
              16,
              115,
              97,
              109,
              112,
              108,
              101,
              95,
              113,
              117,
              101,
              114,
              121,
              95,
              115,
              101,
              116,
              50,
              73,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              115,
              97,
              109,
              112,
              108,
              101,
              95,
              113,
              117,
              101,
              114,
              121,
              95,
              115,
              101,
              116,
              46,
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
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              115,
              97,
              109,
              112,
              108,
              101,
              81,
              117,
              101,
              114,
              121,
              83,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Deletes a
     * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
     */
    deleteSampleQuerySet: {
      name: "DeleteSampleQuerySet",
      requestType: DeleteSampleQuerySetRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              58,
              42,
              56,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
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
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              115,
              97,
              109,
              112,
              108,
              101,
              81,
              117,
              101,
              114,
              121,
              83,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface SampleQuerySetServiceImplementation<CallContextExt = {}> {
  /**
   * Gets a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
   */
  getSampleQuerySet(
    request: GetSampleQuerySetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SampleQuerySet>>;
  /**
   * Gets a list of
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s.
   */
  listSampleQuerySets(
    request: ListSampleQuerySetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListSampleQuerySetsResponse>>;
  /**
   * Creates a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]
   */
  createSampleQuerySet(
    request: CreateSampleQuerySetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SampleQuerySet>>;
  /**
   * Updates a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
   */
  updateSampleQuerySet(
    request: UpdateSampleQuerySetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SampleQuerySet>>;
  /**
   * Deletes a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
   */
  deleteSampleQuerySet(
    request: DeleteSampleQuerySetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
}

export interface SampleQuerySetServiceClient<CallOptionsExt = {}> {
  /**
   * Gets a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
   */
  getSampleQuerySet(
    request: DeepPartial<GetSampleQuerySetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SampleQuerySet>;
  /**
   * Gets a list of
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]s.
   */
  listSampleQuerySets(
    request: DeepPartial<ListSampleQuerySetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListSampleQuerySetsResponse>;
  /**
   * Creates a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet]
   */
  createSampleQuerySet(
    request: DeepPartial<CreateSampleQuerySetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SampleQuerySet>;
  /**
   * Updates a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
   */
  updateSampleQuerySet(
    request: DeepPartial<UpdateSampleQuerySetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SampleQuerySet>;
  /**
   * Deletes a
   * [SampleQuerySet][google.cloud.discoveryengine.v1alpha.SampleQuerySet].
   */
  deleteSampleQuerySet(
    request: DeepPartial<DeleteSampleQuerySetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
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
