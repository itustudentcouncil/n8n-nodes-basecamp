// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/local_services_lead_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Status } from "../../../../rpc/status.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [LocalServicesLeadService.AppendLeadConversation][google.ads.googleads.v17.services.LocalServicesLeadService.AppendLeadConversation].
 */
export interface AppendLeadConversationRequest {
  /**
   * Required. The Id of the customer which owns the leads onto which the
   * conversations will be appended.
   */
  customerId: string;
  /** Required. Conversations that are being appended. */
  conversations: Conversation[];
}

/**
 * Response message for
 * [LocalServicesLeadService.AppendLeadConversation][google.ads.googleads.v17.services.LocalServicesLeadService.AppendLeadConversation].
 */
export interface AppendLeadConversationResponse {
  /** Required. List of append conversation operation results. */
  responses: ConversationOrError[];
}

/** Details of the conversation that needs to be appended. */
export interface Conversation {
  /**
   * Required. The resource name of the local services lead that the
   * conversation should be applied to.
   */
  localServicesLead: string;
  /** Required. Text message that user wanted to append to lead. */
  text: string;
}

/** Result of the append conversation operation. */
export interface ConversationOrError {
  /** The resource name of the appended local services lead conversation. */
  localServicesLeadConversation?:
    | string
    | undefined;
  /** Failure status when the request could not be processed. */
  partialFailureError?: Status | undefined;
}

function createBaseAppendLeadConversationRequest(): AppendLeadConversationRequest {
  return { customerId: "", conversations: [] };
}

export const AppendLeadConversationRequest: MessageFns<AppendLeadConversationRequest> = {
  encode(message: AppendLeadConversationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.conversations) {
      Conversation.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AppendLeadConversationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppendLeadConversationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.conversations.push(Conversation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppendLeadConversationRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      conversations: globalThis.Array.isArray(object?.conversations)
        ? object.conversations.map((e: any) => Conversation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppendLeadConversationRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.conversations?.length) {
      obj.conversations = message.conversations.map((e) => Conversation.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AppendLeadConversationRequest>): AppendLeadConversationRequest {
    return AppendLeadConversationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppendLeadConversationRequest>): AppendLeadConversationRequest {
    const message = createBaseAppendLeadConversationRequest();
    message.customerId = object.customerId ?? "";
    message.conversations = object.conversations?.map((e) => Conversation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppendLeadConversationResponse(): AppendLeadConversationResponse {
  return { responses: [] };
}

export const AppendLeadConversationResponse: MessageFns<AppendLeadConversationResponse> = {
  encode(message: AppendLeadConversationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.responses) {
      ConversationOrError.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AppendLeadConversationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppendLeadConversationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(ConversationOrError.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppendLeadConversationResponse {
    return {
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => ConversationOrError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppendLeadConversationResponse): unknown {
    const obj: any = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => ConversationOrError.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AppendLeadConversationResponse>): AppendLeadConversationResponse {
    return AppendLeadConversationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppendLeadConversationResponse>): AppendLeadConversationResponse {
    const message = createBaseAppendLeadConversationResponse();
    message.responses = object.responses?.map((e) => ConversationOrError.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConversation(): Conversation {
  return { localServicesLead: "", text: "" };
}

export const Conversation: MessageFns<Conversation> = {
  encode(message: Conversation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.localServicesLead !== "") {
      writer.uint32(10).string(message.localServicesLead);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Conversation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.localServicesLead = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Conversation {
    return {
      localServicesLead: isSet(object.localServicesLead) ? globalThis.String(object.localServicesLead) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
    };
  },

  toJSON(message: Conversation): unknown {
    const obj: any = {};
    if (message.localServicesLead !== "") {
      obj.localServicesLead = message.localServicesLead;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create(base?: DeepPartial<Conversation>): Conversation {
    return Conversation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Conversation>): Conversation {
    const message = createBaseConversation();
    message.localServicesLead = object.localServicesLead ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseConversationOrError(): ConversationOrError {
  return { localServicesLeadConversation: undefined, partialFailureError: undefined };
}

export const ConversationOrError: MessageFns<ConversationOrError> = {
  encode(message: ConversationOrError, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.localServicesLeadConversation !== undefined) {
      writer.uint32(10).string(message.localServicesLeadConversation);
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversationOrError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationOrError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.localServicesLeadConversation = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.partialFailureError = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationOrError {
    return {
      localServicesLeadConversation: isSet(object.localServicesLeadConversation)
        ? globalThis.String(object.localServicesLeadConversation)
        : undefined,
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: ConversationOrError): unknown {
    const obj: any = {};
    if (message.localServicesLeadConversation !== undefined) {
      obj.localServicesLeadConversation = message.localServicesLeadConversation;
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationOrError>): ConversationOrError {
    return ConversationOrError.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConversationOrError>): ConversationOrError {
    const message = createBaseConversationOrError();
    message.localServicesLeadConversation = object.localServicesLeadConversation ?? undefined;
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

/** This service allows management of LocalServicesLead resources. */
export type LocalServicesLeadServiceDefinition = typeof LocalServicesLeadServiceDefinition;
export const LocalServicesLeadServiceDefinition = {
  name: "LocalServicesLeadService",
  fullName: "google.ads.googleads.v17.services.LocalServicesLeadService",
  methods: {
    /**
     * RPC to append Local Services Lead Conversation resources to Local Services
     * Lead resources.
     */
    appendLeadConversation: {
      name: "AppendLeadConversation",
      requestType: AppendLeadConversationRequest,
      requestStream: false,
      responseType: AppendLeadConversationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              25,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              44,
              99,
              111,
              110,
              118,
              101,
              114,
              115,
              97,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
          578365826: [
            Buffer.from([
              72,
              58,
              1,
              42,
              34,
              67,
              47,
              118,
              49,
              55,
              47,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              115,
              47,
              123,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              61,
              42,
              125,
              47,
              108,
              111,
              99,
              97,
              108,
              83,
              101,
              114,
              118,
              105,
              99,
              101,
              115,
              58,
              97,
              112,
              112,
              101,
              110,
              100,
              76,
              101,
              97,
              100,
              67,
              111,
              110,
              118,
              101,
              114,
              115,
              97,
              116,
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

export interface LocalServicesLeadServiceImplementation<CallContextExt = {}> {
  /**
   * RPC to append Local Services Lead Conversation resources to Local Services
   * Lead resources.
   */
  appendLeadConversation(
    request: AppendLeadConversationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AppendLeadConversationResponse>>;
}

export interface LocalServicesLeadServiceClient<CallOptionsExt = {}> {
  /**
   * RPC to append Local Services Lead Conversation resources to Local Services
   * Lead resources.
   */
  appendLeadConversation(
    request: DeepPartial<AppendLeadConversationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AppendLeadConversationResponse>;
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
