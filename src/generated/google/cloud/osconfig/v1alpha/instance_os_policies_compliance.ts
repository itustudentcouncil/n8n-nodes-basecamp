// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/osconfig/v1alpha/instance_os_policies_compliance.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import {
  OSPolicyComplianceState,
  oSPolicyComplianceStateFromJSON,
  oSPolicyComplianceStateToJSON,
  OSPolicyResourceCompliance,
} from "./config_common.js";

export const protobufPackage = "google.cloud.osconfig.v1alpha";

/**
 * This API resource represents the OS policies compliance data for a Compute
 * Engine virtual machine (VM) instance at a given point in time.
 *
 * A Compute Engine VM can have multiple OS policy assignments, and each
 * assignment can have multiple OS policies. As a result, multiple OS policies
 * could be applied to a single VM.
 *
 * You can use this API resource to determine both the compliance state of your
 * VM as well as the compliance state of an individual OS policy.
 *
 * For more information, see [View
 * compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
 *
 * @deprecated
 */
export interface InstanceOSPoliciesCompliance {
  /**
   * Output only. The `InstanceOSPoliciesCompliance` API resource name.
   *
   * Format:
   * `projects/{project_number}/locations/{location}/instanceOSPoliciesCompliances/{instance_id}`
   */
  name: string;
  /** Output only. The Compute Engine VM instance name. */
  instance: string;
  /** Output only. Compliance state of the VM. */
  state: OSPolicyComplianceState;
  /**
   * Output only. Detailed compliance state of the VM.
   * This field is populated only when compliance state is `UNKNOWN`.
   *
   * It may contain one of the following values:
   *
   * * `no-compliance-data`: Compliance data is not available for this VM.
   * * `no-agent-detected`: OS Config agent is not detected for this VM.
   * * `config-not-supported-by-agent`: The version of the OS Config agent
   * running on this VM does not support configuration management.
   * * `inactive`: VM is not running.
   * * `internal-service-errors`: There were internal service errors encountered
   * while enforcing compliance.
   * * `agent-errors`: OS config agent encountered errors while enforcing
   * compliance.
   */
  detailedState: string;
  /** Output only. The reason for the `detailed_state` of the VM (if any). */
  detailedStateReason: string;
  /** Output only. Compliance data for each `OSPolicy` that is applied to the VM. */
  osPolicyCompliances: InstanceOSPoliciesCompliance_OSPolicyCompliance[];
  /** Output only. Timestamp of the last compliance check for the VM. */
  lastComplianceCheckTime:
    | Date
    | undefined;
  /**
   * Output only. Unique identifier for the last compliance run.
   * This id will be logged by the OS config agent during a compliance run and
   * can be used for debugging and tracing purpose.
   */
  lastComplianceRunId: string;
}

/**
 * Compliance data for an OS policy
 *
 * @deprecated
 */
export interface InstanceOSPoliciesCompliance_OSPolicyCompliance {
  /** The OS policy id */
  osPolicyId: string;
  /**
   * Reference to the `OSPolicyAssignment` API resource that the `OSPolicy`
   * belongs to.
   *
   * Format:
   * `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`
   */
  osPolicyAssignment: string;
  /** Compliance state of the OS policy. */
  state: OSPolicyComplianceState;
  /**
   * Compliance data for each `OSPolicyResource` that is applied to the
   * VM.
   */
  osPolicyResourceCompliances: OSPolicyResourceCompliance[];
}

/**
 * A request message for getting OS policies compliance data for the given
 * Compute Engine VM instance.
 *
 * @deprecated
 */
export interface GetInstanceOSPoliciesComplianceRequest {
  /**
   * Required. API resource name for instance OS policies compliance resource.
   *
   * Format:
   * `projects/{project}/locations/{location}/instanceOSPoliciesCompliances/{instance}`
   *
   * For `{project}`, either Compute Engine project-number or project-id can be
   * provided.
   * For `{instance}`, either Compute Engine VM instance-id or instance-name can
   * be provided.
   */
  name: string;
}

