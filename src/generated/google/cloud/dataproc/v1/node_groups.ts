// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/dataproc/v1/node_groups.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Operation } from "../../../longrunning/operations.js";
import { Duration } from "../../../protobuf/duration.js";
import { NodeGroup } from "./clusters.js";

export const protobufPackage = "google.cloud.dataproc.v1";

/** A request to create a node group. */
export interface CreateNodeGroupRequest {
  /**
   * Required. The parent resource where this node group will be created.
   * Format: `projects/{project}/regions/{region}/clusters/{cluster}`
   */
  parent: string;
  /** Required. The node group to create. */
  nodeGroup:
    | NodeGroup
    | undefined;
  /**
   * Optional. An optional node group ID. Generated if not specified.
   *
   * The ID must contain only letters (a-z, A-Z), numbers (0-9),
   * underscores (_), and hyphens (-). Cannot begin or end with underscore
   * or hyphen. Must consist of from 3 to 33 characters.
   */
  nodeGroupId: string;
  /**
   * Optional. A unique ID used to identify the request. If the server receives
   * two
   * [CreateNodeGroupRequest](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequests)
   * with the same ID, the second request is ignored and the
   * first [google.longrunning.Operation][google.longrunning.Operation] created
   * and stored in the backend is returned.
   *
   * Recommendation: Set this value to a
   * [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   * The ID must contain only letters (a-z, A-Z), numbers (0-9),
   * underscores (_), and hyphens (-). The maximum length is 40 characters.
   */
  requestId: string;
}

/** A request to resize a node group. */
export interface ResizeNodeGroupRequest {
  /**
   * Required. The name of the node group to resize.
   * Format:
   * `projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}`
   */
  name: string;
  /**
   * Required. The number of running instances for the node group to maintain.
   * The group adds or removes instances to maintain the number of instances
   * specified by this parameter.
   */
  size: number;
  /**
   * Optional. A unique ID used to identify the request. If the server receives
   * two
   * [ResizeNodeGroupRequest](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests)
   * with the same ID, the second request is ignored and the
   * first [google.longrunning.Operation][google.longrunning.Operation] created
   * and stored in the backend is returned.
   *
   * Recommendation: Set this value to a
   * [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   * The ID must contain only letters (a-z, A-Z), numbers (0-9),
   * underscores (_), and hyphens (-). The maximum length is 40 characters.
   */
  requestId: string;
  /**
   * Optional. Timeout for graceful YARN decommissioning. [Graceful
   * decommissioning]
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning)
   * allows the removal of nodes from the Compute Engine node group
   * without interrupting jobs in progress. This timeout specifies how long to
   * wait for jobs in progress to finish before forcefully removing nodes (and
   * potentially interrupting jobs). Default timeout is 0 (for forceful
   * decommission), and the maximum allowed timeout is 1 day. (see JSON
   * representation of
   * [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).
   *
   * Only supported on Dataproc image versions 1.2 and higher.
   */
  gracefulDecommissionTimeout: Duration | undefined;
}

/** A request to get a node group . */
export interface GetNodeGroupRequest {
  /**
   * Required. The name of the node group to retrieve.
   * Format:
   * `projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}`
   */
  name: string;
}

function createBaseCreateNodeGroupRequest(): CreateNodeGroupRequest {
  return { parent: "", nodeGroup: undefined, nodeGroupId: "", requestId: "" };
}

