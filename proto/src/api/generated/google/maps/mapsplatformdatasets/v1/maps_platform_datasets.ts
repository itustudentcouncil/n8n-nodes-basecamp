// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/mapsplatformdatasets/v1/maps_platform_datasets.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FieldMask } from "../../../protobuf/field_mask.js";
import { Status } from "../../../rpc/status.js";
import { Dataset } from "./dataset.js";

export const protobufPackage = "google.maps.mapsplatformdatasets.v1";

/** Request to create a maps dataset. */
export interface CreateDatasetRequest {
  /**
   * Required. Parent project that will own the dataset.
   * Format: projects/{project}
   */
  parent: string;
  /** Required. The dataset version to create. */
  dataset: Dataset | undefined;
}

/** Request to update the metadata fields of the dataset. */
export interface UpdateDatasetMetadataRequest {
  /**
   * Required. Resource name of the dataset to update.
   * Format: projects/{project}/datasets/{dataset_id}
   */
  dataset:
    | Dataset
    | undefined;
  /**
   * The list of fields to be updated.
   *
   * The value "*" is used for full replacement (default).
   */
  updateMask: string[] | undefined;
}

/** Request to get the specified dataset. */
export interface GetDatasetRequest {
  /**
   * Required. Resource name.
   * Format: projects/{project}/datasets/{dataset_id}
   *
   * Can also fetch some special versions by appending "@" and a tag.
   * Format: projects/{project}/datasets/{dataset_id}@{tag}
   *
   * Tag "active": The info of the latest completed version will be included,
   * and NOT_FOUND if the dataset does not have one.
   */
  name: string;
}

/** Request to list datasets for the project. */
export interface ListDatasetsRequest {
  /**
   * Required. The name of the project to list all the datasets for.
   * Format: projects/{project}
   */
  parent: string;
  /**
   * The maximum number of datasets to return per page.
   *
   * If unspecified (or zero), all datasets will be returned.
   */
  pageSize: number;
  /**
   * The page token, received from a previous ListDatasets call.
   * Provide this to retrieve the subsequent page.
   */
  pageToken: string;
  /**
   * The tag that specifies the desired version for each dataset.
   *
   * Note that when pagination is also specified, some filtering can happen
   * after pagination, which may cause the response to contain fewer datasets
   * than the page size, even if it's not the last page.
   *
   * Tag "active": Each dataset in the response will include the info of its
   * latest completed version, and the dataset will be skipped if it does not
   * have one.
   */
  tag: string;
}