/**
 * A request message for listing OS policies compliance data for all Compute
 * Engine VMs in the given location.
 *
 * @deprecated
 */
export interface ListInstanceOSPoliciesCompliancesRequest {
  /**
   * Required. The parent resource name.
   *
   * Format: `projects/{project}/locations/{location}`
   *
   * For `{project}`, either Compute Engine project-number or project-id can be
   * provided.
   */
  parent: string;
  /** The maximum number of results to return. */
  pageSize: number;
  /**
   * A pagination token returned from a previous call to
   * `ListInstanceOSPoliciesCompliances` that indicates where this listing
   * should continue from.
   */
  pageToken: string;
  /**
   * If provided, this field specifies the criteria that must be met by a
   * `InstanceOSPoliciesCompliance` API resource to be included in the response.
   */
  filter: string;
}

/**
 * A response message for listing OS policies compliance data for all Compute
 * Engine VMs in the given location.
 *
 * @deprecated
 */
export interface ListInstanceOSPoliciesCompliancesResponse {
  /** List of instance OS policies compliance objects. */
  instanceOsPoliciesCompliances: InstanceOSPoliciesCompliance[];
  /**
   * The pagination token to retrieve the next page of instance OS policies
   * compliance objects.
   */
  nextPageToken: string;
}

function createBaseInstanceOSPoliciesCompliance(): InstanceOSPoliciesCompliance {
  return {
    name: "",
    instance: "",
    state: 0,
    detailedState: "",
    detailedStateReason: "",
    osPolicyCompliances: [],
    lastComplianceCheckTime: undefined,
    lastComplianceRunId: "",
  };
}

export const InstanceOSPoliciesCompliance: MessageFns<InstanceOSPoliciesCompliance> = {
  encode(message: InstanceOSPoliciesCompliance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.detailedState !== "") {
      writer.uint32(34).string(message.detailedState);
    }
    if (message.detailedStateReason !== "") {
      writer.uint32(42).string(message.detailedStateReason);
    }
    for (const v of message.osPolicyCompliances) {
      InstanceOSPoliciesCompliance_OSPolicyCompliance.encode(v!, writer.uint32(50).fork()).join();
    }
    if (message.lastComplianceCheckTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastComplianceCheckTime), writer.uint32(58).fork()).join();
    }
    if (message.lastComplianceRunId !== "") {
      writer.uint32(66).string(message.lastComplianceRunId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InstanceOSPoliciesCompliance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceOSPoliciesCompliance();
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
          if (tag !== 18) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.detailedState = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.detailedStateReason = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.osPolicyCompliances.push(
            InstanceOSPoliciesCompliance_OSPolicyCompliance.decode(reader, reader.uint32()),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastComplianceCheckTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.lastComplianceRunId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstanceOSPoliciesCompliance {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      state: isSet(object.state) ? oSPolicyComplianceStateFromJSON(object.state) : 0,
      detailedState: isSet(object.detailedState) ? globalThis.String(object.detailedState) : "",
      detailedStateReason: isSet(object.detailedStateReason) ? globalThis.String(object.detailedStateReason) : "",
      osPolicyCompliances: globalThis.Array.isArray(object?.osPolicyCompliances)
        ? object.osPolicyCompliances.map((e: any) => InstanceOSPoliciesCompliance_OSPolicyCompliance.fromJSON(e))
        : [],
      lastComplianceCheckTime: isSet(object.lastComplianceCheckTime)
        ? fromJsonTimestamp(object.lastComplianceCheckTime)
        : undefined,
      lastComplianceRunId: isSet(object.lastComplianceRunId) ? globalThis.String(object.lastComplianceRunId) : "",
    };
  },

  toJSON(message: InstanceOSPoliciesCompliance): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.state !== 0) {
      obj.state = oSPolicyComplianceStateToJSON(message.state);
    }
    if (message.detailedState !== "") {
      obj.detailedState = message.detailedState;
    }
    if (message.detailedStateReason !== "") {
      obj.detailedStateReason = message.detailedStateReason;
    }
    if (message.osPolicyCompliances?.length) {
      obj.osPolicyCompliances = message.osPolicyCompliances.map((e) =>
        InstanceOSPoliciesCompliance_OSPolicyCompliance.toJSON(e)
      );
    }
    if (message.lastComplianceCheckTime !== undefined) {
      obj.lastComplianceCheckTime = message.lastComplianceCheckTime.toISOString();
    }
    if (message.lastComplianceRunId !== "") {
      obj.lastComplianceRunId = message.lastComplianceRunId;
    }
    return obj;
  },

  create(base?: DeepPartial<InstanceOSPoliciesCompliance>): InstanceOSPoliciesCompliance {
    return InstanceOSPoliciesCompliance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstanceOSPoliciesCompliance>): InstanceOSPoliciesCompliance {
    const message = createBaseInstanceOSPoliciesCompliance();
    message.name = object.name ?? "";
    message.instance = object.instance ?? "";
    message.state = object.state ?? 0;
    message.detailedState = object.detailedState ?? "";
    message.detailedStateReason = object.detailedStateReason ?? "";
    message.osPolicyCompliances =
      object.osPolicyCompliances?.map((e) => InstanceOSPoliciesCompliance_OSPolicyCompliance.fromPartial(e)) || [];
    message.lastComplianceCheckTime = object.lastComplianceCheckTime ?? undefined;
    message.lastComplianceRunId = object.lastComplianceRunId ?? "";
    return message;
  },
};