export const CreateNodeGroupRequest: MessageFns<CreateNodeGroupRequest> = {
  encode(message: CreateNodeGroupRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.nodeGroup !== undefined) {
      NodeGroup.encode(message.nodeGroup, writer.uint32(18).fork()).join();
    }
    if (message.nodeGroupId !== "") {
      writer.uint32(34).string(message.nodeGroupId);
    }
    if (message.requestId !== "") {
      writer.uint32(26).string(message.requestId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateNodeGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNodeGroupRequest();
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

          message.nodeGroup = NodeGroup.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nodeGroupId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateNodeGroupRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      nodeGroup: isSet(object.nodeGroup) ? NodeGroup.fromJSON(object.nodeGroup) : undefined,
      nodeGroupId: isSet(object.nodeGroupId) ? globalThis.String(object.nodeGroupId) : "",
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
    };
  },

  toJSON(message: CreateNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.nodeGroup !== undefined) {
      obj.nodeGroup = NodeGroup.toJSON(message.nodeGroup);
    }
    if (message.nodeGroupId !== "") {
      obj.nodeGroupId = message.nodeGroupId;
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateNodeGroupRequest>): CreateNodeGroupRequest {
    return CreateNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateNodeGroupRequest>): CreateNodeGroupRequest {
    const message = createBaseCreateNodeGroupRequest();
    message.parent = object.parent ?? "";
    message.nodeGroup = (object.nodeGroup !== undefined && object.nodeGroup !== null)
      ? NodeGroup.fromPartial(object.nodeGroup)
      : undefined;
    message.nodeGroupId = object.nodeGroupId ?? "";
    message.requestId = object.requestId ?? "";
    return message;
  },
};

function createBaseResizeNodeGroupRequest(): ResizeNodeGroupRequest {
  return { name: "", size: 0, requestId: "", gracefulDecommissionTimeout: undefined };
}

export const ResizeNodeGroupRequest: MessageFns<ResizeNodeGroupRequest> = {
  encode(message: ResizeNodeGroupRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(16).int32(message.size);
    }
    if (message.requestId !== "") {
      writer.uint32(26).string(message.requestId);
    }
    if (message.gracefulDecommissionTimeout !== undefined) {
      Duration.encode(message.gracefulDecommissionTimeout, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResizeNodeGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResizeNodeGroupRequest();
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

          message.size = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gracefulDecommissionTimeout = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResizeNodeGroupRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      gracefulDecommissionTimeout: isSet(object.gracefulDecommissionTimeout)
        ? Duration.fromJSON(object.gracefulDecommissionTimeout)
        : undefined,
    };
  },

  toJSON(message: ResizeNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.gracefulDecommissionTimeout !== undefined) {
      obj.gracefulDecommissionTimeout = Duration.toJSON(message.gracefulDecommissionTimeout);
    }
    return obj;
  },

  create(base?: DeepPartial<ResizeNodeGroupRequest>): ResizeNodeGroupRequest {
    return ResizeNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResizeNodeGroupRequest>): ResizeNodeGroupRequest {
    const message = createBaseResizeNodeGroupRequest();
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.requestId = object.requestId ?? "";
    message.gracefulDecommissionTimeout =
      (object.gracefulDecommissionTimeout !== undefined && object.gracefulDecommissionTimeout !== null)
        ? Duration.fromPartial(object.gracefulDecommissionTimeout)
        : undefined;
    return message;
  },
};

function createBaseGetNodeGroupRequest(): GetNodeGroupRequest {
  return { name: "" };
}

export const GetNodeGroupRequest: MessageFns<GetNodeGroupRequest> = {
  encode(message: GetNodeGroupRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetNodeGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeGroupRequest();
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

  fromJSON(object: any): GetNodeGroupRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetNodeGroupRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetNodeGroupRequest>): GetNodeGroupRequest {
    return GetNodeGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetNodeGroupRequest>): GetNodeGroupRequest {
    const message = createBaseGetNodeGroupRequest();
    message.name = object.name ?? "";
    return message;
  },
};

/**
 * The `NodeGroupControllerService` provides methods to manage node groups
 * of Compute Engine managed instances.
 */