/** Response object of ListDatasets. */
export interface ListDatasetsResponse {
  /** All the datasets for the project. */
  datasets: Dataset[];
  /**
   * A token that can be sent as `page_token` to retrieve the next page.
   *
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

/** Request to list detailed errors belonging to a dataset. */
export interface FetchDatasetErrorsRequest {
  /**
   * Required. The name of the dataset to list all the errors for.
   * Format: projects/{project}/datasets/{dataset_id}
   */
  dataset: string;
  /**
   * The maximum number of errors to return per page.
   *
   * The maximum value is 500; values above 500 will be capped to 500.
   *
   * If unspecified, at most 50 errors will be returned.
   */
  pageSize: number;
  /**
   * The page token, received from a previous ListDatasetErrors call.
   * Provide this to retrieve the subsequent page.
   */
  pageToken: string;
}

/** Response object of FetchDatasetErrors. */
export interface FetchDatasetErrorsResponse {
  /**
   * A token that can be sent as `page_token` to retrieve the next page.
   *
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
  /** The errors associated with a dataset. */
  errors: Status[];
}

/** Request to delete a dataset. */
export interface DeleteDatasetRequest {
  /**
   * Required. The name of the dataset to delete.
   * Format: projects/{project}/datasets/{dataset_id}
   */
  name: string;
}

function createBaseCreateDatasetRequest(): CreateDatasetRequest {
  return { parent: "", dataset: undefined };
}

export const CreateDatasetRequest: MessageFns<CreateDatasetRequest> = {
  encode(message: CreateDatasetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.dataset !== undefined) {
      Dataset.encode(message.dataset, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateDatasetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatasetRequest();
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

          message.dataset = Dataset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDatasetRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      dataset: isSet(object.dataset) ? Dataset.fromJSON(object.dataset) : undefined,
    };
  },

  toJSON(message: CreateDatasetRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.dataset !== undefined) {
      obj.dataset = Dataset.toJSON(message.dataset);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateDatasetRequest>): CreateDatasetRequest {
    return CreateDatasetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateDatasetRequest>): CreateDatasetRequest {
    const message = createBaseCreateDatasetRequest();
    message.parent = object.parent ?? "";
    message.dataset = (object.dataset !== undefined && object.dataset !== null)
      ? Dataset.fromPartial(object.dataset)
      : undefined;
    return message;
  },
};

function createBaseUpdateDatasetMetadataRequest(): UpdateDatasetMetadataRequest {
  return { dataset: undefined, updateMask: undefined };
}

export const UpdateDatasetMetadataRequest: MessageFns<UpdateDatasetMetadataRequest> = {
  encode(message: UpdateDatasetMetadataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dataset !== undefined) {
      Dataset.encode(message.dataset, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateDatasetMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDatasetMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataset = Dataset.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateDatasetMetadataRequest {
    return {
      dataset: isSet(object.dataset) ? Dataset.fromJSON(object.dataset) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateDatasetMetadataRequest): unknown {
    const obj: any = {};
    if (message.dataset !== undefined) {
      obj.dataset = Dataset.toJSON(message.dataset);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateDatasetMetadataRequest>): UpdateDatasetMetadataRequest {
    return UpdateDatasetMetadataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateDatasetMetadataRequest>): UpdateDatasetMetadataRequest {
    const message = createBaseUpdateDatasetMetadataRequest();
    message.dataset = (object.dataset !== undefined && object.dataset !== null)
      ? Dataset.fromPartial(object.dataset)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseGetDatasetRequest(): GetDatasetRequest {
  return { name: "" };
}

export const GetDatasetRequest: MessageFns<GetDatasetRequest> = {
  encode(message: GetDatasetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetDatasetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDatasetRequest();
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

  fromJSON(object: any): GetDatasetRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetDatasetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetDatasetRequest>): GetDatasetRequest {
    return GetDatasetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetDatasetRequest>): GetDatasetRequest {
    const message = createBaseGetDatasetRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListDatasetsRequest(): ListDatasetsRequest {
  return { parent: "", pageSize: 0, pageToken: "", tag: "" };
}

export const ListDatasetsRequest: MessageFns<ListDatasetsRequest> = {
  encode(message: ListDatasetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.tag !== "") {
      writer.uint32(34).string(message.tag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListDatasetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDatasetsRequest();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListDatasetsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
    };
  },

  toJSON(message: ListDatasetsRequest): unknown {
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
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    return obj;
  },

  create(base?: DeepPartial<ListDatasetsRequest>): ListDatasetsRequest {
    return ListDatasetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListDatasetsRequest>): ListDatasetsRequest {
    const message = createBaseListDatasetsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

function createBaseListDatasetsResponse(): ListDatasetsResponse {
  return { datasets: [], nextPageToken: "" };
}

export const ListDatasetsResponse: MessageFns<ListDatasetsResponse> = {
  encode(message: ListDatasetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.datasets) {
      Dataset.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListDatasetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDatasetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datasets.push(Dataset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDatasetsResponse {
    return {
      datasets: globalThis.Array.isArray(object?.datasets) ? object.datasets.map((e: any) => Dataset.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListDatasetsResponse): unknown {
    const obj: any = {};
    if (message.datasets?.length) {
      obj.datasets = message.datasets.map((e) => Dataset.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListDatasetsResponse>): ListDatasetsResponse {
    return ListDatasetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListDatasetsResponse>): ListDatasetsResponse {
    const message = createBaseListDatasetsResponse();
    message.datasets = object.datasets?.map((e) => Dataset.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseFetchDatasetErrorsRequest(): FetchDatasetErrorsRequest {
  return { dataset: "", pageSize: 0, pageToken: "" };
}

export const FetchDatasetErrorsRequest: MessageFns<FetchDatasetErrorsRequest> = {
  encode(message: FetchDatasetErrorsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dataset !== "") {
      writer.uint32(10).string(message.dataset);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FetchDatasetErrorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchDatasetErrorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataset = reader.string();
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

  fromJSON(object: any): FetchDatasetErrorsRequest {
    return {
      dataset: isSet(object.dataset) ? globalThis.String(object.dataset) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: FetchDatasetErrorsRequest): unknown {
    const obj: any = {};
    if (message.dataset !== "") {
      obj.dataset = message.dataset;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<FetchDatasetErrorsRequest>): FetchDatasetErrorsRequest {
    return FetchDatasetErrorsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FetchDatasetErrorsRequest>): FetchDatasetErrorsRequest {
    const message = createBaseFetchDatasetErrorsRequest();
    message.dataset = object.dataset ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseFetchDatasetErrorsResponse(): FetchDatasetErrorsResponse {
  return { nextPageToken: "", errors: [] };
}

export const FetchDatasetErrorsResponse: MessageFns<FetchDatasetErrorsResponse> = {
  encode(message: FetchDatasetErrorsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    for (const v of message.errors) {
      Status.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FetchDatasetErrorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchDatasetErrorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.errors.push(Status.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchDatasetErrorsResponse {
    return {
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e: any) => Status.fromJSON(e)) : [],
    };
  },

  toJSON(message: FetchDatasetErrorsResponse): unknown {
    const obj: any = {};
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.errors?.length) {
      obj.errors = message.errors.map((e) => Status.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<FetchDatasetErrorsResponse>): FetchDatasetErrorsResponse {
    return FetchDatasetErrorsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FetchDatasetErrorsResponse>): FetchDatasetErrorsResponse {
    const message = createBaseFetchDatasetErrorsResponse();
    message.nextPageToken = object.nextPageToken ?? "";
    message.errors = object.errors?.map((e) => Status.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteDatasetRequest(): DeleteDatasetRequest {
  return { name: "" };
}

export const DeleteDatasetRequest: MessageFns<DeleteDatasetRequest> = {
  encode(message: DeleteDatasetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteDatasetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDatasetRequest();
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

  fromJSON(object: any): DeleteDatasetRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteDatasetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteDatasetRequest>): DeleteDatasetRequest {
    return DeleteDatasetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteDatasetRequest>): DeleteDatasetRequest {
    const message = createBaseDeleteDatasetRequest();
    message.name = object.name ?? "";
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