// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/chat/v1/action_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Code, codeFromJSON, codeToJSON } from "../../rpc/code.js";

export const protobufPackage = "google.chat.v1";

/**
 * Represents the status for a request to either invoke or submit a
 * [dialog](https://developers.google.com/workspace/chat/dialogs).
 */
export interface ActionStatus {
  /** The status code. */
  statusCode: Code;
  /**
   * The message to send users about the status of their request.
   * If unset, a generic message based on the `status_code` is sent.
   */
  userFacingMessage: string;
}

function createBaseActionStatus(): ActionStatus {
  return { statusCode: 0, userFacingMessage: "" };
}

export const ActionStatus: MessageFns<ActionStatus> = {
  encode(message: ActionStatus, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.userFacingMessage !== "") {
      writer.uint32(18).string(message.userFacingMessage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ActionStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userFacingMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActionStatus {
    return {
      statusCode: isSet(object.statusCode) ? codeFromJSON(object.statusCode) : 0,
      userFacingMessage: isSet(object.userFacingMessage) ? globalThis.String(object.userFacingMessage) : "",
    };
  },

  toJSON(message: ActionStatus): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = codeToJSON(message.statusCode);
    }
    if (message.userFacingMessage !== "") {
      obj.userFacingMessage = message.userFacingMessage;
    }
    return obj;
  },

  create(base?: DeepPartial<ActionStatus>): ActionStatus {
    return ActionStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ActionStatus>): ActionStatus {
    const message = createBaseActionStatus();
    message.statusCode = object.statusCode ?? 0;
    message.userFacingMessage = object.userFacingMessage ?? "";
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