export type NodeGroupControllerDefinition = typeof NodeGroupControllerDefinition;
export const NodeGroupControllerDefinition = {
  name: "NodeGroupController",
  fullName: "google.cloud.dataproc.v1.NodeGroupController",
  methods: {
    /**
     * Creates a node group in a cluster. The returned
     * [Operation.metadata][google.longrunning.Operation.metadata] is
     * [NodeGroupOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
     */
    createNodeGroup: {
      name: "CreateNodeGroup",
      requestType: CreateNodeGroupRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              64,
              10,
              9,
              78,
              111,
              100,
              101,
              71,
              114,
              111,
              117,
              112,
              18,
              51,
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
              97,
              116,
              97,
              112,
              114,
              111,
              99,
              46,
              118,
              49,
              46,
              78,
              111,
              100,
              101,
              71,
              114,
              111,
              117,
              112,
              79,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
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
          8410: [
            Buffer.from([
              31,
              112,
              97,
              114,
              101,
              110,
              116,
              44,
              110,
              111,
              100,
              101,
              95,
              103,
              114,
              111,
              117,
              112,
              44,
              110,
              111,
              100,
              101,
              95,
              103,
              114,
              111,
              117,
              112,
              95,
              105,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              69,
              58,
              10,
              110,
              111,
              100,
              101,
              95,
              103,
              114,
              111,
              117,
              112,
              34,
              55,
              47,
              118,
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
              47,
              114,
              101,
              103,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              99,
              108,
              117,
              115,
              116,
              101,
              114,
              115,
              47,
              42,
              125,
              47,
              110,
              111,
              100,
              101,
              71,
              114,
              111,
              117,
              112,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Resizes a node group in a cluster. The returned
     * [Operation.metadata][google.longrunning.Operation.metadata] is
     * [NodeGroupOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
     */
    resizeNodeGroup: {
      name: "ResizeNodeGroup",
      requestType: ResizeNodeGroupRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              64,
              10,
              9,
              78,
              111,
              100,
              101,
              71,
              114,
              111,
              117,
              112,
              18,
              51,
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
              97,
              116,
              97,
              112,
              114,
              111,
              99,
              46,
              118,
              49,
              46,
              78,
              111,
              100,
              101,
              71,
              114,
              111,
              117,
              112,
              79,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
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
          8410: [Buffer.from([9, 110, 97, 109, 101, 44, 115, 105, 122, 101])],
          578365826: [
            Buffer.from([
              67,
              58,
              1,
              42,
              34,
              62,
              47,
              118,
              49,
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
              114,
              101,
              103,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              99,
              108,
              117,
              115,
              116,
              101,
              114,
              115,
              47,
              42,
              47,
              110,
              111,
              100,
              101,
              71,
              114,
              111,
              117,
              112,
              115,
              47,
              42,
              125,
              58,
              114,
              101,
              115,
              105,
              122,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Gets the resource representation for a node group in a
     * cluster.
     */
    getNodeGroup: {
      name: "GetNodeGroup",
      requestType: GetNodeGroupRequest,
      requestStream: false,
      responseType: NodeGroup,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              57,
              18,
              55,
              47,
              118,
              49,
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
              114,
              101,
              103,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              99,
              108,
              117,
              115,
              116,
              101,
              114,
              115,
              47,
              42,
              47,
              110,
              111,
              100,
              101,
              71,
              114,
              111,
              117,
              112,
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

export interface NodeGroupControllerServiceImplementation<CallContextExt = {}> {
  /**
   * Creates a node group in a cluster. The returned
   * [Operation.metadata][google.longrunning.Operation.metadata] is
   * [NodeGroupOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
   */
  createNodeGroup(
    request: CreateNodeGroupRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
  /**
   * Resizes a node group in a cluster. The returned
   * [Operation.metadata][google.longrunning.Operation.metadata] is
   * [NodeGroupOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
   */
  resizeNodeGroup(
    request: ResizeNodeGroupRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
  /**
   * Gets the resource representation for a node group in a
   * cluster.
   */
  getNodeGroup(request: GetNodeGroupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<NodeGroup>>;
}

export interface NodeGroupControllerClient<CallOptionsExt = {}> {
  /**
   * Creates a node group in a cluster. The returned
   * [Operation.metadata][google.longrunning.Operation.metadata] is
   * [NodeGroupOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
   */
  createNodeGroup(
    request: DeepPartial<CreateNodeGroupRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
  /**
   * Resizes a node group in a cluster. The returned
   * [Operation.metadata][google.longrunning.Operation.metadata] is
   * [NodeGroupOperationMetadata](https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
   */
  resizeNodeGroup(
    request: DeepPartial<ResizeNodeGroupRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
  /**
   * Gets the resource representation for a node group in a
   * cluster.
   */
  getNodeGroup(request: DeepPartial<GetNodeGroupRequest>, options?: CallOptions & CallOptionsExt): Promise<NodeGroup>;
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