function createBaseInstanceOSPoliciesCompliance_OSPolicyCompliance(): InstanceOSPoliciesCompliance_OSPolicyCompliance {
  return { osPolicyId: "", osPolicyAssignment: "", state: 0, osPolicyResourceCompliances: [] };
}

export const InstanceOSPoliciesCompliance_OSPolicyCompliance: MessageFns<
  InstanceOSPoliciesCompliance_OSPolicyCompliance
> = {
  encode(
    message: InstanceOSPoliciesCompliance_OSPolicyCompliance,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.osPolicyId !== "") {
      writer.uint32(10).string(message.osPolicyId);
    }
    if (message.osPolicyAssignment !== "") {
      writer.uint32(18).string(message.osPolicyAssignment);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    for (const v of message.osPolicyResourceCompliances) {
      OSPolicyResourceCompliance.encode(v!, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InstanceOSPoliciesCompliance_OSPolicyCompliance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceOSPoliciesCompliance_OSPolicyCompliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.osPolicyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.osPolicyAssignment = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.osPolicyResourceCompliances.push(OSPolicyResourceCompliance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstanceOSPoliciesCompliance_OSPolicyCompliance {
    return {
      osPolicyId: isSet(object.osPolicyId) ? globalThis.String(object.osPolicyId) : "",
      osPolicyAssignment: isSet(object.osPolicyAssignment) ? globalThis.String(object.osPolicyAssignment) : "",
      state: isSet(object.state) ? oSPolicyComplianceStateFromJSON(object.state) : 0,
      osPolicyResourceCompliances: globalThis.Array.isArray(object?.osPolicyResourceCompliances)
        ? object.osPolicyResourceCompliances.map((e: any) => OSPolicyResourceCompliance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: InstanceOSPoliciesCompliance_OSPolicyCompliance): unknown {
    const obj: any = {};
    if (message.osPolicyId !== "") {
      obj.osPolicyId = message.osPolicyId;
    }
    if (message.osPolicyAssignment !== "") {
      obj.osPolicyAssignment = message.osPolicyAssignment;
    }
    if (message.state !== 0) {
      obj.state = oSPolicyComplianceStateToJSON(message.state);
    }
    if (message.osPolicyResourceCompliances?.length) {
      obj.osPolicyResourceCompliances = message.osPolicyResourceCompliances.map((e) =>
        OSPolicyResourceCompliance.toJSON(e)
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<InstanceOSPoliciesCompliance_OSPolicyCompliance>,
  ): InstanceOSPoliciesCompliance_OSPolicyCompliance {
    return InstanceOSPoliciesCompliance_OSPolicyCompliance.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<InstanceOSPoliciesCompliance_OSPolicyCompliance>,
  ): InstanceOSPoliciesCompliance_OSPolicyCompliance {
    const message = createBaseInstanceOSPoliciesCompliance_OSPolicyCompliance();
    message.osPolicyId = object.osPolicyId ?? "";
    message.osPolicyAssignment = object.osPolicyAssignment ?? "";
    message.state = object.state ?? 0;
    message.osPolicyResourceCompliances =
      object.osPolicyResourceCompliances?.map((e) => OSPolicyResourceCompliance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetInstanceOSPoliciesComplianceRequest(): GetInstanceOSPoliciesComplianceRequest {
  return { name: "" };
}

export const GetInstanceOSPoliciesComplianceRequest: MessageFns<GetInstanceOSPoliciesComplianceRequest> = {
  encode(message: GetInstanceOSPoliciesComplianceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetInstanceOSPoliciesComplianceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceOSPoliciesComplianceRequest();
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

  fromJSON(object: any): GetInstanceOSPoliciesComplianceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetInstanceOSPoliciesComplianceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetInstanceOSPoliciesComplianceRequest>): GetInstanceOSPoliciesComplianceRequest {
    return GetInstanceOSPoliciesComplianceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInstanceOSPoliciesComplianceRequest>): GetInstanceOSPoliciesComplianceRequest {
    const message = createBaseGetInstanceOSPoliciesComplianceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListInstanceOSPoliciesCompliancesRequest(): ListInstanceOSPoliciesCompliancesRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListInstanceOSPoliciesCompliancesRequest: MessageFns<ListInstanceOSPoliciesCompliancesRequest> = {
  encode(message: ListInstanceOSPoliciesCompliancesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListInstanceOSPoliciesCompliancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceOSPoliciesCompliancesRequest();
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

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInstanceOSPoliciesCompliancesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListInstanceOSPoliciesCompliancesRequest): unknown {
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
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create(base?: DeepPartial<ListInstanceOSPoliciesCompliancesRequest>): ListInstanceOSPoliciesCompliancesRequest {
    return ListInstanceOSPoliciesCompliancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstanceOSPoliciesCompliancesRequest>): ListInstanceOSPoliciesCompliancesRequest {
    const message = createBaseListInstanceOSPoliciesCompliancesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListInstanceOSPoliciesCompliancesResponse(): ListInstanceOSPoliciesCompliancesResponse {
  return { instanceOsPoliciesCompliances: [], nextPageToken: "" };
}

export const ListInstanceOSPoliciesCompliancesResponse: MessageFns<ListInstanceOSPoliciesCompliancesResponse> = {
  encode(message: ListInstanceOSPoliciesCompliancesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.instanceOsPoliciesCompliances) {
      InstanceOSPoliciesCompliance.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListInstanceOSPoliciesCompliancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceOSPoliciesCompliancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceOsPoliciesCompliances.push(InstanceOSPoliciesCompliance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstanceOSPoliciesCompliancesResponse {
    return {
      instanceOsPoliciesCompliances: globalThis.Array.isArray(object?.instanceOsPoliciesCompliances)
        ? object.instanceOsPoliciesCompliances.map((e: any) => InstanceOSPoliciesCompliance.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstanceOSPoliciesCompliancesResponse): unknown {
    const obj: any = {};
    if (message.instanceOsPoliciesCompliances?.length) {
      obj.instanceOsPoliciesCompliances = message.instanceOsPoliciesCompliances.map((e) =>
        InstanceOSPoliciesCompliance.toJSON(e)
      );
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListInstanceOSPoliciesCompliancesResponse>): ListInstanceOSPoliciesCompliancesResponse {
    return ListInstanceOSPoliciesCompliancesResponse.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ListInstanceOSPoliciesCompliancesResponse>,
  ): ListInstanceOSPoliciesCompliancesResponse {
    const message = createBaseListInstanceOSPoliciesCompliancesResponse();
    message.instanceOsPoliciesCompliances =
      object.instanceOsPoliciesCompliances?.map((e) => InstanceOSPoliciesCompliance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

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