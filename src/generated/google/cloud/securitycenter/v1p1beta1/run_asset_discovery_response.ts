// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1p1beta1/run_asset_discovery_response.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../protobuf/duration.js";

export const protobufPackage = "google.cloud.securitycenter.v1p1beta1";

/** Response of asset discovery run */
export interface RunAssetDiscoveryResponse {
  /** The state of an asset discovery run. */
  state: RunAssetDiscoveryResponse_State;
  /** The duration between asset discovery run start and end */
  duration: Duration | undefined;
}

/** The state of an asset discovery run. */
export enum RunAssetDiscoveryResponse_State {
  /** STATE_UNSPECIFIED - Asset discovery run state was unspecified. */
  STATE_UNSPECIFIED = 0,
  /** COMPLETED - Asset discovery run completed successfully. */
  COMPLETED = 1,
  /**
   * SUPERSEDED - Asset discovery run was cancelled with tasks still pending, as another
   * run for the same organization was started with a higher priority.
   */
  SUPERSEDED = 2,
  /** TERMINATED - Asset discovery run was killed and terminated. */
  TERMINATED = 3,
  UNRECOGNIZED = -1,
}

export function runAssetDiscoveryResponse_StateFromJSON(object: any): RunAssetDiscoveryResponse_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return RunAssetDiscoveryResponse_State.STATE_UNSPECIFIED;
    case 1:
    case "COMPLETED":
      return RunAssetDiscoveryResponse_State.COMPLETED;
    case 2:
    case "SUPERSEDED":
      return RunAssetDiscoveryResponse_State.SUPERSEDED;
    case 3:
    case "TERMINATED":
      return RunAssetDiscoveryResponse_State.TERMINATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RunAssetDiscoveryResponse_State.UNRECOGNIZED;
  }
}

export function runAssetDiscoveryResponse_StateToJSON(object: RunAssetDiscoveryResponse_State): string {
  switch (object) {
    case RunAssetDiscoveryResponse_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case RunAssetDiscoveryResponse_State.COMPLETED:
      return "COMPLETED";
    case RunAssetDiscoveryResponse_State.SUPERSEDED:
      return "SUPERSEDED";
    case RunAssetDiscoveryResponse_State.TERMINATED:
      return "TERMINATED";
    case RunAssetDiscoveryResponse_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseRunAssetDiscoveryResponse(): RunAssetDiscoveryResponse {
  return { state: 0, duration: undefined };
}

export const RunAssetDiscoveryResponse: MessageFns<RunAssetDiscoveryResponse> = {
  encode(message: RunAssetDiscoveryResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RunAssetDiscoveryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunAssetDiscoveryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RunAssetDiscoveryResponse {
    return {
      state: isSet(object.state) ? runAssetDiscoveryResponse_StateFromJSON(object.state) : 0,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: RunAssetDiscoveryResponse): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = runAssetDiscoveryResponse_StateToJSON(message.state);
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    return obj;
  },

  create(base?: DeepPartial<RunAssetDiscoveryResponse>): RunAssetDiscoveryResponse {
    return RunAssetDiscoveryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RunAssetDiscoveryResponse>): RunAssetDiscoveryResponse {
    const message = createBaseRunAssetDiscoveryResponse();
    message.state = object.state ?? 0;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
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
